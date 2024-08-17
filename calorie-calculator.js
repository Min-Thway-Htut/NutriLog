function calculateCalorie() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let age = parseFloat(document.getElementById('age').value);
    let userGender = '';
    const genderRadios = document.getElementsByName('gender');

    // Loop through the radio buttons to find the checked one
    for (let i = 0; i < genderRadios.length; i++) {
        if (genderRadios[i].checked) {
            userGender = genderRadios[i].value;
            break;
        }
    }

    let bmr = 0;

    // Calculate BMR based on gender
    if (userGender === "male") {
        bmr = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
    } else if (userGender === "female") {
        bmr = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);
    } else {
        // If no gender is selected, display an error message and stop execution
        document.getElementById('calorie-result').innerHTML = "Please select a gender!";
        return; // Stop further execution
    }

    // Display the result
    document.getElementById('calorie-result').innerHTML = "You require " + bmr.toFixed() + " calories per day!";
}
