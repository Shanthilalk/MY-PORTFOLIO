document.addEventListener('DOMContentLoaded', () => {
    const sidenav = document.querySelector('.side-nav');
    const btnnav = document.querySelector('#btn-nav');
    const overlayscreen = document.querySelector('.nav-overlay');
    const navclosebtn = document.querySelector('.nav-close-btn');

    btnnav.addEventListener('click', () => {
        sidenav.classList.add('open');
    });

    overlayscreen.addEventListener('click', () => {
        sidenav.classList.remove('open');
    });


    navclosebtn.addEventListener('click', () => {
        sidenav.classList.remove('open');
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.link');
    const overlayscreen = document.querySelector('.nav-overlay');
    const sidenav = document.querySelector('.side-nav');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            const currentActive = document.querySelector('.link.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            this.classList.add('active');
        });
        overlayscreen.addEventListener('click', () => {
            link.classList.remove('active');
        });
        link.addEventListener('click', () => {
            sidenav.classList.remove('open');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sidenavtravbtn = document.querySelectorAll('.side-nav-dev-btn'); // Double check if it's -trav- or -dev- based on your naming preference!

    sidenavtravbtn.forEach(btn => { // <--- Changed parameter name to 'btn'
        btn.addEventListener('click', function (event) { // <--- Used 'btn' here instead of 'link'
            const currentActive = document.querySelector('.side-nav-trav-btn.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            this.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Try to find the form using a generic form selector so ID issues don't break it
    const form = document.querySelector('form[action*="web3forms.com"]');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevents the page from reloading

            // 2. Gather the data to send to Web3Forms
            const formData = new FormData(form);

            // 3. FORCE CLEAR everything instantly so it looks professional right away
            // This manually targets every text input and textarea inside the form
            form.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach(input => {
                input.value = ''; 
            });

            // 4. Send the data in the background
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // You can add a professional notification layout here later if you want!
                alert('Message sent successfully!');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Something went wrong. Please try again.');
            });
        });
    }
});