/* Array liste für Index.astro ist weiter unten */

// pageHandler ist die Klasse, die alle Funktionen enthält, die auf der Seite ausgeführt werden sollen.
class PageHandler {
    // Der Konstruktor wird beim Erstellen einer neuen Instanz der Klasse ausgeführt.
    constructor() {
        // Hier werden alle Funktionen aufgerufen, die beim Laden der Seite ausgeführt werden sollen.
        // Wenn im localStorage der Wert "theme" auf "dark" gesetzt ist, wird der Klasse "dark" auf dem HTML-Elememt hinzugefügt.
        if(localStorage.getItem("theme") == "dark") {
        document.documentElement.classList.add("dark");
    }
    // Initiale Funktionen welche beim Laden der Seite ausgeführt werden sollen.
    this.setThemeIcon();
    this.typeWriterManager();

    // Event-Listener für den Dark-Mode-Switch
    // Bei Klick auf den Switch wird die Klasse "dark" auf dem HTML-Element hinzugefügt oder entfernd.
    document.querySelector("#colorSwitch").addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");

        if(localStorage.getItem("theme") == "dark") {
            localStorage.setItem("theme", "light");
        }
        else {
            localStorage.setItem("theme", "dark");
        }

        this.setThemeIcon();
    });
  }

  setThemeIcon() {
    let colorSwitch = document.querySelector("#colorSwitch");
    if(colorSwitch === null) return;

    if(localStorage.getItem("theme") == "dark") {
        colorSwitch.innerHTML = `
        <img src="/icons/sun.svg?a=${Math.random()}" alt="sun" class="w-6 h-6" />
        `;
    }
    else {
        colorSwitch.innerHTML = `
        <img src="/icons/moonwhite.svg?a=${Math.random()}" alt="moon" class="w-6 h-6" />
        `;
    }
  }

  typeWriterManager() {
    let dynamicHeaderElement = document.querySelector("#dynamic-header-text");
    if (dynamicHeaderElement === null) return; 

                               /* Array liste für Index.astro */
    let dynamicHeaderTextArray = ["Leidenschaft", "Kreativität", "Visionen", "Kaffee", "Njola"];
    let i = 0;
    let currentText = dynamicHeaderTextArray[i];
    let currentWord = dynamicHeaderTextArray[i];
    let isDeleting = false;


    let typeWriter = () => {
        currentWord = dynamicHeaderTextArray[i];

        if(isDeleting) {
            currentText = currentWord.substring(0, currentText.length - 1);
        }

        if (!isDeleting) {
            currentText = currentWord.substring(0, currentText.length + 1);
        }

        dynamicHeaderElement.innerHTML = currentText;

        if(!isDeleting && currentText === currentWord) {
            isDeleting = true;
            setTimeout(typeWriter, 3000);
        } else if (isDeleting && currentText === "") {
            isDeleting = false;
            i++;

            if(i === dynamicHeaderTextArray.length) {
                i = 0;
            }

            setTimeout(typeWriter, 500);
        }   else {
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
  }
}

// Diese Funktion erstellt eine neue Instanz der Klasse PageHandler.
const init = () => {
    new PageHandler();
};

// Die Funktion init() wird ausgeführt, wenn der DOM geladen wurde.
document.addEventListener("DOMContentLoaded", () => init());
// Die Funktion init() wird ausgeführt, wenn eine view transition ausgelöst wird dadurch wird das script ausgeführ auch wen die seite nicht geladen wurde (:
document.addEventListener('astro:page-load', () => init());
// Die Funktion init() wird ausgeführt, wenn die seite neugeladen wurde
window.onload = () => init();

//sorgt dafür das beim seiten übergang im dark mode die seite nicht hell aufflackert der dark mode wird vor dem rendern abgefragt
document.addEventListener('astro:after-swap', () => {
    localStorage.theme === 'dark'
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.add("light");
  });





