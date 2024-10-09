
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

    const titre = localStorage.getItem('titre');
      function setupAvantages(avantages) {
          avantages.forEach((text, index) => {
              const avElement = document.getElementById(`avantage${index + 1}`);
              if (avElement) {
                  avElement.textContent = text;
              }
          });
      }

      function setupPrices(prices) {
          pStyle.forEach((p, index) => {
              p.textContent = prices[index];
              p.style.display = 'block';
          });
      }

      function setupEcranListener(ecran, otherEcran, prices) {
          ecran.addEventListener('click', () => {
              ecranSelected = true;
              ecran.style.backgroundColor = '#9200AC';
              ecran.style.color = '#FFF';
              otherEcran.style.backgroundColor = '';
              otherEcran.style.color = '';

              tarifs.forEach(t => {
                  t.style.backgroundColor = '';
                  t.style.color = '';
              });

              prixM.innerHTML = '';
              next.style.display = 'none';

              setupPrices(prices);
              updatePrixM();
          });
      }

      if (titre === 'MyCanal') {
          setupAvantages([
              'Chaînes de télévision',
              'Films et séries',
              'Streaming en 4k et HD',
              'Événements sportifs',
              'Support technique'
          ]);

          const prices1 = ['2 000', '4 000', '5 500', '9 000', '11 000', '25 000'];
          const prices2 = ['3 000', '5 000', '6 500', '10 000', '13 000', '27 000'];

          setupEcranListener(ecran1, ecran2, prices1);
          setupEcranListener(ecran2, ecran1, prices2);

      } else if (titre === 'Spotify') {
          nEcran.style.display = 'none';

          setupAvantages([
              'Musique',
              'Podcasts',
              'Ecoute en HD',
              'Support technique'
          ]);

          const prices = ['2 000', '3 500', '5 000', '8 500', '10 000', '20 000'];
          setupPrices(prices);

          prixM.innerHTML = '';
          next.style.display = 'none';


      } else if (titre === 'Crunchyroll') {
          setupAvantages([
              'Mangas',
              'Animés',
              'Films et séries',
              'Streaming en HD',
              'Possibilité de télécharger',
              'Support technique'
          ]);

          const prices1 = ['2 000', '4 000', '5 500', '9 000', '11 000', '25 000'];
          const prices2 = ['3 000', '5 000', '6 500', '10 000', '13 000', '27 000'];

          setupEcranListener(ecran1, ecran2, prices1);
          setupEcranListener(ecran2, ecran1, prices2);
      }

      updatePrixM();
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