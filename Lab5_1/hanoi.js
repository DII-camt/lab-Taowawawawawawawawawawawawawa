const hanoi = (n, firstStick = 'a', lastStick = 'c', midStick = 'b') => {
    if (n === 1) {
        console.log(`${firstStick} --> ${lastStick}`);
        return;
    }
    hanoi(n - 1, firstStick, midStick, lastStick);
    console.log(`${firstStick} --> ${lastStick}`);
    hanoi(n - 1, midStick, lastStick, firstStick);
};