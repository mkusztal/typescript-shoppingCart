import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/data.json";
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);

  if (item === null) {
    return null;
  }
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item?.imgUrl}
        alt=""
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item?.name}

          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.7rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.8rem" }}>
          {formatCurrency(item?.price as number)}
        </div>
      </div>

      <div>{formatCurrency((item?.price as number) * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item?.id as number)}
      >
        &times;
      </Button>
    </Stack>
  );
};
