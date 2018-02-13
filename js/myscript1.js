// myscript1.js for Assignment 1
// Nikola
// myscript1 for a1.xml using AJAX

// Document.ready function must be included and should include
// your .ajax() call plus any .click() events
$(document).ready(function()  {
	console.log("id doc ready");
	$.ajax({type: "GET", url: "a1.xml", dataType: "xml", success: parseXML});
});

function parseXML(xml)    {
		$("#myName").html( $(xml).find("studentName").text() );
		$("#myProg").html( $(xml).find("studentProg").text() );
		$("#myCamp").html( $(xml).find("studentCampus").text() );
		$("#myPict").html( $(xml).find("image").text() );
}