const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-lhn92s7zc7r9h6ys.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-kvg6gfmcudxn6gjz.js","assets/2340486e-m6nxarr6ck977yif.js","assets/conversation-small-l3obm2nq6r0qea7d.js","assets/30901919-fvzeem9s1igpgrn7.js","assets/c470f5ab-b67tldi3krivird9.js","assets/0e5afe53-ln5bgrlksmqh1fhy.js","assets/conversation-small-eili01pp.css","assets/8b34dbc2-na1lkzyukh4m0rp6.js","assets/82782bc9-ozecxjhpvfl0b3y2.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{A4 as r,Ax as i,DD as a,EZ as o,HZ as s,Kg as c,L4 as l,LB as u,M_ as d,OM as f,RB as p,T4 as m,TZ as h,VD as g,VZ as _,XD as v,XG as y,ZG as b,_F as x,a0 as S,ad as ee,dc as C,e3 as w,fF as T,i3 as te,j4 as E,jD as ne,j_ as re,kD as D,kx as O,l0 as k,lc as A,mF as j,pF as ie,pX as ae,qa as M,qg as N,r3 as P,rd as oe,to as se,vH as ce,vX as le,xD as ue,yH as F,z4 as de}from"./4813494d-kvg6gfmcudxn6gjz.js";import{Cn as fe,Dn as I,En as L,Sn as pe,Tn as R,_n as z,tn as B,wn as V,xn as H}from"./2340486e-m6nxarr6ck977yif.js";import{$3 as me,Hpn as he,Hu as ge,Jn as _e,Nx as U,Px as ve,Q3 as ye,Vpn as be,Vu as xe,Yn as Se,a6 as W,abt as Ce,agn as we,d6 as Te,e6 as Ee,f6 as De,fD as Oe,h_n as ke,ibt as Ae,lD as je,n6 as Me,nD as Ne,o6 as Pe,ogn as Fe,p_n as Ie,rbt as G,s6 as Le,t6 as Re,u6 as K}from"./conversation-small-l3obm2nq6r0qea7d.js";import{Jx as q,QE as ze,ZE as J,ow as Be,qx as Ve,sw as He}from"./30901919-fvzeem9s1igpgrn7.js";import{i as Ue,n as We,t as Ge}from"./8d846022-habmttvqwy4a5siq.js";import{i as Ke,n as qe,r as Je}from"./91969468-esv0advqjc38r6zx.js";import{n as Ye,t as Xe}from"./4d271a7b-fc45fbeq5xv1l5ap.js";import{n as Ze,r as Qe}from"./58bafdef-e7ekhftu21vucnae.js";import{a as $e,i as et}from"./e01e2324-j4898bzgrrw4tnsy.js";import{i as Y,t as tt}from"./5dc32f04-g7zdltbktvongp3x.js";import{n as X,t as nt}from"./066a83b9-fnfri06f2y1nwb39.js";import{i as rt,n as it,r as at,t as ot}from"./9eb56efa-shwnjfvp69lt04ip.js";import{i as st,n as ct,r as lt,t as ut}from"./cc79834b-g2vgpsnpqfh2tin5.js";function dt(){return m(`2779568043`)}function ft(){return m(`3864712762`)}function pt(){return r(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var mt=e((()=>{E()}));function ht({messageId:e,refIndex:t}){return`appblock:${e}:${t}`}var gt=e((()=>{}));function _t({errorSource:e,errorType:t,networkPolicy:n,outcome:r,readySignal:i,renderMode:a,surface:o,variant:s}){let c={network_policy:n,surface:o};return e!=null&&(c.error_source=e),t!=null&&(c.error_type=t),r!=null&&(c.outcome=r),i!=null&&(c.ready_signal=i),a!=null&&(c.render_mode=a),s!=null&&(c.variant=s),c}function vt(){return typeof performance<`u`?performance.now():Date.now()}function yt(e){return new TextEncoder().encode(e).byteLength/1024}function bt(e){return e instanceof Error?e.name:`unknown`}function xt(e,t,n=1){te.count(w.APP_BLOCKS,e,_t(t),n)}function St(e,t,n){te.hist(w.APP_BLOCKS,e,_t(n),t)}function Ct({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,wt.useRef)(vt()),i=(0,wt.useRef)(null),a=(0,wt.useRef)(!1),o=(0,wt.useRef)(!1),s=ie(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=ie((n=e)=>{o.current||(o.current=!0,St(Dt,yt(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:ie((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=vt(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),xt(At,t);let _=(e,n)=>{f||(f=!0,xt(kt,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=vt();St(Ot,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,St(Tt,s-r.current,t),n!=null&&St(Mt,s-n,t))},y=(e,t)=>{if(s(),typeof window>`u`){v(e,t);return}i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,t)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=vt(),g=n,St(jt,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{!e()||p||(p=!0,s(),xt(Et,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt=e((()=>{P(),T(),wt=n(R()),Tt=`app_block.first_render_time_ms`,Et=`app_block.load.failure`,Dt=`app_block.payload_size_kb`,Ot=`app_block.ready_to_first_paint_ms`,kt=`app_block.render.outcome`,At=`app_block.render.start`,jt=`app_block.sandbox_eval_to_ready_ms`,Mt=`app_block.widget_ref_to_first_paint_ms`}));function Pt(e){return e==="default"||e===`open`?e:null}function Ft({explicitStyleMode:e,libraryFileId:t}){return e??(t==null?`default`:`open`)}var It=e((()=>{})),Lt,Rt=e((()=>{Lt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),zt=e((()=>{})),Bt,Vt=e((()=>{zt(),Bt=`/cdn/assets/app-block-sandbox-foundation-l4fcvweu.css`})),Ht,Ut=e((()=>{Ht=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){--app-block-slider-track:color-mix(in srgb, var(--viz-text) 16%, transparent);--app-block-slider-thumb-shadow:color-mix(in srgb, var(--viz-text) 18%, transparent);appearance:none;background:linear-gradient(var(--app-block-slider-track), var(--app-block-slider-track)) center / 100% 4px no-repeat;cursor:pointer;border:0;border-radius:9999px;width:100%;height:28px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.5}:where(input[type=range])::-webkit-slider-runnable-track{background:0 0;border:0;height:28px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;margin-top:5px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-webkit-slider-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-webkit-slider-thumb{transform:scale(1.06)}:where(input[type=range])::-moz-range-track{background:var(--app-block-slider-track);border:0;border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-progress{background:var(--viz-accent);border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-thumb{border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-moz-range-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-moz-range-thumb{transform:scale(1.06)}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),Wt=e((()=>{})),Gt,Kt=e((()=>{Wt(),Gt=`/cdn/assets/app-block-sandbox-iimeogb3.css`}));function qt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Jt=e((()=>{}));function Yt(e){return String.raw(on||=qt([`<script>
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
<\/script>`]))}));function hn(){"use forget";let e=(0,gn.useContext)(_n);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var gn,_n,vn=e((()=>{gn=n(R()),_n=(0,gn.createContext)(null)})),yn,bn=e((()=>{b(),I(),yn=y(()=>L(()=>import(`./7aa2b76f-lhn92s7zc7r9h6ys.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}));function xn(e){"use forget";let t=(0,wn.c)(40),{additionalResourceDomains:n,children:r,code:i,conversationId:a,source:s,styleMode:c,title:l}=e,u=`app-block:${s.appBlockId}:${(0,Tn.useId)()}`,d=(0,Tn.useRef)(null),[f,p]=(0,Tn.useState)(null),m=s.appBlockId,h=s.libraryFileId,g=s.messageId,_=s.refIndex,v=a??null,y;t[0]!==v||t[1]!==m?(y={appBlockId:m,conversationId:v},t[0]=v,t[1]=m,t[2]=y):y=t[2];let b=y,x=o(ye),S;t[3]!==x||t[4]!==b?(S=Me(x,b),t[3]=x,t[4]=b,t[5]=S):S=t[5];let ee=S,C=x?.appBlockId===m&&x.conversationId===v&&(x.isOriginalVersion===!0||x.versionNumber!=null),w=ee||C,T;t[6]!==x||t[7]!==u||t[8]!==b?(T=W(x,b,u),t[6]=x,t[7]=u,t[8]=b,t[9]=T):T=t[9];let te=T,E;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(E=()=>{d.current?.focus()},t[10]=E):E=t[10];let ne=E,re=f?.supportsAtomicMove?f:void 0,D;t[11]!==m||t[12]!==h||t[13]!==g||t[14]!==_?(D={appBlockId:m,libraryFileId:h,messageId:g,refIndex:_},t[11]=m,t[12]=h,t[13]=g,t[14]=_,t[15]=D):D=t[15];let O;t[16]!==n||t[17]!==i||t[18]!==c||t[19]!==re||t[20]!==D||t[21]!==l?(O={additionalResourceDomains:n,code:i,focusOnClose:ne,sharedPreview:re,source:D,styleMode:c,title:l},t[16]=n,t[17]=i,t[18]=c,t[19]=re,t[20]=D,t[21]=l,t[22]=O):O=t[22];let k=O,A,j;t[23]!==k||t[24]!==ee||t[25]!==b?(A=()=>{ee&&Pe(b,k)},j=[k,ee,b],t[23]=k,t[24]=ee,t[25]=b,t[26]=A,t[27]=j):(A=t[26],j=t[27]),(0,Tn.useEffect)(A,j);let ie;t[28]!==k||t[29]!==te||t[30]!==b?(ie=()=>{me(b,te,k)},t[28]=k,t[29]=te,t[30]=b,t[31]=ie):ie=t[31];let ae=ie,M;t[32]!==w||t[33]!==C||t[34]!==ae||t[35]!==f?(M={isExpanded:w,isViewingHistoricalVersion:C,openExpandedView:ae,setSharedPreview:p,sharedPreview:f,triggerRef:d},t[32]=w,t[33]=C,t[34]=ae,t[35]=f,t[36]=M):M=t[36];let N=M,P;return t[37]!==r||t[38]!==N?(P=(0,En.jsx)(_n.Provider,{value:N,children:r}),t[37]=r,t[38]=N,t[39]=P):P=t[39],P}function Sn(e){"use forget";let t=(0,wn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,headerTitleContent:s,title:c}=e,l=lt(),u;t[0]===i?u=t[1]:(u=()=>i==null?0:xe(i).height$()??0,t[0]=i,t[1]=u);let d=o(u),f=l===`fullscreen`&&n&&i!=null?d:0,p=s??c,m;t[2]===p?m=t[3]:(m=(0,En.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:p}),t[2]=p,t[3]=m);let h;t[4]!==a||t[5]!==m?(h=(0,En.jsxs)(ut.Header,{className:`pb-1`,children:[m,a]}),t[4]=a,t[5]=m,t[6]=h):h=t[6];let g;t[7]===f?g=t[8]:(g={paddingBottom:f},t[7]=f,t[8]=g);let _;t[9]===r?_=t[10]:(_=(0,En.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=_);let v;t[11]!==g||t[12]!==_?(v=(0,En.jsx)(ut.Body,{className:`bg-token-bg-primary overflow-hidden`,style:g,children:_}),t[11]=g,t[12]=_,t[13]=v):v=t[13];let y;return t[14]!==h||t[15]!==v?(y=(0,En.jsxs)(En.Fragment,{children:[h,v]}),t[14]=h,t[15]=v,t[16]=y):y=t[16],y}function Cn(e){"use forget";let t=(0,wn.c)(5),{conversation:n,paneId:r}=e,i=st(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,En.jsx)(yn,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var wn,Tn,En,Dn=e((()=>{wn=B(),ge(),ct(),h(),Tn=n(R()),vn(),Re(),bn(),En=V()}));function On(){"use forget";let e=(0,kn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,An.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,An.jsx)(z,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var kn,An,jn=e((()=>{kn=B(),pe(),An=V()}));function Mn(e,t){"use forget";let n=(0,Pn.c)(39),r=t===void 0||t,i=fe(),a;n[0]!==i||n[1]!==e?(a=e?i.formatMessage(Rn.generatingApp,{title:e}):i.formatMessage(Rn.creatingInterface),n[0]=i,n[1]=e,n[2]=a):a=n[2];let o=a,s;n[3]===i?s=n[4]:(s=i.formatMessage(Rn.sketchingInterface),n[3]=i,n[4]=s);let c;n[5]===i?c=n[6]:(c=i.formatMessage(Rn.shapingLayout),n[5]=i,n[6]=c);let l;n[7]===i?l=n[8]:(l=i.formatMessage(Rn.arrangingPieces),n[7]=i,n[8]=l);let u;n[9]===i?u=n[10]:(u=i.formatMessage(Rn.polishingVisuals),n[9]=i,n[10]=u);let d;n[11]===i?d=n[12]:(d=i.formatMessage(Rn.tuningInputs),n[11]=i,n[12]=d);let f;n[13]===i?f=n[14]:(f=i.formatMessage(Rn.addingInteractivity),n[13]=i,n[14]=f);let p;n[15]===i?p=n[16]:(p=i.formatMessage(Rn.wiringControls),n[15]=i,n[16]=p);let m;n[17]===i?m=n[18]:(m=i.formatMessage(Rn.composingInteractions),n[17]=i,n[18]=m);let h;n[19]===i?h=n[20]:(h=i.formatMessage(Rn.calibratingPreview),n[19]=i,n[20]=h);let g;n[21]===i?g=n[22]:(g=i.formatMessage(Rn.refiningDetails),n[21]=i,n[22]=g);let _;n[23]!==o||n[24]!==h||n[25]!==g||n[26]!==s||n[27]!==c||n[28]!==l||n[29]!==u||n[30]!==d||n[31]!==f||n[32]!==p||n[33]!==m?(_=[o,s,c,l,u,d,f,p,m,h,g],n[23]=o,n[24]=h,n[25]=g,n[26]=s,n[27]=c,n[28]=l,n[29]=u,n[30]=d,n[31]=f,n[32]=p,n[33]=m,n[34]=_):_=n[34];let v=_,[y,b]=(0,Fn.useState)(0),x,S;return n[35]!==r||n[36]!==v.length?(x=()=>{if(!r)return;let e=window.setInterval(()=>{b(e=>Math.min(e+1,v.length-1))},Ln);return()=>{window.clearInterval(e)}},S=[r,v.length],n[35]=r,n[36]=v.length,n[37]=x,n[38]=S):(x=n[37],S=n[38]),(0,Fn.useEffect)(x,S),v[y]??v[0]??``}function Nn(e){"use forget";let t=(0,Pn.c)(2),{title:n}=e,r=Mn(n),i;return t[0]===r?i=t[1]:(i=(0,In.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,role:`status`,children:(0,In.jsx)(tt,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:r})}),t[0]=r,t[1]=i),i}var Pn,Fn,In,Ln,Rn,zn,Bn=e((()=>{Pn=B(),Y(),s(),Fn=n(R()),pe(),In=V(),Ln=2800,Rn=H({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}}),zn=e=>{"use forget";let t=(0,Pn.c)(11),{isVisible:n,title:r}=e,i=Mn(r,n),a=!n,o=n?`grid-rows-[1fr] opacity-100`:`grid-rows-[0fr] opacity-0`,s;t[0]===o?s=t[1]:(s=_(`grid shrink-0 transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none`,o),t[0]=o,t[1]=s);let c=n&&`loading-shimmer-pure-text motion-reduce:animate-none`,l;t[2]===c?l=t[3]:(l=_(`text-token-text-secondary inline-block font-sans font-medium`,c),t[2]=c,t[3]=l);let u;t[4]!==i||t[5]!==l?(u=(0,In.jsx)(`div`,{className:`min-h-0 overflow-hidden`,children:(0,In.jsx)(`div`,{className:`pb-3`,children:(0,In.jsx)(`span`,{className:l,children:i})})}),t[4]=i,t[5]=l,t[6]=u):u=t[6];let d;return t[7]!==a||t[8]!==s||t[9]!==u?(d=(0,In.jsx)(`div`,{"aria-atomic":`true`,"aria-hidden":a,"aria-live":`polite`,className:s,role:`status`,children:u}),t[7]=a,t[8]=s,t[9]=u,t[10]=d):d=t[10],d}}));function Vn(e){let t=new Map,n=new Map,r=null,i=null;for(let a of e){let e=a.metadata?.content_references;if(Array.isArray(e)&&e.forEach((e,r)=>{let i=Un({contentReference:e,messageId:a.id,refIndex:r});i!=null&&(t.set(i.appBlockId,i),i.libraryFileId!=null&&n.set(i.libraryFileId,i.appBlockId))}),a.author.role===S.User){(a.metadata?.attachments??[]).forEach((e,r)=>{let i=Hn({attachment:e,messageId:a.id,refIndex:r});i==null||i.libraryFileId==null||n.has(i.libraryFileId)||(t.set(i.appBlockId,i),n.set(i.libraryFileId,i.appBlockId))});let e=a.metadata?.focused_artifact;if(e!=null){let n=e.type===er?t.get(e.artifact_id)??null:null;r=n!=null&&n.messageId===e.source_message_id&&n.refIndex===e.source_ref_index&&(n.libraryFileId==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e.library_file_id}else{let e=a.metadata?.open_in_app_block_view,n=e==null?null:t.get(e.app_block_id)??null;r=e!=null&&n!=null&&n.messageId===e.message_id&&n.refIndex===e.ref_index&&(n.libraryFileId==null||e.library_file_id==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e?.library_file_id??null}}let o=f(a);if(o?.status!==`created`)continue;let s=n.get(o.libraryFileId),c=s==null?null:t.get(s)??null;if(c==null&&o.origin!=null){let e=o.origin.messageId,n=[...t.values()].filter(t=>t.messageId===e);c=n.length===1?n[0]:null}c==null&&s==null&&r!=null&&r.libraryFileId==null&&(i==null||i===o.libraryFileId)&&(c=r),c!=null&&(c.libraryFileId==null&&c.content!=null&&Zn(a)||(n.set(o.libraryFileId,c.appBlockId),t.set(c.appBlockId,{...c,content:null,currentContentFileId:o.newContentFileId,latestPatchMessageId:a.id,libraryFileId:o.libraryFileId,libraryFileVersionNumber:o.newVersionNumber})))}return t}function Hn({attachment:e,messageId:t,refIndex:n}){return e.library_artifact_type!==er||e.library_file_id==null?null:{appBlockId:ht({messageId:t,refIndex:n}),content:null,currentContentFileId:e.id??null,entrypoint:`index.html`,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:e.library_file_id,libraryFileName:e.name,libraryFileVersionNumber:null,mimeType:e.mime_type??null,messageId:t,refIndex:n,styleMode:null,title:e.name.replace(/\.html$/i,``)}}function Un({contentReference:e,messageId:t,refIndex:n}){if(typeof e!=`object`||!e||!(`type`in e)||!(`category`in e)||e.type!==tr||e.category!==er||!(`data`in e))return null;let r=e.data;if(typeof r!=`object`||!r)return null;let i=Wn(r,`content`),a=Wn(r,`entrypoint`)??`index.html`,o=Yn(r,a),s=Kn(o,`library_file_id`);return i==null&&s==null?null:{appBlockId:Wn(r,`app_block_id`)??ht({messageId:t,refIndex:n}),bundleVersion:Gn(r,`bundle_version`)??void 0,content:i,currentContentFileId:Kn(o,`current_content_file_id`),entrypoint:a,iconSvg:Wn(r,`icon_svg`),language:Xn(),latestPatchMessageId:null,libraryFileId:s,libraryFileName:Kn(o,`library_file_name`),libraryFileVersionNumber:Jn(qn(o,`library_file_version_number`)),mimeType:Kn(o,`mime_type`),messageId:t,refIndex:n,styleMode:Pt(Wn(r,`style_mode`)),title:Wn(r,`display_name`)??Wn(r,`title`)}}function Wn(e,t){let n=null;return t===`app_block_id`&&`app_block_id`in e&&(n=e.app_block_id),t===`content`&&`content`in e&&(n=e.content),t===`current_content_file_id`&&`current_content_file_id`in e&&(n=e.current_content_file_id),t===`display_name`&&`display_name`in e&&(n=e.display_name),t===`entrypoint`&&`entrypoint`in e&&(n=e.entrypoint),t===`icon_svg`&&`icon_svg`in e&&(n=e.icon_svg),t===`library_file_id`&&`library_file_id`in e&&(n=e.library_file_id),t===`library_file_name`&&`library_file_name`in e&&(n=e.library_file_name),t===`mime_type`&&`mime_type`in e&&(n=e.mime_type),t===`path`&&`path`in e&&(n=e.path),t===`style_mode`&&`style_mode`in e&&(n=e.style_mode),t===`title`&&`title`in e&&(n=e.title),typeof n==`string`&&n.trim()!==``?n:null}function Gn(e,t){if(t===`bundle_version`&&`bundle_version`in e){let t=e.bundle_version;if(typeof t==`number`)return t}if(t===`library_file_version_number`&&`library_file_version_number`in e){let t=e.library_file_version_number;if(typeof t==`number`)return t}return null}function Kn(e,t){return typeof e!=`object`||!e?null:Wn(e,t)}function qn(e,t){return typeof e!=`object`||!e?null:Gn(e,t)}function Jn(...e){for(let t of e)if(t!=null)return t;return null}function Yn(e,t){if(!(`files`in e)||!Array.isArray(e.files))return null;let n=null;for(let r of e.files)if(!(typeof r!=`object`||!r)&&Wn(r,`library_file_id`)!=null&&(n??=r,Wn(r,`path`)===t))return r;return n}function Xn(){return`html`}function Zn(e){let t=e.metadata?.shared_conversation_id;return typeof t==`string`&&t.trim()!==``}function Qn(e,t){return e.appBlockId===t.appBlockId&&e.bundleVersion===t.bundleVersion&&e.content===t.content&&e.currentContentFileId===t.currentContentFileId&&e.entrypoint===t.entrypoint&&e.iconSvg===t.iconSvg&&e.language===t.language&&e.latestPatchMessageId===t.latestPatchMessageId&&e.libraryFileId===t.libraryFileId&&e.libraryFileName===t.libraryFileName&&e.libraryFileVersionNumber===t.libraryFileVersionNumber&&e.mimeType===t.mimeType&&e.messageId===t.messageId&&e.refIndex===t.refIndex&&e.styleMode===t.styleMode&&e.title===t.title}function $n(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e){let e=t.get(n);if(e==null||!Qn(r,e))return!1}return!0}var er,tr,nr,rr=e((()=>{k(),D(),C(),Ne(),ae(),gt(),It(),er=`app_block`,tr=`client_defined_widget`,nr=ue(e=>le(()=>Vn(A(e).flatMap(e=>e.messages)),{equals:$n}))}));function ir({appBlockId:e,conversation:t}){return t==null?null:nr(t).get(e)??null}function ar(e){return e?.serverId$()??void 0}function or({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:Ae(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function sr({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return G({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:ee(e)?`missing`:`failed`})}),()=>{a.abort()}}function cr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??lr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function lr({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var ur=e((()=>{oe(),Ce(),rr()})),dr=t({AppBlock:()=>mr,AppBlockPreviewLoadingState:()=>Nr,AppBlockSandboxPreview:()=>Ar});function fr(e){let t=e.search(Jr),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function pr(e){let t=fr(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(Yr))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(Xr)!=null}function mr(e){"use forget";let t=(0,Z.c)(117),{additionalResourceDomains:n,appBlockId:r,authoritativeCode:i,authoritativeSource:s,code:c,collapseWhenSuperseded:l,currentContentFileId:u,displayMode:d,id:f,captureConsoleMessages:p,clientThreadId:m,iconSvg:h,isStreaming:g,isTurnStreaming:_,libraryFileId:y,libraryFileVersionNumber:b,messageId:x,onConsoleMessagesChange:S,onReadyChange:ee,progressiveStreaming:C,ref:w,refIndex:T,styleMode:te,title:E,variant:re,widgetName:D,widgetRefSeenAtMs:O}=e,k=l===void 0||l,A=p!==void 0&&p,j=g!==void 0&&g,ie=_!==void 0&&_,ae=C!==void 0&&C,M=re===void 0?`inline`:re,N=ne(),P;t[0]===N?P=t[1]:(P=()=>N!=null&&he(N),t[0]=N,t[1]=P);let oe=o(P),ce;t[2]!==m||t[3]!==N?(ce=m==null?N:a(m),t[2]=m,t[3]=N,t[4]=ce):ce=t[4];let le=ce,ue=x!=null&&T!=null?ht({messageId:x,refIndex:T}):void 0,F=r??ue??ht({messageId:x??f,refIndex:T??0}),de=o(()=>je({conversation:N??null,instanceId:F,messageId:x,refIndex:T}))??d,fe=o(()=>s!=null||de!=null?null:ir({appBlockId:F,conversation:N??null})),I=s??fe,L;t[5]===N?L=t[6]:(L=()=>ar(N??null),t[5]=N,t[6]=L);let pe=o(L),R=v(N?.id),z=pe??R,B;t[7]!==u||t[8]!==y||t[9]!==b||t[10]!==z||t[11]!==I?(B=or({currentContentFileId:u,libraryFileId:y,libraryFileVersionNumber:b,serverThreadId:z,source:I}),t[7]=u,t[8]=y,t[9]=b,t[10]=z,t[11]=I,t[12]=B):B=t[12];let V=B,[H,ge]=(0,Q.useState)(null),[_e,ve]=(0,Q.useState)(0),ye;t[13]!==_e||t[14]!==V.libraryContentKey?(ye=[V.libraryContentKey,_e],t[13]=_e,t[14]=V.libraryContentKey,t[15]=ye):ye=t[15];let be=ye.join(`\0`),xe,Se;t[16]!==i||t[17]!==be||t[18]!==V.contentFileId||t[19]!==V.libraryFileId||t[20]!==de||t[21]!==z?(xe=()=>{if(!(i!=null||de===`collapsed`))return sr({contentFileId:V.contentFileId,libraryContentKey:be,libraryFileId:V.libraryFileId,onContentStateChange:ge,serverThreadId:z})},Se=[i,V.contentFileId,V.libraryFileId,be,de,z],t[16]=i,t[17]=be,t[18]=V.contentFileId,t[19]=V.libraryFileId,t[20]=de,t[21]=z,t[22]=xe,t[23]=Se):(xe=t[22],Se=t[23]),(0,Q.useEffect)(xe,Se);let W=cr({appBlockId:F,contentFileId:V.contentFileId,currentContentFileId:u,libraryContent:H,libraryContentKey:be,libraryFileId:y,libraryFileVersionNumber:b,source:I}),Ce=H?.key===be?H:null,we;t[24]!==W?.libraryFileId||t[25]!==y?(we=()=>Ee(W?.libraryFileId??y),t[24]=W?.libraryFileId,t[25]=y,t[26]=we):we=t[26];let Te=o(we),De=W?.libraryFileVersionNumber??b,Oe=Te!=null&&(De==null||Te.versionNumber>=De)?Te.code:void 0,ke=Oe??i??W?.content??c??null,Ae=W?.iconSvg??h??null,Me=W?.libraryFileId??y,Ne=Me==null&&i==null&&Oe==null&&u==null&&I?.currentContentFileId==null&&I?.latestPatchMessageId==null,Pe;t[27]!==Ne||t[28]!==c||t[29]!==x||t[30]!==ke||t[31]!==T||t[32]!==I?(Pe=Ne?I==null?x!=null&&T!=null&&c!=null&&ke===c?{messageId:x,refIndex:T}:null:I.messageId.length>0&&I.content!=null&&ke===I.content?{messageId:I.messageId,refIndex:I.refIndex}:null:null,t[27]=Ne,t[28]=c,t[29]=x,t[30]=ke,t[31]=T,t[32]=I,t[33]=Pe):Pe=t[33];let Fe=Pe,Ie=M===`artifact`,Le=W?.styleMode??te??(Ie&&ae?`open`:void 0),Re;t[34]!==Me||t[35]!==Le?(Re=Ft({explicitStyleMode:Le,libraryFileId:Me}),t[34]=Me,t[35]=Le,t[36]=Re):Re=t[36];let K=Re,q=W?.title??E,ze;t[37]===N?ze=t[38]:(ze=()=>N!=null&&se(N)?`work`:`chat`,t[37]=N,t[38]=ze);let J=o(ze),Be;t[39]===Symbol.for(`react.memo_cache_sentinel`)?(Be=pt(),t[39]=Be):Be=t[39];let Ve=Be,He=ae,Ue=Ie&&K===`open`,We=de===`collapsed`||de==null&&k&&W?.latestPatchMessageId!=null&&W.latestPatchMessageId!==x,Ge=c!=null||u!=null,Ke;t[40]!==m||t[41]!==c||t[42]!==N?.id||t[43]!==u||t[44]!==F||t[45]!==b||t[46]!==x||t[47]!==Me||t[48]!==K||t[49]!==q||t[50]!==T||t[51]!==z||t[52]!==I?.messageId?(Ke=async e=>{let t=c;if(t==null&&u!=null)try{t=await G({abortSignal:new AbortController().signal,fileId:u,serverThreadId:z})}catch{return}t!=null&&me({appBlockId:F,conversationId:N?.id??m??null,isOriginalVersion:!0,versionNumber:b??void 0},`app-block:${F}:original`,{code:t,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:F,libraryFileId:Me,messageId:I?.messageId??x,refIndex:T},styleMode:K,title:q})},t[40]=m,t[41]=c,t[42]=N?.id,t[43]=u,t[44]=F,t[45]=b,t[46]=x,t[47]=Me,t[48]=K,t[49]=q,t[50]=T,t[51]=z,t[52]=I?.messageId,t[53]=Ke):Ke=t[53],N?.id,I?.messageId;let qe=Ke;if(j&&!He){let e;return t[54]===q?e=t[55]:(e=(0,$.jsx)(Nn,{title:q}),t[54]=q,t[55]=e),e}let Je=oe&&c!=null;if(Ce?.status===`missing`&&!Je)return null;if(We){let e=Ge?qe:void 0,n;return t[56]!==q||t[57]!==e?(n=(0,$.jsx)(Or,{onView:e,title:q}),t[56]=q,t[57]=e,t[58]=n):n=t[58],n}let Ye=ke??(He&&j?``:null);if(Ye==null){if(W?.latestPatchMessageId!=null){let e=N?.id??m,n=Ce?.status===`failed`,r;t[59]===ve?r=t[60]:(r=()=>ve(hr),t[59]=ve,t[60]=r);let i;return t[61]!==F||t[62]!==Ie||t[63]!==Ae||t[64]!==q||t[65]!==e||t[66]!==n||t[67]!==r?(i=(0,$.jsx)(yr,{appBlockId:F,conversationId:e,hasFailed:n,iconSvg:Ae,onRetry:r,showHeader:Ie,title:q}),t[61]=F,t[62]=Ie,t[63]=Ae,t[64]=q,t[65]=e,t[66]=n,t[67]=r,t[68]=i):i=t[68],i}let e;return t[69]===q?e=t[70]:(e=(0,$.jsx)(Nn,{title:q}),t[69]=q,t[70]=e),e}let Xe;t[71]!==m||t[72]!==J||t[73]!==j||t[74]!==ie||t[75]!==x||t[76]!==q||t[77]!==T?(Xe=!j&&!ie&&m!=null&&x!=null&&T!=null&&dt()?{reference:{clientThreadId:m,messageId:x,referenceIndex:T},target:{kind:`app_block`,metadata:{...q==null?{}:{title:q},tab:J}}}:void 0,t[71]=m,t[72]=J,t[73]=j,t[74]=ie,t[75]=x,t[76]=q,t[77]=T,t[78]=Xe):Xe=t[78];let Ze=Xe,Qe=N?.id??m,$e=I?.messageId??x,et;t[79]!==F||t[80]!==Me||t[81]!==T||t[82]!==$e?(et={appBlockId:F,libraryFileId:Me,messageId:$e,refIndex:T},t[79]=F,t[80]=Me,t[81]=T,t[82]=$e,t[83]=et):et=t[83];let Y=Ue&&Ve&&!j,tt=N?.id??m,X;t[84]!==Fe||t[85]!==D?(X=Fe==null?void 0:{contentReferenceIndex:Fe.refIndex,messageId:Fe.messageId,widgetName:D??U.AppBlock,widgetType:U.AppBlock},t[84]=Fe,t[85]=D,t[86]=X):X=t[86];let nt;t[87]!==n||t[88]!==A||t[89]!==F||t[90]!==Ze||t[91]!==f||t[92]!==j||t[93]!==S||t[94]!==ee||t[95]!==Ae||t[96]!==K||t[97]!==q||t[98]!==w||t[99]!==Ye||t[100]!==le||t[101]!==He||t[102]!==Ue||t[103]!==Y||t[104]!==tt||t[105]!==X||t[106]!==M||t[107]!==O?(nt=(0,$.jsx)(gr,{additionalResourceDomains:n,appBlockId:F,canOpen:Y,captureConsoleMessages:A,clientThreadId:tt,code:Ye,feedback:Ze,iconSvg:Ae,id:f,isStreaming:j,onConsoleMessagesChange:S,onReadyChange:ee,progressiveStreaming:He,ref:w,showArtifactCard:Ue,shareConversation:le,shareTarget:X,styleMode:K,title:q,variant:M,widgetRefSeenAtMs:O}),t[87]=n,t[88]=A,t[89]=F,t[90]=Ze,t[91]=f,t[92]=j,t[93]=S,t[94]=ee,t[95]=Ae,t[96]=K,t[97]=q,t[98]=w,t[99]=Ye,t[100]=le,t[101]=He,t[102]=Ue,t[103]=Y,t[104]=tt,t[105]=X,t[106]=M,t[107]=O,t[108]=nt):nt=t[108];let rt;return t[109]!==n||t[110]!==K||t[111]!==q||t[112]!==Ye||t[113]!==Qe||t[114]!==et||t[115]!==nt?(rt=(0,$.jsx)(xn,{additionalResourceDomains:n,code:Ye,conversationId:Qe,styleMode:K,source:et,title:q,children:nt}),t[109]=n,t[110]=K,t[111]=q,t[112]=Ye,t[113]=Qe,t[114]=et,t[115]=nt,t[116]=rt):rt=t[116],rt}function hr(e){return e+1}function gr(e){"use forget";let t=(0,Z.c)(68),{additionalResourceDomains:n,appBlockId:r,canOpen:i,captureConsoleMessages:a,clientThreadId:o,code:s,feedback:c,iconSvg:l,id:u,isStreaming:f,onConsoleMessagesChange:p,onReadyChange:m,progressiveStreaming:h,ref:g,shareConversation:_,shareTarget:v,showArtifactCard:y,styleMode:b,title:x,variant:S,widgetRefSeenAtMs:ee}=e,{isExpanded:C,isViewingHistoricalVersion:w,openExpandedView:T,setSharedPreview:te,sharedPreview:E,triggerRef:ne}=hn(),re=(0,Q.useContext)(_e),D;t[0]===n?D=t[1]:(D=n??[],t[0]=n,t[1]=D);let O;t[2]!==s||t[3]!==u||t[4]!==b||t[5]!==D?(O=[u,b,s,...D],t[2]=s,t[3]=u,t[4]=b,t[5]=D,t[6]=O):O=t[6];let k=O.join(`\0`),[A,j]=(0,Q.useState)(null),ae=!f&&A===k,M;t[7]===T?M=t[8]:(M=()=>{we(),T()},t[7]=T,t[8]=M);let N=M,P;t[9]!==m||t[10]!==k?(P=(e,t)=>{j(e?k:null),m?.(e,t)},t[9]=m,t[10]=k,t[11]=P):P=t[11];let oe=P,se;t[12]!==n||t[13]!==r||t[14]!==a||t[15]!==o||t[16]!==s||t[17]!==oe||t[18]!==u||t[19]!==f||t[20]!==p||t[21]!==h||t[22]!==g||t[23]!==b||t[24]!==x||t[25]!==S||t[26]!==ee?(se=(0,$.jsx)(Ar,{appBlockId:r,additionalResourceDomains:n,code:s,id:u,isStreaming:f,captureConsoleMessages:a,clientThreadId:o,onConsoleMessagesChange:p,onReadyChange:oe,presentationSurface:`inline`,progressiveStreaming:h,ref:g,styleMode:b,title:x,variant:S,widgetRefSeenAtMs:ee}),t[12]=n,t[13]=r,t[14]=a,t[15]=o,t[16]=s,t[17]=oe,t[18]=u,t[19]=f,t[20]=p,t[21]=h,t[22]=g,t[23]=b,t[24]=x,t[25]=S,t[26]=ee,t[27]=se):se=t[27];let ce;t[28]!==re||t[29]!==se?(ce={element:se,sandboxPolicy:re},t[28]=re,t[29]=se,t[30]=ce):ce=t[30];let le=ce,ue;t[31]===le?ue=t[32]:(ue=()=>le,t[31]=le,t[32]=ue);let F=ie(ue),de;t[33]!==r||t[34]!==o||t[35]!==F||t[36]!==te?(de=e=>{if(e==null)return;let{preview:t,sourceToken:n}=Le({appBlockId:r,content:F(),conversationId:o??null,inlineContainer:e});return te(t),()=>{let e=ye();Te(t,n,e?.sharedPreview===t)}},t[33]=r,t[34]=o,t[35]=F,t[36]=te,t[37]=de):de=t[37];let fe=de,I,L;t[38]!==le||t[39]!==E?(L=()=>{E!=null&&De(E,le)},I=[le,E],t[38]=le,t[39]=E,t[40]=I,t[41]=L):(I=t[40],L=t[41]),d(L,I);let pe=w?N:void 0,R;t[42]!==l||t[43]!==pe||t[44]!==x||t[45]!==ne?(R=(0,$.jsx)(Sr,{iconSvg:l,onOpen:pe,openButtonRef:ne,title:x}),t[42]=l,t[43]=pe,t[44]=x,t[45]=ne,t[46]=R):R=t[46];let z=C?R:null,B;t[47]===fe?B=t[48]:(B=(0,$.jsx)(`div`,{ref:fe,className:`w-full`}),t[47]=fe,t[48]=B);let V;t[49]!==i||t[50]!==c||t[51]!==N||t[52]!==l||t[53]!==ae||t[54]!==f||t[55]!==_||t[56]!==v||t[57]!==y||t[58]!==B||t[59]!==x||t[60]!==ne?(V=(0,$.jsx)(vr,{canOpen:i,expandButtonRef:ne,feedback:c,iconSvg:l,isShareReady:ae,shareConversation:_,shareTarget:v,isStreaming:f,showArtifactCard:y,title:x,onOpen:N,children:B}),t[49]=i,t[50]=c,t[51]=N,t[52]=l,t[53]=ae,t[54]=f,t[55]=_,t[56]=v,t[57]=y,t[58]=B,t[59]=x,t[60]=ne,t[61]=V):V=t[61];let H;t[62]!==C||t[63]!==V?(H=(0,$.jsx)(`div`,{hidden:C,children:V}),t[62]=C,t[63]=V,t[64]=H):H=t[64];let me;return t[65]!==z||t[66]!==H?(me=(0,$.jsxs)($.Fragment,{children:[z,H]}),t[65]=z,t[66]=H,t[67]=me):me=t[67],me}function _r(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:o,titleClassName:s}=e,c;t[0]===r?c=t[1]:(c=_(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=c);let l=s??`truncate text-base font-semibold`,u;t[2]===l?u=t[3]:(u=_(`text-token-text-primary`,l),t[2]=l,t[3]=u);let d=o??i,f;t[4]!==u||t[5]!==d?(f=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:u,children:d})}),t[4]=u,t[5]=d,t[6]=f):f=t[6];let p;t[7]!==a||t[8]!==f?(p=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,f]}),t[7]=a,t[8]=f,t[9]=p):p=t[9];let m;return t[10]!==n||t[11]!==c||t[12]!==p?(m=(0,$.jsxs)(`div`,{className:c,children:[p,n]}),t[10]=n,t[11]=c,t[12]=p,t[13]=m):m=t[13],m}function vr(e){"use forget";let t=(0,Z.c)(20),{canOpen:n,children:r,expandButtonRef:i,feedback:a,iconSvg:o,isShareReady:s,isStreaming:c,onOpen:l,shareConversation:d,shareTarget:f,showArtifactCard:p,title:m}=e,h=fe(),g;t[0]===h?g=t[1]:(g=h.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=h,t[1]=g);let v=g,y;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==v||t[6]!==o||t[7]!==s||t[8]!==c||t[9]!==l||t[10]!==d||t[11]!==f||t[12]!==p||t[13]!==m?(y=p?(0,$.jsxs)(`div`,{className:_(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,c&&`cursor-wait`),"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)(_r,{action:(0,$.jsx)(Zr,{canOpen:n,conversation:d,expandButtonRef:i,isReady:s,onOpen:l,target:f}),className:`min-h-13 px-4 py-2`,fallbackTitle:v,leading:c?(0,$.jsx)(u,{className:`icon-md text-token-text-primary shrink-0`}):(0,$.jsx)(wr,{iconSvg:o}),title:m}),(0,$.jsx)(`div`,{children:r})]}):(0,$.jsx)(Qr,{conversation:d,isReady:s,target:f,children:r}),t[2]=n,t[3]=r,t[4]=i,t[5]=v,t[6]=o,t[7]=s,t[8]=c,t[9]=l,t[10]=d,t[11]=f,t[12]=p,t[13]=m,t[14]=y):y=t[14];let b;t[15]===a?b=t[16]:(b=a==null?null:(0,$.jsx)(br,{...a}),t[15]=a,t[16]=b);let x;return t[17]!==y||t[18]!==b?(x=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[y,b]}),t[17]=y,t[18]=b,t[19]=x):x=t[19],x}function yr(e){"use forget";let t=(0,Z.c)(17),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:s,showHeader:c,title:l}=e,u=o(ye),d=fe(),f;t[0]===d?f=t[1]:(f=d.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=d,t[1]=f);let p=f;if(Me(u,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==l?(e=(0,$.jsx)(Sr,{iconSvg:a,title:l}),t[2]=a,t[3]=l,t[4]=e):e=t[4],e}let m;t[5]!==p||t[6]!==a||t[7]!==c||t[8]!==l?(m=c?(0,$.jsx)(_r,{className:`mb-2`,fallbackTitle:p,leading:(0,$.jsx)(wr,{iconSvg:a}),title:l}):null,t[5]=p,t[6]=a,t[7]=c,t[8]=l,t[9]=m):m=t[9];let h;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(h={minHeight:Fr},t[10]=h):h=t[10];let g;t[11]!==i||t[12]!==s?(g=(0,$.jsx)(`div`,{className:`relative w-full`,style:h,children:i?(0,$.jsx)(Pr,{onRetry:s}):(0,$.jsx)(Nr,{})}),t[11]=i,t[12]=s,t[13]=g):g=t[13];let _;return t[14]!==m||t[15]!==g?(_=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[m,g]}),t[14]=m,t[15]=g,t[16]=_):_=t[16],_}function br(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(o(xr))return null;let s;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,$.jsx)(nt,{}),t[0]=s):s=t[0];let c;return t[1]!==i||t[2]!==n||t[3]!==r?(c=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)(et,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:s})}),t[1]=i,t[2]=n,t[3]=r,t[4]=c):c=t[4],c}function xr(){return Qe()}function Sr(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=fe(),s,c,l,u,d;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),d=`not-prose relative clear-both my-4 w-full max-w-full`,u=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=_r,l=r==null?void 0:(0,$.jsx)(O,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=l,t[7]=u,t[8]=d):(s=t[4],c=t[5],l=t[6],u=t[7],d=t[8]);let f;t[9]===n?f=t[10]:(f=(0,$.jsx)(Cr,{iconSvg:n}),t[9]=n,t[10]=f);let p;t[11]!==s||t[12]!==c||t[13]!==l||t[14]!==f||t[15]!==a?(p=(0,$.jsx)(s,{action:l,className:`w-full`,fallbackTitle:c,leading:f,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=l,t[14]=f,t[15]=a,t[16]=p):p=t[16];let m;t[17]!==u||t[18]!==p?(m=(0,$.jsx)(`div`,{className:u,children:p}),t[17]=u,t[18]=p,t[19]=m):m=t[19];let h;return t[20]!==d||t[21]!==m?(h=(0,$.jsx)(`div`,{className:d,children:m}),t[20]=d,t[21]=m,t[22]=h):h=t[22],h}function Cr(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(wr,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function wr(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=Tr(r),t[0]=r,t[1]=a);let o=a,s;return t[2]!==i||t[3]!==o?(s=o==null?(0,$.jsx)(Be,{"aria-hidden":`true`,className:_(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:_(`icon-md shrink-0`,i),children:(0,$.jsx)(Ie,{svgString:o,className:`h-full w-full`})}),t[2]=i,t[3]=o,t[4]=s):s=t[4],s}function Tr(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>Ur||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Wr)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Kr.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!Er(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function Er(e){let t=e.replace(Gr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Gr)){let e=t[1],n=t[2];if(!qr.has(e)||!Dr(e,n))return!1}return!0}function Dr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function Or(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=fe(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(z,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function kr(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:i}=e,a=fe(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let s=o,l;t[2]===r?l=t[3]:(l=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=l);let u;t[4]!==s||t[5]!==i||t[6]!==l?(u=(0,$.jsx)(O,{ref:i,type:`button`,icon:Ve,color:`ghost`,size:`medium`,label:s,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:l}),t[4]=s,t[5]=i,t[6]=l,t[7]=u):u=t[7];let d;return t[8]!==n||t[9]!==s||t[10]!==u?(d=(0,$.jsx)(c,{label:s,className:n,children:u}),t[8]=n,t[9]=s,t[10]=u,t[11]=d):d=t[11],d}function Ar(e){"use forget";let t=(0,Z.c)(152),{appBlockId:n,additionalResourceDomains:r,clientThreadId:i,code:a,id:s,captureConsoleMessages:c,isStreaming:l,onConsoleMessagesChange:u,onReadyChange:d,presentationSurface:f,progressiveStreaming:p,ref:m,styleMode:h,surface:g,title:v,variant:y,widgetRefSeenAtMs:b}=e,S=l!==void 0&&l,ee=p!==void 0&&p,C=h===void 0?`default`:h,w=g===void 0?`inline`:g,T=y===void 0?`inline`:y,te=fe(),E=(0,Q.useRef)(null),ne=(0,Q.useRef)(!1),re=(0,Q.useRef)(!1),D=(0,Q.useRef)(null),O=(0,Q.useRef)(null),k=(0,Q.useRef)(null),A=(0,Q.useRef)(null),j=(0,Q.useRef)(null),ae=(0,Q.useRef)(null),M=(0,Q.useRef)(null),N=(0,Q.useRef)(0),P=(0,Q.useRef)(null),oe=(0,Q.useRef)(null),se;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(se=[],t[0]=se):se=t[0];let le=(0,Q.useRef)(se),ue=x(),F=o(ce),{allowDependencyNetworkRequestsWithoutCanvasAccess:I}=(0,Q.useContext)(_e),L=Je()||I,pe=Ke(i)&&!I,R=ue?`dark`:`light`,B=te.locale,V;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(V={status:`streaming`},t[1]=V):V=t[1];let[H,me]=(0,Q.useState)(V),he=H.status===`finalized`&&H.html!==a,ge=ee&&!S&&(T===`artifact`||H.status===`failed`),U=ee&&w===`inline`&&H.status!==`static`&&!ge&&!he,ve=U&&S&&T===`artifact`&&!pr(a),ye=ve?0:Ir,be=L?`execution-enabled`:`execution-disabled`,xe=pe?`network-enabled`:`network-disabled`,Se=U?`progressive-app-block-stream`:a,W;t[2]===r?W=t[3]:(W=r??[],t[2]=r,t[3]=W);let Ce;t[4]!==F||t[5]!==B||t[6]!==C||t[7]!==w||t[8]!==Se||t[9]!==W||t[10]!==be||t[11]!==xe||t[12]!==R?(Ce=[R,F,w,C,B,be,xe,Se,...W],t[4]=F,t[5]=B,t[6]=C,t[7]=w,t[8]=Se,t[9]=W,t[10]=be,t[11]=xe,t[12]=R,t[13]=Ce):Ce=t[13];let we=Ce.join(`\0`),Te;t[14]===r?Te=t[15]:(Te=rn(r),t[14]=r,t[15]=Te);let Ee=Te,De=pe?`deps_only`:`disabled`,Oe=w===`inline`?T:void 0,ke=U?`progressive`:`static`,Ae;t[16]!==w||t[17]!==De||t[18]!==Oe||t[19]!==ke?(Ae={networkPolicy:De,surface:w,variant:Oe,renderMode:ke},t[16]=w,t[17]=De,t[18]=Oe,t[19]=ke,t[20]=Ae):Ae=t[20];let je=Ae,[Me,Ne]=(0,Q.useState)(0),[Pe,Fe]=(0,Q.useState)(null),Ie=Pe?.signature===we?Pe.status:null,G=Ie===`ready`,Le=G||Ie===`failed_after_ready`,Re=U&&Ie===`failed`,K=!S&&!U&&Ie===`failed`,q=f??w,ze=ee&&q===`inline`&&T===`inline`,J=U&&q===`inline`&&S&&!K,Be;t[21]!==a||t[22]!==je||t[23]!==b?(Be={content:a,metricTags:je,widgetRefSeenAtMs:b},t[21]=a,t[22]=je,t[23]=b,t[24]=Be):Be=t[24];let{cancelFirstPaintFrame:Ve,startRunMetrics:He}=Ct(Be),Ue,qe;t[25]!==G||t[26]!==d?(Ue=()=>{d?.(G)},qe=[G,d],t[25]=G,t[26]=d,t[27]=Ue,t[28]=qe):(Ue=t[27],qe=t[28]),(0,Q.useEffect)(Ue,qe);let Xe,Ze;t[29]!==G||t[30]!==f?(Xe=()=>{!G||f==null||E.current?.updateAppBlockSurface?.(f)},Ze=[G,f],t[29]=G,t[30]=f,t[31]=Xe,t[32]=Ze):(Xe=t[31],Ze=t[32]),(0,Q.useEffect)(Xe,Ze);let Qe,$e;t[33]===Symbol.for(`react.memo_cache_sentinel`)?(Qe=()=>({clearCapturedConsoleMessages:()=>{le.current=[]},captureScreenshotDataUrl:async()=>(await E.current?.screenshot())?.imageBase64??null,focus:()=>{E.current?.focus()}}),$e=[],t[33]=Qe,t[34]=$e):(Qe=t[33],$e=t[34]),(0,Q.useImperativeHandle)(m,Qe,$e);let et;t[35]===Symbol.for(`react.memo_cache_sentinel`)?(et=()=>{P.current!=null&&(window.clearTimeout(P.current),P.current=null)},t[35]=et):et=t[35];let Y=ie(et),tt;t[36]===Symbol.for(`react.memo_cache_sentinel`)?(tt=()=>{oe.current!=null&&(window.clearTimeout(oe.current),oe.current=null)},t[36]=tt):tt=t[36];let X=ie(tt),nt;t[37]!==G||t[38]!==U?(nt=()=>{if(!U||!G||j.current==null)return;let e=A.current,t=E.current;if(e==null||t?.updateAppBlockStream==null||re.current)return;let n=N.current;A.current=null,O.current=vt(),k.current=e.html,e.isFinal&&(re.current=!0);let r=()=>N.current!==n||j.current==null?Promise.resolve():t.updateAppBlockStream?.(e)??Promise.resolve(),i=M.current,a=i==null?r():i.then(r);M.current=a,a.then(()=>{M.current===a&&(M.current=null);let t=j.current;N.current!==n||t==null||(pr(e.html)&&t.markFirstPaint(),e.isFinal&&(t.reportPayloadSize(e.html),me({status:`finalized`,html:e.html})))},e=>{M.current===a&&(M.current=null),N.current===n&&(e instanceof DOMException&&e.name===`AbortError`||ae.current?.(`stream_update`,bt(e)))})},t[37]=G,t[38]=U,t[39]=nt):nt=t[39];let rt=ie(nt),it;t[40]!==F||t[41]!==c||t[42]!==Y||t[43]!==X||t[44]!==a||t[45]!==L||t[46]!==pe||t[47]!==he||t[48]!==S||t[49]!==B||t[50]!==u||t[51]!==d||t[52]!==f||t[53]!==we||t[54]!==H.status||t[55]!==ge||t[56]!==U||t[57]!==He||t[58]!==C||t[59]!==w||t[60]!==R?(it=()=>{if(!L)return;if(H.status===`failed`){if(S)return;me({status:`static`}),Ne(Mr);return}(he||ge&&H.status!==`static`)&&me({status:`static`});let e=U&&E.current?.updateAppBlockStream!=null;if(U&&!e){S||me({status:`static`});return}ne.current=!0,re.current=!1,D.current=null,O.current=null,k.current=null,A.current=null,j.current=null,ae.current=null,M.current=null,X(),N.current+=1;let t=N.current;Y(),Fe(null);let{expectReadySignal:n,html:r}=an(a,R,B,F,w,{loadTailwind:pe,progressiveStreaming:e,syncPresentationSurface:f!=null,styleMode:C}),i=!1,o=!1,s=!1,l=!1,p=!1,m=()=>N.current===t,h=He(m,{deferFirstPaint:e,deferPayloadSize:e});e&&(j.current=h);let g=e=>{!c||u==null||!m()||(le.current=e,!l&&(l=!0,de.postTask(()=>{l=!1,m()&&u(le.current)},{priority:`background`})))},_=e=>{!m()||i||s||(i=!0,Y(),h.markReady(e),!p&&(p=!0,de.postTask(()=>{p=!1,!(!m()||s)&&(o=!0,Fe({signature:we,status:`ready`}))},{priority:`background`})))},v=(t,n)=>{!m()||s||(s=!0,Y(),X(),A.current=null,j.current=null,e&&me({status:`failed`}),Fe({signature:we,status:o?`failed_after_ready`:`failed`}),h.reportFailure(t,n),de.postTask(()=>{m()&&(e?d?.(!1):d?.(!1,`failure`))},{priority:`background`}))};ae.current=v,le.current=[],g([]),P.current=window.setTimeout(()=>{v(`sandbox_eval`,`ready_timeout`)},Rr),(async()=>{let t=E.current?.evalAsync({code:r,expectReadySignal:n,language:`html`,shouldPreservePreviewOnFatalError:()=>m()&&e&&o});if(t==null){v(`sandbox_eval`,`missing_generator`);return}for(;;){let e=await t.next();if(e.done){m()&&!i&&v(`sandbox_eval`,`generator_completed_without_ready`);break}m()&&(g([...le.current,e.value]),e.value.type===We.ENVIRONMENT_STATUS&&e.value.status===Ge.RUNNING_CODE&&_(`running_code`),e.value.type===We.RUN_COMPLETE&&(e.value.wasFatalError?v(`runtime`,`fatal_runtime_error`):(_(`run_complete`),h.reportSuccess(`run_complete`))),await de.yield())}})().catch(e=>{m()&&(e instanceof DOMException&&e.name===`AbortError`||v(`sandbox_eval`,bt(e)))})},t[40]=F,t[41]=c,t[42]=Y,t[43]=X,t[44]=a,t[45]=L,t[46]=pe,t[47]=he,t[48]=S,t[49]=B,t[50]=u,t[51]=d,t[52]=f,t[53]=we,t[54]=H.status,t[55]=ge,t[56]=U,t[57]=He,t[58]=C,t[59]=w,t[60]=R,t[61]=it):it=t[61];let at=ie(it),ot;t[62]!==Y||t[63]!==X?(ot=()=>{N.current+=1,ne.current=!1,re.current=!1,D.current=null,k.current=null,A.current=null,j.current=null,ae.current=null,M.current=null,Y(),X(),Fe(null),Ne(jr)},t[62]=Y,t[63]=X,t[64]=ot):ot=t[64];let st=ie(ot),ct;t[65]===q?ct=t[66]:(ct=q===`inline`?{margin:-4,width:`calc(100% + ${Lr*2}px)`}:void 0,t[65]=q,t[66]=ct);let lt=ct,ut;t[67]!==Ve||t[68]!==Y||t[69]!==X||t[70]!==at?(ut=()=>{at();let e=E.current;return()=>{N.current+=1,j.current=null,ae.current=null,M.current=null,Y(),X(),Ve(),e?.stop()}},t[67]=Ve,t[68]=Y,t[69]=X,t[70]=at,t[71]=ut):ut=t[71];let dt;t[72]!==Ve||t[73]!==Y||t[74]!==X||t[75]!==L||t[76]!==we||t[77]!==at||t[78]!==Me?(dt=[Ve,Y,X,L,we,at,Me],t[72]=Ve,t[73]=Y,t[74]=X,t[75]=L,t[76]=we,t[77]=at,t[78]=Me,t[79]=dt):dt=t[79],(0,Q.useEffect)(ut,dt);let ft,pt;t[80]!==S||t[81]!==at||t[82]!==U?(ft=()=>{!U||S||ne.current||E.current?.updateAppBlockStream!=null||at()},pt=[S,at,U],t[80]=S,t[81]=at,t[82]=U,t[83]=ft,t[84]=pt):(ft=t[83],pt=t[84]),(0,Q.useEffect)(ft,pt);let mt,ht;if(t[85]!==X||t[86]!==a||t[87]!==rt||t[88]!==K||t[89]!==G||t[90]!==S||t[91]!==U||t[92]!==T?(mt=()=>{if(!U||!G||K||re.current||E.current?.updateAppBlockStream==null)return;let e=S?fr(a):a;if(S&&(A.current?.html??k.current)===e)return;if(A.current={html:e,isFinal:!S},!S){X(),rt();return}let t=O.current;if(t==null&&T===`artifact`&&(D.current??=vt(),t=D.current),t==null){rt();return}let n=T===`artifact`?Br:zr,r=vt()-t;if(r>=n){rt();return}return oe.current=window.setTimeout(()=>{oe.current=null,rt()},n-r),X},ht=[X,a,rt,K,G,S,U,T],t[85]=X,t[86]=a,t[87]=rt,t[88]=K,t[89]=G,t[90]=S,t[91]=U,t[92]=T,t[93]=mt,t[94]=ht):(mt=t[93],ht=t[94]),(0,Q.useEffect)(mt,ht),!L){let e;return t[95]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(On,{}),t[95]=e):e=t[95],e}let gt=ze&&`flex-col`,_t=q===`inline`&&(ve?`h-0 min-h-0 overflow-hidden`:`min-h-[120px] overflow-visible`),yt=q===`stage`&&`h-full min-h-0`,xt;t[96]!==gt||t[97]!==_t||t[98]!==yt?(xt=_(`flex w-full`,gt,_t,yt),t[96]=gt,t[97]=_t,t[98]=yt,t[99]=xt):xt=t[99];let St;t[100]!==ze||t[101]!==J||t[102]!==v?(St=ze?(0,$.jsx)(zn,{isVisible:J,title:v}):null,t[100]=ze,t[101]=J,t[102]=v,t[103]=St):St=t[103];let wt=q===`inline`?`flex-none`:`w-full`,Tt=J&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,Et;t[104]!==wt||t[105]!==Tt?(Et=_(`relative min-w-0`,wt,Tt),t[104]=wt,t[105]=Tt,t[106]=Et):Et=t[106];let Dt=`${Me}:${pe?`network-enabled`:`network-disabled`}`,Ot;t[107]!==n||t[108]!==i||t[109]!==s?(Ot=JSON.stringify([i??null,n??s]),t[107]=n,t[108]=i,t[109]=s,t[110]=Ot):Ot=t[110];let kt;t[111]===te?kt=t[112]:(kt=te.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[111]=te,t[112]=kt);let At=pe?`deps-only`:`none`,jt=pe?Vr:Hr,Mt=Le?0:-1,Nt=q===`inline`&&C===`open`,Pt=q!==`stage`,Ft=U?ye:Fr,It;t[113]!==s||t[114]!==at||t[115]!==Ee||t[116]!==Dt||t[117]!==Ot||t[118]!==kt||t[119]!==At||t[120]!==jt||t[121]!==Mt||t[122]!==Nt||t[123]!==Pt||t[124]!==Ft?(It=(0,$.jsx)(Ye,{id:s,sandboxOriginId:Ot,title:kt,visuallyHidden:!1,networkPolicy:At,additionalResourceDomains:Ee,sandboxPermissions:jt,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:Mt,onRetryCodeRun:at,transparentBackground:Nt,useIntrinsicHeight:Pt,intrinsicHeightFallback:Ft,ref:E},Dt),t[113]=s,t[114]=at,t[115]=Ee,t[116]=Dt,t[117]=Ot,t[118]=kt,t[119]=At,t[120]=jt,t[121]=Mt,t[122]=Nt,t[123]=Pt,t[124]=Ft,t[125]=It):It=t[125];let Lt;t[126]===J?Lt=t[127]:(Lt=J?(0,$.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 z-10 cursor-wait`}):null,t[126]=J,t[127]=Lt);let Rt;t[128]!==Re||t[129]!==K||t[130]!==Le||t[131]!==U?(Rt=!Le&&!K&&(!U||Re)?(0,$.jsx)(Nr,{}):null,t[128]=Re,t[129]=K,t[130]=Le,t[131]=U,t[132]=Rt):Rt=t[132];let zt;t[133]!==K||t[134]!==st?(zt=K?(0,$.jsx)(Pr,{onRetry:st}):null,t[133]=K,t[134]=st,t[135]=zt):zt=t[135];let Bt;t[136]!==lt||t[137]!==J||t[138]!==Et||t[139]!==It||t[140]!==Lt||t[141]!==Rt||t[142]!==zt?(Bt=(0,$.jsxs)(`div`,{"aria-busy":J,className:Et,style:lt,children:[It,Lt,Rt,zt]}),t[136]=lt,t[137]=J,t[138]=Et,t[139]=It,t[140]=Lt,t[141]=Rt,t[142]=zt,t[143]=Bt):Bt=t[143];let Vt;t[144]!==J||t[145]!==T?(Vt=J&&T===`artifact`?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[144]=J,t[145]=T,t[146]=Vt):Vt=t[146];let Ht;return t[147]!==xt||t[148]!==St||t[149]!==Bt||t[150]!==Vt?(Ht=(0,$.jsxs)(`div`,{className:xt,children:[St,Bt,Vt]}),t[147]=xt,t[148]=St,t[149]=Bt,t[150]=Vt,t[151]=Ht):Ht=t[151],Ht}function jr(e){return e+1}function Mr(e){return e+1}function Nr(){"use forget";let e=(0,Z.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsx)(u,{className:`icon-sm text-token-text-tertiary`}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,role:`status`,children:[t,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})})]}),e[1]=n):n=e[1],n}function Pr(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(z,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(z,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(O,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r=e((()=>{Z=B(),i(),Ze(),Se(),X(),p(),F(),Xe(),N(),He(),q(),J(),Fe(),qe(),D(),be(),rt(),ve(),l(),h(),g(),ke(),M(),j(),re(),T(),$e(),it(),Ce(),Ue(),s(),Q=n(R()),pe(),mn(),Nt(),mt(),Dn(),Re(),jn(),vn(),Bn(),gt(),K(),Oe(),It(),ur(),$=V(),Fr=432,Ir=120,Lr=4,Rr=15e3,zr=100,Br=350,Vr=`allow-scripts allow-same-origin allow-forms`,Hr=`allow-scripts allow-same-origin`,Ur=12e3,Wr=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Gr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Kr=new Set([`svg`,`path`]),qr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),Jr=/<script(?:\s|>)/i,Yr=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,Xr=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,Zr=e=>{"use forget";let t=(0,Z.c)(13),{canOpen:n,conversation:r,expandButtonRef:i,isReady:a,onOpen:o,target:s}=e,l;t[0]!==n||t[1]!==i||t[2]!==o?(l=n&&o!=null?(0,$.jsx)(kr,{ref:i,className:`shrink-0`,onClick:o}):null,t[0]=n,t[1]=i,t[2]=o,t[3]=l):l=t[3];let u=l;if(r==null)return u;let d;t[4]===s?d=t[5]:(d=s??{contentReferenceIndex:-1,messageId:``},t[4]=s,t[5]=d);let f=d,p=a&&s!=null,m;t[6]===u?m=t[7]:(m=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(c,{label:n,children:(0,$.jsx)(O,{type:`button`,icon:ze,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),u]}):u},t[6]=u,t[7]=m);let h;return t[8]!==f||t[9]!==r||t[10]!==p||t[11]!==m?(h=(0,$.jsx)(at,{category:U.AppBlock,conversation:r,isReady:p,target:f,children:m}),t[8]=f,t[9]=r,t[10]=p,t[11]=m,t[12]=h):h=t[12],h},Qr=e=>{"use forget";let t=(0,Z.c)(9),{children:n,conversation:r,isReady:i,target:a}=e;if(r==null)return n;let o;t[0]===a?o=t[1]:(o=a??{contentReferenceIndex:-1,messageId:``},t[0]=a,t[1]=o);let s=o,c=i&&a!=null,l;t[2]===n?l=t[3]:(l=e=>(0,$.jsxs)(`div`,{className:`group/keyboard-or-hover relative`,children:[n,e.isVisible?(0,$.jsx)(`div`,{className:`pointer-events-none absolute end-2 top-2 z-10`,children:(0,$.jsx)(`div`,{className:`cant-hover:hidden`,children:(0,$.jsx)(ot,{action:e})})}):null]}),t[2]=n,t[3]=l);let u;return t[4]!==s||t[5]!==r||t[6]!==c||t[7]!==l?(u=(0,$.jsx)(at,{category:U.InlineAppBlock,conversation:r,isReady:c,target:s,children:l}),t[4]=s,t[5]=r,t[6]=c,t[7]=l,t[8]=u):u=t[8],u}}));export{ft as S,Nt as _,$r as a,mt as b,nr as c,Cn as d,Dn as f,vt as g,Ft as h,dr as i,rr as l,Pt as m,Nr as n,ir as o,It as p,Ar as r,ur as s,mr as t,Sn as u,ht as v,pt as x,gt as y};
//# sourceMappingURL=e3b746a6-gf9ggncg9j48zd2w.js.map