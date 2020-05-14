import React, { useState, useEffect } from "react";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";

var core = new window.Landbot.Core({
  firebase: window.firebase,
  brandID: 12235,
  channelToken: "H-441480-B0Q96FP58V53BJ2J",
  welcomeUrl: "https://welcome.landbot.io/",
  welcome: [
    {
      samurai: -1,
      type: "text",
      message: "Type something to start a conversation with landbot.",
    },
  ],
});

export default function Chat() {
  const [messages, setMessages] = useState({});
  const [input, setInput] = useState("");

  const submit = () => {
    if (input !== "") {
      core.sendMessage({ message: input });
      setInput("");
    }
  };

  useEffect(() => {
    core.pipelines.$readableSequence.subscribe((data) => {
      setMessages((messages) => ({
        ...messages,
        [data.key]: parseMessage(data),
      }));
    });

    core.init().then((data) => {
      setMessages(parseMessages(data.messages));
    });
  }, []);

  useEffect(() => {
    const container = document.getElementById("landbot-messages-container");
    scrollBottom(container);
  }, [messages]);

  return (
    <>
      <ChatHeader />
      <ChatMessages messages={messages} setMessages={setMessages} />
      <ChatInput input={input} setInput={setInput} submit={submit} />
    </>
  );
}

function scrollBottom(container) {
  if (container) {
    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }
}

function parseMessages(messages) {
  return Object.values(messages).reduce((obj, next) => {
    obj[next.key] = parseMessage(next);
    return obj;
  }, {});
}

function parseMessage(data) {
  return {
    key: data.key,
    text: data.title || data.message,
    author: data.samurai !== undefined ? "bot" : "user",
    timestamp: data.timestamp,
    type: data.type,
  };
}
