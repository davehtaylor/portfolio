<?php 

require 'vendor/autoload.php';

use Mailgun\Mailgun;

$json = file_get_contents("/etc/webconfigs/dave/config.json");
$config = json_decode($json, true);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['recaptcha_response'])) {

    // Build POST request:
    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_secret = $config["recaptcha_secret"];
    $recaptcha_response = $_POST['recaptcha_response'];

    // Make and decode POST request:
    $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
    $recaptcha = json_decode($recaptcha);

    // Take action based on the score returned:
    if ($recaptcha->score >= 0.5) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $to = 'Dave Taylor <davehtaylor@me.com>';
        $from = "Dave's Website <davehtaylor@me.com>";
        $text = 'Name: ' . $name . "\r\n" . 'Email: ' . $email . "\r\n" . 'Message: ' . $message;

        $mgClient = Mailgun::create($config["mailgun_secret"], 'https://api.mailgun.net/v3/');
        $domain = "davehtaylor.com";
        $params = array(
          'from'    => $from,
          'to'      => $to,
          'subject' => 'Contact Form Submission from Website',
          'text'    => $text,
        );

        $mgClient->messages()->send($domain, $params);
    }  else {
        echo "Message could not be sent. CAPCHA Failed";
    }
}   

?>