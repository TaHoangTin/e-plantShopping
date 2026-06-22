# e-plantShopping - Paradise Nursery E-Commerce Application

**e-plantShopping** is a responsive, highly aesthetic front-end ReactJS shopping application representing the **Paradise Nursery** store. The application allows plant lovers to browse a diverse catalog of indoor plants, learn about their air-purifying and care needs, and manage their selections within an interactive, Redux-managed shopping cart.

---

## 🌿 Project Purpose

The goal of the **e-plantShopping** application is to deliver a seamless, state-of-the-art SPA (Single Page Application) interface for indoor plant shopping, ensuring optimal responsiveness and modern user experiences:
1. **Landing Page**: Immersive, full-screen botanical landing page displaying company details (**AboutUs**), tagline, and a "Get Started" link.
2. **Product Listing Page**: Curated catalogue of 18 unique plants divided into 3 categories (*Air Purifying Plants*, *Low Maintenance*, and *Dramatic Foliage*), with responsive grid layout and Add-to-Cart controls.
3. **Shopping Cart Page**: Dynamic cart listing showcasing unit prices, subtotals, quantity adjustments, item deletions, grand totals, and a secure checkout gateway simulation.

---

## 🛠️ Technology Stack

- **Framework**: ReactJS
- **State Management**: Redux Toolkit & React Redux
- **Styling**: Vanilla CSS (custom variables, frosted glassmorphism overlays, custom typography, and transitions)
- **Icons**: Lucide React
- **Typography**: Outfit, Playfair Display, and Inter (loaded from Google Fonts)

---

## 🚀 Getting Started

### 1. Installation
Clone the repository and install all dependencies:
```bash
git clone <repository-url>
cd e-plantShopping
npm install
```

### 2. Run the Development Server
Launch the local Vite server:
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser to interact with the application.

### 3. Build for Production
Bundle the project into optimized assets:
```bash
npm run build
```
The compiled files will be located in the `dist` directory.
