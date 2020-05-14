import React from "react";
import PropTypes from "prop-types";

/**
 * ChatMessage: Component that displays a user message in the chat
 *
 * @param {object} message User or bot message
 * @returns {React.ReactElement} React component
 */
export const ChatMessage = ({ message }) => (
  <article
    key={message.key}
    data-author={message.author}
    className="media landbot-message"
  >
    <figure className="media-left landbot-message-avatar">
      <p className="image is-64x64">
        <img className="is-rounded" src="http://i.pravatar.cc/100" alt="" />
      </p>
    </figure>
    <div className="media-content landbot-message-content">
      <div className="content">
        <p>{message.text}</p>
      </div>
    </div>
  </article>
);

ChatMessage.propTypes = {
  message: PropTypes.object,
};
