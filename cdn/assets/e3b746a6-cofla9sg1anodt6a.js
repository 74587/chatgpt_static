const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-np9hvv3mo4n793mc.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-meow6085i2spqgdd.js","assets/2340486e-i20axdnmh5jcl165.js","assets/conversation-small-orr54pxfpgyodchr.js","assets/30901919-irn440affmnqkhpa.js","assets/c470f5ab-nb6mifndtoc8y8v3.js","assets/0e5afe53-e49otokc567r9bhu.js","assets/conversation-small-ftje035n.css","assets/8b34dbc2-gsvlb36nf5hh3wvf.js","assets/82782bc9-10noyt5n9g0zrq35.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{$Q as r,$m as i,AP as a,BC as o,DV as s,JC as c,KC as l,KZ as u,Ly as d,MF as f,NF as p,O0 as m,Ry as h,Sk as g,UH as _,VZ as v,W4 as y,WH as b,X4 as x,XC as S,Y4 as C,_k as ee,aW as w,b3 as te,cw as ne,e$ as T,eh as re,g$ as ie,g3 as E,h$ as D,i3 as O,jP as ae,js as oe,kV as k,ks as A,mW as se,n3 as j,pa as ce,sw as M,vk as le,w0 as ue,wq as N,xa as de,y3 as P,yk as fe}from"./4813494d-meow6085i2spqgdd.js";import{Cn as F,Sn as I,Tn as pe,bn as me,en as L,gn as R,wn as z,xn as B,yn as he}from"./2340486e-i20axdnmh5jcl165.js";import{$8 as V,Ian as ge,Ib as _e,Lan as ve,Lb as ye,Q8 as be,Qvt as xe,X8 as Se,Y8 as H,Z8 as Ce,_E as U,c5 as we,dbt as Te,er as Ee,eyt as De,fbt as Oe,fu as ke,gqt as Ae,hqt as je,i5 as Me,l5 as Ne,mE as Pe,n5 as W,pbt as Fe,pu as G,r5 as Ie,s5 as Le,sE as K,tr as q}from"./conversation-small-orr54pxfpgyodchr.js";import{AE as Re,Xx as ze,Zx as Be,kE as Ve,nw as He,tw as Ue}from"./30901919-irn440affmnqkhpa.js";import{i as We,n as Ge,t as Ke}from"./8d846022-habmttvqwy4a5siq.js";import{a as qe,i as Je,o as Ye}from"./91969468-fi0pg7m210e65dpv.js";import{n as Xe,t as J}from"./4d271a7b-ezxc0bh85xmdyn1k.js";import{n as Ze,r as Y}from"./58bafdef-hems9i7449tb62zr.js";import{a as Qe,i as $e}from"./e01e2324-m5h7zgadkw4ub01o.js";import{i as et,t as X}from"./5dc32f04-bs2m2vvjrui4gsdq.js";import{n as tt,t as nt}from"./066a83b9-fen0f5j2zzoa6f5c.js";import{n as rt,t as it}from"./f0f3c45c-m6pgrgy2jt6ibhv6.js";import{i as at,n as ot,r as st,t as ct}from"./cc79834b-dafq6rihpkvwhod9.js";function lt(){return y(`2779568043`)}function ut(){return y(`3864712762`)}function dt(){return C(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var ft=e((()=>{x()}));function pt({messageId:e,refIndex:t}){return`appblock:${e}:${t}`}var mt=e((()=>{}));function ht({errorSource:e,errorType:t,networkPolicy:n,outcome:r,readySignal:i,renderMode:a,surface:o,variant:s}){let c={network_policy:n,surface:o};return e!=null&&(c.error_source=e),t!=null&&(c.error_type=t),r!=null&&(c.outcome=r),i!=null&&(c.ready_signal=i),a!=null&&(c.render_mode=a),s!=null&&(c.variant=s),c}function gt(){return typeof performance<`u`?performance.now():Date.now()}function _t(e){return new TextEncoder().encode(e).byteLength/1024}function vt(e){return e instanceof Error?e.name:`unknown`}function yt(e,t,n=1){te.count(E.APP_BLOCKS,e,ht(t),n)}function bt(e,t,n){te.hist(E.APP_BLOCKS,e,ht(n),t)}function xt({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,St.useRef)(gt()),i=(0,St.useRef)(null),a=(0,St.useRef)(!1),o=(0,St.useRef)(!1),s=le(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=le((n=e)=>{o.current||(o.current=!0,bt(Tt,_t(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:le((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=gt(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),yt(Ot,t);let _=(e,n)=>{f||(f=!0,yt(Dt,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=gt();bt(Et,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,bt(Ct,s-r.current,t),n!=null&&bt(At,s-n,t))},y=(e,t)=>{if(s(),typeof window>`u`){v(e,t);return}i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,t)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=gt(),g=n,bt(kt,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{!e()||p||(p=!0,s(),yt(wt,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt=e((()=>{P(),ee(),St=n(F()),Ct=`app_block.first_render_time_ms`,wt=`app_block.load.failure`,Tt=`app_block.payload_size_kb`,Et=`app_block.ready_to_first_paint_ms`,Dt=`app_block.render.outcome`,Ot=`app_block.render.start`,kt=`app_block.sandbox_eval_to_ready_ms`,At=`app_block.widget_ref_to_first_paint_ms`}));function Mt(e){return e==="default"||e===`open`?e:null}function Nt({explicitStyleMode:e,libraryFileId:t}){return e??(t==null?`default`:`open`)}var Pt=e((()=>{})),Ft,It=e((()=>{Ft=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main{padding-block-start:12px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),Lt=e((()=>{})),Rt,zt=e((()=>{Lt(),Rt=`/cdn/assets/app-block-sandbox-foundation-c11hc9c6.css`})),Bt,Vt=e((()=>{Bt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main{padding-block-start:12px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){--app-block-slider-track:color-mix(in srgb, var(--viz-text) 16%, transparent);--app-block-slider-thumb-shadow:color-mix(in srgb, var(--viz-text) 18%, transparent);appearance:none;background:linear-gradient(var(--app-block-slider-track), var(--app-block-slider-track)) center / 100% 4px no-repeat;cursor:pointer;border:0;border-radius:9999px;width:100%;height:28px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.5}:where(input[type=range])::-webkit-slider-runnable-track{background:0 0;border:0;height:28px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;margin-top:5px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-webkit-slider-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-webkit-slider-thumb{transform:scale(1.06)}:where(input[type=range])::-moz-range-track{background:var(--app-block-slider-track);border:0;border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-progress{background:var(--viz-accent);border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-thumb{border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-moz-range-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-moz-range-thumb{transform:scale(1.06)}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),Ht=e((()=>{})),Ut,Wt=e((()=>{Ht(),Ut=`/cdn/assets/app-block-sandbox-grv3t07f.css`}));function Gt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Kt=e((()=>{}));function qt(e){return String.raw(rn||=Gt([`<script>
  (() => {
    const isOpenStyleMode = `,`;

    function updateSurface(surface) {
      if (surface !== "inline" && surface !== "stage") {
        return;
      }

      const root = document.documentElement;
      const isDarkMode = root.classList.contains("dark");
      const surfaceBackgrounds = isDarkMode
        ? { inline: "#000000", stage: "#212121" }
        : { inline: "#fcfcfc", stage: "#ffffff" };
      root.setAttribute("data-app-block-surface", surface);
      root.style.backgroundColor =
        surface === "inline" && isOpenStyleMode
          ? "transparent"
          : "var(--main-surface-primary, " + surfaceBackgrounds[surface] + ")";
    }

    window.addEventListener("openai:set_globals", (event) => {
      const surface = event.detail?.globals?.__appBlockSurface;
      if (surface != null) {
        updateSurface(surface);
      }
    });

    const initialSurface =
      window.openai?.__appBlockSurface ??
      document.documentElement.getAttribute("data-app-block-surface") ??
      "inline";
    updateSurface(initialSurface);
  })();
<\/script>`]),e===`open`)}function Jt(e){return/<!doctype\b|<html[\s>]/i.test(e)}function Yt(e,t){let n=e.match(/<\/body\s*>(?=\s*(?:<\/html\s*>)?\s*$)/i)??e.match(/<\/html\s*>\s*$/i);if(n?.index==null)return`${e}\n${t}`;let r=n.index;return[e.slice(0,r),t,e.slice(r)].join(`
`)}function Xt(e){let t=e.trim().replaceAll(`_`,`-`);return t.length===0||!/^[A-Za-z0-9-]+$/.test(t)?`en`:t}function Zt(e){if(/^https?:\/\//i.test(e)||typeof window>`u`)return e;let t=window.location.origin;return new URL(e,t).toString()}function Qt(e){try{return new URL(e).origin}catch{return null}}function $t(e){return ln.has(e)?e:`default`}function en(e,t){return t===`skybridge`||t===`stage`?e===`dark`?`#212121`:`#ffffff`:e===`dark`?`#000000`:`#fcfcfc`}function tn(e=[]){let t=Zt(Ut),n=Zt(Rt),r=[Qt(on),Qt(sn),Qt(t),Qt(n),...cn,...e.map(Qt)];return Array.from(new Set(r.filter(e=>e!=null)))}function nn(e,t=`light`,n=`en`,r=`default`,i=`inline`,{loadTailwind:a=!0,platform:o,progressiveStreaming:s=!1,syncPresentationSurface:c=!1,styleMode:l=`default`}={}){let u=e.trim(),d=c?qt(l):``;if(!s&&Jt(u))return{html:c?Yt(u,d):u,expectReadySignal:!1};let f=Xt(n),p=l===`open`?Ft:Bt,m=Zt(l===`open`?Rt:Ut),h=$t(r),g=en(t,i),_=i===`skybridge`&&o!=null&&o!==`web`||i===`inline`&&l===`open`,v=[`color-scheme: ${t};`,_?`background-color: transparent;`:`background-color: var(--main-surface-primary, ${g});`].join(` `);return{expectReadySignal:a,html:`<!doctype html>
<html ${[`lang="${f}"`,`class="${t}"`,`data-chat-theme="${h}"`,`data-app-block-surface="${i}"`,`data-app-block-style-mode="${l}"`,o==null?null:`data-app-block-platform="${o}"`,`style="${v}"`].filter(e=>e!=null).join(` `)}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="${t}" />
    ${a?`<script>
      window.tailwind = window.tailwind || {};
      window.tailwind.config = { darkMode: "class" };
    <\/script>
    <script id="app-block-tailwind" src="${on}" defer><\/script>
    <script>
      (() => {
        const tailwindScript = document.getElementById("app-block-tailwind");
        const markFatal = () => {
          document.documentElement.setAttribute("data-fatal", "");
        };

        if (!(tailwindScript instanceof HTMLScriptElement)) {
          markFatal();
          return;
        }

        tailwindScript.addEventListener("error", markFatal, { once: true });
        tailwindScript.addEventListener(
          "load",
          () => {
            const readinessProbe = document.createElement("div");
            readinessProbe.className = "hidden";
            readinessProbe.setAttribute("aria-hidden", "true");

            const markReadyWhenStyled = () => {
              if (getComputedStyle(readinessProbe).display !== "none") {
                return;
              }

              styleObserver.disconnect();
              readinessProbe.remove();
              document.documentElement.setAttribute("data-ready", "");
            };
            const styleObserver = new MutationObserver(markReadyWhenStyled);
            styleObserver.observe(document.head, {
              childList: true,
              characterData: true,
              subtree: true,
            });

            document.body.append(readinessProbe);
            markReadyWhenStyled();
          },
          { once: true }
        );
      })();
    <\/script>`:``}
    ${a?`<link rel="stylesheet" href="${m}" />`:`<style>${p}</style>`}
    ${s?un:``}
  </head>
  <body>
    <main>
${s?``:u}
    </main>
    ${d}
    ${s?dn:``}
  </body>
</html>`}}var rn,an,on,sn,cn,ln,un,dn,fn=e((()=>{It(),zt(),Vt(),Wt(),Kt(),on=`https://cdn.tailwindcss.com`,sn=`https://images.openai.com`,cn=[`https://cdnjs.cloudflare.com`,`https://esm.sh`,`https://cdn.jsdelivr.net`,`https://unpkg.com`,`https://fonts.googleapis.com`,`https://fonts.gstatic.com`,`https://fonts.bunny.net`],ln=new Set([`default`,`blue`,`green`,`yellow`,`purple`,`pink`,`orange`,`black`]),un=`<style>
  @media (prefers-reduced-motion: no-preference) {
    [data-app-block-stream-enter] {
      animation: app-block-stream-enter 160ms ease-out both;
    }

    @keyframes app-block-stream-enter {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  }
</style>`,dn=String.raw(an||=Gt([`<script>
  (() => {
    const root = document.querySelector("main");
    if (!(root instanceof HTMLElement)) {
      return;
    }

    let hasFinalized = false;
    let previousHtml = null;

    function getRenderableHtml(html, isFinal) {
      if (isFinal) {
        return html;
      }

      let renderableHtml = html;
      const trailingTagStart = renderableHtml.lastIndexOf("<");
      if (trailingTagStart >= 0) {
        const trailingTag = renderableHtml.slice(trailingTagStart).toLowerCase();
        if ("</appblock>".startsWith(trailingTag)) {
          renderableHtml = renderableHtml.slice(0, trailingTagStart);
        }
      }

      const lowercaseHtml = renderableHtml.toLowerCase();
      const lastStyleStart = lowercaseHtml.lastIndexOf("<style");
      const lastStyleEnd = lowercaseHtml.lastIndexOf("</style");
      if (lastStyleStart > lastStyleEnd) {
        return renderableHtml.slice(0, lastStyleStart);
      }

      return renderableHtml;
    }

    function removePartialExecutionAttributes(fragment) {
      for (const element of fragment.querySelectorAll("*")) {
        for (const attribute of Array.from(element.attributes)) {
          const attributeName = attribute.name.toLowerCase();
          if (attributeName.startsWith("on") || attributeName === "srcdoc") {
            element.removeAttribute(attribute.name);
            continue;
          }

          if (
            /^(?:href|src|action|formaction|xlink:href)$/i.test(attribute.name) &&
            /^s*javascript:/i.test(attribute.value)
          ) {
            element.removeAttribute(attribute.name);
          }
        }

        if (element.matches("button, input, select, textarea, fieldset")) {
          element.setAttribute("disabled", "");
        }
        if (element.matches("a[href]")) {
          element.removeAttribute("href");
          element.setAttribute("aria-disabled", "true");
        }
        if (element.hasAttribute("contenteditable")) {
          element.setAttribute("contenteditable", "false");
        }
      }
    }

    function markNewElement(node) {
      if (!(node instanceof Element) || node.tagName === "STYLE") {
        return;
      }

      node.setAttribute("data-app-block-stream-enter", "");
      node.addEventListener(
        "animationend",
        () => node.removeAttribute("data-app-block-stream-enter"),
        { once: true }
      );
    }

    function synchronizeAttributes(currentElement, nextElement) {
      for (const attribute of Array.from(currentElement.attributes)) {
        if (
          attribute.name !== "data-app-block-stream-enter" &&
          !nextElement.hasAttribute(attribute.name)
        ) {
          currentElement.removeAttribute(attribute.name);
        }
      }

      for (const attribute of Array.from(nextElement.attributes)) {
        if (currentElement.getAttribute(attribute.name) !== attribute.value) {
          currentElement.setAttribute(attribute.name, attribute.value);
        }
      }
    }

    function synchronizeChildren(currentParent, nextParent, isFinal) {
      let currentChild = currentParent.firstChild;

      for (const nextChild of Array.from(nextParent.childNodes)) {
        if (currentChild === null) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.appendChild(insertedChild);
          markNewElement(insertedChild);
          continue;
        }

        const isMatchingNode =
          currentChild.nodeType === nextChild.nodeType &&
          currentChild.nodeName === nextChild.nodeName;
        if (!isMatchingNode) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.replaceChild(insertedChild, currentChild);
          markNewElement(insertedChild);
          currentChild = insertedChild.nextSibling;
          continue;
        }

        if (currentChild instanceof Element && nextChild instanceof Element) {
          synchronizeAttributes(currentChild, nextChild);
          synchronizeChildren(currentChild, nextChild, isFinal);
        } else if (currentChild.nodeValue !== nextChild.nodeValue) {
          currentChild.nodeValue = nextChild.nodeValue;
        }

        currentChild = currentChild.nextSibling;
      }

      if (!isFinal) {
        return;
      }

      while (currentChild !== null) {
        const nextCurrentChild = currentChild.nextSibling;
        currentChild.remove();
        currentChild = nextCurrentChild;
      }
    }

    function applyStreamUpdate(update) {
      if (
        hasFinalized ||
        update === null ||
        typeof update !== "object" ||
        typeof update.html !== "string"
      ) {
        return;
      }

      const isFinal = update.isFinal === true;
      if (!isFinal && previousHtml === update.html) {
        return;
      }
      previousHtml = update.html;

      const template = document.createElement("template");
      template.innerHTML = getRenderableHtml(update.html, isFinal);
      const scripts = Array.from(template.content.querySelectorAll("script"));
      for (const script of scripts) {
        script.remove();
      }

      if (!isFinal) {
        removePartialExecutionAttributes(template.content);
      }

      synchronizeChildren(root, template.content, isFinal);

      if (!isFinal) {
        return;
      }

      hasFinalized = true;
      for (const sourceScript of scripts) {
        const executableScript = document.createElement("script");
        for (const attribute of Array.from(sourceScript.attributes)) {
          executableScript.setAttribute(attribute.name, attribute.value);
        }
        executableScript.textContent = sourceScript.textContent;
        root.appendChild(executableScript);
      }
    }

    window.addEventListener("openai:set_globals", (event) => {
      const globals = event.detail && event.detail.globals;
      if (globals && Object.hasOwn(globals, "__appBlockStream")) {
        applyStreamUpdate(globals.__appBlockStream);
      }
    });

    if (window.openai && window.openai.__appBlockStream) {
      applyStreamUpdate(window.openai.__appBlockStream);
    }
  })();
<\/script>`],[`<script>
  (() => {
    const root = document.querySelector("main");
    if (!(root instanceof HTMLElement)) {
      return;
    }

    let hasFinalized = false;
    let previousHtml = null;

    function getRenderableHtml(html, isFinal) {
      if (isFinal) {
        return html;
      }

      let renderableHtml = html;
      const trailingTagStart = renderableHtml.lastIndexOf("<");
      if (trailingTagStart >= 0) {
        const trailingTag = renderableHtml.slice(trailingTagStart).toLowerCase();
        if ("</appblock>".startsWith(trailingTag)) {
          renderableHtml = renderableHtml.slice(0, trailingTagStart);
        }
      }

      const lowercaseHtml = renderableHtml.toLowerCase();
      const lastStyleStart = lowercaseHtml.lastIndexOf("<style");
      const lastStyleEnd = lowercaseHtml.lastIndexOf("</style");
      if (lastStyleStart > lastStyleEnd) {
        return renderableHtml.slice(0, lastStyleStart);
      }

      return renderableHtml;
    }

    function removePartialExecutionAttributes(fragment) {
      for (const element of fragment.querySelectorAll("*")) {
        for (const attribute of Array.from(element.attributes)) {
          const attributeName = attribute.name.toLowerCase();
          if (attributeName.startsWith("on") || attributeName === "srcdoc") {
            element.removeAttribute(attribute.name);
            continue;
          }

          if (
            /^(?:href|src|action|formaction|xlink:href)$/i.test(attribute.name) &&
            /^\\s*javascript:/i.test(attribute.value)
          ) {
            element.removeAttribute(attribute.name);
          }
        }

        if (element.matches("button, input, select, textarea, fieldset")) {
          element.setAttribute("disabled", "");
        }
        if (element.matches("a[href]")) {
          element.removeAttribute("href");
          element.setAttribute("aria-disabled", "true");
        }
        if (element.hasAttribute("contenteditable")) {
          element.setAttribute("contenteditable", "false");
        }
      }
    }

    function markNewElement(node) {
      if (!(node instanceof Element) || node.tagName === "STYLE") {
        return;
      }

      node.setAttribute("data-app-block-stream-enter", "");
      node.addEventListener(
        "animationend",
        () => node.removeAttribute("data-app-block-stream-enter"),
        { once: true }
      );
    }

    function synchronizeAttributes(currentElement, nextElement) {
      for (const attribute of Array.from(currentElement.attributes)) {
        if (
          attribute.name !== "data-app-block-stream-enter" &&
          !nextElement.hasAttribute(attribute.name)
        ) {
          currentElement.removeAttribute(attribute.name);
        }
      }

      for (const attribute of Array.from(nextElement.attributes)) {
        if (currentElement.getAttribute(attribute.name) !== attribute.value) {
          currentElement.setAttribute(attribute.name, attribute.value);
        }
      }
    }

    function synchronizeChildren(currentParent, nextParent, isFinal) {
      let currentChild = currentParent.firstChild;

      for (const nextChild of Array.from(nextParent.childNodes)) {
        if (currentChild === null) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.appendChild(insertedChild);
          markNewElement(insertedChild);
          continue;
        }

        const isMatchingNode =
          currentChild.nodeType === nextChild.nodeType &&
          currentChild.nodeName === nextChild.nodeName;
        if (!isMatchingNode) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.replaceChild(insertedChild, currentChild);
          markNewElement(insertedChild);
          currentChild = insertedChild.nextSibling;
          continue;
        }

        if (currentChild instanceof Element && nextChild instanceof Element) {
          synchronizeAttributes(currentChild, nextChild);
          synchronizeChildren(currentChild, nextChild, isFinal);
        } else if (currentChild.nodeValue !== nextChild.nodeValue) {
          currentChild.nodeValue = nextChild.nodeValue;
        }

        currentChild = currentChild.nextSibling;
      }

      if (!isFinal) {
        return;
      }

      while (currentChild !== null) {
        const nextCurrentChild = currentChild.nextSibling;
        currentChild.remove();
        currentChild = nextCurrentChild;
      }
    }

    function applyStreamUpdate(update) {
      if (
        hasFinalized ||
        update === null ||
        typeof update !== "object" ||
        typeof update.html !== "string"
      ) {
        return;
      }

      const isFinal = update.isFinal === true;
      if (!isFinal && previousHtml === update.html) {
        return;
      }
      previousHtml = update.html;

      const template = document.createElement("template");
      template.innerHTML = getRenderableHtml(update.html, isFinal);
      const scripts = Array.from(template.content.querySelectorAll("script"));
      for (const script of scripts) {
        script.remove();
      }

      if (!isFinal) {
        removePartialExecutionAttributes(template.content);
      }

      synchronizeChildren(root, template.content, isFinal);

      if (!isFinal) {
        return;
      }

      hasFinalized = true;
      for (const sourceScript of scripts) {
        const executableScript = document.createElement("script");
        for (const attribute of Array.from(sourceScript.attributes)) {
          executableScript.setAttribute(attribute.name, attribute.value);
        }
        executableScript.textContent = sourceScript.textContent;
        root.appendChild(executableScript);
      }
    }

    window.addEventListener("openai:set_globals", (event) => {
      const globals = event.detail && event.detail.globals;
      if (globals && Object.hasOwn(globals, "__appBlockStream")) {
        applyStreamUpdate(globals.__appBlockStream);
      }
    });

    if (window.openai && window.openai.__appBlockStream) {
      applyStreamUpdate(window.openai.__appBlockStream);
    }
  })();
<\/script>`]))}));function pn(){"use forget";let e=(0,mn.useContext)(hn);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var mn,hn,gn=e((()=>{mn=n(F()),hn=(0,mn.createContext)(null)})),_n,vn=e((()=>{b(),pe(),_n=_(()=>z(()=>import(`./7aa2b76f-np9hvv3mo4n793mc.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}));function yn(e){"use forget";let t=(0,Sn.c)(40),{additionalResourceDomains:n,children:r,code:i,conversationId:a,source:o,styleMode:s,title:c}=e,l=`app-block:${o.appBlockId}:${(0,Cn.useId)()}`,u=(0,Cn.useRef)(null),[d,f]=(0,Cn.useState)(null),p=o.appBlockId,m=o.libraryFileId,h=o.messageId,g=o.refIndex,_=a??null,v;t[0]!==_||t[1]!==p?(v={appBlockId:p,conversationId:_},t[0]=_,t[1]=p,t[2]=v):v=t[2];let y=v,b=T(H),x;t[3]!==b||t[4]!==y?(x=V(b,y),t[3]=b,t[4]=y,t[5]=x):x=t[5];let S=x,C=b?.appBlockId===p&&b.conversationId===_&&(b.isOriginalVersion===!0||b.versionNumber!=null),ee=S||C,w;t[6]!==b||t[7]!==l||t[8]!==y?(w=W(b,y,l),t[6]=b,t[7]=l,t[8]=y,t[9]=w):w=t[9];let te=w,ne;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(ne=()=>{u.current?.focus()},t[10]=ne):ne=t[10];let re=ne,ie=d?.supportsAtomicMove?d:void 0,E;t[11]!==p||t[12]!==m||t[13]!==h||t[14]!==g?(E={appBlockId:p,libraryFileId:m,messageId:h,refIndex:g},t[11]=p,t[12]=m,t[13]=h,t[14]=g,t[15]=E):E=t[15];let D;t[16]!==n||t[17]!==i||t[18]!==s||t[19]!==ie||t[20]!==E||t[21]!==c?(D={additionalResourceDomains:n,code:i,focusOnClose:re,sharedPreview:ie,source:E,styleMode:s,title:c},t[16]=n,t[17]=i,t[18]=s,t[19]=ie,t[20]=E,t[21]=c,t[22]=D):D=t[22];let O=D,ae,oe;t[23]!==O||t[24]!==S||t[25]!==y?(ae=()=>{S&&Ie(y,O)},oe=[O,S,y],t[23]=O,t[24]=S,t[25]=y,t[26]=ae,t[27]=oe):(ae=t[26],oe=t[27]),(0,Cn.useEffect)(ae,oe);let k;t[28]!==O||t[29]!==te||t[30]!==y?(k=()=>{Se(y,te,O)},t[28]=O,t[29]=te,t[30]=y,t[31]=k):k=t[31];let A=k,se;t[32]!==ee||t[33]!==C||t[34]!==A||t[35]!==d?(se={isExpanded:ee,isViewingHistoricalVersion:C,openExpandedView:A,setSharedPreview:f,sharedPreview:d,triggerRef:u},t[32]=ee,t[33]=C,t[34]=A,t[35]=d,t[36]=se):se=t[36];let j=se,ce;return t[37]!==r||t[38]!==j?(ce=(0,wn.jsx)(hn.Provider,{value:j,children:r}),t[37]=r,t[38]=j,t[39]=ce):ce=t[39],ce}function bn(e){"use forget";let t=(0,Sn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,headerTitleContent:o,title:s}=e,c=st(),l;t[0]===i?l=t[1]:(l=()=>i==null?0:ke(i).height$()??0,t[0]=i,t[1]=l);let u=T(l),d=c===`fullscreen`&&n&&i!=null?u:0,f=o??s,p;t[2]===f?p=t[3]:(p=(0,wn.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:f}),t[2]=f,t[3]=p);let m;t[4]!==a||t[5]!==p?(m=(0,wn.jsxs)(ct.Header,{className:`pb-1`,children:[p,a]}),t[4]=a,t[5]=p,t[6]=m):m=t[6];let h;t[7]===d?h=t[8]:(h={paddingBottom:d},t[7]=d,t[8]=h);let g;t[9]===r?g=t[10]:(g=(0,wn.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=g);let _;t[11]!==h||t[12]!==g?(_=(0,wn.jsx)(ct.Body,{className:`bg-token-bg-primary overflow-hidden`,style:h,children:g}),t[11]=h,t[12]=g,t[13]=_):_=t[13];let v;return t[14]!==m||t[15]!==_?(v=(0,wn.jsxs)(wn.Fragment,{children:[m,_]}),t[14]=m,t[15]=_,t[16]=v):v=t[16],v}function xn(e){"use forget";let t=(0,Sn.c)(5),{conversation:n,paneId:r}=e,i=at(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,wn.jsx)(_n,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var Sn,Cn,wn,Tn=e((()=>{Sn=L(),G(),ot(),r(),Cn=n(F()),gn(),be(),vn(),wn=I()}));function En(){"use forget";let e=(0,Dn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,On.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,On.jsx)(R,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var Dn,On,kn=e((()=>{Dn=L(),me(),On=I()}));function An(e){"use forget";let t=(0,Mn.c)(38),n=B(),r;t[0]!==n||t[1]!==e?(r=e?n.formatMessage(In.generatingApp,{title:e}):n.formatMessage(In.creatingInterface),t[0]=n,t[1]=e,t[2]=r):r=t[2];let i=r,a;t[3]===n?a=t[4]:(a=n.formatMessage(In.sketchingInterface),t[3]=n,t[4]=a);let o;t[5]===n?o=t[6]:(o=n.formatMessage(In.shapingLayout),t[5]=n,t[6]=o);let s;t[7]===n?s=t[8]:(s=n.formatMessage(In.arrangingPieces),t[7]=n,t[8]=s);let c;t[9]===n?c=t[10]:(c=n.formatMessage(In.polishingVisuals),t[9]=n,t[10]=c);let l;t[11]===n?l=t[12]:(l=n.formatMessage(In.tuningInputs),t[11]=n,t[12]=l);let u;t[13]===n?u=t[14]:(u=n.formatMessage(In.addingInteractivity),t[13]=n,t[14]=u);let d;t[15]===n?d=t[16]:(d=n.formatMessage(In.wiringControls),t[15]=n,t[16]=d);let f;t[17]===n?f=t[18]:(f=n.formatMessage(In.composingInteractions),t[17]=n,t[18]=f);let p;t[19]===n?p=t[20]:(p=n.formatMessage(In.calibratingPreview),t[19]=n,t[20]=p);let m;t[21]===n?m=t[22]:(m=n.formatMessage(In.refiningDetails),t[21]=n,t[22]=m);let h;t[23]!==i||t[24]!==a||t[25]!==m||t[26]!==o||t[27]!==s||t[28]!==c||t[29]!==l||t[30]!==u||t[31]!==d||t[32]!==f||t[33]!==p?(h=[i,a,o,s,c,l,u,d,f,p,m],t[23]=i,t[24]=a,t[25]=m,t[26]=o,t[27]=s,t[28]=c,t[29]=l,t[30]=u,t[31]=d,t[32]=f,t[33]=p,t[34]=h):h=t[34];let g=h,[_,v]=(0,Nn.useState)(0),y,b;return t[35]===g.length?(y=t[36],b=t[37]):(y=()=>{let e=window.setInterval(()=>{v(e=>Math.min(e+1,g.length-1))},Fn);return()=>{window.clearInterval(e)}},b=[g.length],t[35]=g.length,t[36]=y,t[37]=b),(0,Nn.useEffect)(y,b),g[_]??g[0]??``}function jn(e){"use forget";let t=(0,Mn.c)(2),{title:n}=e,r=An(n),i;return t[0]===r?i=t[1]:(i=(0,Pn.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,role:`status`,children:(0,Pn.jsx)(X,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:r})}),t[0]=r,t[1]=i),i}var Mn,Nn,Pn,Fn,In,Ln=e((()=>{Mn=L(),et(),Nn=n(F()),me(),Pn=I(),Fn=2800,In=he({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}})}));function Rn(e){let t=new Map,n=new Map,r=null,i=null;for(let a of e){let e=a.metadata?.content_references;if(Array.isArray(e)&&e.forEach((e,r)=>{let i=Bn({contentReference:e,messageId:a.id,refIndex:r});i!=null&&(t.set(i.appBlockId,i),i.libraryFileId!=null&&n.set(i.libraryFileId,i.appBlockId))}),a.author.role===ue.User){(a.metadata?.attachments??[]).forEach((e,r)=>{let i=zn({attachment:e,messageId:a.id,refIndex:r});i==null||i.libraryFileId==null||n.has(i.libraryFileId)||(t.set(i.appBlockId,i),n.set(i.libraryFileId,i.appBlockId))});let e=a.metadata?.focused_artifact;if(e!=null){let n=e.type===Zn?t.get(e.artifact_id)??null:null;r=n!=null&&n.messageId===e.source_message_id&&n.refIndex===e.source_ref_index&&(n.libraryFileId==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e.library_file_id}else{let e=a.metadata?.open_in_app_block_view,n=e==null?null:t.get(e.app_block_id)??null;r=e!=null&&n!=null&&n.messageId===e.message_id&&n.refIndex===e.ref_index&&(n.libraryFileId==null||e.library_file_id==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e?.library_file_id??null}}let o=N(a);if(o?.status!==`created`)continue;let s=n.get(o.libraryFileId),c=s==null?null:t.get(s)??null;if(c==null&&o.origin!=null){let e=o.origin.messageId,n=[...t.values()].filter(t=>t.messageId===e);c=n.length===1?n[0]:null}c==null&&s==null&&r!=null&&r.libraryFileId==null&&(i==null||i===o.libraryFileId)&&(c=r),c!=null&&(c.libraryFileId==null&&c.content!=null&&Jn(a)||(n.set(o.libraryFileId,c.appBlockId),t.set(c.appBlockId,{...c,content:null,currentContentFileId:o.newContentFileId,latestPatchMessageId:a.id,libraryFileId:o.libraryFileId,libraryFileVersionNumber:o.newVersionNumber})))}return t}function zn({attachment:e,messageId:t,refIndex:n}){return e.library_artifact_type!==Zn||e.library_file_id==null?null:{appBlockId:pt({messageId:t,refIndex:n}),content:null,currentContentFileId:e.id??null,entrypoint:`index.html`,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:e.library_file_id,libraryFileName:e.name,libraryFileVersionNumber:null,mimeType:e.mime_type??null,messageId:t,refIndex:n,styleMode:null,title:e.name.replace(/\.html$/i,``)}}function Bn({contentReference:e,messageId:t,refIndex:n}){if(typeof e!=`object`||!e||!(`type`in e)||!(`category`in e)||e.type!==Qn||e.category!==Zn||!(`data`in e))return null;let r=e.data;if(typeof r!=`object`||!r)return null;let i=Vn(r,`content`),a=Vn(r,`entrypoint`)??`index.html`,o=Kn(r,a),s=Un(o,`library_file_id`);return i==null&&s==null?null:{appBlockId:Vn(r,`app_block_id`)??pt({messageId:t,refIndex:n}),bundleVersion:Hn(r,`bundle_version`)??void 0,content:i,currentContentFileId:Un(o,`current_content_file_id`),entrypoint:a,iconSvg:Vn(r,`icon_svg`),language:qn(),latestPatchMessageId:null,libraryFileId:s,libraryFileName:Un(o,`library_file_name`),libraryFileVersionNumber:Gn(Wn(o,`library_file_version_number`)),mimeType:Un(o,`mime_type`),messageId:t,refIndex:n,styleMode:Mt(Vn(r,`style_mode`)),title:Vn(r,`display_name`)??Vn(r,`title`)}}function Vn(e,t){let n=null;return t===`app_block_id`&&`app_block_id`in e&&(n=e.app_block_id),t===`content`&&`content`in e&&(n=e.content),t===`current_content_file_id`&&`current_content_file_id`in e&&(n=e.current_content_file_id),t===`display_name`&&`display_name`in e&&(n=e.display_name),t===`entrypoint`&&`entrypoint`in e&&(n=e.entrypoint),t===`icon_svg`&&`icon_svg`in e&&(n=e.icon_svg),t===`library_file_id`&&`library_file_id`in e&&(n=e.library_file_id),t===`library_file_name`&&`library_file_name`in e&&(n=e.library_file_name),t===`mime_type`&&`mime_type`in e&&(n=e.mime_type),t===`path`&&`path`in e&&(n=e.path),t===`style_mode`&&`style_mode`in e&&(n=e.style_mode),t===`title`&&`title`in e&&(n=e.title),typeof n==`string`&&n.trim()!==``?n:null}function Hn(e,t){if(t===`bundle_version`&&`bundle_version`in e){let t=e.bundle_version;if(typeof t==`number`)return t}if(t===`library_file_version_number`&&`library_file_version_number`in e){let t=e.library_file_version_number;if(typeof t==`number`)return t}return null}function Un(e,t){return typeof e!=`object`||!e?null:Vn(e,t)}function Wn(e,t){return typeof e!=`object`||!e?null:Hn(e,t)}function Gn(...e){for(let t of e)if(t!=null)return t;return null}function Kn(e,t){if(!(`files`in e)||!Array.isArray(e.files))return null;let n=null;for(let r of e.files)if(!(typeof r!=`object`||!r)&&Vn(r,`library_file_id`)!=null&&(n??=r,Vn(r,`path`)===t))return r;return n}function qn(){return`html`}function Jn(e){let t=e.metadata?.shared_conversation_id;return typeof t==`string`&&t.trim()!==``}function Yn(e,t){return e.appBlockId===t.appBlockId&&e.bundleVersion===t.bundleVersion&&e.content===t.content&&e.currentContentFileId===t.currentContentFileId&&e.entrypoint===t.entrypoint&&e.iconSvg===t.iconSvg&&e.language===t.language&&e.latestPatchMessageId===t.latestPatchMessageId&&e.libraryFileId===t.libraryFileId&&e.libraryFileName===t.libraryFileName&&e.libraryFileVersionNumber===t.libraryFileVersionNumber&&e.mimeType===t.mimeType&&e.messageId===t.messageId&&e.refIndex===t.refIndex&&e.styleMode===t.styleMode&&e.title===t.title}function Xn(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e){let e=t.get(n);if(e==null||!Yn(r,e))return!1}return!0}var Zn,Qn,$n,er=e((()=>{m(),c(),oe(),K(),v(),mt(),Pt(),Zn=`app_block`,Qn=`client_defined_widget`,$n=o(e=>u(()=>Rn(A(e).flatMap(e=>e.messages)),{equals:Xn}))}));function tr({appBlockId:e,conversation:t}){return t==null?null:$n(t).get(e)??null}function nr(e){return e?.serverId$()??void 0}function rr({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:Oe(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function ir({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return Te({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:k(e)?`missing`:`failed`})}),()=>{a.abort()}}function ar({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??or({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function or({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var sr=e((()=>{s(),Fe(),er()})),cr=t({AppBlock:()=>dr,AppBlockPreviewLoadingState:()=>kr,AppBlockSandboxPreview:()=>Dr});function lr(e){let t=e.search(Wr),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function ur(e){let t=lr(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(Gr))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(Kr)!=null}function dr(e){"use forget";let t=(0,Z.c)(116),{additionalResourceDomains:n,appBlockId:r,authoritativeCode:i,authoritativeSource:a,code:o,collapseWhenSuperseded:s,currentContentFileId:c,displayMode:u,id:d,captureConsoleMessages:f,clientThreadId:p,iconSvg:m,isStreaming:h,isTurnStreaming:g,libraryFileId:_,libraryFileVersionNumber:v,messageId:y,onConsoleMessagesChange:b,onReadyChange:x,progressiveStreaming:C,ref:ee,refIndex:w,styleMode:te,title:ne,variant:re,widgetRefSeenAtMs:ie}=e,E=s===void 0||s,D=f!==void 0&&f,O=h!==void 0&&h,ae=g!==void 0&&g,oe=C!==void 0&&C,k=re===void 0?`inline`:re,A=S(),j;t[0]===A?j=t[1]:(j=()=>A!=null&&ve(A),t[0]=A,t[1]=j);let ce=T(j),M;t[2]!==p||t[3]!==A?(M=p==null?A:l(p),t[2]=p,t[3]=A,t[4]=M):M=t[4];let le=M,ue=y!=null&&w!=null?pt({messageId:y,refIndex:w}):void 0,N=r??ue??pt({messageId:y??d,refIndex:w??0}),P=T(()=>Pe({conversation:A??null,instanceId:N,messageId:y,refIndex:w}))??u,fe=T(()=>a!=null||P!=null?null:tr({appBlockId:N,conversation:A??null})),F=a??fe,I;t[5]===A?I=t[6]:(I=()=>nr(A??null),t[5]=A,t[6]=I);let pe=T(I),me=se(A?.id),L=pe??me,R;t[7]!==c||t[8]!==_||t[9]!==v||t[10]!==L||t[11]!==F?(R=rr({currentContentFileId:c,libraryFileId:_,libraryFileVersionNumber:v,serverThreadId:L,source:F}),t[7]=c,t[8]=_,t[9]=v,t[10]=L,t[11]=F,t[12]=R):R=t[12];let z=R,[B,he]=(0,Q.useState)(null),[V,ge]=(0,Q.useState)(0),ye;t[13]!==V||t[14]!==z.libraryContentKey?(ye=[z.libraryContentKey,V],t[13]=V,t[14]=z.libraryContentKey,t[15]=ye):ye=t[15];let be=ye.join(`\0`),xe,H;t[16]!==i||t[17]!==be||t[18]!==z.contentFileId||t[19]!==z.libraryFileId||t[20]!==P||t[21]!==L?(xe=()=>{if(!(i!=null||P===`collapsed`))return ir({contentFileId:z.contentFileId,libraryContentKey:be,libraryFileId:z.libraryFileId,onContentStateChange:he,serverThreadId:L})},H=[i,z.contentFileId,z.libraryFileId,be,P,L],t[16]=i,t[17]=be,t[18]=z.contentFileId,t[19]=z.libraryFileId,t[20]=P,t[21]=L,t[22]=xe,t[23]=H):(xe=t[22],H=t[23]),(0,Q.useEffect)(xe,H);let U=ar({appBlockId:N,contentFileId:z.contentFileId,currentContentFileId:c,libraryContent:B,libraryContentKey:be,libraryFileId:_,libraryFileVersionNumber:v,source:F}),we=B?.key===be?B:null,Ee;t[24]!==U?.libraryFileId||t[25]!==_?(Ee=()=>Ce(U?.libraryFileId??_),t[24]=U?.libraryFileId,t[25]=_,t[26]=Ee):Ee=t[26];let De=T(Ee),Oe=U?.libraryFileVersionNumber??v,ke=De!=null&&(Oe==null||De.versionNumber>=Oe)?De.code:void 0,Ae=ke??i??U?.content??o??null,je=U?.iconSvg??m??null,Me=U?.libraryFileId??_,Ne=Me==null&&i==null&&ke==null&&c==null&&F?.currentContentFileId==null&&F?.latestPatchMessageId==null,W;t[27]!==Ne||t[28]!==o||t[29]!==y||t[30]!==Ae||t[31]!==w||t[32]!==F?(W=Ne?F==null?y!=null&&w!=null&&o!=null&&Ae===o?{messageId:y,refIndex:w}:null:F.messageId.length>0&&F.content!=null&&Ae===F.content?{messageId:F.messageId,refIndex:F.refIndex}:null:null,t[27]=Ne,t[28]=o,t[29]=y,t[30]=Ae,t[31]=w,t[32]=F,t[33]=W):W=t[33];let Fe=W,G=k===`artifact`,Ie=U?.styleMode??te??(G&&oe?`open`:void 0),Le;t[34]!==Me||t[35]!==Ie?(Le=Nt({explicitStyleMode:Ie,libraryFileId:Me}),t[34]=Me,t[35]=Ie,t[36]=Le):Le=t[36];let K=Le,q=U?.title??ne,Re;t[37]===A?Re=t[38]:(Re=()=>A!=null&&de(A)?`work`:`chat`,t[37]=A,t[38]=Re);let ze=T(Re),Be;t[39]===Symbol.for(`react.memo_cache_sentinel`)?(Be=dt(),t[39]=Be):Be=t[39];let Ve=Be,He=oe,Ue=G&&K===`open`,We=P===`collapsed`||P==null&&E&&U?.latestPatchMessageId!=null&&U.latestPatchMessageId!==y,Ge=o!=null||c!=null,Ke;t[40]!==p||t[41]!==o||t[42]!==A?.id||t[43]!==c||t[44]!==N||t[45]!==v||t[46]!==y||t[47]!==Me||t[48]!==K||t[49]!==q||t[50]!==w||t[51]!==L||t[52]!==F?.messageId?(Ke=async e=>{let t=o;if(t==null&&c!=null)try{t=await Te({abortSignal:new AbortController().signal,fileId:c,serverThreadId:L})}catch{return}t!=null&&Se({appBlockId:N,conversationId:A?.id??p??null,isOriginalVersion:!0,versionNumber:v??void 0},`app-block:${N}:original`,{code:t,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:N,libraryFileId:Me,messageId:F?.messageId??y,refIndex:w},styleMode:K,title:q})},t[40]=p,t[41]=o,t[42]=A?.id,t[43]=c,t[44]=N,t[45]=v,t[46]=y,t[47]=Me,t[48]=K,t[49]=q,t[50]=w,t[51]=L,t[52]=F?.messageId,t[53]=Ke):Ke=t[53],A?.id,F?.messageId;let qe=Ke;if(O&&!He){let e;return t[54]===q?e=t[55]:(e=(0,$.jsx)(jn,{title:q}),t[54]=q,t[55]=e),e}let Je=ce&&o!=null;if(we?.status===`missing`&&!Je)return null;if(We){let e=Ge?qe:void 0,n;return t[56]!==q||t[57]!==e?(n=(0,$.jsx)(Tr,{onView:e,title:q}),t[56]=q,t[57]=e,t[58]=n):n=t[58],n}let Ye=Ae??(He&&O?``:null);if(Ye==null){if(U?.latestPatchMessageId!=null){let e=A?.id??p,n=we?.status===`failed`,r;t[59]===ge?r=t[60]:(r=()=>ge(fr),t[59]=ge,t[60]=r);let i;return t[61]!==N||t[62]!==G||t[63]!==je||t[64]!==q||t[65]!==e||t[66]!==n||t[67]!==r?(i=(0,$.jsx)(gr,{appBlockId:N,conversationId:e,hasFailed:n,iconSvg:je,onRetry:r,showHeader:G,title:q}),t[61]=N,t[62]=G,t[63]=je,t[64]=q,t[65]=e,t[66]=n,t[67]=r,t[68]=i):i=t[68],i}let e;return t[69]===q?e=t[70]:(e=(0,$.jsx)(jn,{title:q}),t[69]=q,t[70]=e),e}let Xe;t[71]!==p||t[72]!==ze||t[73]!==O||t[74]!==ae||t[75]!==y||t[76]!==q||t[77]!==w?(Xe=!O&&!ae&&p!=null&&y!=null&&w!=null&&lt()?{reference:{clientThreadId:p,messageId:y,referenceIndex:w},target:{kind:`app_block`,metadata:{...q==null?{}:{title:q},tab:ze}}}:void 0,t[71]=p,t[72]=ze,t[73]=O,t[74]=ae,t[75]=y,t[76]=q,t[77]=w,t[78]=Xe):Xe=t[78];let J=Xe,Ze=A?.id??p,Y=F?.messageId??y,Qe;t[79]!==N||t[80]!==Me||t[81]!==w||t[82]!==Y?(Qe={appBlockId:N,libraryFileId:Me,messageId:Y,refIndex:w},t[79]=N,t[80]=Me,t[81]=w,t[82]=Y,t[83]=Qe):Qe=t[83];let $e=Ue&&Ve&&!O,et=A?.id??p,X;t[84]===Fe?X=t[85]:(X=Fe==null?void 0:{contentReferenceIndex:Fe.refIndex,messageId:Fe.messageId,widgetName:_e.AppBlock},t[84]=Fe,t[85]=X);let tt;t[86]!==n||t[87]!==D||t[88]!==N||t[89]!==J||t[90]!==d||t[91]!==O||t[92]!==b||t[93]!==x||t[94]!==je||t[95]!==K||t[96]!==q||t[97]!==ee||t[98]!==Ye||t[99]!==le||t[100]!==He||t[101]!==Ue||t[102]!==$e||t[103]!==et||t[104]!==X||t[105]!==k||t[106]!==ie?(tt=(0,$.jsx)(pr,{additionalResourceDomains:n,appBlockId:N,canOpen:$e,captureConsoleMessages:D,clientThreadId:et,code:Ye,feedback:J,iconSvg:je,id:d,isStreaming:O,onConsoleMessagesChange:b,onReadyChange:x,progressiveStreaming:He,ref:ee,showArtifactCard:Ue,shareConversation:le,shareTarget:X,styleMode:K,title:q,variant:k,widgetRefSeenAtMs:ie}),t[86]=n,t[87]=D,t[88]=N,t[89]=J,t[90]=d,t[91]=O,t[92]=b,t[93]=x,t[94]=je,t[95]=K,t[96]=q,t[97]=ee,t[98]=Ye,t[99]=le,t[100]=He,t[101]=Ue,t[102]=$e,t[103]=et,t[104]=X,t[105]=k,t[106]=ie,t[107]=tt):tt=t[107];let nt;return t[108]!==n||t[109]!==K||t[110]!==q||t[111]!==Ye||t[112]!==Ze||t[113]!==Qe||t[114]!==tt?(nt=(0,$.jsx)(yn,{additionalResourceDomains:n,code:Ye,conversationId:Ze,styleMode:K,source:Qe,title:q,children:tt}),t[108]=n,t[109]=K,t[110]=q,t[111]=Ye,t[112]=Ze,t[113]=Qe,t[114]=tt,t[115]=nt):nt=t[115],nt}function fr(e){return e+1}function pr(e){"use forget";let t=(0,Z.c)(66),{additionalResourceDomains:n,appBlockId:r,canOpen:i,captureConsoleMessages:a,clientThreadId:o,code:s,feedback:c,iconSvg:l,id:u,isStreaming:d,onConsoleMessagesChange:f,onReadyChange:p,progressiveStreaming:m,ref:h,shareConversation:g,shareTarget:_,showArtifactCard:v,styleMode:y,title:b,variant:x,widgetRefSeenAtMs:S}=e,{isExpanded:C,isViewingHistoricalVersion:ee,openExpandedView:w,setSharedPreview:te,sharedPreview:T,triggerRef:re}=pn(),ie=(0,Q.useContext)(Ee),E;t[0]===n?E=t[1]:(E=n??[],t[0]=n,t[1]=E);let D;t[2]!==s||t[3]!==u||t[4]!==y||t[5]!==E?(D=[u,y,s,...E],t[2]=s,t[3]=u,t[4]=y,t[5]=E,t[6]=D):D=t[6];let O=D.join(`\0`),[ae,oe]=(0,Q.useState)(null),k=!d&&ae===O,A;t[7]===w?A=t[8]:(A=()=>{je(),w()},t[7]=w,t[8]=A);let se=A,j;t[9]!==p||t[10]!==O?(j=(e,t)=>{oe(e?O:null),p?.(e,t)},t[9]=p,t[10]=O,t[11]=j):j=t[11];let ce=j,M;t[12]!==n||t[13]!==a||t[14]!==o||t[15]!==s||t[16]!==ce||t[17]!==u||t[18]!==d||t[19]!==f||t[20]!==m||t[21]!==h||t[22]!==y||t[23]!==x||t[24]!==S?(M=(0,$.jsx)(Dr,{additionalResourceDomains:n,code:s,id:u,isStreaming:d,captureConsoleMessages:a,clientThreadId:o,onConsoleMessagesChange:f,onReadyChange:ce,presentationSurface:`inline`,progressiveStreaming:m,ref:h,styleMode:y,variant:x,widgetRefSeenAtMs:S}),t[12]=n,t[13]=a,t[14]=o,t[15]=s,t[16]=ce,t[17]=u,t[18]=d,t[19]=f,t[20]=m,t[21]=h,t[22]=y,t[23]=x,t[24]=S,t[25]=M):M=t[25];let ue;t[26]!==ie||t[27]!==M?(ue={element:M,sandboxPolicy:ie},t[26]=ie,t[27]=M,t[28]=ue):ue=t[28];let N=ue,de;t[29]===N?de=t[30]:(de=()=>N,t[29]=N,t[30]=de);let P=le(de),fe;t[31]!==r||t[32]!==o||t[33]!==P||t[34]!==te?(fe=e=>{if(e==null)return;let{preview:t,sourceToken:n}=Me({appBlockId:r,content:P(),conversationId:o??null,inlineContainer:e});return te(t),()=>{let e=H();we(t,n,e?.sharedPreview===t)}},t[31]=r,t[32]=o,t[33]=P,t[34]=te,t[35]=fe):fe=t[35];let F=fe,I,pe;t[36]!==N||t[37]!==T?(pe=()=>{T!=null&&Ne(T,N)},I=[N,T],t[36]=N,t[37]=T,t[38]=I,t[39]=pe):(I=t[38],pe=t[39]),ne(pe,I);let me=ee?se:void 0,L;t[40]!==l||t[41]!==me||t[42]!==b||t[43]!==re?(L=(0,$.jsx)(yr,{iconSvg:l,onOpen:me,openButtonRef:re,title:b}),t[40]=l,t[41]=me,t[42]=b,t[43]=re,t[44]=L):L=t[44];let R=C?L:null,z;t[45]===F?z=t[46]:(z=(0,$.jsx)(`div`,{ref:F,className:`w-full`}),t[45]=F,t[46]=z);let B;t[47]!==i||t[48]!==c||t[49]!==se||t[50]!==l||t[51]!==k||t[52]!==d||t[53]!==g||t[54]!==_||t[55]!==v||t[56]!==z||t[57]!==b||t[58]!==re?(B=(0,$.jsx)(hr,{canOpen:i,expandButtonRef:re,feedback:c,iconSvg:l,isShareReady:k,shareConversation:g,shareTarget:_,isStreaming:d,showArtifactCard:v,title:b,onOpen:se,children:z}),t[47]=i,t[48]=c,t[49]=se,t[50]=l,t[51]=k,t[52]=d,t[53]=g,t[54]=_,t[55]=v,t[56]=z,t[57]=b,t[58]=re,t[59]=B):B=t[59];let he;t[60]!==C||t[61]!==B?(he=(0,$.jsx)(`div`,{hidden:C,children:B}),t[60]=C,t[61]=B,t[62]=he):he=t[62];let V;return t[63]!==R||t[64]!==he?(V=(0,$.jsxs)($.Fragment,{children:[R,he]}),t[63]=R,t[64]=he,t[65]=V):V=t[65],V}function mr(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:o,titleClassName:s}=e,c;t[0]===r?c=t[1]:(c=D(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=c);let l=s??`truncate text-base font-semibold`,u;t[2]===l?u=t[3]:(u=D(`text-token-text-primary`,l),t[2]=l,t[3]=u);let d=o??i,f;t[4]!==u||t[5]!==d?(f=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:u,children:d})}),t[4]=u,t[5]=d,t[6]=f):f=t[6];let p;t[7]!==a||t[8]!==f?(p=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,f]}),t[7]=a,t[8]=f,t[9]=p):p=t[9];let m;return t[10]!==n||t[11]!==c||t[12]!==p?(m=(0,$.jsxs)(`div`,{className:c,children:[p,n]}),t[10]=n,t[11]=c,t[12]=p,t[13]=m):m=t[13],m}function hr(e){"use forget";let t=(0,Z.c)(20),{canOpen:n,children:r,expandButtonRef:i,feedback:o,iconSvg:s,isShareReady:c,isStreaming:l,onOpen:u,shareConversation:d,shareTarget:f,showArtifactCard:p,title:m}=e,h=B(),g;t[0]===h?g=t[1]:(g=h.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=h,t[1]=g);let _=g,v;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==_||t[6]!==s||t[7]!==c||t[8]!==l||t[9]!==u||t[10]!==d||t[11]!==f||t[12]!==p||t[13]!==m?(v=p?(0,$.jsxs)(`div`,{className:D(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,l&&`cursor-wait`),"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)(mr,{action:(0,$.jsx)(qr,{canOpen:n,conversation:d,expandButtonRef:i,isReady:c,onOpen:u,target:f}),className:`min-h-13 px-4 py-2`,fallbackTitle:_,leading:l?(0,$.jsx)(a,{className:`icon-md text-token-text-primary shrink-0`}):(0,$.jsx)(xr,{iconSvg:s}),title:m}),(0,$.jsx)(`div`,{children:r})]}):r,t[2]=n,t[3]=r,t[4]=i,t[5]=_,t[6]=s,t[7]=c,t[8]=l,t[9]=u,t[10]=d,t[11]=f,t[12]=p,t[13]=m,t[14]=v):v=t[14];let y;t[15]===o?y=t[16]:(y=o==null?null:(0,$.jsx)(_r,{...o}),t[15]=o,t[16]=y);let b;return t[17]!==v||t[18]!==y?(b=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[v,y]}),t[17]=v,t[18]=y,t[19]=b):b=t[19],b}function gr(e){"use forget";let t=(0,Z.c)(17),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:o,showHeader:s,title:c}=e,l=T(H),u=B(),d;t[0]===u?d=t[1]:(d=u.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=u,t[1]=d);let f=d;if(V(l,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==c?(e=(0,$.jsx)(yr,{iconSvg:a,title:c}),t[2]=a,t[3]=c,t[4]=e):e=t[4],e}let p;t[5]!==f||t[6]!==a||t[7]!==s||t[8]!==c?(p=s?(0,$.jsx)(mr,{className:`mb-2`,fallbackTitle:f,leading:(0,$.jsx)(xr,{iconSvg:a}),title:c}):null,t[5]=f,t[6]=a,t[7]=s,t[8]=c,t[9]=p):p=t[9];let m;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(m={minHeight:jr},t[10]=m):m=t[10];let h;t[11]!==i||t[12]!==o?(h=(0,$.jsx)(`div`,{className:`relative w-full`,style:m,children:i?(0,$.jsx)(Ar,{onRetry:o}):(0,$.jsx)(kr,{})}),t[11]=i,t[12]=o,t[13]=h):h=t[13];let g;return t[14]!==p||t[15]!==h?(g=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[p,h]}),t[14]=p,t[15]=h,t[16]=g):g=t[16],g}function _r(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(T(vr))return null;let o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(nt,{}),t[0]=o):o=t[0];let s;return t[1]!==i||t[2]!==n||t[3]!==r?(s=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)($e,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:o})}),t[1]=i,t[2]=n,t[3]=r,t[4]=s):s=t[4],s}function vr(){return Y()}function yr(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=B(),s,c,l,u,f;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),f=`not-prose relative clear-both my-4 w-full max-w-full`,u=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=mr,l=r==null?void 0:(0,$.jsx)(d,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=l,t[7]=u,t[8]=f):(s=t[4],c=t[5],l=t[6],u=t[7],f=t[8]);let p;t[9]===n?p=t[10]:(p=(0,$.jsx)(br,{iconSvg:n}),t[9]=n,t[10]=p);let m;t[11]!==s||t[12]!==c||t[13]!==l||t[14]!==p||t[15]!==a?(m=(0,$.jsx)(s,{action:l,className:`w-full`,fallbackTitle:c,leading:p,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=l,t[14]=p,t[15]=a,t[16]=m):m=t[16];let h;t[17]!==u||t[18]!==m?(h=(0,$.jsx)(`div`,{className:u,children:m}),t[17]=u,t[18]=m,t[19]=h):h=t[19];let g;return t[20]!==f||t[21]!==h?(g=(0,$.jsx)(`div`,{className:f,children:h}),t[20]=f,t[21]=h,t[22]=g):g=t[22],g}function br(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(xr,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function xr(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=Sr(r),t[0]=r,t[1]=a);let o=a,s;return t[2]!==i||t[3]!==o?(s=o==null?(0,$.jsx)(Ue,{"aria-hidden":`true`,className:D(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:D(`icon-md shrink-0`,i),children:(0,$.jsx)(xe,{svgString:o,className:`h-full w-full`})}),t[2]=i,t[3]=o,t[4]=s):s=t[4],s}function Sr(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>zr||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Br)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Hr.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!Cr(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function Cr(e){let t=e.replace(Vr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Vr)){let e=t[1],n=t[2];if(!Ur.has(e)||!wr(e,n))return!1}return!0}function wr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function Tr(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=B(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(R,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function Er(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:a}=e,o=B(),s;t[0]===o?s=t[1]:(s=o.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=o,t[1]=s);let c=s,l;t[2]===r?l=t[3]:(l=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=l);let u;t[4]!==c||t[5]!==a||t[6]!==l?(u=(0,$.jsx)(d,{ref:a,type:`button`,icon:ze,color:`ghost`,size:`medium`,label:c,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:l}),t[4]=c,t[5]=a,t[6]=l,t[7]=u):u=t[7];let f;return t[8]!==n||t[9]!==c||t[10]!==u?(f=(0,$.jsx)(i,{label:c,className:n,children:u}),t[8]=n,t[9]=c,t[10]=u,t[11]=f):f=t[11],f}function Dr(e){"use forget";let t=(0,Z.c)(141),{additionalResourceDomains:n,clientThreadId:r,code:i,id:a,captureConsoleMessages:o,isStreaming:s,onConsoleMessagesChange:c,onReadyChange:l,presentationSurface:u,progressiveStreaming:d,ref:p,styleMode:m,surface:h,variant:_,widgetRefSeenAtMs:v}=e,y=s!==void 0&&s,b=d!==void 0&&d,x=m===void 0?`default`:m,S=h===void 0?`inline`:h,C=_===void 0?`inline`:_,ee=B(),w=(0,Q.useRef)(null),te=(0,Q.useRef)(!1),ne=(0,Q.useRef)(!1),re=(0,Q.useRef)(null),ie=(0,Q.useRef)(null),E=(0,Q.useRef)(null),ae=(0,Q.useRef)(null),oe=(0,Q.useRef)(null),k=(0,Q.useRef)(null),A=(0,Q.useRef)(0),se=(0,Q.useRef)(null),j=(0,Q.useRef)(null),ce;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(ce=[],t[0]=ce):ce=t[0];let M=(0,Q.useRef)(ce),ue=g(),N=T(f),{allowDependencyNetworkRequestsWithoutCanvasAccess:de}=(0,Q.useContext)(Ee),P=qe()||de,fe=Ye(r)&&!de,F=ue?`dark`:`light`,I=ee.locale,pe;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(pe={status:`streaming`},t[1]=pe):pe=t[1];let[me,L]=(0,Q.useState)(pe),z=me.status===`finalized`&&me.html!==i,he=b&&C===`artifact`&&!y,V=b&&S===`inline`&&me.status!==`static`&&!he&&!z,ge=V&&y&&C===`artifact`&&!ur(i),_e=ge?0:Mr,ve=P?`execution-enabled`:`execution-disabled`,ye=fe?`network-enabled`:`network-disabled`,be=V?`progressive-app-block-stream`:i,xe;t[2]===n?xe=t[3]:(xe=n??[],t[2]=n,t[3]=xe);let Se;t[4]!==N||t[5]!==I||t[6]!==x||t[7]!==S||t[8]!==be||t[9]!==xe||t[10]!==ve||t[11]!==ye||t[12]!==F?(Se=[F,N,S,x,I,ve,ye,be,...xe],t[4]=N,t[5]=I,t[6]=x,t[7]=S,t[8]=be,t[9]=xe,t[10]=ve,t[11]=ye,t[12]=F,t[13]=Se):Se=t[13];let H=Se.join(`\0`),Ce;t[14]===n?Ce=t[15]:(Ce=tn(n),t[14]=n,t[15]=Ce);let U=Ce,we=fe?`deps_only`:`disabled`,Te=S===`inline`?C:void 0,De=V?`progressive`:`static`,Oe;t[16]!==S||t[17]!==we||t[18]!==Te||t[19]!==De?(Oe={networkPolicy:we,surface:S,variant:Te,renderMode:De},t[16]=S,t[17]=we,t[18]=Te,t[19]=De,t[20]=Oe):Oe=t[20];let ke=Oe,[Ae,je]=(0,Q.useState)(0),[Me,Ne]=(0,Q.useState)(null),Pe=Me?.signature===H?Me.status:null,W=Pe===`ready`,Fe=W||Pe===`failed_after_ready`,G=Pe===`failed`,Ie=u??S,Le=V&&Ie===`inline`&&y&&!G,K;t[21]!==i||t[22]!==ke||t[23]!==v?(K={content:i,metricTags:ke,widgetRefSeenAtMs:v},t[21]=i,t[22]=ke,t[23]=v,t[24]=K):K=t[24];let{cancelFirstPaintFrame:q,startRunMetrics:Re}=xt(K),ze,Be;t[25]!==W||t[26]!==l?(ze=()=>{l?.(W)},Be=[W,l],t[25]=W,t[26]=l,t[27]=ze,t[28]=Be):(ze=t[27],Be=t[28]),(0,Q.useEffect)(ze,Be);let Ve,He;t[29]!==W||t[30]!==u?(Ve=()=>{!W||u==null||w.current?.updateAppBlockSurface?.(u)},He=[W,u],t[29]=W,t[30]=u,t[31]=Ve,t[32]=He):(Ve=t[31],He=t[32]),(0,Q.useEffect)(Ve,He);let Ue,We;t[33]===Symbol.for(`react.memo_cache_sentinel`)?(Ue=()=>({clearCapturedConsoleMessages:()=>{M.current=[]},captureScreenshotDataUrl:async()=>(await w.current?.screenshot())?.imageBase64??null,focus:()=>{w.current?.focus()}}),We=[],t[33]=Ue,t[34]=We):(Ue=t[33],We=t[34]),(0,Q.useImperativeHandle)(p,Ue,We);let Je;t[35]===Symbol.for(`react.memo_cache_sentinel`)?(Je=()=>{se.current!=null&&(window.clearTimeout(se.current),se.current=null)},t[35]=Je):Je=t[35];let J=le(Je),Ze;t[36]===Symbol.for(`react.memo_cache_sentinel`)?(Ze=()=>{j.current!=null&&(window.clearTimeout(j.current),j.current=null)},t[36]=Ze):Ze=t[36];let Y=le(Ze),Qe;t[37]!==W||t[38]!==l||t[39]!==H||t[40]!==V?(Qe=()=>{if(!V||!W)return;let e=ae.current,t=w.current;if(e==null||t?.updateAppBlockStream==null||ne.current)return;let n=A.current;ae.current=null,ie.current=gt(),E.current=e.html,e.isFinal&&(ne.current=!0);let r=()=>A.current===n?t.updateAppBlockStream?.(e)??Promise.resolve():Promise.resolve(),i=k.current,a=i==null?r():i.then(r);k.current=a,a.then(()=>{k.current===a&&(k.current=null),A.current===n&&(ur(e.html)&&oe.current?.markFirstPaint(),e.isFinal&&(oe.current?.reportPayloadSize(e.html),L({status:`finalized`,html:e.html})))},e=>{k.current===a&&(k.current=null),A.current===n&&(e instanceof DOMException&&e.name===`AbortError`||(oe.current?.reportFailure(`stream_update`,vt(e)),Ne({signature:H,status:`failed`}),l?.(!1,`failure`)))})},t[37]=W,t[38]=l,t[39]=H,t[40]=V,t[41]=Qe):Qe=t[41];let $e=le(Qe),et;t[42]!==N||t[43]!==o||t[44]!==J||t[45]!==Y||t[46]!==i||t[47]!==P||t[48]!==fe||t[49]!==z||t[50]!==y||t[51]!==I||t[52]!==c||t[53]!==l||t[54]!==u||t[55]!==H||t[56]!==me.status||t[57]!==he||t[58]!==V||t[59]!==Re||t[60]!==x||t[61]!==S||t[62]!==F?(et=()=>{if(!P)return;(z||he&&me.status!==`static`)&&L({status:`static`});let e=V&&w.current?.updateAppBlockStream!=null;if(V&&!e){y||L({status:`static`});return}te.current=!0,ne.current=!1,re.current=null,ie.current=null,E.current=null,ae.current=null,oe.current=null,k.current=null,Y(),A.current+=1;let t=A.current;J(),Ne(null);let{expectReadySignal:n,html:r}=nn(i,F,I,N,S,{loadTailwind:fe,progressiveStreaming:e,syncPresentationSurface:u!=null,styleMode:x}),a=!1,s=!1,d=!1,f=!1,p=!1,m=()=>A.current===t,h=Re(m,{deferFirstPaint:e,deferPayloadSize:e});e&&(oe.current=h);let g=e=>{!o||c==null||!m()||(M.current=e,!f&&(f=!0,O.postTask(()=>{f=!1,m()&&c(M.current)},{priority:`background`})))},_=e=>{!m()||a||d||(a=!0,J(),h.markReady(e),!p&&(p=!0,O.postTask(()=>{p=!1,!(!m()||d)&&(s=!0,Ne({signature:H,status:`ready`}))},{priority:`background`})))},v=(e,t)=>{!m()||d||(d=!0,J(),Ne({signature:H,status:s?`failed_after_ready`:`failed`}),h.reportFailure(e,t),O.postTask(()=>{m()&&l?.(!1,`failure`)},{priority:`background`}))};M.current=[],g([]),se.current=window.setTimeout(()=>{v(`sandbox_eval`,`ready_timeout`)},Pr),(async()=>{let e=w.current?.evalAsync({code:r,expectReadySignal:n,language:`html`});if(e==null){v(`sandbox_eval`,`missing_generator`);return}for(;;){let t=await e.next();if(t.done){m()&&!a&&v(`sandbox_eval`,`generator_completed_without_ready`);break}m()&&(g([...M.current,t.value]),t.value.type===Ge.ENVIRONMENT_STATUS&&t.value.status===Ke.RUNNING_CODE&&_(`running_code`),t.value.type===Ge.RUN_COMPLETE&&(t.value.wasFatalError?v(`runtime`,`fatal_runtime_error`):(_(`run_complete`),h.reportSuccess(`run_complete`))),await O.yield())}})().catch(e=>{m()&&(e instanceof DOMException&&e.name===`AbortError`||v(`sandbox_eval`,vt(e)))})},t[42]=N,t[43]=o,t[44]=J,t[45]=Y,t[46]=i,t[47]=P,t[48]=fe,t[49]=z,t[50]=y,t[51]=I,t[52]=c,t[53]=l,t[54]=u,t[55]=H,t[56]=me.status,t[57]=he,t[58]=V,t[59]=Re,t[60]=x,t[61]=S,t[62]=F,t[63]=et):et=t[63];let X=le(et),tt;t[64]!==J||t[65]!==Y?(tt=()=>{A.current+=1,te.current=!1,ne.current=!1,re.current=null,E.current=null,ae.current=null,oe.current=null,k.current=null,J(),Y(),Ne(null),je(Or)},t[64]=J,t[65]=Y,t[66]=tt):tt=t[66];let nt=le(tt),rt;t[67]===Ie?rt=t[68]:(rt=Ie===`inline`?{margin:-4,width:`calc(100% + ${Nr*2}px)`}:void 0,t[67]=Ie,t[68]=rt);let it=rt,at;t[69]!==q||t[70]!==J||t[71]!==Y||t[72]!==X?(at=()=>{X();let e=w.current;return()=>{A.current+=1,oe.current=null,k.current=null,J(),Y(),q(),e?.stop()}},t[69]=q,t[70]=J,t[71]=Y,t[72]=X,t[73]=at):at=t[73];let ot;t[74]!==q||t[75]!==J||t[76]!==Y||t[77]!==P||t[78]!==H||t[79]!==X||t[80]!==Ae?(ot=[q,J,Y,P,H,X,Ae],t[74]=q,t[75]=J,t[76]=Y,t[77]=P,t[78]=H,t[79]=X,t[80]=Ae,t[81]=ot):ot=t[81],(0,Q.useEffect)(at,ot);let st,ct;t[82]!==y||t[83]!==X||t[84]!==V?(st=()=>{!V||y||te.current||w.current?.updateAppBlockStream!=null||X()},ct=[y,X,V],t[82]=y,t[83]=X,t[84]=V,t[85]=st,t[86]=ct):(st=t[85],ct=t[86]),(0,Q.useEffect)(st,ct);let lt,ut;if(t[87]!==Y||t[88]!==i||t[89]!==$e||t[90]!==G||t[91]!==W||t[92]!==y||t[93]!==V||t[94]!==C?(lt=()=>{if(!V||!W||G||ne.current||w.current?.updateAppBlockStream==null)return;let e=y?lr(i):i;if(y&&(ae.current?.html??E.current)===e)return;if(ae.current={html:e,isFinal:!y},!y){Y(),$e();return}let t=ie.current;if(t==null&&C===`artifact`&&(re.current??=gt(),t=re.current),t==null){$e();return}let n=C===`artifact`?Ir:Fr,r=gt()-t;if(r>=n){$e();return}return j.current=window.setTimeout(()=>{j.current=null,$e()},n-r),Y},ut=[Y,i,$e,G,W,y,V,C],t[87]=Y,t[88]=i,t[89]=$e,t[90]=G,t[91]=W,t[92]=y,t[93]=V,t[94]=C,t[95]=lt,t[96]=ut):(lt=t[95],ut=t[96]),(0,Q.useEffect)(lt,ut),!P){let e;return t[97]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(En,{}),t[97]=e):e=t[97],e}let dt=Ie===`inline`&&(ge?`h-0 min-h-0 overflow-hidden`:`min-h-[120px] overflow-visible`),ft=Ie===`stage`&&`h-full min-h-0`,pt;t[98]!==dt||t[99]!==ft?(pt=D(`flex w-full`,dt,ft),t[98]=dt,t[99]=ft,t[100]=pt):pt=t[100];let mt=Ie===`inline`?`flex-none`:`w-full`,ht=Le&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,_t;t[101]!==mt||t[102]!==ht?(_t=D(`relative min-w-0`,mt,ht),t[101]=mt,t[102]=ht,t[103]=_t):_t=t[103];let yt=`${Ae}:${fe?`network-enabled`:`network-disabled`}`,bt;t[104]===ee?bt=t[105]:(bt=ee.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[104]=ee,t[105]=bt);let St=fe?`deps-only`:`none`,Ct=fe?Lr:Rr,wt=Fe?0:-1,Tt=Ie===`inline`&&x===`open`,Et=Ie!==`stage`,Dt=V?_e:jr,Ot;t[106]!==a||t[107]!==X||t[108]!==U||t[109]!==yt||t[110]!==bt||t[111]!==St||t[112]!==Ct||t[113]!==wt||t[114]!==Tt||t[115]!==Et||t[116]!==Dt?(Ot=(0,$.jsx)(Xe,{id:a,title:bt,visuallyHidden:!1,networkPolicy:St,additionalResourceDomains:U,sandboxPermissions:Ct,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:wt,onRetryCodeRun:X,transparentBackground:Tt,useIntrinsicHeight:Et,intrinsicHeightFallback:Dt,ref:w},yt),t[106]=a,t[107]=X,t[108]=U,t[109]=yt,t[110]=bt,t[111]=St,t[112]=Ct,t[113]=wt,t[114]=Tt,t[115]=Et,t[116]=Dt,t[117]=Ot):Ot=t[117];let kt;t[118]===Le?kt=t[119]:(kt=Le?(0,$.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 z-10 cursor-wait`}):null,t[118]=Le,t[119]=kt);let At;t[120]!==G||t[121]!==Fe||t[122]!==V?(At=!Fe&&!G&&!V?(0,$.jsx)(kr,{}):null,t[120]=G,t[121]=Fe,t[122]=V,t[123]=At):At=t[123];let jt;t[124]!==G||t[125]!==nt?(jt=G?(0,$.jsx)(Ar,{onRetry:nt}):null,t[124]=G,t[125]=nt,t[126]=jt):jt=t[126];let Mt;t[127]!==it||t[128]!==Le||t[129]!==_t||t[130]!==Ot||t[131]!==kt||t[132]!==At||t[133]!==jt?(Mt=(0,$.jsxs)(`div`,{"aria-busy":Le,className:_t,style:it,children:[Ot,kt,At,jt]}),t[127]=it,t[128]=Le,t[129]=_t,t[130]=Ot,t[131]=kt,t[132]=At,t[133]=jt,t[134]=Mt):Mt=t[134];let Nt;t[135]===Le?Nt=t[136]:(Nt=Le?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[135]=Le,t[136]=Nt);let Pt;return t[137]!==pt||t[138]!==Mt||t[139]!==Nt?(Pt=(0,$.jsxs)(`div`,{className:pt,children:[Mt,Nt]}),t[137]=pt,t[138]=Mt,t[139]=Nt,t[140]=Pt):Pt=t[140],Pt}function Or(e){return e+1}function kr(){"use forget";let e=(0,Z.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsx)(a,{className:`icon-sm text-token-text-tertiary`}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,role:`status`,children:[t,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})})]}),e[1]=n):n=e[1],n}function Ar(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(R,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(d,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr=e((()=>{Z=L(),h(),Ze(),q(),tt(),ae(),p(),J(),re(),He(),Be(),Ve(),Ae(),Je(),c(),ge(),rt(),ye(),j(),r(),w(),De(),ce(),fe(),M(),ee(),Qe(),Fe(),We(),ie(),Q=n(F()),me(),fn(),jt(),ft(),Tn(),be(),kn(),gn(),Ln(),mt(),Le(),U(),Pt(),sr(),$=I(),jr=432,Mr=120,Nr=4,Pr=15e3,Fr=100,Ir=350,Lr=`allow-scripts allow-same-origin allow-forms`,Rr=`allow-scripts allow-same-origin`,zr=12e3,Br=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Vr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Hr=new Set([`svg`,`path`]),Ur=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),Wr=/<script(?:\s|>)/i,Gr=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,Kr=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,qr=e=>{"use forget";let t=(0,Z.c)(13),{canOpen:n,conversation:r,expandButtonRef:a,isReady:o,onOpen:s,target:c}=e,l;t[0]!==n||t[1]!==a||t[2]!==s?(l=n&&s!=null?(0,$.jsx)(Er,{ref:a,className:`shrink-0`,onClick:s}):null,t[0]=n,t[1]=a,t[2]=s,t[3]=l):l=t[3];let u=l;if(r==null)return u;let f;t[4]===c?f=t[5]:(f=c??{contentReferenceIndex:-1,messageId:``},t[4]=c,t[5]=f);let p=f,m=o&&c!=null,h;t[6]===u?h=t[7]:(h=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(i,{label:n,children:(0,$.jsx)(d,{type:`button`,icon:Re,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),u]}):u},t[6]=u,t[7]=h);let g;return t[8]!==p||t[9]!==r||t[10]!==m||t[11]!==h?(g=(0,$.jsx)(it,{category:_e.AppBlock,conversation:r,isReady:m,target:p,children:h}),t[8]=p,t[9]=r,t[10]=m,t[11]=h,t[12]=g):g=t[12],g}}));export{ut as S,jt as _,Jr as a,ft as b,$n as c,xn as d,Tn as f,gt as g,Nt as h,cr as i,er as l,Mt as m,kr as n,tr as o,Pt as p,Dr as r,sr as s,dr as t,bn as u,pt as v,dt as x,mt as y};
//# sourceMappingURL=e3b746a6-cofla9sg1anodt6a.js.map