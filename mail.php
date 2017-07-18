<?php /*error_reporting(0);*/
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['email'])&&$_POST['email']!="")){ 

	$mail = "potatodzen@gmail.com";
	$message = "<table width=640 cellpadding=0 cellspacing=0 border=0>
<tr><td>
	<h2>Здравствуйте! На сайте сработала форма:</h2>
	<hr>
	<p><strong>Имя:</strong> ".$_POST['name']."</p>
	<p><strong>Email:</strong> ".$_POST['email']."</p>
	<hr>
</td></tr>
</table>";
	$subject="Сообщение с сайта";
	mail($mail, $subject, $message, "Content-type: text/html; charset=utf-8 \r\n");
}
?>