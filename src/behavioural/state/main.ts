import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder(); // Pending
order.approvePayment(); // Aprovado
order.waitPayment();
order.shipOrder();

order.rejectPayment(); // Daqui não altera mais o estado
order.approvePayment();
order.waitPayment();
order.approvePayment();
order.shipOrder();
