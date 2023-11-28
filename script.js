// JavaScript for the Chat Box
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const chatMessages = document.getElementById('chat-messages');

    const message = messageInput.value.trim();
    if (message !== '') {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.textContent = message;

        chatMessages.appendChild(messageDiv);
        messageInput.value = '';

        // Optionally, you can add logic here to handle server-side processing or other functionalities.
    }
}

