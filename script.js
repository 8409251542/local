let text = document.getElementById("text");
displayText();
text.addEventListener('keyup',savetext);
function savetext(){
    let textsave=text.value;
    localStorage.setItem('text' ,textsave);
}
function displayText(){
   let cont= localStorage.getItem('text');
    text.innerText=cont;
}