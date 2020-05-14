import React from "react";
import PropTypes from "prop-types";

/**
 *  ChatInput: Component for handling user input in chat
 *
 * @param {string} input User input
 * @param {function} setInput Sets the input value
 * @returns {React.ReactElement} React component
 */
export const ChatInput = ({ input, setInput, submit }) => (
  <div className="landbot-input-container">
    <div className="field">
      <div className="control">
        <input
          className="landbot-input"
          type="text"
          placeholder="Type here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              submit();
            }
          }}
        />
        <button
          className="button landbot-input-send"
          onClick={submit}
          disabled={input === ""}
        >
          <span className="icon is-large">
            <svg
              className="svg-inline--fa fa-paper-plane fa-w-16 fa-lg"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="paper-plane"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
);

ChatInput.propTypes = {
  input: PropTypes.string,
  setInput: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};
