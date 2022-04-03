import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "../../src/config/sessionOptions";
import { db } from "../../src/db";

async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(400).send("");
    return;
  }

  const { name, password } = req.body as { name: string; password: string };
  const user = await db.user.findFirst({
    where: {
      Name: name,
      Password: password,
    },
  });

  if(!user){
    res.status(404).send("User not found or incorrect password");
    return;
  }

  req.session.id = user.UserID;
  await req.session.save();
  res.json(user);
}
export default withIronSessionApiRoute(login, sessionOptions);
