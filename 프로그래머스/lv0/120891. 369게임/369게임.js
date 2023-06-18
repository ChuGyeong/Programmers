function solution (order) {
    return [...order+''].filter(a => ['3','6','9'].includes(a)).length
}
