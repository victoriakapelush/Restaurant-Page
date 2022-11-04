function reset() {
    const nav  = document.getElementById('header-main');
    if (nav == null) return;
    nav.remove();
}

function header() {
    reset();
    const navArray = ['Home', 'Menu', 'Contacts'];

    const body = document.getElementById('body');
    const nav = document.createElement('nav');
    body.appendChild(nav);
    nav.setAttribute('class', 'navbar navbar-dark justify-content-end');
    nav.setAttribute('id', 'header-main');
    nav.style.position = "fixed";
    nav.style.width = "100%";
    nav.style.top = "0";

    const ul = document.createElement('ul');
    nav.appendChild(ul);
    ul.setAttribute('class', 'nav nav-tabs');

    for (let i = 0; i<navArray.length; i++) {
        const li = document.createElement('li');
        ul.appendChild(li);
        li.setAttribute('class', 'nav-item');
        const a = document.createElement('a');
        li.appendChild(a);
        a.setAttribute('class', 'nav-link');
        a.setAttribute('href', '#');
        a.textContent = navArray[i];
        a.setAttribute('id', navArray[i]);
        a.style.fontSize = "30px";
        a.style.color = "black";
    }
}

export default header;


