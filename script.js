
// import {createClient} from 'gptzero-js';

function generateNumber(scale) {
  return Math.floor(Math.random() * (scale - 1)) + 1
}

function changeColor(id, val, limit) {  
  if (val > 0.5*limit) {
  document.getElementById(id).style.color = "red";
  } 
}

function handleContextMenuClick(info, tab) {
  // Trigger the browser action click event on the tab
  browser.tabs.sendMessage(tab.id, {action: "click_browser_action"});
}

browser.contextMenus.create(
  {
    id: "log-selection",
    title: "Investigate",
    contexts: ["selection", "page"],
    onclick: handleContextMenuClick
  });

async function fetchData() {

    let tabs = await browser.tabs.query({
      active: true,
      currentWindow: true});
    
    // Facts
    var fact_limit = 10;
    var fact_no = generateNumber(fact_limit);
    document.getElementById("facts").innerHTML = fact_no;
    if (fact_no > 0.7*fact_limit) {
      document.getElementById("facts").style.color = "red";
      } 
    //changeColor("facts", fact_no, limit);

    var ai_limit = 100;
    var ai_no = generateNumber(ai_limit);
    document.getElementById("ai-generated").innerHTML = ai_no + "%";
    if (ai_no > 0.7*ai_limit) {
      document.getElementById("ai-generated").style.color = "red";
      } 

    var polar_limit = 100;
    var polar_no = generateNumber(polar_limit);
    document.getElementById("polarization").innerHTML = polar_no + "%";
    if (polar_no > 0.7*polar_limit) {
      document.getElementById("polarization").style.color = "red";
      } 
    
    var img_limit = 3;
    var img_no = generateNumber(img_limit);
    document.getElementById("images").innerHTML = img_no + "%";
    if (pimg_no > 0.7*img_limit) {
      document.getElementById("images").style.color = "red";
      } 

    //document.getElementById("ai-generated").innerHTML= generateNumber(100) + "%";
    //document.getElementById("polarization").innerHTML= generateNumber(100) + "%";;
    //document.getElementById("images").innerHTML = generateNumber(3);//tabs[0].url; // window.getSelection().toString();
    document.getElementById("content").innerHTML = tabs[0].title;
}


var colorThreshold = 40,
    spanText = document.querySelector('span');

function changeColor(val) {
    var color = "green";
    
    if (val > 30 && val < 60) {
        color = "yellow";
    } else if (val >= 60) {
        color = "red";
    }
    
    spanText.style.color = color;
}

changeColor(colorThreshold);

browser.browserAction.onClicked.addListener(fetchData());

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "click_browser_action") {
    browser.browserAction.onClicked.dispatch(sender.tab);
  }
});






//export {}
