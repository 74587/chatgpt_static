const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-jq8iz2zrcyxcjf1y.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-l3iadyutom9ijssn.js","assets/2340486e-i20axdnmh5jcl165.js","assets/conversation-small-k3kcucfbrrlc8z48.js","assets/30901919-k0yt3znywenjz0ub.js","assets/c470f5ab-ces9annrd8bm8e83.js","assets/0e5afe53-fawhd10tcf939cls.js","assets/conversation-small-ftje035n.css","assets/8b34dbc2-h9xyg2koz689ttr1.js","assets/82782bc9-bwv42r71q8ln7nht.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{$4 as r,$H as i,By as a,CW as o,Ck as s,IV as c,L0 as l,LF as u,MP as d,Ms as f,N0 as p,Nq as m,O3 as h,Ps as g,QH as _,RF as v,RV as y,T$ as b,T3 as x,VC as S,XZ as C,YC as w,ZC as ee,a3 as T,bk as te,c$ as E,cw as ne,d3 as D,eh as O,ga as k,i3 as A,jP as re,k3 as j,l$ as M,lw as N,mW as P,p3 as ie,qC as ae,tQ as F,th as oe,vk as se,w$ as I,wa as ce,yk as L,zy as le}from"./4813494d-l3iadyutom9ijssn.js";import{Cn as R,Sn as z,Tn as ue,bn as de,en as B,gn as V,wn as H,xn as U,yn as fe}from"./2340486e-i20axdnmh5jcl165.js";import{Bb as pe,CE as me,EE as W,Mon as he,Uyt as ge,Vyt as _e,b5 as ve,c5 as ye,d5 as be,dJt as G,g5 as xe,gE as Se,gu as Ce,h5 as we,hu as Te,jon as Ee,l5 as De,m5 as Oe,nr as ke,nxt as Ae,rr as je,rxt as Me,s5 as Ne,txt as Pe,u5 as K,uJt as Fe,x5 as Ie,y5 as q,zb as Le}from"./conversation-small-k3kcucfbrrlc8z48.js";import{$x as J,ME as Re,Qx as ze,iw as Be,jE as Ve,rw as He}from"./30901919-k0yt3znywenjz0ub.js";import{i as Ue,n as We,t as Ge}from"./8d846022-habmttvqwy4a5siq.js";import{a as Ke,i as qe,o as Je}from"./91969468-fb3zecjgwputuhbq.js";import{n as Ye,t as Xe}from"./4d271a7b-l9renxwhz4knyup4.js";import{n as Ze,r as Qe}from"./58bafdef-kt8jlgl358cvpmmv.js";import{a as Y,i as $e}from"./e01e2324-o3hyfdme659gesbv.js";import{i as X,t as et}from"./5dc32f04-nq2u8t11c892y4lk.js";import{n as tt,t as nt}from"./066a83b9-hegu3cqkisi6vnv1.js";import{n as rt,t as it}from"./f0f3c45c-glb0kj0cbqgbzrcm.js";import{i as at,n as ot,r as st,t as ct}from"./cc79834b-ns8qlje1nssaizu9.js";function lt(){return r(`2779568043`)}function ut(){return r(`3864712762`)}function dt(){return A(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var ft=e((()=>{T()}));function pt({messageId:e,refIndex:t}){return`appblock:${e}:${t}`}var mt=e((()=>{}));function ht({errorSource:e,errorType:t,networkPolicy:n,outcome:r,readySignal:i,renderMode:a,surface:o,variant:s}){let c={network_policy:n,surface:o};return e!=null&&(c.error_source=e),t!=null&&(c.error_type=t),r!=null&&(c.outcome=r),i!=null&&(c.ready_signal=i),a!=null&&(c.render_mode=a),s!=null&&(c.variant=s),c}function gt(){return typeof performance<`u`?performance.now():Date.now()}function _t(e){return new TextEncoder().encode(e).byteLength/1024}function vt(e){return e instanceof Error?e.name:`unknown`}function yt(e,t,n=1){j.count(x.APP_BLOCKS,e,ht(t),n)}function bt(e,t,n){j.hist(x.APP_BLOCKS,e,ht(n),t)}function xt({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,St.useRef)(gt()),i=(0,St.useRef)(null),a=(0,St.useRef)(!1),o=(0,St.useRef)(!1),s=L(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=L((n=e)=>{o.current||(o.current=!0,bt(Tt,_t(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:L((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=gt(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),yt(Ot,t);let _=(e,n)=>{f||(f=!0,yt(Dt,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=gt();bt(Et,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,bt(Ct,s-r.current,t),n!=null&&bt(At,s-n,t))},y=(e,t)=>{if(s(),typeof window>`u`){v(e,t);return}i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,t)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=gt(),g=n,bt(kt,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{!e()||p||(p=!0,s(),yt(wt,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt=e((()=>{h(),se(),St=n(R()),Ct=`app_block.first_render_time_ms`,wt=`app_block.load.failure`,Tt=`app_block.payload_size_kb`,Et=`app_block.ready_to_first_paint_ms`,Dt=`app_block.render.outcome`,Ot=`app_block.render.start`,kt=`app_block.sandbox_eval_to_ready_ms`,At=`app_block.widget_ref_to_first_paint_ms`}));function Mt(e){return e==="default"||e===`open`?e:null}function Nt({explicitStyleMode:e,libraryFileId:t}){return e??(t==null?`default`:`open`)}var Pt=e((()=>{})),Ft,It=e((()=>{Ft=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main{padding-block-start:12px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),Lt=e((()=>{})),Rt,zt=e((()=>{Lt(),Rt=`/cdn/assets/app-block-sandbox-foundation-c11hc9c6.css`})),Bt,Vt=e((()=>{Bt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main{padding-block-start:12px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){--app-block-slider-track:color-mix(in srgb, var(--viz-text) 16%, transparent);--app-block-slider-thumb-shadow:color-mix(in srgb, var(--viz-text) 18%, transparent);appearance:none;background:linear-gradient(var(--app-block-slider-track), var(--app-block-slider-track)) center / 100% 4px no-repeat;cursor:pointer;border:0;border-radius:9999px;width:100%;height:28px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.5}:where(input[type=range])::-webkit-slider-runnable-track{background:0 0;border:0;height:28px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;margin-top:5px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-webkit-slider-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-webkit-slider-thumb{transform:scale(1.06)}:where(input[type=range])::-moz-range-track{background:var(--app-block-slider-track);border:0;border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-progress{background:var(--viz-accent);border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-thumb{border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-moz-range-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-moz-range-thumb{transform:scale(1.06)}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),Ht=e((()=>{})),Ut,Wt=e((()=>{Ht(),Ut=`/cdn/assets/app-block-sandbox-grv3t07f.css`}));function Gt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Kt=e((()=>{}));function qt(e){return String.raw(rn||=Gt([`<script>
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
<\/script>`]))}));function pn(){"use forget";let e=(0,mn.useContext)(hn);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var mn,hn,gn=e((()=>{mn=n(R()),hn=(0,mn.createContext)(null)})),_n,vn=e((()=>{i(),ue(),_n=_(()=>H(()=>import(`./7aa2b76f-jq8iz2zrcyxcjf1y.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}));function yn(e){"use forget";let t=(0,Sn.c)(40),{additionalResourceDomains:n,children:r,code:i,conversationId:a,source:o,styleMode:s,title:c}=e,l=`app-block:${o.appBlockId}:${(0,Cn.useId)()}`,u=(0,Cn.useRef)(null),[d,f]=(0,Cn.useState)(null),p=o.appBlockId,m=o.libraryFileId,h=o.messageId,g=o.refIndex,_=a??null,v;t[0]!==_||t[1]!==p?(v={appBlockId:p,conversationId:_},t[0]=_,t[1]=p,t[2]=v):v=t[2];let y=v,b=M(Ne),x;t[3]!==b||t[4]!==y?(x=be(b,y),t[3]=b,t[4]=y,t[5]=x):x=t[5];let S=x,C=b?.appBlockId===p&&b.conversationId===_&&(b.isOriginalVersion===!0||b.versionNumber!=null),w=S||C,ee;t[6]!==b||t[7]!==l||t[8]!==y?(ee=Oe(b,y,l),t[6]=b,t[7]=l,t[8]=y,t[9]=ee):ee=t[9];let T=ee,te;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(te=()=>{u.current?.focus()},t[10]=te):te=t[10];let E=te,ne=d?.supportsAtomicMove?d:void 0,D;t[11]!==p||t[12]!==m||t[13]!==h||t[14]!==g?(D={appBlockId:p,libraryFileId:m,messageId:h,refIndex:g},t[11]=p,t[12]=m,t[13]=h,t[14]=g,t[15]=D):D=t[15];let O;t[16]!==n||t[17]!==i||t[18]!==s||t[19]!==ne||t[20]!==D||t[21]!==c?(O={additionalResourceDomains:n,code:i,focusOnClose:E,sharedPreview:ne,source:D,styleMode:s,title:c},t[16]=n,t[17]=i,t[18]=s,t[19]=ne,t[20]=D,t[21]=c,t[22]=O):O=t[22];let k=O,A,re;t[23]!==k||t[24]!==S||t[25]!==y?(A=()=>{S&&we(y,k)},re=[k,S,y],t[23]=k,t[24]=S,t[25]=y,t[26]=A,t[27]=re):(A=t[26],re=t[27]),(0,Cn.useEffect)(A,re);let j;t[28]!==k||t[29]!==T||t[30]!==y?(j=()=>{ye(y,T,k)},t[28]=k,t[29]=T,t[30]=y,t[31]=j):j=t[31];let N=j,P;t[32]!==w||t[33]!==C||t[34]!==N||t[35]!==d?(P={isExpanded:w,isViewingHistoricalVersion:C,openExpandedView:N,setSharedPreview:f,sharedPreview:d,triggerRef:u},t[32]=w,t[33]=C,t[34]=N,t[35]=d,t[36]=P):P=t[36];let ie=P,ae;return t[37]!==r||t[38]!==ie?(ae=(0,wn.jsx)(hn.Provider,{value:ie,children:r}),t[37]=r,t[38]=ie,t[39]=ae):ae=t[39],ae}function bn(e){"use forget";let t=(0,Sn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,headerTitleContent:o,title:s}=e,c=st(),l;t[0]===i?l=t[1]:(l=()=>i==null?0:Te(i).height$()??0,t[0]=i,t[1]=l);let u=M(l),d=c===`fullscreen`&&n&&i!=null?u:0,f=o??s,p;t[2]===f?p=t[3]:(p=(0,wn.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:f}),t[2]=f,t[3]=p);let m;t[4]!==a||t[5]!==p?(m=(0,wn.jsxs)(ct.Header,{className:`pb-1`,children:[p,a]}),t[4]=a,t[5]=p,t[6]=m):m=t[6];let h;t[7]===d?h=t[8]:(h={paddingBottom:d},t[7]=d,t[8]=h);let g;t[9]===r?g=t[10]:(g=(0,wn.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=g);let _;t[11]!==h||t[12]!==g?(_=(0,wn.jsx)(ct.Body,{className:`bg-token-bg-primary overflow-hidden`,style:h,children:g}),t[11]=h,t[12]=g,t[13]=_):_=t[13];let v;return t[14]!==m||t[15]!==_?(v=(0,wn.jsxs)(wn.Fragment,{children:[m,_]}),t[14]=m,t[15]=_,t[16]=v):v=t[16],v}function xn(e){"use forget";let t=(0,Sn.c)(5),{conversation:n,paneId:r}=e,i=at(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,wn.jsx)(_n,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var Sn,Cn,wn,Tn=e((()=>{Sn=B(),Ce(),ot(),E(),Cn=n(R()),gn(),K(),vn(),wn=z()}));function En(){"use forget";let e=(0,Dn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,On.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,On.jsx)(V,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var Dn,On,kn=e((()=>{Dn=B(),de(),On=z()}));function An(e){"use forget";let t=(0,Mn.c)(38),n=U(),r;t[0]!==n||t[1]!==e?(r=e?n.formatMessage(In.generatingApp,{title:e}):n.formatMessage(In.creatingInterface),t[0]=n,t[1]=e,t[2]=r):r=t[2];let i=r,a;t[3]===n?a=t[4]:(a=n.formatMessage(In.sketchingInterface),t[3]=n,t[4]=a);let o;t[5]===n?o=t[6]:(o=n.formatMessage(In.shapingLayout),t[5]=n,t[6]=o);let s;t[7]===n?s=t[8]:(s=n.formatMessage(In.arrangingPieces),t[7]=n,t[8]=s);let c;t[9]===n?c=t[10]:(c=n.formatMessage(In.polishingVisuals),t[9]=n,t[10]=c);let l;t[11]===n?l=t[12]:(l=n.formatMessage(In.tuningInputs),t[11]=n,t[12]=l);let u;t[13]===n?u=t[14]:(u=n.formatMessage(In.addingInteractivity),t[13]=n,t[14]=u);let d;t[15]===n?d=t[16]:(d=n.formatMessage(In.wiringControls),t[15]=n,t[16]=d);let f;t[17]===n?f=t[18]:(f=n.formatMessage(In.composingInteractions),t[17]=n,t[18]=f);let p;t[19]===n?p=t[20]:(p=n.formatMessage(In.calibratingPreview),t[19]=n,t[20]=p);let m;t[21]===n?m=t[22]:(m=n.formatMessage(In.refiningDetails),t[21]=n,t[22]=m);let h;t[23]!==i||t[24]!==a||t[25]!==m||t[26]!==o||t[27]!==s||t[28]!==c||t[29]!==l||t[30]!==u||t[31]!==d||t[32]!==f||t[33]!==p?(h=[i,a,o,s,c,l,u,d,f,p,m],t[23]=i,t[24]=a,t[25]=m,t[26]=o,t[27]=s,t[28]=c,t[29]=l,t[30]=u,t[31]=d,t[32]=f,t[33]=p,t[34]=h):h=t[34];let g=h,[_,v]=(0,Nn.useState)(0),y,b;return t[35]===g.length?(y=t[36],b=t[37]):(y=()=>{let e=window.setInterval(()=>{v(e=>Math.min(e+1,g.length-1))},Fn);return()=>{window.clearInterval(e)}},b=[g.length],t[35]=g.length,t[36]=y,t[37]=b),(0,Nn.useEffect)(y,b),g[_]??g[0]??``}function jn(e){"use forget";let t=(0,Mn.c)(2),{title:n}=e,r=An(n),i;return t[0]===r?i=t[1]:(i=(0,Pn.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,role:`status`,children:(0,Pn.jsx)(et,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:r})}),t[0]=r,t[1]=i),i}var Mn,Nn,Pn,Fn,In,Ln=e((()=>{Mn=B(),X(),Nn=n(R()),de(),Pn=z(),Fn=2800,In=fe({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}})}));function Rn(e){let t=new Map,n=new Map,r=null,i=null;for(let a of e){let e=a.metadata?.content_references;if(Array.isArray(e)&&e.forEach((e,r)=>{let i=Bn({contentReference:e,messageId:a.id,refIndex:r});i!=null&&(t.set(i.appBlockId,i),i.libraryFileId!=null&&n.set(i.libraryFileId,i.appBlockId))}),a.author.role===p.User){(a.metadata?.attachments??[]).forEach((e,r)=>{let i=zn({attachment:e,messageId:a.id,refIndex:r});i==null||i.libraryFileId==null||n.has(i.libraryFileId)||(t.set(i.appBlockId,i),n.set(i.libraryFileId,i.appBlockId))});let e=a.metadata?.focused_artifact;if(e!=null){let n=e.type===Zn?t.get(e.artifact_id)??null:null;r=n!=null&&n.messageId===e.source_message_id&&n.refIndex===e.source_ref_index&&(n.libraryFileId==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e.library_file_id}else{let e=a.metadata?.open_in_app_block_view,n=e==null?null:t.get(e.app_block_id)??null;r=e!=null&&n!=null&&n.messageId===e.message_id&&n.refIndex===e.ref_index&&(n.libraryFileId==null||e.library_file_id==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e?.library_file_id??null}}let o=m(a);if(o?.status!==`created`)continue;let s=n.get(o.libraryFileId),c=s==null?null:t.get(s)??null;if(c==null&&o.origin!=null){let e=o.origin.messageId,n=[...t.values()].filter(t=>t.messageId===e);c=n.length===1?n[0]:null}c==null&&s==null&&r!=null&&r.libraryFileId==null&&(i==null||i===o.libraryFileId)&&(c=r),c!=null&&(c.libraryFileId==null&&c.content!=null&&Jn(a)||(n.set(o.libraryFileId,c.appBlockId),t.set(c.appBlockId,{...c,content:null,currentContentFileId:o.newContentFileId,latestPatchMessageId:a.id,libraryFileId:o.libraryFileId,libraryFileVersionNumber:o.newVersionNumber})))}return t}function zn({attachment:e,messageId:t,refIndex:n}){return e.library_artifact_type!==Zn||e.library_file_id==null?null:{appBlockId:pt({messageId:t,refIndex:n}),content:null,currentContentFileId:e.id??null,entrypoint:`index.html`,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:e.library_file_id,libraryFileName:e.name,libraryFileVersionNumber:null,mimeType:e.mime_type??null,messageId:t,refIndex:n,styleMode:null,title:e.name.replace(/\.html$/i,``)}}function Bn({contentReference:e,messageId:t,refIndex:n}){if(typeof e!=`object`||!e||!(`type`in e)||!(`category`in e)||e.type!==Qn||e.category!==Zn||!(`data`in e))return null;let r=e.data;if(typeof r!=`object`||!r)return null;let i=Vn(r,`content`),a=Vn(r,`entrypoint`)??`index.html`,o=Kn(r,a),s=Un(o,`library_file_id`);return i==null&&s==null?null:{appBlockId:Vn(r,`app_block_id`)??pt({messageId:t,refIndex:n}),bundleVersion:Hn(r,`bundle_version`)??void 0,content:i,currentContentFileId:Un(o,`current_content_file_id`),entrypoint:a,iconSvg:Vn(r,`icon_svg`),language:qn(),latestPatchMessageId:null,libraryFileId:s,libraryFileName:Un(o,`library_file_name`),libraryFileVersionNumber:Gn(Wn(o,`library_file_version_number`)),mimeType:Un(o,`mime_type`),messageId:t,refIndex:n,styleMode:Mt(Vn(r,`style_mode`)),title:Vn(r,`display_name`)??Vn(r,`title`)}}function Vn(e,t){let n=null;return t===`app_block_id`&&`app_block_id`in e&&(n=e.app_block_id),t===`content`&&`content`in e&&(n=e.content),t===`current_content_file_id`&&`current_content_file_id`in e&&(n=e.current_content_file_id),t===`display_name`&&`display_name`in e&&(n=e.display_name),t===`entrypoint`&&`entrypoint`in e&&(n=e.entrypoint),t===`icon_svg`&&`icon_svg`in e&&(n=e.icon_svg),t===`library_file_id`&&`library_file_id`in e&&(n=e.library_file_id),t===`library_file_name`&&`library_file_name`in e&&(n=e.library_file_name),t===`mime_type`&&`mime_type`in e&&(n=e.mime_type),t===`path`&&`path`in e&&(n=e.path),t===`style_mode`&&`style_mode`in e&&(n=e.style_mode),t===`title`&&`title`in e&&(n=e.title),typeof n==`string`&&n.trim()!==``?n:null}function Hn(e,t){if(t===`bundle_version`&&`bundle_version`in e){let t=e.bundle_version;if(typeof t==`number`)return t}if(t===`library_file_version_number`&&`library_file_version_number`in e){let t=e.library_file_version_number;if(typeof t==`number`)return t}return null}function Un(e,t){return typeof e!=`object`||!e?null:Vn(e,t)}function Wn(e,t){return typeof e!=`object`||!e?null:Hn(e,t)}function Gn(...e){for(let t of e)if(t!=null)return t;return null}function Kn(e,t){if(!(`files`in e)||!Array.isArray(e.files))return null;let n=null;for(let r of e.files)if(!(typeof r!=`object`||!r)&&Vn(r,`library_file_id`)!=null&&(n??=r,Vn(r,`path`)===t))return r;return n}function qn(){return`html`}function Jn(e){let t=e.metadata?.shared_conversation_id;return typeof t==`string`&&t.trim()!==``}function Yn(e,t){return e.appBlockId===t.appBlockId&&e.bundleVersion===t.bundleVersion&&e.content===t.content&&e.currentContentFileId===t.currentContentFileId&&e.entrypoint===t.entrypoint&&e.iconSvg===t.iconSvg&&e.language===t.language&&e.latestPatchMessageId===t.latestPatchMessageId&&e.libraryFileId===t.libraryFileId&&e.libraryFileName===t.libraryFileName&&e.libraryFileVersionNumber===t.libraryFileVersionNumber&&e.mimeType===t.mimeType&&e.messageId===t.messageId&&e.refIndex===t.refIndex&&e.styleMode===t.styleMode&&e.title===t.title}function Xn(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e){let e=t.get(n);if(e==null||!Yn(r,e))return!1}return!0}var Zn,Qn,$n,er=e((()=>{l(),w(),g(),Se(),C(),mt(),Pt(),Zn=`app_block`,Qn=`client_defined_widget`,$n=S(e=>F(()=>Rn(f(e).flatMap(e=>e.messages)),{equals:Xn}))}));function tr({appBlockId:e,conversation:t}){return t==null?null:$n(t).get(e)??null}function nr(e){return e?.serverId$()??void 0}function rr({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:Ae(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function ir({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return Pe({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:y(e)?`missing`:`failed`})}),()=>{a.abort()}}function ar({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??or({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function or({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var sr=e((()=>{c(),Me(),er()})),cr=t({AppBlock:()=>dr,AppBlockPreviewLoadingState:()=>Ar,AppBlockSandboxPreview:()=>Dr});function lr(e){let t=e.search(Gr),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function ur(e){let t=lr(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(Kr))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(qr)!=null}function dr(e){"use forget";let t=(0,Z.c)(116),{additionalResourceDomains:n,appBlockId:r,authoritativeCode:i,authoritativeSource:a,code:s,collapseWhenSuperseded:c,currentContentFileId:l,displayMode:u,id:d,captureConsoleMessages:f,clientThreadId:p,iconSvg:m,isStreaming:h,isTurnStreaming:g,libraryFileId:_,libraryFileVersionNumber:v,messageId:y,onConsoleMessagesChange:b,onReadyChange:x,progressiveStreaming:S,ref:C,refIndex:w,styleMode:T,title:te,variant:E,widgetRefSeenAtMs:ne}=e,D=c===void 0||c,O=f!==void 0&&f,k=h!==void 0&&h,A=g!==void 0&&g,re=S!==void 0&&S,j=E===void 0?`inline`:E,N=ee(),P;t[0]===N?P=t[1]:(P=()=>N!=null&&he(N),t[0]=N,t[1]=P);let ie=M(P),F;t[2]!==p||t[3]!==N?(F=p==null?N:ae(p),t[2]=p,t[3]=N,t[4]=F):F=t[4];let oe=F,se=y!=null&&w!=null?pt({messageId:y,refIndex:w}):void 0,I=r??se??pt({messageId:y??d,refIndex:w??0}),L=M(()=>me({conversation:N??null,instanceId:I,messageId:y,refIndex:w}))??u,le=M(()=>a!=null||L!=null?null:tr({appBlockId:I,conversation:N??null})),R=a??le,z;t[5]===N?z=t[6]:(z=()=>nr(N??null),t[5]=N,t[6]=z);let ue=M(z),de=o(N?.id),B=ue??de,V;t[7]!==l||t[8]!==_||t[9]!==v||t[10]!==B||t[11]!==R?(V=rr({currentContentFileId:l,libraryFileId:_,libraryFileVersionNumber:v,serverThreadId:B,source:R}),t[7]=l,t[8]=_,t[9]=v,t[10]=B,t[11]=R,t[12]=V):V=t[12];let H=V,[U,fe]=(0,Q.useState)(null),[pe,W]=(0,Q.useState)(0),ge;t[13]!==pe||t[14]!==H.libraryContentKey?(ge=[H.libraryContentKey,pe],t[13]=pe,t[14]=H.libraryContentKey,t[15]=ge):ge=t[15];let _e=ge.join(`\0`),ve,be;t[16]!==i||t[17]!==_e||t[18]!==H.contentFileId||t[19]!==H.libraryFileId||t[20]!==L||t[21]!==B?(ve=()=>{if(!(i!=null||L===`collapsed`))return ir({contentFileId:H.contentFileId,libraryContentKey:_e,libraryFileId:H.libraryFileId,onContentStateChange:fe,serverThreadId:B})},be=[i,H.contentFileId,H.libraryFileId,_e,L,B],t[16]=i,t[17]=_e,t[18]=H.contentFileId,t[19]=H.libraryFileId,t[20]=L,t[21]=B,t[22]=ve,t[23]=be):(ve=t[22],be=t[23]),(0,Q.useEffect)(ve,be);let G=ar({appBlockId:I,contentFileId:H.contentFileId,currentContentFileId:l,libraryContent:U,libraryContentKey:_e,libraryFileId:_,libraryFileVersionNumber:v,source:R}),xe=U?.key===_e?U:null,Se;t[24]!==G?.libraryFileId||t[25]!==_?(Se=()=>De(G?.libraryFileId??_),t[24]=G?.libraryFileId,t[25]=_,t[26]=Se):Se=t[26];let Ce=M(Se),we=G?.libraryFileVersionNumber??v,Te=Ce!=null&&(we==null||Ce.versionNumber>=we)?Ce.code:void 0,Ee=Te??i??G?.content??s??null,Oe=G?.iconSvg??m??null,ke=G?.libraryFileId??_,Ae=ke==null&&i==null&&Te==null&&l==null&&R?.currentContentFileId==null&&R?.latestPatchMessageId==null,je;t[27]!==Ae||t[28]!==s||t[29]!==y||t[30]!==Ee||t[31]!==w||t[32]!==R?(je=Ae?R==null?y!=null&&w!=null&&s!=null&&Ee===s?{messageId:y,refIndex:w}:null:R.messageId.length>0&&R.content!=null&&Ee===R.content?{messageId:R.messageId,refIndex:R.refIndex}:null:null,t[27]=Ae,t[28]=s,t[29]=y,t[30]=Ee,t[31]=w,t[32]=R,t[33]=je):je=t[33];let Me=je,Ne=j===`artifact`,K=G?.styleMode??T??(Ne&&re?`open`:void 0),Fe;t[34]!==ke||t[35]!==K?(Fe=Nt({explicitStyleMode:K,libraryFileId:ke}),t[34]=ke,t[35]=K,t[36]=Fe):Fe=t[36];let Ie=Fe,q=G?.title??te,J;t[37]===N?J=t[38]:(J=()=>N!=null&&ce(N)?`work`:`chat`,t[37]=N,t[38]=J);let Re=M(J),ze;t[39]===Symbol.for(`react.memo_cache_sentinel`)?(ze=dt(),t[39]=ze):ze=t[39];let Be=ze,Ve=re,He=Ne&&Ie===`open`,Ue=L===`collapsed`||L==null&&D&&G?.latestPatchMessageId!=null&&G.latestPatchMessageId!==y,We=s!=null||l!=null,Ge;t[40]!==p||t[41]!==s||t[42]!==N?.id||t[43]!==l||t[44]!==I||t[45]!==v||t[46]!==y||t[47]!==ke||t[48]!==Ie||t[49]!==q||t[50]!==w||t[51]!==B||t[52]!==R?.messageId?(Ge=async e=>{let t=s;if(t==null&&l!=null)try{t=await Pe({abortSignal:new AbortController().signal,fileId:l,serverThreadId:B})}catch{return}t!=null&&ye({appBlockId:I,conversationId:N?.id??p??null,isOriginalVersion:!0,versionNumber:v??void 0},`app-block:${I}:original`,{code:t,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:I,libraryFileId:ke,messageId:R?.messageId??y,refIndex:w},styleMode:Ie,title:q})},t[40]=p,t[41]=s,t[42]=N?.id,t[43]=l,t[44]=I,t[45]=v,t[46]=y,t[47]=ke,t[48]=Ie,t[49]=q,t[50]=w,t[51]=B,t[52]=R?.messageId,t[53]=Ge):Ge=t[53],N?.id,R?.messageId;let Ke=Ge;if(k&&!Ve){let e;return t[54]===q?e=t[55]:(e=(0,$.jsx)(jn,{title:q}),t[54]=q,t[55]=e),e}let qe=ie&&s!=null;if(xe?.status===`missing`&&!qe)return null;if(Ue){let e=We?Ke:void 0,n;return t[56]!==q||t[57]!==e?(n=(0,$.jsx)(Tr,{onView:e,title:q}),t[56]=q,t[57]=e,t[58]=n):n=t[58],n}let Je=Ee??(Ve&&k?``:null);if(Je==null){if(G?.latestPatchMessageId!=null){let e=N?.id??p,n=xe?.status===`failed`,r;t[59]===W?r=t[60]:(r=()=>W(fr),t[59]=W,t[60]=r);let i;return t[61]!==I||t[62]!==Ne||t[63]!==Oe||t[64]!==q||t[65]!==e||t[66]!==n||t[67]!==r?(i=(0,$.jsx)(gr,{appBlockId:I,conversationId:e,hasFailed:n,iconSvg:Oe,onRetry:r,showHeader:Ne,title:q}),t[61]=I,t[62]=Ne,t[63]=Oe,t[64]=q,t[65]=e,t[66]=n,t[67]=r,t[68]=i):i=t[68],i}let e;return t[69]===q?e=t[70]:(e=(0,$.jsx)(jn,{title:q}),t[69]=q,t[70]=e),e}let Ye;t[71]!==p||t[72]!==Re||t[73]!==k||t[74]!==A||t[75]!==y||t[76]!==q||t[77]!==w?(Ye=!k&&!A&&p!=null&&y!=null&&w!=null&&lt()?{reference:{clientThreadId:p,messageId:y,referenceIndex:w},target:{kind:`app_block`,metadata:{...q==null?{}:{title:q},tab:Re}}}:void 0,t[71]=p,t[72]=Re,t[73]=k,t[74]=A,t[75]=y,t[76]=q,t[77]=w,t[78]=Ye):Ye=t[78];let Xe=Ye,Ze=N?.id??p,Qe=R?.messageId??y,Y;t[79]!==I||t[80]!==ke||t[81]!==w||t[82]!==Qe?(Y={appBlockId:I,libraryFileId:ke,messageId:Qe,refIndex:w},t[79]=I,t[80]=ke,t[81]=w,t[82]=Qe,t[83]=Y):Y=t[83];let $e=He&&Be&&!k,X=N?.id??p,et;t[84]===Me?et=t[85]:(et=Me==null?void 0:{contentReferenceIndex:Me.refIndex,messageId:Me.messageId,widgetName:Le.AppBlock},t[84]=Me,t[85]=et);let tt;t[86]!==n||t[87]!==O||t[88]!==I||t[89]!==Xe||t[90]!==d||t[91]!==k||t[92]!==b||t[93]!==x||t[94]!==Oe||t[95]!==Ie||t[96]!==q||t[97]!==C||t[98]!==Je||t[99]!==oe||t[100]!==Ve||t[101]!==He||t[102]!==$e||t[103]!==X||t[104]!==et||t[105]!==j||t[106]!==ne?(tt=(0,$.jsx)(pr,{additionalResourceDomains:n,appBlockId:I,canOpen:$e,captureConsoleMessages:O,clientThreadId:X,code:Je,feedback:Xe,iconSvg:Oe,id:d,isStreaming:k,onConsoleMessagesChange:b,onReadyChange:x,progressiveStreaming:Ve,ref:C,showArtifactCard:He,shareConversation:oe,shareTarget:et,styleMode:Ie,title:q,variant:j,widgetRefSeenAtMs:ne}),t[86]=n,t[87]=O,t[88]=I,t[89]=Xe,t[90]=d,t[91]=k,t[92]=b,t[93]=x,t[94]=Oe,t[95]=Ie,t[96]=q,t[97]=C,t[98]=Je,t[99]=oe,t[100]=Ve,t[101]=He,t[102]=$e,t[103]=X,t[104]=et,t[105]=j,t[106]=ne,t[107]=tt):tt=t[107];let nt;return t[108]!==n||t[109]!==Ie||t[110]!==q||t[111]!==Je||t[112]!==Ze||t[113]!==Y||t[114]!==tt?(nt=(0,$.jsx)(yn,{additionalResourceDomains:n,code:Je,conversationId:Ze,styleMode:Ie,source:Y,title:q,children:tt}),t[108]=n,t[109]=Ie,t[110]=q,t[111]=Je,t[112]=Ze,t[113]=Y,t[114]=tt,t[115]=nt):nt=t[115],nt}function fr(e){return e+1}function pr(e){"use forget";let t=(0,Z.c)(67),{additionalResourceDomains:n,appBlockId:r,canOpen:i,captureConsoleMessages:a,clientThreadId:o,code:s,feedback:c,iconSvg:l,id:u,isStreaming:d,onConsoleMessagesChange:f,onReadyChange:p,progressiveStreaming:m,ref:h,shareConversation:g,shareTarget:_,showArtifactCard:v,styleMode:y,title:b,variant:x,widgetRefSeenAtMs:S}=e,{isExpanded:C,isViewingHistoricalVersion:w,openExpandedView:ee,setSharedPreview:T,sharedPreview:te,triggerRef:E}=pn(),ne=(0,Q.useContext)(ke),D;t[0]===n?D=t[1]:(D=n??[],t[0]=n,t[1]=D);let O;t[2]!==s||t[3]!==u||t[4]!==y||t[5]!==D?(O=[u,y,s,...D],t[2]=s,t[3]=u,t[4]=y,t[5]=D,t[6]=O):O=t[6];let k=O.join(`\0`),[A,re]=(0,Q.useState)(null),j=!d&&A===k,M;t[7]===ee?M=t[8]:(M=()=>{Fe(),ee()},t[7]=ee,t[8]=M);let P=M,ie;t[9]!==p||t[10]!==k?(ie=(e,t)=>{re(e?k:null),p?.(e,t)},t[9]=p,t[10]=k,t[11]=ie):ie=t[11];let ae=ie,F;t[12]!==n||t[13]!==r||t[14]!==a||t[15]!==o||t[16]!==s||t[17]!==ae||t[18]!==u||t[19]!==d||t[20]!==f||t[21]!==m||t[22]!==h||t[23]!==y||t[24]!==x||t[25]!==S?(F=(0,$.jsx)(Dr,{appBlockId:r,additionalResourceDomains:n,code:s,id:u,isStreaming:d,captureConsoleMessages:a,clientThreadId:o,onConsoleMessagesChange:f,onReadyChange:ae,presentationSurface:`inline`,progressiveStreaming:m,ref:h,styleMode:y,variant:x,widgetRefSeenAtMs:S}),t[12]=n,t[13]=r,t[14]=a,t[15]=o,t[16]=s,t[17]=ae,t[18]=u,t[19]=d,t[20]=f,t[21]=m,t[22]=h,t[23]=y,t[24]=x,t[25]=S,t[26]=F):F=t[26];let oe;t[27]!==ne||t[28]!==F?(oe={element:F,sandboxPolicy:ne},t[27]=ne,t[28]=F,t[29]=oe):oe=t[29];let se=oe,I;t[30]===se?I=t[31]:(I=()=>se,t[30]=se,t[31]=I);let ce=L(I),le;t[32]!==r||t[33]!==o||t[34]!==ce||t[35]!==T?(le=e=>{if(e==null)return;let{preview:t,sourceToken:n}=xe({appBlockId:r,content:ce(),conversationId:o??null,inlineContainer:e});return T(t),()=>{let e=Ne();ve(t,n,e?.sharedPreview===t)}},t[32]=r,t[33]=o,t[34]=ce,t[35]=T,t[36]=le):le=t[36];let R=le,z,ue;t[37]!==se||t[38]!==te?(ue=()=>{te!=null&&Ie(te,se)},z=[se,te],t[37]=se,t[38]=te,t[39]=z,t[40]=ue):(z=t[39],ue=t[40]),N(ue,z);let de=w?P:void 0,B;t[41]!==l||t[42]!==de||t[43]!==b||t[44]!==E?(B=(0,$.jsx)(yr,{iconSvg:l,onOpen:de,openButtonRef:E,title:b}),t[41]=l,t[42]=de,t[43]=b,t[44]=E,t[45]=B):B=t[45];let V=C?B:null,H;t[46]===R?H=t[47]:(H=(0,$.jsx)(`div`,{ref:R,className:`w-full`}),t[46]=R,t[47]=H);let U;t[48]!==i||t[49]!==c||t[50]!==P||t[51]!==l||t[52]!==j||t[53]!==d||t[54]!==g||t[55]!==_||t[56]!==v||t[57]!==H||t[58]!==b||t[59]!==E?(U=(0,$.jsx)(hr,{canOpen:i,expandButtonRef:E,feedback:c,iconSvg:l,isShareReady:j,shareConversation:g,shareTarget:_,isStreaming:d,showArtifactCard:v,title:b,onOpen:P,children:H}),t[48]=i,t[49]=c,t[50]=P,t[51]=l,t[52]=j,t[53]=d,t[54]=g,t[55]=_,t[56]=v,t[57]=H,t[58]=b,t[59]=E,t[60]=U):U=t[60];let fe;t[61]!==C||t[62]!==U?(fe=(0,$.jsx)(`div`,{hidden:C,children:U}),t[61]=C,t[62]=U,t[63]=fe):fe=t[63];let pe;return t[64]!==V||t[65]!==fe?(pe=(0,$.jsxs)($.Fragment,{children:[V,fe]}),t[64]=V,t[65]=fe,t[66]=pe):pe=t[66],pe}function mr(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:o,titleClassName:s}=e,c;t[0]===r?c=t[1]:(c=I(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=c);let l=s??`truncate text-base font-semibold`,u;t[2]===l?u=t[3]:(u=I(`text-token-text-primary`,l),t[2]=l,t[3]=u);let d=o??i,f;t[4]!==u||t[5]!==d?(f=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:u,children:d})}),t[4]=u,t[5]=d,t[6]=f):f=t[6];let p;t[7]!==a||t[8]!==f?(p=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,f]}),t[7]=a,t[8]=f,t[9]=p):p=t[9];let m;return t[10]!==n||t[11]!==c||t[12]!==p?(m=(0,$.jsxs)(`div`,{className:c,children:[p,n]}),t[10]=n,t[11]=c,t[12]=p,t[13]=m):m=t[13],m}function hr(e){"use forget";let t=(0,Z.c)(20),{canOpen:n,children:r,expandButtonRef:i,feedback:a,iconSvg:o,isShareReady:s,isStreaming:c,onOpen:l,shareConversation:u,shareTarget:d,showArtifactCard:f,title:p}=e,m=U(),h;t[0]===m?h=t[1]:(h=m.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=m,t[1]=h);let g=h,_;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==g||t[6]!==o||t[7]!==s||t[8]!==c||t[9]!==l||t[10]!==u||t[11]!==d||t[12]!==f||t[13]!==p?(_=f?(0,$.jsxs)(`div`,{className:I(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,c&&`cursor-wait`),"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)(mr,{action:(0,$.jsx)(Jr,{canOpen:n,conversation:u,expandButtonRef:i,isReady:s,onOpen:l,target:d}),className:`min-h-13 px-4 py-2`,fallbackTitle:g,leading:c?(0,$.jsx)(re,{className:`icon-md text-token-text-primary shrink-0`}):(0,$.jsx)(xr,{iconSvg:o}),title:p}),(0,$.jsx)(`div`,{children:r})]}):r,t[2]=n,t[3]=r,t[4]=i,t[5]=g,t[6]=o,t[7]=s,t[8]=c,t[9]=l,t[10]=u,t[11]=d,t[12]=f,t[13]=p,t[14]=_):_=t[14];let v;t[15]===a?v=t[16]:(v=a==null?null:(0,$.jsx)(_r,{...a}),t[15]=a,t[16]=v);let y;return t[17]!==_||t[18]!==v?(y=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[_,v]}),t[17]=_,t[18]=v,t[19]=y):y=t[19],y}function gr(e){"use forget";let t=(0,Z.c)(17),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:o,showHeader:s,title:c}=e,l=M(Ne),u=U(),d;t[0]===u?d=t[1]:(d=u.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=u,t[1]=d);let f=d;if(be(l,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==c?(e=(0,$.jsx)(yr,{iconSvg:a,title:c}),t[2]=a,t[3]=c,t[4]=e):e=t[4],e}let p;t[5]!==f||t[6]!==a||t[7]!==s||t[8]!==c?(p=s?(0,$.jsx)(mr,{className:`mb-2`,fallbackTitle:f,leading:(0,$.jsx)(xr,{iconSvg:a}),title:c}):null,t[5]=f,t[6]=a,t[7]=s,t[8]=c,t[9]=p):p=t[9];let m;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(m={minHeight:Mr},t[10]=m):m=t[10];let h;t[11]!==i||t[12]!==o?(h=(0,$.jsx)(`div`,{className:`relative w-full`,style:m,children:i?(0,$.jsx)(jr,{onRetry:o}):(0,$.jsx)(Ar,{})}),t[11]=i,t[12]=o,t[13]=h):h=t[13];let g;return t[14]!==p||t[15]!==h?(g=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[p,h]}),t[14]=p,t[15]=h,t[16]=g):g=t[16],g}function _r(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(M(vr))return null;let o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(nt,{}),t[0]=o):o=t[0];let s;return t[1]!==i||t[2]!==n||t[3]!==r?(s=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)($e,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:o})}),t[1]=i,t[2]=n,t[3]=r,t[4]=s):s=t[4],s}function vr(){return Qe()}function yr(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=U(),s,c,l,u,d;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),d=`not-prose relative clear-both my-4 w-full max-w-full`,u=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=mr,l=r==null?void 0:(0,$.jsx)(le,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(V,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=l,t[7]=u,t[8]=d):(s=t[4],c=t[5],l=t[6],u=t[7],d=t[8]);let f;t[9]===n?f=t[10]:(f=(0,$.jsx)(br,{iconSvg:n}),t[9]=n,t[10]=f);let p;t[11]!==s||t[12]!==c||t[13]!==l||t[14]!==f||t[15]!==a?(p=(0,$.jsx)(s,{action:l,className:`w-full`,fallbackTitle:c,leading:f,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=l,t[14]=f,t[15]=a,t[16]=p):p=t[16];let m;t[17]!==u||t[18]!==p?(m=(0,$.jsx)(`div`,{className:u,children:p}),t[17]=u,t[18]=p,t[19]=m):m=t[19];let h;return t[20]!==d||t[21]!==m?(h=(0,$.jsx)(`div`,{className:d,children:m}),t[20]=d,t[21]=m,t[22]=h):h=t[22],h}function br(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(xr,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function xr(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=Sr(r),t[0]=r,t[1]=a);let o=a,s;return t[2]!==i||t[3]!==o?(s=o==null?(0,$.jsx)(He,{"aria-hidden":`true`,className:I(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:I(`icon-md shrink-0`,i),children:(0,$.jsx)(_e,{svgString:o,className:`h-full w-full`})}),t[2]=i,t[3]=o,t[4]=s):s=t[4],s}function Sr(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>Br||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Vr)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Ur.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!Cr(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function Cr(e){let t=e.replace(Hr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Hr)){let e=t[1],n=t[2];if(!Wr.has(e)||!wr(e,n))return!1}return!0}function wr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function Tr(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=U(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(V,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(V,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(V,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function Er(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:i}=e,a=U(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let s=o,c;t[2]===r?c=t[3]:(c=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=c);let l;t[4]!==s||t[5]!==i||t[6]!==c?(l=(0,$.jsx)(le,{ref:i,type:`button`,icon:ze,color:`ghost`,size:`medium`,label:s,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:c}),t[4]=s,t[5]=i,t[6]=c,t[7]=l):l=t[7];let u;return t[8]!==n||t[9]!==s||t[10]!==l?(u=(0,$.jsx)(O,{label:s,className:n,children:l}),t[8]=n,t[9]=s,t[10]=l,t[11]=u):u=t[11],u}function Dr(e){"use forget";let t=(0,Z.c)(145),{appBlockId:n,additionalResourceDomains:r,clientThreadId:i,code:a,id:o,captureConsoleMessages:c,isStreaming:l,onConsoleMessagesChange:d,onReadyChange:f,presentationSurface:p,progressiveStreaming:m,ref:h,styleMode:g,surface:_,variant:v,widgetRefSeenAtMs:y}=e,b=l!==void 0&&l,x=m!==void 0&&m,S=g===void 0?`default`:g,C=_===void 0?`inline`:_,w=v===void 0?`inline`:v,ee=U(),T=(0,Q.useRef)(null),te=(0,Q.useRef)(!1),E=(0,Q.useRef)(!1),ne=(0,Q.useRef)(null),D=(0,Q.useRef)(null),O=(0,Q.useRef)(null),k=(0,Q.useRef)(null),A=(0,Q.useRef)(null),re=(0,Q.useRef)(null),j=(0,Q.useRef)(null),N=(0,Q.useRef)(0),P=(0,Q.useRef)(null),ae=(0,Q.useRef)(null),F;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(F=[],t[0]=F):F=t[0];let oe=(0,Q.useRef)(F),se=s(),ce=M(u),{allowDependencyNetworkRequestsWithoutCanvasAccess:le}=(0,Q.useContext)(ke),R=Ke()||le,z=Je(i)&&!le,ue=se?`dark`:`light`,de=ee.locale,B;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(B={status:`streaming`},t[1]=B):B=t[1];let[H,fe]=(0,Q.useState)(B),pe=H.status===`finalized`&&H.html!==a,me=x&&!b&&(w===`artifact`||H.status===`failed`),W=x&&C===`inline`&&H.status!==`static`&&!me&&!pe,he=W&&b&&w===`artifact`&&!ur(a),ge=he?0:Nr,_e=R?`execution-enabled`:`execution-disabled`,ve=z?`network-enabled`:`network-disabled`,ye=W?`progressive-app-block-stream`:a,be;t[2]===r?be=t[3]:(be=r??[],t[2]=r,t[3]=be);let G;t[4]!==ce||t[5]!==de||t[6]!==S||t[7]!==C||t[8]!==ye||t[9]!==be||t[10]!==_e||t[11]!==ve||t[12]!==ue?(G=[ue,ce,C,S,de,_e,ve,ye,...be],t[4]=ce,t[5]=de,t[6]=S,t[7]=C,t[8]=ye,t[9]=be,t[10]=_e,t[11]=ve,t[12]=ue,t[13]=G):G=t[13];let xe=G.join(`\0`),Se;t[14]===r?Se=t[15]:(Se=tn(r),t[14]=r,t[15]=Se);let Ce=Se,we=z?`deps_only`:`disabled`,Te=C===`inline`?w:void 0,Ee=W?`progressive`:`static`,De;t[16]!==C||t[17]!==we||t[18]!==Te||t[19]!==Ee?(De={networkPolicy:we,surface:C,variant:Te,renderMode:Ee},t[16]=C,t[17]=we,t[18]=Te,t[19]=Ee,t[20]=De):De=t[20];let Oe=De,[Ae,je]=(0,Q.useState)(0),[Me,Ne]=(0,Q.useState)(null),Pe=Me?.signature===xe?Me.status:null,K=Pe===`ready`,Fe=K||Pe===`failed_after_ready`,Ie=W&&Pe===`failed`,q=!b&&!W&&Pe===`failed`,Le=p??C,J=W&&Le===`inline`&&b&&!q,Re;t[21]!==a||t[22]!==Oe||t[23]!==y?(Re={content:a,metricTags:Oe,widgetRefSeenAtMs:y},t[21]=a,t[22]=Oe,t[23]=y,t[24]=Re):Re=t[24];let{cancelFirstPaintFrame:ze,startRunMetrics:Be}=xt(Re),Ve,He;t[25]!==K||t[26]!==f?(Ve=()=>{f?.(K)},He=[K,f],t[25]=K,t[26]=f,t[27]=Ve,t[28]=He):(Ve=t[27],He=t[28]),(0,Q.useEffect)(Ve,He);let Ue,qe;t[29]!==K||t[30]!==p?(Ue=()=>{!K||p==null||T.current?.updateAppBlockSurface?.(p)},qe=[K,p],t[29]=K,t[30]=p,t[31]=Ue,t[32]=qe):(Ue=t[31],qe=t[32]),(0,Q.useEffect)(Ue,qe);let Xe,Ze;t[33]===Symbol.for(`react.memo_cache_sentinel`)?(Xe=()=>({clearCapturedConsoleMessages:()=>{oe.current=[]},captureScreenshotDataUrl:async()=>(await T.current?.screenshot())?.imageBase64??null,focus:()=>{T.current?.focus()}}),Ze=[],t[33]=Xe,t[34]=Ze):(Xe=t[33],Ze=t[34]),(0,Q.useImperativeHandle)(h,Xe,Ze);let Qe;t[35]===Symbol.for(`react.memo_cache_sentinel`)?(Qe=()=>{P.current!=null&&(window.clearTimeout(P.current),P.current=null)},t[35]=Qe):Qe=t[35];let Y=L(Qe),$e;t[36]===Symbol.for(`react.memo_cache_sentinel`)?($e=()=>{ae.current!=null&&(window.clearTimeout(ae.current),ae.current=null)},t[36]=$e):$e=t[36];let X=L($e),et;t[37]!==K||t[38]!==W?(et=()=>{if(!W||!K||A.current==null)return;let e=k.current,t=T.current;if(e==null||t?.updateAppBlockStream==null||E.current)return;let n=N.current;k.current=null,D.current=gt(),O.current=e.html,e.isFinal&&(E.current=!0);let r=()=>N.current!==n||A.current==null?Promise.resolve():t.updateAppBlockStream?.(e)??Promise.resolve(),i=j.current,a=i==null?r():i.then(r);j.current=a,a.then(()=>{j.current===a&&(j.current=null);let t=A.current;N.current!==n||t==null||(ur(e.html)&&t.markFirstPaint(),e.isFinal&&(t.reportPayloadSize(e.html),fe({status:`finalized`,html:e.html})))},e=>{j.current===a&&(j.current=null),N.current===n&&(e instanceof DOMException&&e.name===`AbortError`||re.current?.(`stream_update`,vt(e)))})},t[37]=K,t[38]=W,t[39]=et):et=t[39];let tt=L(et),nt;t[40]!==ce||t[41]!==c||t[42]!==Y||t[43]!==X||t[44]!==a||t[45]!==R||t[46]!==z||t[47]!==pe||t[48]!==b||t[49]!==de||t[50]!==d||t[51]!==f||t[52]!==p||t[53]!==xe||t[54]!==H.status||t[55]!==me||t[56]!==W||t[57]!==Be||t[58]!==S||t[59]!==C||t[60]!==ue?(nt=()=>{if(!R)return;if(H.status===`failed`){if(b)return;fe({status:`static`}),je(kr);return}(pe||me&&H.status!==`static`)&&fe({status:`static`});let e=W&&T.current?.updateAppBlockStream!=null;if(W&&!e){b||fe({status:`static`});return}te.current=!0,E.current=!1,ne.current=null,D.current=null,O.current=null,k.current=null,A.current=null,re.current=null,j.current=null,X(),N.current+=1;let t=N.current;Y(),Ne(null);let{expectReadySignal:n,html:r}=nn(a,ue,de,ce,C,{loadTailwind:z,progressiveStreaming:e,syncPresentationSurface:p!=null,styleMode:S}),i=!1,o=!1,s=!1,l=!1,u=!1,m=()=>N.current===t,h=Be(m,{deferFirstPaint:e,deferPayloadSize:e});e&&(A.current=h);let g=e=>{!c||d==null||!m()||(oe.current=e,!l&&(l=!0,ie.postTask(()=>{l=!1,m()&&d(oe.current)},{priority:`background`})))},_=e=>{!m()||i||s||(i=!0,Y(),h.markReady(e),!u&&(u=!0,ie.postTask(()=>{u=!1,!(!m()||s)&&(o=!0,Ne({signature:xe,status:`ready`}))},{priority:`background`})))},v=(t,n)=>{!m()||s||(s=!0,Y(),X(),k.current=null,A.current=null,e&&fe({status:`failed`}),Ne({signature:xe,status:o?`failed_after_ready`:`failed`}),h.reportFailure(t,n),ie.postTask(()=>{m()&&(e?f?.(!1):f?.(!1,`failure`))},{priority:`background`}))};re.current=v,oe.current=[],g([]),P.current=window.setTimeout(()=>{v(`sandbox_eval`,`ready_timeout`)},Fr),(async()=>{let t=T.current?.evalAsync({code:r,expectReadySignal:n,language:`html`,shouldPreservePreviewOnFatalError:()=>m()&&e&&o});if(t==null){v(`sandbox_eval`,`missing_generator`);return}for(;;){let e=await t.next();if(e.done){m()&&!i&&v(`sandbox_eval`,`generator_completed_without_ready`);break}m()&&(g([...oe.current,e.value]),e.value.type===We.ENVIRONMENT_STATUS&&e.value.status===Ge.RUNNING_CODE&&_(`running_code`),e.value.type===We.RUN_COMPLETE&&(e.value.wasFatalError?v(`runtime`,`fatal_runtime_error`):(_(`run_complete`),h.reportSuccess(`run_complete`))),await ie.yield())}})().catch(e=>{m()&&(e instanceof DOMException&&e.name===`AbortError`||v(`sandbox_eval`,vt(e)))})},t[40]=ce,t[41]=c,t[42]=Y,t[43]=X,t[44]=a,t[45]=R,t[46]=z,t[47]=pe,t[48]=b,t[49]=de,t[50]=d,t[51]=f,t[52]=p,t[53]=xe,t[54]=H.status,t[55]=me,t[56]=W,t[57]=Be,t[58]=S,t[59]=C,t[60]=ue,t[61]=nt):nt=t[61];let rt=L(nt),it;t[62]!==Y||t[63]!==X?(it=()=>{N.current+=1,te.current=!1,E.current=!1,ne.current=null,O.current=null,k.current=null,A.current=null,re.current=null,j.current=null,Y(),X(),Ne(null),je(Or)},t[62]=Y,t[63]=X,t[64]=it):it=t[64];let at=L(it),ot;t[65]===Le?ot=t[66]:(ot=Le===`inline`?{margin:-4,width:`calc(100% + ${Pr*2}px)`}:void 0,t[65]=Le,t[66]=ot);let st=ot,ct;t[67]!==ze||t[68]!==Y||t[69]!==X||t[70]!==rt?(ct=()=>{rt();let e=T.current;return()=>{N.current+=1,A.current=null,re.current=null,j.current=null,Y(),X(),ze(),e?.stop()}},t[67]=ze,t[68]=Y,t[69]=X,t[70]=rt,t[71]=ct):ct=t[71];let lt;t[72]!==ze||t[73]!==Y||t[74]!==X||t[75]!==R||t[76]!==xe||t[77]!==rt||t[78]!==Ae?(lt=[ze,Y,X,R,xe,rt,Ae],t[72]=ze,t[73]=Y,t[74]=X,t[75]=R,t[76]=xe,t[77]=rt,t[78]=Ae,t[79]=lt):lt=t[79],(0,Q.useEffect)(ct,lt);let ut,dt;t[80]!==b||t[81]!==rt||t[82]!==W?(ut=()=>{!W||b||te.current||T.current?.updateAppBlockStream!=null||rt()},dt=[b,rt,W],t[80]=b,t[81]=rt,t[82]=W,t[83]=ut,t[84]=dt):(ut=t[83],dt=t[84]),(0,Q.useEffect)(ut,dt);let ft,pt;if(t[85]!==X||t[86]!==a||t[87]!==tt||t[88]!==q||t[89]!==K||t[90]!==b||t[91]!==W||t[92]!==w?(ft=()=>{if(!W||!K||q||E.current||T.current?.updateAppBlockStream==null)return;let e=b?lr(a):a;if(b&&(k.current?.html??O.current)===e)return;if(k.current={html:e,isFinal:!b},!b){X(),tt();return}let t=D.current;if(t==null&&w===`artifact`&&(ne.current??=gt(),t=ne.current),t==null){tt();return}let n=w===`artifact`?Lr:Ir,r=gt()-t;if(r>=n){tt();return}return ae.current=window.setTimeout(()=>{ae.current=null,tt()},n-r),X},pt=[X,a,tt,q,K,b,W,w],t[85]=X,t[86]=a,t[87]=tt,t[88]=q,t[89]=K,t[90]=b,t[91]=W,t[92]=w,t[93]=ft,t[94]=pt):(ft=t[93],pt=t[94]),(0,Q.useEffect)(ft,pt),!R){let e;return t[95]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(En,{}),t[95]=e):e=t[95],e}let mt=Le===`inline`&&(he?`h-0 min-h-0 overflow-hidden`:`min-h-[120px] overflow-visible`),ht=Le===`stage`&&`h-full min-h-0`,_t;t[96]!==mt||t[97]!==ht?(_t=I(`flex w-full`,mt,ht),t[96]=mt,t[97]=ht,t[98]=_t):_t=t[98];let yt=Le===`inline`?`flex-none`:`w-full`,bt=J&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,St;t[99]!==yt||t[100]!==bt?(St=I(`relative min-w-0`,yt,bt),t[99]=yt,t[100]=bt,t[101]=St):St=t[101];let Ct=`${Ae}:${z?`network-enabled`:`network-disabled`}`,wt;t[102]!==n||t[103]!==i||t[104]!==o?(wt=JSON.stringify([i??null,n??o]),t[102]=n,t[103]=i,t[104]=o,t[105]=wt):wt=t[105];let Tt;t[106]===ee?Tt=t[107]:(Tt=ee.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[106]=ee,t[107]=Tt);let Et=z?`deps-only`:`none`,Dt=z?Rr:zr,Ot=Fe?0:-1,kt=Le===`inline`&&S===`open`,At=Le!==`stage`,jt=W?ge:Mr,Mt;t[108]!==o||t[109]!==rt||t[110]!==Ce||t[111]!==Ct||t[112]!==wt||t[113]!==Tt||t[114]!==Et||t[115]!==Dt||t[116]!==Ot||t[117]!==kt||t[118]!==At||t[119]!==jt?(Mt=(0,$.jsx)(Ye,{id:o,sandboxOriginId:wt,title:Tt,visuallyHidden:!1,networkPolicy:Et,additionalResourceDomains:Ce,sandboxPermissions:Dt,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:Ot,onRetryCodeRun:rt,transparentBackground:kt,useIntrinsicHeight:At,intrinsicHeightFallback:jt,ref:T},Ct),t[108]=o,t[109]=rt,t[110]=Ce,t[111]=Ct,t[112]=wt,t[113]=Tt,t[114]=Et,t[115]=Dt,t[116]=Ot,t[117]=kt,t[118]=At,t[119]=jt,t[120]=Mt):Mt=t[120];let Nt;t[121]===J?Nt=t[122]:(Nt=J?(0,$.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 z-10 cursor-wait`}):null,t[121]=J,t[122]=Nt);let Pt;t[123]!==Ie||t[124]!==q||t[125]!==Fe||t[126]!==W?(Pt=!Fe&&!q&&(!W||Ie)?(0,$.jsx)(Ar,{}):null,t[123]=Ie,t[124]=q,t[125]=Fe,t[126]=W,t[127]=Pt):Pt=t[127];let Ft;t[128]!==q||t[129]!==at?(Ft=q?(0,$.jsx)(jr,{onRetry:at}):null,t[128]=q,t[129]=at,t[130]=Ft):Ft=t[130];let It;t[131]!==st||t[132]!==J||t[133]!==St||t[134]!==Mt||t[135]!==Nt||t[136]!==Pt||t[137]!==Ft?(It=(0,$.jsxs)(`div`,{"aria-busy":J,className:St,style:st,children:[Mt,Nt,Pt,Ft]}),t[131]=st,t[132]=J,t[133]=St,t[134]=Mt,t[135]=Nt,t[136]=Pt,t[137]=Ft,t[138]=It):It=t[138];let Lt;t[139]===J?Lt=t[140]:(Lt=J?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:(0,$.jsx)(V,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[139]=J,t[140]=Lt);let Rt;return t[141]!==_t||t[142]!==It||t[143]!==Lt?(Rt=(0,$.jsxs)(`div`,{className:_t,children:[It,Lt]}),t[141]=_t,t[142]=It,t[143]=Lt,t[144]=Rt):Rt=t[144],Rt}function Or(e){return e+1}function kr(e){return e+1}function Ar(){"use forget";let e=(0,Z.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsx)(re,{className:`icon-sm text-token-text-tertiary`}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,role:`status`,children:[t,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:(0,$.jsx)(V,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})})]}),e[1]=n):n=e[1],n}function jr(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(V,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(V,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(le,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr=e((()=>{Z=B(),a(),Ze(),je(),tt(),d(),v(),Xe(),oe(),Be(),J(),Ve(),G(),qe(),w(),Ee(),rt(),pe(),D(),E(),P(),ge(),k(),te(),ne(),se(),Y(),Me(),Ue(),b(),Q=n(R()),de(),fn(),jt(),ft(),Tn(),K(),kn(),gn(),Ln(),mt(),q(),W(),Pt(),sr(),$=z(),Mr=432,Nr=120,Pr=4,Fr=15e3,Ir=100,Lr=350,Rr=`allow-scripts allow-same-origin allow-forms`,zr=`allow-scripts allow-same-origin`,Br=12e3,Vr=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Hr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Ur=new Set([`svg`,`path`]),Wr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),Gr=/<script(?:\s|>)/i,Kr=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,qr=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,Jr=e=>{"use forget";let t=(0,Z.c)(13),{canOpen:n,conversation:r,expandButtonRef:i,isReady:a,onOpen:o,target:s}=e,c;t[0]!==n||t[1]!==i||t[2]!==o?(c=n&&o!=null?(0,$.jsx)(Er,{ref:i,className:`shrink-0`,onClick:o}):null,t[0]=n,t[1]=i,t[2]=o,t[3]=c):c=t[3];let l=c;if(r==null)return l;let u;t[4]===s?u=t[5]:(u=s??{contentReferenceIndex:-1,messageId:``},t[4]=s,t[5]=u);let d=u,f=a&&s!=null,p;t[6]===l?p=t[7]:(p=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(O,{label:n,children:(0,$.jsx)(le,{type:`button`,icon:Re,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),l]}):l},t[6]=l,t[7]=p);let m;return t[8]!==d||t[9]!==r||t[10]!==f||t[11]!==p?(m=(0,$.jsx)(it,{category:Le.AppBlock,conversation:r,isReady:f,target:d,children:p}),t[8]=d,t[9]=r,t[10]=f,t[11]=p,t[12]=m):m=t[12],m}}));export{ut as S,jt as _,Yr as a,ft as b,$n as c,xn as d,Tn as f,gt as g,Nt as h,cr as i,er as l,Mt as m,Ar as n,tr as o,Pt as p,Dr as r,sr as s,dr as t,bn as u,pt as v,dt as x,mt as y};
//# sourceMappingURL=e3b746a6-d81f1hosde9uw0h2.js.map