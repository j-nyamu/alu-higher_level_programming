#!/usr/bin/python3


def multiple_returns(sentence):
    if len(sentence) <= 0:
        lenn = 0
        return (0, None)
    else:
        lenn = len(sentence)
        return (len(sentence), sentence[0])
