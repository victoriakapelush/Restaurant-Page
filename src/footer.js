export default function footer() {
    const footer = document.getElementById('footer');
    footer.textContent = "Copyright © 2023 Victoria Kapelush";
    footer.target = "blank";
    footer.href = "https://github.com/victoriakapelush";
    footer.style.bottom = "0px";
    footer.style.width = "100%";
    footer.style.height = "1.5rem";
    footer.style.textAlign = "center";
    footer.style.padding = "10px 0";
};
