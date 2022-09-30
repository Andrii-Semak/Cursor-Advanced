function* createIdGenerator() {
    let index = 1;
    while (true) yield index++;
  }
  
  const idGenerator = createIdGenerator();
  
  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);

  //Advanced
  
  const makeBigger = document.getElementById("btnBigger");
  const makeSmaller = document.getElementById("btnSmaller");
  const text = document.getElementById("text");
  
  function* newFontGenerator(font) {
    let changes = yield;
    while (true) {
      if (changes === "makeBigger") {
        font = font + 1;
      } else if (changes === "makeSmaller") {
        font = font - 1;
      }
      changes = yield font;
    }
  }
  const fontGenerator = newFontGenerator(16);
  fontGenerator.next();
  
  makeBigger.addEventListener("click", () => {
    text.style.fontSize = `${fontGenerator.next("makeBigger").value}px`;
  });
  
  makeSmaller.addEventListener("click", () => {
    text.style.fontSize = `${fontGenerator.next("makeSmaller").value}px`;
  });