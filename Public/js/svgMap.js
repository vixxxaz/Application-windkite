//rend la carte svg de l accueil interactive


const map = document.querySelector('#map');
const paths = map.querySelectorAll('.map__image a');
const links = map.querySelectorAll('.map__list a');

const activeArea = id => {
  map.querySelectorAll('.is-active').forEach(item => item.classList.remove('is-active'));
  if (id) {
    document.querySelector(`#list-${id}`).classList.add('is-active');
    document.querySelector(`#region-${id}`).classList.add('is-active');
  }
};

paths.forEach(path => {
  path.addEventListener('mouseenter', () => {
    const id = path.id.replace('region-', '');
    activeArea(id);
  });
  path.addEventListener('touchstart',{passive: true}, () => {
    const id = path.id.replace('region-', '');
    activeArea(id);
  });
});

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    const id = link.id.replace('list-', '');
    activeArea(id);
  });
  link.addEventListener('touchstart', {passive: true}, () => {
    const id = link.id.replace('list-', '');
    activeArea(id);
  });
});

map.addEventListener('mouseover', () => activeArea());
map.addEventListener('touchend',{passive: true}, () => activeArea());
