// package whatever; // don't place package name!
// import java.util.Arrays for Arrays.toString()

import java.io.*;

class MyCode {
	public static void main (String[] args) {
		System.out.println(kmp("abxabcabcaby", "abcaby"));
		System.out.println(kmp("abcxabcdabxabcdabcdabcy", "abcdabcy"));
		System.out.println(kmp("abcxabcdabxabcdabcdabcy", "vabcdabcy"));
	}


  public static boolean kmp(String text, String pattern) {
    int[] lps = computeLPS(pattern);
    // for (int i : lps) {
    //   System.out.println(i);
    // }

    int i = 0; // for iteration through text
    int j = 0; // for iteration through pattern
    int N = text.length();
    int M = pattern.length();

    while (i < N) {
      if (text.charAt(i) == pattern.charAt(j)) {
        // characters do match
        i++;
        j++;
        if (j == M) {
          return true;
        }
      } else {
        // characters do not match
        if (j == 0) {
          i++;
        } else {
          j = lps[j - 1];
        }
      }
    }

    return false;
  }

  public static int[] computeLPS(String pattern) {
    int[] result = new int[pattern.length()];
    int j = 0;
    int i = 1;

    result[0] = 0;

    while (i < result.length) {
      if (pattern.charAt(i) == pattern.charAt(j)) { //java is hella verbose
        result[i] = j + 1;
        i++;
        j++;
      } else {
        if (j == 0) {
          result[i] = 0;
          i++;
        } else {
          j = result[j - 1];
        }
      }
    }


    return result;
  }
}



function computeLPS(pattern) {
  let lps = [];
  let N = pattern.length;

  lps[0] = 0;

  let i = 1, j = 0;

  while (i < N) {
    if (pattern[i] === pattern[j]) {
      lps[i] = j + 1;
      i++;
      j++;
    } else {
      if (j !== 0) {
        j = lps[j - 1];
      }else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;


}

console.log(computeLPS("AAACAAAA"));


/*
              l
                   i
pattern = "AAACAAAA";

lps = [0, 1, 2, 0, 1, 2, 3, 3]


                    i
pattern = "AABAACAABAA"
                l

lps = [0, 1, 0, 1, 2, 0, 1, 2, 3, 4, 5]

*/



/*
I sort of get why j-1 is used for the else case. So, when we reach that point
where the two characters do not match if j > 0, then we assume that the longest
prefix/suffix has been reached. So, we’ll look at that value at that point in
the array points us to the characters at the index where those characters were
first matched with the current characters. If there is a match at that point,
we will return j + 1 else, we’ll keep going back until j = 0.
*/
