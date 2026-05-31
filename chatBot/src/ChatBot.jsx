
// ChatBot.jsx
const ChatBot = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/05/21/23/20260521235318-YRH8FKG8.json"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="Chatbot"
        allow="microphone"
      />
    </div>
  );
};

export default ChatBot;