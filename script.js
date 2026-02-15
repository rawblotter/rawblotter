const filters = document.querySelectorAll('.filter');
const products = document.querySelectorAll('.product');
const grid = document.getElementById('productGrid');
const expandBtn = document.getElementById('expandBtn');
const cartBtn = document.getElementById('cartBtn');

let expanded = false;

/* FILTER PRODUCTS */
filters.forEach(btn => {
    btn.addEventListener('click', () => {

        filters.forEach(f => f.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.dataset.filter;

        products.forEach(product => {
            product.style.display =
                product.dataset.category === category ? "block" : "none";
        });
    });
});

/* EXPAND GRID */
expandBtn.addEventListener('click', () => {
    expanded = !expanded;
    grid.classList.toggle('expanded');
});

/* CART REDIRECT */
cartBtn.addEventListener('click', () => {
    window.location.href = "cart.html";
});
