# 🛒 S-Mall E-commerce

A frontend e-commerce application built with React and Vite, following a modular feature-based architecture. The project delivers a complete shopping experience including product browsing, search, filtering, category selection, shopping cart management, and detailed product views.

---

## 🚀 Demo

🔗 https://s-mall-ecomerce.vercel.app

---

## 🧱 Tech Stack

- ⚛️ **React** ^19.2.0
- ⚡ **Vite** ^7.3.1
- 🟨 **JavaScript** ES6+
- 🌐 **React Router DOM** ^7.13.1
- 🎨 **CSS** (Custom styling with CSS variables)
- 🧩 **React Context API** (Global state management)
- 🎭 **React Icons** ^5.6.0

---

## 🧠 Architecture

This project follows a **feature-based modular architecture**, with clear separation of concerns:

- **UI Layer** → `features`, `layouts`, `pages`
- **Logic Layer** → `hooks`
- **Data Layer** → `services`
- **Global State** → `context`
- **Models** → `models`

This structure improves scalability, readability, and maintainability.

---

## 📁 Project Structure

```bash
src/
├── assets/        # Static resources (images, icons)
├── contexts/      # Global state (cart, theme)
├── features/      # Domain-based components
├── hooks/         # Custom hooks (reusable logic)
├── layouts/       # Layout components (navbar, footer, menu)
├── models/        # Data models
├── pages/         # Main views
├── router/        # Routing configuration
├── services/      # API interaction & business logic
├── styles/        # Global styles
└── utils/         # Helper functions
```

---

## ✨ Features

### Core Features
- 🛍️ **Product Listing** - Browse all available products
- 🔎 **Product Search** - Find products by name
- 🎯 **Category Filtering** - Filter products by category
- 📄 **Product Detail View** - Detailed product information
- 🛒 **Shopping Cart** - Cart management with Context API
- 🔢 **Quantity Selector** - Adjust product quantities
- 💡 **Product Suggestions** - Related products recommendations

### UI/UX Features
- 📱 **Responsive Design** - Works seamlessly on all devices (mobile, tablet, desktop)
- 🎬 **Smooth Animations** - Enhanced hero section with scroll functionality and animations
- 🎨 **Light/Dark Mode** - Theme switcher with persistent preferences
- ⚡ **UI States Handling**
  - Skeleton loading states
  - Error state displays
  - Empty state messages

### Recent Enhancements
- ✨ **Enhanced Hero Section** - Dynamic hero banner with "Shop Now" CTA button and smooth scroll to products
- 📋 **Collapsible Menu** - Organized navigation with expandable Categories, Options, and Preferences sections
- 📱 **Responsive Details Component** - More Details section automatically manages open state based on screen size
- 🎯 **Smooth Animations** - Slide-in animations and hover effects throughout the UI
---

## 🧠 State Management

Global state (cart and theme) is handled using **React Context API**, allowing shared access across the application without external libraries:

- **Cart Context** - Manages shopping cart items and operations
- **Theme Context** - Manages light/dark mode preferences

---

## 🔌 Services Layer

Data access and business logic are abstracted into:

- `productService.js` - Fetch and manage product data
- `filterService.js` - Apply filters and sorting
- `searchService.js` - Search functionality

This ensures UI components remain decoupled from data sources.

---

## 📦 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint to check code quality
npm run lint
```

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/cristhianblaffita-web/S-Mall-Ecomerce.git

# Navigate to the project directory
cd S-Mall-Ecomerce

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

---

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

---

## 🔄 Recent Updates (May 2026)

### May 5, 2026
- ✨ Enhanced hero section with scroll functionality and dynamic content
- 🎯 Improved menu structure with collapsible sections for better navigation
- 📱 Responsive details component that adapts to screen size
- 🔧 Code refactoring for improved maintainability

---

## 🎯 Future Improvements

- 🔐 User authentication and account management
- 💳 Payment integration (Stripe/PayPal)
- 📦 Order tracking functionality
- ⭐ Product reviews and ratings system
- 🔔 Wishlist feature
- 📊 Admin dashboard for product management
- 🌐 Multi-language support

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👤 Author

**Cristhian Blaffita**
- GitHub: [@cristhianblaffita-web](https://github.com/cristhianblaffita-web)
- Email: cristhianblaffita@gmail.com

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

---

**Happy coding!** 🚀
