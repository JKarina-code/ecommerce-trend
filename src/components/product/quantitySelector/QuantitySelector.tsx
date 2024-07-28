"use client";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
  onQuantityChanged: (value: number) => void;
}

export const QuantitySelector = ({ quantity, onQuantityChanged }: Props) => {
  const onValueChanged = (value: number) => {
    if (quantity + value < 1) return;
    onQuantityChanged(quantity + value);
  };
  return (
    <div className="flex items-center">
      <button
        className="text-2xl text-gray-600 hover:text-gray-800"
        onClick={() => onValueChanged(-1)}
      >
        <IoRemoveCircleOutline />
      </button>
      <span className="mx-2 text-lg font-bold">{quantity}</span>
      <button
        className="text-2xl text-gray-600 hover:text-gray-800"
        onClick={() => onValueChanged(+1)}
      >
        <IoAddCircleOutline />
      </button>
    </div>
  );
};
