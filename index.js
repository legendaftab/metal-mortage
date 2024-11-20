
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

function showCallbackForm() {
    document.getElementById('callbackForm').style.display = 'block';
    document.getElementById('contactInfo').style.display = 'none';
    document.getElementById('calculatorsDropdown').style.display = 'none';
}

// Function to show the contact information and hide everything else
function showContactInfo() {
    document.getElementById('callbackForm').style.display = 'none';
    document.getElementById('contactInfo').style.display = 'block';
    document.getElementById('calculatorsDropdown').style.display = 'none';
}

// Function to hide all forms or dropdowns
function hideForms() {
    document.getElementById('callbackForm').style.display = 'none';
    document.getElementById('contactInfo').style.display = 'none';
    document.getElementById('calculatorsDropdown').style.display = 'none';
}

function showImages(dotNumber) {
    // Get all image containers
    const imageContainers = document.querySelectorAll('.lender-logos');

    // Get all dots
    const dots = document.querySelectorAll('.dot');

    // Hide all image containers and remove 'active' class from all dots
    imageContainers.forEach((container) => container.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));

    // Show the selected image container and activate the clicked dot
    document.getElementById(`images-${dotNumber}`).classList.add('active');
    dots[dotNumber - 1].classList.add('active');
  }