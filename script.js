// ✅ Unified addToCart function
function addToCart(productName, price, imagePath) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existing = cart.find(item => item.name === productName);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      name: productName,
      price: price,
      image: imagePath || "/images/default.jpg", // fallback image
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${productName} added to cart!`);
}

// ✅ Navigate to cart
function openCart() {
  window.location.href = "cart.html";
}

// ✅ Saree defaults
let selectedColor = "White";
let selectedImage = "/images/white-tshirt.jpg";

function selectColor(button, color, imagePath) {
  selectedColor = color;
  selectedImage = imagePath;
  const mainImage = document.getElementById("mainImage");
  if (mainImage) {
    mainImage.src = imagePath;
  }

  const colorsContainer = button.closest('.colors');
  if (colorsContainer) {
    colorsContainer.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('selected'));
  } else {
    document.querySelectorAll('.color-btn').forEach(btn => btn.classList.remove('selected'));
  }
  button.classList.add('selected');
}

function addSelectedToCart() {
  const sizeSelect = document.getElementById("sizeSelect");
  const size = sizeSelect ? sizeSelect.value : null;
  const productName = size 
    ? `Elegant Women's Saree - ${selectedColor} - Size ${size}` 
    : `Elegant Women's Saree - ${selectedColor}`;
  addToCart(productName, 699, selectedImage);
}

// ✅ Shirt defaults
let selectedShirtColor = "Black";
let selectedShirtImage = "/images/black-tshirt.jpg";

function addSelectedShirtToCart() {
  const size = document.getElementById('sizeSelect').value;
  const productName = `Adidas T-Shirt - ${selectedShirtColor} - Size ${size}`;
  addToCart(productName, 599, selectedShirtImage);
}

// ✅ Auto-set initial image if present
const initMainImage = document.getElementById("mainImage");
if (initMainImage) {
  selectedImage = initMainImage.src;
}

// ✅ Simple login check
if (!localStorage.getItem("loggedInUser")) {
  window.location.href = "login.html";
}
