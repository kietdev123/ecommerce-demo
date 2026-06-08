const PRODUCTS = [
  { id: "p01", name: "Tai nghe Nova Pulse ANC", category: "Audio", price: 1890000, rating: 4.8, stock: 18, seed: "headphone", desc: "Tai nghe chống ồn chủ động, âm trầm gọn, pin 36 giờ và đệm tai êm cho cả ngày làm việc." },
  { id: "p02", name: "Balo Urban Pack 24L", category: "Travel", price: 790000, rating: 4.7, stock: 32, seed: "backpack", desc: "Balo chống nước nhẹ, ngăn laptop riêng và khoang phụ rộng cho di chuyển hằng ngày." },
  { id: "p03", name: "Đồng hồ Fit One", category: "Wearable", price: 1290000, rating: 4.6, stock: 21, seed: "watch", desc: "Theo dõi sức khỏe, luyện tập, giấc ngủ và thông báo điện thoại với màn hình sáng rõ ngoài trời." },
  { id: "p04", name: "Bàn phím cơ Terra K68", category: "Workspace", price: 1490000, rating: 4.9, stock: 14, seed: "keyboard", desc: "Layout gọn, switch êm, hot-swap, đèn nền tinh tế và kết nối đa thiết bị." },
  { id: "p05", name: "Bình giữ nhiệt Slate 600ml", category: "Lifestyle", price: 360000, rating: 4.5, stock: 44, seed: "bottle", desc: "Giữ nóng lạnh lâu, nắp kín, bề mặt nhám chắc tay và dễ mang theo." },
  { id: "p06", name: "Đèn bàn Lumi Focus", category: "Workspace", price: 620000, rating: 4.7, stock: 26, seed: "desk-lamp", desc: "Ánh sáng đổi nhiệt màu, dimmer mượt và chân đế chắc cho góc làm việc gọn gàng." },
  { id: "p07", name: "Loa Bluetooth Mini Wave", category: "Audio", price: 890000, rating: 4.4, stock: 17, seed: "speaker", desc: "Loa nhỏ gọn, chống nước nhẹ, âm lượng lớn và ghép đôi stereo cho buổi gặp mặt." },
  { id: "p08", name: "Chuột không dây Aero M2", category: "Workspace", price: 520000, rating: 4.6, stock: 39, seed: "mouse", desc: "Chuột nhẹ, cảm biến chính xác, click êm và pin dài cho laptop lẫn desktop." },
  { id: "p09", name: "Kính mát Coastline", category: "Lifestyle", price: 680000, rating: 4.3, stock: 23, seed: "sunglasses", desc: "Tròng phân cực, gọng nhẹ, dáng tối giản phù hợp đi phố và du lịch." },
  { id: "p10", name: "Túi đeo chéo Transit", category: "Travel", price: 450000, rating: 4.5, stock: 31, seed: "crossbody-bag", desc: "Túi đeo chéo nhiều ngăn, khóa mượt và chất liệu bền cho vật dụng nhỏ." },
  { id: "p11", name: "Camera hành trình Pocket 4K", category: "Creator", price: 2390000, rating: 4.8, stock: 9, seed: "camera", desc: "Quay 4K ổn định, thân nhỏ, chống rung điện tử và bộ phụ kiện gắn linh hoạt." },
  { id: "p12", name: "Sổ tay Minimal Notes", category: "Lifestyle", price: 180000, rating: 4.4, stock: 58, seed: "notebook", desc: "Giấy dày, bìa cứng, gáy mở phẳng và thiết kế sạch cho ghi chú mỗi ngày." }
];

const state = {
  cartKey: "nova_cart",
  orderKey: "nova_orders"
};

const money = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" });
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function imageFor(product, width = 700, height = 520) {
  return `https://picsum.photos/seed/nova-${product.seed}/${width}/${height}`;
}

function wait(ms = 650) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fakeRequest(task, ms = 650) {
  showLoading(true);
  await wait(ms);
  try {
    return typeof task === "function" ? task() : task;
  } finally {
    showLoading(false);
  }
}

function showLoading(show) {
  const el = $("#loading");
  if (el) el.classList.toggle("show", show);
}

function getCart() {
  return JSON.parse(localStorage.getItem(state.cartKey) || "[]");
}

function saveCart(cart) {
  localStorage.setItem(state.cartKey, JSON.stringify(cart));
  updateCartCount();
}

function getProduct(id) {
  return PRODUCTS.find((product) => product.id === id);
}

function addToCart(id, qty = 1) {
  const cart = getCart();
  const found = cart.find((item) => item.id === id);
  if (found) found.qty += qty;
  else cart.push({ id, qty });
  saveCart(cart);
}

function setCartQty(id, qty) {
  const next = getCart()
    .map((item) => item.id === id ? { ...item, qty: Math.max(1, qty) } : item)
    .filter((item) => item.qty > 0);
  saveCart(next);
}

function removeFromCart(id) {
  saveCart(getCart().filter((item) => item.id !== id));
}

function cartDetails() {
  return getCart()
    .map((item) => ({ ...getProduct(item.id), qty: item.qty }))
    .filter((item) => item.id);
}

