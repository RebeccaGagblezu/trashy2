<?php
    include_once('../connection.php')

    if(isset($_POST['save']))
			{

				$fname =$_POST['first_name'];
				$lname =$_POST['last_name'];
				$email =$_POST['email'];
				$mobile =$_POST['mobile'];
				$pname =$_POST['prod_name'];
				$pcat =$_POST['prod_cat'];
				// $pimage =$_POST['prod_image'];
				
$sql ="INSERT INTO upload (firstname,lastname,phone,email,prodname,prodcat) VALUES ('$fname','$lname','$mobile','$email','$pname','$pcat')";
				$result= $db->query($sql);

// $sql1 ="INSERT INTO product(prod_name,prod_cat,mobile) VALUES ('$pname','$pcat','$mobile')";
// 				$result1= $db->query($sql1);

				if($result){
					header("Location: index.html");
				}
				else{
					echo "SOMETHING WENT WRONG";

				}

			 }

?>