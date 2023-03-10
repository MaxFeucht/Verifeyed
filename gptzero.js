import {createClient} from 'gptzero-js';

export {createClient};

browser.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case "log-selection":
        browser.tabs.query({active: true, currentWindow: true}).then(tabs => {
            // Trigger the browser action click event on the tab
            browser.tabs.sendMessage(tabs[0].id, {action: "click_browser_action"});
        });
        //fetchData();
        //const gptzero = createClient('keyforverifeyed')
        //document.getElementById("ai-generated").innerHTML = gptzero.predictText("Teachers worried about students turning in essays written by a popular artificial intelligence chatbot now have a new tool of their own. Edward Tian, a 22-year-old senior at Princeton University, has built an app to detect whether text is written by ChatGPT, the viral chatbot that's sparked fears over its potential for unethical uses in academia. Tian, a computer science major who is minoring in journalism, spent part of his winter break creating GPTZero, which he said can 'quickly and efficiently' decipher whether a human or ChatGPT authored an essay.")[0][0];
        //document.getElementById("ai-generated").innerHTML = gptzero.predictText(window.getSelection().toString())[0][0];
        }
    });