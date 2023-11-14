export default function sectionSeven() {
    const section = document.createElement('section');
    section.setAttribute('id', 'sectionSeven');
    const main = document.getElementById('main');
    main.appendChild(section);

    section.style.backgroundImage = "url(./img/sectionSeven.jpg)";
    section.style.height = "27rem";
    section.style.backgroundImage = "no-repeat";
    section.style.backgroundPosition = "center"; 

    const container = document.createElement('div');
    section.appendChild(container);
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "30px";

    const div1 = document.createElement('div');
    container.appendChild(div1);
    div1.style.display = "flex";
    div1.style.flexDirection = "column";
    div1.style.justifyContent = "center";
    div1.style.padding = "3rem 20rem";

    const p1 = document.createElement('p');
    div1.appendChild(p1);
    p1.textContent = "Subscribe to Our Newsletter";
    p1.style.color = "white";
    p1.style.fontSize = "45px";
    p1.style.textAlign = "center";

    const p2 = document.createElement('p');
    div1.appendChild(p2);
    p2.textContent = "Sign up to receive news and updates.";
    p2.style.color = "white";
    p2.style.fontSize = "25px";
    p2.style.textAlign = "center";

    const div2 = document.createElement('div');
    container.appendChild(div2);

    const input = document.createElement('input');
    div2.appendChild(input);
    input.style.height = "47px";
    input.style.width = "300px";
    input.style.border = "1px solid black";
    input.type = "email";
    input.pattern = ".+@example\.com";
    input.placeholder = "Enter your email";
    input.style.padding = "0 20px";

    const btn = document.createElement('button');
    div2.appendChild(btn)
    btn.textContent = "Sign Up";
    btn.style.width = "200px"
    btn.style.height = "50px";
    btn.style.border = "1px solid black";

    div2.style.display = "flex";
    div2.style.flexDirection = "row";
    div2.style.justifyContent = "center";
    div2.style.gap = "20px";
}