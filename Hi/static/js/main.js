// Cart functionality
let cart = [];
let cartCount = 0;

// Product data
const products = {
    1: { id: 1, name: 'Elegant Gold Chain Necklace', category: 'Necklace', price: 299.99, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', description: 'Crafted from 18k gold, this elegant chain necklace features a classic design that complements any outfit. Perfect for everyday wear or special occasions.' },
    2: { id: 2, name: 'Classic Gold Pendant Necklace', category: 'Necklace', price: 449.99, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', description: 'Beautiful pendant necklace featuring intricate detailing and premium gold finish. A timeless piece that adds elegance to any ensemble.' },
    3: { id: 3, name: 'Luxury Gold Statement Necklace', category: 'Necklace', price: 799.99, image: 'https://images.unsplash.com/photo-1601821765780-754fa98637c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHhwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', description: 'Make a bold statement with this luxurious gold necklace. Featuring stunning craftsmanship and premium materials for the discerning jewelry lover.' },
    4: { id: 4, name: 'Designer Gold Chain Necklace', category: 'Necklace', price: 649.99, image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', description: 'Designer crafted gold chain necklace with unique link pattern. Combines modern aesthetics with traditional goldsmithing techniques.' },
    5: { id: 5, name: 'Classic Gold Wedding Ring', category: 'Ring', price: 199.99, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', description: 'Traditional wedding ring crafted from pure gold. Simple yet elegant design that symbolizes eternal love and commitment.' },
    6: { id: 6, name: 'Elegant Gold Diamond Ring', category: 'Ring', price: 899.99, image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', description: 'Stunning diamond ring set in premium gold. Features a brilliant cut diamond that sparkles with every movement.' },
    7: { id: 7, name: 'Vintage Gold Ring', category: 'Ring', price: 349.99, image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', description: 'Vintage-inspired gold ring with intricate detailing. Perfect for those who appreciate classic design with timeless appeal.' },
    8: { id: 8, name: 'Modern Gold Band Ring', category: 'Ring', price: 279.99, image: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', description: 'Contemporary gold band ring with sleek finish. Modern design meets premium craftsmanship in this stunning piece.' },
    9: { id: 9, name: 'Delicate Gold Chain Bracelet', category: 'Bracelet', price: 189.99, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', description: 'Delicate chain bracelet crafted from fine gold. Lightweight and comfortable for everyday wear with subtle elegance.' },
    10: { id: 10, name: 'Bold Gold Cuff Bracelet', category: 'Bracelet', price: 429.99, image: 'https://images.unsplash.com/photo-1571071544806-b3b0ba139edf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', description: 'Bold cuff bracelet that makes a statement. Wide band design with polished gold finish for a luxurious look.' },
    11: { id: 11, name: 'Elegant Gold Tennis Bracelet', category: 'Bracelet', price: 699.99, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', description: 'Classic tennis bracelet featuring a continuous line of gold links. Elegant design perfect for formal occasions.' },
    12: { id: 12, name: 'Luxury Gold Charm Bracelet', category: 'Bracelet', price: 549.99, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', description: 'Charm bracelet with intricate gold details. Features multiple decorative elements for a rich, layered appearance.' }
};

// DOM elements
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const cartCountElement = document.getElementById('cartCount');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeAnimations();
});

// Initialize all event listeners
function initializeEventListeners() {
    // Modal event listeners
    loginBtn.addEventListener('click', () => openModal('loginModal'));
    registerBtn.addEventListener('click', () => openModal('registerModal'));
    
    // Close modal event listeners
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            closeModal(modal.id);
        });
    });
    
    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Form submissions
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('registerForm').addEventListener('submit', handleRegister);
    
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', handleAddToCart);
    });
    
    // Shop now button scroll
    const shopNowBtn = document.querySelector('.shop-now-btn');
    if (shopNowBtn) {
        shopNowBtn.addEventListener('click', () => {
            document.querySelector('section:nth-of-type(2)').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    // Quick view buttons
    document.querySelectorAll('.quick-view-btn').forEach(btn => {
        btn.addEventListener('click', handleQuickView);
    });
}

// Initialize animations
function initializeAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe product cards
    document.querySelectorAll('.product-card').forEach(card => {
        observer.observe(card);
    });
}

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-content');
    
    modal.classList.remove('hidden');
    
    // Trigger animation
    setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-content');
    
    // Animate out
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
    
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        clearFormErrors(modal);
    }, 300);
}

// Mobile menu toggle
function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
}

