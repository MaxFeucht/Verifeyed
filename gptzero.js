import axios from "axios";

const options = {
  method: 'POST',
  url: 'https://chatgpt-detector.p.rapidapi.com/gpt/detect',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '5f43d03081msha5924c3989ef4b4p116059jsn168887a089b5',
    'X-RapidAPI-Host': 'chatgpt-detector.p.rapidapi.com'
  },
  data: '{"text":"Throughout his political career, Biden has been known for his focus on issues related to the middle class and working families, including healthcare, education, and economic opportunities. He is also a strong advocate for civil rights, social justice, and international diplomacy. Since taking office in January 2021, President Biden has faced a number of challenges, including the ongoing COVID-19 pandemic, economic recovery, and social justice issues. He has worked to implement policies and programs aimed at addressing these challenges, including a massive infrastructure plan and a vaccine distribution strategy."}'
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

response.data['data']

