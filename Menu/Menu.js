
const toggleMenu = () => {
  menu.classList.toggle('menu--open');
  // Toggle the "menu--open" class on your menu refence. 
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector ('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', )

//class Panel {
 // constructor(newPanel) {
   // this.panelButtons = newPanel.querySelector('.panel-buttons');
    // select the panel-buttons
    // find the open-close buttons and assign them to this.
    //this.panelOpenBtn = newPanel.querySelector('.panel-btn-open');
    //this.panelCloseBtn = newPanel.querySelector('.panel-btn-close');
    //this.panelContent = newPanel.querySelector('.panel-content');
    // add some eventListener to panelsButtons
    // we need to toggle classes to elements nested within the pane-buttons div
    // this.panelButtons.addEventListener('click', this.toggle.bind(this));
    ///this.panelButtons.addEventListener('click', this.toggle);
  //}
  
  //toggle = () => {
   // console.log(this.panelOpenBtn);
    //this.panelOpenBtn.classList.toggle('hide-btn');
    //this.panelCloseBtn.classList.toggle('hide-btn');
   // this.panelContent.classList.toggle('panel-content');
 // }
  
//}

//const panels = document.querySelectorAll('.panel');
// select all elements w/ class .panel and store them in a list.

// loop over new NodeList (panels) generate new Panel from scratch.
//panels.forEach(panel => new Panel(panel));
// for each element in our NodeList, create a new Class for DOM Manipulation.
// w/ no parens for an arrow function, there is an IMPLICIT Return.