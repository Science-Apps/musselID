function texasregioncheck(RegionSelected){
if (RegionSelected == "Brazos"){AllClams = AllTexasClams}; 
if (RegionSelected == "BrazosDASHColorado"){AllClams = AllTexasClams};
if (RegionSelected == "Colorado"){AllClams = AllTexasClams};
if (RegionSelected == "ColoradoDASHLavaca"){AllClams = AllTexasClams};
if (RegionSelected == "Guadalupe"){AllClams = AllTexasClams};
if (RegionSelected == "Lavaca"){AllClams = AllTexasClams};
if (RegionSelected == "LavacaDASHGuadalupe"){AllClams = AllTexasClams};
if (RegionSelected == "Nueces"){AllClams = AllTexasClams};
if (RegionSelected == "NuecesDASHRio_Grande"){AllClams = AllTexasClams};
if (RegionSelected == "San_Antonio"){AllClams = AllTexasClams};
if (RegionSelected == "San_AntonioDASHNueces"){AllClams = AllTexasClams};
if (RegionSelected == "Red_Great_Plains"){AllClams = AllTexasClams}; 
if (RegionSelected == "Canadian"){AllClams = AllTexasClams}; 
if (RegionSelected == "Neches"){AllClams = AllTexasClams}; 
if (RegionSelected == "NechesDASHTrinity"){AllClams = AllTexasClams}; 
if (RegionSelected == "Sabine"){AllClams = AllTexasClams}; 
if (RegionSelected == "San_Jacinto"){AllClams = AllTexasClams}; 
if (RegionSelected == "San_JacintoDASHBrazos"){AllClams = AllTexasClams}; 
if (RegionSelected == "Trinity"){AllClams = AllTexasClams}; 
if (RegionSelected == "TrinityDASHSan_Jacinto"){AllClams = AllTexasClams}; 
if (RegionSelected == "Red_Mississippi_Embayment"){AllClams = AllTexasClams}; 
if (RegionSelected == "Sulphur"){AllClams = AllTexasClams}; 
if (RegionSelected == "Cypress"){AllClams = AllTexasClams}; 
};
function charswitch(id){
switch (true) {

    /*Shell Interior */
case (id.includes("UmboDepth")):

    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("UmboDepth")) {
            CharsUsed[i] = id;
            used = 1;
        }

    };
    if (used != 1) {
        CharsUsed.push(id)
    };
    break;

case (id.includes("HingeTeeth")):
    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("HingeTeeth")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };

    if (used != 1) {
        CharsUsed.push(id)
    };

    if (id == "YesHingeTeeth") {
        $("#showIfHingeTeethYes").show();
    } else {
        $("#showIfHingeTeethYes").hide();
    };
    YesPseudocardinalTeeth.checked = false;
    NoPseudocardinalTeeth.checked = false;
    NoLateralTeeth.checked = false;
    YesLateralTeeth.checked = false;
    break;

case (id.includes("Pseudo")):
    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("Pseudo")) {
            CharsUsed[i] = id;
            used = 1;
        }

    };
    if (used != 1) {
        CharsUsed.push(id)
    };
    break;

case (id.includes("Lateral")):
    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("Lateral")) {
            CharsUsed[i] = id;
            used = 1;
        }

    };
    if (used != 1) {
        CharsUsed.push(id)
    };
    break;

case (id.includes("dental")):
    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("dental")) {
            CharsUsed[i] = id;
            used = 1;
        }

    };
    if (used != 1) {
        CharsUsed.push(id)
    };
    break;

case (id.includes("mantle")):
    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("mantle")) {
            CharsUsed[i] = id;
            used = 1;
        }

    };
    if (used != 1) {
        CharsUsed.push(id)
    };
    break;

    /*Shell Surface Texture */

case (id.includes("Smooth")):
    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("Smooth")) {
            CharsUsed[i] = id;
            used = 1;
        }

    };
    if (used != 1) {
        CharsUsed.push(id)
    };
    if (id == "surfaceSmoothNo") {

        $("#ridgeOptions").hide();
        $("#ridgesOptions").hide();
        $("#PustulesOptions").hide();
        $("#plicationOptions").hide();
        $("#plicationsOptions").hide();

        $("#KnobsOptions").hide();
        $("#SpinesOptions").hide();
        $("#showSculptured").show();


    } else {

        $("#showSculptured").hide();
    }
    break;

case (id.includes("Plications")):

    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("Plications")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };
    if (used != 1) {
        CharsUsed.push(id)
    };
    $("#plicationOptions").show();
    if (id == "surfacePlicationsYes") {
        $("#plicationsOptions").show();
        $("#surfaceSmoothYes").hide();
    }
    if (id == "surfacePlicationsNo") {
        $("#plicationsOptions").hide();
    }

    break;

case (id.includes("Ridges")):
    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("Ridges")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };
    if (used != 1) {
        CharsUsed.push(id)
    };
    $("#surfaceSmoothYes").hide();
    break;

case (id.includes("dPosteriorRidge")):
    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("dPosteriorRidge")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };
    if (used != 1) {
        CharsUsed.push(id)
    };
        $("#surfaceSmoothYes").hide();
    break;

case (id.includes("KnobsYes")):
    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("KnobsYes")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };
    if (used != 1) {
        CharsUsed.push(id)
    };
    $("#KnobsOptions").show();
    $("#surfaceSmoothYes").hide();
    break;

case (id.includes("KnobsOnPosteriorRidge")):

    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("KnobsOnPosteriorRidge")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };

    if (used != 1) {
        CharsUsed.push(id)
    };
        $("#surfaceSmoothYes").hide();
    break;

case (id.includes("KnobsCenterDisk")):

    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("KnobsCenterDisk")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };

    if (used != 1) {
        CharsUsed.push(id)
    };
        $("#surfaceSmoothYes").hide();
    break;


