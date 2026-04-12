import React, { useState, useEffect, useRef } from 'react';
import "./styles/messaging.css";

// Mocks des données
const MOCK_DISCUSSIONS = [
    { id: 1, name: "Jean Dupont", book: "One Piece T.1", photo: "https://i.pravatar.cc/150?u=jean", unread: 2, lastMsg: "Est-il toujours dispo ?" },
    { id: 2, name: "Marie Curie", book: "Le Petit Prince", photo: "https://i.pravatar.cc/150?u=marie", unread: 0, lastMsg: "Merci beaucoup !" },
];

const MOCK_MESSAGES = [
    { id: 1, text: "Bonjour, je suis intéressé par votre livre !", time: "10:00", sender: "other" },
    { id: 2, text: "Bonjour ! Oui, il est toujours disponible.", time: "10:05", sender: "me" },
    { id: 3, text: "Est-il en bon état ?", time: "10:06", sender: "other" },
];

function Messaging() {
    const [activeChat, setActiveChat] = useState(MOCK_DISCUSSIONS[0]);
    const [messages, setMessages] = useState(MOCK_MESSAGES);
    const [newMessage, setNewMessage] = useState("");
    const scrollRef = useRef(null);

    // Scroll automatique vers le bas à chaque nouveau message
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const msg = {
            id: Date.now(),
            text: newMessage,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            sender: "me"
        };
        setMessages([...messages, msg]);
        setNewMessage("");
    };

    return (
        <div className="messaging-wrapper">
            <div className="messaging-container">
                
                {/* SIDEBAR : Liste des discussions */}
                <div className="chat-sidebar">
                    <div className="sidebar-header">
                        <h3>Messages</h3>
                    </div>
                    <div className="discussion-list">
                        {MOCK_DISCUSSIONS.map((chat) => (
                            <div 
                                key={chat.id} 
                                className={`discussion-item ${activeChat?.id === chat.id ? 'active' : ''}`}
                                onClick={() => setActiveChat(chat)}
                            >
                                <img src={chat.photo} alt="avatar" />
                                <div className="item-info">
                                    <div className="item-top">
                                        <span className="name">{chat.name}</span>
                                        {chat.unread > 0 && <span className="badge">{chat.unread}</span>}
                                    </div>
                                    <p className="book-ref">{chat.book}</p>
                                    <p className="last-msg">{chat.lastMsg}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ZONE DE CHAT */}
                <div className="chat-main">
                    {activeChat ? (
                        <>
                            <div className="chat-header">
                                <img src={activeChat.photo} alt="" />
                                <div>
                                    <h4>{activeChat.name}</h4>
                                    <span>En ligne</span>
                                </div>
                            </div>

                            <div className="chat-body" ref={scrollRef}>
                                <div className="date-separator"><span>Aujourd'hui</span></div>
                                {messages.map((msg) => (
                                    <div key={msg.id} className={`message-row ${msg.sender}`}>
                                        <div className="message-bubble">
                                            {msg.text}
                                            <span className="time">{msg.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <form className="chat-input-area" onSubmit={handleSendMessage}>
                                <input 
                                    type="text" 
                                    placeholder="Écrivez votre message..." 
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                />
                                <button type="submit">
                                    <i className="bi bi-send-fill"></i>
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="no-chat-selected">
                            <i className="bi bi-chat-dots"></i>
                            <p>Sélectionnez une discussion pour commencer à parler.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Messaging;