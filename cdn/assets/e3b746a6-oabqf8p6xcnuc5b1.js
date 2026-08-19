const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-kyrtnekms0qoskhi.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-egdzkz0306qltp2w.js","assets/2340486e-i20axdnmh5jcl165.js","assets/conversation-small-ddq9asxm6z4ohvb1.js","assets/30901919-lct6m12f7mklk7w6.js","assets/c470f5ab-jylgkjhdzq7nvjem.js","assets/0e5afe53-k60rytpansvzkvch.js","assets/conversation-small-ftje035n.css","assets/8b34dbc2-ngj40zyd7u5oyw5n.js","assets/82782bc9-oyqt63t073nypfkf.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{$m as r,AP as i,AZ as a,EV as o,FZ as s,GC as c,HH as l,HQ as u,Iy as d,K4 as f,L4 as p,Ly as m,M4 as h,MF as g,OV as _,Qm as v,R4 as y,UH as b,UQ as x,W4 as S,YC as C,_k as ee,a$ as te,c3 as w,f0 as ne,g0 as T,gk as E,i$ as D,i3 as O,iW as k,jF as A,js as re,kP as j,ks as M,ow as N,pW as ie,pa as P,pq as ae,qC as F,s3 as oe,sw as se,vk as I,xa as ce,xk as le,zC as ue}from"./4813494d-egdzkz0306qltp2w.js";import{Cn as L,Sn as R,Tn as de,bn as fe,en as z,gn as B,wn as V,xn as H,yn as pe}from"./2340486e-i20axdnmh5jcl165.js";import{Ab as U,G8 as me,H8 as he,Ivt as ge,JKt as _e,Jyt as ve,K8 as ye,Pvt as W,U8 as be,W8 as xe,X8 as Se,Y8 as Ce,YKt as we,Yyt as Te,Z8 as Ee,cE as De,cu as Oe,dE as ke,e5 as Ae,er as je,jb as Me,lan as Ne,lu as G,n5 as Pe,qyt as Fe,t5 as Ie,tE as K,tr as q,uan as Le}from"./conversation-small-ddq9asxm6z4ohvb1.js";import{$C as Re,DE as ze,Jx as Be,OE as Ve,Yx as He,ew as Ue}from"./30901919-lct6m12f7mklk7w6.js";import{i as We,n as Ge,t as Ke}from"./8d846022-habmttvqwy4a5siq.js";import{a as qe,i as Je,o as Ye}from"./91969468-kx0r3kwoz26zw7qj.js";import{n as Xe,t as J}from"./4d271a7b-nezhvt3t68kytt9j.js";import{n as Ze,r as Y}from"./58bafdef-jx4zvl2gz8k5jq0e.js";import{a as Qe,i as $e}from"./e01e2324-jdapq8b0vh4frri1.js";import{i as et,t as X}from"./5dc32f04-of0e9y0ihn3nrxny.js";import{n as tt,t as nt}from"./066a83b9-ixc19jle7ujk21rk.js";import{n as rt,t as it}from"./f0f3c45c-bwsqscmq8fzgnmbx.js";import{i as at,n as ot,r as st,t as ct}from"./cc79834b-kiula3bfcpk06f7b.js";function lt(){return h(`2779568043`)}function ut(){return h(`3864712762`)}function dt(){return p(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var ft=e((()=>{y()}));function pt({messageId:e,refIndex:t}){return`appblock:${e}:${t}`}var mt=e((()=>{}));function ht({errorSource:e,errorType:t,networkPolicy:n,outcome:r,readySignal:i,renderMode:a,surface:o,variant:s}){let c={network_policy:n,surface:o};return e!=null&&(c.error_source=e),t!=null&&(c.error_type=t),r!=null&&(c.outcome=r),i!=null&&(c.ready_signal=i),a!=null&&(c.render_mode=a),s!=null&&(c.variant=s),c}function gt(){return typeof performance<`u`?performance.now():Date.now()}function _t(e){return new TextEncoder().encode(e).byteLength/1024}function vt(e){return e instanceof Error?e.name:`unknown`}function yt(e,t,n=1){w.count(O.APP_BLOCKS,e,ht(t),n)}function bt(e,t,n){w.hist(O.APP_BLOCKS,e,ht(n),t)}function xt({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,St.useRef)(gt()),i=(0,St.useRef)(null),a=(0,St.useRef)(!1),o=(0,St.useRef)(!1),s=ee(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=ee((n=e)=>{o.current||(o.current=!0,bt(Tt,_t(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:ee((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=gt(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),yt(Ot,t);let _=(e,n)=>{f||(f=!0,yt(Dt,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=gt();bt(Et,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,bt(Ct,s-r.current,t),n!=null&&bt(At,s-n,t))},y=(e,t)=>{if(s(),typeof window>`u`){v(e,t);return}i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,t)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=gt(),g=n,bt(kt,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{!e()||p||(p=!0,s(),yt(wt,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt=e((()=>{oe(),E(),St=n(L()),Ct=`app_block.first_render_time_ms`,wt=`app_block.load.failure`,Tt=`app_block.payload_size_kb`,Et=`app_block.ready_to_first_paint_ms`,Dt=`app_block.render.outcome`,Ot=`app_block.render.start`,kt=`app_block.sandbox_eval_to_ready_ms`,At=`app_block.widget_ref_to_first_paint_ms`}));function Mt(e){return e==="default"||e===`open`?e:null}function Nt({explicitStyleMode:e,libraryFileId:t}){return e??(t==null?`default`:`open`)}var Pt=e((()=>{})),Ft,It=e((()=>{Ft=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main{padding-block-start:12px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),Lt=e((()=>{})),Rt,zt=e((()=>{Lt(),Rt=`/cdn/assets/app-block-sandbox-foundation-c11hc9c6.css`})),Bt,Vt=e((()=>{Bt=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main{padding-block-start:12px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){--app-block-slider-track:color-mix(in srgb, var(--viz-text) 16%, transparent);--app-block-slider-thumb-shadow:color-mix(in srgb, var(--viz-text) 18%, transparent);appearance:none;background:linear-gradient(var(--app-block-slider-track), var(--app-block-slider-track)) center / 100% 4px no-repeat;cursor:pointer;border:0;border-radius:9999px;width:100%;height:28px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.5}:where(input[type=range])::-webkit-slider-runnable-track{background:0 0;border:0;height:28px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;margin-top:5px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-webkit-slider-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-webkit-slider-thumb{transform:scale(1.06)}:where(input[type=range])::-moz-range-track{background:var(--app-block-slider-track);border:0;border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-progress{background:var(--viz-accent);border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-thumb{border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-moz-range-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-moz-range-thumb{transform:scale(1.06)}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),Ht=e((()=>{})),Ut,Wt=e((()=>{Ht(),Ut=`/cdn/assets/app-block-sandbox-grv3t07f.css`}));function Gt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Kt=e((()=>{}));function qt(e){return String.raw(rn||=Gt([`<script>
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
<\/script>`]))}));function pn(){"use forget";let e=(0,mn.useContext)(hn);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var mn,hn,gn=e((()=>{mn=n(L()),hn=(0,mn.createContext)(null)})),_n,vn=e((()=>{b(),de(),_n=l(()=>V(()=>import(`./7aa2b76f-kyrtnekms0qoskhi.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}));function yn(e){"use forget";let t=(0,Sn.c)(40),{additionalResourceDomains:n,children:r,code:i,conversationId:a,source:o,styleMode:s,title:c}=e,l=`app-block:${o.appBlockId}:${(0,Cn.useId)()}`,u=(0,Cn.useRef)(null),[d,f]=(0,Cn.useState)(null),p=o.appBlockId,m=o.libraryFileId,h=o.messageId,g=o.refIndex,_=a??null,v;t[0]!==_||t[1]!==p?(v={appBlockId:p,conversationId:_},t[0]=_,t[1]=p,t[2]=v):v=t[2];let y=v,b=x(he),S;t[3]!==b||t[4]!==y?(S=ye(b,y),t[3]=b,t[4]=y,t[5]=S):S=t[5];let C=S,ee=b?.appBlockId===p&&b.conversationId===_&&(b.isOriginalVersion===!0||b.versionNumber!=null),te=C||ee,w;t[6]!==b||t[7]!==l||t[8]!==y?(w=Ce(b,y,l),t[6]=b,t[7]=l,t[8]=y,t[9]=w):w=t[9];let ne=w,T;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(T=()=>{u.current?.focus()},t[10]=T):T=t[10];let E=T,D=d?.supportsAtomicMove?d:void 0,O;t[11]!==p||t[12]!==m||t[13]!==h||t[14]!==g?(O={appBlockId:p,libraryFileId:m,messageId:h,refIndex:g},t[11]=p,t[12]=m,t[13]=h,t[14]=g,t[15]=O):O=t[15];let k;t[16]!==n||t[17]!==i||t[18]!==s||t[19]!==D||t[20]!==O||t[21]!==c?(k={additionalResourceDomains:n,code:i,focusOnClose:E,sharedPreview:D,source:O,styleMode:s,title:c},t[16]=n,t[17]=i,t[18]=s,t[19]=D,t[20]=O,t[21]=c,t[22]=k):k=t[22];let A=k,re,j;t[23]!==A||t[24]!==C||t[25]!==y?(re=()=>{C&&Se(y,A)},j=[A,C,y],t[23]=A,t[24]=C,t[25]=y,t[26]=re,t[27]=j):(re=t[26],j=t[27]),(0,Cn.useEffect)(re,j);let M;t[28]!==A||t[29]!==ne||t[30]!==y?(M=()=>{be(y,ne,A)},t[28]=A,t[29]=ne,t[30]=y,t[31]=M):M=t[31];let N=M,ie;t[32]!==te||t[33]!==ee||t[34]!==N||t[35]!==d?(ie={isExpanded:te,isViewingHistoricalVersion:ee,openExpandedView:N,setSharedPreview:f,sharedPreview:d,triggerRef:u},t[32]=te,t[33]=ee,t[34]=N,t[35]=d,t[36]=ie):ie=t[36];let P=ie,ae;return t[37]!==r||t[38]!==P?(ae=(0,wn.jsx)(hn.Provider,{value:P,children:r}),t[37]=r,t[38]=P,t[39]=ae):ae=t[39],ae}function bn(e){"use forget";let t=(0,Sn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,headerTitleContent:o,title:s}=e,c=st(),l;t[0]===i?l=t[1]:(l=()=>i==null?0:Oe(i).height$()??0,t[0]=i,t[1]=l);let u=x(l),d=c===`fullscreen`&&n&&i!=null?u:0,f=o??s,p;t[2]===f?p=t[3]:(p=(0,wn.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:f}),t[2]=f,t[3]=p);let m;t[4]!==a||t[5]!==p?(m=(0,wn.jsxs)(ct.Header,{className:`pb-1`,children:[p,a]}),t[4]=a,t[5]=p,t[6]=m):m=t[6];let h;t[7]===d?h=t[8]:(h={paddingBottom:d},t[7]=d,t[8]=h);let g;t[9]===r?g=t[10]:(g=(0,wn.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=g);let _;t[11]!==h||t[12]!==g?(_=(0,wn.jsx)(ct.Body,{className:`bg-token-bg-primary overflow-hidden`,style:h,children:g}),t[11]=h,t[12]=g,t[13]=_):_=t[13];let v;return t[14]!==m||t[15]!==_?(v=(0,wn.jsxs)(wn.Fragment,{children:[m,_]}),t[14]=m,t[15]=_,t[16]=v):v=t[16],v}function xn(e){"use forget";let t=(0,Sn.c)(5),{conversation:n,paneId:r}=e,i=at(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,wn.jsx)(_n,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var Sn,Cn,wn,Tn=e((()=>{Sn=z(),G(),ot(),u(),Cn=n(L()),gn(),me(),vn(),wn=R()}));function En(){"use forget";let e=(0,Dn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,On.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,On.jsx)(B,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var Dn,On,kn=e((()=>{Dn=z(),fe(),On=R()}));function An(e){"use forget";let t=(0,Mn.c)(38),n=H(),r;t[0]!==n||t[1]!==e?(r=e?n.formatMessage(In.generatingApp,{title:e}):n.formatMessage(In.creatingInterface),t[0]=n,t[1]=e,t[2]=r):r=t[2];let i=r,a;t[3]===n?a=t[4]:(a=n.formatMessage(In.sketchingInterface),t[3]=n,t[4]=a);let o;t[5]===n?o=t[6]:(o=n.formatMessage(In.shapingLayout),t[5]=n,t[6]=o);let s;t[7]===n?s=t[8]:(s=n.formatMessage(In.arrangingPieces),t[7]=n,t[8]=s);let c;t[9]===n?c=t[10]:(c=n.formatMessage(In.polishingVisuals),t[9]=n,t[10]=c);let l;t[11]===n?l=t[12]:(l=n.formatMessage(In.tuningInputs),t[11]=n,t[12]=l);let u;t[13]===n?u=t[14]:(u=n.formatMessage(In.addingInteractivity),t[13]=n,t[14]=u);let d;t[15]===n?d=t[16]:(d=n.formatMessage(In.wiringControls),t[15]=n,t[16]=d);let f;t[17]===n?f=t[18]:(f=n.formatMessage(In.composingInteractions),t[17]=n,t[18]=f);let p;t[19]===n?p=t[20]:(p=n.formatMessage(In.calibratingPreview),t[19]=n,t[20]=p);let m;t[21]===n?m=t[22]:(m=n.formatMessage(In.refiningDetails),t[21]=n,t[22]=m);let h;t[23]!==i||t[24]!==a||t[25]!==m||t[26]!==o||t[27]!==s||t[28]!==c||t[29]!==l||t[30]!==u||t[31]!==d||t[32]!==f||t[33]!==p?(h=[i,a,o,s,c,l,u,d,f,p,m],t[23]=i,t[24]=a,t[25]=m,t[26]=o,t[27]=s,t[28]=c,t[29]=l,t[30]=u,t[31]=d,t[32]=f,t[33]=p,t[34]=h):h=t[34];let g=h,[_,v]=(0,Nn.useState)(0),y,b;return t[35]===g.length?(y=t[36],b=t[37]):(y=()=>{let e=window.setInterval(()=>{v(e=>Math.min(e+1,g.length-1))},Fn);return()=>{window.clearInterval(e)}},b=[g.length],t[35]=g.length,t[36]=y,t[37]=b),(0,Nn.useEffect)(y,b),g[_]??g[0]??``}function jn(e){"use forget";let t=(0,Mn.c)(2),{title:n}=e,r=An(n),i;return t[0]===r?i=t[1]:(i=(0,Pn.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,role:`status`,children:(0,Pn.jsx)(X,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:r})}),t[0]=r,t[1]=i),i}var Mn,Nn,Pn,Fn,In,Ln=e((()=>{Mn=z(),et(),Nn=n(L()),fe(),Pn=R(),Fn=2800,In=pe({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}})}));function Rn(e){let t=new Map,n=new Map,r=null,i=null;for(let a of e){let e=a.metadata?.content_references;if(Array.isArray(e)&&e.forEach((e,r)=>{let i=Bn({contentReference:e,messageId:a.id,refIndex:r});i!=null&&(t.set(i.appBlockId,i),i.libraryFileId!=null&&n.set(i.libraryFileId,i.appBlockId))}),a.author.role===ne.User){(a.metadata?.attachments??[]).forEach((e,r)=>{let i=zn({attachment:e,messageId:a.id,refIndex:r});i==null||i.libraryFileId==null||n.has(i.libraryFileId)||(t.set(i.appBlockId,i),n.set(i.libraryFileId,i.appBlockId))});let e=a.metadata?.focused_artifact;if(e!=null){let n=e.type===Zn?t.get(e.artifact_id)??null:null;r=n!=null&&n.messageId===e.source_message_id&&n.refIndex===e.source_ref_index&&(n.libraryFileId==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e.library_file_id}else{let e=a.metadata?.open_in_app_block_view,n=e==null?null:t.get(e.app_block_id)??null;r=e!=null&&n!=null&&n.messageId===e.message_id&&n.refIndex===e.ref_index&&(n.libraryFileId==null||e.library_file_id==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e?.library_file_id??null}}let o=ae(a);if(o?.status!==`created`)continue;let s=n.get(o.libraryFileId),c=s==null?null:t.get(s)??null;if(c==null&&o.origin!=null){let e=o.origin.messageId,n=[...t.values()].filter(t=>t.messageId===e);c=n.length===1?n[0]:null}c==null&&s==null&&r!=null&&r.libraryFileId==null&&(i==null||i===o.libraryFileId)&&(c=r),c!=null&&(c.libraryFileId==null&&c.content!=null&&Jn(a)||(n.set(o.libraryFileId,c.appBlockId),t.set(c.appBlockId,{...c,content:null,currentContentFileId:o.newContentFileId,latestPatchMessageId:a.id,libraryFileId:o.libraryFileId,libraryFileVersionNumber:o.newVersionNumber})))}return t}function zn({attachment:e,messageId:t,refIndex:n}){return e.library_artifact_type!==Zn||e.library_file_id==null?null:{appBlockId:pt({messageId:t,refIndex:n}),content:null,currentContentFileId:e.id??null,entrypoint:`index.html`,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:e.library_file_id,libraryFileName:e.name,libraryFileVersionNumber:null,mimeType:e.mime_type??null,messageId:t,refIndex:n,styleMode:null,title:e.name.replace(/\.html$/i,``)}}function Bn({contentReference:e,messageId:t,refIndex:n}){if(typeof e!=`object`||!e||!(`type`in e)||!(`category`in e)||e.type!==Qn||e.category!==Zn||!(`data`in e))return null;let r=e.data;if(typeof r!=`object`||!r)return null;let i=Vn(r,`content`),a=Vn(r,`entrypoint`)??`index.html`,o=Kn(r,a),s=Un(o,`library_file_id`);return i==null&&s==null?null:{appBlockId:Vn(r,`app_block_id`)??pt({messageId:t,refIndex:n}),bundleVersion:Hn(r,`bundle_version`)??void 0,content:i,currentContentFileId:Un(o,`current_content_file_id`),entrypoint:a,iconSvg:Vn(r,`icon_svg`),language:qn(),latestPatchMessageId:null,libraryFileId:s,libraryFileName:Un(o,`library_file_name`),libraryFileVersionNumber:Gn(Wn(o,`library_file_version_number`)),mimeType:Un(o,`mime_type`),messageId:t,refIndex:n,styleMode:Mt(Vn(r,`style_mode`)),title:Vn(r,`display_name`)??Vn(r,`title`)}}function Vn(e,t){let n=null;return t===`app_block_id`&&`app_block_id`in e&&(n=e.app_block_id),t===`content`&&`content`in e&&(n=e.content),t===`current_content_file_id`&&`current_content_file_id`in e&&(n=e.current_content_file_id),t===`display_name`&&`display_name`in e&&(n=e.display_name),t===`entrypoint`&&`entrypoint`in e&&(n=e.entrypoint),t===`icon_svg`&&`icon_svg`in e&&(n=e.icon_svg),t===`library_file_id`&&`library_file_id`in e&&(n=e.library_file_id),t===`library_file_name`&&`library_file_name`in e&&(n=e.library_file_name),t===`mime_type`&&`mime_type`in e&&(n=e.mime_type),t===`path`&&`path`in e&&(n=e.path),t===`style_mode`&&`style_mode`in e&&(n=e.style_mode),t===`title`&&`title`in e&&(n=e.title),typeof n==`string`&&n.trim()!==``?n:null}function Hn(e,t){if(t===`bundle_version`&&`bundle_version`in e){let t=e.bundle_version;if(typeof t==`number`)return t}if(t===`library_file_version_number`&&`library_file_version_number`in e){let t=e.library_file_version_number;if(typeof t==`number`)return t}return null}function Un(e,t){return typeof e!=`object`||!e?null:Vn(e,t)}function Wn(e,t){return typeof e!=`object`||!e?null:Hn(e,t)}function Gn(...e){for(let t of e)if(t!=null)return t;return null}function Kn(e,t){if(!(`files`in e)||!Array.isArray(e.files))return null;let n=null;for(let r of e.files)if(!(typeof r!=`object`||!r)&&Vn(r,`library_file_id`)!=null&&(n??=r,Vn(r,`path`)===t))return r;return n}function qn(){return`html`}function Jn(e){let t=e.metadata?.shared_conversation_id;return typeof t==`string`&&t.trim()!==``}function Yn(e,t){return e.appBlockId===t.appBlockId&&e.bundleVersion===t.bundleVersion&&e.content===t.content&&e.currentContentFileId===t.currentContentFileId&&e.entrypoint===t.entrypoint&&e.iconSvg===t.iconSvg&&e.language===t.language&&e.latestPatchMessageId===t.latestPatchMessageId&&e.libraryFileId===t.libraryFileId&&e.libraryFileName===t.libraryFileName&&e.libraryFileVersionNumber===t.libraryFileVersionNumber&&e.mimeType===t.mimeType&&e.messageId===t.messageId&&e.refIndex===t.refIndex&&e.styleMode===t.styleMode&&e.title===t.title}function Xn(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e){let e=t.get(n);if(e==null||!Yn(r,e))return!1}return!0}var Zn,Qn,$n,er=e((()=>{T(),F(),re(),K(),a(),mt(),Pt(),Zn=`app_block`,Qn=`client_defined_widget`,$n=ue(e=>s(()=>Rn(M(e).flatMap(e=>e.messages)),{equals:Xn}))}));function tr({appBlockId:e,conversation:t}){return t==null?null:$n(t).get(e)??null}function nr(e){return e?.serverId$()??void 0}function rr({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:ve(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function ir({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return Fe({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:_(e)?`missing`:`failed`})}),()=>{a.abort()}}function ar({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??or({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function or({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var sr=e((()=>{o(),Te(),er()})),cr=t({AppBlock:()=>dr,AppBlockPreviewLoadingState:()=>kr,AppBlockSandboxPreview:()=>Dr});function lr(e){let t=e.search(Wr),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function ur(e){let t=lr(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(Gr))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(Kr)!=null}function dr(e){"use forget";let t=(0,Z.c)(116),{additionalResourceDomains:n,appBlockId:r,authoritativeCode:i,authoritativeSource:a,code:o,collapseWhenSuperseded:s,currentContentFileId:l,displayMode:u,id:d,captureConsoleMessages:f,clientThreadId:p,iconSvg:m,isStreaming:h,isTurnStreaming:g,libraryFileId:_,libraryFileVersionNumber:v,messageId:y,onConsoleMessagesChange:b,onReadyChange:S,progressiveStreaming:ee,ref:te,refIndex:w,styleMode:ne,title:T,variant:E,widgetRefSeenAtMs:D}=e,O=s===void 0||s,k=f!==void 0&&f,A=h!==void 0&&h,re=g!==void 0&&g,j=ee!==void 0&&ee,M=E===void 0?`inline`:E,N=C(),P;t[0]===N?P=t[1]:(P=()=>N!=null&&Le(N),t[0]=N,t[1]=P);let ae=x(P),F;t[2]!==p||t[3]!==N?(F=p==null?N:c(p),t[2]=p,t[3]=N,t[4]=F):F=t[4];let oe=F,se=y!=null&&w!=null?pt({messageId:y,refIndex:w}):void 0,I=r??se??pt({messageId:y??d,refIndex:w??0}),le=x(()=>De({conversation:N??null,instanceId:I,messageId:y,refIndex:w}))??u,ue=x(()=>a!=null||le!=null?null:tr({appBlockId:I,conversation:N??null})),L=a??ue,R;t[5]===N?R=t[6]:(R=()=>nr(N??null),t[5]=N,t[6]=R);let de=x(R),fe=ie(N?.id),z=de??fe,B;t[7]!==l||t[8]!==_||t[9]!==v||t[10]!==z||t[11]!==L?(B=rr({currentContentFileId:l,libraryFileId:_,libraryFileVersionNumber:v,serverThreadId:z,source:L}),t[7]=l,t[8]=_,t[9]=v,t[10]=z,t[11]=L,t[12]=B):B=t[12];let V=B,[H,pe]=(0,Q.useState)(null),[me,he]=(0,Q.useState)(0),ge;t[13]!==me||t[14]!==V.libraryContentKey?(ge=[V.libraryContentKey,me],t[13]=me,t[14]=V.libraryContentKey,t[15]=ge):ge=t[15];let _e=ge.join(`\0`),ve,ye;t[16]!==i||t[17]!==_e||t[18]!==V.contentFileId||t[19]!==V.libraryFileId||t[20]!==le||t[21]!==z?(ve=()=>{if(!(i!=null||le===`collapsed`))return ir({contentFileId:V.contentFileId,libraryContentKey:_e,libraryFileId:V.libraryFileId,onContentStateChange:pe,serverThreadId:z})},ye=[i,V.contentFileId,V.libraryFileId,_e,le,z],t[16]=i,t[17]=_e,t[18]=V.contentFileId,t[19]=V.libraryFileId,t[20]=le,t[21]=z,t[22]=ve,t[23]=ye):(ve=t[22],ye=t[23]),(0,Q.useEffect)(ve,ye);let W=ar({appBlockId:I,contentFileId:V.contentFileId,currentContentFileId:l,libraryContent:H,libraryContentKey:_e,libraryFileId:_,libraryFileVersionNumber:v,source:L}),Se=H?.key===_e?H:null,Ce;t[24]!==W?.libraryFileId||t[25]!==_?(Ce=()=>xe(W?.libraryFileId??_),t[24]=W?.libraryFileId,t[25]=_,t[26]=Ce):Ce=t[26];let we=x(Ce),Te=W?.libraryFileVersionNumber??v,Ee=we!=null&&(Te==null||we.versionNumber>=Te)?we.code:void 0,Oe=Ee??i??W?.content??o??null,ke=W?.iconSvg??m??null,Ae=W?.libraryFileId??_,je=Ae==null&&i==null&&Ee==null&&l==null&&L?.currentContentFileId==null&&L?.latestPatchMessageId==null,Me;t[27]!==je||t[28]!==o||t[29]!==y||t[30]!==Oe||t[31]!==w||t[32]!==L?(Me=je?L==null?y!=null&&w!=null&&o!=null&&Oe===o?{messageId:y,refIndex:w}:null:L.messageId.length>0&&L.content!=null&&Oe===L.content?{messageId:L.messageId,refIndex:L.refIndex}:null:null,t[27]=je,t[28]=o,t[29]=y,t[30]=Oe,t[31]=w,t[32]=L,t[33]=Me):Me=t[33];let Ne=Me,G=M===`artifact`,Pe=W?.styleMode??ne??(G&&j?`open`:void 0),Ie;t[34]!==Ae||t[35]!==Pe?(Ie=Nt({explicitStyleMode:Pe,libraryFileId:Ae}),t[34]=Ae,t[35]=Pe,t[36]=Ie):Ie=t[36];let K=Ie,q=W?.title??T,Re;t[37]===N?Re=t[38]:(Re=()=>N!=null&&ce(N)?`work`:`chat`,t[37]=N,t[38]=Re);let ze=x(Re),Be;t[39]===Symbol.for(`react.memo_cache_sentinel`)?(Be=dt(),t[39]=Be):Be=t[39];let Ve=Be,He=j,Ue=G&&K===`open`,We=le===`collapsed`||le==null&&O&&W?.latestPatchMessageId!=null&&W.latestPatchMessageId!==y,Ge=o!=null||l!=null,Ke;t[40]!==p||t[41]!==o||t[42]!==N?.id||t[43]!==l||t[44]!==I||t[45]!==v||t[46]!==y||t[47]!==Ae||t[48]!==K||t[49]!==q||t[50]!==w||t[51]!==z||t[52]!==L?.messageId?(Ke=async e=>{let t=o;if(t==null&&l!=null)try{t=await Fe({abortSignal:new AbortController().signal,fileId:l,serverThreadId:z})}catch{return}t!=null&&be({appBlockId:I,conversationId:N?.id??p??null,isOriginalVersion:!0,versionNumber:v??void 0},`app-block:${I}:original`,{code:t,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:I,libraryFileId:Ae,messageId:L?.messageId??y,refIndex:w},styleMode:K,title:q})},t[40]=p,t[41]=o,t[42]=N?.id,t[43]=l,t[44]=I,t[45]=v,t[46]=y,t[47]=Ae,t[48]=K,t[49]=q,t[50]=w,t[51]=z,t[52]=L?.messageId,t[53]=Ke):Ke=t[53],N?.id,L?.messageId;let qe=Ke;if(A&&!He){let e;return t[54]===q?e=t[55]:(e=(0,$.jsx)(jn,{title:q}),t[54]=q,t[55]=e),e}let Je=ae&&o!=null;if(Se?.status===`missing`&&!Je)return null;if(We){let e=Ge?qe:void 0,n;return t[56]!==q||t[57]!==e?(n=(0,$.jsx)(Tr,{onView:e,title:q}),t[56]=q,t[57]=e,t[58]=n):n=t[58],n}let Ye=Oe??(He&&A?``:null);if(Ye==null){if(W?.latestPatchMessageId!=null){let e=N?.id??p,n=Se?.status===`failed`,r;t[59]===he?r=t[60]:(r=()=>he(fr),t[59]=he,t[60]=r);let i;return t[61]!==I||t[62]!==G||t[63]!==ke||t[64]!==q||t[65]!==e||t[66]!==n||t[67]!==r?(i=(0,$.jsx)(gr,{appBlockId:I,conversationId:e,hasFailed:n,iconSvg:ke,onRetry:r,showHeader:G,title:q}),t[61]=I,t[62]=G,t[63]=ke,t[64]=q,t[65]=e,t[66]=n,t[67]=r,t[68]=i):i=t[68],i}let e;return t[69]===q?e=t[70]:(e=(0,$.jsx)(jn,{title:q}),t[69]=q,t[70]=e),e}let Xe;t[71]!==p||t[72]!==ze||t[73]!==A||t[74]!==re||t[75]!==y||t[76]!==q||t[77]!==w?(Xe=!A&&!re&&p!=null&&y!=null&&w!=null&&lt()?{reference:{clientThreadId:p,messageId:y,referenceIndex:w},target:{kind:`app_block`,metadata:{...q==null?{}:{title:q},tab:ze}}}:void 0,t[71]=p,t[72]=ze,t[73]=A,t[74]=re,t[75]=y,t[76]=q,t[77]=w,t[78]=Xe):Xe=t[78];let J=Xe,Ze=N?.id??p,Y=L?.messageId??y,Qe;t[79]!==I||t[80]!==Ae||t[81]!==w||t[82]!==Y?(Qe={appBlockId:I,libraryFileId:Ae,messageId:Y,refIndex:w},t[79]=I,t[80]=Ae,t[81]=w,t[82]=Y,t[83]=Qe):Qe=t[83];let $e=Ue&&Ve&&!A,et=N?.id??p,X;t[84]===Ne?X=t[85]:(X=Ne==null?void 0:{contentReferenceIndex:Ne.refIndex,messageId:Ne.messageId,widgetName:U.AppBlock},t[84]=Ne,t[85]=X);let tt;t[86]!==n||t[87]!==k||t[88]!==I||t[89]!==J||t[90]!==d||t[91]!==A||t[92]!==b||t[93]!==S||t[94]!==ke||t[95]!==K||t[96]!==q||t[97]!==te||t[98]!==Ye||t[99]!==oe||t[100]!==He||t[101]!==Ue||t[102]!==$e||t[103]!==et||t[104]!==X||t[105]!==M||t[106]!==D?(tt=(0,$.jsx)(pr,{additionalResourceDomains:n,appBlockId:I,canOpen:$e,captureConsoleMessages:k,clientThreadId:et,code:Ye,feedback:J,iconSvg:ke,id:d,isStreaming:A,onConsoleMessagesChange:b,onReadyChange:S,progressiveStreaming:He,ref:te,showArtifactCard:Ue,shareConversation:oe,shareTarget:X,styleMode:K,title:q,variant:M,widgetRefSeenAtMs:D}),t[86]=n,t[87]=k,t[88]=I,t[89]=J,t[90]=d,t[91]=A,t[92]=b,t[93]=S,t[94]=ke,t[95]=K,t[96]=q,t[97]=te,t[98]=Ye,t[99]=oe,t[100]=He,t[101]=Ue,t[102]=$e,t[103]=et,t[104]=X,t[105]=M,t[106]=D,t[107]=tt):tt=t[107];let nt;return t[108]!==n||t[109]!==K||t[110]!==q||t[111]!==Ye||t[112]!==Ze||t[113]!==Qe||t[114]!==tt?(nt=(0,$.jsx)(yn,{additionalResourceDomains:n,code:Ye,conversationId:Ze,styleMode:K,source:Qe,title:q,children:tt}),t[108]=n,t[109]=K,t[110]=q,t[111]=Ye,t[112]=Ze,t[113]=Qe,t[114]=tt,t[115]=nt):nt=t[115],nt}function fr(e){return e+1}function pr(e){"use forget";let t=(0,Z.c)(66),{additionalResourceDomains:n,appBlockId:r,canOpen:i,captureConsoleMessages:a,clientThreadId:o,code:s,feedback:c,iconSvg:l,id:u,isStreaming:d,onConsoleMessagesChange:f,onReadyChange:p,progressiveStreaming:m,ref:h,shareConversation:g,shareTarget:_,showArtifactCard:v,styleMode:y,title:b,variant:x,widgetRefSeenAtMs:S}=e,{isExpanded:C,isViewingHistoricalVersion:te,openExpandedView:w,setSharedPreview:ne,sharedPreview:T,triggerRef:E}=pn(),D=(0,Q.useContext)(je),O;t[0]===n?O=t[1]:(O=n??[],t[0]=n,t[1]=O);let k;t[2]!==s||t[3]!==u||t[4]!==y||t[5]!==O?(k=[u,y,s,...O],t[2]=s,t[3]=u,t[4]=y,t[5]=O,t[6]=k):k=t[6];let A=k.join(`\0`),[re,j]=(0,Q.useState)(null),M=!d&&re===A,N;t[7]===w?N=t[8]:(N=()=>{_e(),w()},t[7]=w,t[8]=N);let ie=N,P;t[9]!==p||t[10]!==A?(P=(e,t)=>{j(e?A:null),p?.(e,t)},t[9]=p,t[10]=A,t[11]=P):P=t[11];let ae=P,F;t[12]!==n||t[13]!==a||t[14]!==o||t[15]!==s||t[16]!==ae||t[17]!==u||t[18]!==d||t[19]!==f||t[20]!==m||t[21]!==h||t[22]!==y||t[23]!==x||t[24]!==S?(F=(0,$.jsx)(Dr,{additionalResourceDomains:n,code:s,id:u,isStreaming:d,captureConsoleMessages:a,clientThreadId:o,onConsoleMessagesChange:f,onReadyChange:ae,presentationSurface:`inline`,progressiveStreaming:m,ref:h,styleMode:y,variant:x,widgetRefSeenAtMs:S}),t[12]=n,t[13]=a,t[14]=o,t[15]=s,t[16]=ae,t[17]=u,t[18]=d,t[19]=f,t[20]=m,t[21]=h,t[22]=y,t[23]=x,t[24]=S,t[25]=F):F=t[25];let oe;t[26]!==D||t[27]!==F?(oe={element:F,sandboxPolicy:D},t[26]=D,t[27]=F,t[28]=oe):oe=t[28];let I=oe,ce;t[29]===I?ce=t[30]:(ce=()=>I,t[29]=I,t[30]=ce);let le=ee(ce),ue;t[31]!==r||t[32]!==o||t[33]!==le||t[34]!==ne?(ue=e=>{if(e==null)return;let{preview:t,sourceToken:n}=Ee({appBlockId:r,content:le(),conversationId:o??null,inlineContainer:e});return ne(t),()=>{let e=he();Ie(t,n,e?.sharedPreview===t)}},t[31]=r,t[32]=o,t[33]=le,t[34]=ne,t[35]=ue):ue=t[35];let L=ue,R,de;t[36]!==I||t[37]!==T?(de=()=>{T!=null&&Pe(T,I)},R=[I,T],t[36]=I,t[37]=T,t[38]=R,t[39]=de):(R=t[38],de=t[39]),se(de,R);let fe=te?ie:void 0,z;t[40]!==l||t[41]!==fe||t[42]!==b||t[43]!==E?(z=(0,$.jsx)(yr,{iconSvg:l,onOpen:fe,openButtonRef:E,title:b}),t[40]=l,t[41]=fe,t[42]=b,t[43]=E,t[44]=z):z=t[44];let B=C?z:null,V;t[45]===L?V=t[46]:(V=(0,$.jsx)(`div`,{ref:L,className:`w-full`}),t[45]=L,t[46]=V);let H;t[47]!==i||t[48]!==c||t[49]!==ie||t[50]!==l||t[51]!==M||t[52]!==d||t[53]!==g||t[54]!==_||t[55]!==v||t[56]!==V||t[57]!==b||t[58]!==E?(H=(0,$.jsx)(hr,{canOpen:i,expandButtonRef:E,feedback:c,iconSvg:l,isShareReady:M,shareConversation:g,shareTarget:_,isStreaming:d,showArtifactCard:v,title:b,onOpen:ie,children:V}),t[47]=i,t[48]=c,t[49]=ie,t[50]=l,t[51]=M,t[52]=d,t[53]=g,t[54]=_,t[55]=v,t[56]=V,t[57]=b,t[58]=E,t[59]=H):H=t[59];let pe;t[60]!==C||t[61]!==H?(pe=(0,$.jsx)(`div`,{hidden:C,children:H}),t[60]=C,t[61]=H,t[62]=pe):pe=t[62];let U;return t[63]!==B||t[64]!==pe?(U=(0,$.jsxs)($.Fragment,{children:[B,pe]}),t[63]=B,t[64]=pe,t[65]=U):U=t[65],U}function mr(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:o,titleClassName:s}=e,c;t[0]===r?c=t[1]:(c=D(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=c);let l=s??`truncate text-base font-semibold`,u;t[2]===l?u=t[3]:(u=D(`text-token-text-primary`,l),t[2]=l,t[3]=u);let d=o??i,f;t[4]!==u||t[5]!==d?(f=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:u,children:d})}),t[4]=u,t[5]=d,t[6]=f):f=t[6];let p;t[7]!==a||t[8]!==f?(p=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,f]}),t[7]=a,t[8]=f,t[9]=p):p=t[9];let m;return t[10]!==n||t[11]!==c||t[12]!==p?(m=(0,$.jsxs)(`div`,{className:c,children:[p,n]}),t[10]=n,t[11]=c,t[12]=p,t[13]=m):m=t[13],m}function hr(e){"use forget";let t=(0,Z.c)(20),{canOpen:n,children:r,expandButtonRef:i,feedback:a,iconSvg:o,isShareReady:s,isStreaming:c,onOpen:l,shareConversation:u,shareTarget:d,showArtifactCard:f,title:p}=e,m=H(),h;t[0]===m?h=t[1]:(h=m.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=m,t[1]=h);let g=h,_;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==g||t[6]!==o||t[7]!==s||t[8]!==c||t[9]!==l||t[10]!==u||t[11]!==d||t[12]!==f||t[13]!==p?(_=f?(0,$.jsxs)(`div`,{className:D(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,c&&`cursor-wait`),"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)(mr,{action:(0,$.jsx)(qr,{canOpen:n,conversation:u,expandButtonRef:i,isReady:s,onOpen:l,target:d}),className:`min-h-13 px-4 py-2`,fallbackTitle:g,leading:c?(0,$.jsx)(j,{className:`icon-md text-token-text-primary shrink-0`}):(0,$.jsx)(xr,{iconSvg:o}),title:p}),(0,$.jsx)(`div`,{children:r})]}):r,t[2]=n,t[3]=r,t[4]=i,t[5]=g,t[6]=o,t[7]=s,t[8]=c,t[9]=l,t[10]=u,t[11]=d,t[12]=f,t[13]=p,t[14]=_):_=t[14];let v;t[15]===a?v=t[16]:(v=a==null?null:(0,$.jsx)(_r,{...a}),t[15]=a,t[16]=v);let y;return t[17]!==_||t[18]!==v?(y=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[_,v]}),t[17]=_,t[18]=v,t[19]=y):y=t[19],y}function gr(e){"use forget";let t=(0,Z.c)(17),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:o,showHeader:s,title:c}=e,l=x(he),u=H(),d;t[0]===u?d=t[1]:(d=u.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=u,t[1]=d);let f=d;if(ye(l,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==c?(e=(0,$.jsx)(yr,{iconSvg:a,title:c}),t[2]=a,t[3]=c,t[4]=e):e=t[4],e}let p;t[5]!==f||t[6]!==a||t[7]!==s||t[8]!==c?(p=s?(0,$.jsx)(mr,{className:`mb-2`,fallbackTitle:f,leading:(0,$.jsx)(xr,{iconSvg:a}),title:c}):null,t[5]=f,t[6]=a,t[7]=s,t[8]=c,t[9]=p):p=t[9];let m;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(m={minHeight:jr},t[10]=m):m=t[10];let h;t[11]!==i||t[12]!==o?(h=(0,$.jsx)(`div`,{className:`relative w-full`,style:m,children:i?(0,$.jsx)(Ar,{onRetry:o}):(0,$.jsx)(kr,{})}),t[11]=i,t[12]=o,t[13]=h):h=t[13];let g;return t[14]!==p||t[15]!==h?(g=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[p,h]}),t[14]=p,t[15]=h,t[16]=g):g=t[16],g}function _r(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(x(vr))return null;let o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(nt,{}),t[0]=o):o=t[0];let s;return t[1]!==i||t[2]!==n||t[3]!==r?(s=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)($e,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:o})}),t[1]=i,t[2]=n,t[3]=r,t[4]=s):s=t[4],s}function vr(){return Y()}function yr(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=H(),s,c,l,u,f;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),f=`not-prose relative clear-both my-4 w-full max-w-full`,u=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=mr,l=r==null?void 0:(0,$.jsx)(d,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(B,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=l,t[7]=u,t[8]=f):(s=t[4],c=t[5],l=t[6],u=t[7],f=t[8]);let p;t[9]===n?p=t[10]:(p=(0,$.jsx)(br,{iconSvg:n}),t[9]=n,t[10]=p);let m;t[11]!==s||t[12]!==c||t[13]!==l||t[14]!==p||t[15]!==a?(m=(0,$.jsx)(s,{action:l,className:`w-full`,fallbackTitle:c,leading:p,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=l,t[14]=p,t[15]=a,t[16]=m):m=t[16];let h;t[17]!==u||t[18]!==m?(h=(0,$.jsx)(`div`,{className:u,children:m}),t[17]=u,t[18]=m,t[19]=h):h=t[19];let g;return t[20]!==f||t[21]!==h?(g=(0,$.jsx)(`div`,{className:f,children:h}),t[20]=f,t[21]=h,t[22]=g):g=t[22],g}function br(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(xr,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function xr(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=Sr(r),t[0]=r,t[1]=a);let o=a,s;return t[2]!==i||t[3]!==o?(s=o==null?(0,$.jsx)(Re,{"aria-hidden":`true`,className:D(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:D(`icon-md shrink-0`,i),children:(0,$.jsx)(W,{svgString:o,className:`h-full w-full`})}),t[2]=i,t[3]=o,t[4]=s):s=t[4],s}function Sr(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>zr||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Br)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Hr.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!Cr(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function Cr(e){let t=e.replace(Vr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Vr)){let e=t[1],n=t[2];if(!Ur.has(e)||!wr(e,n))return!1}return!0}function wr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function Tr(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=H(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(B,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(B,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(B,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function Er(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:i}=e,a=H(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let s=o,c;t[2]===r?c=t[3]:(c=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=c);let l;t[4]!==s||t[5]!==i||t[6]!==c?(l=(0,$.jsx)(d,{ref:i,type:`button`,icon:Be,color:`ghost`,size:`medium`,label:s,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:c}),t[4]=s,t[5]=i,t[6]=c,t[7]=l):l=t[7];let u;return t[8]!==n||t[9]!==s||t[10]!==l?(u=(0,$.jsx)(v,{label:s,className:n,children:l}),t[8]=n,t[9]=s,t[10]=l,t[11]=u):u=t[11],u}function Dr(e){"use forget";let t=(0,Z.c)(141),{additionalResourceDomains:n,clientThreadId:r,code:i,id:a,captureConsoleMessages:o,isStreaming:s,onConsoleMessagesChange:c,onReadyChange:l,presentationSurface:u,progressiveStreaming:d,ref:p,styleMode:m,surface:h,variant:g,widgetRefSeenAtMs:_}=e,v=s!==void 0&&s,y=d!==void 0&&d,b=m===void 0?`default`:m,S=h===void 0?`inline`:h,C=g===void 0?`inline`:g,te=H(),w=(0,Q.useRef)(null),ne=(0,Q.useRef)(!1),T=(0,Q.useRef)(!1),E=(0,Q.useRef)(null),O=(0,Q.useRef)(null),k=(0,Q.useRef)(null),re=(0,Q.useRef)(null),j=(0,Q.useRef)(null),M=(0,Q.useRef)(null),N=(0,Q.useRef)(0),ie=(0,Q.useRef)(null),P=(0,Q.useRef)(null),ae;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(ae=[],t[0]=ae):ae=t[0];let F=(0,Q.useRef)(ae),oe=le(),se=x(A),{allowDependencyNetworkRequestsWithoutCanvasAccess:I}=(0,Q.useContext)(je),ce=qe()||I,ue=Ye(r)&&!I,L=oe?`dark`:`light`,R=te.locale,de;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(de={status:`streaming`},t[1]=de):de=t[1];let[fe,z]=(0,Q.useState)(de),V=fe.status===`finalized`&&fe.html!==i,pe=y&&C===`artifact`&&!v,U=y&&S===`inline`&&fe.status!==`static`&&!pe&&!V,me=U&&v&&C===`artifact`&&!ur(i),he=me?0:Mr,ge=ce?`execution-enabled`:`execution-disabled`,_e=ue?`network-enabled`:`network-disabled`,ve=U?`progressive-app-block-stream`:i,ye;t[2]===n?ye=t[3]:(ye=n??[],t[2]=n,t[3]=ye);let W;t[4]!==se||t[5]!==R||t[6]!==b||t[7]!==S||t[8]!==ve||t[9]!==ye||t[10]!==ge||t[11]!==_e||t[12]!==L?(W=[L,se,S,b,R,ge,_e,ve,...ye],t[4]=se,t[5]=R,t[6]=b,t[7]=S,t[8]=ve,t[9]=ye,t[10]=ge,t[11]=_e,t[12]=L,t[13]=W):W=t[13];let be=W.join(`\0`),xe;t[14]===n?xe=t[15]:(xe=tn(n),t[14]=n,t[15]=xe);let Se=xe,Ce=ue?`deps_only`:`disabled`,we=S===`inline`?C:void 0,Te=U?`progressive`:`static`,Ee;t[16]!==S||t[17]!==Ce||t[18]!==we||t[19]!==Te?(Ee={networkPolicy:Ce,surface:S,variant:we,renderMode:Te},t[16]=S,t[17]=Ce,t[18]=we,t[19]=Te,t[20]=Ee):Ee=t[20];let De=Ee,[Oe,ke]=(0,Q.useState)(0),[Ae,Me]=(0,Q.useState)(null),Ne=Ae?.signature===be?Ae.status:null,G=Ne===`ready`,Pe=G||Ne===`failed_after_ready`,Fe=Ne===`failed`,Ie=u??S,K=U&&Ie===`inline`&&v&&!Fe,q;t[21]!==i||t[22]!==De||t[23]!==_?(q={content:i,metricTags:De,widgetRefSeenAtMs:_},t[21]=i,t[22]=De,t[23]=_,t[24]=q):q=t[24];let{cancelFirstPaintFrame:Le,startRunMetrics:Re}=xt(q),ze,Be;t[25]!==G||t[26]!==l?(ze=()=>{l?.(G)},Be=[G,l],t[25]=G,t[26]=l,t[27]=ze,t[28]=Be):(ze=t[27],Be=t[28]),(0,Q.useEffect)(ze,Be);let Ve,He;t[29]!==G||t[30]!==u?(Ve=()=>{!G||u==null||w.current?.updateAppBlockSurface?.(u)},He=[G,u],t[29]=G,t[30]=u,t[31]=Ve,t[32]=He):(Ve=t[31],He=t[32]),(0,Q.useEffect)(Ve,He);let Ue,We;t[33]===Symbol.for(`react.memo_cache_sentinel`)?(Ue=()=>({clearCapturedConsoleMessages:()=>{F.current=[]},captureScreenshotDataUrl:async()=>(await w.current?.screenshot())?.imageBase64??null,focus:()=>{w.current?.focus()}}),We=[],t[33]=Ue,t[34]=We):(Ue=t[33],We=t[34]),(0,Q.useImperativeHandle)(p,Ue,We);let Je;t[35]===Symbol.for(`react.memo_cache_sentinel`)?(Je=()=>{ie.current!=null&&(window.clearTimeout(ie.current),ie.current=null)},t[35]=Je):Je=t[35];let J=ee(Je),Ze;t[36]===Symbol.for(`react.memo_cache_sentinel`)?(Ze=()=>{P.current!=null&&(window.clearTimeout(P.current),P.current=null)},t[36]=Ze):Ze=t[36];let Y=ee(Ze),Qe;t[37]!==G||t[38]!==l||t[39]!==be||t[40]!==U?(Qe=()=>{if(!U||!G)return;let e=re.current,t=w.current;if(e==null||t?.updateAppBlockStream==null||T.current)return;let n=N.current;re.current=null,O.current=gt(),k.current=e.html,e.isFinal&&(T.current=!0);let r=()=>N.current===n?t.updateAppBlockStream?.(e)??Promise.resolve():Promise.resolve(),i=M.current,a=i==null?r():i.then(r);M.current=a,a.then(()=>{M.current===a&&(M.current=null),N.current===n&&(ur(e.html)&&j.current?.markFirstPaint(),e.isFinal&&(j.current?.reportPayloadSize(e.html),z({status:`finalized`,html:e.html})))},e=>{M.current===a&&(M.current=null),N.current===n&&(e instanceof DOMException&&e.name===`AbortError`||(j.current?.reportFailure(`stream_update`,vt(e)),Me({signature:be,status:`failed`}),l?.(!1,`failure`)))})},t[37]=G,t[38]=l,t[39]=be,t[40]=U,t[41]=Qe):Qe=t[41];let $e=ee(Qe),et;t[42]!==se||t[43]!==o||t[44]!==J||t[45]!==Y||t[46]!==i||t[47]!==ce||t[48]!==ue||t[49]!==V||t[50]!==v||t[51]!==R||t[52]!==c||t[53]!==l||t[54]!==u||t[55]!==be||t[56]!==fe.status||t[57]!==pe||t[58]!==U||t[59]!==Re||t[60]!==b||t[61]!==S||t[62]!==L?(et=()=>{if(!ce)return;(V||pe&&fe.status!==`static`)&&z({status:`static`});let e=U&&w.current?.updateAppBlockStream!=null;if(U&&!e){v||z({status:`static`});return}ne.current=!0,T.current=!1,E.current=null,O.current=null,k.current=null,re.current=null,j.current=null,M.current=null,Y(),N.current+=1;let t=N.current;J(),Me(null);let{expectReadySignal:n,html:r}=nn(i,L,R,se,S,{loadTailwind:ue,progressiveStreaming:e,syncPresentationSurface:u!=null,styleMode:b}),a=!1,s=!1,d=!1,p=!1,m=!1,h=()=>N.current===t,g=Re(h,{deferFirstPaint:e,deferPayloadSize:e});e&&(j.current=g);let _=e=>{!o||c==null||!h()||(F.current=e,!p&&(p=!0,f.postTask(()=>{p=!1,h()&&c(F.current)},{priority:`background`})))},y=e=>{!h()||a||d||(a=!0,J(),g.markReady(e),!m&&(m=!0,f.postTask(()=>{m=!1,!(!h()||d)&&(s=!0,Me({signature:be,status:`ready`}))},{priority:`background`})))},x=(e,t)=>{!h()||d||(d=!0,J(),Me({signature:be,status:s?`failed_after_ready`:`failed`}),g.reportFailure(e,t),f.postTask(()=>{h()&&l?.(!1,`failure`)},{priority:`background`}))};F.current=[],_([]),ie.current=window.setTimeout(()=>{x(`sandbox_eval`,`ready_timeout`)},Pr),(async()=>{let e=w.current?.evalAsync({code:r,expectReadySignal:n,language:`html`});if(e==null){x(`sandbox_eval`,`missing_generator`);return}for(;;){let t=await e.next();if(t.done){h()&&!a&&x(`sandbox_eval`,`generator_completed_without_ready`);break}h()&&(_([...F.current,t.value]),t.value.type===Ge.ENVIRONMENT_STATUS&&t.value.status===Ke.RUNNING_CODE&&y(`running_code`),t.value.type===Ge.RUN_COMPLETE&&(t.value.wasFatalError?x(`runtime`,`fatal_runtime_error`):(y(`run_complete`),g.reportSuccess(`run_complete`))),await f.yield())}})().catch(e=>{h()&&(e instanceof DOMException&&e.name===`AbortError`||x(`sandbox_eval`,vt(e)))})},t[42]=se,t[43]=o,t[44]=J,t[45]=Y,t[46]=i,t[47]=ce,t[48]=ue,t[49]=V,t[50]=v,t[51]=R,t[52]=c,t[53]=l,t[54]=u,t[55]=be,t[56]=fe.status,t[57]=pe,t[58]=U,t[59]=Re,t[60]=b,t[61]=S,t[62]=L,t[63]=et):et=t[63];let X=ee(et),tt;t[64]!==J||t[65]!==Y?(tt=()=>{N.current+=1,ne.current=!1,T.current=!1,E.current=null,k.current=null,re.current=null,j.current=null,M.current=null,J(),Y(),Me(null),ke(Or)},t[64]=J,t[65]=Y,t[66]=tt):tt=t[66];let nt=ee(tt),rt;t[67]===Ie?rt=t[68]:(rt=Ie===`inline`?{margin:-4,width:`calc(100% + ${Nr*2}px)`}:void 0,t[67]=Ie,t[68]=rt);let it=rt,at;t[69]!==Le||t[70]!==J||t[71]!==Y||t[72]!==X?(at=()=>{X();let e=w.current;return()=>{N.current+=1,j.current=null,M.current=null,J(),Y(),Le(),e?.stop()}},t[69]=Le,t[70]=J,t[71]=Y,t[72]=X,t[73]=at):at=t[73];let ot;t[74]!==Le||t[75]!==J||t[76]!==Y||t[77]!==ce||t[78]!==be||t[79]!==X||t[80]!==Oe?(ot=[Le,J,Y,ce,be,X,Oe],t[74]=Le,t[75]=J,t[76]=Y,t[77]=ce,t[78]=be,t[79]=X,t[80]=Oe,t[81]=ot):ot=t[81],(0,Q.useEffect)(at,ot);let st,ct;t[82]!==v||t[83]!==X||t[84]!==U?(st=()=>{!U||v||ne.current||w.current?.updateAppBlockStream!=null||X()},ct=[v,X,U],t[82]=v,t[83]=X,t[84]=U,t[85]=st,t[86]=ct):(st=t[85],ct=t[86]),(0,Q.useEffect)(st,ct);let lt,ut;if(t[87]!==Y||t[88]!==i||t[89]!==$e||t[90]!==Fe||t[91]!==G||t[92]!==v||t[93]!==U||t[94]!==C?(lt=()=>{if(!U||!G||Fe||T.current||w.current?.updateAppBlockStream==null)return;let e=v?lr(i):i;if(v&&(re.current?.html??k.current)===e)return;if(re.current={html:e,isFinal:!v},!v){Y(),$e();return}let t=O.current;if(t==null&&C===`artifact`&&(E.current??=gt(),t=E.current),t==null){$e();return}let n=C===`artifact`?Ir:Fr,r=gt()-t;if(r>=n){$e();return}return P.current=window.setTimeout(()=>{P.current=null,$e()},n-r),Y},ut=[Y,i,$e,Fe,G,v,U,C],t[87]=Y,t[88]=i,t[89]=$e,t[90]=Fe,t[91]=G,t[92]=v,t[93]=U,t[94]=C,t[95]=lt,t[96]=ut):(lt=t[95],ut=t[96]),(0,Q.useEffect)(lt,ut),!ce){let e;return t[97]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(En,{}),t[97]=e):e=t[97],e}let dt=Ie===`inline`&&(me?`h-0 min-h-0 overflow-hidden`:`min-h-[120px] overflow-visible`),ft=Ie===`stage`&&`h-full min-h-0`,pt;t[98]!==dt||t[99]!==ft?(pt=D(`flex w-full`,dt,ft),t[98]=dt,t[99]=ft,t[100]=pt):pt=t[100];let mt=Ie===`inline`?`flex-none`:`w-full`,ht=K&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,_t;t[101]!==mt||t[102]!==ht?(_t=D(`relative min-w-0`,mt,ht),t[101]=mt,t[102]=ht,t[103]=_t):_t=t[103];let yt=`${Oe}:${ue?`network-enabled`:`network-disabled`}`,bt;t[104]===te?bt=t[105]:(bt=te.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[104]=te,t[105]=bt);let St=ue?`deps-only`:`none`,Ct=ue?Lr:Rr,wt=Pe?0:-1,Tt=Ie===`inline`&&b===`open`,Et=Ie!==`stage`,Dt=U?he:jr,Ot;t[106]!==a||t[107]!==X||t[108]!==Se||t[109]!==yt||t[110]!==bt||t[111]!==St||t[112]!==Ct||t[113]!==wt||t[114]!==Tt||t[115]!==Et||t[116]!==Dt?(Ot=(0,$.jsx)(Xe,{id:a,title:bt,visuallyHidden:!1,networkPolicy:St,additionalResourceDomains:Se,sandboxPermissions:Ct,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:wt,onRetryCodeRun:X,transparentBackground:Tt,useIntrinsicHeight:Et,intrinsicHeightFallback:Dt,ref:w},yt),t[106]=a,t[107]=X,t[108]=Se,t[109]=yt,t[110]=bt,t[111]=St,t[112]=Ct,t[113]=wt,t[114]=Tt,t[115]=Et,t[116]=Dt,t[117]=Ot):Ot=t[117];let kt;t[118]===K?kt=t[119]:(kt=K?(0,$.jsx)(`div`,{"aria-hidden":`true`,className:`absolute inset-0 z-10 cursor-wait`}):null,t[118]=K,t[119]=kt);let At;t[120]!==Fe||t[121]!==Pe||t[122]!==U?(At=!Pe&&!Fe&&!U?(0,$.jsx)(kr,{}):null,t[120]=Fe,t[121]=Pe,t[122]=U,t[123]=At):At=t[123];let jt;t[124]!==Fe||t[125]!==nt?(jt=Fe?(0,$.jsx)(Ar,{onRetry:nt}):null,t[124]=Fe,t[125]=nt,t[126]=jt):jt=t[126];let Mt;t[127]!==it||t[128]!==K||t[129]!==_t||t[130]!==Ot||t[131]!==kt||t[132]!==At||t[133]!==jt?(Mt=(0,$.jsxs)(`div`,{"aria-busy":K,className:_t,style:it,children:[Ot,kt,At,jt]}),t[127]=it,t[128]=K,t[129]=_t,t[130]=Ot,t[131]=kt,t[132]=At,t[133]=jt,t[134]=Mt):Mt=t[134];let Nt;t[135]===K?Nt=t[136]:(Nt=K?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:(0,$.jsx)(B,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[135]=K,t[136]=Nt);let Pt;return t[137]!==pt||t[138]!==Mt||t[139]!==Nt?(Pt=(0,$.jsxs)(`div`,{className:pt,children:[Mt,Nt]}),t[137]=pt,t[138]=Mt,t[139]=Nt,t[140]=Pt):Pt=t[140],Pt}function Or(e){return e+1}function kr(){"use forget";let e=(0,Z.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsx)(j,{className:`icon-sm text-token-text-tertiary`}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,role:`status`,children:[t,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:(0,$.jsx)(B,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})})]}),e[1]=n):n=e[1],n}function Ar(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(B,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(B,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(d,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr=e((()=>{Z=z(),m(),Ze(),q(),tt(),i(),g(),J(),r(),Ue(),He(),ze(),we(),Je(),F(),Ne(),rt(),Me(),S(),u(),k(),ge(),P(),I(),N(),E(),Qe(),Te(),We(),te(),Q=n(L()),fe(),fn(),jt(),ft(),Tn(),me(),kn(),gn(),Ln(),mt(),Ae(),ke(),Pt(),sr(),$=R(),jr=432,Mr=120,Nr=4,Pr=15e3,Fr=100,Ir=350,Lr=`allow-scripts allow-same-origin allow-forms`,Rr=`allow-scripts allow-same-origin`,zr=12e3,Br=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Vr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Hr=new Set([`svg`,`path`]),Ur=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),Wr=/<script(?:\s|>)/i,Gr=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,Kr=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`,qr=e=>{"use forget";let t=(0,Z.c)(13),{canOpen:n,conversation:r,expandButtonRef:i,isReady:a,onOpen:o,target:s}=e,c;t[0]!==n||t[1]!==i||t[2]!==o?(c=n&&o!=null?(0,$.jsx)(Er,{ref:i,className:`shrink-0`,onClick:o}):null,t[0]=n,t[1]=i,t[2]=o,t[3]=c):c=t[3];let l=c;if(r==null)return l;let u;t[4]===s?u=t[5]:(u=s??{contentReferenceIndex:-1,messageId:``},t[4]=s,t[5]=u);let f=u,p=a&&s!=null,m;t[6]===l?m=t[7]:(m=e=>{let{isVisible:t,label:n,onSelect:r}=e;return t?(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-1`,children:[(0,$.jsx)(v,{label:n,children:(0,$.jsx)(d,{type:`button`,icon:Ve,color:`ghost`,size:`medium`,label:n,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:e=>{e.stopPropagation(),r()}})}),l]}):l},t[6]=l,t[7]=m);let h;return t[8]!==f||t[9]!==r||t[10]!==p||t[11]!==m?(h=(0,$.jsx)(it,{category:U.AppBlock,conversation:r,isReady:p,target:f,children:m}),t[8]=f,t[9]=r,t[10]=p,t[11]=m,t[12]=h):h=t[12],h}}));export{ut as S,jt as _,Jr as a,ft as b,$n as c,xn as d,Tn as f,gt as g,Nt as h,cr as i,er as l,Mt as m,kr as n,tr as o,Pt as p,Dr as r,sr as s,dr as t,bn as u,pt as v,dt as x,mt as y};
//# sourceMappingURL=e3b746a6-oabqf8p6xcnuc5b1.js.map