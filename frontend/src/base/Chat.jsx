import React from "react";


const Chat = () => {
    return(
    <div className="chat-container">
        <div className="chat-title">
            CHAT
        </div>
        <div className="messages-container">
            <div className="message">
                <div className="avatar"> 
                    <img className="avatar-img" src="/avatar.png" alt="User Avatar"/>
                </div>
                <div className="message-content">
                    <span className="username">User:</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nostrum. Commodi quisquam fugiat unde tempora debitis vero ab minus! Deleniti, expedita quos tenetur officiis incidunt perferendis assumenda eligendi eius praesentium!
                </div>
                <div className="status-icons">
                    <img src="/streamer-icon.png" alt="Streamer Account"/>
                </div>
            </div>
            <div className="message">
                <div className="avatar"> 
                    <img className="avatar-img" src="/avatar.png" alt="User Avatar"/>
                </div>
                <div className="message-content">
                    <span className="username">User:</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nostrum. Commodi quisquam fugiat unde tempora debitis vero ab minus! Deleniti, expedita quos tenetur officiis incidunt perferendis assumenda eligendi eius praesentium!
                </div>
                <div className="status-icons">
                    <img src="/streamer-icon.png" alt="Streamer Account"/>
                </div>
            </div>
            <div className="message">
                <div className="avatar"> 
                    <img className="avatar-img" src="/avatar.png" alt="User Avatar"/>
                </div>
                <div className="message-content">
                    <span className="username">User:</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nostrum. Commodi quisquam fugiat unde tempora debitis vero ab minus! Deleniti, expedita quos tenetur officiis incidunt perferendis assumenda eligendi eius praesentium!
                </div>
                <div className="status-icons">
                    <img src="/streamer-icon.png" alt="Streamer Account"/>
                </div>
            </div>
            <div className="message">
                <div className="avatar"> 
                    <img className="avatar-img" src="/avatar.png" alt="User Avatar"/>
                </div>
                <div className="message-content">
                    <span className="username">User:</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nostrum. Commodi quisquam fugiat unde tempora debitis vero ab minus! Deleniti, expedita quos tenetur officiis incidunt perferendis assumenda eligendi eius praesentium!
                </div>
                <div className="status-icons">
                    <img src="/streamer-icon.png" alt="Streamer Account"/>
                </div>
            </div>
            <div className="message">
                <div className="avatar"> 
                    <img className="avatar-img" src="/avatar.png" alt="User Avatar"/>
                </div>
                <div className="message-content">
                    <span className="username">User:</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nostrum. Commodi quisquam fugiat unde tempora debitis vero ab minus! Deleniti, expedita quos tenetur officiis incidunt perferendis assumenda eligendi eius praesentium!
                </div>
                <div className="status-icons">
                    <img src="/streamer-icon.png" alt="Streamer Account"/>
                </div>
            </div>
            <div className="message">
                <div className="avatar"> 
                    <img className="avatar-img" src="/avatar.png" alt="User Avatar"/>
                </div>
                <div className="message-content">
                    <span className="username">User:</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nostrum. Commodi quisquam fugiat unde tempora debitis vero ab minus! Deleniti, expedita quos tenetur officiis incidunt perferendis assumenda eligendi eius praesentium!
                </div>
                <div className="status-icons">
                    <img src="/streamer-icon.png" alt="Streamer Account"/>
                </div>
            </div>
            <div className="message">
                <div className="avatar"> 
                    <img className="avatar-img" src="/avatar.png" alt="User Avatar"/>
                </div>
                <div className="message-content">
                    <span className="username">User:</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, nostrum. Commodi quisquam fugiat unde tempora debitis vero ab minus! Deleniti, expedita quos tenetur officiis incidunt perferendis assumenda eligendi eius praesentium!
                </div>
                <div className="status-icons">
                    <img src="/streamer-icon.png" alt="Streamer Account"/>
                </div>
            </div>
        </div>
        <div className="user-input">
            <input type="text" id="user-message" placeholder="Type your message..." />
            <button id="send-button">Send</button>
        </div>
    </div>
    );
}

export default Chat;