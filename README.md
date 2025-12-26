# 💪 AI Fitness Coach App

An AI-powered fitness assistant built with Next.js that generates personalized workout and diet plans using Large Language Models (LLMs). The app includes voice and image generation features for an immersive experience.

## 🚀 Features

### User Input
- **Personal Details**: Name, Age, Gender
- **Physical Metrics**: Height & Weight
- **Fitness Goals**: Weight Loss, Muscle Gain, Endurance, General Fitness, Flexibility
- **Fitness Level**: Beginner / Intermediate / Advanced
- **Workout Location**: Home / Gym / Outdoor
- **Dietary Preferences**: Vegetarian / Non-Vegetarian / Vegan / Keto
- **Optional Fields**: Medical history, stress level

### AI-Powered Plan Generation
- **🏋️ Workout Plan**: Daily exercise routines with sets, reps, and rest time
- **🥗 Diet Plan**: Meal breakdown for breakfast, lunch, dinner, and snacks
- **💬 AI Tips & Motivation**: Lifestyle tips, posture advice, and motivational quotes
- **⚡ Dynamic Prompt Engineering**: All content is AI-generated and personalized based on user input

### Voice Features
- **Read My Plan**: Text-to-speech using ElevenLabs API
- **Section Selection**: Choose to listen to Workout or Diet plans separately

### Image Generation
- Click on any exercise or meal to generate a visual representation
- Uses OpenAI DALL-E 3 for high-quality images
- Examples:
  - "Barbell Squat" → Realistic gym exercise image
  - "Grilled Chicken Salad" → Professional food photography

### Additional Features
- **📄 PDF Export**: Export your complete plan as a PDF
- **🌗 Dark/Light Mode**: Toggle between themes with persistence
- **💾 Local Storage**: Plans are automatically saved in browser storage
- **🧩 Regenerate Plan**: Generate a new plan with the same details
- **⚡ Smooth Animations**: Framer Motion animations throughout
- **💬 Daily Motivation**: AI-powered motivational quotes

## 🛠️ Tech Stack

| Category | Tools |
|----------|-------|
| **Frontend** | Next.js 14 (App Router), React 18, TypeScript |
| **Styling** | Tailwind CSS |
| **State Management** | Zustand with persistence |
| **Animations** | Framer Motion |
| **AI APIs** | OpenAI (GPT-4, DALL-E 3) |
| **Voice** | ElevenLabs TTS API |
| **PDF Export** | jsPDF, html2canvas |
| **Icons** | Lucide React |
| **Notifications** | React Hot Toast |

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd FitnessCoachApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # OpenAI API Key (Required for AI features)
   OPENAI_API_KEY=your_openai_api_key_here
   
   # ElevenLabs API Key (Optional, for voice features)
   ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
   ELEVENLABS_VOICE_ID=21m00Tcm4TlvDq8ikWAM
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔑 API Keys Setup

### OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Add it to your `.env.local` file

**Note**: The app will work with mock data if no API key is provided, but AI features will be limited.

### ElevenLabs API Key (Optional)
1. Go to [ElevenLabs](https://elevenlabs.io/)
2. Sign up for an account
3. Get your API key from the dashboard
4. Add it to your `.env.local` file

**Note**: Voice features will show an error message if the API key is not configured, but the app will still function.

## 📁 Project Structure

```
FitnessCoachApp/
├── app/
│   ├── api/
│   │   ├── generate-plan/     # AI plan generation endpoint
│   │   ├── generate-image/    # Image generation endpoint
│   │   ├── voice/             # Text-to-speech endpoint
│   │   └── motivation/         # Daily motivation quotes
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   ├── UserForm.tsx           # User input form
│   ├── PlanDisplay.tsx        # Main plan display
│   ├── WorkoutPlan.tsx        # Workout plan component
│   ├── DietPlan.tsx           # Diet plan component
│   ├── AITips.tsx             # Tips and motivation
│   ├── VoicePlayer.tsx        # Voice playback controls
│   ├── ExerciseCard.tsx       # Individual exercise card
│   ├── MealCard.tsx           # Individual meal card
│   ├── ThemeToggle.tsx        # Dark/light mode toggle
│   └── MotivationQuote.tsx    # Daily quote display
├── lib/
│   ├── api.ts                 # API client functions
│   ├── imageGeneration.ts    # Image generation utilities
│   └── pdfExport.ts           # PDF export functionality
├── store/
│   └── planStore.ts          # Zustand state management
└── package.json
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Add environment variables in Netlify dashboard
4. Deploy!

## 🎯 Usage

1. **Fill in your details**: Complete the form with your personal information, fitness goals, and preferences
2. **Generate Plan**: Click "Generate My Fitness Plan" to create your personalized plan
3. **Explore Your Plan**: 
   - View your workout routines and diet plan
   - Click on exercises/meals to generate images
   - Listen to your plan using the voice feature
4. **Export**: Download your plan as a PDF
5. **Regenerate**: Create a new plan with different variations

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Notes

- The app includes mock data fallbacks for development without API keys
- All plans are saved to browser local storage automatically
- Dark mode preference is persisted across sessions
- Image generation requires OpenAI API key with DALL-E access
- Voice features require ElevenLabs API key

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- OpenAI for GPT-4 and DALL-E 3
- ElevenLabs for text-to-speech API
- Next.js team for the amazing framework
- Framer Motion for smooth animations

---

**Built with ❤️ using Next.js and AI**

