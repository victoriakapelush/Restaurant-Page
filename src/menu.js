import header from './header';
import footer from './footer';
import body from './body';
import contacts from './contacts';
import home from './home';

function resetMenu() {
  const container = document.getElementById('container');
  for (const child of container.children) {
      child.remove();
  }
}

function menu() {
    resetMenu();
    header();
    body();
    footer();

  const container = document.getElementById('container');
  container.style.backgroundImage = "url('https://i.etsystatic.com/26217258/r/il/922710/3214023924/il_fullxfull.3214023924_g76t.jpg')";
  container.style.margin = "0 0";
  container.style.padding = "0 0";
  container.style.backgroundSize = "cover";
  container.style.height = "1100px";
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




export default menu;
