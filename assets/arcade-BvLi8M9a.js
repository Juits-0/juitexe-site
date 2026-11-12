import{s as w,o as h,g as f,$ as v,b as m,q as g,e}from"./main-C-RH_0KK.js";import"./stats-BoxFg-GB.js";function $(a){return a.cover?`<img src="${a.cover}" alt="" loading="lazy" decoding="async">`:`<div class="cab__noart cab__noart--big" style="--tint:${a.tint}"><span>${e(a.title)}</span><i></i><i></i><i></i></div>`}function L(a,l){const n=a.placeholder?'<span class="chip chip--example cabinet__badge" title="Bağlantı/kimlik doğrulanacak">örnek</span>':"";return`<button class="cabinet" type="button" style="--tint:${a.tint}" data-slug="${a.slug}" aria-label="${e(a.title)} — kabini aç">
    <span class="cabinet__marquee"><span>${e(a.title)}</span></span>
    <span class="cabinet__screen">${$(a)}<i class="cab__scan"></i>${n}<span class="cabinet__insert">${a.embedUrl?"OYNA":"İNCELE"}</span></span>
    <span class="cabinet__deck"><i class="cab__stick"></i><i class="cab__btn"></i><i class="cab__btn"></i></span>
    <span class="cabinet__base"><span class="cabinet__meta mono">${e(a.role.split(" — ")[0])} · ${e(a.year)}</span></span>
  </button>`}const x=`<a class="cabinet cabinet--lab" href="#/lab" style="--tint:#B67CFF" aria-label="Deney kabini — mekanik deneyleri">
    <span class="cabinet__marquee"><span>JUIT LAB</span></span>
    <span class="cabinet__screen"><span class="cabinet__labscreen"><b>${h.length}</b><small>DENEY</small><em>${h.slice(0,3).map(a=>a.title.toLowerCase()).join(" · ")} …</em></span><i class="cab__scan"></i><span class="cabinet__insert">OYNA</span></span>
    <span class="cabinet__deck"><i class="cab__stick"></i><i class="cab__btn"></i><i class="cab__btn"></i></span>
    <span class="cabinet__base"><span class="cabinet__meta mono">site içi · ücretsiz</span></span>
  </a>`;function E(a,l){const n=[],s=document.createElement("a");s.className="btn btn--sm btn--primary",s.href=a.url,s.target="_blank",s.rel="noopener",s.textContent="itch.io'da aç ↗",n.push(s),g({title:a.title,kind:"game",className:"modal--game",actions:n,body(c){const r=a.itchId?`<iframe class="game__widget" frameborder="0" src="https://itch.io/embed/${encodeURIComponent(a.itchId)}?linkback=true&amp;dark=true&amp;border_width=0" width="100%" height="167" title="${e(a.title)} — itch.io"></iframe>`:"";a.embedUrl?c.innerHTML=`<div class="game game--play"><div class="game__screen"><iframe class="game__frame" src="${a.embedUrl}" title="${e(a.title)}" allowfullscreen allow="autoplay; fullscreen; gamepad"></iframe></div>
          <aside class="game__info"><p class="lede">${e(a.blurb)}</p><dl class="game__facts"><dt>Rol</dt><dd>${e(a.role)}</dd><dt>Platform</dt><dd>${e(a.platform)}</dd></dl>${r}</aside></div>`:c.innerHTML=`<div class="game"><div class="game__screen game__screen--cover" style="--tint:${a.tint}">${$(a)}<i class="cab__scan"></i></div>
          <aside class="game__info"><p class="lede">${e(a.blurb)}</p>
            <dl class="game__facts"><dt>Rol</dt><dd>${e(a.role)}</dd><dt>Platform</dt><dd>${e(a.platform)}</dd><dt>Etiket</dt><dd>${a.tags.map(o=>`<span class="chip">${e(o)}</span>`).join(" ")}</dd></dl>
            ${r}
            <p class="muted" style="font-size:13px">Bu oyunun tarayıcı sürümü yok; itch.io'dan indirilir.${a.placeholder?' <span class="chip chip--example">örnek</span> Bağlantı ve kimlik doğrulanacak.':""}</p></aside></div>`}}),l.sfx?.play("open")}function A(a,l){const n=w.itch?.url;a.innerHTML=`
  <section class="view view--full arcade" data-view="arcade">
    <div class="arcade__inner">
      <header class="view__head">
        <span class="eyebrow eyebrow--purple">Sağ dünya · Oyun salonu</span>
        <h1 class="display display--xl">Jetonu at,<br><span class="glow-text">kabini</span> seç.</h1>
        <p class="lede">Jam oyunları, ekip projeleri ve kendi denemelerim. Web sürümü olanlar burada oynanır; diğerleri itch.io'da.</p>
        <div class="row">${n?`<a class="btn btn--primary" href="${n}" target="_blank" rel="noopener">itch.io profili ↗</a>`:""}<a class="btn btn--ghost" href="#/lab">Deney kabini</a></div>
      </header>
    </div>
    <div class="hall">
      <i class="hall__neon"></i>
      <div class="hall__row" id="hall-row">${f.map(L).join("")}${x}</div>
      <i class="hall__floor"></i>
    </div>
  </section>`;const s=v("#hall-row",a);s.addEventListener("click",i=>{const t=i.target.closest(".cabinet[data-slug]");if(!t)return;const u=f.find(k=>k.slug===t.dataset.slug);u&&E(u,l)});const c=i=>{const t=i.target.closest(".cabinet");t&&(m.emit("arcade:hover",{el:t}),l.sfx?.play("hover"))},r=i=>{i.target.closest(".cabinet")&&m.emit("arcade:hover",{el:null})};s.addEventListener("pointerenter",c,!0),s.addEventListener("pointerleave",r,!0),s.addEventListener("focusin",c),s.addEventListener("focusout",r);const o=v(".hall",a);let d=0,p=0,b=0;const y=i=>{const t=o.getBoundingClientRect();p=((i.clientX-t.left)/t.width-.5)*2},_=()=>{b+=(p-b)*.08,s.style.setProperty("--tilt",(b*-6).toFixed(2)+"deg"),d=requestAnimationFrame(_)};return matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches&&(o.addEventListener("pointermove",y),o.addEventListener("pointerleave",()=>{p=0}),d=requestAnimationFrame(_)),{destroy(){cancelAnimationFrame(d),m.emit("arcade:hover",{el:null})}}}export{A as mount,E as openGame};
