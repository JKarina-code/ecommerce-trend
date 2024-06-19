'use client';
import { useState } from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

interface Props {
    quantity: number;
}

export  const QuantitySelector = ({ quantity }: Props) => {
    const [count, setCount] = useState(quantity);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="flex items-center">
            <button
                className="text-2xl text-gray-600 hover:text-gray-800"
                onClick={handleDecrement}
            >
                <IoRemoveCircleOutline />
            </button>
            <span className="mx-2 text-lg font-bold">{count}</span>
            <button
                className="text-2xl text-gray-600 hover:text-gray-800"
                onClick={handleIncrement}
            >
                <IoAddCircleOutline />
            </button>
        </div>
    );
}; 