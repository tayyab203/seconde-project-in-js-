console.log('hi!');
setTimeout(function() {
    alert('why are you touching me');
},1000);
console.log('How are you');

const btn = document.querySelector('button');

const moveX = (element, amount, delay, callback) => {
    setTimeout(() => {
        element.style.transform = `translateX(${amount}px)`;
        if(callback) callback();
    }, delay);
};

moveX(btn, 100 , 1000, () => {
    moveX(btn, 200 , 1000, () => {
        moveX(btn, 300 , 1000, () => {
            moveX(btn, 400 , 1000, () => {
                moveX(btn, 500 , 1000);
            });
        });
    });
});