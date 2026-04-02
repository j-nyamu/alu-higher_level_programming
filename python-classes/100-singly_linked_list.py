#!/usr/bin/python3
"""Definessingly linked list with sorted insertion and str representation."""


class Node:
    """Defines node in singly linked list with
    data and next_node attributes."""
    def __init__(self, data, next_node=None):
        self.data = data
        self.next_node = next_node

    """Getter for data attribute."""
    @property
    def data(self):
        return self.__data

    """Setter for data attribute with type checking."""
    @data.setter
    def data(self, value):
        if not isinstance(value, int):
            raise TypeError("data must be an integer")
        self.__data = value

    """Getter for next_node attribute."""
    @property
    def next_node(self):
        return self.__next_node

    """Setter for next_node attribute with type checking."""
    @next_node.setter
    def next_node(self, value):
        if value is not None and not isinstance(value, Node):
            raise TypeError("next_node must be a Node object")
        self.__next_node = value


class SinglyLinkedList:
    """Defines a singly linked list with
    sorted insertion and string representation."""
    def __init__(self):
        self.__head = None

    """Inserts a new Node into the correct sorted position in the list."""
    def sorted_insert(self, value):
        new_node = Node(value)

        """ If the list is empty or the new node should be the new head. """
        if self.__head is None or value < self.__head.data:
            new_node.next_node = self.__head
            self.__head = new_node
            return

        """ Traverse the list to find the
        correct position for the new node. """
        current = self.__head
        while (current.next_node is not None and
               current.next_node.data < value):
            current = current.next_node

        """ Insert the new node in its correct position. """
        new_node.next_node = current.next_node
        current.next_node = new_node

    """ Returns a string representation of the
    list with one node's data per line. """
    def __str__(self):
        result = []
        current = self.__head

        while current is not None:
            result.append(str(current.data))
            current = current.next_node

        return "\n".join(result)
