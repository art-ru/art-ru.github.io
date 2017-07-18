$(document).ready(function() {
	//E-mail Ajax Send
	$("#reg-id").submit(function() { //Change ID
		var form_data = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "mail.php", //Change PHP filename
			data: form_data,
		}).done(function() {
			alert("Thank you!");
		});
		return false;
	});
});