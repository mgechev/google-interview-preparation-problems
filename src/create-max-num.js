// https://leetcode.com/mockinterview/session/detail/2ukubn2/

const helper = (s, t, i, j, num, k, m = {}) => {
    m[k] = m[k] || {};
    m[k][i] = m[k][i] || {};
    if (k === 0) {
        return num;
    }
    if (m[k][i][j] !== undefined) {
        return m[k][i][j];
    }
    let result = [];
    if (i < s.length) {
      result.push(helper(s, t, i + 1, j, num, k, m));
      result.push(helper(s, t, i + 1, j, num * 10 + s[i], k - 1, m));
    }
    if (j < t.length) {
      result.push(helper(s, t, i, j + 1, num, k, m));
      result.push(helper(s, t, i, j + 1, num * 10 + t[j], k - 1, m));
    }
    const res = result.reduce((a, b) => Math.max(a, b), 0);
    m[k][i][j] = res;
    return res;
};

var maxNumber = function(nums1, nums2, k) {
    let res = helper(nums1, nums2, 0, 0, 0, k);
    const arr = [];
    while (res) {
        arr.push(res % 10);
        res = Math.floor(res / 10);
    }
    return arr.reverse();
};

console.log(maxNumber([3,4,6,5], [9,1,2,5,8,3], 5));
