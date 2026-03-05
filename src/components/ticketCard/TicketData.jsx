import React from 'react';

const TicketData = ({ ticket, onAdd }) => {
    // console.log(onAdd)
    const tag = 1000 + ticket.id;
    const priorityColor = {
        High: "text-red-600",
        Medium: "text-yellow-400",
        Low: "text-green-500"
    };

    return (
        <div
            className="card bg-base-100 shadow-sm cursor-pointer hover:shadow-lg transition"
            onClick={() => onAdd(ticket)}
        >
            <div className="card-body">
                <h2 className="card-title justify-between">
                    {ticket.title}
                    <div className="badge badge-success">Open</div>
                </h2>

                <p>{ticket.description}</p>

                <div className="flex justify-between">
                    <div className="card-actions justify-start">
                        <div className="badge">#{tag}</div>
                        <div className={priorityColor[ticket.priority]}>
                            {ticket.priority} Priority
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge font-bold">{ticket.customer}</div>
                        <div className="badge">
                            {new Date(ticket.createdAt).toLocaleDateString()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketData;