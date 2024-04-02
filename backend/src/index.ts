import express from 'express'
import morgan from 'morgan'
import { TicketService } from './ticket.service'


const app = express()

app.use(express.json())
app.use(morgan('tiny', { immediate: true}))
app.use(morgan('tiny'))

app.get('/', (req, res)=>{
    res.send('success')
})

app.get('/tickets', async (req,res,next)=> {
    const ticketService = new TicketService()
    res.json(await ticketService.listTickets())
})


app.listen(4000, ()=>console.log('started on port 4000'))