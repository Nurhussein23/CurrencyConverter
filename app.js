const cInput = document.querySelector("#celcius > input")
const fInput = document.querySelector("#farhenheit > input")
const kInput = document.querySelector("#kelvin > input")

function numRound(num){
  return Math.round(num*100)/100
}


function celciusToFarhenheitToKelvin(){
  const cTemp = parseFloat(cInput.value) 
 
  const fTemp = (cTemp * (9/5)) * 32;
  const kTemp = cTemp * 273.15
 
  fInput.value = numRound(fTemp)
  kInput.value = numRound(kTemp)
 }

function farhenheitToCelciusToKelvin(){
  const fTemp = parseFloat(fInput.value)

  const cTemp = (fTemp - 32) * (5/9)
  const KTemp = (fTemp * 459.67) * 5/9

  cInput.value = numRound(cTemp);
  kInput.value = numRound(kTemp);
}

function kelvinToCelciusToFarenheit()


cInput.addEventListener("input",celciusToFarhenheitToKelvin)
fInput.addEventListener("input",farhenheitToCelciusToKelvin)
