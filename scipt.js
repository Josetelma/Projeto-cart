let container = document.getElementById('container');
let count = 50;
for(var i = 0; i<50; i++){
    let leftSnown = Math.floor(Math.random() * container.clientWidth);
    let topSnown = Math.floor(Math.random() * container.clientHeight);
    let widthSnown = Math.floor(Math.random() * 50);
    let timeSnown = Math.floor((Math.random() * 5) + 5);
    let blurSnown = Math.floor(Math.random() * 20);
    let div = document.createElement('div');
    div.classList.add('snown');
}