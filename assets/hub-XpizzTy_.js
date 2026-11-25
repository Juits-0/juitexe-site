import{v as H,s as D,e as t,g as G,l as J,$ as r,p as q,f as z,h as P,b as _,j as k,k as x,n as B}from"./main-BmP9Xc0f.js";import{P as I,L as U}from"./projects-a62MGjpr.js";import"./fonts-dhQoNZaw.js";import"./stats-Cxca5idR.js";function V(){const e=U,o=I.filter(n=>n.hidden).length;return`<section class="hub-proj" aria-labelledby="hub-proj-t">
    <img class="hub-proj__bg" src="${t(e.poster)}" alt="" width="960" height="540" fetchpriority="high">
    <div class="hub-proj__main">
      <span class="eyebrow hub-proj__k">Projeler</span>
      <h2 class="hub-proj__title" id="hub-proj-t"><img src="${t(e.logo)}" alt="${t(e.title)}" width="1200" height="420" fetchpriority="high"></h2>
      <div class="hub-proj__row"><p class="hub-proj__line">${t(e.teaser)}</p>
      <a class="btn btn--primary btn--sm hub-proj__go" href="${t(e.url)}" aria-label="Dünyaya gir: ${t(e.title)}">Dünyaya gir <span aria-hidden="true">→</span></a></div>
    </div>
    <div class="hub-proj__side">
      <div class="hub-proj__secrets">${'<div class="hub-proj__secret"><span aria-hidden="true">🔒</span><span class="mono">GİZLİ</span></div>'.repeat(o)}</div>
      <a class="hub-proj__all" href="#/projeler">Tüm projeler <span aria-hidden="true">→</span></a>
    </div>
  </section>`}const X=e=>e.replace(/\/games\/([^/]+)\.\w+$/,"/games/sm/$1.webp");function Y(e,o){const n=e.cover?`<img src="${X(e.cover)}" data-full="${e.cover}" alt="" loading="lazy">`:`<div class="cab__noart" style="--tint:${e.tint}"><span>${t(e.title)}</span></div>`;return`<div class="cab cab--${o}" style="--tint:${e.tint}"><div class="cab__marquee"><span>${t(e.title)}</span></div><div class="cab__screen">${n}<i class="cab__scan"></i></div><div class="cab__deck"><i class="cab__stick"></i><i class="cab__btn"></i><i class="cab__btn"></i></div><div class="cab__base"></div></div>`}function Q(e,o){const n=H.filter(a=>a.youtubeId).at(-1)||H.at(-1),A=Object.values(D).filter(a=>a.url).map(a=>`<a class="chip" href="${a.url}" target="_blank" rel="noopener">${t(a.label)} ↗</a>`).join("");e.innerHTML=`
  <section class="hub" id="hub">
    <h1 class="sr-only">JUIT: oyunların arkasındaki mekanikleri Mobu ile anlatan videolar ve oynanabilir oyun deneyleri</h1>
    ${V()}
    <div class="hub__worlds" id="hub-worlds">
      <a class="world world--mobu" href="#/mobu" id="world-mobu">
        <div class="world__layer world__layer--back" data-depth=".35" aria-hidden="true"><i class="world__spot"></i><i class="world__floor"></i></div>
        <div class="world__layer world__layer--mid" data-depth=".7" aria-hidden="true">
          <div class="tv" id="hub-tv" data-occluder>
            <div class="tv__bezel"><div class="tv__screen"><video class="tv__video" muted loop playsinline autoplay preload="metadata" poster="${n.poster}" src="${n.loop}"></video><i class="tv__scan"></i><i class="tv__glass"></i></div>
              <div class="tv__side"><i class="tv__knob"></i><i class="tv__knob"></i><i class="tv__led"></i></div></div>
            <div class="tv__feet"><i></i><i></i></div>
          </div>
        </div>
        <div class="world__text">
          <span class="eyebrow eyebrow--purple">Sol dünya · YouTube</span>
          <h2 class="display display--l">Mobu &amp;<br>Videolar</h2>
          <p class="lede">Oyunların arkasındaki mekanikler, Mobu'nun başına gelenlerle.</p>
          <span class="btn btn--primary">Dünyaya gir →</span>
        </div>
      </a>
      <a class="world world--arcade" href="#/arcade" id="world-arcade">
        <div class="world__layer world__layer--back" data-depth=".35" aria-hidden="true"><i class="world__spot world__spot--arcade"></i><i class="world__floor"></i><i class="world__neon"></i></div>
        <div class="world__layer world__layer--mid" data-depth=".7" aria-hidden="true"><div class="cabs">${G.slice(0,3).map(Y).join("")}</div></div>
        <div class="world__text world__text--right">
          <span class="eyebrow eyebrow--purple">Sağ dünya · itch.io</span>
          <h2 class="display display--l">Oyun<br>Salonu</h2>
          <p class="lede">Jam oyunları, prototipler ve oynanabilir deneyler.</p>
          <span class="btn btn--primary">Salona gir →</span>
        </div>
      </a>
    </div>
    <button class="hub__logo" id="hub-logo" type="button" aria-label="JUIT logosu">${J({cls:"hub__logo-svg",id:"hub"})}</button>
    <div class="hub__bottom">
      <p class="hub__tag">${t(B.tagline)}</p>
      <div class="hub__links">${A}<a class="chip" href="#/lab">Deneyler</a><a class="chip" href="#/projeler">Projeler</a><a class="chip" href="#/about">Hakkımda</a><button class="secret-dot" type="button" aria-label="Küçük bir sır" title="…"></button></div>
    </div>
    <p class="hub__hint" aria-hidden="true">← bir dünyaya yaklaş →</p>
  </section>`;const c=r("#hub-worlds"),u=r("#world-mobu"),p=r("#world-arcade"),y=q(),f=z();let v=0,l=0,m=0,j=null,w=!0,E=performance.now(),g=!1;const $=P(".world__layer",e).map(a=>({el:a,d:parseFloat(a.dataset.depth)||.5,x:0,y:0,tx:0,ty:0}));function i(a){a!==j&&(j=a,u.classList.toggle("is-near",a==="mobu"),p.classList.toggle("is-near",a==="arcade"),u.classList.toggle("is-far",a==="arcade"),p.classList.toggle("is-far",a==="mobu"),_.emit("hub:near",a))}function T(a){const d=c.getBoundingClientRect(),s=k((a.clientX-d.left)/d.width),C=k((a.clientY-d.top)/d.height);l=(s-.5)*2,E=performance.now(),g=!1;for(const b of $){const S=b.el.parentElement.getBoundingClientRect(),O=k((a.clientX-S.left)/S.width)-.5,R=C-.5;b.tx=O*22*b.d,b.ty=R*14*b.d}i(l<-.12?"mobu":l>.12?"arcade":null)}function M(){l=0;for(const a of $)a.tx=0,a.ty=0;i(null)}function F(){if(!w)return;v=x(v,l,.08);const a=1-.32*v,d=1+.32*v;u.style.flexGrow=a.toFixed(3),p.style.flexGrow=d.toFixed(3);for(const s of $)s.x=x(s.x,s.tx,.1),s.y=x(s.y,s.ty,.1),s.el.style.transform=`translate3d(${s.x.toFixed(2)}px,${s.y.toFixed(2)}px,0)`;!g&&performance.now()-E>9e3&&(g=!0,_.emit("hub:idle")),m=requestAnimationFrame(F)}f&&!y?(c.addEventListener("pointermove",T),c.addEventListener("pointerleave",M),m=requestAnimationFrame(F)):(e.classList.add("hub--static"),y||setTimeout(()=>{w&&_.emit("hub:idle")},9e3)),u.addEventListener("focus",()=>{l=-.6,i("mobu")}),p.addEventListener("focus",()=>{l=.6,i("arcade")}),u.addEventListener("blur",()=>{f&&(l=0,i(null))}),p.addEventListener("blur",()=>{f&&(l=0,i(null))});const h=r("#hub-logo");h.addEventListener("click",()=>{h.classList.remove("is-bump"),h.offsetWidth,h.classList.add("is-bump"),o.sfx?.play("pop"),_.emit("logo:click")}),r(".secret-dot",e).addEventListener("click",()=>{o.sfx?.play("hover"),_.emit("mobu:react","sus");const a=r(".hub__hint",e);a.textContent="Mobu'ya seslen: klavyede adını yaz…",a.classList.add("is-on")}),P(".cab__screen img",e).forEach(a=>a.addEventListener("error",()=>{a.src=a.dataset.full},{once:!0}));const L=r(".tv__video",e);return y?(L?.removeAttribute("autoplay"),L?.pause?.()):L?.play?.().catch(()=>{}),{destroy(){w=!1,cancelAnimationFrame(m),c.removeEventListener("pointermove",T),c.removeEventListener("pointerleave",M),i(null)}}}export{Q as mount};
