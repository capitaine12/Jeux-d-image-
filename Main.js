// Définissez les correspondances nom-animal/image
const images = {
    "lion": "lio.jpg",
    "girafe": "girafe.jpg",
    "zèbre": "zèbre.jpg",
    // Ajoutez d'autres correspondances ici
};

// Écoutez l'événement de soumission du formulaire

const form = document.getElementById("animalForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Empêche la soumission du formulaire par défaut
const nom = document.getElementById("nom").value.toLowerCase();

const image = images[nom];

    if (image) {
        
        const imageContainer = document.getElementById("image");
        
        imageContainer.innerHTML = `<img src="${image}" alt="${nom}">`;
        
    } else {
        
        alert("Animal non trouvé !");
    }
});
