import clearData from './clearData';

export default function photos() {
    clearData();

    const main = document.getElementById('main');
    const containerForImg = document.createElement('div');
    main.appendChild(containerForImg);
    containerForImg.setAttribute('id', 'containerForImg');
    containerForImg.style.height = "82vh";

    const imgArray = [
        "./img/sectionFive.jpeg",
        "./img/sectionFour.jpg",
        "./img/sectionSeven.jpg",
        "./img/sectionThree.jpeg",
        "./img/photoOne.jpg",
        "./img/photoTwo.jpg"
    ]

    for (let i = 0; i < imgArray.length; i++) {
        let image = document.createElement("img");
        image.setAttribute("src", imgArray[i])
        containerForImg.append(image);
        image.setAttribute('class', 'photos');
    }
}