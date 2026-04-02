#!/usr/bin/python3


def multiply_by_2(a_dictionary):
    b_dict = {}
    for key in a_dictionary:
        b_dict[key] = a_dictionary[key] * 2
    return b_dict
