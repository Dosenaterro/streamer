// Définition des titles
let titleCrunchyroll, titleNetflix, titleMc, titlePrime, titleSpotify;

function setTitles(crunchyroll, netflix, mc, prime, spotify) {
    titleCrunchyroll = 'Crunchyroll';
    titleNetflix = 'Netflix';
    titleMc = 'MyCanal';
    titlePrime = 'Prime';
    titleSpotify = 'Spotify';
}
setTitles();

// Définition des caractéristiques en fonsction des prix (Vidéo)
let deux, trois, quatre, cinq, cinq5, six5, neuf, dix, onze, treize, v5, v7;

function setCaracVid() {
    deux = '1 écran - 1 mois';
    trois = '2 écrans - 1 mois';
    quatre = '1 écran - 2 mois';
    cinq = '2 écrans - 2 mois';
    cinq5 = '1 écran - 3 mois';
    six5 = '2 écrans - 3 mois';
    neuf = '1 écran - 5 mois';
    dix = '2 écrans - 5 mois';
    onze = '1 écran - 6 mois';
    treize = '2 écrans - 6 mois';
    v5 = '1 écran - 12 mois';
    v7 = '2 écrans - 12 mois';
}
setCaracVid();

// Définition des caractéristiques en fonsction des prix (Audio)
let deuxSpot, troisSpot, cinqSpot, huitSpot, dixSpot, v0;

function setCaracAud() {
    deuxSpot = '1 mois';
    troisSpot = '2 mois';
    cinqSpot = '3 mois';
    huitSpot = '5 mois';
    dixSpot = '6 mois';
    v0 = '12 mois';
}
setCaracAud();

// Définition des prix (Vidéo)
let devise, prix2, prix3, prix4, prix5, prix5_5, prix6_5, prix9, prix10, prix11, prix13, prix25, prix27;

function setPrixVid() {
    devise = 'XOF';
    prix2 = '2 000';
    prix3 = '3 000';
    prix4 = '4 000';
    prix5 = '5 000';
    prix5_5 = '5 500';
    prix6_5 = '6 500';
    prix9 = '9 000';
    prix10 = '10 000';
    prix11 = '11 000';
    prix13 = '13 000';
    prix25 = '25 000';
    prix27 = '27 000';
}
setPrixVid();

// Définition des prix (Audio)
let prix2Spot, prix3Spot, prix5Spot, prix8Spot, prix10Spot, prix20Spot;
function setPrixAud() {
    prix2Spot = '2 000';
    prix3Spot = '3 500';
    prix5Spot = '5 000';
    prix8Spot = '8 500';
    prix10Spot = '10 000';
    prix20Spot = '20 000';
}
setPrixAud();


//Exportation des fonctions

// Configuration de la carte
// Titres
document.addEventListener('DOMContentLoaded', function() {
    function datas(titre, mois, ecran, prix) {
        const titleElements = document.querySelectorAll('.title-crun');
        titleElements.forEach(element => {
            element.textContent = titre;
        });
        
        const descriptionElements = document.querySelectorAll('.description-crun');
        descriptionElements.forEach(element => {
            element.textContent = `${mois} mois sur ${ecran} écran${ecran > 1 ? 's' : ''}`;
        });
        
        const prixElements = document.querySelectorAll('.prix-crun');
        prixElements.forEach(element => {
            element.textContent = prix;
        });
    }

    // Identification des titles dans le fichier HTML
    const titleCrun = document.querySelectorAll('h3.title-crun');
    const titleNet = document.querySelectorAll('h3.title-net');
    const titleMyc = document.querySelectorAll('h3.title-mc');
    const titlePv = document.querySelectorAll('h3.title-prime');
    const titleSpot = document.querySelectorAll('h3.title-spot');
    // Ajout des titles dans le fichier HTML
    titleCrun.forEach(title => {
        title.textContent = titleCrunchyroll;
    });
    titleNet.forEach(title => {
        title.textContent = titleNetflix;
    });
    titleMyc.forEach(title => {
        title.textContent = titleMc;
    });
    titlePv.forEach(title => {
        title.textContent = titlePrime;
    });
    titleSpot.forEach(title => {
        title.textContent = titleSpotify;
    });
});

