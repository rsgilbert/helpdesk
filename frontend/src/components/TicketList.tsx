export default function TicketList () {

    const tickets = [
        {
            id: 1,
            description: 'Test ticket',
            client: 'Jonathan',
            assignedTo: '',
            createdOn: '2024-01-20'
        },
        {
            id: 2,
            description: 'Broken laptop',
            client: 'Simon',            
            assignedTo: 'Kennedy',
            createdOn: '2024-01-21'
        }
    ]

    return (
        <div>
            <h1>Ticket list</h1>
            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Description</th>
                        <th>Client</th>
                        <th>Assigned To</th>
                        <th>Created On</th>
                    </tr>
                </thead>
                <tbody>
                { tickets.map(ticket => (
                    <tr className="readonly">
                        <td>{ticket.id}</td>
                        <td>{ticket.description}</td>
                        <td>{ticket.client}</td>
                        <td>{ticket.assignedTo}</td>
                        <td>{ticket.createdOn}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}