const pressed = [];
const secretCode = 'lecreuset';

window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join("").includes(secretCode)) {
        console.log("Ding, dong, the witch is dead!");
        cornify_add();
    }
})