// Form validation and submission
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function validateName(name) {
    return name.trim().length >= 2;
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorSpan = field.parentNode.querySelector('.error-message');
    
    field.classList.add('border-red-500');
    errorSpan.textContent = message;
    errorSpan.classList.remove('hidden');
}

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorSpan = field.parentNode.querySelector('.error-message');
    
    field.classList.remove('border-red-500');
    errorSpan.classList.add('hidden');
}

function clearFormErrors(modal) {
    modal.querySelectorAll('input').forEach(input => {
        input.classList.remove('border-red-500');
    });
    modal.querySelectorAll('.error-message').forEach(error => {
        error.classList.add('hidden');
    });
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    let isValid = true;
    
    // Clear previous errors
    clearFieldError('loginEmail');
    clearFieldError('loginPassword');
    
    // Validate email
    if (!email) {
        showFieldError('loginEmail', 'Email is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        showFieldError('loginEmail', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate password
    if (!password) {
        showFieldError('loginPassword', 'Password is required');
        isValid = false;
    } else if (!validatePassword(password)) {
        showFieldError('loginPassword', 'Password must be at least 6 characters long');
        isValid = false;
    }
    
    if (isValid) {
        // Simulate login process
        showSuccessMessage('Login successful! Welcome back.');
        closeModal('loginModal');
        
        // Update UI to show logged in state
        loginBtn.textContent = 'Account';
        registerBtn.style.display = 'none';
    }
}

function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    let isValid = true;
    
    // Clear previous errors
    clearFieldError('registerName');
    clearFieldError('registerEmail');
    clearFieldError('registerPassword');
    
    // Validate name
    if (!name) {
        showFieldError('registerName', 'Full name is required');
        isValid = false;
    } else if (!validateName(name)) {
        showFieldError('registerName', 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    // Validate email
    if (!email) {
        showFieldError('registerEmail', 'Email is required');
        isValid = false;
    } else if (!validateEmail(email)) {
        showFieldError('registerEmail', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate password
    if (!password) {
        showFieldError('registerPassword', 'Password is required');
        isValid = false;
    } else if (!validatePassword(password)) {
        showFieldError('registerPassword', 'Password must be at least 6 characters long');
        isValid = false;
    }
    
    if (isValid) {
        // Simulate registration process
        showSuccessMessage('Registration successful! Welcome to Golden Treasures.');
        closeModal('registerModal');
        
        // Update UI to show logged in state
        loginBtn.textContent = 'Account';
        registerBtn.style.display = 'none';
    }
}

// Cart functionality
function handleAddToCart(e) {
    const productId = e.target.dataset.productId;
    const button = e.target;
    
    // Add visual feedback
    button.innerHTML = '<i class="fas fa-check mr-2"></i>Added!';
    button.classList.add('bg-green-500');
    button.classList.remove('bg-gold-500', 'hover:bg-gold-600');
    
    // Update cart count
    cartCount++;
    updateCartCount();
    
    // Reset button after 2 seconds
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-cart-plus mr-2"></i>Add to Cart';
        button.classList.remove('bg-green-500');
        button.classList.add('bg-gold-500', 'hover:bg-gold-600');
    }, 2000);
    
    // Add to cart array (for future cart functionality)
    cart.push({
        id: productId,
        timestamp: new Date()
    });
    
    showSuccessMessage('Item added to cart successfully!');
}

function updateCartCount() {
    cartCountElement.textContent = cartCount;
    
    // Animate cart count
    cartCountElement.style.transform = 'scale(1.5)';
    setTimeout(() => {
        cartCountElement.style.transform = 'scale(1)';
    }, 200);
}

// Success message function
function showSuccessMessage(message) {
    // Create success notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-check-circle mr-2"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add loading states to buttons
document.querySelectorAll('button[type="submit"]').forEach(button => {
    const form = button.closest('form');
    form.addEventListener('submit', () => {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Processing...';
        button.disabled = true;
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 2000);
    });
});

// Quick view functionality
function handleQuickView(e) {
    e.preventDefault();
    e.stopPropagation();
    
    // Find the product card and get product info
    const productCard = e.target.closest('.product-card');
    const productImage = productCard.querySelector('img');
    const productName = productCard.querySelector('h3').textContent;
    const productPrice = productCard.querySelector('.text-gold-600').textContent;
    const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
    const productId = addToCartBtn ? addToCartBtn.dataset.productId : null;
    
    // Get product details from our product data
    const product = products[productId];
    if (!product) {
        showSuccessMessage('Product details not available');
        return;
    }
    
    showProductModal(product);
}

function showProductModal(product) {
    // Create product detail modal if it doesn't exist
    let productModal = document.getElementById('productModal');
    if (!productModal) {
        productModal = document.createElement('div');
        productModal.id = 'productModal';
        productModal.className = 'modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden';
        productModal.innerHTML = `
            <div class="modal-content bg-white rounded-xl p-0 m-4 w-full max-w-4xl transform scale-95 opacity-0 transition-all duration-300 overflow-hidden">
                <div class="flex justify-between items-center p-6 border-b">
                    <h2 class="text-2xl font-bold text-gray-800">Product Details</h2>
                    <button class="close-modal text-gray-400 hover:text-gray-600 text-2xl">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="flex flex-col md:flex-row">
                    <div class="md:w-1/2 p-6">
                        <img id="productModalImage" src="" alt="" class="w-full h-80 object-cover rounded-lg shadow-lg">
                    </div>
                    <div class="md:w-1/2 p-6">
                        <div class="space-y-4">
                            <div>
                                <h3 id="productModalName" class="text-2xl font-bold text-gray-800 mb-2"></h3>
                                <p id="productModalCategory" class="text-gray-600 text-sm uppercase tracking-wide"></p>
                            </div>
                            <div>
                                <p id="productModalPrice" class="text-3xl font-bold text-gold-600 mb-4"></p>
                            </div>
                            <div>
                                <h4 class="text-lg font-semibold text-gray-800 mb-2">Description</h4>
                                <p id="productModalDescription" class="text-gray-600 leading-relaxed"></p>
                            </div>
                            <div class="pt-4">
                                <button id="productModalAddToCart" class="w-full bg-gold-500 text-white py-3 px-6 rounded-lg hover:bg-gold-600 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                                    <i class="fas fa-cart-plus mr-2"></i>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(productModal);
        
        // Add event listeners for the new modal
        productModal.querySelector('.close-modal').addEventListener('click', () => {
            closeModal('productModal');
        });
        
        productModal.addEventListener('click', (e) => {
            if (e.target === productModal) {
                closeModal('productModal');
            }
        });
    }
    
    // Populate modal with product data
    document.getElementById('productModalImage').src = product.image;
    document.getElementById('productModalImage').alt = product.name;
    document.getElementById('productModalName').textContent = product.name;
    document.getElementById('productModalCategory').textContent = product.category;
    document.getElementById('productModalPrice').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('productModalDescription').textContent = product.description;
    
    // Update add to cart button with product ID
    const modalAddToCartBtn = document.getElementById('productModalAddToCart');
    modalAddToCartBtn.dataset.productId = product.id;
    modalAddToCartBtn.onclick = (e) => {
        handleAddToCart(e);
        closeModal('productModal');
    };
    
    // Show modal
    openModal('productModal');
}
