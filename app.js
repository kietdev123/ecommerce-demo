const CATEGORIES = [
  { id: "phone", name: "Điện thoại" },
  { id: "laptop", name: "Laptop" },
  { id: "tablet", name: "Tablet" },
  { id: "smartwatch", name: "Smartwatch" },
  { id: "audio", name: "Tai nghe" },
  { id: "accessory", name: "Phụ kiện" }
];

const PRODUCTS = [
  {
    id: "p01",
    name: "iPhone 15 Pro 256GB",
    category: "phone",
    brand: "Apple",
    price: 27990000,
    oldPrice: 31990000,
    rating: 4.9,
    sold: 1480,
    stock: 12,
    featured: true,
    isNew: true,
    tags: ["deal", "featured", "new", "best-seller"],
    seed: "iphone-15-pro",
    specs: ["A17 Pro", "Màn hình 6.1 inch", "Camera 48MP", "Titanium"],
    desc: "iPhone 15 Pro mang lại hiệu năng mạnh, camera chuyên nghiệp và thiết kế titanium gọn nhẹ cho người dùng cao cấp.",
    reviews: [
      { name: "Minh Anh", rating: 5, text: "Máy nhẹ, camera đẹp và pin ổn định cả ngày." },
      { name: "Quốc Huy", rating: 5, text: "Hiệu năng rất mượt, giao hàng nhanh." }
    ]
  },
  {
    id: "p02",
    name: "Samsung Galaxy S24 Ultra",
    category: "phone",
    brand: "Samsung",
    price: 26990000,
    oldPrice: 30990000,
    rating: 4.8,
    sold: 1260,
    stock: 18,
    featured: true,
    isNew: true,
    tags: ["deal", "featured", "new"],
    seed: "galaxy-s24-ultra",
    specs: ["Snapdragon 8 Gen 3", "Màn hình 6.8 inch", "S Pen", "Zoom 100x"],
    desc: "Galaxy S24 Ultra phù hợp công việc, sáng tạo nội dung và giải trí với màn hình lớn, camera zoom xa và S Pen tích hợp.",
    reviews: [
      { name: "Bảo Trân", rating: 5, text: "Màn hình rất sáng, S Pen tiện lợi." },
      { name: "Đức Long", rating: 4, text: "Camera zoom tốt, máy hơi lớn với tay nhỏ." }
    ]
  },
  {
    id: "p03",
    name: "Xiaomi 14T Pro 5G",
    category: "phone",
    brand: "Xiaomi",
    price: 14990000,
    oldPrice: 16990000,
    rating: 4.7,
    sold: 920,
    stock: 24,
    featured: false,
    isNew: true,
    tags: ["deal", "new"],
    seed: "xiaomi-14t-pro",
    specs: ["Dimensity cao cấp", "Sạc nhanh 120W", "Camera Leica", "5G"],
    desc: "Xiaomi 14T Pro cân bằng tốt giữa hiệu năng, camera và tốc độ sạc cho người dùng thích cấu hình mạnh.",
    reviews: [
      { name: "Hoàng Nam", rating: 5, text: "Sạc cực nhanh, giá tốt trong tầm." }
    ]
  },
  {
    id: "p04",
    name: "OPPO Reno12 F",
    category: "phone",
    brand: "OPPO",
    price: 8990000,
    oldPrice: null,
    rating: 4.5,
    sold: 760,
    stock: 34,
    featured: false,
    isNew: true,
    tags: ["new"],
    seed: "oppo-reno12-f",
    specs: ["Camera chân dung", "Màn hình AMOLED", "Sạc nhanh", "Thiết kế mỏng"],
    desc: "OPPO Reno12 F có thiết kế trẻ trung, chụp chân dung đẹp và màn hình AMOLED phù hợp nhu cầu hằng ngày.",
    reviews: [
      { name: "Thanh Vy", rating: 4, text: "Máy đẹp, chụp ảnh da mặt tốt." }
    ]
  },
  {
    id: "p05",
    name: "MacBook Air M3 13 inch",
    category: "laptop",
    brand: "Apple",
    price: 26990000,
    oldPrice: 29990000,
    rating: 4.9,
    sold: 840,
    stock: 10,
    featured: true,
    isNew: true,
    tags: ["deal", "featured", "new", "best-seller"],
    seed: "macbook-air-m3",
    specs: ["Apple M3", "RAM 16GB", "SSD 512GB", "Pin 18 giờ"],
    desc: "MacBook Air M3 mỏng nhẹ, êm ái và pin lâu, phù hợp học tập, văn phòng và sáng tạo nội dung nhẹ.",
    reviews: [
      { name: "Gia Linh", rating: 5, text: "Pin lâu, máy rất nhẹ để mang đi làm." },
      { name: "Tuấn Kiệt", rating: 5, text: "Chạy app văn phòng và design rất mượt." }
    ]
  },
  {
    id: "p06",
    name: "Dell XPS 13 Plus",
    category: "laptop",
    brand: "Dell",
    price: 32990000,
    oldPrice: null,
    rating: 4.7,
    sold: 410,
    stock: 8,
    featured: true,
    isNew: false,
    tags: ["featured"],
    seed: "dell-xps-13-plus",
    specs: ["Intel Core Ultra", "OLED 13.4 inch", "RAM 16GB", "SSD 1TB"],
    desc: "Dell XPS 13 Plus có thiết kế cao cấp, màn hình sắc nét và hiệu năng tốt cho người dùng doanh nhân.",
    reviews: [
      { name: "Anh Duy", rating: 5, text: "Màn hình OLED rất đẹp, bàn phím gõ thích." }
    ]
  },
  {
    id: "p07",
    name: "ASUS ROG Zephyrus G14",
    category: "laptop",
    brand: "ASUS",
    price: 42990000,
    oldPrice: 46990000,
    rating: 4.8,
    sold: 530,
    stock: 7,
    featured: true,
    isNew: true,
    tags: ["deal", "featured", "new"],
    seed: "rog-zephyrus-g14",
    specs: ["Ryzen 9", "RTX 4060", "OLED 120Hz", "RAM 32GB"],
    desc: "ROG Zephyrus G14 là laptop gaming mỏng nhẹ, màn hình đẹp và cấu hình mạnh cho game lẫn làm việc đồ họa.",
    reviews: [
      { name: "Khang Nguyễn", rating: 5, text: "Chơi game mượt, máy đẹp hơn ảnh." }
    ]
  },
  {
    id: "p08",
    name: "Lenovo IdeaPad Slim 5",
    category: "laptop",
    brand: "Lenovo",
    price: 16990000,
    oldPrice: null,
    rating: 4.5,
    sold: 980,
    stock: 22,
    featured: false,
    isNew: false,
    tags: ["best-seller"],
    seed: "lenovo-ideapad-slim-5",
    specs: ["Core i5", "RAM 16GB", "SSD 512GB", "Màn hình 14 inch"],
    desc: "IdeaPad Slim 5 là lựa chọn bền bỉ cho học tập và văn phòng với cấu hình vừa đủ và giá hợp lý.",
    reviews: [
      { name: "Mỹ Tiên", rating: 4, text: "Máy chạy ổn, bàn phím tốt." }
    ]
  },
  {
    id: "p09",
    name: "iPad Air M2 11 inch",
    category: "tablet",
    brand: "Apple",
    price: 16990000,
    oldPrice: null,
    rating: 4.8,
    sold: 690,
    stock: 16,
    featured: true,
    isNew: true,
    tags: ["featured", "new"],
    seed: "ipad-air-m2",
    specs: ["Apple M2", "11 inch", "Wi-Fi 6E", "Hỗ trợ Pencil Pro"],
    desc: "iPad Air M2 phù hợp ghi chú, học tập, vẽ sáng tạo và giải trí với hiệu năng mạnh trong thân máy mỏng.",
    reviews: [
      { name: "Như Ý", rating: 5, text: "Dùng với Pencil rất mượt, màn hình đẹp." }
    ]
  },
  {
    id: "p10",
    name: "Samsung Galaxy Tab S9 FE",
    category: "tablet",
    brand: "Samsung",
    price: 10990000,
    oldPrice: 12990000,
    rating: 4.6,
    sold: 520,
    stock: 19,
    featured: false,
    isNew: false,
    tags: ["deal"],
    seed: "galaxy-tab-s9-fe",
    specs: ["10.9 inch", "S Pen", "Chống nước IP68", "Pin 8000mAh"],
    desc: "Galaxy Tab S9 FE có S Pen kèm sẵn, phù hợp ghi chú, học online và xem phim trên màn hình lớn.",
    reviews: [
      { name: "Văn Phúc", rating: 4, text: "S Pen tiện, pin dùng lâu." }
    ]
  },
  {
    id: "p11",
    name: "Apple Watch Series 10 GPS",
    category: "smartwatch",
    brand: "Apple",
    price: 10990000,
    oldPrice: null,
    rating: 4.8,
    sold: 890,
    stock: 20,
    featured: true,
    isNew: true,
    tags: ["featured", "new", "best-seller"],
    seed: "apple-watch-series-10",
    specs: ["Màn hình Always-On", "Theo dõi sức khỏe", "GPS", "Chống nước"],
    desc: "Apple Watch Series 10 theo dõi sức khỏe, luyện tập và thông báo thông minh với thiết kế mỏng nhẹ.",
    reviews: [
      { name: "Bao Ngoc", rating: 5, text: "Deo nhe, do tap luyen chinh xac." }
    ]
  },
  {
    id: "p12",
    name: "Samsung Galaxy Watch7",
    category: "smartwatch",
    brand: "Samsung",
    price: 6990000,
    oldPrice: 7990000,
    rating: 4.6,
    sold: 630,
    stock: 25,
    featured: false,
    isNew: true,
    tags: ["deal", "new"],
    seed: "galaxy-watch7",
    specs: ["Wear OS", "Đo thành phần cơ thể", "GPS", "Pin tối ưu"],
    desc: "Galaxy Watch7 la dong ho thong minh cho Android voi theo doi suc khoe sau va kho ung dung phong phu.",
    reviews: [
      { name: "Thanh Sơn", rating: 4, text: "Kết nối Samsung rất tiện." }
    ]
  },
  {
    id: "p13",
    name: "Garmin Venu 3",
    category: "smartwatch",
    brand: "Garmin",
    price: 9990000,
    oldPrice: 11490000,
    rating: 4.7,
    sold: 360,
    stock: 12,
    featured: true,
    isNew: false,
    tags: ["deal", "featured"],
    seed: "garmin-venu-3",
    specs: ["AMOLED", "Pin 14 ngày", "GPS", "Sức khỏe 24/7"],
    desc: "Garmin Venu 3 phù hợp người tập luyện nghiêm túc cần pin lâu, GPS tốt và chỉ số sức khỏe chi tiết.",
    reviews: [
      { name: "Hoài Nam", rating: 5, text: "Pin rất lâu, theo dõi chạy bộ tốt." }
    ]
  },
  {
    id: "p14",
    name: "AirPods Pro 2 USB-C",
    category: "audio",
    brand: "Apple",
    price: 5490000,
    oldPrice: 6490000,
    rating: 4.9,
    sold: 1850,
    stock: 38,
    featured: true,
    isNew: false,
    tags: ["deal", "featured", "best-seller"],
    seed: "airpods-pro-2-usbc",
    specs: ["Chống ồn chủ động", "USB-C", "Spatial Audio", "MagSafe"],
    desc: "AirPods Pro 2 có chống ồn mạnh, chất âm chi tiết và kết nối nhanh với hệ sinh thái Apple.",
    reviews: [
      { name: "Phương Mai", rating: 5, text: "Chống ồn rất tốt khi đi làm." },
      { name: "Nhật Minh", rating: 5, text: "Chất âm sạch, hộp sạc tiện." }
    ]
  },
  {
    id: "p15",
    name: "Sony WH-1000XM5",
    category: "audio",
    brand: "Sony",
    price: 7490000,
    oldPrice: 8990000,
    rating: 4.8,
    sold: 740,
    stock: 17,
    featured: true,
    isNew: false,
    tags: ["deal", "featured"],
    seed: "sony-wh-1000xm5",
    specs: ["ANC cao cấp", "Pin 30 giờ", "LDAC", "Micro lọc gió"],
    desc: "Sony WH-1000XM5 là tai nghe over-ear chống ồn hàng đầu cho làm việc, bay xa và nghe nhạc chất lượng cao.",
    reviews: [
      { name: "Dinh Vu", rating: 5, text: "Doi tai rat em, ANC xuat sac." }
    ]
  },
  {
    id: "p16",
    name: "JBL Tune Beam",
    category: "audio",
    brand: "JBL",
    price: 1690000,
    oldPrice: 2190000,
    rating: 4.4,
    sold: 1120,
    stock: 42,
    featured: false,
    isNew: false,
    tags: ["deal", "best-seller"],
    seed: "jbl-tune-beam",
    specs: ["Pure Bass", "Chống nước IP54", "Pin 48 giờ", "ANC"],
    desc: "JBL Tune Beam co am bass soi dong, pin dai va chong nuoc nhe cho nhu cau nghe nhac hang ngay.",
    reviews: [
      { name: "Quynh Chi", rating: 4, text: "Bass manh, hop voi nhac tre." }
    ]
  },
  {
    id: "p17",
    name: "Anker PowerCore 20K",
    category: "accessory",
    brand: "Anker",
    price: 1190000,
    oldPrice: 1490000,
    rating: 4.7,
    sold: 1720,
    stock: 56,
    featured: false,
    isNew: false,
    tags: ["deal", "best-seller"],
    seed: "anker-powercore-20k",
    specs: ["20000mAh", "USB-C PD", "Sạc nhanh", "Bảo vệ nhiệt"],
    desc: "Pin dự phòng Anker dung lượng lớn, sạc nhanh và an toàn cho điện thoại, tablet trong những chuyến đi dài.",
    reviews: [
      { name: "Lê Khánh", rating: 5, text: "Sạc được nhiều lần, cầm chắc tay." }
    ]
  },
  {
    id: "p18",
    name: "Logitech MX Master 3S",
    category: "accessory",
    brand: "Logitech",
    price: 2390000,
    oldPrice: 2790000,
    rating: 4.8,
    sold: 980,
    stock: 31,
    featured: true,
    isNew: false,
    tags: ["deal", "featured", "best-seller"],
    seed: "logitech-mx-master-3s",
    specs: ["Click êm", "8000 DPI", "Kết nối 3 thiết bị", "Sạc USB-C"],
    desc: "MX Master 3S tối ưu cho làm việc chuyên sâu với cuộn siêu nhanh, click êm và điều khiển đa thiết bị.",
    reviews: [
      { name: "Huu Phat", rating: 5, text: "Lam viec Excel va design nhanh hon han." }
    ]
  },
  {
    id: "p19",
    name: "Keychron K3 Pro",
    category: "accessory",
    brand: "Keychron",
    price: 2890000,
    oldPrice: 3290000,
    rating: 4.6,
    sold: 640,
    stock: 22,
    featured: false,
    isNew: true,
    tags: ["deal", "new"],
    seed: "keychron-k3-pro",
    specs: ["Low profile", "Hot-swap", "Bluetooth", "Mac Windows"],
    desc: "Keychron K3 Pro là bàn phím cơ mỏng nhẹ, gõ êm và kết nối linh hoạt cho bàn làm việc gọn gàng.",
    reviews: [
      { name: "Thái Bảo", rating: 4, text: "Gõ tốt, layout gọn." }
    ]
  },
  {
    id: "p20",
    name: "Samsung T7 Shield 1TB",
    category: "accessory",
    brand: "Samsung",
    price: 2490000,
    oldPrice: 2990000,
    rating: 4.7,
    sold: 810,
    stock: 28,
    featured: false,
    isNew: false,
    tags: ["deal"],
    seed: "samsung-t7-shield",
    specs: ["SSD 1TB", "USB 3.2", "Chống sốc", "Đọc 1050MB/s"],
    desc: "SSD di động Samsung T7 Shield tốc độ cao, bền bỉ, phù hợp sao lưu dữ liệu và dùng với laptop/tablet.",
    reviews: [
      { name: "Ngoc Han", rating: 5, text: "Copy file video rat nhanh." }
    ]
  },
  {
    id: "p21",
    name: "Sạc nhanh Ugreen Nexode 65W",
    category: "accessory",
    brand: "Ugreen",
    price: 790000,
    oldPrice: 990000,
    rating: 4.6,
    sold: 1340,
    stock: 60,
    featured: false,
    isNew: false,
    tags: ["deal", "best-seller"],
    seed: "ugreen-nexode-65w",
    specs: ["GaN 65W", "3 cong sac", "USB-C PD", "Nho gon"],
    desc: "Củ sạc Ugreen Nexode 65W sạc được laptop, điện thoại và tablet trong thân hình nhỏ gọn.",
    reviews: [
      { name: "Kim Long", rating: 4, text: "Nho ma sac MacBook duoc." }
    ]
  },
  {
    id: "p22",
    name: "Màn hình LG UltraFine 27 inch 4K",
    category: "accessory",
    brand: "LG",
    price: 9990000,
    oldPrice: 11990000,
    rating: 4.7,
    sold: 420,
    stock: 11,
    featured: true,
    isNew: false,
    tags: ["deal", "featured"],
    seed: "lg-ultrafine-27-4k",
    specs: ["4K IPS", "USB-C", "HDR", "Chuẩn màu tốt"],
    desc: "LG UltraFine 27 inch 4K cho không gian làm việc sắc nét, màu đẹp và kết nối USB-C gọn gàng.",
    reviews: [
      { name: "Đăng Khoa", rating: 5, text: "Màn hình rõ, làm ảnh rất thích." }
    ]
  },
  {
    id: "p23",
    name: "Huawei Watch GT 5",
    category: "smartwatch",
    brand: "Huawei",
    price: 5990000,
    oldPrice: 6990000,
    rating: 4.5,
    sold: 470,
    stock: 21,
    featured: false,
    isNew: true,
    tags: ["deal", "new"],
    seed: "huawei-watch-gt-5",
    specs: ["Pin 14 ngày", "AMOLED", "GPS", "Sức khỏe thông minh"],
    desc: "Huawei Watch GT 5 nổi bật với pin lâu, thiết kế thanh lịch và các chế độ tập luyện đa dạng.",
    reviews: [
      { name: "Hồng Quân", rating: 4, text: "Pin khỏe, mặt đồng hồ đẹp." }
    ]
  },
  {
    id: "p24",
    name: "Samsung Galaxy Buds3 Pro",
    category: "audio",
    brand: "Samsung",
    price: 4590000,
    oldPrice: null,
    rating: 4.6,
    sold: 570,
    stock: 30,
    featured: false,
    isNew: true,
    tags: ["new"],
    seed: "galaxy-buds3-pro",
    specs: ["ANC", "24-bit audio", "IP57", "Kết nối Galaxy"],
    desc: "Galaxy Buds3 Pro có thiết kế mới, chống ồn tốt và chất âm tối ưu cho người dùng Samsung Galaxy.",
    reviews: [
      { name: "Tuyết Nhi", rating: 5, text: "Kết nối nhanh, nghe gọi rõ." }
    ]
  }
];

