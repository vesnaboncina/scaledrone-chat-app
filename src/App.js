import React, { useState, useEffect, useRef} from 'react';
import './App.css';
import Messages from "./components/Messages";
import Input from "./components/Input";
import randomName from "./helpers/RandomUser";
import randomColor from "./helpers/RandomColor";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({
    username: randomName(),
    color: randomColor(),
  });

  const droneRef = useRef(
    new window.Scaledrone("xyhkd5CsPg6czhYE", {
      data: user,
    })
  );

  useEffect(() => {
    const drone = droneRef.current;

    drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      setUser((prevUser) => ({ ...prevUser, id: drone.clientId }));
    });

    const room = drone.subscribe("observable-room");
    room.on("data", (data, user) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Math.random(), user, text: data },
      ]);
    });
  }, []);

  const sendMessage = (message) => {
    droneRef.current.publish({
      room: "observable-room",
      message,
    });
  };

  
  return (
    <div className="App">
      <div className="App-Header">
        <h1>React Chat App Algebra</h1>
      </div>
      <Messages messages={messages} currentUser={user} />
      <Input sendMessage={sendMessage} />
    </div>
  );
};

export default App;