let trackedItems = [];
let totalCalories = 0;

function getCalories() {
    var foodInput = document.getElementById('foodInput').value;

    // Make sure user entered a food
    if (!foodInput) {
        alert('Please enter a food name');
        return;
    }

    // Make API call to Nutritionix
    fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-app-id': '2a5473ba',
            'x-app-key': '98a514b05e9ab4da36eec7e9b472f9d4'
        },
        body: JSON.stringify({
            query: foodInput
        })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        const calories = data.foods[0].nf_calories;
        totalCalories += calories;
        trackedItems.push({ food: foodInput, calories: calories });
        displayTrackedItems(trackedItems);
        displayTotalCalories(totalCalories);
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
}

function displayTrackedItems(trackedItems) {
    var trackedItemsDisplay = document.getElementById('trackedItems');
    trackedItemsDisplay.innerHTML = '';
    trackedItems.forEach(item => {
        var itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.food}: ${item.calories} calories`;
        trackedItemsDisplay.appendChild(itemDiv);
    });
}

function displayTotalCalories(totalCalories) {
    var totalCaloriesDisplay = document.getElementById('totalCaloriesDisplay');
    totalCaloriesDisplay.innerText = 'Total Calories: ' + totalCalories;
}
