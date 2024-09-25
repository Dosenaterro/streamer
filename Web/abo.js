
// Affichage des données sélectionnées
document.addEventListener('DOMContentLoaded', function() {
    const ecran1 = document.getElementById('ecran1');
    const ecran2 = document.getElementById('ecran2');
    const prixM = document.getElementById('prixM');
    const tarifs = document.querySelectorAll('.tarif');

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
    const av7 = document.getElementById('avantage7');

    const essentiel = document.getElementById('essentiel');
    const vip = document.getElementById('vip');
    vip.style.opacity = '0.25';
    essentiel.style.opacity = '0.25';

    const ava1 = 'Accès illimité à tous les contenus';
    const ava2 = 'Streaming en 4k Ultra'
    const ava3 = 'Compte personnalisé';
    const ava4 = 'Compte sécurisé';
    const ava5 = 'Possibilité de télécharger';
    const ava6 = 'Support technique';
    const ava7 = 'Support client prioritaire';

    av1.textContent = ava1;
    av2.textContent = ava2;
    av3.textContent = ava3;
    av4.textContent = ava4;
    av5.textContent = ava5;
    av6.textContent = ava6;
    av7.textContent = ava7;

    av1.style.display = 'none';
    av2.style.display = 'none';
    av3.style.display = 'none';
    av4.style.display = 'none';
    av5.style.display = 'none';
    av6.style.display = 'none';
    av7.style.display = 'none';

    const avs = [av1, av2, av3, av4, av5, av6, av7];

    essentiel.addEventListener('click', () => {
        av3.style.opacity = '0.25';
        av4.style.opacity = '0.25';
        av5.style.opacity = '0.25';
        av7.style.display = 'none';
        });

        // Changer les tarifs
    function selection() {
        const prixM = document.getElementById('prixM');

        function updatePrixM() {
            const styledTarif = document.querySelector('.tarif[style*="background-color: rgb(146, 0, 172)"]');
            if (styledTarif) {
                const priceElement = styledTarif.querySelector('[id^="prix0"]');
                if (priceElement) {
                    prixM.textContent = priceElement.textContent;
                }
            }
        };

        essentiel.addEventListener('click', () => {
            essentiel.style.opacity = '1';
            vip.style.opacity = '0.25';
            prixM.innerHTML = '';

            ecran1.style.backgroundColor = '';
            ecran1.style.color = '';
            ecran2.style.backgroundColor = '';
            ecran2.style.color = '';

            avs.forEach(a => {
                a.style.display = 'block';
                avs[2,4].style.opacity = '0.25';
            });

            tarifs.forEach(t => {
                t.style.backgroundColor = '';
                t.style.color = '';
            });

            ecran1.addEventListener('click', () => {
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
            }); 

            ecran2.addEventListener('click', () => {
                ecran2.style.backgroundColor = '#9200AC';
                ecran2.style.color = '#FFF';
                ecran1.style.backgroundColor = '';
                ecran1.style.color = '';

                avs.forEach(a => {
                    avs[2,4].style.opacity = '0.25';
                });
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
            });
        });
        vip.addEventListener('click', () => {
            essentiel.style.opacity = '0.25';
            vip.style.opacity = '1';
            prixM.innerHTML = '';
    
            av3.style.opacity = '1';
            av4.style.opacity = '1';
            av5.style.opacity = '1';
            av6.style.display = 'none';

            avs.forEach(a => {
                a.style.display = 'block';
            });

            ecran1.style.backgroundColor = '';
            ecran1.style.color = '';
            ecran2.style.backgroundColor = '';
            ecran2.style.color = '';

            tarifs.forEach(t => {
                t.style.backgroundColor = '';
                t.style.color = '';
            });

            pStyle.forEach(p => {
                p.style.display = 'none';
            });
        
            ecran1.addEventListener('click', () => {
                ecran1.style.backgroundColor = '#9200AC';
                ecran1.style.color = '#FFF';
                ecran2.style.backgroundColor = '';
                ecran2.style.color = '';
    
                // Affichage des prix
                pStyle.forEach(p => {
                    p.style.display = 'block';
                });
    
                // Réinitialisation des prix S1e
                const prix3 = '3 000';
                const prix6 = '6 000';
                const prix9 = '9 000';
                const prix15 = '15 000';
                const prix18 = '18 000';
                const prix36 = '36 000';

                const prices3 = [prix3,prix6, prix9, prix15, prix18, prix36];
                pStyle.forEach((p, index) => {
                    p.textContent = prices3[index];
                });
                const avs = [av4, av5];
                avs.forEach(av => {
                    av.style.opacity = '0.25';
                });
                updatePrixM();
            }); 
            ecran2.addEventListener('click', () => {
                ecran2.style.backgroundColor = '#9200AC';
                ecran2.style.color = '#FFF';
                ecran1.style.backgroundColor = '';
                ecran1.style.color = '';
    
                av3.style.opacity = '1';
                av4.style.opacity = '1';
                av5.style.opacity = '1';
                // Affichage des prix
                pStyle.forEach(p => {
                    p.style.display = 'block';
                });
    
                // Réinitialisation des prix S2e
                const prix5 = '5 000';
                const prix10 = '10 000';
                const prix15 = '15 000';
                const prix25 = '25 000';
                const prix30 = '30 000';
                const prix60 = '60 000';

                const prices4 = [prix5, prix10, prix15, prix25, prix30, prix60];
                pStyle.forEach((p, index) => {
                    p.textContent = prices4[index];
                }); updatePrixM();
            }); 

            essentiel.addEventListener('click', () => {
                ecran1.style.backgroundColor = '';
                ecran1.style.color = '';
                ecran2.style.backgroundColor = '';
                ecran2.style.color = '';
    
                tarifs.forEach(t => {
                    t.style.backgroundColor = '';
                    t.style.color = '';
                });    
        }); 
    });
        };
    selection();
    
    // Prix correspondant à l'écran sélectionné
      tarifs.forEach(tarif => {
          tarif.addEventListener('click', () => {
              // Reset styles for all tarifs
              tarifs.forEach(t => {
                  t.style.backgroundColor = '';
                  t.style.color = '';
              });

              // Set style for clicked tarif
              tarif.style.backgroundColor = '#9200AC';
              tarif.style.color = '#FFF';

              // Find the price element within the clicked tarif
              const priceElement = tarif.querySelector('[id^="prix0"]');
              if (priceElement) {
                  const selectedPrice = priceElement.textContent;
                  prixM.textContent = selectedPrice;

                  localStorage.setItem('selectedPrice', selectedPrice);
              }
          });

      });
  });
document.addEventListener('DOMContentLoaded', selection);