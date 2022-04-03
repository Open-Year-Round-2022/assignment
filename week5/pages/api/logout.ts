import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../src/config/sessionOptions";
import { NextApiRequest, NextApiResponse } from "next";

function logoutRoute(req: NextApiRequest, res: NextApiResponse) {
  req.session.destroy();
  res.send('okay');
}
export default withIronSessionApiRoute(logoutRoute, sessionOptions);
