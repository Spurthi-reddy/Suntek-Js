const express = require('express');
const app = express();
app.use(express.json());

let products = [
    { productId: 1, name: "iPhone 15", price: 999, brand: "Apple" },
    { productId: 2, name: "Galaxy S23", price: 850, brand: "Samsung" }
];

app.get('/products', (req, res) => res.json(products));

app.get('/products/:identifier', (req, res) => {
    const param = req.params.identifier;
    const product = products.find(p => p.productId === parseInt(param));
    if (product) return res.json(product);
    const brandProducts = products.filter(p => p.brand.toLowerCase() === param.toLowerCase());
    if (brandProducts.length > 0) return res.json(brandProducts);
    res.status(404).json({ message: "Product or Brand not found" });
});

app.post('/products', (req, res) => {
    const newProduct = { productId: products.length + 1, ...req.body };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.productId === id);
    if (index !== -1) {
        products[index] = { productId: id, ...req.body };
        res.json(products[index]);
    } else res.status(404).json({ message: "Product not found" });
});

app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    products = products.filter(p => p.productId !== id);
    res.json({ message: "Product deleted successfully" });
});

app.listen(3000, () => console.log('Server running on http://127.0.0.1:3000'));