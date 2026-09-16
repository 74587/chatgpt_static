const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-o8ffy4s44qahk79w.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-iq2rfhyqu3c4bw81.js","assets/2340486e-dyt4epctwx2pn2sj.js","assets/conversation-small-gp6pwihpozdnmvpo.js","assets/30901919-b5sdumc5lk6y4sbn.js","assets/c470f5ab-kiqetxo1585ouzeu.js","assets/0e5afe53-l6lffo79xu6x915x.js","assets/conversation-small-ooly82uw.css","assets/8b34dbc2-1fupz3fowpuan4hi.js","assets/82782bc9-lyvnercz85n4auig.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{AN as r,CH as i,D9 as a,IF as o,IN as s,JB as c,JJ as l,MF as u,MN as d,MT as f,MX as p,NN as m,NT as h,Om as g,PF as _,Tb as v,Tm as y,VX as b,_3 as x,_Y as S,b9 as C,det as w,e3 as T,g3 as E,gY as D,ic as O,jN as k,k9 as ee,kN as A,m9 as j,pc as M,qB as N,qJ as te,set as P,t3 as ne,uet as re,wH as F,wb as I,y9 as ie}from"./4813494d-iq2rfhyqu3c4bw81.js";import{Fn as L,In as R,Ln as ae,Rn as oe,Sn as se,hn as z,jn as ce,mn as le,zn as ue}from"./2340486e-dyt4epctwx2pn2sj.js";import{$5 as de,$Mn as fe,AS as pe,B5 as me,Cn as B,GO as he,H5 as ge,J5 as _e,JO as ve,Ow as V,Q5 as ye,U5 as be,V5 as H,W5 as xe,Y5 as Se,akt as Ce,cd as U,e7 as we,eNn as Te,ejn as Ee,ikt as De,jS as Oe,kw as ke,ld as Ae,okt as je,q5 as Me,rPn as W,tPn as Ne,tjn as Pe,wn as Fe}from"./conversation-small-gp6pwihpozdnmvpo.js";import{bE as Ie,ew as Le,ix as Re,rx as G,tw as ze,yE as Be}from"./30901919-b5sdumc5lk6y4sbn.js";import{a as Ve,d as He,o as Ue,r as We,t as Ge,u as Ke}from"./8d846022-meglr123wki13zk0.js";import{i as qe,n as K,r as q}from"./91969468-ggdpijnifantvwcj.js";import{n as Je,t as Ye}from"./4d271a7b-jzsysibyxoseadum.js";import{n as Xe,r as Ze}from"./58bafdef-l1l0rript1i6z01p.js";import{a as Qe,i as $e}from"./e01e2324-gcpdwwci7ixc7dhh.js";import{i as J,t as et}from"./5dc32f04-gbc03t7r4b5s0e8b.js";import{c as tt,i as nt,o as rt,r as it,s as at,t as ot}from"./56dee4d8-nkuz6v9t4lzts6hj.js";import{n as st,t as ct}from"./72bb039a-o0e59qmyqva25y3n.js";import{i as lt,n as ut,r as dt,t as ft}from"./9eb56efa-inu8by8ywxf049gu.js";import{i as Y,n as pt,r as mt,t as X}from"./cc79834b-el90vpmuh9nh8rmd.js";function ht(){return j(`2779568043`)}function gt(){return j(`3864712762`)}function _t(){return ie(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var vt=e((()=>{C()}));function yt({loadSource:e,errorSource:t,errorType:n,networkPolicy:r,outcome:i,readySignal:a,renderMode:o,surface:s,variant:c}){let l={network_policy:r,surface:s};return e!=null&&(l.load_source=e),t!=null&&(l.error_source=t),n!=null&&(l.error_type=n),i!=null&&(l.outcome=i),a!=null&&(l.ready_signal=a),o!=null&&(l.render_mode=o),c!=null&&(l.variant=c),l}function bt(){return typeof performance<`u`?performance.now():Date.now()}function xt(e){return new TextEncoder().encode(e).byteLength/1024}function St(e){return e instanceof Error?e.name:`unknown`}function Ct(e,t,n=1){w.count(P.APP_BLOCKS,e,yt(t),n)}function wt(e,t,n){w.hist(P.APP_BLOCKS,e,yt(n),t)}function Tt({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,Et.useRef)(bt()),i=(0,Et.useRef)(null),a=(0,Et.useRef)(!1),o=(0,Et.useRef)(!1),s=d(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=d((n=e)=>{o.current||(o.current=!0,wt(kt,xt(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:d((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=bt(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),Ct(Mt,t);let _=(e,n)=>{f||(f=!0,Ct(jt,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=bt();wt(At,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,wt(Dt,s-r.current,t),n!=null&&wt(Pt,s-n,t))},y=(e,n)=>{if(s(),typeof window>`u`){v(e,n);return}i.current=window.requestAnimationFrame(()=>{if(t.loadSource===`saved_inline`){i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,n)});return}i.current=null,v(e,n)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=bt(),g=n,wt(Nt,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{!e()||p||(p=!0,s(),Ct(Ot,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft=e((()=>{re(),k(),Et=n(ue()),Dt=`app_block.first_render_time_ms`,Ot=`app_block.load.failure`,kt=`app_block.payload_size_kb`,At=`app_block.ready_to_first_paint_ms`,jt=`app_block.render.outcome`,Mt=`app_block.render.start`,Nt=`app_block.sandbox_eval_to_ready_ms`,Pt=`app_block.widget_ref_to_first_paint_ms`})),It,Lt=e((()=>{It=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),Rt=e((()=>{})),zt,Bt=e((()=>{Rt(),zt=`/cdn/assets/app-block-sandbox-foundation-l4fcvweu.css`})),Vt,Ht=e((()=>{Vt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}:where(button):is(:enabled,:disabled){font-weight:500}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){appearance:none;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;width:100%;min-width:0;height:24px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.4}:where(input[type=range])::-webkit-slider-runnable-track{background:0 0;border:0;height:24px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;margin-top:2px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}:where(input[type=range])::-moz-range-track{background:0 0;border:0;border-radius:9999px;height:24px}:where(input[type=range])::-moz-range-progress{background:0 0;border-radius:9999px;height:24px}:where(input[type=range])::-moz-range-thumb{box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}@media (hover:hover) and (pointer:fine){:where(input[type=range]:enabled:hover)::-webkit-slider-thumb{transform:scale(1.05)}:where(input[type=range]:enabled:hover)::-moz-range-thumb{transform:scale(1.05)}}:where(input[type=range]:focus-visible){outline:none}:where(input[type=range]:focus-visible)::-webkit-slider-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(input[type=range]:focus-visible)::-moz-range-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),Z=e((()=>{})),Ut,Wt=e((()=>{Z(),Ut=`/cdn/assets/app-block-sandbox-ewoqdfdx.css`}));function Gt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Kt=e((()=>{}));function qt(e){return String.raw(rn||=Gt([`<script>
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
`)}function Xt(e){let t=e.trim().replaceAll(`_`,`-`);return t.length===0||!/^[A-Za-z0-9-]+$/.test(t)?`en`:t}function Zt(e){if(/^https?:\/\//i.test(e)||typeof window>`u`)return e;let t=window.location.origin;return new URL(e,t).toString()}function Qt(e){try{return new URL(e).origin}catch{return null}}function $t(e){return ln.has(e)?e:`default`}function en(e,t){return t===`skybridge`||t===`stage`?e===`dark`?`#212121`:`#ffffff`:e===`dark`?`#000000`:`#fcfcfc`}function tn(e=[]){let t=Zt(Ut),n=Zt(zt),r=[Qt(on),Qt(sn),Qt(t),Qt(n),...cn,...e.map(Qt)];return Array.from(new Set(r.filter(e=>e!=null)))}function nn(e,t=`light`,n=`en`,r=`default`,i=`inline`,{loadTailwind:a=!0,platform:o,progressiveStreaming:s=!1,syncPresentationSurface:c=!1,styleMode:l=`default`}={}){let u=e.trim(),d=c?qt(l):``;if(!s&&Jt(u))return{html:c?Yt(u,d):u,expectReadySignal:!1};let f=Xt(n),p=l===`open`?It:Vt,m=Zt(l===`open`?zt:Ut),h=$t(r),g=en(t,i),_=i===`skybridge`&&o!=null&&o!==`web`||i===`inline`&&l===`open`,v=[`color-scheme: ${t};`,_?`background-color: transparent;`:`background-color: var(--main-surface-primary, ${g});`].join(` `);return{expectReadySignal:a,frameColorScheme:t,html:`<!doctype html>
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
</html>`}}var rn,an,on,sn,cn,ln,un,dn,fn=e((()=>{Lt(),Bt(),Ht(),Wt(),Kt(),on=`https://cdn.tailwindcss.com`,sn=`https://images.openai.com`,cn=[`https://cdnjs.cloudflare.com`,`https://esm.sh`,`https://cdn.jsdelivr.net`,`https://unpkg.com`,`https://fonts.googleapis.com`,`https://fonts.gstatic.com`,`https://fonts.bunny.net`],ln=new Set([`default`,`blue`,`green`,`yellow`,`purple`,`pink`,`orange`,`black`]),un=`<style>
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
<\/script>`]))}));function pn(){"use forget";let e=(0,mn.useContext)(hn);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var mn,hn,gn=e((()=>{mn=n(ue()),hn=(0,mn.createContext)(null)})),_n,vn=e((()=>{l(),z(),_n=te(()=>le(()=>import(`./7aa2b76f-o8ffy4s44qahk79w.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}));function yn(e){"use forget";let t=(0,Sn.c)(42),{additionalResourceDomains:n,canSubmitTurn:r,children:i,code:a,conversationId:o,headerAction:s,source:c,styleMode:l,title:u}=e,d=`app-block:${c.appBlockId}:${(0,Cn.useId)()}`,f=(0,Cn.useRef)(null),[p,m]=(0,Cn.useState)(null),h=c.appBlockId,g=c.libraryFileId,_=c.messageId,v=c.refIndex,y=o??null,b;t[0]!==y||t[1]!==h?(b={appBlockId:h,conversationId:y},t[0]=y,t[1]=h,t[2]=b):b=t[2];let x=b,S=ne(me),C;t[3]!==S||t[4]!==x?(C=xe(S,x),t[3]=S,t[4]=x,t[5]=C):C=t[5];let w=C,T=S?.appBlockId===h&&S.conversationId===y&&(S.isOriginalVersion===!0||S.versionNumber!=null),E=w||T,D;t[6]!==S||t[7]!==d||t[8]!==x?(D=Me(S,x,d),t[6]=S,t[7]=d,t[8]=x,t[9]=D):D=t[9];let O=D,k;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(k=()=>{f.current?.focus()},t[10]=k):k=t[10];let ee=k,A=p?.supportsAtomicMove?p:void 0,j;t[11]!==h||t[12]!==g||t[13]!==_||t[14]!==v?(j={appBlockId:h,libraryFileId:g,messageId:_,refIndex:v},t[11]=h,t[12]=g,t[13]=_,t[14]=v,t[15]=j):j=t[15];let M;t[16]!==n||t[17]!==r||t[18]!==a||t[19]!==s||t[20]!==l||t[21]!==A||t[22]!==j||t[23]!==u?(M={additionalResourceDomains:n,canSubmitTurn:r,code:a,focusOnClose:ee,headerAction:s,sharedPreview:A,source:j,styleMode:l,title:u},t[16]=n,t[17]=r,t[18]=a,t[19]=s,t[20]=l,t[21]=A,t[22]=j,t[23]=u,t[24]=M):M=t[24];let N=M,te,P;t[25]!==N||t[26]!==w||t[27]!==x?(te=()=>{w&&_e(x,N)},P=[N,w,x],t[25]=N,t[26]=w,t[27]=x,t[28]=te,t[29]=P):(te=t[28],P=t[29]),(0,Cn.useEffect)(te,P);let re;t[30]!==N||t[31]!==O||t[32]!==x?(re=()=>{H(x,O,N)},t[30]=N,t[31]=O,t[32]=x,t[33]=re):re=t[33];let F=re,I;t[34]!==E||t[35]!==T||t[36]!==F||t[37]!==p?(I={isExpanded:E,isViewingHistoricalVersion:T,openExpandedView:F,setSharedPreview:m,sharedPreview:p,triggerRef:f},t[34]=E,t[35]=T,t[36]=F,t[37]=p,t[38]=I):I=t[38];let ie=I,L;return t[39]!==i||t[40]!==ie?(L=(0,wn.jsx)(hn.Provider,{value:ie,children:i}),t[39]=i,t[40]=ie,t[41]=L):L=t[41],L}function bn(e){"use forget";let t=(0,Sn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,headerTitleContent:o,title:s}=e,c=mt(),l;t[0]===i?l=t[1]:(l=()=>i==null?0:U(i).height$()??0,t[0]=i,t[1]=l);let u=ne(l),d=c===`fullscreen`&&n&&i!=null?u:0,f=o??s,p;t[2]===f?p=t[3]:(p=(0,wn.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:f}),t[2]=f,t[3]=p);let m;t[4]!==a||t[5]!==p?(m=(0,wn.jsxs)(X.Header,{className:`pb-1`,children:[p,a]}),t[4]=a,t[5]=p,t[6]=m):m=t[6];let h;t[7]===d?h=t[8]:(h={paddingBottom:d},t[7]=d,t[8]=h);let g;t[9]===r?g=t[10]:(g=(0,wn.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=g);let _;t[11]!==h||t[12]!==g?(_=(0,wn.jsx)(X.Body,{className:`bg-token-bg-primary overflow-hidden`,style:h,children:g}),t[11]=h,t[12]=g,t[13]=_):_=t[13];let v;return t[14]!==m||t[15]!==_?(v=(0,wn.jsxs)(wn.Fragment,{children:[m,_]}),t[14]=m,t[15]=_,t[16]=v):v=t[16],v}function xn(e){"use forget";let t=(0,Sn.c)(5),{conversation:n,paneId:r}=e,i=Y(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,wn.jsx)(_n,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var Sn,Cn,wn,Tn=e((()=>{Sn=se(),Ae(),pt(),T(),Cn=n(ue()),gn(),be(),vn(),wn=oe()}));function En(){"use forget";let e=(0,Dn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,On.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,On.jsx)(ce,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var Dn,On,kn=e((()=>{Dn=se(),R(),On=oe()}));function An(e,t,n){"use forget";let r=(0,Mn.c)(11),i=t===void 0||t,a=ae(),o;r[0]!==a||r[1]!==e?(o=e?a.formatMessage(In.generatingApp,{title:e}):a.formatMessage(In.creatingInterface),r[0]=a,r[1]=e,r[2]=o):o=r[2];let s=o,c;r[3]!==s||r[4]!==a||r[5]!==n?(c=n??[s,a.formatMessage(In.sketchingInterface),a.formatMessage(In.shapingLayout),a.formatMessage(In.arrangingPieces),a.formatMessage(In.polishingVisuals),a.formatMessage(In.tuningInputs),a.formatMessage(In.addingInteractivity),a.formatMessage(In.wiringControls),a.formatMessage(In.composingInteractions),a.formatMessage(In.calibratingPreview),a.formatMessage(In.refiningDetails)],r[3]=s,r[4]=a,r[5]=n,r[6]=c):c=r[6];let l=c,[u,d]=(0,Nn.useState)(0),f,p;return r[7]!==i||r[8]!==l.length?(f=()=>{if(!i)return;let e=window.setInterval(()=>{d(e=>Math.min(e+1,l.length-1))},Fn);return()=>{window.clearInterval(e)}},p=[i,l.length],r[7]=i,r[8]=l.length,r[9]=f,r[10]=p):(f=r[9],p=r[10]),(0,Nn.useEffect)(f,p),l[u]??l[0]??``}function jn(e){"use forget";let t=(0,Mn.c)(2),{loadingLabels:n,title:r}=e,i=An(r,!0,n),a;return t[0]===i?a=t[1]:(a=(0,Pn.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,role:`status`,children:(0,Pn.jsx)(et,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:i})}),t[0]=i,t[1]=a),a}var Mn,Nn,Pn,Fn,In,Ln,Rn=e((()=>{Mn=se(),J(),x(),Nn=n(ue()),R(),Pn=oe(),Fn=2800,In=L({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}}),Ln=e=>{"use forget";let t=(0,Mn.c)(11),{isVisible:n,title:r}=e,i=An(r,n),a=!n,o=n?`grid-rows-[1fr] opacity-100`:`grid-rows-[0fr] opacity-0`,s;t[0]===o?s=t[1]:(s=E(`grid shrink-0 transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none`,o),t[0]=o,t[1]=s);let c=n&&`loading-shimmer-pure-text motion-reduce:animate-none`,l;t[2]===c?l=t[3]:(l=E(`text-token-text-secondary inline-block font-sans font-medium`,c),t[2]=c,t[3]=l);let u;t[4]!==i||t[5]!==l?(u=(0,Pn.jsx)(`div`,{className:`min-h-0 overflow-hidden`,children:(0,Pn.jsx)(`div`,{className:`pb-3`,children:(0,Pn.jsx)(`span`,{className:l,children:i})})}),t[4]=i,t[5]=l,t[6]=u):u=t[6];let d;return t[7]!==a||t[8]!==s||t[9]!==u?(d=(0,Pn.jsx)(`div`,{"aria-atomic":`true`,"aria-hidden":a,"aria-live":`polite`,className:s,role:`status`,children:u}),t[7]=a,t[8]=s,t[9]=u,t[10]=d):d=t[10],d}}));function zn({appBlockId:e,conversation:t}){return t==null?null:ot(t).get(e)??null}function Bn(e){return e?.serverId$()??void 0}function Vn({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:Ce(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function Hn({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return De({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:g(e)?`missing`:`failed`})}),()=>{a.abort()}}function Un({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??Wn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function Wn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var Gn=e((()=>{y(),je(),it()})),Kn=t({AppBlock:()=>Yn,AppBlockPreviewLoadingState:()=>mr,AppBlockSandboxPreview:()=>dr});function qn(e){let t=e.search(Ar),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function Jn(e){let t=qn(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(jr))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(Mr)!=null}function Yn(e){"use forget";let t=(0,gr.c)(151),{additionalResourceDomains:n,appBlockId:r,authoritativeCode:i,authoritativeSource:a,bind:s,code:c,collapseWhenSuperseded:l,currentContentFileId:d,displayMode:f,editingEnabled:p,expandedHeaderAction:m,expandedViewEnabled:h,id:g,captureConsoleMessages:_,clientThreadId:v,iconSvg:y,isStreaming:x,isTurnStreaming:S,libraryFileId:C,libraryFileVersionNumber:w,loadingLabels:T,messageId:E,onConsoleMessagesChange:D,onReadyChange:O,previewLoadingLabel:k,progressiveStreaming:ee,ref:A,refIndex:j,styleMode:N,title:te,variant:P,wasStreamingWhenFirstSeen:re,widgetName:F,widgetRefSeenAtMs:I}=e,ie=l===void 0||l,L=_!==void 0&&_,R=x!==void 0&&x,ae=S!==void 0&&S,oe=ee!==void 0&&ee,se=P===void 0?`inline`:P,z=o(),ce=(0,Q.useContext)(ct),le;t[0]===z?le=t[1]:(le=()=>z!=null&&Pe(z),t[0]=z,t[1]=le);let ue=ne(le),de;t[2]!==v||t[3]!==z?(de=v==null?z:u(v),t[2]=v,t[3]=z,t[4]=de):de=t[4];let fe=de,me=E!=null&&j!=null?at({messageId:E,refIndex:j}):void 0,B=r??me??at({messageId:E??g,refIndex:j??0}),_e=ne(()=>he({conversation:z??null,instanceId:B,messageId:E,refIndex:j}))??f,ve=ne(()=>a!=null||_e!=null?null:zn({appBlockId:B,conversation:z??null})),V=a??ve,ye;t[5]===z?ye=t[6]:(ye=()=>Bn(z??null),t[5]=z,t[6]=ye);let be=ne(ye),xe=b(z?.id),Se=be??xe,Ce;t[7]!==d||t[8]!==C||t[9]!==w||t[10]!==Se||t[11]!==V?(Ce=Vn({currentContentFileId:d,libraryFileId:C,libraryFileVersionNumber:w,serverThreadId:Se,source:V}),t[7]=d,t[8]=C,t[9]=w,t[10]=Se,t[11]=V,t[12]=Ce):Ce=t[12];let U=Ce,[we,Te]=(0,Q.useState)(null),[Ee,Oe]=(0,Q.useState)(0),ke;t[13]!==Ee||t[14]!==U.libraryContentKey?(ke=[U.libraryContentKey,Ee],t[13]=Ee,t[14]=U.libraryContentKey,t[15]=ke):ke=t[15];let Ae=ke.join(`\0`),je,Me;t[16]!==i||t[17]!==Ae||t[18]!==U.contentFileId||t[19]!==U.libraryFileId||t[20]!==_e||t[21]!==Se?(je=()=>{if(!(i!=null||_e===`collapsed`))return Hn({contentFileId:U.contentFileId,libraryContentKey:Ae,libraryFileId:U.libraryFileId,onContentStateChange:Te,serverThreadId:Se})},Me=[i,U.contentFileId,U.libraryFileId,Ae,_e,Se],t[16]=i,t[17]=Ae,t[18]=U.contentFileId,t[19]=U.libraryFileId,t[20]=_e,t[21]=Se,t[22]=je,t[23]=Me):(je=t[22],Me=t[23]),(0,Q.useEffect)(je,Me);let W=Un({appBlockId:B,contentFileId:U.contentFileId,currentContentFileId:d,libraryContent:we,libraryContentKey:Ae,libraryFileId:C,libraryFileVersionNumber:w,source:V}),Ne=we?.key===Ae?we:null,Fe;t[24]!==W?.libraryFileId||t[25]!==C?(Fe=()=>ge(W?.libraryFileId??C),t[24]=W?.libraryFileId,t[25]=C,t[26]=Fe):Fe=t[26];let Ie=ne(Fe),Le=W?.libraryFileVersionNumber??w,Re=Ie!=null&&(Le==null||Ie.versionNumber>=Le)?Ie.code:void 0,G=Re??i??W?.content??c??null,ze=W?.iconSvg??y??null,Be=W?.libraryFileId??C,Ve=Be==null&&i==null&&Re==null&&d==null&&V?.currentContentFileId==null&&V?.latestPatchMessageId==null,He=re===!1&&se===`inline`&&Ve,Ue;t[27]!==c||t[28]!==Ve||t[29]!==E||t[30]!==G||t[31]!==j||t[32]!==V?(Ue=Ve?V==null?E!=null&&j!=null&&c!=null&&G===c?{messageId:E,refIndex:j}:null:V.messageId.length>0&&V.content!=null&&G===V.content?{messageId:V.messageId,refIndex:V.refIndex}:null:null,t[27]=c,t[28]=Ve,t[29]=E,t[30]=G,t[31]=j,t[32]=V,t[33]=Ue):Ue=t[33];let We=Ue,Ge=se===`artifact`,Ke=W?.styleMode??N??(Ge&&oe?`open`:void 0),qe;t[34]!==Be||t[35]!==Ke?(qe=rt({explicitStyleMode:Ke,libraryFileId:Be}),t[34]=Be,t[35]=Ke,t[36]=qe):qe=t[36];let K=qe,q=W?.title??te,Je;t[37]===z?Je=t[38]:(Je=()=>z!=null&&M(z)?`work`:`chat`,t[37]=z,t[38]=Je);let Ye=ne(Je),Xe;t[39]===p?Xe=t[40]:(Xe=p??_t(),t[39]=p,t[40]=Xe);let Ze=Xe,Qe=h??Ze,$e=oe,J=Ge&&K===`open`,et=_e===`collapsed`||_e==null&&ie&&W?.latestPatchMessageId!=null&&W.latestPatchMessageId!==E,tt=c!=null||d!=null,nt;t[41]!==Ze||t[42]!==v||t[43]!==c||t[44]!==z?.id||t[45]!==d||t[46]!==B||t[47]!==m||t[48]!==w||t[49]!==E||t[50]!==Be||t[51]!==K||t[52]!==q||t[53]!==j||t[54]!==Se||t[55]!==V?.messageId?(nt=async e=>{let t=c;if(t==null&&d!=null)try{t=await De({abortSignal:new AbortController().signal,fileId:d,serverThreadId:Se})}catch{return}t!=null&&H({appBlockId:B,conversationId:z?.id??v??null,isOriginalVersion:!0,versionNumber:w??void 0},`app-block:${B}:original`,{canSubmitTurn:Ze,code:t,headerAction:m,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:B,libraryFileId:Be,messageId:V?.messageId??E,refIndex:j},styleMode:K,title:q})},t[41]=Ze,t[42]=v,t[43]=c,t[44]=z?.id,t[45]=d,t[46]=B,t[47]=m,t[48]=w,t[49]=E,t[50]=Be,t[51]=K,t[52]=q,t[53]=j,t[54]=Se,t[55]=V?.messageId,t[56]=nt):nt=t[56],z?.id,V?.messageId;let it=nt;if(R&&!$e){let e;return t[57]!==T||t[58]!==q?(e=(0,$.jsx)(jn,{loadingLabels:T,title:q}),t[57]=T,t[58]=q,t[59]=e):e=t[59],e}let ot=ue&&c!=null;if(Ne?.status===`missing`&&!ot)return null;if(et){let e=tt?it:void 0,n;return t[60]!==q||t[61]!==e?(n=(0,$.jsx)(lr,{onView:e,title:q}),t[60]=q,t[61]=e,t[62]=n):n=t[62],n}let st=G??($e&&R?``:null);if(st==null){if(W?.latestPatchMessageId!=null){let e=z?.id??v,n=Ne?.status===`failed`,r;t[63]===Oe?r=t[64]:(r=()=>Oe(Xn),t[63]=Oe,t[64]=r);let i;return t[65]!==B||t[66]!==Ge||t[67]!==ze||t[68]!==k||t[69]!==q||t[70]!==e||t[71]!==n||t[72]!==r?(i=(0,$.jsx)(er,{appBlockId:B,conversationId:e,hasFailed:n,iconSvg:ze,onRetry:r,previewLoadingLabel:k,showHeader:Ge,title:q}),t[65]=B,t[66]=Ge,t[67]=ze,t[68]=k,t[69]=q,t[70]=e,t[71]=n,t[72]=r,t[73]=i):i=t[73],i}let e;return t[74]!==T||t[75]!==q?(e=(0,$.jsx)(jn,{loadingLabels:T,title:q}),t[74]=T,t[75]=q,t[76]=e):e=t[76],e}let lt;t[77]!==v||t[78]!==Ye||t[79]!==R||t[80]!==ae||t[81]!==E||t[82]!==j?(lt=!R&&!ae&&v!=null&&E!=null&&j!=null&&ht()?{reference:{clientThreadId:v,messageId:E,referenceIndex:j},target:{kind:`app_block`,metadata:{tab:Ye}}}:void 0,t[77]=v,t[78]=Ye,t[79]=R,t[80]=ae,t[81]=E,t[82]=j,t[83]=lt):lt=t[83];let ut=lt;if(ce){let e=z?.id??v,r;t[84]!==n||t[85]!==s||t[86]!==L||t[87]!==B||t[88]!==g||t[89]!==R||t[90]!==D||t[91]!==O||t[92]!==k||t[93]!==K||t[94]!==q||t[95]!==A||t[96]!==st||t[97]!==$e||t[98]!==e||t[99]!==se||t[100]!==I?(r=(0,$.jsx)(dr,{additionalResourceDomains:n,appBlockId:B,bind:s,captureConsoleMessages:L,clientThreadId:e,code:st,id:g,isStreaming:R,onConsoleMessagesChange:D,onReadyChange:O,previewLoadingLabel:k,progressiveStreaming:$e,ref:A,styleMode:K,title:q,variant:se,widgetRefSeenAtMs:I}),t[84]=n,t[85]=s,t[86]=L,t[87]=B,t[88]=g,t[89]=R,t[90]=D,t[91]=O,t[92]=k,t[93]=K,t[94]=q,t[95]=A,t[96]=st,t[97]=$e,t[98]=e,t[99]=se,t[100]=I,t[101]=r):r=t[101];let i;return t[102]!==R||t[103]!==ze||t[104]!==q||t[105]!==J||t[106]!==r?(i=(0,$.jsx)($n,{canOpen:!1,iconSvg:ze,isShareReady:!1,isStreaming:R,showArtifactCard:J,title:q,children:r}),t[102]=R,t[103]=ze,t[104]=q,t[105]=J,t[106]=r,t[107]=i):i=t[107],i}let dt=z?.id??v,ft=V?.messageId??E,Y;t[108]!==B||t[109]!==Be||t[110]!==j||t[111]!==ft?(Y={appBlockId:B,libraryFileId:Be,messageId:ft,refIndex:j},t[108]=B,t[109]=Be,t[110]=j,t[111]=ft,t[112]=Y):Y=t[112];let pt=J&&Qe&&!R,mt=z?.id??v,X;t[113]!==We||t[114]!==F?(X=We==null?void 0:{contentReferenceIndex:We.refIndex,messageId:We.messageId,widgetName:F??pe.AppBlock,widgetType:pe.AppBlock},t[113]=We,t[114]=F,t[115]=X):X=t[115];let gt;t[116]!==n||t[117]!==s||t[118]!==L||t[119]!==B||t[120]!==ut||t[121]!==g||t[122]!==He||t[123]!==R||t[124]!==D||t[125]!==O||t[126]!==ze||t[127]!==k||t[128]!==K||t[129]!==q||t[130]!==A||t[131]!==st||t[132]!==fe||t[133]!==$e||t[134]!==J||t[135]!==pt||t[136]!==mt||t[137]!==X||t[138]!==se||t[139]!==I?(gt=(0,$.jsx)(Zn,{additionalResourceDomains:n,appBlockId:B,bind:s,canOpen:pt,captureConsoleMessages:L,clientThreadId:mt,code:st,feedback:ut,iconSvg:ze,id:g,isStreaming:R,onConsoleMessagesChange:D,onReadyChange:O,previewLoadingLabel:k,progressiveStreaming:$e,isSavedInlineLoad:He,ref:A,showArtifactCard:J,shareConversation:fe,shareTarget:X,styleMode:K,title:q,variant:se,widgetRefSeenAtMs:I}),t[116]=n,t[117]=s,t[118]=L,t[119]=B,t[120]=ut,t[121]=g,t[122]=He,t[123]=R,t[124]=D,t[125]=O,t[126]=ze,t[127]=k,t[128]=K,t[129]=q,t[130]=A,t[131]=st,t[132]=fe,t[133]=$e,t[134]=J,t[135]=pt,t[136]=mt,t[137]=X,t[138]=se,t[139]=I,t[140]=gt):gt=t[140];let vt;return t[141]!==n||t[142]!==Ze||t[143]!==m||t[144]!==K||t[145]!==q||t[146]!==st||t[147]!==dt||t[148]!==Y||t[149]!==gt?(vt=(0,$.jsx)(yn,{additionalResourceDomains:n,canSubmitTurn:Ze,code:st,conversationId:dt,headerAction:m,styleMode:K,source:Y,title:q,children:gt}),t[141]=n,t[142]=Ze,t[143]=m,t[144]=K,t[145]=q,t[146]=st,t[147]=dt,t[148]=Y,t[149]=gt,t[150]=vt):vt=t[150],vt}function Xn(e){return e+1}function Zn(e){"use forget";let t=(0,gr.c)(71),{additionalResourceDomains:n,appBlockId:i,bind:a,canOpen:o,captureConsoleMessages:s,clientThreadId:c,code:l,feedback:u,iconSvg:f,id:p,isStreaming:m,onConsoleMessagesChange:h,onReadyChange:g,previewLoadingLabel:_,progressiveStreaming:v,isSavedInlineLoad:y,ref:b,shareConversation:x,shareTarget:S,showArtifactCard:C,styleMode:w,title:T,variant:E,widgetRefSeenAtMs:D}=e,{isExpanded:O,isViewingHistoricalVersion:k,openExpandedView:ee,setSharedPreview:A,sharedPreview:j,triggerRef:M}=pn(),N=(0,Q.useContext)(B),te;t[0]===n?te=t[1]:(te=n??[],t[0]=n,t[1]=te);let P;t[2]!==l||t[3]!==p||t[4]!==w||t[5]!==te?(P=[p,w,l,...te],t[2]=l,t[3]=p,t[4]=w,t[5]=te,t[6]=P):P=t[6];let ne=P.join(`\0`),[re,F]=(0,Q.useState)(null),I=!m&&re===ne,ie;t[7]===ee?ie=t[8]:(ie=()=>{fe(),ee()},t[7]=ee,t[8]=ie);let L=ie,R;t[9]!==g||t[10]!==ne?(R=(e,t)=>{F(e?ne:null),g?.(e,t)},t[9]=g,t[10]=ne,t[11]=R):R=t[11];let ae=R,oe;t[12]!==n||t[13]!==i||t[14]!==a||t[15]!==s||t[16]!==c||t[17]!==l||t[18]!==ae||t[19]!==p||t[20]!==y||t[21]!==m||t[22]!==h||t[23]!==_||t[24]!==v||t[25]!==b||t[26]!==w||t[27]!==T||t[28]!==E||t[29]!==D?(oe=(0,$.jsx)(dr,{appBlockId:i,additionalResourceDomains:n,bind:a,code:l,id:p,isStreaming:m,captureConsoleMessages:s,clientThreadId:c,onConsoleMessagesChange:h,onReadyChange:ae,presentationSurface:`inline`,previewLoadingLabel:_,progressiveStreaming:v,isSavedInlineLoad:y,ref:b,styleMode:w,title:T,variant:E,widgetRefSeenAtMs:D}),t[12]=n,t[13]=i,t[14]=a,t[15]=s,t[16]=c,t[17]=l,t[18]=ae,t[19]=p,t[20]=y,t[21]=m,t[22]=h,t[23]=_,t[24]=v,t[25]=b,t[26]=w,t[27]=T,t[28]=E,t[29]=D,t[30]=oe):oe=t[30];let se;t[31]!==N||t[32]!==oe?(se={element:oe,sandboxPolicy:N},t[31]=N,t[32]=oe,t[33]=se):se=t[33];let z=se,ce;t[34]===z?ce=t[35]:(ce=()=>z,t[34]=z,t[35]=ce);let le=d(ce),ue;t[36]!==i||t[37]!==c||t[38]!==le||t[39]!==A?(ue=e=>{if(e==null)return;let{preview:t,sourceToken:n}=Se({appBlockId:i,content:le(),conversationId:c??null,inlineContainer:e});return A(t),()=>{let e=me();de(t,n,e?.sharedPreview===t)}},t[36]=i,t[37]=c,t[38]=le,t[39]=A,t[40]=ue):ue=t[40];let pe=ue,he,ge;t[41]!==z||t[42]!==j?(ge=()=>{j!=null&&we(j,z)},he=[z,j],t[41]=z,t[42]=j,t[43]=he,t[44]=ge):(he=t[43],ge=t[44]),r(ge,he);let _e=k?L:void 0,ve;t[45]!==f||t[46]!==_e||t[47]!==T||t[48]!==M?(ve=(0,$.jsx)(rr,{iconSvg:f,onOpen:_e,openButtonRef:M,title:T}),t[45]=f,t[46]=_e,t[47]=T,t[48]=M,t[49]=ve):ve=t[49];let V=O?ve:null,ye;t[50]===pe?ye=t[51]:(ye=(0,$.jsx)(`div`,{ref:pe,className:`w-full`}),t[50]=pe,t[51]=ye);let be;t[52]!==o||t[53]!==u||t[54]!==L||t[55]!==f||t[56]!==I||t[57]!==m||t[58]!==x||t[59]!==S||t[60]!==C||t[61]!==ye||t[62]!==T||t[63]!==M?(be=(0,$.jsx)($n,{canOpen:o,expandButtonRef:M,feedback:u,iconSvg:f,isShareReady:I,shareConversation:x,shareTarget:S,isStreaming:m,showArtifactCard:C,title:T,onOpen:L,children:ye}),t[52]=o,t[53]=u,t[54]=L,t[55]=f,t[56]=I,t[57]=m,t[58]=x,t[59]=S,t[60]=C,t[61]=ye,t[62]=T,t[63]=M,t[64]=be):be=t[64];let H;t[65]!==O||t[66]!==be?(H=(0,$.jsx)(`div`,{hidden:O,children:be}),t[65]=O,t[66]=be,t[67]=H):H=t[67];let xe;return t[68]!==V||t[69]!==H?(xe=(0,$.jsxs)($.Fragment,{children:[V,H]}),t[68]=V,t[69]=H,t[70]=xe):xe=t[70],xe}function Qn(e){"use forget";let t=(0,gr.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:o,titleClassName:s}=e,c;t[0]===r?c=t[1]:(c=E(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=c);let l=s??`truncate text-base font-semibold`,u;t[2]===l?u=t[3]:(u=E(`text-token-text-primary`,l),t[2]=l,t[3]=u);let d=o??i,f;t[4]!==u||t[5]!==d?(f=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:u,children:d})}),t[4]=u,t[5]=d,t[6]=f):f=t[6];let p;t[7]!==a||t[8]!==f?(p=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,f]}),t[7]=a,t[8]=f,t[9]=p):p=t[9];let m;return t[10]!==n||t[11]!==c||t[12]!==p?(m=(0,$.jsxs)(`div`,{className:c,children:[p,n]}),t[10]=n,t[11]=c,t[12]=p,t[13]=m):m=t[13],m}function $n(e){"use forget";let t=(0,gr.c)(20),{canOpen:n,children:r,expandButtonRef:i,feedback:a,iconSvg:o,isShareReady:s,isStreaming:c,onOpen:l,shareConversation:u,shareTarget:d,showArtifactCard:f,title:p}=e,m=ae(),h;t[0]===m?h=t[1]:(h=m.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=m,t[1]=h);let g=h,_;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==g||t[6]!==o||t[7]!==s||t[8]!==c||t[9]!==l||t[10]!==u||t[11]!==d||t[12]!==f||t[13]!==p?(_=f?(0,$.jsxs)(`div`,{className:E(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,c&&`cursor-wait`),"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)(Qn,{action:(0,$.jsx)(Nr,{canOpen:n,conversation:u,expandButtonRef:i,isReady:s,onOpen:l,target:d}),className:`min-h-13 px-4 py-2`,fallbackTitle:g,leading:c?(0,$.jsx)(N,{className:`icon-md text-token-text-primary shrink-0`}):(0,$.jsx)(ar,{iconSvg:o}),title:p}),(0,$.jsx)(`div`,{children:r})]}):(0,$.jsx)(Pr,{conversation:u,isReady:s,target:d,children:r}),t[2]=n,t[3]=r,t[4]=i,t[5]=g,t[6]=o,t[7]=s,t[8]=c,t[9]=l,t[10]=u,t[11]=d,t[12]=f,t[13]=p,t[14]=_):_=t[14];let v;t[15]===a?v=t[16]:(v=a==null?null:(0,$.jsx)(tr,{...a}),t[15]=a,t[16]=v);let y;return t[17]!==_||t[18]!==v?(y=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[_,v]}),t[17]=_,t[18]=v,t[19]=y):y=t[19],y}function er(e){"use forget";let t=(0,gr.c)(18),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:o,previewLoadingLabel:s,showHeader:c,title:l}=e,u=ne(me),d=ae(),f;t[0]===d?f=t[1]:(f=d.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=d,t[1]=f);let p=f;if(xe(u,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==l?(e=(0,$.jsx)(rr,{iconSvg:a,title:l}),t[2]=a,t[3]=l,t[4]=e):e=t[4],e}let m;t[5]!==p||t[6]!==a||t[7]!==c||t[8]!==l?(m=c?(0,$.jsx)(Qn,{className:`mb-2`,fallbackTitle:p,leading:(0,$.jsx)(ar,{iconSvg:a}),title:l}):null,t[5]=p,t[6]=a,t[7]=c,t[8]=l,t[9]=m):m=t[9];let h;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(h={minHeight:_r},t[10]=h):h=t[10];let g;t[11]!==i||t[12]!==o||t[13]!==s?(g=(0,$.jsx)(`div`,{className:`relative w-full`,style:h,children:i?(0,$.jsx)(hr,{onRetry:o}):(0,$.jsx)(mr,{label:s})}),t[11]=i,t[12]=o,t[13]=s,t[14]=g):g=t[14];let _;return t[15]!==m||t[16]!==g?(_=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[m,g]}),t[15]=m,t[16]=g,t[17]=_):_=t[17],_}function tr(e){"use forget";let t=(0,gr.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(ne(nr))return null;let o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(V,{}),t[0]=o):o=t[0];let s;return t[1]!==i||t[2]!==n||t[3]!==r?(s=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)($e,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:o})}),t[1]=i,t[2]=n,t[3]=r,t[4]=s):s=t[4],s}function nr(){return Ze()}function rr(e){"use forget";let t=(0,gr.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=ae(),s,c,l,u,d;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),d=`not-prose relative clear-both my-4 w-full max-w-full`,u=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=Qn,l=r==null?void 0:(0,$.jsx)(f,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(ce,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=l,t[7]=u,t[8]=d):(s=t[4],c=t[5],l=t[6],u=t[7],d=t[8]);let p;t[9]===n?p=t[10]:(p=(0,$.jsx)(ir,{iconSvg:n}),t[9]=n,t[10]=p);let m;t[11]!==s||t[12]!==c||t[13]!==l||t[14]!==p||t[15]!==a?(m=(0,$.jsx)(s,{action:l,className:`w-full`,fallbackTitle:c,leading:p,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=l,t[14]=p,t[15]=a,t[16]=m):m=t[16];let h;t[17]!==u||t[18]!==m?(h=(0,$.jsx)(`div`,{className:u,children:m}),t[17]=u,t[18]=m,t[19]=h):h=t[19];let g;return t[20]!==d||t[21]!==h?(g=(0,$.jsx)(`div`,{className:d,children:h}),t[20]=d,t[21]=h,t[22]=g):g=t[22],g}function ir(e){"use forget";let t=(0,gr.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(ar,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function ar(e){"use forget";let t=(0,gr.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=or(r),t[0]=r,t[1]=a);let o=a,s;return t[2]!==i||t[3]!==o?(s=o==null?(0,$.jsx)(Le,{"aria-hidden":`true`,className:E(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:E(`icon-md shrink-0`,i),children:(0,$.jsx)(Ne,{svgString:o,className:`h-full w-full`})}),t[2]=i,t[3]=o,t[4]=s):s=t[4],s}function or(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>Tr||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Er)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Or.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!sr(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function sr(e){let t=e.replace(Dr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Dr)){let e=t[1],n=t[2];if(!kr.has(e)||!cr(e,n))return!1}return!0}function cr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function lr(e){"use forget";let t=(0,gr.c)(9),{onView:n,title:r}=e,i=ae(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(ce,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(ce,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(ce,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function ur(e){"use forget";let t=(0,gr.c)(12),{className:n,onClick:r,ref:i}=e,a=ae(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let s=o,c;t[2]===r?c=t[3]:(c=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=c);let l;t[4]!==s||t[5]!==i||t[6]!==c?(l=(0,$.jsx)(f,{ref:i,type:`button`,icon:G,color:`ghost`,size:`medium`,label:s,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:c}),t[4]=s,t[5]=i,t[6]=c,t[7]=l):l=t[7];let u;return t[8]!==n||t[9]!==s||t[10]!==l?(u=(0,$.jsx)(I,{label:s,className:n,children:l}),t[8]=n,t[9]=s,t[10]=l,t[11]=u):u=t[11],u}function dr(e){"use forget";let t=(0,gr.c)(183),{appBlockId:n,additionalResourceDomains:a,bind:o,clientThreadId:c,code:l,id:u,captureConsoleMessages:f,isStreaming:p,onConsoleMessagesChange:m,onReadyChange:h,presentationSurface:g,previewLoadingLabel:_,progressiveStreaming:v,isSavedInlineLoad:y,ref:b,styleMode:x,surface:C,title:w,variant:T,widgetRefSeenAtMs:D}=e,O=p!==void 0&&p,k=v!==void 0&&v,A=y!==void 0&&y,j=x===void 0?`default`:x,M=C===void 0?`inline`:C,N=T===void 0?`inline`:T,te=ae(),P=(0,Q.useRef)(null),re=(0,Q.useRef)(null),F=Ve(o),[I,ie]=(0,Q.useState)(F.values),L=S(I,F.values)?I:F.values;L!==I&&ie(L);let R=[...F.callbacks.keys()],[oe,se]=(0,Q.useState)(R),z=S(oe,R)?oe:R;z!==oe&&se(z);let le=(0,Q.useRef)(L),ue=(0,Q.useRef)(z),de=(0,Q.useRef)(F.callbacks),fe=o!=null,pe=(0,Q.useRef)(!1),me=(0,Q.useRef)(!1),he=(0,Q.useRef)(null),ge=(0,Q.useRef)(null),_e=(0,Q.useRef)(null),ve=(0,Q.useRef)(null),V=(0,Q.useRef)(null),ye=(0,Q.useRef)(null),be=(0,Q.useRef)(null),H=(0,Q.useRef)(null),xe=(0,Q.useRef)(0),Se=(0,Q.useRef)(null),Ce=(0,Q.useRef)(null),U;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(U=[],t[0]=U):U=t[0];let we=(0,Q.useRef)(U),Te=s(),Ee=ne(i),{isInternalPreview:De,networkPolicy:Oe}=(0,Q.useContext)(B),ke=Oe===void 0?`none`:Oe,Ae=q()||De,je=qe(c)&&!De,Me=je||De&&ke===`deps-only`,W=Te?`dark`:`light`,Ne=te.locale,Pe;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(Pe={status:`streaming`},t[1]=Pe):Pe=t[1];let[Fe,Ie]=(0,Q.useState)(Pe),Le=Fe.status===`finalized`&&Fe.html!==l,Re=k&&!O&&(N===`artifact`||Fe.status===`failed`),G=k&&M===`inline`&&Fe.status!==`static`&&!Re&&!Le,ze=G&&O&&N===`artifact`&&!Jn(l),Be=ze?0:vr,Ge=Ae?`execution-enabled`:`execution-disabled`,K=Me?`network-enabled`:`network-disabled`,Ye=De?`internal-preview`:`workspace-preview`,Xe=fe?`bindings-enabled`:`bindings-disabled`,Ze=G?`progressive-app-block-stream`:l,Qe;t[2]===a?Qe=t[3]:(Qe=a??[],t[2]=a,t[3]=Qe);let $e;t[4]!==Ee||t[5]!==Ne||t[6]!==j||t[7]!==M||t[8]!==Ge||t[9]!==K||t[10]!==Ye||t[11]!==Xe||t[12]!==Ze||t[13]!==Qe||t[14]!==W?($e=[W,Ee,M,j,Ne,Ge,K,Ye,Xe,Ze,...Qe],t[4]=Ee,t[5]=Ne,t[6]=j,t[7]=M,t[8]=Ge,t[9]=K,t[10]=Ye,t[11]=Xe,t[12]=Ze,t[13]=Qe,t[14]=W,t[15]=$e):$e=t[15];let J=$e.join(`\0`),et;t[16]===a?et=t[17]:(et=tn(a),t[16]=a,t[17]=et);let tt=et,nt=A?`saved_inline`:void 0,rt=Me?`deps_only`:`disabled`,it=M===`inline`?N:void 0,at=G?`progressive`:`static`,ot;t[18]!==M||t[19]!==nt||t[20]!==rt||t[21]!==it||t[22]!==at?(ot={loadSource:nt,networkPolicy:rt,surface:M,variant:it,renderMode:at},t[18]=M,t[19]=nt,t[20]=rt,t[21]=it,t[22]=at,t[23]=ot):ot=t[23];let st=ot,[ct,lt]=(0,Q.useState)(0),[ut,dt]=(0,Q.useState)(null),ft=ut?.signature===J?ut.status:null,Y=ft===`ready`,pt=Y||ft===`failed_after_ready`,mt=G&&ft===`failed`,X=!O&&!G&&ft===`failed`,ht=g??M,gt=k&&ht===`inline`&&N===`inline`,_t=G&&ht===`inline`&&O&&!X,vt;t[24]!==l||t[25]!==st||t[26]!==D?(vt={content:l,metricTags:st,widgetRefSeenAtMs:D},t[24]=l,t[25]=st,t[26]=D,t[27]=vt):vt=t[27];let{cancelFirstPaintFrame:yt,startRunMetrics:xt}=Tt(vt),Ct,wt;t[28]===Y?(Ct=t[29],wt=t[30]):(Ct=()=>{Y&&ye.current?.markFirstPaint()},wt=[Y],t[28]=Y,t[29]=Ct,t[30]=wt),r(Ct,wt);let Et,Dt;t[31]!==Y||t[32]!==h?(Et=()=>{h?.(Y)},Dt=[Y,h],t[31]=Y,t[32]=h,t[33]=Et,t[34]=Dt):(Et=t[33],Dt=t[34]),(0,Q.useEffect)(Et,Dt);let Ot,kt;t[35]!==z||t[36]!==L||t[37]!==F.callbacks?(Ot=()=>{le.current=L,ue.current=z,de.current=F.callbacks},kt=[z,L,F.callbacks],t[35]=z,t[36]=L,t[37]=F.callbacks,t[38]=Ot,t[39]=kt):(Ot=t[38],kt=t[39]),r(Ot,kt);let At;t[40]===Symbol.for(`react.memo_cache_sentinel`)?(At=e=>{re.current===e&&P.current?.updateAppBlockMessenger?.(We(e,le.current,ue.current))},t[40]=At):At=t[40];let jt=d(At),Mt;t[41]===jt?Mt=t[42]:(Mt=e=>{let t=re.current;if(t==null)return;let n=Ue(e,t),r=n&&de.current.get(n.name);if(n!=null&&r){let e=()=>{ee.postTask(()=>jt(t))};try{Promise.resolve(r(...n.args)).then(e,e)}catch{e()}}},t[41]=jt,t[42]=Mt);let Nt=d(Mt),Pt;t[43]!==fe||t[44]!==Y||t[45]!==jt?(Pt=()=>{let e=re.current;!Y||!fe||e==null||jt(e)},t[43]=fe,t[44]=Y,t[45]=jt,t[46]=Pt):Pt=t[46];let Ft;t[47]!==z||t[48]!==L||t[49]!==fe||t[50]!==Y||t[51]!==jt?(Ft=[z,L,fe,Y,jt],t[47]=z,t[48]=L,t[49]=fe,t[50]=Y,t[51]=jt,t[52]=Ft):Ft=t[52],(0,Q.useEffect)(Pt,Ft);let It,Lt;t[53]!==Y||t[54]!==g?(It=()=>{!Y||g==null||P.current?.updateAppBlockSurface?.(g)},Lt=[Y,g],t[53]=Y,t[54]=g,t[55]=It,t[56]=Lt):(It=t[55],Lt=t[56]),(0,Q.useEffect)(It,Lt);let Rt,zt;t[57]===Symbol.for(`react.memo_cache_sentinel`)?(Rt=()=>({clearCapturedConsoleMessages:()=>{we.current=[]},captureScreenshotDataUrl:async()=>(await P.current?.screenshot())?.imageBase64??null,focus:()=>{P.current?.focus()}}),zt=[],t[57]=Rt,t[58]=zt):(Rt=t[57],zt=t[58]),(0,Q.useImperativeHandle)(b,Rt,zt);let Bt;t[59]===Symbol.for(`react.memo_cache_sentinel`)?(Bt=()=>{Se.current!=null&&(window.clearTimeout(Se.current),Se.current=null)},t[59]=Bt):Bt=t[59];let Vt=d(Bt),Ht;t[60]===Symbol.for(`react.memo_cache_sentinel`)?(Ht=()=>{Ce.current!=null&&(window.clearTimeout(Ce.current),Ce.current=null)},t[60]=Ht):Ht=t[60];let Z=d(Ht),Ut;t[61]!==Y||t[62]!==G?(Ut=()=>{if(!G||!Y||V.current==null)return;let e=ve.current,t=P.current;if(e==null||t?.updateAppBlockStream==null||me.current)return;let n=xe.current;ve.current=null,ge.current=bt(),_e.current=e.html,e.isFinal&&(me.current=!0);let r=()=>xe.current!==n||V.current==null?Promise.resolve():t.updateAppBlockStream?.(e)??Promise.resolve(),i=H.current,a=i==null?r():i.then(r);H.current=a,a.then(()=>{H.current===a&&(H.current=null);let t=V.current;xe.current!==n||t==null||(Jn(e.html)&&t.markFirstPaint(),e.isFinal&&(t.reportPayloadSize(e.html),Ie({status:`finalized`,html:e.html})))},e=>{H.current===a&&(H.current=null),xe.current===n&&(e instanceof DOMException&&e.name===`AbortError`||be.current?.(`stream_update`,St(e)))})},t[61]=Y,t[62]=G,t[63]=Ut):Ut=t[63];let Wt=d(Ut),Gt;t[64]!==Ee||t[65]!==Me||t[66]!==f||t[67]!==Vt||t[68]!==Z||t[69]!==l||t[70]!==fe||t[71]!==Ae||t[72]!==Le||t[73]!==A||t[74]!==O||t[75]!==Ne||t[76]!==m||t[77]!==h||t[78]!==g||t[79]!==J||t[80]!==Fe.status||t[81]!==Re||t[82]!==G||t[83]!==xt||t[84]!==j||t[85]!==M||t[86]!==W?(Gt=()=>{if(!Ae)return;if(Fe.status===`failed`){if(O)return;Ie({status:`static`}),lt(pr);return}(Le||Re&&Fe.status!==`static`)&&Ie({status:`static`});let e=G&&P.current?.updateAppBlockStream!=null;if(G&&!e){O||Ie({status:`static`});return}pe.current=!0,me.current=!1,he.current=null,ge.current=null,_e.current=null,ve.current=null,V.current=null,ye.current=null,be.current=null,H.current=null,Z(),xe.current+=1;let t=xe.current;Vt(),dt(null),re.current=fe?crypto.randomUUID():null;let{expectReadySignal:n,html:r,frameColorScheme:i}=nn(l,W,Ne,Ee,M,{loadTailwind:Me,progressiveStreaming:e,syncPresentationSurface:g!=null,styleMode:j}),a=!1,o=!1,s=!1,c=!1,u=!1,d=()=>xe.current===t,p=()=>e&&o,_=xt(d,{deferFirstPaint:e||A,deferPayloadSize:e});A&&(ye.current=_),e&&(V.current=_);let v=e=>{!f||m==null||!d()||(we.current=e,!c&&(c=!0,ee.postTask(()=>{c=!1,d()&&m(we.current)},{priority:`background`})))},y=e=>{if(!(!d()||a||s)){if(a=!0,Vt(),_.markReady(e),A){o=!0,dt({signature:J,status:`ready`});return}u||(u=!0,ee.postTask(()=>{u=!1,!(!d()||s)&&(o=!0,dt({signature:J,status:`ready`}))},{priority:`background`}))}},b=(t,n)=>{!d()||s||(s=!0,Vt(),Z(),ve.current=null,V.current=null,e&&Ie({status:`failed`}),dt({signature:J,status:p()?`failed_after_ready`:`failed`,readyTimedOut:n===`ready_timeout`}),_.reportFailure(t,n),ee.postTask(()=>{d()&&(e?h?.(!1):h?.(!1,`failure`))},{priority:`background`}))};be.current=b,we.current=[],v([]),Se.current=window.setTimeout(()=>{b(`sandbox_eval`,`ready_timeout`)},br),(async()=>{let e=P.current?.evalAsync({code:r,...re.current==null?{}:{additionalGlobals:{__appBlockMessenger:We(re.current,le.current,ue.current)}},expectReadySignal:n,language:`html`,frameColorScheme:i,shouldPreservePreviewOnFatalError:()=>d()&&p()});if(e==null){b(`sandbox_eval`,`missing_generator`);return}for(;;){let t=await e.next();if(t.done){d()&&!a&&b(`sandbox_eval`,`generator_completed_without_ready`);break}d()&&(v([...we.current,t.value]),t.value.type===He.ENVIRONMENT_STATUS&&t.value.status===Ke.RUNNING_CODE&&y(`running_code`),t.value.type===He.RUN_COMPLETE&&(t.value.wasFatalError?b(`runtime`,`fatal_runtime_error`):(y(`run_complete`),_.reportSuccess(`run_complete`))),await ee.yield())}})().catch(e=>{d()&&(e instanceof DOMException&&e.name===`AbortError`||b(`sandbox_eval`,St(e)))})},t[64]=Ee,t[65]=Me,t[66]=f,t[67]=Vt,t[68]=Z,t[69]=l,t[70]=fe,t[71]=Ae,t[72]=Le,t[73]=A,t[74]=O,t[75]=Ne,t[76]=m,t[77]=h,t[78]=g,t[79]=J,t[80]=Fe.status,t[81]=Re,t[82]=G,t[83]=xt,t[84]=j,t[85]=M,t[86]=W,t[87]=Gt):Gt=t[87];let Kt=d(Gt),qt;t[88]!==Vt||t[89]!==Z?(qt=()=>{xe.current+=1,pe.current=!1,me.current=!1,he.current=null,_e.current=null,ve.current=null,V.current=null,be.current=null,H.current=null,Vt(),Z(),dt(null),lt(fr)},t[88]=Vt,t[89]=Z,t[90]=qt):qt=t[90];let Jt=d(qt),Yt;t[91]===ht?Yt=t[92]:(Yt=ht===`inline`?{margin:-4,width:`calc(100% + ${yr*2}px)`}:void 0,t[91]=ht,t[92]=Yt);let Xt=Yt,Zt;t[93]!==yt||t[94]!==Vt||t[95]!==Z||t[96]!==Kt?(Zt=()=>{Kt();let e=P.current;return()=>{xe.current+=1,re.current=null,V.current=null,ye.current=null,be.current=null,H.current=null,Vt(),Z(),yt(),e?.stop()}},t[93]=yt,t[94]=Vt,t[95]=Z,t[96]=Kt,t[97]=Zt):Zt=t[97];let Qt;t[98]!==yt||t[99]!==Vt||t[100]!==Z||t[101]!==Ae||t[102]!==J||t[103]!==Kt||t[104]!==ct?(Qt=[yt,Vt,Z,Ae,J,Kt,ct],t[98]=yt,t[99]=Vt,t[100]=Z,t[101]=Ae,t[102]=J,t[103]=Kt,t[104]=ct,t[105]=Qt):Qt=t[105],(0,Q.useEffect)(Zt,Qt);let $t,en;t[106]!==O||t[107]!==Kt||t[108]!==G?($t=()=>{!G||O||pe.current||P.current?.updateAppBlockStream!=null||Kt()},en=[O,Kt,G],t[106]=O,t[107]=Kt,t[108]=G,t[109]=$t,t[110]=en):($t=t[109],en=t[110]),(0,Q.useEffect)($t,en);let rn,an;if(t[111]!==Z||t[112]!==l||t[113]!==Wt||t[114]!==X||t[115]!==Y||t[116]!==O||t[117]!==G||t[118]!==N?(rn=()=>{if(!G||!Y||X||me.current||P.current?.updateAppBlockStream==null)return;let e=O?qn(l):l;if(O&&(ve.current?.html??_e.current)===e)return;if(ve.current={html:e,isFinal:!O},!O){Z(),Wt();return}let t=ge.current;if(t==null&&N===`artifact`&&(he.current??=bt(),t=he.current),t==null){Wt();return}let n=N===`artifact`?Sr:xr,r=bt()-t;if(r>=n){Wt();return}return Ce.current=window.setTimeout(()=>{Ce.current=null,Wt()},n-r),Z},an=[Z,l,Wt,X,Y,O,G,N],t[111]=Z,t[112]=l,t[113]=Wt,t[114]=X,t[115]=Y,t[116]=O,t[117]=G,t[118]=N,t[119]=rn,t[120]=an):(rn=t[119],an=t[120]),(0,Q.useEffect)(rn,an),!Ae){let e;return t[121]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(En,{}),t[121]=e):e=t[121],e}let on=gt&&`flex-col`,sn=ht===`inline`&&(ze?`h-0 min-h-0 overflow-hidden`:`min-h-[120px] overflow-visible`),cn=ht===`stage`&&`h-full min-h-0`,ln;t[122]!==on||t[123]!==sn||t[124]!==cn?(ln=E(`flex w-full`,on,sn,cn),t[122]=on,t[123]=sn,t[124]=cn,t[125]=ln):ln=t[125];let un;t[126]!==gt||t[127]!==_t||t[128]!==w?(un=gt?(0,$.jsx)(Ln,{isVisible:_t,title:w}):null,t[126]=gt,t[127]=_t,t[128]=w,t[129]=un):un=t[129];let dn=!O&&!G&&(ft===`failed`||ft===`failed_after_ready`)&&ut?.readyTimedOut||void 0,fn=ht===`inline`?`flex-none`:`w-full`,pn=_t&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,mn;t[130]!==fn||t[131]!==pn?(mn=E(`relative min-w-0`,fn,pn),t[130]=fn,t[131]=pn,t[132]=mn):mn=t[132];let hn=`${ct}:${Me?`network-enabled`:`network-disabled`}:${De?`internal-preview`:`workspace-preview`}`,gn;t[133]!==n||t[134]!==c||t[135]!==u?(gn=JSON.stringify([c??null,n??u]),t[133]=n,t[134]=c,t[135]=u,t[136]=gn):gn=t[136];let _n;t[137]===te?_n=t[138]:(_n=te.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[137]=te,t[138]=_n);let vn=Me?`deps-only`:`none`,yn=je?Cr:wr,bn=pt?0:-1,xn=fe?Nt:void 0,Sn=ht===`inline`&&j===`open`,Cn=ht!==`stage`,wn=G?Be:_r,Tn;t[139]!==u||t[140]!==De||t[141]!==Kt||t[142]!==tt||t[143]!==hn||t[144]!==gn||t[145]!==_n||t[146]!==vn||t[147]!==yn||t[148]!==bn||t[149]!==xn||t[150]!==Sn||t[151]!==Cn||t[152]!==wn?(Tn=(0,$.jsx)(Je,{id:u,sandboxOriginId:gn,title:_n,visuallyHidden:!1,networkPolicy:vn,disableExternalNavigation:De,additionalResourceDomains:tt,sandboxPermissions:yn,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:bn,onRetryCodeRun:Kt,onAppBlockMessage:xn,transparentBackground:Sn,useIntrinsicHeight:Cn,intrinsicHeightFallback:wn,ref:P},hn),t[139]=u,t[140]=De,t[141]=Kt,t[142]=tt,t[143]=hn,t[144]=gn,t[145]=_n,t[146]=vn,t[147]=yn,t[148]=bn,t[149]=xn,t[150]=Sn,t[151]=Cn,t[152]=wn,t[153]=Tn):Tn=t[153];let Dn;t[154]===_t?Dn=t[155]:(Dn=_t?(0,$.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 z-10 cursor-wait`}):null,t[154]=_t,t[155]=Dn);let On;t[156]!==mt||t[157]!==X||t[158]!==pt||t[159]!==_||t[160]!==G?(On=!pt&&!X&&(!G||mt)?(0,$.jsx)(mr,{label:_}):null,t[156]=mt,t[157]=X,t[158]=pt,t[159]=_,t[160]=G,t[161]=On):On=t[161];let kn;t[162]!==X||t[163]!==Jt?(kn=X?(0,$.jsx)(hr,{onRetry:Jt}):null,t[162]=X,t[163]=Jt,t[164]=kn):kn=t[164];let An;t[165]!==Xt||t[166]!==_t||t[167]!==dn||t[168]!==mn||t[169]!==Tn||t[170]!==Dn||t[171]!==On||t[172]!==kn?(An=(0,$.jsxs)(`div`,{"aria-busy":_t,"data-app-block-ready-timeout":dn,className:mn,style:Xt,children:[Tn,Dn,On,kn]}),t[165]=Xt,t[166]=_t,t[167]=dn,t[168]=mn,t[169]=Tn,t[170]=Dn,t[171]=On,t[172]=kn,t[173]=An):An=t[173];let jn;t[174]!==_||t[175]!==_t||t[176]!==N?(jn=_t&&N===`artifact`?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:_??(0,$.jsx)(ce,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[174]=_,t[175]=_t,t[176]=N,t[177]=jn):jn=t[177];let Mn;return t[178]!==ln||t[179]!==un||t[180]!==An||t[181]!==jn?(Mn=(0,$.jsxs)(`div`,{className:ln,children:[un,An,jn]}),t[178]=ln,t[179]=un,t[180]=An,t[181]=jn,t[182]=Mn):Mn=t[182],Mn}function fr(e){return e+1}function pr(e){return e+1}function mr(e){"use forget";let t=(0,gr.c)(5),{label:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(N,{className:`icon-sm text-token-text-tertiary`}),t[0]=r):r=t[0];let i;t[1]===n?i=t[2]:(i=n??(0,$.jsx)(ce,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`}),t[1]=n,t[2]=i);let a;return t[3]===i?a=t[4]:(a=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,role:`status`,children:[r,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:i})]}),t[3]=i,t[4]=a),a}function hr(e){"use forget";let t=(0,gr.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(ce,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(ce,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(f,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var gr,Q,$,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr=e((()=>{gr=se(),h(),Xe(),Fe(),ke(),c(),F(),Ye(),v(),ze(),Re(),Be(),Te(),K(),_(),Ee(),lt(),st(),Oe(),a(),T(),p(),W(),O(),m(),A(),k(),Qe(),ut(),je(),Ge(),x(),D(),Q=n(ue()),R(),fn(),Ft(),vt(),Tn(),be(),kn(),gn(),Rn(),tt(),ye(),ve(),nt(),Gn(),$=oe(),_r=432,vr=120,yr=4,br=15e3,xr=100,Sr=350,Cr=`allow-scripts allow-same-origin allow-forms`,wr=`allow-scripts allow-same-origin`,Tr=12e3,Er=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Dr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Or=new Set([`svg`,`path`]),kr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),Ar=/<script(?:\s|>)/i,jr=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,Mr=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,Nr=e=>{"use forget";let t=(0,gr.c)(13),{canOpen:n,conversation:r,expandButtonRef:i,isReady:a,onOpen:o,target:s}=e,c;t[0]!==n||t[1]!==i||t[2]!==o?(c=n&&o!=null?(0,$.jsx)(ur,{ref:i,className:`shrink-0`,onClick:o}):null,t[0]=n,t[1]=i,t[2]=o,t[3]=c):c=t[3];let l=c;if(r==null)return l;let u;t[4]===s?u=t[5]:(u=s??{contentReferenceIndex:-1,messageId:``},t[4]=s,t[5]=u);let d=u,p=a&&s!=null,m;t[6]===l?m=t[7]:(m=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(I,{label:n,children:(0,$.jsx)(f,{type:`button`,icon:Ie,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),l]}):l},t[6]=l,t[7]=m);let h;return t[8]!==d||t[9]!==r||t[10]!==p||t[11]!==m?(h=(0,$.jsx)(dt,{category:pe.AppBlock,conversation:r,isReady:p,target:d,children:m}),t[8]=d,t[9]=r,t[10]=p,t[11]=m,t[12]=h):h=t[12],h},Pr=e=>{"use forget";let t=(0,gr.c)(9),{children:n,conversation:r,isReady:i,target:a}=e;if(r==null)return n;let o;t[0]===a?o=t[1]:(o=a??{contentReferenceIndex:-1,messageId:``},t[0]=a,t[1]=o);let s=o,c=i&&a!=null,l;t[2]===n?l=t[3]:(l=e=>(0,$.jsxs)(`div`,{className:`group/keyboard-or-hover relative`,children:[n,e.isVisible?(0,$.jsx)(`div`,{className:`pointer-events-none absolute end-2 top-2 z-10`,children:(0,$.jsx)(`div`,{className:`cant-hover:hidden`,children:(0,$.jsx)(ft,{action:e})})}):null]}),t[2]=n,t[3]=l);let u;return t[4]!==s||t[5]!==r||t[6]!==c||t[7]!==l?(u=(0,$.jsx)(dt,{category:pe.InlineAppBlock,conversation:r,isReady:c,target:s,children:l}),t[4]=s,t[5]=r,t[6]=c,t[7]=l,t[8]=u):u=t[8],u}}));export{Fr as a,bn as c,bt as d,Ft as f,gt as h,Kn as i,xn as l,_t as m,mr as n,zn as o,vt as p,dr as r,Gn as s,Yn as t,Tn as u};
//# sourceMappingURL=e3b746a6-dr8nerfnr88aca2j.js.map