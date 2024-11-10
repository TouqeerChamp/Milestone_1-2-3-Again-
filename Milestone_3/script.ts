const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fathername = (document.getElementById('fathername') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const profile = (document.getElementById('profile') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const certification = (document.getElementById('certification') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const address = (document.getElementById('address') as HTMLTextAreaElement).value;

    const resumeHTML = 
    `<h2><b>RESUME</b></h2>
    <p>Name: ${name}</p>
    <p>Father Name: ${fathername}</p>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>

    <h3>Resume Profile:</h3>
    <p>${profile}</p>

    <h3>Education:</h3>
    <p>${education}</p>

    <h3>Experience:</h3>
    <p>${experience}</p>

    <h3>Certification:</h3>
    <p>${certification}</p>

    <h3>Skills:</h3>
    <p>${skills}</p>

    <h3>Address:</h3>
    <p>${address}</p>`;
    
    if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
    }
});