interface Order {
  id: string;
  amount: number;
  currency: string;
}

interface Stripe extends Order {
  card: string;
  cvc: string;
}

interface PayPal {
  email: string;
}

type CheckoutCard = Order & Stripe;
type CheckoutPaypal = Order & PayPal;
// type CheckoutABC = Order & { name: string };

const order: Order = {
  id: "xj28s",
  amount: 100,
  currency: "USD"
};

const orderCard: CheckoutCard = {
  ...order,
  card: "1000 2000 3000 4000",
  cvc: "123"
};

const orderPaypal: CheckoutPaypal = {
  ...order,
  email: "abc@def.com"
};

const assigned = Object.assign({}, order, orderCard);
