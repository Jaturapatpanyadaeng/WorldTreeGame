<?php 
    session_start();
    include('server.php');

    $errors = array();
    if (isset($_POST['reg_user'])){ 
        $username = mysqli_real_escape_string($conn, $_POST['username']);
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $password_1 = mysqli_real_escape_string($conn, $_POST['password_1']);
        $password_2 = mysqli_real_escape_string($conn, $_POST['password_2']);
        if(empty($username)){
            array_push($errors, "ท่านไม่ได้กรอก Username");
            $_SESSION['error'] = "ท่านไม่ได้กรอก Username";
                header("location: form-register.php");
        }
        if(empty($email)){
            array_push($errors, "ท่านไม่ได้กรอก Email");
            $_SESSION['error'] = "ท่านไม่ได้กรอก Email";
            header("location: form-registe.php");
        }
        if(empty($password_1)){
            array_push($errors, "ท่านไม่ได้กรอก Password");
            $_SESSION['error'] = "ท่านไม่ได้กรอก Password";
            header("location: form-registe.php");
        }
        if($password_1 != $password_2){
            array_push($errors, "Password ไม่ตรงกัน");
            $_SESSION['error'] = "Password ไม่ตรงกัน";
            header("location: form-registe.php");
        }

        $user_check_query = "SELECT * FROM user WHERE username = '$username' OR email = '$email'";
        $query = mysqli_query($conn, $user_check_query);
        $result = mysqli_fetch_assoc($query);

        if($result){
            if ($result['username'] === $username){
                array_push($errors, "Username already exists");
                $_SESSION['error'] = "Username ซ้ำ";
              header("location: form-registe.php");
            }
            if ($result['email'] === $email){
                array_push($errors, "Email already exists");
                $_SESSION['error'] = "email ซ้ำ";
               header("location: form-registe.php");
            }
        }

        if(count($errors) == 0){
        $password = md5($password_1);

        $sql = "INSERT INTO user (username, email, password) VALUES('$username','$email','$password')";
        mysqli_query($conn, $sql);

        $_SESSION['username'] = $username;
        $_SESSION['success'] = "You are now logged logged in";
        header('location: lobby.php');
        }
        else{
            array_push($errors, "wrong username/password combination");
                $_SESSION['error'] = "รหัสผิดพลาดโปรดลองอีกครั้ง";
                header("location: form-register.php");
        }
    }


?>