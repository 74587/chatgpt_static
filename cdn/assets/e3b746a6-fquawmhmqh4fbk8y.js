const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-ofgorgnyy6uw90vs.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-ifq7ksg4a4rm5ni9.js","assets/2340486e-eab5bn2wcgxcv5rd.js","assets/conversation-small-l4eqanv7cbshepgf.js","assets/30901919-ggf9rya8399mvh3u.js","assets/c470f5ab-c1wbogj3u5lc2i5h.js","assets/0e5afe53-iimygzp7dyuvxo1j.js","assets/conversation-small-ftje035n.css","assets/8b34dbc2-fuvwwxi09qv3jfa9.js","assets/82782bc9-k2tub88218l5hdlf.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{As as r,CH as i,CQ as a,D4 as o,DC as s,Dy as c,Ey as l,FC as u,H4 as d,Hm as f,JU as p,LC as m,NC as h,Os as g,RQ as _,SQ as v,T4 as y,U4 as b,Um as x,Z1 as S,ak as ee,ba as C,dP as w,ek as T,fP as te,fa as E,hZ as D,lV as O,mF as k,nk as A,p4 as j,pF as ne,q1 as M,qK as N,sV as P,tk as re,uZ as F,v4 as ie,wH as ae,y4 as oe,z4 as se,zQ as ce,zU as I}from"./4813494d-ifq7ksg4a4rm5ni9.js";import{Cn as L,Sn as le,Tn as R,bn as ue,en as z,gn as de,wn as B,xn as fe,yn as V}from"./2340486e-eab5bn2wcgxcv5rd.js";import{$vt as pe,B_t as me,Db as he,F8 as H,Jrn as ge,M8 as _e,N8 as ve,Ob as ye,P8 as be,QT as xe,Qvt as Se,R8 as U,R_t as Ce,Yrn as we,Zvt as W,aE as Te,cE as G,j8 as Ee,nu as De,ru as Oe,vGt as ke,yGt as Ae,z8 as K}from"./conversation-small-l4eqanv7cbshepgf.js";import{HC as je,Ix as Me,Lx as Ne,VC as q,mE as Pe,pE as J}from"./30901919-ggf9rya8399mvh3u.js";import{i as Y,n as Fe,t as Ie}from"./8d846022-habmttvqwy4a5siq.js";import{a as Le,i as Re,o as ze}from"./91969468-mm9p8f4dx6q703ul.js";import{n as Be,t as Ve}from"./4d271a7b-c9dzv7yguughqv0o.js";import{n as X,t as He}from"./de6a4d0c-f1webjbmrzeka0lj.js";import{n as Ue,r as We}from"./58bafdef-cwqqce9h49o4obup.js";import{a as Ge,i as Ke}from"./e01e2324-iienebt92rw6nz0k.js";import{i as qe,t as Je}from"./5dc32f04-paw8sg0d8rj4jhu8.js";import{n as Ye,t as Xe}from"./066a83b9-mvd94yx7hofi5hha.js";import{n as Ze,t as Qe}from"./f0f3c45c-agvnkoynguciealz.js";import{i as $e,n as et,r as tt,t as nt}from"./cc79834b-hcanfx9omh5akydq.js";function rt(){return j(`2779568043`)}function it(){return j(`3864712762`)}function at(){return ie(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var ot=e((()=>{oe()}));function st({messageId:e,refIndex:t}){return`appblock:${e}:${t}`}var ct=e((()=>{}));function lt({errorSource:e,errorType:t,networkPolicy:n,outcome:r,readySignal:i,surface:a}){let o={network_policy:n,surface:a};return e!=null&&(o.error_source=e),t!=null&&(o.error_type=t),r!=null&&(o.outcome=r),i!=null&&(o.ready_signal=i),o}function ut(){return typeof performance<`u`?performance.now():Date.now()}function dt(e){return new TextEncoder().encode(e).byteLength/1024}function ft(e){return e instanceof Error?e.name:`unknown`}function pt(e,t,n=1){b.count(se.APP_BLOCKS,e,lt(t),n)}function mt(e,t,n){b.hist(se.APP_BLOCKS,e,lt(n),t)}function ht({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,gt.useRef)(ut()),i=(0,gt.useRef)(null),a=(0,gt.useRef)(!1),o=(0,gt.useRef)(!1),s=re(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=re((n=e)=>{o.current||(o.current=!0,mt(yt,dt(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:re((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=ut(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),pt(St,t);let _=(e,n)=>{f||(f=!0,pt(xt,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=ut();mt(bt,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,mt(_t,s-r.current,t),n!=null&&mt(wt,s-n,t))},y=(e,t)=>{if(s(),typeof window>`u`){v(e,t);return}i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,t)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=ut(),g=n,mt(Ct,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{e()&&(p=!0,s(),pt(vt,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt=e((()=>{d(),T(),gt=n(L()),_t=`app_block.first_render_time_ms`,vt=`app_block.load.failure`,yt=`app_block.payload_size_kb`,bt=`app_block.ready_to_first_paint_ms`,xt=`app_block.render.outcome`,St=`app_block.render.start`,Ct=`app_block.sandbox_eval_to_ready_ms`,wt=`app_block.widget_ref_to_first_paint_ms`}));function Et(e){return e==="default"||e===`open`?e:null}function Dt({explicitStyleMode:e,libraryFileId:t}){return e??(t==null?`default`:`open`)}var Ot=e((()=>{})),kt,At=e((()=>{kt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main{padding-block-start:12px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),jt=e((()=>{})),Mt,Nt=e((()=>{jt(),Mt=`/cdn/assets/app-block-sandbox-foundation-c11hc9c6.css`})),Pt,Ft=e((()=>{Pt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main{padding-block-start:12px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){--app-block-slider-track:color-mix(in srgb, var(--viz-text) 16%, transparent);--app-block-slider-thumb-shadow:color-mix(in srgb, var(--viz-text) 18%, transparent);appearance:none;background:linear-gradient(var(--app-block-slider-track), var(--app-block-slider-track)) center / 100% 4px no-repeat;cursor:pointer;border:0;border-radius:9999px;width:100%;height:28px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.5}:where(input[type=range])::-webkit-slider-runnable-track{background:0 0;border:0;height:28px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;margin-top:5px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-webkit-slider-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-webkit-slider-thumb{transform:scale(1.06)}:where(input[type=range])::-moz-range-track{background:var(--app-block-slider-track);border:0;border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-progress{background:var(--viz-accent);border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-thumb{border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-moz-range-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-moz-range-thumb{transform:scale(1.06)}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),It=e((()=>{})),Lt,Rt=e((()=>{It(),Lt=`/cdn/assets/app-block-sandbox-grv3t07f.css`}));function zt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Bt=e((()=>{}));function Vt(e){return/<!doctype\b|<html[\s>]/i.test(e)}function Ht(e){let t=e.trim().replaceAll(`_`,`-`);return t.length===0||!/^[A-Za-z0-9-]+$/.test(t)?`en`:t}function Ut(e){if(/^https?:\/\//i.test(e)||typeof window>`u`)return e;let t=window.location.origin;return new URL(e,t).toString()}function Wt(e){try{return new URL(e).origin}catch{return null}}function Gt(e){return $t.has(e)?e:`default`}function Kt(e,t){return t===`skybridge`||t===`stage`?e===`dark`?`#212121`:`#ffffff`:e===`dark`?`#000000`:`#fcfcfc`}function qt(e=[]){let t=Ut(Lt),n=Ut(Mt),r=[Wt(Xt),Wt(Zt),Wt(t),Wt(n),...Qt,...e.map(Wt)];return Array.from(new Set(r.filter(e=>e!=null)))}function Jt(e,t=`light`,n=`en`,r=`default`,i=`inline`,{loadTailwind:a=!0,platform:o,progressiveStreaming:s=!1,styleMode:c=`default`}={}){let l=e.trim();if(!s&&Vt(l))return{html:l,expectReadySignal:!1};let u=Ht(n),d=c===`open`?kt:Pt,f=Ut(c===`open`?Mt:Lt),p=Gt(r),m=Kt(t,i),h=i===`skybridge`&&o!=null&&o!==`web`||i===`inline`&&c===`open`,g=[`color-scheme: ${t};`,h?`background-color: transparent;`:`background-color: var(--main-surface-primary, ${m});`].join(` `);return{expectReadySignal:a,html:`<!doctype html>
<html ${[`lang="${u}"`,`class="${t}"`,`data-chat-theme="${p}"`,`data-app-block-surface="${i}"`,`data-app-block-style-mode="${c}"`,o==null?null:`data-app-block-platform="${o}"`,`style="${g}"`].filter(e=>e!=null).join(` `)}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="${t}" />
    ${a?`<script>
      window.tailwind = window.tailwind || {};
      window.tailwind.config = { darkMode: "class" };
    <\/script>
    <script id="app-block-tailwind" src="${Xt}" defer><\/script>
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
    ${a?`<link rel="stylesheet" href="${f}" />`:`<style>${d}</style>`}
    ${s?en:``}
  </head>
  <body>
    <main>
${s?``:l}
    </main>
    ${s?tn:``}
  </body>
</html>`}}var Yt,Xt,Zt,Qt,$t,en,tn,nn=e((()=>{At(),Nt(),Ft(),Rt(),Bt(),Xt=`https://cdn.tailwindcss.com`,Zt=`https://images.openai.com`,Qt=[`https://cdnjs.cloudflare.com`,`https://esm.sh`,`https://cdn.jsdelivr.net`,`https://unpkg.com`,`https://fonts.googleapis.com`,`https://fonts.gstatic.com`,`https://fonts.bunny.net`],$t=new Set([`default`,`blue`,`green`,`yellow`,`purple`,`pink`,`orange`,`black`]),en=`<style>
  @media (prefers-reduced-motion: no-preference) {
    [data-app-block-stream-enter] {
      animation: app-block-stream-enter 160ms ease-out both;
    }

    @keyframes app-block-stream-enter {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  }
</style>`,tn=String.raw(Yt||=zt([`<script>
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
<\/script>`]))}));function rn(){"use forget";let e=(0,an.useContext)(on);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var an,on,sn=e((()=>{an=n(L()),on=(0,an.createContext)(null)})),cn,ln=e((()=>{ae(),R(),cn=i(()=>B(()=>import(`./7aa2b76f-ofgorgnyy6uw90vs.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}));function un(e){"use forget";let t=(0,mn.c)(38),{additionalResourceDomains:n,children:r,code:i,conversationId:o,source:s,styleMode:c,title:l}=e,u=`app-block:${s.appBlockId}:${(0,hn.useId)()}`,d=(0,hn.useRef)(null),f=s.appBlockId,p=s.libraryFileId,m=s.messageId,h=s.refIndex,g=o??null,_;t[0]!==g||t[1]!==f?(_={appBlockId:f,conversationId:g},t[0]=g,t[1]=f,t[2]=_):_=t[2];let v=_,y=a(Ee),b;t[3]!==y||t[4]!==v?(b=H(y,v),t[3]=y,t[4]=v,t[5]=b):b=t[5];let x=b,S=y?.appBlockId===f&&y.conversationId===g&&(y.isOriginalVersion===!0||y.versionNumber!=null),ee=x||S,C;t[6]!==y||t[7]!==u||t[8]!==v?(C=U(y,v,u),t[6]=y,t[7]=u,t[8]=v,t[9]=C):C=t[9];let w=C,T;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(T=()=>{d.current?.focus()},t[10]=T):T=t[10];let te=T,E;t[11]!==f||t[12]!==p||t[13]!==m||t[14]!==h?(E={appBlockId:f,libraryFileId:p,messageId:m,refIndex:h},t[11]=f,t[12]=p,t[13]=m,t[14]=h,t[15]=E):E=t[15];let D;t[16]!==n||t[17]!==i||t[18]!==c||t[19]!==E||t[20]!==l?(D={additionalResourceDomains:n,code:i,focusOnClose:te,source:E,styleMode:c,title:l},t[16]=n,t[17]=i,t[18]=c,t[19]=E,t[20]=l,t[21]=D):D=t[21];let O=D,k,A;t[22]!==O||t[23]!==x||t[24]!==v?(k=()=>{x&&K(v,O)},A=[O,x,v],t[22]=O,t[23]=x,t[24]=v,t[25]=k,t[26]=A):(k=t[25],A=t[26]),(0,hn.useEffect)(k,A);let j;t[27]!==O||t[28]!==w||t[29]!==v?(j=()=>{_e(v,w,O)},t[27]=O,t[28]=w,t[29]=v,t[30]=j):j=t[30];let ne=j,M;t[31]!==ee||t[32]!==S||t[33]!==ne?(M={isExpanded:ee,isViewingHistoricalVersion:S,openExpandedView:ne,triggerRef:d},t[31]=ee,t[32]=S,t[33]=ne,t[34]=M):M=t[34];let N=M,P;return t[35]!==r||t[36]!==N?(P=(0,gn.jsx)(on.Provider,{value:N,children:r}),t[35]=r,t[36]=N,t[37]=P):P=t[37],P}function dn(e){"use forget";let t=(0,mn.c)(2),{collapsedPreview:n,inlinePreview:r}=e,{isExpanded:i}=rn(),a=i?n:r,o;return t[0]===a?o=t[1]:(o=(0,gn.jsx)(gn.Fragment,{children:a}),t[0]=a,t[1]=o),o}function fn(e){"use forget";let t=(0,mn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:o,title:s}=e,c=tt(),l;t[0]===i?l=t[1]:(l=()=>i==null?0:De(i).height$()??0,t[0]=i,t[1]=l);let u=a(l),d=c===`fullscreen`&&n&&i!=null?u:0,f;t[2]===s?f=t[3]:(f=(0,gn.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:s}),t[2]=s,t[3]=f);let p;t[4]!==o||t[5]!==f?(p=(0,gn.jsxs)(nt.Header,{className:`pb-1`,children:[f,o]}),t[4]=o,t[5]=f,t[6]=p):p=t[6];let m;t[7]===d?m=t[8]:(m={paddingBottom:d},t[7]=d,t[8]=m);let h;t[9]===r?h=t[10]:(h=(0,gn.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=h);let g;t[11]!==m||t[12]!==h?(g=(0,gn.jsx)(nt.Body,{className:`bg-token-bg-primary overflow-hidden`,style:m,children:h}),t[11]=m,t[12]=h,t[13]=g):g=t[13];let _;return t[14]!==p||t[15]!==g?(_=(0,gn.jsxs)(gn.Fragment,{children:[p,g]}),t[14]=p,t[15]=g,t[16]=_):_=t[16],_}function pn(e){"use forget";let t=(0,mn.c)(5),{conversation:n,paneId:r}=e,i=$e(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,gn.jsx)(cn,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var mn,hn,gn,_n=e((()=>{mn=z(),Oe(),et(),v(),hn=n(L()),sn(),be(),ln(),gn=le()}));function vn(){"use forget";let e=(0,yn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,bn.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,bn.jsx)(de,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var yn,bn,xn=e((()=>{yn=z(),ue(),bn=le()}));function Sn(e){"use forget";let t=(0,wn.c)(38),n=fe(),r;t[0]!==n||t[1]!==e?(r=e?n.formatMessage(On.generatingApp,{title:e}):n.formatMessage(On.creatingInterface),t[0]=n,t[1]=e,t[2]=r):r=t[2];let i=r,a;t[3]===n?a=t[4]:(a=n.formatMessage(On.sketchingInterface),t[3]=n,t[4]=a);let o;t[5]===n?o=t[6]:(o=n.formatMessage(On.shapingLayout),t[5]=n,t[6]=o);let s;t[7]===n?s=t[8]:(s=n.formatMessage(On.arrangingPieces),t[7]=n,t[8]=s);let c;t[9]===n?c=t[10]:(c=n.formatMessage(On.polishingVisuals),t[9]=n,t[10]=c);let l;t[11]===n?l=t[12]:(l=n.formatMessage(On.tuningInputs),t[11]=n,t[12]=l);let u;t[13]===n?u=t[14]:(u=n.formatMessage(On.addingInteractivity),t[13]=n,t[14]=u);let d;t[15]===n?d=t[16]:(d=n.formatMessage(On.wiringControls),t[15]=n,t[16]=d);let f;t[17]===n?f=t[18]:(f=n.formatMessage(On.composingInteractions),t[17]=n,t[18]=f);let p;t[19]===n?p=t[20]:(p=n.formatMessage(On.calibratingPreview),t[19]=n,t[20]=p);let m;t[21]===n?m=t[22]:(m=n.formatMessage(On.refiningDetails),t[21]=n,t[22]=m);let h;t[23]!==i||t[24]!==a||t[25]!==m||t[26]!==o||t[27]!==s||t[28]!==c||t[29]!==l||t[30]!==u||t[31]!==d||t[32]!==f||t[33]!==p?(h=[i,a,o,s,c,l,u,d,f,p,m],t[23]=i,t[24]=a,t[25]=m,t[26]=o,t[27]=s,t[28]=c,t[29]=l,t[30]=u,t[31]=d,t[32]=f,t[33]=p,t[34]=h):h=t[34];let g=h,[_,v]=(0,Tn.useState)(0),y,b;return t[35]===g.length?(y=t[36],b=t[37]):(y=()=>{let e=window.setInterval(()=>{v(e=>Math.min(e+1,g.length-1))},Dn);return()=>{window.clearInterval(e)}},b=[g.length],t[35]=g.length,t[36]=y,t[37]=b),(0,Tn.useEffect)(y,b),g[_]??g[0]??``}function Cn(e){"use forget";let t=(0,wn.c)(2),{title:n}=e,r=Sn(n),i;return t[0]===r?i=t[1]:(i=(0,En.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full`,role:`status`,children:(0,En.jsx)(Je,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:r})}),t[0]=r,t[1]=i),i}var wn,Tn,En,Dn,On,kn=e((()=>{wn=z(),qe(),Tn=n(L()),ue(),En=le(),Dn=2800,On=V({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}})}));function An(e){let t=new Map,n=new Map,r=null,i=null;for(let a of e){let e=a.metadata?.content_references;if(Array.isArray(e)&&e.forEach((e,r)=>{let i=Mn({contentReference:e,messageId:a.id,refIndex:r});i!=null&&(t.set(i.appBlockId,i),i.libraryFileId!=null&&n.set(i.libraryFileId,i.appBlockId))}),a.author.role===M.User){(a.metadata?.attachments??[]).forEach((e,r)=>{let i=jn({attachment:e,messageId:a.id,refIndex:r});i==null||i.libraryFileId==null||n.has(i.libraryFileId)||(t.set(i.appBlockId,i),n.set(i.libraryFileId,i.appBlockId))});let e=a.metadata?.focused_artifact;if(e!=null){let n=e.type===Un?t.get(e.artifact_id)??null:null;r=n!=null&&n.messageId===e.source_message_id&&n.refIndex===e.source_ref_index&&(n.libraryFileId==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e.library_file_id}else{let e=a.metadata?.open_in_app_block_view,n=e==null?null:t.get(e.app_block_id)??null;r=e!=null&&n!=null&&n.messageId===e.message_id&&n.refIndex===e.ref_index&&(n.libraryFileId==null||e.library_file_id==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e?.library_file_id??null}}let o=N(a);if(o?.status!==`created`)continue;let s=n.get(o.libraryFileId),c=s==null?null:t.get(s)??null;if(c==null&&o.origin!=null){let e=o.origin.messageId,n=[...t.values()].filter(t=>t.messageId===e);c=n.length===1?n[0]:null}c==null&&s==null&&r!=null&&r.libraryFileId==null&&(i==null||i===o.libraryFileId)&&(c=r),c!=null&&(c.libraryFileId==null&&c.content!=null&&Bn(a)||(n.set(o.libraryFileId,c.appBlockId),t.set(c.appBlockId,{...c,content:null,currentContentFileId:o.newContentFileId,latestPatchMessageId:a.id,libraryFileId:o.libraryFileId,libraryFileVersionNumber:o.newVersionNumber})))}return t}function jn({attachment:e,messageId:t,refIndex:n}){return e.library_artifact_type!==Un||e.library_file_id==null?null:{appBlockId:st({messageId:t,refIndex:n}),content:null,currentContentFileId:e.id??null,entrypoint:`index.html`,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:e.library_file_id,libraryFileName:e.name,libraryFileVersionNumber:null,mimeType:e.mime_type??null,messageId:t,refIndex:n,styleMode:null,title:e.name.replace(/\.html$/i,``)}}function Mn({contentReference:e,messageId:t,refIndex:n}){if(typeof e!=`object`||!e||!(`type`in e)||!(`category`in e)||e.type!==Wn||e.category!==Un||!(`data`in e))return null;let r=e.data;if(typeof r!=`object`||!r)return null;let i=Nn(r,`content`),a=Nn(r,`entrypoint`)??`index.html`,o=Rn(r,a),s=Fn(o,`library_file_id`);return i==null&&s==null?null:{appBlockId:Nn(r,`app_block_id`)??st({messageId:t,refIndex:n}),bundleVersion:Pn(r,`bundle_version`)??void 0,content:i,currentContentFileId:Fn(o,`current_content_file_id`),entrypoint:a,iconSvg:Nn(r,`icon_svg`),language:zn(),latestPatchMessageId:null,libraryFileId:s,libraryFileName:Fn(o,`library_file_name`),libraryFileVersionNumber:Ln(In(o,`library_file_version_number`)),mimeType:Fn(o,`mime_type`),messageId:t,refIndex:n,styleMode:Et(Nn(r,`style_mode`)),title:Nn(r,`display_name`)??Nn(r,`title`)}}function Nn(e,t){let n=null;return t===`app_block_id`&&`app_block_id`in e&&(n=e.app_block_id),t===`content`&&`content`in e&&(n=e.content),t===`current_content_file_id`&&`current_content_file_id`in e&&(n=e.current_content_file_id),t===`display_name`&&`display_name`in e&&(n=e.display_name),t===`entrypoint`&&`entrypoint`in e&&(n=e.entrypoint),t===`icon_svg`&&`icon_svg`in e&&(n=e.icon_svg),t===`library_file_id`&&`library_file_id`in e&&(n=e.library_file_id),t===`library_file_name`&&`library_file_name`in e&&(n=e.library_file_name),t===`mime_type`&&`mime_type`in e&&(n=e.mime_type),t===`path`&&`path`in e&&(n=e.path),t===`style_mode`&&`style_mode`in e&&(n=e.style_mode),t===`title`&&`title`in e&&(n=e.title),typeof n==`string`&&n.trim()!==``?n:null}function Pn(e,t){if(t===`bundle_version`&&`bundle_version`in e){let t=e.bundle_version;if(typeof t==`number`)return t}if(t===`library_file_version_number`&&`library_file_version_number`in e){let t=e.library_file_version_number;if(typeof t==`number`)return t}return null}function Fn(e,t){return typeof e!=`object`||!e?null:Nn(e,t)}function In(e,t){return typeof e!=`object`||!e?null:Pn(e,t)}function Ln(...e){for(let t of e)if(t!=null)return t;return null}function Rn(e,t){if(!(`files`in e)||!Array.isArray(e.files))return null;let n=null;for(let r of e.files)if(!(typeof r!=`object`||!r)&&Nn(r,`library_file_id`)!=null&&(n??=r,Nn(r,`path`)===t))return r;return n}function zn(){return`html`}function Bn(e){let t=e.metadata?.shared_conversation_id;return typeof t==`string`&&t.trim()!==``}function Vn(e,t){return e.appBlockId===t.appBlockId&&e.bundleVersion===t.bundleVersion&&e.content===t.content&&e.currentContentFileId===t.currentContentFileId&&e.entrypoint===t.entrypoint&&e.iconSvg===t.iconSvg&&e.language===t.language&&e.latestPatchMessageId===t.latestPatchMessageId&&e.libraryFileId===t.libraryFileId&&e.libraryFileName===t.libraryFileName&&e.libraryFileVersionNumber===t.libraryFileVersionNumber&&e.mimeType===t.mimeType&&e.messageId===t.messageId&&e.refIndex===t.refIndex&&e.styleMode===t.styleMode&&e.title===t.title}function Hn(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e){let e=t.get(n);if(e==null||!Vn(r,e))return!1}return!0}var Un,Wn,Gn,Kn=e((()=>{S(),u(),r(),xe(),F(),ct(),Ot(),Un=`app_block`,Wn=`client_defined_widget`,Gn=s(e=>D(()=>An(g(e).flatMap(e=>e.messages)),{equals:Hn}))}));function qn({appBlockId:e,conversation:t}){return t==null?null:Gn(t).get(e)??null}function Jn(e){return e?.serverId$()??void 0}function Yn({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:Se(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function Xn({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return W({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:O(e)?`missing`:`failed`})}),()=>{a.abort()}}function Zn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??Qn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function Qn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var $n=e((()=>{P(),pe(),Kn()})),er=t({AppBlock:()=>rr,AppBlockPreviewLoadingState:()=>xr,AppBlockSandboxPreview:()=>yr});function tr(e){let t=e.search(Fr),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function nr(e){let t=tr(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(Ir))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(Lr)!=null}function rr(e){"use forget";let t=(0,Z.c)(114),{additionalResourceDomains:n,appBlockId:r,authoritativeCode:i,authoritativeSource:o,code:s,collapseWhenSuperseded:c,currentContentFileId:l,displayMode:u,id:d,captureConsoleMessages:f,clientThreadId:g,iconSvg:_,isStreaming:v,isTurnStreaming:y,libraryFileId:b,libraryFileVersionNumber:x,messageId:S,onConsoleMessagesChange:ee,onReadyChange:w,progressiveStreaming:T,ref:te,refIndex:E,styleMode:D,title:O,variant:k,widgetRefSeenAtMs:A}=e,j=c===void 0||c,ne=f!==void 0&&f,M=v!==void 0&&v,N=y!==void 0&&y,P=T!==void 0&&T,re=k===void 0?`inline`:k,F=m(),ie;t[0]===F?ie=t[1]:(ie=()=>F!=null&&we(F),t[0]=F,t[1]=ie);let ae=a(ie),oe;t[2]!==g||t[3]!==F?(oe=g==null?F:h(g),t[2]=g,t[3]=F,t[4]=oe):oe=t[4];let se=oe,ce=S!=null&&E!=null?st({messageId:S,refIndex:E}):void 0,I=r??ce??st({messageId:S??d,refIndex:E??0}),L=a(()=>Te({conversation:F??null,instanceId:I,messageId:S,refIndex:E}))??u,le=a(()=>o!=null||L!=null?null:qn({appBlockId:I,conversation:F??null})),R=o??le,ue;t[5]===F?ue=t[6]:(ue=()=>Jn(F??null),t[5]=F,t[6]=ue);let z=a(ue),de=p(F?.id),B=z??de,fe;t[7]!==l||t[8]!==b||t[9]!==x||t[10]!==B||t[11]!==R?(fe=Yn({currentContentFileId:l,libraryFileId:b,libraryFileVersionNumber:x,serverThreadId:B,source:R}),t[7]=l,t[8]=b,t[9]=x,t[10]=B,t[11]=R,t[12]=fe):fe=t[12];let V=fe,[pe,me]=(0,Q.useState)(null),[H,ge]=(0,Q.useState)(0),ye;t[13]!==H||t[14]!==V.libraryContentKey?(ye=[V.libraryContentKey,H],t[13]=H,t[14]=V.libraryContentKey,t[15]=ye):ye=t[15];let be=ye.join(`\0`),xe,Se;t[16]!==i||t[17]!==be||t[18]!==V.contentFileId||t[19]!==V.libraryFileId||t[20]!==L||t[21]!==B?(xe=()=>{if(!(i!=null||L===`collapsed`))return Xn({contentFileId:V.contentFileId,libraryContentKey:be,libraryFileId:V.libraryFileId,onContentStateChange:me,serverThreadId:B})},Se=[i,V.contentFileId,V.libraryFileId,be,L,B],t[16]=i,t[17]=be,t[18]=V.contentFileId,t[19]=V.libraryFileId,t[20]=L,t[21]=B,t[22]=xe,t[23]=Se):(xe=t[22],Se=t[23]),(0,Q.useEffect)(xe,Se);let U=Zn({appBlockId:I,contentFileId:V.contentFileId,currentContentFileId:l,libraryContent:pe,libraryContentKey:be,libraryFileId:b,libraryFileVersionNumber:x,source:R}),Ce=pe?.key===be?pe:null,G;t[24]!==U?.libraryFileId||t[25]!==b?(G=()=>ve(U?.libraryFileId??b),t[24]=U?.libraryFileId,t[25]=b,t[26]=G):G=t[26];let Ee=a(G),De=U?.libraryFileVersionNumber??x,Oe=Ee!=null&&(De==null||Ee.versionNumber>=De)?Ee.code:void 0,ke=Oe??i??U?.content??s??null,Ae=U?.iconSvg??_??null,K=U?.libraryFileId??b,je=K==null&&i==null&&Oe==null&&l==null&&R?.currentContentFileId==null&&R?.latestPatchMessageId==null,Me;t[27]!==je||t[28]!==s||t[29]!==S||t[30]!==ke||t[31]!==E||t[32]!==R?(Me=je?R==null?S!=null&&E!=null&&s!=null&&ke===s?{messageId:S,refIndex:E}:null:R.messageId.length>0&&R.content!=null&&ke===R.content?{messageId:R.messageId,refIndex:R.refIndex}:null:null,t[27]=je,t[28]=s,t[29]=S,t[30]=ke,t[31]=E,t[32]=R,t[33]=Me):Me=t[33];let Ne=Me,q=U?.styleMode??D,Pe;t[34]!==K||t[35]!==q?(Pe=Dt({explicitStyleMode:q,libraryFileId:K}),t[34]=K,t[35]=q,t[36]=Pe):Pe=t[36];let J=Pe,Y=U?.title??O,Fe;t[37]===F?Fe=t[38]:(Fe=()=>F!=null&&C(F)?`work`:`chat`,t[37]=F,t[38]=Fe);let Ie=a(Fe),Le;t[39]===Symbol.for(`react.memo_cache_sentinel`)?(Le=at(),t[39]=Le):Le=t[39];let Re=Le,ze=re===`artifact`,Be=P&&!ze,Ve=ze&&J===`open`,X=L===`collapsed`||L==null&&j&&U?.latestPatchMessageId!=null&&U.latestPatchMessageId!==S,He=s!=null||l!=null,Ue;t[40]!==g||t[41]!==s||t[42]!==F?.id||t[43]!==l||t[44]!==I||t[45]!==x||t[46]!==S||t[47]!==K||t[48]!==J||t[49]!==Y||t[50]!==E||t[51]!==B||t[52]!==R?.messageId?(Ue=async e=>{let t=s;if(t==null&&l!=null)try{t=await W({abortSignal:new AbortController().signal,fileId:l,serverThreadId:B})}catch{return}t!=null&&_e({appBlockId:I,conversationId:F?.id??g??null,isOriginalVersion:!0,versionNumber:x??void 0},`app-block:${I}:original`,{code:t,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:I,libraryFileId:K,messageId:R?.messageId??S,refIndex:E},styleMode:J,title:Y})},t[40]=g,t[41]=s,t[42]=F?.id,t[43]=l,t[44]=I,t[45]=x,t[46]=S,t[47]=K,t[48]=J,t[49]=Y,t[50]=E,t[51]=B,t[52]=R?.messageId,t[53]=Ue):Ue=t[53],F?.id,R?.messageId;let We=Ue;if(M&&!Be){let e;return t[54]===Y?e=t[55]:(e=(0,$.jsx)(Cn,{title:Y}),t[54]=Y,t[55]=e),e}let Ge=ae&&s!=null;if(Ce?.status===`missing`&&!Ge)return null;if(X){let e=He?We:void 0,n;return t[56]!==Y||t[57]!==e?(n=(0,$.jsx)(_r,{onView:e,title:Y}),t[56]=Y,t[57]=e,t[58]=n):n=t[58],n}let Ke=ke??(Be&&M?``:null);if(Ke==null){if(U?.latestPatchMessageId!=null){let e=F?.id??g,n=Ce?.status===`failed`,r;t[59]===ge?r=t[60]:(r=()=>ge(ir),t[59]=ge,t[60]=r);let i;return t[61]!==I||t[62]!==ze||t[63]!==Ae||t[64]!==Y||t[65]!==e||t[66]!==n||t[67]!==r?(i=(0,$.jsx)(cr,{appBlockId:I,conversationId:e,hasFailed:n,iconSvg:Ae,onRetry:r,showHeader:ze,title:Y}),t[61]=I,t[62]=ze,t[63]=Ae,t[64]=Y,t[65]=e,t[66]=n,t[67]=r,t[68]=i):i=t[68],i}let e;return t[69]===Y?e=t[70]:(e=(0,$.jsx)(Cn,{title:Y}),t[69]=Y,t[70]=e),e}let qe;t[71]!==g||t[72]!==Ie||t[73]!==M||t[74]!==N||t[75]!==S||t[76]!==Y||t[77]!==E?(qe=!M&&!N&&g!=null&&S!=null&&E!=null&&rt()?{reference:{clientThreadId:g,messageId:S,referenceIndex:E},target:{kind:`app_block`,metadata:{...Y==null?{}:{title:Y},tab:Ie}}}:void 0,t[71]=g,t[72]=Ie,t[73]=M,t[74]=N,t[75]=S,t[76]=Y,t[77]=E,t[78]=qe):qe=t[78];let Je=qe,Ye=F?.id??g,Xe=R?.messageId??S,Ze;t[79]!==I||t[80]!==K||t[81]!==E||t[82]!==Xe?(Ze={appBlockId:I,libraryFileId:K,messageId:Xe,refIndex:E},t[79]=I,t[80]=K,t[81]=E,t[82]=Xe,t[83]=Ze):Ze=t[83];let Qe=Ve&&Re,$e=F?.id??g,et;t[84]===Ne?et=t[85]:(et=Ne==null?void 0:{contentReferenceIndex:Ne.refIndex,messageId:Ne.messageId,widgetName:he.AppBlock},t[84]=Ne,t[85]=et);let tt;t[86]!==n||t[87]!==ne||t[88]!==Je||t[89]!==d||t[90]!==M||t[91]!==ee||t[92]!==w||t[93]!==Ae||t[94]!==J||t[95]!==Y||t[96]!==te||t[97]!==Ke||t[98]!==se||t[99]!==Be||t[100]!==Ve||t[101]!==Qe||t[102]!==$e||t[103]!==et||t[104]!==A?(tt=(0,$.jsx)(ar,{additionalResourceDomains:n,canOpen:Qe,captureConsoleMessages:ne,clientThreadId:$e,code:Ke,feedback:Je,iconSvg:Ae,id:d,isStreaming:M,onConsoleMessagesChange:ee,onReadyChange:w,progressiveStreaming:Be,ref:te,showArtifactCard:Ve,shareConversation:se,shareTarget:et,styleMode:J,title:Y,widgetRefSeenAtMs:A}),t[86]=n,t[87]=ne,t[88]=Je,t[89]=d,t[90]=M,t[91]=ee,t[92]=w,t[93]=Ae,t[94]=J,t[95]=Y,t[96]=te,t[97]=Ke,t[98]=se,t[99]=Be,t[100]=Ve,t[101]=Qe,t[102]=$e,t[103]=et,t[104]=A,t[105]=tt):tt=t[105];let nt;return t[106]!==n||t[107]!==J||t[108]!==Y||t[109]!==Ke||t[110]!==Ye||t[111]!==Ze||t[112]!==tt?(nt=(0,$.jsx)(un,{additionalResourceDomains:n,code:Ke,conversationId:Ye,styleMode:J,source:Ze,title:Y,children:tt}),t[106]=n,t[107]=J,t[108]=Y,t[109]=Ke,t[110]=Ye,t[111]=Ze,t[112]=tt,t[113]=nt):nt=t[113],nt}function ir(e){return e+1}function ar(e){"use forget";let t=(0,Z.c)(45),{additionalResourceDomains:n,canOpen:r,captureConsoleMessages:i,clientThreadId:a,code:o,feedback:s,iconSvg:c,id:l,isStreaming:u,onConsoleMessagesChange:d,onReadyChange:f,progressiveStreaming:p,ref:m,shareConversation:h,shareTarget:g,showArtifactCard:_,styleMode:v,title:y,widgetRefSeenAtMs:b}=e,{isViewingHistoricalVersion:x,openExpandedView:S,triggerRef:ee}=rn(),C;t[0]===n?C=t[1]:(C=n??[],t[0]=n,t[1]=C);let w;t[2]!==o||t[3]!==l||t[4]!==v||t[5]!==C?(w=[l,v,o,...C],t[2]=o,t[3]=l,t[4]=v,t[5]=C,t[6]=w):w=t[6];let T=w.join(`\0`),[te,E]=(0,Q.useState)(null),D=!u&&te===T,O;t[7]===S?O=t[8]:(O=()=>{ke(),S()},t[7]=S,t[8]=O);let k=O,A;t[9]!==f||t[10]!==T?(A=(e,t)=>{E(e?T:null),f?.(e,t)},t[9]=f,t[10]=T,t[11]=A):A=t[11];let j=A,ne=x?k:void 0,M;t[12]!==c||t[13]!==ne||t[14]!==y||t[15]!==ee?(M=(0,$.jsx)(dr,{iconSvg:c,onOpen:ne,openButtonRef:ee,title:y}),t[12]=c,t[13]=ne,t[14]=y,t[15]=ee,t[16]=M):M=t[16];let N;t[17]!==n||t[18]!==i||t[19]!==a||t[20]!==o||t[21]!==j||t[22]!==l||t[23]!==u||t[24]!==d||t[25]!==p||t[26]!==m||t[27]!==v||t[28]!==b?(N=(0,$.jsx)(yr,{additionalResourceDomains:n,code:o,id:l,isStreaming:u,captureConsoleMessages:i,clientThreadId:a,onConsoleMessagesChange:d,onReadyChange:j,progressiveStreaming:p,ref:m,styleMode:v,widgetRefSeenAtMs:b}),t[17]=n,t[18]=i,t[19]=a,t[20]=o,t[21]=j,t[22]=l,t[23]=u,t[24]=d,t[25]=p,t[26]=m,t[27]=v,t[28]=b,t[29]=N):N=t[29];let P;t[30]!==r||t[31]!==s||t[32]!==k||t[33]!==c||t[34]!==D||t[35]!==h||t[36]!==g||t[37]!==_||t[38]!==N||t[39]!==y||t[40]!==ee?(P=(0,$.jsx)(sr,{canOpen:r,expandButtonRef:ee,feedback:s,iconSvg:c,isShareReady:D,shareConversation:h,shareTarget:g,showArtifactCard:_,title:y,onOpen:k,children:N}),t[30]=r,t[31]=s,t[32]=k,t[33]=c,t[34]=D,t[35]=h,t[36]=g,t[37]=_,t[38]=N,t[39]=y,t[40]=ee,t[41]=P):P=t[41];let re;return t[42]!==M||t[43]!==P?(re=(0,$.jsx)(dn,{collapsedPreview:M,inlinePreview:P}),t[42]=M,t[43]=P,t[44]=re):re=t[44],re}function or(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:o,titleClassName:s}=e,c;t[0]===r?c=t[1]:(c=_(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=c);let l=s??`truncate text-base font-semibold`,u;t[2]===l?u=t[3]:(u=_(`text-token-text-primary`,l),t[2]=l,t[3]=u);let d=o??i,f;t[4]!==u||t[5]!==d?(f=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:u,children:d})}),t[4]=u,t[5]=d,t[6]=f):f=t[6];let p;t[7]!==a||t[8]!==f?(p=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,f]}),t[7]=a,t[8]=f,t[9]=p):p=t[9];let m;return t[10]!==n||t[11]!==c||t[12]!==p?(m=(0,$.jsxs)(`div`,{className:c,children:[p,n]}),t[10]=n,t[11]=c,t[12]=p,t[13]=m):m=t[13],m}function sr(e){"use forget";let t=(0,Z.c)(19),{canOpen:n,children:r,expandButtonRef:i,feedback:a,iconSvg:o,isShareReady:s,onOpen:c,shareConversation:l,shareTarget:u,showArtifactCard:d,title:f}=e,p=fe(),m;t[0]===p?m=t[1]:(m=p.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=p,t[1]=m);let h=m,g;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==h||t[6]!==o||t[7]!==s||t[8]!==c||t[9]!==l||t[10]!==u||t[11]!==d||t[12]!==f?(g=d?(0,$.jsxs)(`div`,{className:`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)(or,{action:(0,$.jsx)(Rr,{canOpen:n,conversation:l,expandButtonRef:i,isReady:s,onOpen:c,target:u}),className:`px-4 py-2`,fallbackTitle:h,leading:(0,$.jsx)(pr,{iconSvg:o}),title:f}),(0,$.jsx)(`div`,{children:r})]}):r,t[2]=n,t[3]=r,t[4]=i,t[5]=h,t[6]=o,t[7]=s,t[8]=c,t[9]=l,t[10]=u,t[11]=d,t[12]=f,t[13]=g):g=t[13];let _;t[14]===a?_=t[15]:(_=a==null?null:(0,$.jsx)(lr,{...a}),t[14]=a,t[15]=_);let v;return t[16]!==g||t[17]!==_?(v=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[g,_]}),t[16]=g,t[17]=_,t[18]=v):v=t[18],v}function cr(e){"use forget";let t=(0,Z.c)(17),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:o,onRetry:s,showHeader:c,title:l}=e,u=a(Ee),d=fe(),f;t[0]===d?f=t[1]:(f=d.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=d,t[1]=f);let p=f;if(H(u,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==o||t[3]!==l?(e=(0,$.jsx)(dr,{iconSvg:o,title:l}),t[2]=o,t[3]=l,t[4]=e):e=t[4],e}let m;t[5]!==p||t[6]!==o||t[7]!==c||t[8]!==l?(m=c?(0,$.jsx)(or,{className:`mb-2`,fallbackTitle:p,leading:(0,$.jsx)(pr,{iconSvg:o}),title:l}):null,t[5]=p,t[6]=o,t[7]=c,t[8]=l,t[9]=m):m=t[9];let h;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(h={minHeight:Cr},t[10]=h):h=t[10];let g;t[11]!==i||t[12]!==s?(g=(0,$.jsx)(`div`,{className:`relative w-full`,style:h,children:i?(0,$.jsx)(Sr,{onRetry:s}):(0,$.jsx)(xr,{})}),t[11]=i,t[12]=s,t[13]=g):g=t[13];let _;return t[14]!==m||t[15]!==g?(_=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[m,g]}),t[14]=m,t[15]=g,t[16]=_):_=t[16],_}function lr(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[i,o]=(0,Q.useState)(!1);if(a(ur))return null;let s;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,$.jsx)(Xe,{}),t[0]=s):s=t[0];let c;return t[1]!==i||t[2]!==n||t[3]!==r?(c=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)(Ke,{onOpenChange:o,open:i,reference:n,target:r,triggerButton:s})}),t[1]=i,t[2]=n,t[3]=r,t[4]=c):c=t[4],c}function ur(){return We()}function dr(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=fe(),s,c,u,d,f;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),f=`not-prose relative clear-both my-4 w-full max-w-full`,d=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=or,u=r==null?void 0:(0,$.jsx)(l,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(de,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=u,t[7]=d,t[8]=f):(s=t[4],c=t[5],u=t[6],d=t[7],f=t[8]);let p;t[9]===n?p=t[10]:(p=(0,$.jsx)(fr,{iconSvg:n}),t[9]=n,t[10]=p);let m;t[11]!==s||t[12]!==c||t[13]!==u||t[14]!==p||t[15]!==a?(m=(0,$.jsx)(s,{action:u,className:`w-full`,fallbackTitle:c,leading:p,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=u,t[14]=p,t[15]=a,t[16]=m):m=t[16];let h;t[17]!==d||t[18]!==m?(h=(0,$.jsx)(`div`,{className:d,children:m}),t[17]=d,t[18]=m,t[19]=h):h=t[19];let g;return t[20]!==f||t[21]!==h?(g=(0,$.jsx)(`div`,{className:f,children:h}),t[20]=f,t[21]=h,t[22]=g):g=t[22],g}function fr(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(pr,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function pr(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=mr(r),t[0]=r,t[1]=a);let o=a,s;return t[2]!==i||t[3]!==o?(s=o==null?(0,$.jsx)(q,{"aria-hidden":`true`,className:_(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:_(`icon-md shrink-0`,i),children:(0,$.jsx)(Ce,{svgString:o,className:`h-full w-full`})}),t[2]=i,t[3]=o,t[4]=s):s=t[4],s}function mr(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>Ar||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(jr)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Nr.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!hr(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function hr(e){let t=e.replace(Mr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Mr)){let e=t[1],n=t[2];if(!Pr.has(e)||!gr(e,n))return!1}return!0}function gr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function _r(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=fe(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(de,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(de,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(de,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function vr(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:i}=e,a=fe(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let s=o,c;t[2]===r?c=t[3]:(c=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=c);let u;t[4]!==s||t[5]!==i||t[6]!==c?(u=(0,$.jsx)(l,{ref:i,type:`button`,icon:Me,color:`ghost`,size:`medium`,label:s,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:c}),t[4]=s,t[5]=i,t[6]=c,t[7]=u):u=t[7];let d;return t[8]!==n||t[9]!==s||t[10]!==u?(d=(0,$.jsx)(f,{label:s,className:n,children:u}),t[8]=n,t[9]=s,t[10]=u,t[11]=d):d=t[11],d}function yr(e){"use forget";let t=(0,Z.c)(128),{additionalResourceDomains:n,clientThreadId:r,code:i,id:s,captureConsoleMessages:c,isStreaming:l,onConsoleMessagesChange:u,onReadyChange:d,progressiveStreaming:f,ref:p,styleMode:m,surface:h,widgetRefSeenAtMs:g}=e,v=l!==void 0&&l,y=f!==void 0&&f,b=m===void 0?`default`:m,x=h===void 0?`inline`:h,S=fe(),C=(0,Q.useRef)(null),w=(0,Q.useRef)(!1),T=(0,Q.useRef)(!1),te=(0,Q.useRef)(null),E=(0,Q.useRef)(null),D=(0,Q.useRef)(null),O=(0,Q.useRef)(null),k=(0,Q.useRef)(null),A=(0,Q.useRef)(0),j=(0,Q.useRef)(null),M=(0,Q.useRef)(null),N;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(N=[],t[0]=N):N=t[0];let P=(0,Q.useRef)(N),F=ee(),ie=a(ne),{allowDependencyNetworkRequestsWithoutCanvasAccess:ae}=(0,Q.useContext)(He),oe=Le()||ae,se=ze(r)&&!ae,ce=F?`dark`:`light`,I=S.locale,L;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(L={status:`streaming`},t[1]=L):L=t[1];let[le,R]=(0,Q.useState)(L),ue=le.status===`finalized`&&le.html!==i,z=y&&x===`inline`&&le.status!==`static`&&!ue,B=oe?`execution-enabled`:`execution-disabled`,V=se?`network-enabled`:`network-disabled`,pe=z?`progressive-app-block-stream`:i,me;t[2]===n?me=t[3]:(me=n??[],t[2]=n,t[3]=me);let he;t[4]!==ie||t[5]!==I||t[6]!==b||t[7]!==x||t[8]!==me||t[9]!==B||t[10]!==V||t[11]!==pe||t[12]!==ce?(he=[ce,ie,x,b,I,B,V,pe,...me],t[4]=ie,t[5]=I,t[6]=b,t[7]=x,t[8]=me,t[9]=B,t[10]=V,t[11]=pe,t[12]=ce,t[13]=he):he=t[13];let H=he.join(`\0`),ge;t[14]===n?ge=t[15]:(ge=qt(n),t[14]=n,t[15]=ge);let _e=ge,ve=se?`deps_only`:`disabled`,ye;t[16]!==x||t[17]!==ve?(ye={networkPolicy:ve,surface:x},t[16]=x,t[17]=ve,t[18]=ye):ye=t[18];let be=ye,[xe,Se]=(0,Q.useState)(0),[U,Ce]=(0,Q.useState)(null),we=U?.signature===H?U.status:null,W=we===`ready`,Te=W||we===`failed_after_ready`,G=we===`failed`,Ee=z&&v&&!G,De;t[19]!==i||t[20]!==be||t[21]!==g?(De={content:i,metricTags:be,widgetRefSeenAtMs:g},t[19]=i,t[20]=be,t[21]=g,t[22]=De):De=t[22];let{cancelFirstPaintFrame:Oe,startRunMetrics:ke}=ht(De),Ae,K;t[23]!==W||t[24]!==d?(Ae=()=>{d?.(W)},K=[W,d],t[23]=W,t[24]=d,t[25]=Ae,t[26]=K):(Ae=t[25],K=t[26]),(0,Q.useEffect)(Ae,K);let je,Me;t[27]===Symbol.for(`react.memo_cache_sentinel`)?(je=()=>({clearCapturedConsoleMessages:()=>{P.current=[]},captureScreenshotDataUrl:async()=>(await C.current?.screenshot())?.imageBase64??null,focus:()=>{C.current?.focus()}}),Me=[],t[27]=je,t[28]=Me):(je=t[27],Me=t[28]),(0,Q.useImperativeHandle)(p,je,Me);let Ne;t[29]===Symbol.for(`react.memo_cache_sentinel`)?(Ne=()=>{j.current!=null&&(window.clearTimeout(j.current),j.current=null)},t[29]=Ne):Ne=t[29];let q=re(Ne),Pe;t[30]===Symbol.for(`react.memo_cache_sentinel`)?(Pe=()=>{M.current!=null&&(window.clearTimeout(M.current),M.current=null)},t[30]=Pe):Pe=t[30];let J=re(Pe),Y;t[31]!==W||t[32]!==d||t[33]!==H||t[34]!==z?(Y=()=>{if(!z||!W)return;let e=D.current,t=C.current;if(e==null||t?.updateAppBlockStream==null||T.current)return;let n=A.current;D.current=null,te.current=ut(),E.current=e.html,e.isFinal&&(T.current=!0);let r=()=>A.current===n?t.updateAppBlockStream?.(e)??Promise.resolve():Promise.resolve(),i=k.current,a=i==null?r():i.then(r);k.current=a,a.then(()=>{k.current===a&&(k.current=null),A.current===n&&(nr(e.html)&&O.current?.markFirstPaint(),e.isFinal&&(O.current?.reportPayloadSize(e.html),R({status:`finalized`,html:e.html})))},e=>{k.current===a&&(k.current=null),A.current===n&&(e instanceof DOMException&&e.name===`AbortError`||(Ce({signature:H,status:`failed`}),d?.(!1,`failure`)))})},t[31]=W,t[32]=d,t[33]=H,t[34]=z,t[35]=Y):Y=t[35];let Re=re(Y),Ve;t[36]!==ie||t[37]!==c||t[38]!==q||t[39]!==J||t[40]!==i||t[41]!==oe||t[42]!==se||t[43]!==ue||t[44]!==v||t[45]!==I||t[46]!==u||t[47]!==d||t[48]!==H||t[49]!==z||t[50]!==ke||t[51]!==b||t[52]!==x||t[53]!==ce?(Ve=()=>{if(!oe)return;ue&&R({status:`static`});let e=z&&C.current?.updateAppBlockStream!=null;if(z&&!e){v||R({status:`static`});return}w.current=!0,T.current=!1,te.current=null,E.current=null,D.current=null,O.current=null,k.current=null,J(),A.current+=1;let t=A.current;q(),Ce(null);let{expectReadySignal:n,html:r}=Jt(i,ce,I,ie,x,{loadTailwind:se,progressiveStreaming:e,styleMode:b}),a=!1,s=!1,l=!1,f=!1,p=!1,m=()=>A.current===t,h=ke(m,{deferFirstPaint:e,deferPayloadSize:e});e&&(O.current=h);let g=e=>{!c||u==null||!m()||(P.current=e,!f&&(f=!0,o.postTask(()=>{f=!1,m()&&u(P.current)},{priority:`background`})))},_=e=>{!m()||a||l||(a=!0,q(),h.markReady(e),!p&&(p=!0,o.postTask(()=>{p=!1,!(!m()||l)&&(s=!0,Ce({signature:H,status:`ready`}))},{priority:`background`})))},y=(e,t)=>{!m()||l||(l=!0,q(),Ce({signature:H,status:s?`failed_after_ready`:`failed`}),h.reportFailure(e,t),o.postTask(()=>{m()&&d?.(!1,`failure`)},{priority:`background`}))};P.current=[],g([]),j.current=window.setTimeout(()=>{y(`sandbox_eval`,`ready_timeout`)},Er),(async()=>{let e=C.current?.evalAsync({code:r,expectReadySignal:n,language:`html`});if(e==null){y(`sandbox_eval`,`missing_generator`);return}for(;;){let t=await e.next();if(t.done){m()&&!a&&y(`sandbox_eval`,`generator_completed_without_ready`);break}m()&&(g([...P.current,t.value]),t.value.type===Fe.ENVIRONMENT_STATUS&&t.value.status===Ie.RUNNING_CODE&&_(`running_code`),t.value.type===Fe.RUN_COMPLETE&&(t.value.wasFatalError?y(`runtime`,`fatal_runtime_error`):(_(`run_complete`),h.reportSuccess(`run_complete`))),await o.yield())}})().catch(e=>{m()&&(e instanceof DOMException&&e.name===`AbortError`||y(`sandbox_eval`,ft(e)))})},t[36]=ie,t[37]=c,t[38]=q,t[39]=J,t[40]=i,t[41]=oe,t[42]=se,t[43]=ue,t[44]=v,t[45]=I,t[46]=u,t[47]=d,t[48]=H,t[49]=z,t[50]=ke,t[51]=b,t[52]=x,t[53]=ce,t[54]=Ve):Ve=t[54];let X=re(Ve),Ue;t[55]!==q||t[56]!==J?(Ue=()=>{A.current+=1,w.current=!1,T.current=!1,E.current=null,D.current=null,O.current=null,k.current=null,q(),J(),Ce(null),Se(br)},t[55]=q,t[56]=J,t[57]=Ue):Ue=t[57];let We=re(Ue),Ge;t[58]===x?Ge=t[59]:(Ge=x===`inline`?{margin:-4,width:`calc(100% + ${Tr*2}px)`}:void 0,t[58]=x,t[59]=Ge);let Ke=Ge,qe;t[60]!==Oe||t[61]!==q||t[62]!==J||t[63]!==X?(qe=()=>{X();let e=C.current;return()=>{A.current+=1,O.current=null,k.current=null,q(),J(),Oe(),e?.stop()}},t[60]=Oe,t[61]=q,t[62]=J,t[63]=X,t[64]=qe):qe=t[64];let Je;t[65]!==Oe||t[66]!==q||t[67]!==J||t[68]!==oe||t[69]!==H||t[70]!==X||t[71]!==xe?(Je=[Oe,q,J,oe,H,X,xe],t[65]=Oe,t[66]=q,t[67]=J,t[68]=oe,t[69]=H,t[70]=X,t[71]=xe,t[72]=Je):Je=t[72],(0,Q.useEffect)(qe,Je);let Ye,Xe;t[73]!==v||t[74]!==X||t[75]!==z?(Ye=()=>{!z||v||w.current||C.current?.updateAppBlockStream!=null||X()},Xe=[v,X,z],t[73]=v,t[74]=X,t[75]=z,t[76]=Ye,t[77]=Xe):(Ye=t[76],Xe=t[77]),(0,Q.useEffect)(Ye,Xe);let Ze,Qe;if(t[78]!==J||t[79]!==i||t[80]!==Re||t[81]!==G||t[82]!==W||t[83]!==v||t[84]!==z?(Ze=()=>{if(!z||!W||G||T.current||C.current?.updateAppBlockStream==null)return;let e=v?tr(i):i;if(v&&(D.current?.html??E.current)===e)return;if(D.current={html:e,isFinal:!v},!v){J(),Re();return}let t=te.current;if(t==null){Re();return}let n=ut()-t;if(n>=Dr){Re();return}return M.current=window.setTimeout(()=>{M.current=null,Re()},Dr-n),J},Qe=[J,i,Re,G,W,v,z],t[78]=J,t[79]=i,t[80]=Re,t[81]=G,t[82]=W,t[83]=v,t[84]=z,t[85]=Ze,t[86]=Qe):(Ze=t[85],Qe=t[86]),(0,Q.useEffect)(Ze,Qe),!oe){let e;return t[87]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(vn,{}),t[87]=e):e=t[87],e}let $e=x===`inline`&&`min-h-[120px] overflow-visible`,et=x===`stage`&&`h-full min-h-0`,tt;t[88]!==$e||t[89]!==et?(tt=_(`flex w-full`,$e,et),t[88]=$e,t[89]=et,t[90]=tt):tt=t[90];let nt=x===`inline`?`flex-none`:`w-full`,rt=Ee&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,it;t[91]!==nt||t[92]!==rt?(it=_(`relative min-w-0`,nt,rt),t[91]=nt,t[92]=rt,t[93]=it):it=t[93];let at=`${xe}:${se?`network-enabled`:`network-disabled`}`,ot;t[94]===S?ot=t[95]:(ot=S.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[94]=S,t[95]=ot);let st=se?`deps-only`:`none`,ct=se?Or:kr,lt=Te?0:-1,dt=x===`inline`&&b===`open`,pt=x!==`stage`,mt=z?wr:Cr,gt;t[96]!==s||t[97]!==X||t[98]!==_e||t[99]!==at||t[100]!==ot||t[101]!==st||t[102]!==ct||t[103]!==lt||t[104]!==dt||t[105]!==pt||t[106]!==mt?(gt=(0,$.jsx)(Be,{id:s,title:ot,visuallyHidden:!1,networkPolicy:st,additionalResourceDomains:_e,sandboxPermissions:ct,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:lt,onRetryCodeRun:X,transparentBackground:dt,useIntrinsicHeight:pt,intrinsicHeightFallback:mt,ref:C},at),t[96]=s,t[97]=X,t[98]=_e,t[99]=at,t[100]=ot,t[101]=st,t[102]=ct,t[103]=lt,t[104]=dt,t[105]=pt,t[106]=mt,t[107]=gt):gt=t[107];let _t;t[108]!==G||t[109]!==Te||t[110]!==z?(_t=!Te&&!G&&!z?(0,$.jsx)(xr,{}):null,t[108]=G,t[109]=Te,t[110]=z,t[111]=_t):_t=t[111];let vt;t[112]!==G||t[113]!==We?(vt=G?(0,$.jsx)(Sr,{onRetry:We}):null,t[112]=G,t[113]=We,t[114]=vt):vt=t[114];let yt;t[115]!==Ke||t[116]!==Ee||t[117]!==it||t[118]!==gt||t[119]!==_t||t[120]!==vt?(yt=(0,$.jsxs)(`div`,{"aria-busy":Ee,className:it,style:Ke,children:[gt,_t,vt]}),t[115]=Ke,t[116]=Ee,t[117]=it,t[118]=gt,t[119]=_t,t[120]=vt,t[121]=yt):yt=t[121];let bt;t[122]===Ee?bt=t[123]:(bt=Ee?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:(0,$.jsx)(de,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[122]=Ee,t[123]=bt);let xt;return t[124]!==tt||t[125]!==yt||t[126]!==bt?(xt=(0,$.jsxs)(`div`,{className:tt,children:[yt,bt]}),t[124]=tt,t[125]=yt,t[126]=bt,t[127]=xt):xt=t[127],xt}function br(e){return e+1}function xr(){"use forget";let e=(0,Z.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsx)(w,{className:`icon-sm text-token-text-tertiary`}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex items-center justify-center gap-2 text-sm`,role:`status`,children:[t,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:(0,$.jsx)(de,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})})]}),e[1]=n):n=e[1],n}function Sr(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(de,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(de,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(l,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr=e((()=>{Z=z(),c(),Ue(),X(),Ye(),te(),k(),Ve(),x(),je(),Ne(),J(),Ae(),Re(),u(),ge(),Ze(),ye(),y(),v(),I(),me(),E(),A(),T(),Ge(),pe(),Y(),ce(),Q=n(L()),ue(),nn(),Tt(),ot(),_n(),be(),xn(),sn(),kn(),ct(),G(),Ot(),$n(),$=le(),Cr=432,wr=120,Tr=4,Er=15e3,Dr=100,Or=`allow-scripts allow-same-origin allow-forms`,kr=`allow-scripts allow-same-origin`,Ar=12e3,jr=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Mr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Nr=new Set([`svg`,`path`]),Pr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),Fr=/<script(?:\s|>)/i,Ir=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,Lr=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,Rr=e=>{"use forget";let t=(0,Z.c)(13),{canOpen:n,conversation:r,expandButtonRef:i,isReady:a,onOpen:o,target:s}=e,c;t[0]!==n||t[1]!==i||t[2]!==o?(c=n&&o!=null?(0,$.jsx)(vr,{ref:i,className:`shrink-0`,onClick:o}):null,t[0]=n,t[1]=i,t[2]=o,t[3]=c):c=t[3];let u=c;if(r==null)return u;let d;t[4]===s?d=t[5]:(d=s??{contentReferenceIndex:-1,messageId:``},t[4]=s,t[5]=d);let p=d,m=a&&s!=null,h;t[6]===u?h=t[7]:(h=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(f,{label:n,children:(0,$.jsx)(l,{type:`button`,icon:Pe,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),u]}):u},t[6]=u,t[7]=h);let g;return t[8]!==p||t[9]!==r||t[10]!==m||t[11]!==h?(g=(0,$.jsx)(Qe,{category:he.AppBlock,conversation:r,isReady:m,target:p,children:h}),t[8]=p,t[9]=r,t[10]=m,t[11]=h,t[12]=g):g=t[12],g}}));export{it as S,Tt as _,zr as a,ot as b,Gn as c,pn as d,_n as f,ut as g,Dt as h,er as i,Kn as l,Et as m,xr as n,qn as o,Ot as p,yr as r,$n as s,rr as t,fn as u,st as v,at as x,ct as y};
//# sourceMappingURL=e3b746a6-fquawmhmqh4fbk8y.js.map