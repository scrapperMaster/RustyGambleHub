function createLight() {
    const light = document.createElement('div');
    light.classList.add('light');
    light.style.left = `${Math.random() * 100}%`;
    light.style.top = '-10%';
    setTimeout(() => {
        light.remove();
    }, 3000); // remove the object after 5 seconds
    return light;
  }
  
setInterval(() => {
    const light = createLight();
    document.body.appendChild(light);
    animateLight(light);
}, 500);
  