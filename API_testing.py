import requests
import json
url = "https://chatgpt-detector.p.rapidapi.com/gpt/detect"

payload = {"text": "President Barack Obama from 2009 to 2017 before running for president in 2020. Born in Scranton, Pennsylvania in 1942, Biden has been involved in politics for more than five decades, first as a U.S. Senator from Delaware and then as Vice President. Throughout his political career, Biden has been known for his focus on issues related to the middle class and working families, including healthcare, education, and economic opportunities. He is also a strong advocate for civil rights, social justice, and international diplomacy. Since taking office in January 2021, President Biden has faced a number of challenges, including the ongoing COVID-19 pandemic, economic recovery, and social justice issues. He has worked to implement policies and programs aimed at addressing these challenges, including a massive infrastructure plan and a vaccine distribution strategy."}

headers = {
	"content-type": "application/json",
	"X-RapidAPI-Key": "5f43d03081msha5924c3989ef4b4p116059jsn168887a089b5",
	"X-RapidAPI-Host": "chatgpt-detector.p.rapidapi.com"
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)

json.loads(response.text)['data']['output']['probability_fake']

##[0]['output'])