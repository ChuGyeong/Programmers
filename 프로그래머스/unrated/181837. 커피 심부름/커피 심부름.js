function solution(order) {
   return order.reduce((acc, item) => acc + (item.includes('cafelatte') ? 5000 : 4500), 0);
}