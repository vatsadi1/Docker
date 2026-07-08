import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.get('/api', (req, res) => {
  res.json({ message: 'This is the API endpoint' })
})

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ]
  res.json(users)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})