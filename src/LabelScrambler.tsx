
const LabelScrambler = () => {

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
  let interval: ReturnType<typeof setInterval> | null = null;

  const fontsArr = ["font-space", "font-shrikhand", "font-sedgwick", "font-pixelfy", "font-orbitron", "font-major-mono", "font-antonio"];
  
  let currentIndex = 1;
    
  const buttonLabels = Array.from(document.querySelectorAll<HTMLElement>("div.button-hover"));
  
  if (buttonLabels.length > 0) {
    buttonLabels.forEach(buttonLabel => {
      buttonLabel.onmouseover = (e) => {
        clearInterval(interval!);

        buttonLabel.classList.remove(...fontsArr);
        buttonLabel.classList.add(fontsArr[currentIndex]);

        if (currentIndex >= fontsArr.length - 1) {
        
          currentIndex = 0;
        } else {
          currentIndex += 1;
        }
                      
        const targetElement = e.target as HTMLElement;
        
        const { value } = targetElement.dataset;
          
        if (value) {
          let iterations = 0;
            
          interval = setInterval(() => {
            targetElement.innerText = targetElement.innerText
              .split("")
              .map((letter, index) => {
                if (index < iterations) {
                  return value[index];
                }
                  
                return letters[Math.floor(Math.random() * 26)];
              })
              .join("");
      
            if (iterations >= value.length) {
              clearInterval(interval!);
            }
      
            iterations += 1 / 3;
      
          }, 25);
        }
      };
    });    
  }
};

export default LabelScrambler;