/**
 * Main entry point for the application
 */

import { initNavigation } from './navigation.js';

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎫 Ticketing App starting...');

    // Initialize navigation if elements exist
    if (document.querySelector('.side-nav')) {
        initNavigation();
    }
    
    console.log('✨ App initialized successfully!');
});
