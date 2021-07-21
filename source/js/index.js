const list = document.getElementById('list');
const form = document.querySelector('form');
const item = document.getElementById('item');


// ajouter un element a la liste
form.addEventListener('submit', (e) => {

    e.preventDefault();
    list.innerHTML += `<li>${item.value}</li>`;
    storage();
    item.value = '';

});

// supprimer un element a la liste
list.addEventListener('click', (e) => {

    if (e.target.classList.contains('checked')) {

        e.target.remove();

    } else {

        e.target.classList.add('checked');

    }

    storage();

});


// Stockage 
// facon plus simple que les precedents exercices

function storage() {

    window.localStorage.todoList = list.innerHTML;

};

function getValues() {

    let storageContent = window.localStorage.todoList;

    if (!storageContent) {

        list.innerHTML = `<li>TUTORIEL :</li><li>Cliquez sur la barre pour ajouter un todo puis la touche ENTRER</li><li>Cliquez sur un todo pour le valider</li><li>Cliquez une deuxième fois pour le supprimer</li>`

    } else {

        list.innerHTML = storageContent;

    };

};

getValues();