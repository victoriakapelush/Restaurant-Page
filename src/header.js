export default function header() {
    const header = document.getElementById('header');
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.marginTop = "20px";
    const vanceLink = document.createElement('a');
    header.appendChild(vanceLink); 
    vanceLink.textContent = "Vance";
    vanceLink.href = "./index.html";
    const headerBox = document.createElement('div');
    header.appendChild(headerBox);
    vanceLink.style.margin = "24px 50px";
    vanceLink.style.fontSize = "30px";
    header.style.height = "100px";
    header.style.margin = "0px 0px";
    header.style.padding = "0px 0px";

    const linksArray = ["Our Story", "Menu", "Photos", "Make a Reservation"] 
   
    for (let i = 0; i<linksArray.length; i++) {
        const aLink = document.createElement('a');
        aLink.href = "#";
        aLink.setAttribute('class', 'linksNames')
        headerBox.appendChild(aLink);
        aLink.textContent = linksArray[i];
    }

    headerBox.style.display = "flex";
    headerBox.style.justifyContent = "start";
    headerBox.style.gap = "20px";
    headerBox.style.margin = "35px 30px";
    headerBox.style.padding = "0 0";
    
}