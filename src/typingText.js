let message = 'Coffee is always a good idea!';

function reset() {
    const container  = document.getElementById('container');
    if (container.children.length == 0) return true;

    const field = document.getElementById("typingDemo");
    if (field != null && field.textContent.length !== message.length) {
        return false;
    }

    for (const child of container.children) {
        child.remove();
    }

    return true;
}

function typingText() {
    if (!reset()) return;
    const container  = document.getElementById('container');

    const wrapper = document.createElement('div');
    container.appendChild(wrapper);
    wrapper.setAttribute('class', 'wrapper');
    wrapper.style.display = "grid"; 
    wrapper.style.paddingLeft = "0px";
    wrapper.style.paddingTop = "22%";
    wrapper.style.paddingLeft = "30px";

    const typingDemo = document.createElement('div');
    wrapper.appendChild(typingDemo);
    typingDemo.setAttribute('id', 'typingDemo');
    typingDemo.style.whiteSpace = "pre-wrap";
    typingDemo.style.overflow = "hidden";
    typingDemo.style.fontSize = "3em";

    var i = 0;
    var speed = 50;

    function typeWriter() {
        if (i < message.length) {
            const field = document.getElementById("typingDemo");
            if (field == null) return;
            field.textContent += message.charAt(i);
            i++;

            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
}

export default typingText;