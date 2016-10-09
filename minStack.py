class MinStack(object):

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.storage = []
        self.minStorage = []
        

    def push(self, x):
        """
        :type x: int
        :rtype: void
        """
        self.storage.append(x)
        if (x < self.minStorage[len(self.minStorage) - 1]):
            self.minStorage.append(x)
        else:
            self.minStorage.append(self.minStorage[len(self.minStorage) - 1])
        

    def pop(self):
        """
        :rtype: void
        """
        self.storage.pop()
        self.minStorage.pop()
        

    def top(self):
        """
        :rtype: int
        """
        return self.storage[len(self.storage) - 1]
        

    def getMin(self):
        """
        :rtype: int
        """
        return self.minStorage[len(self.minStorage) - 1]
        


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()