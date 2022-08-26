// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  let data = require(`/public/json/${req.query.metadata}.json`)
  console.log(req.query)
  res.status(200).json(data)
}
