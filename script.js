
const formulaire = document.getElementById("contactForm");

formulaire.addEventListener("submit", function(event) {

    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (nom.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    document.getElementById("confirmation").textContent =
        "Merci " + nom + " ! Votre formulaire de démonstration est validé.";

    formulaire.reset();

});

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function() {

    menu.classList.toggle("active");

    const menuOuvert = menu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", menuOuvert);

    menuToggle.setAttribute(
        "aria-label",
        menuOuvert ? "Fermer le menu" : "Ouvrir le menu"
    );

    menuToggle.textContent = menuOuvert ? "✕" : "☰";

});

// Fermer le menu après avoir choisi une rubrique
const liensMenu = menu.querySelectorAll("a");

liensMenu.forEach(function(lien) {

    lien.addEventListener("click", function() {
        menu.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Ouvrir le menu");
    });

});

const sections = document.querySelectorAll("section");

const observateur = new IntersectionObserver(function(entrees) {
    entrees.forEach(function(entree) {
        if (entree.isIntersecting) {
            entree.target.classList.add("visible");
        }
    });
});

sections.forEach(function(section) {
    section.classList.add("section-animation");
    observateur.observe(section);
});
