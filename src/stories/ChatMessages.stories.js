import React from "react";
import { ChatMessages } from "../components/Chat/ChatMessages";

export default {
  title: "ChatMessages",
  component: ChatMessages,
  decorators: [
    (storyFn) => (
      <section id="landbot-app" className="hero is-fullheight is-dark">
        <div className="hero-body">
          <div className="chat-container">
            <div className="landbot-chat">{storyFn()}</div>
          </div>
        </div>
      </section>
    ),
  ],
};

const messages = {
  "-M7FVdBdO9cbya1-cfp2": {
    author: "user",
    key: "-M7FVdBdO9cbya1-cfp2",
    text: "test",
    timestamp: 1589414892215.606,
    type: "text",
  },
  "-M7FVdDnR8mdwM22OgU7": {
    author: "bot",
    key: "-M7FVdDnR8mdwM22OgU7",
    text: "Hi! Nice to meet you.",
    timestamp: 1589414893358.219,
    type: "text",
  },
  "-M7FVdEGhFJWmndfjNRQ": {
    author: "bot",
    key: "-M7FVdEGhFJWmndfjNRQ",
    text: "Are you playing with Landbot?",
    timestamp: 1589414893386.051,
    type: "text",
  },
  "-M7HQwzxnypbL3HVupQV": {
    author: "user",
    key: "-M7HQwzxnypbL3HVupQV",
    text: "yes",
    timestamp: 1589414893386.051,
    type: "text",
  },
  "-M7HQx-Cit7xld6vL1n5": {
    author: "bot",
    key: "-M7HQx-Cit7xld6vL1n5",
    text: "Ok. Good luck!",
    timestamp: 1589447218025.257,
    type: "text",
  },
};

export const Default = () => <ChatMessages messages={messages} />;
