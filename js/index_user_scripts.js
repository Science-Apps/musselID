//<!-- Javascript to write the various list pages -

/* Check to make sure includes are supported */

if (!String.prototype.includes) {
	(function () {
		'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
		var toString = {}
		.toString;
		var defineProperty = (function () {
			// IE 8 only supports `Object.defineProperty` on DOM elements
			try {
				var object = {};
				var $defineProperty = Object.defineProperty;
				var result = $defineProperty(object, object, object) && $defineProperty;
			} catch (error) {}
			return result;
		}
			());
		var indexOf = ''.indexOf;
		var includes = function (search) {
			if (this == null) {
				throw TypeError();
			}
			var string = String(this);
			if (search && toString.call(search) == '[object RegExp]') {
				throw TypeError();
			}
			var stringLength = string.length;
			var searchString = String(search);
			var searchLength = searchString.length;
			var position = arguments.length > 1 ? arguments[1] : undefined;
			// `ToInteger`
			var pos = position ? Number(position) : 0;
			if (pos != pos) { // better `isNaN`
				pos = 0;
			}
			var start = Math.min(Math.max(pos, 0), stringLength);
			// Avoid the `indexOf` call if no match is possible
			if (searchLength + start > stringLength) {
				return false;
			}
			return indexOf.call(string, searchString, pos) != -1;
		};
		if (defineProperty) {
			defineProperty(String.prototype, 'includes', {
				'value': includes,
				'configurable': true,
				'writable': true
			});
		} else {
			String.prototype.includes = includes;
		}
	}
		());
}

