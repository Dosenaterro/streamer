document.getElementById('submitId').addEventListener('click', function () {
    const messages = document.getElementById('id').value.toUpperCase();
    const message = 'Id: ${messages}';
    
    const whatsappNumber = '2250708314338';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});

function votreId() {
    const nom = document.getElementById('name').value;
    const prenom = document.getElementById('prenom').value;
    const numWa = document.getElementById('NumWa').value;

    const iD = document.getElementById('votreId');
    iD.textContent = `${nom[0].toUpperCase()}${prenom[0].toUpperCase()}${numWa.slice(-4)}`;
}

function submitForm() {
    // Collect form data
    const name = document.getElementById('name').value;
    const prenom = document.getElementById('prenom').value;
    const numWa = document.getElementById('NumWa').value;
    const numPaie = document.getElementById('numPaie').value;

    // Display collected data
    alert(`Nom: ${name}\nPrénom: ${prenom}\nNuméro WA: ${numWa}\nNuméro de paiement: ${numPaie}`);

    // Optionally, clear the form
    document.getElementById('infoForm').reset();
    document.getElementById('votreId').textContent = ''; // Clear the ID display
}
