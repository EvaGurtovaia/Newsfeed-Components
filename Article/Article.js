// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton;
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.

  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

let articles = document.querySelectorAll('.articles');
articles.forEach(something => new Article(something));




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