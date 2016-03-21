<?php
	$string = '61PPN7g8BSKFptOz3q1wtRQ2vBip3cRM/A8HW1m+DYT+KSuYMR9zE4QGUKfYemTysOvyIUL2jx0DggRs1E6TSkLCSUqLH5AVa8A9h7yfUX+pavt12vv3DLyDkATJ9Rp3R/Wk8w+UJOA5tK9ylLz0Nk87QHm8zFZuvVj/7pmlQ96iUOa+rFDKbYCKp3jlxBFbrlEo1Ug0P3Dnt+L0i5icHOZ+NTH3dR28g0kkBOpwzjDWIRxtG2Z1T/OWBR7VN7aXuuf1xazoeLLbePvqnjIf0YFwVOFuxGvZvnE3gl2DuankyusPu7YRWHFOBa7NorLxYC+86q7OPT483aarIrxpPw==';
	echo $string;
	$key = 'VN@510';
	$iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_ECB);
	$iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);
	$decrypt = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, base64_decode($string), MCRYPT_MODE_ECB);
	print_r(trim($decrypt)); exit;
?>