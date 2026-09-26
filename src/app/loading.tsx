import React from 'react';

const loading = () => {
    return (
        <div className="flex min-h-[60vh] items-center justify-center">
            <span className="loading loading-spinner loading-lg text-accent"></span>
        </div>
    );
};

export default loading;