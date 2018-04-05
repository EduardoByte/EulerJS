var a = 1, b = 1, temp = 0;

while(b < 4e6) {
  a += b;
  b += a;
  if(!(a%2)) temp += a;
  if(!(b%2)) temp += b;
}

/* Result stored in temp variable */
