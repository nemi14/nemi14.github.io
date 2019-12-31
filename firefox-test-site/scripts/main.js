let myImage = document.querySelector('img');

/*     Switches the firefox logos when user clicks on the logo   */
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox2.png') {
      myImage.setAttribute ('src','images/firefox.png');
    } else {
      myImage.setAttribute ('src','images/firefox2.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


/*    Prompts a name from the webpage user     */
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}


/* Prevents users from leaving the name null or blank */
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}
