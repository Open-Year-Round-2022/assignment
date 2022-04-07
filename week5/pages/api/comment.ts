import { Reply } from "@prisma/client";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "../../src/config/sessionOptions";
import { db } from "../../src/db";

async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(400).send("");
    return;
  }

  const { reply } = req.body as { reply: Reply };
  await db.reply.create({
    data: reply,
  });

  res.json(reply);
}
export default withIronSessionApiRoute(login, sessionOptions);
