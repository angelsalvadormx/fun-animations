var formulario = document.getElementById("form");
var main = document.getElementsByTagName("main")[0];
var positionLight = [];

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  var numberLights = this.elements.lights.value;
  if (Number(numberLights)) {
    start(numberLights);
  } else {
    alert('[' + numberLights + '] No es un número');
  }
});

/**
 * @template
 * @returns: nothing
 * @param: number of lights to show
 * @description: Insert items to Dom 
 */
const start = number => {
  var pos = [];
  var light;
  while (number) {
    pos = savePosition(randomWidth(),randomHeight()).split(',');
    light = document.createElement('span');
    light.style.left = `${pos[0]}px`;
    light.style.top = `${pos[1]}px`;
    light.classList.add('light');
    main.appendChild(light);
    number--;
  }
  //setInterval(moveAllLights,3000);
};

/**
 *   
 */
const moveAllLights = () => {
  var lightDom = document.getElementsByClassName('light');
  for (let index = 0; index < positionLight.length; index++) {
    console.log(positionAxis(positionLight[index],index));
    if(positionAxis(positionLight[index],index) == 'crash'){
      lightDom[index].classList.add('crash');
    }
  }
};

/**
 * 
 */
// const setPosition = () => {
//   var lights = document.getElementsByClassName('light');
//   Object.keys(lights).forEach(key => {
//     savePosition(random());
//   });

// };


/**
 * @param 
 * 
 */
const savePosition = (x,y) => {
  var pos = `${x},${y}`; 
  var found = positionLight.find(function (posLight) {
    return posLight == pos;
  });
  
  if (found === undefined) {
    positionLight.push(pos);
    return pos;
  }else{
    savePosition(randomWidth(),randomHeight());
  }
}

/**
 * 
 */
const positionAxis = (position,index) =>{
  var axis = randomAxis();
  var found = '';
  var result = null;
  pos = position.split(',');
  if(axis == 1){
    pos[0] = Number(pos[0])+1;
  }else if(axis == 2){
    pos[1] = Number(pos[1])+1;

  }
  pos = pos.join();
  found = positionLight.find( posLight => {
    return posLight == pos;
  });

  if(found === undefined){
    positionLight[index] = pos;
    return true;
  }else{
    found = found.split(',');
    pos = pos.split(',');
    if(axis == 1){
      result = found[0] - pos[0];
    }else if(axis == 2){
      result = found[1] - pos[1];
    }

    if(result <= 20 || result > -20){
      return 'crash';
    }else{
      return true;
    }
  

  }
}

/**
 * @returns: Random number between 1 - width of screen 
 */
const randomWidth = () => {
  return Math.floor(Math.random() * (window.innerWidth-10)) + 1;
};


/**
 * @returns: Random number between 1 - height of screen 
 */
const randomHeight = () => {
  return Math.floor(Math.random() * (window.innerHeight-10)) + 1;
};

/**
 * @returns: Random number between 1 - 2
 */
const randomAxis = () => {
  return Math.floor(Math.random() * 2) + 1;
};

Math.floor()