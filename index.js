
let inputNum = 0

let num = document.getElementById("num-text")

let len = document.getElementById("len-text")
let vol = document.getElementById("vol-text")
let mass = document.getElementById("mass-text")


function getInput() {
    inputNum = document.getElementById("userInput").value
    num.textContent = inputNum // the number entered by the user
    console.log(num)
}

// len conversion
function lengthConv() {
    meters = (inputNum * 0.3048).toFixed(3) // meters to feet
    feets = (inputNum * 3.2808398950131).toFixed(3) // feets to meters

    // 0 meters = 0.000 feet | 0 feet = 0.000 meters
    len.textContent = inputNum + " meters = " + feets + " feet | " + inputNum + " feet = " + meters + " meters " 
    console.log(len)
}

function volumeConv() {
    litres = (inputNum * 3.7854).toFixed(3)
    gallons = (inputNum * 0.2641729).toFixed(3)

    // 0 liters = 0.000 gallons | 0 gallons = 0.000 liters
    vol.textContent = inputNum + " liters = " + gallons + " gallons | " + inputNum + " gallons = " + gallons + " liters " 
    console.log(vol)
}

function massConv() {
    kilos = (inputNum * 0.45359237).toFixed(3)
    pounds = (inputNum * 2.20462262).toFixed(3)

    // 0 kilos = 0.000 pounds | 0 pounds = 0.000 kilos
    mass.textContent = inputNum + " kilos = " + pounds + " pounds | " + inputNum + " pounds = " + kilos + " kilos " 
    console.log(mass)

}