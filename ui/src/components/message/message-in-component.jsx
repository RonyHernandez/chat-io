import React from "react";

function MessageIn({messageContent}) {
  return (
    <div className="col-4 in-box">
      <div className="in-msg">
        {messageContent.message}
      </div>
      <img
        className="img-msg"
        src="http://via.placeholder.com/300x180"
        alt="Card cap"
      />
    </div>
  );
}

export default MessageIn;
