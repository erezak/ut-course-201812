class AttStringUtils {
    concatLower(first, second) {
        let result = "";
        if(!first) {
            result = second;
        } else if (!second) {
            result = first;
        } else {
            result = first + second;
        }

        return result.toLowerCase();
    }    
}

module.exports = AttStringUtils;