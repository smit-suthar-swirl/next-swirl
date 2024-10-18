export default function handler(req, res) {

  if (req.method === 'GET') {
    res.status(200).json(data)
  }
  else if (req.method === 'POST') {
    const data = req.body.data
    const newData = {
      id: Date.now(),
      text: data,
    }
    res.status(201).json(newData)
  }

}
