document.getElementById("demo").innerHTML = "Hello JavaScript";




function abc(){

document.getElementById("text").style.cssText="color:blue;font-size:24px;text-shadow:2px 2px 4px rgba(0,0,0,0.5)"

}
function alerttt(){
    alert("button is clicked!");
}
function imageHide(){
   const div = document.getElementById("img");
   if(div.style.display==="block"){
    div.style.display="none";

   }
   else{
    div.style.display="none";
   }
}
function showDate(){
    document.getElementById('date').innerHTML = Date()
}