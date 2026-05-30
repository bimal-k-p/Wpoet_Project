<?php

$strHostName    = "localhost";
$strDatabseName = "wpoets_projects";
$conn = mysqli_connect($strHostName,"root","",$strDatabseName);

function getDetails() {
    global $conn;
    $arrCategory = [];
    $query = "SELECT * FROM 
    category ct
    LEFT JOIN tbl_slider sd 
    ON sd.fk_bint_category_id = ct.pk_category_id
    WHERE ct.chr_document_status ='N' AND sd.chr_document_status ='N'
    ORDER BY ct.pk_category_id,sd.pk_slider_id";

    $result = mysqli_query($conn, $query);
    
    while ($row = mysqli_fetch_assoc($result)) {
        $arrCategory[$row['vchr_category']][]= array(
            "intSliderId" => $row['pk_slider_id'],
            "strImage" => $row['vchr_image_name'],
            "strDescription" => $row['vchr_description'],
            "strTitle" => $row['vchr_title']
        );
    }
    return $arrCategory;
}

?>