// diese animation funktioniert nur mit styles.css 

// mainanimation
export const anim = {
    old: {
      name: 'scrollDownFadeOut',
      duration: '0.3s',
      delay: '0s',
      easing: 'ease-in-out',
      fillMode: 'forwards',
      direction:'',
    },
    new: {
      name: 'scrollUpFadeIn',
      duration: '0.3s',
      delay: '0.3s',
      easing: 'ease-in-out',
      fillMode: 'backwards',
      direction:'',
    }
  };
  
  export const mainanimation = {
    forwards: anim,
    backwards: anim,
  };

  // (: