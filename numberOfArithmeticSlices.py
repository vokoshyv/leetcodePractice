class Solution(object):
    def numberOfArithmeticSlices(self, A):
        """
        :type A: List[int]
        :rtype: int
        """


A = [1,2,3]

diff = 1;
second difference = 1;

count = 1

     0 1 2 3
    [1,2,3]


Difference up to this point = [0,1,1,1]
A Slices up to this point =   [0,0,1,2]
A =                           [1,2,3,4]



                            [1,2,3,4,5]  =>  [6,1]
                        /                       \
                [1,2,3,4] => [3,1]                 [2,3,4,5] => [2,1]
            /               \                       /       \
    [1,2,3] => [1,1]     [2,3,4] =>[1,1]  [2,3,4] => [0,1]   [3,4,5] => [1,1]

[number of arithmetic slices, difference]


[1,2,3],[2,3,4],[3,4,5],[1,2,3,4],[2,3,4,5],[1,2,3,4,5]

visited = {
    "1_3"
}