/*global $ ,activate_page */
(function () {
	"use strict";
	/*
	hook up event handlers
	 */

	function register_event_handlers() {

		/* To Map of Provinces*/

		$("#toLocation").click(function (evt) {
			CharsUsed = [];
			CharsUsed[0] = 'US';
			RegionSelected = 'US';
			results = [];
			resultscom = [];
			activate_page("#Location");
			makeMap();


		});

		/* TO INFO SCREEN */

		$("#toInfo").click(function (evt) {
			activate_page("#Info");
		});

		/* From Map Results */
		$(document).on("click", "#Choose", function (evt) {
			console.log (CharsUsed[0]);
			console.log (RegionSelected);
			if (!RegionSelected) {RegionSelected='US'; CharsUsed[0]='US'; resultsAllChars=AllClams;}
			activate_page("#Identify");
			$("#showSculptured, #showIfHingeTeethYes, #RidgesOptions, #PustulesOptions, #yesToSurfaceRays", "#Location").hide();
			activate_subpage("#Alive");
			

			if (RegionSelected == 'RioGrande') {

		
			};

		});

		/* All BACK BUTTONS */

		$(document).on("click", "#BackFromInfo", function (evt) {
			location.reload();
		});

		$(document).on("click", "#BackFromMap", function (evt) {
			location.reload();
		});

		$(document).on("click", "#backFromResultsMap", function (evt) {
			location.reload();
		});

		

		/* Home Button */
		$(document).on("click", "#Home", function (evt) {
			location.reload();
		});
		/* Reset Button */
		$(document).on("click", "#Reset", function (evt) {
			CharsUsed = [];
			results =[];
			resultscom = [];
			CharsUsed[0] = RegionSelected;
			var allInp = document.getElementsByTagName("input");
			for (var i = 0; i < allInp.length; i++) {
				if (allInp[i].type == "radio") {
					allInp[i].checked = false;
				}
			}
			uib_sb.close_sidebar($("#SideBar"));
			$("#numResults").html("Select a character ");
			$("#showSculptured").hide();
			$("#showIfHingeTeethYes").hide();
			$("#yesToSurfaceRays").hide();
			activate_subpage("#Alive");
			$("#toAliveDead").removeClass('active');
			$("#toShellInterior").removeClass('active');
			$("#toShellSurface").removeClass('active');
			$("#toShellPattern").removeClass('active');
			$("#toShellColor").removeClass('active');
			$("#toShellShape").removeClass('active');
			$("#toFootColor").removeClass('active');

		});

		/* TO REGIONS END */

		/* Side Menu Characteristics */

		$(document).on("click", "#toAliveDead", function (evt) {
			$(this).addClass('active');
			activate_subpage("#Alive");
		});
		$(document).on("click", "#toShellInterior", function (evt) {
			activate_subpage("#ShellInterior");
			$(this).addClass('active');
			var mantle=0; var interdental=0; var DepthShallow=0; var DepthDeep=0; var DeepAndOpen=0; var DeepAndCompressed=0;
			$("#showIfHingeTeethYes").hide();
			console.log (resultsAllChars);
			for (var i = 0; i < resultsAllChars.length; i++) {
				if(resultsAllChars[i].mantleAttachmentScarsYes==1){mantle++}
				if(resultsAllChars[i].YesInterdentalProjection==1){interdental++}
				if(resultsAllChars[i].UmboDepthShallow==1){DepthShallow++}
				if(resultsAllChars[i].UmboDepthDeep==1){DepthDeep++}
				if(resultsAllChars[i].UmboDepthDeepAndOpen==1){DeepAndOpen++}
				if(resultsAllChars[i].UmboDepthDeepAndCompressed==1){DeepAndCompressed++}

			};
			if (mantle==0) {$("#MantleAttach").hide();}
			if (interdental==0) {$("#InterDental").hide();}
			if ((DepthShallow==0 && DepthDeep==0 && DeepAndOpen==0)  || (DepthShallow==0 && DepthDeep==0 && DeepAndCompressed==0)||(DepthShallow==0 && DeepAndOpen==0 && DeepAndCompressed==0) || (DepthDeep==0 && DeepAndOpen==0 && DeepAndCompressed==0) )
				{$("#Umbo").hide();}
		});
		$(document).on("click", "#toShellSurface", function (evt) {
			activate_subpage("#ShellSurface");
			$(this).addClass('active'); // Note We add this to turn the link blue after it has been clicked
			$("#showSculptured").hide();
		});
		$(document).on("click", "#toShellPattern", function (evt) {
			$(this).addClass('active');
			activate_subpage("#ShellPattern");
			$("#yesToSurfaceRays").hide();
		});
		$(document).on("click", "#toShellColor", function (evt) {
			$(this).addClass('active');
			activate_subpage("#ShellColor");
		});
		$(document).on("click", "#toShellShape", function (evt) {
			$(this).addClass('active');
			activate_subpage("#ShellShape");
			var oval=0; var lanceolate=0; var elongate=0; var rectangular=0; var round=0; var triangular=0; var pRidgeRounded=0; var pRidgeSharp=0;
			var swelling=0; var sulcus=0; var winged=0;
			for (var i = 0; i < resultsAllChars.length; i++) {
			/*What is the shell shape? */
			if(resultsAllChars[i].shellShapeOval==1){oval++}
			if(resultsAllChars[i].shellShapeLanceolate==1){lanceolate++}
			if(resultsAllChars[i].shellShapeElongate==1){elongate++}
			if(resultsAllChars[i].shellShapeRectangular==1){rectangular++}
			if(resultsAllChars[i].shellShapeRound==1){round++}
			if(resultsAllChars[i].shellShapeTriangular==1){triangular++}
			if(resultsAllChars[i].pallialSwellingYes==1){swelling++}
			if(resultsAllChars[i].sulcusPresent==1){sulcus++}
			if(resultsAllChars[i].wingedYes==1){winged++}

			/* Shape of posterior ridge */

			if(resultsAllChars[i].posteriorRidgeRounded==1){pRidgeRounded++}
			if(resultsAllChars[i].posteriorRidgeSharp==1){pRidgeSharp++}

			};

		if (oval==0) {$("#Oval").hide();}
		if (lanceolate==0) {$("#Lanceolate").hide();}
		if (elongate==0) {$("#Elongate").hide();}
		if (rectangular==0) {$("#Rectangular").hide();}
		if (round==0) {$("#Round").hide();}
		if (triangular==0) {$("#Triangular").hide();}
		if (swelling==0) {$("#Swelling").hide();}
		if (sulcus==0) {$("#Sulcus").hide();}
		if (winged==0) {$("#Winged").hide();}


		if ( (pRidgeRounded==0 || pRidgeSharp==0)) {$("pRidge").hide();}

		});
		$(document).on("click", "#toFootColor", function (evt) {
			$(this).addClass('active');
			activate_subpage("#FootColor");
			var orange=0; var white=0; var brown=0;
			for (var i = 0; i < resultsAllChars.length; i++) {
				if(resultsAllChars[i].footColorOrangeYellowRed==1){orange++}
				else if(resultsAllChars[i].footColorWhiteTan==1){white++}
				else if(resultsAllChars[i].footColorBrownBlack==1){brown++}

			};
		 if (orange==0) {$("#OrangeYellowRedFoot").hide();}
		 if (white==0) {$("#WhiteTanFoot").hide();}
		 if (brown==0) {$("#BrownBlackFoot").hide();}

		});

		/* End of Side Bar */



		/* Characteristic Toggles */

		$(document).on("click", "#YesAlive", function (evt) {
			uib_sb.open_sidebar($("#SideBar"));
			$("#toShellInterior").hide();
			var orange=0; var white=0; var brown=0; var sculptured=0;
			for (var i = 0; i < resultsAllChars.length; i++) {
				if(resultsAllChars[i].footColorOrangeYellowRed==1){orange++}
				if(resultsAllChars[i].footColorWhiteTan==1){white++}
				if(resultsAllChars[i].footColorBrownBlack==1){brown++}
				if(resultsAllChars[i].surfaceSmoothNo==1){sculptured++}


			}
			/*console.log(orange); console.log(white); console.log(brown); */

			if ((orange==0 && white==0)||(orange==0 && brown==0)||(white==0 && brown==0) ) {
			$("#toFootColor").hide();
			}
			else {$("#toFootColor").show();}

			if (sculptured==0) {
			$("#toShellSurface").hide();
			}
			else {$("#toShellSurface").show();}




			});


		$(document).on("click", "#NotAlive", function (evt) {
			uib_sb.open_sidebar($("#SideBar"));
			$("#toShellInterior").show();
			$("#toFootColor").hide();
		});

		$(document).on("click", "#surfacePlicationsYes", function (evt) {
			$("#plicationOptions").show();
		});

		$(document).on("click", "#surfaceRidges", function (evt) {
			$("#ridgeOptions").show();
		});

		$(document).on("click", "#surfacePustulesYes", function (evt) {
			$("#PustulesOptions").hide();
			$("#AllOverOptions").hide();
			$("#SingleRowOptions").hide();
			$("#TwoRowOptions").hide();
			$("#OnUmbo").hide();

		});

		$(document).on("click", "#RandomScatter", function (evt) {
			$("#AllOverOptions").show();
		});

		$(document).on("click", "#PustulesSingleRowYes", function (evt) {
			$("#PustulesTwoRowsYes").hide();
			$("#PTRY").hide();
		});


		$(document).on("click", "#PustulesTwoRowsYes", function (evt) {
			$("#PustulesSingleRowYes").hide();
			$("#PSR").hide();
		});

		$(document).on("click", "#surfaceRidges", function (evt) {
			$("#ridgeOptions").show();
		});

		$(document).on("click", "#Knobs", function (evt) {
			$("#KnobsOptions").show();
			$("#KnobsYesOptions").hide();
		});

		$(document).on("click", "#KnobsYes", function (evt) {
			$("#KnobsYesOptions").show();
		})

		$(document).on("click", "#KnobsNo", function (evt) {
			$("#KnobsYesOptions").hide();
		})

		$(document).on("click", "#surfaceSpines", function (evt) {
			$("#SpinesOptions").show();
		});

		$(document).on("click", "#shellPatternRays", function (evt) {
			$("#rayOptions").show();
			$("#rayOptionsYes").hide();
		});

		$(document).on("click", "#ContRays", function (evt) {
			$("#contOptions").show();
		});

		$(document).on("click", "#BrokenRays", function (evt) {
			$("#intOptions").show();
		});

		$(document).on("click", "#shellPatternChevrons", function (evt) {
			$("#ChevronOptions").show();
		});

		$(document).on("click", "#shellPatternBlotches", function (evt) {
			$("#blotchOptions").show();
		});

		$(document).on("click", "#shellPatternConcentricRings", function (evt) {
			$("#concringsOptions").show();
		});

		/* Characters */

		$(document).on("click", ".Char", function (evt) {
			var id = (this.id);
			console.log(id);
			charswitch(id);

			results = [];
			resultscom = [];
			resultswithchars=[];
			console.log(AllClams);
			texasregioncheck(RegionSelected);
			console.log(AllClams);
			for (var i = 0; i < AllClams.length; i++) {
				var isThere = 1;
				for (var j = 0; j < CharsUsed.length; j++) {
					var curchar = CharsUsed[j];

					var tf = (AllClams[i][curchar]);
					if (tf != 1) {
						isThere = 0;
						break;
					};
				};
				if (isThere) {
					resultswithchars.push(AllClams[i])
					if (AllClams[i].sexualDimorphism == 1) {
						results.push(AllClams[i].ProperName + ' (male)');
						results.push(AllClams[i].ProperName + ' (female)');
						resultscom.push(AllClams[i].CommonName);
						resultscom.push(AllClams[i].CommonName);
					} else if (AllClams[i].ProperName == 'Pyganodon grandis') {
						var el = 0;
						for (var q = 0; q < CharsUsed.length; q++) {
							if (CharsUsed[q] == 'shellShapeElongate') {
								el = 1;
							}
						}
						if (el == 1) {
							results.push(AllClams[i].ProperName + ' (elongate)');
								resultscom.push(AllClams[i].CommonName);
						} else {
							results.push(AllClams[i].ProperName);
								resultscom.push(AllClams[i].CommonName);
						}
					} else if (AllClams[i].ProperName == 'Cyclonaias nodulata') {
						var el = 0;
						for (var q = 0; q < CharsUsed.length; q++) {
							if (CharsUsed[q] == 'surfaceSmoothYes') {
								el = 1;
							}
						}
						if (el == 1) {
							results.push(AllClams[i].ProperName + ' (smooth)');
								resultscom.push(AllClams[i].CommonName);
						} else {
							results.push(AllClams[i].ProperName + ' (rough)');
								resultscom.push(AllClams[i].CommonName);
						}
					}
					else if (AllClams[i].ProperName == 'Cyclonaias pustulosa') {
						var el = 0;
						for (var q = 0; q < CharsUsed.length; q++) {
							if (CharsUsed[q] == 'surfaceSmoothYes') {
								el = 1;
							}
						}
						if (el == 1) {
							results.push(AllClams[i].ProperName + ' (smooth)');
								resultscom.push(AllClams[i].CommonName);
						} else {
							results.push(AllClams[i].ProperName + ' (rough)');
								resultscom.push(AllClams[i].CommonName);
						}
					}
					else {
						results.push(AllClams[i].ProperName);
							resultscom.push(AllClams[i].CommonName);


					}

				};
			};
			if (results.length==1){
				$("#AllCharacters").hide();
				var mumodal=results[0].replace(/ /g, "_");
				$("#"+mumodal+"").modal('show');
				$("#"+mumodal+"").on('hide.bs.modal', function(){
				alert("Congratulations, you successfully identified your mussel!!");
				location.reload();});
			}
			else {
				if (RegionSelected=='US'){
					$("#numResults").html(results.length);}
			else{$("#numResults").html( results.length );}

			    var footColorOrangeYellowRed=0; var footColorWhiteTan=0; var footColorBrownBlack=0; var YesHingeTeeth=0; var NoHingeTeeth=0;
				var YePPseudocardinalTeeth=0;
				var NopePseudocardinalTeeth=0;
				var NopeLateralTeeth=0;
				var YepLateralTeeth=0; var YesInterdentalProjection=0; var NoInterdentalProjection=0; var mantleAttachmentScarsYes=0; var mantleAttachmentScarsNo=0; var PustulesAllOverYes=0; var PustulesAllOverNo=0; var PustulesSingleRowYes=0; var PustulesSingleRowNo=0; var PustulesTwoRowsYes=0; var PustulesTwoRowsNo=0; var PustulesOnUmboYes=0; var PustulesOnUmboNo=0; var KnobsOnPosteriorRidge=0; var KnobsCenterDisk=0; var KnobsYes=0; var KnobsNo=0; var surfaceSmoothYes=0; var surfaceSmoothNo=0; var surfacePlicationsYes=0; var surfacePlicationsNo=0; var surfaceRidgesYes=0; var surfaceRidgesNo=0; var surfaceNodulousChevronsYes=0; var surfaceNodulousChevronsNo=0; var surfacePustulesYes=0; var surfacePustulesNo=0; var surfaceSpinesYes=0; var surfaceSpinesNo=0; var PlicationsRestrictedPosteriorSlopeYes=0; var PlicationsRestrictedPosteriorSlopeNo=0; var shellShapeOval=0; var shellShapeTriangular=0; var shellShapeRectangular=0; var shellShapeRound=0; var shellShapeLanceolate=0; var shellShapeElongate=0; var wingedYes=0; var wingedYesYoung=0; var wingedNo=0; var pallialSwellingYes=0; var pallialSwellingNo=0; var posteriorRidgeRounded=0; var posteriorRidgeSharp=0; var ShellPatternYes=0; var ShellPatternNo=0; var shellPatternRaysYes=0; var shellPatternRaysNo=0; var shellPatternRaysAllOverYes=0; var shellPatternRaysAllOverNo=0; var shellPatternRaysRestrictedPosteriorSlopeYes=0; var shellPatternRaysRestrictedPosteriorSlopeNo=0; var shellPatternRaysContinuousYes=0; var shellPatternRaysContinuousNo=0; var shellPatternRaysRestrictedToUmboYes=0; var shellPatternRaysRestrictedToUmboNo=0; var shellPatternChevronsYes=0; var shellPatternChevronsNo=0; var shellPatternConcentricRingsYes=0; var shellPatternConcentricRingsNo=0; var shellPatternBlotchesYes=0; var shellPatternBlotchesNo=0; var shellPatternBrokenRaysYes=0; var shellPatternBrokenRaysNo=0; var shellColorYellow=0; var shellColorGreen=0; var shellColorBrown=0; var shellColorBlack=0; var umboPositionAbove=0; var umboPositionEven=0; var umboPositionSlightlyAbove=0; var UmboDepthShallow=0; var UmboDepthDeep=0; var UmboDepthDeepAndOpen=0; var UmboDepthDeepAndCompressed=0; var sulcusPresent=0; var sulcusPresentMales=0; var sulcusPresentNo=0;

				for (var i=0; i<resultswithchars.length; i++){
					//Foot Color
					if(resultswithchars[i].footColorOrangeYellowRed>0){footColorOrangeYellowRed++}; if(resultswithchars[i].footColorWhiteTan>0){footColorWhiteTan++};
					if(resultswithchars[i].footColorBrownBlack>0){footColorBrownBlack++};
					//Hinge Teeth
					if(resultswithchars[i].YesHingeTeeth>0){YesHingeTeeth++}; if(resultswithchars[i].NoHingeTeeth>0){NoHingeTeeth++};
					if(resultswithchars[i].YesPseudocardinalTeeth>0){YePPseudocardinalTeeth++}; if(resultswithchars[i].NoPseudocardinalTeeth>0){NopePseudocardinalTeeth++};
					if(resultswithchars[i].NoLateralTeeth>0){NopeLateralTeeth++}; if(resultswithchars[i].YesLateralTeeth>0){YepLateralTeeth++};
					//InterDental Projection
					if(resultswithchars[i].YesInterdentalProjection>0){YesInterdentalProjection++};
					if(resultswithchars[i].NoInterdentalProjection>0){NoInterdentalProjection++};
					//Mantle Attachment Scars
					if(resultswithchars[i].mantleAttachmentScarsYes>0){mantleAttachmentScarsYes++};
					if(resultswithchars[i].mantleAttachmentScarsNo>0){mantleAttachmentScarsNo++};
					//Pustules
					if(resultswithchars[i].PustulesAllOverYes>0){PustulesAllOverYes++}; if(resultswithchars[i].PustulesAllOverNo>0){PustulesAllOverNo++};
					if(resultswithchars[i].PustulesSingleRowYes>0){PustulesSingleRowYes++}; if(resultswithchars[i].PustulesSingleRowNo>0){PustulesSingleRowNo++};
					if(resultswithchars[i].PustulesTwoRowsYes>0){PustulesTwoRowsYes++}; if(resultswithchars[i].PustulesTwoRowsNo>0){PustulesTwoRowsNo++};
					if(resultswithchars[i].PustulesOnUmboYes>0){PustulesOnUmboYes++}; if(resultswithchars[i].PustulesOnUmboNo>0){PustulesOnUmboNo++};
					if(resultswithchars[i].surfacePustulesYes>0){surfacePustulesYes++}; if(resultswithchars[i].surfacePustulesNo>0){surfacePustulesNo++};
					//Knobs
					if(resultswithchars[i].KnobsOnPosteriorRidge>0){KnobsOnPosteriorRidge++}; if(resultswithchars[i].KnobsCenterDisk>0){KnobsCenterDisk++};
					if(resultswithchars[i].KnobsYes>0){KnobsYes++}; if(resultswithchars[i].KnobsNo>0){KnobsNo++};

					if(resultswithchars[i].surfaceSmoothYes>0){surfaceSmoothYes++};
					if(resultswithchars[i].surfaceSmoothNo>0){surfaceSmoothNo++};
					//Plications
					if(resultswithchars[i].surfacePlicationsYes>0){surfacePlicationsYes++}; if(resultswithchars[i].surfacePlicationsNo>0){surfacePlicationsNo++};
					if(resultswithchars[i].PlicationsRestrictedPosteriorSlopeYes>0){PlicationsRestrictedPosteriorSlopeYes++};
					if(resultswithchars[i].PlicationsRestrictedPosteriorSlopeNo>0){PlicationsRestrictedPosteriorSlopeNo++};

					//Ridges
					if(resultswithchars[i].surfaceRidgesYes>0){surfaceRidgesYes++}; if(resultswithchars[i].surfaceRidgesNo>0){surfaceRidgesNo++};


					//Shell Patterns
					if(resultswithchars[i].ShellPatternYes>0){ShellPatternYes++};
					if(resultswithchars[i].ShellPatternNo>0){ShellPatternNo++};
					if(resultswithchars[i].shellPatternRaysYes>0){shellPatternRaysYes++};
					 if(resultswithchars[i].shellPatternRaysNo>0){shellPatternRaysNo++};
					if(resultswithchars[i].shellPatternRaysAllOverYes>0){shellPatternRaysAllOverYes++};
					if(resultswithchars[i].shellPatternRaysAllOverNo>0){shellPatternRaysAllOverNo++};
					if(resultswithchars[i].shellPatternRaysRestrictedPosteriorSlopeYes>0){shellPatternRaysRestrictedPosteriorSlopeYes++};
					if(resultswithchars[i].shellPatternRaysRestrictedPosteriorSlopeNo>0){shellPatternRaysRestrictedPosteriorSlopeNo++};
					if(resultswithchars[i].shellPatternRaysContinuousYes>0){shellPatternRaysContinuousYes++};
					if(resultswithchars[i].shellPatternRaysContinuousNo>0){shellPatternRaysContinuousNo++};
					if(resultswithchars[i].shellPatternRaysRestrictedToUmboYes>0){shellPatternRaysRestrictedToUmboYes++};
					if(resultswithchars[i].shellPatternRaysRestrictedToUmboNo>0){shellPatternRaysRestrictedToUmboNo++};
					if(resultswithchars[i].shellPatternChevronsYes>0){shellPatternChevronsYes++};
					if(resultswithchars[i].shellPatternChevronsNo>0){shellPatternChevronsNo++};
					if(resultswithchars[i].shellPatternConcentricRingsYes>0){shellPatternConcentricRingsYes++};
					if(resultswithchars[i].shellPatternConcentricRingsNo>0){shellPatternConcentricRingsNo++};
					if(resultswithchars[i].shellPatternBlotchesYes>0){shellPatternBlotchesYes++};
					if(resultswithchars[i].shellPatternBlotchesNo>0){shellPatternBlotchesNo++};
					if(resultswithchars[i].shellPatternBrokenRaysYes>0){shellPatternBrokenRaysYes++};
					if(resultswithchars[i].shellPatternBrokenRaysNo>0){shellPatternBrokenRaysNo++};
					if(resultswithchars[i].surfaceNodulousChevronsYes>0){surfaceNodulousChevronsYes++};
					if(resultswithchars[i].surfaceNodulousChevronsNo>0){surfaceNodulousChevronsNo++};

					//Shell Color
					if(resultswithchars[i].shellColorYellow>0){shellColorYellow++}; if(resultswithchars[i].shellColorGreen>0){shellColorGreen++};
					if(resultswithchars[i].shellColorBrown>0){shellColorBrown++}; if(resultswithchars[i].shellColorBlack>0){shellColorBlack++};

					//Umbo position
					if(resultswithchars[i].umboPositionAbove>0){umboPositionAbove++}; if(resultswithchars[i].umboPositionEven>0){umboPositionEven++};
					if(resultswithchars[i].umboPositionSlightlyAbove>0){umboPositionSlightlyAbove++}; if(resultswithchars[i].UmboDepthShallow>0){UmboDepthShallow++};
					if(resultswithchars[i].UmboDepthDeep>0){UmboDepthDeep++}; if(resultswithchars[i].UmboDepthDeepAndOpen>0){UmboDepthDeepAndOpen++};
					if(resultswithchars[i].UmboDepthDeepAndCompressed>0){UmboDepthDeepAndCompressed++};

					//Sulcus present
					if(resultswithchars[i].sulcusPresent>0){sulcusPresent++};
					if(resultswithchars[i].sulcusPresentMales>0){sulcusPresentMales++}; if(resultswithchars[i].sulcusPresentNo>0){sulcusPresentNo++};

					//Spines
					if(resultswithchars[i].surfaceSpinesYes>0){surfaceSpinesYes++}; if(resultswithchars[i].surfaceSpinesNo>0){surfaceSpinesNo++};

					//Shell Shapes
					if(resultswithchars[i].shellShapeOval>0){shellShapeOval++}; if(resultswithchars[i].shellShapeTriangular>0){shellShapeTriangular++};
					if(resultswithchars[i].shellShapeRectangular>0){shellShapeRectangular++}; if(resultswithchars[i].shellShapeRound>0){shellShapeRound++};
					if(resultswithchars[i].shellShapeLanceolate>0){shellShapeLanceolate++}; if(resultswithchars[i].shellShapeElongate>0){shellShapeElongate++};
					if(resultswithchars[i].wingedYes>0){wingedYes++}; if(resultswithchars[i].wingedYesYoung>0){wingedYesYoung++}; if(resultswithchars[i].wingedNo>0){wingedNo++};
					if(resultswithchars[i].pallialSwellingYes>0){pallialSwellingYes++}; if(resultswithchars[i].pallialSwellingNo>0){pallialSwellingNo++};
					if(resultswithchars[i].posteriorRidgeRounded>0){posteriorRidgeRounded++}; if(resultswithchars[i].posteriorRidgeSharp>0){posteriorRidgeSharp++};

				};
				//console.table(results);
				//console.table(CharsUsed);
				//console.table(resultswithchars);

				//Stuff to hide when we have zeros

				// Umbo Cavity
				if (UmboDepthShallow<1){$("#UmboDepthShallow").hide();} else{$("#UmboDepthShallow").show();}
				if (UmboDepthDeep<1){$("#UmboDepthDeep").hide();} else{$("#UmboDepthDeep").show();}
				if (UmboDepthDeepAndOpen<1){$("#UmboDepthDeepAneOpen").hide();} else{$("#UmboDepthDeepAndOpen").show();}
				if (UmboDepthDeepAndCompressed<1){$("#UmboDepthDeepAndCompressed").hide();} else{$("#UmboDepthDeepAndCompressed").show();}
				if ((UmboDepthShallow<1 && UmboDepthDeep<1 && UmboDepthDeepAndOpen<1) || (UmboDepthShallow<1 && UmboDepthDeep<1 && UmboDepthDeepAndCompressed<1) || (UmboDepthDeepAndCompressed<1 && UmboDepthDeep<1 && UmboDepthDeepAndOpen<1) ||  (UmboDepthDeepAndCompressed<1 && UmboDepthShallow<1 && UmboDepthDeepAndOpen<1)){$("#Umbo").hide();} else {$("#Umbo").show();}


				//Shell Shapes

				if (shellShapeOval<1){$("#Oval").hide();} else{$("#Oval").show();}
				if (shellShapeLanceolate<1){$("#Lanceolate").hide();} else{$("#Lanceolate").show();}
				if (shellShapeElongate<1){$("#Elongate").hide();} else{$("#Elongate").show();}
				if (shellShapeRectangular<1){$("#Rectangular").hide();} else{$("#Rectangular").show();}
				if (shellShapeRound<1){$("#Round").hide();} else{$("#Round").show();}
				if (shellShapeOval<1){$("#Triangular").hide();} else{$("#Triangular").show();}

				if ((posteriorRidgeRounded<1) || (posteriorRidgeSharp<1)){$("#pRidge").hide();} else{$("#pRidge").show();}
				if ((wingedYes<1) || (wingedYesYoung<1) || (wingedNo<1)){$("#Winged").hide();} else{$("#Winged").show();}
				if ((pallialSwellingYes<1) || (pallialSwellingNo<1)){$("#Swelling").hide();} else{$("#Swelling").show();}
				if ((umboPositionAbove<1) || (umboPositionEven<1) || (umboPositionSlightlyAbove)){$("#UmboTop").hide();} else{$("#UmboTop").show();}
				if ((sulcusPresent<1) || (sulcusPresentNo<1)){$("#Sulcus").hide();} else{$("#Sulcus").show();}
				//Foot Color
				if (footColorWhiteTan<1){$("#WhiteTanFoot").hide();} else{$("#WhiteTanFoot").show();}
				if (footColorBrownBlack<1){$("#BrownBlackFoot").hide();} else{$("#BrownBlackFoot").show();}
				if (footColorOrangeYellowRed<1){$("#FootColorOrangeYellowRed").hide();} else{$("FootColorOrangeYellowRed").show();}
				if ((footColorOrangeYellowRed<1 && footColorWhiteTan<1) || (footColorOrangeYellowRed<1 && footColorBrownBlack<1) || (footColorWhiteTan<1 && footColorBrownBlack<1)){$("#toFootColor").hide();} else {$("#toFootColor").show();}

				//Shell Color

				if (shellColorYellow<1){$("#Yellow").hide();} else{$("#Yellow").show();}
				if (shellColorGreen<1){$("#Green").hide();} else{$("#Green").show();}
				if (shellColorBrown<1){$("#Brown").hide();} else{$("#Brown").show();}
				if (shellColorBlack<1){$("#Black").hide();} else{$("#Black").show();}
				if ((shellColorYellow<1 && shellColorGreen<1 && shellColorBrown<1) || (shellColorGreen<1 && shellColorBrown<1 && shellColorBlack<1) || (shellColorBrown<1 && shellColorBlack<1 && shellColorYellow<1) ||  (shellColorBlack<1 && shellColorYellow<1 && shellColorGreen<1)){$("toShellColor").hide();} else {$("#toShellColor").show();}



				//Hinge Teeth

				if ((YesHingeTeeth<1) || (NoHingeTeeth<1)){$("#HingeTeethQuestion").hide();} else{$("#HingeTeethQuestion").show();}

				//Hinge TeethYes Options
				if ((NoHingeTeeth<1) && (YesHingeTeeth>1)) {$("#HingeTeethQuestion").show(); $("#showIfHingeTeethYes").show(); $("#HingeTeethQuestion2").hide();} else{$("#HingeTeethQuestion2").show(); $("#showifHingeTeethYes").hide();}
				//Pseudocardinal Teeth
				if ((YePPseudocardinalTeeth<1) || (NopePseudocardinalTeeth<1)) {$("#PseudocardinalQuestion").hide();} else{$("#PseudocardinalQuestion").show();}
				//Lateral Teeth
				if ((YepLateralTeeth<1) || (NopeLateralTeeth<1)) {$("#LateralTeethQuestion").hide();} else{$("#LateralTeethQuestion").show();}
				//Interdental projection
				if ((YesInterdentalProjection<1) || (NoInterdentalProjection<1)){$("#InterDental").hide();} else{$("#InterDental").show();}
				//Mantle Attachment Scars
				if ((mantleAttachmentScarsYes<1) || (mantleAttachmentScarsNo<1)){$("#MantleAttach").hide();} else{$("#MantleAttach").show();}
				//texture
				if ((surfaceSmoothYes<1) || (surfaceSmoothNo<1)){$("#SurfaceQuestion").hide();  if (surfaceSmoothYes<1) {$("#showSculptured").show()} else {$("#toShellSurface").hide();}}
				//Pustules
				if ((PustulesAllOverYes<1) || (PustulesAllOverNo<1)){$("#rand").hide(); $("#AllOverOptions").hide();} else {$("#rand").show(); $("#AllOverOptions").show();}
				if ((PustulesTwoRowsYes<1) || (PustulesTwoRowsNo<1)){$("#PTRY").hide();}
				if ((PustulesOnUmboYes<1) || (PustulesOnUmboNo<1)){$("#OnUmbo").hide();} else {$("#OnUmbo").show()}
				if ((PustulesSingleRowYes<1) || (PustulesSingleRowNo<1)){$("#PSR").hide();}
				if ((surfacePustulesYes<1) || (surfacePustulesNo<1)){$("#PustulesQuestion").hide();} else {$("#PustulesQuestion").show();}
				//Knobs
				if ((KnobsYes<1) || (KnobsNo<1)){$("#KnobsQuestion").hide();} else{$("#KnobsQuestion").show()}
				//Knobs Posterior Ridge
				if ((KnobsOnPosteriorRidge<1) || (KnobsOnPosteriorRidge<1)){$("#KnobsPost").hide();} else{$("#KnobsPost").show()}
				//Knobs Center Disk
				if ((KnobsCenterDisk<1) || (KnobsCenterDisk<1)){$("#KnobCent").hide();} else{$("#KnobCent").show()}



				//Plications
				if ((surfacePlicationsYes<1) || (surfacePlicationsNo<1)){$("#PlicationsQuestion").hide();} else {$("#PlicationsQuestion").show();}
				if ((PlicationsRestrictedPosteriorSlopeYes<1) || (PlicationsRestrictedPosteriorSlopeNo<1)){
					$("#PlicationsRestrictedPosteriorSlopeYes").hide();$("#PRPSY").hide(); $("#PRPSN").hide(); }
					 else {$("#PlicationsRestrictedPosteriorSlopeYes").show();$("#PRPSY").show(); $("#PRPSN").show();}
				//Ridges
				if ((surfaceRidgesYes<1) || (surfaceRidgesNo<1)){$("#ridgequestion").hide();} else{$("#ridgequestion").show();}
				// Spines
				if ((surfaceSpinesYes<1) || (surfaceSpinesNo<1)){$("#SpinesQuestion").hide();} else{$("#SpinesQuestion").show();}
				//Patterns
				//Chevrons
				if ((shellPatternChevronsYes<1) || (shellPatternChevronsNo<1)){$("#ChevronsQuestion").hide();} else{$("#ChevronsQuestion").show();}
				//Blotches
				if ((shellPatternBlotchesYes<1) || (shellPatternBlotchesNo<1)){$("#BlotchQuestion").hide();} else{$("#BlotchQuestion").show();}
				//Concentric rings
				if ((shellPatternConcentricRingsYes<1) || (shellPatternConcentricRingsNo<1)){$("#ConRingQuestion").hide();} else{$("#ConRingQuestion").show();}
				//Rays

				//Rays on Umbo
				if ((shellPatternRaysRestrictedToUmboYes<1) || (shellPatternRaysRestrictedToUmboNo<1)){$("#RaysOnUmbo").hide();} else{$("#RaysOnUmbo").show();}
				//Continuous Rays
				if ((shellPatternRaysContinuousYes<1) || (shellPatternRaysContinuousNo<1)){$("#raytypecont").hide();} else{$("#raytypecont").show();}

				//Broken Rays
				if ((shellPatternBrokenRaysYes<1) || (shellPatternBrokenRaysNo<1)){$("#raytypebroke").hide();} else{$("#raytypebroke").show();}

				//Rays Restricted to Poseterior Slope
				if ((shellPatternRaysRestrictedPosteriorSlopeYes<1) || (shellPatternRaysRestrictedPosteriorSlopeNo<1)){$("#RaysRestrictedPosteriorSlope").hide();} else{$("#RaysRestrictedPosteriorSlope").show();}

				//Rays All over Shell
				if ((shellPatternRaysAllOverYes<1) || (shellPatternRaysAllOverNo<1)){$("RaysAllOver").hide();} else{$("#RaysAllOver").show();}
















			}
		});

		// Goto Results Screen
		$(document).on("click", "#GetResults", function (evt) {

			if (results.length < 1) {

				for (var i = 0; i < AllClams.length; i++) {
					if (AllClams[i].Status != 'P') {
						if (AllClams[i].ProperName == 'Pyganodon grandis') {
						results.push(AllClams[i].ProperName + ' (elongate)');
						resultscom.push(AllClams[i].CommonName);
						}
						else if (AllClams[i].ProperName == 'Cyclonaias nodulata') {
								resultscom.push(AllClams[i].CommonName);
								resultscom.push(AllClams[i].CommonName);
								results.push(AllClams[i].ProperName + ' (smooth)');
								results.push(AllClams[i].ProperName + ' (rough)');
					}
						else if (AllClams[i].ProperName == 'Cyclonaias pustulosa') {
								resultscom.push(AllClams[i].CommonName);
								resultscom.push(AllClams[i].CommonName);
								results.push(AllClams[i].ProperName + ' (smooth)');
								results.push(AllClams[i].ProperName + ' (rough)');
					}
						else if (AllClams[i].sexualDimorphism == 1) {

							results.push(AllClams[i].ProperName + ' (male)');
							results.push(AllClams[i].ProperName + ' (female)');
							resultscom.push(AllClams[i].CommonName);
							resultscom.push(AllClams[i].CommonName);
						}
							 else {
							resultscom.push(AllClams[i].CommonName);
							results.push(AllClams[i].ProperName);
							}
						}
					}
				}


			$("#resultsshown").html("<br><br><p> <!--There are " + results.length + " mussels displayed. <br> This total includes both male and female pictures from sexually dimorphic species.-->");

			for (var i = 0; i < results.length; i++) {

				var species = results[i].replace(/ /g, "_");
				species = species.replace("(","");
				species = species.replace(")","");
				var sex = results[i].includes("male");
				var cnodu = results[i].includes("Cyclonaias nodulata");
				var cpustu = results[i].includes("Cyclonaias pustulosa");
				var gran = results[i].includes("elongate");
				if (sex) {

					var sp = results[i].split(' ');

					$("#resultsshown").append('<tr> <th> <img src="Images/' +
					species + '_outer.png" class="img-responsive" alt="' + results[i] + '"><br> &emsp; &emsp; &emsp;' + '<em>' + sp[0] +' ' + sp[1] +'</em>' + ' ' +sp[2] + listItemPart1 + species +listItemPart2 +  resultscom[i] + listItemPart3)
					}
				else if(cpustu){
						var sp = results[i].split(' ');
					$("#resultsshown").append('<tr> <th> <img src="Images/' +
					species + '_outer.png" class="img-responsive" alt="' + results[i] + '"><br> &emsp; &emsp; &emsp;' + '<em>' + sp[0] +' ' + sp[1] +'</em>' + ' ' +sp[2] + listItemPart1 + species +listItemPart2 +  resultscom[i] + listItemPart3)

				}
				else if(cnodu){
						var sp = results[i].split(' ');
						$("#resultsshown").append('<tr> <th> <img src="Images/' +
					species + '_outer.png" class="img-responsive" alt="' + results[i] + '"><br> &emsp; &emsp; &emsp;' + '<em>' + sp[0] +' ' + sp[1] +'</em>' + ' ' +sp[2] + listItemPart1 + species +listItemPart2 +  resultscom[i] + listItemPart3)

		}
				else if(gran){
						var sp = results[i].split(' ');
						$("#resultsshown").append('<tr> <th> <img src="Images/' +
					species + '_outer.png" class="img-responsive" alt="' + results[i] + '"><br> &emsp; &emsp; &emsp;' + '<em>' + sp[0] +' ' + sp[1] +'</em>' + ' ' +sp[2] + listItemPart1 + species +listItemPart2 +  resultscom[i] + listItemPart3)

				}
				else
				{
					$("#resultsshown").append('<tr> <th> <img src="Images/' +
					species + '_outer.png" class="img-responsive" alt="' + results[i] + '"><br> &emsp; &emsp; &emsp;' + '<em>' + results[i] + '</em>' + listItemPart1 + species +listItemPart2 +  resultscom[i] + listItemPart3)
					}
				};
			activate_page("#Results");

		});

		/* End Goto Results Screen */

		/* Function to goto all the clam pages */

		/* END OF PAGE STRUCTURE FOR RESULTS */

	}
	$(document).ready(register_event_handlers);
})();
