function solution(polynomial) {
    let terms = polynomial.split(' + ');
    let constant = 0;
    let xTerm = 0;

    for(let term of terms) {
        if (term.includes('x')) {
            let coefficient = term.replace('x', '') || '1';
            xTerm += parseInt(coefficient, 10);
        } else {
            constant += parseInt(term, 10);
        }
    }

    let result = '';
    if (xTerm === 1) result += 'x';
    else if (xTerm !== 0) result += `${xTerm}x`;

    if (constant !== 0) {
        if (result.length > 0) result += ' + ';
        result += constant;
    }

    return result;
}