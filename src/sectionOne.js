export default function sectionOne() {
    const section = document.createElement('section');
    section.setAttribute('id', 'sectionOne');
    const main = document.getElementById('main');
    main.appendChild(section);

    section.style.backgroundImage = "url('./img/background.jpg')"
    section.style.backgroundImage = "no-repeat";
    section.style.backgroundPosition = "center";
    section.style.height = "32rem";

    const linksArray = ["Our Story", "Menu", "Photos", "Reservations"];
    const container = document.createElement('div');
    section.appendChild(container);

    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.justifyContent = "start";
    container.style.gap = "20px";
    container.style.padding = "130px 240px";

    for (let i = 0; i < linksArray.length; i++) {
        const links = document.createElement('a');
        container.appendChild(links);
        links.textContent = linksArray[i];
        links.href = "#";
        links.style.textDecoration = "underline";
        links.style.color = "white";
        links.style.fontSize = "65px";
    }
}