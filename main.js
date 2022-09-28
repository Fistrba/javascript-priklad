//Text (element)
const textElement = document.getElementById("text");

//tlacitko citaj viac/menej (element)
const buttonCitatDalej = document.getElementById("dalej");

//obsah textu
let text = document.getElementById("text").textContent

//rozah textu
const defalut_length_text = 400
const length_text = text.length

let more = false;


//zmena textu 
textElement.innerHTML = text.substring(0, defalut_length_text);

//kliknutie na tlacitko
buttonCitatDalej.addEventListener("click", () => {
    if(!more) {
        textElement.innerHTML = text.substring(0, length_text);
        buttonCitatDalej.innerHTML = "čitať menej"
        more=true
    }else {
        textElement.innerHTML = text.substring(0, defalut_length_text);
        buttonCitatDalej.innerHTML = "čitať viac"
        more=false
    }
})