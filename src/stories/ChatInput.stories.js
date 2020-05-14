import React from "react";
import { ChatInput } from "../components/Chat/ChatInput";
import { ChatMessages } from "../components/Chat/ChatMessages";

export default {
  title: "ChatInput",
  component: ChatInput,
  decorators: [
    (storyFn) => (
      <section id="landbot-app" className="hero is-fullheight is-dark">
        <div className="hero-body">
          <div className="chat-container">
            <div className="landbot-chat">
              <ChatMessages messages />
              {storyFn()}
            </div>
          </div>
        </div>
      </section>
    ),
  ],
};

export const Default = () => <ChatInput />;
