const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-nkwffv24wip3od11.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-eu29r5c5isg74cf4.js","assets/2340486e-cvl0axudepa7gku6.js","assets/root-kdmspc1p.css","assets/conversation-small-cgu6htgninz28hb1.js","assets/30901919-e870ap3jr2mcyop0.js","assets/c470f5ab-dtk99lno78n4xsg8.js","assets/0e5afe53-i1yynpvka0ivu4l5.js","assets/conversation-small-dbek0e8b.css","assets/8b34dbc2-od0xdf03n0k9khii.js","assets/82782bc9-oy0ipdet5yin1oqr.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{Aq as r,B6 as i,G1 as a,Gw as o,Jtt as s,Kw as c,MR as l,S1 as u,T6 as d,V6 as f,W1 as p,Ytt as m,_M as h,att as g,cH as _,dP as v,ett as y,ftt as b,gM as ee,hM as x,hc as S,ip as te,jR as C,lH as w,lP as ne,mM as T,mtt as E,ott as D,oy as re,pP as ie,qtt as O,sy as k,tp as A,vM as j,w6 as M,wc as ae,x1 as N,xM as oe,zq as se}from"./4813494d-eu29r5c5isg74cf4.js";import{Bn as ce,Hn as le,Pn as P,Rn as F,Tn as ue,Vn as I,_n as L,vn as de,zn as fe}from"./2340486e-cvl0axudepa7gku6.js";import{$u as pe,Cdn as me,D9 as he,DRn as ge,E9 as R,Jjt as _e,Lk as ve,MIn as z,NIn as ye,ORn as be,Pk as xe,S9 as Se,T9 as B,Tdn as V,Yjt as Ce,_9 as H,ar as we,b9 as Te,dC as Ee,ed as De,fT as Oe,g9 as ke,h9 as Ae,ir as je,m9 as Me,p9 as Ne,pT as U,qjt as Pe,uC as Fe,x9 as Ie}from"./conversation-small-cgu6htgninz28hb1.js";import{dE as Le,fE as Re,ix as ze,nw as Be,rw as W,rx as Ve}from"./30901919-e870ap3jr2mcyop0.js";import{n as He,r as Ue}from"./2ea88c7a-lxyla91xs6iv7odf.js";import{a as We,o as Ge,r as Ke,t as qe}from"./8d846022-abyk2bvrp61fwgqi.js";import{i as Je,n as Ye,r as Xe}from"./91969468-embg22vg2xwq1820.js";import{n as G,t as Ze}from"./4d271a7b-hf95t7ffjoq0k9vy.js";import{n as Qe,r as $e}from"./58bafdef-ik21ue8w99jjnr1p.js";import{a as et,i as tt}from"./e01e2324-jaquqbymb1zcogv9.js";import{i as nt,t as rt}from"./5dc32f04-cnqz9la0k0aojuvl.js";import{c as it,i as at,o as ot,r as st,s as ct,t as lt}from"./56dee4d8-d16uzkyrquw8bf6i.js";import{n as ut,t as dt}from"./72bb039a-iajo596169zb7m8i.js";import{i as ft,n as pt,r as mt,t as ht}from"./9eb56efa-oi2hqxeh35bdwdk9.js";import{i as gt,n as _t,r as K,t as vt}from"./cc79834b-jgw55wzpnismfwi5.js";function yt(){return y(`2779568043`)}function q(){return y(`3864712762`)}function bt(){return g(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var xt=e((()=>{D()}));function St({loadSource:e,errorSource:t,errorType:n,networkPolicy:r,outcome:i,readySignal:a,renderMode:o,surface:s,variant:c}){let l={network_policy:r,surface:s};return e!=null&&(l.load_source=e),t!=null&&(l.error_source=t),n!=null&&(l.error_type=n),i!=null&&(l.outcome=i),a!=null&&(l.ready_signal=a),o!=null&&(l.render_mode=o),c!=null&&(l.variant=c),l}function Ct(){return typeof performance<`u`?performance.now():Date.now()}function wt(e){return new TextEncoder().encode(e).byteLength/1024}function Tt(e){return e instanceof Error?e.name:`unknown`}function J(e,t,n=1){s.count(m.APP_BLOCKS,e,St(t),n)}function Et(e,t,n){s.hist(m.APP_BLOCKS,e,St(n),t)}function Dt({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,Ot.useRef)(Ct()),i=(0,Ot.useRef)(null),a=(0,Ot.useRef)(!1),o=(0,Ot.useRef)(!1),s=h(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=h((n=e)=>{o.current||(o.current=!0,Et(jt,wt(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:h((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=Ct(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),J(Pt,t);let _=(e,n)=>{f||(f=!0,J(Nt,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=Ct();Et(Mt,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,Et(kt,s-r.current,t),n!=null&&Et(It,s-n,t))},y=(e,n)=>{if(s(),typeof window>`u`){v(e,n);return}i.current=window.requestAnimationFrame(()=>{if(t.loadSource===`saved_inline`){i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,n)});return}i.current=null,v(e,n)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=Ct(),g=n,Et(Ft,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{!e()||p||(p=!0,s(),J(At,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt=e((()=>{O(),ee(),Ot=n(le()),kt=`app_block.first_render_time_ms`,At=`app_block.load.failure`,jt=`app_block.payload_size_kb`,Mt=`app_block.ready_to_first_paint_ms`,Nt=`app_block.render.outcome`,Pt=`app_block.render.start`,Ft=`app_block.sandbox_eval_to_ready_ms`,It=`app_block.widget_ref_to_first_paint_ms`})),Rt,zt=e((()=>{Rt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),Bt=e((()=>{})),Vt,Ht=e((()=>{Bt(),Vt=`/cdn/assets/app-block-sandbox-foundation-l4fcvweu.css`})),Ut,Wt=e((()=>{Ut=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}:where(button):is(:enabled,:disabled){font-weight:500}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){appearance:none;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;background:0 0;border:0;border-radius:9999px;width:100%;min-width:0;height:24px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.4}:where(input[type=range])::-webkit-slider-runnable-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:6px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;margin-top:-7px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}:where(input[type=range])::-moz-range-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:6px}:where(input[type=range])::-moz-range-progress{background:0 0;border-radius:9999px;height:6px}:where(input[type=range])::-moz-range-thumb{box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}@media (hover:hover) and (pointer:fine){:where(input[type=range]:enabled:hover)::-webkit-slider-thumb{transform:scale(1.05)}:where(input[type=range]:enabled:hover)::-moz-range-thumb{transform:scale(1.05)}}:where(input[type=range]:focus-visible){outline:none}:where(input[type=range]:focus-visible)::-webkit-slider-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(input[type=range]:focus-visible)::-moz-range-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),Gt=e((()=>{})),Kt,qt=e((()=>{Gt(),Kt=`/cdn/assets/app-block-sandbox-b1cs4d5m.css`}));function Jt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Y=e((()=>{}));function Yt(e){return String.raw(on||=Jt([`<script>
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
<\/script>`]),e===`open`)}function Xt(e){return/<!doctype\b|<html[\s>]/i.test(e)}function Zt(e,t){let n=e.match(/<\/body\s*>(?=\s*(?:<\/html\s*>)?\s*$)/i)??e.match(/<\/html\s*>\s*$/i);if(n?.index==null)return`${e}\n${t}`;let r=n.index;return[e.slice(0,r),t,e.slice(r)].join(`
`)}function Qt(e){let t=e.trim().replaceAll(`_`,`-`);return t.length===0||!/^[A-Za-z0-9-]+$/.test(t)?`en`:t}function $t(e){if(/^https?:\/\//i.test(e)||typeof window>`u`)return e;let t=window.location.origin;return new URL(e,t).toString()}function en(e){try{return new URL(e).origin}catch{return null}}function tn(e){return dn.has(e)?e:`default`}function nn(e,t){return t===`skybridge`||t===`stage`?e===`dark`?`#212121`:`#ffffff`:e===`dark`?`#000000`:`#fcfcfc`}function rn(e=[]){let t=$t(Kt),n=$t(Vt),r=[en(cn),en(ln),en(t),en(n),...un,...e.map(en)];return Array.from(new Set(r.filter(e=>e!=null)))}function an(e,t=`light`,n=`en`,r=`default`,i=`inline`,{loadTailwind:a=!0,platform:o,progressiveStreaming:s=!1,syncPresentationSurface:c=!1,styleMode:l=`default`}={}){let u=e.trim(),d=c?Yt(l):``;if(!s&&Xt(u))return{html:c?Zt(u,d):u,expectReadySignal:!1};let f=Qt(n),p=l===`open`?Rt:Ut,m=$t(l===`open`?Vt:Kt),h=tn(r),g=nn(t,i),_=i===`skybridge`&&o!=null&&o!==`web`||i===`inline`&&l===`open`,v=[`color-scheme: ${t};`,_?`background-color: transparent;`:`background-color: var(--main-surface-primary, ${g});`].join(` `);return{expectReadySignal:a,frameColorScheme:t,html:`<!doctype html>
<html ${[`lang="${f}"`,`class="${t}"`,`data-chat-theme="${h}"`,`data-app-block-surface="${i}"`,`data-app-block-style-mode="${l}"`,o==null?null:`data-app-block-platform="${o}"`,`style="${v}"`].filter(e=>e!=null).join(` `)}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="${t}" />
    ${a?`<script>
      window.tailwind = window.tailwind || {};
      window.tailwind.config = { darkMode: "class" };
    <\/script>
    <script id="app-block-tailwind" src="${cn}" defer><\/script>
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
    ${s?fn:``}
  </head>
  <body>
    <main>
${s?``:u}
    </main>
    ${d}
    ${s?pn:``}
  </body>
</html>`}}var on,sn,cn,ln,un,dn,fn,pn,mn=e((()=>{zt(),Ht(),Wt(),qt(),Y(),cn=`https://cdn.tailwindcss.com`,ln=`https://images.openai.com`,un=[`https://persistent.oaistatic.com`,`https://cdnjs.cloudflare.com`,`https://esm.sh`,`https://cdn.jsdelivr.net`,`https://unpkg.com`,`https://fonts.googleapis.com`,`https://fonts.gstatic.com`,`https://fonts.bunny.net`],dn=new Set([`default`,`blue`,`green`,`yellow`,`purple`,`pink`,`orange`,`black`]),fn=`<style>
  @media (prefers-reduced-motion: no-preference) {
    [data-app-block-stream-enter] {
      animation: app-block-stream-enter 160ms ease-out both;
    }

    @keyframes app-block-stream-enter {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  }
</style>`,pn=String.raw(sn||=Jt([`<script>
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
<\/script>`]))}));function hn(){"use forget";let e=(0,gn.useContext)(_n);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var gn,_n,vn=e((()=>{gn=n(le()),_n=(0,gn.createContext)(null)})),yn,bn=e((()=>{u(),de(),yn=N(()=>L(()=>import(`./7aa2b76f-nkwffv24wip3od11.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])))}));function xn(e){"use forget";let t=(0,wn.c)(42),{additionalResourceDomains:n,canSubmitTurn:r,children:i,code:a,conversationId:o,headerAction:s,source:c,styleMode:l,title:u}=e,f=`app-block:${c.appBlockId}:${(0,Tn.useId)()}`,p=(0,Tn.useRef)(null),[m,h]=(0,Tn.useState)(null),g=c.appBlockId,_=c.libraryFileId,v=c.messageId,y=c.refIndex,b=o??null,ee;t[0]!==b||t[1]!==g?(ee={appBlockId:g,conversationId:b},t[0]=b,t[1]=g,t[2]=ee):ee=t[2];let x=ee,S=d(Ne),te;t[3]!==S||t[4]!==x?(te=H(S,x),t[3]=S,t[4]=x,t[5]=te):te=t[5];let C=te,w=S?.appBlockId===g&&S.conversationId===b&&(S.isOriginalVersion===!0||S.versionNumber!=null),ne=C||w,T;t[6]!==S||t[7]!==f||t[8]!==x?(T=Te(S,x,f),t[6]=S,t[7]=f,t[8]=x,t[9]=T):T=t[9];let E=T,D;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(D=()=>{p.current?.focus()},t[10]=D):D=t[10];let re=D,ie=m?.supportsAtomicMove?m:void 0,O;t[11]!==g||t[12]!==_||t[13]!==v||t[14]!==y?(O={appBlockId:g,libraryFileId:_,messageId:v,refIndex:y},t[11]=g,t[12]=_,t[13]=v,t[14]=y,t[15]=O):O=t[15];let k;t[16]!==n||t[17]!==r||t[18]!==a||t[19]!==s||t[20]!==l||t[21]!==ie||t[22]!==O||t[23]!==u?(k={additionalResourceDomains:n,canSubmitTurn:r,code:a,focusOnClose:re,headerAction:s,sharedPreview:ie,source:O,styleMode:l,title:u},t[16]=n,t[17]=r,t[18]=a,t[19]=s,t[20]=l,t[21]=ie,t[22]=O,t[23]=u,t[24]=k):k=t[24];let A=k,j,M;t[25]!==A||t[26]!==C||t[27]!==x?(j=()=>{C&&Ie(x,A)},M=[A,C,x],t[25]=A,t[26]=C,t[27]=x,t[28]=j,t[29]=M):(j=t[28],M=t[29]),(0,Tn.useEffect)(j,M);let ae;t[30]!==A||t[31]!==E||t[32]!==x?(ae=()=>{Me(x,E,A)},t[30]=A,t[31]=E,t[32]=x,t[33]=ae):ae=t[33];let N=ae,oe;t[34]!==ne||t[35]!==w||t[36]!==N||t[37]!==m?(oe={isExpanded:ne,isViewingHistoricalVersion:w,openExpandedView:N,setSharedPreview:h,sharedPreview:m,triggerRef:p},t[34]=ne,t[35]=w,t[36]=N,t[37]=m,t[38]=oe):oe=t[38];let se=oe,ce;return t[39]!==i||t[40]!==se?(ce=(0,En.jsx)(_n.Provider,{value:se,children:i}),t[39]=i,t[40]=se,t[41]=ce):ce=t[41],ce}function Sn(e){"use forget";let t=(0,wn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,headerTitleContent:o,title:s}=e,c=K(),l;t[0]===i?l=t[1]:(l=()=>i==null?0:pe(i).height$()??0,t[0]=i,t[1]=l);let u=d(l),f=c===`fullscreen`&&n&&i!=null?u:0,p=o??s,m;t[2]===p?m=t[3]:(m=(0,En.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:p}),t[2]=p,t[3]=m);let h;t[4]!==a||t[5]!==m?(h=(0,En.jsxs)(vt.Header,{className:`pb-1`,children:[m,a]}),t[4]=a,t[5]=m,t[6]=h):h=t[6];let g;t[7]===f?g=t[8]:(g={paddingBottom:f},t[7]=f,t[8]=g);let _;t[9]===r?_=t[10]:(_=(0,En.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=_);let v;t[11]!==g||t[12]!==_?(v=(0,En.jsx)(vt.Body,{className:`bg-token-bg-primary overflow-hidden`,style:g,children:_}),t[11]=g,t[12]=_,t[13]=v):v=t[13];let y;return t[14]!==h||t[15]!==v?(y=(0,En.jsxs)(En.Fragment,{children:[h,v]}),t[14]=h,t[15]=v,t[16]=y):y=t[16],y}function Cn(e){"use forget";let t=(0,wn.c)(5),{conversation:n,paneId:r}=e,i=gt(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,En.jsx)(yn,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var wn,Tn,En,Dn=e((()=>{wn=ue(),De(),_t(),M(),Tn=n(le()),vn(),ke(),bn(),En=I()}));function On(){"use forget";let e=(0,kn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,An.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,An.jsx)(P,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var kn,An,jn=e((()=>{kn=ue(),fe(),An=I()}));function Mn(e,t,n){"use forget";let r=(0,Pn.c)(11),i=t===void 0||t,a=ce(),o;r[0]!==a||r[1]!==e?(o=e?a.formatMessage(X.generatingApp,{title:e}):a.formatMessage(X.creatingInterface),r[0]=a,r[1]=e,r[2]=o):o=r[2];let s=o,c;r[3]!==s||r[4]!==a||r[5]!==n?(c=n??[s,a.formatMessage(X.sketchingInterface),a.formatMessage(X.shapingLayout),a.formatMessage(X.arrangingPieces),a.formatMessage(X.polishingVisuals),a.formatMessage(X.tuningInputs),a.formatMessage(X.addingInteractivity),a.formatMessage(X.wiringControls),a.formatMessage(X.composingInteractions),a.formatMessage(X.calibratingPreview),a.formatMessage(X.refiningDetails)],r[3]=s,r[4]=a,r[5]=n,r[6]=c):c=r[6];let l=c,[u,d]=(0,Fn.useState)(0),f,p;return r[7]!==i||r[8]!==l.length?(f=()=>{if(!i)return;let e=window.setInterval(()=>{d(e=>Math.min(e+1,l.length-1))},Ln);return()=>{window.clearInterval(e)}},p=[i,l.length],r[7]=i,r[8]=l.length,r[9]=f,r[10]=p):(f=r[9],p=r[10]),(0,Fn.useEffect)(f,p),l[u]??l[0]??``}function Nn(e){"use forget";let t=(0,Pn.c)(2),{loadingLabels:n,title:r}=e,i=Mn(r,!0,n),a;return t[0]===i?a=t[1]:(a=(0,In.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,role:`status`,children:(0,In.jsx)(rt,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:i})}),t[0]=i,t[1]=a),a}var Pn,Fn,In,Ln,X,Rn,zn=e((()=>{Pn=ue(),nt(),f(),Fn=n(le()),fe(),In=I(),Ln=2800,X=F({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}}),Rn=e=>{"use forget";let t=(0,Pn.c)(11),{isVisible:n,title:r}=e,a=Mn(r,n),o=!n,s=n?`grid-rows-[1fr] opacity-100`:`grid-rows-[0fr] opacity-0`,c;t[0]===s?c=t[1]:(c=i(`grid shrink-0 transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none`,s),t[0]=s,t[1]=c);let l=n&&`loading-shimmer-pure-text motion-reduce:animate-none`,u;t[2]===l?u=t[3]:(u=i(`text-token-text-secondary inline-block font-sans font-medium`,l),t[2]=l,t[3]=u);let d;t[4]!==a||t[5]!==u?(d=(0,In.jsx)(`div`,{className:`min-h-0 overflow-hidden`,children:(0,In.jsx)(`div`,{className:`pb-3`,children:(0,In.jsx)(`span`,{className:u,children:a})})}),t[4]=a,t[5]=u,t[6]=d):d=t[6];let f;return t[7]!==o||t[8]!==c||t[9]!==d?(f=(0,In.jsx)(`div`,{"aria-atomic":`true`,"aria-hidden":o,"aria-live":`polite`,className:c,role:`status`,children:d}),t[7]=o,t[8]=c,t[9]=d,t[10]=f):f=t[10],f}}));function Bn({appBlockId:e,conversation:t}){return t==null?null:lt(t).get(e)??null}function Vn(e){return e?.serverId$()??void 0}function Hn({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:_e(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function Un({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return Pe({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:te(e)?`missing`:`failed`})}),()=>{a.abort()}}function Wn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??Gn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function Gn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var Kn=e((()=>{A(),Ce(),st()})),qn=t({AppBlock:()=>Xn,AppBlockCollapsedPreview:()=>ir,AppBlockPreviewLoadingState:()=>hr,AppBlockSandboxPreview:()=>fr});function Jn(e){let t=e.search(Ar),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function Yn(e){let t=Jn(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(jr))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(Mr)!=null}function Xn(e){"use forget";let t=(0,Z.c)(153),{additionalResourceDomains:n,appBlockId:r,authoritativeCode:i,authoritativeSource:a,bind:o,code:s,collapseWhenSuperseded:c,currentContentFileId:l,displayMode:u,editingEnabled:f,expandedHeaderAction:p,expandedViewEnabled:m,id:h,captureConsoleMessages:g,clientThreadId:_,iconSvg:v,inlineHeight:y,isStreaming:b,isTurnStreaming:ee,libraryFileId:x,libraryFileVersionNumber:S,loadingLabels:te,messageId:C,onConsoleMessagesChange:w,onReadyChange:T,previewLoadingLabel:E,progressiveStreaming:D,ref:re,refIndex:O,styleMode:k,title:A,variant:j,wasStreamingWhenFirstSeen:M,widgetName:N,widgetRefSeenAtMs:oe}=e,ce=c===void 0||c,le=g!==void 0&&g,P=b!==void 0&&b,F=ee!==void 0&&ee,ue=D!==void 0&&D,I=j===void 0?`inline`:j,L=ie(),de=(0,Q.useContext)(dt),fe;t[0]===L?fe=t[1]:(fe=()=>L!=null&&ye(L),t[0]=L,t[1]=fe);let pe=d(fe),me;t[2]!==_||t[3]!==L?(me=_==null?L:ne(_),t[2]=_,t[3]=L,t[4]=me):me=t[4];let he=me,ge=C!=null&&O!=null?ct({messageId:C,refIndex:O}):void 0,R=r??ge??ct({messageId:C??h,refIndex:O??0}),_e=d(()=>xe({conversation:L??null,instanceId:R,messageId:C,refIndex:O}))??u,ve=d(()=>a!=null||_e!=null?null:Bn({appBlockId:R,conversation:L??null})),z=a??ve,be;t[5]===L?be=t[6]:(be=()=>Vn(L??null),t[5]=L,t[6]=be);let Se=d(be),B=se(L?.id),V=Se??B,Ce;t[7]!==l||t[8]!==x||t[9]!==S||t[10]!==V||t[11]!==z?(Ce=Hn({currentContentFileId:l,libraryFileId:x,libraryFileVersionNumber:S,serverThreadId:V,source:z}),t[7]=l,t[8]=x,t[9]=S,t[10]=V,t[11]=z,t[12]=Ce):Ce=t[12];let H=Ce,[we,Te]=(0,Q.useState)(null),[Ee,De]=(0,Q.useState)(0),Oe;t[13]!==Ee||t[14]!==H.libraryContentKey?(Oe=[H.libraryContentKey,Ee],t[13]=Ee,t[14]=H.libraryContentKey,t[15]=Oe):Oe=t[15];let ke=Oe.join(`\0`),je,Ne;t[16]!==i||t[17]!==ke||t[18]!==H.contentFileId||t[19]!==H.libraryFileId||t[20]!==_e||t[21]!==V?(je=()=>{if(!(i!=null||_e===`collapsed`))return Un({contentFileId:H.contentFileId,libraryContentKey:ke,libraryFileId:H.libraryFileId,onContentStateChange:Te,serverThreadId:V})},Ne=[i,H.contentFileId,H.libraryFileId,ke,_e,V],t[16]=i,t[17]=ke,t[18]=H.contentFileId,t[19]=H.libraryFileId,t[20]=_e,t[21]=V,t[22]=je,t[23]=Ne):(je=t[22],Ne=t[23]),(0,Q.useEffect)(je,Ne);let U=Wn({appBlockId:R,contentFileId:H.contentFileId,currentContentFileId:l,libraryContent:we,libraryContentKey:ke,libraryFileId:x,libraryFileVersionNumber:S,source:z}),Ie=we?.key===ke?we:null,Le;t[24]!==U?.libraryFileId||t[25]!==x?(Le=()=>Ae(U?.libraryFileId??x),t[24]=U?.libraryFileId,t[25]=x,t[26]=Le):Le=t[26];let Re=d(Le),ze=U?.libraryFileVersionNumber??S,Be=Re!=null&&(ze==null||Re.versionNumber>=ze)?Re.code:void 0,W=Be??i??U?.content??s??null,Ve=U?.iconSvg??v??null,He=U?.libraryFileId??x,Ue=He==null&&i==null&&Be==null&&l==null&&z?.currentContentFileId==null&&z?.latestPatchMessageId==null,We=M===!1&&I===`inline`&&Ue,Ge;t[27]!==s||t[28]!==Ue||t[29]!==C||t[30]!==W||t[31]!==O||t[32]!==z?(Ge=Ue?z==null?C!=null&&O!=null&&s!=null&&W===s?{messageId:C,refIndex:O}:null:z.messageId.length>0&&z.content!=null&&W===z.content?{messageId:z.messageId,refIndex:z.refIndex}:null:null,t[27]=s,t[28]=Ue,t[29]=C,t[30]=W,t[31]=O,t[32]=z,t[33]=Ge):Ge=t[33];let Ke=Ge,qe=I===`artifact`,Je=U?.styleMode??k??(qe&&ue?`open`:void 0),Ye;t[34]!==He||t[35]!==Je?(Ye=ot({explicitStyleMode:Je,libraryFileId:He}),t[34]=He,t[35]=Je,t[36]=Ye):Ye=t[36];let Xe=Ye,G=U?.title??A,Ze;t[37]===L?Ze=t[38]:(Ze=()=>L!=null&&ae(L)?`work`:`chat`,t[37]=L,t[38]=Ze);let Qe=d(Ze),$e;t[39]===f?$e=t[40]:($e=f??bt(),t[39]=f,t[40]=$e);let et=$e,tt=m??et,nt=ue,rt=qe&&Xe===`open`,it=_e===`collapsed`||_e==null&&ce&&U?.latestPatchMessageId!=null&&U.latestPatchMessageId!==C,at=s!=null||l!=null,st;t[41]!==et||t[42]!==_||t[43]!==s||t[44]!==L?.id||t[45]!==l||t[46]!==R||t[47]!==p||t[48]!==S||t[49]!==C||t[50]!==He||t[51]!==Xe||t[52]!==G||t[53]!==O||t[54]!==V||t[55]!==z?.messageId?(st=async e=>{let t=s;if(t==null&&l!=null)try{t=await Pe({abortSignal:new AbortController().signal,fileId:l,serverThreadId:V})}catch{return}t!=null&&Me({appBlockId:R,conversationId:L?.id??_??null,isOriginalVersion:!0,versionNumber:S??void 0},`app-block:${R}:original`,{canSubmitTurn:et,code:t,headerAction:p,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:R,libraryFileId:He,messageId:z?.messageId??C,refIndex:O},styleMode:Xe,title:G})},t[41]=et,t[42]=_,t[43]=s,t[44]=L?.id,t[45]=l,t[46]=R,t[47]=p,t[48]=S,t[49]=C,t[50]=He,t[51]=Xe,t[52]=G,t[53]=O,t[54]=V,t[55]=z?.messageId,t[56]=st):st=t[56],L?.id,z?.messageId;let lt=st;if(P&&!nt){let e;return t[57]!==te||t[58]!==G?(e=(0,$.jsx)(Nn,{loadingLabels:te,title:G}),t[57]=te,t[58]=G,t[59]=e):e=t[59],e}let ut=pe&&s!=null;if(Ie?.status===`missing`&&!ut)return null;if(it){let e=at?lt:void 0,n;return t[60]!==G||t[61]!==e?(n=(0,$.jsx)(ur,{onView:e,title:G}),t[60]=G,t[61]=e,t[62]=n):n=t[62],n}let ft=W??(nt&&P?``:null);if(ft==null){if(U?.latestPatchMessageId!=null){let e=L?.id??_,n=Ie?.status===`failed`,r;t[63]===De?r=t[64]:(r=()=>De(Zn),t[63]=De,t[64]=r);let i;return t[65]!==R||t[66]!==qe||t[67]!==Ve||t[68]!==E||t[69]!==G||t[70]!==e||t[71]!==n||t[72]!==r?(i=(0,$.jsx)(tr,{appBlockId:R,conversationId:e,hasFailed:n,iconSvg:Ve,onRetry:r,previewLoadingLabel:E,showHeader:qe,title:G}),t[65]=R,t[66]=qe,t[67]=Ve,t[68]=E,t[69]=G,t[70]=e,t[71]=n,t[72]=r,t[73]=i):i=t[73],i}let e;return t[74]!==te||t[75]!==G?(e=(0,$.jsx)(Nn,{loadingLabels:te,title:G}),t[74]=te,t[75]=G,t[76]=e):e=t[76],e}let pt;t[77]!==_||t[78]!==Qe||t[79]!==P||t[80]!==F||t[81]!==C||t[82]!==O?(pt=!P&&!F&&_!=null&&C!=null&&O!=null&&yt()?{reference:{clientThreadId:_,messageId:C,referenceIndex:O},target:{kind:`app_block`,metadata:{tab:Qe}}}:void 0,t[77]=_,t[78]=Qe,t[79]=P,t[80]=F,t[81]=C,t[82]=O,t[83]=pt):pt=t[83];let mt=pt;if(de){let e=L?.id??_,r;t[84]!==n||t[85]!==o||t[86]!==le||t[87]!==R||t[88]!==h||t[89]!==y||t[90]!==P||t[91]!==w||t[92]!==T||t[93]!==E||t[94]!==Xe||t[95]!==G||t[96]!==re||t[97]!==ft||t[98]!==nt||t[99]!==e||t[100]!==I||t[101]!==oe?(r=(0,$.jsx)(fr,{additionalResourceDomains:n,appBlockId:R,bind:o,captureConsoleMessages:le,clientThreadId:e,code:ft,id:h,inlineHeight:y,isStreaming:P,onConsoleMessagesChange:w,onReadyChange:T,previewLoadingLabel:E,progressiveStreaming:nt,ref:re,styleMode:Xe,title:G,variant:I,widgetRefSeenAtMs:oe}),t[84]=n,t[85]=o,t[86]=le,t[87]=R,t[88]=h,t[89]=y,t[90]=P,t[91]=w,t[92]=T,t[93]=E,t[94]=Xe,t[95]=G,t[96]=re,t[97]=ft,t[98]=nt,t[99]=e,t[100]=I,t[101]=oe,t[102]=r):r=t[102];let i;return t[103]!==P||t[104]!==Ve||t[105]!==G||t[106]!==rt||t[107]!==r?(i=(0,$.jsx)(er,{canOpen:!1,iconSvg:Ve,isShareReady:!1,isStreaming:P,showArtifactCard:rt,title:G,children:r}),t[103]=P,t[104]=Ve,t[105]=G,t[106]=rt,t[107]=r,t[108]=i):i=t[108],i}let ht=L?.id??_,gt=z?.messageId??C,_t;t[109]!==R||t[110]!==He||t[111]!==O||t[112]!==gt?(_t={appBlockId:R,libraryFileId:He,messageId:gt,refIndex:O},t[109]=R,t[110]=He,t[111]=O,t[112]=gt,t[113]=_t):_t=t[113];let K=rt&&tt&&!P,vt=L?.id??_,q;t[114]!==Ke||t[115]!==N?(q=Ke==null?void 0:{contentReferenceIndex:Ke.refIndex,messageId:Ke.messageId,widgetName:N??Fe.AppBlock,widgetType:Fe.AppBlock},t[114]=Ke,t[115]=N,t[116]=q):q=t[116];let xt;t[117]!==n||t[118]!==o||t[119]!==le||t[120]!==R||t[121]!==mt||t[122]!==h||t[123]!==y||t[124]!==We||t[125]!==P||t[126]!==w||t[127]!==T||t[128]!==Ve||t[129]!==E||t[130]!==Xe||t[131]!==G||t[132]!==re||t[133]!==ft||t[134]!==he||t[135]!==nt||t[136]!==rt||t[137]!==K||t[138]!==vt||t[139]!==q||t[140]!==I||t[141]!==oe?(xt=(0,$.jsx)(Qn,{additionalResourceDomains:n,appBlockId:R,bind:o,canOpen:K,captureConsoleMessages:le,clientThreadId:vt,code:ft,feedback:mt,iconSvg:Ve,id:h,inlineHeight:y,isStreaming:P,onConsoleMessagesChange:w,onReadyChange:T,previewLoadingLabel:E,progressiveStreaming:nt,isSavedInlineLoad:We,ref:re,showArtifactCard:rt,shareConversation:he,shareTarget:q,styleMode:Xe,title:G,variant:I,widgetRefSeenAtMs:oe}),t[117]=n,t[118]=o,t[119]=le,t[120]=R,t[121]=mt,t[122]=h,t[123]=y,t[124]=We,t[125]=P,t[126]=w,t[127]=T,t[128]=Ve,t[129]=E,t[130]=Xe,t[131]=G,t[132]=re,t[133]=ft,t[134]=he,t[135]=nt,t[136]=rt,t[137]=K,t[138]=vt,t[139]=q,t[140]=I,t[141]=oe,t[142]=xt):xt=t[142];let St;return t[143]!==n||t[144]!==et||t[145]!==p||t[146]!==Xe||t[147]!==G||t[148]!==ft||t[149]!==ht||t[150]!==_t||t[151]!==xt?(St=(0,$.jsx)(xn,{additionalResourceDomains:n,canSubmitTurn:et,code:ft,conversationId:ht,headerAction:p,styleMode:Xe,source:_t,title:G,children:xt}),t[143]=n,t[144]=et,t[145]=p,t[146]=Xe,t[147]=G,t[148]=ft,t[149]=ht,t[150]=_t,t[151]=xt,t[152]=St):St=t[152],St}function Zn(e){return e+1}function Qn(e){"use forget";let t=(0,Z.c)(72),{additionalResourceDomains:n,appBlockId:r,bind:i,canOpen:a,captureConsoleMessages:o,clientThreadId:s,code:c,feedback:l,iconSvg:u,id:d,inlineHeight:f,isStreaming:p,onConsoleMessagesChange:m,onReadyChange:g,previewLoadingLabel:_,progressiveStreaming:v,isSavedInlineLoad:y,ref:b,shareConversation:ee,shareTarget:S,showArtifactCard:te,styleMode:C,title:w,variant:ne,widgetRefSeenAtMs:T}=e,{isExpanded:E,isViewingHistoricalVersion:D,openExpandedView:re,setSharedPreview:ie,sharedPreview:O,triggerRef:k}=hn(),A=(0,Q.useContext)(je),j;t[0]===n?j=t[1]:(j=n??[],t[0]=n,t[1]=j);let M;t[2]!==c||t[3]!==d||t[4]!==C||t[5]!==j?(M=[d,C,c,...j],t[2]=c,t[3]=d,t[4]=C,t[5]=j,t[6]=M):M=t[6];let ae=M.join(`\0`),[N,oe]=(0,Q.useState)(null),se=!p&&N===ae,ce;t[7]===re?ce=t[8]:(ce=()=>{ge(),re()},t[7]=re,t[8]=ce);let le=ce,P;t[9]!==g||t[10]!==ae?(P=(e,t)=>{oe(e?ae:null),g?.(e,t)},t[9]=g,t[10]=ae,t[11]=P):P=t[11];let F=P,ue;t[12]!==n||t[13]!==r||t[14]!==i||t[15]!==o||t[16]!==s||t[17]!==c||t[18]!==F||t[19]!==d||t[20]!==f||t[21]!==y||t[22]!==p||t[23]!==m||t[24]!==_||t[25]!==v||t[26]!==b||t[27]!==C||t[28]!==w||t[29]!==ne||t[30]!==T?(ue=(0,$.jsx)(fr,{appBlockId:r,additionalResourceDomains:n,bind:i,code:c,id:d,inlineHeight:f,isStreaming:p,captureConsoleMessages:o,clientThreadId:s,onConsoleMessagesChange:m,onReadyChange:F,presentationSurface:`inline`,previewLoadingLabel:_,progressiveStreaming:v,isSavedInlineLoad:y,ref:b,styleMode:C,title:w,variant:ne,widgetRefSeenAtMs:T}),t[12]=n,t[13]=r,t[14]=i,t[15]=o,t[16]=s,t[17]=c,t[18]=F,t[19]=d,t[20]=f,t[21]=y,t[22]=p,t[23]=m,t[24]=_,t[25]=v,t[26]=b,t[27]=C,t[28]=w,t[29]=ne,t[30]=T,t[31]=ue):ue=t[31];let I;t[32]!==A||t[33]!==ue?(I={element:ue,sandboxPolicy:A},t[32]=A,t[33]=ue,t[34]=I):I=t[34];let L=I,de;t[35]===L?de=t[36]:(de=()=>L,t[35]=L,t[36]=de);let fe=h(de),pe;t[37]!==r||t[38]!==s||t[39]!==fe||t[40]!==ie?(pe=e=>{if(e==null)return;let{preview:t,sourceToken:n}=Se({appBlockId:r,content:fe(),conversationId:s??null,inlineContainer:e});return ie(t),()=>{let e=Ne();R(t,n,e?.sharedPreview===t)}},t[37]=r,t[38]=s,t[39]=fe,t[40]=ie,t[41]=pe):pe=t[41];let me=pe,_e,ve;t[42]!==L||t[43]!==O?(ve=()=>{O!=null&&he(O,L)},_e=[L,O],t[42]=L,t[43]=O,t[44]=_e,t[45]=ve):(_e=t[44],ve=t[45]),x(ve,_e);let z=D?le:void 0,ye;t[46]!==u||t[47]!==z||t[48]!==w||t[49]!==k?(ye=(0,$.jsx)(ir,{iconSvg:u,onOpen:z,openButtonRef:k,title:w}),t[46]=u,t[47]=z,t[48]=w,t[49]=k,t[50]=ye):ye=t[50];let be=E?ye:null,xe;t[51]===me?xe=t[52]:(xe=(0,$.jsx)(`div`,{ref:me,className:`w-full`}),t[51]=me,t[52]=xe);let B;t[53]!==a||t[54]!==l||t[55]!==le||t[56]!==u||t[57]!==se||t[58]!==p||t[59]!==ee||t[60]!==S||t[61]!==te||t[62]!==xe||t[63]!==w||t[64]!==k?(B=(0,$.jsx)(er,{canOpen:a,expandButtonRef:k,feedback:l,iconSvg:u,isShareReady:se,shareConversation:ee,shareTarget:S,isStreaming:p,showArtifactCard:te,title:w,onOpen:le,children:xe}),t[53]=a,t[54]=l,t[55]=le,t[56]=u,t[57]=se,t[58]=p,t[59]=ee,t[60]=S,t[61]=te,t[62]=xe,t[63]=w,t[64]=k,t[65]=B):B=t[65];let V;t[66]!==E||t[67]!==B?(V=(0,$.jsx)(`div`,{hidden:E,children:B}),t[66]=E,t[67]=B,t[68]=V):V=t[68];let Ce;return t[69]!==be||t[70]!==V?(Ce=(0,$.jsxs)($.Fragment,{children:[be,V]}),t[69]=be,t[70]=V,t[71]=Ce):Ce=t[71],Ce}function $n(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:a,leading:o,title:s,titleClassName:c}=e,l;t[0]===r?l=t[1]:(l=i(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=l);let u=c??`truncate text-base font-semibold`,d;t[2]===u?d=t[3]:(d=i(`text-token-text-primary`,u),t[2]=u,t[3]=d);let f=s??a,p;t[4]!==d||t[5]!==f?(p=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:d,children:f})}),t[4]=d,t[5]=f,t[6]=p):p=t[6];let m;t[7]!==o||t[8]!==p?(m=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[o,p]}),t[7]=o,t[8]=p,t[9]=m):m=t[9];let h;return t[10]!==n||t[11]!==l||t[12]!==m?(h=(0,$.jsxs)(`div`,{className:l,children:[m,n]}),t[10]=n,t[11]=l,t[12]=m,t[13]=h):h=t[13],h}function er(e){"use forget";let t=(0,Z.c)(20),{canOpen:n,children:r,expandButtonRef:a,feedback:o,iconSvg:s,isShareReady:c,isStreaming:l,onOpen:u,shareConversation:d,shareTarget:f,showArtifactCard:p,title:m}=e,h=ce(),g;t[0]===h?g=t[1]:(g=h.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=h,t[1]=g);let _=g,v;t[2]!==n||t[3]!==r||t[4]!==a||t[5]!==_||t[6]!==s||t[7]!==c||t[8]!==l||t[9]!==u||t[10]!==d||t[11]!==f||t[12]!==p||t[13]!==m?(v=p?(0,$.jsxs)(`div`,{className:i(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,l&&`cursor-wait`),"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)($n,{action:(0,$.jsx)(Nr,{canOpen:n,conversation:d,expandButtonRef:a,isReady:c,onOpen:u,target:f}),className:`min-h-13 px-4 py-2`,fallbackTitle:_,leading:l?(0,$.jsx)(C,{className:`icon-md text-token-text-primary shrink-0`}):(0,$.jsx)(or,{iconSvg:s}),title:m}),(0,$.jsx)(`div`,{children:r})]}):(0,$.jsx)(Pr,{conversation:d,isReady:c,target:f,children:r}),t[2]=n,t[3]=r,t[4]=a,t[5]=_,t[6]=s,t[7]=c,t[8]=l,t[9]=u,t[10]=d,t[11]=f,t[12]=p,t[13]=m,t[14]=v):v=t[14];let y;t[15]===o?y=t[16]:(y=o==null?null:(0,$.jsx)(nr,{...o}),t[15]=o,t[16]=y);let b;return t[17]!==v||t[18]!==y?(b=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[v,y]}),t[17]=v,t[18]=y,t[19]=b):b=t[19],b}function tr(e){"use forget";let t=(0,Z.c)(18),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:o,previewLoadingLabel:s,showHeader:c,title:l}=e,u=d(Ne),f=ce(),p;t[0]===f?p=t[1]:(p=f.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=f,t[1]=p);let m=p;if(H(u,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==l?(e=(0,$.jsx)(ir,{iconSvg:a,title:l}),t[2]=a,t[3]=l,t[4]=e):e=t[4],e}let h;t[5]!==m||t[6]!==a||t[7]!==c||t[8]!==l?(h=c?(0,$.jsx)($n,{className:`mb-2`,fallbackTitle:m,leading:(0,$.jsx)(or,{iconSvg:a}),title:l}):null,t[5]=m,t[6]=a,t[7]=c,t[8]=l,t[9]=h):h=t[9];let g;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(g={minHeight:_r},t[10]=g):g=t[10];let _;t[11]!==i||t[12]!==o||t[13]!==s?(_=(0,$.jsx)(`div`,{className:`relative w-full`,style:g,children:i?(0,$.jsx)(gr,{onRetry:o}):(0,$.jsx)(hr,{label:s})}),t[11]=i,t[12]=o,t[13]=s,t[14]=_):_=t[14];let v;return t[15]!==h||t[16]!==_?(v=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[h,_]}),t[15]=h,t[16]=_,t[17]=v):v=t[17],v}function nr(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(d(rr))return null;let o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(Oe,{}),t[0]=o):o=t[0];let s;return t[1]!==i||t[2]!==n||t[3]!==r?(s=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)(tt,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:o})}),t[1]=i,t[2]=n,t[3]=r,t[4]=s):s=t[4],s}function rr(){return $e()}function ir(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,s=ce(),c,l,u,d,f;t[0]!==s||t[1]!==r||t[2]!==i||t[3]!==a?(l=s.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),f=`not-prose relative clear-both my-4 w-full max-w-full`,d=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,c=$n,u=r==null?void 0:(0,$.jsx)(o,{ref:i,color:`secondary`,label:s.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??l}),onClick:r,type:`button`,children:(0,$.jsx)(P,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=s,t[1]=r,t[2]=i,t[3]=a,t[4]=c,t[5]=l,t[6]=u,t[7]=d,t[8]=f):(c=t[4],l=t[5],u=t[6],d=t[7],f=t[8]);let p;t[9]===n?p=t[10]:(p=(0,$.jsx)(ar,{iconSvg:n}),t[9]=n,t[10]=p);let m;t[11]!==c||t[12]!==l||t[13]!==u||t[14]!==p||t[15]!==a?(m=(0,$.jsx)(c,{action:u,className:`w-full`,fallbackTitle:l,leading:p,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=c,t[12]=l,t[13]=u,t[14]=p,t[15]=a,t[16]=m):m=t[16];let h;t[17]!==d||t[18]!==m?(h=(0,$.jsx)(`div`,{className:d,children:m}),t[17]=d,t[18]=m,t[19]=h):h=t[19];let g;return t[20]!==f||t[21]!==h?(g=(0,$.jsx)(`div`,{className:f,children:h}),t[20]=f,t[21]=h,t[22]=g):g=t[22],g}function ar(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(or,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function or(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,a=n===void 0?`text-token-text-primary`:n,o;t[0]===r?o=t[1]:(o=sr(r),t[0]=r,t[1]=o);let s=o,c;return t[2]!==a||t[3]!==s?(c=s==null?(0,$.jsx)(Be,{"aria-hidden":`true`,className:i(`icon-md shrink-0`,a)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:i(`icon-md shrink-0`,a),children:(0,$.jsx)(me,{svgString:s,className:`h-full w-full`})}),t[2]=a,t[3]=s,t[4]=c):c=t[4],c}function sr(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>Tr||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Er)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Or.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!cr(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function cr(e){let t=e.replace(Dr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Dr)){let e=t[1],n=t[2];if(!kr.has(e)||!lr(e,n))return!1}return!0}function lr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function ur(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=ce(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(P,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(P,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(P,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function dr(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:i}=e,a=ce(),s;t[0]===a?s=t[1]:(s=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=s);let c=s,l;t[2]===r?l=t[3]:(l=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=l);let u;t[4]!==c||t[5]!==i||t[6]!==l?(u=(0,$.jsx)(o,{ref:i,type:`button`,icon:Ve,color:`ghost`,size:`medium`,label:c,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:l}),t[4]=c,t[5]=i,t[6]=l,t[7]=u):u=t[7];let d;return t[8]!==n||t[9]!==c||t[10]!==u?(d=(0,$.jsx)(re,{label:c,className:n,children:u}),t[8]=n,t[9]=c,t[10]=u,t[11]=d):d=t[11],d}function fr(e){"use forget";let t=(0,Z.c)(190),{appBlockId:n,additionalResourceDomains:r,bind:o,clientThreadId:s,code:c,id:l,captureConsoleMessages:u,inlineHeight:f,isStreaming:p,onConsoleMessagesChange:m,onReadyChange:g,presentationSurface:v,previewLoadingLabel:y,progressiveStreaming:b,isSavedInlineLoad:ee,ref:S,styleMode:te,surface:C,title:w,variant:ne,widgetRefSeenAtMs:T}=e,D=p!==void 0&&p,re=b!==void 0&&b,ie=ee!==void 0&&ee,O=te===void 0?`default`:te,k=C===void 0?`inline`:C,A=ne===void 0?`inline`:ne,j=ce(),M=(0,Q.useRef)(null),ae=(0,Q.useRef)(null),N=We(o),[se,le]=(0,Q.useState)(N.values),F=a(se,N.values)?se:N.values;F!==se&&le(F);let ue=[...N.callbacks.keys()],[I,L]=(0,Q.useState)(ue),de=a(I,ue)?I:ue;de!==I&&L(de);let fe=(0,Q.useRef)(F),pe=(0,Q.useRef)(de),me=(0,Q.useRef)(N.callbacks),he=o!=null,ge=(0,Q.useRef)(!1),R=(0,Q.useRef)(!1),_e=(0,Q.useRef)(null),ve=(0,Q.useRef)(null),z=(0,Q.useRef)(null),ye=(0,Q.useRef)(null),be=(0,Q.useRef)(null),xe=(0,Q.useRef)(null),Se=(0,Q.useRef)(null),B=(0,Q.useRef)(null),V=(0,Q.useRef)(0),Ce=(0,Q.useRef)(null),H=(0,Q.useRef)(null),we;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(we=[],t[0]=we):we=t[0];let Te=(0,Q.useRef)(we),Ee=oe(),De=d(_),{isInternalPreview:Oe,networkPolicy:ke}=(0,Q.useContext)(je),Ae=ke===void 0?`none`:ke,Me=Xe()||Oe,Ne=Je(s)&&!Oe,U=Ne||Oe&&Ae===`deps-only`,Pe=Ee?`dark`:`light`,Fe=j.locale,Ie;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(Ie={status:`streaming`},t[1]=Ie):Ie=t[1];let[Le,Re]=(0,Q.useState)(Ie),ze=Le.status===`finalized`&&Le.html!==c,Be=re&&!D&&(A===`artifact`||Le.status===`failed`),W=re&&k===`inline`&&Le.status!==`static`&&!Be&&!ze,Ve=W&&D&&A===`artifact`&&!Yn(c),qe=Ve?0:vr,Ye=f??`intrinsic-height`,Ze=Me?`execution-enabled`:`execution-disabled`,Qe=U?`network-enabled`:`network-disabled`,$e=Oe?`internal-preview`:`workspace-preview`,et=he?`bindings-enabled`:`bindings-disabled`,tt=W?`progressive-app-block-stream`:c,nt;t[2]===r?nt=t[3]:(nt=r??[],t[2]=r,t[3]=nt);let rt;t[4]!==De||t[5]!==Fe||t[6]!==O||t[7]!==k||t[8]!==Ye||t[9]!==Ze||t[10]!==Qe||t[11]!==$e||t[12]!==et||t[13]!==tt||t[14]!==nt||t[15]!==Pe?(rt=[Pe,De,k,Ye,O,Fe,Ze,Qe,$e,et,tt,...nt],t[4]=De,t[5]=Fe,t[6]=O,t[7]=k,t[8]=Ye,t[9]=Ze,t[10]=Qe,t[11]=$e,t[12]=et,t[13]=tt,t[14]=nt,t[15]=Pe,t[16]=rt):rt=t[16];let it=rt.join(`\0`),at;t[17]===r?at=t[18]:(at=rn(r),t[17]=r,t[18]=at);let ot=at,st=ie?`saved_inline`:void 0,ct=U?`deps_only`:`disabled`,lt=k===`inline`?A:void 0,ut=W?`progressive`:`static`,dt;t[19]!==k||t[20]!==st||t[21]!==ct||t[22]!==lt||t[23]!==ut?(dt={loadSource:st,networkPolicy:ct,surface:k,variant:lt,renderMode:ut},t[19]=k,t[20]=st,t[21]=ct,t[22]=lt,t[23]=ut,t[24]=dt):dt=t[24];let ft=dt,[pt,mt]=(0,Q.useState)(0),[ht,gt]=(0,Q.useState)(null),_t=ht?.signature===it?ht.status:null,K=_t===`ready`,vt=K||_t===`failed_after_ready`,yt=W&&_t===`failed`,q=!D&&!W&&_t===`failed`,bt=v??k,xt=bt===`stage`||f!=null,St=f==null?k:`stage`,wt=re&&bt===`inline`&&A===`inline`,J=W&&bt===`inline`&&D&&!q,Et;t[25]!==c||t[26]!==ft||t[27]!==T?(Et={content:c,metricTags:ft,widgetRefSeenAtMs:T},t[25]=c,t[26]=ft,t[27]=T,t[28]=Et):Et=t[28];let{cancelFirstPaintFrame:Ot,startRunMetrics:kt}=Dt(Et),At,jt;t[29]===K?(At=t[30],jt=t[31]):(At=()=>{K&&xe.current?.markFirstPaint()},jt=[K],t[29]=K,t[30]=At,t[31]=jt),x(At,jt);let Mt,Nt;t[32]!==K||t[33]!==g?(Mt=()=>{g?.(K)},Nt=[K,g],t[32]=K,t[33]=g,t[34]=Mt,t[35]=Nt):(Mt=t[34],Nt=t[35]),(0,Q.useEffect)(Mt,Nt);let Pt,Ft;t[36]!==de||t[37]!==F||t[38]!==N.callbacks?(Pt=()=>{fe.current=F,pe.current=de,me.current=N.callbacks},Ft=[de,F,N.callbacks],t[36]=de,t[37]=F,t[38]=N.callbacks,t[39]=Pt,t[40]=Ft):(Pt=t[39],Ft=t[40]),x(Pt,Ft);let It;t[41]===Symbol.for(`react.memo_cache_sentinel`)?(It=e=>{ae.current===e&&M.current?.updateAppBlockMessenger?.(Ke(e,fe.current,pe.current))},t[41]=It):It=t[41];let Lt=h(It),Rt;t[42]===Lt?Rt=t[43]:(Rt=e=>{let t=ae.current;if(t==null)return;let n=Ge(e,t),r=n&&me.current.get(n.name);if(n!=null&&r){let e=()=>{E.postTask(()=>Lt(t))};try{Promise.resolve(r(...n.args)).then(e,e)}catch{e()}}},t[42]=Lt,t[43]=Rt);let zt=h(Rt),Bt;t[44]!==he||t[45]!==K||t[46]!==Lt?(Bt=()=>{let e=ae.current;!K||!he||e==null||Lt(e)},t[44]=he,t[45]=K,t[46]=Lt,t[47]=Bt):Bt=t[47];let Vt;t[48]!==de||t[49]!==F||t[50]!==he||t[51]!==K||t[52]!==Lt?(Vt=[de,F,he,K,Lt],t[48]=de,t[49]=F,t[50]=he,t[51]=K,t[52]=Lt,t[53]=Vt):Vt=t[53],(0,Q.useEffect)(Bt,Vt);let Ht,Ut;t[54]!==f||t[55]!==K||t[56]!==v?(Ht=()=>{!K||v==null||M.current?.updateAppBlockSurface?.(f==null?v:`stage`)},Ut=[f,K,v],t[54]=f,t[55]=K,t[56]=v,t[57]=Ht,t[58]=Ut):(Ht=t[57],Ut=t[58]),(0,Q.useEffect)(Ht,Ut);let Wt,Gt;t[59]===Symbol.for(`react.memo_cache_sentinel`)?(Wt=()=>({clearCapturedConsoleMessages:()=>{Te.current=[]},captureScreenshotDataUrl:async()=>(await M.current?.screenshot())?.imageBase64??null,focus:()=>{M.current?.focus()}}),Gt=[],t[59]=Wt,t[60]=Gt):(Wt=t[59],Gt=t[60]),(0,Q.useImperativeHandle)(S,Wt,Gt);let Kt;t[61]===Symbol.for(`react.memo_cache_sentinel`)?(Kt=()=>{Ce.current!=null&&(window.clearTimeout(Ce.current),Ce.current=null)},t[61]=Kt):Kt=t[61];let qt=h(Kt),Jt;t[62]===Symbol.for(`react.memo_cache_sentinel`)?(Jt=()=>{H.current!=null&&(window.clearTimeout(H.current),H.current=null)},t[62]=Jt):Jt=t[62];let Y=h(Jt),Yt;t[63]!==K||t[64]!==W?(Yt=()=>{if(!W||!K||be.current==null)return;let e=ye.current,t=M.current;if(e==null||t?.updateAppBlockStream==null||R.current)return;let n=V.current;ye.current=null,ve.current=Ct(),z.current=e.html,e.isFinal&&(R.current=!0);let r=()=>V.current!==n||be.current==null?Promise.resolve():t.updateAppBlockStream?.(e)??Promise.resolve(),i=B.current,a=i==null?r():i.then(r);B.current=a,a.then(()=>{B.current===a&&(B.current=null);let t=be.current;V.current!==n||t==null||(Yn(e.html)&&t.markFirstPaint(),e.isFinal&&(t.reportPayloadSize(e.html),Re({status:`finalized`,html:e.html})))},e=>{B.current===a&&(B.current=null),V.current===n&&(e instanceof DOMException&&e.name===`AbortError`||Se.current?.(`stream_update`,Tt(e)))})},t[63]=K,t[64]=W,t[65]=Yt):Yt=t[65];let Xt=h(Yt),Zt;t[66]!==De||t[67]!==U||t[68]!==u||t[69]!==qt||t[70]!==Y||t[71]!==c||t[72]!==St||t[73]!==he||t[74]!==Me||t[75]!==ze||t[76]!==ie||t[77]!==D||t[78]!==Fe||t[79]!==m||t[80]!==g||t[81]!==v||t[82]!==it||t[83]!==Le.status||t[84]!==Be||t[85]!==W||t[86]!==kt||t[87]!==O||t[88]!==Pe?(Zt=()=>{if(!Me)return;if(Le.status===`failed`){if(D)return;Re({status:`static`}),mt(mr);return}(ze||Be&&Le.status!==`static`)&&Re({status:`static`});let e=W&&M.current?.updateAppBlockStream!=null;if(W&&!e){D||Re({status:`static`});return}ge.current=!0,R.current=!1,_e.current=null,ve.current=null,z.current=null,ye.current=null,be.current=null,xe.current=null,Se.current=null,B.current=null,Y(),V.current+=1;let t=V.current;qt(),gt(null),ae.current=he?crypto.randomUUID():null;let{expectReadySignal:n,html:r,frameColorScheme:i}=an(c,Pe,Fe,De,St,{loadTailwind:U,progressiveStreaming:e,syncPresentationSurface:v!=null,styleMode:O}),a=!1,o=!1,s=!1,l=!1,d=!1,f=()=>V.current===t,p=()=>e&&o,h=kt(f,{deferFirstPaint:e||ie,deferPayloadSize:e});ie&&(xe.current=h),e&&(be.current=h);let _=e=>{!u||m==null||!f()||(Te.current=e,!l&&(l=!0,E.postTask(()=>{l=!1,f()&&m(Te.current)},{priority:`background`})))},y=e=>{if(!(!f()||a||s)){if(a=!0,qt(),h.markReady(e),ie){o=!0,gt({signature:it,status:`ready`});return}d||(d=!0,E.postTask(()=>{d=!1,!(!f()||s)&&(o=!0,gt({signature:it,status:`ready`}))},{priority:`background`}))}},b=(t,n)=>{!f()||s||(s=!0,qt(),Y(),ye.current=null,be.current=null,e&&Re({status:`failed`}),gt({signature:it,status:p()?`failed_after_ready`:`failed`,readyTimedOut:n===`ready_timeout`}),h.reportFailure(t,n),E.postTask(()=>{f()&&(e?g?.(!1):g?.(!1,`failure`))},{priority:`background`}))};Se.current=b,Te.current=[],_([]),Ce.current=window.setTimeout(()=>{b(`sandbox_eval`,`ready_timeout`)},br),(async()=>{let e=M.current?.evalAsync({code:r,...ae.current==null?{}:{additionalGlobals:{__appBlockMessenger:Ke(ae.current,fe.current,pe.current)}},expectReadySignal:n,language:`html`,frameColorScheme:i,shouldPreservePreviewOnFatalError:()=>f()&&p()});if(e==null){b(`sandbox_eval`,`missing_generator`);return}for(;;){let t=await e.next();if(t.done){f()&&!a&&b(`sandbox_eval`,`generator_completed_without_ready`);break}f()&&(_([...Te.current,t.value]),t.value.type===Ue.ENVIRONMENT_STATUS&&t.value.status===He.RUNNING_CODE&&y(`running_code`),t.value.type===Ue.RUN_COMPLETE&&(t.value.wasFatalError?b(`runtime`,`fatal_runtime_error`):(y(`run_complete`),h.reportSuccess(`run_complete`))),await E.yield())}})().catch(e=>{f()&&(e instanceof DOMException&&e.name===`AbortError`||b(`sandbox_eval`,Tt(e)))})},t[66]=De,t[67]=U,t[68]=u,t[69]=qt,t[70]=Y,t[71]=c,t[72]=St,t[73]=he,t[74]=Me,t[75]=ze,t[76]=ie,t[77]=D,t[78]=Fe,t[79]=m,t[80]=g,t[81]=v,t[82]=it,t[83]=Le.status,t[84]=Be,t[85]=W,t[86]=kt,t[87]=O,t[88]=Pe,t[89]=Zt):Zt=t[89];let Qt=h(Zt),$t;t[90]!==qt||t[91]!==Y?($t=()=>{V.current+=1,ge.current=!1,R.current=!1,_e.current=null,z.current=null,ye.current=null,be.current=null,Se.current=null,B.current=null,qt(),Y(),gt(null),mt(pr)},t[90]=qt,t[91]=Y,t[92]=$t):$t=t[92];let en=h($t),tn;t[93]!==xt||t[94]!==bt?(tn=bt===`inline`&&!xt?{margin:-4,width:`calc(100% + ${yr*2}px)`}:void 0,t[93]=xt,t[94]=bt,t[95]=tn):tn=t[95];let nn=tn,on;t[96]!==Ot||t[97]!==qt||t[98]!==Y||t[99]!==Qt?(on=()=>{Qt();let e=M.current;return()=>{V.current+=1,ae.current=null,be.current=null,xe.current=null,Se.current=null,B.current=null,qt(),Y(),Ot(),e?.stop()}},t[96]=Ot,t[97]=qt,t[98]=Y,t[99]=Qt,t[100]=on):on=t[100];let sn;t[101]!==Ot||t[102]!==qt||t[103]!==Y||t[104]!==Me||t[105]!==it||t[106]!==Qt||t[107]!==pt?(sn=[Ot,qt,Y,Me,it,Qt,pt],t[101]=Ot,t[102]=qt,t[103]=Y,t[104]=Me,t[105]=it,t[106]=Qt,t[107]=pt,t[108]=sn):sn=t[108],(0,Q.useEffect)(on,sn);let cn,ln;t[109]!==D||t[110]!==Qt||t[111]!==W?(cn=()=>{!W||D||ge.current||M.current?.updateAppBlockStream!=null||Qt()},ln=[D,Qt,W],t[109]=D,t[110]=Qt,t[111]=W,t[112]=cn,t[113]=ln):(cn=t[112],ln=t[113]),(0,Q.useEffect)(cn,ln);let un,dn;if(t[114]!==Y||t[115]!==c||t[116]!==Xt||t[117]!==q||t[118]!==K||t[119]!==D||t[120]!==W||t[121]!==A?(un=()=>{if(!W||!K||q||R.current||M.current?.updateAppBlockStream==null)return;let e=D?Jn(c):c;if(D&&(ye.current?.html??z.current)===e)return;if(ye.current={html:e,isFinal:!D},!D){Y(),Xt();return}let t=ve.current;if(t==null&&A===`artifact`&&(_e.current??=Ct(),t=_e.current),t==null){Xt();return}let n=A===`artifact`?Sr:xr,r=Ct()-t;if(r>=n){Xt();return}return H.current=window.setTimeout(()=>{H.current=null,Xt()},n-r),Y},dn=[Y,c,Xt,q,K,D,W,A],t[114]=Y,t[115]=c,t[116]=Xt,t[117]=q,t[118]=K,t[119]=D,t[120]=W,t[121]=A,t[122]=un,t[123]=dn):(un=t[122],dn=t[123]),(0,Q.useEffect)(un,dn),!Me){let e;return t[124]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(On,{}),t[124]=e):e=t[124],e}let fn=wt&&`flex-col`,pn=bt===`inline`&&(Ve?`h-0 min-h-0 overflow-hidden`:`min-h-[120px] overflow-visible`),mn=bt===`stage`&&`h-full min-h-0`,hn;t[125]!==fn||t[126]!==pn||t[127]!==mn?(hn=i(`flex w-full`,fn,pn,mn),t[125]=fn,t[126]=pn,t[127]=mn,t[128]=hn):hn=t[128];let gn;t[129]!==wt||t[130]!==J||t[131]!==w?(gn=wt?(0,$.jsx)(Rn,{isVisible:J,title:w}):null,t[129]=wt,t[130]=J,t[131]=w,t[132]=gn):gn=t[132];let _n=!D&&!W&&(_t===`failed`||_t===`failed_after_ready`)&&ht?.readyTimedOut||void 0,vn=bt===`inline`&&!xt?`flex-none`:`w-full`,yn=J&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,bn;t[133]!==vn||t[134]!==yn?(bn=i(`relative min-w-0`,vn,yn),t[133]=vn,t[134]=yn,t[135]=bn):bn=t[135];let xn;t[136]!==f||t[137]!==nn||t[138]!==bt?(xn=bt===`inline`&&f!=null?{height:f}:nn,t[136]=f,t[137]=nn,t[138]=bt,t[139]=xn):xn=t[139];let Sn=`${pt}:${U?`network-enabled`:`network-disabled`}:${Oe?`internal-preview`:`workspace-preview`}`,Cn;t[140]!==n||t[141]!==s||t[142]!==l?(Cn=JSON.stringify([s??null,n??l]),t[140]=n,t[141]=s,t[142]=l,t[143]=Cn):Cn=t[143];let wn;t[144]===j?wn=t[145]:(wn=j.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[144]=j,t[145]=wn);let Tn=U?`deps-only`:`none`,En=Ne?Cr:wr,Dn=vt?0:-1,kn=he?zt:void 0,An=bt===`inline`&&!xt&&O===`open`,jn=!xt,Mn=W?qe:_r,Nn;t[146]!==l||t[147]!==Oe||t[148]!==Qt||t[149]!==ot||t[150]!==Sn||t[151]!==Cn||t[152]!==wn||t[153]!==Tn||t[154]!==En||t[155]!==Dn||t[156]!==kn||t[157]!==An||t[158]!==jn||t[159]!==Mn?(Nn=(0,$.jsx)(G,{id:l,sandboxOriginId:Cn,title:wn,visuallyHidden:!1,networkPolicy:Tn,disableExternalNavigation:Oe,additionalResourceDomains:ot,sandboxPermissions:En,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:Dn,onRetryCodeRun:Qt,onAppBlockMessage:kn,transparentBackground:An,useIntrinsicHeight:jn,intrinsicHeightFallback:Mn,ref:M},Sn),t[146]=l,t[147]=Oe,t[148]=Qt,t[149]=ot,t[150]=Sn,t[151]=Cn,t[152]=wn,t[153]=Tn,t[154]=En,t[155]=Dn,t[156]=kn,t[157]=An,t[158]=jn,t[159]=Mn,t[160]=Nn):Nn=t[160];let Pn;t[161]===J?Pn=t[162]:(Pn=J?(0,$.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 z-10 cursor-wait`}):null,t[161]=J,t[162]=Pn);let Fn;t[163]!==yt||t[164]!==q||t[165]!==vt||t[166]!==y||t[167]!==W?(Fn=!vt&&!q&&(!W||yt)?(0,$.jsx)(hr,{label:y}):null,t[163]=yt,t[164]=q,t[165]=vt,t[166]=y,t[167]=W,t[168]=Fn):Fn=t[168];let In;t[169]!==q||t[170]!==en?(In=q?(0,$.jsx)(gr,{onRetry:en}):null,t[169]=q,t[170]=en,t[171]=In):In=t[171];let Ln;t[172]!==J||t[173]!==_n||t[174]!==bn||t[175]!==xn||t[176]!==Nn||t[177]!==Pn||t[178]!==Fn||t[179]!==In?(Ln=(0,$.jsxs)(`div`,{"aria-busy":J,"data-app-block-ready-timeout":_n,className:bn,style:xn,children:[Nn,Pn,Fn,In]}),t[172]=J,t[173]=_n,t[174]=bn,t[175]=xn,t[176]=Nn,t[177]=Pn,t[178]=Fn,t[179]=In,t[180]=Ln):Ln=t[180];let X;t[181]!==y||t[182]!==J||t[183]!==A?(X=J&&A===`artifact`?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:y??(0,$.jsx)(P,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[181]=y,t[182]=J,t[183]=A,t[184]=X):X=t[184];let zn;return t[185]!==hn||t[186]!==gn||t[187]!==Ln||t[188]!==X?(zn=(0,$.jsxs)(`div`,{className:hn,children:[gn,Ln,X]}),t[185]=hn,t[186]=gn,t[187]=Ln,t[188]=X,t[189]=zn):zn=t[189],zn}function pr(e){return e+1}function mr(e){return e+1}function hr(e){"use forget";let t=(0,Z.c)(5),{label:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(C,{className:`icon-sm text-token-text-tertiary`}),t[0]=r):r=t[0];let i;t[1]===n?i=t[2]:(i=n??(0,$.jsx)(P,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`}),t[1]=n,t[2]=i);let a;return t[3]===i?a=t[4]:(a=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,role:`status`,children:[r,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:i})]}),t[3]=i,t[4]=a),a}function gr(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(P,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(P,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(o,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr=e((()=>{Z=ue(),c(),Qe(),we(),U(),l(),w(),Ze(),k(),W(),ze(),Le(),be(),Ye(),v(),z(),ft(),ut(),Ee(),b(),M(),r(),V(),S(),j(),T(),ee(),et(),pt(),Ce(),qe(),f(),p(),Q=n(le()),fe(),mn(),Lt(),xt(),Dn(),ke(),jn(),vn(),zn(),it(),B(),ve(),at(),Kn(),$=I(),_r=432,vr=120,yr=4,br=15e3,xr=100,Sr=350,Cr=`allow-scripts allow-same-origin allow-forms`,wr=`allow-scripts allow-same-origin`,Tr=12e3,Er=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Dr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Or=new Set([`svg`,`path`]),kr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),Ar=/<script(?:\s|>)/i,jr=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,Mr=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,Nr=e=>{"use forget";let t=(0,Z.c)(13),{canOpen:n,conversation:r,expandButtonRef:i,isReady:a,onOpen:s,target:c}=e,l;t[0]!==n||t[1]!==i||t[2]!==s?(l=n&&s!=null?(0,$.jsx)(dr,{ref:i,className:`shrink-0`,onClick:s}):null,t[0]=n,t[1]=i,t[2]=s,t[3]=l):l=t[3];let u=l;if(r==null)return u;let d;t[4]===c?d=t[5]:(d=c??{contentReferenceIndex:-1,messageId:``},t[4]=c,t[5]=d);let f=d,p=a&&c!=null,m;t[6]===u?m=t[7]:(m=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(re,{label:n,children:(0,$.jsx)(o,{type:`button`,icon:Re,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),u]}):u},t[6]=u,t[7]=m);let h;return t[8]!==f||t[9]!==r||t[10]!==p||t[11]!==m?(h=(0,$.jsx)(mt,{category:Fe.AppBlock,conversation:r,isReady:p,target:f,children:m}),t[8]=f,t[9]=r,t[10]=p,t[11]=m,t[12]=h):h=t[12],h},Pr=e=>{"use forget";let t=(0,Z.c)(9),{children:n,conversation:r,isReady:i,target:a}=e;if(r==null)return n;let o;t[0]===a?o=t[1]:(o=a??{contentReferenceIndex:-1,messageId:``},t[0]=a,t[1]=o);let s=o,c=i&&a!=null,l;t[2]===n?l=t[3]:(l=e=>(0,$.jsxs)(`div`,{className:`group/keyboard-or-hover relative`,children:[n,e.isVisible?(0,$.jsx)(`div`,{className:`pointer-events-none absolute end-2 top-2 z-10`,children:(0,$.jsx)(`div`,{className:`cant-hover:hidden`,children:(0,$.jsx)(ht,{action:e})})}):null]}),t[2]=n,t[3]=l);let u;return t[4]!==s||t[5]!==r||t[6]!==c||t[7]!==l?(u=(0,$.jsx)(mt,{category:Fe.InlineAppBlock,conversation:r,isReady:c,target:s,children:l}),t[4]=s,t[5]=r,t[6]=c,t[7]=l,t[8]=u):u=t[8],u}}));export{qn as a,Kn as c,Dn as d,Ct as f,q as g,bt as h,fr as i,Sn as l,xt as m,ir as n,Fr as o,Lt as p,hr as r,Bn as s,Xn as t,Cn as u};
//# sourceMappingURL=e3b746a6-d3lzjwfsd9zwade1.js.map