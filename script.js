
// Funciton to randomly generate a number based on a scale
function generateNumber(scale) {
  return Math.floor(Math.random() * scale);
}

function generateDecimalNumber(scale, dec) {
  switch(dec) {
    case 1: return (Math.random() * scale * 10) / 10;
    case 2: return (Math.random() * scale * 100) / 100;
    case 3: return (Math.random() * scale * 1000) / 1000;
    default: return (Math.random() * scale * 100) / 100;
  };
};

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




function global_callback(api_type, json){

  switch(api_type) {
    case "AI":
      const data_ai = json
      const fake_prob = Math.round(data_ai.data.output.probability_fake * 100 * 100) / 100;
      document.getElementById("ai-generated").innerHTML = (fake_prob < 0.01) ? "<0.01%" : fake_prob + "%";
      if (fake_prob > 20) {
        document.getElementById("ai-generated").style.color = "red";
        }; 
    break;
    case "FACTS":
      const data_fact = json
      const fact_rating = data_fact.data.output.probability_fake;
      document.getElementById("facts").innerHTML = Math.round(fact_rating * 100) / 100;
      if (fake_prob > 0.2) {
        document.getElementById("facts").style.color = "red";
        }; 
      break;
    default:
      return 0;
  } 
}



const AIDetection = async () => {
  const selectionText = "Whatever the talk of a “no-limits” friendship, it’s the business deals that count. On the second day of Chinese President Xi Jinping’s visit to Russia, the two countries agreed to a set of proposals that would expand their natural gas trade as well as other economic ties. The proposed deals represent something of a lifeline for Russian President Vladimir Putin, isolated from the West because of sanctions imposed on Russia after his decision to wage a full-blown war across the border in Ukraine. At the center of discussions in Moscow is a new planned pipeline, dubbed Power of Siberia 2, that could supply China with about 50 billion cubic meters of Russian gas annually. “The pipeline, which would pass through Mongolia, has been under discussion for years. But the project took on greater urgency for Russia after its natural gas trade with Europe stopped last year because of its invasion of Ukraine,” my colleagues reported. “By 2030, Putin said, Russia will supply China with at least 98 billion cubic meters, in addition to 100 million tons of liquefied natural gas, through the new pipeline.”"; //window.getSelection().toString();
  if (selectionText == "") {
    const data = 0;
    return data;
  }

  const options = {
    method: 'POST',
    headers: {
      'content-type': "application/json",
      'X-RapidAPI-Key': config.Chat_GPT_detector_key,
      'X-RapidAPI-Host': "chatgpt-detector.p.rapidapi.com"
    },
    body: '{"text":"' + selectionText + '"}' // "President Barack Obama from 2009 to 2017 before running for president in 2020. Born in Scranton, Pennsylvania in 1942, Biden has been involved in politics for more than five decades, first as a U.S. Senator from Delaware and then as Vice President. Throughout his political career, Biden has been known for his focus on issues related to the middle class and working families, including healthcare, education, and economic opportunities. He is also a strong advocate for civil rights, social justice, and international diplomacy. Since taking office in January 2021, President Biden has faced a number of challenges, including the ongoing COVID-19 pandemic, economic recovery, and social justice issues. He has worked to implement policies and programs aimed at addressing these challenges, including a massive infrastructure plan and a vaccine distribution strategy."}'
  };

  await fetch('https://chatgpt-detector.p.rapidapi.com/gpt/detect', options)
  .then((response) => response.json())
      .then(data => {
          console.log(data.data.output.probability_fake);
          console.log(selectionText);
          global_callback("AI", data);
      })
      .catch(error => {
          console.error(error);
      });
  };



  const AIDetection_default = async (threshold) => {
  var ai_limit = 40;
  var ai_no = 11.21//generateDecimalNumber(ai_limit, 2);
  document.getElementById("ai-generated").innerHTML = ai_no + "%";
  if (ai_no > threshold*ai_limit) {
    document.getElementById("ai-generated").style.color = "red";
    }; 
  };

  const FactCheck_default = async (threshold) => {
   var fact_limit = 7;
   var fact_no = 2//generateNumber(fact_limit);
   document.getElementById("facts").innerHTML = fact_no;
   if (fact_no > threshold*fact_limit) {
     document.getElementById("facts").style.color = "red";
     }; 
    };
  
  const Trustworthy_default = async (threshold) => {
    var polar_limit = 100;
    var polar_no = 94.13;//generateNumber(polar_limit);
    document.getElementById("polarization").innerHTML = polar_no + "%";
    if (polar_no < threshold*polar_limit) {
      document.getElementById("polarization").style.color = "red";
      }; 
    };

   



  const FactChecking = async () => {
    const selectionText = "I haven't showered in ages"; //window.getSelection().toString();
    if (selectionText == "") {
      const data = 0;
      return data;
    }
  
    const options = {
      method: 'POST',
      headers: {
        'content-type': "application/json",
        'X-RapidAPI-Key': config.Chat_GPT_detector_key,
        'X-RapidAPI-Host': "chatgpt-detector.p.rapidapi.com"
      },
      body: '{"text":"' + selectionText + '"}' // "President Barack Obama from 2009 to 2017 before running for president in 2020. Born in Scranton, Pennsylvania in 1942, Biden has been involved in politics for more than five decades, first as a U.S. Senator from Delaware and then as Vice President. Throughout his political career, Biden has been known for his focus on issues related to the middle class and working families, including healthcare, education, and economic opportunities. He is also a strong advocate for civil rights, social justice, and international diplomacy. Since taking office in January 2021, President Biden has faced a number of challenges, including the ongoing COVID-19 pandemic, economic recovery, and social justice issues. He has worked to implement policies and programs aimed at addressing these challenges, including a massive infrastructure plan and a vaccine distribution strategy."}'
    };
  
    await fetch('SOME_FACT_CHECKING_URL', options)
    .then((response) => response.json())
        .then(data => {
            console.log(data.data.output.probability_fake);
            global_callback("FACTS", data);
        })
        .catch(error => {
            console.error(error);
        });
    };


// Function to run when the extension icon is clicked
async function fetchData() {

    
    let tabs = await browser.tabs.query({
      active: true,
      currentWindow: true});


    // Add Headline (currently the Page title)
    if (getSelectedText() == "") {
      document.getElementById("content").innerHTML = selection();
    } else {
      document.getElementById("content").innerHTML = "Whatever the talk of a “no-limits” friendship, it’s the business deals that count. On the second day of Chinese President Xi Jinping’s visit to Russia ..."//tabs[0].title;//"\"" + tabs[0].title + "\"";//"Verifeyed";
    };

    ////// API calls


    var threshold = 0.5;

    // Retrieve API data (or default values)
    AIDetection();
    //AIDetection_default(threshold);
     //FactCheck();
    FactCheck_default(threshold);
     //Trustworthy();
    Trustworthy_default(threshold);

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
  //console.log(window.getSelection.toString())
  console.log(3)
  browser.browserAction.openPopup();
}

// Open the default browser action popup when the context menu is clicked (FINALLY WORKING)
browser.menus.onClicked.addListener(contextMenuListener);

// Function that triggers fetchData() when the extension icon is clicked
browser.browserAction.onClicked.addListener(fetchData());



