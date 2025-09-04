// 🔐 GitHub Contribution Calendar Configuration
// This file contains your GitHub settings for the animated contribution calendar component

window.ContributionCalendarConfig = {
    // 🎯 Your GitHub username (this will be the default user shown)
    GITHUB_USERNAME: 'ogvaibhavshukla',
    
    // 🔑 Your GitHub Personal Access Token
    // Get one from: https://github.com/settings/tokens
    // Only needs "public_repo" permission for public repos
    // Token will be injected at build time by Netlify (see build.sh)
    GITHUB_TOKEN: '%%GITHUB_TOKEN%%',
    
    // 🎨 Default theme ('light' or 'dark')
    DEFAULT_THEME: 'dark',
    
    // ⚡ Animation settings
    ANIMATION_SPEED: 150, // milliseconds between frames
    MAX_GENERATIONS: 500, // maximum animation cycles
    
    // 📏 Grid settings (don't change unless you know what you're doing)
    GRID_ROWS: 7,
    GRID_COLS: 53, // Full year + 1 extra week (for grid generation)
    SQUARE_SIZE: 14, // pixels
    GAP_SIZE: 3,     // pixels
    
    // 📅 Custom date range - Exact 365 days (no padding weeks)
    START_DATE: new Date('2025-01-01'), // January 1st, 2025 (Wednesday)
    END_DATE: new Date('2025-12-31')    // December 31st, 2025 (Wednesday)
};

// 🔒 Security Note:
// Since this is a client-side component, your token will be visible in the browser.
// Only use tokens with minimal permissions (just public repo access).
// For production sites, consider using a backend proxy for better security.
