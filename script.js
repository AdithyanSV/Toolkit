//Dark-Lite modes
const mode = document.querySelector('#modeImg');
let val = 1;
//mode switch function
function modeSwitch(){
  if (val == 1){
    this.src = "sources/moon.png";
    document.documentElement.style.setProperty('--bg', 'radial-gradient( #888888, #ffffff)');
    document.documentElement.style.setProperty('--color', '#000000');
    document.documentElement.style.setProperty('--calc-bg', '(220, 220, 250, .5)');
    document.documentElement.style.setProperty('--screen', '#222222');    
    console.log("switched to lite");
    val=2;
    return val;
  } else{
    this.src = "sources/sun.png";
    document.documentElement.style.setProperty('--bg', 'radial-gradient(#101010, #050505)');
    document.documentElement.style.setProperty('--color', '#ffffff');
    document.documentElement.style.setProperty('--calc-bg', '(2, 2, 2, .75)');
    document.documentElement.style.setProperty('--screen', '#000000');  
    console.log("switched to dark");
    val=1;
    return val;
  }
}

mode.addEventListener('click', modeSwitch);