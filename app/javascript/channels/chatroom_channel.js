import consumer from "channels/consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    console.log("connected to chatroom channel");
  },

  disconnected() {
    console.log("disconnected from chatroom channel");
  },

  received(data) {
    const messageContainer = document.getElementById("message-container");

    if (data.type === "connected" || data.type === "disconnected") {
      updateOnlineMembersList( data.data.online_users );
    } else {
      // Handle new messages
      messageContainer.insertAdjacentHTML('beforeend', data.mod_message);
      messageContainer.scrollTop = messageContainer.scrollHeight;

      // Clear the text field
      const chatMessageBody = document.getElementById("chat-message-body");
      chatMessageBody.value = "";
    }
  }
});

function updateOnlineMembersList(data) {
  // This function will dynamically update the online members list
  const onlineMembersContainer = document.getElementById("online-members");
  onlineMembersContainer.innerHTML = ""; // Clear the current list

  data.forEach(user => {
    const userElement = document.createElement("p");
    userElement.className = "text-white p-2 font-medium text-lg border border-b-gray-500";
    userElement.textContent = user;
    onlineMembersContainer.appendChild(userElement);
  });
}
