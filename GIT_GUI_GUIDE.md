# 🚀 Upload Your Resume to GitHub Using Git GUI

## 📋 Prerequisites
- Git GUI installed on your laptop
- GitHub account
- Your resume project files ready

## 🎯 Step-by-Step Using Git GUI

### 1. Open Git GUI
- Launch Git GUI from your Start Menu or Desktop
- Click "Open Existing Repository" or "Create New Repository"

### 2. Create New Repository (if needed)
- Click "Create New Repository"
- Choose a directory (select your resume project folder)
- Click "Create"

### 3. Open Your Project
- If you already have a repository, click "Open Existing Repository"
- Navigate to your resume project folder and select it

### 4. Stage Your Files
- In the left panel, you'll see "Unstaged Changes"
- Click the "+" button next to each file to stage them
- Or click "Stage All" to add all files at once

### 5. Make Your First Commit
- In the bottom panel, type a commit message:
  ```
  Initial commit: Add resume website
  ```
- Click "Commit" button

### 6. Add Remote Repository
- Go to "Remote" → "Add"
- Enter:
  - **Name**: `origin`
  - **Location**: `https://github.com/YOUR_USERNAME/resume.git`
- Click "Add"

### 7. Push to GitHub
- Go to "Remote" → "Push"
- Select "origin" and "master" or "main" branch
- Click "Push"

## 🌐 Alternative: GitHub Desktop

If you prefer GitHub Desktop (easier for beginners):

### 1. Download GitHub Desktop
- Go to [desktop.github.com](https://desktop.github.com)
- Download and install

### 2. Clone Repository
- Sign in with your GitHub account
- Click "Clone a repository from the Internet"
- Select your resume repository

### 3. Add Files
- Copy your project files to the cloned folder
- GitHub Desktop will show all changes

### 4. Commit and Push
- Add a commit message
- Click "Commit to main"
- Click "Push origin"

## 🔧 If You Get Errors

### Authentication Issues
- Use GitHub Personal Access Token instead of password
- Go to GitHub → Settings → Developer settings → Personal access tokens
- Generate new token with "repo" permissions

### Repository Not Found
- Make sure you created the repository on GitHub first
- Check the repository URL is correct
- Ensure the repository is public (required for free hosting)

## 📱 After Upload

1. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll to "Pages" section
   - Select "GitHub Actions" as source

2. **Your resume will be live at**:
   ```
   https://YOUR_USERNAME.github.io/resume/
   ```

## 🎉 Success!

Your resume is now on GitHub and will automatically deploy to GitHub Pages!

---

**Need help?** Check the `DEPLOYMENT.md` file for detailed deployment instructions.
