<?php

include 'conn.php';

if(isset($_POST['done'])){

    $username = $_POST['username'];
    $password = $_POST['password'];
    $q = "INSERT INTO `crudtable`(`username`, `password`) VALUES ('$username', '$password')";

    $query = mysqli_query($con, $q);

    header('location: insert.php');
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Insertion</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>

<body style="background-color: #c8c7c5">

    <div class="col-lg-6 m-auto">
        <form method="POST">
            <div class="card mt-5 p-2">
                <div class="card-header bg-dark">
                    <h1 class="text-white text-center">Insert Operation</h1>
                </div>
                <label>Username: </label>
                <input type="text" name="username" class="form-control" required autocomplete="off"> <br>

                <label>Password: </label>
                <input type="text" name="password" class="form-control" required autocomplete="off"> <br>

                <button type="submit" class="btn btn-primary" name="done">Submit</button>
            </div>
        </form>
    </div>



    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous">
    </script>
</body>

</html>