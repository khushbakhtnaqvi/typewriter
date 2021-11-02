const sentence = "hello there from lighthouse labs" + "\n";
  let timer = 0;  
  for (let char of sentence) {
    timer += 100;
    setTimeout(() => {
      process.stdout.write(char);
    }, timer);
  }

