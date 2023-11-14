import footer from './footer.js';
import header from './header';
import ourStory from './ourStory.js';
import menu from './menu.js';
import body from './body.js';
import photos from './photos.js';

export default function home() {
    header();
    body();
    footer();

    document.getElementsByClassName('linksNames')[0].addEventListener('click', function() {
        ourStory();
    }) 

    document.getElementsByClassName('linksNames')[1].addEventListener('click', function() {
        menu();
    }) 

    document.getElementsByClassName('linksNames')[2].addEventListener('click', function() {
        photos();
    })
}