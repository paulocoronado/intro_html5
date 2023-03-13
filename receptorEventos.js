var element = document.getElementById("buttonListener");
/*
element.addEventListener("click", func);
function func(){ 
   console.log("Click en el botón a las"+ new Date().toLocaleTimeString());
}
*/

/*
element.addEventListener("click", function (){ 
   console.log("Click en el botón a las"+ new Date().toLocaleTimeString());
});
*/

element.addEventListener("click", ()=>console.log("Click en el botón a las"+ new Date().toLocaleTimeString()));