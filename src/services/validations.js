
const isValidGamertag = (tag) =>{
        const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
        const numbers = /\d/;
        return tag.length >= 8 && specialCharacters.test(tag) && numbers.test(tag);
};

const isEmpty = (label) => !label || label.length === 0;

exports.isValidGamertag = isValidGamertag;
exports.isEmpty = isEmpty;
