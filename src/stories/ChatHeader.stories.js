import React from "react";
import { ChatHeader } from "../components/Chat/ChatHeader";

export default {
  title: "ChatHeader",
  component: ChatHeader,
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

export const Default = () => <ChatHeader />;
