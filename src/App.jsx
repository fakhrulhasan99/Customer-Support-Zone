import { use, useEffect, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import TicketData from './components/ticketCard/TicketData'
import TaskStatus from './components/taskStatus/TaskStatus'
import ResolvedTask from './components/resolvedTask/ResolvedTask'
import Footer from './components/footer/Footer';
const ticketsData = fetch('/tickets.json').then(res => res.json())

function App() {

  const tickets = use(ticketsData);
  const [allTickets, setAllTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  useEffect(() => {
    setAllTickets(tickets);
  }, [tickets]);

  const handleAddToProgress = (ticket) => {

    if (inProgress.some(t => t.id === ticket.id)) {
      toast.error("Task already moved to Progress!");
      return
    };

    const updatedTickets = allTickets.map(t =>
      t.id === ticket.id ? { ...t, status: "In Progress" } : t
    );

    setAllTickets(updatedTickets);

    setInProgress(prev => [...prev, { ...ticket, status: "In Progress" }]);

    toast.success("Task moved to Progress!");
  };

  const handleComplete = (ticket) => {

    setInProgress(prev =>
      prev.filter(t => t.id !== ticket.id)
    );

    setAllTickets(prev =>
      prev.filter(t => t.id !== ticket.id)
    );

    setResolved(prev => [...prev, ticket]);

    toast.success("Task Completed Successfully!");
  };

  return (
    <div className='bg-[#dde1e4]'>

      <Navbar />

      <Banner
        inProgressCount={inProgress.length}
        resolvedCount={resolved.length}
      />
      {/* main section */}
      <section className='max-w-350 mx-auto p-5 lg:p-10'>
        <div className='grid lg:grid-cols-4 gap-4'>

          {/* Customer Tickets */}
          <div className='lg:col-span-3'>
            <h2 className='text-2xl font-bold pb-4'>Customer Tickets</h2>
            {
              allTickets.length === 0 ? (
                <p className="text-gray-500">
                  No more tickets available.
                </p>
              ) : (
                <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
                  {
                    allTickets.map(ticket => (
                      <TicketData
                        key={ticket.id}
                        ticket={ticket}
                        onAdd={handleAddToProgress}
                      />
                    ))
                  }
                </div>
              )
            }
          </div>

          {/* Tasks Side */}
          <div>
            <TaskStatus
              inProgress={inProgress}
              onComplete={handleComplete}
            />
            <ResolvedTask resolved={resolved} />
          </div>
        </div>
      </section>

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default App
