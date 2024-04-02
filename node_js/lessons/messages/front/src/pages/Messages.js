import React from 'react';

function Messages(props) {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="left">
          <div className="top">
            <input type="text" placeholder="Search"/>
            <a href="#" className="search"></a>
          </div>
          <ul className="people">
            <li className="person" data-chat="person1">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg" alt=""/>
              <span className="name">Thomas Bangalter</span>
              <span className="time">2:09 PM</span>
              <span className="preview">I was wondering...</span>
            </li>
            <li className="person" data-chat="person2">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/dog.png" alt=""/>
              <span className="name">Dog Woofson</span>
              <span className="time">1:44 PM</span>
              <span className="preview">I've forgotten how it felt before</span>
            </li>
            <li className="person" data-chat="person3">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/louis-ck.jpeg" alt=""/>
              <span className="name">Louis CK</span>
              <span className="time">2:09 PM</span>
              <span className="preview">But we’re probably gonna need a new carpet.</span>
            </li>
            <li className="person" data-chat="person4">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/bo-jackson.jpg" alt=""/>
              <span className="name">Bo Jackson</span>
              <span className="time">2:09 PM</span>
              <span className="preview">It’s not that bad...</span>
            </li>
            <li className="person" data-chat="person4">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/bo-jackson.jpg" alt=""/>
              <span className="name">Bo Jackson</span>
              <span className="time">2:09 PM</span>
              <span className="preview">It’s not that bad...</span>
            </li>
            <li className="person" data-chat="person4">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/bo-jackson.jpg" alt=""/>
              <span className="name">Bo Jackson</span>
              <span className="time">2:09 PM</span>
              <span className="preview">It’s not that bad...</span>
            </li>
            <li className="person" data-chat="person4">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/bo-jackson.jpg" alt=""/>
              <span className="name">Bo Jackson</span>
              <span className="time">2:09 PM</span>
              <span className="preview">It’s not that bad...</span>
            </li>
            <li className="person" data-chat="person4">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/bo-jackson.jpg" alt=""/>
              <span className="name">Bo Jackson</span>
              <span className="time">2:09 PM</span>
              <span className="preview">It’s not that bad...</span>
            </li>
            <li className="person" data-chat="person4">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/bo-jackson.jpg" alt=""/>
              <span className="name">Bo Jackson</span>
              <span className="time">2:09 PM</span>
              <span className="preview">It’s not that bad...</span>
            </li>
            <li className="person" data-chat="person5">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/michael-jordan.jpg" alt=""/>
              <span className="name">Michael Jordan</span>
              <span className="time">2:09 PM</span>
              <span className="preview">Wasup for the third time like is
you blind bitch</span>
            </li>
            <li className="person" data-chat="person6">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/drake.jpg" alt=""/>
              <span className="name">Drake</span>
              <span className="time">2:09 PM</span>
              <span className="preview">howdoyoudoaspace</span>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="top"><span>To: <span className="name">Dog Woofson</span></span></div>
          <div className="chat" data-chat="person1">
            <div className="conversation-start">
              <span>Today, 6:48 AM</span>
            </div>
            <div className="bubble you">
              Hello,
            </div>
            <div className="bubble you">
              it's me.
            </div>
            <div className="bubble you">
              I was wondering...
            </div>
            <div className="bubble you">
              I was wondering...
            </div>
            <div className="bubble you">
              I was wondering...
            </div>
            <div className="bubble you">
              I was wondering...
            </div>
            <div className="bubble you">
              I was wondering...
            </div>
            <div className="bubble you">
              I was wondering...
            </div>
            <div className="bubble you">
              I was wondering...
            </div>
            <div className="bubble you">
              I was wondering...
            </div>
            <div className="bubble you">
              I was wondering...
            </div>
            <div className="bubble you">
              I was wondering...
            </div>
            <div className="bubble you">
              I was wondering...
            </div>
            <div className="bubble you">
              I was wondering...
            </div>
            <div className="bubble you">
              I was wondering...
            </div>
          </div>
          <div className="write">
            <label className="file-picker">
              <input type="file"/>
              <i className="write-link attach"></i>
            </label>
            <textarea type="text"/>
            <a href="#" className="write-link smiley"></a>
            <button className="send-message">
              <i className="write-link send"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
