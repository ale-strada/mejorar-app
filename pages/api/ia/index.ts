import { handlerCORS } from "lib/middlewares";
import { NextApiRequest, NextApiResponse } from "next";
import methods from "micro-method-router";
import { example } from "lib/chat-GPT";

async function handlerPost(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await example(req.body.message);
    res.status(200).send(JSON.stringify(response));
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

const handler = methods({
  post: handlerPost,
});

export default handlerCORS(handler);
