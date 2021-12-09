function convertToCel(farenheitVal) {
    return (farenheitVal - 32) * 5 / 9;
}

function convertToFar(celsiusVal) {
    return 32 - (celsiusVal * 9 / 5);
}

exports.convertToCel = convertToCel;
exports.convertToFar = convertToFar;