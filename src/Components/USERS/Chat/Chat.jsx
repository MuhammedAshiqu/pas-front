import React, { useState, useEffect, useContext } from 'react'
import './Chat.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { DataContext } from '../../../Context/Context'
function Chat() {
  const { AdminTrue } = useContext(DataContext)
  const [adminTrue, setadminTrue] = AdminTrue
  const [message, setmessage] = useState([])
  const { id } = useParams()
  const [chat, setchat] = useState([])
  const [reply, setreply] = useState([])
  const [ab, setab] = useState([])
  const [re, setre] = useState([])

  const getAllChats = async () => {
    console.log(id);
    await axios.get(`ttps://productsandservices.herokuapp.com/chat/${id}`).then((response) => {
      console.log('response message', response);
      setchat(response.data.message);
    })
  }
  const getAllChats1 = async () => {
    console.log(id);
    await axios.get(`ttps://productsandservices.herokuapp.com/chat1/${id}`).then((response) => {
      console.log('reply', response);
      setreply(response.data.message);
    })
  }
  const msg = async () => {
    await setab(ab => [...chat, ...reply])
    console.log("jjj", result);
    setre(result)
  }
  console.log(ab)
  const result = ab.sort((function (a, b) {
    return (a.time - b.time);
  }))
  console.log("hai", result);
  console.log('id', id);
  const sendChat = () => {
    axios.post('ttps://productsandservices.herokuapp.com/chat', { reciver: id, message: message }).then((response) => {
      alert("Message Sent Successfully");
      window.location.reload(true);
    })
  }

  useEffect(() => {
    setadminTrue(false)
    getAllChats()
    getAllChats1()
    msg()
  }, [])
  return (
    <div>
      <div id="container">
        <main>
          <header>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
              alt
            />
            <h2></h2>
          </header>
          <ul id="chat">
            {
              ab.map((i) => {
                console.log("msgs")
                if (i.sender == id) {
                  return (
                    <li className="you">
                      <div className="entete">
                        {/* <span className="status green" /> */}
                      </div>
                      {/* <div className="triangle" /> */}
                      <div className="message">{i.text}</div><br />
                      <h2>{i.sender}</h2>
                    </li>
                  )
                }
                else {
                  return (
                    <li className="me">
                      <div className="entete">
                        {/* <span className="status blue" /> */}
                      </div>
                      {/* <div className="triangle" /> */}
                      <div className="message">{i.text}</div><br />
                      <h2>{i.sender}</h2>
                    </li>
                  )
                }
              })
            }
          </ul>
          <footer><textarea onChange={(e) => setmessage(e.target.value)} placeholder="Type your message" defaultValue={""} />
            <button onClick={sendChat}>Send</button>
            <button onClick={msg}>load</button>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default Chat