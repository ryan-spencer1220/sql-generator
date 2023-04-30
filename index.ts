import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

const PORT: number = 8000;

const app: Application = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post("/completions", async (req: Request, res: Response) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "How are you doing today?",
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.listen(PORT, () => console.log(`Your server is running on PORT ${PORT}`));
