//Targeting the task input from my the html
const taskInput = document.querySelector('#taskInput');

//When the submit task is clicked, run the addtask selector
document.querySelector('#submitTask').addEventListener('click', addTask);

//The FUNCTION to add the tasks
function addTask() {
    // Getting the value of the text
    const input = document.querySelector('#taskInput').value;
    //Creating a new li's
    const readyPlayerOne = document.createElement('li');
    // Creating the checkbox
    const boxChecked = document.createElement('input');
    //Creating the remove button
    const removeTask = document.createElement('button');
    console.log(input);

    //Appending my UL(tasklist) to my child element (li's)
    document.querySelector('#taskList').appendChild(readyPlayerOne);

    //Putting the user's task inside the li
    readyPlayerOne.innerText = input;

    // To make the trashcan be visible and use an icon
    readyPlayerOne.appendChild(removeTask);
    removeTask.innerText = '🗑️';

    //Once you add the task in the input, it clears after we click.
    document.querySelector('#taskInput').value = '';

    //When checked box is checked then line through of list items. 
    //Putting check-box at the beginning of the li's
    boxChecked.type = 'checkbox';
    readyPlayerOne.prepend(boxChecked);

    // When you click the check-box, once completed, it puts a line through the list, if not, it shows nothing
    boxChecked.addEventListener('change', function () {
        if (boxChecked.checked) {
            readyPlayerOne.style.textDecoration = 'line-through'
        } else {
            readyPlayerOne.style.textDecoration = 'none'
        }
    });

    // to remove a list when clicked
    removeTask.addEventListener('click', function () {
        readyPlayerOne.remove();
    });
}

// Delete all: click the delete all button and all the lists should delete
document.querySelector('#deleteBtn').addEventListener('click', clearAll);
function clearAll() {
    document.querySelector('#taskList').innerHTML = '';
};
// const num = 2

function twoPlus (num) {
return num * 2; 
}

twoPlus(8)
let a = 9; 
let result = twoPlus(8); 
let b = result + 10; 

console.log(result);
console.log(twoPlus(5)); 


function pluralizer (player) {
    return player + "s"; 
}

let resultTwo = pluralizer('bongi')



function today (thursday) {
    return thursday + 1; 
}

today(3); // calling the function

let todayResults = today(3); 