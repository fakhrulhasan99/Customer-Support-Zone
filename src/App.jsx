import { use, useEffect, useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import TicketData from './components/ticketCard/TicketData'
import TaskStatus from './components/taskStatus/TaskStatus'
import ResolvedTask from './components/resolvedTask/ResolvedTask'
const ticketsData = fetch('/tickets.json').then(res => res.json())

function App() {

  const tickets = use(ticketsData);

  const [availableTickets, setAvailableTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  // initialize once
  useEffect(() => {
    setAvailableTickets(tickets);
  }, [tickets]);

  // ADD TO PROGRESS
  const handleAddToProgress = (ticket) => {

    if (inProgress.some(item => item.id === ticket.id)) {
      toast.error("Task already added!");
      return;
    }

    setInProgress(prev => [...prev, ticket]);

    // remove from main list
    setAvailableTickets(prev =>
      prev.filter(item => item.id !== ticket.id)
    );

    toast.success("Task moved to In-Progress!");
  };

  // COMPLETE TASK
  const handleComplete = (ticket) => {

    // remove from progress
    setInProgress(prev =>
      prev.filter(item => item.id !== ticket.id)
    );

    // add to resolved
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

      <div className='max-w-350 mx-auto p-5 lg:p-10'>
        <div className='grid lg:grid-cols-4 gap-4'>

          {/* Customer Tickets */}
          <div className='col-span-3'>
            <h2 className='text-2xl font-bold pb-4'>Customer Tickets</h2>

            {availableTickets.length === 0 ? (
              <p className="text-gray-500">
                No more tickets available.
              </p>
            ) : (
              <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
                {
                  availableTickets.map(ticket => (
                    <TicketData
                      key={ticket.id}
                      ticket={ticket}
                      onAdd={handleAddToProgress}
                    />
                  ))
                }
              </div>
            )}
          </div>

          {/* Right Side */}
          <div>
            <TaskStatus
              inProgress={inProgress}
              onComplete={handleComplete}
            />
            
          </div>

        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  )
}

export default App
