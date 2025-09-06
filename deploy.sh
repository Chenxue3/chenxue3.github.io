#!/bin/bash

# Deploy script for GitHub Pages
echo "🚀 Starting deployment to GitHub Pages..."

# Build the project
echo "📦 Building project..."
npm run build

# Deploy to GitHub Pages using vite-plugin-gh-pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment completed!"
echo "🌍 Your site should be available at: https://chenxue3.github.io"
