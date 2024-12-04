AFRAME.registerComponent('door-animation', {
    schema: {
      opened: { type: 'boolean', default: false }
    },
    init: function () {
      const doorWrapper = this.el;
      const carBox = document.querySelector("#carBox");
  
      carBox.addEventListener('model-loaded', () => {
        doorWrapper.addEventListener('click', () => {
          if (!this.data.opened) {
            this.moveDoor(1);
            this.moveCarBox(5);
          } else {
            this.moveDoor(3);
          }
          this.data.opened = !this.data.opened;
        });
      });
    },
  
    moveDoor: function (targetX) {
      const doorWrapper = this.el;
      const currentPosition = doorWrapper.getAttribute('position');
      
      doorWrapper.setAttribute('animation', {
        property: 'position',
        to: `${targetX} ${currentPosition.y} ${currentPosition.z}`,
        dur: 500
      });
    },
  
    moveCarBox: function (targetX) {
      const carBox = document.querySelector("#carBox");
      
      if (!carBox) {
        console.error("Контейнер с ID #carBox не найден!");
        return;
      }
      
      const currentPosition = carBox.getAttribute('position');
      
      carBox.setAttribute('animation', {
        property: 'position',
        to: `${targetX} ${currentPosition.y} ${currentPosition.z}`,
        dur: 2500
      });
    }
  });
  