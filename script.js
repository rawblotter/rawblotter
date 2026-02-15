const products = [
  { id: 1, name: "TCK CD", price: 15, img: "assets/tck-cd.png", type: "music" },
  { id: 2, name: "TCK Digital Download", price: 10, img: "assets/tck-digital.png", type: "music" },
  { id: 3, name: "DAS CD", price: 15, img: "assets/das-cd.png", type: "music" },
  { id: 4, name: "DAS Digital Download", price: 10, img: "assets/das-digital.png", type: "music" },
  { id: 5, name: "Rawblotter OG Shirt (Black)", price: 25, img: "assets/rawblotter-og-shirt-black.png", type: "merch" },
  { id: 6, name: "Rawblotter OG Shirt (White)", price: 25, img: "assets/rawblotter-og-shirt-white.png", type: "merch" }
];

const grid = document.getElementById("productGrid");
const expandBtn = document.getElementById("expandBtn");

let expanded = false;

function renderProducts(list) {
  grid.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}">
      <h4>${p.name}</h4>
      <p>$${p.price}</p>
      <input type="number" min="1" value="1" id="qty-${p.id}">
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    div.onclick = () => singleView(p);
    grid.appendChild(div);
  });
}

function singleView(product) {
  grid.className = "grid single-view";
  renderProducts([product]);
}

expandBtn.onclick = () => {
  expanded = !expanded;
  grid.className = expanded ? "grid grid-6" : "grid grid-3";
  renderProducts(products);
};

function addToCart(id) {
  event.stopPropagation();
  const qty = document.getElementById(`qty-${id}`).value;
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.find(p => p.id === id);
  cart.push({ ...product, qty });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

/* CART PAGE */
if (document.getElementById("cartItems")) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cartItems");
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `<span>${item.name} x${item.qty}</span><span>$${item.price * item.qty}</span>`;
    container.appendChild(div);
  });

  document.getElementById("totalPrice").innerText = total;
}

renderProducts(products);
