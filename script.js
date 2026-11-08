const products = [

  {
    id: 1,
    name: "Classic Oversized T-Shirt",
    brand: "Wazed Collection",
    category: "tshirt",
    price: 650,
    oldPrice: 850,
    size: "M / L / XL",
    color: "Black",
    tag: "BEST SELLER",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    desc: "A comfortable oversized cotton T-shirt suitable for everyday casual wear."
  },

  {
    id: 2,
    name: "Premium Black T-Shirt",
    brand: "Wazed Collection",
    category: "tshirt",
    price: 550,
    oldPrice: 700,
    size: "M / L / XL",
    color: "Black",
    tag: "POPULAR",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85",
    desc: "A simple black T-shirt with a modern fit and versatile everyday styling."
  },

  {
    id: 3,
    name: "White Casual T-Shirt",
    brand: "Wazed Collection",
    category: "tshirt",
    price: 490,
    oldPrice: 650,
    size: "M / L / XL",
    color: "White",
    tag: "NEW ARRIVAL",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=900&q=85",
    desc: "A clean and minimal white T-shirt designed for comfortable daily use."
  },

  {
    id: 4,
    name: "Men's Formal Trouser",
    brand: "Wazed Formal",
    category: "formal",
    price: 1250,
    oldPrice: 1500,
    size: "30 / 32 / 34 / 36",
    color: "Black",
    tag: "FORMAL STYLE",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=85",
    desc: "A smart formal trouser suitable for office, meetings and special occasions."
  },

  {
    id: 5,
    name: "Slim Fit Formal Pant",
    brand: "Wazed Formal",
    category: "formal",
    price: 1450,
    oldPrice: 1750,
    size: "30 / 32 / 34 / 36",
    color: "Navy Blue",
    tag: "OFFICE WEAR",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85",
    desc: "A modern slim-fit formal pant for a smart and professional appearance."
  },

  {
    id: 6,
    name: "Classic Blue Denim Jeans",
    brand: "Wazed Denim",
    category: "jeans",
    price: 1550,
    oldPrice: 1900,
    size: "30 / 32 / 34 / 36",
    color: "Blue",
    tag: "BEST SELLER",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85",
    desc: "Classic blue denim jeans with a comfortable fit for everyday outfits."
  },

  {
    id: 7,
    name: "Black Slim Fit Jeans",
    brand: "Wazed Denim",
    category: "jeans",
    price: 1650,
    oldPrice: 1950,
    size: "30 / 32 / 34 / 36",
    color: "Black",
    tag: "TRENDING",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85",
    desc: "Stylish black denim jeans with a slim fit and versatile design."
  },

  {
    id: 8,
    name: "Men's Casual Shirt",
    brand: "Wazed Casual",
    category: "casual",
    price: 950,
    oldPrice: 1200,
    size: "M / L / XL",
    color: "Printed",
    tag: "CASUAL PICK",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=85",
    desc: "A stylish casual shirt suitable for outings, gatherings and everyday wear."
  },

  {
    id: 9,
    name: "Premium Polo T-Shirt",
    brand: "Wazed Collection",
    category: "tshirt",
    price: 850,
    oldPrice: 1050,
    size: "M / L / XL",
    color: "Navy",
    tag: "PREMIUM",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1625910513413-5fc45e7d7c9e?auto=format&fit=crop&w=900&q=85",
    desc: "A versatile polo T-shirt combining a clean design with casual comfort."
  },

  {
    id: 10,
    name: "Casual Beige Trouser",
    brand: "Wazed Casual",
    category: "casual",
    price: 1350,
    oldPrice: 1600,
    size: "30 / 32 / 34 / 36",
    color: "Beige",
    tag: "NEW STYLE",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=900&q=85",
    desc: "A comfortable beige trouser that works well with casual shirts and T-shirts."
  },

  {
    id: 11,
    name: "Dark Blue Denim Jeans",
    brand: "Wazed Denim",
    category: "jeans",
    price: 1750,
    oldPrice: 2100,
    size: "30 / 32 / 34 / 36",
    color: "Dark Blue",
    tag: "POPULAR",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1511196044526-5cb3bcb7071b?auto=format&fit=crop&w=900&q=85",
    desc: "Dark blue denim jeans with a timeless look and comfortable everyday fit."
  },

  {
    id: 12,
    name: "Casual Checked Shirt",
    brand: "Wazed Casual",
    category: "casual",
    price: 1100,
    oldPrice: 1350,
    size: "M / L / XL",
    color: "Multi",
    tag: "CASUAL STYLE",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=85",
    desc: "A casual checked shirt suitable for everyday fashion and relaxed occasions."
  }

];



