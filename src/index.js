import ourStory from './ourStory.js';
import menu from './menu.js';
import home from './home.js';
import photos from './photos.js';

function display() {
    home();

    document.getElementsByClassName('linksNames')[0].addEventListener('click', function() {
        ourStory();
    }) 

    document.getElementsByClassName('linksNames')[1].addEventListener('click', function() {
        menu();
    })

    document.getElementsByClassName('linksNames')[2].addEventListener('click', function() {
        photos();
    })

    document.getElementsByClassName('linksNames')[3].addEventListener('click', function() {
        window.open("https://www.opentable.com", "_blank")
    })
}

display();