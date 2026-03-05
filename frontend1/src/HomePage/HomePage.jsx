import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './HomePage.css'; 

const HomePage = () => {
  const user = useSelector(state => state.authentication.user);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hello! How can I assist you today?', timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { id: '1', title: 'Getting started', lastMessage: 'Hello! How can I assist you today?', timestamp: new Date() },
    { id: '2', title: 'Camera settings', lastMessage: 'What aperture should I use?', timestamp: new Date(Date.now() - 3600000) }
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: inputText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        sender: 'bot',
        text: 'Thanks for your message. I’m here to help with photography tips, camera settings, and more!',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 600);
  };


  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="chat-container">

      <div className="chat-sidebar">
        <div className="sidebar-header">
          <h2>Chat History</h2>
          <button className="new-chat-btn" onClick={() => setMessages([{
            id: Date.now(),
            sender: 'bot',
            text: 'Hello! How can I assist you today?',
            timestamp: new Date()
          }])}>+ New Chat</button>
        </div>
        <ul className="history-list">
          {chatHistory.map(chat => (
            <li key={chat.id} className="history-item">
              <div className="history-title">{chat.title}</div>
              <div className="history-preview">{chat.lastMessage}</div>
              <div className="history-time">{formatTime(chat.timestamp)}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="chat-main">
        <div className="chat-header">
          <h1>Hi {user?.firstName || 'Photographer'}!</h1>
          <Link to="/login" className="logout-link">Logout</Link>
        </div>

        <div className="messages-area">
          {messages.map(msg => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              <div className="message-bubble">
                <div className="message-text">{msg.text}</div>
                <div className="message-time">{formatTime(msg.timestamp)}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form className="input-area" onSubmit={handleSend}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask about photography, cameras, lighting..."
            className="message-input"
          />
          <button type="submit" className="send-btn" disabled={!inputText.trim()}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export { HomePage };