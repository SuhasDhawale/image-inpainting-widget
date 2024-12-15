# Image Inpainting Widget

This project is an **Image Inpainting Widget** built using React and TypeScript. It allows users to draw masks over an image and export the mask for further use. The application integrates a simple canvas drawing tool and provides functionality to customize brush size, clear the canvas and generate masks.

---

## Table of Contents
- [Image Inpainting Widget](#image-inpainting-widget)
  - [Table of Contents](#table-of-contents)
  - [How to Run the Project Locally](#how-to-run-the-project-locally)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Libraries Used](#libraries-used)
  - [Challenges Faced and Solutions](#challenges-faced-and-solutions)
    - [1. **Canvas Integration Issues**](#1-canvas-integration-issues)
    - [2. **Prop Type Mismatches**](#2-prop-type-mismatches)
    - [3. **Performance Optimization**](#3-performance-optimization)
  - [Features](#features)
  - [Conclusion](#conclusion)

---

## How to Run the Project Locally

To run the project locally, follow these steps:

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **Git**

### Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/image-inpainting-widget.git
   cd image-inpainting-widget
   ```

2. **Install Dependencies:**
   Run the following command to install all the required libraries:
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   Start the project locally by running:
   ```bash
   npm run dev
   ```
   This will start a local development server at [http://localhost:5173](http://localhost:5173).

4. **Open the App:**
   Open your browser and navigate to the above link to view and interact with the Image Inpainting Widget.

---

## Libraries Used

The following libraries and tools were used in building this project:

- **React**: Core library for building the user interface.
- **TypeScript**: Adds static type-checking to the project for better development experience.
- **react-canvas-draw**: A lightweight library for drawing on a canvas with React.
- **Vite**: Fast build tool and development server.
- **ESLint**: For code quality and linting.
- **Prettier**: For code formatting.

---

## Challenges Faced and Solutions

### 1. **Canvas Integration Issues**
   - **Problem:** Initially, integrating the `fabric.js` library caused compatibility and type errors in TypeScript.
   - **Solution:** We replaced `fabric.js` with `react-canvas-draw`, a library more aligned with React components. This simplified the implementation and provided built-in drawing features.

### 2. **Prop Type Mismatches**
   - **Problem:** Type mismatches occurred when passing props between components, leading to TypeScript errors.
   - **Solution:** By properly defining `PropTypes` and TypeScript interfaces, we ensured consistent data flow across components.

### 3. **Performance Optimization**
   - **Problem:** The canvas rendering lagged when the brush size increased or when exporting large masks.
   - **Solution:** Optimized the rendering logic and limited brush size to a practical range to maintain performance.

---

## Features
- **Interactive Canvas:** Users can draw masks over images using adjustable brush sizes.
- **Mask Generation:** Export the mask as a PNG image.
- **Brush Control:** Adjust the brush size dynamically.
- **Clear Canvas:** Reset the canvas to its original state.

---

## Conclusion
This Image Inpainting Widget provides an intuitive tool for users to create and export image masks. The project demonstrates React, TypeScript, and library integration while tackling canvas rendering challenges effectively.

For any issues or contributions, feel free to open a pull request or issue in the repository.

---

**Author:** Your Name  
**Repository:** [[GitHub Repository Link](https://github.com/SuhasDhawale/image-inpainting-widget)](#)

