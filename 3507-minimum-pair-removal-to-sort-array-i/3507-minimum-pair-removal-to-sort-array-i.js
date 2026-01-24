/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    let result = 0;

    const temps = [...nums];

    while (temps.length > 1) {
        let minIndex = -1;
        let minSum = Number.MAX_VALUE;
        let isAcc = true;

        for (let i = 0; i < temps.length - 1; i++) {
            const sum = temps[i] + temps[i + 1];

            if (sum < minSum) {
                minSum = sum;
                minIndex = i;
            }

            if (temps[i] > temps[i + 1]) {
                isAcc = false;
            }
        }

        if (isAcc) {
            break;
        }

        result++;
        temps[minIndex] = minSum;
        temps.splice(minIndex + 1, 1);
    }

    return result;
};