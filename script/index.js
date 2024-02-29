const slide = document.querySelector('#slider');
const mySpace = document.querySelector('#space');
let maxRight = 300;
const blocks = document.querySelectorAll('.moving-block');

slide.addEventListener('mousedown', e=>{
    if (e.target.classList.contains('moving-block')){
        e.target.active = true; 
    }
});
slide.addEventListener('mousemove', e=>{
    blocks.forEach(block => {
        const move = slide.value;
        const blocLocation = executePixels(getStyle(block, 'margin-left'));

        if(block.classList.contains('one')){
            block.style.marginLeft = move*3 +20 + 'px';
        }
        else if(block.classList.contains('two')){
            block.style.marginLeft = -(move*3 - 300) + 20 + 'px';
        }
        let col = 190+move;
        mySpace.style.backgroundColor = `rgb(
              ${200+move/3}, ${180+move/2}, ${200+move/3}
        )`;
    });
});
slide.body.addEventListener('mouseup',()=>{
    blocks.forEach(block => {block.active = false});
});

function executePixels(value){
    return +value.substring(0, value.indexOf('px'));
}

function getStyle(element, style){
    return getComputedStyle(element)[style];
}