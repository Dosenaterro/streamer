<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $prenom = $_POST['prenom'];
    $NumWa = $_POST['NumWa'];
    $numPaie = $_POST['numPaie'];
    
    // Generate the ID
    $votreId = strtoupper(substr($name, 0, 1) . substr($prenom, 0, 1) . substr($NumWa, -4));

    // Prepare the response data
    $responseData = [
        'name' => $name,
        'prenom' => $prenom,
        'NumWa' => $NumWa,
        'numPaie' => $numPaie,
        'votreId' => $votreId
    ];

    echo json_encode($responseData);
} else {
    echo json_encode(['error' => 'Le formulaire n\'a pas été soumis correctement.']);
}
?>