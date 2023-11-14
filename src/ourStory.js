import clearData from './clearData';
import menu from './menu.js';

export default function ourStory() {
    clearData();

    const title = document.createElement('h1');
    const main = document.getElementById('main');
    main.appendChild(title);

    title.textContent = "Our Story";
    title.style.textAlign = "center";
    title.style.fontSize = "50px";
    title.style.padding = "50px 0";

    const p1 = document.createElement('p');
    main.appendChild(p1);
    p1.textContent = "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. "
    p1.style.textAlign = "start";
    p1.style.fontSize = "20px";
    p1.style.padding = "0 200px";

    const p2 = document.createElement('p');
    main.appendChild(p2);
    p2.textContent = "Don’t worry about sounding professional. Sound like you. There are over 1.5 billion websites out there, but your story is what’s going to separate this one from the rest. If you read the words back and don’t hear your own voice in your head, that’s a good sign you still have more work to do."
    p2.style.textAlign = "start";
    p2.style.fontSize = "20px";
    p2.style.padding = "0 200px";
    p2.style.paddingTop = "30px";

    const p3 = document.createElement('p');
    main.appendChild(p3);
    p3.textContent = "Be clear, be confident, and don’t overthink it. The beauty of your story is that it’s going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Latter will take care of itself. It always does."
    p3.style.textAlign = "start";
    p3.style.fontSize = "20px";
    p3.style.padding = "0 200px";
    p3.style.paddingTop = "30px";

    const imgBox = document.createElement('img');
    main.appendChild(imgBox);
    imgBox.src = "./img/sectionFour.jpg"
    imgBox.style.height = "40rem";
    imgBox.style.width = "100vw";
    imgBox.style.marginTop = "60px";
    
    document.getElementsByClassName('linksNames')[1].addEventListener('click', function() {
        menu();
    }) 

}