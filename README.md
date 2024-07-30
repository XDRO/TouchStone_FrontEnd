## TouchStone AI

## Table of Contents

- [Description](#description)
- [Link to server](#link-to-server)
- [Description & Features](#description--features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contexts and State Management](#contexts-and-state-management)
- [Protected Routes](#protected-routes)
- [Plans for Improvement](#plans-for-improvement)
- [Getting Started with Create React App](#getting-started-with-create-react-app)
- [Available Scripts](#available-scripts)

## link to server

[Touchstone AI server](https://touchstone.ai.zanity.net/)

## Description & Features

TouchStone FrontEnd is a sophisticated web application that interacts with OpenAI's API. It features a user-friendly interface with state management, context-based components, and conditional rendering to provide a seamless user experience. The application includes forms for user login, registration, and sign-up, and it employs protected routes for secure frontend authentication.

- **State Management**: Utilizes React's useState and useContext for efficient state management.
- Contexts: Manages user and session data using React Context API.
- **Conditional Rendering**: Renders components based on user authentication state and other conditions.
- **API Calls**: Interacts with backend services using RESTful API calls.
- **Forms**: Includes forms for user login, registration, and profile updates, with validation.
- **Protected Routes**: Secures specific routes to ensure only authenticated users have access.
- **Styling**: Custom CSS and connected fonts for a cohesive design.

## Technologies Used

React
React Router
Context API
CSS for styling
Font integration

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/XDRO/TouchStone_FrontEnd.git
   cd TouchStone_FrontEnd
   npm init
   npm install
   ```
   **Running FrontEnd**
   npm start

## Usage

User Authentication: Use the forms to register or log in.
Chat: After logging in, access the chat interface to interact with the AI.

## Contexts and State Management

The application leverages React's Context API to manage user sessions and other global states. This approach ensures that components across the application can access and update shared data efficiently.

## Protected Routes

To secure sensitive routes, the application uses protected routes that require user authentication. This ensures that only authorized users can access certain features.

## Plans for Improvement

- **Speech-to-Text Integration**: Implementing speech-to-text controllers and functions to expand user interaction capabilities.
- **Code Block Generation**: Enhancing user experience by generating code blocks upon request for programming-related queries
- **Update README.md**: Pictures, GIFs, or screenshots that detail the project features, A demo video of the project

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
