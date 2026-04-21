# 🛒 S-Mall E-commerce

A frontend e-commerce application built with React and Vite, following a modular feature-based architecture. The project delivers a complete shopping experience including product browsing, search, filtering, and cart management.

---

## 🚀 Demo

🔗 https://s-mall-ecomerce.vercel.app

---

## 🧱 Tech Stack

- ⚛️ React
- ⚡ Vite
- 🟨 JavaScript (ES6+)
- 🌐 React Router DOM
- 🎨 CSS
- 🧩 React Context API

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
├── contexts/      # Global state (cart)
├── features/      # Domain-based components
├── hooks/         # Custom hooks (reusable logic)
├── layouts/       # Layout components (navbar, footer)
├── models/        # Data models
├── pages/         # Main views
├── router/        # Routing configuration
├── services/      # API interaction & business logic
├── styles/        # Global styles
└── utils/         # Helper functions
```

---
## ✨ Features

- 🛍️ Product listing  
- 🔎 Product search  
- 🎯 Category filtering  
- 📄 Product detail view  
- 🛒 Shopping cart (Context API)  
- 🔢 Quantity selector  
- 💡 Product suggestions  

### ⚡ UI States Handling

- Skeleton loading  
- Error states  
- Empty states  

- 📱 Responsive design  

---

## 🧠 State Management

Global state (cart) is handled using **React Context API**, allowing shared access across the application without external libraries.

---

## 🔌 Services Layer

Data access and business logic are abstracted into:

- `productService.js`  
- `filterService.js`  
- `searchService.js`  

This ensures UI components remain decoupled from data sources.

---

## ⚙️ Installation

```bash
git clone https://github.com/cristhianblaffita-web/s-mall-ecomerce.git
cd s-mall-ecomerce
npm install
npm run dev
```

## 📦 Build
```bash
npm run build
```