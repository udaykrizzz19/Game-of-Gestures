# 🪨✂️📃 Rock Paper Scissors: Game of Gestures - A Modern React Game

A visually appealing and highly interactive take on the classic Rock, Paper, Scissors game! This project prioritizes a polished user experience, boasting a clean and modern UI, engaging animations, and a fully responsive design that adapts seamlessly across devices, from mobile phones to desktop computers.

**🚀 Play the live demo now: [View on vercel](https://game-of-gestures.vercel.app/) 🚀**

## ✨ Core Features

*   **Clean & Modern UI:** An intuitive and visually pleasing interface achieved through a carefully curated color palette (`#1B3C53`, `#456882`, `#D2C1B6`), a sophisticated font ("Nunito"), and a minimalist design philosophy.🎨
*   **Engaging Animations:** Dynamic and fluid animations are powered by Framer Motion, adding a layer of excitement to every move and enhancing user feedback. Includes animated choices, animated score and result modals. 💫
*   **Responsive Design:** Employs a mobile-first approach with `flexbox` and `rem` units, guaranteeing that the game looks and functions flawlessly on all screen sizes and respects device orientation.📱💻
*   **Animated Score Counter:** Numbers transition smoothly on updates, providing immediate and engaging feedback to the user. The animation is handled by a `AnimatedScore` component. 🔢
*   **Themed Hand Icons:** Visually distinct hand icons are used for each choice (Rock, Paper, Scissors) and are colored to match the "hand color" theme, enhancing aesthetics and gameplay clarity. 🖐️
*   **Theme Toggle:** Provides users with the ability to easily switch between light and dark themes for a personalized viewing experience, enhancing accessibility and user comfort.☀️🌑
*   **Robust Animation State Management:** Implemented with an explicit `gameState` (picking, animating, result) and the `mode="wait"` prop on `AnimatePresence` components, guaranteeing a bug-free transition from one animation phase to the next. ⚙️
*   **Play Again Button:** A clickable button to reset the round with simple prompt and instructions. 🔄
*   **High-Quality Vector Graphics:** Crisp and scalable hand icons are used from "react-icons" for high-resolution support on any device. 🏆

## 🚀 Technologies Used

*   **React:** A declarative JavaScript library for building dynamic user interfaces, providing a component-based architecture for maintainable code.
*   **Vite:** An extremely fast build tool and development server that leverages native ES modules for rapid development cycles and optimized production builds.
*   **Framer Motion:** A production-ready motion library for React, enabling smooth and expressive animations with minimal code.
*   **React Icons:** A library that allows you to use SVG icons from popular icon sets directly in your React components.

## 💻 Setup Locally

Follow these steps to get the project up and running on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPOSITORY_HTTPS_URL]
    cd [YOUR_REPOSITORY_NAME]
    ```
    Replace `[YOUR_REPOSITORY_HTTPS_URL]` with the actual HTTPS URL of your forked repository, and `[YOUR_REPOSITORY_NAME]` with the name of the directory where the repository will be cloned.

2.  **Install dependencies:**
    ```bash
    npm install
    ```
    This command will install all the necessary packages listed in the `package.json` file, including React, Framer Motion, and other dependencies.

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This will start the Vite development server, which will automatically rebuild the project whenever you make changes to the code.

    Open your browser and navigate to `http://localhost:5173/` (or the port specified by Vite in the terminal output) to play the game! The website will automatically update upon file changes.

## ⚙️ Technical Details

### Code Structure

*   **Components:** The application is built around a component-based architecture, with reusable components such as `Header`, `Scoreboard`, `Choices`, `Battlefield`, and `ResultModal`.
*   **State Management:** Core game state (user score, computer score, choices, game state, theme) is managed using React's `useState` hook.
*   **Animation Logic:** Framer Motion's `motion` components, `AnimatePresence`, `useAnimation`, and variants are used to orchestrate animations.
*   **Asynchronous Updates:** `setTimeout` is strategically used to orchestrate the flow of animations and ensure UI stability.

### Flex Animations 🤸

Framer Motion is used extensively to create engaging and non-distracting animations:

*   **Entry Animations:** Initial component visibility, sliding score board, and transitions.
*   **Hover Effects:** Choices have subtle scaling and movement effects on hover.
*   **Flying Choices Animation:** Animate the choices after clicking
*   **Dynamic Transitions:** Smooth transitions between game states (picking, animating, result).
*   **Animated Score Counter:** Motivate the user by tracking consecutive wins
*   **Computer AI Animations:** Smoother experience when the computer make a choice.

### Mobile Design 📱

The project is designed to be fully responsive, adapting to different screen sizes seamlessly. This is achieved through:

*   **CSS Flexbox:** Flexible layout for content alignment and distribution.
*   **Media Queries:** Adapt styles for various screen sizes to avoid any kind of overlap.
*   **Relative Units (rem):** Scalable font sizes and spacing.

## 🐛 Issues and Feature Requests

If you encounter any issues while running the game, or if you have any ideas for new features or improvements, please feel free to submit an issue on the GitHub repository.

## 🤝 Contributions

Contributions are always welcome! Whether it's bug fixes, new features, or design improvements, feel free to fork the repository and submit a pull request.


## 👨‍💻 Author

**udaykrizzz19**

Feel free to contact me with any questions or suggestions! 🎉
