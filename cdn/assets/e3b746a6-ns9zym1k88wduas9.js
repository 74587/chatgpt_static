const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-k0gg7nqhhigwdmgp.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-czr0yidjr2nfbyu4.js","assets/2340486e-hpg4hay6kru8ymfa.js","assets/conversation-small-c431vewu39vgorgf.js","assets/30901919-nqr4tfpuxopg4v7g.js","assets/c470f5ab-i94qtgyivkpj7s3u.js","assets/0e5afe53-op6gpk0bayu9azdu.js","assets/conversation-small-jmrveqya.css","assets/8b34dbc2-hbsrtxva442xw5y7.js","assets/82782bc9-nhbijphj5dkm4hbw.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{$4 as r,AZ as i,Cd as a,E3 as o,FZ as s,GV as c,HQ as l,IU as u,J4 as d,LU as f,Mc as p,Pc as m,Rq as h,S3 as g,SS as _,T3 as v,TN as y,Td as b,UQ as x,WV as S,XI as ee,XM as C,a$ as w,av as T,b_ as te,c2 as E,c3 as ne,cj as D,dj as O,do as k,e3 as A,f2 as re,gN as j,hq as ie,i$ as M,iN as N,mq as P,nN as F,o3 as ae,oN as oe,oj as se,ov as ce,ro as I,sj as le,xS as L,x_ as R,zq as ue}from"./4813494d-czr0yidjr2nfbyu4.js";import{An as z,Fn as de,In as fe,Ln as pe,Pn as B,Rn as V,mn as H,pn as me,xn as U}from"./2340486e-hpg4hay6kru8ymfa.js";import{$3 as he,ESn as ge,FE as _e,G3 as ve,GE as ye,Gn as be,HE as xe,J3 as Se,K3 as Ce,Kn as W,OSn as we,Ou as Te,Q3 as Ee,Qvn as De,W3 as Oe,Z3 as ke,Zvn as Ae,_x as je,_xn as G,gx as Me,hCt as Ne,i6 as Pe,ku as Fe,mCt as Ie,n6 as Le,pCt as Re,q3 as ze,r6 as K,vxn as q}from"./conversation-small-c431vewu39vgorgf.js";import{EE as Be,TE as Ve,bx as He,fw as Ue,pw as We,yx as Ge}from"./30901919-nqr4tfpuxopg4v7g.js";import{i as Ke,l as qe,n as Je,s as Ye,t as Xe,u as Ze}from"./8d846022-dneku8yw6gysg6ku.js";import{i as Qe,n as $e,r as et}from"./91969468-cusqw9oz9ebryrb2.js";import{n as tt,t as nt}from"./4d271a7b-hjdlr79q57gglkca.js";import{n as rt,r as it}from"./58bafdef-jg9y5fjhs035gmu5.js";import{a as J,i as at}from"./e01e2324-d5p4wbsnnr2go64p.js";import{i as ot,t as st}from"./5dc32f04-o44ihfwa4zr8z7wh.js";import{n as ct,t as lt}from"./066a83b9-ixgs9m3467z5e73y.js";import{i as ut,n as dt,r as ft,t as pt}from"./9eb56efa-k0ecxbwnynp18son.js";import{i as mt,n as ht,r as gt,t as _t}from"./cc79834b-jzhrsqcvetm78fb4.js";function vt(){return d(`2779568043`)}function yt(){return d(`3864712762`)}function bt(){return r(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var xt=e((()=>{A()}));function St({messageId:e,refIndex:t}){return`appblock:${e}:${t}`}var Ct=e((()=>{}));function wt({errorSource:e,errorType:t,networkPolicy:n,outcome:r,readySignal:i,renderMode:a,surface:o,variant:s}){let c={network_policy:n,surface:o};return e!=null&&(c.error_source=e),t!=null&&(c.error_type=t),r!=null&&(c.outcome=r),i!=null&&(c.ready_signal=i),a!=null&&(c.render_mode=a),s!=null&&(c.variant=s),c}function Tt(){return typeof performance<`u`?performance.now():Date.now()}function Et(e){return new TextEncoder().encode(e).byteLength/1024}function Dt(e){return e instanceof Error?e.name:`unknown`}function Ot(e,t,n=1){o.count(g.APP_BLOCKS,e,wt(t),n)}function kt(e,t,n){o.hist(g.APP_BLOCKS,e,wt(n),t)}function At({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,jt.useRef)(Tt()),i=(0,jt.useRef)(null),a=(0,jt.useRef)(!1),o=(0,jt.useRef)(!1),s=le(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=le((n=e)=>{o.current||(o.current=!0,kt(X,Et(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:le((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=Tt(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),Ot(Ft,t);let _=(e,n)=>{f||(f=!0,Ot(Pt,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=Tt();kt(Nt,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,kt(Y,s-r.current,t),n!=null&&kt(Lt,s-n,t))},y=(e,t)=>{if(s(),typeof window>`u`){v(e,t);return}i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,t)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=Tt(),g=n,kt(It,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{!e()||p||(p=!0,s(),Ot(Mt,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var jt,Y,Mt,X,Nt,Pt,Ft,It,Lt,Rt=e((()=>{v(),se(),jt=n(V()),Y=`app_block.first_render_time_ms`,Mt=`app_block.load.failure`,X=`app_block.payload_size_kb`,Nt=`app_block.ready_to_first_paint_ms`,Pt=`app_block.render.outcome`,Ft=`app_block.render.start`,It=`app_block.sandbox_eval_to_ready_ms`,Lt=`app_block.widget_ref_to_first_paint_ms`}));function zt(e){return e==="default"||e===`open`?e:null}function Bt({explicitStyleMode:e,libraryFileId:t}){return e??(t==null?`default`:`open`)}var Vt=e((()=>{})),Ht,Ut=e((()=>{Ht=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),Wt=e((()=>{})),Gt,Kt=e((()=>{Wt(),Gt=`/cdn/assets/app-block-sandbox-foundation-l4fcvweu.css`})),qt,Jt=e((()=>{qt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){--app-block-slider-track:color-mix(in srgb, var(--viz-text) 16%, transparent);--app-block-slider-thumb-shadow:color-mix(in srgb, var(--viz-text) 18%, transparent);appearance:none;background:linear-gradient(var(--app-block-slider-track), var(--app-block-slider-track)) center / 100% 4px no-repeat;cursor:pointer;border:0;border-radius:9999px;width:100%;height:28px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.5}:where(input[type=range])::-webkit-slider-runnable-track{background:0 0;border:0;height:28px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;margin-top:5px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-webkit-slider-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-webkit-slider-thumb{transform:scale(1.06)}:where(input[type=range])::-moz-range-track{background:var(--app-block-slider-track);border:0;border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-progress{background:var(--viz-accent);border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-thumb{border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-moz-range-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-moz-range-thumb{transform:scale(1.06)}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),Yt=e((()=>{})),Xt,Zt=e((()=>{Yt(),Xt=`/cdn/assets/app-block-sandbox-iimeogb3.css`}));function Qt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var $t=e((()=>{}));function en(e){return String.raw(dn||=Qt([`<script>
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
<\/script>`]))}));function bn(){"use forget";let e=(0,xn.useContext)(Sn);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var xn,Sn,Cn=e((()=>{xn=n(V()),Sn=(0,xn.createContext)(null)})),wn,Tn=e((()=>{ie(),H(),wn=P(()=>me(()=>import(`./7aa2b76f-k0gg7nqhhigwdmgp.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}));function En(e){"use forget";let t=(0,kn.c)(40),{additionalResourceDomains:n,children:r,code:i,conversationId:a,source:o,styleMode:s,title:c}=e,l=`app-block:${o.appBlockId}:${(0,An.useId)()}`,u=(0,An.useRef)(null),[d,f]=(0,An.useState)(null),p=o.appBlockId,m=o.libraryFileId,h=o.messageId,g=o.refIndex,_=a??null,v;t[0]!==_||t[1]!==p?(v={appBlockId:p,conversationId:_},t[0]=_,t[1]=p,t[2]=v):v=t[2];let y=v,b=x(Oe),S;t[3]!==b||t[4]!==y?(S=Se(b,y),t[3]=b,t[4]=y,t[5]=S):S=t[5];let ee=S,C=b?.appBlockId===p&&b.conversationId===_&&(b.isOriginalVersion===!0||b.versionNumber!=null),w=ee||C,T;t[6]!==b||t[7]!==l||t[8]!==y?(T=ke(b,y,l),t[6]=b,t[7]=l,t[8]=y,t[9]=T):T=t[9];let te=T,E;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(E=()=>{u.current?.focus()},t[10]=E):E=t[10];let ne=E,D=d?.supportsAtomicMove?d:void 0,O;t[11]!==p||t[12]!==m||t[13]!==h||t[14]!==g?(O={appBlockId:p,libraryFileId:m,messageId:h,refIndex:g},t[11]=p,t[12]=m,t[13]=h,t[14]=g,t[15]=O):O=t[15];let k;t[16]!==n||t[17]!==i||t[18]!==s||t[19]!==D||t[20]!==O||t[21]!==c?(k={additionalResourceDomains:n,code:i,focusOnClose:ne,sharedPreview:D,source:O,styleMode:s,title:c},t[16]=n,t[17]=i,t[18]=s,t[19]=D,t[20]=O,t[21]=c,t[22]=k):k=t[22];let A=k,re,j;t[23]!==A||t[24]!==ee||t[25]!==y?(re=()=>{ee&&Ee(y,A)},j=[A,ee,y],t[23]=A,t[24]=ee,t[25]=y,t[26]=re,t[27]=j):(re=t[26],j=t[27]),(0,An.useEffect)(re,j);let ie;t[28]!==A||t[29]!==te||t[30]!==y?(ie=()=>{ve(y,te,A)},t[28]=A,t[29]=te,t[30]=y,t[31]=ie):ie=t[31];let M=ie,N;t[32]!==w||t[33]!==C||t[34]!==M||t[35]!==d?(N={isExpanded:w,isViewingHistoricalVersion:C,openExpandedView:M,setSharedPreview:f,sharedPreview:d,triggerRef:u},t[32]=w,t[33]=C,t[34]=M,t[35]=d,t[36]=N):N=t[36];let P=N,F;return t[37]!==r||t[38]!==P?(F=(0,jn.jsx)(Sn.Provider,{value:P,children:r}),t[37]=r,t[38]=P,t[39]=F):F=t[39],F}function Dn(e){"use forget";let t=(0,kn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,headerTitleContent:o,title:s}=e,c=gt(),l;t[0]===i?l=t[1]:(l=()=>i==null?0:Te(i).height$()??0,t[0]=i,t[1]=l);let u=x(l),d=c===`fullscreen`&&n&&i!=null?u:0,f=o??s,p;t[2]===f?p=t[3]:(p=(0,jn.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:f}),t[2]=f,t[3]=p);let m;t[4]!==a||t[5]!==p?(m=(0,jn.jsxs)(_t.Header,{className:`pb-1`,children:[p,a]}),t[4]=a,t[5]=p,t[6]=m):m=t[6];let h;t[7]===d?h=t[8]:(h={paddingBottom:d},t[7]=d,t[8]=h);let g;t[9]===r?g=t[10]:(g=(0,jn.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=g);let _;t[11]!==h||t[12]!==g?(_=(0,jn.jsx)(_t.Body,{className:`bg-token-bg-primary overflow-hidden`,style:h,children:g}),t[11]=h,t[12]=g,t[13]=_):_=t[13];let v;return t[14]!==m||t[15]!==_?(v=(0,jn.jsxs)(jn.Fragment,{children:[m,_]}),t[14]=m,t[15]=_,t[16]=v):v=t[16],v}function On(e){"use forget";let t=(0,kn.c)(5),{conversation:n,paneId:r}=e,i=mt(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,jn.jsx)(wn,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var kn,An,jn,Mn=e((()=>{kn=U(),Fe(),ht(),l(),An=n(V()),Cn(),ze(),Tn(),jn=pe()}));function Nn(){"use forget";let e=(0,Pn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,Fn.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,Fn.jsx)(z,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var Pn,Fn,In=e((()=>{Pn=U(),de(),Fn=pe()}));function Ln(e,t){"use forget";let n=(0,zn.c)(39),r=t===void 0||t,i=fe(),a;n[0]!==i||n[1]!==e?(a=e?i.formatMessage(Un.generatingApp,{title:e}):i.formatMessage(Un.creatingInterface),n[0]=i,n[1]=e,n[2]=a):a=n[2];let o=a,s;n[3]===i?s=n[4]:(s=i.formatMessage(Un.sketchingInterface),n[3]=i,n[4]=s);let c;n[5]===i?c=n[6]:(c=i.formatMessage(Un.shapingLayout),n[5]=i,n[6]=c);let l;n[7]===i?l=n[8]:(l=i.formatMessage(Un.arrangingPieces),n[7]=i,n[8]=l);let u;n[9]===i?u=n[10]:(u=i.formatMessage(Un.polishingVisuals),n[9]=i,n[10]=u);let d;n[11]===i?d=n[12]:(d=i.formatMessage(Un.tuningInputs),n[11]=i,n[12]=d);let f;n[13]===i?f=n[14]:(f=i.formatMessage(Un.addingInteractivity),n[13]=i,n[14]=f);let p;n[15]===i?p=n[16]:(p=i.formatMessage(Un.wiringControls),n[15]=i,n[16]=p);let m;n[17]===i?m=n[18]:(m=i.formatMessage(Un.composingInteractions),n[17]=i,n[18]=m);let h;n[19]===i?h=n[20]:(h=i.formatMessage(Un.calibratingPreview),n[19]=i,n[20]=h);let g;n[21]===i?g=n[22]:(g=i.formatMessage(Un.refiningDetails),n[21]=i,n[22]=g);let _;n[23]!==o||n[24]!==h||n[25]!==g||n[26]!==s||n[27]!==c||n[28]!==l||n[29]!==u||n[30]!==d||n[31]!==f||n[32]!==p||n[33]!==m?(_=[o,s,c,l,u,d,f,p,m,h,g],n[23]=o,n[24]=h,n[25]=g,n[26]=s,n[27]=c,n[28]=l,n[29]=u,n[30]=d,n[31]=f,n[32]=p,n[33]=m,n[34]=_):_=n[34];let v=_,[y,b]=(0,Bn.useState)(0),x,S;return n[35]!==r||n[36]!==v.length?(x=()=>{if(!r)return;let e=window.setInterval(()=>{b(e=>Math.min(e+1,v.length-1))},Hn);return()=>{window.clearInterval(e)}},S=[r,v.length],n[35]=r,n[36]=v.length,n[37]=x,n[38]=S):(x=n[37],S=n[38]),(0,Bn.useEffect)(x,S),v[y]??v[0]??``}function Rn(e){"use forget";let t=(0,zn.c)(2),{title:n}=e,r=Ln(n),i;return t[0]===r?i=t[1]:(i=(0,Vn.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,role:`status`,children:(0,Vn.jsx)(st,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:r})}),t[0]=r,t[1]=i),i}var zn,Bn,Vn,Hn,Un,Wn,Gn=e((()=>{zn=U(),ot(),w(),Bn=n(V()),de(),Vn=pe(),Hn=2800,Un=B({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}}),Wn=e=>{"use forget";let t=(0,zn.c)(11),{isVisible:n,title:r}=e,i=Ln(r,n),a=!n,o=n?`grid-rows-[1fr] opacity-100`:`grid-rows-[0fr] opacity-0`,s;t[0]===o?s=t[1]:(s=M(`grid shrink-0 transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none`,o),t[0]=o,t[1]=s);let c=n&&`loading-shimmer-pure-text motion-reduce:animate-none`,l;t[2]===c?l=t[3]:(l=M(`text-token-text-secondary inline-block font-sans font-medium`,c),t[2]=c,t[3]=l);let u;t[4]!==i||t[5]!==l?(u=(0,Vn.jsx)(`div`,{className:`min-h-0 overflow-hidden`,children:(0,Vn.jsx)(`div`,{className:`pb-3`,children:(0,Vn.jsx)(`span`,{className:l,children:i})})}),t[4]=i,t[5]=l,t[6]=u):u=t[6];let d;return t[7]!==a||t[8]!==s||t[9]!==u?(d=(0,Vn.jsx)(`div`,{"aria-atomic":`true`,"aria-hidden":a,"aria-live":`polite`,className:s,role:`status`,children:u}),t[7]=a,t[8]=s,t[9]=u,t[10]=d):d=t[10],d}}));function Kn(e){let t=new Map,n=new Map,r=null,i=null;for(let a of e){let e=a.metadata?.content_references;if(Array.isArray(e)&&e.forEach((e,r)=>{let i=Jn({contentReference:e,messageId:a.id,refIndex:r});i!=null&&(t.set(i.appBlockId,i),i.libraryFileId!=null&&n.set(i.libraryFileId,i.appBlockId))}),a.author.role===E.User){(a.metadata?.attachments??[]).forEach((e,r)=>{let i=qn({attachment:e,messageId:a.id,refIndex:r});i==null||i.libraryFileId==null||n.has(i.libraryFileId)||(t.set(i.appBlockId,i),n.set(i.libraryFileId,i.appBlockId))});let e=a.metadata?.focused_artifact;if(e!=null){let n=e.type===ar?t.get(e.artifact_id)??null:null;r=n!=null&&n.messageId===e.source_message_id&&n.refIndex===e.source_ref_index&&(n.libraryFileId==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e.library_file_id}else{let e=a.metadata?.open_in_app_block_view,n=e==null?null:t.get(e.app_block_id)??null;r=e!=null&&n!=null&&n.messageId===e.message_id&&n.refIndex===e.ref_index&&(n.libraryFileId==null||e.library_file_id==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e?.library_file_id??null}}let o=ee(a);if(o?.status!==`created`)continue;let s=n.get(o.libraryFileId),c=s==null?null:t.get(s)??null;if(c==null&&o.origin!=null){let e=o.origin.messageId,n=[...t.values()].filter(t=>t.messageId===e);c=n.length===1?n[0]:null}c==null&&s==null&&r!=null&&r.libraryFileId==null&&(i==null||i===o.libraryFileId)&&(c=r),c!=null&&(c.libraryFileId==null&&c.content!=null&&nr(a)||(n.set(o.libraryFileId,c.appBlockId),t.set(c.appBlockId,{...c,content:null,currentContentFileId:o.newContentFileId,latestPatchMessageId:a.id,libraryFileId:o.libraryFileId,libraryFileVersionNumber:o.newVersionNumber})))}return t}function qn({attachment:e,messageId:t,refIndex:n}){return e.library_artifact_type!==ar||e.library_file_id==null?null:{appBlockId:St({messageId:t,refIndex:n}),content:null,currentContentFileId:e.id??null,entrypoint:`index.html`,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:e.library_file_id,libraryFileName:e.name,libraryFileVersionNumber:null,mimeType:e.mime_type??null,messageId:t,refIndex:n,styleMode:null,title:e.name.replace(/\.html$/i,``)}}function Jn({contentReference:e,messageId:t,refIndex:n}){if(typeof e!=`object`||!e||!(`type`in e)||!(`category`in e)||e.type!==or||e.category!==ar||!(`data`in e))return null;let r=e.data;if(typeof r!=`object`||!r)return null;let i=Yn(r,`content`),a=Yn(r,`entrypoint`)??`index.html`,o=er(r,a),s=Zn(o,`library_file_id`);return i==null&&s==null?null:{appBlockId:Yn(r,`app_block_id`)??St({messageId:t,refIndex:n}),bundleVersion:Xn(r,`bundle_version`)??void 0,content:i,currentContentFileId:Zn(o,`current_content_file_id`),entrypoint:a,iconSvg:Yn(r,`icon_svg`),language:tr(),latestPatchMessageId:null,libraryFileId:s,libraryFileName:Zn(o,`library_file_name`),libraryFileVersionNumber:$n(Qn(o,`library_file_version_number`)),mimeType:Zn(o,`mime_type`),messageId:t,refIndex:n,styleMode:zt(Yn(r,`style_mode`)),title:Yn(r,`display_name`)??Yn(r,`title`)}}function Yn(e,t){let n=null;return t===`app_block_id`&&`app_block_id`in e&&(n=e.app_block_id),t===`content`&&`content`in e&&(n=e.content),t===`current_content_file_id`&&`current_content_file_id`in e&&(n=e.current_content_file_id),t===`display_name`&&`display_name`in e&&(n=e.display_name),t===`entrypoint`&&`entrypoint`in e&&(n=e.entrypoint),t===`icon_svg`&&`icon_svg`in e&&(n=e.icon_svg),t===`library_file_id`&&`library_file_id`in e&&(n=e.library_file_id),t===`library_file_name`&&`library_file_name`in e&&(n=e.library_file_name),t===`mime_type`&&`mime_type`in e&&(n=e.mime_type),t===`path`&&`path`in e&&(n=e.path),t===`style_mode`&&`style_mode`in e&&(n=e.style_mode),t===`title`&&`title`in e&&(n=e.title),typeof n==`string`&&n.trim()!==``?n:null}function Xn(e,t){if(t===`bundle_version`&&`bundle_version`in e){let t=e.bundle_version;if(typeof t==`number`)return t}if(t===`library_file_version_number`&&`library_file_version_number`in e){let t=e.library_file_version_number;if(typeof t==`number`)return t}return null}function Zn(e,t){return typeof e!=`object`||!e?null:Yn(e,t)}function Qn(e,t){return typeof e!=`object`||!e?null:Xn(e,t)}function $n(...e){for(let t of e)if(t!=null)return t;return null}function er(e,t){if(!(`files`in e)||!Array.isArray(e.files))return null;let n=null;for(let r of e.files)if(!(typeof r!=`object`||!r)&&Yn(r,`library_file_id`)!=null&&(n??=r,Yn(r,`path`)===t))return r;return n}function tr(){return`html`}function nr(e){let t=e.metadata?.shared_conversation_id;return typeof t==`string`&&t.trim()!==``}function rr(e,t){return e.appBlockId===t.appBlockId&&e.bundleVersion===t.bundleVersion&&e.content===t.content&&e.currentContentFileId===t.currentContentFileId&&e.entrypoint===t.entrypoint&&e.iconSvg===t.iconSvg&&e.language===t.language&&e.latestPatchMessageId===t.latestPatchMessageId&&e.libraryFileId===t.libraryFileId&&e.libraryFileName===t.libraryFileName&&e.libraryFileVersionNumber===t.libraryFileVersionNumber&&e.mimeType===t.mimeType&&e.messageId===t.messageId&&e.refIndex===t.refIndex&&e.styleMode===t.styleMode&&e.title===t.title}function ir(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e){let e=t.get(n);if(e==null||!rr(r,e))return!1}return!0}var ar,or,sr,cr=e((()=>{re(),N(),m(),_e(),i(),Ct(),Vt(),ar=`app_block`,or=`client_defined_widget`,sr=C(e=>s(()=>Kn(p(e).flatMap(e=>e.messages)),{equals:ir}))}));function lr({appBlockId:e,conversation:t}){return t==null?null:sr(t).get(e)??null}function ur(e){return e?.serverId$()??void 0}function dr({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:Ie(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function fr({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return Re({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:b(e)?`missing`:`failed`})}),()=>{a.abort()}}function pr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??mr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function mr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var hr=e((()=>{a(),Ne(),cr()})),gr=t({AppBlock:()=>yr,AppBlockPreviewLoadingState:()=>Rr,AppBlockSandboxPreview:()=>Fr});function _r(e){let t=e.search($r),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function vr(e){let t=_r(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(ei))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(ti)!=null}function yr(e){"use forget";let t=(0,Z.c)(118),{additionalResourceDomains:n,appBlockId:r,authoritativeCode:i,authoritativeSource:a,bind:o,code:s,collapseWhenSuperseded:c,currentContentFileId:l,displayMode:u,id:d,captureConsoleMessages:f,clientThreadId:p,iconSvg:m,isStreaming:h,isTurnStreaming:g,libraryFileId:_,libraryFileVersionNumber:v,messageId:b,onConsoleMessagesChange:S,onReadyChange:ee,progressiveStreaming:C,ref:w,refIndex:T,styleMode:te,title:E,variant:ne,widgetName:D,widgetRefSeenAtMs:O}=e,A=c===void 0||c,re=f!==void 0&&f,j=h!==void 0&&h,ie=g!==void 0&&g,M=C!==void 0&&C,N=ne===void 0?`inline`:ne,P=oe(),ae;t[0]===P?ae=t[1]:(ae=()=>P!=null&&De(P),t[0]=P,t[1]=ae);let se=x(ae),ce;t[2]!==p||t[3]!==P?(ce=p==null?P:F(p),t[2]=p,t[3]=P,t[4]=ce):ce=t[4];let I=ce,le=b!=null&&T!=null?St({messageId:b,refIndex:T}):void 0,L=r??le??St({messageId:b??d,refIndex:T??0}),R=x(()=>xe({conversation:P??null,instanceId:L,messageId:b,refIndex:T}))??u,ue=x(()=>a!=null||R!=null?null:lr({appBlockId:L,conversation:P??null})),z=a??ue,de;t[5]===P?de=t[6]:(de=()=>ur(P??null),t[5]=P,t[6]=de);let fe=x(de),pe=y(P?.id),B=fe??pe,V;t[7]!==l||t[8]!==_||t[9]!==v||t[10]!==B||t[11]!==z?(V=dr({currentContentFileId:l,libraryFileId:_,libraryFileVersionNumber:v,serverThreadId:B,source:z}),t[7]=l,t[8]=_,t[9]=v,t[10]=B,t[11]=z,t[12]=V):V=t[12];let H=V,[me,U]=(0,Q.useState)(null),[he,ge]=(0,Q.useState)(0),_e;t[13]!==he||t[14]!==H.libraryContentKey?(_e=[H.libraryContentKey,he],t[13]=he,t[14]=H.libraryContentKey,t[15]=_e):_e=t[15];let ye=_e.join(`\0`),be,Se;t[16]!==i||t[17]!==ye||t[18]!==H.contentFileId||t[19]!==H.libraryFileId||t[20]!==R||t[21]!==B?(be=()=>{if(!(i!=null||R===`collapsed`))return fr({contentFileId:H.contentFileId,libraryContentKey:ye,libraryFileId:H.libraryFileId,onContentStateChange:U,serverThreadId:B})},Se=[i,H.contentFileId,H.libraryFileId,ye,R,B],t[16]=i,t[17]=ye,t[18]=H.contentFileId,t[19]=H.libraryFileId,t[20]=R,t[21]=B,t[22]=be,t[23]=Se):(be=t[22],Se=t[23]),(0,Q.useEffect)(be,Se);let W=pr({appBlockId:L,contentFileId:H.contentFileId,currentContentFileId:l,libraryContent:me,libraryContentKey:ye,libraryFileId:_,libraryFileVersionNumber:v,source:z}),we=me?.key===ye?me:null,Te;t[24]!==W?.libraryFileId||t[25]!==_?(Te=()=>Ce(W?.libraryFileId??_),t[24]=W?.libraryFileId,t[25]=_,t[26]=Te):Te=t[26];let Ee=x(Te),Oe=W?.libraryFileVersionNumber??v,ke=Ee!=null&&(Oe==null||Ee.versionNumber>=Oe)?Ee.code:void 0,Ae=ke??i??W?.content??s??null,je=W?.iconSvg??m??null,G=W?.libraryFileId??_,Ne=G==null&&i==null&&ke==null&&l==null&&z?.currentContentFileId==null&&z?.latestPatchMessageId==null,Pe;t[27]!==Ne||t[28]!==s||t[29]!==b||t[30]!==Ae||t[31]!==T||t[32]!==z?(Pe=Ne?z==null?b!=null&&T!=null&&s!=null&&Ae===s?{messageId:b,refIndex:T}:null:z.messageId.length>0&&z.content!=null&&Ae===z.content?{messageId:z.messageId,refIndex:z.refIndex}:null:null,t[27]=Ne,t[28]=s,t[29]=b,t[30]=Ae,t[31]=T,t[32]=z,t[33]=Pe):Pe=t[33];let Fe=Pe,Ie=N===`artifact`,Le=W?.styleMode??te??(Ie&&M?`open`:void 0),ze;t[34]!==G||t[35]!==Le?(ze=Bt({explicitStyleMode:Le,libraryFileId:G}),t[34]=G,t[35]=Le,t[36]=ze):ze=t[36];let K=ze,q=W?.title??E,Be;t[37]===P?Be=t[38]:(Be=()=>P!=null&&k(P)?`work`:`chat`,t[37]=P,t[38]=Be);let Ve=x(Be),He;t[39]===Symbol.for(`react.memo_cache_sentinel`)?(He=bt(),t[39]=He):He=t[39];let Ue=He,We=M,Ge=Ie&&K===`open`,Ke=R===`collapsed`||R==null&&A&&W?.latestPatchMessageId!=null&&W.latestPatchMessageId!==b,qe=s!=null||l!=null,Je;t[40]!==p||t[41]!==s||t[42]!==P?.id||t[43]!==l||t[44]!==L||t[45]!==v||t[46]!==b||t[47]!==G||t[48]!==K||t[49]!==q||t[50]!==T||t[51]!==B||t[52]!==z?.messageId?(Je=async e=>{let t=s;if(t==null&&l!=null)try{t=await Re({abortSignal:new AbortController().signal,fileId:l,serverThreadId:B})}catch{return}t!=null&&ve({appBlockId:L,conversationId:P?.id??p??null,isOriginalVersion:!0,versionNumber:v??void 0},`app-block:${L}:original`,{code:t,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:L,libraryFileId:G,messageId:z?.messageId??b,refIndex:T},styleMode:K,title:q})},t[40]=p,t[41]=s,t[42]=P?.id,t[43]=l,t[44]=L,t[45]=v,t[46]=b,t[47]=G,t[48]=K,t[49]=q,t[50]=T,t[51]=B,t[52]=z?.messageId,t[53]=Je):Je=t[53],P?.id,z?.messageId;let Ye=Je;if(j&&!We){let e;return t[54]===q?e=t[55]:(e=(0,$.jsx)(Rn,{title:q}),t[54]=q,t[55]=e),e}let Xe=se&&s!=null;if(we?.status===`missing`&&!Xe)return null;if(Ke){let e=qe?Ye:void 0,n;return t[56]!==q||t[57]!==e?(n=(0,$.jsx)(Nr,{onView:e,title:q}),t[56]=q,t[57]=e,t[58]=n):n=t[58],n}let Ze=Ae??(We&&j?``:null);if(Ze==null){if(W?.latestPatchMessageId!=null){let e=P?.id??p,n=we?.status===`failed`,r;t[59]===ge?r=t[60]:(r=()=>ge(br),t[59]=ge,t[60]=r);let i;return t[61]!==L||t[62]!==Ie||t[63]!==je||t[64]!==q||t[65]!==e||t[66]!==n||t[67]!==r?(i=(0,$.jsx)(wr,{appBlockId:L,conversationId:e,hasFailed:n,iconSvg:je,onRetry:r,showHeader:Ie,title:q}),t[61]=L,t[62]=Ie,t[63]=je,t[64]=q,t[65]=e,t[66]=n,t[67]=r,t[68]=i):i=t[68],i}let e;return t[69]===q?e=t[70]:(e=(0,$.jsx)(Rn,{title:q}),t[69]=q,t[70]=e),e}let Qe;t[71]!==p||t[72]!==Ve||t[73]!==j||t[74]!==ie||t[75]!==b||t[76]!==q||t[77]!==T?(Qe=!j&&!ie&&p!=null&&b!=null&&T!=null&&vt()?{reference:{clientThreadId:p,messageId:b,referenceIndex:T},target:{kind:`app_block`,metadata:{...q==null?{}:{title:q},tab:Ve}}}:void 0,t[71]=p,t[72]=Ve,t[73]=j,t[74]=ie,t[75]=b,t[76]=q,t[77]=T,t[78]=Qe):Qe=t[78];let $e=Qe,et=P?.id??p,tt=z?.messageId??b,nt;t[79]!==L||t[80]!==G||t[81]!==T||t[82]!==tt?(nt={appBlockId:L,libraryFileId:G,messageId:tt,refIndex:T},t[79]=L,t[80]=G,t[81]=T,t[82]=tt,t[83]=nt):nt=t[83];let rt=Ge&&Ue&&!j,it=P?.id??p,J;t[84]!==Fe||t[85]!==D?(J=Fe==null?void 0:{contentReferenceIndex:Fe.refIndex,messageId:Fe.messageId,widgetName:D??Me.AppBlock,widgetType:Me.AppBlock},t[84]=Fe,t[85]=D,t[86]=J):J=t[86];let at;t[87]!==n||t[88]!==o||t[89]!==re||t[90]!==L||t[91]!==$e||t[92]!==d||t[93]!==j||t[94]!==S||t[95]!==ee||t[96]!==je||t[97]!==K||t[98]!==q||t[99]!==w||t[100]!==Ze||t[101]!==I||t[102]!==We||t[103]!==Ge||t[104]!==rt||t[105]!==it||t[106]!==J||t[107]!==N||t[108]!==O?(at=(0,$.jsx)(xr,{additionalResourceDomains:n,appBlockId:L,bind:o,canOpen:rt,captureConsoleMessages:re,clientThreadId:it,code:Ze,feedback:$e,iconSvg:je,id:d,isStreaming:j,onConsoleMessagesChange:S,onReadyChange:ee,progressiveStreaming:We,ref:w,showArtifactCard:Ge,shareConversation:I,shareTarget:J,styleMode:K,title:q,variant:N,widgetRefSeenAtMs:O}),t[87]=n,t[88]=o,t[89]=re,t[90]=L,t[91]=$e,t[92]=d,t[93]=j,t[94]=S,t[95]=ee,t[96]=je,t[97]=K,t[98]=q,t[99]=w,t[100]=Ze,t[101]=I,t[102]=We,t[103]=Ge,t[104]=rt,t[105]=it,t[106]=J,t[107]=N,t[108]=O,t[109]=at):at=t[109];let ot;return t[110]!==n||t[111]!==K||t[112]!==q||t[113]!==Ze||t[114]!==et||t[115]!==nt||t[116]!==at?(ot=(0,$.jsx)(En,{additionalResourceDomains:n,code:Ze,conversationId:et,styleMode:K,source:nt,title:q,children:at}),t[110]=n,t[111]=K,t[112]=q,t[113]=Ze,t[114]=et,t[115]=nt,t[116]=at,t[117]=ot):ot=t[117],ot}function br(e){return e+1}function xr(e){"use forget";let t=(0,Z.c)(69),{additionalResourceDomains:n,appBlockId:r,bind:i,canOpen:a,captureConsoleMessages:o,clientThreadId:s,code:c,feedback:l,iconSvg:u,id:d,isStreaming:f,onConsoleMessagesChange:p,onReadyChange:m,progressiveStreaming:h,ref:g,shareConversation:_,shareTarget:v,showArtifactCard:y,styleMode:b,title:x,variant:S,widgetRefSeenAtMs:ee}=e,{isExpanded:C,isViewingHistoricalVersion:w,openExpandedView:T,setSharedPreview:te,sharedPreview:E,triggerRef:ne}=bn(),D=(0,Q.useContext)(be),O;t[0]===n?O=t[1]:(O=n??[],t[0]=n,t[1]=O);let k;t[2]!==c||t[3]!==d||t[4]!==b||t[5]!==O?(k=[d,b,c,...O],t[2]=c,t[3]=d,t[4]=b,t[5]=O,t[6]=k):k=t[6];let A=k.join(`\0`),[re,j]=(0,Q.useState)(null),ie=!f&&re===A,M;t[7]===T?M=t[8]:(M=()=>{G(),T()},t[7]=T,t[8]=M);let N=M,P;t[9]!==m||t[10]!==A?(P=(e,t)=>{j(e?A:null),m?.(e,t)},t[9]=m,t[10]=A,t[11]=P):P=t[11];let F=P,ae;t[12]!==n||t[13]!==r||t[14]!==i||t[15]!==o||t[16]!==s||t[17]!==c||t[18]!==F||t[19]!==d||t[20]!==f||t[21]!==p||t[22]!==h||t[23]!==g||t[24]!==b||t[25]!==x||t[26]!==S||t[27]!==ee?(ae=(0,$.jsx)(Fr,{appBlockId:r,additionalResourceDomains:n,bind:i,code:c,id:d,isStreaming:f,captureConsoleMessages:o,clientThreadId:s,onConsoleMessagesChange:p,onReadyChange:F,presentationSurface:`inline`,progressiveStreaming:h,ref:g,styleMode:b,title:x,variant:S,widgetRefSeenAtMs:ee}),t[12]=n,t[13]=r,t[14]=i,t[15]=o,t[16]=s,t[17]=c,t[18]=F,t[19]=d,t[20]=f,t[21]=p,t[22]=h,t[23]=g,t[24]=b,t[25]=x,t[26]=S,t[27]=ee,t[28]=ae):ae=t[28];let oe;t[29]!==D||t[30]!==ae?(oe={element:ae,sandboxPolicy:D},t[29]=D,t[30]=ae,t[31]=oe):oe=t[31];let se=oe,I;t[32]===se?I=t[33]:(I=()=>se,t[32]=se,t[33]=I);let L=le(I),R;t[34]!==r||t[35]!==s||t[36]!==L||t[37]!==te?(R=e=>{if(e==null)return;let{preview:t,sourceToken:n}=he({appBlockId:r,content:L(),conversationId:s??null,inlineContainer:e});return te(t),()=>{let e=Oe();K(t,n,e?.sharedPreview===t)}},t[34]=r,t[35]=s,t[36]=L,t[37]=te,t[38]=R):R=t[38];let ue=R,z,de;t[39]!==se||t[40]!==E?(de=()=>{E!=null&&Pe(E,se)},z=[se,E],t[39]=se,t[40]=E,t[41]=z,t[42]=de):(z=t[41],de=t[42]),ce(de,z);let fe=w?N:void 0,pe;t[43]!==u||t[44]!==fe||t[45]!==x||t[46]!==ne?(pe=(0,$.jsx)(Dr,{iconSvg:u,onOpen:fe,openButtonRef:ne,title:x}),t[43]=u,t[44]=fe,t[45]=x,t[46]=ne,t[47]=pe):pe=t[47];let B=C?pe:null,V;t[48]===ue?V=t[49]:(V=(0,$.jsx)(`div`,{ref:ue,className:`w-full`}),t[48]=ue,t[49]=V);let H;t[50]!==a||t[51]!==l||t[52]!==N||t[53]!==u||t[54]!==ie||t[55]!==f||t[56]!==_||t[57]!==v||t[58]!==y||t[59]!==V||t[60]!==x||t[61]!==ne?(H=(0,$.jsx)(Cr,{canOpen:a,expandButtonRef:ne,feedback:l,iconSvg:u,isShareReady:ie,shareConversation:_,shareTarget:v,isStreaming:f,showArtifactCard:y,title:x,onOpen:N,children:V}),t[50]=a,t[51]=l,t[52]=N,t[53]=u,t[54]=ie,t[55]=f,t[56]=_,t[57]=v,t[58]=y,t[59]=V,t[60]=x,t[61]=ne,t[62]=H):H=t[62];let me;t[63]!==C||t[64]!==H?(me=(0,$.jsx)(`div`,{hidden:C,children:H}),t[63]=C,t[64]=H,t[65]=me):me=t[65];let U;return t[66]!==B||t[67]!==me?(U=(0,$.jsxs)($.Fragment,{children:[B,me]}),t[66]=B,t[67]=me,t[68]=U):U=t[68],U}function Sr(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:o,titleClassName:s}=e,c;t[0]===r?c=t[1]:(c=M(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=c);let l=s??`truncate text-base font-semibold`,u;t[2]===l?u=t[3]:(u=M(`text-token-text-primary`,l),t[2]=l,t[3]=u);let d=o??i,f;t[4]!==u||t[5]!==d?(f=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:u,children:d})}),t[4]=u,t[5]=d,t[6]=f):f=t[6];let p;t[7]!==a||t[8]!==f?(p=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,f]}),t[7]=a,t[8]=f,t[9]=p):p=t[9];let m;return t[10]!==n||t[11]!==c||t[12]!==p?(m=(0,$.jsxs)(`div`,{className:c,children:[p,n]}),t[10]=n,t[11]=c,t[12]=p,t[13]=m):m=t[13],m}function Cr(e){"use forget";let t=(0,Z.c)(20),{canOpen:n,children:r,expandButtonRef:i,feedback:a,iconSvg:o,isShareReady:s,isStreaming:c,onOpen:l,shareConversation:u,shareTarget:d,showArtifactCard:f,title:p}=e,m=fe(),h;t[0]===m?h=t[1]:(h=m.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=m,t[1]=h);let g=h,_;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==g||t[6]!==o||t[7]!==s||t[8]!==c||t[9]!==l||t[10]!==u||t[11]!==d||t[12]!==f||t[13]!==p?(_=f?(0,$.jsxs)(`div`,{className:M(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,c&&`cursor-wait`),"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)(Sr,{action:(0,$.jsx)(ni,{canOpen:n,conversation:u,expandButtonRef:i,isReady:s,onOpen:l,target:d}),className:`min-h-13 px-4 py-2`,fallbackTitle:g,leading:c?(0,$.jsx)(S,{className:`icon-md text-token-text-primary shrink-0`}):(0,$.jsx)(kr,{iconSvg:o}),title:p}),(0,$.jsx)(`div`,{children:r})]}):(0,$.jsx)(ri,{conversation:u,isReady:s,target:d,children:r}),t[2]=n,t[3]=r,t[4]=i,t[5]=g,t[6]=o,t[7]=s,t[8]=c,t[9]=l,t[10]=u,t[11]=d,t[12]=f,t[13]=p,t[14]=_):_=t[14];let v;t[15]===a?v=t[16]:(v=a==null?null:(0,$.jsx)(Tr,{...a}),t[15]=a,t[16]=v);let y;return t[17]!==_||t[18]!==v?(y=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[_,v]}),t[17]=_,t[18]=v,t[19]=y):y=t[19],y}function wr(e){"use forget";let t=(0,Z.c)(17),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:o,showHeader:s,title:c}=e,l=x(Oe),u=fe(),d;t[0]===u?d=t[1]:(d=u.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=u,t[1]=d);let f=d;if(Se(l,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==c?(e=(0,$.jsx)(Dr,{iconSvg:a,title:c}),t[2]=a,t[3]=c,t[4]=e):e=t[4],e}let p;t[5]!==f||t[6]!==a||t[7]!==s||t[8]!==c?(p=s?(0,$.jsx)(Sr,{className:`mb-2`,fallbackTitle:f,leading:(0,$.jsx)(kr,{iconSvg:a}),title:c}):null,t[5]=f,t[6]=a,t[7]=s,t[8]=c,t[9]=p):p=t[9];let m;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(m={minHeight:Br},t[10]=m):m=t[10];let h;t[11]!==i||t[12]!==o?(h=(0,$.jsx)(`div`,{className:`relative w-full`,style:m,children:i?(0,$.jsx)(zr,{onRetry:o}):(0,$.jsx)(Rr,{})}),t[11]=i,t[12]=o,t[13]=h):h=t[13];let g;return t[14]!==p||t[15]!==h?(g=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[p,h]}),t[14]=p,t[15]=h,t[16]=g):g=t[16],g}function Tr(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(x(Er))return null;let o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(lt,{}),t[0]=o):o=t[0];let s;return t[1]!==i||t[2]!==n||t[3]!==r?(s=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)(at,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:o})}),t[1]=i,t[2]=n,t[3]=r,t[4]=s):s=t[4],s}function Er(){return it()}function Dr(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=fe(),s,c,l,u,d;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),d=`not-prose relative clear-both my-4 w-full max-w-full`,u=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=Sr,l=r==null?void 0:(0,$.jsx)(L,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=l,t[7]=u,t[8]=d):(s=t[4],c=t[5],l=t[6],u=t[7],d=t[8]);let f;t[9]===n?f=t[10]:(f=(0,$.jsx)(Or,{iconSvg:n}),t[9]=n,t[10]=f);let p;t[11]!==s||t[12]!==c||t[13]!==l||t[14]!==f||t[15]!==a?(p=(0,$.jsx)(s,{action:l,className:`w-full`,fallbackTitle:c,leading:f,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=l,t[14]=f,t[15]=a,t[16]=p):p=t[16];let m;t[17]!==u||t[18]!==p?(m=(0,$.jsx)(`div`,{className:u,children:p}),t[17]=u,t[18]=p,t[19]=m):m=t[19];let h;return t[20]!==d||t[21]!==m?(h=(0,$.jsx)(`div`,{className:d,children:m}),t[20]=d,t[21]=m,t[22]=h):h=t[22],h}function Or(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(kr,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function kr(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=Ar(r),t[0]=r,t[1]=a);let o=a,s;return t[2]!==i||t[3]!==o?(s=o==null?(0,$.jsx)(Ue,{"aria-hidden":`true`,className:M(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:M(`icon-md shrink-0`,i),children:(0,$.jsx)(ge,{svgString:o,className:`h-full w-full`})}),t[2]=i,t[3]=o,t[4]=s):s=t[4],s}function Ar(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>Jr||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Yr)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Zr.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!jr(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function jr(e){let t=e.replace(Xr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Xr)){let e=t[1],n=t[2];if(!Qr.has(e)||!Mr(e,n))return!1}return!0}function Mr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function Nr(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=fe(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(z,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function Pr(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:i}=e,a=fe(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let s=o,c;t[2]===r?c=t[3]:(c=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=c);let l;t[4]!==s||t[5]!==i||t[6]!==c?(l=(0,$.jsx)(L,{ref:i,type:`button`,icon:Ge,color:`ghost`,size:`medium`,label:s,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:c}),t[4]=s,t[5]=i,t[6]=c,t[7]=l):l=t[7];let u;return t[8]!==n||t[9]!==s||t[10]!==l?(u=(0,$.jsx)(te,{label:s,className:n,children:l}),t[8]=n,t[9]=s,t[10]=l,t[11]=u):u=t[11],u}function Fr(e){"use forget";let t=(0,Z.c)(173),{appBlockId:n,additionalResourceDomains:r,bind:i,clientThreadId:a,code:o,id:s,captureConsoleMessages:c,isStreaming:l,onConsoleMessagesChange:d,onReadyChange:f,presentationSurface:p,progressiveStreaming:m,ref:h,styleMode:g,surface:_,title:v,variant:y,widgetRefSeenAtMs:b}=e,S=l!==void 0&&l,ee=m!==void 0&&m,C=g===void 0?`default`:g,w=_===void 0?`inline`:_,T=y===void 0?`inline`:y,te=fe(),E=(0,Q.useRef)(null),D=(0,Q.useRef)(null),k=qe(i),[A,re]=(0,Q.useState)(k.values),j=ue(A,k.values)?A:k.values;j!==A&&re(j);let ie=[...k.callbacks.keys()],[N,P]=(0,Q.useState)(ie),F=ue(N,ie)?N:ie;F!==N&&P(F);let ae=(0,Q.useRef)(j),oe=(0,Q.useRef)(F),se=(0,Q.useRef)(k.callbacks),I=i!=null,L=(0,Q.useRef)(!1),R=(0,Q.useRef)(!1),de=(0,Q.useRef)(null),pe=(0,Q.useRef)(null),B=(0,Q.useRef)(null),V=(0,Q.useRef)(null),H=(0,Q.useRef)(null),me=(0,Q.useRef)(null),U=(0,Q.useRef)(null),he=(0,Q.useRef)(0),ge=(0,Q.useRef)(null),_e=(0,Q.useRef)(null),ve;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(ve=[],t[0]=ve):ve=t[0];let ye=(0,Q.useRef)(ve),xe=O(),Se=x(u),{allowDependencyNetworkRequestsWithoutCanvasAccess:Ce}=(0,Q.useContext)(be),W=et()||Ce,we=Qe(a)&&!Ce,Te=xe?`dark`:`light`,Ee=te.locale,De;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(De={status:`streaming`},t[1]=De):De=t[1];let[Oe,ke]=(0,Q.useState)(De),Ae=Oe.status===`finalized`&&Oe.html!==o,je=ee&&!S&&(T===`artifact`||Oe.status===`failed`),G=ee&&w===`inline`&&Oe.status!==`static`&&!je&&!Ae,Me=G&&S&&T===`artifact`&&!vr(o),Ne=Me?0:Vr,Pe=W?`execution-enabled`:`execution-disabled`,Fe=we?`network-enabled`:`network-disabled`,Ie=I?`bindings-enabled`:`bindings-disabled`,Le=G?`progressive-app-block-stream`:o,Re;t[2]===r?Re=t[3]:(Re=r??[],t[2]=r,t[3]=Re);let ze;t[4]!==Se||t[5]!==Ee||t[6]!==C||t[7]!==w||t[8]!==Ie||t[9]!==Le||t[10]!==Re||t[11]!==Pe||t[12]!==Fe||t[13]!==Te?(ze=[Te,Se,w,C,Ee,Pe,Fe,Ie,Le,...Re],t[4]=Se,t[5]=Ee,t[6]=C,t[7]=w,t[8]=Ie,t[9]=Le,t[10]=Re,t[11]=Pe,t[12]=Fe,t[13]=Te,t[14]=ze):ze=t[14];let K=ze.join(`\0`),q;t[15]===r?q=t[16]:(q=ln(r),t[15]=r,t[16]=q);let Be=q,Ve=we?`deps_only`:`disabled`,He=w===`inline`?T:void 0,Ue=G?`progressive`:`static`,We;t[17]!==w||t[18]!==Ve||t[19]!==He||t[20]!==Ue?(We={networkPolicy:Ve,surface:w,variant:He,renderMode:Ue},t[17]=w,t[18]=Ve,t[19]=He,t[20]=Ue,t[21]=We):We=t[21];let Ge=We,[Ke,$e]=(0,Q.useState)(0),[nt,rt]=(0,Q.useState)(null),it=nt?.signature===K?nt.status:null,J=it===`ready`,at=J||it===`failed_after_ready`,ot=G&&it===`failed`,st=!S&&!G&&it===`failed`,ct=p??w,lt=ee&&ct===`inline`&&T===`inline`,ut=G&&ct===`inline`&&S&&!st,dt;t[22]!==o||t[23]!==Ge||t[24]!==b?(dt={content:o,metricTags:Ge,widgetRefSeenAtMs:b},t[22]=o,t[23]=Ge,t[24]=b,t[25]=dt):dt=t[25];let{cancelFirstPaintFrame:ft,startRunMetrics:pt}=At(dt),mt,ht;t[26]!==J||t[27]!==f?(mt=()=>{f?.(J)},ht=[J,f],t[26]=J,t[27]=f,t[28]=mt,t[29]=ht):(mt=t[28],ht=t[29]),(0,Q.useEffect)(mt,ht);let gt,_t;t[30]!==F||t[31]!==j||t[32]!==k.callbacks?(gt=()=>{ae.current=j,oe.current=F,se.current=k.callbacks},_t=[F,j,k.callbacks],t[30]=F,t[31]=j,t[32]=k.callbacks,t[33]=gt,t[34]=_t):(gt=t[33],_t=t[34]),ce(gt,_t);let vt;t[35]===Symbol.for(`react.memo_cache_sentinel`)?(vt=e=>{D.current===e&&E.current?.updateAppBlockMessenger?.(Ye(e,ae.current,oe.current))},t[35]=vt):vt=t[35];let yt=le(vt),bt;t[36]===yt?bt=t[37]:(bt=e=>{let t=D.current;if(t==null)return;let n=Ze(e,t),r=n&&se.current.get(n.name);if(n!=null&&r){let e=()=>{ne.postTask(()=>yt(t))};try{Promise.resolve(r(...n.args)).then(e,e)}catch{e()}}},t[36]=yt,t[37]=bt);let xt=le(bt),St;t[38]!==I||t[39]!==J||t[40]!==yt?(St=()=>{let e=D.current;!J||!I||e==null||yt(e)},t[38]=I,t[39]=J,t[40]=yt,t[41]=St):St=t[41];let Ct;t[42]!==F||t[43]!==j||t[44]!==I||t[45]!==J||t[46]!==yt?(Ct=[F,j,I,J,yt],t[42]=F,t[43]=j,t[44]=I,t[45]=J,t[46]=yt,t[47]=Ct):Ct=t[47],(0,Q.useEffect)(St,Ct);let wt,Et;t[48]!==J||t[49]!==p?(wt=()=>{!J||p==null||E.current?.updateAppBlockSurface?.(p)},Et=[J,p],t[48]=J,t[49]=p,t[50]=wt,t[51]=Et):(wt=t[50],Et=t[51]),(0,Q.useEffect)(wt,Et);let Ot,kt;t[52]===Symbol.for(`react.memo_cache_sentinel`)?(Ot=()=>({clearCapturedConsoleMessages:()=>{ye.current=[]},captureScreenshotDataUrl:async()=>(await E.current?.screenshot())?.imageBase64??null,focus:()=>{E.current?.focus()}}),kt=[],t[52]=Ot,t[53]=kt):(Ot=t[52],kt=t[53]),(0,Q.useImperativeHandle)(h,Ot,kt);let jt;t[54]===Symbol.for(`react.memo_cache_sentinel`)?(jt=()=>{ge.current!=null&&(window.clearTimeout(ge.current),ge.current=null)},t[54]=jt):jt=t[54];let Y=le(jt),Mt;t[55]===Symbol.for(`react.memo_cache_sentinel`)?(Mt=()=>{_e.current!=null&&(window.clearTimeout(_e.current),_e.current=null)},t[55]=Mt):Mt=t[55];let X=le(Mt),Nt;t[56]!==J||t[57]!==G?(Nt=()=>{if(!G||!J||H.current==null)return;let e=V.current,t=E.current;if(e==null||t?.updateAppBlockStream==null||R.current)return;let n=he.current;V.current=null,pe.current=Tt(),B.current=e.html,e.isFinal&&(R.current=!0);let r=()=>he.current!==n||H.current==null?Promise.resolve():t.updateAppBlockStream?.(e)??Promise.resolve(),i=U.current,a=i==null?r():i.then(r);U.current=a,a.then(()=>{U.current===a&&(U.current=null);let t=H.current;he.current!==n||t==null||(vr(e.html)&&t.markFirstPaint(),e.isFinal&&(t.reportPayloadSize(e.html),ke({status:`finalized`,html:e.html})))},e=>{U.current===a&&(U.current=null),he.current===n&&(e instanceof DOMException&&e.name===`AbortError`||me.current?.(`stream_update`,Dt(e)))})},t[56]=J,t[57]=G,t[58]=Nt):Nt=t[58];let Pt=le(Nt),Ft;t[59]!==Se||t[60]!==c||t[61]!==Y||t[62]!==X||t[63]!==o||t[64]!==I||t[65]!==W||t[66]!==we||t[67]!==Ae||t[68]!==S||t[69]!==Ee||t[70]!==d||t[71]!==f||t[72]!==p||t[73]!==K||t[74]!==Oe.status||t[75]!==je||t[76]!==G||t[77]!==pt||t[78]!==C||t[79]!==w||t[80]!==Te?(Ft=()=>{if(!W)return;if(Oe.status===`failed`){if(S)return;ke({status:`static`}),$e(Lr);return}(Ae||je&&Oe.status!==`static`)&&ke({status:`static`});let e=G&&E.current?.updateAppBlockStream!=null;if(G&&!e){S||ke({status:`static`});return}L.current=!0,R.current=!1,de.current=null,pe.current=null,B.current=null,V.current=null,H.current=null,me.current=null,U.current=null,X(),he.current+=1;let t=he.current;Y(),rt(null),D.current=I?crypto.randomUUID():null;let{expectReadySignal:n,html:r,frameColorScheme:i}=un(o,Te,Ee,Se,w,{loadTailwind:we,progressiveStreaming:e,syncPresentationSurface:p!=null,styleMode:C}),a=!1,s=!1,l=!1,u=!1,m=!1,h=()=>he.current===t,g=pt(h,{deferFirstPaint:e,deferPayloadSize:e});e&&(H.current=g);let _=e=>{!c||d==null||!h()||(ye.current=e,!u&&(u=!0,ne.postTask(()=>{u=!1,h()&&d(ye.current)},{priority:`background`})))},v=e=>{!h()||a||l||(a=!0,Y(),g.markReady(e),!m&&(m=!0,ne.postTask(()=>{m=!1,!(!h()||l)&&(s=!0,rt({signature:K,status:`ready`}))},{priority:`background`})))},y=(t,n)=>{!h()||l||(l=!0,Y(),X(),V.current=null,H.current=null,e&&ke({status:`failed`}),rt({signature:K,status:s?`failed_after_ready`:`failed`}),g.reportFailure(t,n),ne.postTask(()=>{h()&&(e?f?.(!1):f?.(!1,`failure`))},{priority:`background`}))};me.current=y,ye.current=[],_([]),ge.current=window.setTimeout(()=>{y(`sandbox_eval`,`ready_timeout`)},Ur),(async()=>{let t=E.current?.evalAsync({code:r,...D.current==null?{}:{additionalGlobals:{__appBlockMessenger:Ye(D.current,ae.current,oe.current)}},expectReadySignal:n,language:`html`,frameColorScheme:i,shouldPreservePreviewOnFatalError:()=>h()&&e&&s});if(t==null){y(`sandbox_eval`,`missing_generator`);return}for(;;){let e=await t.next();if(e.done){h()&&!a&&y(`sandbox_eval`,`generator_completed_without_ready`);break}h()&&(_([...ye.current,e.value]),e.value.type===Je.ENVIRONMENT_STATUS&&e.value.status===Xe.RUNNING_CODE&&v(`running_code`),e.value.type===Je.RUN_COMPLETE&&(e.value.wasFatalError?y(`runtime`,`fatal_runtime_error`):(v(`run_complete`),g.reportSuccess(`run_complete`))),await ne.yield())}})().catch(e=>{h()&&(e instanceof DOMException&&e.name===`AbortError`||y(`sandbox_eval`,Dt(e)))})},t[59]=Se,t[60]=c,t[61]=Y,t[62]=X,t[63]=o,t[64]=I,t[65]=W,t[66]=we,t[67]=Ae,t[68]=S,t[69]=Ee,t[70]=d,t[71]=f,t[72]=p,t[73]=K,t[74]=Oe.status,t[75]=je,t[76]=G,t[77]=pt,t[78]=C,t[79]=w,t[80]=Te,t[81]=Ft):Ft=t[81];let It=le(Ft),Lt;t[82]!==Y||t[83]!==X?(Lt=()=>{he.current+=1,L.current=!1,R.current=!1,de.current=null,B.current=null,V.current=null,H.current=null,me.current=null,U.current=null,Y(),X(),rt(null),$e(Ir)},t[82]=Y,t[83]=X,t[84]=Lt):Lt=t[84];let Rt=le(Lt),zt;t[85]===ct?zt=t[86]:(zt=ct===`inline`?{margin:-4,width:`calc(100% + ${Hr*2}px)`}:void 0,t[85]=ct,t[86]=zt);let Bt=zt,Vt;t[87]!==ft||t[88]!==Y||t[89]!==X||t[90]!==It?(Vt=()=>{It();let e=E.current;return()=>{he.current+=1,D.current=null,H.current=null,me.current=null,U.current=null,Y(),X(),ft(),e?.stop()}},t[87]=ft,t[88]=Y,t[89]=X,t[90]=It,t[91]=Vt):Vt=t[91];let Ht;t[92]!==ft||t[93]!==Y||t[94]!==X||t[95]!==W||t[96]!==K||t[97]!==It||t[98]!==Ke?(Ht=[ft,Y,X,W,K,It,Ke],t[92]=ft,t[93]=Y,t[94]=X,t[95]=W,t[96]=K,t[97]=It,t[98]=Ke,t[99]=Ht):Ht=t[99],(0,Q.useEffect)(Vt,Ht);let Ut,Wt;t[100]!==S||t[101]!==It||t[102]!==G?(Ut=()=>{!G||S||L.current||E.current?.updateAppBlockStream!=null||It()},Wt=[S,It,G],t[100]=S,t[101]=It,t[102]=G,t[103]=Ut,t[104]=Wt):(Ut=t[103],Wt=t[104]),(0,Q.useEffect)(Ut,Wt);let Gt,Kt;if(t[105]!==X||t[106]!==o||t[107]!==Pt||t[108]!==st||t[109]!==J||t[110]!==S||t[111]!==G||t[112]!==T?(Gt=()=>{if(!G||!J||st||R.current||E.current?.updateAppBlockStream==null)return;let e=S?_r(o):o;if(S&&(V.current?.html??B.current)===e)return;if(V.current={html:e,isFinal:!S},!S){X(),Pt();return}let t=pe.current;if(t==null&&T===`artifact`&&(de.current??=Tt(),t=de.current),t==null){Pt();return}let n=T===`artifact`?Gr:Wr,r=Tt()-t;if(r>=n){Pt();return}return _e.current=window.setTimeout(()=>{_e.current=null,Pt()},n-r),X},Kt=[X,o,Pt,st,J,S,G,T],t[105]=X,t[106]=o,t[107]=Pt,t[108]=st,t[109]=J,t[110]=S,t[111]=G,t[112]=T,t[113]=Gt,t[114]=Kt):(Gt=t[113],Kt=t[114]),(0,Q.useEffect)(Gt,Kt),!W){let e;return t[115]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(Nn,{}),t[115]=e):e=t[115],e}let qt=lt&&`flex-col`,Jt=ct===`inline`&&(Me?`h-0 min-h-0 overflow-hidden`:`min-h-[120px] overflow-visible`),Yt=ct===`stage`&&`h-full min-h-0`,Xt;t[116]!==qt||t[117]!==Jt||t[118]!==Yt?(Xt=M(`flex w-full`,qt,Jt,Yt),t[116]=qt,t[117]=Jt,t[118]=Yt,t[119]=Xt):Xt=t[119];let Zt;t[120]!==lt||t[121]!==ut||t[122]!==v?(Zt=lt?(0,$.jsx)(Wn,{isVisible:ut,title:v}):null,t[120]=lt,t[121]=ut,t[122]=v,t[123]=Zt):Zt=t[123];let Qt=ct===`inline`?`flex-none`:`w-full`,$t=ut&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,en;t[124]!==Qt||t[125]!==$t?(en=M(`relative min-w-0`,Qt,$t),t[124]=Qt,t[125]=$t,t[126]=en):en=t[126];let tn=`${Ke}:${we?`network-enabled`:`network-disabled`}`,nn;t[127]!==n||t[128]!==a||t[129]!==s?(nn=JSON.stringify([a??null,n??s]),t[127]=n,t[128]=a,t[129]=s,t[130]=nn):nn=t[130];let rn;t[131]===te?rn=t[132]:(rn=te.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[131]=te,t[132]=rn);let an=we?`deps-only`:`none`,on=we?Kr:qr,sn=at?0:-1,cn=I?xt:void 0,dn=ct===`inline`&&C===`open`,fn=ct!==`stage`,pn=G?Ne:Br,mn;t[133]!==s||t[134]!==It||t[135]!==Be||t[136]!==tn||t[137]!==nn||t[138]!==rn||t[139]!==an||t[140]!==on||t[141]!==sn||t[142]!==cn||t[143]!==dn||t[144]!==fn||t[145]!==pn?(mn=(0,$.jsx)(tt,{id:s,sandboxOriginId:nn,title:rn,visuallyHidden:!1,networkPolicy:an,additionalResourceDomains:Be,sandboxPermissions:on,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:sn,onRetryCodeRun:It,onAppBlockMessage:cn,transparentBackground:dn,useIntrinsicHeight:fn,intrinsicHeightFallback:pn,ref:E},tn),t[133]=s,t[134]=It,t[135]=Be,t[136]=tn,t[137]=nn,t[138]=rn,t[139]=an,t[140]=on,t[141]=sn,t[142]=cn,t[143]=dn,t[144]=fn,t[145]=pn,t[146]=mn):mn=t[146];let hn;t[147]===ut?hn=t[148]:(hn=ut?(0,$.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 z-10 cursor-wait`}):null,t[147]=ut,t[148]=hn);let gn;t[149]!==ot||t[150]!==st||t[151]!==at||t[152]!==G?(gn=!at&&!st&&(!G||ot)?(0,$.jsx)(Rr,{}):null,t[149]=ot,t[150]=st,t[151]=at,t[152]=G,t[153]=gn):gn=t[153];let _n;t[154]!==st||t[155]!==Rt?(_n=st?(0,$.jsx)(zr,{onRetry:Rt}):null,t[154]=st,t[155]=Rt,t[156]=_n):_n=t[156];let vn;t[157]!==Bt||t[158]!==ut||t[159]!==en||t[160]!==mn||t[161]!==hn||t[162]!==gn||t[163]!==_n?(vn=(0,$.jsxs)(`div`,{"aria-busy":ut,className:en,style:Bt,children:[mn,hn,gn,_n]}),t[157]=Bt,t[158]=ut,t[159]=en,t[160]=mn,t[161]=hn,t[162]=gn,t[163]=_n,t[164]=vn):vn=t[164];let yn;t[165]!==ut||t[166]!==T?(yn=ut&&T===`artifact`?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[165]=ut,t[166]=T,t[167]=yn):yn=t[167];let bn;return t[168]!==Xt||t[169]!==Zt||t[170]!==vn||t[171]!==yn?(bn=(0,$.jsxs)(`div`,{className:Xt,children:[Zt,vn,yn]}),t[168]=Xt,t[169]=Zt,t[170]=vn,t[171]=yn,t[172]=bn):bn=t[172],bn}function Ir(e){return e+1}function Lr(e){return e+1}function Rr(){"use forget";let e=(0,Z.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsx)(S,{className:`icon-sm text-token-text-tertiary`}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,role:`status`,children:[t,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})})]}),e[1]=n):n=e[1],n}function zr(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(z,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(L,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii=e((()=>{Z=U(),_(),rt(),W(),ct(),c(),f(),nt(),R(),We(),He(),Ve(),q(),$e(),N(),Ae(),ut(),je(),ae(),l(),j(),we(),I(),D(),T(),se(),J(),dt(),Ne(),Ke(),w(),h(),Q=n(V()),de(),yn(),Rt(),xt(),Mn(),ze(),In(),Cn(),Gn(),Ct(),Le(),ye(),Vt(),hr(),$=pe(),Br=432,Vr=120,Hr=4,Ur=15e3,Wr=100,Gr=350,Kr=`allow-scripts allow-same-origin allow-forms`,qr=`allow-scripts allow-same-origin`,Jr=12e3,Yr=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Xr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Zr=new Set([`svg`,`path`]),Qr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),$r=/<script(?:\s|>)/i,ei=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,ti=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,ni=e=>{"use forget";let t=(0,Z.c)(13),{canOpen:n,conversation:r,expandButtonRef:i,isReady:a,onOpen:o,target:s}=e,c;t[0]!==n||t[1]!==i||t[2]!==o?(c=n&&o!=null?(0,$.jsx)(Pr,{ref:i,className:`shrink-0`,onClick:o}):null,t[0]=n,t[1]=i,t[2]=o,t[3]=c):c=t[3];let l=c;if(r==null)return l;let u;t[4]===s?u=t[5]:(u=s??{contentReferenceIndex:-1,messageId:``},t[4]=s,t[5]=u);let d=u,f=a&&s!=null,p;t[6]===l?p=t[7]:(p=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(te,{label:n,children:(0,$.jsx)(L,{type:`button`,icon:Be,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),l]}):l},t[6]=l,t[7]=p);let m;return t[8]!==d||t[9]!==r||t[10]!==f||t[11]!==p?(m=(0,$.jsx)(ft,{category:Me.AppBlock,conversation:r,isReady:f,target:d,children:p}),t[8]=d,t[9]=r,t[10]=f,t[11]=p,t[12]=m):m=t[12],m},ri=e=>{"use forget";let t=(0,Z.c)(9),{children:n,conversation:r,isReady:i,target:a}=e;if(r==null)return n;let o;t[0]===a?o=t[1]:(o=a??{contentReferenceIndex:-1,messageId:``},t[0]=a,t[1]=o);let s=o,c=i&&a!=null,l;t[2]===n?l=t[3]:(l=e=>(0,$.jsxs)(`div`,{className:`group/keyboard-or-hover relative`,children:[n,e.isVisible?(0,$.jsx)(`div`,{className:`pointer-events-none absolute end-2 top-2 z-10`,children:(0,$.jsx)(`div`,{className:`cant-hover:hidden`,children:(0,$.jsx)(pt,{action:e})})}):null]}),t[2]=n,t[3]=l);let u;return t[4]!==s||t[5]!==r||t[6]!==c||t[7]!==l?(u=(0,$.jsx)(ft,{category:Me.InlineAppBlock,conversation:r,isReady:c,target:s,children:l}),t[4]=s,t[5]=r,t[6]=c,t[7]=l,t[8]=u):u=t[8],u}}));export{yt as S,Rt as _,ii as a,xt as b,sr as c,On as d,Mn as f,Tt as g,Bt as h,gr as i,cr as l,zt as m,Rr as n,lr as o,Vt as p,Fr as r,hr as s,yr as t,Dn as u,St as v,bt as x,Ct as y};
//# sourceMappingURL=e3b746a6-ns9zym1k88wduas9.js.map