const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-kwqypbepmt136u7k.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-gzgth5b0mjmplu0i.js","assets/2340486e-baqct44cv17onimj.js","assets/conversation-small-dg1eim73heyq8lh8.js","assets/30901919-icoej5sxf9a1zjrs.js","assets/c470f5ab-i0kg632demqsloah.js","assets/0e5afe53-eo8w3u2qzs9d9p36.js","assets/conversation-small-qotqnpm2.css","assets/8b34dbc2-neee6igoxkazgpr7.js","assets/82782bc9-n2bb07r51e6or0nm.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{$D as r,A2 as i,AD as a,B1 as o,DK as s,EK as c,JZ as l,Kg as u,L2 as d,MB as f,MD as p,MZ as m,M_ as h,Mx as g,NB as _,Nx as v,PD as y,SM as b,T2 as x,TH as S,W1 as C,WD as ee,cF as w,dF as te,dc as T,e4 as E,i4 as ne,id as D,j2 as O,jZ as k,j_ as A,lc as re,nK as j,nd as M,oF as ie,qZ as N,qa as ae,qg as P,r4 as oe,rK as se,sF as F,to as ce,wD as I,wH as le,wX as L,yX as R,z2 as ue}from"./4813494d-gzgth5b0mjmplu0i.js";import{Fn as z,In as B,Mn as de,Nn as V,On as H,Pn as U,bn as W,fn as fe,pn as pe}from"./2340486e-baqct44cv17onimj.js";import{$3 as me,$hn as he,Gyt as ge,Hu as _e,Jn as ve,Kyt as ye,Mpn as be,Q3 as xe,Qhn as Se,Tx as G,Uu as Ce,X3 as we,Z3 as Te,a6 as Ee,c6 as De,c_n as Oe,e6 as ke,eD as K,i6 as Ae,jpn as je,l6 as Me,o_n as Ne,qE as Pe,qn as Fe,qyt as Ie,r6 as Le,rD as Re,u6 as q,wx as ze}from"./conversation-small-dg1eim73heyq8lh8.js";import{AE as Be,hw as Ve,iS as He,kE as Ue,mw as We,rS as Ge}from"./30901919-icoej5sxf9a1zjrs.js";import{i as Ke,l as qe,n as Je,s as Ye,t as Xe,u as Ze}from"./8d846022-dneku8yw6gysg6ku.js";import{i as Qe,n as $e,r as et}from"./91969468-kuaa7xfflsq2uonz.js";import{n as tt,t as nt}from"./4d271a7b-igv5impdg4m3np0s.js";import{n as rt,r as it}from"./58bafdef-expkuefbye6m65a0.js";import{a as J,i as at}from"./e01e2324-d34b0o0tod0gln09.js";import{i as ot,t as st}from"./5dc32f04-cfxrux5xn7bvlnc8.js";import{n as ct,t as lt}from"./066a83b9-kzrsldvdqhwmd3ep.js";import{i as ut,n as dt,r as ft,t as pt}from"./9eb56efa-gl5gjmhz2wqpthf3.js";import{i as mt,n as ht,r as gt,t as _t}from"./cc79834b-k0faqap53qitk0zi.js";function vt(){return x(`2779568043`)}function yt(){return x(`3864712762`)}function bt(){return i(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var xt=e((()=>{O()}));function St({messageId:e,refIndex:t}){return`appblock:${e}:${t}`}var Ct=e((()=>{}));function wt({errorSource:e,errorType:t,networkPolicy:n,outcome:r,readySignal:i,renderMode:a,surface:o,variant:s}){let c={network_policy:n,surface:o};return e!=null&&(c.error_source=e),t!=null&&(c.error_type=t),r!=null&&(c.outcome=r),i!=null&&(c.ready_signal=i),a!=null&&(c.render_mode=a),s!=null&&(c.variant=s),c}function Tt(){return typeof performance<`u`?performance.now():Date.now()}function Et(e){return new TextEncoder().encode(e).byteLength/1024}function Dt(e){return e instanceof Error?e.name:`unknown`}function Ot(e,t,n=1){ne.count(E.APP_BLOCKS,e,wt(t),n)}function kt(e,t,n){ne.hist(E.APP_BLOCKS,e,wt(n),t)}function At({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,jt.useRef)(Tt()),i=(0,jt.useRef)(null),a=(0,jt.useRef)(!1),o=(0,jt.useRef)(!1),s=F(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=F((n=e)=>{o.current||(o.current=!0,kt(X,Et(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:F((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=Tt(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),Ot(Ft,t);let _=(e,n)=>{f||(f=!0,Ot(Pt,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=Tt();kt(Nt,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,kt(Y,s-r.current,t),n!=null&&kt(Lt,s-n,t))},y=(e,t)=>{if(s(),typeof window>`u`){v(e,t);return}i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,t)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=Tt(),g=n,kt(It,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{!e()||p||(p=!0,s(),Ot(Mt,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var jt,Y,Mt,X,Nt,Pt,Ft,It,Lt,Rt=e((()=>{oe(),ie(),jt=n(B()),Y=`app_block.first_render_time_ms`,Mt=`app_block.load.failure`,X=`app_block.payload_size_kb`,Nt=`app_block.ready_to_first_paint_ms`,Pt=`app_block.render.outcome`,Ft=`app_block.render.start`,It=`app_block.sandbox_eval_to_ready_ms`,Lt=`app_block.widget_ref_to_first_paint_ms`}));function zt(e){return e==="default"||e===`open`?e:null}function Bt({explicitStyleMode:e,libraryFileId:t}){return e??(t==null?`default`:`open`)}var Vt=e((()=>{})),Ht,Ut=e((()=>{Ht=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),Wt=e((()=>{})),Gt,Kt=e((()=>{Wt(),Gt=`/cdn/assets/app-block-sandbox-foundation-l4fcvweu.css`})),qt,Jt=e((()=>{qt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){--app-block-slider-track:color-mix(in srgb, var(--viz-text) 16%, transparent);--app-block-slider-thumb-shadow:color-mix(in srgb, var(--viz-text) 18%, transparent);appearance:none;background:linear-gradient(var(--app-block-slider-track), var(--app-block-slider-track)) center / 100% 4px no-repeat;cursor:pointer;border:0;border-radius:9999px;width:100%;height:28px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.5}:where(input[type=range])::-webkit-slider-runnable-track{background:0 0;border:0;height:28px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;margin-top:5px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-webkit-slider-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-webkit-slider-thumb{transform:scale(1.06)}:where(input[type=range])::-moz-range-track{background:var(--app-block-slider-track);border:0;border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-progress{background:var(--viz-accent);border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-thumb{border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-moz-range-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-moz-range-thumb{transform:scale(1.06)}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),Yt=e((()=>{})),Xt,Zt=e((()=>{Yt(),Xt=`/cdn/assets/app-block-sandbox-iimeogb3.css`}));function Qt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var $t=e((()=>{}));function en(e){return String.raw(dn||=Qt([`<script>
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
<\/script>`]))}));function bn(){"use forget";let e=(0,xn.useContext)(Sn);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var xn,Sn,Cn=e((()=>{xn=n(B()),Sn=(0,xn.createContext)(null)})),wn,Tn=e((()=>{se(),pe(),wn=j(()=>fe(()=>import(`./7aa2b76f-kwqypbepmt136u7k.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}));function En(e){"use forget";let t=(0,kn.c)(40),{additionalResourceDomains:n,children:r,code:i,conversationId:a,source:o,styleMode:s,title:c}=e,l=`app-block:${o.appBlockId}:${(0,An.useId)()}`,u=(0,An.useRef)(null),[d,f]=(0,An.useState)(null),p=o.appBlockId,h=o.libraryFileId,g=o.messageId,_=o.refIndex,v=a??null,y;t[0]!==v||t[1]!==p?(y={appBlockId:p,conversationId:v},t[0]=v,t[1]=p,t[2]=y):y=t[2];let b=y,x=m(we),S;t[3]!==x||t[4]!==b?(S=ke(x,b),t[3]=x,t[4]=b,t[5]=S):S=t[5];let C=S,ee=x?.appBlockId===p&&x.conversationId===v&&(x.isOriginalVersion===!0||x.versionNumber!=null),w=C||ee,te;t[6]!==x||t[7]!==l||t[8]!==b?(te=Le(x,b,l),t[6]=x,t[7]=l,t[8]=b,t[9]=te):te=t[9];let T=te,E;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(E=()=>{u.current?.focus()},t[10]=E):E=t[10];let ne=E,D=d?.supportsAtomicMove?d:void 0,O;t[11]!==p||t[12]!==h||t[13]!==g||t[14]!==_?(O={appBlockId:p,libraryFileId:h,messageId:g,refIndex:_},t[11]=p,t[12]=h,t[13]=g,t[14]=_,t[15]=O):O=t[15];let k;t[16]!==n||t[17]!==i||t[18]!==s||t[19]!==D||t[20]!==O||t[21]!==c?(k={additionalResourceDomains:n,code:i,focusOnClose:ne,sharedPreview:D,source:O,styleMode:s,title:c},t[16]=n,t[17]=i,t[18]=s,t[19]=D,t[20]=O,t[21]=c,t[22]=k):k=t[22];let A=k,re,j;t[23]!==A||t[24]!==C||t[25]!==b?(re=()=>{C&&Ae(b,A)},j=[A,C,b],t[23]=A,t[24]=C,t[25]=b,t[26]=re,t[27]=j):(re=t[26],j=t[27]),(0,An.useEffect)(re,j);let M;t[28]!==A||t[29]!==T||t[30]!==b?(M=()=>{Te(b,T,A)},t[28]=A,t[29]=T,t[30]=b,t[31]=M):M=t[31];let ie=M,N;t[32]!==w||t[33]!==ee||t[34]!==ie||t[35]!==d?(N={isExpanded:w,isViewingHistoricalVersion:ee,openExpandedView:ie,setSharedPreview:f,sharedPreview:d,triggerRef:u},t[32]=w,t[33]=ee,t[34]=ie,t[35]=d,t[36]=N):N=t[36];let ae=N,P;return t[37]!==r||t[38]!==ae?(P=(0,jn.jsx)(Sn.Provider,{value:ae,children:r}),t[37]=r,t[38]=ae,t[39]=P):P=t[39],P}function Dn(e){"use forget";let t=(0,kn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,headerTitleContent:o,title:s}=e,c=gt(),l;t[0]===i?l=t[1]:(l=()=>i==null?0:_e(i).height$()??0,t[0]=i,t[1]=l);let u=m(l),d=c===`fullscreen`&&n&&i!=null?u:0,f=o??s,p;t[2]===f?p=t[3]:(p=(0,jn.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:f}),t[2]=f,t[3]=p);let h;t[4]!==a||t[5]!==p?(h=(0,jn.jsxs)(_t.Header,{className:`pb-1`,children:[p,a]}),t[4]=a,t[5]=p,t[6]=h):h=t[6];let g;t[7]===d?g=t[8]:(g={paddingBottom:d},t[7]=d,t[8]=g);let _;t[9]===r?_=t[10]:(_=(0,jn.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=_);let v;t[11]!==g||t[12]!==_?(v=(0,jn.jsx)(_t.Body,{className:`bg-token-bg-primary overflow-hidden`,style:g,children:_}),t[11]=g,t[12]=_,t[13]=v):v=t[13];let y;return t[14]!==h||t[15]!==v?(y=(0,jn.jsxs)(jn.Fragment,{children:[h,v]}),t[14]=h,t[15]=v,t[16]=y):y=t[16],y}function On(e){"use forget";let t=(0,kn.c)(5),{conversation:n,paneId:r}=e,i=mt(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,jn.jsx)(wn,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var kn,An,jn,Mn=e((()=>{kn=W(),Ce(),ht(),k(),An=n(B()),Cn(),me(),Tn(),jn=z()}));function Nn(){"use forget";let e=(0,Pn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,Fn.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,Fn.jsx)(H,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var Pn,Fn,In=e((()=>{Pn=W(),V(),Fn=z()}));function Ln(e,t){"use forget";let n=(0,zn.c)(39),r=t===void 0||t,i=U(),a;n[0]!==i||n[1]!==e?(a=e?i.formatMessage(Un.generatingApp,{title:e}):i.formatMessage(Un.creatingInterface),n[0]=i,n[1]=e,n[2]=a):a=n[2];let o=a,s;n[3]===i?s=n[4]:(s=i.formatMessage(Un.sketchingInterface),n[3]=i,n[4]=s);let c;n[5]===i?c=n[6]:(c=i.formatMessage(Un.shapingLayout),n[5]=i,n[6]=c);let l;n[7]===i?l=n[8]:(l=i.formatMessage(Un.arrangingPieces),n[7]=i,n[8]=l);let u;n[9]===i?u=n[10]:(u=i.formatMessage(Un.polishingVisuals),n[9]=i,n[10]=u);let d;n[11]===i?d=n[12]:(d=i.formatMessage(Un.tuningInputs),n[11]=i,n[12]=d);let f;n[13]===i?f=n[14]:(f=i.formatMessage(Un.addingInteractivity),n[13]=i,n[14]=f);let p;n[15]===i?p=n[16]:(p=i.formatMessage(Un.wiringControls),n[15]=i,n[16]=p);let m;n[17]===i?m=n[18]:(m=i.formatMessage(Un.composingInteractions),n[17]=i,n[18]=m);let h;n[19]===i?h=n[20]:(h=i.formatMessage(Un.calibratingPreview),n[19]=i,n[20]=h);let g;n[21]===i?g=n[22]:(g=i.formatMessage(Un.refiningDetails),n[21]=i,n[22]=g);let _;n[23]!==o||n[24]!==h||n[25]!==g||n[26]!==s||n[27]!==c||n[28]!==l||n[29]!==u||n[30]!==d||n[31]!==f||n[32]!==p||n[33]!==m?(_=[o,s,c,l,u,d,f,p,m,h,g],n[23]=o,n[24]=h,n[25]=g,n[26]=s,n[27]=c,n[28]=l,n[29]=u,n[30]=d,n[31]=f,n[32]=p,n[33]=m,n[34]=_):_=n[34];let v=_,[y,b]=(0,Bn.useState)(0),x,S;return n[35]!==r||n[36]!==v.length?(x=()=>{if(!r)return;let e=window.setInterval(()=>{b(e=>Math.min(e+1,v.length-1))},Hn);return()=>{window.clearInterval(e)}},S=[r,v.length],n[35]=r,n[36]=v.length,n[37]=x,n[38]=S):(x=n[37],S=n[38]),(0,Bn.useEffect)(x,S),v[y]??v[0]??``}function Rn(e){"use forget";let t=(0,zn.c)(2),{title:n}=e,r=Ln(n),i;return t[0]===r?i=t[1]:(i=(0,Vn.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,role:`status`,children:(0,Vn.jsx)(st,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:r})}),t[0]=r,t[1]=i),i}var zn,Bn,Vn,Hn,Un,Wn,Gn=e((()=>{zn=W(),ot(),l(),Bn=n(B()),V(),Vn=z(),Hn=2800,Un=de({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}}),Wn=e=>{"use forget";let t=(0,zn.c)(11),{isVisible:n,title:r}=e,i=Ln(r,n),a=!n,o=n?`grid-rows-[1fr] opacity-100`:`grid-rows-[0fr] opacity-0`,s;t[0]===o?s=t[1]:(s=N(`grid shrink-0 transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none`,o),t[0]=o,t[1]=s);let c=n&&`loading-shimmer-pure-text motion-reduce:animate-none`,l;t[2]===c?l=t[3]:(l=N(`text-token-text-secondary inline-block font-sans font-medium`,c),t[2]=c,t[3]=l);let u;t[4]!==i||t[5]!==l?(u=(0,Vn.jsx)(`div`,{className:`min-h-0 overflow-hidden`,children:(0,Vn.jsx)(`div`,{className:`pb-3`,children:(0,Vn.jsx)(`span`,{className:l,children:i})})}),t[4]=i,t[5]=l,t[6]=u):u=t[6];let d;return t[7]!==a||t[8]!==s||t[9]!==u?(d=(0,Vn.jsx)(`div`,{"aria-atomic":`true`,"aria-hidden":a,"aria-live":`polite`,className:s,role:`status`,children:u}),t[7]=a,t[8]=s,t[9]=u,t[10]=d):d=t[10],d}}));function Kn(e){let t=new Map,n=new Map,r=null,i=null;for(let a of e){let e=a.metadata?.content_references;if(Array.isArray(e)&&e.forEach((e,r)=>{let i=Jn({contentReference:e,messageId:a.id,refIndex:r});i!=null&&(t.set(i.appBlockId,i),i.libraryFileId!=null&&n.set(i.libraryFileId,i.appBlockId))}),a.author.role===o.User){(a.metadata?.attachments??[]).forEach((e,r)=>{let i=qn({attachment:e,messageId:a.id,refIndex:r});i==null||i.libraryFileId==null||n.has(i.libraryFileId)||(t.set(i.appBlockId,i),n.set(i.libraryFileId,i.appBlockId))});let e=a.metadata?.focused_artifact;if(e!=null){let n=e.type===ar?t.get(e.artifact_id)??null:null;r=n!=null&&n.messageId===e.source_message_id&&n.refIndex===e.source_ref_index&&(n.libraryFileId==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e.library_file_id}else{let e=a.metadata?.open_in_app_block_view,n=e==null?null:t.get(e.app_block_id)??null;r=e!=null&&n!=null&&n.messageId===e.message_id&&n.refIndex===e.ref_index&&(n.libraryFileId==null||e.library_file_id==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e?.library_file_id??null}}let s=b(a);if(s?.status!==`created`)continue;let c=n.get(s.libraryFileId),l=c==null?null:t.get(c)??null;if(l==null&&s.origin!=null){let e=s.origin.messageId,n=[...t.values()].filter(t=>t.messageId===e);l=n.length===1?n[0]:null}l==null&&c==null&&r!=null&&r.libraryFileId==null&&(i==null||i===s.libraryFileId)&&(l=r),l!=null&&(l.libraryFileId==null&&l.content!=null&&nr(a)||(n.set(s.libraryFileId,l.appBlockId),t.set(l.appBlockId,{...l,content:null,currentContentFileId:s.newContentFileId,latestPatchMessageId:a.id,libraryFileId:s.libraryFileId,libraryFileVersionNumber:s.newVersionNumber})))}return t}function qn({attachment:e,messageId:t,refIndex:n}){return e.library_artifact_type!==ar||e.library_file_id==null?null:{appBlockId:St({messageId:t,refIndex:n}),content:null,currentContentFileId:e.id??null,entrypoint:`index.html`,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:e.library_file_id,libraryFileName:e.name,libraryFileVersionNumber:null,mimeType:e.mime_type??null,messageId:t,refIndex:n,styleMode:null,title:e.name.replace(/\.html$/i,``)}}function Jn({contentReference:e,messageId:t,refIndex:n}){if(typeof e!=`object`||!e||!(`type`in e)||!(`category`in e)||e.type!==or||e.category!==ar||!(`data`in e))return null;let r=e.data;if(typeof r!=`object`||!r)return null;let i=Yn(r,`content`),a=Yn(r,`entrypoint`)??`index.html`,o=er(r,a),s=Zn(o,`library_file_id`);return i==null&&s==null?null:{appBlockId:Yn(r,`app_block_id`)??St({messageId:t,refIndex:n}),bundleVersion:Xn(r,`bundle_version`)??void 0,content:i,currentContentFileId:Zn(o,`current_content_file_id`),entrypoint:a,iconSvg:Yn(r,`icon_svg`),language:tr(),latestPatchMessageId:null,libraryFileId:s,libraryFileName:Zn(o,`library_file_name`),libraryFileVersionNumber:$n(Qn(o,`library_file_version_number`)),mimeType:Zn(o,`mime_type`),messageId:t,refIndex:n,styleMode:zt(Yn(r,`style_mode`)),title:Yn(r,`display_name`)??Yn(r,`title`)}}function Yn(e,t){let n=null;return t===`app_block_id`&&`app_block_id`in e&&(n=e.app_block_id),t===`content`&&`content`in e&&(n=e.content),t===`current_content_file_id`&&`current_content_file_id`in e&&(n=e.current_content_file_id),t===`display_name`&&`display_name`in e&&(n=e.display_name),t===`entrypoint`&&`entrypoint`in e&&(n=e.entrypoint),t===`icon_svg`&&`icon_svg`in e&&(n=e.icon_svg),t===`library_file_id`&&`library_file_id`in e&&(n=e.library_file_id),t===`library_file_name`&&`library_file_name`in e&&(n=e.library_file_name),t===`mime_type`&&`mime_type`in e&&(n=e.mime_type),t===`path`&&`path`in e&&(n=e.path),t===`style_mode`&&`style_mode`in e&&(n=e.style_mode),t===`title`&&`title`in e&&(n=e.title),typeof n==`string`&&n.trim()!==``?n:null}function Xn(e,t){if(t===`bundle_version`&&`bundle_version`in e){let t=e.bundle_version;if(typeof t==`number`)return t}if(t===`library_file_version_number`&&`library_file_version_number`in e){let t=e.library_file_version_number;if(typeof t==`number`)return t}return null}function Zn(e,t){return typeof e!=`object`||!e?null:Yn(e,t)}function Qn(e,t){return typeof e!=`object`||!e?null:Xn(e,t)}function $n(...e){for(let t of e)if(t!=null)return t;return null}function er(e,t){if(!(`files`in e)||!Array.isArray(e.files))return null;let n=null;for(let r of e.files)if(!(typeof r!=`object`||!r)&&Yn(r,`library_file_id`)!=null&&(n??=r,Yn(r,`path`)===t))return r;return n}function tr(){return`html`}function nr(e){let t=e.metadata?.shared_conversation_id;return typeof t==`string`&&t.trim()!==``}function rr(e,t){return e.appBlockId===t.appBlockId&&e.bundleVersion===t.bundleVersion&&e.content===t.content&&e.currentContentFileId===t.currentContentFileId&&e.entrypoint===t.entrypoint&&e.iconSvg===t.iconSvg&&e.language===t.language&&e.latestPatchMessageId===t.latestPatchMessageId&&e.libraryFileId===t.libraryFileId&&e.libraryFileName===t.libraryFileName&&e.libraryFileVersionNumber===t.libraryFileVersionNumber&&e.mimeType===t.mimeType&&e.messageId===t.messageId&&e.refIndex===t.refIndex&&e.styleMode===t.styleMode&&e.title===t.title}function ir(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e){let e=t.get(n);if(e==null||!rr(r,e))return!1}return!0}var ar,or,sr,cr=e((()=>{C(),p(),T(),Pe(),R(),Ct(),Vt(),ar=`app_block`,or=`client_defined_widget`,sr=I(e=>L(()=>Kn(re(e).flatMap(e=>e.messages)),{equals:ir}))}));function lr({appBlockId:e,conversation:t}){return t==null?null:sr(t).get(e)??null}function ur(e){return e?.serverId$()??void 0}function dr({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:ye(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function fr({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return ge({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:D(e)?`missing`:`failed`})}),()=>{a.abort()}}function pr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??mr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function mr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var hr=e((()=>{M(),Ie(),cr()})),gr=t({AppBlock:()=>yr,AppBlockPreviewLoadingState:()=>Rr,AppBlockSandboxPreview:()=>Fr});function _r(e){let t=e.search($r),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function vr(e){let t=_r(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(ei))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(ti)!=null}function yr(e){"use forget";let t=(0,Z.c)(118),{additionalResourceDomains:n,appBlockId:i,authoritativeCode:o,authoritativeSource:s,bind:c,code:l,collapseWhenSuperseded:u,currentContentFileId:d,displayMode:f,id:p,captureConsoleMessages:h,clientThreadId:g,iconSvg:_,isStreaming:v,isTurnStreaming:b,libraryFileId:x,libraryFileVersionNumber:S,messageId:C,onConsoleMessagesChange:ee,onReadyChange:w,progressiveStreaming:te,ref:T,refIndex:E,styleMode:ne,title:D,variant:O,widgetName:k,widgetRefSeenAtMs:A}=e,re=u===void 0||u,j=h!==void 0&&h,M=v!==void 0&&v,ie=b!==void 0&&b,N=te!==void 0&&te,ae=O===void 0?`inline`:O,P=y(),oe;t[0]===P?oe=t[1]:(oe=()=>P!=null&&be(P),t[0]=P,t[1]=oe);let se=m(oe),F;t[2]!==g||t[3]!==P?(F=g==null?P:a(g),t[2]=g,t[3]=P,t[4]=F):F=t[4];let I=F,le=C!=null&&E!=null?St({messageId:C,refIndex:E}):void 0,L=i??le??St({messageId:C??p,refIndex:E??0}),R=m(()=>K({conversation:P??null,instanceId:L,messageId:C,refIndex:E}))??f,ue=m(()=>s!=null||R!=null?null:lr({appBlockId:L,conversation:P??null})),z=s??ue,B;t[5]===P?B=t[6]:(B=()=>ur(P??null),t[5]=P,t[6]=B);let de=m(B),V=r(P?.id),H=de??V,U;t[7]!==d||t[8]!==x||t[9]!==S||t[10]!==H||t[11]!==z?(U=dr({currentContentFileId:d,libraryFileId:x,libraryFileVersionNumber:S,serverThreadId:H,source:z}),t[7]=d,t[8]=x,t[9]=S,t[10]=H,t[11]=z,t[12]=U):U=t[12];let W=U,[fe,pe]=(0,Q.useState)(null),[me,he]=(0,Q.useState)(0),_e;t[13]!==me||t[14]!==W.libraryContentKey?(_e=[W.libraryContentKey,me],t[13]=me,t[14]=W.libraryContentKey,t[15]=_e):_e=t[15];let ve=_e.join(`\0`),ye,Se;t[16]!==o||t[17]!==ve||t[18]!==W.contentFileId||t[19]!==W.libraryFileId||t[20]!==R||t[21]!==H?(ye=()=>{if(!(o!=null||R===`collapsed`))return fr({contentFileId:W.contentFileId,libraryContentKey:ve,libraryFileId:W.libraryFileId,onContentStateChange:pe,serverThreadId:H})},Se=[o,W.contentFileId,W.libraryFileId,ve,R,H],t[16]=o,t[17]=ve,t[18]=W.contentFileId,t[19]=W.libraryFileId,t[20]=R,t[21]=H,t[22]=ye,t[23]=Se):(ye=t[22],Se=t[23]),(0,Q.useEffect)(ye,Se);let G=pr({appBlockId:L,contentFileId:W.contentFileId,currentContentFileId:d,libraryContent:fe,libraryContentKey:ve,libraryFileId:x,libraryFileVersionNumber:S,source:z}),Ce=fe?.key===ve?fe:null,we;t[24]!==G?.libraryFileId||t[25]!==x?(we=()=>xe(G?.libraryFileId??x),t[24]=G?.libraryFileId,t[25]=x,t[26]=we):we=t[26];let Ee=m(we),De=G?.libraryFileVersionNumber??S,Oe=Ee!=null&&(De==null||Ee.versionNumber>=De)?Ee.code:void 0,ke=Oe??o??G?.content??l??null,Ae=G?.iconSvg??_??null,je=G?.libraryFileId??x,Me=je==null&&o==null&&Oe==null&&d==null&&z?.currentContentFileId==null&&z?.latestPatchMessageId==null,Ne;t[27]!==Me||t[28]!==l||t[29]!==C||t[30]!==ke||t[31]!==E||t[32]!==z?(Ne=Me?z==null?C!=null&&E!=null&&l!=null&&ke===l?{messageId:C,refIndex:E}:null:z.messageId.length>0&&z.content!=null&&ke===z.content?{messageId:z.messageId,refIndex:z.refIndex}:null:null,t[27]=Me,t[28]=l,t[29]=C,t[30]=ke,t[31]=E,t[32]=z,t[33]=Ne):Ne=t[33];let Pe=Ne,Fe=ae===`artifact`,Ie=G?.styleMode??ne??(Fe&&N?`open`:void 0),Le;t[34]!==je||t[35]!==Ie?(Le=Bt({explicitStyleMode:Ie,libraryFileId:je}),t[34]=je,t[35]=Ie,t[36]=Le):Le=t[36];let Re=Le,q=G?.title??D,Be;t[37]===P?Be=t[38]:(Be=()=>P!=null&&ce(P)?`work`:`chat`,t[37]=P,t[38]=Be);let Ve=m(Be),He;t[39]===Symbol.for(`react.memo_cache_sentinel`)?(He=bt(),t[39]=He):He=t[39];let Ue=He,We=N,Ge=Fe&&Re===`open`,Ke=R===`collapsed`||R==null&&re&&G?.latestPatchMessageId!=null&&G.latestPatchMessageId!==C,qe=l!=null||d!=null,Je;t[40]!==g||t[41]!==l||t[42]!==P?.id||t[43]!==d||t[44]!==L||t[45]!==S||t[46]!==C||t[47]!==je||t[48]!==Re||t[49]!==q||t[50]!==E||t[51]!==H||t[52]!==z?.messageId?(Je=async e=>{let t=l;if(t==null&&d!=null)try{t=await ge({abortSignal:new AbortController().signal,fileId:d,serverThreadId:H})}catch{return}t!=null&&Te({appBlockId:L,conversationId:P?.id??g??null,isOriginalVersion:!0,versionNumber:S??void 0},`app-block:${L}:original`,{code:t,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:L,libraryFileId:je,messageId:z?.messageId??C,refIndex:E},styleMode:Re,title:q})},t[40]=g,t[41]=l,t[42]=P?.id,t[43]=d,t[44]=L,t[45]=S,t[46]=C,t[47]=je,t[48]=Re,t[49]=q,t[50]=E,t[51]=H,t[52]=z?.messageId,t[53]=Je):Je=t[53],P?.id,z?.messageId;let Ye=Je;if(M&&!We){let e;return t[54]===q?e=t[55]:(e=(0,$.jsx)(Rn,{title:q}),t[54]=q,t[55]=e),e}let Xe=se&&l!=null;if(Ce?.status===`missing`&&!Xe)return null;if(Ke){let e=qe?Ye:void 0,n;return t[56]!==q||t[57]!==e?(n=(0,$.jsx)(Nr,{onView:e,title:q}),t[56]=q,t[57]=e,t[58]=n):n=t[58],n}let Ze=ke??(We&&M?``:null);if(Ze==null){if(G?.latestPatchMessageId!=null){let e=P?.id??g,n=Ce?.status===`failed`,r;t[59]===he?r=t[60]:(r=()=>he(br),t[59]=he,t[60]=r);let i;return t[61]!==L||t[62]!==Fe||t[63]!==Ae||t[64]!==q||t[65]!==e||t[66]!==n||t[67]!==r?(i=(0,$.jsx)(wr,{appBlockId:L,conversationId:e,hasFailed:n,iconSvg:Ae,onRetry:r,showHeader:Fe,title:q}),t[61]=L,t[62]=Fe,t[63]=Ae,t[64]=q,t[65]=e,t[66]=n,t[67]=r,t[68]=i):i=t[68],i}let e;return t[69]===q?e=t[70]:(e=(0,$.jsx)(Rn,{title:q}),t[69]=q,t[70]=e),e}let Qe;t[71]!==g||t[72]!==Ve||t[73]!==M||t[74]!==ie||t[75]!==C||t[76]!==q||t[77]!==E?(Qe=!M&&!ie&&g!=null&&C!=null&&E!=null&&vt()?{reference:{clientThreadId:g,messageId:C,referenceIndex:E},target:{kind:`app_block`,metadata:{...q==null?{}:{title:q},tab:Ve}}}:void 0,t[71]=g,t[72]=Ve,t[73]=M,t[74]=ie,t[75]=C,t[76]=q,t[77]=E,t[78]=Qe):Qe=t[78];let $e=Qe,et=P?.id??g,tt=z?.messageId??C,nt;t[79]!==L||t[80]!==je||t[81]!==E||t[82]!==tt?(nt={appBlockId:L,libraryFileId:je,messageId:tt,refIndex:E},t[79]=L,t[80]=je,t[81]=E,t[82]=tt,t[83]=nt):nt=t[83];let rt=Ge&&Ue&&!M,it=P?.id??g,J;t[84]!==Pe||t[85]!==k?(J=Pe==null?void 0:{contentReferenceIndex:Pe.refIndex,messageId:Pe.messageId,widgetName:k??ze.AppBlock,widgetType:ze.AppBlock},t[84]=Pe,t[85]=k,t[86]=J):J=t[86];let at;t[87]!==n||t[88]!==c||t[89]!==j||t[90]!==L||t[91]!==$e||t[92]!==p||t[93]!==M||t[94]!==ee||t[95]!==w||t[96]!==Ae||t[97]!==Re||t[98]!==q||t[99]!==T||t[100]!==Ze||t[101]!==I||t[102]!==We||t[103]!==Ge||t[104]!==rt||t[105]!==it||t[106]!==J||t[107]!==ae||t[108]!==A?(at=(0,$.jsx)(xr,{additionalResourceDomains:n,appBlockId:L,bind:c,canOpen:rt,captureConsoleMessages:j,clientThreadId:it,code:Ze,feedback:$e,iconSvg:Ae,id:p,isStreaming:M,onConsoleMessagesChange:ee,onReadyChange:w,progressiveStreaming:We,ref:T,showArtifactCard:Ge,shareConversation:I,shareTarget:J,styleMode:Re,title:q,variant:ae,widgetRefSeenAtMs:A}),t[87]=n,t[88]=c,t[89]=j,t[90]=L,t[91]=$e,t[92]=p,t[93]=M,t[94]=ee,t[95]=w,t[96]=Ae,t[97]=Re,t[98]=q,t[99]=T,t[100]=Ze,t[101]=I,t[102]=We,t[103]=Ge,t[104]=rt,t[105]=it,t[106]=J,t[107]=ae,t[108]=A,t[109]=at):at=t[109];let ot;return t[110]!==n||t[111]!==Re||t[112]!==q||t[113]!==Ze||t[114]!==et||t[115]!==nt||t[116]!==at?(ot=(0,$.jsx)(En,{additionalResourceDomains:n,code:Ze,conversationId:et,styleMode:Re,source:nt,title:q,children:at}),t[110]=n,t[111]=Re,t[112]=q,t[113]=Ze,t[114]=et,t[115]=nt,t[116]=at,t[117]=ot):ot=t[117],ot}function br(e){return e+1}function xr(e){"use forget";let t=(0,Z.c)(69),{additionalResourceDomains:n,appBlockId:r,bind:i,canOpen:a,captureConsoleMessages:o,clientThreadId:s,code:c,feedback:l,iconSvg:u,id:d,isStreaming:f,onConsoleMessagesChange:p,onReadyChange:m,progressiveStreaming:g,ref:_,shareConversation:v,shareTarget:y,showArtifactCard:b,styleMode:x,title:S,variant:C,widgetRefSeenAtMs:ee}=e,{isExpanded:w,isViewingHistoricalVersion:te,openExpandedView:T,setSharedPreview:E,sharedPreview:ne,triggerRef:D}=bn(),O=(0,Q.useContext)(Fe),k;t[0]===n?k=t[1]:(k=n??[],t[0]=n,t[1]=k);let A;t[2]!==c||t[3]!==d||t[4]!==x||t[5]!==k?(A=[d,x,c,...k],t[2]=c,t[3]=d,t[4]=x,t[5]=k,t[6]=A):A=t[6];let re=A.join(`\0`),[j,M]=(0,Q.useState)(null),ie=!f&&j===re,N;t[7]===T?N=t[8]:(N=()=>{Se(),T()},t[7]=T,t[8]=N);let ae=N,P;t[9]!==m||t[10]!==re?(P=(e,t)=>{M(e?re:null),m?.(e,t)},t[9]=m,t[10]=re,t[11]=P):P=t[11];let oe=P,se;t[12]!==n||t[13]!==r||t[14]!==i||t[15]!==o||t[16]!==s||t[17]!==c||t[18]!==oe||t[19]!==d||t[20]!==f||t[21]!==p||t[22]!==g||t[23]!==_||t[24]!==x||t[25]!==S||t[26]!==C||t[27]!==ee?(se=(0,$.jsx)(Fr,{appBlockId:r,additionalResourceDomains:n,bind:i,code:c,id:d,isStreaming:f,captureConsoleMessages:o,clientThreadId:s,onConsoleMessagesChange:p,onReadyChange:oe,presentationSurface:`inline`,progressiveStreaming:g,ref:_,styleMode:x,title:S,variant:C,widgetRefSeenAtMs:ee}),t[12]=n,t[13]=r,t[14]=i,t[15]=o,t[16]=s,t[17]=c,t[18]=oe,t[19]=d,t[20]=f,t[21]=p,t[22]=g,t[23]=_,t[24]=x,t[25]=S,t[26]=C,t[27]=ee,t[28]=se):se=t[28];let ce;t[29]!==O||t[30]!==se?(ce={element:se,sandboxPolicy:O},t[29]=O,t[30]=se,t[31]=ce):ce=t[31];let I=ce,le;t[32]===I?le=t[33]:(le=()=>I,t[32]=I,t[33]=le);let L=F(le),R;t[34]!==r||t[35]!==s||t[36]!==L||t[37]!==E?(R=e=>{if(e==null)return;let{preview:t,sourceToken:n}=Ee({appBlockId:r,content:L(),conversationId:s??null,inlineContainer:e});return E(t),()=>{let e=we();Me(t,n,e?.sharedPreview===t)}},t[34]=r,t[35]=s,t[36]=L,t[37]=E,t[38]=R):R=t[38];let ue=R,z,B;t[39]!==I||t[40]!==ne?(B=()=>{ne!=null&&q(ne,I)},z=[I,ne],t[39]=I,t[40]=ne,t[41]=z,t[42]=B):(z=t[41],B=t[42]),h(B,z);let de=te?ae:void 0,V;t[43]!==u||t[44]!==de||t[45]!==S||t[46]!==D?(V=(0,$.jsx)(Dr,{iconSvg:u,onOpen:de,openButtonRef:D,title:S}),t[43]=u,t[44]=de,t[45]=S,t[46]=D,t[47]=V):V=t[47];let H=w?V:null,U;t[48]===ue?U=t[49]:(U=(0,$.jsx)(`div`,{ref:ue,className:`w-full`}),t[48]=ue,t[49]=U);let W;t[50]!==a||t[51]!==l||t[52]!==ae||t[53]!==u||t[54]!==ie||t[55]!==f||t[56]!==v||t[57]!==y||t[58]!==b||t[59]!==U||t[60]!==S||t[61]!==D?(W=(0,$.jsx)(Cr,{canOpen:a,expandButtonRef:D,feedback:l,iconSvg:u,isShareReady:ie,shareConversation:v,shareTarget:y,isStreaming:f,showArtifactCard:b,title:S,onOpen:ae,children:U}),t[50]=a,t[51]=l,t[52]=ae,t[53]=u,t[54]=ie,t[55]=f,t[56]=v,t[57]=y,t[58]=b,t[59]=U,t[60]=S,t[61]=D,t[62]=W):W=t[62];let fe;t[63]!==w||t[64]!==W?(fe=(0,$.jsx)(`div`,{hidden:w,children:W}),t[63]=w,t[64]=W,t[65]=fe):fe=t[65];let pe;return t[66]!==H||t[67]!==fe?(pe=(0,$.jsxs)($.Fragment,{children:[H,fe]}),t[66]=H,t[67]=fe,t[68]=pe):pe=t[68],pe}function Sr(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:o,titleClassName:s}=e,c;t[0]===r?c=t[1]:(c=N(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=c);let l=s??`truncate text-base font-semibold`,u;t[2]===l?u=t[3]:(u=N(`text-token-text-primary`,l),t[2]=l,t[3]=u);let d=o??i,f;t[4]!==u||t[5]!==d?(f=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:u,children:d})}),t[4]=u,t[5]=d,t[6]=f):f=t[6];let p;t[7]!==a||t[8]!==f?(p=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,f]}),t[7]=a,t[8]=f,t[9]=p):p=t[9];let m;return t[10]!==n||t[11]!==c||t[12]!==p?(m=(0,$.jsxs)(`div`,{className:c,children:[p,n]}),t[10]=n,t[11]=c,t[12]=p,t[13]=m):m=t[13],m}function Cr(e){"use forget";let t=(0,Z.c)(20),{canOpen:n,children:r,expandButtonRef:i,feedback:a,iconSvg:o,isShareReady:s,isStreaming:c,onOpen:l,shareConversation:u,shareTarget:d,showArtifactCard:p,title:m}=e,h=U(),g;t[0]===h?g=t[1]:(g=h.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=h,t[1]=g);let _=g,v;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==_||t[6]!==o||t[7]!==s||t[8]!==c||t[9]!==l||t[10]!==u||t[11]!==d||t[12]!==p||t[13]!==m?(v=p?(0,$.jsxs)(`div`,{className:N(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,c&&`cursor-wait`),"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)(Sr,{action:(0,$.jsx)(ni,{canOpen:n,conversation:u,expandButtonRef:i,isReady:s,onOpen:l,target:d}),className:`min-h-13 px-4 py-2`,fallbackTitle:_,leading:c?(0,$.jsx)(f,{className:`icon-md text-token-text-primary shrink-0`}):(0,$.jsx)(kr,{iconSvg:o}),title:m}),(0,$.jsx)(`div`,{children:r})]}):(0,$.jsx)(ri,{conversation:u,isReady:s,target:d,children:r}),t[2]=n,t[3]=r,t[4]=i,t[5]=_,t[6]=o,t[7]=s,t[8]=c,t[9]=l,t[10]=u,t[11]=d,t[12]=p,t[13]=m,t[14]=v):v=t[14];let y;t[15]===a?y=t[16]:(y=a==null?null:(0,$.jsx)(Tr,{...a}),t[15]=a,t[16]=y);let b;return t[17]!==v||t[18]!==y?(b=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[v,y]}),t[17]=v,t[18]=y,t[19]=b):b=t[19],b}function wr(e){"use forget";let t=(0,Z.c)(17),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:o,showHeader:s,title:c}=e,l=m(we),u=U(),d;t[0]===u?d=t[1]:(d=u.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=u,t[1]=d);let f=d;if(ke(l,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==c?(e=(0,$.jsx)(Dr,{iconSvg:a,title:c}),t[2]=a,t[3]=c,t[4]=e):e=t[4],e}let p;t[5]!==f||t[6]!==a||t[7]!==s||t[8]!==c?(p=s?(0,$.jsx)(Sr,{className:`mb-2`,fallbackTitle:f,leading:(0,$.jsx)(kr,{iconSvg:a}),title:c}):null,t[5]=f,t[6]=a,t[7]=s,t[8]=c,t[9]=p):p=t[9];let h;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(h={minHeight:Br},t[10]=h):h=t[10];let g;t[11]!==i||t[12]!==o?(g=(0,$.jsx)(`div`,{className:`relative w-full`,style:h,children:i?(0,$.jsx)(zr,{onRetry:o}):(0,$.jsx)(Rr,{})}),t[11]=i,t[12]=o,t[13]=g):g=t[13];let _;return t[14]!==p||t[15]!==g?(_=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[p,g]}),t[14]=p,t[15]=g,t[16]=_):_=t[16],_}function Tr(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(m(Er))return null;let o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(lt,{}),t[0]=o):o=t[0];let s;return t[1]!==i||t[2]!==n||t[3]!==r?(s=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)(at,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:o})}),t[1]=i,t[2]=n,t[3]=r,t[4]=s):s=t[4],s}function Er(){return it()}function Dr(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=U(),s,c,l,u,d;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),d=`not-prose relative clear-both my-4 w-full max-w-full`,u=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=Sr,l=r==null?void 0:(0,$.jsx)(g,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(H,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=l,t[7]=u,t[8]=d):(s=t[4],c=t[5],l=t[6],u=t[7],d=t[8]);let f;t[9]===n?f=t[10]:(f=(0,$.jsx)(Or,{iconSvg:n}),t[9]=n,t[10]=f);let p;t[11]!==s||t[12]!==c||t[13]!==l||t[14]!==f||t[15]!==a?(p=(0,$.jsx)(s,{action:l,className:`w-full`,fallbackTitle:c,leading:f,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=l,t[14]=f,t[15]=a,t[16]=p):p=t[16];let m;t[17]!==u||t[18]!==p?(m=(0,$.jsx)(`div`,{className:u,children:p}),t[17]=u,t[18]=p,t[19]=m):m=t[19];let h;return t[20]!==d||t[21]!==m?(h=(0,$.jsx)(`div`,{className:d,children:m}),t[20]=d,t[21]=m,t[22]=h):h=t[22],h}function Or(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(kr,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function kr(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=Ar(r),t[0]=r,t[1]=a);let o=a,s;return t[2]!==i||t[3]!==o?(s=o==null?(0,$.jsx)(We,{"aria-hidden":`true`,className:N(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:N(`icon-md shrink-0`,i),children:(0,$.jsx)(Ne,{svgString:o,className:`h-full w-full`})}),t[2]=i,t[3]=o,t[4]=s):s=t[4],s}function Ar(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>Jr||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Yr)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Zr.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!jr(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function jr(e){let t=e.replace(Xr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Xr)){let e=t[1],n=t[2];if(!Qr.has(e)||!Mr(e,n))return!1}return!0}function Mr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function Nr(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=U(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(H,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(H,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(H,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function Pr(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:i}=e,a=U(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let s=o,c;t[2]===r?c=t[3]:(c=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=c);let l;t[4]!==s||t[5]!==i||t[6]!==c?(l=(0,$.jsx)(g,{ref:i,type:`button`,icon:Ge,color:`ghost`,size:`medium`,label:s,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:c}),t[4]=s,t[5]=i,t[6]=c,t[7]=l):l=t[7];let d;return t[8]!==n||t[9]!==s||t[10]!==l?(d=(0,$.jsx)(u,{label:s,className:n,children:l}),t[8]=n,t[9]=s,t[10]=l,t[11]=d):d=t[11],d}function Fr(e){"use forget";let t=(0,Z.c)(173),{appBlockId:n,additionalResourceDomains:r,bind:i,clientThreadId:a,code:o,id:c,captureConsoleMessages:l,isStreaming:u,onConsoleMessagesChange:d,onReadyChange:f,presentationSurface:p,progressiveStreaming:g,ref:_,styleMode:v,surface:y,title:b,variant:x,widgetRefSeenAtMs:S}=e,C=u!==void 0&&u,ee=g!==void 0&&g,w=v===void 0?`default`:v,T=y===void 0?`inline`:y,E=x===void 0?`inline`:x,ne=U(),D=(0,Q.useRef)(null),O=(0,Q.useRef)(null),k=qe(i),[A,re]=(0,Q.useState)(k.values),j=s(A,k.values)?A:k.values;j!==A&&re(j);let M=[...k.callbacks.keys()],[ie,ae]=(0,Q.useState)(M),P=s(ie,M)?ie:M;P!==ie&&ae(P);let oe=(0,Q.useRef)(j),se=(0,Q.useRef)(P),ce=(0,Q.useRef)(k.callbacks),I=i!=null,L=(0,Q.useRef)(!1),R=(0,Q.useRef)(!1),z=(0,Q.useRef)(null),B=(0,Q.useRef)(null),de=(0,Q.useRef)(null),V=(0,Q.useRef)(null),W=(0,Q.useRef)(null),fe=(0,Q.useRef)(null),pe=(0,Q.useRef)(null),me=(0,Q.useRef)(0),he=(0,Q.useRef)(null),ge=(0,Q.useRef)(null),_e;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(_e=[],t[0]=_e):_e=t[0];let ve=(0,Q.useRef)(_e),ye=te(),be=m(le),{allowDependencyNetworkRequestsWithoutCanvasAccess:xe}=(0,Q.useContext)(Fe),Se=et()||xe,G=Qe(a)&&!xe,Ce=ye?`dark`:`light`,we=ne.locale,Te;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(Te={status:`streaming`},t[1]=Te):Te=t[1];let[Ee,De]=(0,Q.useState)(Te),Oe=Ee.status===`finalized`&&Ee.html!==o,ke=ee&&!C&&(E===`artifact`||Ee.status===`failed`),K=ee&&T===`inline`&&Ee.status!==`static`&&!ke&&!Oe,Ae=K&&C&&E===`artifact`&&!vr(o),je=Ae?0:Vr,Me=Se?`execution-enabled`:`execution-disabled`,Ne=G?`network-enabled`:`network-disabled`,Pe=I?`bindings-enabled`:`bindings-disabled`,Ie=K?`progressive-app-block-stream`:o,Le;t[2]===r?Le=t[3]:(Le=r??[],t[2]=r,t[3]=Le);let Re;t[4]!==be||t[5]!==we||t[6]!==w||t[7]!==T||t[8]!==Pe||t[9]!==Ie||t[10]!==Le||t[11]!==Me||t[12]!==Ne||t[13]!==Ce?(Re=[Ce,be,T,w,we,Me,Ne,Pe,Ie,...Le],t[4]=be,t[5]=we,t[6]=w,t[7]=T,t[8]=Pe,t[9]=Ie,t[10]=Le,t[11]=Me,t[12]=Ne,t[13]=Ce,t[14]=Re):Re=t[14];let q=Re.join(`\0`),ze;t[15]===r?ze=t[16]:(ze=ln(r),t[15]=r,t[16]=ze);let Be=ze,Ve=G?`deps_only`:`disabled`,He=T===`inline`?E:void 0,Ue=K?`progressive`:`static`,We;t[17]!==T||t[18]!==Ve||t[19]!==He||t[20]!==Ue?(We={networkPolicy:Ve,surface:T,variant:He,renderMode:Ue},t[17]=T,t[18]=Ve,t[19]=He,t[20]=Ue,t[21]=We):We=t[21];let Ge=We,[Ke,$e]=(0,Q.useState)(0),[nt,rt]=(0,Q.useState)(null),it=nt?.signature===q?nt.status:null,J=it===`ready`,at=J||it===`failed_after_ready`,ot=K&&it===`failed`,st=!C&&!K&&it===`failed`,ct=p??T,lt=ee&&ct===`inline`&&E===`inline`,ut=K&&ct===`inline`&&C&&!st,dt;t[22]!==o||t[23]!==Ge||t[24]!==S?(dt={content:o,metricTags:Ge,widgetRefSeenAtMs:S},t[22]=o,t[23]=Ge,t[24]=S,t[25]=dt):dt=t[25];let{cancelFirstPaintFrame:ft,startRunMetrics:pt}=At(dt),mt,ht;t[26]!==J||t[27]!==f?(mt=()=>{f?.(J)},ht=[J,f],t[26]=J,t[27]=f,t[28]=mt,t[29]=ht):(mt=t[28],ht=t[29]),(0,Q.useEffect)(mt,ht);let gt,_t;t[30]!==P||t[31]!==j||t[32]!==k.callbacks?(gt=()=>{oe.current=j,se.current=P,ce.current=k.callbacks},_t=[P,j,k.callbacks],t[30]=P,t[31]=j,t[32]=k.callbacks,t[33]=gt,t[34]=_t):(gt=t[33],_t=t[34]),h(gt,_t);let vt;t[35]===Symbol.for(`react.memo_cache_sentinel`)?(vt=e=>{O.current===e&&D.current?.updateAppBlockMessenger?.(Ye(e,oe.current,se.current))},t[35]=vt):vt=t[35];let yt=F(vt),bt;t[36]===yt?bt=t[37]:(bt=e=>{let t=O.current;if(t==null)return;let n=Ze(e,t),r=n&&ce.current.get(n.name);if(n!=null&&r){let e=()=>{ue.postTask(()=>yt(t))};try{Promise.resolve(r(...n.args)).then(e,e)}catch{e()}}},t[36]=yt,t[37]=bt);let xt=F(bt),St;t[38]!==I||t[39]!==J||t[40]!==yt?(St=()=>{let e=O.current;!J||!I||e==null||yt(e)},t[38]=I,t[39]=J,t[40]=yt,t[41]=St):St=t[41];let Ct;t[42]!==P||t[43]!==j||t[44]!==I||t[45]!==J||t[46]!==yt?(Ct=[P,j,I,J,yt],t[42]=P,t[43]=j,t[44]=I,t[45]=J,t[46]=yt,t[47]=Ct):Ct=t[47],(0,Q.useEffect)(St,Ct);let wt,Et;t[48]!==J||t[49]!==p?(wt=()=>{!J||p==null||D.current?.updateAppBlockSurface?.(p)},Et=[J,p],t[48]=J,t[49]=p,t[50]=wt,t[51]=Et):(wt=t[50],Et=t[51]),(0,Q.useEffect)(wt,Et);let Ot,kt;t[52]===Symbol.for(`react.memo_cache_sentinel`)?(Ot=()=>({clearCapturedConsoleMessages:()=>{ve.current=[]},captureScreenshotDataUrl:async()=>(await D.current?.screenshot())?.imageBase64??null,focus:()=>{D.current?.focus()}}),kt=[],t[52]=Ot,t[53]=kt):(Ot=t[52],kt=t[53]),(0,Q.useImperativeHandle)(_,Ot,kt);let jt;t[54]===Symbol.for(`react.memo_cache_sentinel`)?(jt=()=>{he.current!=null&&(window.clearTimeout(he.current),he.current=null)},t[54]=jt):jt=t[54];let Y=F(jt),Mt;t[55]===Symbol.for(`react.memo_cache_sentinel`)?(Mt=()=>{ge.current!=null&&(window.clearTimeout(ge.current),ge.current=null)},t[55]=Mt):Mt=t[55];let X=F(Mt),Nt;t[56]!==J||t[57]!==K?(Nt=()=>{if(!K||!J||W.current==null)return;let e=V.current,t=D.current;if(e==null||t?.updateAppBlockStream==null||R.current)return;let n=me.current;V.current=null,B.current=Tt(),de.current=e.html,e.isFinal&&(R.current=!0);let r=()=>me.current!==n||W.current==null?Promise.resolve():t.updateAppBlockStream?.(e)??Promise.resolve(),i=pe.current,a=i==null?r():i.then(r);pe.current=a,a.then(()=>{pe.current===a&&(pe.current=null);let t=W.current;me.current!==n||t==null||(vr(e.html)&&t.markFirstPaint(),e.isFinal&&(t.reportPayloadSize(e.html),De({status:`finalized`,html:e.html})))},e=>{pe.current===a&&(pe.current=null),me.current===n&&(e instanceof DOMException&&e.name===`AbortError`||fe.current?.(`stream_update`,Dt(e)))})},t[56]=J,t[57]=K,t[58]=Nt):Nt=t[58];let Pt=F(Nt),Ft;t[59]!==be||t[60]!==l||t[61]!==Y||t[62]!==X||t[63]!==o||t[64]!==I||t[65]!==Se||t[66]!==G||t[67]!==Oe||t[68]!==C||t[69]!==we||t[70]!==d||t[71]!==f||t[72]!==p||t[73]!==q||t[74]!==Ee.status||t[75]!==ke||t[76]!==K||t[77]!==pt||t[78]!==w||t[79]!==T||t[80]!==Ce?(Ft=()=>{if(!Se)return;if(Ee.status===`failed`){if(C)return;De({status:`static`}),$e(Lr);return}(Oe||ke&&Ee.status!==`static`)&&De({status:`static`});let e=K&&D.current?.updateAppBlockStream!=null;if(K&&!e){C||De({status:`static`});return}L.current=!0,R.current=!1,z.current=null,B.current=null,de.current=null,V.current=null,W.current=null,fe.current=null,pe.current=null,X(),me.current+=1;let t=me.current;Y(),rt(null),O.current=I?crypto.randomUUID():null;let{expectReadySignal:n,html:r,frameColorScheme:i}=un(o,Ce,we,be,T,{loadTailwind:G,progressiveStreaming:e,syncPresentationSurface:p!=null,styleMode:w}),a=!1,s=!1,c=!1,u=!1,m=!1,h=()=>me.current===t,g=pt(h,{deferFirstPaint:e,deferPayloadSize:e});e&&(W.current=g);let _=e=>{!l||d==null||!h()||(ve.current=e,!u&&(u=!0,ue.postTask(()=>{u=!1,h()&&d(ve.current)},{priority:`background`})))},v=e=>{!h()||a||c||(a=!0,Y(),g.markReady(e),!m&&(m=!0,ue.postTask(()=>{m=!1,!(!h()||c)&&(s=!0,rt({signature:q,status:`ready`}))},{priority:`background`})))},y=(t,n)=>{!h()||c||(c=!0,Y(),X(),V.current=null,W.current=null,e&&De({status:`failed`}),rt({signature:q,status:s?`failed_after_ready`:`failed`}),g.reportFailure(t,n),ue.postTask(()=>{h()&&(e?f?.(!1):f?.(!1,`failure`))},{priority:`background`}))};fe.current=y,ve.current=[],_([]),he.current=window.setTimeout(()=>{y(`sandbox_eval`,`ready_timeout`)},Ur),(async()=>{let t=D.current?.evalAsync({code:r,...O.current==null?{}:{additionalGlobals:{__appBlockMessenger:Ye(O.current,oe.current,se.current)}},expectReadySignal:n,language:`html`,frameColorScheme:i,shouldPreservePreviewOnFatalError:()=>h()&&e&&s});if(t==null){y(`sandbox_eval`,`missing_generator`);return}for(;;){let e=await t.next();if(e.done){h()&&!a&&y(`sandbox_eval`,`generator_completed_without_ready`);break}h()&&(_([...ve.current,e.value]),e.value.type===Je.ENVIRONMENT_STATUS&&e.value.status===Xe.RUNNING_CODE&&v(`running_code`),e.value.type===Je.RUN_COMPLETE&&(e.value.wasFatalError?y(`runtime`,`fatal_runtime_error`):(v(`run_complete`),g.reportSuccess(`run_complete`))),await ue.yield())}})().catch(e=>{h()&&(e instanceof DOMException&&e.name===`AbortError`||y(`sandbox_eval`,Dt(e)))})},t[59]=be,t[60]=l,t[61]=Y,t[62]=X,t[63]=o,t[64]=I,t[65]=Se,t[66]=G,t[67]=Oe,t[68]=C,t[69]=we,t[70]=d,t[71]=f,t[72]=p,t[73]=q,t[74]=Ee.status,t[75]=ke,t[76]=K,t[77]=pt,t[78]=w,t[79]=T,t[80]=Ce,t[81]=Ft):Ft=t[81];let It=F(Ft),Lt;t[82]!==Y||t[83]!==X?(Lt=()=>{me.current+=1,L.current=!1,R.current=!1,z.current=null,de.current=null,V.current=null,W.current=null,fe.current=null,pe.current=null,Y(),X(),rt(null),$e(Ir)},t[82]=Y,t[83]=X,t[84]=Lt):Lt=t[84];let Rt=F(Lt),zt;t[85]===ct?zt=t[86]:(zt=ct===`inline`?{margin:-4,width:`calc(100% + ${Hr*2}px)`}:void 0,t[85]=ct,t[86]=zt);let Bt=zt,Vt;t[87]!==ft||t[88]!==Y||t[89]!==X||t[90]!==It?(Vt=()=>{It();let e=D.current;return()=>{me.current+=1,O.current=null,W.current=null,fe.current=null,pe.current=null,Y(),X(),ft(),e?.stop()}},t[87]=ft,t[88]=Y,t[89]=X,t[90]=It,t[91]=Vt):Vt=t[91];let Ht;t[92]!==ft||t[93]!==Y||t[94]!==X||t[95]!==Se||t[96]!==q||t[97]!==It||t[98]!==Ke?(Ht=[ft,Y,X,Se,q,It,Ke],t[92]=ft,t[93]=Y,t[94]=X,t[95]=Se,t[96]=q,t[97]=It,t[98]=Ke,t[99]=Ht):Ht=t[99],(0,Q.useEffect)(Vt,Ht);let Ut,Wt;t[100]!==C||t[101]!==It||t[102]!==K?(Ut=()=>{!K||C||L.current||D.current?.updateAppBlockStream!=null||It()},Wt=[C,It,K],t[100]=C,t[101]=It,t[102]=K,t[103]=Ut,t[104]=Wt):(Ut=t[103],Wt=t[104]),(0,Q.useEffect)(Ut,Wt);let Gt,Kt;if(t[105]!==X||t[106]!==o||t[107]!==Pt||t[108]!==st||t[109]!==J||t[110]!==C||t[111]!==K||t[112]!==E?(Gt=()=>{if(!K||!J||st||R.current||D.current?.updateAppBlockStream==null)return;let e=C?_r(o):o;if(C&&(V.current?.html??de.current)===e)return;if(V.current={html:e,isFinal:!C},!C){X(),Pt();return}let t=B.current;if(t==null&&E===`artifact`&&(z.current??=Tt(),t=z.current),t==null){Pt();return}let n=E===`artifact`?Gr:Wr,r=Tt()-t;if(r>=n){Pt();return}return ge.current=window.setTimeout(()=>{ge.current=null,Pt()},n-r),X},Kt=[X,o,Pt,st,J,C,K,E],t[105]=X,t[106]=o,t[107]=Pt,t[108]=st,t[109]=J,t[110]=C,t[111]=K,t[112]=E,t[113]=Gt,t[114]=Kt):(Gt=t[113],Kt=t[114]),(0,Q.useEffect)(Gt,Kt),!Se){let e;return t[115]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(Nn,{}),t[115]=e):e=t[115],e}let qt=lt&&`flex-col`,Jt=ct===`inline`&&(Ae?`h-0 min-h-0 overflow-hidden`:`min-h-[120px] overflow-visible`),Yt=ct===`stage`&&`h-full min-h-0`,Xt;t[116]!==qt||t[117]!==Jt||t[118]!==Yt?(Xt=N(`flex w-full`,qt,Jt,Yt),t[116]=qt,t[117]=Jt,t[118]=Yt,t[119]=Xt):Xt=t[119];let Zt;t[120]!==lt||t[121]!==ut||t[122]!==b?(Zt=lt?(0,$.jsx)(Wn,{isVisible:ut,title:b}):null,t[120]=lt,t[121]=ut,t[122]=b,t[123]=Zt):Zt=t[123];let Qt=ct===`inline`?`flex-none`:`w-full`,$t=ut&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,en;t[124]!==Qt||t[125]!==$t?(en=N(`relative min-w-0`,Qt,$t),t[124]=Qt,t[125]=$t,t[126]=en):en=t[126];let tn=`${Ke}:${G?`network-enabled`:`network-disabled`}`,nn;t[127]!==n||t[128]!==a||t[129]!==c?(nn=JSON.stringify([a??null,n??c]),t[127]=n,t[128]=a,t[129]=c,t[130]=nn):nn=t[130];let rn;t[131]===ne?rn=t[132]:(rn=ne.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[131]=ne,t[132]=rn);let an=G?`deps-only`:`none`,on=G?Kr:qr,sn=at?0:-1,cn=I?xt:void 0,dn=ct===`inline`&&w===`open`,fn=ct!==`stage`,pn=K?je:Br,mn;t[133]!==c||t[134]!==It||t[135]!==Be||t[136]!==tn||t[137]!==nn||t[138]!==rn||t[139]!==an||t[140]!==on||t[141]!==sn||t[142]!==cn||t[143]!==dn||t[144]!==fn||t[145]!==pn?(mn=(0,$.jsx)(tt,{id:c,sandboxOriginId:nn,title:rn,visuallyHidden:!1,networkPolicy:an,additionalResourceDomains:Be,sandboxPermissions:on,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:sn,onRetryCodeRun:It,onAppBlockMessage:cn,transparentBackground:dn,useIntrinsicHeight:fn,intrinsicHeightFallback:pn,ref:D},tn),t[133]=c,t[134]=It,t[135]=Be,t[136]=tn,t[137]=nn,t[138]=rn,t[139]=an,t[140]=on,t[141]=sn,t[142]=cn,t[143]=dn,t[144]=fn,t[145]=pn,t[146]=mn):mn=t[146];let hn;t[147]===ut?hn=t[148]:(hn=ut?(0,$.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 z-10 cursor-wait`}):null,t[147]=ut,t[148]=hn);let gn;t[149]!==ot||t[150]!==st||t[151]!==at||t[152]!==K?(gn=!at&&!st&&(!K||ot)?(0,$.jsx)(Rr,{}):null,t[149]=ot,t[150]=st,t[151]=at,t[152]=K,t[153]=gn):gn=t[153];let _n;t[154]!==st||t[155]!==Rt?(_n=st?(0,$.jsx)(zr,{onRetry:Rt}):null,t[154]=st,t[155]=Rt,t[156]=_n):_n=t[156];let vn;t[157]!==Bt||t[158]!==ut||t[159]!==en||t[160]!==mn||t[161]!==hn||t[162]!==gn||t[163]!==_n?(vn=(0,$.jsxs)(`div`,{"aria-busy":ut,className:en,style:Bt,children:[mn,hn,gn,_n]}),t[157]=Bt,t[158]=ut,t[159]=en,t[160]=mn,t[161]=hn,t[162]=gn,t[163]=_n,t[164]=vn):vn=t[164];let yn;t[165]!==ut||t[166]!==E?(yn=ut&&E===`artifact`?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:(0,$.jsx)(H,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[165]=ut,t[166]=E,t[167]=yn):yn=t[167];let bn;return t[168]!==Xt||t[169]!==Zt||t[170]!==vn||t[171]!==yn?(bn=(0,$.jsxs)(`div`,{className:Xt,children:[Zt,vn,yn]}),t[168]=Xt,t[169]=Zt,t[170]=vn,t[171]=yn,t[172]=bn):bn=t[172],bn}function Ir(e){return e+1}function Lr(e){return e+1}function Rr(){"use forget";let e=(0,Z.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsx)(f,{className:`icon-sm text-token-text-tertiary`}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,role:`status`,children:[t,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:(0,$.jsx)(H,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})})]}),e[1]=n):n=e[1],n}function zr(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(H,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(H,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(g,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii=e((()=>{Z=W(),v(),rt(),ve(),ct(),_(),S(),nt(),P(),Ve(),He(),Ue(),he(),$e(),p(),je(),ut(),G(),d(),k(),ee(),Oe(),ae(),w(),A(),ie(),J(),dt(),Ie(),Ke(),l(),c(),Q=n(B()),V(),yn(),Rt(),xt(),Mn(),me(),In(),Cn(),Gn(),Ct(),De(),Re(),Vt(),hr(),$=z(),Br=432,Vr=120,Hr=4,Ur=15e3,Wr=100,Gr=350,Kr=`allow-scripts allow-same-origin allow-forms`,qr=`allow-scripts allow-same-origin`,Jr=12e3,Yr=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Xr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Zr=new Set([`svg`,`path`]),Qr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),$r=/<script(?:\s|>)/i,ei=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,ti=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,ni=e=>{"use forget";let t=(0,Z.c)(13),{canOpen:n,conversation:r,expandButtonRef:i,isReady:a,onOpen:o,target:s}=e,c;t[0]!==n||t[1]!==i||t[2]!==o?(c=n&&o!=null?(0,$.jsx)(Pr,{ref:i,className:`shrink-0`,onClick:o}):null,t[0]=n,t[1]=i,t[2]=o,t[3]=c):c=t[3];let l=c;if(r==null)return l;let d;t[4]===s?d=t[5]:(d=s??{contentReferenceIndex:-1,messageId:``},t[4]=s,t[5]=d);let f=d,p=a&&s!=null,m;t[6]===l?m=t[7]:(m=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(u,{label:n,children:(0,$.jsx)(g,{type:`button`,icon:Be,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),l]}):l},t[6]=l,t[7]=m);let h;return t[8]!==f||t[9]!==r||t[10]!==p||t[11]!==m?(h=(0,$.jsx)(ft,{category:ze.AppBlock,conversation:r,isReady:p,target:f,children:m}),t[8]=f,t[9]=r,t[10]=p,t[11]=m,t[12]=h):h=t[12],h},ri=e=>{"use forget";let t=(0,Z.c)(9),{children:n,conversation:r,isReady:i,target:a}=e;if(r==null)return n;let o;t[0]===a?o=t[1]:(o=a??{contentReferenceIndex:-1,messageId:``},t[0]=a,t[1]=o);let s=o,c=i&&a!=null,l;t[2]===n?l=t[3]:(l=e=>(0,$.jsxs)(`div`,{className:`group/keyboard-or-hover relative`,children:[n,e.isVisible?(0,$.jsx)(`div`,{className:`pointer-events-none absolute end-2 top-2 z-10`,children:(0,$.jsx)(`div`,{className:`cant-hover:hidden`,children:(0,$.jsx)(pt,{action:e})})}):null]}),t[2]=n,t[3]=l);let u;return t[4]!==s||t[5]!==r||t[6]!==c||t[7]!==l?(u=(0,$.jsx)(ft,{category:ze.InlineAppBlock,conversation:r,isReady:c,target:s,children:l}),t[4]=s,t[5]=r,t[6]=c,t[7]=l,t[8]=u):u=t[8],u}}));export{yt as S,Rt as _,ii as a,xt as b,sr as c,On as d,Mn as f,Tt as g,Bt as h,gr as i,cr as l,zt as m,Rr as n,lr as o,Vt as p,Fr as r,hr as s,yr as t,Dn as u,St as v,bt as x,Ct as y};
//# sourceMappingURL=e3b746a6-ftf98uxfeokdacif.js.map