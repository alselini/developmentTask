$(document).ready(function() {
  $('#contact-form').submit(function(e) {
    e.preventDefault(); 

      // Show loader
      $('#loader').show();
   

      var params = {
          name: $('#name').val(),
          email: $('#email').val(),
          message: $('#message').val()
      };

      const serviceID = 'service_bjof0bu';
      const templateID = 'template_8nxw5hr';

      emailjs.send(serviceID, templateID, params)
          .then(res => {
              // Clear form fields after sending
              $('#name').val('');
              $('#email').val('');
              $('#message').val('');

              console.log(res);
              $('#loader').hide();
              $('#sent-message').fadeIn();
     

              // Hide success message after 3 seconds
              setTimeout(function() {
                  $('#sent-message').fadeOut();
              }, 2000);
          })
          .catch(function(err) {
              console.log(err);
              $('#loader').hide();
              $('#error-message').fadeIn();
              // Hide error message after 3 seconds
              setTimeout(function() {
                  $('#error-message').fadeOut();
              }, 3000);
          });
        })});




$(document).ready(function() {
  const arrow = $('.arrow');

  arrow.click(function() {
    const mainSection = $('.main').first();
    const topOffset = mainSection.offset().top;

    const offset = 80;

    // Scroll to main section
    $('html, body').animate(
      {
        scrollTop: topOffset - offset 
      },
      'slow'
    );
  });
});


