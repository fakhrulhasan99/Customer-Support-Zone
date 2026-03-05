import React from 'react';

const TaskStatus = ({ inProgress, onComplete }) => {

    console.log(inProgress)
    return (
        <div>
            <h2 className='text-2xl font-bold pb-4'>Task Status</h2>
            <div className="card shadow-sm gap-4">
                {
                    inProgress.length === 0 ? (
                        <div className="bg-base-100 p-6 rounded-lg text-center shadow-sm">
                            <p className="text-gray-500 font-medium">
                                Select a ticket to add to Task Status
                            </p>
                        </div>
                    ) : (
                        <div className="card shadow-sm gap-4">
                            {
                                inProgress.map(progress =>
                                    <div
                                        key={progress.id}
                                        className="card-body bg-base-100 items-center text-center rounded-lg"
                                    >
                                        <h2 className="card-title">
                                            {progress.title}
                                        </h2>

                                        <button
                                            onClick={() => onComplete(progress)}
                                            className="w-full btn btn-success"
                                        >
                                            Complete
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TaskStatus;