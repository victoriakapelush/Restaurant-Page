import header from './header';
import footer from './footer';
import body from './body';
import menu from './menu';
import home from './home';

function resetContacts() {
    const container = document.getElementById('container');
    for (const child of container.children) {
        child.remove();
    }
}

function contacts() {
    resetContacts();
    header();
    body();
    footer();
    
    const container = document.getElementById('container');
    const container_contacts = document.createElement('div');
    container.appendChild(container_contacts);
    container_contacts.style.backgroundColor = "white";
    container_contacts.style.margin = "0 0";
    container_contacts.style.padding = "0 0";
    container_contacts.style.backgroundSize = "cover";
    container_contacts.style.position = 'fixed';
    container_contacts.style.height = "1100px";
    container_contacts.style.width = "1440px";

    const div = document.createElement('div');
    container_contacts.appendChild(div);
    div.style.display = "flex";
    div.style.justifyContent = "space-around";
    div.style.gap = "100px";
    div.style.padding = "220px 220px";

    const h1 = document.createElement('h1');
    div.appendChild(h1);
    h1.textContent = "It's coffee time!";
    h1.style.fontSize = "90px";
    h1.style.paddingTop = "70px";
    
    const form = document.createElement('div');
    div.appendChild(form);
    form.style.height = "450px";
    form.style.width = "880px";
    form.style.border = "3px dotted black";
    form.style.display = "grid";
    form.style.padding = "0 120px";

    const h2 = document.createElement('h2');
    form.appendChild(h2);
    h2.textContent = "Find us here:";
    h2.style.fontSize = "60px";
    h2.style.textAlign = "center";
    h2.style.paddingTop = "70px";

    const p = document.createElement('p');
    form.appendChild(p);
    p.textContent = "Monday - Sunday"; 
    p.textContent += "\n10am - 11pm";
    p.textContent += "\nMoscow, Russia";
    p.textContent += "\ncoffee@berlin.com";


    p.style.fontSize = "30px";
    p.style.textAlign = "center";
    p.style.margin = "0 50px";

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

export default contacts;
