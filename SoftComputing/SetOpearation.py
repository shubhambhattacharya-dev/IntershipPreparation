import numpy as np

def fuzzy_union_or(a, b, operator='max'):
    if len(a) != len(b):
        raise ValueError("Fuzzy sets must have the same length (same universe of discourse).")
    if operator == 'max':
        return np.maximum(a, b)
    else:
        raise NotImplementedError(f"Operator '{operator}' not supported for fuzzy union.")

def fuzzy_intersection_and(a, b, operator='min'):
    if len(a) != len(b):
        raise ValueError("Fuzzy sets must have the same length (same universe of discourse).")
    if operator == 'min':
        return np.minimum(a, b)
    else:
        raise NotImplementedError(f"Operator '{operator}' not supported for fuzzy intersection.")

def fuzzy_complement_not(a):
    return 1 - a


u = np.array([1, 2, 3, 4, 5])
print(f"Universe of discourse (u): {u}\n")

a = np.array([1.0, 0.8, 0.4, 0.1, 0.0])
b = np.array([0.0, 0.1, 0.3, 0.7, 1.0])

print("--- Original Sets ---")
print(f"Fuzzy set A: {a}")
print(f"Fuzzy set B: {b}\n")

a_or_b = fuzzy_union_or(a, b)
print("--- Fuzzy Union (A OR B) ---")
print("Operation: max(mu_A(x), mu_B(x))")
print(f"Result (A OR B): {a_or_b}\n")

a_and_b = fuzzy_intersection_and(a, b)
print("--- Fuzzy Intersection (A AND B) ---")
print("Operation: min(mu_A(x), mu_B(x))")
print(f"Result (A AND B): {a_and_b}\n")

not_a = fuzzy_complement_not(a)
print("--- Fuzzy Complement (NOT A) ---")
print("Operation: 1 - mu_A(x)")
print(f"Result (NOT A): {not_a}\n")

not_b = fuzzy_complement_not(b)
print(f"Result (NOT B): {not_b}")
