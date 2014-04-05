/*
*code for gpa manipulation and calculation
* Copyright 2014,geofrey ernest
* geofreyernest@live.com
 */
$(document).ready(function () {
    $("#r-table").hide();
});
$(function () {
    $("#back-button").click(function () {
        $("#r-table").hide();
        $("#main-table").show();
    });
//badili status
    $("#grade").change(function () {
        var curr_var = $(this).val();
        switch (curr_var) {
            case "a":
                $(this).parent().siblings("#status").text("pass");
                break;
            case "b":
                $(this).parent().siblings("#status").text("pass");
                break;
            case "b+":
                $(this).parent().siblings("#status").text("pass");
                break;
            case "c":
                $(this).parent().siblings("#status").text("pass");
                break;
            case "d":
                $(this).parent().siblings("#status").text("failed");
                break;
            case "f":
                $(this).parent().siblings("#status").text("failed");
                break;
            case "i":
                $(this).parent().siblings("#status").text("incomplete");
                break;
        }
    });
//ongeza somo
    $("#add-subject").click(function () {
        $('.c-row').clone(".c-row").removeClass().addClass("row-1").appendTo("#t-body");
    });
//Tafuta gpa
    $("#calc-gpa").click(function () {
        var g_score = [];
        $(".grade").each(function () {
            if ($(this).val() == "") {

            }
            else if ($(this).val() == "i") {

            }
            else {
                g_score.push(getScore($(this).val()))
            }
        });
        var gpa = total_score(g_score) / g_score.length;

//Tangaza gpa
        $(".gpa").text(gpa);
        $("#r-gpa").text(gpa);
    });
//jedwali la ku preview nalitengeneza na javascript
    $("#generate").click(function () {
        var row_store = []; //Tunza masomo yote
        var course = {};
        var c_y = $("#study-year").val(); //current year
        var c_s = $("#semester").val();    //current semister

//hii sio njia bora, ila sina muda inabidi kuitumia tu
//baadae nitabadilisha
        $("#t-body tr").each(function (i, elem) {
            c_c = $("#code", this).val();  //course code
            c_t = $("#title", this).val();  //course title
            c_u = $("#unit", this).val();   //course unit
            c_g = $("#grade", this).val();        //course grade
            c_stat = $("#status", this).text();   //course atatus
            row_store.push({
                "academic_year": c_y,
                "semester": c_s,
                "code": c_c,
                "title": c_t,
                "unit": c_u,
                "grade": c_g,
                "cstatus": c_stat,
            });
        });
        $("#main-table").hide('slow');
        $("#r-table").show();

        for (c_row in row_store) {
            row = row_store[c_row];
            var result_row = "<tr class='' =\"r-row\">" +
                "<td id=\"r-code\">" + row.code +
                "</td>" +
                "<td id=\"r-title\">" + row.title +
                "</td>" +
                "<td id=\"r-unit\">" + row.unit +
                "</td>" +
                "<td id=\"r-grade\">" + row.grade +
                "</td>" +
                "<td id=\"r-status\">" + row.cstatus +
                "</td>" +
                "</tr>";
            $("#r-body").append(result_row);
        }
    });
});

function total_score(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function getScore(arr) {
    switch (arr) {
        case 'a':
            return 5;
        case 'b+':
            return 4;
        case 'b':
            return 3;
        case 'c':
            return 2;
        case 'd':
            return 1;
        case 'f':
            return 0;
    }
}

