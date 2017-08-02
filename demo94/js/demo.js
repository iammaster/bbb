$("img.close").click(function () {
    $(".qq_show").animate({right: "-158px"}, 500, function () {
        $("img.hideImg").animate({right: "0px"}, 500);
    });
});

$("img.hideImg").click(function () {
    $(this).animate({right: "-33px"}, 500, function () {
        $(".qq_show").animate({right: "0px"}, 500);
    });
});
