import React from 'react';

const TicketData = ({ ticket }) => {

    const tag = 1000 + ticket.id;

    return (
        // {
        //     "id": 1,
        //     "title": "Login page not loading",
        //     "description": "Customer reports that the login page keeps loading indefinitely on mobile devices.",
        //     "customer": "Ayesha Rahman",
        //     "priority": "High",
        //     "status": "Open",
        //     "createdAt": "2026-03-01T09:15:00"
        // }
        <div div className="card bg-base-100 shadow-sm" >
            <div className="card-body">
                <h2 className="card-title justify-between">
                    {ticket.title}
                    <div className="badge badge-success">Success</div>
                    {/* <div className="badge badge-warning">Warning</div>
                    <div className="badge badge-error">Error</div> */}
                </h2>
                <p>{ticket.description}</p>
                <div className="flex justify-between">
                    <div className="card-actions justify-start">
                        <div className="badge">#{tag}</div>
                        <div className="badge">{ticket.priority} Priority</div>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge font-bold">{ticket.customer}</div>
                        <div className="badge">{ticket.createdAt}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketData;