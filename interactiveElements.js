document.addEventListener("DOMContentLoaded", function () {
    function darkMode() {
        let body = document.body;
        document.body.classList.add("dark-mode");
    }

    function removeDarkMode() {
       let body = document.body;
       document.body.classList.remove("dark-mode");
    }

    document.getElementById("color-change-dark").onclick = function () {
        darkMode();
    };

    document.getElementById("color-change-light").onclick=function(){
        removeDarkMode();
    }

    
});

const slider=document.getElementById("myRange");
const output=document.getElementById("slider-result");
output.innerHTML=slider.value;

slider.oninput=function(){
    output.innerHTML=this.value;
}


document.addEventListener("DOMContentLoaded", function () {
    const paragraph = document.getElementById("p1");
    const slider = document.getElementById("p1Slider");
    const result = document.getElementById("paragraph-slider-result");

    // Set the initial font size of the paragraph
    paragraph.style.fontSize = `${slider.value}px`;
    result.textContent = `Font size: ${slider.value}px`;

    // Update font size dynamically as the slider value changes
    slider.oninput = function () {
        paragraph.style.fontSize = `${this.value}px`;
        result.textContent = `Font size: ${this.value}px`;
    };
});