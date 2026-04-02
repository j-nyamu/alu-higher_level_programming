#!/usr/bin/python3
"""class square: defines a square with private size instance attribute"""


class Square:
    """intializing and setting attribute to private"""
    def __init__(self, size):
        self.__size = size
