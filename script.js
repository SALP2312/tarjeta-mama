document.addEventListener('DOMContentLoaded', function() {
    const photoUpload = document.getElementById('photoUpload');
    const previewImage = document.getElementById('previewImage');
    const photoFrame = document.getElementById('photoFrame');
    const envelope = document.getElementById('envelope');
    const cardContainer = document.getElementById('cardContainer');

    // Envelope interaction
    envelope.addEventListener('click', function() {
        envelope.classList.add('open');
    });

    // Photo upload functionality
    photoUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                previewImage.src = e.target.result;
                previewImage.style.opacity = '1';
            }
            
            reader.readAsDataURL(file);
        }
    });

    // Add touch support for mobile devices
    photoFrame.addEventListener('touchstart', function(e) {
        e.stopPropagation(); // Prevent envelope from opening when touching photo
        photoUpload.click();
    });

    // Prevent card interaction from closing envelope
    cardContainer.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}); 