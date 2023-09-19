export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if (query.toLowerCase().includes("andrew id")) {
    return (
      "seking"
    );
  }
  else if (query.toLowerCase().includes("name")) {
    return (
      "seking"
    );
  }
  const largestMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
    if (largestMatch) {
      const x: number = parseInt(largestMatch[1]);
      const y: number = parseInt(largestMatch[2]);
      const z: number = parseInt(largestMatch[3]);
      if ((x > y) && (x > z))
        return x.toString();
      else if ((y > x) && (y > z))
        return y.toString();
      else if ((z > x) && (z > y))
        return z.toString();
    }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const multMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multMatch) {
    const x : number = parseInt(multMatch[1]);
    const y: number = parseInt(multMatch[2]);
    return (x*y).toString()
  }

  const sqcuMatch = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/);
  if (sqcuMatch) {
    for (var i: number = 1; i < 8; i++) {
      if ((Math.sqrt(parseInt(sqcuMatch[i])) != null) && (Math.cbrt(parseInt(sqcuMatch[i])) != null)) {
        return sqcuMatch[i];
      }
    }
  }

  const primeMatch = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)/);
  if (primeMatch) {
    for (var i: number = 1; i < 6; i++) {
      if ((isPrime(parseInt(primeMatch[i])))) {
        return primeMatch[i];
      }
    }
  }

  return "";

}

// Function to check if a number is prime
function isPrime(num: number): boolean {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  if (num <= 3) return true; // 2 and 3 are prime numbers

  // Check divisibility by 2 and 3
  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
  }

  return true;
}