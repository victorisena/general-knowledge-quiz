# General Knowledge Quiz

The project name is "General Knowledge Quiz". The goal of this project is to develop an application using Next.js that allows users to test their knowledge in various subjects through a quiz.

## Overview

The "General Knowledge Quiz" is a personal project aimed at creating an interactive application that provides users with a set of general knowledge questions. The application aims to entertain, educate, and challenge users by covering a wide range of topics.

## Features

- Multiple-choice questions: Users will be presented with a series of multiple-choice questions covering various subjects.
- Scoring system: The application will keep track of the user's score based on the number of correct answers.
- Feedback: After answering each question, the user will receive immediate feedback indicating whether their answer was correct or not.

## Architecture

The "General Knowledge Quiz" application follows the Model-View-Controller (MVC) architectural pattern to ensure a clear separation of concerns and facilitate code maintainability. The application's architecture consists of the following components:

- Model: The model component represents the data and business logic of the application. It encapsulates the quiz questions, user authentication, and score tracking functionalities. In this project, the model uses a local file to store and manage the quiz questions, eliminating the need for a database.
- View: The view component focuses on the presentation layer of the application. It provides a user-friendly interface for interacting with the quiz and displaying the questions. In this architecture, the view is responsible for rendering the quiz UI and receiving user input.
- Controller: The controller acts as an intermediary between the model and the view components. It handles user interactions, processes input from the view, and updates the model accordingly. The controller also ensures synchronization between the model and the view, keeping the application state consistent.

## Getting Started

To run the "General Knowledge Quiz" application locally, please follow these steps:

1. Clone the repository: `git clone https://github.com/victorisena/general-knowledge-quiz.git`
2. Install Node.js: Download and install Node.js from the official website.
3. Install project dependencies: Open a terminal, navigate to the project directory, and run `npm install` to install the required dependencies.
4. Start the development server: Run `npm run dev` in the terminal to start the Next.js development server.
5. Access the application: Open your web browser and visit `http://localhost:3000` to access the "General Knowledge Quiz" application.

## Contact

If you have any questions, suggestions, or feedback regarding the "General Knowledge Quiz" project, please feel free to connect with me:

- Email: victorigorsena@gmail.com
- LinkedIn: [linkedin.com/in/victor-igor-sena](https://www.linkedin.com/in/victor-igor-sena/)
- Twitter: [@victorisena](https://twitter.com/victorisena)
