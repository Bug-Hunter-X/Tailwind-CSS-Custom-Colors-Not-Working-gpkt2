```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3498db', // Example custom color
      },
    },
  },
  plugins: [],
};
```

```html
<!-- index.html -->
<div class="bg-custom-blue p-4">
  <p>This should be blue.</p>
</div>
```