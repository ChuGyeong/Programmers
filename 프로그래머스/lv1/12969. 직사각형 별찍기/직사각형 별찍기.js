process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const input = data.split(" ");
    const n = Number(input[0]);
    const m = Number(input[1]);

    for (let i = 0; i < m; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row += '*';
        }
        console.log(row);
    }
});