function wordsUppercase(str) {
  const pattern = /\w+/g;
  const output = str.match(pattern).join(", ").toUpperCase();
  console.log(output);
}
wordsUppercase("Hi, how are you?");
wordsUppercase("hello");
