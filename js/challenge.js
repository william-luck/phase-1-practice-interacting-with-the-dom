// See the timer increment every second once the page has loaded. DONE

const counter = document.getElementById('counter');
let counterInt = 0
let likeCounter = 0;
let timer = setInterval(beginTimer, 1000);


function beginTimer() {
    counterInt++
    counter.textContent = `${counterInt}`
    likeCounter = 0; // Resets like counter to 0 after one second. 
}

// Manually increment and decrement the counter using the plus and minus buttons.

const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');

minusButton.addEventListener('click', () => {
    counterInt--;
    counter.textContent = `${counterInt}`
    console.log("I was clicked")
})
plusButton.addEventListener('click', () => {
    counterInt++;
    counter.textContent = `${counterInt}`
    console.log("I was clicked")
})


// "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.

const heartButton = document.getElementById('heart');
heartButton.addEventListener('click', displayLikeMessage)
const ul = document.querySelector('.likes')

function displayLikeMessage () {
    likeCounter++; 
    let li = document.createElement('li') 
    li.id = `${counterInt}`;
    let message = `${counterInt} was liked ${likeCounter} times.`
    li.textContent = message;
    if (likeCounter === 1) { // if the likeCounter has been reset, create a new element
        ul.append(li);
    } else if (likeCounter > 1) { // If it hasn't been reset (within the sames second), update message of the last appended item, according to ID. 
        let li = document.getElementById(`${counterInt}`) 
        let message = `${counterInt} was liked ${likeCounter} time.`
        li.textContent = message;
    }
}


// Pause the counter, which should:

    // pause the counter

const pauseButton = document.getElementById('pause')
pauseButton.addEventListener('click', pauseCounter)

function pauseCounter() {
    timer = clearInterval(timer); // need to do this plus one
    timer-1;
    minusButton.disabled = true
    plusButton.disabled = true
    heartButton.disabled = true
    pauseButton.textContent='resume'
    pauseButton.removeEventListener('click', pauseCounter);
    pauseButton.addEventListener('click', resumeTimer)
    return timer;
}

function resumeTimer() {
    minusButton.disabled = false
    plusButton.disabled = false
    heartButton.disabled = false
    pauseButton.textContent = 'pause'
    pauseButton.removeEventListener('click', resumeTimer)
    pauseButton.addEventListener('click', pauseCounter)
    timer = setInterval(beginTimer, 1000);
    timer-1
    return timer
}

    // disable all buttons except the pause button (greys them out)

    // switch the label on the button from "pause" to "resume"

// Click the "restart" button to restart the counter and re-enable the buttons. // DONE

// Leave comments on my gameplay, such as: "Wow, what a fun game this is."

const form = document.getElementById('comment-form')
form.addEventListener('submit', e => {
    e.preventDefault();
    const inputText = e.target.comment_input.value
    
    const commentList = document.getElementById('list')
    const p = document.createElement('p')
    p.textContent = inputText
    commentList.append(p)
    form.reset();
})

//e.target.input.value