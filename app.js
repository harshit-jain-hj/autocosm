const atlas=document.querySelector('#atlas');
const labels={home:'',interior:'The whole & its parts',finance:'Capital',dyeus:'Dyeus',culture:'Culture',inner:'Inner life',thought:'A thought'};
const names={desire:'Borrowed desire',ambition:'The first obsession',meaning:'Meaning as a possession',dreams:'Dreams per user',selves:'The artist & the artwork',jarvis:'The Jarvis thought',multitudes:'An inconvenient amount of person',dreamback:'Dreams, looking back'};
const notes={
 desire:{label:'01 / Taste & consciousness',title:'The algorithm might know what you like. The tragedy is that you don’t.',paragraphs:["You cannot Pinterest your way into taste.", "The End of Tasteslop: writing and video on taste, personality, and borrowed desire."],margin:'“The meaning you give to life is a material possession.”',world:'culture',origin:'From The End of Tasteslop.\nAn ongoing inquiry.',links:[{key:'meaning',why:'What you desire becomes what you give your life to.'},{key:'ambition',why:'I’ve had to ask this question of my own ambitions.'}]},
 ambition:{label:'02 / A former future',title:'At fifteen, I wanted to build the biggest hedge fund in the world.',paragraphs:["I began investing in 2014–15. At fifteen, I wanted to build the biggest hedge fund in the world.", "At NYU, I invested through Stern IAG. My major was Narrative Worldbuilding and Experience Design: music, film, fashion, and visual communication.", "I manage Verissimus, long-only in India, in a couple of hours a day at most."],margin:'“I’ve spent most of my life trying to reconcile the different versions of myself.”',world:'finance',origin:'A recollection.\nFinance / NYU / Art.',links:[{key:'selves',why:'The investor and the artist still live in the same person.'},{key:'dreams',why:'A dream can be enormous before anyone knows how to value it.'}]},
 meaning:{label:'03 / Taste & value',title:'The meaning you give to life is a material possession.',paragraphs:["Two people can stand in the same room and inhabit very different worlds.", "Taste shapes what you can experience in the life you already have."],margin:'Art. Capital. Consciousness.\nThe same question keeps finding different forms.',world:'culture',origin:'A working thought.\nPart of The End of Tasteslop.',links:[{key:'desire',why:'Which of those choices actually belong to you?'},{key:'jarvis',why:'One of my own questions eventually acquired a body.'}]},
 dreams:{label:'04 / India, capital & imagination',title:'Average dreams per user.',paragraphs:["ARPU: Average revenue per user.\nADPU: Average dreams per user.", "An essay idea about India, ambition, and the futures people imagine for themselves."],margin:'“Imagine your dreams until they imagine you back.”',world:'finance',origin:'An idea for an essay.\nA question still taking shape.',links:[{key:'ambition',why:'I know what it is to have an unreasonable future in mind.'},{key:'dreamback',why:'There is a moment when an imagined future starts asking something of you.'}]},
 selves:{label:'05 / A personal fragment',title:'The privilege of a lifetime.',paragraphs:["Narrative Worldbuilding and Experience Design, NYU Gallatin. Music, film, fashion, and visual communication.", "Investing through Stern IAG. Singing with Rock City. Now building Dyeus and managing Verissimus.", "All of this. One life."],margin:'“The more you change, the more you become yourself.”',world:'inner',origin:'A personal fragment.\nOn integrating the selves.',links:[{key:'multitudes',why:'It can be a lot of person to fit into one life.'},{key:'jarvis',why:'Wanting help with that became a founding question.'}]},
 jarvis:{label:'06 / February 2022',title:'“If I had my own Jarvis.”',paragraphs:["February 2022: “If I had my own Jarvis.”", "Something that helped me understand myself and act on it.", "That became Dyeus."],margin:'“Turning my delusions into everyone else’s reality.”',world:'dyeus',origin:'A founding thought.\nThe beginning of Dyeus.',links:[{world:'dyeus',title:'Dyeus',why:'See the question becoming something people can experience.'},{key:'selves',why:'The company began with the person trying to make sense of himself.'}]},
 multitudes:{label:'07 / An inconvenient amount of person',title:'Too cool for the smart kids. Too smart for the cool kids.',paragraphs:["Artist. Investor. Writer. Founder.", "Too much of everything to ever be nothing."],margin:'I still want to be invited.',world:'inner',origin:'A personal position.\nAnd a work in progress.',links:[{key:'ambition',why:'The size of the dream has always been part of the story.'},{world:'culture',title:'Intellectual Degen',why:'Some of this personality escaped onto the internet.'}]},
 dreamback:{label:'08 / Beneath the surface',title:'Imagine your dreams until they imagine you back.',paragraphs:["Dyeus. Verissimus. Intellectual Degen.", "The things I’m giving a form."],margin:'“Turning my delusions into everyone else’s reality.”',world:'dyeus',origin:'A note to keep around.',links:[{key:'jarvis',why:'Sometimes a future begins with one sentence.'},{key:'dreams',why:'How many futures are waiting inside people?'}]}
};
let path=[];try{path=JSON.parse(sessionStorage.getItem('autocosm-path')||'[]').filter(k=>Object.hasOwn(notes,k)).slice(-12)}catch{};
let lastKey='',entering=false;
function paragraph(text){const p=document.createElement('p');p.textContent=text;return p}
function renderThought(key){const note=notes[key];document.querySelector('.thought-page').dataset.note=key;document.querySelector('#thought-label').textContent=note.label;document.querySelector('#thought-count').textContent='Autocosm / '+String(Object.keys(notes).indexOf(key)+1).padStart(2,'0');document.querySelector('#thought-title').textContent=note.title;const copy=document.querySelector('#thought-copy');copy.replaceChildren(...note.paragraphs.map(paragraph));document.querySelector('#thought-margin').textContent=note.margin;document.querySelector('#thought-origin').textContent=note.origin;const world=document.querySelector('#thought-world');world.href='#/'+note.world;world.textContent='Enter '+labels[note.world];
 const connections=document.querySelector('#thought-connections');connections.replaceChildren();for(const link of note.links){const a=document.createElement('a');a.className='association';a.href=link.key?'#/thought/'+link.key:'#/'+link.world;const why=document.createElement('small');why.textContent=link.why;const title=document.createElement('strong');title.textContent=link.title||names[link.key];const arrow=document.createElement('span');arrow.className='drawn-arrow-css';arrow.setAttribute('aria-hidden','true');title.append(arrow);a.append(why,title);connections.append(a)}
 if(path[path.length-1]!==key){path.push(key);path=path.slice(-12);try{sessionStorage.setItem('autocosm-path',JSON.stringify(path))}catch{}}
 const trail=document.querySelector('#thought-trail');trail.replaceChildren();for(const visited of path.slice(-5)){const a=document.createElement('a');a.href='#/thought/'+visited;a.textContent=names[visited];trail.append(a)}
}
function updateSeen(){document.querySelectorAll('[data-thought]').forEach(a=>a.dataset.seen=String(path.includes(a.dataset.thought)))}
function loadScreenMedia(key){
 const screen=document.querySelector('[data-screen="'+key+'"]');
 const scope=key==='home'?screen:document;
 scope.querySelectorAll('[data-src],[data-poster]').forEach(el=>{
  const owner=el.closest('[data-screen]');
  if(owner&&owner!==screen)return;
  if(el.dataset.src){el.src=el.dataset.src;delete el.dataset.src;}
  if(el.dataset.poster){el.poster=el.dataset.poster;delete el.dataset.poster;}
 });
}
function route(){const hash=location.hash;const segments=hash.replace(/^#\/?/,'').split('/');let key=segments[0]||'home';if(key==='home-note')key='interior';let thought=segments[1];if(key==='thought'&&!Object.hasOwn(notes,thought)){key='interior';thought=null}if(!Object.hasOwn(labels,key))key='home';if(key==='thought')renderThought(thought);document.querySelectorAll('[data-screen]').forEach(s=>s.hidden=s.dataset.screen!==key);document.body.dataset.world=key;loadScreenMedia(key);document.body.classList.remove('entering');entering=false;document.querySelector('#current-world').textContent=key==='thought'?notes[thought].label:labels[key];document.title=key==='home'?'Autocosm — Harshit Jain':(key==='thought'?names[thought]:key==='interior'?'The interior':labels[key])+' — Autocosm';document.querySelector('meta[name="theme-color"]').content='#000000';if(atlas.open)atlas.close();updateSeen();if(lastKey||hash){scrollTo({top:0,behavior:'instant'});const h=document.querySelector('[data-screen="'+key+'"] h1');if(h){h.setAttribute('tabindex','-1');h.focus({preventScroll:true})}}lastKey=key;}
addEventListener('hashchange',()=>{document.querySelectorAll('video[data-motion-art]').forEach(v=>v.pause());route();});
document.querySelector('#palm-entry').addEventListener('click',e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0)return;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;e.preventDefault();if(entering)return;entering=true;document.body.classList.add('entering');setTimeout(()=>{if(location.hash===''||location.hash==='#/'||location.hash==='#/home')location.hash='/interior';else{document.body.classList.remove('entering');entering=false}},650)});
document.querySelector('#open-atlas').addEventListener('click',()=>atlas.showModal());document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>document.getElementById(b.dataset.close).close()));document.querySelectorAll('.atlas-link').forEach(a=>a.addEventListener('click',()=>atlas.close()));atlas.addEventListener('click',e=>{if(e.target!==atlas)return;const r=atlas.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)atlas.close()});
document.querySelectorAll('[data-thought-open]').forEach(b=>b.addEventListener('click',()=>location.hash='/thought/'+b.dataset.thoughtOpen));
document.querySelector('#wander').addEventListener('click',()=>{const keys=['ambition','desire','meaning','dreams','selves','jarvis','multitudes'];const unread=keys.filter(k=>!path.includes(k));const available=unread.length?unread:keys;location.hash='/thought/'+available[Math.floor(Math.random()*available.length)]});
route();