function totals() {
  const subtotal = cartDetails().reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 0 && subtotal < 1500000 ? 45000 : 0;
  const discount = subtotal >= 3000000 ? Math.round(subtotal * 0.08) : 0;
  return { subtotal, shipping, discount, grand: subtotal + shipping - discount };
}

function updateCartCount() {
  const count = getCart().reduce((sum, item) => sum + item.qty, 0);
  $$(".cart-count").forEach((el) => { el.textContent = count; });
}

function toast(message) {
  const host = $("#toast");
  if (!host) return;
  const item = document.createElement("div");
  item.className = "toast-item";
  item.textContent = message;
  host.append(item);
  setTimeout(() => item.remove(), 2800);
}

function openModal(title, message, actionText = "Đã hiểu", onAction) {
  const backdrop = $("#modalBackdrop");
  if (!backdrop) return;
  $("#modalTitle").textContent = title;
  $("#modalMessage").textContent = message;
  $("#modalAction").textContent = actionText;
  backdrop.classList.add("show");
  $("#modalAction").onclick = () => {
    backdrop.classList.remove("show");
    if (onAction) onAction();
  };
}

function renderShell() {
  document.body.insertAdjacentHTML("beforeend", `
    <div id="loading" class="loading" aria-live="polite" aria-label="Đang tải"><div class="spinner"></div></div>
    <div id="toast" class="toast" aria-live="polite"></div>
    <div id="modalBackdrop" class="modal-backdrop" role="dialog" aria-modal="true">
      <div class="modal">
        <h2 id="modalTitle"></h2>
        <p id="modalMessage"></p>
        <div class="actions">
          <button id="modalAction" class="btn primary" type="button">Đã hiểu</button>
        </div>
      </div>
    </div>
  `);
  $("#modalBackdrop").addEventListener("click", (event) => {
    if (event.target.id === "modalBackdrop") event.currentTarget.classList.remove("show");
  });
  updateCartCount();
}

function renderProducts(list = PRODUCTS) {
  const grid = $("#productGrid");
  if (!grid) return;
  grid.innerHTML = list.map((product) => `
    <article class="product-card">
      <a href="product.html?id=${product.id}" aria-label="Xem ${product.name}">
        <img src="${imageFor(product)}" alt="${product.name}" loading="lazy">
      </a>
      <div class="product-body">
        <span class="tag">${product.category}</span>
        <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <div class="line-actions">
          <span class="price">${money.format(product.price)}</span>
          <span class="rating">${product.rating} sao</span>
        </div>
        <div class="card-foot">
          <a class="btn" href="product.html?id=${product.id}">Chi tiết</a>
          <button class="btn primary" data-add="${product.id}" title="Thêm vào giỏ" type="button">+</button>
        </div>
      </div>
    </article>
  `).join("");
}

function initHome() {
  renderProducts(PRODUCTS);
  const search = $("#searchInput");
  const category = $("#categoryFilter");
  const sort = $("#sortSelect");
  const cats = ["all", ...new Set(PRODUCTS.map((p) => p.category))];
  category.innerHTML = cats.map((cat) => `<option value="${cat}">${cat === "all" ? "Tất cả" : cat}</option>`).join("");
  const apply = () => {
    const keyword = search.value.trim().toLowerCase();
    let list = PRODUCTS.filter((p) => {
      const matchedKeyword = `${p.name} ${p.category}`.toLowerCase().includes(keyword);
      const matchedCat = category.value === "all" || p.category === category.value;
      return matchedKeyword && matchedCat;
    });
    if (sort.value === "asc") list.sort((a, b) => a.price - b.price);
    if (sort.value === "desc") list.sort((a, b) => b.price - a.price);
    if (sort.value === "rating") list.sort((a, b) => b.rating - a.rating);
    renderProducts(list);
  };
  [search, category, sort].forEach((el) => el.addEventListener("input", apply));
}

function initProduct() {
  const id = new URLSearchParams(location.search).get("id") || PRODUCTS[0].id;
  const product = getProduct(id) || PRODUCTS[0];
  $("#detailRoot").innerHTML = `
    <div>
      <img class="detail-image panel" src="${imageFor(product, 1000, 760)}" alt="${product.name}">
    </div>
    <div class="detail-content">
      <span class="tag">${product.category}</span>
      <h1>${product.name}</h1>
      <div class="line-actions">
        <strong class="price">${money.format(product.price)}</strong>
        <span class="rating">${product.rating} sao</span>
      </div>
      <p>${product.desc}</p>
      <div class="meta-list">
        <div class="meta-item"><b>Còn hàng</b><span>${product.stock} sản phẩm</span></div>
        <div class="meta-item"><b>Giao hàng</b><span>2-4 ngày</span></div>
        <div class="meta-item"><b>Đổi trả</b><span>7 ngày</span></div>
      </div>
      <div class="panel">
        <div class="field">
          <label>Số lượng</label>
          <div class="qty">
            <button type="button" data-step="-1">-</button>
            <input id="qtyInput" value="1" inputmode="numeric" aria-label="Số lượng">
            <button type="button" data-step="1">+</button>
          </div>
        </div>
        <div class="actions" style="margin-top:16px">
          <button class="btn primary" data-add="${product.id}" type="button">Thêm vào giỏ hàng</button>
          <a class="btn" href="cart.html">Xem giỏ</a>
        </div>
      </div>
    </div>
  `;
  const qty = $("#qtyInput");
  $$("[data-step]").forEach((button) => {
    button.addEventListener("click", () => {
      qty.value = Math.max(1, Number(qty.value || 1) + Number(button.dataset.step));
    });
  });
}

