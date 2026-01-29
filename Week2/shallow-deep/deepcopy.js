// Given Data
const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [
    { product: "Laptop", price: 70000 }
  ]
};

// 1. Create a deep copy
const orderCopy = structuredClone(order);

// 2.i Modify customer.address.city
orderCopy.customer.address.city = "Bengaluru";

// 2.ii Modify items[0].price
orderCopy.items[0].price = 65000;

// 2.iii Verify original remains unchanged
console.log("Original Order:", order);
console.log("Copied Order:", orderCopy);