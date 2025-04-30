const pressed_key = [];
const secretCode = 'vatsal';

window.addEventListener('keyup',(e)=>{
    console.log(e.key);

    pressed_key.push(e.key);

    pressed_key.splice(
        -secretCode.length - 1, pressed_key.length - secretCode
    );

    console.log(pressed_key);

    if(pressed_key.join('').includes(secretCode)){
        console.log('DING DING');
        cornify_add();
    }
    console.log(pressed_key);
});