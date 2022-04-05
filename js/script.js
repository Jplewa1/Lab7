function init(){
    //add your javascrip between these two lines of code
  function alertFunction(){
      var j1 = document.getElementById("entryinput").value;
      var j2 = document.getElementById("textoutput");
      alert("Jordan Plewa: " + j1);
      j2.innerHTML = j1;
  }
  var j3 = document.getElementById("entrybutton");
  j3.addEventListener("click" , alertFunction);
}
window.addEventListener('load' , init);
    
    
    
    
    
    
    
    window.addEventListener('load', init);