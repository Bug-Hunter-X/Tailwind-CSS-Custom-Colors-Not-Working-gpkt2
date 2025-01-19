```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./index.html"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3498db', // Example custom color
      },
    },
  },
  plugins: [],
}
```

```html
<!-- index.html -->
<div class="bg-custom-blue p-4">
  <p>This should be blue.</p>
</div>
```