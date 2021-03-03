var scale = document.querySelectorAll('.content');
var text = document.querySelector('.content.open-active > *:first-child');	
console.log(text);
// var title = document.querySelectorAll('.content p:first-child')
// var titledown = document.querySelectorAll('.content p:last-child')
// console.log(title);



//Fonction qui affiche les changement 
function show(){
   this.classList.toggle("changes")
}


//Fonction qui affiche les changement 
function toggleActive(e) {
         if (e.propertyName.includes("flex"))
         this.classList.toggle('open-active')
 }

// loop through scale elements
scale.forEach(image => image.addEventListener('transitionend', toggleActive,{
   
}));

scale.forEach(image => image.addEventListener('click', show ,{
   
}));

// scale.forEach(image => image.addEventListener('transitionendto', downup,{
   
// }));
// function downup(){
//    title.forEach(element => {

//       element.style.transform = "translateY(0)"
//       element.style.transition = "2s"

//        console.log("click")
//    });
// }

// function bottom(){
//    titledown.forEach(element => {

//       element.style.transform = "translateY(0)"
//       element.style.transition = "2s"

//        console.log("click")
//    });
// }


// function downup(){


// 	this.classList.toggle('text');

// }



// scale.forEach(image => image.addEventListener('click', bottom ,true,{
   
// }));



// $(".content").click(function(){

//    $(".content").each(function(){
//    	$(this).toggleClass("changes");
//    });
 

// }); 

// $( "span" ).click(function() {
//   $( "li" ).each(function() {
//     $( this ).toggleClass( "example" );
//   });
// });
// </s