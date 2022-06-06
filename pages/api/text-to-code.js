import { env } from "process"
const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(400).json({
      message: "POST to this endpoint",
    })
    return
  } 
  
  try {
    console.log(req.body)
    const prompt = req.body.prompt
    console.log(prompt)
    console.log("content length", prompt.length)
    console.log(req.headers)
    
    if (prompt.length > 1000) {
      res.status(400).json({
        message: "Please under 1000 characters",
      })
      return
    }
  
    const responseContentFilter = await openai
      .createCompletion("content-filter-alpha", {
        prompt: "<|endoftext|>" + prompt + "\n--\nLabel:",
        temperature: 0,
        max_tokens: 1,
        top_p: 0,
        logprobs: 10,
    })
    console.log("content-filter score:", responseContentFilter.data.choices[0].text)
    
    if (responseContentFilter.data.choices[0].text !== "0") {
      res.status(400).json({
        message: "Your prompt was flagged by the content filter.",
      })
      return
    }
  
    const response = await openai
      .createCompletion("text-davinci-002", {
        prompt:
          "Code that does the following: " +
          prompt + 
          "\n\n\n",
        temperature: 0.7,
        max_tokens: 250,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    })
    console.log("Response: " + response.data.choices[0].text)
  
    res.status(200).json({
        response: response.data.choices[0].text,
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      response: "Error",
  })
  }
}
