//Global Arrays

var	resultscom=[];
var results = [];
var CharsUsed=[];
var speciesresults= [];
var resultsAllChars=[];
var resultswithchars=[];




var RegionSelected="";


	            			             
var regionNameID = ["Apalachicolan", "CentralTexas", "EscambiaChoc", "GreatPlains","MissEmbay", "MobileBasin", "NAtlantic", "Ohioan", "Ouachita", "Ozark", "Pacific", "PeninsularFL", "PontPearlPasc", "RioGrande", "SouthAtlantic", "Sabine-Trinity", "St.Lawrence", "Tenn-Cumb", "UpperMississippi"];
var regionNames = ["Apalachicolan", "Central Texas", "Escambia-Choc", "Great Plains","Miss. Embay.", "Mobile Basin", "N. Atlantic","Ohioan","Ouchita","Ozark", "Pacific", "Florida", "Pont-Pearl-Pasc", "Rio Grande", "South Atlantic", "Sabine-Trinity", "St. Lawrence", "Tenn-Cumb.", "Upper Miss."]; 



var listItemPart1 = "<div class=\"grid grid-pad urow uib_row_4 row-height-4\" data-uib=\"layout/row\" data-ver=\"0\"><div class=\"col uib_col_10 col-0\" data-uib=\"layout/col\" data-ver=\"0\"><div class=\"widget-container content-area vertical-col\"><button type=\"button\" class=\"btn widget uib_w_13 d-margins btn-default\" data-toggle=\"modal\" data-target=\"#";

			            

var listItemPart2 = "\"><i class=\"glyphicon button-icon-left\" data-position=\"left\"></i>";
var listItemPart3 = "</button><span class=\"uib_shim\"></span></div></div><span class=\"uib_shim\"></span></div>";	   


var clamRowPart1 = "<div class=\"grid grid-pad urow uib_row_6 row-height-6 spacing\" data-uib=\"layout/row\" data-ver=\"0\"><div class=\"col uib_col_9 col-0_3-12\" data-uib=\"layout/col\" data-ver=\"0\"><div class=\"widget-container content-area vertical-col\"><div class=\"widget uib_w_30 scale-image d-margins\" data-uib=\"media/img\" data-ver=\"0\"><figure class=\"figure-align\"><img src=\"Images/";


var clamRowPart2 = "\"><figcaption data-position=\"bottom\"></figcaption></figure></div><span class=\"uib_shim\"></span></div></div><div class=\"col uib_col_8 col-0_9-12\" data-uib=\"layout/col\" data-ver=\"0\"><div class=\"widget-container content-area vertical-col\"><button type=\"button\" class=\"btn btn-primary\"data-toggle=\"modal\" data-target=\"#";


var clamRowPart3 = "\" data-uib=\"twitter%20bootstrap/button\" data-ver=\"0\"><i class=\"glyphicon button-icon-left\" data-position=\"left\"></i>";

var clamRowPart4 = "\">";

var clamRowPart5 ="</button><span class=\"uib_shim\"></span></div></div><span class=\"uib_shim\"></span></div>";
			                		            			  
	
var clamPagePart1 = "<div class=\"upage hidden\" id=\"";
var clamPagePart2 = "\"><div class=\"upage-outer\"><div id=\"";
var clamPagePart3 = "sub\" class=\"upage-content \"><div class=\"grid grid-pad urow uib_row_60 row-height-60\" data-uib=\"layout/row\" data-ver=\"0\"><div class=\"col uib_col_90 col-0_3-12\" data-uib=\"layout/col\" data-ver=\"0\"><div class=\"widget-container content-area vertical-col\"><button type=\"button\" class=\"btn widget uib_w_80 d-margins btn-default\" data-uib=\"twitter%20bootstrap/button\" data-ver=\"0\" id=\"back";
var clamPagePart4 = "\"><i class=\"glyphicon button-icon-left\" data-position=\"left\"></i>Back</button><span class=\"uib_shim\"></span></div></div><div class=\"col uib_col_87 col-0_9-12\" data-uib=\"layout/col\" data-ver=\"0\"><div class=\"widget-container content-area vertical-col\"><span class=\"uib_shim\"></span></div></div><span class=\"uib_shim\"></span></div><div class=\"grid grid-pad urow uib_row_61 row-height-61\" data-uib=\"layout/row\" data-ver=\"0\"><div class=\"col uib_col_88 col-0_12-12\" data-uib=\"layout/col\" data-ver=\"0\"><div class=\"widget-container content-area vertical-col\">";
var imagePart1 = "<div class=\"widget uib_w_81 scale-image d-margins\" data-uib=\"media/img\" data-ver=\"0\"><figure class=\"figure-align\"><img src=\"Images/";
var imagePart2 = "\"><figcaption data-position=\"bottom\"></figcaption></figure></div>";
var clamPagePart5 = "<span class=\"uib_shim\"></span></div></div><span class=\"uib_shim\"></span></div><div class=\"grid grid-pad urow uib_row_62 row-height-62\" data-uib=\"layout/row\" data-ver=\"0\"><div class=\"col uib_col_89 col-0_12-12\" data-uib=\"layout/col\" data-ver=\"0\"><div class=\"widget-container content-area vertical-col\"><div class=\"widget uib_w_82 d-margins Text\" data-uib=\"media/text\" data-ver=\"0\"><div class=\"widget-container left-receptacle\"></div><div class=\"widget-container right-receptacle\"></div><div><p>";
var clamPagePart6 = "</p></div></div><span class=\"uib_shim\"></span></div></div><span class=\"uib_shim\"></span></div></div></div></div>";

var counter = 0;        
var counter2 = 0;
var counter3 = 0;   
				