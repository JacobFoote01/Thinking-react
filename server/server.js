import express from 'express'
import ViteExpress from 'vite-express'
import morgan from 'morgan'

//set up an express instance called 'app'
const app = express()

//set up middleware
app.use(morgan('dev')) 
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(express.json())

//import handler functions 
import handlerFunctions from './controller.js'

//routes go here
app.get('/invoices', handlerFunctions.getInvoices)
app.post('/addInvoice', handlerFunctions.addInvoice)
app.delete('/deleteInvoice/:id', handlerFunctions.deleteInvoice)
app.put('/editInvoice/:id', handlerFunctions.editInvoice)

//open up a door to the server 
ViteExpress.listen(app, 2323, () => console.log(`We've been expecting you! Report to http://localhost:2323`))