export default function sectionFour() {
    const section = document.createElement('section');
    section.setAttribute('id', 'sectionFour');
    const main = document.getElementById('main');
    main.appendChild(section);

    section.style.backgroundImage = "url('./img/sectionFour.jpg')";
    section.style.backgroundImage = "no-repeat";
    section.style.backgroundPosition = "center"; 
    section.style.height = "90vh";
    section.style.marginBottom = "35px";
}