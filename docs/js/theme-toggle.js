// Theme Toggle Script
(function() {
    const HTML_ELEMENT = document.documentElement;
    const STORAGE_KEY = 'dnd-bot-theme';
    const DARK_THEME = 'dark';
    const LIGHT_THEME = 'light';
    
    // Initialize theme on page load
    function initializeTheme() {
        // Check if user has a saved preference
        const savedTheme = localStorage.getItem(STORAGE_KEY);
        
        if (savedTheme) {
            // Use saved preference
            setTheme(savedTheme);
        } else {
            // Use system preference if available, otherwise use light
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? DARK_THEME : LIGHT_THEME);
        }
        
        // Update toggle button text
        updateToggleButton();
    }
    
    // Set the theme
    function setTheme(theme) {
        if (theme === DARK_THEME || theme === LIGHT_THEME) {
            HTML_ELEMENT.setAttribute('data-theme', theme);
            localStorage.setItem(STORAGE_KEY, theme);
        }
    }
    
    // Get current theme
    function getCurrentTheme() {
        return HTML_ELEMENT.getAttribute('data-theme') || LIGHT_THEME;
    }
    
    // Toggle between light and dark
    function toggleTheme() {
        const current = getCurrentTheme();
        const next = current === DARK_THEME ? LIGHT_THEME : DARK_THEME;
        setTheme(next);
        updateToggleButton();
    }
    
    // Update button text/icon
    function updateToggleButton() {
        const button = document.getElementById('theme-toggle-btn');
        if (button) {
            const current = getCurrentTheme();
            button.textContent = current === DARK_THEME ? '☀️ Light' : '🌙 Dark';
        }
    }
    
    // Expose toggle function globally
    window.toggleTheme = toggleTheme;
    
    // Initialize on DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeTheme);
    } else {
        initializeTheme();
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(STORAGE_KEY)) {
            setTheme(e.matches ? DARK_THEME : LIGHT_THEME);
            updateToggleButton();
        }
    });
})();
