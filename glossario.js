(() => {
  const search = document.getElementById('glossary-search');
  const toggle = document.getElementById('glossary-toggle-btn');
  const bottomToggle = document.getElementById('glossary-toggle-bottom');
  const list = document.getElementById('glossary-list');
  const items = [...list.querySelectorAll('details')];
  const headings = [...list.querySelectorAll('.glossary-letter')];
  const alphabet = document.getElementById('glossary-alphabet');
  const mobile = window.matchMedia('(max-width: 639px)');
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const searchable = new Map(items.map(item => [item, normalize(item.textContent)]));
  let expanded = false;
  function render() {
    const words = normalize(search.value).trim().split(/\s+/).filter(Boolean);
    const filtering = words.length > 0;
    let visible = 0;
    items.forEach(item => {
      const rank = Number(item.dataset.popular);
      const show = filtering ? words.every(word => searchable.get(item).includes(word)) : expanded || (rank > 0 && rank <= (mobile.matches ? 5 : 8));
      item.hidden = !show;
      item.style.order = !expanded && !filtering ? rank : '';
      if (show) visible++;
    });
    headings.forEach(heading => {
      heading.hidden = (!expanded && !filtering) || !items.some(item => !item.hidden && item.dataset.letter === heading.dataset.group);
    });
    alphabet.hidden = !expanded || filtering;
    document.getElementById('glossary-empty').hidden = visible !== 0;
    document.getElementById('glossary-count').textContent = `${visible} voci disponibili`;
    toggle.hidden = !expanded;
    bottomToggle.textContent = expanded ? 'Mostra meno' : 'Mostra tutte le parole';
    bottomToggle.setAttribute('aria-expanded', String(expanded));
    toggle.setAttribute('aria-expanded', String(expanded));
  }
  search.addEventListener('input', render);
  function toggleList(event) {
    const restoreFocus = expanded && event.currentTarget === bottomToggle;
    expanded = !expanded;
    search.value = '';
    items.forEach(item => { item.open = false; });
    render();
    if (restoreFocus) { search.focus({ preventScroll: true }); document.getElementById('glossario').scrollIntoView({ block: 'start' }); }
  }
  toggle.addEventListener('click', toggleList);
  bottomToggle.addEventListener('click', toggleList);
  mobile.addEventListener('change', render);
  alphabet.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (link) {
      const heading = document.querySelector(link.getAttribute('href'));
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
    }
  });
  render();
  // Deterrents requested by the author. Contact details and form fields remain copyable.
  const mayCopy = target => target instanceof Element && Boolean(target.closest('input, textarea, select, [contenteditable="true"], a[href^="tel:"], a[href^="mailto:"], #glossary-search'));
  document.addEventListener('contextmenu', event => { if (!mayCopy(event.target)) event.preventDefault(); });
  const contactSelection = () => {
    const node = window.getSelection()?.anchorNode;
    return mayCopy(node instanceof Element ? node : node?.parentElement);
  };
  document.addEventListener('copy', event => { if (!mayCopy(event.target) && !contactSelection()) event.preventDefault(); });
  document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && ['c', 'x'].includes(event.key.toLowerCase()) && !mayCopy(event.target) && !contactSelection()) event.preventDefault();
  });
})();
