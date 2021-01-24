const buttons = document.querySelectorAll("button");
const displayElement = document.querySelector(".buttonInput");
const calculButton = document.querySelector(".calculBton")
const calbox = document.querySelector(".calbox")
const calculText = document.querySelector(".clacul-text")

const NONDISPLAY = "display-clacul"

class Calculator {
  constructor(displayElement) {
    this.displayElement = displayElement;
    this.operatorChek = true;
    this.equalsCheck = false;
    this.displayContent = "";
    this.secondClick = true;
    this.clear();
    this.onlyDisplay = displayElement;
    this.onlyDisplayContent = "";
  
    
  }
  clear() {
    this.displayContent = "";
    this.displayElement.value = 0;
    this.operatorChek = true;
    this.onlyDisplayContent = "";
  }
  compute() {
    if (this.operatorChek) return;
    this.displayContent = eval(
      this.displayContent.replace("\u00D7", "*").replace("\u00F7", "/")
    );
    this.equalsCheck = true;
    
    
    this.onlyDisplayContent = "";
    this.secondClick = true;
   
  }
  
  appendOperator(operator) {
    if (this.operatorChek) return;
    if (this.equalsCheck) this.equalsCheck = false;
    this.displayContent += operator;
    
    this.operatorChek = true;
    this.secondClick = false;
    this.onlyDisplayContent = "";
    

  }
  appendNumber(number) {
    if (this.equalsCheck) {
      this.displayContent = number;
     
      this.operatorChek = false;
    } else {
      this.displayContent += number;
    }
    this.operatorChek = false;
    
    
  }
  Second(){
    if(this.secondClick) return;
    this.displayContent = eval(
      this.displayContent.replace("\u00D7", "*").replace("\u00F7", "/")
    );
    this.updateDisplay();
    
    
    
  }

  

  updateDisplay() {
    this.displayElement.value = this.displayContent;
    
  }
  onlyDisplaygo(number) {
    
    this.onlyDisplayContent += number;
    this.displayElement.value = this.onlyDisplayContent;
    

  }
}

const calculator = new Calculator(displayElement);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.dataset.type) {
      case "operator":
        calculator.Second();
        calculator.appendOperator(button.innerText);

        break;
      case "ac":
        calculator.clear();
        break;
      case "equals":
        calculator.compute();
        calculator.updateDisplay();
       
        break;

      default:
        calculator.appendNumber(button.innerText);
        calculator.onlyDisplaygo(button.innerText);
        break;
    }
  });
});
function deleteCalcul(){
  calbox.classList.add(NONDISPLAY)
  const calculBt = calculText.querySelector("p")
  calculText.removeChild(calculBt)
}


function handCalculator(){
  calbox.classList.remove(NONDISPLAY)
  const check = document.querySelector("p")
  if(check === null){
  const calculBt = document.createElement("p")
  calculBt.innerText = "❌";
  calculBt.addEventListener("click", deleteCalcul);
  calculText.append(calculBt);}

  



}



calculButton.addEventListener("click", handCalculator)