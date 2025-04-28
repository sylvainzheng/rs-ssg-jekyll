<?php

$fname = filter_input("fname", FILTER_SANITIZE_SPECIAL_CHARS);
$lname = filter_input("lname", FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_input("email", FILTER_VALIDATE_EMAIL);
$message = filter_input("message", FILTER_SANITIZE_SPECIAL_CHARS);

if ($_POST && !empty($fname) && !empty($lname) && !empty($email) && !empty($message)) {
    header("https://formspree.io/f/mrbpvbja");
}
else {
    header("nav.html");
}

?>