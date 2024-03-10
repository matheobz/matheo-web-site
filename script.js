// Défilement ------------------------------------------------------------------------------------------------
// let isAtTop = true; // Variable pour suivre l'état de la position

// window.addEventListener('wheel', function (event) {
//     if (event.deltaY > 0) { // Détection du défilement vers le bas
//         if (isAtTop) {
//             window.scrollBy(0, 1000); // Ajustez la valeur pour augmenter la vitesse
//         }
//         isAtTop = false;
//     } 
// });

// L'écouteur de scroll pour réinitialiser l'état lorsque l'utilisateur revient en haut de la page
// window.addEventListener('scroll', function () {
//     if (window.scrollY === 0) {
//         isAtTop = true;
//     }
//     else { 
//         isAtTop = false;
//     }
// });




// NAV BAR --------------------------------------------------------------------------------------------
// Fonction pour détecter le défilement de la page
// window.addEventListener('scroll', function () {
//     var navbar = document.querySelector('.navbar');
//     if (window.scrollY > 0) {
//         // L'utilisateur a défilé vers le bas
//         navbar.classList.add('scrolled');
//     } else {
//         // L'utilisateur est tout en haut de la page
//         navbar.classList.remove('scrolled');
//     }
// });


// BACKGROUD ORB DEBUT --------------------------------------------------------------------------------------------

// BACKGROUD ORB FIN --------------------------------------------------------------------------------------------