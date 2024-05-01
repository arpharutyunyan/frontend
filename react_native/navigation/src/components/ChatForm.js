import React, { useCallback, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendMessageRequest } from "../store/actions/messages";
import MessageFiles from "./messageFiles";

function ChatForm(props) {
  const { friendId } = useParams();
  const [text, setText] = useState('');
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  const onSubmit = useCallback((ev) => {
    ev.preventDefault();
    dispatch(sendMessageRequest({
      friendId,
      text,
      passport: [files[0]],
      idCard: files[1],
    }))
    setText('');
    setFiles([]);
  }, [friendId, text, files]);

  const onFileSelect = useCallback((ev) => {
    const newFiles = [...ev.target.files].map((file) => {
      // const fileReader = new FileReader();
      // fileReader.onload = (ev) => {
      //   file.path = ev.target.result;
      //   setFiles(f => {
      //     return [...f, file]
      //   })
      // }
      // fileReader.readAsDataURL(file);
      file.path = URL.createObjectURL(file)
      // console.log(file.path );
      // URL.revokeObjectURL(file.path);
      return file
    })
    setFiles([...files, ...newFiles]);
    ev.target.value = '';
  }, [files]);
  return (
    <div>
      <MessageFiles files={files}/>
      <form onSubmit={onSubmit} className="write">
        <label className="file-picker">
          <input type="file" multiple onChange={onFileSelect}/>
          <i className="write-link attach"></i>
        </label>
        {files.length}
        <textarea value={text} onChange={ev => setText(ev.target.value)}/>
        <a href="#" className="write-link smiley"></a>
        <button disabled={!text} className="send-message">
          <i className="write-link send"/>
        </button>
      </form>
    </div>
  );
}

export default ChatForm;
