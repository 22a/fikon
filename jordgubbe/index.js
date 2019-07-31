// domain knowledge baked in - here we reference some Pulse playground internals
// this script will only work when executed inside the `/render` iframe
let elem = document.querySelector(".render-play").firstElementChild
  .firstElementChild;

const normalise = o => JSON.parse(JSON.stringify(o));

const buildAST = node => ({
  tagName: node.tagName,
  innerText: node.innerText,
  classList: Array.from(node.classList),
  computedStyle: normalise(window.getComputedStyle(node)),
  // TODO: capture computed styles for pseudo elements and hover / clicked states?
  boundingClientRect: normalise(node.getBoundingClientRect()),
  children: Array.from(node.children).map(buildAST)
});

console.log(JSON.stringify(buildAST(elem)));
