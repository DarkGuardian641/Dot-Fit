document.getElementById('calculate').addEventListener('click', function() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    
    if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
        var bmi = calculateBMI(height, weight);
        displayResult(bmi);
    } else {
        document.getElementById('result').innerText = 'Please enter valid height and weight.';
    }
});

function calculateBMI(height, weight) {
    var bmi = weight / ((height / 100) * (height / 100));
    return bmi.toFixed(2);
}

function displayResult(bmi) {
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Your BMI is: ' + bmi + '<br>';
    
    if (bmi < 18.5) {
        resultElement.innerHTML += 'You are underweight.';
    } else if (bmi >= 18.5 && bmi < 25) {
        resultElement.innerHTML += 'You have a normal weight.';
    } else {
        resultElement.innerHTML += 'You are overweight.';
    }
}
