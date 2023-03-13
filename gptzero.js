import {createClient} from 'gptzero-js';

export {createClient};

browser.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case "log-selection":
        browser.tabs.query({active: true, currentWindow: true}).then(tabs => {
            // Trigger the browser action click event on the tab
            browser.tabs.sendMessage(tabs[0].id, {action: "click_browser_action"});
        });
        }
    });