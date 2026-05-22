import React from 'react';

function Discussion() {
    return (
        <div className="section-container chat-interface-layout">
            {/* Liste des discussions à gauche */}
            <div className="chat-sidebar-list">
                <div className="chat-summary-item active-chat">
                    <div className="chat-avatar-mini">👤</div>
                    <div className="chat-text-preview">
                        <h5>Hermione Granger</h5>
                        <p>Le livre est-il toujours disponible ?</p>
                    </div>
                </div>
            </div>

            {/* Fenêtre de conversation ouverte à droite */}
            <div className="chat-main-window">
                <div className="chat-window-messages">
                    <div className="message-bubble received">
                        Bonjour ! Votre livre m'intéresse beaucoup.
                    </div>
                    <div className="message-bubble sent">
                        Bonjour ! Oui, il est toujours disponible pour un échange.
                    </div>
                </div>
                <div className="chat-input-bar">
                    <input type="text" placeholder="Écrire votre message ici..." />
                    <button className="btn-send-message">Envoyer</button>
                </div>
            </div>
        </div>
    );
}

export default Discussion;