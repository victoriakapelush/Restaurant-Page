export default function sectionThree() {
    const section = document.createElement('section');
    section.setAttribute('id', 'sectionThree');
    const main = document.getElementById('main');
    main.appendChild(section);

    section.style.backgroundColor = "white";
    section.style.height = "100vh";

    //left side with text and a link
    const paraBox = document.createElement('div');
    section.appendChild(paraBox);
    const para1 = document.createElement('p');
    paraBox.appendChild(para1);
    para1.textContent = "Tapas originated in the Catalonian region of Spain and are small plates typically consumed with wine or vermouth."
    const para2 = document.createElement('p');
    paraBox.appendChild(para2);
    para2.textContent = "We combine traditional preparations with local ingredients for dishes that are authentic to both their Spanish origins and New York setting."
    const link = document.createElement('a');
    paraBox.appendChild(link);
    link.textContent = "Learn more about our story."
    link.href = "#";

    //align text
    paraBox.style.display = "flex";
    paraBox.style.flexDirection = "column";
    paraBox.style.justifyContent = "center";
    paraBox.style.gap = "20px";
    paraBox.style.marginLeft = "50px";

    para1.style.textAlign = "center";
    para1.style.fontSize = "40px";
    para2.style.textAlign = "center";
    para2.style.fontSize = "25px";
    link.style.textAlign = "center";
    link.style.textDecoration = "underline";

    //right side with an image
    const img = document.createElement('img');
    section.appendChild(img);
    img.src = "./img/sectionThree.jpeg";
    img.style.height = "32rem";
    img.style.width = "28rem";
    img.style.margin = "90px 50px";

    //aligning both sides to make them horizontal
    section.style.display = "flex";
    section.style.flexDirection = "row";
    section.style.justifyContent = "center";

}