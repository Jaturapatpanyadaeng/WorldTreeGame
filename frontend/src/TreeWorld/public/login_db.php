<?php
    session_start();
    include('server.php');

    $errors =array();

    if (isset($_POST['login_user'])){
        $username = mysqli_real_escape_string($conn, $_POST['username']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);
    }

        if(empty($username)){
            array_push($errors, "ท่านไม่ได้กรอก Username");
            $_SESSION['error'] = "ท่านไม่ได้กรอก Username";
                header("location: form-login.php");
        }
        if(empty($password)){
            array_push($errors, "ท่านไม่ได้กรอก Password");
            $_SESSION['error'] = "ท่านไม่ได้กรอก Password";
                header("location: form-login.php");
        }

        if(count($errors) == 0){
        $password = md5($password);
        $query = "SELECT * FROM user WHERE username = '$username' AND password = '$password'";
        $result = mysqli_query($conn, $query);

            if(mysqli_num_rows($result) == 1){
                $_SESSION['username'] = $username;
                $_SESSION['success'] = "Your are now logged in";
                header("location: lobby.php");
            }
            else{
                array_push($errors, "wrong username/password combination");
                $_SESSION['error'] = "รหัสผิดพลาดโปรดลองอีกครั้ง";
                header("location: form-login.php");
            }
        }

?>