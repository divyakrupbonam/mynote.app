function getinfo(){
    heading  = document.getElementById('notehead').value;
    link = document.getElementById('reflink').value;    
    description = document.getElementById('description').value;
    
    divel = document.createElement('div');
    divel.setAttribute('class','card')
    notehead = document.createElement('h2');
    notehead.textContent = heading;
    divel.appendChild(notehead)

    notelink = document.createElement('a');
    notelink.href = link
    notelink.textContent = 'Click here to know more'
    divel.appendChild(notelink)

    notedes = document.createElement('p')
    notedes.textContent = description
    divel.appendChild(notedes)

    noteList = document.getElementById('notesContainer')
    noteList.appendChild(divel)
}