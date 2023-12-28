import { formatCurrency } from "../../utilities/helpers";
import Button from "../../ui/Button"

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2 ">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 rounded-sm ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-col grow pt-0.5">

        <p className="font-medium">{name}</p>

        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(', ')}</p>

        <div className="mt-auto flex  items-center flex-grow justify-between">
          {!soldOut ? <p className="text-sm">
            {formatCurrency(unitPrice)}</p> : <p className="text-medium text-stone-500 uppercase ">
            Sold out
          </p>}
          <Button type="small">
            Add to Cart
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
