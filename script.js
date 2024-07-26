document.addEventListener('DOMContentLoaded', () => {
    const introTexts = document.querySelectorAll(".intro p");
    let currentIndex = 0;

    function showNextText() {
        introTexts.forEach((text, index) => {
            text.classList.remove("active");
            text.style.display = "none";
        });

        introTexts[currentIndex].style.display = "inline-block";
        introTexts[currentIndex].classList.add("active");

        currentIndex = (currentIndex + 1) % introTexts.length;

        setTimeout(showNextText, 3000); // Adjust the delay as needed
    }

    showNextText();


    
    setTimeout(() => {
        const overlay = document.getElementById('overlay');
        overlay.classList.add('fade-out');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 750); // Match this time with your transition duration in CSS
    }, 1750);
});

function toggleMenu() {
    const sidebar = document.getElementById('sidebar-menu');
    sidebar.classList.toggle('show');
}
