"""
Question:
 Given a string representing a Roman numeral, write a function to compute the Arabic numerical equivalent. 
 For example roman_to_arabic("MDCCLXXVI") should return 1776.
"""

import sys

def romanToArabic(input):
    """
        Function to map a roman number to arabic number
    """
    numberMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
        }
    
    sum = 0
    for c in input:
        try:
            sum += numberMap[c]
        except:
            print('Unrecognized character \'{0}\' - please ensure all characters are Roman and try again'.format(c))
            return False
    print('Arabic representation of number is {0}!'.format(sum))
    return sum

if __name__ == "__main__":
    """
       Convert roman to arabic numerals
    """
    if len(sys.argv) > 1:
        print('Converting arguments from stdin to arabic numerals!')
        for i in range(1, len(sys.argv)):
            romanToArabic(sys.argv[i])
    else:
        print('Please provide commandline arguments or import the function to use in your own code!')
