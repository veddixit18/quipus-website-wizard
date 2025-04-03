
# Deployment Guide for Quipus Website

This guide outlines the process for deploying the Quipus website to Hostinger using GitHub integration.

## Automated Deployment

We've created a deployment script to simplify the process. Follow these steps:

1. Make sure you have permission to execute the script:
   ```
   chmod +x deploy.sh
   ```

2. Run the deployment script:
   ```
   ./deploy.sh
   ```

   This script will:
   - Clean up your environment (remove node_modules, package-lock.json, and dist)
   - Install dependencies
   - Build the project
   - Force add the dist folder to git (even if it's in .gitignore)
   - Commit and push to GitHub

3. Configure Hostinger as described in the `hostinger-deploy-config.txt` file.

## Manual Deployment

If you prefer to deploy manually:

1. Clean and build locally:
   ```
   rm -rf node_modules package-lock.json dist
   npm install
   npm run build
   ```

2. Upload the contents of the `dist` folder to your Hostinger `public_html` directory using FTP or the Hostinger File Manager.

## Important Configuration Files

The following files ensure proper routing and configuration:

- `public/_redirects`: Handles SPA routing for Netlify-like services
- `public/.htaccess`: Apache server configuration
- `public/web.config`: IIS server configuration

These files will be automatically copied to the `dist` folder during build and should be uploaded to the server.

## Troubleshooting

If you encounter any issues with page routing:

1. Ensure all configuration files are properly uploaded to the server
2. Verify that your hosting service has the appropriate settings to support SPA routing
3. Check the server logs for any errors

For further assistance, refer to the `hostinger-deploy-config.txt` file or contact your hosting provider.