const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
let artPaused=motionPreference.matches;
try{const saved=sessionStorage.getItem('autocosm-motion');if(saved!==null)artPaused=saved==='paused'}catch{}
const motionToggle=document.querySelector('#motion-toggle');
const visibleArt=new Set();
function syncArtPlayback(){
 const active=!artPaused&&!document.hidden;

 document.querySelectorAll('video[data-motion-art]').forEach(video=>{video.muted=true;if(active&&visibleArt.has(video)){if(video.paused)video.play().catch(()=>{})}else video.pause()});
 document.querySelectorAll('[data-spirit-art]').forEach(svg=>{if(active&&visibleArt.has(svg))svg.unpauseAnimations();else svg.pauseAnimations()});
}
const artObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{
 const el=entry.target;
 if(el.matches('.spirit-cutout')){
  const current=el.querySelector('[data-spirit-art]');
  if(entry.isIntersecting){if(!current){el.append(document.querySelector('#spirit-animation-template').content.cloneNode(true));el.classList.add('spirit-mounted')}visibleArt.add(el.querySelector('[data-spirit-art]'));}
  else if(current){visibleArt.delete(current);current.remove();el.classList.remove('spirit-mounted');}
 }else if(entry.isIntersecting)visibleArt.add(el);else visibleArt.delete(el);
});syncArtPlayback()},{threshold:0});
document.querySelectorAll('[data-motion-art],.spirit-cutout').forEach(el=>artObserver.observe(el));
document.addEventListener('visibilitychange',syncArtPlayback);
function setArtMotion(paused){artPaused=paused;const hero=document.querySelector('[data-hero-gif]');if(hero){const source=paused?'assets/autocosm.webp':'assets/autocosm.gif';if(hero.getAttribute('src')!==source)hero.src=source;}document.body.classList.toggle('art-paused',paused);syncArtPlayback();motionToggle.textContent=paused?'Play motion':'Pause motion';motionToggle.setAttribute('aria-pressed',String(paused));}
motionToggle.addEventListener('click',()=>{setArtMotion(!artPaused);try{sessionStorage.setItem('autocosm-motion',artPaused?'paused':'playing')}catch{}});
motionPreference.addEventListener('change',e=>setArtMotion(e.matches));
setArtMotion(artPaused);
