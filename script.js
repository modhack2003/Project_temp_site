document.addEventListener('DOMContentLoaded', function () {
    const contactUsModalEl = document.getElementById('contactUsModal');
    const contactUsModal = new bootstrap.Modal(contactUsModalEl);

    document.getElementById('contact-us-button').addEventListener('click', function () {
        contactUsModal.show();
    });

    contactUsModalEl.addEventListener('hidden.bs.modal', function () {
        
        document.querySelectorAll('.modal-backdrop').forEach(function (backdrop) {
            backdrop.remove();
        });
    });

    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        var formData = new FormData(this);
        fetch('https://getform.io/f/paoxdekb', {
            method: 'POST',
            body: formData
        })
        .then(function () {
            contactUsModal.hide();
            document.getElementById('contact-form').reset();

            var toastEl = document.getElementById('formToast');
            var toast = new bootstrap.Toast(toastEl);
            toast.show();
        })
        .catch(function () {
            alert('There was an error submitting the form. Please try again.');
        });
    });
});
document.getElementById('contact-us-button').addEventListener('click', () => {
    const contactUsModal = new bootstrap.Modal(document.getElementById('contactUsModal'));
    contactUsModal.show();
});

document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".list-group-item");
    const projectImage = document.getElementById("project-image");

    listItems.forEach(function (item) {
        item.addEventListener("click", function () {
            const prevActiveItem = document.querySelector('.list-group-item.active');
            if (prevActiveItem) {
                prevActiveItem.style.backgroundColor = '';
                prevActiveItem.style.color = '';
                prevActiveItem.classList.remove('active');
            }

            this.style.backgroundColor = '#FF3147';
            this.style.color = 'white';
            this.classList.add('active');

            const imagePath = this.getAttribute("data-image");
            projectImage.setAttribute("src", imagePath);
        });
    });
});
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}