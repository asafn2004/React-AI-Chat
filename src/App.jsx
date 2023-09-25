import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-tKDnQy32PnuqFWJJrbJwT1Nn",
  apiKey: process.env.OPENAI_API_KEY, // Read API key from environment variable
});

const openai = new OpenAIApi(configuration);

function App() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (e, message) => {
    e.preventDefault();

    setIsTyping(true);

    let msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);

    scrollTo(0, 1e10);
    setMessage("");

    await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are EbereGPT. you help with Email writing.",
          },
          ...chats,
        ],
      })
      .then((result) => {
        console.log(result);
        msgs.push(result.data.choices[0].message);
        setChats(msgs);
        setIsTyping(false);
        scrollTo(0, 1e10);
      })
      .catch((error) => console.log(error));
  };

  return (
    <main>
      <h1>React ChatGPT App</h1>

      <section>
        {chats && chats.length
          ? chats.map((chat, index) => (
              <p key={index} className={chat.role === "user" ? "user_msg" : ""}>
                <span>{chat.role}</span>
                <span>:</span>
                <span>{chat.content}</span>
              </p>
            ))
          : ""}
      </section>

      <div className={isTyping ? "" : "hide"}>
        <p>
          <i>Typing...</i>
        </p>
      </div>

      <form onSubmit={(e) => chat(e, message)}>
        <input
          type="text"
          name="message"
          value={message}
          placeholder="Type a message & hit enter"
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </main>
  );
}

export default App;
