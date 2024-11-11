import consumer from "channels/consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("connected");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log("disconnected");
  },

  received(data) {
    const messageContainer = document.getElementById("message-container");  
    messageContainer.insertAdjacentHTML('beforeend', data.mod_message);
    messageContainer.scrollTop = messageContainer.scrollHeight;

    // Clear the text field
    const chatMessageBody = document.getElementById("chat-message-body");
    chatMessageBody.value = "";
  }
});
