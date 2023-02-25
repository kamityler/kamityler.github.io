let unit = {
    unit: document.querySelector('.unit'),
    height: getNum(window.getComputedStyle(document.querySelector('.unit')).height) / 2,
    width: getNum(window.getComputedStyle(document.querySelector('.unit')).width) / 2,
    posX: getNum(window.getComputedStyle(document.querySelector('.unit')).left),
    posY: getNum(window.getComputedStyle(document.querySelector('.unit')).top)
};
const field = {
    y: getNum(window.getComputedStyle(document.querySelector('.box')).height),
    x: getNum(window.getComputedStyle(document.querySelector('.box')).width)
};
let vector = {
    top: false,
    bottom: true,
    left: false,
    right: true
};

requestAnimationFrame(() => animation(unit, field, vector));


function animation(unit, field, vector) {
    if (vector.bottom == true) {
        unit.posY++;
        if (unit.posY + 2 * unit.height >= field.y) {
            vector.bottom = false;
            vector.top = true;
        }
    } else if(vector.top == true){
        console.log(unit.posY);
        unit.posY--;
        if (unit.posY <= 0) {
            vector.bottom = true;
            vector.top = false;
        }
    }

    if (vector.right == true) {
        unit.posX++;
        if (unit.posX + 2 * unit.width >= field.x) {
            vector.right = false;
            vector.left = true;
        }
    } else if(vector.left == true){
        console.log(unit.posX);
        unit.posX--;
        if (unit.posX <= 0) {
            vector.right = true;
            vector.left = false;
        }
    }

    unit.unit.style.top = unit.posY + 'px';
    unit.unit.style.left = unit.posX + 'px';
    requestAnimationFrame(() => animation(unit, field, vector));
}

function getNum(value) {
    let num = value.replace(/\,/g, '.');
    const num2 = num.replace(/[^0-9.]/g, ''); //console.log(num, ' ', num2);
    return +num2;
}