import{x as p,e,B as s}from"./main-C-RH_0KK.js";import"./stats-BoxFg-GB.js";const o={sketch:"✎",bug:"🐛",proto:"⚙"};function t(l,n){const r=p.get("juit.secretFound");return l.innerHTML=`
  <section class="view secret" data-view="cekmece">
    <header class="view__head">
      <span class="eyebrow eyebrow--purple">Gizli alan · ${r?"buldun":"buraya nasıl geldin?"}</span>
      <h1 class="display display--xl">${e(s.title)}</h1>
      <p class="lede">${e(s.blurb)}</p>
    </header>
    <div class="drawer">
      <div class="drawer__front"><i></i><span class="mono">MOBU · ÖZEL</span></div>
      <div class="drawer__items">${s.items.map((a,i)=>`<article class="polaroid${a.image?" polaroid--wide":""}" style="--r:${(i%2?1:-1)*(1.5+i)}deg">${a.image?`<a class="polaroid__pic polaroid__pic--img" href="${a.image}" target="_blank" rel="noopener" title="Tam boy aç"><img src="${a.image}" alt="${e(a.alt||a.title)}" loading="lazy" decoding="async"></a>`:`<div class="polaroid__pic polaroid__pic--${a.kind}"><span>${o[a.kind]||"•"}</span></div>`}<h3>${e(a.title)}</h3><p>${e(a.text)}</p>${a.placeholder?'<span class="chip chip--example">örnek</span>':""}</article>`).join("")}</div>
    </div>
    <p class="muted" style="margin-top:28px;font-size:13px"><a href="#/">Ana sayfaya dön</a></p>
  </section>`,{destroy(){}}}export{t as mount};
