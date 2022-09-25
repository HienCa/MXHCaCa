const messenger = document.getElementById('messenger');
const notification = document.getElementById('notification');
const messengerBox = document.getElementById('messengerBox');
const notificationBox = document.getElementById('notificationBox');

const commentAction = document.getElementsByClassName('commentAction');
const commentList = document.getElementsByClassName('commentList');

function CommentClick(){
    for (i = 0; i < commentAction.length; i++) {
        if (commentList[i].classList.contains("hide")) {
            commentList[i].classList.remove("hide");
            
        }
        else {
            commentList[i].classList.add("hide");
            
        }
    }
    
}



function ToggleMess() {
    if (messengerBox.classList.contains("hide")) {
        messengerBox.classList.remove("hide");
        if (!notificationBox.classList.contains("hide")) {
            notificationBox.classList.add("hide");
        }
    }
    else {
        messengerBox.classList.add("hide");
        if (!notificationBox.classList.contains("hide")) {
            notificationBox.classList.add("hide");
        }
    }
}

function ToggleNoti() {
    if (notificationBox.classList.contains("hide")) {
        if (!messengerBox.classList.contains("hide")) {
            messengerBox.classList.add("hide");
        }
        notificationBox.classList.remove("hide");
    }
    else {
        if (!messengerBox.classList.contains("hide")) {
            messengerBox.classList.add("hide");
        }
        notificationBox.classList.add("hide");
    }
}
