
#!/bin/bash

# Deployment script for Vite project to Hostinger

echo "🚀 Starting deployment process..."

# Step 1: Clean up the environment
echo "🧹 Cleaning environment..."
if [ -d "node_modules" ]; then
  rm -rf node_modules
  echo "   ✓ Removed node_modules"
fi

if [ -f "package-lock.json" ]; then
  rm package-lock.json
  echo "   ✓ Removed package-lock.json"
fi

if [ -d "dist" ]; then
  rm -rf dist
  echo "   ✓ Removed dist folder"
fi

# Step 2: Install dependencies
echo "📦 Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
  echo "❌ Failed to install dependencies. Aborting."
  exit 1
fi
echo "   ✓ Dependencies installed successfully"

# Step 3: Build the project
echo "🔨 Building the project..."
npm run build
if [ $? -ne 0 ]; then
  echo "❌ Build failed. Aborting."
  exit 1
fi
echo "   ✓ Project built successfully"

# Step 4: Commit and push changes
echo "📤 Committing and pushing to GitHub..."
git add dist -f
git commit -m "Build: Update production files for deployment"
git push origin main

echo "✅ Deployment preparation complete!"
echo "🌐 Next steps:"
echo "   1. Ensure Hostinger is set up for Git deployment"
echo "   2. Configure the build command in Hostinger as described in hostinger-deploy-config.txt"
echo "   3. Deploy from Hostinger's Git integration panel"
