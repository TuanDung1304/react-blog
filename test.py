import copy
from typing import Dict, List # for annotations
import math
class Graph :

    def __init__ (self):
        self.allpaths = []

    def FindAllPaths (self, adjlist : Dict[int, List[int]] , src : int, dst : int):
        # Clear previously stored paths
        path = []
        path.append(src)
        print("Source : " + str(src) + " Destination : " +  str(dst))

        # Use depth first search (with backtracking) to find all the paths in the graph
        self.DFS (adjlist, src, dst, path)

        # Print all paths
        self.Print ()

    def Print (self):
        # print (self.allpaths)
        arr = []
        for path in self.allpaths:
            print("Path : " + str(path[0]) + "--------TotalFloat: " + str(path[1]))
            arr.append(path[1])
        print("Max duration: " + str(max(arr)))
        self.allpaths.clear()

    # This function uses DFS at its core to find all the paths in a graph
    def DFS (self, adjlist : Dict[int, List[int]], src : int, dst : int, path : List[int]):
        if (src == dst):
            totalFloat = 0
            for i in path:
                totalFloat += adjlist[i][1]
            self.allpaths.append([copy.deepcopy(path), totalFloat])
        else:
            for adjnode in adjlist[src][0]:
                path.append(adjnode)
                self.DFS (adjlist, adjnode, dst, path)
                path.pop()

def main():

    g1_adjlist = { 
        0: [[1, 2, 23, 24], 0], 1: [[3], 16], 2: [[4], 24], 3: [[4], 16], 4: [[5], 8], 5: [[6, 7], 8],
        6: [[8], 8], 7: [[8], 8], 8: [[9, 10, 15], 32], 9: [[11, 12, 13], 16], 10: [[11,12,13,14], 16], 11: [[16], 16],
        12: [[17], 16], 13: [[18], 16], 14 : [[16,17,18], 48], 15: [[16,17,18], 16], 16: [[19], 144], 17: [[19], 96],
        18: [[19], 144], 19: [[20], 16], 20: [[21], 24], 21: [[22], 16], 22: [[31], 24], 23: [[25], 32],
        24: [[25], 16], 25: [[26], 8], 26: [[27], 24], 27: [[28,29], 24], 28: [[30,32], 48], 29: [[30,32], 32],
        30: [[48], 32], 31: [[48], 32], 32: [[37,38,39], 16], 33: [[43,44], 72], 34: [[43,44], 72], 35: [[46], 64],
        36: [[46], 64], 37: [[40], 48], 38: [[48], 16], 39: [[48], 16], 40: [[41], 32], 41: [[42], 48],
        42: [[33,34], 16], 43: [[35,36,45], 8], 44: [[35,36,45], 16], 45: [[46], 16], 46: [[47], 16], 47: [[48], 8], 48:[[], 0]
    }

    g = Graph()

    print("All paths in graph G1")
    g.FindAllPaths(g1_adjlist, 0, 48)

if __name__ == "__main__":
    main()