const state = {
  cartKey: "nova_cart",
  orderKey: "nova_orders",
  viewedKey: "nova_viewed_products",
  reviewsKey: "nova_reviews"
};

const CONTACT = {
  email: "support@novashop.vn",
  phone: "090 123 4567",
  address: "123 Nguyen Hue, Quan 1, TP. Ho Chi Minh",
  zalo: "https://zalo.me/0901234567",
  facebook: "https://facebook.com/novashop.demo",
  messenger: "https://m.me/novashop.demo",
  map: "https://maps.google.com/?q=123+Nguyen+Hue+Quan+1+TP+Ho+Chi+Minh"
};

const CATEGORY_ICONS = {
  phone: "assets/icons8-iphone-50.png",
  laptop: "assets/icons8-laptop-50.png",
  tablet: "assets/icons8-tablet-50.png",
  smartwatch: "assets/icons8-smartwatch-50.png",
  audio: "assets/icons8-headphones-50.png",
  accessory: "assets/icons8-other-50.png"
};

const money = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" });
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function categoryName(id) {
  return CATEGORIES.find((category) => category.id === id)?.name || "Sản phẩm";
}

function hasDeal(product) {
  return product.tags.includes("deal") && product.oldPrice && product.oldPrice > product.price;
}

function discountPercent(product) {
  if (!hasDeal(product)) return 0;
  return Math.round((1 - product.price / product.oldPrice) * 100);
}

