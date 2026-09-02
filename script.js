const chapters = {
  frau: {
    title: 'Die Frau', kicker: 'Ein Portrait in vier Wahrheiten', lead: 'Ihr Leben war nie geradlinig - und genau darin liegt seine Wahrheit.', chapter: 'I · Die Wahrheit hinter dem Stahl', count: '01 / 04',
    copy: ['Tori kannte lange kein Zuhause. Als Waise lernte sie früh, für sich selbst einzustehen, bis die Familie ihrer heutigen Schwester sie aufnahm und ihr einen Platz gab, den sie nie für selbstverständlich hält. Auch heute noch liegt in ihr etwas Ungezähmtes - ein Rest jener Jahre, in denen Freiheit weniger ein Wunsch als eine Notwendigkeit war.', 'Das Militär versprach ihr Richtung und Halt, doch Tori war zu eigensinnig für fremde Befehle und zu temperamentvoll für eine lange Karriere in Reih und Glied. Nach einigen Jahren zog sie weiter, zunächst als Söldnerin und schließlich in die Reihen der Luftpiraten. Dort wurde sie zur Anführerin - gefürchtet für ihre Entschlossenheit, aber nie für Grausamkeit. Ihre Raubzüge hinterließen leere Laderäume, keine Toten, und als Limsa Lominsa ihre Hilfe in einer Schlacht brauchte, stand Tori auf der richtigen Seite.', "Erst als sie das Fliegen hinter sich ließ und sich ein ziviles Leben aufbaute, begegnete sie Samin'ya. Aus dieser Begegnung wurde Liebe, aus Liebe eine Familie. Mit ihrer Frau hat Tori eine Tochter, Nihal, deren Name den ihres ausgestorbenen Clans weiterträgt. Für Tori ist sie beides - Erinnerung an das Verlorene und ein Versprechen für alles, was noch kommen darf."]
  },
  mutter: {
    title: 'Die Mutter', kicker: 'Von Händen, die halten', lead: 'Seit Nihal in ihr Leben trat, hat Tori einen neuen Grund, jeden Morgen heimzukehren.', chapter: 'II · Ein Feuer, das niemals erlischt', count: '02 / 04',
    copy: ['Mit Nihals Geburt veränderte sich Toris Leben nicht auf einen Schlag, sondern in all den kleinen Augenblicken dazwischen. In einem schlaflosen Morgen, in einem ersten Lächeln, in der Erkenntnis, dass sie nun für jemanden Verantwortung trug, die weit über sie selbst hinausging. Aus der Frau, die immer nur weitergezogen war, wurde jemand, der Wurzeln schlagen wollte.', "Heute gilt ihre Aufmerksamkeit vor allem Nihal und dem Clan Siresa. Als Frau der Matriarchin hält sie Samin'ya den Rücken frei, wo immer sie kann - mit einem wachen Blick für die vielen kleinen Sorgen des Alltags ebenso wie für die Entscheidungen, die zu schwer auf nur einem Paar Schultern liegen sollten. Tori braucht dabei keinen Titel, um zu wissen, was zu tun ist.", 'Doch ihr Schutz hat eine Grenze, die andere besser nicht suchen sollten. Wenn Nihal, Samin\'ya oder jemand aus ihrer Familie bedroht wird, kennt Tori kein Zögern und keine moralische Abwägung. Sie würde alles tun, um sie sicher nach Hause zu bringen - und sie trägt die Konsequenzen dieser Entscheidung lieber selbst, als auch nur einen von ihnen im Stich zu lassen.']
  },
  jaegerin: {
    title: 'Die Jägerin', kicker: 'Im Namen der Nachtkatze', lead: 'Manche Spuren verlangen danach, bis zu ihrem Ende verfolgt zu werden.', chapter: 'IV · Die Jagd nach Gerechtigkeit', count: '04 / 04',
    copy: ['Toris Aufgabe im Glauben an die Nachtkatze besteht nicht darin, Konfrontationen aus dem Weg zu gehen. Sie soll ihre Stärke zeigen und jene Aufgabe weitertragen, die den Clan Nihal einst bestimmte. Für die Nihal war Gewalt kein Werkzeug, das wahllos in die Welt hinausgetragen wurde. Sie richteten sie gegen jene, die selbst Gewalt suchten und anderen schadeten.', 'Von außen mag das wie ein edler Anspruch wirken. In den Augen der Nihal war es das auch. Doch ihre Gerechtigkeit war immer Selbstjustiz: Der Clan entschied selbst, wer den Tod verdient hatte. War dieses Urteil einmal gefällt, gab es kein Zurück mehr.', 'Tori hat diese Tradition nicht unverändert übernommen, doch sie prägt ihren Weg bis heute. Als Kopfgeldjägerin folgt sie den Spuren derjenigen, die sich der Verantwortung entziehen, und stellt sich der Gefahr, statt den Blick abzuwenden. Sie weiß, wie schwer ein endgültiges Urteil wiegt - und gerade deshalb trifft sie es nicht leichtfertig.']
  },
  glaeubige: {
    title: 'Die Gläubige', kicker: 'Unter dem Blick der Nachtkatze', lead: 'Wenn der Mond schweigt, jagen wir.', chapter: 'III · Das Erbe der letzten Matriarchin', count: '03 / 04',
    copy: ['Tori hat ihre Wurzeln erst spät gefunden. Sie stammen aus dem Clan Nihal, nach dem sie auch ihre Tochter benannte, damit ein Name weiterlebt, den die Welt längst vergessen hatte. Die Nihal waren Mondstreuner, berüchtigt für ihre Kampfeslust und dafür, jede Gelegenheit zu nutzen, ihre Stärke zu beweisen.', 'Für den Clan war Kampf keine heilige Prüfung und kein Weg zur Wiedergeburt. Es ging um die einfache, harte Gewissheit, wer der Stärkere war. Eine Entscheidung, die eine Nihal traf, galt als endgültig und unumkehrbar. Sie lebten im Namen der Nachtkatze, ihrer Gottheit, und unter einem Leitspruch, der bis heute in Tori nachhallt: „Wenn der Mond schweigt, jagen wir.“', 'Tori trägt diesen Glauben noch immer in sich. Sie scheut weder Kampf noch Herausforderung, doch sie misst ihren Wert nicht an Furcht oder Blutvergießen. Wo ihre Vorfahren in jedem Kräftemessen eine Gelegenheit zur Profilierung sahen, sucht Tori heute eher nach einem Grund, für jemanden einzustehen. Als Tochter der letzten Matriarchin ist sie selbst Matriarchin der Nihal - eine Anführerin ohne Clan, denn außer ihr ist niemand geblieben.']
  }
};
const fields = { title: document.querySelector('#story-title'), kicker: document.querySelector('#story-kicker'), lead: document.querySelector('#story-lead'), chapter: document.querySelector('#story-chapter'), count: document.querySelector('#chapter-count'), copy: document.querySelector('#story-copy') };
const music = document.querySelector('#background-music');
const musicChoice = document.querySelector('#music-choice');
const musicPlayer = document.querySelector('#music-player');
const musicToggle = document.querySelector('#music-toggle');
const playerIcon = musicToggle.querySelector('.player-icon');
const volumeControl = document.querySelector('#volume-control');

