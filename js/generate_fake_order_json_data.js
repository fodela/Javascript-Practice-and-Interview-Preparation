const orders = [];
const orderStatuses = ["pending", "shipped", "delivered", "cancelled"];
const shippingMethods = ["Fedex", "UPS", "USPS", "DHL"];
for (let i = 0; i < 10; i++) {
  orders.push({
    orderId: i,
    customer: {
      name: `John Doe ${i}`,
      email: `john.doe${i}@example.com`,
      shippingAddress: `123 Main St, Anytown USA`,
    },
    items: [
      {
        name: `Product ${Math.floor(Math.random() * (10 - 1) + 1)}`,
        quantity: Math.floor(Math.random() * (10 - 1) + 1),
        price: Math.floor(Math.random() * (100 - 1) + 1),
      },
      {
        name: `Product ${Math.floor(Math.random() * (10 - 1) + 1)}`,
        quantity: Math.floor(Math.random() * (10 - 1) + 1),
        price: Math.floor(Math.random() * (100 - 1) + 1),
      },
    ],
    orderDate: new Date(),
    totalAmount: Math.floor(Math.random() * (100 - 1) + 1),
    paymentMethod: `VISA ${Math.floor(Math.random() * (10000 - 1) + 1)}`,
    shippingMethod:
      shippingMethods[Math.floor(Math.random() * shippingMethods.length)],
    trackingNumber: `FEDEX ${Math.floor(Math.random() * (10000 - 1) + 1)}`,
    status: orderStatuses[Math.floor(Math.random() * orderStatuses.length)],
    shippingAddress: `123 Main St, Anytown USA`,
    discounts: Math.floor(Math.random() * (100 - 1) + 1),
  });
}
console.log(orders);

console.log(JSON.stringify(orders));
