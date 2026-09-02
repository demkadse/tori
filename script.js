const chapters = {
  frau: {
    title: 'Die Frau', kicker: 'Ein Portrait in vier Wahrheiten', lead: 'Unter silbernem Mondlicht ist sie mehr als die Klinge an ihrer Seite.', chapter: 'I · Die Wahrheit hinter dem Stahl', count: '01 / 04',
    copy: ['Veyra trägt das Schweigen wie andere einen Mantel: nicht aus Kälte, sondern weil manche Geschichten nur im Schutz der Nacht atmen können. Ihr Lachen ist selten, doch wenn es kommt, erinnert es an Regen auf warmem Stein.', 'Zwischen den Pflichten eines langen Lebens bewahrt sie sich eine stille Neugier auf all die kleinen Wunder, die Eorzea vergisst: den Duft von Sternblumen, ein Lied in einer fremden Schenke, die Wärme eines Bechers Tee.']
  },
  mutter: {
    title: 'Die Mutter', kicker: 'Von Händen, die halten', lead: 'Ihre größte Stärke misst sich nicht an Narben, sondern an den Heimkehrenden.', chapter: 'II · Ein Feuer, das niemals erlischt', count: '02 / 04',
    copy: ['Es gibt einen Ort in Veyras Herz, den keine Schlacht je betreten durfte. Dort bewahrt sie die Namen derer, für die sie Wache hält, jedes Versprechen und jede heimliche Sorge vor dem ersten Morgengrauen.', 'Sie lehrt nicht mit erhobener Stimme. Ein gedeckter Tisch, eine sorgfältig geflickte Naht, eine Hand auf einer zitternden Schulter: Daraus entsteht die Sprache, in der ihre Liebe am deutlichsten spricht.']
  },
  jaegerin: {
    title: 'Die Jägerin', kicker: 'Spuren im Schnee', lead: 'Wo der Wald den Atem anhält, kennt sie bereits den Weg.', chapter: 'III · Die Geduld der Dämmerung', count: '03 / 04',
    copy: ['Veyra liest den Boden wie ein offenes Buch. Ein geknickter Farn, ein Hauch von Fell am Dornbusch, die Stille der Vögel — nichts bleibt ihr verborgen, wenn sie eine Fährte aufgenommen hat.', 'Ihre Jagd ist kein Spiel der Grausamkeit. Sie dankt dem Wild, nimmt nur, was gebraucht wird, und weiß: Wer den Wald als Beute sieht, hat seine Sprache nie verstanden.']
  },
  glaeubige: {
    title: 'Die Gläubige', kicker: 'Im Licht der Zwölf', lead: 'Ihr Gebet ist leise, doch es trägt weiter als jeder Schlachtruf.', chapter: 'IV · Der Schwur unter den Sternen', count: '04 / 04',
    copy: ['An den stillen Stunden zwischen Monduntergang und Morgen legt Veyra die Hand an ihr Amulett. Sie bittet nicht um Sieg. Sie bittet um einen klaren Blick, ein standhaftes Herz und Gnade für jene, die den Weg verloren haben.', 'Ihr Glaube ist kein Schild gegen Zweifel, sondern ein Licht darin. Er erinnert sie daran, dass selbst die einsamste Reise unter den Sternen nie ganz ohne Zeugen bleibt.']
  }
};
const fields = { title: document.querySelector('#story-title'), kicker: document.querySelector('#story-kicker'), lead: document.querySelector('#story-lead'), chapter: document.querySelector('#story-chapter'), count: document.querySelector('#chapter-count'), copy: document.querySelector('#story-copy') };
function showChapter(key) {
  const chapter = chapters[key]; if (!chapter) return;
  document.querySelectorAll('.nav-link').forEach(link => link.classList.toggle('is-active', link.dataset.tab === key));
  Object.values(fields).forEach(el => { el.classList.remove('is-changing'); void el.offsetWidth; el.classList.add('is-changing'); });
  fields.title.textContent = chapter.title; fields.kicker.textContent = chapter.kicker; fields.lead.textContent = chapter.lead; fields.chapter.textContent = chapter.chapter; fields.count.textContent = chapter.count;
  fields.copy.innerHTML = chapter.copy.map(text => `<p>${text}</p>`).join(''); document.title = `${chapter.title} · Veyra`;
}
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', event => { event.preventDefault(); const key = link.dataset.tab; history.replaceState(null, '', `#${key}`); showChapter(key); }));
showChapter(location.hash.slice(1) || 'frau');
