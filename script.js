// initialize array to store food items
let foodArr = [];

// get elements
const foodInput = document.getElementById('food');
const caloriesInput = document.getElementById('calories');
const addBtn = document.getElementById('add-btn');
const logList = document.getElementById('log-list');
const totalCaloriesInput = document.getElementById('total-calories');

// add event listener for button click
addBtn.addEventListener('click', function() {
	// get values from inputs
	const food = foodInput.value;
	const calories = parseInt(caloriesInput.value);

	// validate input
	if (!food || isNaN(calories) || calories < 1) {
		alert('Please enter a valid food and calorie amount.');
		return;
	}

	// create new food object and add to array
	const newFood = { food: food, calories: calories };
	foodArr.push(newFood);

	// clear input fields
	foodInput.value = '';
	caloriesInput.value = '';

	// update log
	updateLog();

	// update total calories
	updateTotalCalories();
});

// function to update log
function updateLog() {
	// clear previous log entries
	logList.innerHTML = '';

	// loop through food array and add to log
	foodArr.forEach(function(food) {
		const li = document.createElement('li');
		li.innerText = `${food.food}: ${food.calories} calories`;
		logList.appendChild(li);
	});
}

// function to update total calories
function updateTotalCalories() {
	let totalCalories = 0;

	// loop through food array and sum calories
	foodArr.forEach(function(food) {
		totalCalories += food.calories;
	});

	// update total calories input field
	totalCaloriesInput.value = totalCalories;

}
