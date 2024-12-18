const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// state
let firstPassword = ''
let secondPassword = ''
let length = 15;
let includeNumber = true;
let includeSymbol = true;

function renderPasswords() {
  document.getElementById("p1").textContent = firstPassword;
  document.getElementById("p2").textContent = secondPassword;
}

function createPasswords() {
  firstPassword = '';
  secondPassword = '';
  for (i = 0; i < length; i++) {
    firstPassword += getRandomChar();
    secondPassword += getRandomChar();
  }
  renderPasswords();
}

function updateLength(l) {
  length = l;
}

function updateSymbol() {
  if (!includeSymbol) {
    document.getElementById("st").style.backgroundColor = "#10b981";
    document.getElementById("st").style.color = "#273549";
    includeSymbol = true;
  } else {
    document.getElementById("st").style.backgroundColor = "#273549";
    document.getElementById("st").style.color = "#5def92";
    includeSymbol = false;
  }
}

function updateNumber() {
  if (!includeNumber) {
    document.getElementById("nt").style.backgroundColor = "#10b981";
    document.getElementById("nt").style.color = "#273549";
    includeNumber = true;
  } else {
    document.getElementById("nt").style.backgroundColor = "#273549";
    document.getElementById("nt").style.color = "#5def92";
    includeNumber = false;
  }
}

function copyToClipboard(id) {
  const txtEl = document.getElementById(id);
  navigator.clipboard.writeText(txtEl.textContent);
  alert("Copied to the clipboard: " + txtEl.textContent)
}

// index 52 is the first number
// index 62 is the first symbol 
function getRandomChar() {
  let i = Math.floor(Math.random() * characters.length) + 1
  while (!includeNumber && (i >= 52 && i < 62) || !includeSymbol && (i >= 62)) {
    i = Math.floor(Math.random() * characters.length) + 1
  }
  return characters[i];
}