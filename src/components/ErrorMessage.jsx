import React from 'react';

function ErrorMessage({ message}) {
    return (
        <div className="text-center py-8">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                <strong className="font-bold">¡Oops! Algo salió mal</strong>
                <br />
                <span className="block sm:inline">{message || 'Error al cargar los datos'}</span>
            </div>
        </div>
    );
}

export default ErrorMessage;
