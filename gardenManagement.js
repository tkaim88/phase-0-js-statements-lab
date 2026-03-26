const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

// Temperature check - if-else statement
if (temperature > 80) {
  console.log("Watering on");
} else {
  console.log("Watering off");
}

// Light check - if-else statement with OR operator
if (timeOfDay === "evening" || timeOfDay === "night") {
  console.log("Lights on");
} else {
  console.log("Lights off");
}

// While loop to increment soilMoisture to 40
while (soilMoisture < 40) {
  soilMoisture++;
}

// Log the final soilMoisture value
console.log(soilMoisture);