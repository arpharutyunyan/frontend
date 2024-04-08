import React, { useCallback, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendMessageRequest } from "../store/actions/messages";

function ChatForm(props) {
  const { friendId } = useParams();
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const onSubmit = useCallback((ev) => {
    ev.preventDefault();
    dispatch(sendMessageRequest({
      friendId,
      text
    }))
      setText('');
  }, [friendId, text]);
  return (
    <form onSubmit={onSubmit} className="write">
      <label className="file-picker">
        <input type="file"/>
        <i className="write-link attach"></i>
      </label>
      <textarea value={text} onChange={ev => setText(ev.target.value)}/>
      <a href="#" className="write-link smiley"></a>
      <button disabled={!text} className="send-message">
        <i className="write-link send"/>
      </button>
    </form>
  );
}

export default ChatForm;
