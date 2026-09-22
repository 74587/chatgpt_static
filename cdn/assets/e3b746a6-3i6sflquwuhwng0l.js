const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-lpid2f7gk0mi3lf3.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-gycm0sx6lon4voy5.js","assets/2340486e-b3t78qt0psmq9d8c.js","assets/root-ba4zqvwc.css","assets/conversation-small-f8ygwl0g2zcxhtqg.js","assets/30901919-iktpevfzn1o5ayjd.js","assets/c470f5ab-7c144qkjt4ixrxis.js","assets/0e5afe53-m9lwrddmp0bjl3cu.js","assets/conversation-small-nby6iye9.css","assets/8b34dbc2-j8fo4udekm1bzyuf.js","assets/82782bc9-myxrgdazcbsyiv0f.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{Ao as r,DJ as i,Gk as a,Hk as o,IJ as s,Ij as c,JK as l,Jz as u,Kk as d,N5 as f,Pj as p,Q0 as m,Rj as h,T5 as g,TK as _,Uk as v,Wk as y,Yk as ee,Yz as b,Z0 as x,_I as S,bS as te,d_ as C,f7 as w,f_ as T,j5 as ne,m2 as E,m7 as D,p2 as O,p7 as k,pd as A,qK as j,ud as M,vI as N,w5 as re,wK as P,xo as ie,y5 as F,yS as I}from"./4813494d-gycm0sx6lon4voy5.js";import{Bn as ae,Ln as L,Nn as R,Rn as oe,Vn as se,_n as ce,gn as z,wn as le,zn as ue}from"./2340486e-b3t78qt0psmq9d8c.js";import{$k as de,$n as fe,AC as pe,C9 as me,D9 as he,E9 as B,Ed as ge,Ljt as _e,MT as ve,NT as V,O9 as ye,Rjt as be,S9 as xe,Td as H,Xk as Se,_9 as Ce,dIn as we,dzn as U,er as Te,g9 as Ee,h9 as De,jC as Oe,lRn as ke,m9 as Ae,pzn as je,uIn as Me,uRn as Ne,v9 as Pe,x9 as W,zjt as Fe}from"./conversation-small-f8ygwl0g2zcxhtqg.js";import{$C as Ie,$b as Le,QC as Re,ex as ze,lE as G,uE as Be}from"./30901919-iktpevfzn1o5ayjd.js";import{n as Ve,r as He}from"./2ea88c7a-lxyla91xs6iv7odf.js";import{a as Ue,o as We,r as Ge,t as Ke}from"./8d846022-abyk2bvrp61fwgqi.js";import{i as qe,n as Je,r as Ye}from"./91969468-by9bqrcpqe74c8yx.js";import{n as K,t as Xe}from"./4d271a7b-mhg2uwxat55s7h69.js";import{n as Ze,r as Qe}from"./58bafdef-oeajc7gvkpg6uea7.js";import{a as $e,i as et}from"./e01e2324-lr915ra0c0m9uud0.js";import{i as tt,t as nt}from"./5dc32f04-19efei17z33f2rcs.js";import{c as rt,i as it,o as at,r as ot,s as st,t as ct}from"./56dee4d8-cgo92nafg7rgl9w5.js";import{n as lt,t as ut}from"./72bb039a-cbfj029k052x3vhk.js";import{i as dt,n as ft,r as pt,t as mt}from"./9eb56efa-h4pkd2k89tw1gpef.js";import{i as ht,n as gt,r as q,t as _t}from"./cc79834b-iajvjyxg48uh60qf.js";function vt(){return F(`2779568043`)}function J(){return F(`3864712762`)}function yt(){return re(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var bt=e((()=>{g()}));function xt({loadSource:e,errorSource:t,errorType:n,networkPolicy:r,outcome:i,readySignal:a,renderMode:o,surface:s,variant:c}){let l={network_policy:r,surface:s};return e!=null&&(l.load_source=e),t!=null&&(l.error_source=t),n!=null&&(l.error_type=n),i!=null&&(l.outcome=i),a!=null&&(l.ready_signal=a),o!=null&&(l.render_mode=o),c!=null&&(l.variant=c),l}function St(){return typeof performance<`u`?performance.now():Date.now()}function Ct(e){return new TextEncoder().encode(e).byteLength/1024}function wt(e){return e instanceof Error?e.name:`unknown`}function Tt(e,t,n=1){k.count(D.APP_BLOCKS,e,xt(t),n)}function Et(e,t,n){k.hist(D.APP_BLOCKS,e,xt(n),t)}function Dt({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,Ot.useRef)(St()),i=(0,Ot.useRef)(null),o=(0,Ot.useRef)(!1),s=(0,Ot.useRef)(!1),c=a(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),l=a((n=e)=>{s.current||(s.current=!0,Et(jt,Ct(n),t))});return{cancelFirstPaintFrame:c,startRunMetrics:a((e,{deferFirstPaint:a=!1,deferPayloadSize:s=!1}={})=>{let u=St(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;c(),s||l(),Tt(Pt,t);let _=(e,n)=>{f||(f=!0,Tt(Nt,{...t,outcome:e,readySignal:n}))},v=(i,a)=>{if(!e()||p)return;let s=St();Et(Mt,s-i,{...t,readySignal:a}),!o.current&&(o.current=!0,Et(kt,s-r.current,t),n!=null&&Et(It,s-n,t))},y=(e,n)=>{if(c(),typeof window>`u`){v(e,n);return}i.current=window.requestAnimationFrame(()=>{if(t.loadSource===`saved_inline`){i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,n)});return}i.current=null,v(e,n)})},ee=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:ee,markReady:n=>{!e()||d||(d=!0,h=St(),g=n,Et(Ft,h-u,{...t,readySignal:n}),a||ee())},reportFailure:(n,r)=>{!e()||p||(p=!0,c(),Tt(At,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||l(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt=e((()=>{w(),y(),Ot=n(se()),kt=`app_block.first_render_time_ms`,At=`app_block.load.failure`,jt=`app_block.payload_size_kb`,Mt=`app_block.ready_to_first_paint_ms`,Nt=`app_block.render.outcome`,Pt=`app_block.render.start`,Ft=`app_block.sandbox_eval_to_ready_ms`,It=`app_block.widget_ref_to_first_paint_ms`})),Rt,zt=e((()=>{Rt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),Bt=e((()=>{})),Vt,Ht=e((()=>{Bt(),Vt=`/cdn/assets/app-block-sandbox-foundation-l4fcvweu.css`})),Ut,Wt=e((()=>{Ut=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}:where(button):is(:enabled,:disabled){font-weight:500}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){appearance:none;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;background:0 0;border:0;border-radius:9999px;width:100%;min-width:0;height:24px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.4}:where(input[type=range])::-webkit-slider-runnable-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:6px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;margin-top:-7px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}:where(input[type=range])::-moz-range-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:6px}:where(input[type=range])::-moz-range-progress{background:0 0;border-radius:9999px;height:6px}:where(input[type=range])::-moz-range-thumb{box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}@media (hover:hover) and (pointer:fine){:where(input[type=range]:enabled:hover)::-webkit-slider-thumb{transform:scale(1.05)}:where(input[type=range]:enabled:hover)::-moz-range-thumb{transform:scale(1.05)}}:where(input[type=range]:focus-visible){outline:none}:where(input[type=range]:focus-visible)::-webkit-slider-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(input[type=range]:focus-visible)::-moz-range-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),Gt=e((()=>{})),Kt,qt=e((()=>{Gt(),Kt=`/cdn/assets/app-block-sandbox-b1cs4d5m.css`}));function Jt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Y=e((()=>{}));function Yt(e){return String.raw(on||=Jt([`<script>
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
</html>`}}var on,sn,cn,ln,un,dn,fn,pn,mn=e((()=>{zt(),Ht(),Wt(),qt(),Y(),cn=`https://cdn.tailwindcss.com`,ln=`https://images.openai.com`,un=[`https://cdnjs.cloudflare.com`,`https://esm.sh`,`https://cdn.jsdelivr.net`,`https://unpkg.com`,`https://fonts.googleapis.com`,`https://fonts.gstatic.com`,`https://fonts.bunny.net`],dn=new Set([`default`,`blue`,`green`,`yellow`,`purple`,`pink`,`orange`,`black`]),fn=`<style>
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
<\/script>`]))}));function hn(){"use forget";let e=(0,gn.useContext)(_n);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var gn,_n,vn=e((()=>{gn=n(se()),_n=(0,gn.createContext)(null)})),yn,bn=e((()=>{_(),ce(),yn=P(()=>z(()=>import(`./7aa2b76f-lpid2f7gk0mi3lf3.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])))}));function xn(e){"use forget";let t=(0,wn.c)(42),{additionalResourceDomains:n,canSubmitTurn:r,children:i,code:a,conversationId:o,headerAction:s,source:c,styleMode:l,title:u}=e,d=`app-block:${c.appBlockId}:${(0,Tn.useId)()}`,f=(0,Tn.useRef)(null),[p,h]=(0,Tn.useState)(null),g=c.appBlockId,_=c.libraryFileId,v=c.messageId,y=c.refIndex,ee=o??null,b;t[0]!==ee||t[1]!==g?(b={appBlockId:g,conversationId:ee},t[0]=ee,t[1]=g,t[2]=b):b=t[2];let x=b,S=m(Ae),te;t[3]!==S||t[4]!==x?(te=Pe(S,x),t[3]=S,t[4]=x,t[5]=te):te=t[5];let C=te,w=S?.appBlockId===g&&S.conversationId===ee&&(S.isOriginalVersion===!0||S.versionNumber!=null),T=C||w,ne;t[6]!==S||t[7]!==d||t[8]!==x?(ne=W(S,x,d),t[6]=S,t[7]=d,t[8]=x,t[9]=ne):ne=t[9];let E=ne,D;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(D=()=>{f.current?.focus()},t[10]=D):D=t[10];let O=D,k=p?.supportsAtomicMove?p:void 0,A;t[11]!==g||t[12]!==_||t[13]!==v||t[14]!==y?(A={appBlockId:g,libraryFileId:_,messageId:v,refIndex:y},t[11]=g,t[12]=_,t[13]=v,t[14]=y,t[15]=A):A=t[15];let j;t[16]!==n||t[17]!==r||t[18]!==a||t[19]!==s||t[20]!==l||t[21]!==k||t[22]!==A||t[23]!==u?(j={additionalResourceDomains:n,canSubmitTurn:r,code:a,focusOnClose:O,headerAction:s,sharedPreview:k,source:A,styleMode:l,title:u},t[16]=n,t[17]=r,t[18]=a,t[19]=s,t[20]=l,t[21]=k,t[22]=A,t[23]=u,t[24]=j):j=t[24];let M=j,N,re;t[25]!==M||t[26]!==C||t[27]!==x?(N=()=>{C&&xe(x,M)},re=[M,C,x],t[25]=M,t[26]=C,t[27]=x,t[28]=N,t[29]=re):(N=t[28],re=t[29]),(0,Tn.useEffect)(N,re);let P;t[30]!==M||t[31]!==E||t[32]!==x?(P=()=>{De(x,E,M)},t[30]=M,t[31]=E,t[32]=x,t[33]=P):P=t[33];let ie=P,F;t[34]!==T||t[35]!==w||t[36]!==ie||t[37]!==p?(F={isExpanded:T,isViewingHistoricalVersion:w,openExpandedView:ie,setSharedPreview:h,sharedPreview:p,triggerRef:f},t[34]=T,t[35]=w,t[36]=ie,t[37]=p,t[38]=F):F=t[38];let I=F,ae;return t[39]!==i||t[40]!==I?(ae=(0,En.jsx)(_n.Provider,{value:I,children:i}),t[39]=i,t[40]=I,t[41]=ae):ae=t[41],ae}function Sn(e){"use forget";let t=(0,wn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,headerTitleContent:o,title:s}=e,c=q(),l;t[0]===i?l=t[1]:(l=()=>i==null?0:H(i).height$()??0,t[0]=i,t[1]=l);let u=m(l),d=c===`fullscreen`&&n&&i!=null?u:0,f=o??s,p;t[2]===f?p=t[3]:(p=(0,En.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:f}),t[2]=f,t[3]=p);let h;t[4]!==a||t[5]!==p?(h=(0,En.jsxs)(_t.Header,{className:`pb-1`,children:[p,a]}),t[4]=a,t[5]=p,t[6]=h):h=t[6];let g;t[7]===d?g=t[8]:(g={paddingBottom:d},t[7]=d,t[8]=g);let _;t[9]===r?_=t[10]:(_=(0,En.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=_);let v;t[11]!==g||t[12]!==_?(v=(0,En.jsx)(_t.Body,{className:`bg-token-bg-primary overflow-hidden`,style:g,children:_}),t[11]=g,t[12]=_,t[13]=v):v=t[13];let y;return t[14]!==h||t[15]!==v?(y=(0,En.jsxs)(En.Fragment,{children:[h,v]}),t[14]=h,t[15]=v,t[16]=y):y=t[16],y}function Cn(e){"use forget";let t=(0,wn.c)(5),{conversation:n,paneId:r}=e,i=ht(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,En.jsx)(yn,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var wn,Tn,En,Dn=e((()=>{wn=le(),ge(),gt(),x(),Tn=n(se()),vn(),Ce(),bn(),En=ae()}));function On(){"use forget";let e=(0,kn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,An.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,An.jsx)(R,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var kn,An,jn=e((()=>{kn=le(),oe(),An=ae()}));function Mn(e,t,n){"use forget";let r=(0,Pn.c)(11),i=t===void 0||t,a=ue(),o;r[0]!==a||r[1]!==e?(o=e?a.formatMessage(X.generatingApp,{title:e}):a.formatMessage(X.creatingInterface),r[0]=a,r[1]=e,r[2]=o):o=r[2];let s=o,c;r[3]!==s||r[4]!==a||r[5]!==n?(c=n??[s,a.formatMessage(X.sketchingInterface),a.formatMessage(X.shapingLayout),a.formatMessage(X.arrangingPieces),a.formatMessage(X.polishingVisuals),a.formatMessage(X.tuningInputs),a.formatMessage(X.addingInteractivity),a.formatMessage(X.wiringControls),a.formatMessage(X.composingInteractions),a.formatMessage(X.calibratingPreview),a.formatMessage(X.refiningDetails)],r[3]=s,r[4]=a,r[5]=n,r[6]=c):c=r[6];let l=c,[u,d]=(0,Fn.useState)(0),f,p;return r[7]!==i||r[8]!==l.length?(f=()=>{if(!i)return;let e=window.setInterval(()=>{d(e=>Math.min(e+1,l.length-1))},Ln);return()=>{window.clearInterval(e)}},p=[i,l.length],r[7]=i,r[8]=l.length,r[9]=f,r[10]=p):(f=r[9],p=r[10]),(0,Fn.useEffect)(f,p),l[u]??l[0]??``}function Nn(e){"use forget";let t=(0,Pn.c)(2),{loadingLabels:n,title:r}=e,i=Mn(r,!0,n),a;return t[0]===i?a=t[1]:(a=(0,In.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,role:`status`,children:(0,In.jsx)(nt,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:i})}),t[0]=i,t[1]=a),a}var Pn,Fn,In,Ln,X,Rn,zn=e((()=>{Pn=le(),tt(),E(),Fn=n(se()),oe(),In=ae(),Ln=2800,X=L({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}}),Rn=e=>{"use forget";let t=(0,Pn.c)(11),{isVisible:n,title:r}=e,i=Mn(r,n),a=!n,o=n?`grid-rows-[1fr] opacity-100`:`grid-rows-[0fr] opacity-0`,s;t[0]===o?s=t[1]:(s=O(`grid shrink-0 transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none`,o),t[0]=o,t[1]=s);let c=n&&`loading-shimmer-pure-text motion-reduce:animate-none`,l;t[2]===c?l=t[3]:(l=O(`text-token-text-secondary inline-block font-sans font-medium`,c),t[2]=c,t[3]=l);let u;t[4]!==i||t[5]!==l?(u=(0,In.jsx)(`div`,{className:`min-h-0 overflow-hidden`,children:(0,In.jsx)(`div`,{className:`pb-3`,children:(0,In.jsx)(`span`,{className:l,children:i})})}),t[4]=i,t[5]=l,t[6]=u):u=t[6];let d;return t[7]!==a||t[8]!==s||t[9]!==u?(d=(0,In.jsx)(`div`,{"aria-atomic":`true`,"aria-hidden":a,"aria-live":`polite`,className:s,role:`status`,children:u}),t[7]=a,t[8]=s,t[9]=u,t[10]=d):d=t[10],d}}));function Bn({appBlockId:e,conversation:t}){return t==null?null:ct(t).get(e)??null}function Vn(e){return e?.serverId$()??void 0}function Hn({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:be(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function Un({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return _e({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:A(e)?`missing`:`failed`})}),()=>{a.abort()}}function Wn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??Gn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function Gn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var Kn=e((()=>{M(),Fe(),ot()})),qn=t({AppBlock:()=>Xn,AppBlockCollapsedPreview:()=>ir,AppBlockPreviewLoadingState:()=>hr,AppBlockSandboxPreview:()=>fr});function Jn(e){let t=e.search(Ar),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function Yn(e){let t=Jn(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(jr))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(Mr)!=null}function Xn(e){"use forget";let t=(0,Z.c)(153),{additionalResourceDomains:n,appBlockId:i,authoritativeCode:a,authoritativeSource:o,bind:c,code:l,collapseWhenSuperseded:u,currentContentFileId:d,displayMode:f,editingEnabled:g,expandedHeaderAction:_,expandedViewEnabled:v,id:y,captureConsoleMessages:ee,clientThreadId:b,iconSvg:x,inlineHeight:S,isStreaming:te,isTurnStreaming:C,libraryFileId:w,libraryFileVersionNumber:T,loadingLabels:ne,messageId:E,onConsoleMessagesChange:D,onReadyChange:O,previewLoadingLabel:k,progressiveStreaming:A,ref:j,refIndex:M,styleMode:N,title:re,variant:P,wasStreamingWhenFirstSeen:ie,widgetName:F,widgetRefSeenAtMs:I}=e,ae=u===void 0||u,L=ee!==void 0&&ee,R=te!==void 0&&te,oe=C!==void 0&&C,se=A!==void 0&&A,ce=P===void 0?`inline`:P,z=h(),le=(0,Q.useContext)(ut),ue;t[0]===z?ue=t[1]:(ue=()=>z!=null&&we(z),t[0]=z,t[1]=ue);let de=m(ue),fe;t[2]!==b||t[3]!==z?(fe=b==null?z:p(b),t[2]=b,t[3]=z,t[4]=fe):fe=t[4];let me=fe,he=E!=null&&M!=null?st({messageId:E,refIndex:M}):void 0,B=i??he??st({messageId:E??y,refIndex:M??0}),ge=m(()=>Se({conversation:z??null,instanceId:B,messageId:E,refIndex:M}))??f,ve=m(()=>o!=null||ge!=null?null:Bn({appBlockId:B,conversation:z??null})),V=o??ve,ye;t[5]===z?ye=t[6]:(ye=()=>Vn(z??null),t[5]=z,t[6]=ye);let be=m(ye),xe=s(z?.id),H=be??xe,Ce;t[7]!==d||t[8]!==w||t[9]!==T||t[10]!==H||t[11]!==V?(Ce=Hn({currentContentFileId:d,libraryFileId:w,libraryFileVersionNumber:T,serverThreadId:H,source:V}),t[7]=d,t[8]=w,t[9]=T,t[10]=H,t[11]=V,t[12]=Ce):Ce=t[12];let U=Ce,[Te,Oe]=(0,Q.useState)(null),[ke,Ae]=(0,Q.useState)(0),je;t[13]!==ke||t[14]!==U.libraryContentKey?(je=[U.libraryContentKey,ke],t[13]=ke,t[14]=U.libraryContentKey,t[15]=je):je=t[15];let Me=je.join(`\0`),Ne,Pe;t[16]!==a||t[17]!==Me||t[18]!==U.contentFileId||t[19]!==U.libraryFileId||t[20]!==ge||t[21]!==H?(Ne=()=>{if(!(a!=null||ge===`collapsed`))return Un({contentFileId:U.contentFileId,libraryContentKey:Me,libraryFileId:U.libraryFileId,onContentStateChange:Oe,serverThreadId:H})},Pe=[a,U.contentFileId,U.libraryFileId,Me,ge,H],t[16]=a,t[17]=Me,t[18]=U.contentFileId,t[19]=U.libraryFileId,t[20]=ge,t[21]=H,t[22]=Ne,t[23]=Pe):(Ne=t[22],Pe=t[23]),(0,Q.useEffect)(Ne,Pe);let W=Wn({appBlockId:B,contentFileId:U.contentFileId,currentContentFileId:d,libraryContent:Te,libraryContentKey:Me,libraryFileId:w,libraryFileVersionNumber:T,source:V}),Fe=Te?.key===Me?Te:null,Ie;t[24]!==W?.libraryFileId||t[25]!==w?(Ie=()=>Ee(W?.libraryFileId??w),t[24]=W?.libraryFileId,t[25]=w,t[26]=Ie):Ie=t[26];let Le=m(Ie),Re=W?.libraryFileVersionNumber??T,ze=Le!=null&&(Re==null||Le.versionNumber>=Re)?Le.code:void 0,G=ze??a??W?.content??l??null,Be=W?.iconSvg??x??null,Ve=W?.libraryFileId??w,He=Ve==null&&a==null&&ze==null&&d==null&&V?.currentContentFileId==null&&V?.latestPatchMessageId==null,Ue=ie===!1&&ce===`inline`&&He,We;t[27]!==l||t[28]!==He||t[29]!==E||t[30]!==G||t[31]!==M||t[32]!==V?(We=He?V==null?E!=null&&M!=null&&l!=null&&G===l?{messageId:E,refIndex:M}:null:V.messageId.length>0&&V.content!=null&&G===V.content?{messageId:V.messageId,refIndex:V.refIndex}:null:null,t[27]=l,t[28]=He,t[29]=E,t[30]=G,t[31]=M,t[32]=V,t[33]=We):We=t[33];let Ge=We,Ke=ce===`artifact`,qe=W?.styleMode??N??(Ke&&se?`open`:void 0),Je;t[34]!==Ve||t[35]!==qe?(Je=at({explicitStyleMode:qe,libraryFileId:Ve}),t[34]=Ve,t[35]=qe,t[36]=Je):Je=t[36];let Ye=Je,K=W?.title??re,Xe;t[37]===z?Xe=t[38]:(Xe=()=>z!=null&&r(z)?`work`:`chat`,t[37]=z,t[38]=Xe);let Ze=m(Xe),Qe;t[39]===g?Qe=t[40]:(Qe=g??yt(),t[39]=g,t[40]=Qe);let $e=Qe,et=v??$e,tt=se,nt=Ke&&Ye===`open`,rt=ge===`collapsed`||ge==null&&ae&&W?.latestPatchMessageId!=null&&W.latestPatchMessageId!==E,it=l!=null||d!=null,ot;t[41]!==$e||t[42]!==b||t[43]!==l||t[44]!==z?.id||t[45]!==d||t[46]!==B||t[47]!==_||t[48]!==T||t[49]!==E||t[50]!==Ve||t[51]!==Ye||t[52]!==K||t[53]!==M||t[54]!==H||t[55]!==V?.messageId?(ot=async e=>{let t=l;if(t==null&&d!=null)try{t=await _e({abortSignal:new AbortController().signal,fileId:d,serverThreadId:H})}catch{return}t!=null&&De({appBlockId:B,conversationId:z?.id??b??null,isOriginalVersion:!0,versionNumber:T??void 0},`app-block:${B}:original`,{canSubmitTurn:$e,code:t,headerAction:_,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:B,libraryFileId:Ve,messageId:V?.messageId??E,refIndex:M},styleMode:Ye,title:K})},t[41]=$e,t[42]=b,t[43]=l,t[44]=z?.id,t[45]=d,t[46]=B,t[47]=_,t[48]=T,t[49]=E,t[50]=Ve,t[51]=Ye,t[52]=K,t[53]=M,t[54]=H,t[55]=V?.messageId,t[56]=ot):ot=t[56],z?.id,V?.messageId;let ct=ot;if(R&&!tt){let e;return t[57]!==ne||t[58]!==K?(e=(0,$.jsx)(Nn,{loadingLabels:ne,title:K}),t[57]=ne,t[58]=K,t[59]=e):e=t[59],e}let lt=de&&l!=null;if(Fe?.status===`missing`&&!lt)return null;if(rt){let e=it?ct:void 0,n;return t[60]!==K||t[61]!==e?(n=(0,$.jsx)(ur,{onView:e,title:K}),t[60]=K,t[61]=e,t[62]=n):n=t[62],n}let dt=G??(tt&&R?``:null);if(dt==null){if(W?.latestPatchMessageId!=null){let e=z?.id??b,n=Fe?.status===`failed`,r;t[63]===Ae?r=t[64]:(r=()=>Ae(Zn),t[63]=Ae,t[64]=r);let i;return t[65]!==B||t[66]!==Ke||t[67]!==Be||t[68]!==k||t[69]!==K||t[70]!==e||t[71]!==n||t[72]!==r?(i=(0,$.jsx)(tr,{appBlockId:B,conversationId:e,hasFailed:n,iconSvg:Be,onRetry:r,previewLoadingLabel:k,showHeader:Ke,title:K}),t[65]=B,t[66]=Ke,t[67]=Be,t[68]=k,t[69]=K,t[70]=e,t[71]=n,t[72]=r,t[73]=i):i=t[73],i}let e;return t[74]!==ne||t[75]!==K?(e=(0,$.jsx)(Nn,{loadingLabels:ne,title:K}),t[74]=ne,t[75]=K,t[76]=e):e=t[76],e}let ft;t[77]!==b||t[78]!==Ze||t[79]!==R||t[80]!==oe||t[81]!==E||t[82]!==M?(ft=!R&&!oe&&b!=null&&E!=null&&M!=null&&vt()?{reference:{clientThreadId:b,messageId:E,referenceIndex:M},target:{kind:`app_block`,metadata:{tab:Ze}}}:void 0,t[77]=b,t[78]=Ze,t[79]=R,t[80]=oe,t[81]=E,t[82]=M,t[83]=ft):ft=t[83];let pt=ft;if(le){let e=z?.id??b,r;t[84]!==n||t[85]!==c||t[86]!==L||t[87]!==B||t[88]!==y||t[89]!==S||t[90]!==R||t[91]!==D||t[92]!==O||t[93]!==k||t[94]!==Ye||t[95]!==K||t[96]!==j||t[97]!==dt||t[98]!==tt||t[99]!==e||t[100]!==ce||t[101]!==I?(r=(0,$.jsx)(fr,{additionalResourceDomains:n,appBlockId:B,bind:c,captureConsoleMessages:L,clientThreadId:e,code:dt,id:y,inlineHeight:S,isStreaming:R,onConsoleMessagesChange:D,onReadyChange:O,previewLoadingLabel:k,progressiveStreaming:tt,ref:j,styleMode:Ye,title:K,variant:ce,widgetRefSeenAtMs:I}),t[84]=n,t[85]=c,t[86]=L,t[87]=B,t[88]=y,t[89]=S,t[90]=R,t[91]=D,t[92]=O,t[93]=k,t[94]=Ye,t[95]=K,t[96]=j,t[97]=dt,t[98]=tt,t[99]=e,t[100]=ce,t[101]=I,t[102]=r):r=t[102];let i;return t[103]!==R||t[104]!==Be||t[105]!==K||t[106]!==nt||t[107]!==r?(i=(0,$.jsx)(er,{canOpen:!1,iconSvg:Be,isShareReady:!1,isStreaming:R,showArtifactCard:nt,title:K,children:r}),t[103]=R,t[104]=Be,t[105]=K,t[106]=nt,t[107]=r,t[108]=i):i=t[108],i}let mt=z?.id??b,ht=V?.messageId??E,gt;t[109]!==B||t[110]!==Ve||t[111]!==M||t[112]!==ht?(gt={appBlockId:B,libraryFileId:Ve,messageId:ht,refIndex:M},t[109]=B,t[110]=Ve,t[111]=M,t[112]=ht,t[113]=gt):gt=t[113];let q=nt&&et&&!R,_t=z?.id??b,J;t[114]!==Ge||t[115]!==F?(J=Ge==null?void 0:{contentReferenceIndex:Ge.refIndex,messageId:Ge.messageId,widgetName:F??pe.AppBlock,widgetType:pe.AppBlock},t[114]=Ge,t[115]=F,t[116]=J):J=t[116];let bt;t[117]!==n||t[118]!==c||t[119]!==L||t[120]!==B||t[121]!==pt||t[122]!==y||t[123]!==S||t[124]!==Ue||t[125]!==R||t[126]!==D||t[127]!==O||t[128]!==Be||t[129]!==k||t[130]!==Ye||t[131]!==K||t[132]!==j||t[133]!==dt||t[134]!==me||t[135]!==tt||t[136]!==nt||t[137]!==q||t[138]!==_t||t[139]!==J||t[140]!==ce||t[141]!==I?(bt=(0,$.jsx)(Qn,{additionalResourceDomains:n,appBlockId:B,bind:c,canOpen:q,captureConsoleMessages:L,clientThreadId:_t,code:dt,feedback:pt,iconSvg:Be,id:y,inlineHeight:S,isStreaming:R,onConsoleMessagesChange:D,onReadyChange:O,previewLoadingLabel:k,progressiveStreaming:tt,isSavedInlineLoad:Ue,ref:j,showArtifactCard:nt,shareConversation:me,shareTarget:J,styleMode:Ye,title:K,variant:ce,widgetRefSeenAtMs:I}),t[117]=n,t[118]=c,t[119]=L,t[120]=B,t[121]=pt,t[122]=y,t[123]=S,t[124]=Ue,t[125]=R,t[126]=D,t[127]=O,t[128]=Be,t[129]=k,t[130]=Ye,t[131]=K,t[132]=j,t[133]=dt,t[134]=me,t[135]=tt,t[136]=nt,t[137]=q,t[138]=_t,t[139]=J,t[140]=ce,t[141]=I,t[142]=bt):bt=t[142];let xt;return t[143]!==n||t[144]!==$e||t[145]!==_||t[146]!==Ye||t[147]!==K||t[148]!==dt||t[149]!==mt||t[150]!==gt||t[151]!==bt?(xt=(0,$.jsx)(xn,{additionalResourceDomains:n,canSubmitTurn:$e,code:dt,conversationId:mt,headerAction:_,styleMode:Ye,source:gt,title:K,children:bt}),t[143]=n,t[144]=$e,t[145]=_,t[146]=Ye,t[147]=K,t[148]=dt,t[149]=mt,t[150]=gt,t[151]=bt,t[152]=xt):xt=t[152],xt}function Zn(e){return e+1}function Qn(e){"use forget";let t=(0,Z.c)(72),{additionalResourceDomains:n,appBlockId:r,bind:i,canOpen:o,captureConsoleMessages:s,clientThreadId:c,code:l,feedback:u,iconSvg:d,id:f,inlineHeight:p,isStreaming:m,onConsoleMessagesChange:h,onReadyChange:g,previewLoadingLabel:_,progressiveStreaming:y,isSavedInlineLoad:ee,ref:b,shareConversation:x,shareTarget:S,showArtifactCard:te,styleMode:C,title:w,variant:T,widgetRefSeenAtMs:ne}=e,{isExpanded:E,isViewingHistoricalVersion:D,openExpandedView:O,setSharedPreview:k,sharedPreview:A,triggerRef:j}=hn(),M=(0,Q.useContext)(fe),N;t[0]===n?N=t[1]:(N=n??[],t[0]=n,t[1]=N);let re;t[2]!==l||t[3]!==f||t[4]!==C||t[5]!==N?(re=[f,C,l,...N],t[2]=l,t[3]=f,t[4]=C,t[5]=N,t[6]=re):re=t[6];let P=re.join(`\0`),[ie,F]=(0,Q.useState)(null),I=!m&&ie===P,ae;t[7]===O?ae=t[8]:(ae=()=>{ke(),O()},t[7]=O,t[8]=ae);let L=ae,R;t[9]!==g||t[10]!==P?(R=(e,t)=>{F(e?P:null),g?.(e,t)},t[9]=g,t[10]=P,t[11]=R):R=t[11];let oe=R,se;t[12]!==n||t[13]!==r||t[14]!==i||t[15]!==s||t[16]!==c||t[17]!==l||t[18]!==oe||t[19]!==f||t[20]!==p||t[21]!==ee||t[22]!==m||t[23]!==h||t[24]!==_||t[25]!==y||t[26]!==b||t[27]!==C||t[28]!==w||t[29]!==T||t[30]!==ne?(se=(0,$.jsx)(fr,{appBlockId:r,additionalResourceDomains:n,bind:i,code:l,id:f,inlineHeight:p,isStreaming:m,captureConsoleMessages:s,clientThreadId:c,onConsoleMessagesChange:h,onReadyChange:oe,presentationSurface:`inline`,previewLoadingLabel:_,progressiveStreaming:y,isSavedInlineLoad:ee,ref:b,styleMode:C,title:w,variant:T,widgetRefSeenAtMs:ne}),t[12]=n,t[13]=r,t[14]=i,t[15]=s,t[16]=c,t[17]=l,t[18]=oe,t[19]=f,t[20]=p,t[21]=ee,t[22]=m,t[23]=h,t[24]=_,t[25]=y,t[26]=b,t[27]=C,t[28]=w,t[29]=T,t[30]=ne,t[31]=se):se=t[31];let ce;t[32]!==M||t[33]!==se?(ce={element:se,sandboxPolicy:M},t[32]=M,t[33]=se,t[34]=ce):ce=t[34];let z=ce,le;t[35]===z?le=t[36]:(le=()=>z,t[35]=z,t[36]=le);let ue=a(le),de;t[37]!==r||t[38]!==c||t[39]!==ue||t[40]!==k?(de=e=>{if(e==null)return;let{preview:t,sourceToken:n}=me({appBlockId:r,content:ue(),conversationId:c??null,inlineContainer:e});return k(t),()=>{let e=Ae();he(t,n,e?.sharedPreview===t)}},t[37]=r,t[38]=c,t[39]=ue,t[40]=k,t[41]=de):de=t[41];let pe=de,B,ge;t[42]!==z||t[43]!==A?(ge=()=>{A!=null&&ye(A,z)},B=[z,A],t[42]=z,t[43]=A,t[44]=B,t[45]=ge):(B=t[44],ge=t[45]),v(ge,B);let _e=D?L:void 0,ve;t[46]!==d||t[47]!==_e||t[48]!==w||t[49]!==j?(ve=(0,$.jsx)(ir,{iconSvg:d,onOpen:_e,openButtonRef:j,title:w}),t[46]=d,t[47]=_e,t[48]=w,t[49]=j,t[50]=ve):ve=t[50];let V=E?ve:null,be;t[51]===pe?be=t[52]:(be=(0,$.jsx)(`div`,{ref:pe,className:`w-full`}),t[51]=pe,t[52]=be);let xe;t[53]!==o||t[54]!==u||t[55]!==L||t[56]!==d||t[57]!==I||t[58]!==m||t[59]!==x||t[60]!==S||t[61]!==te||t[62]!==be||t[63]!==w||t[64]!==j?(xe=(0,$.jsx)(er,{canOpen:o,expandButtonRef:j,feedback:u,iconSvg:d,isShareReady:I,shareConversation:x,shareTarget:S,isStreaming:m,showArtifactCard:te,title:w,onOpen:L,children:be}),t[53]=o,t[54]=u,t[55]=L,t[56]=d,t[57]=I,t[58]=m,t[59]=x,t[60]=S,t[61]=te,t[62]=be,t[63]=w,t[64]=j,t[65]=xe):xe=t[65];let H;t[66]!==E||t[67]!==xe?(H=(0,$.jsx)(`div`,{hidden:E,children:xe}),t[66]=E,t[67]=xe,t[68]=H):H=t[68];let Se;return t[69]!==V||t[70]!==H?(Se=(0,$.jsxs)($.Fragment,{children:[V,H]}),t[69]=V,t[70]=H,t[71]=Se):Se=t[71],Se}function $n(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:o,titleClassName:s}=e,c;t[0]===r?c=t[1]:(c=O(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=c);let l=s??`truncate text-base font-semibold`,u;t[2]===l?u=t[3]:(u=O(`text-token-text-primary`,l),t[2]=l,t[3]=u);let d=o??i,f;t[4]!==u||t[5]!==d?(f=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:u,children:d})}),t[4]=u,t[5]=d,t[6]=f):f=t[6];let p;t[7]!==a||t[8]!==f?(p=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,f]}),t[7]=a,t[8]=f,t[9]=p):p=t[9];let m;return t[10]!==n||t[11]!==c||t[12]!==p?(m=(0,$.jsxs)(`div`,{className:c,children:[p,n]}),t[10]=n,t[11]=c,t[12]=p,t[13]=m):m=t[13],m}function er(e){"use forget";let t=(0,Z.c)(20),{canOpen:n,children:r,expandButtonRef:i,feedback:a,iconSvg:o,isShareReady:s,isStreaming:c,onOpen:l,shareConversation:u,shareTarget:d,showArtifactCard:f,title:p}=e,m=ue(),h;t[0]===m?h=t[1]:(h=m.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=m,t[1]=h);let g=h,_;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==g||t[6]!==o||t[7]!==s||t[8]!==c||t[9]!==l||t[10]!==u||t[11]!==d||t[12]!==f||t[13]!==p?(_=f?(0,$.jsxs)(`div`,{className:O(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,c&&`cursor-wait`),"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)($n,{action:(0,$.jsx)(Nr,{canOpen:n,conversation:u,expandButtonRef:i,isReady:s,onOpen:l,target:d}),className:`min-h-13 px-4 py-2`,fallbackTitle:g,leading:c?(0,$.jsx)(S,{className:`icon-md text-token-text-primary shrink-0`}):(0,$.jsx)(or,{iconSvg:o}),title:p}),(0,$.jsx)(`div`,{children:r})]}):(0,$.jsx)(Pr,{conversation:u,isReady:s,target:d,children:r}),t[2]=n,t[3]=r,t[4]=i,t[5]=g,t[6]=o,t[7]=s,t[8]=c,t[9]=l,t[10]=u,t[11]=d,t[12]=f,t[13]=p,t[14]=_):_=t[14];let v;t[15]===a?v=t[16]:(v=a==null?null:(0,$.jsx)(nr,{...a}),t[15]=a,t[16]=v);let y;return t[17]!==_||t[18]!==v?(y=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[_,v]}),t[17]=_,t[18]=v,t[19]=y):y=t[19],y}function tr(e){"use forget";let t=(0,Z.c)(18),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:o,previewLoadingLabel:s,showHeader:c,title:l}=e,u=m(Ae),d=ue(),f;t[0]===d?f=t[1]:(f=d.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=d,t[1]=f);let p=f;if(Pe(u,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==l?(e=(0,$.jsx)(ir,{iconSvg:a,title:l}),t[2]=a,t[3]=l,t[4]=e):e=t[4],e}let h;t[5]!==p||t[6]!==a||t[7]!==c||t[8]!==l?(h=c?(0,$.jsx)($n,{className:`mb-2`,fallbackTitle:p,leading:(0,$.jsx)(or,{iconSvg:a}),title:l}):null,t[5]=p,t[6]=a,t[7]=c,t[8]=l,t[9]=h):h=t[9];let g;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(g={minHeight:_r},t[10]=g):g=t[10];let _;t[11]!==i||t[12]!==o||t[13]!==s?(_=(0,$.jsx)(`div`,{className:`relative w-full`,style:g,children:i?(0,$.jsx)(gr,{onRetry:o}):(0,$.jsx)(hr,{label:s})}),t[11]=i,t[12]=o,t[13]=s,t[14]=_):_=t[14];let v;return t[15]!==h||t[16]!==_?(v=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[h,_]}),t[15]=h,t[16]=_,t[17]=v):v=t[17],v}function nr(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(m(rr))return null;let o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(ve,{}),t[0]=o):o=t[0];let s;return t[1]!==i||t[2]!==n||t[3]!==r?(s=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)(et,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:o})}),t[1]=i,t[2]=n,t[3]=r,t[4]=s):s=t[4],s}function rr(){return Qe()}function ir(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=ue(),s,c,l,u,d;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),d=`not-prose relative clear-both my-4 w-full max-w-full`,u=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=$n,l=r==null?void 0:(0,$.jsx)(I,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=l,t[7]=u,t[8]=d):(s=t[4],c=t[5],l=t[6],u=t[7],d=t[8]);let f;t[9]===n?f=t[10]:(f=(0,$.jsx)(ar,{iconSvg:n}),t[9]=n,t[10]=f);let p;t[11]!==s||t[12]!==c||t[13]!==l||t[14]!==f||t[15]!==a?(p=(0,$.jsx)(s,{action:l,className:`w-full`,fallbackTitle:c,leading:f,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=l,t[14]=f,t[15]=a,t[16]=p):p=t[16];let m;t[17]!==u||t[18]!==p?(m=(0,$.jsx)(`div`,{className:u,children:p}),t[17]=u,t[18]=p,t[19]=m):m=t[19];let h;return t[20]!==d||t[21]!==m?(h=(0,$.jsx)(`div`,{className:d,children:m}),t[20]=d,t[21]=m,t[22]=h):h=t[22],h}function ar(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(or,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function or(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=sr(r),t[0]=r,t[1]=a);let o=a,s;return t[2]!==i||t[3]!==o?(s=o==null?(0,$.jsx)(Re,{"aria-hidden":`true`,className:O(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:O(`icon-md shrink-0`,i),children:(0,$.jsx)(U,{svgString:o,className:`h-full w-full`})}),t[2]=i,t[3]=o,t[4]=s):s=t[4],s}function sr(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>Tr||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Er)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Or.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!cr(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function cr(e){let t=e.replace(Dr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Dr)){let e=t[1],n=t[2];if(!kr.has(e)||!lr(e,n))return!1}return!0}function lr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function ur(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=ue(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(R,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function dr(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:i}=e,a=ue(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let s=o,c;t[2]===r?c=t[3]:(c=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=c);let l;t[4]!==s||t[5]!==i||t[6]!==c?(l=(0,$.jsx)(I,{ref:i,type:`button`,icon:Le,color:`ghost`,size:`medium`,label:s,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:c}),t[4]=s,t[5]=i,t[6]=c,t[7]=l):l=t[7];let u;return t[8]!==n||t[9]!==s||t[10]!==l?(u=(0,$.jsx)(C,{label:s,className:n,children:l}),t[8]=n,t[9]=s,t[10]=l,t[11]=u):u=t[11],u}function fr(e){"use forget";let t=(0,Z.c)(190),{appBlockId:n,additionalResourceDomains:r,bind:i,clientThreadId:o,code:s,id:c,captureConsoleMessages:d,inlineHeight:p,isStreaming:h,onConsoleMessagesChange:g,onReadyChange:_,presentationSurface:y,previewLoadingLabel:b,progressiveStreaming:x,isSavedInlineLoad:S,ref:te,styleMode:C,surface:w,title:T,variant:ne,widgetRefSeenAtMs:E}=e,D=h!==void 0&&h,k=x!==void 0&&x,A=S!==void 0&&S,j=C===void 0?`default`:C,M=w===void 0?`inline`:w,N=ne===void 0?`inline`:ne,re=ue(),P=(0,Q.useRef)(null),ie=(0,Q.useRef)(null),F=Ue(i),[I,ae]=(0,Q.useState)(F.values),L=l(I,F.values)?I:F.values;L!==I&&ae(L);let oe=[...F.callbacks.keys()],[se,ce]=(0,Q.useState)(oe),z=l(se,oe)?se:oe;z!==se&&ce(z);let le=(0,Q.useRef)(L),de=(0,Q.useRef)(z),pe=(0,Q.useRef)(F.callbacks),me=i!=null,he=(0,Q.useRef)(!1),B=(0,Q.useRef)(!1),ge=(0,Q.useRef)(null),_e=(0,Q.useRef)(null),ve=(0,Q.useRef)(null),V=(0,Q.useRef)(null),ye=(0,Q.useRef)(null),be=(0,Q.useRef)(null),xe=(0,Q.useRef)(null),H=(0,Q.useRef)(null),Se=(0,Q.useRef)(0),Ce=(0,Q.useRef)(null),we=(0,Q.useRef)(null),U;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(U=[],t[0]=U):U=t[0];let Te=(0,Q.useRef)(U),Ee=ee(),De=m(u),{isInternalPreview:Oe,networkPolicy:ke}=(0,Q.useContext)(fe),Ae=ke===void 0?`none`:ke,je=Ye()||Oe,Me=qe(o)&&!Oe,Ne=Me||Oe&&Ae===`deps-only`,Pe=Ee?`dark`:`light`,W=re.locale,Fe;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(Fe={status:`streaming`},t[1]=Fe):Fe=t[1];let[Ie,Le]=(0,Q.useState)(Fe),Re=Ie.status===`finalized`&&Ie.html!==s,ze=k&&!D&&(N===`artifact`||Ie.status===`failed`),G=k&&M===`inline`&&Ie.status!==`static`&&!ze&&!Re,Be=G&&D&&N===`artifact`&&!Yn(s),Ke=Be?0:vr,Je=p??`intrinsic-height`,Xe=je?`execution-enabled`:`execution-disabled`,Ze=Ne?`network-enabled`:`network-disabled`,Qe=Oe?`internal-preview`:`workspace-preview`,$e=me?`bindings-enabled`:`bindings-disabled`,et=G?`progressive-app-block-stream`:s,tt;t[2]===r?tt=t[3]:(tt=r??[],t[2]=r,t[3]=tt);let nt;t[4]!==De||t[5]!==W||t[6]!==j||t[7]!==M||t[8]!==Je||t[9]!==Xe||t[10]!==Ze||t[11]!==Qe||t[12]!==$e||t[13]!==et||t[14]!==tt||t[15]!==Pe?(nt=[Pe,De,M,Je,j,W,Xe,Ze,Qe,$e,et,...tt],t[4]=De,t[5]=W,t[6]=j,t[7]=M,t[8]=Je,t[9]=Xe,t[10]=Ze,t[11]=Qe,t[12]=$e,t[13]=et,t[14]=tt,t[15]=Pe,t[16]=nt):nt=t[16];let rt=nt.join(`\0`),it;t[17]===r?it=t[18]:(it=rn(r),t[17]=r,t[18]=it);let at=it,ot=A?`saved_inline`:void 0,st=Ne?`deps_only`:`disabled`,ct=M===`inline`?N:void 0,lt=G?`progressive`:`static`,ut;t[19]!==M||t[20]!==ot||t[21]!==st||t[22]!==ct||t[23]!==lt?(ut={loadSource:ot,networkPolicy:st,surface:M,variant:ct,renderMode:lt},t[19]=M,t[20]=ot,t[21]=st,t[22]=ct,t[23]=lt,t[24]=ut):ut=t[24];let dt=ut,[ft,pt]=(0,Q.useState)(0),[mt,ht]=(0,Q.useState)(null),gt=mt?.signature===rt?mt.status:null,q=gt===`ready`,_t=q||gt===`failed_after_ready`,vt=G&&gt===`failed`,J=!D&&!G&&gt===`failed`,yt=y??M,bt=yt===`stage`||p!=null,xt=p==null?M:`stage`,Ct=k&&yt===`inline`&&N===`inline`,Tt=G&&yt===`inline`&&D&&!J,Et;t[25]!==s||t[26]!==dt||t[27]!==E?(Et={content:s,metricTags:dt,widgetRefSeenAtMs:E},t[25]=s,t[26]=dt,t[27]=E,t[28]=Et):Et=t[28];let{cancelFirstPaintFrame:Ot,startRunMetrics:kt}=Dt(Et),At,jt;t[29]===q?(At=t[30],jt=t[31]):(At=()=>{q&&be.current?.markFirstPaint()},jt=[q],t[29]=q,t[30]=At,t[31]=jt),v(At,jt);let Mt,Nt;t[32]!==q||t[33]!==_?(Mt=()=>{_?.(q)},Nt=[q,_],t[32]=q,t[33]=_,t[34]=Mt,t[35]=Nt):(Mt=t[34],Nt=t[35]),(0,Q.useEffect)(Mt,Nt);let Pt,Ft;t[36]!==z||t[37]!==L||t[38]!==F.callbacks?(Pt=()=>{le.current=L,de.current=z,pe.current=F.callbacks},Ft=[z,L,F.callbacks],t[36]=z,t[37]=L,t[38]=F.callbacks,t[39]=Pt,t[40]=Ft):(Pt=t[39],Ft=t[40]),v(Pt,Ft);let It;t[41]===Symbol.for(`react.memo_cache_sentinel`)?(It=e=>{ie.current===e&&P.current?.updateAppBlockMessenger?.(Ge(e,le.current,de.current))},t[41]=It):It=t[41];let Lt=a(It),Rt;t[42]===Lt?Rt=t[43]:(Rt=e=>{let t=ie.current;if(t==null)return;let n=We(e,t),r=n&&pe.current.get(n.name);if(n!=null&&r){let e=()=>{f.postTask(()=>Lt(t))};try{Promise.resolve(r(...n.args)).then(e,e)}catch{e()}}},t[42]=Lt,t[43]=Rt);let zt=a(Rt),Bt;t[44]!==me||t[45]!==q||t[46]!==Lt?(Bt=()=>{let e=ie.current;!q||!me||e==null||Lt(e)},t[44]=me,t[45]=q,t[46]=Lt,t[47]=Bt):Bt=t[47];let Vt;t[48]!==z||t[49]!==L||t[50]!==me||t[51]!==q||t[52]!==Lt?(Vt=[z,L,me,q,Lt],t[48]=z,t[49]=L,t[50]=me,t[51]=q,t[52]=Lt,t[53]=Vt):Vt=t[53],(0,Q.useEffect)(Bt,Vt);let Ht,Ut;t[54]!==p||t[55]!==q||t[56]!==y?(Ht=()=>{!q||y==null||P.current?.updateAppBlockSurface?.(p==null?y:`stage`)},Ut=[p,q,y],t[54]=p,t[55]=q,t[56]=y,t[57]=Ht,t[58]=Ut):(Ht=t[57],Ut=t[58]),(0,Q.useEffect)(Ht,Ut);let Wt,Gt;t[59]===Symbol.for(`react.memo_cache_sentinel`)?(Wt=()=>({clearCapturedConsoleMessages:()=>{Te.current=[]},captureScreenshotDataUrl:async()=>(await P.current?.screenshot())?.imageBase64??null,focus:()=>{P.current?.focus()}}),Gt=[],t[59]=Wt,t[60]=Gt):(Wt=t[59],Gt=t[60]),(0,Q.useImperativeHandle)(te,Wt,Gt);let Kt;t[61]===Symbol.for(`react.memo_cache_sentinel`)?(Kt=()=>{Ce.current!=null&&(window.clearTimeout(Ce.current),Ce.current=null)},t[61]=Kt):Kt=t[61];let qt=a(Kt),Jt;t[62]===Symbol.for(`react.memo_cache_sentinel`)?(Jt=()=>{we.current!=null&&(window.clearTimeout(we.current),we.current=null)},t[62]=Jt):Jt=t[62];let Y=a(Jt),Yt;t[63]!==q||t[64]!==G?(Yt=()=>{if(!G||!q||ye.current==null)return;let e=V.current,t=P.current;if(e==null||t?.updateAppBlockStream==null||B.current)return;let n=Se.current;V.current=null,_e.current=St(),ve.current=e.html,e.isFinal&&(B.current=!0);let r=()=>Se.current!==n||ye.current==null?Promise.resolve():t.updateAppBlockStream?.(e)??Promise.resolve(),i=H.current,a=i==null?r():i.then(r);H.current=a,a.then(()=>{H.current===a&&(H.current=null);let t=ye.current;Se.current!==n||t==null||(Yn(e.html)&&t.markFirstPaint(),e.isFinal&&(t.reportPayloadSize(e.html),Le({status:`finalized`,html:e.html})))},e=>{H.current===a&&(H.current=null),Se.current===n&&(e instanceof DOMException&&e.name===`AbortError`||xe.current?.(`stream_update`,wt(e)))})},t[63]=q,t[64]=G,t[65]=Yt):Yt=t[65];let Xt=a(Yt),Zt;t[66]!==De||t[67]!==Ne||t[68]!==d||t[69]!==qt||t[70]!==Y||t[71]!==s||t[72]!==xt||t[73]!==me||t[74]!==je||t[75]!==Re||t[76]!==A||t[77]!==D||t[78]!==W||t[79]!==g||t[80]!==_||t[81]!==y||t[82]!==rt||t[83]!==Ie.status||t[84]!==ze||t[85]!==G||t[86]!==kt||t[87]!==j||t[88]!==Pe?(Zt=()=>{if(!je)return;if(Ie.status===`failed`){if(D)return;Le({status:`static`}),pt(mr);return}(Re||ze&&Ie.status!==`static`)&&Le({status:`static`});let e=G&&P.current?.updateAppBlockStream!=null;if(G&&!e){D||Le({status:`static`});return}he.current=!0,B.current=!1,ge.current=null,_e.current=null,ve.current=null,V.current=null,ye.current=null,be.current=null,xe.current=null,H.current=null,Y(),Se.current+=1;let t=Se.current;qt(),ht(null),ie.current=me?crypto.randomUUID():null;let{expectReadySignal:n,html:r,frameColorScheme:i}=an(s,Pe,W,De,xt,{loadTailwind:Ne,progressiveStreaming:e,syncPresentationSurface:y!=null,styleMode:j}),a=!1,o=!1,c=!1,l=!1,u=!1,p=()=>Se.current===t,m=()=>e&&o,h=kt(p,{deferFirstPaint:e||A,deferPayloadSize:e});A&&(be.current=h),e&&(ye.current=h);let v=e=>{!d||g==null||!p()||(Te.current=e,!l&&(l=!0,f.postTask(()=>{l=!1,p()&&g(Te.current)},{priority:`background`})))},ee=e=>{if(!(!p()||a||c)){if(a=!0,qt(),h.markReady(e),A){o=!0,ht({signature:rt,status:`ready`});return}u||(u=!0,f.postTask(()=>{u=!1,!(!p()||c)&&(o=!0,ht({signature:rt,status:`ready`}))},{priority:`background`}))}},b=(t,n)=>{!p()||c||(c=!0,qt(),Y(),V.current=null,ye.current=null,e&&Le({status:`failed`}),ht({signature:rt,status:m()?`failed_after_ready`:`failed`,readyTimedOut:n===`ready_timeout`}),h.reportFailure(t,n),f.postTask(()=>{p()&&(e?_?.(!1):_?.(!1,`failure`))},{priority:`background`}))};xe.current=b,Te.current=[],v([]),Ce.current=window.setTimeout(()=>{b(`sandbox_eval`,`ready_timeout`)},br),(async()=>{let e=P.current?.evalAsync({code:r,...ie.current==null?{}:{additionalGlobals:{__appBlockMessenger:Ge(ie.current,le.current,de.current)}},expectReadySignal:n,language:`html`,frameColorScheme:i,shouldPreservePreviewOnFatalError:()=>p()&&m()});if(e==null){b(`sandbox_eval`,`missing_generator`);return}for(;;){let t=await e.next();if(t.done){p()&&!a&&b(`sandbox_eval`,`generator_completed_without_ready`);break}p()&&(v([...Te.current,t.value]),t.value.type===He.ENVIRONMENT_STATUS&&t.value.status===Ve.RUNNING_CODE&&ee(`running_code`),t.value.type===He.RUN_COMPLETE&&(t.value.wasFatalError?b(`runtime`,`fatal_runtime_error`):(ee(`run_complete`),h.reportSuccess(`run_complete`))),await f.yield())}})().catch(e=>{p()&&(e instanceof DOMException&&e.name===`AbortError`||b(`sandbox_eval`,wt(e)))})},t[66]=De,t[67]=Ne,t[68]=d,t[69]=qt,t[70]=Y,t[71]=s,t[72]=xt,t[73]=me,t[74]=je,t[75]=Re,t[76]=A,t[77]=D,t[78]=W,t[79]=g,t[80]=_,t[81]=y,t[82]=rt,t[83]=Ie.status,t[84]=ze,t[85]=G,t[86]=kt,t[87]=j,t[88]=Pe,t[89]=Zt):Zt=t[89];let Qt=a(Zt),$t;t[90]!==qt||t[91]!==Y?($t=()=>{Se.current+=1,he.current=!1,B.current=!1,ge.current=null,ve.current=null,V.current=null,ye.current=null,xe.current=null,H.current=null,qt(),Y(),ht(null),pt(pr)},t[90]=qt,t[91]=Y,t[92]=$t):$t=t[92];let en=a($t),tn;t[93]!==bt||t[94]!==yt?(tn=yt===`inline`&&!bt?{margin:-4,width:`calc(100% + ${yr*2}px)`}:void 0,t[93]=bt,t[94]=yt,t[95]=tn):tn=t[95];let nn=tn,on;t[96]!==Ot||t[97]!==qt||t[98]!==Y||t[99]!==Qt?(on=()=>{Qt();let e=P.current;return()=>{Se.current+=1,ie.current=null,ye.current=null,be.current=null,xe.current=null,H.current=null,qt(),Y(),Ot(),e?.stop()}},t[96]=Ot,t[97]=qt,t[98]=Y,t[99]=Qt,t[100]=on):on=t[100];let sn;t[101]!==Ot||t[102]!==qt||t[103]!==Y||t[104]!==je||t[105]!==rt||t[106]!==Qt||t[107]!==ft?(sn=[Ot,qt,Y,je,rt,Qt,ft],t[101]=Ot,t[102]=qt,t[103]=Y,t[104]=je,t[105]=rt,t[106]=Qt,t[107]=ft,t[108]=sn):sn=t[108],(0,Q.useEffect)(on,sn);let cn,ln;t[109]!==D||t[110]!==Qt||t[111]!==G?(cn=()=>{!G||D||he.current||P.current?.updateAppBlockStream!=null||Qt()},ln=[D,Qt,G],t[109]=D,t[110]=Qt,t[111]=G,t[112]=cn,t[113]=ln):(cn=t[112],ln=t[113]),(0,Q.useEffect)(cn,ln);let un,dn;if(t[114]!==Y||t[115]!==s||t[116]!==Xt||t[117]!==J||t[118]!==q||t[119]!==D||t[120]!==G||t[121]!==N?(un=()=>{if(!G||!q||J||B.current||P.current?.updateAppBlockStream==null)return;let e=D?Jn(s):s;if(D&&(V.current?.html??ve.current)===e)return;if(V.current={html:e,isFinal:!D},!D){Y(),Xt();return}let t=_e.current;if(t==null&&N===`artifact`&&(ge.current??=St(),t=ge.current),t==null){Xt();return}let n=N===`artifact`?Sr:xr,r=St()-t;if(r>=n){Xt();return}return we.current=window.setTimeout(()=>{we.current=null,Xt()},n-r),Y},dn=[Y,s,Xt,J,q,D,G,N],t[114]=Y,t[115]=s,t[116]=Xt,t[117]=J,t[118]=q,t[119]=D,t[120]=G,t[121]=N,t[122]=un,t[123]=dn):(un=t[122],dn=t[123]),(0,Q.useEffect)(un,dn),!je){let e;return t[124]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(On,{}),t[124]=e):e=t[124],e}let fn=Ct&&`flex-col`,pn=yt===`inline`&&(Be?`h-0 min-h-0 overflow-hidden`:`min-h-[120px] overflow-visible`),mn=yt===`stage`&&`h-full min-h-0`,hn;t[125]!==fn||t[126]!==pn||t[127]!==mn?(hn=O(`flex w-full`,fn,pn,mn),t[125]=fn,t[126]=pn,t[127]=mn,t[128]=hn):hn=t[128];let gn;t[129]!==Ct||t[130]!==Tt||t[131]!==T?(gn=Ct?(0,$.jsx)(Rn,{isVisible:Tt,title:T}):null,t[129]=Ct,t[130]=Tt,t[131]=T,t[132]=gn):gn=t[132];let _n=!D&&!G&&(gt===`failed`||gt===`failed_after_ready`)&&mt?.readyTimedOut||void 0,vn=yt===`inline`&&!bt?`flex-none`:`w-full`,yn=Tt&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,bn;t[133]!==vn||t[134]!==yn?(bn=O(`relative min-w-0`,vn,yn),t[133]=vn,t[134]=yn,t[135]=bn):bn=t[135];let xn;t[136]!==p||t[137]!==nn||t[138]!==yt?(xn=yt===`inline`&&p!=null?{height:p}:nn,t[136]=p,t[137]=nn,t[138]=yt,t[139]=xn):xn=t[139];let Sn=`${ft}:${Ne?`network-enabled`:`network-disabled`}:${Oe?`internal-preview`:`workspace-preview`}`,Cn;t[140]!==n||t[141]!==o||t[142]!==c?(Cn=JSON.stringify([o??null,n??c]),t[140]=n,t[141]=o,t[142]=c,t[143]=Cn):Cn=t[143];let wn;t[144]===re?wn=t[145]:(wn=re.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[144]=re,t[145]=wn);let Tn=Ne?`deps-only`:`none`,En=Me?Cr:wr,Dn=_t?0:-1,kn=me?zt:void 0,An=yt===`inline`&&!bt&&j===`open`,jn=!bt,Mn=G?Ke:_r,Nn;t[146]!==c||t[147]!==Oe||t[148]!==Qt||t[149]!==at||t[150]!==Sn||t[151]!==Cn||t[152]!==wn||t[153]!==Tn||t[154]!==En||t[155]!==Dn||t[156]!==kn||t[157]!==An||t[158]!==jn||t[159]!==Mn?(Nn=(0,$.jsx)(K,{id:c,sandboxOriginId:Cn,title:wn,visuallyHidden:!1,networkPolicy:Tn,disableExternalNavigation:Oe,additionalResourceDomains:at,sandboxPermissions:En,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:Dn,onRetryCodeRun:Qt,onAppBlockMessage:kn,transparentBackground:An,useIntrinsicHeight:jn,intrinsicHeightFallback:Mn,ref:P},Sn),t[146]=c,t[147]=Oe,t[148]=Qt,t[149]=at,t[150]=Sn,t[151]=Cn,t[152]=wn,t[153]=Tn,t[154]=En,t[155]=Dn,t[156]=kn,t[157]=An,t[158]=jn,t[159]=Mn,t[160]=Nn):Nn=t[160];let Pn;t[161]===Tt?Pn=t[162]:(Pn=Tt?(0,$.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 z-10 cursor-wait`}):null,t[161]=Tt,t[162]=Pn);let Fn;t[163]!==vt||t[164]!==J||t[165]!==_t||t[166]!==b||t[167]!==G?(Fn=!_t&&!J&&(!G||vt)?(0,$.jsx)(hr,{label:b}):null,t[163]=vt,t[164]=J,t[165]=_t,t[166]=b,t[167]=G,t[168]=Fn):Fn=t[168];let In;t[169]!==J||t[170]!==en?(In=J?(0,$.jsx)(gr,{onRetry:en}):null,t[169]=J,t[170]=en,t[171]=In):In=t[171];let Ln;t[172]!==Tt||t[173]!==_n||t[174]!==bn||t[175]!==xn||t[176]!==Nn||t[177]!==Pn||t[178]!==Fn||t[179]!==In?(Ln=(0,$.jsxs)(`div`,{"aria-busy":Tt,"data-app-block-ready-timeout":_n,className:bn,style:xn,children:[Nn,Pn,Fn,In]}),t[172]=Tt,t[173]=_n,t[174]=bn,t[175]=xn,t[176]=Nn,t[177]=Pn,t[178]=Fn,t[179]=In,t[180]=Ln):Ln=t[180];let X;t[181]!==b||t[182]!==Tt||t[183]!==N?(X=Tt&&N===`artifact`?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:b??(0,$.jsx)(R,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[181]=b,t[182]=Tt,t[183]=N,t[184]=X):X=t[184];let zn;return t[185]!==hn||t[186]!==gn||t[187]!==Ln||t[188]!==X?(zn=(0,$.jsxs)(`div`,{className:hn,children:[gn,Ln,X]}),t[185]=hn,t[186]=gn,t[187]=Ln,t[188]=X,t[189]=zn):zn=t[189],zn}function pr(e){return e+1}function mr(e){return e+1}function hr(e){"use forget";let t=(0,Z.c)(5),{label:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(S,{className:`icon-sm text-token-text-tertiary`}),t[0]=r):r=t[0];let i;t[1]===n?i=t[2]:(i=n??(0,$.jsx)(R,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`}),t[1]=n,t[2]=i);let a;return t[3]===i?a=t[4]:(a=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,role:`status`,children:[r,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:i})]}),t[3]=i,t[4]=a),a}function gr(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(R,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(I,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr=e((()=>{Z=le(),te(),Ze(),Te(),V(),N(),b(),Xe(),T(),Ie(),ze(),G(),Ne(),Je(),c(),Me(),dt(),lt(),Oe(),ne(),x(),i(),je(),ie(),d(),o(),y(),$e(),ft(),Fe(),Ke(),E(),j(),Q=n(se()),oe(),mn(),Lt(),bt(),Dn(),Ce(),jn(),vn(),zn(),rt(),B(),de(),it(),Kn(),$=ae(),_r=432,vr=120,yr=4,br=15e3,xr=100,Sr=350,Cr=`allow-scripts allow-same-origin allow-forms`,wr=`allow-scripts allow-same-origin`,Tr=12e3,Er=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Dr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Or=new Set([`svg`,`path`]),kr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),Ar=/<script(?:\s|>)/i,jr=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,Mr=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,Nr=e=>{"use forget";let t=(0,Z.c)(13),{canOpen:n,conversation:r,expandButtonRef:i,isReady:a,onOpen:o,target:s}=e,c;t[0]!==n||t[1]!==i||t[2]!==o?(c=n&&o!=null?(0,$.jsx)(dr,{ref:i,className:`shrink-0`,onClick:o}):null,t[0]=n,t[1]=i,t[2]=o,t[3]=c):c=t[3];let l=c;if(r==null)return l;let u;t[4]===s?u=t[5]:(u=s??{contentReferenceIndex:-1,messageId:``},t[4]=s,t[5]=u);let d=u,f=a&&s!=null,p;t[6]===l?p=t[7]:(p=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(C,{label:n,children:(0,$.jsx)(I,{type:`button`,icon:Be,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),l]}):l},t[6]=l,t[7]=p);let m;return t[8]!==d||t[9]!==r||t[10]!==f||t[11]!==p?(m=(0,$.jsx)(pt,{category:pe.AppBlock,conversation:r,isReady:f,target:d,children:p}),t[8]=d,t[9]=r,t[10]=f,t[11]=p,t[12]=m):m=t[12],m},Pr=e=>{"use forget";let t=(0,Z.c)(9),{children:n,conversation:r,isReady:i,target:a}=e;if(r==null)return n;let o;t[0]===a?o=t[1]:(o=a??{contentReferenceIndex:-1,messageId:``},t[0]=a,t[1]=o);let s=o,c=i&&a!=null,l;t[2]===n?l=t[3]:(l=e=>(0,$.jsxs)(`div`,{className:`group/keyboard-or-hover relative`,children:[n,e.isVisible?(0,$.jsx)(`div`,{className:`pointer-events-none absolute end-2 top-2 z-10`,children:(0,$.jsx)(`div`,{className:`cant-hover:hidden`,children:(0,$.jsx)(mt,{action:e})})}):null]}),t[2]=n,t[3]=l);let u;return t[4]!==s||t[5]!==r||t[6]!==c||t[7]!==l?(u=(0,$.jsx)(pt,{category:pe.InlineAppBlock,conversation:r,isReady:c,target:s,children:l}),t[4]=s,t[5]=r,t[6]=c,t[7]=l,t[8]=u):u=t[8],u}}));export{qn as a,Kn as c,Dn as d,St as f,J as g,yt as h,fr as i,Sn as l,bt as m,ir as n,Fr as o,Lt as p,hr as r,Bn as s,Xn as t,Cn as u};
//# sourceMappingURL=e3b746a6-3i6sflquwuhwng0l.js.map