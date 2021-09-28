let container = document.querySelector('.container');
let clearButton = document.querySelector('.clear-button');


let setGrid = (num) => {
    document.querySelectorAll('.griddiv').forEach(e => e.remove());

    container.style.cssText = `grid-template-columns: repeat(${num}, auto); grid-template-rows: repeat(${num}, auto);`;

    for (let index = 0; index < (num * num); index++) {
        newDiv = document.createElement('div');
        newDiv.classList.add('griddiv');
        newDiv.addEventListener('mouseover', function(e){
            e.currentTarget.classList.add('active');
        })
        container.appendChild(newDiv);
    }
}
setGrid(16);

clearButton.addEventListener('click', () => {
    let newGridSize = Number(prompt('Choose your etch-a-field', '16'));
    if (newGridSize > 100) {
        Number(prompt('Choose a number lower than 100', '99'));
    } else {
        setGrid(newGridSize);
    }
    setGrid(newGridSize);
});