case (id.includes("PustulesAllOver")):

    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("PustulesAllOver")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };
    if (used != 1) {
        CharsUsed.push(id)
    };
    $("#surfaceSmoothYes").hide();
    $("#ridgesOptions").hide();
    $("#PustulesOptions").show();
    break;

case (id.includes("surfacePustulesYes")):

    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("surfacePustulesYes")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };
    if (used != 1) {
        CharsUsed.push(id)
    };

    $("#surfaceSmoothYes").hide();
    $("#PustulesOptions").show();
    $("#OnUmbo").hide();
    break;

case (id.includes("PustulesSingleRow")):

    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("PustulesSingleRow")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };
    if (used != 1) {
        CharsUsed.push(id)
    };

    $("#ridgesOptions").hide();
    $("#PustulesOptions").show();
    $("#surfaceSmoothYes").hide();
    break;

case (id.includes("PustulesTwoRowsYes")):

    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("PustulesTwoRowsYes")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };
    if (used != 1) {
        CharsUsed.push(id)
    };

    $("#ridgesOptions").hide();
    $("#PustulesOptions").show();
    $("#surfaceSmoothYes").hide();
    break;

case (id.includes("PustulesOnUmbo")):

    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("PustulesOnUmbo")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };

    if (used != 1) {
        CharsUsed.push(id)
    };
    $("#surfaceSmoothYes").hide();
    break;


case (id.includes("Spines")):
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("Spines")) {
            CharsUsed[i] = id
        } else {
            CharsUsed.push(id)
        };
    };
    $("#ridgesOptions").hide();
    $("#PustulesOptions").hide();
    $("#SpinesOptions").show();
    $("#surfaceSmoothYes").hide();
    break;

    /*Shell Surface Pattern */

case (id.includes("ShellPattern")):

    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("ShellPattern")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };

    if (used != 1) {
        CharsUsed.push(id)
    };

    if (id == "ShellPatternYes") {

        $("#yesToSurfaceRays").show();
        $("#rayOptionsYes").hide();
        $("#contOptions").hide();
        $("#intOptions").hide();
        $("#ChevronOptions").hide();
        $("#blotchOptions").hide();
        $("#concringsOptions").hide();

    } else {
        $("#yesToSurfaceRays").hide();
        $("#contOptions").hide();
        $("#intOptions").hide();
        $("#ChevronOptions").hide();
        $("#blotchOptions").hide();
        $("#concringsOptions").hide();

    };
    break;

case (id.includes("shellPatternRaysYes")):

    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("shellPatternRaysYes")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };

    if (used != 1) {
        CharsUsed.push(id)
    };

    if (id == "shellPatternRaysNo") {
        $("#rayOptionsYes").hide();
    } else {
        $("#rayOptionsYes").show();
    };

    break;

case (id.includes("RaysContinuous")):

    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("RaysContinuous")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };

    if (used != 1) {
        CharsUsed.push(id)
    };

    break;

case (id.includes("BrokenRays")):

    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("BrokenRays")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };

    if (used != 1) {
        CharsUsed.push(id)
    };

    break;
case (id.includes("shellPatternRaysAllOver")):

    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("shellPatternRaysAllOver")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };

    if (used != 1) {
        CharsUsed.push(id)
    };

    break;
case (id.includes("shellPatternRaysRestrictedPosteriorSlope")):

    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("shellPatternRaysRestrictedPosteriorSlope")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };

    if (used != 1) {
        CharsUsed.push(id)
    };

    break;
case (id.includes("shellPatternRaysRestrictedToUmbo")):

    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("shellPatternRaysRestrictedToUmbo")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };

    if (used != 1) {
        CharsUsed.push(id)
    };

    break;

case (id.includes("PustulesOnUmbo")):

    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("PustulesOnUmbo")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };

    if (used != 1) {
        CharsUsed.push(id)
    };

    break;

case (id.includes("Chevrons")):

    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("Chevrons")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };

    if (used != 1) {
        CharsUsed.push(id)
    };
    break;

case (id.includes("Blotches")):

    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("Blotches")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };

    if (used != 1) {
        CharsUsed.push(id)
    };
    break;

case (id.includes("Rings")):

    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("Rings")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };

    if (used != 1) {
        CharsUsed.push(id)
    };
    break;

    /*Shell Color */

case (id.includes("shellColor")):
    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("shellColor")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };
    if (used != 1) {
        CharsUsed.push(id)
    };

    break;

    /*Shell Shape */
case (id.includes("Shape")):
    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("Shape")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };
    if (used != 1) {
        CharsUsed.push(id)
    };

    break;

case (id.includes("posteriorRidge")):
    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("posteriorRidge")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };
    if (used != 1) {
        CharsUsed.push(id)
    };

    break;

case (id.includes("winged")):
    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("winged")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };
    if (used != 1) {
        CharsUsed.push(id)
    };

    break;
case (id.includes("pallial")):
    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("pallial")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };
    if (used != 1) {
        CharsUsed.push(id)
    };

    break;

case (id.includes("umboPosition")):
    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("umboPosition")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };
    if (used != 1) {
        CharsUsed.push(id)
    };

    break;

case (id.includes("sulcusPresent")):
    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("sulcusPresent")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };
    if (used != 1) {
        CharsUsed.push(id)
    };

    break;
    /*Foot Color */
case (id.includes("foot")):
    var used = 0;
    for (var i = 0; i < CharsUsed.length; i++) {
        if (CharsUsed[i].includes("foot")) {
            CharsUsed[i] = id;
            used = 1;
        }
    };
    if (used != 1) {
        CharsUsed.push(id)
    };

    break;

};
};