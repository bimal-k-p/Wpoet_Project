var arrSlideImages = ["DL-Learning-1.jpg","DL-Communication.jpg","DL-Technology.jpg"];
var arrSlides = {
    Learning: [
        {
            strImage: "DL-Learning-1.jpg",
            strTitle: "DIGITAL LEARNING INFRASTRUCTURE",
            strDescription: "Usability enhancement and Training for Transaction Portal for Customers"
        },
        {
            strImage: "DL-Learning-2.jpg",
            strTitle: "EMPLOYEE DEVELOPMENT",
            strDescription: "Adaptive Learning Experiences for Workforce Growth"
        },
        {
            strImage: "DL-Learning-3.jpg",
            strTitle: "KNOWLEDGE MANAGEMENT",
            strDescription: "Centralized Learning Portals for Distributed Teams"
        }
    ],
    Technology: [
        {
            strImage: "DL-Technology_1.jpg",
            strTitle: "DIGITAL TRANSFORMATION",
            strDescription: "Innovative Technology Platforms for Business Efficiency"
        },
        {
            strImage: "DL-Technology_2.jpg",
            strTitle: "CLOUD SOLUTIONS",
            strDescription: "Scalable Cloud Infrastructure for High Performance Teams"
        },
        {
            strImage: "DL-Technology_3.jpg",
            strTitle: "DATA SECURITY",
            strDescription: "Advanced Security Frameworks for Enterprise Protection"
        }
    ],
    Communication: [
        {
            strImage: "DL-Communication_1.jpg",
            strTitle: "CUSTOMER ENGAGEMENT",
            strDescription: "Integrated Communication Channels for Better Customer Reach"
        },
        {
            strImage: "DL-Communication_2.jpg",
            strTitle: "COLLABORATION TOOLS",
            strDescription: "Smart Collaboration Systems for Distributed Workforces"
        },
        {
            strImage: "DL-Communication_3.jpg",
            strTitle: "BRAND COMMUNICATION",
            strDescription: "Consistent Digital Messaging Across Enterprise Platforms"
        }
    ]

};

$(document).ready(function(){
    $(".clsPagination").click(function () {
        var strImageId = parseInt($(this).attr("attr_id"));
        var strCategory = $(this).attr("attr_category");
        fnLoadSlide(strImageId,strCategory);
    })
    $(".clsMenuTabs").click(function () {
        var strCategory = $(this).attr("id");
        fnShowActiveTab(strCategory);
    })
});

function fnLoadSlide(strImageId,strCategory) {
    $(".clsPagination").removeClass("active");
    $("#spnPagination"+strImageId).addClass("active");
    $("#divImageConnected img").attr('src',"../Assets/"+arrSlides[strCategory][strImageId-1].strImage);
    $("#divImageHeader span").html(arrSlides[strCategory][strImageId-1].strTitle);
    $("#divImageDescription a").html(arrSlides[strCategory][strImageId-1].strDescription);
}

function fnShowActiveTab(strCategory){
    var strTabCategory = strCategory.slice(3);
    $(".clsTabActive").removeClass("clsActiveMenu");
    $("#"+strCategory+" .clsTabActive").addClass("clsActiveMenu");
    $(".clsPagination").attr("attr_category",strTabCategory);
    fnLoadSlide(1,strTabCategory)
}
