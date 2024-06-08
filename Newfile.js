document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
$(document).ready(function() {
    // Adding images after the content for "The Impact of Cell Phones on Mental Health"
    $("main:contains('The Impact of Cell Phones on Mental Health')").append('<img src="cell_phone_mental_health.jpg" alt="Cell Phone and Mental Health">');

    // Adding images after the content for "Enhancing Mental Health Through Yoga and Meditation"
    $("main:contains('Enhancing Mental Health Through Yoga and Meditation')").append('<img src="yoga_meditation_mental_health.jpg" alt="Yoga and Meditation for Mental Health">');

    // Adding images after the content for "Boosting Mental Health Through Healthy Lifestyle Habits"
    $("main:contains('Boosting Mental Health Through Healthy Lifestyle Habits')").append('<img src="healthy_lifestyle_mental_health.jpg" alt="Healthy Lifestyle for Mental Health">');
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple validation
    if (username === "admin" && password === "password") {
        // Successful login
        document.getElementById("message").innerHTML = "Login successful!";
        document.getElementById("message").style.color = "green";
        // Redirect to dashboard or another page
        // window.location.href = "dashboard.html";
    } else {
        // Failed login
        document.getElementById("message").innerHTML = "Invalid username or password.";
        document.getElementById("message").style.color = "red";
    }
});
