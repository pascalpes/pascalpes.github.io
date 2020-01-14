

// pour sauver le json dans un fichier

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
download(jsonData, 'json.txt', 'text/plain');



$(function(){
    
    var butVert = $(".navmiddle input[type='button']");
    butVert.each(function(e) {
        let valBut = $(this).val().split("").join("<br/>");
        $(this).html(valBut);
    })

    console.log(butVert);
    
    

    function changePage(cible, move) {
        console.log(cible, move);
        $(`#${cible}`).addClass(move);
        $(`#${cible}`).addClass("next");
        $(".active").removeClass("active");        
        $(".next").addClass("active");    
        $(".active").removeClass("next");        
        $('.active').removeClass(move);
    }

    $(".nav input[type='button']").click(function(e){
            var cible = $(this).val();
            var move = $(this).attr("nav"); 
            changePage(cible, move);
    })



})