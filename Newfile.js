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
