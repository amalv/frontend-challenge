import React from "react";
import PropTypes from "prop-types";
import { ChatMessage } from "./ChatMessage";

/**
 * MessagesFilter: Checks if data is valid message type
 *
 * @param {Object} data Includes the type property
 * @return True if valid data type or false otherwise
 */
function messagesFilter(data) {
  /** Support for basic message types */
  return ["text", "dialog"].includes(data.type);
}

/**
 * ChatMessages: Component for displaying messages in chat
 *
 * @param {Object} messages Messages to be displayed
 * @return {React.ReactElement} React component
 */
export const ChatMessages = ({ messages }) => (
  <div id="landbot-messages-container" className="landbot-messages-container">
    {Object.values(messages)
      .filter(messagesFilter)
      .sort((a, b) => a.timestamp - b.timestamp)
      .map((message) => (
        <ChatMessage key={message.key} message={message} />
      ))}
  </div>
);

ChatMessages.propTypes = {
  messages: PropTypes.object,
};
