document.addEventListener('DOMContentLoaded', function() {
    // Initialize Flatpickr with animation
    flatpickr('#regDob', {
        dateFormat: 'Y-m-d',
        allowInput: true,
        onReady: function() {
            this.input.classList.add('flatpickr-input');
        }
    });

    // Form submission handling
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Redirect to the filter page
        window.location.href = 'filter.html'; // Change this to your actual filter page URL
    });
});
