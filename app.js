//This will make the contact form disappear when you click 'submit' and display a message where the form was.

$( "#contactSubmit" ).click(function() {
  $( "form" ).hide();
   $( "#submitMsg" ).html("<h2>Thanks for reaching out! We'll be in touch soon.</h2>");
});