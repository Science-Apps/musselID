function makeModals() {
var clamModalPart1 ="<div class=\"modal fade\" id=\"";
var clamModalPart2 ="\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"";
var clamModalPart3 ="\" aria-hidden=\"true\" ><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"></button><h4 class=\"modal-title\" id=\"";
var clamModalPart4="Label\">";	
var clamModalPart5="</h4></div><div class=\"modal-body\"><table> <tr> <th> <img src=\"Images/";
var clamModalPart6="\" class=\"img-responsive\" alt=\"";
var clamModalPart7="\"></tr><tr> <th> <img src=\"Images/";
var clamModalPart8="\"></tr> </table></div> <div class=\"modal-footer\"><button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button></div></div></div></div>";


for (var i=0; i < AllClams.length; i++) {
	var species = AllClams[i].ProperName.replace(/ /g,"_");
	var clampage = clamModalPart1 + species + clamModalPart2 + species + clamModalPart3 + species + AllClams[i].CommonName + clamModalPart5 + '<em>'+ species + '</em>' + '_outer.png' + clamModalPart6 + AllClams[i] +  clamModalPart7 + species + '_inner.png' + clamModalPart8	
	
	document.body.insertAdjacentHTML('afterbegin',clampage)
}
	
};