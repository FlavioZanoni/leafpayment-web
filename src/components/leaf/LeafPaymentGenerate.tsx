import React from 'react';

const LeafPaymentGenerate: React.FC = () => {
    return (
        <div className="flex items-center justify-center">
            <select className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value="">Selecione um employer</option>
                <option value="employer1">Employer 1</option>
                <option value="employer2">Employer 2</option>
                <option value="employer3">Employer 3</option>
            </select>
        </div>
    );
};

export default LeafPaymentGenerate;