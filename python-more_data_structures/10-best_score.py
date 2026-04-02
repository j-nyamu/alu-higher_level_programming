#!/usr/bin/python3


def best_score(a_dictionary):
    if not a_dictionary:
        return None
    keys = list(a_dictionary)
    best_key = keys[0]
    best_value = a_dictionary[best_key]
    for k in a_dictionary:
        value = a_dictionary[k]
        if value > best_value:
            best_value = value
            best_key = k
    return best_key
