for (i = 1, n = 0; n < 1024; i += 1) {
    n = 2**i;
    console.log(n);
}

n = 0
exp = 1
while (n < 1024) {
    n = 2**exp;
    console.log(n);
    exp += 1;
}