
const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentTimeElement = document.querySelector('[data-testid="currenttime"]');

// Function to update the day of the week and time
function updateDayAndTime() {
    const currentDate = new Date();
    
    // Update the day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[currentDate.getDay()];
    currentDayOfTheWeekElement.textContent = currentDay;
    
    // Update the current time
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();
    const formattedTime = `${currentHour}:${currentMinute}:${currentSecond}`;
    currentTimeElement.textContent = formattedTime;
}

// Call the function to initially set the day of the week and time
updateDayAndTime();

// Update the day of the week and time every second (1000 milliseconds)
setInterval(updateDayAndTime, 1000);
