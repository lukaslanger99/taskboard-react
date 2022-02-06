<?php
    require('requestHandler.php');
    $rh = new RequestHandler();

    // header('Content-Type: application/json');
    echo 'hallo';
    // echo json_encode("holla");
    exit;
    switch ($_GET['action']) {
        case 'value':
            # code...
            break;
        
        default:
            # code...
            break;
    }