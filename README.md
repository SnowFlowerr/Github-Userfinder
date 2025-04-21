# GitHub User Finder

A modern, responsive web application that allows users to search and explore GitHub profiles. Built with React and the GitHub API, this application provides a seamless experience for discovering GitHub users and their repositories.

![Screenshot 2025-04-21 at 3 16 33 PM](https://github.com/user-attachments/assets/f48d4d41-f7e8-4f77-9ead-80a897605ec6)


## 🌟 Features

- **Real-time Search**: Instant search results with GitHub user suggestions

![Screenshot 2025-04-21 at 3 16 57 PM](https://github.com/user-attachments/assets/711776e4-a362-40a6-b9ac-4dd3339593d3)
- **User Profiles**: Detailed view of GitHub user information

![Screenshot 2025-04-21 at 3 16 47 PM](https://github.com/user-attachments/assets/b146a7a0-6ed9-4a41-ae0e-fac224b824ba)
- **Repository Explorer**: Browse through user repositories with sorting options

![Screenshot 2025-04-21 at 3 17 04 PM](https://github.com/user-attachments/assets/da27ce65-3e60-4086-ae37-8eb477cdae63)
- **Responsive Design**: Fully responsive layout that works on all devices

![Screenshot 2025-04-21 at 3 17 10 PM](https://github.com/user-attachments/assets/d3cb4f5a-7372-4973-ad02-d8c2185714bf)
- **Modern UI**: Clean and intuitive interface with smooth animations
- **Error Handling**: Graceful error handling and loading states
- **URL-based Navigation**: Shareable URLs for user profiles and search results

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/snowflowerr/github-userfinder.git
   cd github-userfinder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool and development server
- [React Router](https://reactrouter.com/) - Client-side routing
- [GitHub REST API](https://docs.github.com/en/rest) - Data source
- [CSS Modules](https://github.com/css-modules/css-modules) - CSS styling

## 📁 Project Structure

```
github-user-finder/
├── src/
│   ├── components/
│   │   ├── Home/
│   │   ├── SearchBar/
│   │   ├── UserList/
│   │   ├── UserDetails/
│   │   └── RepoList/
│   ├── services/
│   │   └── githubService.js
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## 🔍 Features in Detail

### Search Functionality
- Real-time search suggestions as you type
- Debounced API calls to prevent rate limiting
- User avatars and names in search results
- Click outside to close suggestions

### User Profiles
- Profile information display
- Repository listing with sorting options
- Responsive layout for all screen sizes
- Loading states and error handling

### Repository Explorer
- Sort repositories by stars, forks, or updates
- Repository details including description and stats
- Links to GitHub repositories
- Pagination for large repository lists

## 🎨 UI/UX Features

- **Modern Design**: Clean and professional interface
- **Responsive Layout**: Works seamlessly on mobile, tablet, and desktop
- **Smooth Animations**: Subtle transitions and hover effects
- **Loading States**: Clear loading indicators
- **Error Handling**: User-friendly error messages
- **Accessibility**: Keyboard navigation and ARIA labels

## 🔒 Security

- Environment variables for API tokens
- Rate limiting handling
- Error boundary implementation
- Secure API calls

## 🚀 Performance

- Debounced API calls
- Lazy loading of components
- Optimized images
- Efficient state management

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Mobile devices (< 480px)
- Tablets (480px - 768px)
- Desktop (> 768px)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- GitHub for their excellent API
- React team for the amazing framework
- Vite for the fast development experience
- All contributors and users of this project

## 📧 Contact

Your Name - [Bhudeo Krit](bhudeokrit@gmail.com)

Project Link: [https://github.com/yourusername/github-user-finder](https://github.com/snowflowerr/github-userfinder)

---

Made with ❤️ by [Bhudeo Krit]
# Github-Userfinder