music.volume = .65;
function refreshPlayer() {
  const isPlaying = !music.paused;
  playerIcon.textContent = isPlaying ? 'Ⅱ' : '▶';
  musicToggle.setAttribute('aria-label', isPlaying ? 'Musik pausieren' : 'Musik abspielen');
}
function revealPlayer() { musicChoice.hidden = true; musicPlayer.hidden = false; }
document.querySelector('#music-yes').addEventListener('click', () => {
  revealPlayer();
  music.play().then(refreshPlayer).catch(refreshPlayer);
});
document.querySelector('#music-no').addEventListener('click', () => { revealPlayer(); refreshPlayer(); });
musicToggle.addEventListener('click', () => {
  if (music.paused) music.play().then(refreshPlayer).catch(refreshPlayer);
  else { music.pause(); refreshPlayer(); }
});
volumeControl.addEventListener('input', () => { music.volume = volumeControl.value / 100; });
music.addEventListener('play', refreshPlayer);
music.addEventListener('pause', refreshPlayer);
function showChapter(key) {
  const chapter = chapters[key]; if (!chapter) return;
  document.querySelectorAll('.nav-link').forEach(link => link.classList.toggle('is-active', link.dataset.tab === key));
  Object.values(fields).forEach(el => { el.classList.remove('is-changing'); void el.offsetWidth; el.classList.add('is-changing'); });
  fields.title.textContent = chapter.title; fields.kicker.textContent = chapter.kicker; fields.lead.textContent = chapter.lead; fields.chapter.textContent = chapter.chapter; fields.count.textContent = chapter.count;
  fields.copy.innerHTML = chapter.copy.map(text => `<p>${text}</p>`).join(''); document.title = `${chapter.title} · Tori`;
}
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', event => { event.preventDefault(); const key = link.dataset.tab; history.replaceState(null, '', `#${key}`); showChapter(key); }));
showChapter(location.hash.slice(1) || 'frau');
