#!/usr/bin/python3
"""class square: optional size must be int."""


class Square:
    """define square by size"""
    def __init__(self, size=0):
        self.size = size

    @property
    def size(self):
        """retrieve size and make it private"""
        return self.__size

    @size.setter
    def size(self, value):
        if not isinstance(value, int):
            raise TypeError("size must be an integer")
        if value < 0:
            raise ValueError("size must be >= 0")
        self.__size = value

    """public instance method area"""
    def area(self):
        area = self.__size ** 2
        return area
