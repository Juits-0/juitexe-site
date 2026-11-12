import{o as e,t as m,u as $,v as b,e as l}from"./main-C-RH_0KK.js";import{openVideo as f}from"./mobu-world-KjRY1r3j.js";import"./stats-BoxFg-GB.js";import"./mobu-draw-D2VEouZ7.js";const g=[...e].sort((i,d)=>d.videoN-i.videoN);function L(i,d,u){const c=u?.rest?.[0],p=c?e.find(a=>a.id===c&&a.status==="ready"):null;if(p)return location.replace(p.href),{};const o=m(),s=e.filter(a=>o[a.id]).length,v=s&&s<e.length?e.find(a=>!o[a.id]&&a.status==="ready")?.id:null,y=s?`<div class="lab-progress" role="group" aria-label="Deney ilerlemesi"><div class="lab-progress__bar"><i style="width:${Math.round(s/e.length*100)}%"></i></div><span class="mono">${s}/${e.length} deney tamamlandı${s===e.length?" · hepsi bitti, tebrikler!":""}</span></div>`:"";return i.innerHTML=`
  <section class="view lab-page" data-view="lab">
    <header class="view__head">
      <span class="eyebrow eyebrow--purple">Dünyalar arası · Laboratuvar</span>
      <h1 class="display display--xl">Mekaniği <span class="glow-text">kendin</span> dene.</h1>
      <p class="lede">Videolarda anlattığım ${e.length} mekanik, Mobu'nun Oyun Laboratuvarı'nda oynanabilir deney olarak duruyor. Bir kart seç; deney kendi sayfasında açılır.</p>
      <div class="row"><a class="btn btn--primary" href="${$}">Laboratuvarı aç →</a></div>
      ${y}
    </header>
    <div class="lab-grid">
      ${g.map(a=>{const n=b.find(h=>h.n===a.videoN),t=!!o[a.id],r=a.id===v;return`<article class="card lab-card${t?" is-done":""}${r?" is-next":""}" id="lab-${a.id}">
          <span class="eyebrow">${t?"✓ Tamamlandı":r?"Sıradaki":a.status==="ready"?"Oynanabilir":"Yakında"}</span>
          <h2 class="lab-card__title">${l(a.title)}</h2>
          <p class="lab-card__q muted">${l(a.question)}</p>
          <p class="lab-card__goal">${l(a.blurb)}</p>
          <div class="row lab-card__row">
            ${a.status==="ready"?`<a class="btn btn--sm btn--primary" href="${a.href}">Deneyi oyna →</a>`:'<span class="chip chip--soon">Yakında</span>'}
            ${n?`<button class="btn btn--sm btn--ghost" type="button" data-open-video="${n.n}">Videoyu izle</button>`:""}
          </div>
        </article>`}).join("")}
    </div>
  </section>`,i.firstElementChild.addEventListener("click",a=>{const n=a.target.closest("[data-open-video]");if(!n)return;const t=b.find(r=>r.n===+n.dataset.openVideo);t&&f(t,d)}),{}}export{L as mount};
