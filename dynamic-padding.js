// Dynamic Padding System - Automatically adjusts based on device type and navbar height
function setDynamicPadding() {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');
    const pageHeader = document.querySelector('.page-header');
    
    if (!navbar && !pageHeader) return;
    
    // Get the header height (either navbar or page-header)
    const headerHeight = navbar ? navbar.offsetHeight : (pageHeader ? pageHeader.offsetHeight : 0);
    
    // Detect device type
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
    const isDesktop = window.innerWidth > 1024;
    
    // Apply dynamic padding to hero sections
    if (hero) {
        if (isMobile || isTablet) {
            hero.style.paddingTop = headerHeight + 'px';
            hero.style.minHeight = (window.innerHeight - headerHeight) + 'px';
        } else {
            hero.style.paddingTop = '0px';
            hero.style.minHeight = '100vh';
        }
    }
    
    // Apply dynamic padding to page headers on service pages
    if (pageHeader) {
        pageHeader.style.marginTop = headerHeight + 'px';
    }
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setDynamicPadding);
} else {
    setDynamicPadding();
}

// Re-calculate on window resize and orientation change
window.addEventListener('resize', setDynamicPadding);
window.addEventListener('orientationchange', () => {
    setTimeout(setDynamicPadding, 100);
});

// Re-calculate after images load (as they might affect navbar height)
window.addEventListener('load', setDynamicPadding);
