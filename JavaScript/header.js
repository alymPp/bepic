document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.endsWith(".html")) {
      window.history.replaceState(null, "", window.location.pathname.replace(".html", ""));
    }
  });
const openButton = document.getElementById('open-sidebar-button')
const navbar = document.getElementById('navbar')

const media = window.matchMedia("(width < 700px)")

media.addEventListener('change', (e) => updateNavbar(e))

function updateNavbar(e){
  const isMobile = e.matches
  console.log(isMobile)
  if(isMobile){
    navbar.setAttribute('inert', '')
  }
  else{
    navbar.removeAttribute('inert')
  }
}

function openSidebar(){
  navbar.classList.add('show')
  openButton.setAttribute('aria-expanded', 'true')
  navbar.removeAttribute('inert')
}

function closeSidebar(){
  navbar.classList.remove('show')
  openButton.setAttribute('aria-expanded', 'false')
  navbar.setAttribute('inert', '')
}

updateNavbar(media)


// обнавление крутящегося текста 

// function reloadSection() {
//   fetch(window.location.href) 
//       .then(response => response.text())
//       .then(html => {
//           const tempDiv = document.createElement("div");
//           tempDiv.innerHTML = html;

//           const newContent = tempDiv.querySelector("#refreshable-section");
//           if (newContent) {
//               document.querySelector("#refreshable-section").innerHTML = newContent.innerHTML;
//           }
//       })
//       .catch(error => console.error("Ошибка при обновлении:", error));
// }

// setInterval(reloadSection, 13900);
