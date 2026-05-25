const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/NavigationBar.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Change hover colors and base nav link colors based on scroll
content = content.replace(
  'className={`relative text-white/90 hover:text-electric-teal transition-colors duration-200 text-[0.95rem] font-medium ${',
  'className={`relative hover:text-electric-teal transition-colors duration-200 text-[0.95rem] font-medium ${scrolled ? "text-white/90" : "text-charcoal/90"} ${'
);

// Change hamburger text color
content = content.replace(
  'className="lg:hidden text-white p-2"',
  'className={`lg:hidden p-2 ${scrolled ? "text-white" : "text-charcoal"}`}'
);

fs.writeFileSync(filePath, content);
console.log('NavigationBar updated correctly.');