const money = amount =>
  "৳" + Number(amount).toLocaleString("en-BD");

let activeCategory = "all";
let searchTerm = "";
let sortMode = "featured";

let cart = JSON.parse(localStorage.getItem("wazed_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wazed_wishlist")) || [];


// ======================================
// DOM ELEMENTS
// ======================================

const productGrid = document.getElementById("productGrid");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");

const cartDrawer = document.getElementById("cartDrawer");
const wishlistDrawer = document.getElementById("wishlistDrawer");

const overlay = document.getElementById("overlay");

const cartItems = document.getElementById("cartItems");
const wishlistItems = document.getElementById("wishlistItems");

const cartTotal = document.getElementById("cartTotal");

const cartCount = document.getElementById("cartCount");
const wishlistCount = document.getElementById("wishlistCount");

const toastElement = document.getElementById("toast");


// ======================================
// TOAST
// ======================================

let toastTimer;

function toast(message) {

  toastElement.textContent = message;
  toastElement.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 2200);

}


// ======================================
// LOCAL STORAGE
// ======================================

function saveState() {

  localStorage.setItem("wazed_cart", JSON.stringify(cart));

  localStorage.setItem(
    "wazed_wishlist",
    JSON.stringify(wishlist)
  );

}


// ======================================
// THEME MANAGEMENT
// ======================================

const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {

  document.body.classList.toggle(
    "light-theme",
    theme === "light"
  );

  themeToggle.innerHTML =
    theme === "light"
      ? '<i data-lucide="sun"></i>'
      : '<i data-lucide="moon"></i>';

  localStorage.setItem("wazed_theme", theme);

  lucide.createIcons();

}

const savedTheme =
  localStorage.getItem("wazed_theme") || "dark";

applyTheme(savedTheme);

themeToggle.addEventListener("click", () => {

  const isLight =
    document.body.classList.contains("light-theme");

  applyTheme(isLight ? "dark" : "light");

});


// ======================================
// FILTER PRODUCTS
// ======================================

