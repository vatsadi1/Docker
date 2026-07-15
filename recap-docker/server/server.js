import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.get('/api', (req, res) => {
  res.json({ message: 'This is the API endpoint' })
})
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1, name: 'Product A', price: 10.99 },
    { id: 2, name: 'Product B', price: 19.99 },
    { id: 3, name: 'Product C', price: 5.99 }
  ]
  res.json(products)
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