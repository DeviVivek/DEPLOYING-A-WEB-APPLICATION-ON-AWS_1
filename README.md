# Internship Details

**Name:** CH DEVI VIVEK | **Company:** CODTECH IT SOLUTIONS | **ID:** CT4MECQ | **Domain:** Cloud Computing | **Duration:** 17 Dec 2024 to 17 Apr 2025 | **Mentor:** Neela Santhosh Kumar


# Deploying a Web Application on AWS Amplify

This project demonstrates how to deploy a web application using **AWS Amplify**, a powerful service for hosting and managing full-stack web applications. AWS Amplify simplifies deployment with features like continuous integration and automatic updates from Git repositories.

---

## Overview

AWS Amplify is a cloud-based platform that allows developers to build, deploy, and host web and mobile applications with ease. This guide focuses on deploying a web application (e.g., React.js, Angular, Vue.js, or plain HTML/CSS/JS) using Amplify's hosting service.

---

## Features of AWS Amplify
- **Continuous Deployment**: Automatic builds and deployments from Git repositories.
- **Custom Domains**: Easily integrate custom domains and manage DNS.
- **SSL Certificates**: Automatic HTTPS setup for secure connections.
- **Scalability**: Fully managed hosting to handle increasing traffic.

---

## Prerequisites

1. An AWS account ([Sign up here](https://aws.amazon.com/)).
2. A web application ready for deployment (e.g., React.js, Vue.js, or a static website).
3. A GitHub, GitLab, Bitbucket, or AWS CodeCommit repository containing the app's source code.

---

## Steps to Deploy on AWS Amplify

### 1. Set Up Your Web Application Repository
- Push your web application code to a Git repository (GitHub, GitLab, Bitbucket, or CodeCommit).

### 2. Access AWS Amplify
- Log in to the [AWS Management Console](https://aws.amazon.com/).
- Search for and navigate to **AWS Amplify**.

### 3. Create a New Amplify App
- Click **Get Started** in the Amplify Hosting section.
- Select your repository provider and connect your Git repository.
- Authenticate with your Git provider and choose the repository and branch to deploy.

### 4. Configure Build Settings
- Amplify will automatically detect the framework (e.g., React, Angular).
- Review and modify the build settings if necessary (`amplify.yml` will be created).

### 5. Deploy the App
- Click **Save and Deploy**.
- Amplify will:
  1. Clone your repository.
  2. Build the application.
  3. Deploy the app to a live URL.

### 6. Access Your Deployed App
- Once deployment is complete, you will get a live URL for your app (e.g., `https://your-app.amplifyapp.com`).

---

## Benefits of AWS Amplify
- **Ease of Use**: Intuitive UI and CLI tools for seamless deployment.
- **Full-Stack Features**: Backend integration for APIs, authentication, and storage.
- **Global Availability**: Applications are hosted on a globally distributed CDN for fast load times.

---

## Troubleshooting

### Common Issues
- **Build Fails**: Check the build logs in the Amplify console to identify errors in dependencies or scripts.
- **DNS Propagation**: Custom domain changes may take up to 48 hours to propagate.
- **Environment Variables**: Ensure all required variables are set in the Amplify app's settings.

---

## Project Goals
- Learn how to deploy a web application using AWS Amplify.
- Understand continuous integration and deployment with Git repositories.
- Configure a custom domain and secure the application with HTTPS.

---

## Resources
- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [Getting Started with Amplify Hosting](https://docs.amplify.aws/start/hosting/)
- [Amplify GitHub Integration Guide](https://docs.amplify.aws/cli/hosting/hosting-and-ci-cd/)
