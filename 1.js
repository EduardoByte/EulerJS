/* The r variable stored the result. */
for(var k = 6, r = 8; k < 1e3; r += k%3 === 0 || k%5 === 0 ? k : 0, ++k);
