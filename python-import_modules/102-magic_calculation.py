#!/usr/bin/python3
def magic_calculation(a, b):
    from magic_calculation_102 import add, sub

    """Match bytecode provided.

    Args:
        a: first integer
        b: second integer

    Returns:
        The return value. Depends of the arguments.
    """
    if a < b:
        c = add(a, b)
        for i in range(4, 6):
            c = add(c, i)
        return (c)
    else:
        return (sub(a, b))
