module.exports = function toReadable(number) {

    const n = number.toString();
    const rn = n.split('').reverse().join('');

    let result = '';

    if (number < 10) {

        if (number === 0) {
            result = 'zero';
        } else if (number === 1) {
            result = 'one';
        } else if (number === 2) {
            result = 'two';
        } else if (number === 3) {
            result = 'three';
        } else if (number === 4) {
            result = 'four';
        } else if (number === 5) {
            result = 'five';
        } else if (number === 6) {
            result = 'six';
        } else if (number === 7) {
            result = 'seven';
        } else if (number === 8) {
            result = 'eight';
        } else if (number === 9) {
            result = 'nine';
        }
        return result;

    } else {

        if (rn[1] === '0' && rn[0] === '0') {
            result = result;
        } else if (rn[1] === '0' && rn[0] === '1') {
            result = 'one';
        } else if (rn[1] === '0' && rn[0] === '2') {
            result = 'two';
        } else if (rn[1] === '0' && rn[0] === '3') {
            result = 'three';
        } else if (rn[1] === '0' && rn[0] === '4') {
            result = 'four';
        } else if (rn[1] === '0' && rn[0] === '5') {
            result = 'five';
        } else if (rn[1] === '0' && rn[0] === '6') {
            result = 'six';
        } else if (rn[1] === '0' && rn[0] === '7') {
            result = 'seven';
        } else if (rn[1] === '0' && rn[0] === '8') {
            result = 'eight';
        } else if (rn[1] === '0' && rn[0] === '9') {
            result = 'nine';
        } else if (rn[1] === '1' && rn[0] === '0') {
            result = 'ten';
        } else if (rn[1] === '1' && rn[0] === '1') {
            result = 'eleven';
        } else if (rn[1] === '1' && rn[0] === '2') {
            result = 'twelve';
        } else if (rn[1] === '1' && rn[0] === '3') {
            result = 'thirteen';
        } else if (rn[1] === '1' && rn[0] === '4') {
            result = 'fourteen';
        } else if (rn[1] === '1' && rn[0] === '5') {
            result = 'fifteen';
        } else if (rn[1] === '1' && rn[0] === '6') {
            result = 'sixteen';
        } else if (rn[1] === '1' && rn[0] === '7') {
            result = 'seventeen';
        } else if (rn[1] === '1' && rn[0] === '8') {
            result = 'eighteen';
        } else if (rn[1] === '1' && rn[0] === '9') {
            result = 'nineteen';
        } else if (rn[1] === '2') {
            result = 'twenty';
        } else if (rn[1] === '3') {
            result = 'thirty';
        } else if (rn[1] === '4') {
            result = 'forty';
        } else if (rn[1] === '5') {
            result = 'fifty';
        } else if (rn[1] === '6') {
            result = 'sixty';
        } else if (rn[1] === '7') {
            result = 'seventy';
        } else if (rn[1] === '8') {
            result = 'eighty';
        } else if (rn[1] === '9') {
            result = 'ninety';
        }

        if (rn[0] === '0') {
            result = result;
        } else if (rn[0] === '1' && rn[1] !== '1' && rn[1] !== '0') {
            result = result + ' one';
        } else if (rn[0] === '2' && rn[1] !== '1' && rn[1] !== '0') {
            result = result + ' two';
        } else if (rn[0] === '3' && rn[1] !== '1' && rn[1] !== '0') {
            result = result + ' three';
        } else if (rn[0] === '4' && rn[1] !== '1' && rn[1] !== '0') {
            result = result + ' four';
        } else if (rn[0] === '5' && rn[1] !== '1' && rn[1] !== '0') {
            result = result + ' five';
        } else if (rn[0] === '6' && rn[1] !== '1' && rn[1] !== '0') {
            result = result + ' six';
        } else if (rn[0] === '7' && rn[1] !== '1' && rn[1] !== '0') {
            result = result + ' seven';
        } else if (rn[0] === '8' && rn[1] !== '1' && rn[1] !== '0') {
            result = result + ' eight';
        } else if (rn[0] === '9' && rn[1] !== '1' && rn[1] !== '0') {
            result = result + ' nine';
        }

        if (rn[2] === '1' && rn[1] === '0' && rn[0] === '0') {
            result = 'one hundred';
        } else if (rn[2] === '1') {
            result = 'one hundred' + ' ' + result;
        } else if (rn[2] === '2' && rn[1] === '0' && rn[0] === '0') {
            result = 'two hundred';
        } else if (rn[2] === '2') {
            result = 'two hundred' + ' ' + result;
        } else if (rn[2] === '3' && rn[1] === '0' && rn[0] === '0') {
            result = 'three hundred';
        } else if (rn[2] === '3') {
            result = 'three hundred' + ' ' + result;
        } else if (rn[2] === '4' && rn[1] === '0' && rn[0] === '0') {
            result = 'four hundred';
        } else if (rn[2] === '4') {
            result = 'four hundred' + ' ' + result;
        } else if (rn[2] === '5' && rn[1] === '0' && rn[0] === '0') {
            result = 'five hundred';
        } else if (rn[2] === '5') {
            result = 'five hundred' + ' ' + result;
        } else if (rn[2] === '6' && rn[1] === '0' && rn[0] === '0') {
            result = 'six hundred';
        } else if (rn[2] === '6') {
            result = 'six hundred' + ' ' + result;
        } else if (rn[2] === '7' && rn[1] === '0' && rn[0] === '0') {
            result = 'seven hundred';
        } else if (rn[2] === '7') {
            result = 'seven hundred' + ' ' + result;
        } else if (rn[2] === '8' && rn[1] === '0' && rn[0] === '0') {
            result = 'eight hundred';
        } else if (rn[2] === '8') {
            result = 'eight hundred' + ' ' + result;
        } else if (rn[2] === '9' && rn[1] === '0' && rn[0] === '0') {
            result = 'nine hundred';
        } else if (rn[2] === '9') {
            result = 'nine hundred' + ' ' + result;
        }
        return result;
    }
}