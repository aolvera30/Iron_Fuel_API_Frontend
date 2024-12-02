document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("inputForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Gather form data
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            // Replace with your actual backend URL
            const response = await fetch("https://iron-fuel-api.onrender.com/api/calculate_macros", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Redirect to the macro overview page or display results
                const result = await response.json();
                console.log("Success:", result);
                window.location.href = "./macro_overview.html"; // Redirect to results page
            } else {
                // Handle errors
                const error = await response.json();
                alert(error.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Network error. Please try again.");
        }
    });
});

