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

function calculateBMI(){

    let bmiHeight = parseFloat(document.getElementById('bmi-height').value);
    let bmiWeight = parseFloat(document.getElementById('bmi-weight').value);
    let userValidAge = "";
    const ageRadios = document.getElementsByName("valid-age");

    for(let i = 0; i < ageRadios.length; i++){
        if (ageRadios[i].checked){
            userValidAge = ageRadios[i].value;
        }
    }

    let bmi = 0;

    if (userValidAge === "yes"){
        bmi = (bmiWeight / (bmiHeight * bmiHeight)) * 10000; // Calculate BMI
        let finalBmi = bmi.toFixed(1);

        if(finalBmi <= 18.5){
          document.getElementById('bmi-result').innerHTML = "BMI - " + finalBmi + " You are underweight!";
        }else if(finalBmi >= 18.6 && finalBmi <= 24.9){
          document.getElementById('bmi-result').innerHTML = "BMI - " + finalBmi + " Don't worry, it is normal!";
        }else if(finalBmi >= 25.0 && finalBmi <= 29.9){
          document.getElementById('bmi-result').innerHTML = "BMI - " + finalBmi + " You are overweight!";
        }else{
          document.getElementById('bmi-result').innerHTML = "BMI - " + finalBmi + " It is obesity!";
        }
    } else if (userValidAge === "no"){
        document.getElementById('bmi-result').innerHTML = "Sorry, we cannot assure the correct result based on your age."
    } else{
        document.getElementById('bmi-result').innerHTML = "Please select your gender!";
    }

 

    // formula - [weight (kg) / height (cm) / height (cm)] x 10,000
    // document.getElementById('bmi-result').innerHTML = bmiHeight + " " +bmiWeight +" " + bmiAge + " " + userValidAge + bmi.toFixed();

}