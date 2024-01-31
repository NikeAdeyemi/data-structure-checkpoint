// Question one
ALGORITHM sum_of_distinct_elements
VAR
    set1, set2, combined_list, distinct_elements : ARRAY OF INTEGER;
    sum_result : INTEGER := 0;
BEGIN
    set1 := [3, 1, 7, 9];          // Set 1
    set2 := [2, 4, 1, 9, 3];       // Set 2

    // Combine the two sets to get a list of all elements
    combined_list := set1 + set2;

    // Use a set to remove duplicates and get distinct elements
    distinct_elements := SetOf(combined_list);

    // Calculate the sum of distinct elements
    sum_result := SumOf(distinct_elements);

    Write(sum_result);             // Print the sum
END

// Question two
PROCEDURE dot_product(v1, v2: ARRAY OF REAL; OUT ps: REAL)
VAR
    i: INTEGER;
BEGIN
    ps := 0;
    FOR i FROM 1 TO LENGTH(v1) DO
        ps := ps + v1[i] * v2[i];
    END FOR;
END

ALGORITHM check_orthogonality_with_procedure
VAR
    n, i: INTEGER;
    v1, v2: ARRAY OF REAL;
    dot_result: REAL;
BEGIN
    Read(n); // Read the number of pairs of vectors
    FOR i FROM 1 TO n DO
        // Read the vectors
        Read(v1);
        Read(v2);

        // Call the dot_product procedure
        dot_product(v1, v2, dot_result);

        // Check if the dot product is zero (vectors are orthogonal)
        IF dot_result = 0 THEN
            Write("Vectors are orthogonal");
        ELSE
            Write("Vectors are not orthogonal");
        END IF;
    END FOR;
END