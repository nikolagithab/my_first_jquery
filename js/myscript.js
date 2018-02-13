// myscript.js for Assignment 1
// Nikola Petrovski 991466135
// myscript for a1.xml using AJAX

// Document.ready function must be included and should include
// your .ajax() call plus any .click() events
$(document).ready(function()   {
	console.log("id doc ready");
	$.ajax({type: "GET", url: "a1.xml", dataType: "xml", success: parseXML});
});
//Include all quiz answers in a hidden section under each question. When a quiz //button is selected, display the answers in a dropdown area as an ordered
//list with A. B. C. headings (generated when the list is built/not included in //the XML file)
function parseXML(xml)    {
	$("#myName").append( $(xml).find("studentName").text() );
	
    $(xml).find("question").each(  function(n)    {
        $("#main").append(  "<p class='hdr' id='h" + n + "'>" + $(this).attr("quizType") + "</p>"  );
        
        $(this).children("quizText").each( function()  {
            $("#main").append  (  "<p class='qtn' id='p" + n + "'>" + $(this).text() + "</p>"  );
        });
        
        $("#main").append("<ol class='awr' id='d" + n + "'</ol>");
        
        $(this).find("ans").each(  function() {
            $("#d" + n).append(  "<li>" + $(this).text() + "</li>");
        });
        
        $("#d"+n).hide();
        checkDisplay(n);
    });
}
// Use .toggle() or a combination of .show()/.hide() for displaying answers when a question is selected
function checkDisplay(n)   {
    $("#p"+n).click(function()  {
        $("#d"+n).toggle();
        $("ol:not([id $='" + n + "'])").hide();
    });
}