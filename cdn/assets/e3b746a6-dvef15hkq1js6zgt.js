const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-fuxsrw74c7e2fnsp.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-pyll4vlwvn4vnzw6.js","assets/2340486e-i20axdnmh5jcl165.js","assets/conversation-small-noz53f0j88o5kz9s.js","assets/30901919-qptj5lcm03b4zlvn.js","assets/c470f5ab-b7q4nu9sxuae326r.js","assets/0e5afe53-korud2jscrtt8dfy.js","assets/conversation-small-n2z5o5td.css","assets/8b34dbc2-gswyrapk2yuz8hx7.js","assets/82782bc9-c4p6o2qu22uvve8h.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{$z as r,A2 as i,AD as a,AX as o,Da as s,Du as c,FP as l,FV as u,GX as d,IV as f,Is as p,KX as m,L2 as h,NE as g,NP as _,PP as v,Ps as y,Qb as b,Qz as x,RP as ee,SY as S,T2 as te,Tu as ne,UE as C,VE as w,Z2 as T,Zb as E,_Y as re,_g as D,a1 as ie,e4 as O,eD as k,gg as A,j2 as j,kX as M,l1 as N,oG as P,qj as ae,sG as F,t4 as oe,tD as se,xD as I,ya as L,z2 as ce,zE as le}from"./4813494d-pyll4vlwvn4vnzw6.js";import{Cn as R,Sn as z,Tn as ue,bn as de,en as B,gn as V,wn as H,xn as U,yn as fe}from"./2340486e-i20axdnmh5jcl165.js";import{$0 as pe,B0 as me,Cb as W,Ght as he,H0 as ge,J0 as _e,Jl as ve,K0 as ye,Kht as be,Q0 as G,QZt as xe,Qn as Se,U0 as Ce,V0 as we,WT as Te,XZt as Ee,Z0 as De,ZT as Oe,Zn as ke,eE as Ae,isn as je,q0 as Me,qht as Ne,ql as Pe,rsn as K,vln as Fe,wb as Ie,yln as q,z0 as J}from"./conversation-small-noz53f0j88o5kz9s.js";import{DE as Le,EE as Re,FC as ze,PC as Be,Sx as Ve,xx as He}from"./30901919-qptj5lcm03b4zlvn.js";import{i as Ue,n as We,t as Ge}from"./8d846022-habmttvqwy4a5siq.js";import{a as Ke,i as qe,o as Je}from"./91969468-hr39vtnl93j1pzj8.js";import{n as Ye,t as Xe}from"./4d271a7b-dlw96kvmr3c0dag7.js";import{n as Ze,r as Qe}from"./58bafdef-lg3z0wr3or7knpko.js";import{a as Y,i as $e}from"./e01e2324-jyrctn4tpolzr5bu.js";import{i as X,t as et}from"./5dc32f04-gurinnyh6yehzw41.js";import{n as tt,t as nt}from"./066a83b9-mmg6yu2z9emrhc11.js";import{i as rt,n as it,r as at,t as ot}from"./9eb56efa-k08hhysnxgqksm32.js";import{i as st,n as ct,r as lt,t as ut}from"./cc79834b-ih5eglwuer7bgax9.js";function dt(){return te(`2779568043`)}function ft(){return te(`3864712762`)}function pt(){return i(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var mt=e((()=>{j()}));function ht({messageId:e,refIndex:t}){return`appblock:${e}:${t}`}var gt=e((()=>{}));function _t({errorSource:e,errorType:t,networkPolicy:n,outcome:r,readySignal:i,renderMode:a,surface:o,variant:s}){let c={network_policy:n,surface:o};return e!=null&&(c.error_source=e),t!=null&&(c.error_type=t),r!=null&&(c.outcome=r),i!=null&&(c.ready_signal=i),a!=null&&(c.render_mode=a),s!=null&&(c.variant=s),c}function vt(){return typeof performance<`u`?performance.now():Date.now()}function yt(e){return new TextEncoder().encode(e).byteLength/1024}function bt(e){return e instanceof Error?e.name:`unknown`}function xt(e,t,n=1){oe.count(T.APP_BLOCKS,e,_t(t),n)}function St(e,t,n){oe.hist(T.APP_BLOCKS,e,_t(n),t)}function Ct({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,wt.useRef)(vt()),i=(0,wt.useRef)(null),a=(0,wt.useRef)(!1),o=(0,wt.useRef)(!1),s=v(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=v((n=e)=>{o.current||(o.current=!0,St(Dt,yt(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:v((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=vt(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),xt(At,t);let _=(e,n)=>{f||(f=!0,xt(kt,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=vt();St(Ot,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,St(Tt,s-r.current,t),n!=null&&St(Mt,s-n,t))},y=(e,t)=>{if(s(),typeof window>`u`){v(e,t);return}i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,t)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=vt(),g=n,St(jt,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{!e()||p||(p=!0,s(),xt(Et,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt=e((()=>{O(),_(),wt=n(R()),Tt=`app_block.first_render_time_ms`,Et=`app_block.load.failure`,Dt=`app_block.payload_size_kb`,Ot=`app_block.ready_to_first_paint_ms`,kt=`app_block.render.outcome`,At=`app_block.render.start`,jt=`app_block.sandbox_eval_to_ready_ms`,Mt=`app_block.widget_ref_to_first_paint_ms`}));function Pt(e){return e==="default"||e===`open`?e:null}function Ft({explicitStyleMode:e,libraryFileId:t}){return e??(t==null?`default`:`open`)}var It=e((()=>{})),Lt,Rt=e((()=>{Lt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),zt=e((()=>{})),Bt,Vt=e((()=>{zt(),Bt=`/cdn/assets/app-block-sandbox-foundation-l4fcvweu.css`})),Ht,Ut=e((()=>{Ht=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){--app-block-slider-track:color-mix(in srgb, var(--viz-text) 16%, transparent);--app-block-slider-thumb-shadow:color-mix(in srgb, var(--viz-text) 18%, transparent);appearance:none;background:linear-gradient(var(--app-block-slider-track), var(--app-block-slider-track)) center / 100% 4px no-repeat;cursor:pointer;border:0;border-radius:9999px;width:100%;height:28px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.5}:where(input[type=range])::-webkit-slider-runnable-track{background:0 0;border:0;height:28px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;margin-top:5px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-webkit-slider-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-webkit-slider-thumb{transform:scale(1.06)}:where(input[type=range])::-moz-range-track{background:var(--app-block-slider-track);border:0;border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-progress{background:var(--viz-accent);border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-thumb{border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-moz-range-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-moz-range-thumb{transform:scale(1.06)}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),Wt=e((()=>{})),Gt,Kt=e((()=>{Wt(),Gt=`/cdn/assets/app-block-sandbox-iimeogb3.css`}));function qt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Jt=e((()=>{}));function Yt(e){return String.raw(on||=qt([`<script>
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
`)}function Qt(e){let t=e.trim().replaceAll(`_`,`-`);return t.length===0||!/^[A-Za-z0-9-]+$/.test(t)?`en`:t}function $t(e){if(/^https?:\/\//i.test(e)||typeof window>`u`)return e;let t=window.location.origin;return new URL(e,t).toString()}function en(e){try{return new URL(e).origin}catch{return null}}function tn(e){return dn.has(e)?e:`default`}function nn(e,t){return t===`skybridge`||t===`stage`?e===`dark`?`#212121`:`#ffffff`:e===`dark`?`#000000`:`#fcfcfc`}function rn(e=[]){let t=$t(Gt),n=$t(Bt),r=[en(cn),en(ln),en(t),en(n),...un,...e.map(en)];return Array.from(new Set(r.filter(e=>e!=null)))}function an(e,t=`light`,n=`en`,r=`default`,i=`inline`,{loadTailwind:a=!0,platform:o,progressiveStreaming:s=!1,syncPresentationSurface:c=!1,styleMode:l=`default`}={}){let u=e.trim(),d=c?Yt(l):``;if(!s&&Xt(u))return{html:c?Zt(u,d):u,expectReadySignal:!1};let f=Qt(n),p=l===`open`?Lt:Ht,m=$t(l===`open`?Bt:Gt),h=tn(r),g=nn(t,i),_=i===`skybridge`&&o!=null&&o!==`web`||i===`inline`&&l===`open`,v=[`color-scheme: ${t};`,_?`background-color: transparent;`:`background-color: var(--main-surface-primary, ${g});`].join(` `);return{expectReadySignal:a,html:`<!doctype html>
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
</html>`}}var on,sn,cn,ln,un,dn,fn,pn,mn=e((()=>{Rt(),Vt(),Ut(),Kt(),Jt(),cn=`https://cdn.tailwindcss.com`,ln=`https://images.openai.com`,un=[`https://cdnjs.cloudflare.com`,`https://esm.sh`,`https://cdn.jsdelivr.net`,`https://unpkg.com`,`https://fonts.googleapis.com`,`https://fonts.gstatic.com`,`https://fonts.bunny.net`],dn=new Set([`default`,`blue`,`green`,`yellow`,`purple`,`pink`,`orange`,`black`]),fn=`<style>
  @media (prefers-reduced-motion: no-preference) {
    [data-app-block-stream-enter] {
      animation: app-block-stream-enter 160ms ease-out both;
    }

    @keyframes app-block-stream-enter {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  }
</style>`,pn=String.raw(sn||=qt([`<script>
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
<\/script>`]))}));function hn(){"use forget";let e=(0,gn.useContext)(_n);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var gn,_n,vn=e((()=>{gn=n(R()),_n=(0,gn.createContext)(null)})),yn,bn=e((()=>{F(),ue(),yn=P(()=>H(()=>import(`./7aa2b76f-fuxsrw74c7e2fnsp.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}));function xn(e){"use forget";let t=(0,wn.c)(40),{additionalResourceDomains:n,children:r,code:i,conversationId:a,source:s,styleMode:c,title:l}=e,u=`app-block:${s.appBlockId}:${(0,Tn.useId)()}`,d=(0,Tn.useRef)(null),[f,p]=(0,Tn.useState)(null),m=s.appBlockId,h=s.libraryFileId,g=s.messageId,_=s.refIndex,v=a??null,y;t[0]!==v||t[1]!==m?(y={appBlockId:m,conversationId:v},t[0]=v,t[1]=m,t[2]=y):y=t[2];let b=y,x=o(J),ee;t[3]!==x||t[4]!==b?(ee=Ce(x,b),t[3]=x,t[4]=b,t[5]=ee):ee=t[5];let S=ee,te=x?.appBlockId===m&&x.conversationId===v&&(x.isOriginalVersion===!0||x.versionNumber!=null),ne=S||te,C;t[6]!==x||t[7]!==u||t[8]!==b?(C=ye(x,b,u),t[6]=x,t[7]=u,t[8]=b,t[9]=C):C=t[9];let w=C,T;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(T=()=>{d.current?.focus()},t[10]=T):T=t[10];let E=T,re=f?.supportsAtomicMove?f:void 0,D;t[11]!==m||t[12]!==h||t[13]!==g||t[14]!==_?(D={appBlockId:m,libraryFileId:h,messageId:g,refIndex:_},t[11]=m,t[12]=h,t[13]=g,t[14]=_,t[15]=D):D=t[15];let ie;t[16]!==n||t[17]!==i||t[18]!==c||t[19]!==re||t[20]!==D||t[21]!==l?(ie={additionalResourceDomains:n,code:i,focusOnClose:E,sharedPreview:re,source:D,styleMode:c,title:l},t[16]=n,t[17]=i,t[18]=c,t[19]=re,t[20]=D,t[21]=l,t[22]=ie):ie=t[22];let O=ie,k,A;t[23]!==O||t[24]!==S||t[25]!==b?(k=()=>{S&&Me(b,O)},A=[O,S,b],t[23]=O,t[24]=S,t[25]=b,t[26]=k,t[27]=A):(k=t[26],A=t[27]),(0,Tn.useEffect)(k,A);let j;t[28]!==O||t[29]!==w||t[30]!==b?(j=()=>{me(b,w,O)},t[28]=O,t[29]=w,t[30]=b,t[31]=j):j=t[31];let M=j,N;t[32]!==ne||t[33]!==te||t[34]!==M||t[35]!==f?(N={isExpanded:ne,isViewingHistoricalVersion:te,openExpandedView:M,setSharedPreview:p,sharedPreview:f,triggerRef:d},t[32]=ne,t[33]=te,t[34]=M,t[35]=f,t[36]=N):N=t[36];let P=N,ae;return t[37]!==r||t[38]!==P?(ae=(0,En.jsx)(_n.Provider,{value:P,children:r}),t[37]=r,t[38]=P,t[39]=ae):ae=t[39],ae}function Sn(e){"use forget";let t=(0,wn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,headerTitleContent:s,title:c}=e,l=lt(),u;t[0]===i?u=t[1]:(u=()=>i==null?0:Pe(i).height$()??0,t[0]=i,t[1]=u);let d=o(u),f=l===`fullscreen`&&n&&i!=null?d:0,p=s??c,m;t[2]===p?m=t[3]:(m=(0,En.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:p}),t[2]=p,t[3]=m);let h;t[4]!==a||t[5]!==m?(h=(0,En.jsxs)(ut.Header,{className:`pb-1`,children:[m,a]}),t[4]=a,t[5]=m,t[6]=h):h=t[6];let g;t[7]===f?g=t[8]:(g={paddingBottom:f},t[7]=f,t[8]=g);let _;t[9]===r?_=t[10]:(_=(0,En.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=_);let v;t[11]!==g||t[12]!==_?(v=(0,En.jsx)(ut.Body,{className:`bg-token-bg-primary overflow-hidden`,style:g,children:_}),t[11]=g,t[12]=_,t[13]=v):v=t[13];let y;return t[14]!==h||t[15]!==v?(y=(0,En.jsxs)(En.Fragment,{children:[h,v]}),t[14]=h,t[15]=v,t[16]=y):y=t[16],y}function Cn(e){"use forget";let t=(0,wn.c)(5),{conversation:n,paneId:r}=e,i=st(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,En.jsx)(yn,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var wn,Tn,En,Dn=e((()=>{wn=B(),ve(),ct(),M(),Tn=n(R()),vn(),ge(),bn(),En=z()}));function On(){"use forget";let e=(0,kn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,An.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,An.jsx)(V,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var kn,An,jn=e((()=>{kn=B(),de(),An=z()}));function Mn(e){"use forget";let t=(0,Pn.c)(38),n=U(),r;t[0]!==n||t[1]!==e?(r=e?n.formatMessage(Rn.generatingApp,{title:e}):n.formatMessage(Rn.creatingInterface),t[0]=n,t[1]=e,t[2]=r):r=t[2];let i=r,a;t[3]===n?a=t[4]:(a=n.formatMessage(Rn.sketchingInterface),t[3]=n,t[4]=a);let o;t[5]===n?o=t[6]:(o=n.formatMessage(Rn.shapingLayout),t[5]=n,t[6]=o);let s;t[7]===n?s=t[8]:(s=n.formatMessage(Rn.arrangingPieces),t[7]=n,t[8]=s);let c;t[9]===n?c=t[10]:(c=n.formatMessage(Rn.polishingVisuals),t[9]=n,t[10]=c);let l;t[11]===n?l=t[12]:(l=n.formatMessage(Rn.tuningInputs),t[11]=n,t[12]=l);let u;t[13]===n?u=t[14]:(u=n.formatMessage(Rn.addingInteractivity),t[13]=n,t[14]=u);let d;t[15]===n?d=t[16]:(d=n.formatMessage(Rn.wiringControls),t[15]=n,t[16]=d);let f;t[17]===n?f=t[18]:(f=n.formatMessage(Rn.composingInteractions),t[17]=n,t[18]=f);let p;t[19]===n?p=t[20]:(p=n.formatMessage(Rn.calibratingPreview),t[19]=n,t[20]=p);let m;t[21]===n?m=t[22]:(m=n.formatMessage(Rn.refiningDetails),t[21]=n,t[22]=m);let h;t[23]!==i||t[24]!==a||t[25]!==m||t[26]!==o||t[27]!==s||t[28]!==c||t[29]!==l||t[30]!==u||t[31]!==d||t[32]!==f||t[33]!==p?(h=[i,a,o,s,c,l,u,d,f,p,m],t[23]=i,t[24]=a,t[25]=m,t[26]=o,t[27]=s,t[28]=c,t[29]=l,t[30]=u,t[31]=d,t[32]=f,t[33]=p,t[34]=h):h=t[34];let g=h,[_,v]=(0,Fn.useState)(0),y,b;return t[35]===g.length?(y=t[36],b=t[37]):(y=()=>{let e=window.setInterval(()=>{v(e=>Math.min(e+1,g.length-1))},Ln);return()=>{window.clearInterval(e)}},b=[g.length],t[35]=g.length,t[36]=y,t[37]=b),(0,Fn.useEffect)(y,b),g[_]??g[0]??``}function Nn(e){"use forget";let t=(0,Pn.c)(2),{title:n}=e,r=Mn(n),i;return t[0]===r?i=t[1]:(i=(0,In.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,role:`status`,children:(0,In.jsx)(et,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:r})}),t[0]=r,t[1]=i),i}var Pn,Fn,In,Ln,Rn,zn=e((()=>{Pn=B(),X(),Fn=n(R()),de(),In=z(),Ln=2800,Rn=fe({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}})}));function Bn(e){let t=new Map,n=new Map,r=null,i=null;for(let a of e){let e=a.metadata?.content_references;if(Array.isArray(e)&&e.forEach((e,r)=>{let i=Hn({contentReference:e,messageId:a.id,refIndex:r});i!=null&&(t.set(i.appBlockId,i),i.libraryFileId!=null&&n.set(i.libraryFileId,i.appBlockId))}),a.author.role===ie.User){(a.metadata?.attachments??[]).forEach((e,r)=>{let i=Vn({attachment:e,messageId:a.id,refIndex:r});i==null||i.libraryFileId==null||n.has(i.libraryFileId)||(t.set(i.appBlockId,i),n.set(i.libraryFileId,i.appBlockId))});let e=a.metadata?.focused_artifact;if(e!=null){let n=e.type===$n?t.get(e.artifact_id)??null:null;r=n!=null&&n.messageId===e.source_message_id&&n.refIndex===e.source_ref_index&&(n.libraryFileId==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e.library_file_id}else{let e=a.metadata?.open_in_app_block_view,n=e==null?null:t.get(e.app_block_id)??null;r=e!=null&&n!=null&&n.messageId===e.message_id&&n.refIndex===e.ref_index&&(n.libraryFileId==null||e.library_file_id==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e?.library_file_id??null}}let o=ae(a);if(o?.status!==`created`)continue;let s=n.get(o.libraryFileId),c=s==null?null:t.get(s)??null;if(c==null&&o.origin!=null){let e=o.origin.messageId,n=[...t.values()].filter(t=>t.messageId===e);c=n.length===1?n[0]:null}c==null&&s==null&&r!=null&&r.libraryFileId==null&&(i==null||i===o.libraryFileId)&&(c=r),c!=null&&(c.libraryFileId==null&&c.content!=null&&Xn(a)||(n.set(o.libraryFileId,c.appBlockId),t.set(c.appBlockId,{...c,content:null,currentContentFileId:o.newContentFileId,latestPatchMessageId:a.id,libraryFileId:o.libraryFileId,libraryFileVersionNumber:o.newVersionNumber})))}return t}function Vn({attachment:e,messageId:t,refIndex:n}){return e.library_artifact_type!==$n||e.library_file_id==null?null:{appBlockId:ht({messageId:t,refIndex:n}),content:null,currentContentFileId:e.id??null,entrypoint:`index.html`,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:e.library_file_id,libraryFileName:e.name,libraryFileVersionNumber:null,mimeType:e.mime_type??null,messageId:t,refIndex:n,styleMode:null,title:e.name.replace(/\.html$/i,``)}}function Hn({contentReference:e,messageId:t,refIndex:n}){if(typeof e!=`object`||!e||!(`type`in e)||!(`category`in e)||e.type!==er||e.category!==$n||!(`data`in e))return null;let r=e.data;if(typeof r!=`object`||!r)return null;let i=Un(r,`content`),a=Un(r,`entrypoint`)??`index.html`,o=Jn(r,a),s=Gn(o,`library_file_id`);return i==null&&s==null?null:{appBlockId:Un(r,`app_block_id`)??ht({messageId:t,refIndex:n}),bundleVersion:Wn(r,`bundle_version`)??void 0,content:i,currentContentFileId:Gn(o,`current_content_file_id`),entrypoint:a,iconSvg:Un(r,`icon_svg`),language:Yn(),latestPatchMessageId:null,libraryFileId:s,libraryFileName:Gn(o,`library_file_name`),libraryFileVersionNumber:qn(Kn(o,`library_file_version_number`)),mimeType:Gn(o,`mime_type`),messageId:t,refIndex:n,styleMode:Pt(Un(r,`style_mode`)),title:Un(r,`display_name`)??Un(r,`title`)}}function Un(e,t){let n=null;return t===`app_block_id`&&`app_block_id`in e&&(n=e.app_block_id),t===`content`&&`content`in e&&(n=e.content),t===`current_content_file_id`&&`current_content_file_id`in e&&(n=e.current_content_file_id),t===`display_name`&&`display_name`in e&&(n=e.display_name),t===`entrypoint`&&`entrypoint`in e&&(n=e.entrypoint),t===`icon_svg`&&`icon_svg`in e&&(n=e.icon_svg),t===`library_file_id`&&`library_file_id`in e&&(n=e.library_file_id),t===`library_file_name`&&`library_file_name`in e&&(n=e.library_file_name),t===`mime_type`&&`mime_type`in e&&(n=e.mime_type),t===`path`&&`path`in e&&(n=e.path),t===`style_mode`&&`style_mode`in e&&(n=e.style_mode),t===`title`&&`title`in e&&(n=e.title),typeof n==`string`&&n.trim()!==``?n:null}function Wn(e,t){if(t===`bundle_version`&&`bundle_version`in e){let t=e.bundle_version;if(typeof t==`number`)return t}if(t===`library_file_version_number`&&`library_file_version_number`in e){let t=e.library_file_version_number;if(typeof t==`number`)return t}return null}function Gn(e,t){return typeof e!=`object`||!e?null:Un(e,t)}function Kn(e,t){return typeof e!=`object`||!e?null:Wn(e,t)}function qn(...e){for(let t of e)if(t!=null)return t;return null}function Jn(e,t){if(!(`files`in e)||!Array.isArray(e.files))return null;let n=null;for(let r of e.files)if(!(typeof r!=`object`||!r)&&Un(r,`library_file_id`)!=null&&(n??=r,Un(r,`path`)===t))return r;return n}function Yn(){return`html`}function Xn(e){let t=e.metadata?.shared_conversation_id;return typeof t==`string`&&t.trim()!==``}function Zn(e,t){return e.appBlockId===t.appBlockId&&e.bundleVersion===t.bundleVersion&&e.content===t.content&&e.currentContentFileId===t.currentContentFileId&&e.entrypoint===t.entrypoint&&e.iconSvg===t.iconSvg&&e.language===t.language&&e.latestPatchMessageId===t.latestPatchMessageId&&e.libraryFileId===t.libraryFileId&&e.libraryFileName===t.libraryFileName&&e.libraryFileVersionNumber===t.libraryFileVersionNumber&&e.mimeType===t.mimeType&&e.messageId===t.messageId&&e.refIndex===t.refIndex&&e.styleMode===t.styleMode&&e.title===t.title}function Qn(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e){let e=t.get(n);if(e==null||!Zn(r,e))return!1}return!0}var $n,er,tr,nr=e((()=>{N(),w(),p(),Te(),re(),gt(),It(),$n=`app_block`,er=`client_defined_widget`,tr=g(e=>S(()=>Bn(y(e).flatMap(e=>e.messages)),{equals:Qn}))}));function rr({appBlockId:e,conversation:t}){return t==null?null:tr(t).get(e)??null}function ir(e){return e?.serverId$()??void 0}function ar({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:be(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function or({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return he({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:c(e)?`missing`:`failed`})}),()=>{a.abort()}}function sr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??cr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function cr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var lr=e((()=>{ne(),Ne(),nr()})),ur=t({AppBlock:()=>pr,AppBlockPreviewLoadingState:()=>Mr,AppBlockSandboxPreview:()=>kr});function dr(e){let t=e.search(qr),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function fr(e){let t=dr(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(Jr))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(Yr)!=null}function pr(e){"use forget";let t=(0,Z.c)(116),{additionalResourceDomains:n,appBlockId:r,authoritativeCode:i,authoritativeSource:c,code:l,collapseWhenSuperseded:u,currentContentFileId:d,displayMode:f,id:p,captureConsoleMessages:m,clientThreadId:h,iconSvg:g,isStreaming:_,isTurnStreaming:v,libraryFileId:y,libraryFileVersionNumber:b,messageId:x,onConsoleMessagesChange:ee,onReadyChange:S,progressiveStreaming:te,ref:ne,refIndex:w,styleMode:T,title:E,variant:re,widgetRefSeenAtMs:D}=e,ie=u===void 0||u,O=m!==void 0&&m,k=_!==void 0&&_,A=v!==void 0&&v,j=te!==void 0&&te,M=re===void 0?`inline`:re,N=C(),P;t[0]===N?P=t[1]:(P=()=>N!=null&&je(N),t[0]=N,t[1]=P);let ae=o(P),F;t[2]!==h||t[3]!==N?(F=h==null?N:le(h),t[2]=h,t[3]=N,t[4]=F):F=t[4];let oe=F,se=x!=null&&w!=null?ht({messageId:x,refIndex:w}):void 0,I=r??se??ht({messageId:x??p,refIndex:w??0}),L=o(()=>Oe({conversation:N??null,instanceId:I,messageId:x,refIndex:w}))??f,ce=o(()=>c!=null||L!=null?null:rr({appBlockId:I,conversation:N??null})),R=c??ce,z;t[5]===N?z=t[6]:(z=()=>ir(N??null),t[5]=N,t[6]=z);let ue=o(z),de=a(N?.id),B=ue??de,V;t[7]!==d||t[8]!==y||t[9]!==b||t[10]!==B||t[11]!==R?(V=ar({currentContentFileId:d,libraryFileId:y,libraryFileVersionNumber:b,serverThreadId:B,source:R}),t[7]=d,t[8]=y,t[9]=b,t[10]=B,t[11]=R,t[12]=V):V=t[12];let H=V,[U,fe]=(0,Q.useState)(null),[pe,ge]=(0,Q.useState)(0),_e;t[13]!==pe||t[14]!==H.libraryContentKey?(_e=[H.libraryContentKey,pe],t[13]=pe,t[14]=H.libraryContentKey,t[15]=_e):_e=t[15];let ve=_e.join(`\0`),ye,be;t[16]!==i||t[17]!==ve||t[18]!==H.contentFileId||t[19]!==H.libraryFileId||t[20]!==L||t[21]!==B?(ye=()=>{if(!(i!=null||L===`collapsed`))return or({contentFileId:H.contentFileId,libraryContentKey:ve,libraryFileId:H.libraryFileId,onContentStateChange:fe,serverThreadId:B})},be=[i,H.contentFileId,H.libraryFileId,ve,L,B],t[16]=i,t[17]=ve,t[18]=H.contentFileId,t[19]=H.libraryFileId,t[20]=L,t[21]=B,t[22]=ye,t[23]=be):(ye=t[22],be=t[23]),(0,Q.useEffect)(ye,be);let G=sr({appBlockId:I,contentFileId:H.contentFileId,currentContentFileId:d,libraryContent:U,libraryContentKey:ve,libraryFileId:y,libraryFileVersionNumber:b,source:R}),xe=U?.key===ve?U:null,Se;t[24]!==G?.libraryFileId||t[25]!==y?(Se=()=>we(G?.libraryFileId??y),t[24]=G?.libraryFileId,t[25]=y,t[26]=Se):Se=t[26];let Ce=o(Se),Te=G?.libraryFileVersionNumber??b,Ee=Ce!=null&&(Te==null||Ce.versionNumber>=Te)?Ce.code:void 0,De=Ee??i??G?.content??l??null,ke=G?.iconSvg??g??null,Ae=G?.libraryFileId??y,Me=Ae==null&&i==null&&Ee==null&&d==null&&R?.currentContentFileId==null&&R?.latestPatchMessageId==null,Ne;t[27]!==Me||t[28]!==l||t[29]!==x||t[30]!==De||t[31]!==w||t[32]!==R?(Ne=Me?R==null?x!=null&&w!=null&&l!=null&&De===l?{messageId:x,refIndex:w}:null:R.messageId.length>0&&R.content!=null&&De===R.content?{messageId:R.messageId,refIndex:R.refIndex}:null:null,t[27]=Me,t[28]=l,t[29]=x,t[30]=De,t[31]=w,t[32]=R,t[33]=Ne):Ne=t[33];let Pe=Ne,K=M===`artifact`,Fe=G?.styleMode??T??(K&&j?`open`:void 0),Ie;t[34]!==Ae||t[35]!==Fe?(Ie=Ft({explicitStyleMode:Fe,libraryFileId:Ae}),t[34]=Ae,t[35]=Fe,t[36]=Ie):Ie=t[36];let q=Ie,J=G?.title??E,Le;t[37]===N?Le=t[38]:(Le=()=>N!=null&&s(N)?`work`:`chat`,t[37]=N,t[38]=Le);let Re=o(Le),ze;t[39]===Symbol.for(`react.memo_cache_sentinel`)?(ze=pt(),t[39]=ze):ze=t[39];let Be=ze,Ve=j,He=K&&q===`open`,Ue=L===`collapsed`||L==null&&ie&&G?.latestPatchMessageId!=null&&G.latestPatchMessageId!==x,We=l!=null||d!=null,Ge;t[40]!==h||t[41]!==l||t[42]!==N?.id||t[43]!==d||t[44]!==I||t[45]!==b||t[46]!==x||t[47]!==Ae||t[48]!==q||t[49]!==J||t[50]!==w||t[51]!==B||t[52]!==R?.messageId?(Ge=async e=>{let t=l;if(t==null&&d!=null)try{t=await he({abortSignal:new AbortController().signal,fileId:d,serverThreadId:B})}catch{return}t!=null&&me({appBlockId:I,conversationId:N?.id??h??null,isOriginalVersion:!0,versionNumber:b??void 0},`app-block:${I}:original`,{code:t,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:I,libraryFileId:Ae,messageId:R?.messageId??x,refIndex:w},styleMode:q,title:J})},t[40]=h,t[41]=l,t[42]=N?.id,t[43]=d,t[44]=I,t[45]=b,t[46]=x,t[47]=Ae,t[48]=q,t[49]=J,t[50]=w,t[51]=B,t[52]=R?.messageId,t[53]=Ge):Ge=t[53],N?.id,R?.messageId;let Ke=Ge;if(k&&!Ve){let e;return t[54]===J?e=t[55]:(e=(0,$.jsx)(Nn,{title:J}),t[54]=J,t[55]=e),e}let qe=ae&&l!=null;if(xe?.status===`missing`&&!qe)return null;if(Ue){let e=We?Ke:void 0,n;return t[56]!==J||t[57]!==e?(n=(0,$.jsx)(Dr,{onView:e,title:J}),t[56]=J,t[57]=e,t[58]=n):n=t[58],n}let Je=De??(Ve&&k?``:null);if(Je==null){if(G?.latestPatchMessageId!=null){let e=N?.id??h,n=xe?.status===`failed`,r;t[59]===ge?r=t[60]:(r=()=>ge(mr),t[59]=ge,t[60]=r);let i;return t[61]!==I||t[62]!==K||t[63]!==ke||t[64]!==J||t[65]!==e||t[66]!==n||t[67]!==r?(i=(0,$.jsx)(vr,{appBlockId:I,conversationId:e,hasFailed:n,iconSvg:ke,onRetry:r,showHeader:K,title:J}),t[61]=I,t[62]=K,t[63]=ke,t[64]=J,t[65]=e,t[66]=n,t[67]=r,t[68]=i):i=t[68],i}let e;return t[69]===J?e=t[70]:(e=(0,$.jsx)(Nn,{title:J}),t[69]=J,t[70]=e),e}let Ye;t[71]!==h||t[72]!==Re||t[73]!==k||t[74]!==A||t[75]!==x||t[76]!==J||t[77]!==w?(Ye=!k&&!A&&h!=null&&x!=null&&w!=null&&dt()?{reference:{clientThreadId:h,messageId:x,referenceIndex:w},target:{kind:`app_block`,metadata:{...J==null?{}:{title:J},tab:Re}}}:void 0,t[71]=h,t[72]=Re,t[73]=k,t[74]=A,t[75]=x,t[76]=J,t[77]=w,t[78]=Ye):Ye=t[78];let Xe=Ye,Ze=N?.id??h,Qe=R?.messageId??x,Y;t[79]!==I||t[80]!==Ae||t[81]!==w||t[82]!==Qe?(Y={appBlockId:I,libraryFileId:Ae,messageId:Qe,refIndex:w},t[79]=I,t[80]=Ae,t[81]=w,t[82]=Qe,t[83]=Y):Y=t[83];let $e=He&&Be&&!k,X=N?.id??h,et;t[84]===Pe?et=t[85]:(et=Pe==null?void 0:{contentReferenceIndex:Pe.refIndex,messageId:Pe.messageId,widgetName:W.AppBlock},t[84]=Pe,t[85]=et);let tt;t[86]!==n||t[87]!==O||t[88]!==I||t[89]!==Xe||t[90]!==p||t[91]!==k||t[92]!==ee||t[93]!==S||t[94]!==ke||t[95]!==q||t[96]!==J||t[97]!==ne||t[98]!==Je||t[99]!==oe||t[100]!==Ve||t[101]!==He||t[102]!==$e||t[103]!==X||t[104]!==et||t[105]!==M||t[106]!==D?(tt=(0,$.jsx)(hr,{additionalResourceDomains:n,appBlockId:I,canOpen:$e,captureConsoleMessages:O,clientThreadId:X,code:Je,feedback:Xe,iconSvg:ke,id:p,isStreaming:k,onConsoleMessagesChange:ee,onReadyChange:S,progressiveStreaming:Ve,ref:ne,showArtifactCard:He,shareConversation:oe,shareTarget:et,styleMode:q,title:J,variant:M,widgetRefSeenAtMs:D}),t[86]=n,t[87]=O,t[88]=I,t[89]=Xe,t[90]=p,t[91]=k,t[92]=ee,t[93]=S,t[94]=ke,t[95]=q,t[96]=J,t[97]=ne,t[98]=Je,t[99]=oe,t[100]=Ve,t[101]=He,t[102]=$e,t[103]=X,t[104]=et,t[105]=M,t[106]=D,t[107]=tt):tt=t[107];let nt;return t[108]!==n||t[109]!==q||t[110]!==J||t[111]!==Je||t[112]!==Ze||t[113]!==Y||t[114]!==tt?(nt=(0,$.jsx)(xn,{additionalResourceDomains:n,code:Je,conversationId:Ze,styleMode:q,source:Y,title:J,children:tt}),t[108]=n,t[109]=q,t[110]=J,t[111]=Je,t[112]=Ze,t[113]=Y,t[114]=tt,t[115]=nt):nt=t[115],nt}function mr(e){return e+1}function hr(e){"use forget";let t=(0,Z.c)(67),{additionalResourceDomains:n,appBlockId:r,canOpen:i,captureConsoleMessages:a,clientThreadId:o,code:s,feedback:c,iconSvg:l,id:u,isStreaming:d,onConsoleMessagesChange:f,onReadyChange:p,progressiveStreaming:m,ref:h,shareConversation:g,shareTarget:_,showArtifactCard:y,styleMode:b,title:x,variant:ee,widgetRefSeenAtMs:S}=e,{isExpanded:te,isViewingHistoricalVersion:ne,openExpandedView:C,setSharedPreview:w,sharedPreview:T,triggerRef:E}=hn(),re=(0,Q.useContext)(ke),D;t[0]===n?D=t[1]:(D=n??[],t[0]=n,t[1]=D);let ie;t[2]!==s||t[3]!==u||t[4]!==b||t[5]!==D?(ie=[u,b,s,...D],t[2]=s,t[3]=u,t[4]=b,t[5]=D,t[6]=ie):ie=t[6];let O=ie.join(`\0`),[k,A]=(0,Q.useState)(null),j=!d&&k===O,M;t[7]===C?M=t[8]:(M=()=>{Fe(),C()},t[7]=C,t[8]=M);let N=M,P;t[9]!==p||t[10]!==O?(P=(e,t)=>{A(e?O:null),p?.(e,t)},t[9]=p,t[10]=O,t[11]=P):P=t[11];let ae=P,F;t[12]!==n||t[13]!==r||t[14]!==a||t[15]!==o||t[16]!==s||t[17]!==ae||t[18]!==u||t[19]!==d||t[20]!==f||t[21]!==m||t[22]!==h||t[23]!==b||t[24]!==ee||t[25]!==S?(F=(0,$.jsx)(kr,{appBlockId:r,additionalResourceDomains:n,code:s,id:u,isStreaming:d,captureConsoleMessages:a,clientThreadId:o,onConsoleMessagesChange:f,onReadyChange:ae,presentationSurface:`inline`,progressiveStreaming:m,ref:h,styleMode:b,variant:ee,widgetRefSeenAtMs:S}),t[12]=n,t[13]=r,t[14]=a,t[15]=o,t[16]=s,t[17]=ae,t[18]=u,t[19]=d,t[20]=f,t[21]=m,t[22]=h,t[23]=b,t[24]=ee,t[25]=S,t[26]=F):F=t[26];let oe;t[27]!==re||t[28]!==F?(oe={element:F,sandboxPolicy:re},t[27]=re,t[28]=F,t[29]=oe):oe=t[29];let I=oe,L;t[30]===I?L=t[31]:(L=()=>I,t[30]=I,t[31]=L);let ce=v(L),le;t[32]!==r||t[33]!==o||t[34]!==ce||t[35]!==w?(le=e=>{if(e==null)return;let{preview:t,sourceToken:n}=_e({appBlockId:r,content:ce(),conversationId:o??null,inlineContainer:e});return w(t),()=>{let e=J();G(t,n,e?.sharedPreview===t)}},t[32]=r,t[33]=o,t[34]=ce,t[35]=w,t[36]=le):le=t[36];let R=le,z,ue;t[37]!==I||t[38]!==T?(ue=()=>{T!=null&&pe(T,I)},z=[I,T],t[37]=I,t[38]=T,t[39]=z,t[40]=ue):(z=t[39],ue=t[40]),se(ue,z);let de=ne?N:void 0,B;t[41]!==l||t[42]!==de||t[43]!==x||t[44]!==E?(B=(0,$.jsx)(xr,{iconSvg:l,onOpen:de,openButtonRef:E,title:x}),t[41]=l,t[42]=de,t[43]=x,t[44]=E,t[45]=B):B=t[45];let V=te?B:null,H;t[46]===R?H=t[47]:(H=(0,$.jsx)(`div`,{ref:R,className:`w-full`}),t[46]=R,t[47]=H);let U;t[48]!==i||t[49]!==c||t[50]!==N||t[51]!==l||t[52]!==j||t[53]!==d||t[54]!==g||t[55]!==_||t[56]!==y||t[57]!==H||t[58]!==x||t[59]!==E?(U=(0,$.jsx)(_r,{canOpen:i,expandButtonRef:E,feedback:c,iconSvg:l,isShareReady:j,shareConversation:g,shareTarget:_,isStreaming:d,showArtifactCard:y,title:x,onOpen:N,children:H}),t[48]=i,t[49]=c,t[50]=N,t[51]=l,t[52]=j,t[53]=d,t[54]=g,t[55]=_,t[56]=y,t[57]=H,t[58]=x,t[59]=E,t[60]=U):U=t[60];let fe;t[61]!==te||t[62]!==U?(fe=(0,$.jsx)(`div`,{hidden:te,children:U}),t[61]=te,t[62]=U,t[63]=fe):fe=t[63];let me;return t[64]!==V||t[65]!==fe?(me=(0,$.jsxs)($.Fragment,{children:[V,fe]}),t[64]=V,t[65]=fe,t[66]=me):me=t[66],me}function gr(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:o,titleClassName:s}=e,c;t[0]===r?c=t[1]:(c=d(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=c);let l=s??`truncate text-base font-semibold`,u;t[2]===l?u=t[3]:(u=d(`text-token-text-primary`,l),t[2]=l,t[3]=u);let f=o??i,p;t[4]!==u||t[5]!==f?(p=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:u,children:f})}),t[4]=u,t[5]=f,t[6]=p):p=t[6];let m;t[7]!==a||t[8]!==p?(m=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,p]}),t[7]=a,t[8]=p,t[9]=m):m=t[9];let h;return t[10]!==n||t[11]!==c||t[12]!==m?(h=(0,$.jsxs)(`div`,{className:c,children:[m,n]}),t[10]=n,t[11]=c,t[12]=m,t[13]=h):h=t[13],h}function _r(e){"use forget";let t=(0,Z.c)(20),{canOpen:n,children:r,expandButtonRef:i,feedback:a,iconSvg:o,isShareReady:s,isStreaming:c,onOpen:l,shareConversation:u,shareTarget:f,showArtifactCard:p,title:m}=e,h=U(),g;t[0]===h?g=t[1]:(g=h.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=h,t[1]=g);let _=g,v;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==_||t[6]!==o||t[7]!==s||t[8]!==c||t[9]!==l||t[10]!==u||t[11]!==f||t[12]!==p||t[13]!==m?(v=p?(0,$.jsxs)(`div`,{className:d(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,c&&`cursor-wait`),"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)(gr,{action:(0,$.jsx)(Xr,{canOpen:n,conversation:u,expandButtonRef:i,isReady:s,onOpen:l,target:f}),className:`min-h-13 px-4 py-2`,fallbackTitle:_,leading:c?(0,$.jsx)(x,{className:`icon-md text-token-text-primary shrink-0`}):(0,$.jsx)(Cr,{iconSvg:o}),title:m}),(0,$.jsx)(`div`,{children:r})]}):(0,$.jsx)(Zr,{conversation:u,isReady:s,target:f,children:r}),t[2]=n,t[3]=r,t[4]=i,t[5]=_,t[6]=o,t[7]=s,t[8]=c,t[9]=l,t[10]=u,t[11]=f,t[12]=p,t[13]=m,t[14]=v):v=t[14];let y;t[15]===a?y=t[16]:(y=a==null?null:(0,$.jsx)(yr,{...a}),t[15]=a,t[16]=y);let b;return t[17]!==v||t[18]!==y?(b=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[v,y]}),t[17]=v,t[18]=y,t[19]=b):b=t[19],b}function vr(e){"use forget";let t=(0,Z.c)(17),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:s,showHeader:c,title:l}=e,u=o(J),d=U(),f;t[0]===d?f=t[1]:(f=d.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=d,t[1]=f);let p=f;if(Ce(u,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==l?(e=(0,$.jsx)(xr,{iconSvg:a,title:l}),t[2]=a,t[3]=l,t[4]=e):e=t[4],e}let m;t[5]!==p||t[6]!==a||t[7]!==c||t[8]!==l?(m=c?(0,$.jsx)(gr,{className:`mb-2`,fallbackTitle:p,leading:(0,$.jsx)(Cr,{iconSvg:a}),title:l}):null,t[5]=p,t[6]=a,t[7]=c,t[8]=l,t[9]=m):m=t[9];let h;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(h={minHeight:Pr},t[10]=h):h=t[10];let g;t[11]!==i||t[12]!==s?(g=(0,$.jsx)(`div`,{className:`relative w-full`,style:h,children:i?(0,$.jsx)(Nr,{onRetry:s}):(0,$.jsx)(Mr,{})}),t[11]=i,t[12]=s,t[13]=g):g=t[13];let _;return t[14]!==m||t[15]!==g?(_=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[m,g]}),t[14]=m,t[15]=g,t[16]=_):_=t[16],_}function yr(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(o(br))return null;let s;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,$.jsx)(nt,{}),t[0]=s):s=t[0];let c;return t[1]!==i||t[2]!==n||t[3]!==r?(c=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)($e,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:s})}),t[1]=i,t[2]=n,t[3]=r,t[4]=c):c=t[4],c}function br(){return Qe()}function xr(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=U(),s,c,l,u,d;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),d=`not-prose relative clear-both my-4 w-full max-w-full`,u=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=gr,l=r==null?void 0:(0,$.jsx)(E,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(V,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=l,t[7]=u,t[8]=d):(s=t[4],c=t[5],l=t[6],u=t[7],d=t[8]);let f;t[9]===n?f=t[10]:(f=(0,$.jsx)(Sr,{iconSvg:n}),t[9]=n,t[10]=f);let p;t[11]!==s||t[12]!==c||t[13]!==l||t[14]!==f||t[15]!==a?(p=(0,$.jsx)(s,{action:l,className:`w-full`,fallbackTitle:c,leading:f,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=l,t[14]=f,t[15]=a,t[16]=p):p=t[16];let m;t[17]!==u||t[18]!==p?(m=(0,$.jsx)(`div`,{className:u,children:p}),t[17]=u,t[18]=p,t[19]=m):m=t[19];let h;return t[20]!==d||t[21]!==m?(h=(0,$.jsx)(`div`,{className:d,children:m}),t[20]=d,t[21]=m,t[22]=h):h=t[22],h}function Sr(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(Cr,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function Cr(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=wr(r),t[0]=r,t[1]=a);let o=a,s;return t[2]!==i||t[3]!==o?(s=o==null?(0,$.jsx)(Be,{"aria-hidden":`true`,className:d(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:d(`icon-md shrink-0`,i),children:(0,$.jsx)(Ee,{svgString:o,className:`h-full w-full`})}),t[2]=i,t[3]=o,t[4]=s):s=t[4],s}function wr(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>Hr||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Ur)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Gr.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!Tr(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function Tr(e){let t=e.replace(Wr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Wr)){let e=t[1],n=t[2];if(!Kr.has(e)||!Er(e,n))return!1}return!0}function Er(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function Dr(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=U(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(V,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(V,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(V,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function Or(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:i}=e,a=U(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let s=o,c;t[2]===r?c=t[3]:(c=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=c);let l;t[4]!==s||t[5]!==i||t[6]!==c?(l=(0,$.jsx)(E,{ref:i,type:`button`,icon:He,color:`ghost`,size:`medium`,label:s,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:c}),t[4]=s,t[5]=i,t[6]=c,t[7]=l):l=t[7];let u;return t[8]!==n||t[9]!==s||t[10]!==l?(u=(0,$.jsx)(A,{label:s,className:n,children:l}),t[8]=n,t[9]=s,t[10]=l,t[11]=u):u=t[11],u}function kr(e){"use forget";let t=(0,Z.c)(145),{appBlockId:n,additionalResourceDomains:r,clientThreadId:i,code:a,id:s,captureConsoleMessages:c,isStreaming:l,onConsoleMessagesChange:f,onReadyChange:p,presentationSurface:m,progressiveStreaming:h,ref:g,styleMode:_,surface:y,variant:b,widgetRefSeenAtMs:x}=e,S=l!==void 0&&l,te=h!==void 0&&h,ne=_===void 0?`default`:_,C=y===void 0?`inline`:y,w=b===void 0?`inline`:b,T=U(),E=(0,Q.useRef)(null),re=(0,Q.useRef)(!1),D=(0,Q.useRef)(!1),ie=(0,Q.useRef)(null),O=(0,Q.useRef)(null),k=(0,Q.useRef)(null),A=(0,Q.useRef)(null),j=(0,Q.useRef)(null),M=(0,Q.useRef)(null),N=(0,Q.useRef)(null),P=(0,Q.useRef)(0),ae=(0,Q.useRef)(null),F=(0,Q.useRef)(null),oe;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(oe=[],t[0]=oe):oe=t[0];let se=(0,Q.useRef)(oe),I=ee(),L=o(u),{allowDependencyNetworkRequestsWithoutCanvasAccess:le}=(0,Q.useContext)(ke),R=Ke()||le,z=Je(i)&&!le,ue=I?`dark`:`light`,de=T.locale,B;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(B={status:`streaming`},t[1]=B):B=t[1];let[H,fe]=(0,Q.useState)(B),pe=H.status===`finalized`&&H.html!==a,me=te&&!S&&(w===`artifact`||H.status===`failed`),W=te&&C===`inline`&&H.status!==`static`&&!me&&!pe,he=W&&S&&w===`artifact`&&!fr(a),ge=he?0:Fr,_e=R?`execution-enabled`:`execution-disabled`,ve=z?`network-enabled`:`network-disabled`,ye=W?`progressive-app-block-stream`:a,be;t[2]===r?be=t[3]:(be=r??[],t[2]=r,t[3]=be);let G;t[4]!==L||t[5]!==de||t[6]!==ne||t[7]!==C||t[8]!==ye||t[9]!==be||t[10]!==_e||t[11]!==ve||t[12]!==ue?(G=[ue,L,C,ne,de,_e,ve,ye,...be],t[4]=L,t[5]=de,t[6]=ne,t[7]=C,t[8]=ye,t[9]=be,t[10]=_e,t[11]=ve,t[12]=ue,t[13]=G):G=t[13];let xe=G.join(`\0`),Se;t[14]===r?Se=t[15]:(Se=rn(r),t[14]=r,t[15]=Se);let Ce=Se,we=z?`deps_only`:`disabled`,Te=C===`inline`?w:void 0,Ee=W?`progressive`:`static`,De;t[16]!==C||t[17]!==we||t[18]!==Te||t[19]!==Ee?(De={networkPolicy:we,surface:C,variant:Te,renderMode:Ee},t[16]=C,t[17]=we,t[18]=Te,t[19]=Ee,t[20]=De):De=t[20];let Oe=De,[Ae,je]=(0,Q.useState)(0),[Me,Ne]=(0,Q.useState)(null),Pe=Me?.signature===xe?Me.status:null,K=Pe===`ready`,Fe=K||Pe===`failed_after_ready`,Ie=W&&Pe===`failed`,q=!S&&!W&&Pe===`failed`,J=m??C,Le=W&&J===`inline`&&S&&!q,Re;t[21]!==a||t[22]!==Oe||t[23]!==x?(Re={content:a,metricTags:Oe,widgetRefSeenAtMs:x},t[21]=a,t[22]=Oe,t[23]=x,t[24]=Re):Re=t[24];let{cancelFirstPaintFrame:ze,startRunMetrics:Be}=Ct(Re),Ve,He;t[25]!==K||t[26]!==p?(Ve=()=>{p?.(K)},He=[K,p],t[25]=K,t[26]=p,t[27]=Ve,t[28]=He):(Ve=t[27],He=t[28]),(0,Q.useEffect)(Ve,He);let Ue,qe;t[29]!==K||t[30]!==m?(Ue=()=>{!K||m==null||E.current?.updateAppBlockSurface?.(m)},qe=[K,m],t[29]=K,t[30]=m,t[31]=Ue,t[32]=qe):(Ue=t[31],qe=t[32]),(0,Q.useEffect)(Ue,qe);let Xe,Ze;t[33]===Symbol.for(`react.memo_cache_sentinel`)?(Xe=()=>({clearCapturedConsoleMessages:()=>{se.current=[]},captureScreenshotDataUrl:async()=>(await E.current?.screenshot())?.imageBase64??null,focus:()=>{E.current?.focus()}}),Ze=[],t[33]=Xe,t[34]=Ze):(Xe=t[33],Ze=t[34]),(0,Q.useImperativeHandle)(g,Xe,Ze);let Qe;t[35]===Symbol.for(`react.memo_cache_sentinel`)?(Qe=()=>{ae.current!=null&&(window.clearTimeout(ae.current),ae.current=null)},t[35]=Qe):Qe=t[35];let Y=v(Qe),$e;t[36]===Symbol.for(`react.memo_cache_sentinel`)?($e=()=>{F.current!=null&&(window.clearTimeout(F.current),F.current=null)},t[36]=$e):$e=t[36];let X=v($e),et;t[37]!==K||t[38]!==W?(et=()=>{if(!W||!K||j.current==null)return;let e=A.current,t=E.current;if(e==null||t?.updateAppBlockStream==null||D.current)return;let n=P.current;A.current=null,O.current=vt(),k.current=e.html,e.isFinal&&(D.current=!0);let r=()=>P.current!==n||j.current==null?Promise.resolve():t.updateAppBlockStream?.(e)??Promise.resolve(),i=N.current,a=i==null?r():i.then(r);N.current=a,a.then(()=>{N.current===a&&(N.current=null);let t=j.current;P.current!==n||t==null||(fr(e.html)&&t.markFirstPaint(),e.isFinal&&(t.reportPayloadSize(e.html),fe({status:`finalized`,html:e.html})))},e=>{N.current===a&&(N.current=null),P.current===n&&(e instanceof DOMException&&e.name===`AbortError`||M.current?.(`stream_update`,bt(e)))})},t[37]=K,t[38]=W,t[39]=et):et=t[39];let tt=v(et),nt;t[40]!==L||t[41]!==c||t[42]!==Y||t[43]!==X||t[44]!==a||t[45]!==R||t[46]!==z||t[47]!==pe||t[48]!==S||t[49]!==de||t[50]!==f||t[51]!==p||t[52]!==m||t[53]!==xe||t[54]!==H.status||t[55]!==me||t[56]!==W||t[57]!==Be||t[58]!==ne||t[59]!==C||t[60]!==ue?(nt=()=>{if(!R)return;if(H.status===`failed`){if(S)return;fe({status:`static`}),je(jr);return}(pe||me&&H.status!==`static`)&&fe({status:`static`});let e=W&&E.current?.updateAppBlockStream!=null;if(W&&!e){S||fe({status:`static`});return}re.current=!0,D.current=!1,ie.current=null,O.current=null,k.current=null,A.current=null,j.current=null,M.current=null,N.current=null,X(),P.current+=1;let t=P.current;Y(),Ne(null);let{expectReadySignal:n,html:r}=an(a,ue,de,L,C,{loadTailwind:z,progressiveStreaming:e,syncPresentationSurface:m!=null,styleMode:ne}),i=!1,o=!1,s=!1,l=!1,u=!1,d=()=>P.current===t,h=Be(d,{deferFirstPaint:e,deferPayloadSize:e});e&&(j.current=h);let g=e=>{!c||f==null||!d()||(se.current=e,!l&&(l=!0,ce.postTask(()=>{l=!1,d()&&f(se.current)},{priority:`background`})))},_=e=>{!d()||i||s||(i=!0,Y(),h.markReady(e),!u&&(u=!0,ce.postTask(()=>{u=!1,!(!d()||s)&&(o=!0,Ne({signature:xe,status:`ready`}))},{priority:`background`})))},v=(t,n)=>{!d()||s||(s=!0,Y(),X(),A.current=null,j.current=null,e&&fe({status:`failed`}),Ne({signature:xe,status:o?`failed_after_ready`:`failed`}),h.reportFailure(t,n),ce.postTask(()=>{d()&&(e?p?.(!1):p?.(!1,`failure`))},{priority:`background`}))};M.current=v,se.current=[],g([]),ae.current=window.setTimeout(()=>{v(`sandbox_eval`,`ready_timeout`)},Lr),(async()=>{let t=E.current?.evalAsync({code:r,expectReadySignal:n,language:`html`,shouldPreservePreviewOnFatalError:()=>d()&&e&&o});if(t==null){v(`sandbox_eval`,`missing_generator`);return}for(;;){let e=await t.next();if(e.done){d()&&!i&&v(`sandbox_eval`,`generator_completed_without_ready`);break}d()&&(g([...se.current,e.value]),e.value.type===We.ENVIRONMENT_STATUS&&e.value.status===Ge.RUNNING_CODE&&_(`running_code`),e.value.type===We.RUN_COMPLETE&&(e.value.wasFatalError?v(`runtime`,`fatal_runtime_error`):(_(`run_complete`),h.reportSuccess(`run_complete`))),await ce.yield())}})().catch(e=>{d()&&(e instanceof DOMException&&e.name===`AbortError`||v(`sandbox_eval`,bt(e)))})},t[40]=L,t[41]=c,t[42]=Y,t[43]=X,t[44]=a,t[45]=R,t[46]=z,t[47]=pe,t[48]=S,t[49]=de,t[50]=f,t[51]=p,t[52]=m,t[53]=xe,t[54]=H.status,t[55]=me,t[56]=W,t[57]=Be,t[58]=ne,t[59]=C,t[60]=ue,t[61]=nt):nt=t[61];let rt=v(nt),it;t[62]!==Y||t[63]!==X?(it=()=>{P.current+=1,re.current=!1,D.current=!1,ie.current=null,k.current=null,A.current=null,j.current=null,M.current=null,N.current=null,Y(),X(),Ne(null),je(Ar)},t[62]=Y,t[63]=X,t[64]=it):it=t[64];let at=v(it),ot;t[65]===J?ot=t[66]:(ot=J===`inline`?{margin:-4,width:`calc(100% + ${Ir*2}px)`}:void 0,t[65]=J,t[66]=ot);let st=ot,ct;t[67]!==ze||t[68]!==Y||t[69]!==X||t[70]!==rt?(ct=()=>{rt();let e=E.current;return()=>{P.current+=1,j.current=null,M.current=null,N.current=null,Y(),X(),ze(),e?.stop()}},t[67]=ze,t[68]=Y,t[69]=X,t[70]=rt,t[71]=ct):ct=t[71];let lt;t[72]!==ze||t[73]!==Y||t[74]!==X||t[75]!==R||t[76]!==xe||t[77]!==rt||t[78]!==Ae?(lt=[ze,Y,X,R,xe,rt,Ae],t[72]=ze,t[73]=Y,t[74]=X,t[75]=R,t[76]=xe,t[77]=rt,t[78]=Ae,t[79]=lt):lt=t[79],(0,Q.useEffect)(ct,lt);let ut,dt;t[80]!==S||t[81]!==rt||t[82]!==W?(ut=()=>{!W||S||re.current||E.current?.updateAppBlockStream!=null||rt()},dt=[S,rt,W],t[80]=S,t[81]=rt,t[82]=W,t[83]=ut,t[84]=dt):(ut=t[83],dt=t[84]),(0,Q.useEffect)(ut,dt);let ft,pt;if(t[85]!==X||t[86]!==a||t[87]!==tt||t[88]!==q||t[89]!==K||t[90]!==S||t[91]!==W||t[92]!==w?(ft=()=>{if(!W||!K||q||D.current||E.current?.updateAppBlockStream==null)return;let e=S?dr(a):a;if(S&&(A.current?.html??k.current)===e)return;if(A.current={html:e,isFinal:!S},!S){X(),tt();return}let t=O.current;if(t==null&&w===`artifact`&&(ie.current??=vt(),t=ie.current),t==null){tt();return}let n=w===`artifact`?zr:Rr,r=vt()-t;if(r>=n){tt();return}return F.current=window.setTimeout(()=>{F.current=null,tt()},n-r),X},pt=[X,a,tt,q,K,S,W,w],t[85]=X,t[86]=a,t[87]=tt,t[88]=q,t[89]=K,t[90]=S,t[91]=W,t[92]=w,t[93]=ft,t[94]=pt):(ft=t[93],pt=t[94]),(0,Q.useEffect)(ft,pt),!R){let e;return t[95]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(On,{}),t[95]=e):e=t[95],e}let mt=J===`inline`&&(he?`h-0 min-h-0 overflow-hidden`:`min-h-[120px] overflow-visible`),ht=J===`stage`&&`h-full min-h-0`,gt;t[96]!==mt||t[97]!==ht?(gt=d(`flex w-full`,mt,ht),t[96]=mt,t[97]=ht,t[98]=gt):gt=t[98];let _t=J===`inline`?`flex-none`:`w-full`,yt=Le&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,xt;t[99]!==_t||t[100]!==yt?(xt=d(`relative min-w-0`,_t,yt),t[99]=_t,t[100]=yt,t[101]=xt):xt=t[101];let St=`${Ae}:${z?`network-enabled`:`network-disabled`}`,wt;t[102]!==n||t[103]!==i||t[104]!==s?(wt=JSON.stringify([i??null,n??s]),t[102]=n,t[103]=i,t[104]=s,t[105]=wt):wt=t[105];let Tt;t[106]===T?Tt=t[107]:(Tt=T.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[106]=T,t[107]=Tt);let Et=z?`deps-only`:`none`,Dt=z?Br:Vr,Ot=Fe?0:-1,kt=J===`inline`&&ne===`open`,At=J!==`stage`,jt=W?ge:Pr,Mt;t[108]!==s||t[109]!==rt||t[110]!==Ce||t[111]!==St||t[112]!==wt||t[113]!==Tt||t[114]!==Et||t[115]!==Dt||t[116]!==Ot||t[117]!==kt||t[118]!==At||t[119]!==jt?(Mt=(0,$.jsx)(Ye,{id:s,sandboxOriginId:wt,title:Tt,visuallyHidden:!1,networkPolicy:Et,additionalResourceDomains:Ce,sandboxPermissions:Dt,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:Ot,onRetryCodeRun:rt,transparentBackground:kt,useIntrinsicHeight:At,intrinsicHeightFallback:jt,ref:E},St),t[108]=s,t[109]=rt,t[110]=Ce,t[111]=St,t[112]=wt,t[113]=Tt,t[114]=Et,t[115]=Dt,t[116]=Ot,t[117]=kt,t[118]=At,t[119]=jt,t[120]=Mt):Mt=t[120];let Nt;t[121]===Le?Nt=t[122]:(Nt=Le?(0,$.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 z-10 cursor-wait`}):null,t[121]=Le,t[122]=Nt);let Pt;t[123]!==Ie||t[124]!==q||t[125]!==Fe||t[126]!==W?(Pt=!Fe&&!q&&(!W||Ie)?(0,$.jsx)(Mr,{}):null,t[123]=Ie,t[124]=q,t[125]=Fe,t[126]=W,t[127]=Pt):Pt=t[127];let Ft;t[128]!==q||t[129]!==at?(Ft=q?(0,$.jsx)(Nr,{onRetry:at}):null,t[128]=q,t[129]=at,t[130]=Ft):Ft=t[130];let It;t[131]!==st||t[132]!==Le||t[133]!==xt||t[134]!==Mt||t[135]!==Nt||t[136]!==Pt||t[137]!==Ft?(It=(0,$.jsxs)(`div`,{"aria-busy":Le,className:xt,style:st,children:[Mt,Nt,Pt,Ft]}),t[131]=st,t[132]=Le,t[133]=xt,t[134]=Mt,t[135]=Nt,t[136]=Pt,t[137]=Ft,t[138]=It):It=t[138];let Lt;t[139]===Le?Lt=t[140]:(Lt=Le?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:(0,$.jsx)(V,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[139]=Le,t[140]=Lt);let Rt;return t[141]!==gt||t[142]!==It||t[143]!==Lt?(Rt=(0,$.jsxs)(`div`,{className:gt,children:[It,Lt]}),t[141]=gt,t[142]=It,t[143]=Lt,t[144]=Rt):Rt=t[144],Rt}function Ar(e){return e+1}function jr(e){return e+1}function Mr(){"use forget";let e=(0,Z.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsx)(x,{className:`icon-sm text-token-text-tertiary`}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,role:`status`,children:[t,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:(0,$.jsx)(V,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})})]}),e[1]=n):n=e[1],n}function Nr(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(V,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(V,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(E,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr=e((()=>{Z=B(),b(),Ze(),Se(),tt(),r(),f(),Xe(),D(),ze(),Ve(),Re(),q(),qe(),w(),K(),rt(),Ie(),h(),M(),I(),xe(),L(),l(),k(),_(),Y(),it(),Ne(),Ue(),m(),Q=n(R()),de(),mn(),Nt(),mt(),Dn(),ge(),jn(),vn(),zn(),gt(),De(),Ae(),It(),lr(),$=z(),Pr=432,Fr=120,Ir=4,Lr=15e3,Rr=100,zr=350,Br=`allow-scripts allow-same-origin allow-forms`,Vr=`allow-scripts allow-same-origin`,Hr=12e3,Ur=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Wr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Gr=new Set([`svg`,`path`]),Kr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),qr=/<script(?:\s|>)/i,Jr=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,Yr=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,Xr=e=>{"use forget";let t=(0,Z.c)(13),{canOpen:n,conversation:r,expandButtonRef:i,isReady:a,onOpen:o,target:s}=e,c;t[0]!==n||t[1]!==i||t[2]!==o?(c=n&&o!=null?(0,$.jsx)(Or,{ref:i,className:`shrink-0`,onClick:o}):null,t[0]=n,t[1]=i,t[2]=o,t[3]=c):c=t[3];let l=c;if(r==null)return l;let u;t[4]===s?u=t[5]:(u=s??{contentReferenceIndex:-1,messageId:``},t[4]=s,t[5]=u);let d=u,f=a&&s!=null,p;t[6]===l?p=t[7]:(p=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(A,{label:n,children:(0,$.jsx)(E,{type:`button`,icon:Le,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),l]}):l},t[6]=l,t[7]=p);let m;return t[8]!==d||t[9]!==r||t[10]!==f||t[11]!==p?(m=(0,$.jsx)(at,{category:W.AppBlock,conversation:r,isReady:f,target:d,children:p}),t[8]=d,t[9]=r,t[10]=f,t[11]=p,t[12]=m):m=t[12],m},Zr=e=>{"use forget";let t=(0,Z.c)(9),{children:n,conversation:r,isReady:i,target:a}=e;if(r==null)return n;let o;t[0]===a?o=t[1]:(o=a??{contentReferenceIndex:-1,messageId:``},t[0]=a,t[1]=o);let s=o,c=i&&a!=null,l;t[2]===n?l=t[3]:(l=e=>(0,$.jsxs)(`div`,{className:`group/keyboard-or-hover relative`,children:[n,e.isVisible?(0,$.jsx)(`div`,{className:`pointer-events-none absolute end-2 top-2 z-10`,children:(0,$.jsx)(`div`,{className:`cant-hover:hidden`,children:(0,$.jsx)(ot,{action:e})})}):null]}),t[2]=n,t[3]=l);let u;return t[4]!==s||t[5]!==r||t[6]!==c||t[7]!==l?(u=(0,$.jsx)(at,{category:W.InlineAppBlock,conversation:r,isReady:c,target:s,children:l}),t[4]=s,t[5]=r,t[6]=c,t[7]=l,t[8]=u):u=t[8],u}}));export{ft as S,Nt as _,Qr as a,mt as b,tr as c,Cn as d,Dn as f,vt as g,Ft as h,ur as i,nr as l,Pt as m,Mr as n,rr as o,It as p,kr as r,lr as s,pr as t,Sn as u,ht as v,pt as x,gt as y};
//# sourceMappingURL=e3b746a6-dvef15hkq1js6zgt.js.map