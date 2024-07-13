<div align="center">
  <h1>Campers Shop</h1>
</div>

---

## Project Overview

Campers Shop is an e-commerce website dedicated to providing all the necessary and fun items for camping enthusiasts. The design is user-friendly and visually appealing, drawing inspiration from Adventure Shop, Camping Shop, and The Camperco Shop.

## Core Pages and Functionalities

### 1. Homepage

- **Header**: Includes logo and site name.
- **Navbar**: Navigation links to other pages (About Us, Products Page, etc.), and essential icons like cart and wishlist.
- **Hero Section**: Visually appealing section to captivate visitors.
- **Best Selling/Recommended Products Section**: Highlights products with a "View More" button to navigate to the Products page.
- **Categories Section**: Displays product categories with images or icons.
- **Featured Products**: Highlights products with a button to view the details page.
- **Unique Section**: Distinctive content (e.g., video blogs, testimonials, tour groups).
- **FAQ Section**: Answers to frequently asked questions.
- **Footer**: Contact information, social media links, and relevant links.

### 2. Products Page

- **Product Listings**: Displays all products in grid or list view.
- **Product Details Button**: Redirects to the Product Details page.
- **Searching and Filtering**: Search bar, category filters, price range filters, sorting options, and a clear button to reset filters.

### 3. Product Details Page

- **Product Information**: Displays name, price, stock quantity, description, category, ratings, and images.
- **Add to Cart Button**: Allows adding products to the cart with validation rules.

### 4. Product Management

- **Product List Table**: Displays products with actions (create, update, delete).
- **Actions**: Confirmation prompts for deleting products.

### 5. Cart Page

- **Cart Items**: Lists products added to the cart with quantity controls.
- **Quantity Controls**: Allows increasing or decreasing product quantities.
- **Remove Product Button**: Allows removing products from the cart with confirmation prompts.
- **Pricing Details**: Displays total pricing dynamically.
- **Place Order Button**: Allows placing an order if products are in stock.

### 6. Checkout Page

- **User Details**: Collects user information for order processing.
- **Payment Methods**: Cash on Delivery and optionally Stripe integration.

### 7. About Us Page

- **Contact Information**: Displays phone number, email address, and physical address.
- **Map**: Embeds a Google Map showing the shop's location.
- **Social Media Links**: Icons linking to social media pages.
- **Mission Statement**: Shares the company's mission and values.
- **Team Members**: Introduces key team members with photos and bios.

---

## Technology Stack

- React
- Redux Toolkit
- Node.js
- Express
- MongoDB
- Stripe (optional)

## Installation Guideline

### Prerequisites

- Node.js (version >= 12.0.0)
- MongoDB
- Stripe API keys (if using Stripe for payments)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/ShahAlammm/campers-shop-client
   cd campers-shop
