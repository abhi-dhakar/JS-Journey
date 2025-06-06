// DOM Selectors
const title = document.getElementById('title');
const paragraphs = document.getElementsByClassName('paragraph');
const button = document.querySelector('.btn');
const allLinks = document.querySelectorAll('a');

// DOM Manipulation Examples
function createNewElement() {
    const div = document.createElement('div');
    div.className = 'new-element';
    div.textContent = 'Dynamically created element';
    document.body.appendChild(div);
}

// Event Listener Example
button?.addEventListener('click', function() {
    title.style.color = 'blue';
    title.textContent = 'Changed via DOM';
});

// Style Manipulation
function updateStyles() {
    title.style.backgroundColor = '#f0f0f0';
    title.style.padding = '10px';
    title.style.borderRadius = '5px';
}

// Class Manipulation
function toggleClass() {
    title.classList.toggle('highlight');
}

// DOM Traversal
function traverseDOM() {
    const parent = title.parentElement;
    const nextSibling = title.nextElementSibling;
    const children = document.body.children;
}