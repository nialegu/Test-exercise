// Объяснение алгоритма в README.md

function find_terms(ar, sum) {
    let a = 0;
    let b = ar.length - 1;
    while(a !== b) {
        let terms_sum = ar[a] + ar[b];
        if (terms_sum > sum)
            b--;
        else if (terms_sum < sum)
            a++;
        else { // terms_sum === sum
            break;
        }
    }
    if (sum != ar[a] + ar[b]) { // if the numbers shouldn't be the same we write if(a==b)
        return [];
    }
    return [a,b];
}