function generateFact(event) {
  event.preventDefault();

  new Typewriter("#results", {
    strings:
      "A German shepherd named Talero stayed next to the body of his owner for 23 days after he had died in a snow storm. He prevented animals from attacking the body and tried to keep his owner warm by sleeping by his side.",
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

let factFormElement = document.querySelector("#form-generator");
factFormElement.addEventListener("submit", generateFact);
