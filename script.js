
function idealPlant() {
 
    let answer1 = document.forms.questions.elements.customRadioInline1.value;    
    let answer2 = document.forms.questions.elements.customRadioInline5.value;
    let answer3 = document.forms.questions.elements.customRadioInline3.value;

    const mossRose = '<p><b>Moss Rose:</b> It should be grown in full sun. Watering should be moderate, keeping the soil slightly moist. Excellent plant for any type of pot.</p>';
    const asparagusSprengeri = '<p><b>Asparagus Sprengeri:</b> It should be grown in full sun. Watering should be moderate, keeping the soil slightly moist. Perfect for hanging pots.</p>';
    const plectranthusIncense = '<p><b>Plectranthus Incense:</b> It can be grown in full sun or partial shade. It tolerates dry periods, water when the soil is dry. Perfect for hanging pots.</p>';
    const dracaenaTrifasciata = '<p><b>Dracaena Trifasciata:</b> It can be grown in full sun or partial shade. It tolerates long periods of drought, water when the soil is dry. Great to have in pots and flower beds.</p>';
    const geranium = '<p><b>Geranium:</b> It should be grown in full sun. Watering should be moderate, keeping the soil slightly moist. Plant suitable for any type of pot.</p>';
    const spiderPlant = "<p><b>Spider Plant:</b> It should be grown in partial shade. Watering should be spaced out, it doesn't like waterlogged soil. Suitable for any type of pot.</p>";
    const hydrangea = "<p><b>Hydrangea:</b> It should be grown in partial shade, receiving some morning or late afternoon sun. It's important to keep the soil moist. Suitable for pots, flower beds, and directly in the ground.</p>";
    const peperomiaScandens = '<p><b>Peperomia Scandens:</b> It should be grown in partial shade. Watering should be moderate, keeping the soil slightly moist. Perfect for hanging pots.</p>';
    const croton = '<p><b>Croton:</b> It should be grown in full sun. Watering should be moderate, keeping the soil moist. Suitable for pots, flower beds, and directly in the ground.</p>';
    const rose = '<p><b>Rose:</b> It should be grown in full sun. Watering should be frequent, keeping the soil moist. Great to have in pots and directly in the ground.</p>';
    const holly = '<p><b>Holly:</b> It should be grown in partial shade, receiving some morning or late afternoon sun. Watering should be moderate, keeping the soil slightly moist. Suitable for pots, flower beds, and directly in the ground.</p>';
    const tradescantiaZebrina = '<p><b>Tradescantia zebrina:</b> It should be grown in partial shade. Watering should be moderate, keeping the soil slightly moist. Suitable for any type of pot.</p>';
    const swedishIvy = '<p><b>Swedish Ivy:</b> It should be grown in partial shade. Watering should be frequent, keeping the soil moist. Perfect for hanging pots.</p>';
    const goldenPothos = '<p><b>Golden Pothos:</b> It should be grown in partial shade. Watering should be moderate, keeping the soil slightly moist. Perfect for hanging pots.</p>';
    const basketFern = '<p><b>Basket Fern:</b> It should be grown in partial shade. Watering should be frequent, keeping the soil moist. Perfect for hanging pots.</p>';

    if (answer1 == 1 && answer2 == 1 && answer3 == 1) { // Scenario all Yes.
        document.getElementById('plantsresults').innerHTML = mossRose + asparagusSprengeri + plectranthusIncense +geranium;
        
    } else if (answer1 == 1 && answer2 == 1 && answer3 == 2) { // Scenario Yes, Yes, No.
        document.getElementById('plantsresults').innerHTML = plectranthusIncense + dracaenaTrifasciata + asparagusSprengeri + geranium + mossRose;

    } else if (answer1 == 1 && answer2 == 2 && answer3 == 1) { // Scenario Yes, No, Yes.
        document.getElementById('plantsresults').innerHTML = plectranthusIncense + geranium + mossRose + asparagusSprengeri

    } else if (answer1 == 1 && answer2 == 2 && answer3 == 2) { // Scenario Yes, No, No.
        document.getElementById('plantsresults').innerHTML = plectranthusIncense + geranium + croton + rose + mossRose + asparagusSprengeri + dracaenaTrifasciata;

    } else if (answer1 == 2 && answer2 == 1 && answer3 == 1) { // Scenario No, Yes, Yes.
        document.getElementById('plantsresults').innerHTML = spiderPlant + peperomiaScandens + goldenPothos + plectranthusIncense;

    } else if (answer1 == 2 && answer2 == 1 && answer3 == 2) { //Scenario No, Yes, No.
        document.getElementById('plantsresults').innerHTML = plectranthusIncense + peperomiaScandens + goldenPothos + dracaenaTrifasciata + spiderPlant + holly;

    } else if (answer1 == 2 && answer2 == 2 && answer3 == 1) { // Scenario No, No, Yes.
        document.getElementById('plantsresults').innerHTML = spiderPlant + swedishIvy + plectranthusIncense + goldenPothos + peperomiaScandens + tradescantiaZebrina + basketFern;

    } else if (answer1 == 2 && answer2 == 2 && answer3 == 2) { // Scenario all No.
        document.getElementById('plantsresults').innerHTML = spiderPlant + plectranthusIncense + hydrangea + peperomiaScandens + holly + tradescantiaZebrina + dracaenaTrifasciata + basketFern + swedishIvy + goldenPothos;
   
    } else {
        document.getElementById('plantsresults').innerHTML = "<p><b>Please, answer all the statements.</b></p>"
        }   
    }