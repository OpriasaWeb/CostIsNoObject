# Cost Is No Object

Design a program for Cost Is No Object - a car rental service that specializes in lending antique and luxury cars to clients on a short-term basis.

Design a flowchart or psuedocode for a program that accepts rental contract data and displays a completed rental contract ready for a customer's signature.

Accept the following as input:

Contract number

Customer's first and last names

Automobile's vehicle identification number

Starting date for the rental agreement stored as three separate variables - month, day, and year

Length, in days, of the rental agreement

Indicator of whether the customer bought the optional insurance policy 


Display output as follows:

If the contract number is not between 10000 and 99999 inclusive, issue an error message and end the program.

If the starting date for the rental agreement is invalid, issue an error message and end the program. (In other words, make sure the month is between 1 and 12 inclusive. If the month is 1, 3, 5, 7, 8, 10, or 12, the day must be between 1 and 31 inclusive. If the month is 2, the day must be between 1 and 28 inclusive. You do not need to check for leap years. If the month is 4, 6, 8, or 11, the day must be between 1 to 30 inclusive.)

If the length of the rental agreement is not between 1 and 30 days inclusive, issue an error message and end the program. Otherwise, calculate the ending month, day, and year based on the starting date and length of the agreement.

The insurance indicator must be "Y" or "N" (for "Yes" or "No"); otherwise, display an error message and assume "Y".

If all the entered data is valid, display it along with the fee for the rental, which is calculated as follows:

          $25 per day for 10 days or fewer
          $18 per day for each day over 10 days
          $2.50 per day for insurance, regardless of the number of days in the contract.
