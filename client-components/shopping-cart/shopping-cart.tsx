import { faShoppingCart } from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ShoppingCart() {
  return (
    <div className="flex flex-row items-center p-2 pr-4 rounded-full shadow">
      <FontAwesomeIcon icon={faShoppingCart} height={40} width={40} />
      <span className="font-medium">Košík</span>
    </div>
  );
}
