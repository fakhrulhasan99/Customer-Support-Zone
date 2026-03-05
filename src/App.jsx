import { use } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import TicketData from './components/ticketCard/TicketData'
const ticketsData = fetch('/tickets.json').then(res => res.json())

function App() {

  const tickets = use(ticketsData);
  console.log(tickets)

  return (
    <>
      <div className='bg-[#dde1e4]'>
        <Navbar />
        <Banner />
        {/* main section */}
        <div className='max-w-350 mx-auto p-5 lg:p-10'>
          {/* customer tickets section */}
          <div className='lg:w-8/12'>
            <h2 className='text-2xl font-bold pb-4'>Customer Tickets</h2>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
              {
                tickets.map(ticket => <TicketData key={ticket.id} ticket={ticket} />)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
