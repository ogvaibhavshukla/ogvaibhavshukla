# 🎨 Portfolio Integration Guide
## How to Add the Animated Contribution Calendar to Your Portfolio

### 📁 What You Need
Copy these 3 files to your portfolio folder:
- `contribution-calendar.js` - The main component
- `contribution-calendar.css` - Styles (won't conflict with your existing CSS)
- `contribution-calendar-config.js` - Your configuration

### 🔧 Setup Steps

#### 1. Get Your GitHub Token
1. Go to [GitHub Settings > Personal Access Tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Select only "public_repo" permission
4. Copy the token

#### 2. Configure Your Settings
Edit `contribution-calendar-config.js`:
```javascript
window.ContributionCalendarConfig = {
    GITHUB_USERNAME: 'your-github-username',    // ← Change this
    GITHUB_TOKEN: 'your_token_here',           // ← Paste your token
    DEFAULT_THEME: 'light',                    // or 'dark'
};
```

#### 3. Add to Your Portfolio HTML
Add this where you want the calendar to appear:

```html
<!-- Container for the calendar -->
<div id="contribution-calendar"></div>

<!-- Include the files (adjust paths as needed) -->
<link rel="stylesheet" href="contribution-calendar.css">
<script src="contribution-calendar-config.js"></script>
<script src="contribution-calendar.js"></script>
```

That's it! The calendar will automatically initialize.

### 🎯 Custom Integration
For more control, you can manually initialize:

```html
<!-- Custom container -->
<div id="my-calendar"></div>

<script>
// Manual initialization
const calendar = new ContributionCalendar({
    container: '#my-calendar',
    username: 'your-github-username',
    theme: 'dark'
});
</script>
```

### 🌟 Features You Get
- ✅ **Real GitHub Data**: Shows your actual contributions
- ✅ **8 Animation Patterns**: Click letters in "Activity" to see different animations
- ✅ **Dark/Light Mode**: Toggle button included
- ✅ **Responsive Design**: Works on mobile and desktop
- ✅ **Zero Conflicts**: CSS is scoped to avoid portfolio conflicts
- ✅ **Netlify Ready**: Pure frontend, no server needed

### 🚀 Deployment Tips

#### For Netlify/Static Hosting:
1. Just upload the 3 files with your portfolio
2. Make sure your GitHub token is in the config file
3. Deploy normally - it works entirely in the browser

#### Security Note:
Since this runs in the browser, your GitHub token will be visible in the source code. Only use tokens with minimal permissions (just "public_repo").

### 📱 Responsive Behavior
- **Desktop**: Full size calendar
- **Mobile**: Smaller squares, still fully functional
- **Tablet**: Adjusts automatically

### 🎨 Customization
You can modify the CSS variables in `contribution-calendar.css` to match your portfolio's color scheme:

```css
.contribution-calendar-container {
  --cc-bg-light: #your-color;
  --cc-text-light: #your-color;
  /* ... etc */
}
```

### ❓ Troubleshooting

**Calendar not showing?**
- Check browser console for errors
- Verify GitHub token is correct
- Make sure container element exists

**No GitHub data?**
- Check your token permissions
- Verify username is correct
- Component will show random data if GitHub API fails

**Styling conflicts?**
- All CSS is scoped with `.contribution-calendar-container`
- Should not interfere with existing styles

### 🔗 File Structure
```
your-portfolio/
├── index.html
├── style.css
├── script.js
├── contribution-calendar.js      ← Add this
├── contribution-calendar.css     ← Add this
└── contribution-calendar-config.js ← Add this
```

**Need help?** The component is self-contained and should work out of the box with any static website!
