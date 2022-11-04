import header from './header';
import footer from './footer';
import typingText from './typingText';
import body from './body';
import contacts from './contacts';
import menu from './menu';

function home() {
    header();
    body();
    typingText();
    footer();

    const container = document.getElementById('container');
    container.style.backgroundImage = "url('./img/homePage.webp')";
    container.style.margin = "0 0";
    container.style.padding = "0 0";
    container.style.backgroundSize = "cover";
    container.style.height = "820px";
    container.style.width = "1440px";

    const homeBtn = document.getElementById('Home');
    homeBtn.addEventListener('click', function() {
        home();
    });

    const contactsBtn = document.getElementById('Contacts');
    contactsBtn.addEventListener('click', function() {
        contacts();
    });

    const menuBtn = document.getElementById('Menu');
    menuBtn.addEventListener('click', function() {
        menu();
    });

}

export default home;