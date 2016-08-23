/**
 * Created by Nikolay_Terentyev on 8/22/16.
 */


function getColorFunction(period, shift, maxValue, minValue) {
    var omega = 2 * Math.PI / period,
        amplitude = (maxValue - minValue) / 2;
    return function(t) {

        return minValue + amplitude * Math.cos(omega * (t - shift));
    }
}


var gradesTotal = 17,
    getRed = getColorFunction(gradesTotal*2, gradesTotal * 2/3, 255, 170),
    getGreen = getColorFunction(gradesTotal, gradesTotal * 3 / 4, 255, 120),
    getBlue = getColorFunction(gradesTotal/2, gradesTotal, 255, 120);


var i = 0,
    imax = gradesTotal,
    istep = 1;


while (i < imax) {
    console.log('<div' +
        ' style="width:100px;height:100px;color:white;background-color:#' + getTileColor(i) + '">' + i + '</div>');
    i += istep;
}


/**
 * 
 * @param grade
 */
function getTileColor (grade) {
    return decToHex(Math.round(getRed(grade)))
        + decToHex(Math.round(getGreen(grade)))
        + decToHex(Math.round(getBlue(grade)));
}


/**
 *  converts DEC to HEX string
 * @param number
 * @returns {string}
 */
function decToHex (number) {
    return (number < 16) ? '0' + number.toString(16) : number.toString(16);
}