#!/usr/bin/python3


def remove_char_at(str, n):
    i = 0
    nw_str = ""
    for char in str:
        if i != n:
            nw_str += char
        i += 1
    return nw_str
