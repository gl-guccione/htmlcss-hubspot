// declare variables for buttons (close and open chat)
var closeChat = document.getElementById("close-chat");
var openChat = document.getElementById("open-chat");
var chat = document.getElementById("chat");


//add event listener to open/close chat
closeChat.addEventListener("click",
  function() {
    chat.classList.add("d-none");
  }
);

openChat.addEventListener("click",
  function() {
    chat.classList.remove("d-none");
  }
);
