#!/usr/bin/python3
"""class square: optional size must be int."""


class Square:
    """takes size int and greater than or equal to zero"""
    def __init__(self, size=0):
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        if size < 0:
            raise ValueError("size must be >= 0")
        self.__size = size
