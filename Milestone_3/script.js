var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var fathername = document.getElementById('fathername').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var profile = document.getElementById('profile').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var certification = document.getElementById('certification').value;
    var skills = document.getElementById('skills').value;
    var address = document.getElementById('address').value;
    var resumeHTML = "<h2><b>RESUME</b></h2>\n    <p>Name: ".concat(name, "</p>\n    <p>Father Name: ").concat(fathername, "</p>\n    <p>Email: ").concat(email, "</p>\n    <p>Phone: ").concat(phone, "</p>\n\n    <h3>Resume Profile:</h3>\n    <p>").concat(profile, "</p>\n\n    <h3>Education:</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience:</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Certification:</h3>\n    <p>").concat(certification, "</p>\n\n    <h3>Skills:</h3>\n    <p>").concat(skills, "</p>\n\n    <h3>Address:</h3>\n    <p>").concat(address, "</p>");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
});
