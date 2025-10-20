# 📝 B-NOTES

A modern, feature-rich note-taking web application built with React, TailwindCSS, and Vite. Perfect for organizing thoughts, ideas, and tasks with an intuitive and beautiful user interface.

![B-NOTES](https://img.shields.io/badge/React-18.2.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.6-38bdf8)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646cff)

## ✨ Features

- **📝 Rich Note Editor** - Create and edit notes with titles, content, and metadata
- **🏷️ Categories & Tags** - Organize notes by categories (Personal, Work, Ideas) and custom tags
- **🔍 Powerful Search** - Search across titles, content, and tags instantly
- **💾 Local Storage** - All notes are saved locally in your browser
- **🎨 Beautiful UI** - Modern, responsive design with smooth animations
- **⚡ Fast Performance** - Built with Vite for lightning-fast development and production builds
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile devices

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Next-generation frontend tooling
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful & consistent icon pack
- **LocalStorage API** - Client-side data persistence

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd PROJECT-1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📁 Project Structure

```
PROJECT-1/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx       # Navigation sidebar with categories
│   │   ├── NoteCard.jsx      # Note preview card
│   │   ├── NoteEditor.jsx    # Note editing/viewing component
│   │   └── EmptyState.jsx    # Welcome screen
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles and Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 💡 Key Features Explained

### Note Management
- Create new notes with a single click
- Edit existing notes inline
- Delete notes with confirmation
- Auto-save functionality

### Organization
- **Categories**: Organize notes into Personal, Work, or Ideas
- **Tags**: Add multiple custom tags to each note
- **Search**: Filter notes by title, content, or tags

### User Interface
- Clean, modern design with intuitive navigation
- Responsive layout that works on all devices
- Smooth animations and transitions
- Color-coded categories for quick identification

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    // Customize your primary color palette
  }
}
```

### Categories
Add or modify categories in `App.jsx`:
```javascript
const categories = [
  { id: 'all', name: 'All Notes', count: notes.length },
  // Add your custom categories here
];
```

## 🔒 Data Storage

All notes are stored locally in your browser using the LocalStorage API. This means:
- ✅ No server required
- ✅ Privacy-focused (data never leaves your device)
- ✅ Works offline
- ⚠️ Data is browser-specific (clearing browser data will remove notes)

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern browser with LocalStorage support

## 🚀 Deployment

### Deploy to Netlify
```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

### Deploy to Vercel
```bash
npm run build
# Deploy the 'dist' folder to Vercel
```

### Deploy to GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist` folder to `gh-pages` branch

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Built with ❤️ + ☕ by Bhushan Pawar**

- 🌐 Portfolio: [bhushan-pawar.vercel.app](https://bhushan-pawar.vercel.app/)
- 🐙 GitHub: [@bhushcodes](https://github.com/bhushcodes)
- 💼 LinkedIn: [bhushcodes](https://www.linkedin.com/in/bhushcodes/)
- 📸 Instagram: [@unfiltered.bhushan](https://www.instagram.com/unfiltered.bhushan/)

Feel free to connect and follow for more projects!

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- UI inspired by modern note-taking apps
- Built with [React](https://react.dev/) and [TailwindCSS](https://tailwindcss.com/)

---

**Happy Note-Taking! 📝✨**
