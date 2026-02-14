const filters = document.querySelectorAll('.filter');
const products = document.querySelectorAll('.product');
const grid = document.getElementById('productGrid');
const expandBtn = document.getElementById('expandBtn');
const cartBtn = document.getElementById('cartBtn');

let expanded = false;

/* FILTER FUNCTION */
filters.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter.active').classList.remove('active');
        btn.classList.add('active');

        const category = btn.dataset.filter;

        products.forEach(product => {
            if (category === "all" || product.dataset.category === category) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
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
