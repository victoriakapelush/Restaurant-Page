function reset() {
    const footer  = document.getElementById('footer-main');
    if (footer == null) return;
    footer.remove();
}

function footer() {
    reset();
    const body = document.getElementById('body');

    const footer = document.createElement('footer');
    body.appendChild(footer);
    footer.setAttribute('id', 'footer-main');
    footer.style.position = "fixed";
    footer.style.padding = "10px 10px";
    footer.style.paddingLeft = "0px";
    footer.style.bottom = "0";
    footer.style.width = "100%";
    footer.style.height = "40px";
    footer.style.fontSize = "20px";
    footer.style.textAlign = "center";
    footer.textContent = "Copyright © 2022";
        
    const a_footer = document.createElement('a');
    footer.appendChild(a_footer);
    a_footer.textContent = " victoriakapelush";
    a_footer.href = "https://github.com/victoriakapelush";
    a_footer.style.textDecoration = "none";
    a_footer.style.fontSize = "20px";
    a_footer.style.color = "black";
    a_footer.style.padding = "10px 10px";
    a_footer.style.paddingLeft = "0px";
    a_footer.style.bottom = "0";
    a_footer.style.width = "100%";
    a_footer.style.height = "40px";
    a_footer.style.textAlign = "center";
}

export default footer;