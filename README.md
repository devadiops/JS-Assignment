# JS Assignment - Fundamentals of Web Design

## Overview
This repository contains solutions to Assignment 4 using plain JavaScript.  
All problems are solved using prompt() for input and alert() for output as required.

---

## Question 1: Digit Gatekeeper

### Approach:
- Iterate from L to R
- Check:
  - Divisible by K
  - No digit '0'
  - Sum of digits is prime
- Count valid numbers

### Time Complexity:
O(N * d)  
(N = range size, d = digits per number)

---

## Question 2: Roll-Seed Lock

### Approach:
- Perform 3 transformations:
  - Even → current / 2 + seed
  - Odd → current * 3 - seed
- Check:
  - Final number is 3-digit
  - Middle digit equals seed

### Time Complexity:
O(1)

---

## Question 3: Mirror Corridor

### Approach:
- Try all X from 0 to 100000
- Check:
  - N + X is palindrome
  - Divisible by K
- Return smallest X

### Time Complexity:
O(100000 * d)

---

## Question 4: Fare Calculator

### Approach:
- Apply fare rules step-by-step:
  - Base + distance
  - Late penalty
  - Distance bonus
  - Seed adjustment
  - Round to nearest multiple of 5

### Time Complexity:
O(1)

---

## Question 5: Skipping Numbers

### Approach:
- Keep adding numbers from 1 onwards
- Skip numbers divisible by (seed + 2)
- Stop when sum ≥ N

### Time Complexity:
O(m)

---

## Question 6: Contest Score Judge

### Approach:
- Compute score = 3a + b - 2c
- Apply:
  - No negative score
  - Penalty if total attempts > 50
- Decide PASS or FAIL

### Time Complexity:
O(1)

---

## Notes
- No hardcoding used
- All inputs taken using prompt()
- Outputs displayed using alert()
