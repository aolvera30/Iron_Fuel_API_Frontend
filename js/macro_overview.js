document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Fetch macros from backend
        const response = await fetch("https://iron-fuel-api.onrender.com/api/calculate_macros");

        if (response.ok) {
            const data = await response.json();
            const macros = data.macros;
            const foodChart = data.food_chart;

            // Update the page with macro data
            document.getElementById("calories").textContent = macros.calories || "N/A";
            document.getElementById("protein").textContent = macros.protein || "N/A";
            document.getElementById("carbs").textContent = macros.carbs || "N/A";
            document.getElementById("fats").textContent = macros.fats || "N/A";

            // Display the food recommendations dynamically
            const foodCategories = ["Proteins", "Complex Carbs", "Fats", "Vegetables", "Fruits"];
            foodCategories.forEach(category => {
                const list = document.getElementById(category.toLowerCase().replace(/ /g, "_"));
                foodChart[category].forEach(food => {
                    const listItem = document.createElement("li");
                    listItem.textContent = food;
                    list.appendChild(listItem);
                });
            });

        } else {
            console.error("Failed to fetch macros:", response.statusText);
            alert("Failed to fetch macro data. Please try again.");
        }
    } catch (error) {
        console.error("Error fetching macros:", error);
        alert("Network error. Please try again.");
    }
});

