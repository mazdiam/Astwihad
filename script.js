const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
            }
        });
    },
    {
        threshold: 0.08
    }
);

sections.forEach(section => {
    observer.observe(section);
});


document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const href = link.getAttribute("href");

        if (!href || href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


window.addEventListener("load", () => {

    document.querySelectorAll(".hero-content").forEach(element => {
        element.style.opacity = "1";
    });

});
