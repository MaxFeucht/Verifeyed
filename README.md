## Entrepreneurship Course Vrije Universiteit Amsterdam

![Verifeyed Prototype Logo](./pictures/Verifeyed_prototype.png)

### Functionality

The Prototype of Verifeyed encompasses a functioning browser extension (currently only for Mozilla Firefox) written in HTML and JavaScript with the following features:

- Integration of an AI-generated text detection API into the tool - selected text can be investigated, is sent to the API, and the API gives back an probability to which the selected text is likely to be AI-generated. The analyses are based on 6 different methods, which the API authors do not disclose further. The API attains an accuracy of 93% and is trained on > 100.000 text samples. 

- The code “skeleton” to display values for Website trustworthiness and fact checking analysis results, once we pay for the respective APIs:
For Website Trustworthiness, we plan on using a Site Trustworthiness API. Based on the URL, the API performs different security checks, including if the website is known to be a scam, if the domain is only recently activated, if the website is using a valid HTTPS connection. The API furthermore provides a website trust score to easily identify suspicious sites, which we aim to display within our Plugin (in the leftmost circle shown in the prototype). 

- For Fact-Checking investigated content, we aim to leverage multiple analysis steps, partly based on existing APIs, and partly based on Natural Language Processing techniques (for a schematic explanation of how we aim to tackle this problem, see Slide 64 (“Fact Checking Scheme”). 


### Vision 

Based on our own vision for Verifeyed, as well as based on  the feedback from our Customers, we aim to add certain functionalities and informations to the tool 

Based on the feedback from our Customer Interviews, we aim to make the scores on Trustworthiness, questionable facts and AI generated content more understandable. Therefore,  we aim to display the single metrics that make up the total score with an explanation on what they mean to the user, when users click on the score.  

- Trustworthiness: For the Trustworthiness score, we will display the single values retrieved from the API with an explanation on what they mean and how they can be interpreted. 
- For Fact-Checking: To give deeper insights on which facts are questionable, we want to highlight whether a certain fact might be stated only on that website, if it was found in a “Fake News Database”, if is written in a certain sentiment associated with Fake News, amongst other metrics, which we did not yet specify.
- For AI Generation detection: Display the parameters that make up the detection of AI-generated text, along with an explanation for users on how these score can be interpreted: 
    - Text “Perplexity” - which represents the amount of randomness in a text
    - Text “Burstiness” - which represents the amount of “order” within that randomness

In the future, we furthermore want to expand Verifeyed to other Media Formats as well: 
- To check if images online are outdated, show signs of manipulation, or if they are AI-generated
- To assess the text within audio and video formats, and to analyze the text by the same parameters as we use for the text analysis currently in place. 






