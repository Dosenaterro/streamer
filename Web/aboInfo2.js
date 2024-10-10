document.addEventListener('DOMContentLoaded', function() {
        const selectedPrice = localStorage.getItem('selectedPrice');
        const selectedMonths = localStorage.getItem('selectedMonths');
        const selectedMonth = localStorage.getItem('selectedMonth');
        const selectedEcran = localStorage.getItem('selectedEcran');
        const selectedType = localStorage.getItem('selectedType');

        const titres = localStorage.getItem('titre');
        if(titres !== 'Netflix') {
            document.getElementById('edit').href = 'abo2.html';
        }
        
        const montant = document.getElementById('montant');
        montant.textContent = selectedPrice;

        const nMois = document.getElementById('nMois');
        nMois.textContent = selectedMonth;

        const nEcran = document.getElementById('nEcran');
        nEcran.textContent = selectedEcran;
        
        const forfait = document.getElementById('forfait');
        const forfaits = document.getElementById('forfaits');

        if (titres === 'Netflix') {
            forfait.textContent = selectedType;

        } else if (titres === 'Spotify') {
            nEcran.textContent = '';
            document.getElementById('tde').style.display = 'none';
            document.getElementById('tdf').style.display = 'none';

        } else if (titres === 'Crunchyroll') {
             forfait.textContent = '';
             forfaits.textContent = '';
        } else if (titres === 'MyCanal') {
            forfaits.textContent = '';
        }

        const recDetails = document.getElementById('recDetails');
        const modesPaie = document.getElementById('modesPaie');
        const details = document.getElementById('details');
        const paiement = document.getElementById('paiement');
        const suivant = document.getElementById('step-btn');

        paiement.style.opacity = '0.25';
        modesPaie.style.display = 'none';
        suivant.style.display = 'none';

        paiement.addEventListener('click', function() {
            details.style.opacity = '0.25';
            paiement.style.opacity = '1';
            recDetails.style.display = 'none';
            modesPaie.style.display = 'block';
        });

        details.addEventListener('click', function() {
            paiement.style.opacity = '0.25';
            details.style.opacity = '1';
            modesPaie.style.display = 'none';
            recDetails.style.display = 'block';
        });

        const checkbox = document.getElementById('checkbox');
        checkbox.addEventListener('click', function() {
            suivant.style.display = checkbox.checked ? 'block' : 'none';
        });

        function expiration(months) {
            const today = new Date();
            const finDate = new Date(today);

            const debut = document.getElementById('debut');
            const fin = document.getElementById('fin');

            debut.textContent = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

            finDate.setMonth(today.getMonth() + parseInt(selectedMonth));
            fin.textContent = finDate.getDate() + '/' + (finDate.getMonth() + 1) + '/' + finDate.getFullYear();
        }

        const titre = localStorage.getItem('titre');
        if (titre) {
            const titreElement = document.getElementById('type');
            titreElement.textContent = titre;
        }

        expiration(selectedMonths);
});