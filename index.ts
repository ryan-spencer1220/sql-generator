import express, { Application, Request, Response } from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

const PORT: number = 8000;

const app: Application = express();
app.use(cors());
app.use(express.json());

const API_KEY: string = "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";

const configuration = new Configuration({
  apiKey: API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post("/completions", async (req: Request, res: Response) => {
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5",
      messages: [
        {
          role: "user",
          content: "Create a SQL request to " + req.body.message,
        },
      ],
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

app.listen(PORT, () => console.log(`Your server is running on PORT ${PORT}`));
