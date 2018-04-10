// package whatever; // don't place package name!


// https://www.geeksforgeeks.org/number-of-paths-with-exactly-k-coins/

import java.io.*;
import java.util.*;

class MyCode {
  public static void main (String[] args) {
//     int[][] matrix = new int[][] { {1, 2, 3},
//                                    {4, 6, 5},
//                                    {3, 2, 1}};

    int[][] matrix = new int[][] { {1, 2},
                                   {3, 4}};

    System.out.println(RobotPaths.exactPath(matrix, 8));

//     System.out.println(RobotPaths.compute1(matrix));
//     System.out.println(RobotPaths.compute2(matrix));
  }
}


/*

[[1,1,1] ,
 [0,0,0]]

*/

class RobotPaths {

//   public static Integer count = 0;
//   public static int[][] matrix;

//   public static Integer compute1(int[][] inpMatrix) {
//     matrix = inpMatrix;
//     traverse(0, 0);
//     return count;
//   }

//   public static void traverse(int x, int y) {
//     if (x < 0 || y < 0 || x >= matrix[0].length || y >= matrix.length) {
//       return;
//     } else if (matrix[y][x] == 1) {
//       return;
//     } else if (y == matrix.length - 1 && x == matrix[0].length - 1) {
//       count++;
//       return;
//     }

//     matrix[y][x] = 1;

//     traverse(x+1, y);
//     traverse(x-1, y);
//     traverse(x, y+1);
//     traverse(x, y-1);

//     matrix[y][x] = 0;
//   }


  public static Integer count = 0;
  public static int[][] matrix;

  public static Integer exactPath(int[][] inpMatrix, int k) {
    matrix = inpMatrix;
    traverse(0, 0, k, new ArrayList<Integer>());
    return count;
  }

  public static void traverse(int x, int y, int money, ArrayList<Integer> path) {
    if (x < 0 || y < 0 || x >= matrix[0].length || y >= matrix.length) {
      return;
    } else if (matrix[y][x] == 0) {
      return;
    }


    int temp = matrix[y][x];
    money -= temp;
    if (money < 0) {
      return;
    }


    path.add(temp);
    System.out.println(path);

    if (y == matrix.length - 1 && x == matrix[0].length - 1) {
      if (money == 0) {
        System.out.println(money);
        System.out.println(path);
        count++;
      }
      path.remove(path.size()-1);
      return;
    }

    matrix[y][x] = 0;

    traverse(x+1, y, money, path);
    traverse(x-1, y, money, path);
    traverse(x, y+1, money, path);
    traverse(x, y-1, money, path);

    matrix[y][x] = temp;
    money += temp;
    path.remove(path.size()-1);
  }






//   public static Integer compute2(int[][] inpMatrix) {
//     matrix = inpMatrix;
//     return travel(0, 0);
//   }

//   public static Integer travel(int x, int y) {
//     if (x < 0 || y < 0 || x >= matrix[0].length || y >= matrix.length) {
//       return 0;
//     } else if (matrix[y][x] == 1) {
//       return 0;
//     } else if (y == matrix.length - 1 && x == matrix[0].length - 1) {
//       return 1;
//     }

//     matrix[y][x] = 1;

//     Integer count = 0;

//     count += travel(x+1, y);
//     count += travel(x-1, y);
//     count += travel(x, y+1);
//     count += travel(x, y-1);


//     matrix[y][x] = 0;

//     return count;

//   }








}
