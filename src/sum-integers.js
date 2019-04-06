const getSum = (a, b) => b === 0 ? a : getSum(a^b, (a & b) << 1);

