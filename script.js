let user_age;
let user_weight;
let user_height;
let user_sex;

const output = document.getElementById('output');

function storeUserInfo(){
    user_age = document.getElementById('age').value;//document.querySelector("#id");
    user_weight = document.getElementById('weight').value; //lb
    user_height = document.getElementById('height').value; //cm
    user_sex = document.querySelector('input[name="gender"]:checked').value;

    user_weight = user_weight / 2.205; //convert to kg
    
    alert("Age: " + user_age + " Weight: " + user_weight + " Height: " + user_height + " Sex:" + user_sex);
    
    //output.textContent = "TESTING DIV";
    //let diet = document.getElementById('diet');
    outputMeals(user_age, user_weight, user_height, user_sex);
    
}   

function outputMeals(age, weight, height, gender){
    let recomended_nutrients = calculateMealNutrients(age, weight, height, gender);
    let outputRecomended = document.getElementById("recomended");
    outputRecomended.textContent = "Cals:" + recomended_nutrients.calories + " Carbs: " + recomended_nutrients.carbs + " Protein: " + recomended_nutrients.protein + " Fats: " + recomended_nutrients.fats;
    //output = "TESTING DIV";//"Recommendation: " + recomended_nutrients;
    //document.write("Age: " + age + " Weight: " + weight + " Height: " + height + " Sex:" + gender);
    //document.write("Cals:" + recomended_nutrients.calories + " Carbs: " + recomended_nutrients.carbs + " Protein: " + recomended_nutrients.protein + " Fats: " + recomended_nutrients.fats);
    let plan = createMealPlan(recomended_nutrients);

    let outputPlan = document.getElementById("plan");

    outputPlan.textContent = plan;//+ meals[plan].calories;


}

