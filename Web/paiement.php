<?php
if(isset($_POST["submit"])) {
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        $to = "doprudltw@gmail.com";
        $subject = "File Upload";
        $message = "A file has been uploaded.";
        $headers = "From: sender@example.com";
        
        $file = $target_file;
        $content = chunk_split(base64_encode(file_get_contents($file)));
        $uid = md5(uniqid(time()));
        
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";
        
        $body = "--".$uid."\r\n";
        $body .= "Content-type:text/plain; charset=iso-8859-1\r\n";
        $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
        $body .= $message."\r\n\r\n";
        $body .= "--".$uid."\r\n";
        $body .= "Content-Type: application/octet-stream; name=\"".basename($file)."\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= "Content-Disposition: attachment; filename=\"".basename($file)."\"\r\n\r\n";
        $body .= $content."\r\n\r\n";
        $body .= "--".$uid."--";
        
        if (mail($to, $subject, $body, $headers)) {
            echo "Le fichier a été envoyé avec succès.";
        } else {
            echo "L'envoi du fichier a échoué.";
        }
        } else {
            echo "Désolé, une erreur s'est produite lors du téléchargement du fichier.";
        }
    }
?>
