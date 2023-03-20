//const axios = require('axios/dist/browser/axios.cjs'); // browser

// Funciton to randomly generate a number based on a scale
function generateNumber(scale) {
  return Math.floor(Math.random() * scale);
}

// Function to change the color of the text (Not working currently)
function changeColor(id, val, limit) {  
  if (val > 0.5*limit) {
  document.getElementById(id).style.color = "red";
  } 
}

function left_or_right() {
  var rand = Math.random();
  if (rand < 0.5) {
    return "Left-wing Polarity";
  } else {
    return "Right-wing Polarity";
  }
}

// Function to get the Selected Text
function getSelectedText() {
  if (window.getSelection) {
      return "YY"; //window.getSelection().toString();
  } else return "XX";
}     




function selection(){
  if (window.getSelection)
        console.log(window.getSelection().toString());
        return window.getSelection().toString();
  }

//changeColor("facts", fact_no, limit); // That's how the function would be triggered; for some reason, the function doesn't work, i.e., the color is not changed (but no error is thrown)

// Function to run when the extension icon is clicked
async function fetchData() {

    
    let tabs = await browser.tabs.query({
      active: true,
      currentWindow: true});

    //if (typeof menu === 'undefined') {
    //  menu = false;
    //};
    
    //if (menu == true) {
    //  document.getElementById("content").innerHTML = "Menu";
    //} else {
    //  document.getElementById("content").innerHTML = tabs[0].title;
    //};

    // Add Headline (currently the Page title)
    if (getSelectedText() == "") {
      document.getElementById("content").innerHTML = selection();
    } else {
      document.getElementById("content").innerHTML = tabs[0].title;
    };

    

    var threshold = 0.5;

    // Facts
    var fact_limit = 7;
    var fact_no = generateNumber(fact_limit);
    document.getElementById("facts").innerHTML = fact_no;
    //document.getElementById("facts_readmore").style.display = "none";
    if (fact_no > threshold*fact_limit) {
      document.getElementById("facts").style.color = "red";
      //document.getElementById("facts_readmore").style.display = "block"
      }; 

    var ai_limit = 40;
    var ai_no = generateNumber(ai_limit);
    document.getElementById("ai-generated").innerHTML = ai_no + "%";
    //document.getElementById("ai_readmore").style.display = "none";
    if (ai_no > threshold*ai_limit) {
      document.getElementById("ai-generated").style.color = "red";
      //document.getElementById("ai_readmore").style.display = "block"
      }; 

    var polar_limit = 50;
    var polar_no = generateNumber(polar_limit);
    document.getElementById("polarization").innerHTML = polar_no + "%";
    document.getElementById("polarization_direction").innerHTML = left_or_right();
    //document.getElementById("polarization_readmore").style.display = "none";
    if (polar_no > threshold*polar_limit) {
      document.getElementById("polarization").style.color = "red";
      //document.getElementById("polarization_readmore").style.display = "block";
      }; 
    
    var img_limit = 3;
    var img_no = generateNumber(img_limit);
    document.getElementById("images").innerHTML = img_no;
    //document.getElementById("images_readmore").style.display = "none";
    if (img_no > threshold*img_limit) {
      document.getElementById("images").style.color = "red";
      //document.getElementById("images_readmore").style.display = "block"
      };

    //document.getElementById("ai-generated").innerHTML= generateNumber(100) + "%";
    //document.getElementById("polarization").innerHTML= generateNumber(100) + "%";;
    //document.getElementById("images").innerHTML = generateNumber(3);//tabs[0].url; // window.getSelection().toString();
    
    //delete menu;

}

// Add "Investigate" to the context menu
browser.menus.create(
  {
    id: "log-selection",
    title: "Investigate",
    contexts: ["selection","browser_action", "all"],
  });

function contextMenuListener(info, tab){
  //delete menu;
  //menu = true;
  //selected_text = browser.menu.onClickData.selectionText();
  browser.browserAction.openPopup();
}

// Open the default browser action popup when the context menu is clicked (FINALLY WORKING)
browser.menus.onClicked.addListener(contextMenuListener);

// Function that triggers fetchData() when the extension icon is clicked
browser.browserAction.onClicked.addListener(fetchData());

