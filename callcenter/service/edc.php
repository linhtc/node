<?php

$something = 'I miss the taste of a sweeter life!';
$secretKey = 'tplus@!zKaC$3<!?';

$encrypt = urlencode(base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $secretKey, $something, MCRYPT_MODE_ECB, mcrypt_create_iv(mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_ECB), MCRYPT_RAND))));
$decrypt = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $secretKey, base64_decode(urldecode($encrypt)), MCRYPT_MODE_ECB);

echo "\n<br />Greeting is: "; print_r($something); echo "\n<br />";
echo "\n<br />Encrypt is: "; print_r($encrypt); echo "\n<br />";
echo "\n<br />Decrypt is: "; print_r($decrypt); echo "\n<br />";
exit;

?>