function getFilteredProducts() {

  let filtered = [...products];

  if (activeCategory !== "all") {

    filtered = filtered.filter(
      product => product.category === activeCategory
    );

  }

  if (searchTerm) {

    filtered = filtered.filter(product => {

      const searchable =
        `${product.name} ${product.brand} ${product.category} ${product.color}`
          .toLowerCase();

      return searchable.includes(searchTerm);

    });

  }

  if (sortMode === "low") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sortMode === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (sortMode === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return filtered;

}


// ======================================
// RENDER PRODUCTS
// ======================================

function renderProducts() {

  const filtered = getFilteredProducts();

  productGrid.innerHTML = "";

  resultCount.textContent =
    `Showing ${filtered.length} of ${products.length} products`;

  emptyState.classList.toggle(
    "show",
    filtered.length === 0
  );

  filtered.forEach(product => {

    const isWished = wishlist.includes(product.id);

    const card = document.createElement("article");

    card.className = "product-card";

    card.innerHTML = `

      <div class="product-image">

        <img
          src="${product.img}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/600x750/222222/ffffff?text=WAZED+STORE';"
        >

        <span class="product-tag">
          ${product.tag}
        </span>

        <button
          class="wish-btn ${isWished ? "active" : ""}"
          data-action="wish"
          data-id="${product.id}"
          aria-label="Add to wishlist"
        >
          <i data-lucide="heart"></i>
        </button>

        <button
          class="quick-btn"
          data-action="quick"
          data-id="${product.id}"
        >
          QUICK VIEW
        </button>

      </div>

      <div class="product-info">

        <span class="product-brand">
          ${product.brand}
        </span>

        <h3>${product.name}</h3>

        <p class="product-meta">
          ${product.size} · ${product.color} · ★ ${product.rating}
        </p>

        <div class="product-bottom">

          <div class="product-price">
            ${money(product.price)}
          </div>

          <button
            class="add-btn"
            data-action="add"
            data-id="${product.id}"
            aria-label="Add to cart"
          >
            <i data-lucide="plus"></i>
          </button>

        </div>

      </div>

    `;

    productGrid.appendChild(card);

  });

  lucide.createIcons();

  updateBadges();

}


// ======================================
// UPDATE BADGES
// ======================================

function updateBadges() {

  cartCount.textContent = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  wishlistCount.textContent = wishlist.length;

}


// ======================================
// ADD TO CART
// ======================================

function addToCart(id) {

  const existing = cart.find(
    item => item.id === id
  );

  if (existing) {

    existing.quantity++;

  } else {

    cart.push({
      id,
      quantity: 1
    });

  }

  saveState();

  renderCart();

  updateBadges();

  toast("Product added to cart!");

}


// ======================================
// REMOVE FROM CART
// ======================================

function removeFromCart(id) {

  cart = cart.filter(
    item => item.id !== id
  );

  saveState();

  renderCart();

  updateBadges();

  toast("Product removed from cart");

}


// ======================================
// WISHLIST
// ======================================

function toggleWishlist(id) {

  if (wishlist.includes(id)) {

    wishlist = wishlist.filter(
      item => item !== id
    );

    toast("Removed from wishlist");

  } else {

    wishlist.push(id);

    toast("Added to wishlist");

  }

  saveState();

  renderProducts();

  renderWishlist();

  updateBadges();

}


// ======================================
// RENDER CART
// ======================================

function renderCart() {

  if (!cart.length) {

    cartItems.innerHTML = `
      <div class="empty-message">
        Your shopping bag is empty.
      </div>
    `;

    cartTotal.textContent = money(0);

    return;

  }

  let total = 0;

  cartItems.innerHTML = "";

  cart.forEach(item => {

    const product = products.find(
      product => product.id === item.id
    );

    if (!product) return;

    total += product.price * item.quantity;

    const element = document.createElement("div");

    element.className = "cart-item";

    element.innerHTML = `

      <img src="${product.img}" alt="${product.name}">

      <div class="cart-item-info">

        <h4>${product.name}</h4>

        <p>
          ${money(product.price)} × ${item.quantity}
        </p>

        <button
          data-action="remove-cart"
          data-id="${product.id}"
        >
          Remove
        </button>

      </div>

    `;

    cartItems.appendChild(element);

  });

  cartTotal.textContent = money(total);

}


// ======================================
// RENDER WISHLIST
// ======================================

function renderWishlist() {

  if (!wishlist.length) {

    wishlistItems.innerHTML = `
      <div class="empty-message">
        Your wishlist is empty.
      </div>
    `;

    return;

  }

  wishlistItems.innerHTML = "";

  wishlist.forEach(id => {

    const product = products.find(
      item => item.id === id
    );

    if (!product) return;

    const element = document.createElement("div");

    element.className = "cart-item";

    element.innerHTML = `

      <img src="${product.img}" alt="${product.name}">

      <div class="cart-item-info">

        <h4>${product.name}</h4>

        <p>${money(product.price)}</p>

        <button
          data-action="unwish"
          data-id="${product.id}"
        >
          Remove
        </button>

        <button
          data-action="add"
          data-id="${product.id}"
        >
          Add to Cart
        </button>

      </div>

    `;

    wishlistItems.appendChild(element);

  });

}


// ======================================
// DRAWER MANAGEMENT
// ======================================

function openDrawer(drawer) {

  cartDrawer.classList.remove("open");

  wishlistDrawer.classList.remove("open");

  drawer.classList.add("open");

  overlay.classList.add("show");

}

function closeDrawers() {

  cartDrawer.classList.remove("open");

  wishlistDrawer.classList.remove("open");

  overlay.classList.remove("show");

  closeModal();

}

document.getElementById("cartOpen").addEventListener(
  "click",
  () => {

    renderCart();

    openDrawer(cartDrawer);

  }
);

document.getElementById("wishlistOpen").addEventListener(
  "click",
  () => {

    renderWishlist();

    openDrawer(wishlistDrawer);

  }
);

overlay.addEventListener("click", closeDrawers);

document.querySelectorAll("[data-close]").forEach(button => {

  button.addEventListener("click", closeDrawers);

});


// ======================================
// QUICK VIEW
// ======================================

const quickModal = document.getElementById("quickModal");

const quickContent = document.getElementById("quickContent");

function openQuick(id) {

  const product = products.find(
    item => item.id === id
  );

  if (!product) return;

  quickContent.innerHTML = `

    <div class="quick-view">

      <img
        src="${product.img}"
        alt="${product.name}"
      >

      <div>

        <span class="product-brand">
          ${product.brand}
        </span>

        <h2>${product.name}</h2>

        <div class="product-price">
          ${money(product.price)}
        </div>

        <p>${product.desc}</p>

        <p>
          <strong>Available Sizes:</strong> ${product.size}
        </p>

        <p>
          <strong>Color:</strong> ${product.color}
        </p>

        <p>
          <strong>Rating:</strong> ★ ${product.rating}
        </p>

        <button
          class="btn btn-primary"
          data-action="add"
          data-id="${product.id}"
        >
          Add to Cart
          <i data-lucide="shopping-bag"></i>
        </button>

      </div>

    </div>

  `;

  quickModal.classList.add("open");

  lucide.createIcons();

}

function closeModal() {

  quickModal.classList.remove("open");

}

document.getElementById("modalClose").addEventListener(
  "click",
  closeModal
);


// ======================================
// PRODUCT CLICK EVENTS
// ======================================

document.addEventListener("click", event => {

  const button = event.target.closest("[data-action]");

  if (!button) return;

  const id = Number(button.dataset.id);

  const action = button.dataset.action;

  if (action === "add") {
    addToCart(id);
  }

  if (action === "wish") {
    toggleWishlist(id);
  }

  if (action === "quick") {
    openQuick(id);
  }

  if (action === "remove-cart") {
    removeFromCart(id);
  }

  if (action === "unwish") {
    toggleWishlist(id);
  }

});


// ======================================
// CATEGORY FILTERS
// ======================================

document.querySelectorAll(".filter-btn").forEach(button => {

  button.addEventListener("click", () => {

    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    activeCategory = button.dataset.category;

    renderProducts();

  });

});


// ======================================
// CATEGORY CARDS
// ======================================

document.querySelectorAll("[data-jump-category]").forEach(card => {

  card.addEventListener("click", () => {

    activeCategory = card.dataset.jumpCategory;

    document.querySelectorAll(".filter-btn").forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.category === activeCategory
      );

    });

    renderProducts();

  });

});


