
// Affichage des données sélectionnées
document.addEventListener('DOMContentLoaded', function() {
    const ecran1 = document.getElementById('ecran1');
    const ecran2 = document.getElementById('ecran2');
    const prixM = document.getElementById('prixM');
    const tarifs = document.querySelectorAll('.tarif');

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

    const ava1 = 'Chaînes de télévision';
    const ava2 = 'Films et séries';
    const ava3 = 'Streaming en 4k et HD';
    const ava4 = 'Compte personnalisé';
    const ava5 = 'Événements sportifs';
    const ava6 = 'Support technique';

    av1.textContent = ava1;
    av2.textContent = ava2;
    av3.textContent = ava3;
    av4.textContent = ava4;
    av5.textContent = ava5;
    av6.textContent = ava6;

    function updatePrixM() {
        const styledTarif = document.querySelector('.tarif[style*="background-color: rgb(146, 0, 172)"]');
        if (styledTarif) {
            const priceElement = styledTarif.querySelector('[id^="prix0"]');
            if (priceElement) {
                prixM.textContent = priceElement.textContent;
            }
        }
    };

    ecran1.addEventListener('click', () => {
        ecranSelected = true;
        ecran1.style.backgroundColor = '#9200AC';
        ecran1.style.color = '#FFF';
        ecran2.style.backgroundColor = '';
        ecran2.style.color = '';

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
    }); updatePrixM();

    ecran2.addEventListener('click', () => {
        ecranSelected = true;
        ecran2.style.backgroundColor = '#9200AC';
        ecran2.style.color = '#FFF';
        ecran1.style.backgroundColor = '';
        ecran1.style.color = '';

        // Affichage des prix
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
    }); updatePrixM();

    enableTarifSelection();
});
document.addEventListener('DOMContentLoaded', selection);