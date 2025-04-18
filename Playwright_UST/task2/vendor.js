let vendors = [];

function addProduct() {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <label>Product ID:</label>
        <input type="text" class="product-id" required>
        <label>Product Name:</label>
        <input type="text" class="product-name" required>
        <label>Product Price:</label>
        <input type="number" class="product-price" required>
    `;
    document.getElementById('products').appendChild(productDiv);
}

document.getElementById('vendorForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const vendor_id = document.getElementById('vendor_id').value.trim();
    const vendor_name = document.getElementById('vendor_name').value.trim();
    const product_rating = parseFloat(document.getElementById('product_rating').value);

    if (vendors.some(v => v.vendor_id === vendor_id)) {
        alert('Vendor ID must be unique');
        return;
    }

    if (vendor_name.length < 5) {
        alert('Vendor name must be at least 5 characters');
        return;
    }

    const productElements = document.querySelectorAll('.product');
    const products = [];

    for (let el of productElements) {
        const id = el.querySelector('.product-id').value.trim();
        const name = el.querySelector('.product-name').value.trim();
        const price = parseFloat(el.querySelector('.product-price').value);

        if (!id || !name || isNaN(price)) {
            alert('Fill out all product fields correctly');
            return;
        }

        products.push({ id, name, price });
    }

    vendors.push({ vendor_id, vendor_name, product_rating, products });

    vendors.sort((a, b) => b.product_rating - a.product_rating);

    displayVendors();
    this.reset();
    document.getElementById('products').innerHTML = '';
});

function displayVendors() {
    document.getElementById('products').innerHTML = '';
    const list = document.getElementById('vendorList');
    list.innerHTML = '';

    vendors.forEach(vendor => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${vendor.vendor_name} (Rating: ${vendor.product_rating})</h3>
        <p><strong>ID:</strong> ${vendor.vendor_id}</p>
        <table border="1" cellpadding="8" cellspacing="0" style="margin-bottom: 20px; width: 100%; border-collapse: collapse;">
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product ID</th>
                    <th>Price ($)</th>
                </tr>
            </thead>
            <tbody>
                ${vendor.products.map(p => `
                    <tr>
                        <td>${p.name}</td>
                        <td>${p.id}</td>
                        <td>${p.price}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
        `;
        list.appendChild(div);
    });
}