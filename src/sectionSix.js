export default function sectionSix() {
    const section = document.createElement('section');
    section.setAttribute('id', 'sectionSix');
    const main = document.getElementById('main');
    main.appendChild(section);

    section.style.height = "100vh";
    section.style.backgroundColor = "#1F305E";
    section.style.height = "23rem";
    section.style.backgroundPosition = "center";
    section.style.color = "white";

    //address
    const div1 = document.createElement('div');
    section.appendChild(div1);
    div1.style.padding = "50px 0";

    const p1 = document.createElement('p');
    div1.appendChild(p1);
    p1.textContent = "123 Demo Street";
    p1.style.textAlign = "center";
    
    const p2 = document.createElement('p');
    div1.appendChild(p2);
    p2.textContent = "Brooklyn, New York 12345";
    p2.style.textAlign = "center";

    p1.style.fontSize = "40px";
    p2.style.fontSize = "40px";

    div1.style.display = "flex";
    div1.style.flexDirection = "column";
    div1.style.justifyContent = "center";
    div1.style.gap = "10px";

    //create button
    const btn = document.createElement('button');
    div1.appendChild(btn);
    btn.textContent = "Get Directions";
    btn.style.width = "200px"
    btn.style.height = "50px";
    btn.style.margin = "30px auto";
    btn.style.marginBottom = "0px";

    const divBox = document.createElement('div');
    section.appendChild(divBox);
    divBox.style.display = "flex";
    divBox.style.flexDirection = "row";
    divBox.style.justifyContent = "space-evenly";

    //hours left side
    const div2 = document.createElement('div');
    divBox.appendChild(div2);
    div2.style.gap = "10px";

    const p3 = document.createElement('p');
    div2.appendChild(p3);
    p3.textContent = "Monday–Thursday";
    const p4 = document.createElement('p');
    div2.appendChild(p4);
    p4.textContent = "12pm–10pm";
    p3.style.fontSize = "30px";
    p4.style.fontSize = "30px";

    //hours right side
    const div3 = document.createElement('div');
    divBox.appendChild(div3);

    const p5 = document.createElement('p');
    div3.appendChild(p5);
    p5.textContent = "Friday–Sunday";
    const p6 = document.createElement('p');
    div3.appendChild(p6);
    p6.textContent = "12pm–11pm";
    p5.style.fontSize = "30px";
    p6.style.fontSize = "30px";
}