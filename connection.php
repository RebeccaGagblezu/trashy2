<?php 	

		$server="localhost";
		$username="root";
		$password="";
		$dbname="trashycash";

			$db= new mysqli($server,$username,$password,$dbname)
			or die("error connecting to the database: ".mysql_connect_error());




 ?>