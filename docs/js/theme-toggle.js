// Theme Toggle Script
(function() {
    const HTML_ELEMENT = document.documentElement;
    const STORAGE_KEY = 'dnd-bot-theme';
    const DARK_THEME = 'dark';
    const LIGHT_THEME = 'light';
    const DARK_SWITCH_DELAY_MS = 250;
    let isThemeTransitioning = false;
    let themeTransitionTimeoutId = null;
    
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
        if (isThemeTransitioning) {
            clearTimeout(themeTransitionTimeoutId);
            themeTransitionTimeoutId = null;
            isThemeTransitioning = false;
            setThemeProgress(0);
            updateToggleButton();
            return;
        }

        const current = getCurrentTheme();
        const next = current === DARK_THEME ? LIGHT_THEME : DARK_THEME;
        isThemeTransitioning = true;
        setThemeProgress(0);
        updateToggleButton();

        requestAnimationFrame(() => {
            setThemeProgress(1);
        });

        themeTransitionTimeoutId = setTimeout(() => {
            setTheme(next);
            themeTransitionTimeoutId = null;
            setThemeProgress(0);
            updateToggleButton();
            isThemeTransitioning = false;
        }, DARK_SWITCH_DELAY_MS);
    }
    
    // Update button text/icon
    function updateToggleButton() {
        const button = document.getElementById('theme-toggle-btn');
        if (button) {
            const current = getCurrentTheme();
            button.textContent = current === DARK_THEME ? '☀️' : '🌙';
            button.setAttribute('aria-label', current === DARK_THEME ? 'Switch to light mode' : 'Switch to dark mode');
            button.title = current === DARK_THEME ? 'Switch to light mode' : 'Switch to dark mode';
        }
    }

    function setThemeProgress(value) {
        const button = document.getElementById('theme-toggle-btn');
        if (button) {
            button.style.setProperty('--theme-progress', String(value));
            button.setAttribute('aria-busy', value > 0 ? 'true' : 'false');
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
