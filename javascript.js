//div1
window.onload = loadEventHandlers


function loadEventHandlers() {
  document.getElementById("div1").addEventListener("click", changeText);

  function changeText() {
    document.getElementById("div1").innerHTML = "Boom!";
  }

  document.getElementById("div2").addEventListener("mouseover", badFunction);

  function badFunction() {
    document.getElementById("div2").innerHTML = "Don't do that!";
  }

  document.getElementById("div3").addEventListener("mouseout", goodFunction);

  function goodFunction() {
    document.getElementById("div3").innerHTML = "That's good!";
  }

  document.getElementById("div4").addEventListener("keydown", keyPress);

  function keyPress() {
    alert("Down it goes!");
  }

  document.getElementById("div5").addEventListener("mousedown", mDown);

  function mDown() {
    document.getElementById("div5").innerHTML = "Text Change!";
  }
};
