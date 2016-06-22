$(document).ready(function() {
​
  var $form = $('.form');
  var $emailInput = $('.form-email-input');
  var $errorBox = $(".error-box");
  var invalidEmailMessage = "Only .com emails are accepted";
  
  $form.on('submit', function(event) {
    // Prevents the default behaviour, in our case: the page refereshing
    event.preventDefault(); 
​
    // Gets the input field value
    var email = $emailInput.val(); 
    var isValidEmail = email.includes('.com');
​
    if (isValidEmail) {
      // ... submit the form ...
      return;
    }
​
	$errorBox
		.addClass('error-show')
		.text(invalidEmailMessage);
​
  });
​
      //on focus get rid of error message
    $emailInput.on("focus", function(){
    	if ($errorBox.hasClass('error-show')) {
    		$errorBox.removeClass('error-show')
    	}
    	
    	if ($errorBox.text() !== '') {
    	$errorBox.text('');
    	}
    });

    //function isEmailValid(email) {
      //if (email) {};
});


    });

