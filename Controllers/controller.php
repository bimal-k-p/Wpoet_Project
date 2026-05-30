<?php

require_once("../Models/tableData.php");

$arrDetail = getDetails();


if (isset($_GET['action'])) {

    switch ($_GET['action']) {
        case "getSlides":
            header('Content-Type: application/json');
            echo json_encode($arrDetail);
            break;
    }
}

?>