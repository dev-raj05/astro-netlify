# Astro-Sanity Blog

A modern blog website built with Astro and Sanity CMS, offering blazing-fast performance and a powerful content management system.

## Features

- ⚡️ Built with Astro for lightning-fast page loads
- 📝 Sanity CMS integration for content management
- 🎨 Responsive design
- 🔍 SEO optimized
- 💨 Fast build times
- 📱 Mobile-first approach

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16.0.0 or higher)
- npm or yarn
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/astro-sanity-blog.git
cd astro-sanity-blog
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add the following:
```env
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

## Sanity CMS Setup

1. Create a Sanity account at [sanity.io](https://www.sanity.io/)

2. Install Sanity CLI globally:
```bash
npm install -g @sanity/cli
# or
yarn global add @sanity/cli
```

3. Initialize Sanity studio:
```bash
cd studio
sanity init
```

4. Start Sanity studio:
```bash
sanity start
```

## Development

To start the development server:
```bash
npm run dev
# or
yarn dev
```

The site will be available at `http://localhost:3000`

To start both Astro and Sanity studio simultaneously:
```bash
npm run dev:all
# or
yarn dev:all
```

## Building for Production

1. Build the project:
```bash
npm run build
# or
yarn build
```

2. Preview the production build:
```bash
npm run preview
# or
yarn preview
```

## Deployment

### Deploying the Frontend

You can deploy the `dist` folder to any static hosting service like Netlify, Vercel, or GitHub Pages.

#### Netlify Deployment
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set the build command to `npm run build` or `yarn build`
4. Set the publish directory to `dist`
5. Add your environment variables in Netlify's dashboard

#### Vercel Deployment
1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Astro and set up the build configuration
4. Add your environment variables in Vercel's dashboard

### Deploying Sanity Studio

1. Build the studio:
```bash
cd studio
sanity build
```

2. Deploy the studio:
```bash
sanity deploy
```

## Project Structure

```
/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── studio/
│   ├── schemas/
│   └── sanity.config.ts
├── public/
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Customization

### Modifying the Theme
Edit the theme variables in `src/styles/global.css`

### Adding New Content Types
1. Create new schema files in `studio/schemas/`
2. Register them in `studio/schemas/schema.js`
3. Update the corresponding Astro components in `src/components/`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Support

For support, email your-email@example.com or open an issue in the GitHub repository.

## Acknowledgments

- [Astro Documentation](https://docs.astro.build)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Deployment Guides](https://docs.astro.build/en/guides/deploy/)
