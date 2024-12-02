document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Replace with your actual backend URL for fetching macros
        const response = await fetch("https://iron-fuel-api.onrender.com/api/get_macros");

        if (response.ok) {
            const macros = await response.json();

            // Update the page with macro data
            document.querySelector("span[data-calories]").textContent = macros.calories || "N/A";
            document.querySelector("span[data-protein]").textContent = macros.protein || "N/A";
            document.querySelector("span[data-carbs]").textContent = macros.carbs || "N/A";
            document.querySelector("span[data-fats]").textContent = macros.fats || "N/A";
        } else {
            console.error("Failed to fetch macros:", response.statusText);
            alert("Failed to fetch macro data. Please try again.");
        }
    } catch (error) {
        console.error("Error fetching macros:", error);
        alert("Network error. Please try again.");
    }
});

