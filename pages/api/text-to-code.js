import { env } from "process"

export default async (req, res) => {

  console.log(JSON.parse(req.body).promt)
  res.send(JSON.parse(req.body).promt)
}
