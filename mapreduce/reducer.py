#!/usr/bin/python

import sys
def reducer():
  Count = 0
  oldKey = None
  for line in sys.stdin:
    data=line.strip().split(",")
    thisKey,thisCount = data
    if oldKey != None and oldKey != thisKey :
        print "{0},{1}".format(oldKey,Count)
        Count=0
    oldKey=thisKey
    Count+=int(thisCount)
  if oldKey != None :
    print "{0},{1}".format(oldKey,Count)


def main():
	reducer()

if __name__ == "__main__":
    main()
