
import { Client} from 'pg'

export class TicketService {
    query = new Query()
    async listTickets() {
        return this.query.execute()
    }
}


class Query {
    client = new Client({
        user: 'postgres',
        password: 'stanislav100',
        host: 'localhost',
        database: 'esupport'
    })
  
    async execute() {
        await this.client.connect()
        const res = await this.client.query('SELECT * FROM ticket')
        console.log(res)
        return res.rows
    }
}