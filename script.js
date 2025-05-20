document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
});


const buttons = document.querySelectorAll(".accordion-button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const parent = button.closest(".accordion-item");
        const content = parent.querySelector(".accordion-collapse");
        const isActive = content.classList.contains("show");

        // Close all
        document.querySelectorAll(".accordion-collapse").forEach(c => c.classList.remove("show"));
        document.querySelectorAll(".accordion-button").forEach(b => b.classList.remove("active"));

        // Toggle current
        if (!isActive) {
            content.classList.add("show");
            button.classList.add("active");
        }
    });
});


//navbar links
const sections = document.querySelectorAll('.content-section');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
        }
    });
}, {
    threshold: 0.6
});

sections.forEach(section => observer.observe(section));



// quentity management



function increase() {
    const qty = document.getElementById("quantity");
    const current = parseInt(qty.value);
    if (current < 10) {
        qty.value = current + 1;
    } 
}

function decrease() {
    const qty = document.getElementById("quantity");
    const current = parseInt(qty.value);
    if (current > 1) {
        qty.value = current - 1;
    }
}