var changes = document.querySelectorAll(".content");
var away = document.querySelectorAll(".away")
console.log(away)


function show(){

    this.classList.toggle("changes");
  
}
function toggleActive() {
    this.classList.toggle("down")
  }
  

changes.forEach(element => element.addEventListener('click' ,show));

away.forEach(away => away.addEventListener('click' ,toggleActive));









   

    