function imageFor(product, index = 0, width = 700, height = 520) {
  return `https://picsum.photos/seed/nova-${product.seed}-${index}/${width}/${height}`;
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
  const shipping = subtotal > 0 && subtotal < 5000000 ? 45000 : 0;
  const discount = subtotal >= 30000000 ? Math.round(subtotal * 0.05) : 0;
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

function openModal(title, message, actionText = "Đã hiểu", onAction, extraHtml = "") {
  const backdrop = $("#modalBackdrop");
  if (!backdrop) return;
  $("#modalTitle").textContent = title;
  $("#modalMessage").textContent = message;
  $("#modalExtra").innerHTML = extraHtml;
  $("#modalAction").textContent = actionText;
  backdrop.classList.add("show");
  $("#modalAction").onclick = () => {
    backdrop.classList.remove("show");
    $("#modalExtra").innerHTML = "";
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
        <div id="modalExtra"></div>
        <div class="actions">
          <button id="modalAction" class="btn primary" type="button">Đã hiểu</button>
        </div>
      </div>
    </div>
    <div class="floating-contact" aria-label="Liên hệ nhanh">
      <a href="${CONTACT.map}" target="_blank" rel="noreferrer" title="Bản đồ" aria-label="Bản đồ"><img src="assets/icons8-google-maps-48.png" alt=""></a>
      <a href="${CONTACT.messenger}" target="_blank" rel="noreferrer" title="Messenger" aria-label="Messenger"><img src="assets/icons8-facebook-48.png" alt=""></a>
      <a href="${CONTACT.zalo}" target="_blank" rel="noreferrer" title="Zalo" aria-label="Zalo"><img src="assets/icons8-zalo-48.png" alt=""></a>
    </div>
      <button id="scrollTop" class="scroll-top" type="button" aria-label="Lên đầu trang"><img src="assets/icons8-scroll-to-top-50.png" alt=""></button>
  `);
  $("#modalBackdrop").addEventListener("click", (event) => {
    if (event.target.id === "modalBackdrop") event.currentTarget.classList.remove("show");
  });
  $("#scrollTop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", () => {
    $("#scrollTop").classList.toggle("show", window.scrollY > 420);
  });
  initSearch();
  updateCartCount();
}

function initSearch() {
  $$(".site-search").forEach((form) => {
    const input = $(".nav-search-input", form);
    const suggestions = $(".search-suggestions", form);
    const params = new URLSearchParams(location.search);
    if (input && params.get("q") && location.pathname.includes("products.html")) input.value = params.get("q");

    input.addEventListener("input", () => {
      const keyword = input.value.trim().toLowerCase();
      if (!keyword) {
        suggestions.innerHTML = "";
        suggestions.classList.remove("show");
        return;
      }
      const matches = PRODUCTS
        .filter((product) => `${product.name} ${product.brand} ${categoryName(product.category)}`.toLowerCase().includes(keyword))
        .slice(0, 6);
      suggestions.innerHTML = matches.map((product) => `
        <a href="product.html?id=${product.id}">
          <img src="${imageFor(product, 0, 80, 80)}" alt="${product.name}">
          <span>${product.name}<small>${money.format(product.price)}</small></span>
        </a>
      `).join("") || `<div class="suggest-empty">Không tìm thấy sản phẩm</div>`;
      suggestions.classList.add("show");
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const keyword = input.value.trim();
      if (keyword) location.href = `products.html?q=${encodeURIComponent(keyword)}`;
      else location.href = "products.html";
    });

    document.addEventListener("click", (event) => {
      if (!form.contains(event.target)) suggestions.classList.remove("show");
    });
  });
}

function productCard(product) {
  return `
    <article class="product-card">
      <a class="product-media" href="product.html?id=${product.id}" aria-label="Xem ${product.name}">
        <img src="${imageFor(product)}" alt="${product.name}" loading="lazy">
        ${hasDeal(product) ? `<span class="sale-badge">-${discountPercent(product)}%</span>` : ""}
      </a>
      <div class="product-body">
        <span class="tag">${categoryName(product.category)}</span>
        <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
        <p class="product-spec">${product.specs.slice(0, 2).join(" · ")}</p>
        <div class="line-actions">
          <span class="price">${money.format(product.price)}</span>
          <span class="rating">${product.rating} sao</span>
        </div>
        <div class="product-meta-line">${hasDeal(product) ? `<span class="old-price">${money.format(product.oldPrice)}</span>` : ""}<span>Đã bán ${product.sold}</span></div>
        <div class="card-foot">
          <a class="btn" href="product.html?id=${product.id}">Chi tiết</a>
          <button class="btn primary" data-add="${product.id}" title="Thêm vào giỏ" aria-label="Thêm vào giỏ" type="button">+</button>
        </div>
      </div>
    </article>
  `;
}

function renderProductGrid(selector, list) {
  const grid = $(selector);
  if (!grid) return;
  grid.innerHTML = list.length ? list.map(productCard).join("") : `
    <div class="empty-state full-span">
      <h2>Chưa có sản phẩm phù hợp</h2>
      <p class="muted">Thử thay đổi từ khóa hoặc bộ lọc để xem thêm lựa chọn.</p>
    </div>
  `;
}

function getViewedProducts() {
  const ids = JSON.parse(localStorage.getItem(state.viewedKey) || "[]");
  return ids.map(getProduct).filter(Boolean);
}

function saveViewedProduct(id) {
  const ids = JSON.parse(localStorage.getItem(state.viewedKey) || "[]").filter((item) => item !== id);
  localStorage.setItem(state.viewedKey, JSON.stringify([id, ...ids].slice(0, 8)));
}

function initHome() {
  const categoryGrid = $("#categoryGrid");
  if (categoryGrid) {
    categoryGrid.innerHTML = CATEGORIES.map((category) => `
      <a class="category-tile" href="products.html?category=${category.id}">
        <img src="${CATEGORY_ICONS[category.id]}" alt="">
        <span>${category.name}</span>
        <small>${PRODUCTS.filter((product) => product.category === category.id).length} sản phẩm</small>
      </a>
    `).join("");
  }

  renderProductGrid("#dealGrid", PRODUCTS.filter((product) => product.tags.includes("deal")).slice(0, 8));
  renderProductGrid("#featuredGrid", PRODUCTS.filter((product) => product.featured).slice(0, 8));
  renderProductGrid("#newGrid", PRODUCTS.filter((product) => product.isNew).slice(0, 8));

  const viewed = getViewedProducts();
  const viewedSection = $("#viewedSection");
  if (viewedSection) {
    viewedSection.hidden = viewed.length === 0;
    renderProductGrid("#viewedGrid", viewed.slice(0, 4));
  }
}

function productsFromQuery() {
  const params = new URLSearchParams(location.search);
  let list = [...PRODUCTS];
  const q = (params.get("q") || "").trim().toLowerCase();
  const category = params.get("category") || "";
  const brand = params.get("brand") || "";
  const tag = params.get("tag") || "";
  const sort = params.get("sort") || "";

  if (q) list = list.filter((product) => `${product.name} ${product.brand} ${categoryName(product.category)} ${product.specs.join(" ")}`.toLowerCase().includes(q));
  if (category) list = list.filter((product) => product.category === category);
  if (brand) list = list.filter((product) => product.brand === brand);
  if (tag) list = list.filter((product) => product.tags.includes(tag));

  if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
  if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
  if (sort === "featured") list.sort((a, b) => Number(b.featured) - Number(a.featured) || b.rating - a.rating);
  if (sort === "sold") list.sort((a, b) => b.sold - a.sold);
  if (sort === "discount") list.sort((a, b) => discountPercent(b) - discountPercent(a));
  if (!sort && tag === "best-seller") list.sort((a, b) => b.sold - a.sold);

  return list;
}

function setQuery(nextValues) {
  const params = new URLSearchParams(location.search);
  Object.entries(nextValues).forEach(([key, value]) => {
    if (value) params.set(key, value);
    else params.delete(key);
  });
  if (!("page" in nextValues)) params.set("page", "1");
  location.href = `products.html?${params.toString()}`;
}

function initProductsPage() {
  const params = new URLSearchParams(location.search);
  const brands = [...new Set(PRODUCTS.map((product) => product.brand))].sort();
  $("#categoryOptions").innerHTML = CATEGORIES.map((category) => `
    <button class="filter-chip ${params.get("category") === category.id ? "active" : ""}" data-filter-key="category" data-filter-value="${category.id}" type="button">${category.name}</button>
  `).join("");
  $("#brandOptions").innerHTML = brands.map((brand) => `
    <button class="filter-chip ${params.get("brand") === brand ? "active" : ""}" data-filter-key="brand" data-filter-value="${brand}" type="button">${brand}</button>
  `).join("");
  $$(`[data-filter-key="tag"]`).forEach((button) => {
    button.classList.toggle("active", params.get("tag") === button.dataset.filterValue);
  });
  $("#sortSelect").value = params.get("sort") || "";

  const list = productsFromQuery();
  const pageSize = 8;
  const page = Math.max(1, Number(params.get("page") || 1));
  const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const slice = list.slice((safePage - 1) * pageSize, safePage * pageSize);
  $("#resultTitle").textContent = `${list.length} sản phẩm phù hợp`;
  renderProductGrid("#productsGrid", slice);
  $("#pagination").innerHTML = Array.from({ length: totalPages }, (_, index) => index + 1).map((num) => `
    <button class="page-btn ${num === safePage ? "active" : ""}" data-page="${num}" type="button">${num}</button>
  `).join("");
}

function getStoredReviews(productId) {
  const all = JSON.parse(localStorage.getItem(state.reviewsKey) || "{}");
  return all[productId] || [];
}

function saveReview(productId, review) {
  const all = JSON.parse(localStorage.getItem(state.reviewsKey) || "{}");
  all[productId] = [review, ...(all[productId] || [])];
  localStorage.setItem(state.reviewsKey, JSON.stringify(all));
}

function renderReviews(product) {
  const host = $("#reviewList");
  if (!host) return;
  const reviews = [...getStoredReviews(product.id), ...product.reviews];
  host.innerHTML = reviews.map((review) => `
    <article class="review-item">
      <strong>${review.name}</strong>
      <span class="rating">${"*".repeat(Number(review.rating))}</span>
      <p>${review.text}</p>
    </article>
  `).join("");
}

function initProduct() {
  const id = new URLSearchParams(location.search).get("id") || PRODUCTS[0].id;
  const product = getProduct(id) || PRODUCTS[0];
  saveViewedProduct(product.id);
  $("#detailRoot").innerHTML = `
    <nav class="breadcrumb">
      <a href="index.html">Trang chủ</a>
      <span>/</span>
      <a href="products.html?category=${product.category}">${categoryName(product.category)}</a>
      <span>/</span>
      <strong>${product.name}</strong>
    </nav>
    <div class="detail-layout">
      <div class="gallery">
        <button class="gallery-main" type="button" data-open-image>
          <img id="mainImage" src="${imageFor(product, 0, 1000, 760)}" alt="${product.name}">
        </button>
        <div class="thumbs">
          ${[0, 1, 2, 3].map((index) => `
            <button class="${index === 0 ? "active" : ""}" data-thumb="${index}" type="button">
              <img src="${imageFor(product, index, 180, 140)}" alt="${product.name} anh ${index + 1}">
            </button>
          `).join("")}
        </div>
      </div>
      <div class="detail-content">
        <span class="tag">${product.brand}</span>
        <h1>${product.name}</h1>
        <div class="line-actions">
          <strong class="price">${money.format(product.price)}</strong>
          ${hasDeal(product) ? `<span class="old-price">${money.format(product.oldPrice)}</span><span class="sale-badge static">-${discountPercent(product)}%</span>` : ""}
        </div>
        <div class="line-actions">
          <span class="rating">${product.rating} sao</span>
          <span class="muted">Đã bán ${product.sold}</span>
        </div>
        <p>${product.desc}</p>
        <div class="meta-list">
          ${product.specs.map((spec) => `<div class="meta-item"><b>${spec}</b><span>${categoryName(product.category)}</span></div>`).join("")}
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
    </div>
  `;

  $("#reviewsRoot").innerHTML = `
    <div class="section-head">
      <div>
        <h2>Đánh giá sản phẩm</h2>
        <p>${product.rating} sao từ khách hàng đã mua.</p>
      </div>
    </div>
    <form id="reviewForm" class="panel review-form">
      <div class="field"><label>Tên của bạn</label><input class="input" name="name" required placeholder="Nguyễn Văn A"></div>
      <div class="field"><label>Số sao</label><select class="input" name="rating"><option value="5">5 sao</option><option value="4">4 sao</option><option value="3">3 sao</option></select></div>
      <div class="field span-2"><label>Nội dung</label><textarea class="input" name="text" required placeholder="Chia sẻ trải nghiệm của bạn"></textarea></div>
      <button class="btn primary" type="submit">Gửi đánh giá</button>
    </form>
    <div id="reviewList" class="review-list"></div>
  `;
  renderReviews(product);
  const related = PRODUCTS.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);
  renderProductGrid("#relatedGrid", related);

  const qty = $("#qtyInput");
  $$("[data-step]").forEach((button) => {
    button.addEventListener("click", () => {
      qty.value = Math.max(1, Number(qty.value || 1) + Number(button.dataset.step));
    });
  });
  $$("[data-thumb]").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".thumbs button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      $("#mainImage").src = imageFor(product, Number(button.dataset.thumb), 1000, 760);
    });
  });
  $("[data-open-image]").addEventListener("click", () => {
    openModal(product.name, "Ảnh sản phẩm đang được phóng to để xem chi tiết.", "Đóng", null, `<img class="modal-image" src="${$("#mainImage").src}" alt="${product.name}">`);
  });
  $("#reviewForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    await fakeRequest(() => saveReview(product.id, Object.fromEntries(form.entries())), 520);
    event.target.reset();
    renderReviews(product);
    toast("Đã gửi đánh giá sản phẩm");
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
    host.innerHTML = `<div class="empty-state"><h2>Giỏ hàng đang trống</h2><p class="muted">Chọn vài món điện tử ở trang sản phẩm để bắt đầu đơn hàng.</p><a class="btn primary" href="products.html">Mua sắm ngay</a></div>`;
    $("#checkoutButton").setAttribute("aria-disabled", "true");
    renderSummary();
    return;
  }
  host.innerHTML = items.map((item) => `
    <article class="cart-item">
      <img src="${imageFor(item, 0, 220, 220)}" alt="${item.name}">
      <div>
        <h3><a href="product.html?id=${item.id}">${item.name}</a></h3>
        <p class="muted">${item.brand} · ${money.format(item.price)}</p>
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
    list.innerHTML = `<div class="empty-state"><h2>Chưa có sản phẩm</h2><a class="btn primary" href="products.html">Quay lại mua hàng</a></div>`;
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

  const filterButton = event.target.closest("[data-filter-key]");
  if (filterButton) {
    await fakeRequest(() => {
      const key = filterButton.dataset.filterKey;
      const value = filterButton.classList.contains("active") ? "" : filterButton.dataset.filterValue;
      setQuery({ [key]: value });
    }, 260);
  }

  const pageButton = event.target.closest("[data-page]");
  if (pageButton) setQuery({ page: pageButton.dataset.page });

  const clearFilters = event.target.closest("[data-clear-filters]");
  if (clearFilters) location.href = "products.html";

  const addButton = event.target.closest("[data-add]");
  if (addButton) {
    const qty = Math.max(1, Number($("#qtyInput")?.value || 1));
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

document.addEventListener("change", (event) => {
  if (event.target.id === "sortSelect") setQuery({ sort: event.target.value });
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
  if ($("#categoryGrid")) initHome();
  if ($("#productsGrid")) initProductsPage();
  if ($("#detailRoot")) initProduct();
  if ($("#cartList")) initCart();
  if ($("#checkoutForm")) initCheckout();
});
