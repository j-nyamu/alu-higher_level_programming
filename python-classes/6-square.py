#!/usr/bin/python3
"""Defines a Square class with size and position attributes
and methods to calculate area and print the square."""


class Square:
    """Defines a square"""
    def __init__(self, size=0, position=(0, 0)):
        self.size = size
        self.position = position
        """"Initializes a square with a given size and position."""

    @property
    def size(self):
        return self.__size

    """Gets the size of the square."""
    @size.setter
    def size(self, value):
        if not isinstance(value, int):
            raise TypeError("size must be an integer")
        if value < 0:
            raise ValueError("size must be >= 0")
        self.__size = value

    """Sets the size of the square."""
    @property
    def position(self):
        return self.__position

    """Gets the position of the square."""
    @position.setter
    def position(self, value):
        if (
            not isinstance(value, tuple) or
            len(value) != 2 or
            not all(isinstance(i, int) for i in value) or
            not all(i >= 0 for i in value)
        ):
            raise TypeError("position must be a tuple of 2 positive integers")
        self.__position = value

    """calculates the area of the square."""
    def area(self):
        area = self.__size ** 2
        return area

    """creates a square of size size with # characters."""
    def my_print(self):
        if self.size == 0:
            print()
            return
        for _ in range(self.position[1]):
            print()
        for _ in range(self.size):
            print(" " * self.position[0] + "#" * self.size)
