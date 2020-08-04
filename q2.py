"""
Question: 
Write a generic function to compute various scenarios for the following optimization problem: 
A farmer owns X acres of land. She profits P1 dollars per acre of corn and P2 dollars per acre of oats. 
Her team has Y hours of labor available. The corn takes H1 hours of labor per acre and oats require H2 hours of labor per acre. 
How many acres of each can be planted to maximize profits?
"""

"""
Answer:
x1, x2 - acres of corn and oats respectively
x1,x2 >= 0
H1, H2 >= 0
x1 + x2 =< X
x1H1 + x2H2 =< Y
P(x1, x2) = x1P1 + x2P2 (Maximize)
"""

import sys

def calculateProfit(acres,profitPerAcre):
    x1 = acres[0]
    x2 = acres[1]
    P1 = profitPerAcre[0]
    P2 = profitPerAcre[1]
    return x1*P1 + x2*P2

def findMaxTurningPoint(input):
    """
    """
    X = input[0]
    Y = input[1]
    P1 = input[2]
    P2 = input[3]
    H1 = input[4]
    H2 = input[5]

    maxProfit = 0
    x1 = 0
    x2 = 0
    inflectionPoints = [(0,0),(x1, 0),(0, x2),(x1*H1,0),(0,x2*H2),((Y-X*H2)/(H1-H2),(X-(Y-X*H2)/(H1-H2)))]
    for point in inflectionPoints:
        profit = calculateProfit(point, (P1,P2))
        if profit > maxProfit:
            x1 = point[0]
            x2 = point[1]
            maxProfit = profit

        else:
            pass

    print('A maximum estimated profit of ${0} would be given by planting {1} and {2} acres of corn and oats respectively'.format(maxProfit, x1, x2))
    return 


if __name__ == '__main__':
    """
    """
    if len(sys.argv) > 1:
        if sys.argv[1] == 'test':
            t1 = (240, 320, 40, 30, 2, 1)
            t2 = (300, 380, 70, 45, 3, 1)
            t3 = (180, 420, 65, 55, 3, 2)

            for index, t in enumerate([t1,t2,t3]):
                print('Running Test {0}'.format(index + 1))
                findMaxTurningPoint(t)
        
        elif type(sys.argv[1]) == tuple:
            if len(tuple) == 6:
                print('Estimating optimum land distribution for maximising profit from corn and oats!')
            else:
                print('Error: please provide a tuple of the form (X, Y, P1, P2, H1, H2)')

        else:
            print('Error: please provide a tuple of the form (X, Y, P1, P2, H1, H2)')
    else:
        print('Please supply a commandline arguement - \'test\' to run tests or a tuple of the form (X, Y, P1, P2, H1, H2) to calculate a new optimization')

    

