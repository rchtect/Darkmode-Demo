function isDark() {
  var values = window.localStorage.getItem('value')

  if (values === null || values.length === 0)
  {
    document.getElementById("btn-1").style.display = "block";
    document.getElementById("btn-2").style.display = "none";
    document.body.style.backgroundColor = "white";
    
  }
  if (localStorage.getItem("value") == "true") {
    document.getElementById("btn-1").style.display = "none";
    document.getElementById("btn-2").style.display = "block";
    document.body.style.backgroundColor = "black";
    
  } else if (localStorage.getItem("value") == "false"){
    document.getElementById("btn-1").style.display = "block";
    document.getElementById("btn-2").style.display = "none";
    document.body.style.backgroundColor = "white";
    
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  isDark();
  document.getElementById("btn-1").addEventListener("click", toggleDark);
  document.getElementById("btn-2").addEventListener("click", toggleLight);
  function toggleDark() {
    document.getElementById("btn-1").style.display = "none";
    document.getElementById("btn-2").style.display = "block";
    document.body.style.backgroundColor = "black";
    localStorage.setItem("value", "true");
    
  }

  function toggleLight() {
    document.getElementById("btn-1").style.display = "block";
    document.getElementById("btn-2").style.display = "none";
    document.body.style.backgroundColor = "white";
    localStorage.setItem("value", "false");
    
  }
});
