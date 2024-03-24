let increment = document.getElementById('increment'); 
let text = document.getElementById('text'); 
let count = 0;
function textinc(){
count++;
text.innerText = count;
}
function resetinc(){
    count=0;
    text.innerText = count;
    }