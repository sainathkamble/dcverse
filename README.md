
# 🧠 AI Dashboard UI

This is a responsive, single-page **AI Dashboard UI** built as part of a **DCverse** frontend assignment. It displays user avatars from the [DummyJSON Users API](https://dummyjson.com/users) and includes a clean component structure, modern UI interactions, and a mobile-friendly design.

---

## 📸 Features

* ✅ Welcome header and personalized user greeting
* ✅ Card-based UI displaying **3 dummy avatars**
  * Includes avatar image, name, and "Edit" button
* ✅ **Floating “Create New Avatar”** button
  * Opens a **modal UI** (form UI only, no backend saving)
* ✅ Responsive layout across mobile and desktop
* ✅ Polished hover effects and smooth transitions

---

## 🧰 Tech Stack

* **Framework**: React (Vite)
* **Styling**: Tailwind CSS
* **API**: [DummyJSON Users API](https://dummyjson.com/users)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sainathkamble/dcverse.git
cd dcverse
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 📁 Project Structure

dcverse/
├── public/
├── src/
│   ├── components/
│   │   ├── AvatarCard.jsx
│   │   ├── CreateAvatarModal.jsx
│   │   ├── FloatingButton.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── Sidebar.jsx
│   │   └── Topbar.jsx
│   ├── pages/
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── index.html
└── vite.config.js
```

---

## 🌟 Highlights

* ⚛️ Built with **React + Vite** for fast development
* 🎨 Styled using **Tailwind CSS** utility classes
* 🔄 Fetched real dummy data from **DummyJSON API**
* 🧱 Modular, reusable component architecture
* 📱 Optimized for mobile and desktop screens
* ✨ Smooth animations and interaction polish

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
