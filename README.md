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
