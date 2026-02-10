// Reusable Header Component
function getHeader() {
    return `
    <header>
        <nav class="bg-white shadow-md sticky top-0 z-50">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex-shrink-0 font-bold text-xl text-gray-900">
                        <a href="/index.html" class="text-gray-900 hover:text-blue-600 transition">Dharm Patel</a>
                    </div>

                    <div class="hidden md:flex space-x-8">
                        <a href="/index.html" class="text-gray-700 hover:text-blue-600 transition">Home</a>
                        <a href="/about.html" class="text-gray-700 hover:text-blue-600 transition">About</a>
                        <div class="relative group">
                            <button class="text-gray-700 hover:text-blue-600 transition flex items-center">
                                Solutions
                                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                </svg>
                            </button>
                            <div
                                class="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
                                <a href="/solutions/controlsystem.html"
                                    class="block px-4 py-2 text-gray-700 hover:bg-blue-50 first:rounded-t-md">Control System</a>
                                <a href="/solutions/embedded&circuitdesign.html"
                                    class="block px-4 py-2 text-gray-700 hover:bg-blue-50">Embedded & Circuit Design</a>
                                <a href="/solutions/training&documentation.html"
                                    class="block px-4 py-2 text-gray-700 hover:bg-blue-50">Training & Documentation</a>
                                <a href="/solutions/3ddesign.html"
                                    class="block px-4 py-2 text-gray-700 hover:bg-blue-50">3D Design</a>
                                <a href="/solutions/webdevelopment.html"
                                    class="block px-4 py-2 text-gray-700 hover:bg-blue-50">Web Development</a>
                                <a href="/solutions/contradictions.html"
                                    class="block px-4 py-2 text-gray-700 hover:bg-blue-50 last:rounded-b-md">Consulting</a>
                            </div>
                        </div>

                        <a href="/index.html#contact" class="text-gray-700 hover:text-blue-600 transition">Contact</a>
                    </div>

                    <button id="menu-btn" class="md:hidden text-gray-700">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                <div id="mobile-menu" class="md:hidden hidden pb-4">
                    <a href="/index.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
                    <a href="/about.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</a>
                    <button id="mobile-solutions"
                        class="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex justify-between items-center">
                        Solutions
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </button>
                    <div id="mobile-solutions-menu" class="hidden bg-gray-50">
                        <a href="/solutions/controlsystem.html" class="block px-8 py-2 text-gray-600 hover:bg-gray-100">Control System</a>
                        <a href="/solutions/embedded&circuitdesign.html" class="block px-8 py-2 text-gray-600 hover:bg-gray-100">Embedded & Circuit Design</a>
                        <a href="/solutions/training&documentation.html" class="block px-8 py-2 text-gray-600 hover:bg-gray-100">Training & Documentation</a>
                        <a href="/solutions/3ddesign.html" class="block px-8 py-2 text-gray-600 hover:bg-gray-100">3D Design</a>
                        <a href="/solutions/webdevelopment.html" class="block px-8 py-2 text-gray-600 hover:bg-gray-100">Web Development</a>
                        <a href="/solutions/contradictions.html" class="block px-8 py-2 text-gray-600 hover:bg-gray-100">Consulting</a>
                    </div>

                    <a href="/index.html#contact" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
                </div>
            </div>
        </nav>
    </header>
    `;
}

// Reusable Footer Component
function getFooter() {
    return `
    <footer id="contact" class="bg-gray-100 py-4">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between items-center mb-3">
                <div>
                    <h3 class="text-sm font-bold text-gray-900 mb-1">Contact</h3>
                    <p class="text-gray-700 text-sm mb-1 flex items-center gap-2">
                        <i class="fas fa-phone text-sm text-gray-600"></i>
                        <a href="tel:+918160733241" class="text-gray-700 hover:text-blue-600 transition">+91 8160733241</a>
                    </p>
                    <p class="text-gray-700 text-sm flex items-center gap-2">
                        <i class="fas fa-map-marker-alt text-sm text-gray-600"></i>
                        Ahmedabad, Gujarat, India
                    </p>
                </div>
                <div class="flex gap-4 text-lg">
                    <a href="https://www.linkedin.com/in/dharm-patel-aa1a87212/" target="_blank" class="text-gray-600 hover:text-blue-600 transition">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://instagram.com/dharm_patel_14" target="_blank" class="text-gray-600 hover:text-pink-500 transition">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://github.com/DharmPatelPro" target="_blank" class="text-gray-600 hover:text-gray-900 transition">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <div class="border-t border-gray-300 pt-2">
                <p class="text-gray-600 text-xs text-center">&copy; 2026 Dharm Patel. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;
}

// Initialize Header and Footer
function initializeHeaderFooter() {
    const headerPlaceholder = document.getElementById('app-header');
    const footerPlaceholder = document.getElementById('app-footer');
    
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = getHeader();
        initMenuListeners();
    }
    
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = getFooter();
    }
}

// Mobile menu listeners
function initMenuListeners() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileSolutions = document.getElementById('mobile-solutions');
    const mobileSolutionsMenu = document.getElementById('mobile-solutions-menu');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    if (mobileSolutions) {
        mobileSolutions.addEventListener('click', () => {
            mobileSolutionsMenu.classList.toggle('hidden');
        });
    }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeHeaderFooter);
