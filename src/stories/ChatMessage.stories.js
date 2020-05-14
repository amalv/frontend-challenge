import React from "react";
import { ChatMessage } from "../components/Chat/ChatMessage";

export default {
  title: "ChatMessage",
  component: ChatMessage,
  decorators: [
    (storyFn) => (
      <section id="landbot-app" className="hero is-fullheight is-dark">
        <div className="hero-body">
          <div className="chat-container">
            <div className="landbot-chat">
              <div
                id="landbot-messages-container"
                className="landbot-messages-container"
              >
                {storyFn()}
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
  ],
};

const userMessage = {
  author: "user",
  key: "-M7FVdBdO9cbya1-cfp2",
  text: "test",
  timestamp: 1589414892215.606,
  type: "text",
};

const botMessage = {
  author: "bot",
  key: "-M7FVdDnR8mdwM22OgU7",
  text: "Hi! Nice to meet you.",
  timestamp: 1589414893358.219,
  type: "text",
};

export const UserMessage = () => <ChatMessage message={userMessage} />;
export const BotMessage = () => <ChatMessage message={botMessage} />;