// ======================================
// SEARCH
// ======================================

const productSearch = document.getElementById("productSearch");

productSearch.addEventListener("input", event => {

  searchTerm = event.target.value.trim().toLowerCase();

  renderProducts();

});


// ======================================
// SEARCH TOGGLE
// ======================================

const searchPanel = document.getElementById("searchPanel");

document.getElementById("searchToggle").addEventListener(
  "click",
  () => {

    searchPanel.classList.toggle("show");

    if (searchPanel.classList.contains("show")) {

      productSearch.focus();

      document.getElementById("collection").scrollIntoView({
        behavior: "smooth"
      });

    }

  }
);


// ======================================
// SORTING
// ======================================

document.getElementById("sortSelect").addEventListener(
  "change",
  event => {

    sortMode = event.target.value;

    renderProducts();

  }
);


// ======================================
// CLEAR FILTERS
// ======================================

document.getElementById("clearFilters").addEventListener(
  "click",
  () => {

    activeCategory = "all";

    searchTerm = "";

    sortMode = "featured";

    productSearch.value = "";

    document.getElementById("sortSelect").value = "featured";

    document.querySelectorAll(".filter-btn").forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.category === "all"
      );

    });

    renderProducts();

  }
);


// ======================================
// MOBILE MENU
// ======================================

const nav = document.getElementById("nav");

document.getElementById("menuToggle").addEventListener(
  "click",
  () => {

    nav.classList.toggle("open");

  }
);

nav.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");

  });

});


// ======================================
// CHECKOUT DEMO
// ======================================

document.getElementById("checkoutBtn").addEventListener(
  "click",
  () => {

    toast("This is a demo store. Online checkout is not available.");

  }
);



document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    closeDrawers();

    nav.classList.remove("open");

  }

});


function initializeStore() {

  renderProducts();

  renderCart();

  renderWishlist();

  updateBadges();

  lucide.createIcons();

}

initializeStore();