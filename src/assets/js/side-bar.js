/**
 * SideBar navigation component
 */

export class SideBar {
    constructor() {
        this.sidebar = document.querySelector('.side-nav');
        this.hamburger = document.querySelector('.hamburger');
        
        if (!this.sidebar || !this.hamburger) {
            console.warn('SideBar elements not found');
            return;
        }

        this.init();
    }

    init() {

        // Toggle on hamburger click
        this.hamburger.addEventListener('click', () => {
            this.toggle();
        });

    }

    toggle() {
        this.sidebar.classList.toggle('collapsed');
        this.updateSidebarWidth();
    }

    updateSidebarWidth() {
        const width = this.sidebar.classList.contains('collapsed') ? '3.5rem' : '12rem';
        document.documentElement.style.setProperty('--side-nav-width', width);
    }
}

// Initialize sidebar
export function initSidebar() {
    return new SideBar();
}