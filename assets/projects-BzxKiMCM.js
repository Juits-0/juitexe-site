import{e as a}from"./main-BmP9Xc0f.js";import{P as o}from"./projects-a62MGjpr.js";import"./fonts-dhQoNZaw.js";import"./stats-Cxca5idR.js";function l(s){const i=(s.trailers||[]).filter(e=>e.youtubeId||e.video).length,r=[i?`${i} fragman`:"Fragman yakında"];return`<a class="proj-poster" href="${a(s.url)}">
    <span class="proj-poster__img"><img src="${a(s.poster)}" alt="" width="960" height="540" decoding="async" fetchpriority="high"></span>
    <span class="proj-poster__body">
      <span class="eyebrow eyebrow--purple">${a(s.kind)}</span>
      <h2 class="proj-poster__title"><img src="${a(s.logo)}" alt="${a(s.title)}" width="1200" height="420" decoding="async"></h2>
      <span class="proj-poster__logline">${a(s.logline)}</span>
      <span class="row proj-poster__facts">${r.map(e=>`<span class="chip">${a(e)}</span>`).join("")}<span class="btn btn--primary btn--sm">Projeye git <span aria-hidden="true">→</span></span></span>
    </span>
  </a>`}const p=()=>'<div class="proj-secret"><i class="proj-secret__noise" aria-hidden="true"></i><span class="proj-secret__lock" aria-hidden="true">🔒</span><span class="proj-secret__label mono">GİZLİ</span><span class="chip chip--soon">Yakında</span></div>';function j(s){const i=o.filter(n=>!n.hidden),r=o.filter(n=>n.hidden),e=Math.ceil(r.length/2);return s.innerHTML=`
  <section class="view projects" data-view="projeler">
    <header class="view__head">
      <span class="eyebrow eyebrow--purple">Yapım masası · Projeler</span>
      <h1 class="display display--xl">Üzerinde <span class="glow-text">çalıştıklarım</span>.</h1>
      <p class="lede">Videoların ve deneylerin dışında süren uzun işler. Biri yayında, diğerleri henüz gizli.</p>
    </header>
    <div class="proj-stage">
      <div class="proj-side proj-side--l">${r.slice(0,e).map(p).join("")}</div>
      <div class="proj-main">${i.map(l).join("")}</div>
      <div class="proj-side proj-side--r">${r.slice(e).map(p).join("")}</div>
    </div>
    <div class="proj-perch" aria-hidden="true"></div>
  </section>`,{}}export{j as mount};
