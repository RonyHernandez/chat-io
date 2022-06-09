import React from "react";

function MessageOut({messageContent}) {
  return (
    <div className="col-md-4 offset-md-8 out-box">
      <div className="out-msg">
        {messageContent.message}
      </div>
      <img
        className="out-img-msg"
        src="http://via.placeholder.com/300x180"
        alt="Card cap"
      />
    </div>
  );
}

export default MessageOut;