//recomended nutrients for one meal (divided by 3)
function calculateMealNutrients(age, weightKg, heightCm, gender) {
    let bmr;

    if (gender.toLowerCase() === 'male') {
        bmr = 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * age);
    } else { // assuming only male and female options for simplicity
        bmr = 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * age);
    }

    let tdee = bmr * 1.55;
    let mealcalories = tdee / 3;

    let proteinG = weightKg * 1.6;
    let proteinCal = proteinG * 4;
    let proteinGPerMeal = proteinG / 3;
    let fatsCal = 0.3 * mealcalories;
    let fatsG = fatsCal / 9;
    let fatsGPerMeal = fatsG / 3;
    let carbsCal = mealcalories - (proteinCal + fatsCal);
    let carbsG = carbsCal / 4;
    let carbsGPerMeal = carbsG / 3;

    return {
        calories: mealcalories,
        protein: proteinGPerMeal,
        carbs: carbsGPerMeal,
        fats: fatsGPerMeal
    };

}
// [
//     { name: "Chicken", calories: 200, protein: 25, carbs: 0, fats: 10 },
//     { name: "Rice", calories: 180, protein: 3, carbs: 45, fats: 1 },
//     { name: "Burger", calories: 300, protein: 10, carbs: 50, fats: 5 },
// ];
const meals = [
    {
     "name": "Crinkle Cut Fries",
     "calories": 159.31,
     "protein": 2.26,
     "fats": 7.25,
     "carbs": 20.37
    },
    {
     "name": "Grilled Chicken",
     "calories": 176.99,
     "protein": 32.5,
     "fats": 4.23,
     "carbs": 0
    },
    {
     "name": "Grilled Beef Burger",
     "calories": 265.66,
     "protein": 18.58,
     "fats": 21.24,
     "carbs": 0
    },
    {
     "name": "Brioche Bun",
     "calories": 271,
     "protein": 1.43,
     "fats": 3.57,
     "carbs": 50
    },
    {
     "name": "Hamburger Bun",
     "calories": 220,
     "protein": 4,
     "fats": 6,
     "carbs": 40
    },
    {
     "name": "Veggie Burger Patty",
     "calories": 158,
     "protein": 9.17,
     "fats": 4.17,
     "carbs": 22.5
    },
    {
     "name": "Hoagie Roll",
     "calories": 244,
     "protein": 6.41,
     "fats": 3.21,
     "carbs": 46.15
    },
    {
     "name": "White Cheddar Mac & Cheese",
     "calories": 264.62,
     "protein": 12.09,
     "fats": 14.35,
     "carbs": 21.15
    },
    {
     "name": "Quinoa",
     "calories": 226.81,
     "protein": 8,
     "fats": 3.34,
     "carbs": 40
    },
    {
     "name": "Brown Rice",
     "calories": 88.21,
     "protein": 2.08,
     "fats": 0.52,
     "carbs": 19.18
    },
    {
     "name": "Yum Yum Sauce",
     "calories": 183.91,
     "protein": 0.14,
     "fats": 18.1,
     "carbs": 7.88
    },
    {
     "name": "AP Stir Fry Sauce",
     "calories": 116.54,
     "protein": 4.44,
     "fats": 5.56,
     "carbs": 14.07
    },
    {
     "name": "Tamari Ginger Kale",
     "calories": 124.8,
     "protein": 4.71,
     "fats": 9.93,
     "carbs": 7.6
    },
    {
     "name": "Creamy Piri-Piri Sauce",
     "calories": 232.15,
     "protein": 0.25,
     "fats": 22.25,
     "carbs": 7.5
    },
    {
     "name": "Carrots",
     "calories": 41.35,
     "protein": 0.93,
     "fats": 0.24,
     "carbs": 9.58
    },
    {
     "name": "Garlic",
     "calories": 149.1,
     "protein": 6.36,
     "fats": 0.5,
     "carbs": 33.06
    },
    {
     "name": "Tomato",
     "calories": 16.9,
     "protein": 0.68,
     "fats": 0,
     "carbs": 3.38
    },
    {
     "name": "Red Bell Peppers",
     "calories": 30.83,
     "protein": 0.99,
     "fats": 0.3,
     "carbs": 6.03
    },
    {
     "name": "Green Bell Peppers",
     "calories": 20.08,
     "protein": 0.86,
     "fats": 0.17,
     "carbs": 4.64
    },
    {
     "name": "Tofu",
     "calories": 105.95,
     "protein": 12.94,
     "fats": 4.71,
     "carbs": 3.53
    },
    {
     "name": "Broccoli",
     "calories": 28.2,
     "protein": 2.98,
     "fats": 0.35,
     "carbs": 5.06
    },
    {
     "name": "Spinach",
     "calories": 23.02,
     "protein": 2.86,
     "fats": 0.39,
     "carbs": 3.64
    },
    {
     "name": "Mushroom",
     "calories": 23.83,
     "protein": 3.57,
     "fats": 0,
     "carbs": 3.57
    },
    {
     "name": "Snow Peas",
     "calories": 83.39,
     "protein": 5.56,
     "fats": 0,
     "carbs": 13.89
    },
    {
     "name": "Cauliflower",
     "calories": 29,
     "protein": 2.35,
     "fats": 0,
     "carbs": 4.71
    },
    {
     "name": "Vegan Chicken Pieces",
     "calories": 192.22,
     "protein": 15.82,
     "fats": 7.91,
     "carbs": 15.82
    },
    {
     "name": "Red Lentil Pasta",
     "calories": 163.54,
     "protein": 11.44,
     "fats": 0,
     "carbs": 28.6
    },
    {
     "name": "Cavatappi Pasta",
     "calories": 196.09,
     "protein": 6.86,
     "fats": 0.98,
     "carbs": 41.16
    },
    {
     "name": "Steamed Broccoli",
     "calories": 28.2,
     "protein": 2.98,
     "fats": 0.35,
     "carbs": 5.06
    },
    {
     "name": "Garlic Bread",
     "calories": 275,
     "protein": 7.5,
     "fats": 7.5,
     "carbs": 42.5
    },
    {
     "name": "Alfredo Sauce",
     "calories": 138.47,
     "protein": 3.3,
     "fats": 11.2,
     "carbs": 5.27
    },
    {
     "name": "Vanilla Yogurt",
     "calories": 19.88,
     "protein": 0.99,
     "fats": 0,
     "carbs": 4.12
    },
    {
     "name": "Strawberry Yogurt ",
     "calories": 24.61,
     "protein": 0.99,
     "fats": 0,
     "carbs": 3.95
    },
    {
     "name": "Cottage Cheese",
     "calories": 24.64,
     "protein": 0.99,
     "fats": 0,
     "carbs": 3.95
    },
    {
     "name": "Mandarin Oranges",
     "calories": 16.01,
     "protein": 0.2,
     "fats": 0,
     "carbs": 4.6
    },
    {
     "name": "Watermelon",
     "calories": 22.41,
     "protein": 0.28,
     "fats": 0,
     "carbs": 5.88
    },
    {
     "name": "Pineapple",
     "calories": 12.51,
     "protein": 0.25,
     "fats": 0,
     "carbs": 3.25
    },
    {
     "name": "Grapes",
     "calories": 19.33,
     "protein": 0.2,
     "fats": 0.04,
     "carbs": 5.07
    },
    {
     "name": "Cantaloupe",
     "calories": 9.44,
     "protein": 0.24,
     "fats": 0.05,
     "carbs": 2.28
    },
    {
     "name": "Strawberries",
     "calories": 9.1,
     "protein": 0.19,
     "fats": 0.08,
     "carbs": 2.15
    },
    {
     "name": "Blueberries",
     "calories": 16.01,
     "protein": 0.2,
     "fats": 0,
     "carbs": 3.8
    },
    {
     "name": "Blackberries",
     "calories": 12.11,
     "protein": 0.39,
     "fats": 0.14,
     "carbs": 2.69
    },
    {
     "name": "Hard Cooked Eggs",
     "calories": 78,
     "protein": 6.67,
     "fats": 5.56,
     "carbs": 1.11
    },
    {
     "name": "American Cheese",
     "calories": 49.98,
     "protein": 2.5,
     "fats": 4.5,
     "carbs": 1
    },
    {
     "name": "Provolone Cheese",
     "calories": 49.98,
     "protein": 3.5,
     "fats": 3.99,
     "carbs": 0
    },
    {
     "name": "Swiss Cheese",
     "calories": 53.23,
     "protein": 3.77,
     "fats": 3.89,
     "carbs": 0.75
    },
    {
     "name": "Ham",
     "calories": 30.02,
     "protein": 5,
     "fats": 0.75,
     "carbs": 0.5
    },
    {
     "name": "Turkey",
     "calories": 25.02,
     "protein": 5,
     "fats": 0.25,
     "carbs": 0.5
    },
    {
     "name": "Salami",
     "calories": 110.07,
     "protein": 5,
     "fats": 5,
     "carbs": 1
    },
    {
     "name": "Pepperoni",
     "calories": 126.08,
     "protein": 5.6,
     "fats": 10.921,
     "carbs": 0.84
    },
    {
     "name": "Pickle Chips",
     "calories": 17.64,
     "protein": 0,
     "fats": 0,
     "carbs": 0
    },
    {
     "name": "Banana Peppers",
     "calories": 5,
     "protein": 0,
     "fats": 0,
     "carbs": 1
    },
    {
     "name": "Onions",
     "calories": 11.11,
     "protein": 0.31,
     "fats": 0.03,
     "carbs": 2.62
    },
    {
     "name": "Lettuce",
     "calories": 4.94,
     "protein": 0.33,
     "fats": 0,
     "carbs": 0.66
    },
    {
     "name": "Spinach",
     "calories": 6.45,
     "protein": 0.8,
     "fats": 0.11,
     "carbs": 1.02
    },
    {
     "name": "Broccoli",
     "calories": 7.9,
     "protein": 0.83,
     "fats": 0.1,
     "carbs": 1.42
    },
    {
     "name": "Chocolate Chip Cookie",
     "calories": 120.75,
     "protein": 1.54,
     "fats": 6.14,
     "carbs": 16.3
    },
    {
     "name": "Apple Dulce de Leche Cupcake",
     "calories": 530.73,
     "protein": 5.75,
     "fats": 19.5,
     "carbs": 82.61
    },
    {
     "name": "Orange Dreamsicle Cupcake",
     "calories": 0.32,
     "protein": 0,
     "fats": 0.02,
     "carbs": 0.04
    },
    {
     "name": "Lucky Charms Cereal",
     "calories": 492.89,
     "protein": 4.88,
     "fats": 14.4,
     "carbs": 86.67
    },
    {
     "name": "Marinara Sauce",
     "calories": 50.45,
     "protein": 1.49,
     "fats": 0.41,
     "carbs": 9.09
    },
    {
     "name": "Zucchini",
     "calories": 16.73,
     "protein": 1.21,
     "fats": 0.32,
     "carbs": 3.11
    }
   ];


