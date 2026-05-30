var arrSlides = new Array();
var blnMobileView = false;
var blnHiddenDetails = true;
var arrTemp = {
    Learning: [
        {
            strImage: "DL-Learning-1.jpg",
            strTitle: "DIGITAL LEARNING INFRASTRUCTURE",
            strDescription: "Usability enhancement and Training for Transaction Portal for Customers"
        }
    ],
    Technology: [
        {
            strImage: "DL-Technology_1.jpg",
            strTitle: "DIGITAL TRANSFORMATION",
            strDescription: "Innovative Technology Platforms for Business Efficiency"
        }
    ],
    Communication: [
        {
            strImage: "DL-Communication_1.jpg",
            strTitle: "CUSTOMER ENGAGEMENT",
            strDescription: "Integrated Communication Channels for Better Customer Reach"
        }
    ]
}

$(document).ready(function(){

    fnLoadDetails();
    if(window.innerWidth <= 768){
        blnMobileView = true
    }

    $(".clsPagination").click(function () {
        var strImageId = parseInt($(this).attr("attr_id"));
        var strCategory = $(this).attr("attr_category");
        fnLoadSlide(strImageId,strCategory);
    })
    $(".clsMenuTabs").click(function () {
        var strCategory = $(this).attr("attr_tabCategory");
        var blnOtherMenu = $(this).children('.clsTabActive ').hasClass('clsActiveMenu');
        fnShowActiveTab(strCategory);
        if (blnHiddenDetails && blnMobileView) {
            fnShowMenu(strCategory);
        } else if(!blnHiddenDetails && blnMobileView && !blnOtherMenu ) {
            fnShowMenu(strCategory);
        } else if (blnMobileView) {
            fnHideMenu(strCategory);
        }
    })
});

function fnLoadDetails() {
    $.ajax({
        url: "../Controllers/controller.php",
        method: "GET",
        data: {
            action: "getSlides"
        },
        dataType: "json",
        success: function(response) {
            arrSlides = response;
            fnInitialiseDatas()
        }

    });
}

function fnInitialiseDatas() {
    if (Object.keys(arrSlides).length < 3) {
        arrSlides = arrTemp;
    }
    let index = 0
    while (index < 3) {
        let i = index+1;
        $("#divMenuTabs"+i).attr("attr_tabCategory",Object.keys(arrSlides)[index]);
        $("#divMenuTabs"+i+" .clsMenuText p").html(Object.keys(arrSlides)[index]);
        index++;
    }
    
    fnShowActiveTab(Object.keys(arrSlides)[0])
    if (blnMobileView) {
        fnHideMenu();
    }
}

function fnLoadSlide(strImageId,strCategory) {
    $(".clsPagination").removeClass("active");
    $("#spnPagination"+strImageId).addClass("active");
    if (blnMobileView) {
        $('#divImageSlider').css('background-image', 'url(../Assets/' + arrSlides[strCategory][strImageId-1].strImage + ')');
    } else {
        $("#divImageConnected img").attr('src',"../Assets/"+arrSlides[strCategory][strImageId-1].strImage);
    }
    $("#divImageHeader span").html(arrSlides[strCategory][strImageId-1].strTitle);
    $("#divImageDescription a").html(arrSlides[strCategory][strImageId-1].strDescription);
}

function fnShowActiveTab(strCategory){
    $(".clsTabActive").removeClass("clsActiveMenu");
    $("[attr_tabCategory="+strCategory+"] .clsTabActive").addClass("clsActiveMenu");
    $(".clsPagination").attr("attr_category",strCategory);
    fnLoadSlide(1,strCategory)
}


function fnShowMenu(strCategory) {
    $("#divImageSlider").show();
    $(".clsActiveMenu").show();
    $(".clsMenuShowHide img").attr('src',"../Assets/plus-01.svg");
    blnHiddenDetails = false;
    $("[attr_tabCategory="+strCategory+"] .clsMenuShowHide img").attr('src',"../Assets/minus-01.svg");
    $("#divImageSlider").insertAfter("[attr_tabCategory="+strCategory+"]");
}

function fnHideMenu() {
    $("#divImageSlider").hide();
    $(".clsActiveMenu").hide();
    blnHiddenDetails = true;
    $(".clsMenuShowHide img").attr('src',"../Assets/plus-01.svg");
}

