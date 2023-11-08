function solution(sizes) {
    let max_w = 0;
    let max_h = 0;
    for(let i=0; i<sizes.length; i++) {
        let w = sizes[i][0];
        let h = sizes[i][1];
        if(w < h) {
            [w, h] = [h, w];
        }
        max_w = Math.max(max_w, w);
        max_h = Math.max(max_h, h);
    }
    return max_w * max_h;
}