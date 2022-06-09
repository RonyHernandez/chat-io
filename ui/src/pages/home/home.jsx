import React, {useEffect, useState} from "react";
import './home.css';
import ConversationCard from "../../components/conversation-card/conversation-card-component";
import MessageIn from "../../components/message/message-in-component";
import MessageOut from "../../components/message/message-out-component";
import {useCookies} from 'react-cookie'

function Home({socket}) {
  const [message, setMessage] = useState();
  const [conversation, setConversation] = useState('123456');
  const [messageList, setMessageList] = useState([]);
  const [lastMessage, setLastMessage] = useState(''); 
  const [cookies, setCookie] = useCookies(['authorId']);

  const sendMessage = async () => {

    if(message !== ""){
      const messageData = {
        conversationId: conversation,
        authorId: cookies.authorId,
        message: message,
        time: new Date(Date.now()).getHours() + ':' + new Date(Date.now()).getMinutes(),
      }

      setLastMessage(messageData.message);
      setMessageList((list) => [...list, messageData])
      await socket.emit("send_message", messageData );
      setMessage('');
    }
  }

  const enterConversation = () => {
    socket.emit("join_conv", conversation);
  }

  useEffect(()=> {
    socket.on("receive_message", (data) => {
      setLastMessage(data.message);
      setMessageList((list) => [...list, data])
    })  
  }, [socket]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 ">
          <div className="bg-info p-4">Conversations</div>
          <div className="conv-friends" onClick={enterConversation}>
            <ConversationCard lastMessage={lastMessage}/>
          </div>
        </div>
        <div className="col-8">
          <div className="bg-secondary p-4 conv-friend-name">Conversation</div>
          <div className="msg-center bg-light conv-box">
            { messageList.map((messageContent) => {
                if(cookies.authorId !== messageContent.authorId){
                  return (<MessageIn key={Math.random()} messageContent={messageContent}/>)
                } else {
                  return (<MessageOut key={Math.random()} messageContent={messageContent}/>) 
                }
              })
            }
          </div>
          <div className="msg-input">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="message..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={message}
                onChange={(e)=> setMessage(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-success" style={{fontSize: '1.5rem'}} type="button" onClick={sendMessage}>
                  &#9658;
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 bg-light"></div>
      </div>
    </div>
  );
}

export default Home;
