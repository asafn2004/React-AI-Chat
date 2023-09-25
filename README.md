# React ChatGPT App

The React ChatGPT App is a simple chatbot application that interacts with the GPT-3.5 Turbo model from OpenAI to provide responses to user messages. 
Users can type messages, and the chatbot will respond with relevant information.

## Technologies Used

- **React:** The app is built using the React library for building user interfaces.

- **OpenAI API:** It utilizes the OpenAI API to generate responses based on user input.

## Features

- **Real-time Chat:** Users can have real-time conversations with the chatbot by typing messages and receiving responses.

- **Typing Indicator:** When the chatbot is processing a message, a "Typing..." indicator is displayed.

- **Message History:** The chat history is displayed, showing user messages on the left and chatbot responses on the right.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.

2. Install dependencies by running `npm install` or `yarn install` in the project directory.

3. Set up your OpenAI API key by replacing `"process.env.OPENAI_API_KEY"` with your own API key in the `apiKey` field of the `configuration` object in the `App.js` file.

4. Start the development server by running `npm start` or `yarn start`.

5. Open your web browser and navigate to `http://localhost:3000` to interact with the chatbot.

## Usage

- Type a message in the input field at the bottom of the chat interface.

- Press Enter to send your message to the chatbot.

- The chatbot will respond with relevant information based on your input.

- You can have a back-and-forth conversation with the chatbot by typing multiple messages.

## Customization

You can customize the behavior of the chatbot by modifying the logic in the `chat` function in the `App.js` file. 
You can also customize the chat interface and styling as needed for your project.

