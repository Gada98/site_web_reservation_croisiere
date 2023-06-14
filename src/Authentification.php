<?php
include_once 'connexion.php';
$email=$_POST['email'];
$pwd=$_POST['password'];

if($email!= "" && $pwd!= "")
    {
        $requete = "SELECT count(*) FROM client where 
             email = '".$email."' and mot de passe = '".$pwd."' ";
        $reponse= mysqli_query($link,$requete);
        
       
        if($reponse!=0) 
        {
         header("Location:index.html");
		}
		else
		{
			echo"error:v";
	    }
	}
 ?>