function renderSummary() {
  const sum = totals();
  $$(".js-subtotal").forEach((el) => { el.textContent = money.format(sum.subtotal); });
  $$(".js-shipping").forEach((el) => { el.textContent = sum.shipping ? money.format(sum.shipping) : "Miễn phí"; });
  $$(".js-discount").forEach((el) => { el.textContent = sum.discount ? `-${money.format(sum.discount)}` : money.format(0); });
  $$(".js-grand").forEach((el) => { el.textContent = money.format(sum.grand); });
}

function initCart() {
  const host = $("#cartList");
  const items = cartDetails();
  if (!items.length) {
    host.innerHTML = `<div class="empty-state"><h2>Giỏ hàng đang trống</h2><p class="muted">Chọn vài món ở trang sản phẩm để bắt đầu đơn hàng.</p><a class="btn primary" href="index.html">Mua sắm ngay</a></div>`;
    $("#checkoutButton").setAttribute("aria-disabled", "true");
    renderSummary();
    return;
  }
  host.innerHTML = items.map((item) => `
    <article class="cart-item">
      <img src="${imageFor(item, 220, 220)}" alt="${item.name}">
      <div>
        <h3><a href="product.html?id=${item.id}">${item.name}</a></h3>
        <p class="muted">${item.category} · ${money.format(item.price)}</p>
        <strong>${money.format(item.price * item.qty)}</strong>
      </div>
      <div class="line-actions">
        <div class="qty">
          <button type="button" data-cart-step="-1" data-id="${item.id}">-</button>
          <span>${item.qty}</span>
          <button type="button" data-cart-step="1" data-id="${item.id}">+</button>
        </div>
        <button class="btn danger" data-remove="${item.id}" type="button">Xóa</button>
      </div>
    </article>
  `).join("");
  renderSummary();
}

function initCheckout() {
  const items = cartDetails();
  const list = $("#orderItems");
  if (!items.length) {
    list.innerHTML = `<div class="empty-state"><h2>Chưa có sản phẩm</h2><a class="btn primary" href="index.html">Quay lại mua hàng</a></div>`;
    $("#checkoutForm").querySelector("button").disabled = true;
  } else {
    list.innerHTML = items.map((item) => `
      <div class="total-row">
        <span>${item.name} x ${item.qty}</span>
        <strong>${money.format(item.price * item.qty)}</strong>
      </div>
    `).join("");
  }
  renderSummary();
}

document.addEventListener("click", async (event) => {
  const disabledLink = event.target.closest('a[aria-disabled="true"]');
  if (disabledLink) {
    event.preventDefault();
    toast("Giỏ hàng đang trống");
    return;
  }

  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    const qty = Number($("#qtyInput")?.value || 1);
    await fakeRequest(() => addToCart(addButton.dataset.add, qty), 720);
    toast("Đã thêm sản phẩm vào giỏ hàng");
  }

  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    await fakeRequest(() => removeFromCart(removeButton.dataset.remove), 520);
    toast("Đã xóa sản phẩm khỏi giỏ hàng");
    initCart();
  }

  const stepButton = event.target.closest("[data-cart-step]");
  if (stepButton) {
    const item = getCart().find((cartItem) => cartItem.id === stepButton.dataset.id);
    const nextQty = Math.max(1, (item?.qty || 1) + Number(stepButton.dataset.cartStep));
    await fakeRequest(() => setCartQty(stepButton.dataset.id, nextQty), 360);
    initCart();
  }
});

document.addEventListener("submit", async (event) => {
  if (event.target.id !== "checkoutForm") return;
  event.preventDefault();
  const form = new FormData(event.target);
  const order = {
    id: `NV${Date.now().toString().slice(-7)}`,
    customer: Object.fromEntries(form.entries()),
    items: cartDetails(),
    totals: totals(),
    createdAt: new Date().toISOString()
  };
  await fakeRequest(() => {
    const orders = JSON.parse(localStorage.getItem(state.orderKey) || "[]");
    localStorage.setItem(state.orderKey, JSON.stringify([order, ...orders]));
    saveCart([]);
  }, 1000);
  openModal("Đặt hàng thành công", `Mã đơn ${order.id} đã được tạo. Tổng thanh toán ${money.format(order.totals.grand)}.`, "Tiếp tục mua", () => {
    location.href = "index.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  renderShell();
  if ($("#productGrid")) initHome();
  if ($("#detailRoot")) initProduct();
  if ($("#cartList")) initCart();
  if ($("#checkoutForm")) initCheckout();
});
