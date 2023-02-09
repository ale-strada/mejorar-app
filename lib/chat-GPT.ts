import { ChatGPTAPI } from "chatgpt";

export async function example(mensaje: string) {
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY as any,
  });

  const res = await api.sendMessage(mensaje);
  return res.text;
}
