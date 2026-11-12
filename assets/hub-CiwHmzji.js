import{v as S,s as z,e as y,g as A,l as C,$ as i,p as G,f as I,h as J,b as u,j as k,k as x,n as B}from"./main-C-RH_0KK.js";import"./stats-BoxFg-GB.js";function D(e,v){const b=e.cover?`<img src="${e.cover}" alt="" loading="lazy">`:`<div class="cab__noart" style="--tint:${e.tint}"><span>${y(e.title)}</span></div>`;return`<div class="cab cab--${v}" style="--tint:${e.tint}"><div class="cab__marquee"><span>${y(e.title)}</span></div><div class="cab__screen">${b}<i class="cab__scan"></i></div><div class="cab__deck"><i class="cab__stick"></i><i class="cab__btn"></i><i class="cab__btn"></i></div><div class="cab__base"></div></div>`}function Y(e,v){const b=S.filter(a=>a.youtubeId).at(-1)||S.at(-1),j=Object.values(z).filter(a=>a.url).map(a=>`<a class="chip" href="${a.url}" target="_blank" rel="noopener">${y(a.label)} ↗</a>`).join("");e.innerHTML=`
  <section class="hub" id="hub">
    <h1 class="sr-only">JUIT: oyunların arkasındaki mekanikleri Mobu ile anlatan videolar ve oynanabilir oyun deneyleri</h1>
    <div class="hub__worlds" id="hub-worlds">
      <a class="world world--mobu" href="#/mobu" id="world-mobu" aria-label="Mobu ve videolar dünyasına gir">
        <div class="world__layer world__layer--back" data-depth=".35"><i class="world__spot"></i><i class="world__floor"></i></div>
        <div class="world__layer world__layer--mid" data-depth=".7">
          <div class="tv" id="hub-tv" data-occluder>
            <div class="tv__bezel"><div class="tv__screen"><video class="tv__video" muted loop playsinline autoplay preload="metadata" poster="${b.poster}" src="${b.loop}"></video><i class="tv__scan"></i><i class="tv__glass"></i></div>
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
      <a class="world world--arcade" href="#/arcade" id="world-arcade" aria-label="Oyun salonuna gir">
        <div class="world__layer world__layer--back" data-depth=".35"><i class="world__spot world__spot--arcade"></i><i class="world__floor"></i><i class="world__neon"></i></div>
        <div class="world__layer world__layer--mid" data-depth=".7"><div class="cabs">${A.slice(0,3).map(D).join("")}</div></div>
        <div class="world__text world__text--right">
          <span class="eyebrow eyebrow--purple">Sağ dünya · itch.io</span>
          <h2 class="display display--l">Oyun<br>Salonu</h2>
          <p class="lede">Jam oyunları, prototipler ve oynanabilir deneyler.</p>
          <span class="btn btn--primary">Salona gir →</span>
        </div>
      </a>
    </div>
    <button class="hub__logo" id="hub-logo" type="button" aria-label="JUIT logosu">${C({cls:"hub__logo-svg",id:"hub"})}</button>
    <div class="hub__bottom">
      <p class="hub__tag">${y(B.tagline)}</p>
      <div class="hub__links">${j}<a class="chip" href="#/lab">Deneyler</a><a class="chip" href="#/about">Hakkımda</a><button class="secret-dot" type="button" aria-label="Küçük bir sır" title="…"></button></div>
    </div>
    <p class="hub__hint" aria-hidden="true">← bir dünyaya yaklaş →</p>
  </section>`;const r=i("#hub-worlds"),n=i("#world-mobu"),d=i("#world-arcade"),L=G(),f=I();let _=0,l=0,h=0,$=null,m=!0,E=performance.now(),w=!1;const g=J(".world__layer",e).map(a=>({el:a,d:parseFloat(a.dataset.depth)||.5,x:0,y:0,tx:0,ty:0}));function t(a){a!==$&&($=a,n.classList.toggle("is-near",a==="mobu"),d.classList.toggle("is-near",a==="arcade"),n.classList.toggle("is-far",a==="arcade"),d.classList.toggle("is-far",a==="mobu"),u.emit("hub:near",a))}function M(a){const o=r.getBoundingClientRect(),s=k((a.clientX-o.left)/o.width),O=k((a.clientY-o.top)/o.height);l=(s-.5)*2,E=performance.now(),w=!1;for(const c of g){const H=c.el.parentElement.getBoundingClientRect(),R=k((a.clientX-H.left)/H.width)-.5,q=O-.5;c.tx=R*22*c.d,c.ty=q*14*c.d}t(l<-.12?"mobu":l>.12?"arcade":null)}function F(){l=0;for(const a of g)a.tx=0,a.ty=0;t(null)}function T(){if(!m)return;_=x(_,l,.08);const a=1-.32*_,o=1+.32*_;n.style.flexGrow=a.toFixed(3),d.style.flexGrow=o.toFixed(3);for(const s of g)s.x=x(s.x,s.tx,.1),s.y=x(s.y,s.ty,.1),s.el.style.transform=`translate3d(${s.x.toFixed(2)}px,${s.y.toFixed(2)}px,0)`;!w&&performance.now()-E>9e3&&(w=!0,u.emit("hub:idle")),h=requestAnimationFrame(T)}f&&!L?(r.addEventListener("pointermove",M),r.addEventListener("pointerleave",F),h=requestAnimationFrame(T)):(e.classList.add("hub--static"),L||setTimeout(()=>{m&&u.emit("hub:idle")},9e3)),n.addEventListener("focus",()=>{l=-.6,t("mobu")}),d.addEventListener("focus",()=>{l=.6,t("arcade")}),n.addEventListener("blur",()=>{f&&(l=0,t(null))}),d.addEventListener("blur",()=>{f&&(l=0,t(null))});const p=i("#hub-logo");return p.addEventListener("click",()=>{p.classList.remove("is-bump"),p.offsetWidth,p.classList.add("is-bump"),v.sfx?.play("pop"),u.emit("logo:click")}),i(".secret-dot",e).addEventListener("click",()=>{v.sfx?.play("hover"),u.emit("mobu:react","sus");const a=i(".hub__hint",e);a.textContent="Mobu'ya seslen: klavyede adını yaz…",a.classList.add("is-on")}),i(".tv__video",e)?.play?.().catch(()=>{}),{destroy(){m=!1,cancelAnimationFrame(h),r.removeEventListener("pointermove",M),r.removeEventListener("pointerleave",F),t(null)}}}export{Y as mount};
