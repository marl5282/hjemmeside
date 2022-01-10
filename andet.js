// ------------------------BURGER MENU-----------------------------

// // Lav en variabel, der refererer til ".toggle-btn"
// const btn = document.querySelector(".toggle-btn");
// // Lav en variabel, der refererer til "nav"
// const nav = document.querySelector("nav");

// // Lav en function, der hedder toggleMenu()
// function toggleMenu() {
//   // 1. Toggle en klasse på nav vha. classList.toggle
//   // 2. Toggle en klasse, der hedder "shown"
//   nav.classList.toggle("shown");

//   // 1. Lav en variabel, der hedder menuShown
//   // 2. Den skal være lig med, om nav-variablen indeholder klassen "shown" vha. classList.contains("")
//   const menuShown = nav.classList.contains("shown");
//   // 1. Lav en if/else sætning => if (...) {...} else {...}

//   // 2. Spørg om menu i if-sætningen => if (menu)
//   if (menuShown) {
//     btn.textContent = "Luk";
//     // hvis nav har klassen "shown", sæt da btn.textContent til "Luk"
//   } else {
//     btn.textContent = "Menu";
//     // hvis IKKE nav har klassen "shown", sæt da btn.textContent til "Menu"
//   }
// }

const btn = document.querySelector("button");
const ul = document.querySelector("nav");

function toggleMenu() {
  ul.classList.toggle("shown");

  const menu = ul.classList.contains("shown");

  if (menu) {
    // hvis ul har klassen "shown"
    //btn.textContent = "Luk";
    btn.classList.add("open");
  } else {
    // hvis IKKE ul har klassen "shown"
    //btn.textContent = "Menu";
    btn.classList.remove("open");
  }
}

btn.addEventListener("click", toggleMenu);
