let hasMenuBeenClicked = false
function doAnimation() {
    const menu = document.querySelector("touch-menu");
    if (hasMenuBeenClicked == false) {
        menu.classList.toggle('hide-menu');
        hasMenuBeenClicked = true;
    }
    menu.classList.toggle('show-menu');
    menu.classList.toggle('hide-menu');
}

function copyText(text) {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  } 