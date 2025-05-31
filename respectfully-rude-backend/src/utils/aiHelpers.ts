import Replicate from "replicate";
import { GoogleGenAI } from "@google/genai";

export const backhandedOutput = async (
  name: string,
  text: string,
  img: any
) => {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
  const config = {
    responseMimeType: "application/json",
  };
  const model = "gemini-2.0-flash";

  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `Generate weird name.
  Use this input -  name: "${name}" and info: ${text} ;
  I have given you the rudest sentence, addressing them by name in one not too short not too long compliment and make 10 years old understand that (make it more brutal and roast the key features) and generate the img prompt for generating img in another model.
  Respond in strict JSON like:
  {
    
    "compliments": [
      {
        "name": "changed name original name ${name}",
        "text": "Backhanded compliment here.",
        "prompt": "Expected based on the img and complimented text For example: Make this person look like a complete cartoon loser with: messy hair, drooling mouth, dark eye bags, goofy glasses, a shocked expression, cartoon scars on their cheeks, bad fashion and also very funny and cartoonish style"
      }
    ]
  }
    YOU MUST Only return JSON. No markdown or code block.`,
        },
      ],
      inlineData: {
        mimeType: "image/jpeg",
        data: img,
      },
    },
  ];

  try {
    const response = await ai.models.generateContent({
      model,
      config,
      contents,
    });

    const res = response?.candidates?.[0]?.content?.parts?.[0]?.text;
    console.log("res:", res);

    if (!res) {
      throw new Error("No text in model response");
    }

    const output = JSON.parse(res);
    console.log(output);

    return {
      name: output.compliments?.[0]?.name,
      text: output.compliments?.[0]?.text,
      prompt: output.compliments?.[0]?.prompt,
    };
  } catch (error) {
    console.error("Gemini error:", error);
    throw new Error("Failed to parse response from gemini model");
  }
};

export const imgOutputUrl = async (prompt: string, img: any) => {
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  try {
    const input = {
      prompt: `${prompt} and make it one of the dirtiest animal and smooth af`,
      go_fast: true,
      megapixels: "1",
      num_outputs: 1,
      aspect_ratio: "1:1",
      output_format: "webp",
      output_quality: 80,
      num_inference_steps: 4,
    };

    const output = await replicate.run("black-forest-labs/flux-schnell", {
      input,
    });

    // To write the file to disk:
    // @ts-ignore
    return output[0].url().href;
  } catch (error) {
    console.error("Replicate error:", error);
    throw new Error("Failed to parse response from replicate model");
  }
};
