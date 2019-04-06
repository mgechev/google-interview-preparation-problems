// https://leetcode.com/problems/longest-palindromic-substring/description/

const longestPalindrome = (str, s = 0, e = str.length) => {
  if (!str.length) {
    return '';
  }
  if (s + 1 >= e) {
    return str[s];
  }
  let end = e;
  let pal = true;
  while (e > s) {
    pal = true;
    for (let i = s; i <= s + Math.floor((e - s) / 2) && pal; i += 1) {
      if (str[i] !== str[s + e - i - 1]) {
        pal = false;
      }
    }
    if (pal) {
      break;
    }
    e -= 1;
  }
  let max = '';
  if (pal) {
    max = str.substring(s, e);
  }
  const next = longestPalindrome(str, s + 1, end);
  return next.length > max.length ? next : max;
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('bb'));
console.log(longestPalindrome('abb'));
console.log(longestPalindrome('abcda'));
console.log(longestPalindrome('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'));
