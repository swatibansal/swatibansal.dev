const cases = {
 ...learningCases,
 'case-sagas': sagasArticle,
 'case-backpressure': {
 title: 'One ceiling. A whole fleet.',
 body: `<p>Coordinating Kafka consumers against a shared downstream concurrency limit is a fleet-wide design problem. Adding pods can increase pressure on an enterprise API even when every consumer respects its own local limit.</p><h3>The problem</h3><p>Business events such as orders, payments, and fulfillment updates need to reach an enterprise system reliably. When many consumers share one integration account, their combined in-flight requests compete for the same finite capacity.</p><h3>The architectural approach</h3><p class="case-flow">Kafka consumers → shared permit budget → enterprise API<br>Failure feedback → pause, retry, and controlled recovery</p><ul><li>Coordinate permits through shared Redis or Valkey state, with domain budgets and a common pool.</li><li>Classify downstream failures so saturation, availability failures, and invalid data receive appropriate handling.</li><li>Use consumer pause and resume alongside explicit offset management to retain work that has not completed.</li><li>Pair replay with deterministic business identifiers and downstream deduplication.</li></ul><h3>The decisions that matter</h3><p>A strict global limit needs an explicit policy for coordination failures. Independent local fallback budgets can exceed the shared ceiling. Permit expiry must also account for requests still in flight; an expired lease does not cancel downstream work.</p><p>Pausing consumption alone is not a loss-prevention guarantee. Offset handling, in-flight records, retention, retries, and idempotent effects must be considered together.</p><h3>Validation approach</h3><p>The source draft describes a containerized harness that injects saturation and service failures, then observes concurrency, backlog recovery, and transaction reconciliation. Production observations and simulated results should be reported separately, with their measurement windows.</p><h3>What generalizes</h3><p>When a dependency imposes one shared ceiling, coordination must account for the whole fleet. Recovery deserves the same care as normal throughput.</p><p class="case-note">Adapted from Swati Bansal’s unpublished technical draft, “One Ceiling, a Whole Fleet: Global Backpressure for Kafka Consumers.” This overview omits internal identifiers and unverified performance figures.</p>`
 },
 'case-topology': {
 title: 'Lifting the fog.',
 body: `<p>Automated Kafka topology discovery brings broker metadata and source configuration together to help engineers understand event-driven dependencies.</p><h3>The problem</h3><p>Consumer lag can indicate where work is accumulating, but teams still need to identify the owning application, upstream producers, and downstream dependencies. Those relationships often live across repositories and aging diagrams.</p><h3>The architectural approach</h3><p class="case-flow">Broker metadata + repository configuration<br>→ typed relationship graph → dependency exploration</p><ul><li>Discover topics and consumer groups through Kafka administrative APIs.</li><li>Use committed offsets as evidence of consumption history, without assuming they prove current activity.</li><li>Enrich the graph with application and topic references from source configuration.</li><li>Serve a consistent graph snapshot for exploration, ownership lookup, and exports.</li></ul><h3>Make uncertainty visible</h3><p>Configuration-derived producer relationships are heuristics. A topic reference without a consumer group does not by itself prove that an application produces to that topic. Runtime-generated names and nonstandard configuration can leave gaps.</p><p>A useful topology tool distinguishes observed relationships from inferred ones. Disconnected nodes are candidates for investigation; removal from a graph is not evidence that infrastructure is safe to delete.</p><h3>AI-assisted implementation</h3><p>The draft describes using an AI coding assistant for service scaffolding, API integration, parsing, and test development. Architectural decisions, security review, and the interpretation of operational data remained human responsibilities.</p><h3>What generalizes</h3><p>Operational metrics and structural understanding answer different questions. Combining sources can make a system easier to navigate, provided the graph also communicates its evidence, freshness, and limitations.</p><p class="case-note">Adapted from Swati Bansal’s unpublished technical draft, “Lifting the Fog — Automated Kafka Topology Discovery for Event-Driven Architecture.” Relationships shown here are conceptual and contain no production data.</p>`
 }
};
// Enrich all case studies without changing the established page layout.
Object.entries(caseDetails).forEach(([key, detail]) => {
 const article = cases[key];
 if (!article) return;
 article.title = detail.title;
 const chips = `<div class="chips" aria-label="Project topics">${detail.tags.map(tag => `<span>${tag}</span>`).join('')}</div>`;
 const visual = `<figure class="case-figure case-architecture"><a href="${detail.diagram}" target="_blank" rel="noopener noreferrer" aria-label="Open diagram: ${detail.diagramTitle}"><img src="${detail.diagram}" alt="${detail.diagramDescription}" loading="lazy"></a><figcaption><strong>${detail.diagramTitle}.</strong> Conceptual guide. <a href="${detail.diagram}" target="_blank" rel="noopener noreferrer">Open full-size diagram ↗</a></figcaption></figure>`;
 const body = article.body.replace(/^<div class="chips"[^>]*>.*?<\/div>/, '').replace(/<figure class="case-figure"><div class="case-diagram">[\s\S]*?<\/figure>/g, '');
 article.body = chips + body.replace('</p>', `</p>${visual}`);
});
const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
navigation.addEventListener('click', e => { if (e.target.closest('a')) {menu.setAttribute('aria-expanded','false');navigation.classList.remove('open');} });
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
 document.querySelectorAll('[data-filter]').forEach(b => {b.classList.toggle('active',b === button);b.setAttribute('aria-pressed',String(b === button));});
 document.querySelectorAll('[data-type]').forEach(entry => {entry.hidden = button.dataset.filter !== 'all' && entry.dataset.type !== button.dataset.filter;});
}));
const dialog = document.querySelector('#case-dialog');
const content = document.querySelector('#case-content');
let returnFocus = null;
let activeView = 'home';
let parentView = 'work';
const views = ['home', 'work', 'community', 'connect'];
const titles = {home:'About',work:'Engineering Work',community:'Writing & Speaking',connect:'Connect'};
const viewElements = {
 home: [document.querySelector('#home'),document.querySelector('.credentials'),document.querySelector('#home-background')],
 work: [document.querySelector('#work')],
 community: [document.querySelector('#community')],
 connect: [document.querySelector('#connect')]
};
function showView(view, focus = false) {
 activeView = view;
 Object.entries(viewElements).forEach(([key,elements])=>elements.forEach(el=>el.hidden=key!==view));
 navigation.querySelectorAll('a').forEach(a=>{if(a.hash==='#'+view)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 document.title = `Swati Bansal · ${titles[view]}`;
 if(focus){const heading=viewElements[view][0].querySelector('h1,h2');heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});}
 window.scrollTo({top:0,behavior:'instant'});
}
function routeCase() {
 const key = location.hash.slice(1);
 const article = cases[key];
 if (article) {
  if(!dialog.open && !returnFocus) parentView = key === 'case-sagas' ? 'community' : 'work';
  showView(parentView);
  content.innerHTML = `<p class="eyebrow">${article.label || (key==='case-sagas'?'TECHNICAL ESSAY':'SELECTED ENGINEERING WORK')}</p><h2 id="case-title">${article.title}</h2>${article.body}`;
  document.title = `${article.title} · Swati Bansal`;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
 } else {
  if(dialog.open)dialog.close();
  showView(views.includes(key)?key:'home', Boolean(key));
 }
}
document.querySelectorAll('a[href^="#case-"]').forEach(link => link.addEventListener('click', () => {returnFocus = link; parentView = activeView; if(location.hash === link.hash) routeCase();}));
function closeCase() {history.replaceState(null,'',location.pathname+location.search+'#'+parentView);dialog.close();showView(parentView);if(returnFocus && document.contains(returnFocus))returnFocus.focus();returnFocus=null;}
dialog.querySelector('.close').addEventListener('click',closeCase);
dialog.addEventListener('cancel',e=>{e.preventDefault();closeCase();});
dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.target===dialog&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))closeCase();});
window.addEventListener('hashchange',routeCase);routeCase();
document.querySelector('#year').textContent = new Date().getFullYear();

// Keep the skip link within the current routed view.
document.querySelector('.skip').addEventListener('click', event => {
 event.preventDefault();
 const main = document.querySelector('#main');
 main.setAttribute('tabindex', '-1');
 main.focus({preventScroll: true});
 main.scrollIntoView({block: 'start', behavior: 'instant'});
});
function closeMenu(restoreFocus = false) {
 menu.setAttribute('aria-expanded', 'false');
 navigation.classList.remove('open');
 if (restoreFocus) menu.focus();
}
document.addEventListener('keydown', event => {
 if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
  closeMenu(true);
 }
});
document.addEventListener('click', event => {
 if (!event.target.closest('.header')) closeMenu();
});
window.addEventListener('hashchange', () => closeMenu());
window.matchMedia('(min-width: 901px)').addEventListener('change', event => {
 if (event.matches) closeMenu();
});
