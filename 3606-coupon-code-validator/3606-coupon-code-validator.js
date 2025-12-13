/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
     const categories = ["electronics", "grocery", "pharmacy", "restaurant"];
    const priority = { electronics: 0, grocery: 1, pharmacy: 2, restaurant: 3 };

    const n = code.length;
    const validCoupons = [];

    const isValid = (idx) => {
        if (!isActive[idx]) return false;
        if (!categories.includes(businessLine[idx])) return false;
        if (!/^\w+$/.test(code[idx])) return false;
        return true;
    };

    for (let i = 0; i < n; i++) {
        if (isValid(i)) {
            validCoupons.push([businessLine[i], code[i]]);
        }
    }

    validCoupons.sort((a, b) => {
        const [catA, codeA] = a;
        const [catB, codeB] = b;
        if (priority[catA] !== priority[catB]) {
            return priority[catA] - priority[catB];
        }
        // Plain ASCII lexicographical order (case-sensitive)
        if (codeA === codeB) return 0;
        return codeA < codeB ? -1 : 1;
    });

    return validCoupons.map(([_, c]) => c);
};