import React from 'react'

function ConversationCard({lastMessage}) {
  return (
    <div className="card">
    <div className="card-horizontal">
      <div className="img-square-wrapper">
        <img
          className="img-profile"
          src="http://via.placeholder.com/300x180"
          alt="Card cap"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title"> Conversation </h3>
        <p className="card-text">
          {lastMessage}
        </p>
      </div>
    </div>
  </div>
  )
}

export default ConversationCard