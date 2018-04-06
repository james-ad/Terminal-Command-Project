// Testing out some JS functionality to get ideas on execution
window.addEventListener('load', function() {
    let searchBox = document.getElementById('search-box');
    let searchButton = document.getElementById('search-button');
    let mainContent = document.getElementById('main-content');

    searchButton.addEventListener('click', function() {
        if (searchBox.value == 'create a folder') {
            mainContent.innerHTML = 'Use the "mkdir" command to create a folder';
        }
    });
});

// Clear box when in focus if default text is present
window.addEventListener('load', function (){
    let searchBox = document.getElementById('search-box');
    searchBox.addEventListener('focus', function(){
        if (searchBox.value == 'What is your command?')  {
            searchBox.value = '';
        }
    });

// Fill box with default text if box is empty upon blur event
    searchBox.addEventListener('blur', function() {
        if (searchBox.value == '') {
            searchBox.value = 'What is your command?';
        }
    });
});