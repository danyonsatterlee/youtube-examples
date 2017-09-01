const chalkAnimation = require('chalk-animation');

const glitch = chalkAnimation.glitch('All the colors of the rainbow');

setTimeout (()=>{
    glitch.stop();
}, 1000);