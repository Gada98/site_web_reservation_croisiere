<?php

$link = mysqli_connect("localhost","root", "","bateau");

if ($link)
{
echo "<p>connexion réussie</p>";}
else
echo "<p>Erreur de connexion</p>";
?>
