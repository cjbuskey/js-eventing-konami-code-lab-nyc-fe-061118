const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let index = 0;
document.body.addEventListener('keypress', init)
function init(e) {
  // Write your JavaScript code inside the init() function
  const key = parseInt(e.detail || e.which);
  
  if (key === code[index]) {
    index++;
    
    if (index === code.length) {
      alert("Konami!");
      
      index = 0;
    }
  }
  else {
    index = 0;
  }
alert("Congrats!!");
}