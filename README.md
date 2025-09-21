# 🍛 Vindu - Discover Amazing Dishes

A beautiful, modern recipe website featuring Indian cuisine with multiple categories, subcategories, and cuisines.

## 🌟 Features

- **Multiple Categories**: Non-Vegetarian, Vegetarian, Vegan, Desserts
- **Subcategories**: Chicken, Lamb, Seafood, Beef, Pork, Vegetables, Paneer, Tofu, Salads, Cashews, Dal
- **Cuisine Types**: Indian, International, Regional specialties
- **Rich Recipe Data**: 500+ recipes with ingredients, instructions, ratings, and images
- **Modern UI**: Glass-morphism design with animated backgrounds
- **Responsive Design**: Works on all devices
- **Recipe Details**: Complete cooking instructions, nutritional info, and YouTube links

## 🚀 Live Demo

Visit the live website: [Your Vercel URL will be here]

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Mock Data** - Development data

## 📁 Project Structure

```
Vindu/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
├── server/                 # Express backend
│   ├── data/              # Recipe data files
│   ├── routes/            # API routes
│   ├── models/            # Data models
│   └── index.js           # Server entry point
└── vercel.json            # Vercel deployment config
```

## 🍽️ Recipe Categories

### Non-Vegetarian
- **Chicken**: 55 recipes including 5 biryanis
- **Lamb**: 30 recipes including 5 biryanis  
- **Seafood**: 31 recipes including 5 biryanis
- **Beef**: 15 recipes
- **Pork**: 15 recipes

### Vegetarian
- **Vegetables**: 50 recipes
- **Paneer**: 50 recipes
- **Tofu**: 50 recipes
- **Salads**: 50 recipes
- **Cashews**: 50 recipes
- **Dal**: 50 recipes

### Vegan
- 50 plant-based recipes

### Desserts
- 80 international dessert recipes

## 🚀 Deployment

This project is deployed on Vercel with automatic deployments from GitHub.

### Frontend Deployment
- Built with `npm run build`
- Served as static files
- Configured with Vercel

### Backend Deployment
- Node.js API endpoints
- Serverless functions
- Mock data for development

## 🛠️ Local Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone [your-github-repo-url]
   cd Vindu
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install client dependencies
   cd client
   npm install
   
   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Start development servers**
   ```bash
   # Terminal 1 - Start backend server
   cd server
   npm start
   
   # Terminal 2 - Start frontend server
   cd client
   npm start
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📱 Usage

1. **Browse Categories**: Click on any category card to explore recipes
2. **Navigate Subcategories**: Select specific food types (Chicken, Vegetarian, etc.)
3. **Choose Cuisine**: Pick from Indian, International, or regional cuisines
4. **View Recipes**: Browse recipe cards with images and details
5. **Recipe Details**: Click any recipe to see full instructions, ingredients, and nutritional info

## 🎨 Design Features

- **Glass-morphism UI**: Modern translucent design elements
- **Food Background**: Animated background with food images
- **Category Images**: Specific food images for each category
- **Responsive Cards**: Beautiful recipe cards with hover effects
- **Smooth Animations**: Framer Motion powered transitions

## 📊 Recipe Data

Each recipe includes:
- **Basic Info**: Name, description, cuisine, course
- **Cooking Details**: Prep time, cook time, difficulty, servings
- **Ingredients**: Complete ingredient list with measurements
- **Instructions**: Step-by-step cooking instructions
- **Nutrition**: Calories, protein, carbs, fat
- **Media**: High-quality food images and YouTube links
- **Dietary Info**: Vegetarian, vegan, gluten-free, diabetic-friendly flags

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Recipe data sourced from various culinary sources
- Images from Unsplash
- Icons from React Icons
- Animations powered by Framer Motion

---

**Made with ❤️ for food lovers everywhere!**