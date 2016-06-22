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

//ABOUT US PAGE

//Change quotes 

    var allQuotes = $("blockquotes");
    var currentQuotes = 0;

    function changeQuotes(){

      $(allQuotes [currentQuotes]).fadeOut(200, function(){

        if (currentQuotes == allQuotes.length - 1) {
            currentQuotes = 0;
        } else {
            currentQuotes++;
        }

        $(allQuotes [currentQuotes]).fadeIn(200);
        
        });

        

//Sets timing for quote change

    var quoteTimer = setInterval(changeQuotes, 3000);

    });

