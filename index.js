const red = 133;
const green = 25;
const blue = 175;

const header = document.getElementById("header");
console.log(header.innerText);

function changeColor() {
    const scrollFactor = 1 + window.scrollY / 400;

    const r = red / scrollFactor;
    const g = green / scrollFactor;
    const b = blue / scrollFactor;

    const updatedColor = `rgb(${r}, ${g}, ${b})`;

 header.style.backgroundColor = updatedColor;
}
changeColor();

window.addEventListener("scroll", changeColor)


