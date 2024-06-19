import type { Size } from "@/interfaces/product.interface";
import clsx from "clsx";

interface Props {
  selectSize: Size;
  availableSizes: Size[];
}

export const SizeSelector = ({ selectSize, availableSizes }: Props) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Available sizes</h3>

      <div className="flex">
        {availableSizes.map((size) => (
          <button
            key={size}
            className={clsx("mx-2 hover:underline text-lg", {
              "underline": selectSize === size,
            })}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
