// Numéros de transaction
const numOm = '+225 07 00 44 2416'
const numWave = '+225 07 00 44 2416'
const numMtn = '+225 05 00 59 0762'
const numMoov = '+225 01 61 38 9569'
const numPush = '+225 05 85 49 6275'
const numDjamo = '+225 07 01 23 7720'

// Distinction sur la méthode
let selectedMethod = null; // To track the currently selected method

function method(value, element) {
    if (selectedMethod === element) {
        element.classList.remove('selected');
        resetText(element); // Reset text to original
        selectedMethod = null; // Reset selected method
        return; // Exit the function
    } else if (selectedMethod) {
        // Reset previously selected method
        selectedMethod.classList.remove('selected');
        resetText(selectedMethod); // Reset text to original
    }

    // Change the style of the clicked element
    element.classList.add('selected');
    updateText(value, element); // Update text with corresponding number
    selectedMethod = element; // Update selected method
}

function updateText(value, element) {
    const textElement = document.getElementById('numP');
    const methods = document.querySelectorAll('.method');

    switch (value) {
        case 'om':
            textElement.textContent = numOm;
            break;
        case 'wave':
            textElement.textContent = numWave;
            break;
        case 'mtn':
            textElement.textContent = numMtn;
            break;
        case 'moov':
            textElement.textContent = numMoov;
            break;
        case 'push':
            textElement.textContent = numPush;
            break;
        case 'djamo':
            textElement.textContent = numDjamo;
            break;
    }
}

function resetText(element) {
    const originalText = {
        om: 'Orange Money',
        wave: 'Wave',
        mtn: 'MTN Money',
        moov: 'Moov (Flooz) Money',
        push: 'Push',
        djamo: 'Djamo'
    };
    const textElement = element.querySelector('p');
    const value = element.id.replace('Paie', ''); // Extract the value from the id
    textElement.textContent = originalText[value];
}
resetText();