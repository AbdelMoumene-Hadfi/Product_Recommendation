#!/usr/bin/python

import sys
def mapper():
  for line in sys.stdin:
      data=line.strip().split(",")
      index,userId,productId,Rating,timestamp=data
      print "{0},{1}".format(userId,1)


def main():
	mapper()

if __name__ == "__main__":
    main()
