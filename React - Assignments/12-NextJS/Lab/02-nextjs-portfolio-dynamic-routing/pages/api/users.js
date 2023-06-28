// pages/api/users.js
const users = [
  { id: 1, name: 'Imran' },
  { id: 2, name: 'Mohammad' }
]

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(users)
  } else if (req.method === 'POST') {
    // Handle POST request to add a new user
  } else {
    res.status(405).end() // Method Not Allowed
  }
}
