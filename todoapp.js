/*****************************************/
/*  Author: Joshua Nichols               *
/*  Date: July 15, 2019                   *
/*  Description:                         *
/*            A todo list that           *
/*    I replicated from W3schools.com    *
*****************************************/


// Create a "close" button and append it to each list item
const nodeList = document.querySelectorAll('LI');
nodeList.forEach(node => {
  const span = document.createElement('span');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  node.appendChild(span);
});

// Click on a close button to hide the current list item
const close = document.querySelectorAll('.close');
close.forEach(closeBtn => {
  closeBtn.addEventListener('click', function() {
    const div = this.parentNode; //Explicitly binding this to the container div
    div.style.display = "none";
  });
});

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newItem() {
  const li = document.createElement('li');
  const inputValue = document.getElementById('myInput').value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);

  inputValue === "" ? alert("You must type something!") : document.getElementById('myUL').appendChild(li);
  
  document.getElementById('myInput').value = "";

  const span = document.createElement('SPAN');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);
  const close = document.querySelectorAll('.close');
  
  close.forEach(closeBtn => {  //A close button for each new list item
    closeBtn.addEventListener('click', function() {
      const div = this.parentNode;
      div.style.display = 'none';
    }, false);
  });
}

//Event listener for the "Add" button
const addButton = document.getElementById('addBtn');
addButton.addEventListener('click', newItem);
