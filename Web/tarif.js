const price = 2000; // Store the numeric value
const currency = "F CFA";

const formattedPrice = `${price.toLocaleString('fr-FR')} ${currency}`;

const priceElement = document.getElementById('prix_2');
if (priceElement) {
    priceElement.textContent = formattedPrice;
} else {
    console.error("Element with id 'prix_2' not found");
}document.getElementById('prix_2').textContent = prix2;