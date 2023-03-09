async function fetchData() {

    let tabs = await browser.tabs.query({
        active: true,
        currentWindow: true});

    const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
    const record=await res.json();
    
    document.getElementById("facts").innerHTML = tabs[0].url;
    document.getElementById("ai-generated").innerHTML= tabs[0].url;
    document.getElementById("polarization").innerHTML= tabs[0].url;
    document.getElementById("images").innerHTML = tabs[0].url;
    document.getElementById("content").innerHTML = tabs[0].title;
}



browser.browserAction.onClicked.addListener(fetchData());
