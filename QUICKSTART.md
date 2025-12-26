# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Up Environment Variables
Create a `.env.local` file in the root directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
ELEVENLABS_API_KEY=your_elevenlabs_api_key_here (optional)
ELEVENLABS_VOICE_ID=21m00Tcm4TlvDq8ikWAM
```

**Note**: The app works with mock data if you don't have API keys, but AI features will be limited.

### Step 3: Run the App
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Getting API Keys

### OpenAI API Key (Recommended)
1. Visit [https://platform.openai.com/](https://platform.openai.com/)
2. Sign up or log in
3. Go to API Keys section
4. Create a new secret key
5. Copy and paste into `.env.local`

### ElevenLabs API Key (Optional - for voice features)
1. Visit [https://elevenlabs.io/](https://elevenlabs.io/)
2. Sign up for an account
3. Get your API key from the dashboard
4. Add to `.env.local`

## ✅ Features Checklist

- ✅ User input form with all required fields
- ✅ AI-powered workout plan generation
- ✅ AI-powered diet plan generation
- ✅ AI tips and motivation
- ✅ Voice playback (requires ElevenLabs API key)
- ✅ Image generation for exercises and meals (requires OpenAI API key)
- ✅ PDF export
- ✅ Dark/Light mode toggle
- ✅ Local storage persistence
- ✅ Regenerate plan option
- ✅ Smooth animations
- ✅ Daily motivation quotes

## 🎯 Usage Tips

1. **Fill the form completely** - More details = better personalized plan
2. **Click exercises/meals** - Generate images to visualize your plan
3. **Use voice feature** - Listen to your plan on the go
4. **Export PDF** - Save your plan for offline access
5. **Try regenerate** - Get different variations of your plan

## 🐛 Troubleshooting

### TypeScript Errors
If you see TypeScript errors, make sure you've run `npm install` first.

### API Errors
- Check that your API keys are correctly set in `.env.local`
- Ensure the file is named `.env.local` (not `.env`)
- Restart the dev server after adding environment variables

### Voice Not Working
- Voice features require ElevenLabs API key
- Check browser console for error messages
- The app will show an error toast if the API key is missing

### Images Not Generating
- Image generation requires OpenAI API key with DALL-E access
- Check your OpenAI account has credits
- The app will show placeholder images if generation fails

## 📚 Next Steps

- Read the full [README.md](./README.md) for detailed documentation
- Customize the UI in `components/` directory
- Modify prompts in `app/api/generate-plan/route.ts`
- Add more features as needed!

Happy coding! 💪

