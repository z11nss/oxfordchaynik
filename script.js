

$(".article_item_title1").click(
    function () {
        $(".article_item_info1").height(250)
        $(".article_item_info2").height(0)
        $(".article_item_info3").height(0)

        $(".article_item_title2").click(
            function () {
                $(".article_item_info1").height(0)
                $(".article_item_info2").height(250)
                $(".article_item_info3").height(0)
            })
        $(".article_item_title3").click(
            function () {
                $(".article_item_info1").height(0)
                $(".article_item_info2").height(0)
                $(".article_item_info3").height(250)
            })
    })



    let b = 1;
$(".main_button").click(
    function () {
        if (b){
            $(".main_item2").height(900)
            b=0
        }
        else{
            $(".main_item2").height(0)
            b=1
        }
    })




let first = 0;
$('#first').click(function () {
    if (first) {
        $('#first_info').height(0);
        $('#first').height(70);
        $('#first_img').attr('src', 'img/icon - plus.png');
        first = 0;
    } else {
        $('#first_info').height(70);
        $('#first').height(150);
        $('#first_img').attr('src', 'img/icon - minus.png');
        first = 1;
    }
});

let second = 0;
$('#second').click(function () {
    if (second) {
        $('#second_info').height(0);
        $('#second').height(70);
        $('#second_img').attr('src', 'img/icon - plus.png');
        second = 0;
    } else {
        $('#second_info').height(70);
        $('#second').height(150);
        $('#second_img').attr('src', 'img/icon - minus.png');
        second = 1;
    }
});

let third = 0;
$('#third').click(function () {
    if (third) {
        $('#third_info').height(0);
        $('#third').height(70);
        $('#third_img').attr('src', 'img/icon - plus.png');
        third = 0;
    } else {
        $('#third_info').height(70);
        $('#third').height(150);
        $('#third_img').attr('src', 'img/icon - minus.png');
        third = 1;
    }
});

let fourth = 0;
$('#fourth').click(function () {
    if (fourth) {
        $('#fourth_info').height(0);
        $('#fourth').height(70);
        $('#fourth_img').attr('src', 'img/icon - plus.png');
        fourth = 0;
    } else {
        $('#fourth_info').height(70);
        $('#fourth').height(150);
        $('#fourth_img').attr('src', 'img/icon - minus.png');
        fourth = 1;
    }
});

let fifth = 0;
$('#fifth').click(function () {
    if (fifth) {
        $('#fifth_info').height(0);
        $('#fifth').height(70);
        $('#fifth_img').attr('src', 'img/icon - plus.png');
        fifth = 0;
    } else {
        $('#fifth_info').height(70);
        $('#fifth').height(150);
        $('#fifth_img').attr('src', 'img/icon - minus.png');
        fifth = 1;
    }
});

let sixth = 0;
$('#sixth').click(function () {
    if (sixth) {
        $('#sixth_info').height(0);
        $('#sixth').height(70);
        $('#sixth_img').attr('src', 'img/icon - plus.png');
        sixth = 0;
    } else {
        $('#sixth_info').height(70);
        $('#sixth').height(150);
        $('#sixth_img').attr('src', 'img/icon - minus.png');
        sixth = 1;
    }
});