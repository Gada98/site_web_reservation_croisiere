<?PHP 
$con=new PDO('mysql:host=127.0.0.1;dbname=bateau','root',''); 
if(isset($_POST))
{
    if(!empty($_POST['first_name'])and !empty($_POST['email'])and !empty($_POST['password']))
    {
    
    $first_name=htmlspecialchars($_POST['first_name']);
    $email=htmlspecialchars($_POST['email']);
    $password=htmlspecialchars($_POST['password']);
    if(strlen($password)>7)
    {
        if(filter_var($email, FILTER_VALIDATE_EMAIL))
        {
            $req=$con->prepare('INSERT INTO client(first_name,email,password) VALUES(?,?,?)');
            $req->execute(ARRAY($first_name,$email,$password));
            $info='connect !';
        }else
        {
            $info='email n\'est pas valid';   
        }
    }else
    {
        $info='password small !';      } 
    }
    else
    {
    $info='Un des champs est vide !';   }
    echo $info;
}  
?>
