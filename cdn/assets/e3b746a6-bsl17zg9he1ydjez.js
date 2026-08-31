const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-ia2l33xl5wcmu6vu.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-xcfj9ah4drz87q60.js","assets/2340486e-bcoev3jbtc75b03s.js","assets/conversation-small-c6t71ctwl0fw0887.js","assets/30901919-c0yz7y651edvgwj9.js","assets/c470f5ab-jcqw1upmp3cm06b7.js","assets/0e5afe53-getsnip5vfoem0c0.js","assets/conversation-small-qotqnpm2.css","assets/8b34dbc2-idxkky3wmm2rvp2w.js","assets/82782bc9-iu2h8968jfg2wkfl.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{A2 as r,AK as i,CM as a,DH as o,DX as s,F2 as c,FB as l,FD as u,FZ as d,G1 as f,GD as p,H2 as m,I2 as h,IB as g,Jg as _,M_ as v,ND as y,N_ as b,Nx as x,OH as S,PZ as C,Px as w,SX as ee,TD as T,W2 as te,XZ as E,Y1 as D,ZZ as O,a4 as k,aK as A,ad as j,c4 as M,cF as N,dc as ne,eO as re,fF as ie,jD as P,kK as F,l4 as ae,lF as oe,lc as I,oK as se,qa as ce,qg as L,rd as R,sF as le,to as ue}from"./4813494d-xcfj9ah4drz87q60.js";import{Fn as z,In as B,Ln as de,Nn as fe,Pn as V,kn as H,mn as U,pn as pe,xn as W}from"./2340486e-bcoev3jbtc75b03s.js";import{Ax as me,Dbt as he,Ebt as ge,Emn as _e,F6 as ve,H6 as ye,I6 as be,J6 as xe,K6 as Se,Kgn as G,Ku as Ce,L6 as we,P6 as Te,R6 as Ee,Tbt as De,Tmn as Oe,U6 as ke,V6 as K,Xn as Ae,Zn as je,cD as Me,dD as Ne,evn as Pe,kx as Fe,nvn as Ie,q6 as Le,qgn as Re,qu as q,tD as J}from"./conversation-small-c6t71ctwl0fw0887.js";import{DE as ze,OE as Be,fw as Ve,nS as He,pw as Ue,tS as We}from"./30901919-c0yz7y651edvgwj9.js";import{i as Ge,l as Ke,n as qe,s as Je,t as Ye,u as Xe}from"./8d846022-dneku8yw6gysg6ku.js";import{i as Ze,n as Qe,r as $e}from"./91969468-hi56by7c7l3fxrfu.js";import{n as et,t as tt}from"./4d271a7b-by8kgevosybsou42.js";import{n as nt,r as rt}from"./58bafdef-of6p6bpcws1qcpn7.js";import{a as Y,i as it}from"./e01e2324-e6u6mfzoasitb710.js";import{i as at,t as ot}from"./5dc32f04-ebgtgjdkbu8157lv.js";import{n as st,t as ct}from"./066a83b9-frcpz2y569pvu6t4.js";import{i as lt,n as ut,r as dt,t as ft}from"./9eb56efa-lyxwis9xfibthd6q.js";import{i as pt,n as mt,r as ht,t as gt}from"./cc79834b-mf73r28q65n1mei9.js";function _t(){return r(`2779568043`)}function vt(){return r(`3864712762`)}function yt(){return c(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var bt=e((()=>{h()}));function xt({messageId:e,refIndex:t}){return`appblock:${e}:${t}`}var St=e((()=>{}));function Ct({errorSource:e,errorType:t,networkPolicy:n,outcome:r,readySignal:i,renderMode:a,surface:o,variant:s}){let c={network_policy:n,surface:o};return e!=null&&(c.error_source=e),t!=null&&(c.error_type=t),r!=null&&(c.outcome=r),i!=null&&(c.ready_signal=i),a!=null&&(c.render_mode=a),s!=null&&(c.variant=s),c}function wt(){return typeof performance<`u`?performance.now():Date.now()}function Tt(e){return new TextEncoder().encode(e).byteLength/1024}function Et(e){return e instanceof Error?e.name:`unknown`}function Dt(e,t,n=1){ae.count(k.APP_BLOCKS,e,Ct(t),n)}function Ot(e,t,n){ae.hist(k.APP_BLOCKS,e,Ct(n),t)}function kt({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,At.useRef)(wt()),i=(0,At.useRef)(null),a=(0,At.useRef)(!1),o=(0,At.useRef)(!1),s=N(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=N((n=e)=>{o.current||(o.current=!0,Ot(X,Tt(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:N((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=wt(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),Dt(Ft,t);let _=(e,n)=>{f||(f=!0,Dt(Pt,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=wt();Ot(Nt,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,Ot(jt,s-r.current,t),n!=null&&Ot(Lt,s-n,t))},y=(e,t)=>{if(s(),typeof window>`u`){v(e,t);return}i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,t)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=wt(),g=n,Ot(It,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{!e()||p||(p=!0,s(),Dt(Mt,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var At,jt,Mt,X,Nt,Pt,Ft,It,Lt,Rt=e((()=>{M(),le(),At=n(de()),jt=`app_block.first_render_time_ms`,Mt=`app_block.load.failure`,X=`app_block.payload_size_kb`,Nt=`app_block.ready_to_first_paint_ms`,Pt=`app_block.render.outcome`,Ft=`app_block.render.start`,It=`app_block.sandbox_eval_to_ready_ms`,Lt=`app_block.widget_ref_to_first_paint_ms`}));function zt(e){return e==="default"||e===`open`?e:null}function Bt({explicitStyleMode:e,libraryFileId:t}){return e??(t==null?`default`:`open`)}var Vt=e((()=>{})),Ht,Ut=e((()=>{Ht=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),Wt=e((()=>{})),Gt,Kt=e((()=>{Wt(),Gt=`/cdn/assets/app-block-sandbox-foundation-l4fcvweu.css`})),qt,Jt=e((()=>{qt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){--app-block-slider-track:color-mix(in srgb, var(--viz-text) 16%, transparent);--app-block-slider-thumb-shadow:color-mix(in srgb, var(--viz-text) 18%, transparent);appearance:none;background:linear-gradient(var(--app-block-slider-track), var(--app-block-slider-track)) center / 100% 4px no-repeat;cursor:pointer;border:0;border-radius:9999px;width:100%;height:28px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.5}:where(input[type=range])::-webkit-slider-runnable-track{background:0 0;border:0;height:28px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;margin-top:5px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-webkit-slider-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-webkit-slider-thumb{transform:scale(1.06)}:where(input[type=range])::-moz-range-track{background:var(--app-block-slider-track);border:0;border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-progress{background:var(--viz-accent);border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-thumb{border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-moz-range-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-moz-range-thumb{transform:scale(1.06)}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),Yt=e((()=>{})),Xt,Zt=e((()=>{Yt(),Xt=`/cdn/assets/app-block-sandbox-iimeogb3.css`}));function Qt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var $t=e((()=>{}));function en(e){return String.raw(dn||=Qt([`<script>
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
<\/script>`]),e===`open`)}function tn(e){return/<!doctype\b|<html[\s>]/i.test(e)}function nn(e,t){let n=e.match(/<\/body\s*>(?=\s*(?:<\/html\s*>)?\s*$)/i)??e.match(/<\/html\s*>\s*$/i);if(n?.index==null)return`${e}\n${t}`;let r=n.index;return[e.slice(0,r),t,e.slice(r)].join(`
`)}function rn(e){let t=e.trim().replaceAll(`_`,`-`);return t.length===0||!/^[A-Za-z0-9-]+$/.test(t)?`en`:t}function an(e){if(/^https?:\/\//i.test(e)||typeof window>`u`)return e;let t=window.location.origin;return new URL(e,t).toString()}function on(e){try{return new URL(e).origin}catch{return null}}function sn(e){return gn.has(e)?e:`default`}function cn(e,t){return t===`skybridge`||t===`stage`?e===`dark`?`#212121`:`#ffffff`:e===`dark`?`#000000`:`#fcfcfc`}function ln(e=[]){let t=an(Xt),n=an(Gt),r=[on(pn),on(mn),on(t),on(n),...hn,...e.map(on)];return Array.from(new Set(r.filter(e=>e!=null)))}function un(e,t=`light`,n=`en`,r=`default`,i=`inline`,{loadTailwind:a=!0,platform:o,progressiveStreaming:s=!1,syncPresentationSurface:c=!1,styleMode:l=`default`}={}){let u=e.trim(),d=c?en(l):``;if(!s&&tn(u))return{html:c?nn(u,d):u,expectReadySignal:!1};let f=rn(n),p=l===`open`?Ht:qt,m=an(l===`open`?Gt:Xt),h=sn(r),g=cn(t,i),_=i===`skybridge`&&o!=null&&o!==`web`||i===`inline`&&l===`open`,v=[`color-scheme: ${t};`,_?`background-color: transparent;`:`background-color: var(--main-surface-primary, ${g});`].join(` `);return{expectReadySignal:a,frameColorScheme:t,html:`<!doctype html>
<html ${[`lang="${f}"`,`class="${t}"`,`data-chat-theme="${h}"`,`data-app-block-surface="${i}"`,`data-app-block-style-mode="${l}"`,o==null?null:`data-app-block-platform="${o}"`,`style="${v}"`].filter(e=>e!=null).join(` `)}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="${t}" />
    ${a?`<script>
      window.tailwind = window.tailwind || {};
      window.tailwind.config = { darkMode: "class" };
    <\/script>
    <script id="app-block-tailwind" src="${pn}" defer><\/script>
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
    ${s?_n:``}
  </head>
  <body>
    <main>
${s?``:u}
    </main>
    ${d}
    ${s?vn:``}
  </body>
</html>`}}var dn,fn,pn,mn,hn,gn,_n,vn,yn=e((()=>{Ut(),Kt(),Jt(),Zt(),$t(),pn=`https://cdn.tailwindcss.com`,mn=`https://images.openai.com`,hn=[`https://cdnjs.cloudflare.com`,`https://esm.sh`,`https://cdn.jsdelivr.net`,`https://unpkg.com`,`https://fonts.googleapis.com`,`https://fonts.gstatic.com`,`https://fonts.bunny.net`],gn=new Set([`default`,`blue`,`green`,`yellow`,`purple`,`pink`,`orange`,`black`]),_n=`<style>
  @media (prefers-reduced-motion: no-preference) {
    [data-app-block-stream-enter] {
      animation: app-block-stream-enter 160ms ease-out both;
    }

    @keyframes app-block-stream-enter {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  }
</style>`,vn=String.raw(fn||=Qt([`<script>
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
<\/script>`]))}));function bn(){"use forget";let e=(0,xn.useContext)(Sn);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var xn,Sn,Cn=e((()=>{xn=n(de()),Sn=(0,xn.createContext)(null)})),wn,Tn=e((()=>{se(),U(),wn=A(()=>pe(()=>import(`./7aa2b76f-ia2l33xl5wcmu6vu.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}));function En(e){"use forget";let t=(0,kn.c)(40),{additionalResourceDomains:n,children:r,code:i,conversationId:a,source:o,styleMode:s,title:c}=e,l=`app-block:${o.appBlockId}:${(0,An.useId)()}`,u=(0,An.useRef)(null),[f,p]=(0,An.useState)(null),m=o.appBlockId,h=o.libraryFileId,g=o.messageId,_=o.refIndex,v=a??null,y;t[0]!==v||t[1]!==m?(y={appBlockId:m,conversationId:v},t[0]=v,t[1]=m,t[2]=y):y=t[2];let b=y,x=d(Te),S;t[3]!==x||t[4]!==b?(S=Ee(x,b),t[3]=x,t[4]=b,t[5]=S):S=t[5];let C=S,w=x?.appBlockId===m&&x.conversationId===v&&(x.isOriginalVersion===!0||x.versionNumber!=null),ee=C||w,T;t[6]!==x||t[7]!==l||t[8]!==b?(T=K(x,b,l),t[6]=x,t[7]=l,t[8]=b,t[9]=T):T=t[9];let te=T,E;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(E=()=>{u.current?.focus()},t[10]=E):E=t[10];let D=E,O=f?.supportsAtomicMove?f:void 0,k;t[11]!==m||t[12]!==h||t[13]!==g||t[14]!==_?(k={appBlockId:m,libraryFileId:h,messageId:g,refIndex:_},t[11]=m,t[12]=h,t[13]=g,t[14]=_,t[15]=k):k=t[15];let A;t[16]!==n||t[17]!==i||t[18]!==s||t[19]!==O||t[20]!==k||t[21]!==c?(A={additionalResourceDomains:n,code:i,focusOnClose:D,sharedPreview:O,source:k,styleMode:s,title:c},t[16]=n,t[17]=i,t[18]=s,t[19]=O,t[20]=k,t[21]=c,t[22]=A):A=t[22];let j=A,M,N;t[23]!==j||t[24]!==C||t[25]!==b?(M=()=>{C&&ye(b,j)},N=[j,C,b],t[23]=j,t[24]=C,t[25]=b,t[26]=M,t[27]=N):(M=t[26],N=t[27]),(0,An.useEffect)(M,N);let ne;t[28]!==j||t[29]!==te||t[30]!==b?(ne=()=>{ve(b,te,j)},t[28]=j,t[29]=te,t[30]=b,t[31]=ne):ne=t[31];let re=ne,ie;t[32]!==ee||t[33]!==w||t[34]!==re||t[35]!==f?(ie={isExpanded:ee,isViewingHistoricalVersion:w,openExpandedView:re,setSharedPreview:p,sharedPreview:f,triggerRef:u},t[32]=ee,t[33]=w,t[34]=re,t[35]=f,t[36]=ie):ie=t[36];let P=ie,F;return t[37]!==r||t[38]!==P?(F=(0,jn.jsx)(Sn.Provider,{value:P,children:r}),t[37]=r,t[38]=P,t[39]=F):F=t[39],F}function Dn(e){"use forget";let t=(0,kn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,headerTitleContent:o,title:s}=e,c=ht(),l;t[0]===i?l=t[1]:(l=()=>i==null?0:Ce(i).height$()??0,t[0]=i,t[1]=l);let u=d(l),f=c===`fullscreen`&&n&&i!=null?u:0,p=o??s,m;t[2]===p?m=t[3]:(m=(0,jn.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:p}),t[2]=p,t[3]=m);let h;t[4]!==a||t[5]!==m?(h=(0,jn.jsxs)(gt.Header,{className:`pb-1`,children:[m,a]}),t[4]=a,t[5]=m,t[6]=h):h=t[6];let g;t[7]===f?g=t[8]:(g={paddingBottom:f},t[7]=f,t[8]=g);let _;t[9]===r?_=t[10]:(_=(0,jn.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=_);let v;t[11]!==g||t[12]!==_?(v=(0,jn.jsx)(gt.Body,{className:`bg-token-bg-primary overflow-hidden`,style:g,children:_}),t[11]=g,t[12]=_,t[13]=v):v=t[13];let y;return t[14]!==h||t[15]!==v?(y=(0,jn.jsxs)(jn.Fragment,{children:[h,v]}),t[14]=h,t[15]=v,t[16]=y):y=t[16],y}function On(e){"use forget";let t=(0,kn.c)(5),{conversation:n,paneId:r}=e,i=pt(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,jn.jsx)(wn,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var kn,An,jn,Mn=e((()=>{kn=W(),q(),mt(),C(),An=n(de()),Cn(),we(),Tn(),jn=B()}));function Nn(){"use forget";let e=(0,Pn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,Fn.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,Fn.jsx)(H,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var Pn,Fn,In=e((()=>{Pn=W(),V(),Fn=B()}));function Ln(e,t){"use forget";let n=(0,zn.c)(39),r=t===void 0||t,i=z(),a;n[0]!==i||n[1]!==e?(a=e?i.formatMessage(Un.generatingApp,{title:e}):i.formatMessage(Un.creatingInterface),n[0]=i,n[1]=e,n[2]=a):a=n[2];let o=a,s;n[3]===i?s=n[4]:(s=i.formatMessage(Un.sketchingInterface),n[3]=i,n[4]=s);let c;n[5]===i?c=n[6]:(c=i.formatMessage(Un.shapingLayout),n[5]=i,n[6]=c);let l;n[7]===i?l=n[8]:(l=i.formatMessage(Un.arrangingPieces),n[7]=i,n[8]=l);let u;n[9]===i?u=n[10]:(u=i.formatMessage(Un.polishingVisuals),n[9]=i,n[10]=u);let d;n[11]===i?d=n[12]:(d=i.formatMessage(Un.tuningInputs),n[11]=i,n[12]=d);let f;n[13]===i?f=n[14]:(f=i.formatMessage(Un.addingInteractivity),n[13]=i,n[14]=f);let p;n[15]===i?p=n[16]:(p=i.formatMessage(Un.wiringControls),n[15]=i,n[16]=p);let m;n[17]===i?m=n[18]:(m=i.formatMessage(Un.composingInteractions),n[17]=i,n[18]=m);let h;n[19]===i?h=n[20]:(h=i.formatMessage(Un.calibratingPreview),n[19]=i,n[20]=h);let g;n[21]===i?g=n[22]:(g=i.formatMessage(Un.refiningDetails),n[21]=i,n[22]=g);let _;n[23]!==o||n[24]!==h||n[25]!==g||n[26]!==s||n[27]!==c||n[28]!==l||n[29]!==u||n[30]!==d||n[31]!==f||n[32]!==p||n[33]!==m?(_=[o,s,c,l,u,d,f,p,m,h,g],n[23]=o,n[24]=h,n[25]=g,n[26]=s,n[27]=c,n[28]=l,n[29]=u,n[30]=d,n[31]=f,n[32]=p,n[33]=m,n[34]=_):_=n[34];let v=_,[y,b]=(0,Bn.useState)(0),x,S;return n[35]!==r||n[36]!==v.length?(x=()=>{if(!r)return;let e=window.setInterval(()=>{b(e=>Math.min(e+1,v.length-1))},Hn);return()=>{window.clearInterval(e)}},S=[r,v.length],n[35]=r,n[36]=v.length,n[37]=x,n[38]=S):(x=n[37],S=n[38]),(0,Bn.useEffect)(x,S),v[y]??v[0]??``}function Rn(e){"use forget";let t=(0,zn.c)(2),{title:n}=e,r=Ln(n),i;return t[0]===r?i=t[1]:(i=(0,Vn.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,role:`status`,children:(0,Vn.jsx)(ot,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:r})}),t[0]=r,t[1]=i),i}var zn,Bn,Vn,Hn,Un,Wn,Gn=e((()=>{zn=W(),at(),O(),Bn=n(de()),V(),Vn=B(),Hn=2800,Un=fe({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}}),Wn=e=>{"use forget";let t=(0,zn.c)(11),{isVisible:n,title:r}=e,i=Ln(r,n),a=!n,o=n?`grid-rows-[1fr] opacity-100`:`grid-rows-[0fr] opacity-0`,s;t[0]===o?s=t[1]:(s=E(`grid shrink-0 transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none`,o),t[0]=o,t[1]=s);let c=n&&`loading-shimmer-pure-text motion-reduce:animate-none`,l;t[2]===c?l=t[3]:(l=E(`text-token-text-secondary inline-block font-sans font-medium`,c),t[2]=c,t[3]=l);let u;t[4]!==i||t[5]!==l?(u=(0,Vn.jsx)(`div`,{className:`min-h-0 overflow-hidden`,children:(0,Vn.jsx)(`div`,{className:`pb-3`,children:(0,Vn.jsx)(`span`,{className:l,children:i})})}),t[4]=i,t[5]=l,t[6]=u):u=t[6];let d;return t[7]!==a||t[8]!==s||t[9]!==u?(d=(0,Vn.jsx)(`div`,{"aria-atomic":`true`,"aria-hidden":a,"aria-live":`polite`,className:s,role:`status`,children:u}),t[7]=a,t[8]=s,t[9]=u,t[10]=d):d=t[10],d}}));function Kn(e){let t=new Map,n=new Map,r=null,i=null;for(let o of e){let e=o.metadata?.content_references;if(Array.isArray(e)&&e.forEach((e,r)=>{let i=Jn({contentReference:e,messageId:o.id,refIndex:r});i!=null&&(t.set(i.appBlockId,i),i.libraryFileId!=null&&n.set(i.libraryFileId,i.appBlockId))}),o.author.role===f.User){(o.metadata?.attachments??[]).forEach((e,r)=>{let i=qn({attachment:e,messageId:o.id,refIndex:r});i==null||i.libraryFileId==null||n.has(i.libraryFileId)||(t.set(i.appBlockId,i),n.set(i.libraryFileId,i.appBlockId))});let e=o.metadata?.focused_artifact;if(e!=null){let n=e.type===ar?t.get(e.artifact_id)??null:null;r=n!=null&&n.messageId===e.source_message_id&&n.refIndex===e.source_ref_index&&(n.libraryFileId==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e.library_file_id}else{let e=o.metadata?.open_in_app_block_view,n=e==null?null:t.get(e.app_block_id)??null;r=e!=null&&n!=null&&n.messageId===e.message_id&&n.refIndex===e.ref_index&&(n.libraryFileId==null||e.library_file_id==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e?.library_file_id??null}}let s=a(o);if(s?.status!==`created`)continue;let c=n.get(s.libraryFileId),l=c==null?null:t.get(c)??null;if(l==null&&s.origin!=null){let e=s.origin.messageId,n=[...t.values()].filter(t=>t.messageId===e);l=n.length===1?n[0]:null}l==null&&c==null&&r!=null&&r.libraryFileId==null&&(i==null||i===s.libraryFileId)&&(l=r),l!=null&&(l.libraryFileId==null&&l.content!=null&&nr(o)||(n.set(s.libraryFileId,l.appBlockId),t.set(l.appBlockId,{...l,content:null,currentContentFileId:s.newContentFileId,latestPatchMessageId:o.id,libraryFileId:s.libraryFileId,libraryFileVersionNumber:s.newVersionNumber})))}return t}function qn({attachment:e,messageId:t,refIndex:n}){return e.library_artifact_type!==ar||e.library_file_id==null?null:{appBlockId:xt({messageId:t,refIndex:n}),content:null,currentContentFileId:e.id??null,entrypoint:`index.html`,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:e.library_file_id,libraryFileName:e.name,libraryFileVersionNumber:null,mimeType:e.mime_type??null,messageId:t,refIndex:n,styleMode:null,title:e.name.replace(/\.html$/i,``)}}function Jn({contentReference:e,messageId:t,refIndex:n}){if(typeof e!=`object`||!e||!(`type`in e)||!(`category`in e)||e.type!==or||e.category!==ar||!(`data`in e))return null;let r=e.data;if(typeof r!=`object`||!r)return null;let i=Yn(r,`content`),a=Yn(r,`entrypoint`)??`index.html`,o=er(r,a),s=Zn(o,`library_file_id`);return i==null&&s==null?null:{appBlockId:Yn(r,`app_block_id`)??xt({messageId:t,refIndex:n}),bundleVersion:Xn(r,`bundle_version`)??void 0,content:i,currentContentFileId:Zn(o,`current_content_file_id`),entrypoint:a,iconSvg:Yn(r,`icon_svg`),language:tr(),latestPatchMessageId:null,libraryFileId:s,libraryFileName:Zn(o,`library_file_name`),libraryFileVersionNumber:$n(Qn(o,`library_file_version_number`)),mimeType:Zn(o,`mime_type`),messageId:t,refIndex:n,styleMode:zt(Yn(r,`style_mode`)),title:Yn(r,`display_name`)??Yn(r,`title`)}}function Yn(e,t){let n=null;return t===`app_block_id`&&`app_block_id`in e&&(n=e.app_block_id),t===`content`&&`content`in e&&(n=e.content),t===`current_content_file_id`&&`current_content_file_id`in e&&(n=e.current_content_file_id),t===`display_name`&&`display_name`in e&&(n=e.display_name),t===`entrypoint`&&`entrypoint`in e&&(n=e.entrypoint),t===`icon_svg`&&`icon_svg`in e&&(n=e.icon_svg),t===`library_file_id`&&`library_file_id`in e&&(n=e.library_file_id),t===`library_file_name`&&`library_file_name`in e&&(n=e.library_file_name),t===`mime_type`&&`mime_type`in e&&(n=e.mime_type),t===`path`&&`path`in e&&(n=e.path),t===`style_mode`&&`style_mode`in e&&(n=e.style_mode),t===`title`&&`title`in e&&(n=e.title),typeof n==`string`&&n.trim()!==``?n:null}function Xn(e,t){if(t===`bundle_version`&&`bundle_version`in e){let t=e.bundle_version;if(typeof t==`number`)return t}if(t===`library_file_version_number`&&`library_file_version_number`in e){let t=e.library_file_version_number;if(typeof t==`number`)return t}return null}function Zn(e,t){return typeof e!=`object`||!e?null:Yn(e,t)}function Qn(e,t){return typeof e!=`object`||!e?null:Xn(e,t)}function $n(...e){for(let t of e)if(t!=null)return t;return null}function er(e,t){if(!(`files`in e)||!Array.isArray(e.files))return null;let n=null;for(let r of e.files)if(!(typeof r!=`object`||!r)&&Yn(r,`library_file_id`)!=null&&(n??=r,Yn(r,`path`)===t))return r;return n}function tr(){return`html`}function nr(e){let t=e.metadata?.shared_conversation_id;return typeof t==`string`&&t.trim()!==``}function rr(e,t){return e.appBlockId===t.appBlockId&&e.bundleVersion===t.bundleVersion&&e.content===t.content&&e.currentContentFileId===t.currentContentFileId&&e.entrypoint===t.entrypoint&&e.iconSvg===t.iconSvg&&e.language===t.language&&e.latestPatchMessageId===t.latestPatchMessageId&&e.libraryFileId===t.libraryFileId&&e.libraryFileName===t.libraryFileName&&e.libraryFileVersionNumber===t.libraryFileVersionNumber&&e.mimeType===t.mimeType&&e.messageId===t.messageId&&e.refIndex===t.refIndex&&e.styleMode===t.styleMode&&e.title===t.title}function ir(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e){let e=t.get(n);if(e==null||!rr(r,e))return!1}return!0}var ar,or,sr,cr=e((()=>{D(),y(),ne(),J(),ee(),St(),Vt(),ar=`app_block`,or=`client_defined_widget`,sr=T(e=>s(()=>Kn(I(e).flatMap(e=>e.messages)),{equals:ir}))}));function lr({appBlockId:e,conversation:t}){return t==null?null:sr(t).get(e)??null}function ur(e){return e?.serverId$()??void 0}function dr({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:ge(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function fr({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return De({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:j(e)?`missing`:`failed`})}),()=>{a.abort()}}function pr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??mr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function mr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var hr=e((()=>{R(),he(),cr()})),gr=t({AppBlock:()=>yr,AppBlockPreviewLoadingState:()=>Rr,AppBlockSandboxPreview:()=>Fr});function _r(e){let t=e.search($r),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function vr(e){let t=_r(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(ei))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(ti)!=null}function yr(e){"use forget";let t=(0,Z.c)(118),{additionalResourceDomains:n,appBlockId:r,authoritativeCode:i,authoritativeSource:a,bind:o,code:s,collapseWhenSuperseded:c,currentContentFileId:l,displayMode:f,id:p,captureConsoleMessages:m,clientThreadId:h,iconSvg:g,isStreaming:_,isTurnStreaming:v,libraryFileId:y,libraryFileVersionNumber:b,messageId:x,onConsoleMessagesChange:S,onReadyChange:C,progressiveStreaming:w,ref:ee,refIndex:T,styleMode:te,title:E,variant:D,widgetName:O,widgetRefSeenAtMs:k}=e,A=c===void 0||c,j=m!==void 0&&m,M=_!==void 0&&_,N=v!==void 0&&v,ne=w!==void 0&&w,ie=D===void 0?`inline`:D,F=u(),ae;t[0]===F?ae=t[1]:(ae=()=>F!=null&&_e(F),t[0]=F,t[1]=ae);let oe=d(ae),I;t[2]!==h||t[3]!==F?(I=h==null?F:P(h),t[2]=h,t[3]=F,t[4]=I):I=t[4];let se=I,ce=x!=null&&T!=null?xt({messageId:x,refIndex:T}):void 0,L=r??ce??xt({messageId:x??p,refIndex:T??0}),R=d(()=>Me({conversation:F??null,instanceId:L,messageId:x,refIndex:T}))??f,le=d(()=>a!=null||R!=null?null:lr({appBlockId:L,conversation:F??null})),z=a??le,B;t[5]===F?B=t[6]:(B=()=>ur(F??null),t[5]=F,t[6]=B);let de=d(B),fe=re(F?.id),V=de??fe,H;t[7]!==l||t[8]!==y||t[9]!==b||t[10]!==V||t[11]!==z?(H=dr({currentContentFileId:l,libraryFileId:y,libraryFileVersionNumber:b,serverThreadId:V,source:z}),t[7]=l,t[8]=y,t[9]=b,t[10]=V,t[11]=z,t[12]=H):H=t[12];let U=H,[pe,W]=(0,Q.useState)(null),[me,he]=(0,Q.useState)(0),ge;t[13]!==me||t[14]!==U.libraryContentKey?(ge=[U.libraryContentKey,me],t[13]=me,t[14]=U.libraryContentKey,t[15]=ge):ge=t[15];let ye=ge.join(`\0`),xe,Se;t[16]!==i||t[17]!==ye||t[18]!==U.contentFileId||t[19]!==U.libraryFileId||t[20]!==R||t[21]!==V?(xe=()=>{if(!(i!=null||R===`collapsed`))return fr({contentFileId:U.contentFileId,libraryContentKey:ye,libraryFileId:U.libraryFileId,onContentStateChange:W,serverThreadId:V})},Se=[i,U.contentFileId,U.libraryFileId,ye,R,V],t[16]=i,t[17]=ye,t[18]=U.contentFileId,t[19]=U.libraryFileId,t[20]=R,t[21]=V,t[22]=xe,t[23]=Se):(xe=t[22],Se=t[23]),(0,Q.useEffect)(xe,Se);let G=pr({appBlockId:L,contentFileId:U.contentFileId,currentContentFileId:l,libraryContent:pe,libraryContentKey:ye,libraryFileId:y,libraryFileVersionNumber:b,source:z}),Ce=pe?.key===ye?pe:null,we;t[24]!==G?.libraryFileId||t[25]!==y?(we=()=>be(G?.libraryFileId??y),t[24]=G?.libraryFileId,t[25]=y,t[26]=we):we=t[26];let Te=d(we),Ee=G?.libraryFileVersionNumber??b,Oe=Te!=null&&(Ee==null||Te.versionNumber>=Ee)?Te.code:void 0,ke=Oe??i??G?.content??s??null,K=G?.iconSvg??g??null,Ae=G?.libraryFileId??y,je=Ae==null&&i==null&&Oe==null&&l==null&&z?.currentContentFileId==null&&z?.latestPatchMessageId==null,Ne;t[27]!==je||t[28]!==s||t[29]!==x||t[30]!==ke||t[31]!==T||t[32]!==z?(Ne=je?z==null?x!=null&&T!=null&&s!=null&&ke===s?{messageId:x,refIndex:T}:null:z.messageId.length>0&&z.content!=null&&ke===z.content?{messageId:z.messageId,refIndex:z.refIndex}:null:null,t[27]=je,t[28]=s,t[29]=x,t[30]=ke,t[31]=T,t[32]=z,t[33]=Ne):Ne=t[33];let Pe=Ne,Ie=ie===`artifact`,Le=G?.styleMode??te??(Ie&&ne?`open`:void 0),Re;t[34]!==Ae||t[35]!==Le?(Re=Bt({explicitStyleMode:Le,libraryFileId:Ae}),t[34]=Ae,t[35]=Le,t[36]=Re):Re=t[36];let q=Re,J=G?.title??E,ze;t[37]===F?ze=t[38]:(ze=()=>F!=null&&ue(F)?`work`:`chat`,t[37]=F,t[38]=ze);let Be=d(ze),Ve;t[39]===Symbol.for(`react.memo_cache_sentinel`)?(Ve=yt(),t[39]=Ve):Ve=t[39];let He=Ve,Ue=ne,We=Ie&&q===`open`,Ge=R===`collapsed`||R==null&&A&&G?.latestPatchMessageId!=null&&G.latestPatchMessageId!==x,Ke=s!=null||l!=null,qe;t[40]!==h||t[41]!==s||t[42]!==F?.id||t[43]!==l||t[44]!==L||t[45]!==b||t[46]!==x||t[47]!==Ae||t[48]!==q||t[49]!==J||t[50]!==T||t[51]!==V||t[52]!==z?.messageId?(qe=async e=>{let t=s;if(t==null&&l!=null)try{t=await De({abortSignal:new AbortController().signal,fileId:l,serverThreadId:V})}catch{return}t!=null&&ve({appBlockId:L,conversationId:F?.id??h??null,isOriginalVersion:!0,versionNumber:b??void 0},`app-block:${L}:original`,{code:t,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:L,libraryFileId:Ae,messageId:z?.messageId??x,refIndex:T},styleMode:q,title:J})},t[40]=h,t[41]=s,t[42]=F?.id,t[43]=l,t[44]=L,t[45]=b,t[46]=x,t[47]=Ae,t[48]=q,t[49]=J,t[50]=T,t[51]=V,t[52]=z?.messageId,t[53]=qe):qe=t[53],F?.id,z?.messageId;let Je=qe;if(M&&!Ue){let e;return t[54]===J?e=t[55]:(e=(0,$.jsx)(Rn,{title:J}),t[54]=J,t[55]=e),e}let Ye=oe&&s!=null;if(Ce?.status===`missing`&&!Ye)return null;if(Ge){let e=Ke?Je:void 0,n;return t[56]!==J||t[57]!==e?(n=(0,$.jsx)(Nr,{onView:e,title:J}),t[56]=J,t[57]=e,t[58]=n):n=t[58],n}let Xe=ke??(Ue&&M?``:null);if(Xe==null){if(G?.latestPatchMessageId!=null){let e=F?.id??h,n=Ce?.status===`failed`,r;t[59]===he?r=t[60]:(r=()=>he(br),t[59]=he,t[60]=r);let i;return t[61]!==L||t[62]!==Ie||t[63]!==K||t[64]!==J||t[65]!==e||t[66]!==n||t[67]!==r?(i=(0,$.jsx)(wr,{appBlockId:L,conversationId:e,hasFailed:n,iconSvg:K,onRetry:r,showHeader:Ie,title:J}),t[61]=L,t[62]=Ie,t[63]=K,t[64]=J,t[65]=e,t[66]=n,t[67]=r,t[68]=i):i=t[68],i}let e;return t[69]===J?e=t[70]:(e=(0,$.jsx)(Rn,{title:J}),t[69]=J,t[70]=e),e}let Ze;t[71]!==h||t[72]!==Be||t[73]!==M||t[74]!==N||t[75]!==x||t[76]!==J||t[77]!==T?(Ze=!M&&!N&&h!=null&&x!=null&&T!=null&&_t()?{reference:{clientThreadId:h,messageId:x,referenceIndex:T},target:{kind:`app_block`,metadata:{...J==null?{}:{title:J},tab:Be}}}:void 0,t[71]=h,t[72]=Be,t[73]=M,t[74]=N,t[75]=x,t[76]=J,t[77]=T,t[78]=Ze):Ze=t[78];let Qe=Ze,$e=F?.id??h,et=z?.messageId??x,tt;t[79]!==L||t[80]!==Ae||t[81]!==T||t[82]!==et?(tt={appBlockId:L,libraryFileId:Ae,messageId:et,refIndex:T},t[79]=L,t[80]=Ae,t[81]=T,t[82]=et,t[83]=tt):tt=t[83];let nt=We&&He&&!M,rt=F?.id??h,Y;t[84]!==Pe||t[85]!==O?(Y=Pe==null?void 0:{contentReferenceIndex:Pe.refIndex,messageId:Pe.messageId,widgetName:O??Fe.AppBlock,widgetType:Fe.AppBlock},t[84]=Pe,t[85]=O,t[86]=Y):Y=t[86];let it;t[87]!==n||t[88]!==o||t[89]!==j||t[90]!==L||t[91]!==Qe||t[92]!==p||t[93]!==M||t[94]!==S||t[95]!==C||t[96]!==K||t[97]!==q||t[98]!==J||t[99]!==ee||t[100]!==Xe||t[101]!==se||t[102]!==Ue||t[103]!==We||t[104]!==nt||t[105]!==rt||t[106]!==Y||t[107]!==ie||t[108]!==k?(it=(0,$.jsx)(xr,{additionalResourceDomains:n,appBlockId:L,bind:o,canOpen:nt,captureConsoleMessages:j,clientThreadId:rt,code:Xe,feedback:Qe,iconSvg:K,id:p,isStreaming:M,onConsoleMessagesChange:S,onReadyChange:C,progressiveStreaming:Ue,ref:ee,showArtifactCard:We,shareConversation:se,shareTarget:Y,styleMode:q,title:J,variant:ie,widgetRefSeenAtMs:k}),t[87]=n,t[88]=o,t[89]=j,t[90]=L,t[91]=Qe,t[92]=p,t[93]=M,t[94]=S,t[95]=C,t[96]=K,t[97]=q,t[98]=J,t[99]=ee,t[100]=Xe,t[101]=se,t[102]=Ue,t[103]=We,t[104]=nt,t[105]=rt,t[106]=Y,t[107]=ie,t[108]=k,t[109]=it):it=t[109];let at;return t[110]!==n||t[111]!==q||t[112]!==J||t[113]!==Xe||t[114]!==$e||t[115]!==tt||t[116]!==it?(at=(0,$.jsx)(En,{additionalResourceDomains:n,code:Xe,conversationId:$e,styleMode:q,source:tt,title:J,children:it}),t[110]=n,t[111]=q,t[112]=J,t[113]=Xe,t[114]=$e,t[115]=tt,t[116]=it,t[117]=at):at=t[117],at}function br(e){return e+1}function xr(e){"use forget";let t=(0,Z.c)(69),{additionalResourceDomains:n,appBlockId:r,bind:i,canOpen:a,captureConsoleMessages:o,clientThreadId:s,code:c,feedback:l,iconSvg:u,id:d,isStreaming:f,onConsoleMessagesChange:p,onReadyChange:m,progressiveStreaming:h,ref:g,shareConversation:_,shareTarget:v,showArtifactCard:y,styleMode:x,title:S,variant:C,widgetRefSeenAtMs:w}=e,{isExpanded:ee,isViewingHistoricalVersion:T,openExpandedView:te,setSharedPreview:E,sharedPreview:D,triggerRef:O}=bn(),k=(0,Q.useContext)(Ae),A;t[0]===n?A=t[1]:(A=n??[],t[0]=n,t[1]=A);let j;t[2]!==c||t[3]!==d||t[4]!==x||t[5]!==A?(j=[d,x,c,...A],t[2]=c,t[3]=d,t[4]=x,t[5]=A,t[6]=j):j=t[6];let M=j.join(`\0`),[ne,re]=(0,Q.useState)(null),ie=!f&&ne===M,P;t[7]===te?P=t[8]:(P=()=>{G(),te()},t[7]=te,t[8]=P);let F=P,ae;t[9]!==m||t[10]!==M?(ae=(e,t)=>{re(e?M:null),m?.(e,t)},t[9]=m,t[10]=M,t[11]=ae):ae=t[11];let oe=ae,I;t[12]!==n||t[13]!==r||t[14]!==i||t[15]!==o||t[16]!==s||t[17]!==c||t[18]!==oe||t[19]!==d||t[20]!==f||t[21]!==p||t[22]!==h||t[23]!==g||t[24]!==x||t[25]!==S||t[26]!==C||t[27]!==w?(I=(0,$.jsx)(Fr,{appBlockId:r,additionalResourceDomains:n,bind:i,code:c,id:d,isStreaming:f,captureConsoleMessages:o,clientThreadId:s,onConsoleMessagesChange:p,onReadyChange:oe,presentationSurface:`inline`,progressiveStreaming:h,ref:g,styleMode:x,title:S,variant:C,widgetRefSeenAtMs:w}),t[12]=n,t[13]=r,t[14]=i,t[15]=o,t[16]=s,t[17]=c,t[18]=oe,t[19]=d,t[20]=f,t[21]=p,t[22]=h,t[23]=g,t[24]=x,t[25]=S,t[26]=C,t[27]=w,t[28]=I):I=t[28];let se;t[29]!==k||t[30]!==I?(se={element:I,sandboxPolicy:k},t[29]=k,t[30]=I,t[31]=se):se=t[31];let ce=se,L;t[32]===ce?L=t[33]:(L=()=>ce,t[32]=ce,t[33]=L);let R=N(L),le;t[34]!==r||t[35]!==s||t[36]!==R||t[37]!==E?(le=e=>{if(e==null)return;let{preview:t,sourceToken:n}=ke({appBlockId:r,content:R(),conversationId:s??null,inlineContainer:e});return E(t),()=>{let e=Te();Le(t,n,e?.sharedPreview===t)}},t[34]=r,t[35]=s,t[36]=R,t[37]=E,t[38]=le):le=t[38];let ue=le,z,B;t[39]!==ce||t[40]!==D?(B=()=>{D!=null&&xe(D,ce)},z=[ce,D],t[39]=ce,t[40]=D,t[41]=z,t[42]=B):(z=t[41],B=t[42]),b(B,z);let de=T?F:void 0,fe;t[43]!==u||t[44]!==de||t[45]!==S||t[46]!==O?(fe=(0,$.jsx)(Dr,{iconSvg:u,onOpen:de,openButtonRef:O,title:S}),t[43]=u,t[44]=de,t[45]=S,t[46]=O,t[47]=fe):fe=t[47];let V=ee?fe:null,H;t[48]===ue?H=t[49]:(H=(0,$.jsx)(`div`,{ref:ue,className:`w-full`}),t[48]=ue,t[49]=H);let U;t[50]!==a||t[51]!==l||t[52]!==F||t[53]!==u||t[54]!==ie||t[55]!==f||t[56]!==_||t[57]!==v||t[58]!==y||t[59]!==H||t[60]!==S||t[61]!==O?(U=(0,$.jsx)(Cr,{canOpen:a,expandButtonRef:O,feedback:l,iconSvg:u,isShareReady:ie,shareConversation:_,shareTarget:v,isStreaming:f,showArtifactCard:y,title:S,onOpen:F,children:H}),t[50]=a,t[51]=l,t[52]=F,t[53]=u,t[54]=ie,t[55]=f,t[56]=_,t[57]=v,t[58]=y,t[59]=H,t[60]=S,t[61]=O,t[62]=U):U=t[62];let pe;t[63]!==ee||t[64]!==U?(pe=(0,$.jsx)(`div`,{hidden:ee,children:U}),t[63]=ee,t[64]=U,t[65]=pe):pe=t[65];let W;return t[66]!==V||t[67]!==pe?(W=(0,$.jsxs)($.Fragment,{children:[V,pe]}),t[66]=V,t[67]=pe,t[68]=W):W=t[68],W}function Sr(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:o,titleClassName:s}=e,c;t[0]===r?c=t[1]:(c=E(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=c);let l=s??`truncate text-base font-semibold`,u;t[2]===l?u=t[3]:(u=E(`text-token-text-primary`,l),t[2]=l,t[3]=u);let d=o??i,f;t[4]!==u||t[5]!==d?(f=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:u,children:d})}),t[4]=u,t[5]=d,t[6]=f):f=t[6];let p;t[7]!==a||t[8]!==f?(p=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,f]}),t[7]=a,t[8]=f,t[9]=p):p=t[9];let m;return t[10]!==n||t[11]!==c||t[12]!==p?(m=(0,$.jsxs)(`div`,{className:c,children:[p,n]}),t[10]=n,t[11]=c,t[12]=p,t[13]=m):m=t[13],m}function Cr(e){"use forget";let t=(0,Z.c)(20),{canOpen:n,children:r,expandButtonRef:i,feedback:a,iconSvg:o,isShareReady:s,isStreaming:c,onOpen:u,shareConversation:d,shareTarget:f,showArtifactCard:p,title:m}=e,h=z(),g;t[0]===h?g=t[1]:(g=h.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=h,t[1]=g);let _=g,v;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==_||t[6]!==o||t[7]!==s||t[8]!==c||t[9]!==u||t[10]!==d||t[11]!==f||t[12]!==p||t[13]!==m?(v=p?(0,$.jsxs)(`div`,{className:E(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,c&&`cursor-wait`),"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)(Sr,{action:(0,$.jsx)(ni,{canOpen:n,conversation:d,expandButtonRef:i,isReady:s,onOpen:u,target:f}),className:`min-h-13 px-4 py-2`,fallbackTitle:_,leading:c?(0,$.jsx)(l,{className:`icon-md text-token-text-primary shrink-0`}):(0,$.jsx)(kr,{iconSvg:o}),title:m}),(0,$.jsx)(`div`,{children:r})]}):(0,$.jsx)(ri,{conversation:d,isReady:s,target:f,children:r}),t[2]=n,t[3]=r,t[4]=i,t[5]=_,t[6]=o,t[7]=s,t[8]=c,t[9]=u,t[10]=d,t[11]=f,t[12]=p,t[13]=m,t[14]=v):v=t[14];let y;t[15]===a?y=t[16]:(y=a==null?null:(0,$.jsx)(Tr,{...a}),t[15]=a,t[16]=y);let b;return t[17]!==v||t[18]!==y?(b=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[v,y]}),t[17]=v,t[18]=y,t[19]=b):b=t[19],b}function wr(e){"use forget";let t=(0,Z.c)(17),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:o,showHeader:s,title:c}=e,l=d(Te),u=z(),f;t[0]===u?f=t[1]:(f=u.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=u,t[1]=f);let p=f;if(Ee(l,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==c?(e=(0,$.jsx)(Dr,{iconSvg:a,title:c}),t[2]=a,t[3]=c,t[4]=e):e=t[4],e}let m;t[5]!==p||t[6]!==a||t[7]!==s||t[8]!==c?(m=s?(0,$.jsx)(Sr,{className:`mb-2`,fallbackTitle:p,leading:(0,$.jsx)(kr,{iconSvg:a}),title:c}):null,t[5]=p,t[6]=a,t[7]=s,t[8]=c,t[9]=m):m=t[9];let h;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(h={minHeight:Br},t[10]=h):h=t[10];let g;t[11]!==i||t[12]!==o?(g=(0,$.jsx)(`div`,{className:`relative w-full`,style:h,children:i?(0,$.jsx)(zr,{onRetry:o}):(0,$.jsx)(Rr,{})}),t[11]=i,t[12]=o,t[13]=g):g=t[13];let _;return t[14]!==m||t[15]!==g?(_=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[m,g]}),t[14]=m,t[15]=g,t[16]=_):_=t[16],_}function Tr(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(d(Er))return null;let o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(ct,{}),t[0]=o):o=t[0];let s;return t[1]!==i||t[2]!==n||t[3]!==r?(s=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)(it,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:o})}),t[1]=i,t[2]=n,t[3]=r,t[4]=s):s=t[4],s}function Er(){return rt()}function Dr(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=z(),s,c,l,u,d;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),d=`not-prose relative clear-both my-4 w-full max-w-full`,u=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=Sr,l=r==null?void 0:(0,$.jsx)(x,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(H,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=l,t[7]=u,t[8]=d):(s=t[4],c=t[5],l=t[6],u=t[7],d=t[8]);let f;t[9]===n?f=t[10]:(f=(0,$.jsx)(Or,{iconSvg:n}),t[9]=n,t[10]=f);let p;t[11]!==s||t[12]!==c||t[13]!==l||t[14]!==f||t[15]!==a?(p=(0,$.jsx)(s,{action:l,className:`w-full`,fallbackTitle:c,leading:f,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=l,t[14]=f,t[15]=a,t[16]=p):p=t[16];let m;t[17]!==u||t[18]!==p?(m=(0,$.jsx)(`div`,{className:u,children:p}),t[17]=u,t[18]=p,t[19]=m):m=t[19];let h;return t[20]!==d||t[21]!==m?(h=(0,$.jsx)(`div`,{className:d,children:m}),t[20]=d,t[21]=m,t[22]=h):h=t[22],h}function Or(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(kr,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function kr(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=Ar(r),t[0]=r,t[1]=a);let o=a,s;return t[2]!==i||t[3]!==o?(s=o==null?(0,$.jsx)(Ve,{"aria-hidden":`true`,className:E(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:E(`icon-md shrink-0`,i),children:(0,$.jsx)(Pe,{svgString:o,className:`h-full w-full`})}),t[2]=i,t[3]=o,t[4]=s):s=t[4],s}function Ar(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>Jr||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Yr)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Zr.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!jr(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function jr(e){let t=e.replace(Xr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Xr)){let e=t[1],n=t[2];if(!Qr.has(e)||!Mr(e,n))return!1}return!0}function Mr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function Nr(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=z(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(H,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(H,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(H,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function Pr(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:i}=e,a=z(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let s=o,c;t[2]===r?c=t[3]:(c=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=c);let l;t[4]!==s||t[5]!==i||t[6]!==c?(l=(0,$.jsx)(x,{ref:i,type:`button`,icon:We,color:`ghost`,size:`medium`,label:s,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:c}),t[4]=s,t[5]=i,t[6]=c,t[7]=l):l=t[7];let u;return t[8]!==n||t[9]!==s||t[10]!==l?(u=(0,$.jsx)(L,{label:s,className:n,children:l}),t[8]=n,t[9]=s,t[10]=l,t[11]=u):u=t[11],u}function Fr(e){"use forget";let t=(0,Z.c)(173),{appBlockId:n,additionalResourceDomains:r,bind:a,clientThreadId:s,code:c,id:l,captureConsoleMessages:u,isStreaming:f,onConsoleMessagesChange:p,onReadyChange:m,presentationSurface:h,progressiveStreaming:g,ref:_,styleMode:v,surface:y,title:x,variant:S,widgetRefSeenAtMs:C}=e,w=f!==void 0&&f,ee=g!==void 0&&g,T=v===void 0?`default`:v,D=y===void 0?`inline`:y,O=S===void 0?`inline`:S,k=z(),A=(0,Q.useRef)(null),j=(0,Q.useRef)(null),M=Ke(a),[ne,re]=(0,Q.useState)(M.values),P=i(ne,M.values)?ne:M.values;P!==ne&&re(P);let F=[...M.callbacks.keys()],[ae,oe]=(0,Q.useState)(F),I=i(ae,F)?ae:F;I!==ae&&oe(I);let se=(0,Q.useRef)(P),ce=(0,Q.useRef)(I),L=(0,Q.useRef)(M.callbacks),R=a!=null,le=(0,Q.useRef)(!1),ue=(0,Q.useRef)(!1),B=(0,Q.useRef)(null),de=(0,Q.useRef)(null),fe=(0,Q.useRef)(null),V=(0,Q.useRef)(null),U=(0,Q.useRef)(null),pe=(0,Q.useRef)(null),W=(0,Q.useRef)(null),me=(0,Q.useRef)(0),he=(0,Q.useRef)(null),ge=(0,Q.useRef)(null),_e;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(_e=[],t[0]=_e):_e=t[0];let ve=(0,Q.useRef)(_e),ye=ie(),be=d(o),{allowDependencyNetworkRequestsWithoutCanvasAccess:xe}=(0,Q.useContext)(Ae),Se=$e()||xe,G=Ze(s)&&!xe,Ce=ye?`dark`:`light`,we=k.locale,Te;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(Te={status:`streaming`},t[1]=Te):Te=t[1];let[Ee,De]=(0,Q.useState)(Te),Oe=Ee.status===`finalized`&&Ee.html!==c,ke=ee&&!w&&(O===`artifact`||Ee.status===`failed`),K=ee&&D===`inline`&&Ee.status!==`static`&&!ke&&!Oe,je=K&&w&&O===`artifact`&&!vr(c),Me=je?0:Vr,Ne=Se?`execution-enabled`:`execution-disabled`,Pe=G?`network-enabled`:`network-disabled`,Fe=R?`bindings-enabled`:`bindings-disabled`,Ie=K?`progressive-app-block-stream`:c,Le;t[2]===r?Le=t[3]:(Le=r??[],t[2]=r,t[3]=Le);let Re;t[4]!==be||t[5]!==we||t[6]!==T||t[7]!==D||t[8]!==Fe||t[9]!==Ie||t[10]!==Le||t[11]!==Ne||t[12]!==Pe||t[13]!==Ce?(Re=[Ce,be,D,T,we,Ne,Pe,Fe,Ie,...Le],t[4]=be,t[5]=we,t[6]=T,t[7]=D,t[8]=Fe,t[9]=Ie,t[10]=Le,t[11]=Ne,t[12]=Pe,t[13]=Ce,t[14]=Re):Re=t[14];let q=Re.join(`\0`),J;t[15]===r?J=t[16]:(J=ln(r),t[15]=r,t[16]=J);let ze=J,Be=G?`deps_only`:`disabled`,Ve=D===`inline`?O:void 0,He=K?`progressive`:`static`,Ue;t[17]!==D||t[18]!==Be||t[19]!==Ve||t[20]!==He?(Ue={networkPolicy:Be,surface:D,variant:Ve,renderMode:He},t[17]=D,t[18]=Be,t[19]=Ve,t[20]=He,t[21]=Ue):Ue=t[21];let We=Ue,[Ge,Qe]=(0,Q.useState)(0),[tt,nt]=(0,Q.useState)(null),rt=tt?.signature===q?tt.status:null,Y=rt===`ready`,it=Y||rt===`failed_after_ready`,at=K&&rt===`failed`,ot=!w&&!K&&rt===`failed`,st=h??D,ct=ee&&st===`inline`&&O===`inline`,lt=K&&st===`inline`&&w&&!ot,ut;t[22]!==c||t[23]!==We||t[24]!==C?(ut={content:c,metricTags:We,widgetRefSeenAtMs:C},t[22]=c,t[23]=We,t[24]=C,t[25]=ut):ut=t[25];let{cancelFirstPaintFrame:dt,startRunMetrics:ft}=kt(ut),pt,mt;t[26]!==Y||t[27]!==m?(pt=()=>{m?.(Y)},mt=[Y,m],t[26]=Y,t[27]=m,t[28]=pt,t[29]=mt):(pt=t[28],mt=t[29]),(0,Q.useEffect)(pt,mt);let ht,gt;t[30]!==I||t[31]!==P||t[32]!==M.callbacks?(ht=()=>{se.current=P,ce.current=I,L.current=M.callbacks},gt=[I,P,M.callbacks],t[30]=I,t[31]=P,t[32]=M.callbacks,t[33]=ht,t[34]=gt):(ht=t[33],gt=t[34]),b(ht,gt);let _t;t[35]===Symbol.for(`react.memo_cache_sentinel`)?(_t=e=>{j.current===e&&A.current?.updateAppBlockMessenger?.(Je(e,se.current,ce.current))},t[35]=_t):_t=t[35];let vt=N(_t),yt;t[36]===vt?yt=t[37]:(yt=e=>{let t=j.current;if(t==null)return;let n=Xe(e,t),r=n&&L.current.get(n.name);if(n!=null&&r){let e=()=>{te.postTask(()=>vt(t))};try{Promise.resolve(r(...n.args)).then(e,e)}catch{e()}}},t[36]=vt,t[37]=yt);let bt=N(yt),xt;t[38]!==R||t[39]!==Y||t[40]!==vt?(xt=()=>{let e=j.current;!Y||!R||e==null||vt(e)},t[38]=R,t[39]=Y,t[40]=vt,t[41]=xt):xt=t[41];let St;t[42]!==I||t[43]!==P||t[44]!==R||t[45]!==Y||t[46]!==vt?(St=[I,P,R,Y,vt],t[42]=I,t[43]=P,t[44]=R,t[45]=Y,t[46]=vt,t[47]=St):St=t[47],(0,Q.useEffect)(xt,St);let Ct,Tt;t[48]!==Y||t[49]!==h?(Ct=()=>{!Y||h==null||A.current?.updateAppBlockSurface?.(h)},Tt=[Y,h],t[48]=Y,t[49]=h,t[50]=Ct,t[51]=Tt):(Ct=t[50],Tt=t[51]),(0,Q.useEffect)(Ct,Tt);let Dt,Ot;t[52]===Symbol.for(`react.memo_cache_sentinel`)?(Dt=()=>({clearCapturedConsoleMessages:()=>{ve.current=[]},captureScreenshotDataUrl:async()=>(await A.current?.screenshot())?.imageBase64??null,focus:()=>{A.current?.focus()}}),Ot=[],t[52]=Dt,t[53]=Ot):(Dt=t[52],Ot=t[53]),(0,Q.useImperativeHandle)(_,Dt,Ot);let At;t[54]===Symbol.for(`react.memo_cache_sentinel`)?(At=()=>{he.current!=null&&(window.clearTimeout(he.current),he.current=null)},t[54]=At):At=t[54];let jt=N(At),Mt;t[55]===Symbol.for(`react.memo_cache_sentinel`)?(Mt=()=>{ge.current!=null&&(window.clearTimeout(ge.current),ge.current=null)},t[55]=Mt):Mt=t[55];let X=N(Mt),Nt;t[56]!==Y||t[57]!==K?(Nt=()=>{if(!K||!Y||U.current==null)return;let e=V.current,t=A.current;if(e==null||t?.updateAppBlockStream==null||ue.current)return;let n=me.current;V.current=null,de.current=wt(),fe.current=e.html,e.isFinal&&(ue.current=!0);let r=()=>me.current!==n||U.current==null?Promise.resolve():t.updateAppBlockStream?.(e)??Promise.resolve(),i=W.current,a=i==null?r():i.then(r);W.current=a,a.then(()=>{W.current===a&&(W.current=null);let t=U.current;me.current!==n||t==null||(vr(e.html)&&t.markFirstPaint(),e.isFinal&&(t.reportPayloadSize(e.html),De({status:`finalized`,html:e.html})))},e=>{W.current===a&&(W.current=null),me.current===n&&(e instanceof DOMException&&e.name===`AbortError`||pe.current?.(`stream_update`,Et(e)))})},t[56]=Y,t[57]=K,t[58]=Nt):Nt=t[58];let Pt=N(Nt),Ft;t[59]!==be||t[60]!==u||t[61]!==jt||t[62]!==X||t[63]!==c||t[64]!==R||t[65]!==Se||t[66]!==G||t[67]!==Oe||t[68]!==w||t[69]!==we||t[70]!==p||t[71]!==m||t[72]!==h||t[73]!==q||t[74]!==Ee.status||t[75]!==ke||t[76]!==K||t[77]!==ft||t[78]!==T||t[79]!==D||t[80]!==Ce?(Ft=()=>{if(!Se)return;if(Ee.status===`failed`){if(w)return;De({status:`static`}),Qe(Lr);return}(Oe||ke&&Ee.status!==`static`)&&De({status:`static`});let e=K&&A.current?.updateAppBlockStream!=null;if(K&&!e){w||De({status:`static`});return}le.current=!0,ue.current=!1,B.current=null,de.current=null,fe.current=null,V.current=null,U.current=null,pe.current=null,W.current=null,X(),me.current+=1;let t=me.current;jt(),nt(null),j.current=R?crypto.randomUUID():null;let{expectReadySignal:n,html:r,frameColorScheme:i}=un(c,Ce,we,be,D,{loadTailwind:G,progressiveStreaming:e,syncPresentationSurface:h!=null,styleMode:T}),a=!1,o=!1,s=!1,l=!1,d=!1,f=()=>me.current===t,g=ft(f,{deferFirstPaint:e,deferPayloadSize:e});e&&(U.current=g);let _=e=>{!u||p==null||!f()||(ve.current=e,!l&&(l=!0,te.postTask(()=>{l=!1,f()&&p(ve.current)},{priority:`background`})))},v=e=>{!f()||a||s||(a=!0,jt(),g.markReady(e),!d&&(d=!0,te.postTask(()=>{d=!1,!(!f()||s)&&(o=!0,nt({signature:q,status:`ready`}))},{priority:`background`})))},y=(t,n)=>{!f()||s||(s=!0,jt(),X(),V.current=null,U.current=null,e&&De({status:`failed`}),nt({signature:q,status:o?`failed_after_ready`:`failed`}),g.reportFailure(t,n),te.postTask(()=>{f()&&(e?m?.(!1):m?.(!1,`failure`))},{priority:`background`}))};pe.current=y,ve.current=[],_([]),he.current=window.setTimeout(()=>{y(`sandbox_eval`,`ready_timeout`)},Ur),(async()=>{let t=A.current?.evalAsync({code:r,...j.current==null?{}:{additionalGlobals:{__appBlockMessenger:Je(j.current,se.current,ce.current)}},expectReadySignal:n,language:`html`,frameColorScheme:i,shouldPreservePreviewOnFatalError:()=>f()&&e&&o});if(t==null){y(`sandbox_eval`,`missing_generator`);return}for(;;){let e=await t.next();if(e.done){f()&&!a&&y(`sandbox_eval`,`generator_completed_without_ready`);break}f()&&(_([...ve.current,e.value]),e.value.type===qe.ENVIRONMENT_STATUS&&e.value.status===Ye.RUNNING_CODE&&v(`running_code`),e.value.type===qe.RUN_COMPLETE&&(e.value.wasFatalError?y(`runtime`,`fatal_runtime_error`):(v(`run_complete`),g.reportSuccess(`run_complete`))),await te.yield())}})().catch(e=>{f()&&(e instanceof DOMException&&e.name===`AbortError`||y(`sandbox_eval`,Et(e)))})},t[59]=be,t[60]=u,t[61]=jt,t[62]=X,t[63]=c,t[64]=R,t[65]=Se,t[66]=G,t[67]=Oe,t[68]=w,t[69]=we,t[70]=p,t[71]=m,t[72]=h,t[73]=q,t[74]=Ee.status,t[75]=ke,t[76]=K,t[77]=ft,t[78]=T,t[79]=D,t[80]=Ce,t[81]=Ft):Ft=t[81];let It=N(Ft),Lt;t[82]!==jt||t[83]!==X?(Lt=()=>{me.current+=1,le.current=!1,ue.current=!1,B.current=null,fe.current=null,V.current=null,U.current=null,pe.current=null,W.current=null,jt(),X(),nt(null),Qe(Ir)},t[82]=jt,t[83]=X,t[84]=Lt):Lt=t[84];let Rt=N(Lt),zt;t[85]===st?zt=t[86]:(zt=st===`inline`?{margin:-4,width:`calc(100% + ${Hr*2}px)`}:void 0,t[85]=st,t[86]=zt);let Bt=zt,Vt;t[87]!==dt||t[88]!==jt||t[89]!==X||t[90]!==It?(Vt=()=>{It();let e=A.current;return()=>{me.current+=1,j.current=null,U.current=null,pe.current=null,W.current=null,jt(),X(),dt(),e?.stop()}},t[87]=dt,t[88]=jt,t[89]=X,t[90]=It,t[91]=Vt):Vt=t[91];let Ht;t[92]!==dt||t[93]!==jt||t[94]!==X||t[95]!==Se||t[96]!==q||t[97]!==It||t[98]!==Ge?(Ht=[dt,jt,X,Se,q,It,Ge],t[92]=dt,t[93]=jt,t[94]=X,t[95]=Se,t[96]=q,t[97]=It,t[98]=Ge,t[99]=Ht):Ht=t[99],(0,Q.useEffect)(Vt,Ht);let Ut,Wt;t[100]!==w||t[101]!==It||t[102]!==K?(Ut=()=>{!K||w||le.current||A.current?.updateAppBlockStream!=null||It()},Wt=[w,It,K],t[100]=w,t[101]=It,t[102]=K,t[103]=Ut,t[104]=Wt):(Ut=t[103],Wt=t[104]),(0,Q.useEffect)(Ut,Wt);let Gt,Kt;if(t[105]!==X||t[106]!==c||t[107]!==Pt||t[108]!==ot||t[109]!==Y||t[110]!==w||t[111]!==K||t[112]!==O?(Gt=()=>{if(!K||!Y||ot||ue.current||A.current?.updateAppBlockStream==null)return;let e=w?_r(c):c;if(w&&(V.current?.html??fe.current)===e)return;if(V.current={html:e,isFinal:!w},!w){X(),Pt();return}let t=de.current;if(t==null&&O===`artifact`&&(B.current??=wt(),t=B.current),t==null){Pt();return}let n=O===`artifact`?Gr:Wr,r=wt()-t;if(r>=n){Pt();return}return ge.current=window.setTimeout(()=>{ge.current=null,Pt()},n-r),X},Kt=[X,c,Pt,ot,Y,w,K,O],t[105]=X,t[106]=c,t[107]=Pt,t[108]=ot,t[109]=Y,t[110]=w,t[111]=K,t[112]=O,t[113]=Gt,t[114]=Kt):(Gt=t[113],Kt=t[114]),(0,Q.useEffect)(Gt,Kt),!Se){let e;return t[115]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(Nn,{}),t[115]=e):e=t[115],e}let qt=ct&&`flex-col`,Jt=st===`inline`&&(je?`h-0 min-h-0 overflow-hidden`:`min-h-[120px] overflow-visible`),Yt=st===`stage`&&`h-full min-h-0`,Xt;t[116]!==qt||t[117]!==Jt||t[118]!==Yt?(Xt=E(`flex w-full`,qt,Jt,Yt),t[116]=qt,t[117]=Jt,t[118]=Yt,t[119]=Xt):Xt=t[119];let Zt;t[120]!==ct||t[121]!==lt||t[122]!==x?(Zt=ct?(0,$.jsx)(Wn,{isVisible:lt,title:x}):null,t[120]=ct,t[121]=lt,t[122]=x,t[123]=Zt):Zt=t[123];let Qt=st===`inline`?`flex-none`:`w-full`,$t=lt&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,en;t[124]!==Qt||t[125]!==$t?(en=E(`relative min-w-0`,Qt,$t),t[124]=Qt,t[125]=$t,t[126]=en):en=t[126];let tn=`${Ge}:${G?`network-enabled`:`network-disabled`}`,nn;t[127]!==n||t[128]!==s||t[129]!==l?(nn=JSON.stringify([s??null,n??l]),t[127]=n,t[128]=s,t[129]=l,t[130]=nn):nn=t[130];let rn;t[131]===k?rn=t[132]:(rn=k.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[131]=k,t[132]=rn);let an=G?`deps-only`:`none`,on=G?Kr:qr,sn=it?0:-1,cn=R?bt:void 0,dn=st===`inline`&&T===`open`,fn=st!==`stage`,pn=K?Me:Br,mn;t[133]!==l||t[134]!==It||t[135]!==ze||t[136]!==tn||t[137]!==nn||t[138]!==rn||t[139]!==an||t[140]!==on||t[141]!==sn||t[142]!==cn||t[143]!==dn||t[144]!==fn||t[145]!==pn?(mn=(0,$.jsx)(et,{id:l,sandboxOriginId:nn,title:rn,visuallyHidden:!1,networkPolicy:an,additionalResourceDomains:ze,sandboxPermissions:on,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:sn,onRetryCodeRun:It,onAppBlockMessage:cn,transparentBackground:dn,useIntrinsicHeight:fn,intrinsicHeightFallback:pn,ref:A},tn),t[133]=l,t[134]=It,t[135]=ze,t[136]=tn,t[137]=nn,t[138]=rn,t[139]=an,t[140]=on,t[141]=sn,t[142]=cn,t[143]=dn,t[144]=fn,t[145]=pn,t[146]=mn):mn=t[146];let hn;t[147]===lt?hn=t[148]:(hn=lt?(0,$.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 z-10 cursor-wait`}):null,t[147]=lt,t[148]=hn);let gn;t[149]!==at||t[150]!==ot||t[151]!==it||t[152]!==K?(gn=!it&&!ot&&(!K||at)?(0,$.jsx)(Rr,{}):null,t[149]=at,t[150]=ot,t[151]=it,t[152]=K,t[153]=gn):gn=t[153];let _n;t[154]!==ot||t[155]!==Rt?(_n=ot?(0,$.jsx)(zr,{onRetry:Rt}):null,t[154]=ot,t[155]=Rt,t[156]=_n):_n=t[156];let vn;t[157]!==Bt||t[158]!==lt||t[159]!==en||t[160]!==mn||t[161]!==hn||t[162]!==gn||t[163]!==_n?(vn=(0,$.jsxs)(`div`,{"aria-busy":lt,className:en,style:Bt,children:[mn,hn,gn,_n]}),t[157]=Bt,t[158]=lt,t[159]=en,t[160]=mn,t[161]=hn,t[162]=gn,t[163]=_n,t[164]=vn):vn=t[164];let yn;t[165]!==lt||t[166]!==O?(yn=lt&&O===`artifact`?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:(0,$.jsx)(H,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[165]=lt,t[166]=O,t[167]=yn):yn=t[167];let bn;return t[168]!==Xt||t[169]!==Zt||t[170]!==vn||t[171]!==yn?(bn=(0,$.jsxs)(`div`,{className:Xt,children:[Zt,vn,yn]}),t[168]=Xt,t[169]=Zt,t[170]=vn,t[171]=yn,t[172]=bn):bn=t[172],bn}function Ir(e){return e+1}function Lr(e){return e+1}function Rr(){"use forget";let e=(0,Z.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsx)(l,{className:`icon-sm text-token-text-tertiary`}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,role:`status`,children:[t,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:(0,$.jsx)(H,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})})]}),e[1]=n):n=e[1],n}function zr(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(H,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(H,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(x,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii=e((()=>{Z=W(),w(),nt(),je(),st(),g(),S(),tt(),_(),Ue(),He(),ze(),Re(),Qe(),y(),Oe(),lt(),me(),m(),C(),p(),Ie(),ce(),oe(),v(),le(),Y(),ut(),he(),Ge(),O(),F(),Q=n(de()),V(),yn(),Rt(),bt(),Mn(),we(),In(),Cn(),Gn(),St(),Se(),Ne(),Vt(),hr(),$=B(),Br=432,Vr=120,Hr=4,Ur=15e3,Wr=100,Gr=350,Kr=`allow-scripts allow-same-origin allow-forms`,qr=`allow-scripts allow-same-origin`,Jr=12e3,Yr=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Xr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Zr=new Set([`svg`,`path`]),Qr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),$r=/<script(?:\s|>)/i,ei=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,ti=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,ni=e=>{"use forget";let t=(0,Z.c)(13),{canOpen:n,conversation:r,expandButtonRef:i,isReady:a,onOpen:o,target:s}=e,c;t[0]!==n||t[1]!==i||t[2]!==o?(c=n&&o!=null?(0,$.jsx)(Pr,{ref:i,className:`shrink-0`,onClick:o}):null,t[0]=n,t[1]=i,t[2]=o,t[3]=c):c=t[3];let l=c;if(r==null)return l;let u;t[4]===s?u=t[5]:(u=s??{contentReferenceIndex:-1,messageId:``},t[4]=s,t[5]=u);let d=u,f=a&&s!=null,p;t[6]===l?p=t[7]:(p=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(L,{label:n,children:(0,$.jsx)(x,{type:`button`,icon:Be,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),l]}):l},t[6]=l,t[7]=p);let m;return t[8]!==d||t[9]!==r||t[10]!==f||t[11]!==p?(m=(0,$.jsx)(dt,{category:Fe.AppBlock,conversation:r,isReady:f,target:d,children:p}),t[8]=d,t[9]=r,t[10]=f,t[11]=p,t[12]=m):m=t[12],m},ri=e=>{"use forget";let t=(0,Z.c)(9),{children:n,conversation:r,isReady:i,target:a}=e;if(r==null)return n;let o;t[0]===a?o=t[1]:(o=a??{contentReferenceIndex:-1,messageId:``},t[0]=a,t[1]=o);let s=o,c=i&&a!=null,l;t[2]===n?l=t[3]:(l=e=>(0,$.jsxs)(`div`,{className:`group/keyboard-or-hover relative`,children:[n,e.isVisible?(0,$.jsx)(`div`,{className:`pointer-events-none absolute end-2 top-2 z-10`,children:(0,$.jsx)(`div`,{className:`cant-hover:hidden`,children:(0,$.jsx)(ft,{action:e})})}):null]}),t[2]=n,t[3]=l);let u;return t[4]!==s||t[5]!==r||t[6]!==c||t[7]!==l?(u=(0,$.jsx)(dt,{category:Fe.InlineAppBlock,conversation:r,isReady:c,target:s,children:l}),t[4]=s,t[5]=r,t[6]=c,t[7]=l,t[8]=u):u=t[8],u}}));export{vt as S,Rt as _,ii as a,bt as b,sr as c,On as d,Mn as f,wt as g,Bt as h,gr as i,cr as l,zt as m,Rr as n,lr as o,Vt as p,Fr as r,hr as s,yr as t,Dn as u,xt as v,yt as x,St as y};
//# sourceMappingURL=e3b746a6-bsl17zg9he1ydjez.js.map