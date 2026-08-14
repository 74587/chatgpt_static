const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-e4mw7e8tzdtn71pt.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-pavwi1l76tjk3nmj.js","assets/2340486e-ntgsg4a2ljrzv0ij.js","assets/conversation-small-cn796qn0nagauuln.js","assets/30901919-cevnf6h9k86pdxht.js","assets/c470f5ab-e16lgc8o5jochpfc.js","assets/0e5afe53-gbm3yy11v6d23g8c.js","assets/conversation-small-beufh8ne.css","assets/8b34dbc2-knte887zhpl3e9y4.js","assets/82782bc9-glpiwmmpdpucu9ld.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{C2 as r,DO as i,EO as a,JH as o,JZ as s,Jv as c,K2 as l,MV as u,MZ as d,Mm as f,NV as p,NZ as m,OO as h,OP as g,S2 as _,TX as v,U2 as y,YZ as b,Yv as x,_2 as S,_s as C,a1 as w,bX as T,fC as E,j2 as D,jO as O,jm as ee,k2 as k,kP as A,nC as j,ny as M,q2 as N,rU as te,t1 as ne,tK as re,ty as ie,uC as P,ua as ae,va as oe,xB as se,yB as F,ys as ce}from"./4813494d-pavwi1l76tjk3nmj.js";import{Xt as le,_n as ue,bn as I,fn as L,gn as R,hn as z,vn as de,xn as fe,yn as B}from"./2340486e-ntgsg4a2ljrzv0ij.js";import{Dl as pe,Dmt as V,Hht as me,LY as he,Ol as H,Qx as ge,Uht as _e,Vht as ve,WY as ye,Zx as be,aK as xe,cK as Se,dIt as U,iK as W,kmt as Ce,lK as we,nK as Te,nnn as Ee,qY as G,rK as De,tK as K,tnn as Oe,uIt as q}from"./conversation-small-cn796qn0nagauuln.js";import{HC as ke,VC as J,aS as Ae,oS as je}from"./30901919-cevnf6h9k86pdxht.js";import{i as Me,n as Ne,t as Pe}from"./8d846022-habmttvqwy4a5siq.js";import{a as Fe,i as Y,o as Ie}from"./91969468-cafrv8zjaujdspsu.js";import{n as Le,t as Re}from"./4d271a7b-nknexulmt69fuv5u.js";import{n as ze,t as Be}from"./de6a4d0c-bpzbdxcaoimgspck.js";import{n as Ve,r as He}from"./58bafdef-88cow1wwrx4oij78.js";import{a as Ue,i as We}from"./e01e2324-hhplor2545nq6iwf.js";import{i as Ge,n as Ke,r as qe,t as Je}from"./cc79834b-hl512paeruork3sq.js";import{i as Ye,t as Xe}from"./5dc32f04-i3kub9nnnumpteix.js";function Ze(){return S(`2779568043`)}function Qe(){return S(`3864712762`)}function $e(){return _(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var et=e((()=>{r()}));function tt({messageId:e,refIndex:t}){return`appblock:${e}:${t}`}var nt=e((()=>{}));function rt({errorSource:e,errorType:t,networkPolicy:n,outcome:r,readySignal:i,surface:a}){let o={network_policy:n,surface:a};return e!=null&&(o.error_source=e),t!=null&&(o.error_type=t),r!=null&&(o.outcome=r),i!=null&&(o.ready_signal=i),o}function it(){return typeof performance<`u`?performance.now():Date.now()}function at(e){return new TextEncoder().encode(e).byteLength/1024}function ot(e){return e instanceof Error?e.name:`unknown`}function st(e,t,n=1){N.count(y.APP_BLOCKS,e,rt(t),n)}function ct(e,t,n){N.hist(y.APP_BLOCKS,e,rt(n),t)}function lt({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,ut.useRef)(it()),a=(0,ut.useRef)(null),o=(0,ut.useRef)(!1),s=(0,ut.useRef)(!1),c=i(()=>{a.current==null||typeof window>`u`||(window.cancelAnimationFrame(a.current),a.current=null)}),l=i((n=e)=>{s.current||(s.current=!0,ct(pt,at(n),t))});return{cancelFirstPaintFrame:c,startRunMetrics:i((e,{deferFirstPaint:i=!1,deferPayloadSize:s=!1}={})=>{let u=it(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;c(),s||l(),st(gt,t);let _=(e,n)=>{f||(f=!0,st(ht,{...t,outcome:e,readySignal:n}))},v=(i,a)=>{if(!e()||p)return;let s=it();ct(mt,s-i,{...t,readySignal:a}),!o.current&&(o.current=!0,ct(dt,s-r.current,t),n!=null&&ct(vt,s-n,t))},y=(e,t)=>{if(c(),typeof window>`u`){v(e,t);return}a.current=window.requestAnimationFrame(()=>{a.current=null,v(e,t)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=it(),g=n,ct(_t,h-u,{...t,readySignal:n}),i||b())},reportFailure:(n,r)=>{e()&&(p=!0,c(),st(ft,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||l(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var ut,dt,ft,pt,mt,ht,gt,_t,vt,yt=e((()=>{l(),a(),ut=n(B()),dt=`app_block.first_render_time_ms`,ft=`app_block.load.failure`,pt=`app_block.payload_size_kb`,mt=`app_block.ready_to_first_paint_ms`,ht=`app_block.render.outcome`,gt=`app_block.render.start`,_t=`app_block.sandbox_eval_to_ready_ms`,vt=`app_block.widget_ref_to_first_paint_ms`}));function bt(e){return e==="default"||e===`open`?e:null}function xt({explicitStyleMode:e,libraryFileId:t}){return e??(t==null?`default`:`open`)}var St=e((()=>{})),Ct,wt=e((()=>{Ct=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main{padding-block-start:12px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),Tt=e((()=>{})),Et,Dt=e((()=>{Tt(),Et=`/cdn/assets/app-block-sandbox-foundation-c11hc9c6.css`})),Ot,kt=e((()=>{Ot=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main{padding-block-start:12px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){--app-block-slider-track:color-mix(in srgb, var(--viz-text) 16%, transparent);--app-block-slider-thumb-shadow:color-mix(in srgb, var(--viz-text) 18%, transparent);appearance:none;background:linear-gradient(var(--app-block-slider-track), var(--app-block-slider-track)) center / 100% 4px no-repeat;cursor:pointer;border:0;border-radius:9999px;width:100%;height:28px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.5}:where(input[type=range])::-webkit-slider-runnable-track{background:0 0;border:0;height:28px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;margin-top:5px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-webkit-slider-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-webkit-slider-thumb{transform:scale(1.06)}:where(input[type=range])::-moz-range-track{background:var(--app-block-slider-track);border:0;border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-progress{background:var(--viz-accent);border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-thumb{border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-moz-range-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-moz-range-thumb{transform:scale(1.06)}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),At=e((()=>{})),jt,Mt=e((()=>{At(),jt=`/cdn/assets/app-block-sandbox-grv3t07f.css`}));function Nt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Pt=e((()=>{}));function Ft(e){return/<!doctype\b|<html[\s>]/i.test(e)}function It(e){let t=e.trim().replaceAll(`_`,`-`);return t.length===0||!/^[A-Za-z0-9-]+$/.test(t)?`en`:t}function Lt(e){if(/^https?:\/\//i.test(e)||typeof window>`u`)return e;let t=window.location.origin;return new URL(e,t).toString()}function Rt(e){try{return new URL(e).origin}catch{return null}}function zt(e){return qt.has(e)?e:`default`}function Bt(e,t){return t===`skybridge`||t===`stage`?e===`dark`?`#212121`:`#ffffff`:e===`dark`?`#000000`:`#fcfcfc`}function Vt(e=[]){let t=Lt(jt),n=Lt(Et),r=[Rt(Wt),Rt(Gt),Rt(t),Rt(n),...Kt,...e.map(Rt)];return Array.from(new Set(r.filter(e=>e!=null)))}function Ht(e,t=`light`,n=`en`,r=`default`,i=`inline`,{loadTailwind:a=!0,platform:o,progressiveStreaming:s=!1,styleMode:c=`default`}={}){let l=e.trim();if(!s&&Ft(l))return{html:l,expectReadySignal:!1};let u=It(n),d=c===`open`?Ct:Ot,f=Lt(c===`open`?Et:jt),p=zt(r),m=Bt(t,i),h=i===`skybridge`&&o!=null&&o!==`web`||i===`inline`&&c===`open`,g=[`color-scheme: ${t};`,h?`background-color: transparent;`:`background-color: var(--main-surface-primary, ${m});`].join(` `);return{expectReadySignal:a,html:`<!doctype html>
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
<\/script>`]))}));function Zt(){"use forget";let e=(0,Qt.useContext)($t);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var Qt,$t,en=e((()=>{Qt=n(B()),$t=(0,Qt.createContext)(null)})),tn,nn=e((()=>{p(),fe(),tn=u(()=>I(()=>import(`./7aa2b76f-e4mw7e8tzdtn71pt.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}));function rn(e){"use forget";let t=(0,cn.c)(38),{additionalResourceDomains:n,children:r,code:i,conversationId:a,source:o,styleMode:s,title:c}=e,l=`app-block:${o.appBlockId}:${(0,ln.useId)()}`,u=(0,ln.useRef)(null),d=o.appBlockId,f=o.libraryFileId,p=o.messageId,h=o.refIndex,g=a??null,_;t[0]!==g||t[1]!==d?(_={appBlockId:d,conversationId:g},t[0]=g,t[1]=d,t[2]=_):_=t[2];let v=_,y=m(K),b;t[3]!==y||t[4]!==v?(b=xe(y,v),t[3]=y,t[4]=v,t[5]=b):b=t[5];let x=b,S=y?.appBlockId===d&&y.conversationId===g&&(y.isOriginalVersion===!0||y.versionNumber!=null),C=x||S,w;t[6]!==y||t[7]!==l||t[8]!==v?(w=Se(y,v,l),t[6]=y,t[7]=l,t[8]=v,t[9]=w):w=t[9];let T=w,E;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(E=()=>{u.current?.focus()},t[10]=E):E=t[10];let D=E,O;t[11]!==d||t[12]!==f||t[13]!==p||t[14]!==h?(O={appBlockId:d,libraryFileId:f,messageId:p,refIndex:h},t[11]=d,t[12]=f,t[13]=p,t[14]=h,t[15]=O):O=t[15];let ee;t[16]!==n||t[17]!==i||t[18]!==s||t[19]!==O||t[20]!==c?(ee={additionalResourceDomains:n,code:i,focusOnClose:D,source:O,styleMode:s,title:c},t[16]=n,t[17]=i,t[18]=s,t[19]=O,t[20]=c,t[21]=ee):ee=t[21];let k=ee,A,j;t[22]!==k||t[23]!==x||t[24]!==v?(A=()=>{x&&we(v,k)},j=[k,x,v],t[22]=k,t[23]=x,t[24]=v,t[25]=A,t[26]=j):(A=t[25],j=t[26]),(0,ln.useEffect)(A,j);let M;t[27]!==k||t[28]!==T||t[29]!==v?(M=()=>{Te(v,T,k)},t[27]=k,t[28]=T,t[29]=v,t[30]=M):M=t[30];let N=M,te;t[31]!==C||t[32]!==S||t[33]!==N?(te={isExpanded:C,isViewingHistoricalVersion:S,openExpandedView:N,triggerRef:u},t[31]=C,t[32]=S,t[33]=N,t[34]=te):te=t[34];let ne=te,re;return t[35]!==r||t[36]!==ne?(re=(0,un.jsx)($t.Provider,{value:ne,children:r}),t[35]=r,t[36]=ne,t[37]=re):re=t[37],re}function an(e){"use forget";let t=(0,cn.c)(2),{collapsedPreview:n,inlinePreview:r}=e,{isExpanded:i}=Zt(),a=i?n:r,o;return t[0]===a?o=t[1]:(o=(0,un.jsx)(un.Fragment,{children:a}),t[0]=a,t[1]=o),o}function on(e){"use forget";let t=(0,cn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,title:o}=e,s=qe(),c;t[0]===i?c=t[1]:(c=()=>i==null?0:pe(i).height$()??0,t[0]=i,t[1]=c);let l=m(c),u=s===`fullscreen`&&n&&i!=null?l:0,d;t[2]===o?d=t[3]:(d=(0,un.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:o}),t[2]=o,t[3]=d);let f;t[4]!==a||t[5]!==d?(f=(0,un.jsxs)(Je.Header,{className:`pb-1`,children:[d,a]}),t[4]=a,t[5]=d,t[6]=f):f=t[6];let p;t[7]===u?p=t[8]:(p={paddingBottom:u},t[7]=u,t[8]=p);let h;t[9]===r?h=t[10]:(h=(0,un.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=h);let g;t[11]!==p||t[12]!==h?(g=(0,un.jsx)(Je.Body,{className:`bg-token-bg-primary overflow-hidden`,style:p,children:h}),t[11]=p,t[12]=h,t[13]=g):g=t[13];let _;return t[14]!==f||t[15]!==g?(_=(0,un.jsxs)(un.Fragment,{children:[f,g]}),t[14]=f,t[15]=g,t[16]=_):_=t[16],_}function sn(e){"use forget";let t=(0,cn.c)(5),{conversation:n,paneId:r}=e,i=Ge(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,un.jsx)(tn,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var cn,ln,un,dn=e((()=>{cn=le(),H(),Ke(),d(),ln=n(B()),en(),W(),nn(),un=de()}));function fn(){"use forget";let e=(0,pn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,mn.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,mn.jsx)(L,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var pn,mn,hn=e((()=>{pn=le(),R(),mn=de()}));function gn(e){return Array.from({length:e},(e,t)=>t)}function _n(e){let t=gn(e);for(let e=t.length-1;e>0;--e){let n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n]??e,t[n]=r??n}return t}function vn({length:e,hasShownInitialPhrase:t}){return{order:_n(e),position:0,hasShownInitialPhrase:t}}function yn(e,t){if(!e.hasShownInitialPhrase)return{...e,hasShownInitialPhrase:!0};let n=e.position+1;return n<e.order.length?{...e,position:n}:vn({length:t,hasShownInitialPhrase:!0})}function bn(e){"use forget";let t=(0,Sn.c)(44),n=ue(),r;t[0]===n?r=t[1]:(r=n.formatMessage(X.shapingLayout),t[0]=n,t[1]=r);let i;t[2]===n?i=t[3]:(i=n.formatMessage(X.wiringControls),t[2]=n,t[3]=i);let a;t[4]===n?a=t[5]:(a=n.formatMessage(X.tuningInputs),t[4]=n,t[5]=a);let o;t[6]===n?o=t[7]:(o=n.formatMessage(X.arrangingResults),t[6]=n,t[7]=o);let s;t[8]===n?s=t[9]:(s=n.formatMessage(X.polishingPanels),t[8]=n,t[9]=s);let c;t[10]===n?c=t[11]:(c=n.formatMessage(X.balancingSpacing),t[10]=n,t[11]=c);let l;t[12]===n?l=t[13]:(l=n.formatMessage(X.sketchingInterface),t[12]=n,t[13]=l);let u;t[14]===n?u=t[15]:(u=n.formatMessage(X.calibratingPreview),t[14]=n,t[15]=u);let d;t[16]===n?d=t[17]:(d=n.formatMessage(X.composingInteractions),t[16]=n,t[17]=d);let f;t[18]===n?f=t[19]:(f=n.formatMessage(X.refiningDetails),t[18]=n,t[19]=f);let p;t[20]===n?p=t[21]:(p=n.formatMessage(X.smoothingEdges),t[20]=n,t[21]=p);let m;t[22]!==r||t[23]!==i||t[24]!==p||t[25]!==a||t[26]!==o||t[27]!==s||t[28]!==c||t[29]!==l||t[30]!==u||t[31]!==d||t[32]!==f?(m=[r,i,a,o,s,c,l,u,d,f,p],t[22]=r,t[23]=i,t[24]=p,t[25]=a,t[26]=o,t[27]=s,t[28]=c,t[29]=l,t[30]=u,t[31]=d,t[32]=f,t[33]=m):m=t[33];let h=m,g;t[34]!==n||t[35]!==e?(g=e?n.formatMessage(X.generatingApp,{title:e}):n.formatMessage(X.creatingApp),t[34]=n,t[35]=e,t[36]=g):g=t[36];let _=g,v;t[37]===Symbol.for(`react.memo_cache_sentinel`)?(v={order:[0],position:0,hasShownInitialPhrase:!1},t[37]=v):v=t[37];let[y,b]=(0,Cn.useState)(v),x,S;t[38]===h.length?(x=t[39],S=t[40]):(x=()=>{b(vn({length:h.length,hasShownInitialPhrase:!1}))},S=[h.length],t[38]=h.length,t[39]=x,t[40]=S),(0,Cn.useEffect)(x,S);let C,w;t[41]===h.length?(C=t[42],w=t[43]):(C=()=>{let e=window.setInterval(()=>{b(e=>yn(e,h.length))},Tn);return()=>{window.clearInterval(e)}},w=[h.length],t[41]=h.length,t[42]=C,t[43]=w),(0,Cn.useEffect)(C,w);let T=y.order[y.position]??0;return y.hasShownInitialPhrase?h[T]??h[0]??``:_}function xn(e){"use forget";let t=(0,Sn.c)(2),{title:n}=e,r=bn(n),i;return t[0]===r?i=t[1]:(i=(0,wn.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full`,role:`status`,children:(0,wn.jsx)(Xe,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:r})}),t[0]=r,t[1]=i),i}var Sn,Cn,wn,Tn,X,En=e((()=>{Sn=le(),Ye(),Cn=n(B()),R(),wn=de(),Tn=2800,X=z({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingApp:{id:`appBlock.loadingState.creatingApp`,defaultMessage:`Creating the app`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},arrangingResults:{id:`appBlock.loadingState.arrangingResults`,defaultMessage:`Arranging the results`},polishingPanels:{id:`appBlock.loadingState.polishingPanels`,defaultMessage:`Polishing the panels`},balancingSpacing:{id:`appBlock.loadingState.balancingSpacing`,defaultMessage:`Balancing the spacing`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`},smoothingEdges:{id:`appBlock.loadingState.smoothingEdges`,defaultMessage:`Smoothing the edges`}})}));function Dn(e){let t=new Map,n=new Map,r=null,i=null;for(let a of e){let e=a.metadata?.content_references;if(Array.isArray(e)&&e.forEach((e,r)=>{let i=kn({contentReference:e,messageId:a.id,refIndex:r});i!=null&&(t.set(i.appBlockId,i),i.libraryFileId!=null&&n.set(i.libraryFileId,i.appBlockId))}),a.author.role===ne.User){(a.metadata?.attachments??[]).forEach((e,r)=>{let i=On({attachment:e,messageId:a.id,refIndex:r});i==null||i.libraryFileId==null||n.has(i.libraryFileId)||(t.set(i.appBlockId,i),n.set(i.libraryFileId,i.appBlockId))});let e=a.metadata?.focused_artifact;if(e!=null){let n=e.type===Bn?t.get(e.artifact_id)??null:null;r=n!=null&&n.messageId===e.source_message_id&&n.refIndex===e.source_ref_index&&(n.libraryFileId==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e.library_file_id}else{let e=a.metadata?.open_in_app_block_view,n=e==null?null:t.get(e.app_block_id)??null;r=e!=null&&n!=null&&n.messageId===e.message_id&&n.refIndex===e.ref_index&&(n.libraryFileId==null||e.library_file_id==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e?.library_file_id??null}}let o=re(a);if(o?.status!==`created`)continue;let s=n.get(o.libraryFileId),c=s==null?null:t.get(s)??null;if(c==null&&o.origin!=null){let e=o.origin.messageId,n=[...t.values()].filter(t=>t.messageId===e);c=n.length===1?n[0]:null}c==null&&s==null&&r!=null&&r.libraryFileId==null&&(i==null||i===o.libraryFileId)&&(c=r),c!=null&&(c.libraryFileId==null&&c.content!=null&&Ln(a)||(n.set(o.libraryFileId,c.appBlockId),t.set(c.appBlockId,{...c,content:null,currentContentFileId:o.newContentFileId,latestPatchMessageId:a.id,libraryFileId:o.libraryFileId,libraryFileVersionNumber:o.newVersionNumber})))}return t}function On({attachment:e,messageId:t,refIndex:n}){return e.library_artifact_type!==Bn||e.library_file_id==null?null:{appBlockId:tt({messageId:t,refIndex:n}),content:null,currentContentFileId:e.id??null,entrypoint:`index.html`,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:e.library_file_id,libraryFileName:e.name,libraryFileVersionNumber:null,mimeType:e.mime_type??null,messageId:t,refIndex:n,styleMode:null,title:e.name.replace(/\.html$/i,``)}}function kn({contentReference:e,messageId:t,refIndex:n}){if(typeof e!=`object`||!e||!(`type`in e)||!(`category`in e)||e.type!==Vn||e.category!==Bn||!(`data`in e))return null;let r=e.data;if(typeof r!=`object`||!r)return null;let i=An(r,`content`),a=An(r,`entrypoint`)??`index.html`,o=Fn(r,a),s=Mn(o,`library_file_id`);return i==null&&s==null?null:{appBlockId:An(r,`app_block_id`)??tt({messageId:t,refIndex:n}),bundleVersion:jn(r,`bundle_version`)??void 0,content:i,currentContentFileId:Mn(o,`current_content_file_id`),entrypoint:a,iconSvg:An(r,`icon_svg`),language:In(),latestPatchMessageId:null,libraryFileId:s,libraryFileName:Mn(o,`library_file_name`),libraryFileVersionNumber:Pn(Nn(o,`library_file_version_number`)),mimeType:Mn(o,`mime_type`),messageId:t,refIndex:n,styleMode:bt(An(r,`style_mode`)),title:An(r,`display_name`)??An(r,`title`)}}function An(e,t){let n=null;return t===`app_block_id`&&`app_block_id`in e&&(n=e.app_block_id),t===`content`&&`content`in e&&(n=e.content),t===`current_content_file_id`&&`current_content_file_id`in e&&(n=e.current_content_file_id),t===`display_name`&&`display_name`in e&&(n=e.display_name),t===`entrypoint`&&`entrypoint`in e&&(n=e.entrypoint),t===`icon_svg`&&`icon_svg`in e&&(n=e.icon_svg),t===`library_file_id`&&`library_file_id`in e&&(n=e.library_file_id),t===`library_file_name`&&`library_file_name`in e&&(n=e.library_file_name),t===`mime_type`&&`mime_type`in e&&(n=e.mime_type),t===`path`&&`path`in e&&(n=e.path),t===`style_mode`&&`style_mode`in e&&(n=e.style_mode),t===`title`&&`title`in e&&(n=e.title),typeof n==`string`&&n.trim()!==``?n:null}function jn(e,t){if(t===`bundle_version`&&`bundle_version`in e){let t=e.bundle_version;if(typeof t==`number`)return t}if(t===`library_file_version_number`&&`library_file_version_number`in e){let t=e.library_file_version_number;if(typeof t==`number`)return t}return null}function Mn(e,t){return typeof e!=`object`||!e?null:An(e,t)}function Nn(e,t){return typeof e!=`object`||!e?null:jn(e,t)}function Pn(...e){for(let t of e)if(t!=null)return t;return null}function Fn(e,t){if(!(`files`in e)||!Array.isArray(e.files))return null;let n=null;for(let r of e.files)if(!(typeof r!=`object`||!r)&&An(r,`library_file_id`)!=null&&(n??=r,An(r,`path`)===t))return r;return n}function In(){return`html`}function Ln(e){let t=e.metadata?.shared_conversation_id;return typeof t==`string`&&t.trim()!==``}function Rn(e,t){return e.appBlockId===t.appBlockId&&e.bundleVersion===t.bundleVersion&&e.content===t.content&&e.currentContentFileId===t.currentContentFileId&&e.entrypoint===t.entrypoint&&e.iconSvg===t.iconSvg&&e.language===t.language&&e.latestPatchMessageId===t.latestPatchMessageId&&e.libraryFileId===t.libraryFileId&&e.libraryFileName===t.libraryFileName&&e.libraryFileVersionNumber===t.libraryFileVersionNumber&&e.mimeType===t.mimeType&&e.messageId===t.messageId&&e.refIndex===t.refIndex&&e.styleMode===t.styleMode&&e.title===t.title}function zn(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e){let e=t.get(n);if(e==null||!Rn(r,e))return!1}return!0}var Bn,Vn,Hn,Un=e((()=>{w(),P(),ce(),he(),T(),nt(),St(),Bn=`app_block`,Vn=`client_defined_widget`,Hn=j(e=>v(()=>Dn(C(e).flatMap(e=>e.messages)),{equals:zn}))}));function Wn({appBlockId:e,conversation:t}){return t==null?null:Hn(t).get(e)??null}function Gn(e){return e?.serverId$()??void 0}function Kn({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:me(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function qn({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let a=new AbortController;return ve({abortSignal:a.signal,fileId:e,serverThreadId:i}).then(e=>{a.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{a.signal.aborted||r({content:null,key:t,status:se(e)?`missing`:`failed`})}),()=>{a.abort()}}function Jn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??Yn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function Yn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var Xn=e((()=>{F(),_e(),Un()})),Zn=t({AppBlock:()=>Qn,AppBlockPreviewLoadingState:()=>gr,AppBlockSandboxPreview:()=>mr});function Qn(e){"use forget";let t=(0,Z.c)(98),{additionalResourceDomains:n,appBlockId:r,authoritativeCode:i,authoritativeSource:a,code:o,collapseWhenSuperseded:s,currentContentFileId:c,displayMode:l,id:u,captureConsoleMessages:d,clientThreadId:f,iconSvg:p,isStreaming:h,libraryFileId:g,libraryFileVersionNumber:_,messageId:v,onConsoleMessagesChange:y,onReadyChange:b,progressiveStreaming:x,ref:S,refIndex:C,styleMode:w,title:T,variant:D,widgetRefSeenAtMs:O}=e,ee=s===void 0||s,k=d!==void 0&&d,A=h!==void 0&&h,j=x!==void 0&&x,M=D===void 0?`inline`:D,N=E(),ne;t[0]===N?ne=t[1]:(ne=()=>N!=null&&Ee(N),t[0]=N,t[1]=ne);let re=m(ne),ie=v!=null&&C!=null?tt({messageId:v,refIndex:C}):void 0,P=r??ie??tt({messageId:v??u,refIndex:C??0}),ae=m(()=>ye({conversation:N??null,instanceId:P,messageId:v,refIndex:C}))??l,se=m(()=>a!=null||ae!=null?null:Wn({appBlockId:P,conversation:N??null})),F=a??se,ce;t[2]===N?ce=t[3]:(ce=()=>Gn(N??null),t[2]=N,t[3]=ce);let le=m(ce),ue=te(N?.id),I=le??ue,L;t[4]!==c||t[5]!==g||t[6]!==_||t[7]!==I||t[8]!==F?(L=Kn({currentContentFileId:c,libraryFileId:g,libraryFileVersionNumber:_,serverThreadId:I,source:F}),t[4]=c,t[5]=g,t[6]=_,t[7]=I,t[8]=F,t[9]=L):L=t[9];let R=L,[z,de]=(0,Q.useState)(null),[fe,B]=(0,Q.useState)(0),pe;t[10]!==fe||t[11]!==R.libraryContentKey?(pe=[R.libraryContentKey,fe],t[10]=fe,t[11]=R.libraryContentKey,t[12]=pe):pe=t[12];let V=pe.join(`\0`),me,he;t[13]!==i||t[14]!==V||t[15]!==R.contentFileId||t[16]!==R.libraryFileId||t[17]!==ae||t[18]!==I?(me=()=>{if(!(i!=null||ae===`collapsed`))return qn({contentFileId:R.contentFileId,libraryContentKey:V,libraryFileId:R.libraryFileId,onContentStateChange:de,serverThreadId:I})},he=[i,R.contentFileId,R.libraryFileId,V,ae,I],t[13]=i,t[14]=V,t[15]=R.contentFileId,t[16]=R.libraryFileId,t[17]=ae,t[18]=I,t[19]=me,t[20]=he):(me=t[19],he=t[20]),(0,Q.useEffect)(me,he);let H=Jn({appBlockId:P,contentFileId:R.contentFileId,currentContentFileId:c,libraryContent:z,libraryContentKey:V,libraryFileId:g,libraryFileVersionNumber:_,source:F}),ge=z?.key===V?z:null,_e;t[21]!==H?.libraryFileId||t[22]!==g?(_e=()=>De(H?.libraryFileId??g),t[21]=H?.libraryFileId,t[22]=g,t[23]=_e):_e=t[23];let be=m(_e),xe=H?.libraryFileVersionNumber??_,Se=(be!=null&&(xe==null||be.versionNumber>=xe)?be.code:void 0)??i??H?.content??o??null,U=H?.iconSvg??p??null,W=H?.libraryFileId??g,Ce=H?.styleMode??w,we;t[24]!==W||t[25]!==Ce?(we=xt({explicitStyleMode:Ce,libraryFileId:W}),t[24]=W,t[25]=Ce,t[26]=we):we=t[26];let G=we,K=H?.title??T,Oe;t[27]===N?Oe=t[28]:(Oe=()=>N!=null&&oe(N)?`work`:`chat`,t[27]=N,t[28]=Oe);let q=m(Oe),ke;t[29]===Symbol.for(`react.memo_cache_sentinel`)?(ke=$e(),t[29]=ke):ke=t[29];let J=ke,Ae=M===`artifact`,je=j&&!Ae,Me=Ae&&G===`open`,Ne=ae===`collapsed`||ae==null&&ee&&H?.latestPatchMessageId!=null&&H.latestPatchMessageId!==v,Pe=o!=null||c!=null,Fe;t[30]!==f||t[31]!==o||t[32]!==N?.id||t[33]!==c||t[34]!==P||t[35]!==_||t[36]!==v||t[37]!==W||t[38]!==G||t[39]!==K||t[40]!==C||t[41]!==I||t[42]!==F?.messageId?(Fe=async e=>{let t=o;if(t==null&&c!=null)try{t=await ve({abortSignal:new AbortController().signal,fileId:c,serverThreadId:I})}catch{return}t!=null&&Te({appBlockId:P,conversationId:N?.id??f??null,isOriginalVersion:!0,versionNumber:_??void 0},`app-block:${P}:original`,{code:t,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:P,libraryFileId:W,messageId:F?.messageId??v,refIndex:C},styleMode:G,title:K})},t[30]=f,t[31]=o,t[32]=N?.id,t[33]=c,t[34]=P,t[35]=_,t[36]=v,t[37]=W,t[38]=G,t[39]=K,t[40]=C,t[41]=I,t[42]=F?.messageId,t[43]=Fe):Fe=t[43],N?.id,F?.messageId;let Y=Fe;if(A&&!je){let e;return t[44]===K?e=t[45]:(e=(0,$.jsx)(xn,{title:K}),t[44]=K,t[45]=e),e}let Ie=re&&o!=null;if(ge?.status===`missing`&&!Ie)return null;if(Ne){let e=Pe?Y:void 0,n;return t[46]!==K||t[47]!==e?(n=(0,$.jsx)(fr,{onView:e,title:K}),t[46]=K,t[47]=e,t[48]=n):n=t[48],n}if(Se==null){if(H?.latestPatchMessageId!=null){let e=N?.id??f,n=ge?.status===`failed`,r;t[49]===B?r=t[50]:(r=()=>B($n),t[49]=B,t[50]=r);let i;return t[51]!==P||t[52]!==Ae||t[53]!==U||t[54]!==K||t[55]!==e||t[56]!==n||t[57]!==r?(i=(0,$.jsx)(rr,{appBlockId:P,conversationId:e,hasFailed:n,iconSvg:U,onRetry:r,showHeader:Ae,title:K}),t[51]=P,t[52]=Ae,t[53]=U,t[54]=K,t[55]=e,t[56]=n,t[57]=r,t[58]=i):i=t[58],i}let e;return t[59]===K?e=t[60]:(e=(0,$.jsx)(xn,{title:K}),t[59]=K,t[60]=e),e}let Le;t[61]!==f||t[62]!==q||t[63]!==v||t[64]!==K||t[65]!==C?(Le=f!=null&&v!=null&&C!=null&&Ze()?{reference:{clientThreadId:f,messageId:v,referenceIndex:C},target:{kind:`app_block`,metadata:{...K==null?{}:{title:K},tab:q}}}:void 0,t[61]=f,t[62]=q,t[63]=v,t[64]=K,t[65]=C,t[66]=Le):Le=t[66];let Re=Le,ze=N?.id??f,Be=F?.messageId??v,Ve;t[67]!==P||t[68]!==W||t[69]!==C||t[70]!==Be?(Ve={appBlockId:P,libraryFileId:W,messageId:Be,refIndex:C},t[67]=P,t[68]=W,t[69]=C,t[70]=Be,t[71]=Ve):Ve=t[71];let He=Me&&J,Ue=N?.id??f,We;t[72]!==n||t[73]!==k||t[74]!==Re||t[75]!==u||t[76]!==A||t[77]!==y||t[78]!==b||t[79]!==Se||t[80]!==U||t[81]!==G||t[82]!==K||t[83]!==S||t[84]!==je||t[85]!==Me||t[86]!==He||t[87]!==Ue||t[88]!==O?(We=(0,$.jsx)(er,{additionalResourceDomains:n,canOpen:He,captureConsoleMessages:k,clientThreadId:Ue,code:Se,feedback:Re,iconSvg:U,id:u,isStreaming:A,onConsoleMessagesChange:y,onReadyChange:b,progressiveStreaming:je,ref:S,showArtifactCard:Me,styleMode:G,title:K,widgetRefSeenAtMs:O}),t[72]=n,t[73]=k,t[74]=Re,t[75]=u,t[76]=A,t[77]=y,t[78]=b,t[79]=Se,t[80]=U,t[81]=G,t[82]=K,t[83]=S,t[84]=je,t[85]=Me,t[86]=He,t[87]=Ue,t[88]=O,t[89]=We):We=t[89];let Ge;return t[90]!==n||t[91]!==Se||t[92]!==G||t[93]!==K||t[94]!==ze||t[95]!==Ve||t[96]!==We?(Ge=(0,$.jsx)(rn,{additionalResourceDomains:n,code:Se,conversationId:ze,styleMode:G,source:Ve,title:K,children:We}),t[90]=n,t[91]=Se,t[92]=G,t[93]=K,t[94]=ze,t[95]=Ve,t[96]=We,t[97]=Ge):Ge=t[97],Ge}function $n(e){return e+1}function er(e){"use forget";let t=(0,Z.c)(32),{additionalResourceDomains:n,canOpen:r,captureConsoleMessages:i,clientThreadId:a,code:o,feedback:s,iconSvg:c,id:l,isStreaming:u,onConsoleMessagesChange:d,onReadyChange:f,progressiveStreaming:p,ref:m,showArtifactCard:h,styleMode:g,title:_,widgetRefSeenAtMs:v}=e,{isViewingHistoricalVersion:y,openExpandedView:b,triggerRef:x}=Zt(),S;t[0]===b?S=t[1]:(S=()=>{q(),b()},t[0]=b,t[1]=S);let C=S,w=y?C:void 0,T;t[2]!==c||t[3]!==w||t[4]!==_||t[5]!==x?(T=(0,$.jsx)(or,{iconSvg:c,onOpen:w,openButtonRef:x,title:_}),t[2]=c,t[3]=w,t[4]=_,t[5]=x,t[6]=T):T=t[6];let E;t[7]!==n||t[8]!==i||t[9]!==a||t[10]!==o||t[11]!==l||t[12]!==u||t[13]!==d||t[14]!==f||t[15]!==p||t[16]!==m||t[17]!==g||t[18]!==v?(E=(0,$.jsx)(mr,{additionalResourceDomains:n,code:o,id:l,isStreaming:u,captureConsoleMessages:i,clientThreadId:a,onConsoleMessagesChange:d,onReadyChange:f,progressiveStreaming:p,ref:m,styleMode:g,widgetRefSeenAtMs:v}),t[7]=n,t[8]=i,t[9]=a,t[10]=o,t[11]=l,t[12]=u,t[13]=d,t[14]=f,t[15]=p,t[16]=m,t[17]=g,t[18]=v,t[19]=E):E=t[19];let D;t[20]!==r||t[21]!==s||t[22]!==C||t[23]!==c||t[24]!==h||t[25]!==E||t[26]!==_||t[27]!==x?(D=(0,$.jsx)(nr,{canOpen:r,expandButtonRef:x,feedback:s,iconSvg:c,showArtifactCard:h,title:_,onOpen:C,children:E}),t[20]=r,t[21]=s,t[22]=C,t[23]=c,t[24]=h,t[25]=E,t[26]=_,t[27]=x,t[28]=D):D=t[28];let O;return t[29]!==T||t[30]!==D?(O=(0,$.jsx)(an,{collapsedPreview:T,inlinePreview:D}),t[29]=T,t[30]=D,t[31]=O):O=t[31],O}function tr(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:o,titleClassName:c}=e,l;t[0]===r?l=t[1]:(l=s(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=l);let u=c??`truncate text-base font-semibold`,d;t[2]===u?d=t[3]:(d=s(`text-token-text-primary`,u),t[2]=u,t[3]=d);let f=o??i,p;t[4]!==d||t[5]!==f?(p=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:d,children:f})}),t[4]=d,t[5]=f,t[6]=p):p=t[6];let m;t[7]!==a||t[8]!==p?(m=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,p]}),t[7]=a,t[8]=p,t[9]=m):m=t[9];let h;return t[10]!==n||t[11]!==l||t[12]!==m?(h=(0,$.jsxs)(`div`,{className:l,children:[m,n]}),t[10]=n,t[11]=l,t[12]=m,t[13]=h):h=t[13],h}function nr(e){"use forget";let t=(0,Z.c)(16),{canOpen:n,children:r,expandButtonRef:i,feedback:a,iconSvg:o,onOpen:s,showArtifactCard:c,title:l}=e,u=ue(),d;t[0]===u?d=t[1]:(d=u.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=u,t[1]=d);let f=d,p;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==f||t[6]!==o||t[7]!==s||t[8]!==c||t[9]!==l?(p=c?(0,$.jsxs)(`div`,{className:`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)(tr,{action:n&&s!=null?(0,$.jsx)(pr,{ref:i,className:`shrink-0`,onClick:s}):void 0,className:`px-4 py-2`,fallbackTitle:f,leading:(0,$.jsx)(cr,{iconSvg:o}),title:l}),(0,$.jsx)(`div`,{children:r})]}):r,t[2]=n,t[3]=r,t[4]=i,t[5]=f,t[6]=o,t[7]=s,t[8]=c,t[9]=l,t[10]=p):p=t[10];let m;t[11]===a?m=t[12]:(m=a==null?null:(0,$.jsx)(ir,{...a}),t[11]=a,t[12]=m);let h;return t[13]!==p||t[14]!==m?(h=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[p,m]}),t[13]=p,t[14]=m,t[15]=h):h=t[15],h}function rr(e){"use forget";let t=(0,Z.c)(17),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:o,showHeader:s,title:c}=e,l=m(K),u=ue(),d;t[0]===u?d=t[1]:(d=u.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=u,t[1]=d);let f=d;if(xe(l,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==c?(e=(0,$.jsx)(or,{iconSvg:a,title:c}),t[2]=a,t[3]=c,t[4]=e):e=t[4],e}let p;t[5]!==f||t[6]!==a||t[7]!==s||t[8]!==c?(p=s?(0,$.jsx)(tr,{className:`mb-2`,fallbackTitle:f,leading:(0,$.jsx)(cr,{iconSvg:a}),title:c}):null,t[5]=f,t[6]=a,t[7]=s,t[8]=c,t[9]=p):p=t[9];let h;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(h={minHeight:vr},t[10]=h):h=t[10];let g;t[11]!==i||t[12]!==o?(g=(0,$.jsx)(`div`,{className:`relative w-full`,style:h,children:i?(0,$.jsx)(_r,{onRetry:o}):(0,$.jsx)(gr,{})}),t[11]=i,t[12]=o,t[13]=g):g=t[13];let _;return t[14]!==p||t[15]!==g?(_=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[p,g]}),t[14]=p,t[15]=g,t[16]=_):_=t[16],_}function ir(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(m(ar))return null;let o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(be,{}),t[0]=o):o=t[0];let s;return t[1]!==i||t[2]!==n||t[3]!==r?(s=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)(We,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:o})}),t[1]=i,t[2]=n,t[3]=r,t[4]=s):s=t[4],s}function ar(){return He()}function or(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=ue(),s,l,u,d,f;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(l=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),f=`not-prose relative clear-both my-4 w-full max-w-full`,d=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=tr,u=r==null?void 0:(0,$.jsx)(c,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??l}),onClick:r,type:`button`,children:(0,$.jsx)(L,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=l,t[6]=u,t[7]=d,t[8]=f):(s=t[4],l=t[5],u=t[6],d=t[7],f=t[8]);let p;t[9]===n?p=t[10]:(p=(0,$.jsx)(sr,{iconSvg:n}),t[9]=n,t[10]=p);let m;t[11]!==s||t[12]!==l||t[13]!==u||t[14]!==p||t[15]!==a?(m=(0,$.jsx)(s,{action:u,className:`w-full`,fallbackTitle:l,leading:p,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=l,t[13]=u,t[14]=p,t[15]=a,t[16]=m):m=t[16];let h;t[17]!==d||t[18]!==m?(h=(0,$.jsx)(`div`,{className:d,children:m}),t[17]=d,t[18]=m,t[19]=h):h=t[19];let g;return t[20]!==f||t[21]!==h?(g=(0,$.jsx)(`div`,{className:f,children:h}),t[20]=f,t[21]=h,t[22]=g):g=t[22],g}function sr(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(cr,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function cr(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=lr(r),t[0]=r,t[1]=a);let o=a,c;return t[2]!==i||t[3]!==o?(c=o==null?(0,$.jsx)(J,{"aria-hidden":`true`,className:s(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:s(`icon-md shrink-0`,i),children:(0,$.jsx)(V,{svgString:o,className:`h-full w-full`})}),t[2]=i,t[3]=o,t[4]=c):c=t[4],c}function lr(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>Tr||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Er)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Or.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!ur(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function ur(e){let t=e.replace(Dr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Dr)){let e=t[1],n=t[2];if(!kr.has(e)||!dr(e,n))return!1}return!0}function dr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function fr(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=ue(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(L,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(L,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(L,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function pr(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:i}=e,a=ue(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let s=o,l;t[2]===r?l=t[3]:(l=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=l);let u;t[4]!==s||t[5]!==i||t[6]!==l?(u=(0,$.jsx)(c,{ref:i,type:`button`,icon:Ae,color:`ghost`,size:`medium`,label:s,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:l}),t[4]=s,t[5]=i,t[6]=l,t[7]=u):u=t[7];let d;return t[8]!==n||t[9]!==s||t[10]!==u?(d=(0,$.jsx)(ee,{label:s,className:n,children:u}),t[8]=n,t[9]=s,t[10]=u,t[11]=d):d=t[11],d}function mr(e){"use forget";let t=(0,Z.c)(122),{additionalResourceDomains:n,clientThreadId:r,code:a,id:o,captureConsoleMessages:c,isStreaming:l,onConsoleMessagesChange:u,onReadyChange:d,progressiveStreaming:f,ref:p,styleMode:h,surface:_,widgetRefSeenAtMs:v}=e,y=l!==void 0&&l,b=f!==void 0&&f,x=h===void 0?`default`:h,S=_===void 0?`inline`:_,C=ue(),w=(0,Q.useRef)(null),T=(0,Q.useRef)(!1),E=(0,Q.useRef)(!1),ee=(0,Q.useRef)(null),k=(0,Q.useRef)(null),A=(0,Q.useRef)(null),j=(0,Q.useRef)(null),M=(0,Q.useRef)(0),N=(0,Q.useRef)(null),te=(0,Q.useRef)(null),ne;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(ne=[],t[0]=ne):ne=t[0];let re=(0,Q.useRef)(ne),ie=O(),P=m(g),{allowDependencyNetworkRequestsWithoutCanvasAccess:ae}=(0,Q.useContext)(Be),oe=Fe()||ae,se=Ie(r)&&!ae,F=ie?`dark`:`light`,ce=C.locale,le;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(le={status:`streaming`},t[1]=le):le=t[1];let[I,L]=(0,Q.useState)(le),R=I.status===`finalized`&&I.html!==a,z=b&&S===`inline`&&I.status!==`static`&&!R,de=se?`network-enabled`:`network-disabled`,fe=z?`progressive-app-block-stream`:a,B;t[2]===n?B=t[3]:(B=n??[],t[2]=n,t[3]=B);let pe;t[4]!==P||t[5]!==ce||t[6]!==x||t[7]!==S||t[8]!==de||t[9]!==fe||t[10]!==B||t[11]!==F?(pe=[F,P,S,x,ce,de,fe,...B],t[4]=P,t[5]=ce,t[6]=x,t[7]=S,t[8]=de,t[9]=fe,t[10]=B,t[11]=F,t[12]=pe):pe=t[12];let V=pe.join(`\0`),me;t[13]===n?me=t[14]:(me=Vt(n),t[13]=n,t[14]=me);let he=me,H=se?`deps_only`:`disabled`,ge;t[15]!==S||t[16]!==H?(ge={networkPolicy:H,surface:S},t[15]=S,t[16]=H,t[17]=ge):ge=t[17];let _e=ge,[ve,ye]=(0,Q.useState)(0),[be,xe]=(0,Q.useState)(null),Se=be?.signature===V?be.status:null,U=Se===`ready`,W=Se===`failed`,Ce;t[18]!==a||t[19]!==_e||t[20]!==v?(Ce={content:a,metricTags:_e,widgetRefSeenAtMs:v},t[18]=a,t[19]=_e,t[20]=v,t[21]=Ce):Ce=t[21];let{cancelFirstPaintFrame:we,startRunMetrics:Te}=lt(Ce),Ee,G;t[22]!==U||t[23]!==d?(Ee=()=>{d?.(U)},G=[U,d],t[22]=U,t[23]=d,t[24]=Ee,t[25]=G):(Ee=t[24],G=t[25]),(0,Q.useEffect)(Ee,G);let De,K;t[26]===Symbol.for(`react.memo_cache_sentinel`)?(De=()=>({clearCapturedConsoleMessages:()=>{re.current=[]},captureScreenshotDataUrl:async()=>(await w.current?.screenshot())?.imageBase64??null,focus:()=>{w.current?.focus()}}),K=[],t[26]=De,t[27]=K):(De=t[26],K=t[27]),(0,Q.useImperativeHandle)(p,De,K);let Oe;t[28]===Symbol.for(`react.memo_cache_sentinel`)?(Oe=()=>{N.current!=null&&(window.clearTimeout(N.current),N.current=null)},t[28]=Oe):Oe=t[28];let q=i(Oe),ke;t[29]===Symbol.for(`react.memo_cache_sentinel`)?(ke=()=>{te.current!=null&&(window.clearTimeout(te.current),te.current=null)},t[29]=ke):ke=t[29];let J=i(ke),Ae;t[30]!==U||t[31]!==d||t[32]!==V||t[33]!==z?(Ae=()=>{if(!z||!U)return;let e=k.current,t=w.current;if(e==null||t?.updateAppBlockStream==null||E.current)return;let n=M.current;k.current=null,ee.current=it(),e.isFinal&&(E.current=!0);let r=()=>M.current===n?t.updateAppBlockStream?.(e)??Promise.resolve():Promise.resolve(),i=j.current,a=i==null?r():i.then(r);j.current=a,a.then(()=>{j.current===a&&(j.current=null),M.current===n&&(e.html.trim()!==``&&A.current?.markFirstPaint(),e.isFinal&&(A.current?.reportPayloadSize(e.html),L({status:`finalized`,html:e.html})))},e=>{j.current===a&&(j.current=null),M.current===n&&(e instanceof DOMException&&e.name===`AbortError`||(xe({signature:V,status:`failed`}),d?.(!1,`failure`)))})},t[30]=U,t[31]=d,t[32]=V,t[33]=z,t[34]=Ae):Ae=t[34];let je=i(Ae),Me;t[35]!==P||t[36]!==c||t[37]!==q||t[38]!==J||t[39]!==a||t[40]!==oe||t[41]!==se||t[42]!==R||t[43]!==y||t[44]!==ce||t[45]!==u||t[46]!==d||t[47]!==V||t[48]!==z||t[49]!==Te||t[50]!==x||t[51]!==S||t[52]!==F?(Me=()=>{if(!oe)return;R&&L({status:`static`});let e=z&&w.current?.updateAppBlockStream!=null;if(z&&!e){y||L({status:`static`});return}T.current=!0,E.current=!1,ee.current=null,k.current=null,A.current=null,j.current=null,J(),M.current+=1;let t=M.current;q(),xe(null);let{expectReadySignal:n,html:r}=Ht(a,F,ce,P,S,{loadTailwind:se,progressiveStreaming:e,styleMode:x}),i=!1,o=!1,s=!1,l=!1,f=()=>M.current===t,p=Te(f,{deferFirstPaint:e,deferPayloadSize:e});e&&(A.current=p);let m=e=>{!c||u==null||!f()||(re.current=e,!s&&(s=!0,D.postTask(()=>{s=!1,f()&&u(re.current)},{priority:`background`})))},h=e=>{!f()||i||o||(i=!0,q(),p.markReady(e),!l&&(l=!0,D.postTask(()=>{l=!1,!(!f()||o)&&xe({signature:V,status:`ready`})},{priority:`background`})))},g=(e,t)=>{!f()||i||o||(o=!0,q(),xe({signature:V,status:`failed`}),p.reportFailure(e,t),D.postTask(()=>{f()&&d?.(!1,`failure`)},{priority:`background`}))};re.current=[],m([]),N.current=window.setTimeout(()=>{g(`sandbox_eval`,`ready_timeout`)},xr),(async()=>{let e=w.current?.evalAsync({code:r,expectReadySignal:n,language:`html`});if(e==null){g(`sandbox_eval`,`missing_generator`);return}for(;;){let t=await e.next();if(t.done){f()&&!i&&g(`sandbox_eval`,`generator_completed_without_ready`);break}f()&&(m([...re.current,t.value]),t.value.type===Ne.ENVIRONMENT_STATUS&&t.value.status===Pe.RUNNING_CODE&&h(`running_code`),t.value.type===Ne.RUN_COMPLETE&&(t.value.wasFatalError?g(`runtime`,`fatal_runtime_error`):(h(`run_complete`),p.reportSuccess(`run_complete`))),await D.yield())}})().catch(e=>{f()&&(e instanceof DOMException&&e.name===`AbortError`||g(`sandbox_eval`,ot(e)))})},t[35]=P,t[36]=c,t[37]=q,t[38]=J,t[39]=a,t[40]=oe,t[41]=se,t[42]=R,t[43]=y,t[44]=ce,t[45]=u,t[46]=d,t[47]=V,t[48]=z,t[49]=Te,t[50]=x,t[51]=S,t[52]=F,t[53]=Me):Me=t[53];let Y=i(Me),Re;t[54]!==q||t[55]!==J?(Re=()=>{M.current+=1,T.current=!1,E.current=!1,k.current=null,A.current=null,j.current=null,q(),J(),xe(null),ye(hr)},t[54]=q,t[55]=J,t[56]=Re):Re=t[56];let ze=i(Re),Ve;t[57]===S?Ve=t[58]:(Ve=S===`inline`?{margin:-4,width:`calc(100% + ${br*2}px)`}:void 0,t[57]=S,t[58]=Ve);let He=Ve,Ue;t[59]!==we||t[60]!==q||t[61]!==J||t[62]!==Y?(Ue=()=>{Y();let e=w.current;return()=>{M.current+=1,A.current=null,j.current=null,q(),J(),we(),e?.stop()}},t[59]=we,t[60]=q,t[61]=J,t[62]=Y,t[63]=Ue):Ue=t[63];let We;t[64]!==we||t[65]!==q||t[66]!==J||t[67]!==oe||t[68]!==V||t[69]!==Y||t[70]!==ve?(We=[we,q,J,oe,V,Y,ve],t[64]=we,t[65]=q,t[66]=J,t[67]=oe,t[68]=V,t[69]=Y,t[70]=ve,t[71]=We):We=t[71],(0,Q.useEffect)(Ue,We);let Ge,Ke;t[72]!==y||t[73]!==Y||t[74]!==z?(Ge=()=>{!z||y||T.current||w.current?.updateAppBlockStream!=null||Y()},Ke=[y,Y,z],t[72]=y,t[73]=Y,t[74]=z,t[75]=Ge,t[76]=Ke):(Ge=t[75],Ke=t[76]),(0,Q.useEffect)(Ge,Ke);let qe,Je;if(t[77]!==J||t[78]!==a||t[79]!==je||t[80]!==W||t[81]!==U||t[82]!==y||t[83]!==z?(qe=()=>{if(!z||!U||W||E.current||w.current?.updateAppBlockStream==null)return;if(k.current={html:a,isFinal:!y},!y){J(),je();return}let e=ee.current;if(e==null){je();return}let t=it()-e;if(t>=Sr){je();return}return te.current=window.setTimeout(()=>{te.current=null,je()},Sr-t),J},Je=[J,a,je,W,U,y,z],t[77]=J,t[78]=a,t[79]=je,t[80]=W,t[81]=U,t[82]=y,t[83]=z,t[84]=qe,t[85]=Je):(qe=t[84],Je=t[85]),(0,Q.useEffect)(qe,Je),!oe){let e;return t[86]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(fn,{}),t[86]=e):e=t[86],e}let Ye=S===`inline`&&`min-h-[120px] overflow-visible`,Xe=S===`stage`&&`h-full min-h-0`,Ze;t[87]!==Ye||t[88]!==Xe?(Ze=s(`flex w-full`,Ye,Xe),t[87]=Ye,t[88]=Xe,t[89]=Ze):Ze=t[89];let Qe=S===`inline`?`flex-none`:`w-full`,$e;t[90]===Qe?$e=t[91]:($e=s(`relative min-w-0`,Qe),t[90]=Qe,t[91]=$e);let et=`${ve}:${se?`network-enabled`:`network-disabled`}`,tt;t[92]===C?tt=t[93]:(tt=C.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[92]=C,t[93]=tt);let nt=se?`deps-only`:`none`,rt=se?Cr:wr,at=U?0:-1,st=S===`inline`&&x===`open`,ct=S!==`stage`,ut=z?yr:vr,dt;t[94]!==o||t[95]!==Y||t[96]!==he||t[97]!==et||t[98]!==tt||t[99]!==nt||t[100]!==rt||t[101]!==at||t[102]!==st||t[103]!==ct||t[104]!==ut?(dt=(0,$.jsx)(Le,{id:o,title:tt,visuallyHidden:!1,networkPolicy:nt,additionalResourceDomains:he,sandboxPermissions:rt,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:at,onRetryCodeRun:Y,transparentBackground:st,useIntrinsicHeight:ct,intrinsicHeightFallback:ut,ref:w},et),t[94]=o,t[95]=Y,t[96]=he,t[97]=et,t[98]=tt,t[99]=nt,t[100]=rt,t[101]=at,t[102]=st,t[103]=ct,t[104]=ut,t[105]=dt):dt=t[105];let ft;t[106]!==W||t[107]!==U||t[108]!==z?(ft=!U&&!W&&!z?(0,$.jsx)(gr,{}):null,t[106]=W,t[107]=U,t[108]=z,t[109]=ft):ft=t[109];let pt;t[110]!==W||t[111]!==ze?(pt=W?(0,$.jsx)(_r,{onRetry:ze}):null,t[110]=W,t[111]=ze,t[112]=pt):pt=t[112];let mt;t[113]!==He||t[114]!==$e||t[115]!==dt||t[116]!==ft||t[117]!==pt?(mt=(0,$.jsxs)(`div`,{className:$e,style:He,children:[dt,ft,pt]}),t[113]=He,t[114]=$e,t[115]=dt,t[116]=ft,t[117]=pt,t[118]=mt):mt=t[118];let ht;return t[119]!==Ze||t[120]!==mt?(ht=(0,$.jsx)(`div`,{className:Ze,children:mt}),t[119]=Ze,t[120]=mt,t[121]=ht):ht=t[121],ht}function hr(e){return e+1}function gr(){"use forget";let e=(0,Z.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsx)(ie,{className:`icon-sm text-token-text-tertiary`}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex items-center justify-center gap-2 text-sm`,role:`status`,children:[t,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:(0,$.jsx)(L,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})})]}),e[1]=n):n=e[1],n}function _r(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(L,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(L,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(c,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar=e((()=>{Z=le(),x(),Ve(),ze(),ge(),M(),A(),Re(),f(),ke(),je(),U(),Y(),P(),Oe(),k(),d(),o(),Ce(),ae(),h(),a(),Ue(),_e(),Me(),b(),Q=n(B()),R(),Xt(),yt(),et(),dn(),W(),hn(),en(),En(),nt(),G(),St(),Xn(),$=de(),vr=432,yr=120,br=4,xr=15e3,Sr=100,Cr=`allow-scripts allow-same-origin allow-forms`,wr=`allow-scripts allow-same-origin`,Tr=12e3,Er=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Dr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Or=new Set([`svg`,`path`]),kr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`])}));export{Qe as S,yt as _,Ar as a,et as b,Hn as c,sn as d,dn as f,it as g,xt as h,Zn as i,Un as l,bt as m,gr as n,Wn as o,St as p,mr as r,Xn as s,Qn as t,on as u,tt as v,$e as x,nt as y};
//# sourceMappingURL=e3b746a6-n801qu34k69eu6vb.js.map