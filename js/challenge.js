const counter = document.getElementById("counter")
let currentCounterValue = parseInt(counter.innerText)
const decButton = document.getElementById("minus")
const incButton = document.getElementById("plus")
const likeButton = document.getElementById("heart")
const pauseButton = document.getElementById("pause")
const commentButton = document.getElementById("submit")
const likeList = document.getElementsByClassName("likes")[0]
const commentList = document.getElementById("list")
const commentInput = document.getElementById("comment-input")
let allLikes = []
let allComments = []

let timer = window.setInterval(incrementCounter, 1000)

decButton.addEventListener("click", decrementCounter)
incButton.addEventListener("click", incrementCounter)
pauseButton.addEventListener("click", toggleTimer)
likeButton.addEventListener("click", likeTime)
document.addEventListener("submit", function(event) {
    event.preventDefault();
    processCommentForm();
    }
)

function decrementCounter() {
    currentCounterValue--;
    counter.innerText = currentCounterValue;
}

function incrementCounter() {
    currentCounterValue++;
    counter.innerText = currentCounterValue;
}

function toggleTimer() {
    if (pauseButton.innerText === "pause") {
        pauseTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    timer = window.setInterval(incrementCounter, 1000);
    incButton.disabled = false;
    decButton.disabled = false;
    likeButton.disabled = false;
    commentButton.disabled = false;
    pauseButton.innerText = "pause";
}

function pauseTimer() {
    window.clearInterval(timer);
    incButton.disabled = true;
    decButton.disabled = true;
    likeButton.disabled = true;
    commentButton.disabled = true;
    pauseButton.innerText = "resume";
}

function likeTime() {
    const likedValue = currentCounterValue
    allLikes.push(likedValue)
    const totalTimesLiked = countLikes(likedValue)
    updateLikeList(likedValue, totalTimesLiked)
}

function countLikes(likedValue) {
    sameValues = []
    for (i=0; i<=allLikes.length; i++) {
        if (allLikes[i] === likedValue) {
            sameValues.push(likedValue)
        }
    }
    return sameValues.length
}

function updateLikeList(likedValue, totalTimesLiked) {
    if (totalTimesLiked > 1) {
        updateLikedItem(likedValue, totalTimesLiked)
    } else {
        addItemToLikeList(likedValue)
    }
}

function updateLikedItem(likedValue, totalTimesLiked) {
    likedValueElement = document.getElementById(likedValue.toString())
    likedValueElement.textContent = `${likedValue} has been liked ${totalTimesLiked} times.`
}

function addItemToLikeList(likedValue) {
    const likedValueElement = document.createElement("li")
    likedValueElement.id = likedValue.toString()
    likedValueElement.textContent = `${likedValue} has been liked 1 time.`
    likeList.appendChild(likedValueElement)
}

function processCommentForm() {
    const comment = commentInput.value;
    saveComment(comment);  
    addCommentToCommentList(comment);
    clearFormInput();
}

function saveComment(comment) {
    allComments.push(comment);
}

function addCommentToCommentList(comment) {
    const commentElement = document.createElement("p");
    commentElement.id = `comment-${allComments.length}`;
    commentElement.textContent = comment;
    commentList.appendChild(commentElement);
}

function clearFormInput() {
    commentInput.value = "";
}



 

