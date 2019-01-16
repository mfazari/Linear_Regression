def main():
    x = 29.00  # comment
    if x == 29:
        print x

    y = "hello"*3
    print y

    #immutable tuples
    """ 
    t = (23, "abc", 4.56, (2,3), "def")
    t[2] = 3.14  # Doesn't work, tuples are "immutable"
    print t
    """
    #mutable lists
    li = ["abc", 23, 4.34, 23]
    li[1] = 45
    print li

    #extend lists
    li.extend([9, 8, 7])
    print li

    #append
    li.append([10, 11, 12])
    print li

    #Index
    li = ["Hello","Goodbye","Massimo"]
    print li.index("Massimo")   # index of first occurrence

    #li.count, li.remove, li.reverse, li.sort

    fruits = ["apple", "banana", "cherry"]
    for u in fruits:
        print(u)

    for x in "banana":
        print(x)

    for x in range(6):
        print(x)

    #range from 100 to 110 and increments 3 respectively
    for x in range(100, 110, 3):
        print(x)


    #COMPLEX NUMBERS ARE WRITTEN WITH j
    x = 3 + 5j
    y = 5j
    z = -5j

    print(type(x))
    print(type(y))
    print(type(z))

    #Python does not have built-in support for Arrays, but Python lists can be used instead.






main()