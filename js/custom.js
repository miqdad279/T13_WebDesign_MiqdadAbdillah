$('#send').click(function() {
    // get content
    var name = $('#name').val();
    var subject = $('#subject').val();
    var message = $('#message').val();

    // set content
    $('#respon').text('Thank you for contacting us. Your message has been sent.');
    $('#getname').text('Your Name : ' + name);
    $('#getsubject').text('Your Subject : ' + subject);
    $('#getmessage').text('Your Message : ' + message);
    }); 