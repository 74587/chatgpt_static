const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-jrt39arts8alkawq.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-o8h72z9xifwztnav.js","assets/2340486e-dyt4epctwx2pn2sj.js","assets/conversation-small-pe1pltcroomtrnzh.js","assets/30901919-g27d33jvnn94fqjm.js","assets/c470f5ab-gn12pdq5oim0c76h.js","assets/0e5afe53-ofp1k3kxy6m5lhle.js","assets/conversation-small-d87j24cm.css","assets/8b34dbc2-k8hhcfvv2pxfg62d.js","assets/82782bc9-i3w4fpqdrin3j1m5.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{$3 as r,A3 as i,Bd as a,Cv as o,F$ as s,Hd as c,I$ as l,Iq as u,L3 as d,L_ as f,Lq as p,PM as m,RS as h,R_ as g,Sv as _,T3 as v,TM as y,U2 as b,Yc as x,Zc as S,_A as ee,aM as C,aW as w,b$ as te,bA as ne,dM as T,fH as re,fQ as E,fo as D,gA as O,hA as k,hM as ie,iW as ae,io as oe,j3 as A,n6 as se,oJ as ce,pH as le,pM as j,r6 as ue,sI as de,sJ as fe,sQ as pe,y$ as M,z2 as N,z3 as P,zS as me}from"./4813494d-o8h72z9xifwztnav.js";import{Fn as F,In as I,Ln as he,Rn as ge,Sn as L,hn as R,jn as z,mn as B,zn as V}from"./2340486e-dyt4epctwx2pn2sj.js";import{$E as _e,A6 as ve,Awn as ye,C6 as be,Eu as xe,Gn as Se,Mwn as H,O6 as Ce,SCn as we,T6 as Te,Tu as Ee,Wn as De,_6 as Oe,b6 as ke,bx as Ae,dwt as je,fwt as Me,g6 as U,k6 as W,lD as Ne,nxn as Pe,oD as Fe,pwt as Ie,txn as Le,v6 as Re,vC as ze,w6 as Be,xCn as G,xx as K,y6 as Ve,yC as He}from"./conversation-small-pe1pltcroomtrnzh.js";import{DE as Ue,OE as We,Sx as Ge,hw as Ke,mw as qe,xx as Je}from"./30901919-g27d33jvnn94fqjm.js";import{a as Ye,d as Xe,o as Ze,r as Qe,t as $e,u as et}from"./8d846022-meglr123wki13zk0.js";import{i as tt,n as nt,r as rt}from"./91969468-hlkpa279ypjmwuqu.js";import{n as it,t as at}from"./4d271a7b-h9i5c8r1gryeiwxz.js";import{n as q,r as ot}from"./58bafdef-cmlm4xqefswsikos.js";import{a as st,i as ct}from"./e01e2324-csm44z4903c5hsjs.js";import{i as lt,t as ut}from"./5dc32f04-k648nitr2p8j1yro.js";import{i as dt,n as ft,r as pt,t as mt}from"./9eb56efa-lt9tnviihudqugeg.js";import{i as ht,n as gt,r as _t,t as vt}from"./cc79834b-nyhi6ux0lwep3d6k.js";function yt(){return v(`2779568043`)}function bt(){return v(`3864712762`)}function xt(){return i(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var St=e((()=>{A()}));function Ct({messageId:e,refIndex:t}){return`appblock:${e}:${t}`}var wt=e((()=>{}));function Tt({errorSource:e,errorType:t,networkPolicy:n,outcome:r,readySignal:i,renderMode:a,surface:o,variant:s}){let c={network_policy:n,surface:o};return e!=null&&(c.error_source=e),t!=null&&(c.error_type=t),r!=null&&(c.outcome=r),i!=null&&(c.ready_signal=i),a!=null&&(c.render_mode=a),s!=null&&(c.variant=s),c}function Et(){return typeof performance<`u`?performance.now():Date.now()}function Dt(e){return new TextEncoder().encode(e).byteLength/1024}function Ot(e){return e instanceof Error?e.name:`unknown`}function kt(e,t,n=1){ue.count(r.APP_BLOCKS,e,Tt(t),n)}function At(e,t,n){ue.hist(r.APP_BLOCKS,e,Tt(n),t)}function jt({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,Mt.useRef)(Et()),i=(0,Mt.useRef)(null),a=(0,Mt.useRef)(!1),o=(0,Mt.useRef)(!1),s=O(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=O((n=e)=>{o.current||(o.current=!0,At(Y,Dt(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:O((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=Et(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),kt(It,t);let _=(e,n)=>{f||(f=!0,kt(Ft,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=Et();At(Pt,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,At(J,s-r.current,t),n!=null&&At(Lt,s-n,t))},y=(e,t)=>{if(s(),typeof window>`u`){v(e,t);return}i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,t)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=Et(),g=n,At(X,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{!e()||p||(p=!0,s(),kt(Nt,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var Mt,J,Nt,Y,Pt,Ft,It,X,Lt,Rt=e((()=>{se(),k(),Mt=n(V()),J=`app_block.first_render_time_ms`,Nt=`app_block.load.failure`,Y=`app_block.payload_size_kb`,Pt=`app_block.ready_to_first_paint_ms`,Ft=`app_block.render.outcome`,It=`app_block.render.start`,X=`app_block.sandbox_eval_to_ready_ms`,Lt=`app_block.widget_ref_to_first_paint_ms`}));function zt(e){return e==="default"||e===`open`?e:null}function Bt({explicitStyleMode:e,libraryFileId:t}){return e??(t==null?`default`:`open`)}var Vt=e((()=>{})),Ht,Ut=e((()=>{Ht=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),Wt=e((()=>{})),Gt,Kt=e((()=>{Wt(),Gt=`/cdn/assets/app-block-sandbox-foundation-l4fcvweu.css`})),qt,Jt=e((()=>{qt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){--app-block-slider-track:color-mix(in srgb, var(--viz-text) 16%, transparent);--app-block-slider-thumb-shadow:color-mix(in srgb, var(--viz-text) 18%, transparent);appearance:none;background:linear-gradient(var(--app-block-slider-track), var(--app-block-slider-track)) center / 100% 4px no-repeat;cursor:pointer;border:0;border-radius:9999px;width:100%;height:28px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.5}:where(input[type=range])::-webkit-slider-runnable-track{background:0 0;border:0;height:28px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;margin-top:5px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-webkit-slider-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-webkit-slider-thumb{transform:scale(1.06)}:where(input[type=range])::-moz-range-track{background:var(--app-block-slider-track);border:0;border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-progress{background:var(--viz-accent);border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-thumb{border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-moz-range-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-moz-range-thumb{transform:scale(1.06)}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),Yt=e((()=>{})),Xt,Zt=e((()=>{Yt(),Xt=`/cdn/assets/app-block-sandbox-iimeogb3.css`}));function Qt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var $t=e((()=>{}));function en(e){return String.raw(dn||=Qt([`<script>
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
<\/script>`]))}));function bn(){"use forget";let e=(0,xn.useContext)(Sn);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var xn,Sn,Cn=e((()=>{xn=n(V()),Sn=(0,xn.createContext)(null)})),wn,Tn=e((()=>{p(),R(),wn=u(()=>B(()=>import(`./7aa2b76f-jrt39arts8alkawq.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}));function En(e){"use forget";let t=(0,kn.c)(40),{additionalResourceDomains:n,children:r,code:i,conversationId:a,source:o,styleMode:s,title:c}=e,l=`app-block:${o.appBlockId}:${(0,An.useId)()}`,u=(0,An.useRef)(null),[d,f]=(0,An.useState)(null),p=o.appBlockId,m=o.libraryFileId,h=o.messageId,g=o.refIndex,_=a??null,v;t[0]!==_||t[1]!==p?(v={appBlockId:p,conversationId:_},t[0]=_,t[1]=p,t[2]=v):v=t[2];let y=v,b=te(U),x;t[3]!==b||t[4]!==y?(x=ke(b,y),t[3]=b,t[4]=y,t[5]=x):x=t[5];let S=x,ee=b?.appBlockId===p&&b.conversationId===_&&(b.isOriginalVersion===!0||b.versionNumber!=null),C=S||ee,w;t[6]!==b||t[7]!==l||t[8]!==y?(w=be(b,y,l),t[6]=b,t[7]=l,t[8]=y,t[9]=w):w=t[9];let ne=w,T;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(T=()=>{u.current?.focus()},t[10]=T):T=t[10];let re=T,E=d?.supportsAtomicMove?d:void 0,D;t[11]!==p||t[12]!==m||t[13]!==h||t[14]!==g?(D={appBlockId:p,libraryFileId:m,messageId:h,refIndex:g},t[11]=p,t[12]=m,t[13]=h,t[14]=g,t[15]=D):D=t[15];let O;t[16]!==n||t[17]!==i||t[18]!==s||t[19]!==E||t[20]!==D||t[21]!==c?(O={additionalResourceDomains:n,code:i,focusOnClose:re,sharedPreview:E,source:D,styleMode:s,title:c},t[16]=n,t[17]=i,t[18]=s,t[19]=E,t[20]=D,t[21]=c,t[22]=O):O=t[22];let k=O,ie,ae;t[23]!==k||t[24]!==S||t[25]!==y?(ie=()=>{S&&Be(y,k)},ae=[k,S,y],t[23]=k,t[24]=S,t[25]=y,t[26]=ie,t[27]=ae):(ie=t[26],ae=t[27]),(0,An.useEffect)(ie,ae);let oe;t[28]!==k||t[29]!==ne||t[30]!==y?(oe=()=>{Oe(y,ne,k)},t[28]=k,t[29]=ne,t[30]=y,t[31]=oe):oe=t[31];let A=oe,se;t[32]!==C||t[33]!==ee||t[34]!==A||t[35]!==d?(se={isExpanded:C,isViewingHistoricalVersion:ee,openExpandedView:A,setSharedPreview:f,sharedPreview:d,triggerRef:u},t[32]=C,t[33]=ee,t[34]=A,t[35]=d,t[36]=se):se=t[36];let ce=se,le;return t[37]!==r||t[38]!==ce?(le=(0,jn.jsx)(Sn.Provider,{value:ce,children:r}),t[37]=r,t[38]=ce,t[39]=le):le=t[39],le}function Dn(e){"use forget";let t=(0,kn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,headerTitleContent:o,title:s}=e,c=_t(),l;t[0]===i?l=t[1]:(l=()=>i==null?0:Ee(i).height$()??0,t[0]=i,t[1]=l);let u=te(l),d=c===`fullscreen`&&n&&i!=null?u:0,f=o??s,p;t[2]===f?p=t[3]:(p=(0,jn.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:f}),t[2]=f,t[3]=p);let m;t[4]!==a||t[5]!==p?(m=(0,jn.jsxs)(vt.Header,{className:`pb-1`,children:[p,a]}),t[4]=a,t[5]=p,t[6]=m):m=t[6];let h;t[7]===d?h=t[8]:(h={paddingBottom:d},t[7]=d,t[8]=h);let g;t[9]===r?g=t[10]:(g=(0,jn.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=g);let _;t[11]!==h||t[12]!==g?(_=(0,jn.jsx)(vt.Body,{className:`bg-token-bg-primary overflow-hidden`,style:h,children:g}),t[11]=h,t[12]=g,t[13]=_):_=t[13];let v;return t[14]!==m||t[15]!==_?(v=(0,jn.jsxs)(jn.Fragment,{children:[m,_]}),t[14]=m,t[15]=_,t[16]=v):v=t[16],v}function On(e){"use forget";let t=(0,kn.c)(5),{conversation:n,paneId:r}=e,i=ht(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,jn.jsx)(wn,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var kn,An,jn,Mn=e((()=>{kn=L(),xe(),gt(),M(),An=n(V()),Cn(),Ve(),Tn(),jn=ge()}));function Nn(){"use forget";let e=(0,Pn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,Fn.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,Fn.jsx)(z,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var Pn,Fn,In=e((()=>{Pn=L(),I(),Fn=ge()}));function Ln(e,t){"use forget";let n=(0,zn.c)(39),r=t===void 0||t,i=he(),a;n[0]!==i||n[1]!==e?(a=e?i.formatMessage(Un.generatingApp,{title:e}):i.formatMessage(Un.creatingInterface),n[0]=i,n[1]=e,n[2]=a):a=n[2];let o=a,s;n[3]===i?s=n[4]:(s=i.formatMessage(Un.sketchingInterface),n[3]=i,n[4]=s);let c;n[5]===i?c=n[6]:(c=i.formatMessage(Un.shapingLayout),n[5]=i,n[6]=c);let l;n[7]===i?l=n[8]:(l=i.formatMessage(Un.arrangingPieces),n[7]=i,n[8]=l);let u;n[9]===i?u=n[10]:(u=i.formatMessage(Un.polishingVisuals),n[9]=i,n[10]=u);let d;n[11]===i?d=n[12]:(d=i.formatMessage(Un.tuningInputs),n[11]=i,n[12]=d);let f;n[13]===i?f=n[14]:(f=i.formatMessage(Un.addingInteractivity),n[13]=i,n[14]=f);let p;n[15]===i?p=n[16]:(p=i.formatMessage(Un.wiringControls),n[15]=i,n[16]=p);let m;n[17]===i?m=n[18]:(m=i.formatMessage(Un.composingInteractions),n[17]=i,n[18]=m);let h;n[19]===i?h=n[20]:(h=i.formatMessage(Un.calibratingPreview),n[19]=i,n[20]=h);let g;n[21]===i?g=n[22]:(g=i.formatMessage(Un.refiningDetails),n[21]=i,n[22]=g);let _;n[23]!==o||n[24]!==h||n[25]!==g||n[26]!==s||n[27]!==c||n[28]!==l||n[29]!==u||n[30]!==d||n[31]!==f||n[32]!==p||n[33]!==m?(_=[o,s,c,l,u,d,f,p,m,h,g],n[23]=o,n[24]=h,n[25]=g,n[26]=s,n[27]=c,n[28]=l,n[29]=u,n[30]=d,n[31]=f,n[32]=p,n[33]=m,n[34]=_):_=n[34];let v=_,[y,b]=(0,Bn.useState)(0),x,S;return n[35]!==r||n[36]!==v.length?(x=()=>{if(!r)return;let e=window.setInterval(()=>{b(e=>Math.min(e+1,v.length-1))},Hn);return()=>{window.clearInterval(e)}},S=[r,v.length],n[35]=r,n[36]=v.length,n[37]=x,n[38]=S):(x=n[37],S=n[38]),(0,Bn.useEffect)(x,S),v[y]??v[0]??``}function Rn(e){"use forget";let t=(0,zn.c)(2),{title:n}=e,r=Ln(n),i;return t[0]===r?i=t[1]:(i=(0,Vn.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,role:`status`,children:(0,Vn.jsx)(ut,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:r})}),t[0]=r,t[1]=i),i}var zn,Bn,Vn,Hn,Un,Wn,Gn=e((()=>{zn=L(),lt(),l(),Bn=n(V()),I(),Vn=ge(),Hn=2800,Un=F({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}}),Wn=e=>{"use forget";let t=(0,zn.c)(11),{isVisible:n,title:r}=e,i=Ln(r,n),a=!n,o=n?`grid-rows-[1fr] opacity-100`:`grid-rows-[0fr] opacity-0`,c;t[0]===o?c=t[1]:(c=s(`grid shrink-0 transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none`,o),t[0]=o,t[1]=c);let l=n&&`loading-shimmer-pure-text motion-reduce:animate-none`,u;t[2]===l?u=t[3]:(u=s(`text-token-text-secondary inline-block font-sans font-medium`,l),t[2]=l,t[3]=u);let d;t[4]!==i||t[5]!==u?(d=(0,Vn.jsx)(`div`,{className:`min-h-0 overflow-hidden`,children:(0,Vn.jsx)(`div`,{className:`pb-3`,children:(0,Vn.jsx)(`span`,{className:u,children:i})})}),t[4]=i,t[5]=u,t[6]=d):d=t[6];let f;return t[7]!==a||t[8]!==c||t[9]!==d?(f=(0,Vn.jsx)(`div`,{"aria-atomic":`true`,"aria-hidden":a,"aria-live":`polite`,className:c,role:`status`,children:d}),t[7]=a,t[8]=c,t[9]=d,t[10]=f):f=t[10],f}}));function Kn(e){let t=new Map,n=new Map,r=null,i=null;for(let a of e){let e=a.metadata?.content_references;if(Array.isArray(e)&&e.forEach((e,r)=>{let i=Jn({contentReference:e,messageId:a.id,refIndex:r});i!=null&&(t.set(i.appBlockId,i),i.libraryFileId!=null&&n.set(i.libraryFileId,i.appBlockId))}),a.author.role===N.User){(a.metadata?.attachments??[]).forEach((e,r)=>{let i=qn({attachment:e,messageId:a.id,refIndex:r});i==null||i.libraryFileId==null||n.has(i.libraryFileId)||(t.set(i.appBlockId,i),n.set(i.libraryFileId,i.appBlockId))});let e=a.metadata?.focused_artifact;if(e!=null){let n=e.type===ar?t.get(e.artifact_id)??null:null;r=n!=null&&n.messageId===e.source_message_id&&n.refIndex===e.source_ref_index&&(n.libraryFileId==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e.library_file_id}else{let e=a.metadata?.open_in_app_block_view,n=e==null?null:t.get(e.app_block_id)??null;r=e!=null&&n!=null&&n.messageId===e.message_id&&n.refIndex===e.ref_index&&(n.libraryFileId==null||e.library_file_id==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e?.library_file_id??null}}let o=de(a);if(o?.status!==`created`)continue;let s=n.get(o.libraryFileId),c=s==null?null:t.get(s)??null;if(c==null&&o.origin!=null){let e=o.origin.messageId,n=[...t.values()].filter(t=>t.messageId===e);c=n.length===1?n[0]:null}c==null&&s==null&&r!=null&&r.libraryFileId==null&&(i==null||i===o.libraryFileId)&&(c=r),c!=null&&(c.libraryFileId==null&&c.content!=null&&nr(a)||(n.set(o.libraryFileId,c.appBlockId),t.set(c.appBlockId,{...c,content:null,currentContentFileId:o.newContentFileId,latestPatchMessageId:a.id,libraryFileId:o.libraryFileId,libraryFileVersionNumber:o.newVersionNumber})))}return t}function qn({attachment:e,messageId:t,refIndex:n}){return e.library_artifact_type!==ar||e.library_file_id==null?null:{appBlockId:Ct({messageId:t,refIndex:n}),content:null,currentContentFileId:e.id??null,entrypoint:`index.html`,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:e.library_file_id,libraryFileName:e.name,libraryFileVersionNumber:null,mimeType:e.mime_type??null,messageId:t,refIndex:n,styleMode:null,title:e.name.replace(/\.html$/i,``)}}function Jn({contentReference:e,messageId:t,refIndex:n}){if(typeof e!=`object`||!e||!(`type`in e)||!(`category`in e)||e.type!==or||e.category!==ar||!(`data`in e))return null;let r=e.data;if(typeof r!=`object`||!r)return null;let i=Yn(r,`content`),a=Yn(r,`entrypoint`)??`index.html`,o=er(r,a),s=Zn(o,`library_file_id`);return i==null&&s==null?null:{appBlockId:Yn(r,`app_block_id`)??Ct({messageId:t,refIndex:n}),bundleVersion:Xn(r,`bundle_version`)??void 0,content:i,currentContentFileId:Zn(o,`current_content_file_id`),entrypoint:a,iconSvg:Yn(r,`icon_svg`),language:tr(),latestPatchMessageId:null,libraryFileId:s,libraryFileName:Zn(o,`library_file_name`),libraryFileVersionNumber:$n(Qn(o,`library_file_version_number`)),mimeType:Zn(o,`mime_type`),messageId:t,refIndex:n,styleMode:zt(Yn(r,`style_mode`)),title:Yn(r,`display_name`)??Yn(r,`title`)}}function Yn(e,t){let n=null;return t===`app_block_id`&&`app_block_id`in e&&(n=e.app_block_id),t===`content`&&`content`in e&&(n=e.content),t===`current_content_file_id`&&`current_content_file_id`in e&&(n=e.current_content_file_id),t===`display_name`&&`display_name`in e&&(n=e.display_name),t===`entrypoint`&&`entrypoint`in e&&(n=e.entrypoint),t===`icon_svg`&&`icon_svg`in e&&(n=e.icon_svg),t===`library_file_id`&&`library_file_id`in e&&(n=e.library_file_id),t===`library_file_name`&&`library_file_name`in e&&(n=e.library_file_name),t===`mime_type`&&`mime_type`in e&&(n=e.mime_type),t===`path`&&`path`in e&&(n=e.path),t===`style_mode`&&`style_mode`in e&&(n=e.style_mode),t===`title`&&`title`in e&&(n=e.title),typeof n==`string`&&n.trim()!==``?n:null}function Xn(e,t){if(t===`bundle_version`&&`bundle_version`in e){let t=e.bundle_version;if(typeof t==`number`)return t}if(t===`library_file_version_number`&&`library_file_version_number`in e){let t=e.library_file_version_number;if(typeof t==`number`)return t}return null}function Zn(e,t){return typeof e!=`object`||!e?null:Yn(e,t)}function Qn(e,t){return typeof e!=`object`||!e?null:Xn(e,t)}function $n(...e){for(let t of e)if(t!=null)return t;return null}function er(e,t){if(!(`files`in e)||!Array.isArray(e.files))return null;let n=null;for(let r of e.files)if(!(typeof r!=`object`||!r)&&Yn(r,`library_file_id`)!=null&&(n??=r,Yn(r,`path`)===t))return r;return n}function tr(){return`html`}function nr(e){let t=e.metadata?.shared_conversation_id;return typeof t==`string`&&t.trim()!==``}function rr(e,t){return e.appBlockId===t.appBlockId&&e.bundleVersion===t.bundleVersion&&e.content===t.content&&e.currentContentFileId===t.currentContentFileId&&e.entrypoint===t.entrypoint&&e.iconSvg===t.iconSvg&&e.language===t.language&&e.latestPatchMessageId===t.latestPatchMessageId&&e.libraryFileId===t.libraryFileId&&e.libraryFileName===t.libraryFileName&&e.libraryFileVersionNumber===t.libraryFileVersionNumber&&e.mimeType===t.mimeType&&e.messageId===t.messageId&&e.refIndex===t.refIndex&&e.styleMode===t.styleMode&&e.title===t.title}function ir(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e){let e=t.get(n);if(e==null||!rr(r,e))return!1}return!0}var ar,or,sr,cr=e((()=>{b(),j(),S(),_e(),pe(),wt(),Vt(),ar=`app_block`,or=`client_defined_widget`,sr=C(e=>E(()=>Kn(x(e).flatMap(e=>e.messages)),{equals:ir}))}));function lr({appBlockId:e,conversation:t}){return t==null?null:sr(t).get(e)??null}function ur(e){return e?.serverId$()??void 0}function dr({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:Me(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function fr({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return je({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:c(e)?`missing`:`failed`})}),()=>{a.abort()}}function pr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??mr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function mr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var hr=e((()=>{a(),Ie(),cr()})),gr=t({AppBlock:()=>yr,AppBlockPreviewLoadingState:()=>Rr,AppBlockSandboxPreview:()=>Fr});function _r(e){let t=e.search($r),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function vr(e){let t=_r(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(ei))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(ti)!=null}function yr(e){"use forget";let t=(0,Z.c)(118),{additionalResourceDomains:n,appBlockId:r,authoritativeCode:i,authoritativeSource:a,bind:o,code:s,collapseWhenSuperseded:c,currentContentFileId:l,displayMode:u,id:d,captureConsoleMessages:f,clientThreadId:p,iconSvg:h,isStreaming:g,isTurnStreaming:_,libraryFileId:v,libraryFileVersionNumber:y,messageId:b,onConsoleMessagesChange:x,onReadyChange:S,progressiveStreaming:ee,ref:C,refIndex:w,styleMode:ne,title:re,variant:E,widgetName:O,widgetRefSeenAtMs:k}=e,ae=c===void 0||c,oe=f!==void 0&&f,A=g!==void 0&&g,se=_!==void 0&&_,ce=ee!==void 0&&ee,le=E===void 0?`inline`:E,j=ie(),ue;t[0]===j?ue=t[1]:(ue=()=>j!=null&&Pe(j),t[0]=j,t[1]=ue);let de=te(ue),fe;t[2]!==p||t[3]!==j?(fe=p==null?j:T(p),t[2]=p,t[3]=j,t[4]=fe):fe=t[4];let pe=fe,M=b!=null&&w!=null?Ct({messageId:b,refIndex:w}):void 0,N=r??M??Ct({messageId:b??d,refIndex:w??0}),P=te(()=>Fe({conversation:j??null,instanceId:N,messageId:b,refIndex:w}))??u,me=te(()=>a!=null||P!=null?null:lr({appBlockId:N,conversation:j??null})),F=a??me,I;t[5]===j?I=t[6]:(I=()=>ur(j??null),t[5]=j,t[6]=I);let he=te(I),ge=m(j?.id),L=he??ge,R;t[7]!==l||t[8]!==v||t[9]!==y||t[10]!==L||t[11]!==F?(R=dr({currentContentFileId:l,libraryFileId:v,libraryFileVersionNumber:y,serverThreadId:L,source:F}),t[7]=l,t[8]=v,t[9]=y,t[10]=L,t[11]=F,t[12]=R):R=t[12];let z=R,[B,V]=(0,Q.useState)(null),[_e,ve]=(0,Q.useState)(0),ye;t[13]!==_e||t[14]!==z.libraryContentKey?(ye=[z.libraryContentKey,_e],t[13]=_e,t[14]=z.libraryContentKey,t[15]=ye):ye=t[15];let be=ye.join(`\0`),xe,Se;t[16]!==i||t[17]!==be||t[18]!==z.contentFileId||t[19]!==z.libraryFileId||t[20]!==P||t[21]!==L?(xe=()=>{if(!(i!=null||P===`collapsed`))return fr({contentFileId:z.contentFileId,libraryContentKey:be,libraryFileId:z.libraryFileId,onContentStateChange:V,serverThreadId:L})},Se=[i,z.contentFileId,z.libraryFileId,be,P,L],t[16]=i,t[17]=be,t[18]=z.contentFileId,t[19]=z.libraryFileId,t[20]=P,t[21]=L,t[22]=xe,t[23]=Se):(xe=t[22],Se=t[23]),(0,Q.useEffect)(xe,Se);let H=pr({appBlockId:N,contentFileId:z.contentFileId,currentContentFileId:l,libraryContent:B,libraryContentKey:be,libraryFileId:v,libraryFileVersionNumber:y,source:F}),Ce=B?.key===be?B:null,we;t[24]!==H?.libraryFileId||t[25]!==v?(we=()=>Re(H?.libraryFileId??v),t[24]=H?.libraryFileId,t[25]=v,t[26]=we):we=t[26];let Te=te(we),Ee=H?.libraryFileVersionNumber??y,De=Te!=null&&(Ee==null||Te.versionNumber>=Ee)?Te.code:void 0,ke=De??i??H?.content??s??null,Me=H?.iconSvg??h??null,U=H?.libraryFileId??v,W=U==null&&i==null&&De==null&&l==null&&F?.currentContentFileId==null&&F?.latestPatchMessageId==null,Ne;t[27]!==W||t[28]!==s||t[29]!==b||t[30]!==ke||t[31]!==w||t[32]!==F?(Ne=W?F==null?b!=null&&w!=null&&s!=null&&ke===s?{messageId:b,refIndex:w}:null:F.messageId.length>0&&F.content!=null&&ke===F.content?{messageId:F.messageId,refIndex:F.refIndex}:null:null,t[27]=W,t[28]=s,t[29]=b,t[30]=ke,t[31]=w,t[32]=F,t[33]=Ne):Ne=t[33];let Ie=Ne,Le=le===`artifact`,ze=H?.styleMode??ne??(Le&&ce?`open`:void 0),Be;t[34]!==U||t[35]!==ze?(Be=Bt({explicitStyleMode:ze,libraryFileId:U}),t[34]=U,t[35]=ze,t[36]=Be):Be=t[36];let G=Be,K=H?.title??re,Ve;t[37]===j?Ve=t[38]:(Ve=()=>j!=null&&D(j)?`work`:`chat`,t[37]=j,t[38]=Ve);let He=te(Ve),Ue;t[39]===Symbol.for(`react.memo_cache_sentinel`)?(Ue=xt(),t[39]=Ue):Ue=t[39];let We=Ue,Ge=ce,Ke=Le&&G===`open`,qe=P===`collapsed`||P==null&&ae&&H?.latestPatchMessageId!=null&&H.latestPatchMessageId!==b,Je=s!=null||l!=null,Ye;t[40]!==p||t[41]!==s||t[42]!==j?.id||t[43]!==l||t[44]!==N||t[45]!==y||t[46]!==b||t[47]!==U||t[48]!==G||t[49]!==K||t[50]!==w||t[51]!==L||t[52]!==F?.messageId?(Ye=async e=>{let t=s;if(t==null&&l!=null)try{t=await je({abortSignal:new AbortController().signal,fileId:l,serverThreadId:L})}catch{return}t!=null&&Oe({appBlockId:N,conversationId:j?.id??p??null,isOriginalVersion:!0,versionNumber:y??void 0},`app-block:${N}:original`,{code:t,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:N,libraryFileId:U,messageId:F?.messageId??b,refIndex:w},styleMode:G,title:K})},t[40]=p,t[41]=s,t[42]=j?.id,t[43]=l,t[44]=N,t[45]=y,t[46]=b,t[47]=U,t[48]=G,t[49]=K,t[50]=w,t[51]=L,t[52]=F?.messageId,t[53]=Ye):Ye=t[53],j?.id,F?.messageId;let Xe=Ye;if(A&&!Ge){let e;return t[54]===K?e=t[55]:(e=(0,$.jsx)(Rn,{title:K}),t[54]=K,t[55]=e),e}let Ze=de&&s!=null;if(Ce?.status===`missing`&&!Ze)return null;if(qe){let e=Je?Xe:void 0,n;return t[56]!==K||t[57]!==e?(n=(0,$.jsx)(Nr,{onView:e,title:K}),t[56]=K,t[57]=e,t[58]=n):n=t[58],n}let Qe=ke??(Ge&&A?``:null);if(Qe==null){if(H?.latestPatchMessageId!=null){let e=j?.id??p,n=Ce?.status===`failed`,r;t[59]===ve?r=t[60]:(r=()=>ve(br),t[59]=ve,t[60]=r);let i;return t[61]!==N||t[62]!==Le||t[63]!==Me||t[64]!==K||t[65]!==e||t[66]!==n||t[67]!==r?(i=(0,$.jsx)(wr,{appBlockId:N,conversationId:e,hasFailed:n,iconSvg:Me,onRetry:r,showHeader:Le,title:K}),t[61]=N,t[62]=Le,t[63]=Me,t[64]=K,t[65]=e,t[66]=n,t[67]=r,t[68]=i):i=t[68],i}let e;return t[69]===K?e=t[70]:(e=(0,$.jsx)(Rn,{title:K}),t[69]=K,t[70]=e),e}let $e;t[71]!==p||t[72]!==He||t[73]!==A||t[74]!==se||t[75]!==b||t[76]!==K||t[77]!==w?($e=!A&&!se&&p!=null&&b!=null&&w!=null&&yt()?{reference:{clientThreadId:p,messageId:b,referenceIndex:w},target:{kind:`app_block`,metadata:{...K==null?{}:{title:K},tab:He}}}:void 0,t[71]=p,t[72]=He,t[73]=A,t[74]=se,t[75]=b,t[76]=K,t[77]=w,t[78]=$e):$e=t[78];let et=$e,tt=j?.id??p,nt=F?.messageId??b,rt;t[79]!==N||t[80]!==U||t[81]!==w||t[82]!==nt?(rt={appBlockId:N,libraryFileId:U,messageId:nt,refIndex:w},t[79]=N,t[80]=U,t[81]=w,t[82]=nt,t[83]=rt):rt=t[83];let it=Ke&&We&&!A,at=j?.id??p,q;t[84]!==Ie||t[85]!==O?(q=Ie==null?void 0:{contentReferenceIndex:Ie.refIndex,messageId:Ie.messageId,widgetName:O??Ae.AppBlock,widgetType:Ae.AppBlock},t[84]=Ie,t[85]=O,t[86]=q):q=t[86];let ot;t[87]!==n||t[88]!==o||t[89]!==oe||t[90]!==N||t[91]!==et||t[92]!==d||t[93]!==A||t[94]!==x||t[95]!==S||t[96]!==Me||t[97]!==G||t[98]!==K||t[99]!==C||t[100]!==Qe||t[101]!==pe||t[102]!==Ge||t[103]!==Ke||t[104]!==it||t[105]!==at||t[106]!==q||t[107]!==le||t[108]!==k?(ot=(0,$.jsx)(xr,{additionalResourceDomains:n,appBlockId:N,bind:o,canOpen:it,captureConsoleMessages:oe,clientThreadId:at,code:Qe,feedback:et,iconSvg:Me,id:d,isStreaming:A,onConsoleMessagesChange:x,onReadyChange:S,progressiveStreaming:Ge,ref:C,showArtifactCard:Ke,shareConversation:pe,shareTarget:q,styleMode:G,title:K,variant:le,widgetRefSeenAtMs:k}),t[87]=n,t[88]=o,t[89]=oe,t[90]=N,t[91]=et,t[92]=d,t[93]=A,t[94]=x,t[95]=S,t[96]=Me,t[97]=G,t[98]=K,t[99]=C,t[100]=Qe,t[101]=pe,t[102]=Ge,t[103]=Ke,t[104]=it,t[105]=at,t[106]=q,t[107]=le,t[108]=k,t[109]=ot):ot=t[109];let st;return t[110]!==n||t[111]!==G||t[112]!==K||t[113]!==Qe||t[114]!==tt||t[115]!==rt||t[116]!==ot?(st=(0,$.jsx)(En,{additionalResourceDomains:n,code:Qe,conversationId:tt,styleMode:G,source:rt,title:K,children:ot}),t[110]=n,t[111]=G,t[112]=K,t[113]=Qe,t[114]=tt,t[115]=rt,t[116]=ot,t[117]=st):st=t[117],st}function br(e){return e+1}function xr(e){"use forget";let t=(0,Z.c)(69),{additionalResourceDomains:n,appBlockId:r,bind:i,canOpen:a,captureConsoleMessages:s,clientThreadId:c,code:l,feedback:u,iconSvg:d,id:f,isStreaming:p,onConsoleMessagesChange:m,onReadyChange:h,progressiveStreaming:g,ref:_,shareConversation:v,shareTarget:y,showArtifactCard:b,styleMode:x,title:S,variant:ee,widgetRefSeenAtMs:C}=e,{isExpanded:w,isViewingHistoricalVersion:te,openExpandedView:ne,setSharedPreview:T,sharedPreview:re,triggerRef:E}=bn(),D=(0,Q.useContext)(De),k;t[0]===n?k=t[1]:(k=n??[],t[0]=n,t[1]=k);let ie;t[2]!==l||t[3]!==f||t[4]!==x||t[5]!==k?(ie=[f,x,l,...k],t[2]=l,t[3]=f,t[4]=x,t[5]=k,t[6]=ie):ie=t[6];let ae=ie.join(`\0`),[oe,A]=(0,Q.useState)(null),se=!p&&oe===ae,ce;t[7]===ne?ce=t[8]:(ce=()=>{G(),ne()},t[7]=ne,t[8]=ce);let le=ce,j;t[9]!==h||t[10]!==ae?(j=(e,t)=>{A(e?ae:null),h?.(e,t)},t[9]=h,t[10]=ae,t[11]=j):j=t[11];let ue=j,de;t[12]!==n||t[13]!==r||t[14]!==i||t[15]!==s||t[16]!==c||t[17]!==l||t[18]!==ue||t[19]!==f||t[20]!==p||t[21]!==m||t[22]!==g||t[23]!==_||t[24]!==x||t[25]!==S||t[26]!==ee||t[27]!==C?(de=(0,$.jsx)(Fr,{appBlockId:r,additionalResourceDomains:n,bind:i,code:l,id:f,isStreaming:p,captureConsoleMessages:s,clientThreadId:c,onConsoleMessagesChange:m,onReadyChange:ue,presentationSurface:`inline`,progressiveStreaming:g,ref:_,styleMode:x,title:S,variant:ee,widgetRefSeenAtMs:C}),t[12]=n,t[13]=r,t[14]=i,t[15]=s,t[16]=c,t[17]=l,t[18]=ue,t[19]=f,t[20]=p,t[21]=m,t[22]=g,t[23]=_,t[24]=x,t[25]=S,t[26]=ee,t[27]=C,t[28]=de):de=t[28];let fe;t[29]!==D||t[30]!==de?(fe={element:de,sandboxPolicy:D},t[29]=D,t[30]=de,t[31]=fe):fe=t[31];let pe=fe,M;t[32]===pe?M=t[33]:(M=()=>pe,t[32]=pe,t[33]=M);let N=O(M),P;t[34]!==r||t[35]!==c||t[36]!==N||t[37]!==T?(P=e=>{if(e==null)return;let{preview:t,sourceToken:n}=Te({appBlockId:r,content:N(),conversationId:c??null,inlineContainer:e});return T(t),()=>{let e=U();W(t,n,e?.sharedPreview===t)}},t[34]=r,t[35]=c,t[36]=N,t[37]=T,t[38]=P):P=t[38];let me=P,F,I;t[39]!==pe||t[40]!==re?(I=()=>{re!=null&&ve(re,pe)},F=[pe,re],t[39]=pe,t[40]=re,t[41]=F,t[42]=I):(F=t[41],I=t[42]),o(I,F);let he=te?le:void 0,ge;t[43]!==d||t[44]!==he||t[45]!==S||t[46]!==E?(ge=(0,$.jsx)(Dr,{iconSvg:d,onOpen:he,openButtonRef:E,title:S}),t[43]=d,t[44]=he,t[45]=S,t[46]=E,t[47]=ge):ge=t[47];let L=w?ge:null,R;t[48]===me?R=t[49]:(R=(0,$.jsx)(`div`,{ref:me,className:`w-full`}),t[48]=me,t[49]=R);let z;t[50]!==a||t[51]!==u||t[52]!==le||t[53]!==d||t[54]!==se||t[55]!==p||t[56]!==v||t[57]!==y||t[58]!==b||t[59]!==R||t[60]!==S||t[61]!==E?(z=(0,$.jsx)(Cr,{canOpen:a,expandButtonRef:E,feedback:u,iconSvg:d,isShareReady:se,shareConversation:v,shareTarget:y,isStreaming:p,showArtifactCard:b,title:S,onOpen:le,children:R}),t[50]=a,t[51]=u,t[52]=le,t[53]=d,t[54]=se,t[55]=p,t[56]=v,t[57]=y,t[58]=b,t[59]=R,t[60]=S,t[61]=E,t[62]=z):z=t[62];let B;t[63]!==w||t[64]!==z?(B=(0,$.jsx)(`div`,{hidden:w,children:z}),t[63]=w,t[64]=z,t[65]=B):B=t[65];let V;return t[66]!==L||t[67]!==B?(V=(0,$.jsxs)($.Fragment,{children:[L,B]}),t[66]=L,t[67]=B,t[68]=V):V=t[68],V}function Sr(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:o,titleClassName:c}=e,l;t[0]===r?l=t[1]:(l=s(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=l);let u=c??`truncate text-base font-semibold`,d;t[2]===u?d=t[3]:(d=s(`text-token-text-primary`,u),t[2]=u,t[3]=d);let f=o??i,p;t[4]!==d||t[5]!==f?(p=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:d,children:f})}),t[4]=d,t[5]=f,t[6]=p):p=t[6];let m;t[7]!==a||t[8]!==p?(m=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,p]}),t[7]=a,t[8]=p,t[9]=m):m=t[9];let h;return t[10]!==n||t[11]!==l||t[12]!==m?(h=(0,$.jsxs)(`div`,{className:l,children:[m,n]}),t[10]=n,t[11]=l,t[12]=m,t[13]=h):h=t[13],h}function Cr(e){"use forget";let t=(0,Z.c)(20),{canOpen:n,children:r,expandButtonRef:i,feedback:a,iconSvg:o,isShareReady:c,isStreaming:l,onOpen:u,shareConversation:d,shareTarget:f,showArtifactCard:p,title:m}=e,h=he(),g;t[0]===h?g=t[1]:(g=h.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=h,t[1]=g);let _=g,v;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==_||t[6]!==o||t[7]!==c||t[8]!==l||t[9]!==u||t[10]!==d||t[11]!==f||t[12]!==p||t[13]!==m?(v=p?(0,$.jsxs)(`div`,{className:s(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,l&&`cursor-wait`),"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)(Sr,{action:(0,$.jsx)(ni,{canOpen:n,conversation:d,expandButtonRef:i,isReady:c,onOpen:u,target:f}),className:`min-h-13 px-4 py-2`,fallbackTitle:_,leading:l?(0,$.jsx)(re,{className:`icon-md text-token-text-primary shrink-0`}):(0,$.jsx)(kr,{iconSvg:o}),title:m}),(0,$.jsx)(`div`,{children:r})]}):(0,$.jsx)(ri,{conversation:d,isReady:c,target:f,children:r}),t[2]=n,t[3]=r,t[4]=i,t[5]=_,t[6]=o,t[7]=c,t[8]=l,t[9]=u,t[10]=d,t[11]=f,t[12]=p,t[13]=m,t[14]=v):v=t[14];let y;t[15]===a?y=t[16]:(y=a==null?null:(0,$.jsx)(Tr,{...a}),t[15]=a,t[16]=y);let b;return t[17]!==v||t[18]!==y?(b=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[v,y]}),t[17]=v,t[18]=y,t[19]=b):b=t[19],b}function wr(e){"use forget";let t=(0,Z.c)(17),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:o,showHeader:s,title:c}=e,l=te(U),u=he(),d;t[0]===u?d=t[1]:(d=u.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=u,t[1]=d);let f=d;if(ke(l,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==c?(e=(0,$.jsx)(Dr,{iconSvg:a,title:c}),t[2]=a,t[3]=c,t[4]=e):e=t[4],e}let p;t[5]!==f||t[6]!==a||t[7]!==s||t[8]!==c?(p=s?(0,$.jsx)(Sr,{className:`mb-2`,fallbackTitle:f,leading:(0,$.jsx)(kr,{iconSvg:a}),title:c}):null,t[5]=f,t[6]=a,t[7]=s,t[8]=c,t[9]=p):p=t[9];let m;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(m={minHeight:Br},t[10]=m):m=t[10];let h;t[11]!==i||t[12]!==o?(h=(0,$.jsx)(`div`,{className:`relative w-full`,style:m,children:i?(0,$.jsx)(zr,{onRetry:o}):(0,$.jsx)(Rr,{})}),t[11]=i,t[12]=o,t[13]=h):h=t[13];let g;return t[14]!==p||t[15]!==h?(g=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[p,h]}),t[14]=p,t[15]=h,t[16]=g):g=t[16],g}function Tr(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(te(Er))return null;let o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(ze,{}),t[0]=o):o=t[0];let s;return t[1]!==i||t[2]!==n||t[3]!==r?(s=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)(ct,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:o})}),t[1]=i,t[2]=n,t[3]=r,t[4]=s):s=t[4],s}function Er(){return ot()}function Dr(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=he(),s,c,l,u,d;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),d=`not-prose relative clear-both my-4 w-full max-w-full`,u=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=Sr,l=r==null?void 0:(0,$.jsx)(h,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=l,t[7]=u,t[8]=d):(s=t[4],c=t[5],l=t[6],u=t[7],d=t[8]);let f;t[9]===n?f=t[10]:(f=(0,$.jsx)(Or,{iconSvg:n}),t[9]=n,t[10]=f);let p;t[11]!==s||t[12]!==c||t[13]!==l||t[14]!==f||t[15]!==a?(p=(0,$.jsx)(s,{action:l,className:`w-full`,fallbackTitle:c,leading:f,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=l,t[14]=f,t[15]=a,t[16]=p):p=t[16];let m;t[17]!==u||t[18]!==p?(m=(0,$.jsx)(`div`,{className:u,children:p}),t[17]=u,t[18]=p,t[19]=m):m=t[19];let g;return t[20]!==d||t[21]!==m?(g=(0,$.jsx)(`div`,{className:d,children:m}),t[20]=d,t[21]=m,t[22]=g):g=t[22],g}function Or(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(kr,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function kr(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=Ar(r),t[0]=r,t[1]=a);let o=a,c;return t[2]!==i||t[3]!==o?(c=o==null?(0,$.jsx)(qe,{"aria-hidden":`true`,className:s(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:s(`icon-md shrink-0`,i),children:(0,$.jsx)(ye,{svgString:o,className:`h-full w-full`})}),t[2]=i,t[3]=o,t[4]=c):c=t[4],c}function Ar(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>Jr||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Yr)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Zr.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!jr(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function jr(e){let t=e.replace(Xr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Xr)){let e=t[1],n=t[2];if(!Qr.has(e)||!Mr(e,n))return!1}return!0}function Mr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function Nr(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=he(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(z,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function Pr(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:i}=e,a=he(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let s=o,c;t[2]===r?c=t[3]:(c=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=c);let l;t[4]!==s||t[5]!==i||t[6]!==c?(l=(0,$.jsx)(h,{ref:i,type:`button`,icon:Je,color:`ghost`,size:`medium`,label:s,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:c}),t[4]=s,t[5]=i,t[6]=c,t[7]=l):l=t[7];let u;return t[8]!==n||t[9]!==s||t[10]!==l?(u=(0,$.jsx)(f,{label:s,className:n,children:l}),t[8]=n,t[9]=s,t[10]=l,t[11]=u):u=t[11],u}function Fr(e){"use forget";let t=(0,Z.c)(174),{appBlockId:n,additionalResourceDomains:r,bind:i,clientThreadId:a,code:c,id:l,captureConsoleMessages:u,isStreaming:d,onConsoleMessagesChange:f,onReadyChange:p,presentationSurface:m,progressiveStreaming:h,ref:g,styleMode:_,surface:v,title:y,variant:b,widgetRefSeenAtMs:x}=e,S=d!==void 0&&d,ee=h!==void 0&&h,C=_===void 0?`default`:_,w=v===void 0?`inline`:v,T=b===void 0?`inline`:b,re=he(),E=(0,Q.useRef)(null),D=(0,Q.useRef)(null),k=Ye(i),[ie,oe]=(0,Q.useState)(k.values),A=fe(ie,k.values)?ie:k.values;A!==ie&&oe(A);let se=[...k.callbacks.keys()],[ce,le]=(0,Q.useState)(se),j=fe(ce,se)?ce:se;j!==ce&&le(j);let ue=(0,Q.useRef)(A),de=(0,Q.useRef)(j),pe=(0,Q.useRef)(k.callbacks),M=i!=null,N=(0,Q.useRef)(!1),me=(0,Q.useRef)(!1),F=(0,Q.useRef)(null),I=(0,Q.useRef)(null),ge=(0,Q.useRef)(null),L=(0,Q.useRef)(null),R=(0,Q.useRef)(null),B=(0,Q.useRef)(null),V=(0,Q.useRef)(null),_e=(0,Q.useRef)(0),ve=(0,Q.useRef)(null),ye=(0,Q.useRef)(null),be;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(be=[],t[0]=be):be=t[0];let xe=(0,Q.useRef)(be),Se=ne(),H=te(ae),{allowDependencyNetworkRequestsWithoutCanvasAccess:Ce}=(0,Q.useContext)(De),we=rt()||Ce,Te=tt(a)&&!Ce,Ee=Se?`dark`:`light`,Oe=re.locale,ke;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(ke={status:`streaming`},t[1]=ke):ke=t[1];let[Ae,je]=(0,Q.useState)(ke),Me=Ae.status===`finalized`&&Ae.html!==c,U=ee&&!S&&(T===`artifact`||Ae.status===`failed`),W=ee&&w===`inline`&&Ae.status!==`static`&&!U&&!Me,Ne=W&&S&&T===`artifact`&&!vr(c),Pe=Ne?0:Vr,Fe=we?`execution-enabled`:`execution-disabled`,Ie=Te?`network-enabled`:`network-disabled`,Le=M?`bindings-enabled`:`bindings-disabled`,Re=W?`progressive-app-block-stream`:c,ze;t[2]===r?ze=t[3]:(ze=r??[],t[2]=r,t[3]=ze);let Be;t[4]!==H||t[5]!==Oe||t[6]!==C||t[7]!==w||t[8]!==Le||t[9]!==Re||t[10]!==ze||t[11]!==Fe||t[12]!==Ie||t[13]!==Ee?(Be=[Ee,H,w,C,Oe,Fe,Ie,Le,Re,...ze],t[4]=H,t[5]=Oe,t[6]=C,t[7]=w,t[8]=Le,t[9]=Re,t[10]=ze,t[11]=Fe,t[12]=Ie,t[13]=Ee,t[14]=Be):Be=t[14];let G=Be.join(`\0`),K;t[15]===r?K=t[16]:(K=ln(r),t[15]=r,t[16]=K);let Ve=K,He=Te?`deps_only`:`disabled`,Ue=w===`inline`?T:void 0,We=W?`progressive`:`static`,Ge;t[17]!==w||t[18]!==He||t[19]!==Ue||t[20]!==We?(Ge={networkPolicy:He,surface:w,variant:Ue,renderMode:We},t[17]=w,t[18]=He,t[19]=Ue,t[20]=We,t[21]=Ge):Ge=t[21];let Ke=Ge,[qe,Je]=(0,Q.useState)(0),[$e,nt]=(0,Q.useState)(null),at=$e?.signature===G?$e.status:null,q=at===`ready`,ot=q||at===`failed_after_ready`,st=W&&at===`failed`,ct=!S&&!W&&at===`failed`,lt=m??w,ut=ee&&lt===`inline`&&T===`inline`,dt=W&&lt===`inline`&&S&&!ct,ft;t[22]!==c||t[23]!==Ke||t[24]!==x?(ft={content:c,metricTags:Ke,widgetRefSeenAtMs:x},t[22]=c,t[23]=Ke,t[24]=x,t[25]=ft):ft=t[25];let{cancelFirstPaintFrame:pt,startRunMetrics:mt}=jt(ft),ht,gt;t[26]!==q||t[27]!==p?(ht=()=>{p?.(q)},gt=[q,p],t[26]=q,t[27]=p,t[28]=ht,t[29]=gt):(ht=t[28],gt=t[29]),(0,Q.useEffect)(ht,gt);let _t,vt;t[30]!==j||t[31]!==A||t[32]!==k.callbacks?(_t=()=>{ue.current=A,de.current=j,pe.current=k.callbacks},vt=[j,A,k.callbacks],t[30]=j,t[31]=A,t[32]=k.callbacks,t[33]=_t,t[34]=vt):(_t=t[33],vt=t[34]),o(_t,vt);let yt;t[35]===Symbol.for(`react.memo_cache_sentinel`)?(yt=e=>{D.current===e&&E.current?.updateAppBlockMessenger?.(Qe(e,ue.current,de.current))},t[35]=yt):yt=t[35];let bt=O(yt),xt;t[36]===bt?xt=t[37]:(xt=e=>{let t=D.current;if(t==null)return;let n=Ze(e,t),r=n&&pe.current.get(n.name);if(n!=null&&r){let e=()=>{P.postTask(()=>bt(t))};try{Promise.resolve(r(...n.args)).then(e,e)}catch{e()}}},t[36]=bt,t[37]=xt);let St=O(xt),Ct;t[38]!==M||t[39]!==q||t[40]!==bt?(Ct=()=>{let e=D.current;!q||!M||e==null||bt(e)},t[38]=M,t[39]=q,t[40]=bt,t[41]=Ct):Ct=t[41];let wt;t[42]!==j||t[43]!==A||t[44]!==M||t[45]!==q||t[46]!==bt?(wt=[j,A,M,q,bt],t[42]=j,t[43]=A,t[44]=M,t[45]=q,t[46]=bt,t[47]=wt):wt=t[47],(0,Q.useEffect)(Ct,wt);let Tt,Dt;t[48]!==q||t[49]!==m?(Tt=()=>{!q||m==null||E.current?.updateAppBlockSurface?.(m)},Dt=[q,m],t[48]=q,t[49]=m,t[50]=Tt,t[51]=Dt):(Tt=t[50],Dt=t[51]),(0,Q.useEffect)(Tt,Dt);let kt,At;t[52]===Symbol.for(`react.memo_cache_sentinel`)?(kt=()=>({clearCapturedConsoleMessages:()=>{xe.current=[]},captureScreenshotDataUrl:async()=>(await E.current?.screenshot())?.imageBase64??null,focus:()=>{E.current?.focus()}}),At=[],t[52]=kt,t[53]=At):(kt=t[52],At=t[53]),(0,Q.useImperativeHandle)(g,kt,At);let Mt;t[54]===Symbol.for(`react.memo_cache_sentinel`)?(Mt=()=>{ve.current!=null&&(window.clearTimeout(ve.current),ve.current=null)},t[54]=Mt):Mt=t[54];let J=O(Mt),Nt;t[55]===Symbol.for(`react.memo_cache_sentinel`)?(Nt=()=>{ye.current!=null&&(window.clearTimeout(ye.current),ye.current=null)},t[55]=Nt):Nt=t[55];let Y=O(Nt),Pt;t[56]!==q||t[57]!==W?(Pt=()=>{if(!W||!q||R.current==null)return;let e=L.current,t=E.current;if(e==null||t?.updateAppBlockStream==null||me.current)return;let n=_e.current;L.current=null,I.current=Et(),ge.current=e.html,e.isFinal&&(me.current=!0);let r=()=>_e.current!==n||R.current==null?Promise.resolve():t.updateAppBlockStream?.(e)??Promise.resolve(),i=V.current,a=i==null?r():i.then(r);V.current=a,a.then(()=>{V.current===a&&(V.current=null);let t=R.current;_e.current!==n||t==null||(vr(e.html)&&t.markFirstPaint(),e.isFinal&&(t.reportPayloadSize(e.html),je({status:`finalized`,html:e.html})))},e=>{V.current===a&&(V.current=null),_e.current===n&&(e instanceof DOMException&&e.name===`AbortError`||B.current?.(`stream_update`,Ot(e)))})},t[56]=q,t[57]=W,t[58]=Pt):Pt=t[58];let Ft=O(Pt),It;t[59]!==H||t[60]!==u||t[61]!==J||t[62]!==Y||t[63]!==c||t[64]!==M||t[65]!==we||t[66]!==Te||t[67]!==Me||t[68]!==S||t[69]!==Oe||t[70]!==f||t[71]!==p||t[72]!==m||t[73]!==G||t[74]!==Ae.status||t[75]!==U||t[76]!==W||t[77]!==mt||t[78]!==C||t[79]!==w||t[80]!==Ee?(It=()=>{if(!we)return;if(Ae.status===`failed`){if(S)return;je({status:`static`}),Je(Lr);return}(Me||U&&Ae.status!==`static`)&&je({status:`static`});let e=W&&E.current?.updateAppBlockStream!=null;if(W&&!e){S||je({status:`static`});return}N.current=!0,me.current=!1,F.current=null,I.current=null,ge.current=null,L.current=null,R.current=null,B.current=null,V.current=null,Y(),_e.current+=1;let t=_e.current;J(),nt(null),D.current=M?crypto.randomUUID():null;let{expectReadySignal:n,html:r,frameColorScheme:i}=un(c,Ee,Oe,H,w,{loadTailwind:Te,progressiveStreaming:e,syncPresentationSurface:m!=null,styleMode:C}),a=!1,o=!1,s=!1,l=!1,d=!1,h=()=>_e.current===t,g=mt(h,{deferFirstPaint:e,deferPayloadSize:e});e&&(R.current=g);let _=e=>{!u||f==null||!h()||(xe.current=e,!l&&(l=!0,P.postTask(()=>{l=!1,h()&&f(xe.current)},{priority:`background`})))},v=e=>{!h()||a||s||(a=!0,J(),g.markReady(e),!d&&(d=!0,P.postTask(()=>{d=!1,!(!h()||s)&&(o=!0,nt({signature:G,status:`ready`}))},{priority:`background`})))},y=(t,n)=>{!h()||s||(s=!0,J(),Y(),L.current=null,R.current=null,e&&je({status:`failed`}),nt({signature:G,status:o?`failed_after_ready`:`failed`,readyTimedOut:n===`ready_timeout`}),g.reportFailure(t,n),P.postTask(()=>{h()&&(e?p?.(!1):p?.(!1,`failure`))},{priority:`background`}))};B.current=y,xe.current=[],_([]),ve.current=window.setTimeout(()=>{y(`sandbox_eval`,`ready_timeout`)},Ur),(async()=>{let t=E.current?.evalAsync({code:r,...D.current==null?{}:{additionalGlobals:{__appBlockMessenger:Qe(D.current,ue.current,de.current)}},expectReadySignal:n,language:`html`,frameColorScheme:i,shouldPreservePreviewOnFatalError:()=>h()&&e&&o});if(t==null){y(`sandbox_eval`,`missing_generator`);return}for(;;){let e=await t.next();if(e.done){h()&&!a&&y(`sandbox_eval`,`generator_completed_without_ready`);break}h()&&(_([...xe.current,e.value]),e.value.type===Xe.ENVIRONMENT_STATUS&&e.value.status===et.RUNNING_CODE&&v(`running_code`),e.value.type===Xe.RUN_COMPLETE&&(e.value.wasFatalError?y(`runtime`,`fatal_runtime_error`):(v(`run_complete`),g.reportSuccess(`run_complete`))),await P.yield())}})().catch(e=>{h()&&(e instanceof DOMException&&e.name===`AbortError`||y(`sandbox_eval`,Ot(e)))})},t[59]=H,t[60]=u,t[61]=J,t[62]=Y,t[63]=c,t[64]=M,t[65]=we,t[66]=Te,t[67]=Me,t[68]=S,t[69]=Oe,t[70]=f,t[71]=p,t[72]=m,t[73]=G,t[74]=Ae.status,t[75]=U,t[76]=W,t[77]=mt,t[78]=C,t[79]=w,t[80]=Ee,t[81]=It):It=t[81];let X=O(It),Lt;t[82]!==J||t[83]!==Y?(Lt=()=>{_e.current+=1,N.current=!1,me.current=!1,F.current=null,ge.current=null,L.current=null,R.current=null,B.current=null,V.current=null,J(),Y(),nt(null),Je(Ir)},t[82]=J,t[83]=Y,t[84]=Lt):Lt=t[84];let Rt=O(Lt),zt;t[85]===lt?zt=t[86]:(zt=lt===`inline`?{margin:-4,width:`calc(100% + ${Hr*2}px)`}:void 0,t[85]=lt,t[86]=zt);let Bt=zt,Vt;t[87]!==pt||t[88]!==J||t[89]!==Y||t[90]!==X?(Vt=()=>{X();let e=E.current;return()=>{_e.current+=1,D.current=null,R.current=null,B.current=null,V.current=null,J(),Y(),pt(),e?.stop()}},t[87]=pt,t[88]=J,t[89]=Y,t[90]=X,t[91]=Vt):Vt=t[91];let Ht;t[92]!==pt||t[93]!==J||t[94]!==Y||t[95]!==we||t[96]!==G||t[97]!==X||t[98]!==qe?(Ht=[pt,J,Y,we,G,X,qe],t[92]=pt,t[93]=J,t[94]=Y,t[95]=we,t[96]=G,t[97]=X,t[98]=qe,t[99]=Ht):Ht=t[99],(0,Q.useEffect)(Vt,Ht);let Ut,Wt;t[100]!==S||t[101]!==X||t[102]!==W?(Ut=()=>{!W||S||N.current||E.current?.updateAppBlockStream!=null||X()},Wt=[S,X,W],t[100]=S,t[101]=X,t[102]=W,t[103]=Ut,t[104]=Wt):(Ut=t[103],Wt=t[104]),(0,Q.useEffect)(Ut,Wt);let Gt,Kt;if(t[105]!==Y||t[106]!==c||t[107]!==Ft||t[108]!==ct||t[109]!==q||t[110]!==S||t[111]!==W||t[112]!==T?(Gt=()=>{if(!W||!q||ct||me.current||E.current?.updateAppBlockStream==null)return;let e=S?_r(c):c;if(S&&(L.current?.html??ge.current)===e)return;if(L.current={html:e,isFinal:!S},!S){Y(),Ft();return}let t=I.current;if(t==null&&T===`artifact`&&(F.current??=Et(),t=F.current),t==null){Ft();return}let n=T===`artifact`?Gr:Wr,r=Et()-t;if(r>=n){Ft();return}return ye.current=window.setTimeout(()=>{ye.current=null,Ft()},n-r),Y},Kt=[Y,c,Ft,ct,q,S,W,T],t[105]=Y,t[106]=c,t[107]=Ft,t[108]=ct,t[109]=q,t[110]=S,t[111]=W,t[112]=T,t[113]=Gt,t[114]=Kt):(Gt=t[113],Kt=t[114]),(0,Q.useEffect)(Gt,Kt),!we){let e;return t[115]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(Nn,{}),t[115]=e):e=t[115],e}let qt=ut&&`flex-col`,Jt=lt===`inline`&&(Ne?`h-0 min-h-0 overflow-hidden`:`min-h-[120px] overflow-visible`),Yt=lt===`stage`&&`h-full min-h-0`,Xt;t[116]!==qt||t[117]!==Jt||t[118]!==Yt?(Xt=s(`flex w-full`,qt,Jt,Yt),t[116]=qt,t[117]=Jt,t[118]=Yt,t[119]=Xt):Xt=t[119];let Zt;t[120]!==ut||t[121]!==dt||t[122]!==y?(Zt=ut?(0,$.jsx)(Wn,{isVisible:dt,title:y}):null,t[120]=ut,t[121]=dt,t[122]=y,t[123]=Zt):Zt=t[123];let Qt=!S&&!W&&(at===`failed`||at===`failed_after_ready`)&&$e?.readyTimedOut||void 0,$t=lt===`inline`?`flex-none`:`w-full`,en=dt&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,tn;t[124]!==$t||t[125]!==en?(tn=s(`relative min-w-0`,$t,en),t[124]=$t,t[125]=en,t[126]=tn):tn=t[126];let nn=`${qe}:${Te?`network-enabled`:`network-disabled`}`,rn;t[127]!==n||t[128]!==a||t[129]!==l?(rn=JSON.stringify([a??null,n??l]),t[127]=n,t[128]=a,t[129]=l,t[130]=rn):rn=t[130];let an;t[131]===re?an=t[132]:(an=re.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[131]=re,t[132]=an);let on=Te?`deps-only`:`none`,sn=Te?Kr:qr,cn=ot?0:-1,dn=M?St:void 0,fn=lt===`inline`&&C===`open`,pn=lt!==`stage`,mn=W?Pe:Br,hn;t[133]!==l||t[134]!==X||t[135]!==Ve||t[136]!==nn||t[137]!==rn||t[138]!==an||t[139]!==on||t[140]!==sn||t[141]!==cn||t[142]!==dn||t[143]!==fn||t[144]!==pn||t[145]!==mn?(hn=(0,$.jsx)(it,{id:l,sandboxOriginId:rn,title:an,visuallyHidden:!1,networkPolicy:on,additionalResourceDomains:Ve,sandboxPermissions:sn,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:cn,onRetryCodeRun:X,onAppBlockMessage:dn,transparentBackground:fn,useIntrinsicHeight:pn,intrinsicHeightFallback:mn,ref:E},nn),t[133]=l,t[134]=X,t[135]=Ve,t[136]=nn,t[137]=rn,t[138]=an,t[139]=on,t[140]=sn,t[141]=cn,t[142]=dn,t[143]=fn,t[144]=pn,t[145]=mn,t[146]=hn):hn=t[146];let gn;t[147]===dt?gn=t[148]:(gn=dt?(0,$.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 z-10 cursor-wait`}):null,t[147]=dt,t[148]=gn);let _n;t[149]!==st||t[150]!==ct||t[151]!==ot||t[152]!==W?(_n=!ot&&!ct&&(!W||st)?(0,$.jsx)(Rr,{}):null,t[149]=st,t[150]=ct,t[151]=ot,t[152]=W,t[153]=_n):_n=t[153];let vn;t[154]!==ct||t[155]!==Rt?(vn=ct?(0,$.jsx)(zr,{onRetry:Rt}):null,t[154]=ct,t[155]=Rt,t[156]=vn):vn=t[156];let yn;t[157]!==Bt||t[158]!==dt||t[159]!==Qt||t[160]!==tn||t[161]!==hn||t[162]!==gn||t[163]!==_n||t[164]!==vn?(yn=(0,$.jsxs)(`div`,{"aria-busy":dt,"data-app-block-ready-timeout":Qt,className:tn,style:Bt,children:[hn,gn,_n,vn]}),t[157]=Bt,t[158]=dt,t[159]=Qt,t[160]=tn,t[161]=hn,t[162]=gn,t[163]=_n,t[164]=vn,t[165]=yn):yn=t[165];let bn;t[166]!==dt||t[167]!==T?(bn=dt&&T===`artifact`?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[166]=dt,t[167]=T,t[168]=bn):bn=t[168];let xn;return t[169]!==Xt||t[170]!==Zt||t[171]!==yn||t[172]!==bn?(xn=(0,$.jsxs)(`div`,{className:Xt,children:[Zt,yn,bn]}),t[169]=Xt,t[170]=Zt,t[171]=yn,t[172]=bn,t[173]=xn):xn=t[173],xn}function Ir(e){return e+1}function Lr(e){return e+1}function Rr(){"use forget";let e=(0,Z.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsx)(re,{className:`icon-sm text-token-text-tertiary`}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,role:`status`,children:[t,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})})]}),e[1]=n):n=e[1],n}function zr(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(z,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(h,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii=e((()=>{Z=L(),me(),q(),Se(),He(),le(),w(),at(),g(),Ke(),Ge(),Ue(),we(),nt(),j(),Le(),dt(),K(),d(),M(),y(),H(),oe(),ee(),_(),k(),st(),ft(),Ie(),$e(),l(),ce(),Q=n(V()),I(),yn(),Rt(),St(),Mn(),Ve(),In(),Cn(),Gn(),wt(),Ce(),Ne(),Vt(),hr(),$=ge(),Br=432,Vr=120,Hr=4,Ur=15e3,Wr=100,Gr=350,Kr=`allow-scripts allow-same-origin allow-forms`,qr=`allow-scripts allow-same-origin`,Jr=12e3,Yr=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Xr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Zr=new Set([`svg`,`path`]),Qr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),$r=/<script(?:\s|>)/i,ei=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,ti=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,ni=e=>{"use forget";let t=(0,Z.c)(13),{canOpen:n,conversation:r,expandButtonRef:i,isReady:a,onOpen:o,target:s}=e,c;t[0]!==n||t[1]!==i||t[2]!==o?(c=n&&o!=null?(0,$.jsx)(Pr,{ref:i,className:`shrink-0`,onClick:o}):null,t[0]=n,t[1]=i,t[2]=o,t[3]=c):c=t[3];let l=c;if(r==null)return l;let u;t[4]===s?u=t[5]:(u=s??{contentReferenceIndex:-1,messageId:``},t[4]=s,t[5]=u);let d=u,p=a&&s!=null,m;t[6]===l?m=t[7]:(m=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(f,{label:n,children:(0,$.jsx)(h,{type:`button`,icon:We,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),l]}):l},t[6]=l,t[7]=m);let g;return t[8]!==d||t[9]!==r||t[10]!==p||t[11]!==m?(g=(0,$.jsx)(pt,{category:Ae.AppBlock,conversation:r,isReady:p,target:d,children:m}),t[8]=d,t[9]=r,t[10]=p,t[11]=m,t[12]=g):g=t[12],g},ri=e=>{"use forget";let t=(0,Z.c)(9),{children:n,conversation:r,isReady:i,target:a}=e;if(r==null)return n;let o;t[0]===a?o=t[1]:(o=a??{contentReferenceIndex:-1,messageId:``},t[0]=a,t[1]=o);let s=o,c=i&&a!=null,l;t[2]===n?l=t[3]:(l=e=>(0,$.jsxs)(`div`,{className:`group/keyboard-or-hover relative`,children:[n,e.isVisible?(0,$.jsx)(`div`,{className:`pointer-events-none absolute end-2 top-2 z-10`,children:(0,$.jsx)(`div`,{className:`cant-hover:hidden`,children:(0,$.jsx)(mt,{action:e})})}):null]}),t[2]=n,t[3]=l);let u;return t[4]!==s||t[5]!==r||t[6]!==c||t[7]!==l?(u=(0,$.jsx)(pt,{category:Ae.InlineAppBlock,conversation:r,isReady:c,target:s,children:l}),t[4]=s,t[5]=r,t[6]=c,t[7]=l,t[8]=u):u=t[8],u}}));export{bt as S,Rt as _,ii as a,St as b,sr as c,On as d,Mn as f,Et as g,Bt as h,gr as i,cr as l,zt as m,Rr as n,lr as o,Vt as p,Fr as r,hr as s,yr as t,Dn as u,Ct as v,xt as x,wt as y};
//# sourceMappingURL=e3b746a6-l8uml6yjeepp1ju2.js.map