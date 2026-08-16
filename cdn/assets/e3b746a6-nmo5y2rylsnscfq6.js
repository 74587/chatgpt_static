const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-bkzx0nkwyr0v5uwk.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-chn19eetsd85eqir.js","assets/2340486e-hhm9uf1icbk586c4.js","assets/conversation-small-bhwp0d01lstxr5nj.js","assets/30901919-n6o4688w4ppdsmy2.js","assets/c470f5ab-pa0xttfj76vhpiru.js","assets/0e5afe53-o0hxoxsk4mwbtm3l.js","assets/conversation-small-d80cpi59.css","assets/8b34dbc2-jwcgpp51ud92a0q8.js","assets/82782bc9-lotro3ctaiik6o19.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{$V as r,Bm as i,CU as a,Es as o,H2 as s,HN as c,HP as l,IB as u,L2 as d,LO as f,MO as p,NO as m,Os as h,PO as g,QV as _,RB as v,RX as y,U2 as b,UN as x,UP as S,UX as C,Vm as w,XZ as T,Y2 as ee,Z2 as E,ZZ as D,aC as te,ay as O,b1 as k,f4 as A,fQ as j,hC as M,iy as ne,l4 as re,mU as N,p4 as ie,pC as ae,pQ as oe,ua as P,va as se,w1 as F,xK as ce}from"./4813494d-chn19eetsd85eqir.js";import{Cn as I,Qt as le,Sn as ue,_n as de,bn as L,mn as R,vn as z,xn as fe,yn as pe}from"./2340486e-hhm9uf1icbk586c4.js";import{A_t as me,C8 as he,Gvt as ge,M_t as B,Qrn as _e,S8 as ve,Uvt as ye,Wvt as be,YT as V,Zrn as xe,_8 as Se,aE as Ce,g8 as we,h8 as Te,lGt as H,nE as Ee,nu as De,ru as Oe,uGt as U,v8 as ke,y8 as Ae}from"./conversation-small-bhwp0d01lstxr5nj.js";import{HC as W,Ix as G,Lx as je,VC as Me}from"./30901919-n6o4688w4ppdsmy2.js";import{i as K,n as Ne,t as Pe}from"./8d846022-habmttvqwy4a5siq.js";import{a as Fe,i as Ie,o as Le}from"./91969468-m0hhpdt0a43w723v.js";import{n as Re,t as q}from"./4d271a7b-k93o3kwsu0wuudob.js";import{n as ze,t as Be}from"./de6a4d0c-ea5lh35j60hi83k0.js";import{n as J,t as Ve}from"./066a83b9-cqzkfhwcg2i1ojmu.js";import{n as Y,r as He}from"./58bafdef-m3vcbqu7mgweci8n.js";import{a as Ue,i as We}from"./e01e2324-fwc411dnk9awcyc8.js";import{i as Ge,n as Ke,r as qe,t as Je}from"./cc79834b-nh7q1t1avgbc01tq.js";import{i as Ye,t as Xe}from"./5dc32f04-n0e2k361ooe0er24.js";function Ze(){return d(`2779568043`)}function Qe(){return d(`3864712762`)}function $e(){return s(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var et=e((()=>{b()}));function tt({messageId:e,refIndex:t}){return`appblock:${e}:${t}`}var nt=e((()=>{}));function rt({errorSource:e,errorType:t,networkPolicy:n,outcome:r,readySignal:i,surface:a}){let o={network_policy:n,surface:a};return e!=null&&(o.error_source=e),t!=null&&(o.error_type=t),r!=null&&(o.outcome=r),i!=null&&(o.ready_signal=i),o}function it(){return typeof performance<`u`?performance.now():Date.now()}function at(e){return new TextEncoder().encode(e).byteLength/1024}function ot(e){return e instanceof Error?e.name:`unknown`}function st(e,t,n=1){ie.count(re.APP_BLOCKS,e,rt(t),n)}function ct(e,t,n){ie.hist(re.APP_BLOCKS,e,rt(n),t)}function lt({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,ut.useRef)(it()),i=(0,ut.useRef)(null),a=(0,ut.useRef)(!1),o=(0,ut.useRef)(!1),s=m(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=m((n=e)=>{o.current||(o.current=!0,ct(pt,at(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:m((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=it(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),st(gt,t);let _=(e,n)=>{f||(f=!0,st(ht,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=it();ct(mt,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,ct(dt,s-r.current,t),n!=null&&ct(vt,s-n,t))},y=(e,t)=>{if(s(),typeof window>`u`){v(e,t);return}i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,t)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=it(),g=n,ct(_t,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{e()&&(p=!0,s(),st(ft,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var ut,dt,ft,pt,mt,ht,gt,_t,vt,yt=e((()=>{A(),p(),ut=n(fe()),dt=`app_block.first_render_time_ms`,ft=`app_block.load.failure`,pt=`app_block.payload_size_kb`,mt=`app_block.ready_to_first_paint_ms`,ht=`app_block.render.outcome`,gt=`app_block.render.start`,_t=`app_block.sandbox_eval_to_ready_ms`,vt=`app_block.widget_ref_to_first_paint_ms`}));function bt(e){return e==="default"||e===`open`?e:null}function xt({explicitStyleMode:e,libraryFileId:t}){return e??(t==null?`default`:`open`)}var St=e((()=>{})),Ct,wt=e((()=>{Ct=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main{padding-block-start:12px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),Tt=e((()=>{})),Et,Dt=e((()=>{Tt(),Et=`/cdn/assets/app-block-sandbox-foundation-c11hc9c6.css`})),Ot,kt=e((()=>{Ot=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main{padding-block-start:12px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){--app-block-slider-track:color-mix(in srgb, var(--viz-text) 16%, transparent);--app-block-slider-thumb-shadow:color-mix(in srgb, var(--viz-text) 18%, transparent);appearance:none;background:linear-gradient(var(--app-block-slider-track), var(--app-block-slider-track)) center / 100% 4px no-repeat;cursor:pointer;border:0;border-radius:9999px;width:100%;height:28px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.5}:where(input[type=range])::-webkit-slider-runnable-track{background:0 0;border:0;height:28px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;margin-top:5px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-webkit-slider-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-webkit-slider-thumb{transform:scale(1.06)}:where(input[type=range])::-moz-range-track{background:var(--app-block-slider-track);border:0;border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-progress{background:var(--viz-accent);border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-thumb{border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-moz-range-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-moz-range-thumb{transform:scale(1.06)}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),At=e((()=>{})),jt,Mt=e((()=>{At(),jt=`/cdn/assets/app-block-sandbox-grv3t07f.css`}));function Nt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Pt=e((()=>{}));function Ft(e){return/<!doctype\b|<html[\s>]/i.test(e)}function It(e){let t=e.trim().replaceAll(`_`,`-`);return t.length===0||!/^[A-Za-z0-9-]+$/.test(t)?`en`:t}function Lt(e){if(/^https?:\/\//i.test(e)||typeof window>`u`)return e;let t=window.location.origin;return new URL(e,t).toString()}function Rt(e){try{return new URL(e).origin}catch{return null}}function zt(e){return qt.has(e)?e:`default`}function Bt(e,t){return t===`skybridge`||t===`stage`?e===`dark`?`#212121`:`#ffffff`:e===`dark`?`#000000`:`#fcfcfc`}function Vt(e=[]){let t=Lt(jt),n=Lt(Et),r=[Rt(Wt),Rt(Gt),Rt(t),Rt(n),...Kt,...e.map(Rt)];return Array.from(new Set(r.filter(e=>e!=null)))}function Ht(e,t=`light`,n=`en`,r=`default`,i=`inline`,{loadTailwind:a=!0,platform:o,progressiveStreaming:s=!1,styleMode:c=`default`}={}){let l=e.trim();if(!s&&Ft(l))return{html:l,expectReadySignal:!1};let u=It(n),d=c===`open`?Ct:Ot,f=Lt(c===`open`?Et:jt),p=zt(r),m=Bt(t,i),h=i===`skybridge`&&o!=null&&o!==`web`||i===`inline`&&c===`open`,g=[`color-scheme: ${t};`,h?`background-color: transparent;`:`background-color: var(--main-surface-primary, ${m});`].join(` `);return{expectReadySignal:a,html:`<!doctype html>
<html ${[`lang="${u}"`,`class="${t}"`,`data-chat-theme="${p}"`,`data-app-block-surface="${i}"`,`data-app-block-style-mode="${c}"`,o==null?null:`data-app-block-platform="${o}"`,`style="${g}"`].filter(e=>e!=null).join(` `)}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="${t}" />
    ${a?`<script>
      window.tailwind = window.tailwind || {};
      window.tailwind.config = { darkMode: "class" };
    <\/script>
    <script id="app-block-tailwind" src="${Wt}" defer><\/script>
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
    ${a?`<link rel="stylesheet" href="${f}" />`:`<style>${d}</style>`}
    ${s?Jt:``}
  </head>
  <body>
    <main>
${s?``:l}
    </main>
    ${s?Yt:``}
  </body>
</html>`}}var Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt=e((()=>{wt(),Dt(),kt(),Mt(),Pt(),Wt=`https://cdn.tailwindcss.com`,Gt=`https://images.openai.com`,Kt=[`https://cdnjs.cloudflare.com`,`https://esm.sh`,`https://cdn.jsdelivr.net`,`https://unpkg.com`,`https://fonts.googleapis.com`,`https://fonts.gstatic.com`,`https://fonts.bunny.net`],qt=new Set([`default`,`blue`,`green`,`yellow`,`purple`,`pink`,`orange`,`black`]),Jt=`<style>
  @media (prefers-reduced-motion: no-preference) {
    [data-app-block-stream-enter] {
      animation: app-block-stream-enter 160ms ease-out both;
    }

    @keyframes app-block-stream-enter {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  }
</style>`,Yt=String.raw(Ut||=Nt([`<script>
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
<\/script>`]))}));function Zt(){"use forget";let e=(0,Qt.useContext)($t);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var Qt,$t,en=e((()=>{Qt=n(fe()),$t=(0,Qt.createContext)(null)})),tn,nn=e((()=>{r(),I(),tn=_(()=>ue(()=>import(`./7aa2b76f-bkzx0nkwyr0v5uwk.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}));function rn(e){"use forget";let t=(0,cn.c)(38),{additionalResourceDomains:n,children:r,code:i,conversationId:a,source:o,styleMode:s,title:c}=e,l=`app-block:${o.appBlockId}:${(0,ln.useId)()}`,u=(0,ln.useRef)(null),d=o.appBlockId,f=o.libraryFileId,p=o.messageId,m=o.refIndex,h=a??null,g;t[0]!==h||t[1]!==d?(g={appBlockId:d,conversationId:h},t[0]=h,t[1]=d,t[2]=g):g=t[2];let _=g,v=D(Te),y;t[3]!==v||t[4]!==_?(y=Ae(v,_),t[3]=v,t[4]=_,t[5]=y):y=t[5];let b=y,x=v?.appBlockId===d&&v.conversationId===h&&(v.isOriginalVersion===!0||v.versionNumber!=null),S=b||x,C;t[6]!==v||t[7]!==l||t[8]!==_?(C=ve(v,_,l),t[6]=v,t[7]=l,t[8]=_,t[9]=C):C=t[9];let w=C,T;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(T=()=>{u.current?.focus()},t[10]=T):T=t[10];let ee=T,E;t[11]!==d||t[12]!==f||t[13]!==p||t[14]!==m?(E={appBlockId:d,libraryFileId:f,messageId:p,refIndex:m},t[11]=d,t[12]=f,t[13]=p,t[14]=m,t[15]=E):E=t[15];let te;t[16]!==n||t[17]!==i||t[18]!==s||t[19]!==E||t[20]!==c?(te={additionalResourceDomains:n,code:i,focusOnClose:ee,source:E,styleMode:s,title:c},t[16]=n,t[17]=i,t[18]=s,t[19]=E,t[20]=c,t[21]=te):te=t[21];let O=te,k,A;t[22]!==O||t[23]!==b||t[24]!==_?(k=()=>{b&&he(_,O)},A=[O,b,_],t[22]=O,t[23]=b,t[24]=_,t[25]=k,t[26]=A):(k=t[25],A=t[26]),(0,ln.useEffect)(k,A);let j;t[27]!==O||t[28]!==w||t[29]!==_?(j=()=>{we(_,w,O)},t[27]=O,t[28]=w,t[29]=_,t[30]=j):j=t[30];let M=j,ne;t[31]!==S||t[32]!==x||t[33]!==M?(ne={isExpanded:S,isViewingHistoricalVersion:x,openExpandedView:M,triggerRef:u},t[31]=S,t[32]=x,t[33]=M,t[34]=ne):ne=t[34];let re=ne,N;return t[35]!==r||t[36]!==re?(N=(0,un.jsx)($t.Provider,{value:re,children:r}),t[35]=r,t[36]=re,t[37]=N):N=t[37],N}function an(e){"use forget";let t=(0,cn.c)(2),{collapsedPreview:n,inlinePreview:r}=e,{isExpanded:i}=Zt(),a=i?n:r,o;return t[0]===a?o=t[1]:(o=(0,un.jsx)(un.Fragment,{children:a}),t[0]=a,t[1]=o),o}function on(e){"use forget";let t=(0,cn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,title:o}=e,s=qe(),c;t[0]===i?c=t[1]:(c=()=>i==null?0:De(i).height$()??0,t[0]=i,t[1]=c);let l=D(c),u=s===`fullscreen`&&n&&i!=null?l:0,d;t[2]===o?d=t[3]:(d=(0,un.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:o}),t[2]=o,t[3]=d);let f;t[4]!==a||t[5]!==d?(f=(0,un.jsxs)(Je.Header,{className:`pb-1`,children:[d,a]}),t[4]=a,t[5]=d,t[6]=f):f=t[6];let p;t[7]===u?p=t[8]:(p={paddingBottom:u},t[7]=u,t[8]=p);let m;t[9]===r?m=t[10]:(m=(0,un.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=m);let h;t[11]!==p||t[12]!==m?(h=(0,un.jsx)(Je.Body,{className:`bg-token-bg-primary overflow-hidden`,style:p,children:m}),t[11]=p,t[12]=m,t[13]=h):h=t[13];let g;return t[14]!==f||t[15]!==h?(g=(0,un.jsxs)(un.Fragment,{children:[f,h]}),t[14]=f,t[15]=h,t[16]=g):g=t[16],g}function sn(e){"use forget";let t=(0,cn.c)(5),{conversation:n,paneId:r}=e,i=Ge(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,un.jsx)(tn,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var cn,ln,un,dn=e((()=>{cn=le(),Oe(),Ke(),T(),ln=n(fe()),en(),ke(),nn(),un=L()}));function fn(){"use forget";let e=(0,pn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,mn.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,mn.jsx)(R,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var pn,mn,hn=e((()=>{pn=le(),z(),mn=L()}));function gn(e){"use forget";let t=(0,vn.c)(38),n=pe(),r;t[0]!==n||t[1]!==e?(r=e?n.formatMessage(X.generatingApp,{title:e}):n.formatMessage(X.creatingInterface),t[0]=n,t[1]=e,t[2]=r):r=t[2];let i=r,a;t[3]===n?a=t[4]:(a=n.formatMessage(X.sketchingInterface),t[3]=n,t[4]=a);let o;t[5]===n?o=t[6]:(o=n.formatMessage(X.shapingLayout),t[5]=n,t[6]=o);let s;t[7]===n?s=t[8]:(s=n.formatMessage(X.arrangingPieces),t[7]=n,t[8]=s);let c;t[9]===n?c=t[10]:(c=n.formatMessage(X.polishingVisuals),t[9]=n,t[10]=c);let l;t[11]===n?l=t[12]:(l=n.formatMessage(X.tuningInputs),t[11]=n,t[12]=l);let u;t[13]===n?u=t[14]:(u=n.formatMessage(X.addingInteractivity),t[13]=n,t[14]=u);let d;t[15]===n?d=t[16]:(d=n.formatMessage(X.wiringControls),t[15]=n,t[16]=d);let f;t[17]===n?f=t[18]:(f=n.formatMessage(X.composingInteractions),t[17]=n,t[18]=f);let p;t[19]===n?p=t[20]:(p=n.formatMessage(X.calibratingPreview),t[19]=n,t[20]=p);let m;t[21]===n?m=t[22]:(m=n.formatMessage(X.refiningDetails),t[21]=n,t[22]=m);let h;t[23]!==i||t[24]!==a||t[25]!==m||t[26]!==o||t[27]!==s||t[28]!==c||t[29]!==l||t[30]!==u||t[31]!==d||t[32]!==f||t[33]!==p?(h=[i,a,o,s,c,l,u,d,f,p,m],t[23]=i,t[24]=a,t[25]=m,t[26]=o,t[27]=s,t[28]=c,t[29]=l,t[30]=u,t[31]=d,t[32]=f,t[33]=p,t[34]=h):h=t[34];let g=h,[_,v]=(0,yn.useState)(0),y,b;return t[35]===g.length?(y=t[36],b=t[37]):(y=()=>{let e=window.setInterval(()=>{v(e=>Math.min(e+1,g.length-1))},xn);return()=>{window.clearInterval(e)}},b=[g.length],t[35]=g.length,t[36]=y,t[37]=b),(0,yn.useEffect)(y,b),g[_]??g[0]??``}function _n(e){"use forget";let t=(0,vn.c)(2),{title:n}=e,r=gn(n),i;return t[0]===r?i=t[1]:(i=(0,bn.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full`,role:`status`,children:(0,bn.jsx)(Xe,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:r})}),t[0]=r,t[1]=i),i}var vn,yn,bn,xn,X,Sn=e((()=>{vn=le(),Ye(),yn=n(fe()),z(),bn=L(),xn=2800,X=de({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingInterface:{id:`appBlock.loadingState.creatingInterface`,defaultMessage:`Creating the interface`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},arrangingPieces:{id:`appBlock.loadingState.arrangingPieces`,defaultMessage:`Arranging the pieces`},polishingVisuals:{id:`appBlock.loadingState.polishingVisuals`,defaultMessage:`Polishing the visuals`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},addingInteractivity:{id:`appBlock.loadingState.addingInteractivity`,defaultMessage:`Adding interactivity`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`}})}));function Cn(e){let t=new Map,n=new Map,r=null,i=null;for(let a of e){let e=a.metadata?.content_references;if(Array.isArray(e)&&e.forEach((e,r)=>{let i=Tn({contentReference:e,messageId:a.id,refIndex:r});i!=null&&(t.set(i.appBlockId,i),i.libraryFileId!=null&&n.set(i.libraryFileId,i.appBlockId))}),a.author.role===k.User){(a.metadata?.attachments??[]).forEach((e,r)=>{let i=wn({attachment:e,messageId:a.id,refIndex:r});i==null||i.libraryFileId==null||n.has(i.libraryFileId)||(t.set(i.appBlockId,i),n.set(i.libraryFileId,i.appBlockId))});let e=a.metadata?.focused_artifact;if(e!=null){let n=e.type===In?t.get(e.artifact_id)??null:null;r=n!=null&&n.messageId===e.source_message_id&&n.refIndex===e.source_ref_index&&(n.libraryFileId==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e.library_file_id}else{let e=a.metadata?.open_in_app_block_view,n=e==null?null:t.get(e.app_block_id)??null;r=e!=null&&n!=null&&n.messageId===e.message_id&&n.refIndex===e.ref_index&&(n.libraryFileId==null||e.library_file_id==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e?.library_file_id??null}}let o=ce(a);if(o?.status!==`created`)continue;let s=n.get(o.libraryFileId),c=s==null?null:t.get(s)??null;if(c==null&&o.origin!=null){let e=o.origin.messageId,n=[...t.values()].filter(t=>t.messageId===e);c=n.length===1?n[0]:null}c==null&&s==null&&r!=null&&r.libraryFileId==null&&(i==null||i===o.libraryFileId)&&(c=r),c!=null&&(c.libraryFileId==null&&c.content!=null&&Nn(a)||(n.set(o.libraryFileId,c.appBlockId),t.set(c.appBlockId,{...c,content:null,currentContentFileId:o.newContentFileId,latestPatchMessageId:a.id,libraryFileId:o.libraryFileId,libraryFileVersionNumber:o.newVersionNumber})))}return t}function wn({attachment:e,messageId:t,refIndex:n}){return e.library_artifact_type!==In||e.library_file_id==null?null:{appBlockId:tt({messageId:t,refIndex:n}),content:null,currentContentFileId:e.id??null,entrypoint:`index.html`,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:e.library_file_id,libraryFileName:e.name,libraryFileVersionNumber:null,mimeType:e.mime_type??null,messageId:t,refIndex:n,styleMode:null,title:e.name.replace(/\.html$/i,``)}}function Tn({contentReference:e,messageId:t,refIndex:n}){if(typeof e!=`object`||!e||!(`type`in e)||!(`category`in e)||e.type!==Ln||e.category!==In||!(`data`in e))return null;let r=e.data;if(typeof r!=`object`||!r)return null;let i=En(r,`content`),a=En(r,`entrypoint`)??`index.html`,o=jn(r,a),s=On(o,`library_file_id`);return i==null&&s==null?null:{appBlockId:En(r,`app_block_id`)??tt({messageId:t,refIndex:n}),bundleVersion:Dn(r,`bundle_version`)??void 0,content:i,currentContentFileId:On(o,`current_content_file_id`),entrypoint:a,iconSvg:En(r,`icon_svg`),language:Mn(),latestPatchMessageId:null,libraryFileId:s,libraryFileName:On(o,`library_file_name`),libraryFileVersionNumber:An(kn(o,`library_file_version_number`)),mimeType:On(o,`mime_type`),messageId:t,refIndex:n,styleMode:bt(En(r,`style_mode`)),title:En(r,`display_name`)??En(r,`title`)}}function En(e,t){let n=null;return t===`app_block_id`&&`app_block_id`in e&&(n=e.app_block_id),t===`content`&&`content`in e&&(n=e.content),t===`current_content_file_id`&&`current_content_file_id`in e&&(n=e.current_content_file_id),t===`display_name`&&`display_name`in e&&(n=e.display_name),t===`entrypoint`&&`entrypoint`in e&&(n=e.entrypoint),t===`icon_svg`&&`icon_svg`in e&&(n=e.icon_svg),t===`library_file_id`&&`library_file_id`in e&&(n=e.library_file_id),t===`library_file_name`&&`library_file_name`in e&&(n=e.library_file_name),t===`mime_type`&&`mime_type`in e&&(n=e.mime_type),t===`path`&&`path`in e&&(n=e.path),t===`style_mode`&&`style_mode`in e&&(n=e.style_mode),t===`title`&&`title`in e&&(n=e.title),typeof n==`string`&&n.trim()!==``?n:null}function Dn(e,t){if(t===`bundle_version`&&`bundle_version`in e){let t=e.bundle_version;if(typeof t==`number`)return t}if(t===`library_file_version_number`&&`library_file_version_number`in e){let t=e.library_file_version_number;if(typeof t==`number`)return t}return null}function On(e,t){return typeof e!=`object`||!e?null:En(e,t)}function kn(e,t){return typeof e!=`object`||!e?null:Dn(e,t)}function An(...e){for(let t of e)if(t!=null)return t;return null}function jn(e,t){if(!(`files`in e)||!Array.isArray(e.files))return null;let n=null;for(let r of e.files)if(!(typeof r!=`object`||!r)&&En(r,`library_file_id`)!=null&&(n??=r,En(r,`path`)===t))return r;return n}function Mn(){return`html`}function Nn(e){let t=e.metadata?.shared_conversation_id;return typeof t==`string`&&t.trim()!==``}function Pn(e,t){return e.appBlockId===t.appBlockId&&e.bundleVersion===t.bundleVersion&&e.content===t.content&&e.currentContentFileId===t.currentContentFileId&&e.entrypoint===t.entrypoint&&e.iconSvg===t.iconSvg&&e.language===t.language&&e.latestPatchMessageId===t.latestPatchMessageId&&e.libraryFileId===t.libraryFileId&&e.libraryFileName===t.libraryFileName&&e.libraryFileVersionNumber===t.libraryFileVersionNumber&&e.mimeType===t.mimeType&&e.messageId===t.messageId&&e.refIndex===t.refIndex&&e.styleMode===t.styleMode&&e.title===t.title}function Fn(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e){let e=t.get(n);if(e==null||!Pn(r,e))return!1}return!0}var In,Ln,Rn,zn=e((()=>{F(),ae(),h(),V(),y(),nt(),St(),In=`app_block`,Ln=`client_defined_widget`,Rn=te(e=>C(()=>Cn(o(e).flatMap(e=>e.messages)),{equals:Fn}))}));function Bn({appBlockId:e,conversation:t}){return t==null?null:Rn(t).get(e)??null}function Vn(e){return e?.serverId$()??void 0}function Hn({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:be(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function Un({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return ye({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:v(e)?`missing`:`failed`})}),()=>{a.abort()}}function Wn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??Gn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function Gn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var Kn=e((()=>{u(),ge(),zn()})),qn=t({AppBlock:()=>Xn,AppBlockPreviewLoadingState:()=>mr,AppBlockSandboxPreview:()=>fr});function Jn(e){let t=e.search(Or),n=t===-1?e:e.slice(0,t),r=n.toLowerCase(),i=r.lastIndexOf(`<style`);return i>r.lastIndexOf(`</style`)&&(n=n.slice(0,i)),n}function Yn(e){let t=Jn(e);if(t.trim()===``)return!1;if(typeof document>`u`)return/<[^>]+>|[^\s<]/.test(t);let n=document.createElement(`template`);n.innerHTML=t;for(let e of n.content.querySelectorAll(kr))e.remove();return(n.content.textContent?.trim().length??0)>0||n.content.querySelector(Ar)!=null}function Xn(e){"use forget";let t=(0,Z.c)(100),{additionalResourceDomains:n,appBlockId:r,authoritativeCode:i,authoritativeSource:o,code:s,collapseWhenSuperseded:c,currentContentFileId:l,displayMode:u,id:d,captureConsoleMessages:f,clientThreadId:p,iconSvg:m,isStreaming:h,isTurnStreaming:g,libraryFileId:_,libraryFileVersionNumber:v,messageId:y,onConsoleMessagesChange:b,onReadyChange:x,progressiveStreaming:S,ref:C,refIndex:w,styleMode:T,title:ee,variant:E,widgetRefSeenAtMs:te}=e,O=c===void 0||c,k=f!==void 0&&f,A=h!==void 0&&h,j=g!==void 0&&g,ne=S!==void 0&&S,re=E===void 0?`inline`:E,N=M(),ie;t[0]===N?ie=t[1]:(ie=()=>N!=null&&_e(N),t[0]=N,t[1]=ie);let ae=D(ie),oe=y!=null&&w!=null?tt({messageId:y,refIndex:w}):void 0,P=r??oe??tt({messageId:y??d,refIndex:w??0}),F=D(()=>Ee({conversation:N??null,instanceId:P,messageId:y,refIndex:w}))??u,ce=D(()=>o!=null||F!=null?null:Bn({appBlockId:P,conversation:N??null})),I=o??ce,le;t[2]===N?le=t[3]:(le=()=>Vn(N??null),t[2]=N,t[3]=le);let ue=D(le),de=a(N?.id),L=ue??de,R;t[4]!==l||t[5]!==_||t[6]!==v||t[7]!==L||t[8]!==I?(R=Hn({currentContentFileId:l,libraryFileId:_,libraryFileVersionNumber:v,serverThreadId:L,source:I}),t[4]=l,t[5]=_,t[6]=v,t[7]=L,t[8]=I,t[9]=R):R=t[9];let z=R,[fe,pe]=(0,Q.useState)(null),[me,he]=(0,Q.useState)(0),ge;t[10]!==me||t[11]!==z.libraryContentKey?(ge=[z.libraryContentKey,me],t[10]=me,t[11]=z.libraryContentKey,t[12]=ge):ge=t[12];let B=ge.join(`\0`),ve,be;t[13]!==i||t[14]!==B||t[15]!==z.contentFileId||t[16]!==z.libraryFileId||t[17]!==F||t[18]!==L?(ve=()=>{if(!(i!=null||F===`collapsed`))return Un({contentFileId:z.contentFileId,libraryContentKey:B,libraryFileId:z.libraryFileId,onContentStateChange:pe,serverThreadId:L})},be=[i,z.contentFileId,z.libraryFileId,B,F,L],t[13]=i,t[14]=B,t[15]=z.contentFileId,t[16]=z.libraryFileId,t[17]=F,t[18]=L,t[19]=ve,t[20]=be):(ve=t[19],be=t[20]),(0,Q.useEffect)(ve,be);let V=Wn({appBlockId:P,contentFileId:z.contentFileId,currentContentFileId:l,libraryContent:fe,libraryContentKey:B,libraryFileId:_,libraryFileVersionNumber:v,source:I}),xe=fe?.key===B?fe:null,Ce;t[21]!==V?.libraryFileId||t[22]!==_?(Ce=()=>Se(V?.libraryFileId??_),t[21]=V?.libraryFileId,t[22]=_,t[23]=Ce):Ce=t[23];let Te=D(Ce),H=V?.libraryFileVersionNumber??v,De=(Te!=null&&(H==null||Te.versionNumber>=H)?Te.code:void 0)??i??V?.content??s??null,Oe=V?.iconSvg??m??null,U=V?.libraryFileId??_,ke=V?.styleMode??T,Ae;t[24]!==U||t[25]!==ke?(Ae=xt({explicitStyleMode:ke,libraryFileId:U}),t[24]=U,t[25]=ke,t[26]=Ae):Ae=t[26];let W=Ae,G=V?.title??ee,je;t[27]===N?je=t[28]:(je=()=>N!=null&&se(N)?`work`:`chat`,t[27]=N,t[28]=je);let Me=D(je),K;t[29]===Symbol.for(`react.memo_cache_sentinel`)?(K=$e(),t[29]=K):K=t[29];let Ne=K,Pe=re===`artifact`,Fe=ne&&!Pe,Ie=Pe&&W===`open`,Le=F===`collapsed`||F==null&&O&&V?.latestPatchMessageId!=null&&V.latestPatchMessageId!==y,Re=s!=null||l!=null,q;t[30]!==p||t[31]!==s||t[32]!==N?.id||t[33]!==l||t[34]!==P||t[35]!==v||t[36]!==y||t[37]!==U||t[38]!==W||t[39]!==G||t[40]!==w||t[41]!==L||t[42]!==I?.messageId?(q=async e=>{let t=s;if(t==null&&l!=null)try{t=await ye({abortSignal:new AbortController().signal,fileId:l,serverThreadId:L})}catch{return}t!=null&&we({appBlockId:P,conversationId:N?.id??p??null,isOriginalVersion:!0,versionNumber:v??void 0},`app-block:${P}:original`,{code:t,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:P,libraryFileId:U,messageId:I?.messageId??y,refIndex:w},styleMode:W,title:G})},t[30]=p,t[31]=s,t[32]=N?.id,t[33]=l,t[34]=P,t[35]=v,t[36]=y,t[37]=U,t[38]=W,t[39]=G,t[40]=w,t[41]=L,t[42]=I?.messageId,t[43]=q):q=t[43],N?.id,I?.messageId;let ze=q;if(A&&!Fe){let e;return t[44]===G?e=t[45]:(e=(0,$.jsx)(_n,{title:G}),t[44]=G,t[45]=e),e}let Be=ae&&s!=null;if(xe?.status===`missing`&&!Be)return null;if(Le){let e=Re?ze:void 0,n;return t[46]!==G||t[47]!==e?(n=(0,$.jsx)(ur,{onView:e,title:G}),t[46]=G,t[47]=e,t[48]=n):n=t[48],n}let J=De??(Fe&&A?``:null);if(J==null){if(V?.latestPatchMessageId!=null){let e=N?.id??p,n=xe?.status===`failed`,r;t[49]===he?r=t[50]:(r=()=>he(Zn),t[49]=he,t[50]=r);let i;return t[51]!==P||t[52]!==Pe||t[53]!==Oe||t[54]!==G||t[55]!==e||t[56]!==n||t[57]!==r?(i=(0,$.jsx)(tr,{appBlockId:P,conversationId:e,hasFailed:n,iconSvg:Oe,onRetry:r,showHeader:Pe,title:G}),t[51]=P,t[52]=Pe,t[53]=Oe,t[54]=G,t[55]=e,t[56]=n,t[57]=r,t[58]=i):i=t[58],i}let e;return t[59]===G?e=t[60]:(e=(0,$.jsx)(_n,{title:G}),t[59]=G,t[60]=e),e}let Ve;t[61]!==p||t[62]!==Me||t[63]!==A||t[64]!==j||t[65]!==y||t[66]!==G||t[67]!==w?(Ve=!A&&!j&&p!=null&&y!=null&&w!=null&&Ze()?{reference:{clientThreadId:p,messageId:y,referenceIndex:w},target:{kind:`app_block`,metadata:{...G==null?{}:{title:G},tab:Me}}}:void 0,t[61]=p,t[62]=Me,t[63]=A,t[64]=j,t[65]=y,t[66]=G,t[67]=w,t[68]=Ve):Ve=t[68];let Y=Ve,He=N?.id??p,Ue=I?.messageId??y,We;t[69]!==P||t[70]!==U||t[71]!==w||t[72]!==Ue?(We={appBlockId:P,libraryFileId:U,messageId:Ue,refIndex:w},t[69]=P,t[70]=U,t[71]=w,t[72]=Ue,t[73]=We):We=t[73];let Ge=Ie&&Ne,Ke=N?.id??p,qe;t[74]!==n||t[75]!==k||t[76]!==Y||t[77]!==d||t[78]!==A||t[79]!==b||t[80]!==x||t[81]!==Oe||t[82]!==W||t[83]!==G||t[84]!==C||t[85]!==J||t[86]!==Fe||t[87]!==Ie||t[88]!==Ge||t[89]!==Ke||t[90]!==te?(qe=(0,$.jsx)(Qn,{additionalResourceDomains:n,canOpen:Ge,captureConsoleMessages:k,clientThreadId:Ke,code:J,feedback:Y,iconSvg:Oe,id:d,isStreaming:A,onConsoleMessagesChange:b,onReadyChange:x,progressiveStreaming:Fe,ref:C,showArtifactCard:Ie,styleMode:W,title:G,widgetRefSeenAtMs:te}),t[74]=n,t[75]=k,t[76]=Y,t[77]=d,t[78]=A,t[79]=b,t[80]=x,t[81]=Oe,t[82]=W,t[83]=G,t[84]=C,t[85]=J,t[86]=Fe,t[87]=Ie,t[88]=Ge,t[89]=Ke,t[90]=te,t[91]=qe):qe=t[91];let Je;return t[92]!==n||t[93]!==W||t[94]!==G||t[95]!==J||t[96]!==He||t[97]!==We||t[98]!==qe?(Je=(0,$.jsx)(rn,{additionalResourceDomains:n,code:J,conversationId:He,styleMode:W,source:We,title:G,children:qe}),t[92]=n,t[93]=W,t[94]=G,t[95]=J,t[96]=He,t[97]=We,t[98]=qe,t[99]=Je):Je=t[99],Je}function Zn(e){return e+1}function Qn(e){"use forget";let t=(0,Z.c)(32),{additionalResourceDomains:n,canOpen:r,captureConsoleMessages:i,clientThreadId:a,code:o,feedback:s,iconSvg:c,id:l,isStreaming:u,onConsoleMessagesChange:d,onReadyChange:f,progressiveStreaming:p,ref:m,showArtifactCard:h,styleMode:g,title:_,widgetRefSeenAtMs:v}=e,{isViewingHistoricalVersion:y,openExpandedView:b,triggerRef:x}=Zt(),S;t[0]===b?S=t[1]:(S=()=>{H(),b()},t[0]=b,t[1]=S);let C=S,w=y?C:void 0,T;t[2]!==c||t[3]!==w||t[4]!==_||t[5]!==x?(T=(0,$.jsx)(ir,{iconSvg:c,onOpen:w,openButtonRef:x,title:_}),t[2]=c,t[3]=w,t[4]=_,t[5]=x,t[6]=T):T=t[6];let ee;t[7]!==n||t[8]!==i||t[9]!==a||t[10]!==o||t[11]!==l||t[12]!==u||t[13]!==d||t[14]!==f||t[15]!==p||t[16]!==m||t[17]!==g||t[18]!==v?(ee=(0,$.jsx)(fr,{additionalResourceDomains:n,code:o,id:l,isStreaming:u,captureConsoleMessages:i,clientThreadId:a,onConsoleMessagesChange:d,onReadyChange:f,progressiveStreaming:p,ref:m,styleMode:g,widgetRefSeenAtMs:v}),t[7]=n,t[8]=i,t[9]=a,t[10]=o,t[11]=l,t[12]=u,t[13]=d,t[14]=f,t[15]=p,t[16]=m,t[17]=g,t[18]=v,t[19]=ee):ee=t[19];let E;t[20]!==r||t[21]!==s||t[22]!==C||t[23]!==c||t[24]!==h||t[25]!==ee||t[26]!==_||t[27]!==x?(E=(0,$.jsx)(er,{canOpen:r,expandButtonRef:x,feedback:s,iconSvg:c,showArtifactCard:h,title:_,onOpen:C,children:ee}),t[20]=r,t[21]=s,t[22]=C,t[23]=c,t[24]=h,t[25]=ee,t[26]=_,t[27]=x,t[28]=E):E=t[28];let D;return t[29]!==T||t[30]!==E?(D=(0,$.jsx)(an,{collapsedPreview:T,inlinePreview:E}),t[29]=T,t[30]=E,t[31]=D):D=t[31],D}function $n(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:o,titleClassName:s}=e,c;t[0]===r?c=t[1]:(c=j(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=c);let l=s??`truncate text-base font-semibold`,u;t[2]===l?u=t[3]:(u=j(`text-token-text-primary`,l),t[2]=l,t[3]=u);let d=o??i,f;t[4]!==u||t[5]!==d?(f=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:u,children:d})}),t[4]=u,t[5]=d,t[6]=f):f=t[6];let p;t[7]!==a||t[8]!==f?(p=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,f]}),t[7]=a,t[8]=f,t[9]=p):p=t[9];let m;return t[10]!==n||t[11]!==c||t[12]!==p?(m=(0,$.jsxs)(`div`,{className:c,children:[p,n]}),t[10]=n,t[11]=c,t[12]=p,t[13]=m):m=t[13],m}function er(e){"use forget";let t=(0,Z.c)(16),{canOpen:n,children:r,expandButtonRef:i,feedback:a,iconSvg:o,onOpen:s,showArtifactCard:c,title:l}=e,u=pe(),d;t[0]===u?d=t[1]:(d=u.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=u,t[1]=d);let f=d,p;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==f||t[6]!==o||t[7]!==s||t[8]!==c||t[9]!==l?(p=c?(0,$.jsxs)(`div`,{className:`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)($n,{action:n&&s!=null?(0,$.jsx)(dr,{ref:i,className:`shrink-0`,onClick:s}):void 0,className:`px-4 py-2`,fallbackTitle:f,leading:(0,$.jsx)(or,{iconSvg:o}),title:l}),(0,$.jsx)(`div`,{children:r})]}):r,t[2]=n,t[3]=r,t[4]=i,t[5]=f,t[6]=o,t[7]=s,t[8]=c,t[9]=l,t[10]=p):p=t[10];let m;t[11]===a?m=t[12]:(m=a==null?null:(0,$.jsx)(nr,{...a}),t[11]=a,t[12]=m);let h;return t[13]!==p||t[14]!==m?(h=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[p,m]}),t[13]=p,t[14]=m,t[15]=h):h=t[15],h}function tr(e){"use forget";let t=(0,Z.c)(17),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:o,showHeader:s,title:c}=e,l=D(Te),u=pe(),d;t[0]===u?d=t[1]:(d=u.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=u,t[1]=d);let f=d;if(Ae(l,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==c?(e=(0,$.jsx)(ir,{iconSvg:a,title:c}),t[2]=a,t[3]=c,t[4]=e):e=t[4],e}let p;t[5]!==f||t[6]!==a||t[7]!==s||t[8]!==c?(p=s?(0,$.jsx)($n,{className:`mb-2`,fallbackTitle:f,leading:(0,$.jsx)(or,{iconSvg:a}),title:c}):null,t[5]=f,t[6]=a,t[7]=s,t[8]=c,t[9]=p):p=t[9];let m;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(m={minHeight:gr},t[10]=m):m=t[10];let h;t[11]!==i||t[12]!==o?(h=(0,$.jsx)(`div`,{className:`relative w-full`,style:m,children:i?(0,$.jsx)(hr,{onRetry:o}):(0,$.jsx)(mr,{})}),t[11]=i,t[12]=o,t[13]=h):h=t[13];let g;return t[14]!==p||t[15]!==h?(g=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[p,h]}),t[14]=p,t[15]=h,t[16]=g):g=t[16],g}function nr(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(D(rr))return null;let o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(Ve,{}),t[0]=o):o=t[0];let s;return t[1]!==i||t[2]!==n||t[3]!==r?(s=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)(We,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:o})}),t[1]=i,t[2]=n,t[3]=r,t[4]=s):s=t[4],s}function rr(){return He()}function ir(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=pe(),s,c,l,u,d;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),d=`not-prose relative clear-both my-4 w-full max-w-full`,u=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=$n,l=r==null?void 0:(0,$.jsx)(ne,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=l,t[7]=u,t[8]=d):(s=t[4],c=t[5],l=t[6],u=t[7],d=t[8]);let f;t[9]===n?f=t[10]:(f=(0,$.jsx)(ar,{iconSvg:n}),t[9]=n,t[10]=f);let p;t[11]!==s||t[12]!==c||t[13]!==l||t[14]!==f||t[15]!==a?(p=(0,$.jsx)(s,{action:l,className:`w-full`,fallbackTitle:c,leading:f,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=l,t[14]=f,t[15]=a,t[16]=p):p=t[16];let m;t[17]!==u||t[18]!==p?(m=(0,$.jsx)(`div`,{className:u,children:p}),t[17]=u,t[18]=p,t[19]=m):m=t[19];let h;return t[20]!==d||t[21]!==m?(h=(0,$.jsx)(`div`,{className:d,children:m}),t[20]=d,t[21]=m,t[22]=h):h=t[22],h}function ar(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(or,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function or(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=sr(r),t[0]=r,t[1]=a);let o=a,s;return t[2]!==i||t[3]!==o?(s=o==null?(0,$.jsx)(Me,{"aria-hidden":`true`,className:j(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:j(`icon-md shrink-0`,i),children:(0,$.jsx)(me,{svgString:o,className:`h-full w-full`})}),t[2]=i,t[3]=o,t[4]=s):s=t[4],s}function sr(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>Cr||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(wr)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Er.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!cr(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function cr(e){let t=e.replace(Tr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Tr)){let e=t[1],n=t[2];if(!Dr.has(e)||!lr(e,n))return!1}return!0}function lr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function ur(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=pe(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(R,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function dr(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:a}=e,o=pe(),s;t[0]===o?s=t[1]:(s=o.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=o,t[1]=s);let c=s,l;t[2]===r?l=t[3]:(l=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=l);let u;t[4]!==c||t[5]!==a||t[6]!==l?(u=(0,$.jsx)(ne,{ref:a,type:`button`,icon:G,color:`ghost`,size:`medium`,label:c,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:l}),t[4]=c,t[5]=a,t[6]=l,t[7]=u):u=t[7];let d;return t[8]!==n||t[9]!==c||t[10]!==u?(d=(0,$.jsx)(i,{label:c,className:n,children:u}),t[8]=n,t[9]=c,t[10]=u,t[11]=d):d=t[11],d}function fr(e){"use forget";let t=(0,Z.c)(127),{additionalResourceDomains:n,clientThreadId:r,code:i,id:a,captureConsoleMessages:o,isStreaming:s,onConsoleMessagesChange:c,onReadyChange:u,progressiveStreaming:d,ref:p,styleMode:h,surface:g,widgetRefSeenAtMs:_}=e,v=s!==void 0&&s,y=d!==void 0&&d,b=h===void 0?`default`:h,x=g===void 0?`inline`:g,S=pe(),C=(0,Q.useRef)(null),w=(0,Q.useRef)(!1),T=(0,Q.useRef)(!1),ee=(0,Q.useRef)(null),te=(0,Q.useRef)(null),O=(0,Q.useRef)(null),k=(0,Q.useRef)(null),A=(0,Q.useRef)(null),M=(0,Q.useRef)(0),ne=(0,Q.useRef)(null),re=(0,Q.useRef)(null),N;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(N=[],t[0]=N):N=t[0];let ie=(0,Q.useRef)(N),ae=f(),oe=D(l),{allowDependencyNetworkRequestsWithoutCanvasAccess:P}=(0,Q.useContext)(Be),se=Fe()||P,F=Le(r)&&!P,ce=ae?`dark`:`light`,I=S.locale,le;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(le={status:`streaming`},t[1]=le):le=t[1];let[ue,de]=(0,Q.useState)(le),L=ue.status===`finalized`&&ue.html!==i,z=y&&x===`inline`&&ue.status!==`static`&&!L,fe=F?`network-enabled`:`network-disabled`,me=z?`progressive-app-block-stream`:i,he;t[2]===n?he=t[3]:(he=n??[],t[2]=n,t[3]=he);let ge;t[4]!==oe||t[5]!==I||t[6]!==b||t[7]!==x||t[8]!==fe||t[9]!==me||t[10]!==he||t[11]!==ce?(ge=[ce,oe,x,b,I,fe,me,...he],t[4]=oe,t[5]=I,t[6]=b,t[7]=x,t[8]=fe,t[9]=me,t[10]=he,t[11]=ce,t[12]=ge):ge=t[12];let B=ge.join(`\0`),_e;t[13]===n?_e=t[14]:(_e=Vt(n),t[13]=n,t[14]=_e);let ve=_e,ye=F?`deps_only`:`disabled`,be;t[15]!==x||t[16]!==ye?(be={networkPolicy:ye,surface:x},t[15]=x,t[16]=ye,t[17]=be):be=t[17];let V=be,[xe,Se]=(0,Q.useState)(0),[Ce,we]=(0,Q.useState)(null),Te=Ce?.signature===B?Ce.status:null,H=Te===`ready`,Ee=Te===`failed`,De=z&&v&&!Ee,Oe;t[18]!==i||t[19]!==V||t[20]!==_?(Oe={content:i,metricTags:V,widgetRefSeenAtMs:_},t[18]=i,t[19]=V,t[20]=_,t[21]=Oe):Oe=t[21];let{cancelFirstPaintFrame:U,startRunMetrics:ke}=lt(Oe),Ae,W;t[22]!==H||t[23]!==u?(Ae=()=>{u?.(H)},W=[H,u],t[22]=H,t[23]=u,t[24]=Ae,t[25]=W):(Ae=t[24],W=t[25]),(0,Q.useEffect)(Ae,W);let G,je;t[26]===Symbol.for(`react.memo_cache_sentinel`)?(G=()=>({clearCapturedConsoleMessages:()=>{ie.current=[]},captureScreenshotDataUrl:async()=>(await C.current?.screenshot())?.imageBase64??null,focus:()=>{C.current?.focus()}}),je=[],t[26]=G,t[27]=je):(G=t[26],je=t[27]),(0,Q.useImperativeHandle)(p,G,je);let Me;t[28]===Symbol.for(`react.memo_cache_sentinel`)?(Me=()=>{ne.current!=null&&(window.clearTimeout(ne.current),ne.current=null)},t[28]=Me):Me=t[28];let K=m(Me),Ie;t[29]===Symbol.for(`react.memo_cache_sentinel`)?(Ie=()=>{re.current!=null&&(window.clearTimeout(re.current),re.current=null)},t[29]=Ie):Ie=t[29];let q=m(Ie),ze;t[30]!==H||t[31]!==u||t[32]!==B||t[33]!==z?(ze=()=>{if(!z||!H)return;let e=O.current,t=C.current;if(e==null||t?.updateAppBlockStream==null||T.current)return;let n=M.current;O.current=null,ee.current=it(),te.current=e.html,e.isFinal&&(T.current=!0);let r=()=>M.current===n?t.updateAppBlockStream?.(e)??Promise.resolve():Promise.resolve(),i=A.current,a=i==null?r():i.then(r);A.current=a,a.then(()=>{A.current===a&&(A.current=null),M.current===n&&(Yn(e.html)&&k.current?.markFirstPaint(),e.isFinal&&(k.current?.reportPayloadSize(e.html),de({status:`finalized`,html:e.html})))},e=>{A.current===a&&(A.current=null),M.current===n&&(e instanceof DOMException&&e.name===`AbortError`||(we({signature:B,status:`failed`}),u?.(!1,`failure`)))})},t[30]=H,t[31]=u,t[32]=B,t[33]=z,t[34]=ze):ze=t[34];let J=m(ze),Ve;t[35]!==oe||t[36]!==o||t[37]!==K||t[38]!==q||t[39]!==i||t[40]!==se||t[41]!==F||t[42]!==L||t[43]!==v||t[44]!==I||t[45]!==c||t[46]!==u||t[47]!==B||t[48]!==z||t[49]!==ke||t[50]!==b||t[51]!==x||t[52]!==ce?(Ve=()=>{if(!se)return;L&&de({status:`static`});let e=z&&C.current?.updateAppBlockStream!=null;if(z&&!e){v||de({status:`static`});return}w.current=!0,T.current=!1,ee.current=null,te.current=null,O.current=null,k.current=null,A.current=null,q(),M.current+=1;let t=M.current;K(),we(null);let{expectReadySignal:n,html:r}=Ht(i,ce,I,oe,x,{loadTailwind:F,progressiveStreaming:e,styleMode:b}),a=!1,s=!1,l=!1,d=!1,f=()=>M.current===t,p=ke(f,{deferFirstPaint:e,deferPayloadSize:e});e&&(k.current=p);let m=e=>{!o||c==null||!f()||(ie.current=e,!l&&(l=!0,E.postTask(()=>{l=!1,f()&&c(ie.current)},{priority:`background`})))},h=e=>{!f()||a||s||(a=!0,K(),p.markReady(e),!d&&(d=!0,E.postTask(()=>{d=!1,!(!f()||s)&&we({signature:B,status:`ready`})},{priority:`background`})))},g=(e,t)=>{!f()||a||s||(s=!0,K(),we({signature:B,status:`failed`}),p.reportFailure(e,t),E.postTask(()=>{f()&&u?.(!1,`failure`)},{priority:`background`}))};ie.current=[],m([]),ne.current=window.setTimeout(()=>{g(`sandbox_eval`,`ready_timeout`)},yr),(async()=>{let e=C.current?.evalAsync({code:r,expectReadySignal:n,language:`html`});if(e==null){g(`sandbox_eval`,`missing_generator`);return}for(;;){let t=await e.next();if(t.done){f()&&!a&&g(`sandbox_eval`,`generator_completed_without_ready`);break}f()&&(m([...ie.current,t.value]),t.value.type===Ne.ENVIRONMENT_STATUS&&t.value.status===Pe.RUNNING_CODE&&h(`running_code`),t.value.type===Ne.RUN_COMPLETE&&(t.value.wasFatalError?g(`runtime`,`fatal_runtime_error`):(h(`run_complete`),p.reportSuccess(`run_complete`))),await E.yield())}})().catch(e=>{f()&&(e instanceof DOMException&&e.name===`AbortError`||g(`sandbox_eval`,ot(e)))})},t[35]=oe,t[36]=o,t[37]=K,t[38]=q,t[39]=i,t[40]=se,t[41]=F,t[42]=L,t[43]=v,t[44]=I,t[45]=c,t[46]=u,t[47]=B,t[48]=z,t[49]=ke,t[50]=b,t[51]=x,t[52]=ce,t[53]=Ve):Ve=t[53];let Y=m(Ve),He;t[54]!==K||t[55]!==q?(He=()=>{M.current+=1,w.current=!1,T.current=!1,te.current=null,O.current=null,k.current=null,A.current=null,K(),q(),we(null),Se(pr)},t[54]=K,t[55]=q,t[56]=He):He=t[56];let Ue=m(He),We;t[57]===x?We=t[58]:(We=x===`inline`?{margin:-4,width:`calc(100% + ${vr*2}px)`}:void 0,t[57]=x,t[58]=We);let Ge=We,Ke;t[59]!==U||t[60]!==K||t[61]!==q||t[62]!==Y?(Ke=()=>{Y();let e=C.current;return()=>{M.current+=1,k.current=null,A.current=null,K(),q(),U(),e?.stop()}},t[59]=U,t[60]=K,t[61]=q,t[62]=Y,t[63]=Ke):Ke=t[63];let qe;t[64]!==U||t[65]!==K||t[66]!==q||t[67]!==se||t[68]!==B||t[69]!==Y||t[70]!==xe?(qe=[U,K,q,se,B,Y,xe],t[64]=U,t[65]=K,t[66]=q,t[67]=se,t[68]=B,t[69]=Y,t[70]=xe,t[71]=qe):qe=t[71],(0,Q.useEffect)(Ke,qe);let Je,Ye;t[72]!==v||t[73]!==Y||t[74]!==z?(Je=()=>{!z||v||w.current||C.current?.updateAppBlockStream!=null||Y()},Ye=[v,Y,z],t[72]=v,t[73]=Y,t[74]=z,t[75]=Je,t[76]=Ye):(Je=t[75],Ye=t[76]),(0,Q.useEffect)(Je,Ye);let Xe,Ze;if(t[77]!==q||t[78]!==i||t[79]!==J||t[80]!==Ee||t[81]!==H||t[82]!==v||t[83]!==z?(Xe=()=>{if(!z||!H||Ee||T.current||C.current?.updateAppBlockStream==null)return;let e=v?Jn(i):i;if(v&&(O.current?.html??te.current)===e)return;if(O.current={html:e,isFinal:!v},!v){q(),J();return}let t=ee.current;if(t==null){J();return}let n=it()-t;if(n>=br){J();return}return re.current=window.setTimeout(()=>{re.current=null,J()},br-n),q},Ze=[q,i,J,Ee,H,v,z],t[77]=q,t[78]=i,t[79]=J,t[80]=Ee,t[81]=H,t[82]=v,t[83]=z,t[84]=Xe,t[85]=Ze):(Xe=t[84],Ze=t[85]),(0,Q.useEffect)(Xe,Ze),!se){let e;return t[86]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(fn,{}),t[86]=e):e=t[86],e}let Qe=x===`inline`&&`min-h-[120px] overflow-visible`,$e=x===`stage`&&`h-full min-h-0`,et;t[87]!==Qe||t[88]!==$e?(et=j(`flex w-full`,Qe,$e),t[87]=Qe,t[88]=$e,t[89]=et):et=t[89];let tt=x===`inline`?`flex-none`:`w-full`,nt=De&&`mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,rt;t[90]!==tt||t[91]!==nt?(rt=j(`relative min-w-0`,tt,nt),t[90]=tt,t[91]=nt,t[92]=rt):rt=t[92];let at=`${xe}:${F?`network-enabled`:`network-disabled`}`,st;t[93]===S?st=t[94]:(st=S.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[93]=S,t[94]=st);let ct=F?`deps-only`:`none`,ut=F?xr:Sr,dt=H?0:-1,ft=x===`inline`&&b===`open`,pt=x!==`stage`,mt=z?_r:gr,ht;t[95]!==a||t[96]!==Y||t[97]!==ve||t[98]!==at||t[99]!==st||t[100]!==ct||t[101]!==ut||t[102]!==dt||t[103]!==ft||t[104]!==pt||t[105]!==mt?(ht=(0,$.jsx)(Re,{id:a,title:st,visuallyHidden:!1,networkPolicy:ct,additionalResourceDomains:ve,sandboxPermissions:ut,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:dt,onRetryCodeRun:Y,transparentBackground:ft,useIntrinsicHeight:pt,intrinsicHeightFallback:mt,ref:C},at),t[95]=a,t[96]=Y,t[97]=ve,t[98]=at,t[99]=st,t[100]=ct,t[101]=ut,t[102]=dt,t[103]=ft,t[104]=pt,t[105]=mt,t[106]=ht):ht=t[106];let gt;t[107]!==Ee||t[108]!==H||t[109]!==z?(gt=!H&&!Ee&&!z?(0,$.jsx)(mr,{}):null,t[107]=Ee,t[108]=H,t[109]=z,t[110]=gt):gt=t[110];let _t;t[111]!==Ee||t[112]!==Ue?(_t=Ee?(0,$.jsx)(hr,{onRetry:Ue}):null,t[111]=Ee,t[112]=Ue,t[113]=_t):_t=t[113];let vt;t[114]!==Ge||t[115]!==De||t[116]!==rt||t[117]!==ht||t[118]!==gt||t[119]!==_t?(vt=(0,$.jsxs)(`div`,{"aria-busy":De,className:rt,style:Ge,children:[ht,gt,_t]}),t[114]=Ge,t[115]=De,t[116]=rt,t[117]=ht,t[118]=gt,t[119]=_t,t[120]=vt):vt=t[120];let yt;t[121]===De?yt=t[122]:(yt=De?(0,$.jsx)(`span`,{"aria-atomic":`true`,"aria-live":`polite`,className:`sr-only`,role:`status`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})}):null,t[121]=De,t[122]=yt);let bt;return t[123]!==et||t[124]!==vt||t[125]!==yt?(bt=(0,$.jsxs)(`div`,{className:et,children:[vt,yt]}),t[123]=et,t[124]=vt,t[125]=yt,t[126]=bt):bt=t[126],bt}function pr(e){return e+1}function mr(){"use forget";let e=(0,Z.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsx)(c,{className:`icon-sm text-token-text-tertiary`}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex items-center justify-center gap-2 text-sm`,role:`status`,children:[t,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})})]}),e[1]=n):n=e[1],n}function hr(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(R,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(R,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(ne,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr=e((()=>{Z=le(),O(),Y(),ze(),J(),x(),S(),q(),w(),W(),je(),U(),Ie(),ae(),xe(),ee(),T(),N(),B(),P(),g(),p(),Ue(),ge(),K(),oe(),Q=n(fe()),z(),Xt(),yt(),et(),dn(),ke(),hn(),en(),Sn(),nt(),Ce(),St(),Kn(),$=L(),gr=432,_r=120,vr=4,yr=15e3,br=100,xr=`allow-scripts allow-same-origin allow-forms`,Sr=`allow-scripts allow-same-origin`,Cr=12e3,wr=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Tr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Er=new Set([`svg`,`path`]),Dr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`]),Or=/<script(?:\s|>)/i,kr=`script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`,Ar=`audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`}));export{Qe as S,yt as _,jr as a,et as b,Rn as c,sn as d,dn as f,it as g,xt as h,qn as i,zn as l,bt as m,mr as n,Bn as o,St as p,fr as r,Kn as s,Xn as t,on as u,tt as v,$e as x,nt as y};
//# sourceMappingURL=e3b746a6-nmo5y2rylsnscfq6.js.map