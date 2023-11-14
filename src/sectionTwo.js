export default function sectionTwo() {
    const section = document.createElement('section');
    section.setAttribute('id', 'sectionTwo');
    const main = document.getElementById('main');
    main.appendChild(section);
    
    section.style.backgroundColor = "#1F305E";
    section.style.height = "23rem";
    section.style.backgroundPosition = "center";
    section.style.display = "flex";
    section.style.flexDirection = "column";
    section.style.justifyContent = "center";
    section.style.gap = "50px";
    section.style.padding = "0 30%";

    //create text
    const paragraph = document.createElement('p');
    section.appendChild(paragraph);
    paragraph.textContent = "Located in Gowanus, Brooklyn, Vance serves Authentic tapas from Catalonia in a modern industrial space. We also serve beer, wine and spirits."
    paragraph.style.fontSize = "40px";
    paragraph.style.color = "white";
    paragraph.style.textAlign = "center";

    //create button
    const btn = document.createElement('button');
    section.appendChild(btn);
    btn.textContent = "Make a Reservation";
    btn.style.width = "200px"
    btn.style.height = "50px";
    btn.style.marginLeft = "170px";
}