const notesContainer = document.querySelector('.notes-container');
const creatBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

// localStorage.clear();
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes');
}

showNotes()

function updatStorage(){
    localStorage.setItem('notes', notesContainer.innerHTML);
}

creatBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'images/delete.png';
    notesContainer.appendChild(inputBox).appendChild(img);
    
    })

notesContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updatStorage();
    }
    else if(e.target.tagName === 'P'){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(note => {
            note.onkeyup = function(){
                updatStorage();
            }
        })
}})

document.addEventListener('keydown' , event =>{
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})