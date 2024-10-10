
// Affichage des données sélectionnées
document.addEventListener('DOMContentLoaded', function() {
    const ecran1 = document.getElementById('ecran1');
    const ecran2 = document.getElementById('ecran2');
    const prixM = document.getElementById('prixM');
    const tarifs = document.querySelectorAll('.tarif');
    const next = document.getElementById('step-btn');
    const nEcran = document.getElementById('n-appareils');

    let ecranSelected = false;

    function enableTarifSelection() {
        tarifs.forEach(tarif => {
            tarif.addEventListener('click', () => {
                if (ecranSelected) {
                    // Reset styles for all tarifs
                    tarifs.forEach(t => {
                        t.style.backgroundColor = '';
                        t.style.color = '';
                    });

                    // Set style for clicked tarif
                    tarif.style.backgroundColor = '#9200AC';
                    tarif.style.color = '#FFF';

                    // Update prixM
                    const priceElement = tarif.querySelector('[id^="prix0"]');
                    if (priceElement) {
                        prixM.textContent = priceElement.textContent;
                        next.style.display = 'block';
                        localStorage.setItem('selectedPrice', priceElement.textContent);
                    }
                }
            });
        });
    }

    const p1 = document.getElementById('prix01');
    const p2 = document.getElementById('prix02');
    const p3 = document.getElementById('prix03');
    const p4 = document.getElementById('prix04');
    const p5 = document.getElementById('prix05');
    const p6 = document.getElementById('prix06');

    const pStyle = [
        p1, p2, p3, p4, p5, p6
    ]
    pStyle.forEach(p => {
        p.style.display = 'block';
    });


    // Les avantages
    const av1 = document.getElementById('avantage1');
    const av2 = document.getElementById('avantage2');
    const av3 = document.getElementById('avantage3');
    const av4 = document.getElementById('avantage4');
    const av5 = document.getElementById('avantage5');
    const av6 = document.getElementById('avantage6');
    const avs = [av1, av2, av3, av4, av5, av6];

    const titre = localStorage.getItem('titre');

    /* MyCanal */
    if (titre === 'MyCanal') {
        ///Avantages///
        av1.textContent = 'Chaînes de télévision';
        av2.textContent = 'Films et séries';
        av3.textContent = 'Streaming en 4k et HD';
        av4.textContent = 'Événements sportifs';
        av5.textContent = 'Support technique';

        avs.forEach(av => {
            av.style.display = 'block';
        });
        ///Prix///
        ecran1.addEventListener('click', () => {
            ecranSelected = true;
            ecran1.style.backgroundColor = '#9200AC';
            ecran1.style.color = '#FFF';
            ecran2.style.backgroundColor = '';
            ecran2.style.color = '';
    
            tarifs.forEach(t => {
                t.style.backgroundColor = '';
                t.style.color = '';
            });
    
            prixM.innerHTML = '';
            next.style.display = 'none';
    
            // Affichage des prix
            pStyle.forEach(p => {
                p.style.display = 'block';
            });
    
            // Réinitialisation des prix S1e
            const prix2 = '2 000';
            const prix4 = '4 000';
            const prix5_5 = '5 500';
            const prix9 = '9 000';
            const prix11 = '11 000';
            const prix25 = '25 000';
    
            const prices1 = [prix2, prix4, prix5_5, prix9, prix11, prix25];
            pStyle.forEach((p, index) => {
                p.textContent = prices1[index];
            }); updatePrixM();
            localStorage.setItem('selectedEcran', '1');
        });
    
        ecran2.addEventListener('click', () => {
            ecranSelected = true;
            ecran2.style.backgroundColor = '#9200AC';
            ecran2.style.color = '#FFF';
            ecran1.style.backgroundColor = '';
            ecran1.style.color = '';
    
            tarifs.forEach(t => {
                t.style.backgroundColor = '';
                t.style.color = '';
            });
    
            prixM.innerHTML = '';
            next.style.display = 'none';
    
            // Affichage des prix
            prixM.innerHTML = '';
            pStyle.forEach(p => {
                p.style.display = 'block';
            });
    
            // Réinitialisation des prix S2e
            const prix3 = '3 000';
            const prix5 = '5 000';
            const prix6_5 = '6 500';
            const prix10 = '10 000';
            const prix13 = '13 000';
            const prix27 = '27 000';
    
            const prices2 = [prix3, prix5, prix6_5, prix10, prix13, prix27];
            pStyle.forEach((p, index) => {
                p.textContent = prices2[index];
            }); updatePrixM();
            localStorage.setItem('selectedEcran', '2');
        }); 
    
    
    } else if (titre === 'Spotify') {  
        const ecran1 = document.getElementById('ecran1');
        ecran1.textContent = 'Afficher les Prix';

        document.getElementById('ecran2').style.display = 'none';
        document.querySelector('li#sEcran').style.display = 'none';

        ///Avantages///
        av1.textContent = 'Musique';
        av2.textContent = 'Podcasts';
        av3.textContent = 'Ecoute en HD';
        av4.textContent = 'Support technique';
        avs.forEach(a => {
                a.style.display = 'block';
            });


        tarifs.forEach(t => {
            t.style.backgroundColor = '';
            t.style.color = '';
        });

        ///Prix///
        prixM.innerHTML = '';
        next.style.display = 'none';    

        ecran1.addEventListener('click', () => {
            ecranSelected = true;
            ecran1.style.backgroundColor = '#9200AC';
            ecran1.style.color = '#FFF';
            ecran2.style.backgroundColor = '';
            ecran2.style.color = '';
    
            tarifs.forEach(t => {
                t.style.backgroundColor = '';
                t.style.color = '';
            });
    
            prixM.innerHTML = '';
            next.style.display = 'none';
    
            // Affichage des prix
            pStyle.forEach(p => {
                p.style.display = 'block';
            });
    
            // Réinitialisation des prix S1e
            const prix2 = '2 000';
            const prix4 = '3 500';
            const prix5_5 = '5 000';
            const prix9 = '8 500';
            const prix11 = '10 000';
            const prix25 = '20 000';
    
            const prices1 = [prix2, prix4, prix5_5, prix9, prix11, prix25];
            pStyle.forEach((p, index) => {
                p.textContent = prices1[index];
            }); updatePrixM();
        });
    } else if (titre === 'Crunchyroll') {
        ///Avantages///
        av1.textContent = 'Mangas';
        av2.textContent = 'Animés'
        av3.textContent = 'Films et séries';
        av4.textContent = 'Streaming en HD';
        av5.textContent = 'Possibilité de télécharger';
        av6.textContent = 'Support technique';

        ///Prix///
        ecran1.addEventListener('click', () => {
            ecranSelected = true;
            ecran1.style.backgroundColor = '#9200AC';
            ecran1.style.color = '#FFF';
            ecran2.style.backgroundColor = '';
            ecran2.style.color = '';
    
            tarifs.forEach(t => {
                t.style.backgroundColor = '';
                t.style.color = '';
            });
    
            prixM.innerHTML = '';
            next.style.display = 'none';
    
            // Affichage des prix
            pStyle.forEach(p => {
                p.style.display = 'block';
            });
    
            // Réinitialisation des prix S1e
            const prix2 = '2 000';
            const prix4 = '4 000';
            const prix5_5 = '5 500';
            const prix9 = '9 000';
            const prix11 = '11 000';
            const prix25 = '25 000';
    
            const prices1 = [prix2, prix4, prix5_5, prix9, prix11, prix25];
            pStyle.forEach((p, index) => {
                p.textContent = prices1[index];
            }); updatePrixM();
            localStorage.setItem('selectedEcran', '1');
        });
    
        ecran2.addEventListener('click', () => {
            ecranSelected = true;
            ecran2.style.backgroundColor = '#9200AC';
            ecran2.style.color = '#FFF';
            ecran1.style.backgroundColor = '';
            ecran1.style.color = '';
    
            tarifs.forEach(t => {
                t.style.backgroundColor = '';
                t.style.color = '';
            });
    
            prixM.innerHTML = '';
            next.style.display = 'none';
    
            // Affichage des prix
            prixM.innerHTML = '';
            pStyle.forEach(p => {
                p.style.display = 'block';
            });
    
            // Réinitialisation des prix S2e
            const prix3 = '3 000';
            const prix5 = '5 000';
            const prix6_5 = '6 500';
            const prix10 = '10 000';
            const prix13 = '13 000';
            const prix27 = '27 000';
    
            const prices2 = [prix3, prix5, prix6_5, prix10, prix13, prix27];
            pStyle.forEach((p, index) => {
                p.textContent = prices2[index];
            }); updatePrixM();
            localStorage.setItem('selectedEcran', '2');
        });
    
    
    }

    function updatePrixM() {
        const styledTarif = document.querySelector('.tarif[style*="background-color: rgb(146, 0, 172)"]');
        if (styledTarif) {
            const priceElement = styledTarif.querySelector('[id^="prix0"]');
            if (priceElement) {
                prixM.textContent = priceElement.textContent;
            }
        }
    };

    enableTarifSelection();
});
document.addEventListener('DOMContentLoaded', selection);