// Description des prix
document.addEventListener('DOMContentLoaded', function prix() {
    // Identification des descriptions dans le fichier HTML

    // Vidéo
    const desc2 = document.querySelectorAll('p.description2');
    const desc3 = document.querySelectorAll('p.description3');
    const desc4 = document.querySelectorAll('p.description4');
    const desc5 = document.querySelectorAll('p.description5');
    const desc5_5 = document.querySelectorAll('p.description5_5');
    const desc6_5 = document.querySelectorAll('p.description6_5');
    const desc9 = document.querySelectorAll('p.description9');
    const desc10 = document.querySelectorAll('p.description10');
    const desc11 = document.querySelectorAll('p.description11');
    const desc13 = document.querySelectorAll('p.description13');
    const desc25 = document.querySelectorAll('p.description25');
    const desc27 = document.querySelectorAll('p.description27');

    // Audio
    const desc2Spot = document.querySelectorAll('p.description2Spot');
    const desc3Spot = document.querySelectorAll('p.description3Spot');
    const desc5Spot = document.querySelectorAll('p.description5Spot');
    const desc8Spot = document.querySelectorAll('p.description8Spot');
    const desc10Spot = document.querySelectorAll('p.description10Spot');
    const desc20Spot = document.querySelectorAll('p.description20Spot');

    // Ajout des descriptions dans le fichier HTML

    // Vidéo
    desc2.forEach(desc => {
        desc.textContent = deux;
    });
    desc3.forEach(desc => {
        desc.textContent = trois;
    });
    desc4.forEach(desc => {
        desc.textContent = quatre;
    });
    desc5.forEach(desc => {
        desc.textContent = cinq;
    });
    desc5_5.forEach(desc => {
        desc.textContent = cinq5;
    });
    desc6_5.forEach(desc => {
        desc.textContent = six5;
    });
    desc9.forEach(desc => {
        desc.textContent = neuf;
    });
    desc10.forEach(desc => {
        desc.textContent = dix;
    });
    desc11.forEach(desc => {
        desc.textContent = onze;
    });
    desc13.forEach(desc => {
        desc.textContent = treize;
    });
    desc25.forEach(desc => {
        desc.textContent = v5;
    });
    desc27.forEach(desc => {
        desc.textContent = v7;
    });

    // Audio
    desc2Spot.forEach(desc => {
        desc.textContent = deuxSpot;
    });
    desc3Spot.forEach(desc => {
        desc.textContent = troisSpot;
    });
    desc5Spot.forEach(desc => {
        desc.textContent = cinqSpot;
    });
    desc8Spot.forEach(desc => {
        desc.textContent = huitSpot;
    });
    desc10Spot.forEach(desc => {
        desc.textContent = dixSpot;
    });
    desc20Spot.forEach(desc => {
        desc.textContent = v0;
    });
});

// Prix
document.addEventListener('DOMContentLoaded', function() {
    // Identification des prix dans le fichier HTML

    // Vidéo
    const price2 = document.querySelectorAll('p.prix2');
    const price3 = document.querySelectorAll('p.prix3');
    const price4 = document.querySelectorAll('p.prix4');
    const price5 = document.querySelectorAll('p.prix5');
    const price5_5 = document.querySelectorAll('p.prix5_5');
    const price6_5 = document.querySelectorAll('p.prix6_5');
    const price9 = document.querySelectorAll('p.prix9');
    const price10 = document.querySelectorAll('p.prix10');
    const price11 = document.querySelectorAll('p.prix11');
    const price13 = document.querySelectorAll('p.prix13');
    const price25 = document.querySelectorAll('p.prix25');
    const price27 = document.querySelectorAll('p.prix27');
    const price2Spot = document.querySelectorAll('p.prix2Spot');
    const price3Spot = document.querySelectorAll('p.prix3Spot');
    const price5Spot = document.querySelectorAll('p.prix5Spot');
    const price8Spot = document.querySelectorAll('p.prix8Spot');
    const price10Spot = document.querySelectorAll('p.prix10Spot');
    const price20Spot = document.querySelectorAll('p.prix20Spot');

    // Ajout des prix dans le fichier HTML
    const prix = document.querySelectorAll('p.devise');

    prix.forEach(prix => {
        prix.textContent = devise;
    });

    // Vidéo
    price2.forEach(price => {
        price.textContent = prix2;
    });
    price3.forEach(price => {
        price.textContent = prix3;
    });
    price4.forEach(price => {
        price.textContent = prix4;
    });
    price5.forEach(price => {
        price.textContent = prix5;
    });
    price5_5.forEach(price => {
        price.textContent = prix5_5;
    });
    price6_5.forEach(price => {
        price.textContent = prix6_5;
    });
    price9.forEach(price => {
        price.textContent = prix9;
    });
    price10.forEach(price => {
        price.textContent = prix10;
    });
    price11.forEach(price => {
        price.textContent = prix11;
    });
    price13.forEach(price => {
        price.textContent = prix13;
    });
    price25.forEach(price => {
        price.textContent = prix25;
    });
    price27.forEach(price => {
        price.textContent = prix27;
    });

    // Audio
    price2Spot.forEach(price => {
        price.textContent = prix2Spot;
    });
    price3Spot.forEach(price => {
        price.textContent = prix3Spot;
    });
    price5Spot.forEach(price => {
        price.textContent = prix5Spot;
    });
    price8Spot.forEach(price => {
        price.textContent = prix8Spot;
    });
    price10Spot.forEach(price => {
        price.textContent = prix10Spot;
    });
    price20Spot.forEach(price => {
        price.textContent = prix20Spot;
    });
});


/* Configuration des bouttons de navigation */
function retour() {
    window.history.back();
}
function suivant() {
    window.history.forward();
}
let isMenuOpen = false; // Add this line at the top of your script

function toggleMenu() {
    const menu = document.getElementById('menu-respo-content');
    const menuIcon = document.getElementById('menu-respo');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    menu.style.transitionDuration = '0.5s';
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
        menuIcon.src = 'icon/menuOff.svg';
    } else {
        menuIcon.src = 'icon/menuOn.svg';
    }
}

function datas(titre, mois, ecran, prix) {
    // Use a different variable name to avoid conflict
    const itemTitle = titre; 
    localStorage.setItem('titre', itemTitle);
    // You can also save the other parameters if needed
    localStorage.setItem('mois', mois);
    localStorage.setItem('ecran', ecran);
    localStorage.setItem('prix', prix);
}