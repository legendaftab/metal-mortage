function showHomeSection() {
    hideForms();
    document.getElementById('homeSection').style.display = 'block';
    history.pushState(null, null, '/home');
}

function showAboutSection() {
    hideForms();
    document.getElementById('aboutSection').style.display = 'block';
    history.pushState(null, null, '/about');
}

function showServicesSection() {
    hideForms();
    document.getElementById('servicesSection').style.display = 'block';
    history.pushState(null, null, '/services');
}

function showVideoSection() {
    hideForms();
    document.getElementById('videoSection').style.display = 'block';
    document.getElementById('youtubeVideo').src = "https://www.youtube.com/embed/WE_EgwFRils?si=0b9zW-glDwLNIRrj";
    history.pushState(null, null, '/video');
}

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display = (dropdown.style.display === "none" || dropdown.style.display === "")
        ? "block"
        : "none";
}

function showCallbackForm() {
    hideForms();
    document.getElementById('callbackForm').style.display = 'block';
}

function showContactInfo() {
    hideForms();
    document.getElementById('contactInfo').style.display = 'block';
    history.pushState(null, null, '/contact');
}

function hideForms() {
    document.getElementById('callbackForm').style.display = 'none';
    document.getElementById('contactInfo').style.display = 'none';
    document.getElementById('servicesSection').style.display = 'none';
    document.getElementById('videoSection').style.display = 'none';
    document.getElementById('teamSection').style.display = 'none';
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('aboutSection').style.display = 'none';
    document.getElementById('youtubeVideo').src = "";
    document.getElementById('calculatorsDropdown').style.display = 'none';
    document.getElementById('documentsDropdown').style.display = 'none';
}


function showTeamSection() {
    hideForms();
    document.getElementById('teamSection').style.display = 'block';
    history.pushState(null, null, '/team');
}
function showImages(dotNumber) {
    const imageContainers = document.querySelectorAll('.lender-logos');
    const dots = document.querySelectorAll('.dot');
    imageContainers.forEach((container) => container.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));
    document.getElementById(`images-${dotNumber}`).classList.add('active');
    dots[dotNumber - 1].classList.add('active');
}

function openApplyNowPage() {
    window.open('apply.html', '_blank');
}

function showApplicationForm() {
    // Hide any other visible sections
    document.getElementById('applicationForm').style.display = 'block';
    window.scrollTo({
        top: document.getElementById('applicationForm').offsetTop,
        behavior: 'smooth'
    });
}


function showApplicationForm() {
    // Hide the expert section
    const expertSection = document.querySelector('.expert-section');
    expertSection.style.display = 'none';

    // Show the application form
    const applicationForm = document.getElementById('applicationForm');
    applicationForm.style.display = 'block';
}
