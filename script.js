const grid = document.getElementById("productGrid");
const expandBtn = document.getElementById("expandBtn");
const cartBtn = document.getElementById("cartBtn");
const supportBtn = document.getElementById("supportBtn");
const filters = document.querySelectorAll(".filter");
const products = document.querySelectorAll(".product");

let gridState = 3;

/* Expand grid */
expandBtn.addEventListener("click", () => {
    grid.className = "grid " + (gridState === 3 ? "grid-6" : "grid-3");
    gridState = gridState === 3 ? 6 : 3;
});

/* Filters */
filters.forEach(filter => {
    filter.addEventListener("click", () => {
        const type = filter.dataset.filter;
        products.forEach(p => {
            p.style.display = p.classList.contains(type) ? "block" : "none";
        });
    });
});

/* Product focus (1 grid) */
products.forEach(product => {
    product.addEventListener("click", () => {
        grid.className = "grid grid-1";
        products.forEach(p => p.style.display = "none");
        product.style.display = "block";
    });
});

/* Cart */
cartBtn.addEventListener("click", () => {
    window.location.href = "cart.html";
});

/* Support */
supportBtn.addEventListener("click", () => {
    window.open("https://your-support-link.com", "_blank");
});
