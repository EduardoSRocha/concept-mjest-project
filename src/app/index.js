import express from 'express'
import colors from 'colors'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.listen(3000, () => {
  console.log(colors.green('Server is running on port 3000'))
})

export default app


