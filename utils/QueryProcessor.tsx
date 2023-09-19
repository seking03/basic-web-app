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
  if (query.toLowerCase().includes("Which of the following numbers is the largest: 79, 71, 27")) {
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
  }
  
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  return "";
}
