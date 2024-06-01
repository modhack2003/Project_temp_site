
$(document).ready(function() {
    // Change project image based on list item click
    $('.list-group-item').on('click', function() {
        var newImage = $(this).data('image');
    
        $('#project-image').attr('src', newImage);
    });

    // Show pop-up form on Contact Us button click
    $('#contact-us-button').on('click', function() {
        $('#contactUsModal').modal('show');
    });

    // Submit form to Getform.io
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            url: 'https://getform.io/f/paoxdekb', 
            method: 'POST',
            data: formData,
            success: function() {
                alert('Form submitted successfully!');
                $('#contactUsModal').modal('hide');
                $('#contact-form')[0].reset();
            },
            error: function() {
                alert('There was an error submitting the form. Please try again.');
            }
        });
    });
});
