function showSection(sectionId) {
    // Hide all sections
    var sections = document.getElementsByClassName('hidden-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Show the selected section
    var selectedSection = document.getElementById(sectionId + 'Section');
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
    // Funksioni për t'u zhvendosur në faqen "Home"
function goToHome() {
    window.location.href = "index.html";
}

// Funksioni për t'u zhvendosur në faqen "About Me"
function goToAboutMe() {
    window.location.href = "aboutme.html";
}

// Funksioni për t'u zhvendosur në faqen "Projects"
function goToProjects() {
    window.location.href = "projects.html";
}

// Funksioni për t'u zhvendosur në faqen "Contact"
function goToContact() {
    window.location.href = "contact.html";
}

// Funksioni për t'u zhvendosur në faqen "Services"
function goToServices() {
    window.location.href = "services.html";
}

// Mund të shtoni edhe funksione të tjera në vijim sipas nevojave

}
