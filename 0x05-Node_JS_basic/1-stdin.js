process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const spcs = process.stdin.read();

  if (spcs) {
    process.stdout.write(`Your name is: ${spcs}`);
 }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
