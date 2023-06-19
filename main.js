function changeColor() {
    var colorDiv = document.getElementById('full-page');
    var colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink" , "aqua" , "brown"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorDiv.style.backgroundColor = randomColor;
}