function createMealPlan(target) {
    let current = { calories: 0, protein: 0, carbs: 0, fats: 0 };
    let plan = [];
    let list = [];

    while (current.calories < target.calories && current.protein < target.protein && current.carbs < target.carbs && current.fats < target.fats) {
        let bestMeal = null;
        let bestScore = Infinity;

        for (const meal of meals) {
            const score = Math.abs(target.calories - (current.calories + meal.calories)) / (100.87) +
                          Math.abs(target.protein - (current.protein + meal.protein)) / (4.08) +
                          Math.abs(target.carbs - (current.carbs + meal.carbs)) / (3.78) +
                          Math.abs(target.fats - (current.fats + meal.fats)) / (12.545);

            list.push(score);
            list.push(meal.name);
            if (score < bestScore) {
                bestScore = score;
                bestMeal = meal;
            }
        }

        if (bestMeal) {
            plan.push(bestMeal.name);
            current.calories += bestMeal.calories;
            current.protein += bestMeal.protein;
            current.carbs += bestMeal.carbs;
            current.fats += bestMeal.fats;
        } else {
            break; // No suitable meal found to add, break out
        }
    }

    //document.write("Plan: " + plan);
    return plan;
}

// const targetIntake = { calories: 500, protein: 28, carbs: 45, fats: 11 };
// const plan = createMealPlan(targetIntake);
// console.log(plan);
