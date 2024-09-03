const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

const userName = process.argv[2];
console.log(greet(userName || "Francis"));
