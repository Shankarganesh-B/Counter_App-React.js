It looks like you're working to create a polished `README.md` file for your React Counter App! I noticed a small issue in your snippet, where some parts could use a little formatting fix. Here’s a cleaned-up and fully formatted version of the `README.md`:

```markdown
# React Counter App

A simple ReactJavaScript-based counter app that allows users to increment, decrement, and set a custom value for a counter. The app maintains a history of all actions performed, providing a clear, scrollable view of past counter states.

This app also implements **Glassmorphism** for the UI design to give it a modern, sleek look.

## Live Website Link
- **Vercel**: [https://counter-app-reactjs-pi.vercel.app/](https://counter-app-reactjs-pi.vercel.app/)

## Features

- **Increment**: Increase the counter value by 1.
- **Decrement**: Decrease the counter value by 1.
- **Set**: Set a custom counter value.
- **Reset**: Reset the counter to 0 and clear the history.
- **History**: Displays a log of all counter changes with scrollable functionality when content overflows.
- **Responsive UI**: The app adapts to different screen sizes for an optimal viewing experience.
- **Glassmorphism Effect**: The UI uses a glass-like effect for a modern and aesthetically pleasing design.

## Tech Stack

- **ReactJavaScript**: JavaScript library for building the user interface.
- **CSS**: Custom styles to create a modern design with Glassmorphism effects.
- **Google Fonts**: Used Space Mono for a pixelated, retro aesthetic.

## Demo

You can see a live demo of the app in action by following these steps to run it locally (details below).

## Getting Started

To get the app up and running locally, follow these steps:

### Prerequisites

Make sure you have Node.js and npm installed. You can check this by running the following commands:

```bash
node -v
npm -v
```

If you don't have them installed, please install them from the official Node.js website.

### Installing

Clone the repository to your local machine:

```bash
git clone https://github.com/Shankarganesh-B/Counter_App-React.js.git
```

Navigate into the project directory:

```bash
cd react-counter-app
```

Install the required dependencies:

```bash
npm install
```

### Running the App

Once the dependencies are installed, you can start the app by running:

```bash
npm start
```

This will start a development server, and you should be able to open the app in your browser by navigating to:

```bash
http://localhost:3000
```

## File Structure

Here's a quick overview of the file structure for this project:

```plaintext
react-counter-app/
├── public/
│   └── index.html             # Main HTML file  
├── src/
│   ├── App.js                 # Main ReactJavaScript component
│   ├── index.css              # Global styles
│   ├── index.js               # Entry point for ReactJavaScript
│   └── assets/
│       └── images/            # Folder containing images (used in the background)
├── package.json               # Project metadata and dependencies
└── README.md                  # This file
```

## Design Notes

The app uses **Glassmorphism**, a modern design trend that involves creating UI elements that appear to be made of frosted glass. The effects are created using the `backdrop-filter` property, and additional styles like rounded corners, box shadows, and blurred backgrounds enhance the glass-like look.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.

## Acknowledgements

- Inspired by the **Glassmorphism** UI design trend.
- Thanks to the **ReactJavaScript** community for making frontend development easier.
