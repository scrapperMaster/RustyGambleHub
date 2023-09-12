import React, { useState, useEffect } from "react";

const Chat = () => {
  const [isChatVisible, setIsChatVisible] = useState(true);
  const [isButtonClose, setIsButtonClose] = useState(true);

  const handleCloseChat = () => {
    setIsChatVisible(!isChatVisible);
    setIsButtonClose(!isButtonClose);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1115) {
        setIsChatVisible(false);
        setIsButtonClose(false);
      } else {
        setIsChatVisible(true);
        setIsButtonClose(true);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call the handleResize function initially
    handleResize();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`void-div ${isChatVisible ? "" : "void-div-hidden"}`}
      ></div>
      <div className={`chat-container ${isChatVisible ? "" : "chat-hidden"}`}>
        <div className="chat-title">CHAT</div>
        <div className={`chat-close-bt ${isButtonClose ? "" : "chat-open-bt"}`}>
          <button className="chat-bt" onClick={handleCloseChat}>
            <img className="chat-bt-img" src="/chat-bt.png" alt="Close Chat" />
          </button>
        </div>
        <div className="messages-container">
          <div className="message">
            <div className="avatar">
              <img className="avatar-img" src="/avatar.png" alt="User Avatar" />
            </div>
            <div className="message-content">
              <span className="username">User:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, nostrum. Commodi quisquam fugiat unde tempora debitis
              vero ab minus! Deleniti, expedita quos tenetur officiis incidunt
              perferendis assumenda eligendi eius praesentium!
            </div>
            <div className="status-icons"></div>
          </div>
          <div className="message">
            <div className="avatar">
              <img className="avatar-img" src="/avatar.png" alt="User Avatar" />
            </div>
            <div className="message-content">
              <span className="username">User:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, nostrum. Commodi quisquam fugiat unde tempora debitis
              vero ab minus! Deleniti, expedita quos tenetur officiis incidunt
              perferendis assumenda eligendi eius praesentium!
            </div>
            <div className="status-icons">
              <img src="/streamer-icon.png" alt="Streamer Account" />
            </div>
          </div>
          <div className="message">
            <div className="avatar">
              <img className="avatar-img" src="/avatar.png" alt="User Avatar" />
            </div>
            <div className="message-content">
              <span className="username">User:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, nostrum. Commodi quisquam fugiat unde tempora debitis
              vero ab minus! Deleniti, expedita quos tenetur officiis incidunt
              perferendis assumenda eligendi eius praesentium!
            </div>
            <div className="status-icons">
              <img src="/streamer-icon.png" alt="Streamer Account" />
            </div>
          </div>
          <div className="message">
            <div className="avatar">
              <img className="avatar-img" src="/avatar.png" alt="User Avatar" />
            </div>
            <div className="message-content">
              <span className="username">Papich:</span>
              14.1 is good...
            </div>
            <div className="status-icons">
              <img src="/streamer-icon.png" alt="Streamer Account" />
            </div>
          </div>
          <div className="message">
            <div className="avatar">
              <img className="avatar-img" src="/avatar.png" alt="User Avatar" />
            </div>
            <div className="message-content">
              <span className="username">GooSha:</span>
              Kono dio da
            </div>
            <div className="status-icons">
              <img src="/streamer-icon.png" alt="Streamer Account" />
            </div>
          </div>
        </div>
        <div className="user-input">
          <input
            type="text"
            id="user-message"
            placeholder="Введите сообщение"
          />
          <button id="send-button">Send</button>
        </div>
      </div>
    </>
  );
};

export default Chat;
