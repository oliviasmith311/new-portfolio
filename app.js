const aboutMeButton = document.querySelector('.navBar_about');
const aboutAnchor = document.querySelector('.about');
const pic1Anchor = document.querySelector('.pic1');

const pageOne = document.querySelector('.pageOne');
const navBox = document.querySelector('.navBox');

const skillsAnchor = document.querySelector('.skills');

const homeButton = document.querySelector('.navBar_home');


const aboutMeAppear = () => {
    clear(aboutAnchor);
    clear(skillsAnchor);
    clear(pic1Anchor);
    clear(contactAnchor);
    clear(projectsAnchor);
    pageOne.classList.remove('pageOne');
    pageOne.classList.add('pageOneHidden');
    navBox.classList.remove('navBox');
    navBox.classList.add('navBoxSmall');
    const aboutMe = document.createElement('div');
    aboutMe.innerText = 'Hi! My name is Olivia Smith. I\’m a Columbus native who loves my family, music, theatre, and laughing. I\’m the mother of two spooky black cats, Darla and Little (who is not actually little at all and needs to go on a diet). In my free time, I enjoy cross stitching, collecting vinyl albums, and performing standup comedy. I have always had an interest in tech, which I started to pursue when I joined We Can Code IT in January of 2020. My goals are to create as many cool things as possible, make people laugh, and leave the world a little bit better than I found it.'
    aboutAnchor.appendChild(aboutMe);
    const pic1 = document.createElement('img');
    pic1.src = 'images/pic.jpg';
    pic1Anchor.appendChild(pic1);
    const skills = document.createElement('div');
    skills.innerText = 'Skills:\nJava • Spring • Hibernate • JPA • JavaScript • MVC • HTML • CSS • Flexbox • Grid • TDD • Agile (Scrum) • Object Oriented Programming (OOP) • AJAX • JSON • Restful APIs • Responsive Design / Mobile • Structured Query Language (SQL) • Relational Databases • Source Control / Git'
    skillsAnchor.appendChild(skills);
}

const clear = (chosenElement) => {
    while(chosenElement.firstChild){
        chosenElement.removeChild(chosenElement.firstChild);
    }   
}

aboutMeButton.addEventListener('click', aboutMeAppear);

const contactMeButton = document.querySelector('.navBar_contact');
const contactAnchor = document.querySelector('.contact');

const contactMeAppear = () => {
    clear(aboutAnchor);
    clear(skillsAnchor);
    clear(pic1Anchor);
    clear(contactAnchor);
    clear(projectsAnchor);
    pageOne.classList.remove('pageOne');
    pageOne.classList.add('pageOneHidden');
    navBox.classList.remove('navBox');
    navBox.classList.add('navBoxSmall');

    const linkedin = document.createElement('img');
    linkedin.src = 'images/linkedinlogo.png';

    linkedin.addEventListener('click', () => {
        location.href="https://www.linkedin.com/in/olivia-l-smith/";
    })

    contactAnchor.appendChild(linkedin);
    const github = document.createElement('img');
    github.src = 'images/githublogo.png';

    github.addEventListener('click', () => {
        location.href="https://github.com/oliviasmith311";
    })

    contactAnchor.appendChild(github);
    const email = document.createElement('img');
    email.src = 'images/gmaillogo.png';

    email.addEventListener('click', () => {
        location.href = "mailto:Olivia.Smith.31196@gmail.com?subject=";

    })

    contactAnchor.appendChild(email);
}

contactMeButton.addEventListener('click', contactMeAppear);


const projectsButton = document.querySelector('.navBar_projects');
const projectsAnchor = document.querySelector('.projects');

const projectsAppear = () => {
    clear(aboutAnchor);
    clear(skillsAnchor);
    clear(pic1Anchor);
    clear(contactAnchor);
    clear(projectsAnchor);
    pageOne.classList.remove('pageOne');
    pageOne.classList.add('pageOneHidden');
    navBox.classList.remove('navBox');
    navBox.classList.add('navBoxSmall');
    const title = document.createElement('div');
    title.innerText = 'Click on a project to learn more!'
    projectsAnchor.appendChild(title);
    title.classList.add('title');
    const blog = document.createElement('div');
    blog.innerText = 'Shrimp Heaven Now \n(Full-Stack Blog)'
    projectsAnchor.appendChild(blog);
    const click = document.createElement('div');
    click.innerText = 'ShrimpClick'
    projectsAnchor.appendChild(click);
    const database = document.createElement('div');
    database.innerText = 'Music Database'
    projectsAnchor.appendChild(database);
    const esl = document.createElement('div');
    esl.innerText = 'Our ESL Classroom'
    projectsAnchor.appendChild(esl);
}

projectsButton.addEventListener('click', projectsAppear);


homeButton.addEventListener('click', () => {
    clear(aboutAnchor);
    clear(skillsAnchor);
    clear(pic1Anchor);
    clear(contactAnchor);
    clear(projectsAnchor);
    navBox.classList.remove('navBoxSmall');
    navBox.classList.add('navBox');
    pageOne.classList.remove('pageOneHidden');
    pageOne.classList.add('pageOne');
  
})