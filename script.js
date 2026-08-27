document.addEventListener("DOMContentLoaded", () => {

    /* HERO INTRO */

    const hero = document.querySelector(".hero-content");
    const image = document.querySelector(".hero-image");

    if (hero) {
        hero.style.opacity = "0";
        hero.style.transform = "translateY(25px)";

        setTimeout(() => {
            hero.style.transition = "1s ease";
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";
        }, 150);
    }

    if (image) {
        image.style.opacity = "0";
        image.style.transform = "scale(.96)";

        setTimeout(() => {
            image.style.transition = "1.1s ease";
            image.style.opacity = "1";
            image.style.transform = "scale(1)";
        }, 50);
    }


    /* SCROLL REVEAL */

    const elements = document.querySelectorAll(
        ".section-head, .identity-text, .terminal, " +
        ".card, .archive-item, .big-terminal, " +
        ".network-box, .final"
    );

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting)
                    return;

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.1
        }
    );

    elements.forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition =
            "opacity .8s ease, transform .8s ease";

        observer.observe(element);

    });


    /* TERMINAL */

    const input = document.getElementById("terminalInput");
    const output = document.getElementById("terminal-output");

    const commands = {

        help:
`AVAILABLE COMMANDS

  help          display commands
  identity      display identity
  system        system information
  network       network status
  archive       digital archive
  capabilities  capabilities
  clear         clear terminal`,

        identity:
`IDENTITY

  designation : ASTOVIDHAT
  classification : DIGITAL IDENTITY
  status : ACTIVE
  verification : AUTHORIZED`,

        system:
`SYSTEM

  core : ASTOVIDHAT
  environment : WEB
  interface : TERMINAL
  status : ONLINE
  security : ACTIVE`,

        network:
`NETWORK

  node : 0xASTO
  status : CONNECTED
  channel : TELEGRAM
  gateway : READY`,

        archive:
`ARCHIVE

  [001] IDENTITY INITIALIZED
  [002] NETWORK CREATED
  [003] CONTINUOUS EVOLUTION`,

        capabilities:
`CAPABILITIES

  DEVELOPMENT
  TECHNOLOGY
  RESEARCH
  DIGITAL MEDIA`,

        clear: ""
    };


    function printCommand(command) {

        if (!output)
            return;

        const block = document.createElement("div");

        block.style.marginBottom = "18px";
        block.style.whiteSpace = "pre-wrap";

        const title = document.createElement("div");

        title.style.color = "#39ff88";
        title.textContent =
            "ASTOVIDHAT@NETWORK:~$ " + command;

        block.appendChild(title);

        if (command === "clear") {
            output.innerHTML = "";
            return;
        }

        if (commands[command]) {

            const text = document.createElement("div");

            text.style.color = "#9aa9a0";
            text.style.marginTop = "7px";

            text.textContent = commands[command];

            block.appendChild(text);

        } else {

            const error = document.createElement("div");

            error.style.color = "#66756d";
            error.style.marginTop = "7px";

            error.textContent =
                "command not found: " +
                command +
                "  |  type 'help'";

            block.appendChild(error);
        }

        output.appendChild(block);

        output.parentElement.scrollTop =
            output.parentElement.scrollHeight;
    }


    if (input) {

        input.addEventListener("keydown", event => {

            if (event.key !== "Enter")
                return;

            const command =
                input.value.trim().toLowerCase();

            if (!command)
                return;

            printCommand(command);

            input.value = "";

        });

        document
            .querySelector(".terminal-screen")
            ?.addEventListener("click", () => {
                input.focus();
            });

    }


    /* HERO IMAGE PARALLAX */

    const frame =
        document.querySelector(".image-frame");

    if (
        frame &&
        window.innerWidth > 900
    ) {

        document.addEventListener("mousemove", event => {

            const x =
                (event.clientX / window.innerWidth - .5) * 5;

            const y =
                (event.clientY / window.innerHeight - .5) * 5;

            frame.style.transform =
                `translate(${x}px, ${y}px)`;

        });

    }


    /* CURRENT YEAR */

    document
        .querySelectorAll("[data-year]")
        .forEach(element => {
            element.textContent =
                new Date().getFullYear();
        });

});
