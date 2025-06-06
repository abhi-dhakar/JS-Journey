// 1. Click Event
document.getElementById('myButton').addEventListener('click', function() {
    console.log('Button clicked!');
});

// 2. Mouse Events
const mouseTarget = document.getElementById('mouseArea');
mouseTarget.addEventListener('mouseenter', () => console.log('Mouse entered'));
mouseTarget.addEventListener('mouseleave', () => console.log('Mouse left'));
mouseTarget.addEventListener('mousemove', () => console.log('Mouse is moving'));

// 3. Keyboard Events
document.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
});
document.addEventListener('keyup', (event) => {
    console.log(`Key released: ${event.key}`);
});

// 4. Form Events
const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submitted');
});

// 5. Input Events
const input = document.getElementById('myInput');
input.addEventListener('change', () => console.log('Input value changed'));
input.addEventListener('focus', () => console.log('Input focused'));
input.addEventListener('blur', () => console.log('Input lost focus'));

// 6. Window Events
window.addEventListener('load', () => console.log('Page loaded'));
window.addEventListener('resize', () => console.log('Window resized'));
window.addEventListener('scroll', () => console.log('Page scrolled'));

// 7. Document Events
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');
});

// 8. Drag and Drop Events
const draggable = document.getElementById('draggable');
draggable.addEventListener('dragstart', () => console.log('Started dragging'));
draggable.addEventListener('dragend', () => console.log('Stopped dragging'));

// 9. Media Events
const video = document.getElementById('myVideo');
video.addEventListener('play', () => console.log('Video started playing'));
video.addEventListener('pause', () => console.log('Video paused'));
video.addEventListener('ended', () => console.log('Video ended'));

// 10. Touch Events
document.addEventListener('touchstart', () => console.log('Touch started'));
document.addEventListener('touchend', () => console.log('Touch ended'));
document.addEventListener('touchmove', () => console.log('Touch moving'));