import React from 'react';

const ResolvedTask = ({ resolved }) => {

    return (
        <div className="mt-6">
            <h2 className='text-2xl font-bold pb-4'>Resolved Tasks</h2>
            {
                resolved.length === 0 ? (
                    <div className="bg-base-100 p-6 rounded-lg text-center shadow-sm">
                        <p className="text-gray-500 font-medium">
                            No resolved tasks yet.
                        </p>
                    </div>
                ) : (
                    <div className="card shadow-sm gap-4">
                        {

                            resolved.map(task =>
                                <div
                                    key={task.id}
                                    className="card-body bg-[#E0E7FF] items-center text-center rounded-lg"
                                >
                                    <h2 className="card-title">
                                        {task.title}
                                    </h2>
                                </div>
                            )
                        }
                    </div>
                )
            }

        </div>
    );
};

export default ResolvedTask;