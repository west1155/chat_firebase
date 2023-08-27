import React from "react";
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
class ChatWidgetComponent extends React.Component {
    componentDidMount() {
        addResponseMessage("Welcome to the chat!");
    }

    handleNewUserMessage = (newMessage) => {
        // Handle user messages here
        console.log(`New message incoming! ${newMessage}`);
        // You can add logic to send and receive messages from a server
    };

    render() {
        return (
            <div className="chat-widget-container">
                <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                    title="Chat Widget"
                    subtitle="Ask me anything!"
                />
            </div>
            );
    }
}

export default ChatWidgetComponent;
