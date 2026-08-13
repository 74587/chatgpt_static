const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/7aa2b76f-e1pggqy7gvemiwcr.js","assets/f025431a-ehagpvg3m4e1cduv.js","assets/4813494d-mc7z398z65dcvd8t.js","assets/2340486e-ntgsg4a2ljrzv0ij.js","assets/conversation-small-e7kwpwo98artv7h4.js","assets/30901919-c1hl19eltx931pxs.js","assets/c470f5ab-j7xifzjo3gtezr4k.js","assets/0e5afe53-lu2n8ulqy4z0ujii.js","assets/conversation-small-etrq4d3v.css","assets/8b34dbc2-npc0xvd99l3wmofl.js","assets/82782bc9-gd1x7hzdjxgmu3w9.js"])))=>i.map(i=>d[i]);
import{n as e,r as t,s as n}from"./f025431a-ehagpvg3m4e1cduv.js";import{AO as r,DX as i,EB as a,FO as o,FZ as s,G2 as c,IV as l,J2 as u,Jv as d,LV as f,MO as p,MP as m,Mm as h,N2 as g,PZ as _,SX as v,T2 as y,XZ as b,Y2 as x,Yv as S,ZH as C,ZZ as w,_s as T,gC as E,j2 as ee,jO as D,jP as te,jm as O,mC as k,ny as A,oU as j,r1 as ne,rK as M,s1 as re,sC as ie,ty as ae,ua as N,va as oe,w2 as P,wB as se,y2 as F,ys as ce}from"./4813494d-mc7z398z65dcvd8t.js";import{Xt as le,_n as ue,bn as de,fn as I,gn as L,hn as R,vn as fe,xn as pe,yn as z}from"./2340486e-ntgsg4a2ljrzv0ij.js";import{$G as me,DIt as B,Dl as he,EIt as ge,Emt as V,Ol as _e,QG as ve,RY as ye,VY as be,XG as xe,YG as Se,ZG as Ce,agt as H,cS as U,igt as W,inn as we,jY as Te,lS as Ee,nK as G,rK as K,rgt as De,rnn as Oe,wmt as q}from"./conversation-small-e7kwpwo98artv7h4.js";import{$x as ke,LC as J,Qx as Ae,RC as je}from"./30901919-c1hl19eltx931pxs.js";import{i as Me,n as Ne,t as Pe}from"./8d846022-habmttvqwy4a5siq.js";import{a as Fe,i as Y,o as Ie}from"./91969468-lzhg3vk1efigdrh3.js";import{n as Le,t as Re}from"./4d271a7b-erizizivjc2abfkv.js";import{n as ze,t as Be}from"./de6a4d0c-bpzbdxcaoimgspck.js";import{n as Ve,r as He}from"./58bafdef-kn7ceqnxsn1hvfpa.js";import{a as Ue,i as We}from"./e01e2324-lhrdzdu8m5yhcv97.js";import{i as Ge,n as Ke,r as qe,t as Je}from"./cc79834b-dgxa7jhqoasawola.js";import{i as Ye,t as Xe}from"./5dc32f04-dj2ehjpn1yet00ut.js";function Ze(){return F(`2779568043`)}function Qe(){return F(`3864712762`)}function $e(){return P(`522383056`,{disableExposureLog:!0}).get(`app_block_library_editing`,!1)}var et=e((()=>{y()}));function tt({messageId:e,refIndex:t}){return`appblock:${e}:${t}`}var nt=e((()=>{}));function rt({errorSource:e,errorType:t,networkPolicy:n,outcome:r,readySignal:i,surface:a}){let o={network_policy:n,surface:a};return e!=null&&(o.error_source=e),t!=null&&(o.error_type=t),r!=null&&(o.outcome=r),i!=null&&(o.ready_signal=i),o}function it(){return typeof performance<`u`?performance.now():Date.now()}function at(e){return new TextEncoder().encode(e).byteLength/1024}function ot(e){return e instanceof Error?e.name:`unknown`}function st(e,t,n=1){x.count(c.APP_BLOCKS,e,rt(t),n)}function ct(e,t,n){x.hist(c.APP_BLOCKS,e,rt(n),t)}function lt({content:e,metricTags:t,widgetRefSeenAtMs:n}){let r=(0,ut.useRef)(it()),i=(0,ut.useRef)(null),a=(0,ut.useRef)(!1),o=(0,ut.useRef)(!1),s=D(()=>{i.current==null||typeof window>`u`||(window.cancelAnimationFrame(i.current),i.current=null)}),c=D((n=e)=>{o.current||(o.current=!0,ct(pt,at(n),t))});return{cancelFirstPaintFrame:s,startRunMetrics:D((e,{deferFirstPaint:o=!1,deferPayloadSize:l=!1}={})=>{let u=it(),d=!1,f=!1,p=!1,m=!1,h=null,g=null;s(),l||c(),st(gt,t);let _=(e,n)=>{f||(f=!0,st(ht,{...t,outcome:e,readySignal:n}))},v=(i,o)=>{if(!e()||p)return;let s=it();ct(mt,s-i,{...t,readySignal:o}),!a.current&&(a.current=!0,ct(dt,s-r.current,t),n!=null&&ct(vt,s-n,t))},y=(e,t)=>{if(s(),typeof window>`u`){v(e,t);return}i.current=window.requestAnimationFrame(()=>{i.current=null,v(e,t)})},b=()=>{!e()||p||m||h==null||g==null||(m=!0,y(h,g))};return{markFirstPaint:b,markReady:n=>{!e()||d||(d=!0,h=it(),g=n,ct(_t,h-u,{...t,readySignal:n}),o||b())},reportFailure:(n,r)=>{e()&&(p=!0,s(),st(ft,{...t,errorSource:n,errorType:r}),_(`failure`))},reportPayloadSize:t=>{!e()||p||c(t)},reportSuccess:t=>{e()&&_(`success`,t)}}})}}var ut,dt,ft,pt,mt,ht,gt,_t,vt,yt=e((()=>{u(),r(),ut=n(z()),dt=`app_block.first_render_time_ms`,ft=`app_block.load.failure`,pt=`app_block.payload_size_kb`,mt=`app_block.ready_to_first_paint_ms`,ht=`app_block.render.outcome`,gt=`app_block.render.start`,_t=`app_block.sandbox_eval_to_ready_ms`,vt=`app_block.widget_ref_to_first_paint_ms`}));function bt(e){return e==="default"||e===`open`?e:null}function xt({explicitStyleMode:e,libraryFileId:t}){return e??(t==null?`default`:`open`)}var St=e((()=>{})),Ct,wt=e((()=>{Ct=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main{padding-block-start:12px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`})),Tt=e((()=>{})),Et,Dt=e((()=>{Tt(),Et=`/cdn/assets/app-block-sandbox-foundation-c11hc9c6.css`})),Ot,kt=e((()=>{Ot=`:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main{padding-block-start:12px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){--app-block-slider-track:color-mix(in srgb, var(--viz-text) 16%, transparent);--app-block-slider-thumb-shadow:color-mix(in srgb, var(--viz-text) 18%, transparent);appearance:none;background:linear-gradient(var(--app-block-slider-track), var(--app-block-slider-track)) center / 100% 4px no-repeat;cursor:pointer;border:0;border-radius:9999px;width:100%;height:28px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.5}:where(input[type=range])::-webkit-slider-runnable-track{background:0 0;border:0;height:28px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;margin-top:5px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-webkit-slider-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-webkit-slider-thumb{transform:scale(1.06)}:where(input[type=range])::-moz-range-track{background:var(--app-block-slider-track);border:0;border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-progress{background:var(--viz-accent);border-radius:9999px;height:4px}:where(input[type=range])::-moz-range-thumb{border:3px solid var(--viz-accent);background:var(--main-surface-primary);width:18px;height:18px;box-shadow:0 1px 2px var(--app-block-slider-thumb-shadow);border-radius:9999px;transition:border-color .12s,transform .12s}:where(input[type=range]:is(:hover,:focus-visible))::-moz-range-thumb{border-color:var(--viz-accent)}:where(input[type=range]:active)::-moz-range-thumb{transform:scale(1.06)}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`})),At=e((()=>{})),jt,Mt=e((()=>{At(),jt=`/cdn/assets/app-block-sandbox-grv3t07f.css`}));function Nt(e,t){return t||=e.slice(0),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var Pt=e((()=>{}));function Ft(e){return/<!doctype\b|<html[\s>]/i.test(e)}function It(e){let t=e.trim().replaceAll(`_`,`-`);return t.length===0||!/^[A-Za-z0-9-]+$/.test(t)?`en`:t}function Lt(e){if(/^https?:\/\//i.test(e)||typeof window>`u`)return e;let t=window.location.origin;return new URL(e,t).toString()}function Rt(e){try{return new URL(e).origin}catch{return null}}function zt(e){return qt.has(e)?e:`default`}function Bt(e,t){return t===`skybridge`||t===`stage`?e===`dark`?`#212121`:`#ffffff`:e===`dark`?`#000000`:`#fcfcfc`}function Vt(e=[]){let t=Lt(jt),n=Lt(Et),r=[Rt(Wt),Rt(Gt),Rt(t),Rt(n),...Kt,...e.map(Rt)];return Array.from(new Set(r.filter(e=>e!=null)))}function Ht(e,t=`light`,n=`en`,r=`default`,i=`inline`,{loadTailwind:a=!0,platform:o,progressiveStreaming:s=!1,styleMode:c=`default`}={}){let l=e.trim();if(!s&&Ft(l))return{html:l,expectReadySignal:!1};let u=It(n),d=c===`open`?Ct:Ot,f=Lt(c===`open`?Et:jt),p=zt(r),m=Bt(t,i),h=i===`skybridge`&&o!=null&&o!==`web`||i===`inline`&&c===`open`,g=[`color-scheme: ${t};`,h?`background-color: transparent;`:`background-color: var(--main-surface-primary, ${m});`].join(` `);return{expectReadySignal:a,html:`<!doctype html>
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
<\/script>`]))}));function Zt(){"use forget";let e=(0,Qt.useContext)($t);if(e==null)throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);return e}var Qt,$t,en=e((()=>{Qt=n(z()),$t=(0,Qt.createContext)(null)})),tn,nn=e((()=>{f(),pe(),tn=l(()=>de(()=>import(`./7aa2b76f-e1pggqy7gvemiwcr.js`).then(e=>e.AppBlockFullscreenTurnComposer),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])))}));function rn(e){"use forget";let t=(0,cn.c)(38),{additionalResourceDomains:n,children:r,code:i,conversationId:a,source:o,styleMode:c,title:l}=e,u=`app-block:${o.appBlockId}:${(0,ln.useId)()}`,d=(0,ln.useRef)(null),f=o.appBlockId,p=o.libraryFileId,m=o.messageId,h=o.refIndex,g=a??null,_;t[0]!==g||t[1]!==f?(_={appBlockId:f,conversationId:g},t[0]=g,t[1]=f,t[2]=_):_=t[2];let v=_,y=s(Se),b;t[3]!==y||t[4]!==v?(b=me(y,v),t[3]=y,t[4]=v,t[5]=b):b=t[5];let x=b,S=y?.appBlockId===f&&y.conversationId===g&&(y.isOriginalVersion===!0||y.versionNumber!=null),C=x||S,w;t[6]!==y||t[7]!==u||t[8]!==v?(w=G(y,v,u),t[6]=y,t[7]=u,t[8]=v,t[9]=w):w=t[9];let T=w,E;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(E=()=>{d.current?.focus()},t[10]=E):E=t[10];let ee=E,D;t[11]!==f||t[12]!==p||t[13]!==m||t[14]!==h?(D={appBlockId:f,libraryFileId:p,messageId:m,refIndex:h},t[11]=f,t[12]=p,t[13]=m,t[14]=h,t[15]=D):D=t[15];let te;t[16]!==n||t[17]!==i||t[18]!==c||t[19]!==D||t[20]!==l?(te={additionalResourceDomains:n,code:i,focusOnClose:ee,source:D,styleMode:c,title:l},t[16]=n,t[17]=i,t[18]=c,t[19]=D,t[20]=l,t[21]=te):te=t[21];let O=te,k,A;t[22]!==O||t[23]!==x||t[24]!==v?(k=()=>{x&&K(v,O)},A=[O,x,v],t[22]=O,t[23]=x,t[24]=v,t[25]=k,t[26]=A):(k=t[25],A=t[26]),(0,ln.useEffect)(k,A);let j;t[27]!==O||t[28]!==T||t[29]!==v?(j=()=>{xe(v,T,O)},t[27]=O,t[28]=T,t[29]=v,t[30]=j):j=t[30];let ne=j,M;t[31]!==C||t[32]!==S||t[33]!==ne?(M={isExpanded:C,isViewingHistoricalVersion:S,openExpandedView:ne,triggerRef:d},t[31]=C,t[32]=S,t[33]=ne,t[34]=M):M=t[34];let re=M,ie;return t[35]!==r||t[36]!==re?(ie=(0,un.jsx)($t.Provider,{value:re,children:r}),t[35]=r,t[36]=re,t[37]=ie):ie=t[37],ie}function an(e){"use forget";let t=(0,cn.c)(2),{collapsedPreview:n,inlinePreview:r}=e,{isExpanded:i}=Zt(),a=i?n:r,o;return t[0]===a?o=t[1]:(o=(0,un.jsx)(un.Fragment,{children:a}),t[0]=a,t[1]=o),o}function on(e){"use forget";let t=(0,cn.c)(17),{canSubmitFullscreenTurn:n,children:r,conversation:i,headerAction:a,title:o}=e,c=qe(),l;t[0]===i?l=t[1]:(l=()=>i==null?0:he(i).height$()??0,t[0]=i,t[1]=l);let u=s(l),d=c===`fullscreen`&&n&&i!=null?u:0,f;t[2]===o?f=t[3]:(f=(0,un.jsx)(`span`,{className:`text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,children:o}),t[2]=o,t[3]=f);let p;t[4]!==a||t[5]!==f?(p=(0,un.jsxs)(Je.Header,{className:`pb-1`,children:[f,a]}),t[4]=a,t[5]=f,t[6]=p):p=t[6];let m;t[7]===d?m=t[8]:(m={paddingBottom:d},t[7]=d,t[8]=m);let h;t[9]===r?h=t[10]:(h=(0,un.jsx)(`div`,{className:`h-full min-h-0`,children:r}),t[9]=r,t[10]=h);let g;t[11]!==m||t[12]!==h?(g=(0,un.jsx)(Je.Body,{className:`bg-token-bg-primary overflow-hidden`,style:m,children:h}),t[11]=m,t[12]=h,t[13]=g):g=t[13];let _;return t[14]!==p||t[15]!==g?(_=(0,un.jsxs)(un.Fragment,{children:[p,g]}),t[14]=p,t[15]=g,t[16]=_):_=t[16],_}function sn(e){"use forget";let t=(0,cn.c)(5),{conversation:n,paneId:r}=e,i=Ge(),a=i.usesViewTransition?i.targetPresentation===`fullscreen`:i.presentation===`fullscreen`&&!i.isTransitioning,o;return t[0]!==n||t[1]!==r||t[2]!==i.isTransitioning||t[3]!==a?(o=a?(0,un.jsx)(tn,{conversation:n,disableAutoFocus:i.isTransitioning,paneId:r}):null,t[0]=n,t[1]=r,t[2]=i.isTransitioning,t[3]=a,t[4]=o):o=t[4],o}var cn,ln,un,dn=e((()=>{cn=le(),_e(),Ke(),_(),ln=n(z()),en(),ve(),nn(),un=fe()}));function fn(){"use forget";let e=(0,pn.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,mn.jsx)(`div`,{className:`text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,role:`status`,children:(0,mn.jsx)(I,{id:`chatgpt.app_block.preview.code_execution_disabled`,defaultMessage:`Code execution is disabled for this workspace.`})}),e[0]=t):t=e[0],t}var pn,mn,hn=e((()=>{pn=le(),L(),mn=fe()}));function gn(e){return Array.from({length:e},(e,t)=>t)}function _n(e){let t=gn(e);for(let e=t.length-1;e>0;--e){let n=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[n]??e,t[n]=r??n}return t}function vn({length:e,hasShownInitialPhrase:t}){return{order:_n(e),position:0,hasShownInitialPhrase:t}}function yn(e,t){if(!e.hasShownInitialPhrase)return{...e,hasShownInitialPhrase:!0};let n=e.position+1;return n<e.order.length?{...e,position:n}:vn({length:t,hasShownInitialPhrase:!0})}function bn(e){"use forget";let t=(0,Sn.c)(44),n=ue(),r;t[0]===n?r=t[1]:(r=n.formatMessage(X.shapingLayout),t[0]=n,t[1]=r);let i;t[2]===n?i=t[3]:(i=n.formatMessage(X.wiringControls),t[2]=n,t[3]=i);let a;t[4]===n?a=t[5]:(a=n.formatMessage(X.tuningInputs),t[4]=n,t[5]=a);let o;t[6]===n?o=t[7]:(o=n.formatMessage(X.arrangingResults),t[6]=n,t[7]=o);let s;t[8]===n?s=t[9]:(s=n.formatMessage(X.polishingPanels),t[8]=n,t[9]=s);let c;t[10]===n?c=t[11]:(c=n.formatMessage(X.balancingSpacing),t[10]=n,t[11]=c);let l;t[12]===n?l=t[13]:(l=n.formatMessage(X.sketchingInterface),t[12]=n,t[13]=l);let u;t[14]===n?u=t[15]:(u=n.formatMessage(X.calibratingPreview),t[14]=n,t[15]=u);let d;t[16]===n?d=t[17]:(d=n.formatMessage(X.composingInteractions),t[16]=n,t[17]=d);let f;t[18]===n?f=t[19]:(f=n.formatMessage(X.refiningDetails),t[18]=n,t[19]=f);let p;t[20]===n?p=t[21]:(p=n.formatMessage(X.smoothingEdges),t[20]=n,t[21]=p);let m;t[22]!==r||t[23]!==i||t[24]!==p||t[25]!==a||t[26]!==o||t[27]!==s||t[28]!==c||t[29]!==l||t[30]!==u||t[31]!==d||t[32]!==f?(m=[r,i,a,o,s,c,l,u,d,f,p],t[22]=r,t[23]=i,t[24]=p,t[25]=a,t[26]=o,t[27]=s,t[28]=c,t[29]=l,t[30]=u,t[31]=d,t[32]=f,t[33]=m):m=t[33];let h=m,g;t[34]!==n||t[35]!==e?(g=e?n.formatMessage(X.generatingApp,{title:e}):n.formatMessage(X.creatingApp),t[34]=n,t[35]=e,t[36]=g):g=t[36];let _=g,v;t[37]===Symbol.for(`react.memo_cache_sentinel`)?(v={order:[0],position:0,hasShownInitialPhrase:!1},t[37]=v):v=t[37];let[y,b]=(0,Cn.useState)(v),x,S;t[38]===h.length?(x=t[39],S=t[40]):(x=()=>{b(vn({length:h.length,hasShownInitialPhrase:!1}))},S=[h.length],t[38]=h.length,t[39]=x,t[40]=S),(0,Cn.useEffect)(x,S);let C,w;t[41]===h.length?(C=t[42],w=t[43]):(C=()=>{let e=window.setInterval(()=>{b(e=>yn(e,h.length))},Tn);return()=>{window.clearInterval(e)}},w=[h.length],t[41]=h.length,t[42]=C,t[43]=w),(0,Cn.useEffect)(C,w);let T=y.order[y.position]??0;return y.hasShownInitialPhrase?h[T]??h[0]??``:_}function xn(e){"use forget";let t=(0,Sn.c)(2),{title:n}=e,r=bn(n),i;return t[0]===r?i=t[1]:(i=(0,wn.jsx)(`div`,{"aria-atomic":`true`,"aria-live":`polite`,className:`not-prose mt-4 mb-1 flex min-h-[220px] w-full`,role:`status`,children:(0,wn.jsx)(Xe,{className:`aspect-auto min-h-0 flex-1 pt-2`,label:r})}),t[0]=r,t[1]=i),i}var Sn,Cn,wn,Tn,X,En=e((()=>{Sn=le(),Ye(),Cn=n(z()),L(),wn=fe(),Tn=2800,X=R({generatingApp:{id:`appBlock.loadingState.generatingApp`,defaultMessage:`Generating {title}`},creatingApp:{id:`appBlock.loadingState.creatingApp`,defaultMessage:`Creating the app`},shapingLayout:{id:`appBlock.loadingState.shapingLayout`,defaultMessage:`Shaping the layout`},wiringControls:{id:`appBlock.loadingState.wiringControls`,defaultMessage:`Wiring the controls`},tuningInputs:{id:`appBlock.loadingState.tuningInputs`,defaultMessage:`Tuning the inputs`},arrangingResults:{id:`appBlock.loadingState.arrangingResults`,defaultMessage:`Arranging the results`},polishingPanels:{id:`appBlock.loadingState.polishingPanels`,defaultMessage:`Polishing the panels`},balancingSpacing:{id:`appBlock.loadingState.balancingSpacing`,defaultMessage:`Balancing the spacing`},sketchingInterface:{id:`appBlock.loadingState.sketchingInterface`,defaultMessage:`Sketching the interface`},calibratingPreview:{id:`appBlock.loadingState.calibratingPreview`,defaultMessage:`Calibrating the preview`},composingInteractions:{id:`appBlock.loadingState.composingInteractions`,defaultMessage:`Composing the interactions`},refiningDetails:{id:`appBlock.loadingState.refiningDetails`,defaultMessage:`Refining the details`},smoothingEdges:{id:`appBlock.loadingState.smoothingEdges`,defaultMessage:`Smoothing the edges`}})}));function Dn(e){let t=new Map,n=new Map,r=null,i=null;for(let a of e){let e=a.metadata?.content_references;if(Array.isArray(e)&&e.forEach((e,r)=>{let i=kn({contentReference:e,messageId:a.id,refIndex:r});i!=null&&(t.set(i.appBlockId,i),i.libraryFileId!=null&&n.set(i.libraryFileId,i.appBlockId))}),a.author.role===ne.User){(a.metadata?.attachments??[]).forEach((e,r)=>{let i=On({attachment:e,messageId:a.id,refIndex:r});i==null||i.libraryFileId==null||n.has(i.libraryFileId)||(t.set(i.appBlockId,i),n.set(i.libraryFileId,i.appBlockId))});let e=a.metadata?.focused_artifact;if(e!=null){let n=e.type===Bn?t.get(e.artifact_id)??null:null;r=n!=null&&n.messageId===e.source_message_id&&n.refIndex===e.source_ref_index&&(n.libraryFileId==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e.library_file_id}else{let e=a.metadata?.open_in_app_block_view,n=e==null?null:t.get(e.app_block_id)??null;r=e!=null&&n!=null&&n.messageId===e.message_id&&n.refIndex===e.ref_index&&(n.libraryFileId==null||e.library_file_id==null||n.libraryFileId===e.library_file_id)?n:null,i=r==null?null:e?.library_file_id??null}}let o=M(a);if(o?.status!==`created`)continue;let s=n.get(o.libraryFileId),c=s==null?null:t.get(s)??null;if(c==null&&o.origin!=null){let e=o.origin.messageId,n=[...t.values()].filter(t=>t.messageId===e);c=n.length===1?n[0]:null}c==null&&s==null&&r!=null&&r.libraryFileId==null&&(i==null||i===o.libraryFileId)&&(c=r),c!=null&&(c.libraryFileId==null&&c.content!=null&&Ln(a)||(n.set(o.libraryFileId,c.appBlockId),t.set(c.appBlockId,{...c,content:null,currentContentFileId:o.newContentFileId,latestPatchMessageId:a.id,libraryFileId:o.libraryFileId,libraryFileVersionNumber:o.newVersionNumber})))}return t}function On({attachment:e,messageId:t,refIndex:n}){return e.library_artifact_type!==Bn||e.library_file_id==null?null:{appBlockId:tt({messageId:t,refIndex:n}),content:null,currentContentFileId:e.id??null,entrypoint:`index.html`,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:e.library_file_id,libraryFileName:e.name,libraryFileVersionNumber:null,mimeType:e.mime_type??null,messageId:t,refIndex:n,styleMode:null,title:e.name.replace(/\.html$/i,``)}}function kn({contentReference:e,messageId:t,refIndex:n}){if(typeof e!=`object`||!e||!(`type`in e)||!(`category`in e)||e.type!==Vn||e.category!==Bn||!(`data`in e))return null;let r=e.data;if(typeof r!=`object`||!r)return null;let i=An(r,`content`),a=An(r,`entrypoint`)??`index.html`,o=Fn(r,a),s=Mn(o,`library_file_id`);return i==null&&s==null?null:{appBlockId:An(r,`app_block_id`)??tt({messageId:t,refIndex:n}),bundleVersion:jn(r,`bundle_version`)??void 0,content:i,currentContentFileId:Mn(o,`current_content_file_id`),entrypoint:a,iconSvg:An(r,`icon_svg`),language:In(),latestPatchMessageId:null,libraryFileId:s,libraryFileName:Mn(o,`library_file_name`),libraryFileVersionNumber:Pn(Nn(o,`library_file_version_number`)),mimeType:Mn(o,`mime_type`),messageId:t,refIndex:n,styleMode:bt(An(r,`style_mode`)),title:An(r,`display_name`)??An(r,`title`)}}function An(e,t){let n=null;return t===`app_block_id`&&`app_block_id`in e&&(n=e.app_block_id),t===`content`&&`content`in e&&(n=e.content),t===`current_content_file_id`&&`current_content_file_id`in e&&(n=e.current_content_file_id),t===`display_name`&&`display_name`in e&&(n=e.display_name),t===`entrypoint`&&`entrypoint`in e&&(n=e.entrypoint),t===`icon_svg`&&`icon_svg`in e&&(n=e.icon_svg),t===`library_file_id`&&`library_file_id`in e&&(n=e.library_file_id),t===`library_file_name`&&`library_file_name`in e&&(n=e.library_file_name),t===`mime_type`&&`mime_type`in e&&(n=e.mime_type),t===`path`&&`path`in e&&(n=e.path),t===`style_mode`&&`style_mode`in e&&(n=e.style_mode),t===`title`&&`title`in e&&(n=e.title),typeof n==`string`&&n.trim()!==``?n:null}function jn(e,t){if(t===`bundle_version`&&`bundle_version`in e){let t=e.bundle_version;if(typeof t==`number`)return t}if(t===`library_file_version_number`&&`library_file_version_number`in e){let t=e.library_file_version_number;if(typeof t==`number`)return t}return null}function Mn(e,t){return typeof e!=`object`||!e?null:An(e,t)}function Nn(e,t){return typeof e!=`object`||!e?null:jn(e,t)}function Pn(...e){for(let t of e)if(t!=null)return t;return null}function Fn(e,t){if(!(`files`in e)||!Array.isArray(e.files))return null;let n=null;for(let r of e.files)if(!(typeof r!=`object`||!r)&&An(r,`library_file_id`)!=null&&(n??=r,An(r,`path`)===t))return r;return n}function In(){return`html`}function Ln(e){let t=e.metadata?.shared_conversation_id;return typeof t==`string`&&t.trim()!==``}function Rn(e,t){return e.appBlockId===t.appBlockId&&e.bundleVersion===t.bundleVersion&&e.content===t.content&&e.currentContentFileId===t.currentContentFileId&&e.entrypoint===t.entrypoint&&e.iconSvg===t.iconSvg&&e.language===t.language&&e.latestPatchMessageId===t.latestPatchMessageId&&e.libraryFileId===t.libraryFileId&&e.libraryFileName===t.libraryFileName&&e.libraryFileVersionNumber===t.libraryFileVersionNumber&&e.mimeType===t.mimeType&&e.messageId===t.messageId&&e.refIndex===t.refIndex&&e.styleMode===t.styleMode&&e.title===t.title}function zn(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e){let e=t.get(n);if(e==null||!Rn(r,e))return!1}return!0}var Bn,Vn,Hn,Un=e((()=>{re(),k(),ce(),Te(),v(),nt(),St(),Bn=`app_block`,Vn=`client_defined_widget`,Hn=ie(e=>i(()=>Dn(T(e).flatMap(e=>e.messages)),{equals:zn}))}));function Wn({appBlockId:e,conversation:t}){return t==null?null:Hn(t).get(e)??null}function Gn(e){return e?.serverId$()??void 0}function Kn({currentContentFileId:e,libraryFileId:t,libraryFileVersionNumber:n,serverThreadId:r,source:i}){let a=i?.libraryFileId??t??null,o=i?.currentContentFileId??e??(a==null?null:W(a));return{contentFileId:o,libraryContentKey:[a,o,i?.latestPatchMessageId??i?.libraryFileVersionNumber??n??i?.currentContentFileId??e??null,r??null].join(`\0`),libraryFileId:a}}function qn({contentFileId:e,libraryContentKey:t,libraryFileId:n,onContentStateChange:r,serverThreadId:i}){if(n==null||e==null){r(null);return}let o=new AbortController;return De({abortSignal:o.signal,fileId:e,serverThreadId:i}).then(e=>{o.signal.aborted||r({content:e,key:t,status:`loaded`})}).catch(e=>{o.signal.aborted||r({content:null,key:t,status:a(e)?`missing`:`failed`})}),()=>{o.abort()}}function Jn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryContent:r,libraryContentKey:i,libraryFileId:a,libraryFileVersionNumber:o,source:s}){let c=s??Yn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:a,libraryFileVersionNumber:o});return c==null?null:r==null||r.key!==i?c.latestPatchMessageId!=null&&c.content==null?{...c,content:null}:c:{...c,content:r.content}}function Yn({appBlockId:e,contentFileId:t,currentContentFileId:n,libraryFileId:r,libraryFileVersionNumber:i}){return r==null?null:{appBlockId:e,content:null,currentContentFileId:n??t,entrypoint:null,iconSvg:null,language:`html`,latestPatchMessageId:null,libraryFileId:r,libraryFileName:null,libraryFileVersionNumber:i??null,messageId:``,mimeType:null,refIndex:0,styleMode:null,title:null}}var Xn=e((()=>{se(),H(),Un()})),Zn=t({AppBlock:()=>Qn,AppBlockPreviewLoadingState:()=>gr,AppBlockSandboxPreview:()=>mr});function Qn(e){"use forget";let t=(0,Z.c)(98),{additionalResourceDomains:n,appBlockId:r,authoritativeCode:i,authoritativeSource:a,code:o,collapseWhenSuperseded:c,currentContentFileId:l,displayMode:u,id:d,captureConsoleMessages:f,clientThreadId:p,iconSvg:m,isStreaming:h,libraryFileId:g,libraryFileVersionNumber:_,messageId:v,onConsoleMessagesChange:y,onReadyChange:b,progressiveStreaming:x,ref:S,refIndex:C,styleMode:w,title:T,variant:ee,widgetRefSeenAtMs:D}=e,te=c===void 0||c,O=f!==void 0&&f,k=h!==void 0&&h,A=x!==void 0&&x,ne=ee===void 0?`inline`:ee,M=E(),re;t[0]===M?re=t[1]:(re=()=>M!=null&&we(M),t[0]=M,t[1]=re);let ie=s(re),ae=v!=null&&C!=null?tt({messageId:v,refIndex:C}):void 0,N=r??ae??tt({messageId:v??d,refIndex:C??0}),P=s(()=>ye({conversation:M??null,instanceId:N,messageId:v,refIndex:C}))??u,se=s(()=>a!=null||P!=null?null:Wn({appBlockId:N,conversation:M??null})),F=a??se,ce;t[2]===M?ce=t[3]:(ce=()=>Gn(M??null),t[2]=M,t[3]=ce);let le=s(ce),ue=j(M?.id),de=le??ue,I;t[4]!==l||t[5]!==g||t[6]!==_||t[7]!==de||t[8]!==F?(I=Kn({currentContentFileId:l,libraryFileId:g,libraryFileVersionNumber:_,serverThreadId:de,source:F}),t[4]=l,t[5]=g,t[6]=_,t[7]=de,t[8]=F,t[9]=I):I=t[9];let L=I,[R,fe]=(0,Q.useState)(null),[pe,z]=(0,Q.useState)(0),me;t[10]!==pe||t[11]!==L.libraryContentKey?(me=[L.libraryContentKey,pe],t[10]=pe,t[11]=L.libraryContentKey,t[12]=me):me=t[12];let B=me.join(`\0`),he,ge;t[13]!==i||t[14]!==B||t[15]!==L.contentFileId||t[16]!==L.libraryFileId||t[17]!==P||t[18]!==de?(he=()=>{if(!(i!=null||P===`collapsed`))return qn({contentFileId:L.contentFileId,libraryContentKey:B,libraryFileId:L.libraryFileId,onContentStateChange:fe,serverThreadId:de})},ge=[i,L.contentFileId,L.libraryFileId,B,P,de],t[13]=i,t[14]=B,t[15]=L.contentFileId,t[16]=L.libraryFileId,t[17]=P,t[18]=de,t[19]=he,t[20]=ge):(he=t[19],ge=t[20]),(0,Q.useEffect)(he,ge);let V=Jn({appBlockId:N,contentFileId:L.contentFileId,currentContentFileId:l,libraryContent:R,libraryContentKey:B,libraryFileId:g,libraryFileVersionNumber:_,source:F}),_e=R?.key===B?R:null,ve;t[21]!==V?.libraryFileId||t[22]!==g?(ve=()=>Ce(V?.libraryFileId??g),t[21]=V?.libraryFileId,t[22]=g,t[23]=ve):ve=t[23];let be=s(ve),Se=V?.libraryFileVersionNumber??_,H=(be!=null&&(Se==null||be.versionNumber>=Se)?be.code:void 0)??i??V?.content??o??null,U=V?.iconSvg??m??null,W=V?.libraryFileId??g,Te=V?.styleMode??w,Ee;t[24]!==W||t[25]!==Te?(Ee=xt({explicitStyleMode:Te,libraryFileId:W}),t[24]=W,t[25]=Te,t[26]=Ee):Ee=t[26];let G=Ee,K=V?.title??T,Oe;t[27]===M?Oe=t[28]:(Oe=()=>M!=null&&oe(M)?`work`:`chat`,t[27]=M,t[28]=Oe);let q=s(Oe),ke;t[29]===Symbol.for(`react.memo_cache_sentinel`)?(ke=$e(),t[29]=ke):ke=t[29];let J=ke,Ae=ne===`artifact`,je=A&&!Ae,Me=Ae&&G===`open`,Ne=P===`collapsed`||P==null&&te&&V?.latestPatchMessageId!=null&&V.latestPatchMessageId!==v,Pe=o!=null||l!=null,Fe;t[30]!==p||t[31]!==o||t[32]!==M?.id||t[33]!==l||t[34]!==N||t[35]!==_||t[36]!==v||t[37]!==W||t[38]!==G||t[39]!==K||t[40]!==C||t[41]!==de||t[42]!==F?.messageId?(Fe=async e=>{let t=o;if(t==null&&l!=null)try{t=await De({abortSignal:new AbortController().signal,fileId:l,serverThreadId:de})}catch{return}t!=null&&xe({appBlockId:N,conversationId:M?.id??p??null,isOriginalVersion:!0,versionNumber:_??void 0},`app-block:${N}:original`,{code:t,focusOnClose:()=>{e.isConnected&&e.focus()},source:{appBlockId:N,libraryFileId:W,messageId:F?.messageId??v,refIndex:C},styleMode:G,title:K})},t[30]=p,t[31]=o,t[32]=M?.id,t[33]=l,t[34]=N,t[35]=_,t[36]=v,t[37]=W,t[38]=G,t[39]=K,t[40]=C,t[41]=de,t[42]=F?.messageId,t[43]=Fe):Fe=t[43],M?.id,F?.messageId;let Y=Fe;if(k&&!je){let e;return t[44]===K?e=t[45]:(e=(0,$.jsx)(xn,{title:K}),t[44]=K,t[45]=e),e}let Ie=ie&&o!=null;if(_e?.status===`missing`&&!Ie)return null;if(Ne){let e=Pe?Y:void 0,n;return t[46]!==K||t[47]!==e?(n=(0,$.jsx)(fr,{onView:e,title:K}),t[46]=K,t[47]=e,t[48]=n):n=t[48],n}if(H==null){if(V?.latestPatchMessageId!=null){let e=M?.id??p,n=_e?.status===`failed`,r;t[49]===z?r=t[50]:(r=()=>z($n),t[49]=z,t[50]=r);let i;return t[51]!==N||t[52]!==Ae||t[53]!==U||t[54]!==K||t[55]!==e||t[56]!==n||t[57]!==r?(i=(0,$.jsx)(rr,{appBlockId:N,conversationId:e,hasFailed:n,iconSvg:U,onRetry:r,showHeader:Ae,title:K}),t[51]=N,t[52]=Ae,t[53]=U,t[54]=K,t[55]=e,t[56]=n,t[57]=r,t[58]=i):i=t[58],i}let e;return t[59]===K?e=t[60]:(e=(0,$.jsx)(xn,{title:K}),t[59]=K,t[60]=e),e}let Le;t[61]!==p||t[62]!==q||t[63]!==v||t[64]!==K||t[65]!==C?(Le=p!=null&&v!=null&&C!=null&&Ze()?{reference:{clientThreadId:p,messageId:v,referenceIndex:C},target:{kind:`app_block`,metadata:{...K==null?{}:{title:K},tab:q}}}:void 0,t[61]=p,t[62]=q,t[63]=v,t[64]=K,t[65]=C,t[66]=Le):Le=t[66];let Re=Le,ze=M?.id??p,Be=F?.messageId??v,Ve;t[67]!==N||t[68]!==W||t[69]!==C||t[70]!==Be?(Ve={appBlockId:N,libraryFileId:W,messageId:Be,refIndex:C},t[67]=N,t[68]=W,t[69]=C,t[70]=Be,t[71]=Ve):Ve=t[71];let He=Me&&J,Ue=M?.id??p,We;t[72]!==n||t[73]!==O||t[74]!==Re||t[75]!==d||t[76]!==k||t[77]!==y||t[78]!==b||t[79]!==H||t[80]!==U||t[81]!==G||t[82]!==K||t[83]!==S||t[84]!==je||t[85]!==Me||t[86]!==He||t[87]!==Ue||t[88]!==D?(We=(0,$.jsx)(er,{additionalResourceDomains:n,canOpen:He,captureConsoleMessages:O,clientThreadId:Ue,code:H,feedback:Re,iconSvg:U,id:d,isStreaming:k,onConsoleMessagesChange:y,onReadyChange:b,progressiveStreaming:je,ref:S,showArtifactCard:Me,styleMode:G,title:K,widgetRefSeenAtMs:D}),t[72]=n,t[73]=O,t[74]=Re,t[75]=d,t[76]=k,t[77]=y,t[78]=b,t[79]=H,t[80]=U,t[81]=G,t[82]=K,t[83]=S,t[84]=je,t[85]=Me,t[86]=He,t[87]=Ue,t[88]=D,t[89]=We):We=t[89];let Ge;return t[90]!==n||t[91]!==H||t[92]!==G||t[93]!==K||t[94]!==ze||t[95]!==Ve||t[96]!==We?(Ge=(0,$.jsx)(rn,{additionalResourceDomains:n,code:H,conversationId:ze,styleMode:G,source:Ve,title:K,children:We}),t[90]=n,t[91]=H,t[92]=G,t[93]=K,t[94]=ze,t[95]=Ve,t[96]=We,t[97]=Ge):Ge=t[97],Ge}function $n(e){return e+1}function er(e){"use forget";let t=(0,Z.c)(32),{additionalResourceDomains:n,canOpen:r,captureConsoleMessages:i,clientThreadId:a,code:o,feedback:s,iconSvg:c,id:l,isStreaming:u,onConsoleMessagesChange:d,onReadyChange:f,progressiveStreaming:p,ref:m,showArtifactCard:h,styleMode:g,title:_,widgetRefSeenAtMs:v}=e,{isViewingHistoricalVersion:y,openExpandedView:b,triggerRef:x}=Zt(),S;t[0]===b?S=t[1]:(S=()=>{ge(),b()},t[0]=b,t[1]=S);let C=S,w=y?C:void 0,T;t[2]!==c||t[3]!==w||t[4]!==_||t[5]!==x?(T=(0,$.jsx)(or,{iconSvg:c,onOpen:w,openButtonRef:x,title:_}),t[2]=c,t[3]=w,t[4]=_,t[5]=x,t[6]=T):T=t[6];let E;t[7]!==n||t[8]!==i||t[9]!==a||t[10]!==o||t[11]!==l||t[12]!==u||t[13]!==d||t[14]!==f||t[15]!==p||t[16]!==m||t[17]!==g||t[18]!==v?(E=(0,$.jsx)(mr,{additionalResourceDomains:n,code:o,id:l,isStreaming:u,captureConsoleMessages:i,clientThreadId:a,onConsoleMessagesChange:d,onReadyChange:f,progressiveStreaming:p,ref:m,styleMode:g,widgetRefSeenAtMs:v}),t[7]=n,t[8]=i,t[9]=a,t[10]=o,t[11]=l,t[12]=u,t[13]=d,t[14]=f,t[15]=p,t[16]=m,t[17]=g,t[18]=v,t[19]=E):E=t[19];let ee;t[20]!==r||t[21]!==s||t[22]!==C||t[23]!==c||t[24]!==h||t[25]!==E||t[26]!==_||t[27]!==x?(ee=(0,$.jsx)(nr,{canOpen:r,expandButtonRef:x,feedback:s,iconSvg:c,showArtifactCard:h,title:_,onOpen:C,children:E}),t[20]=r,t[21]=s,t[22]=C,t[23]=c,t[24]=h,t[25]=E,t[26]=_,t[27]=x,t[28]=ee):ee=t[28];let D;return t[29]!==T||t[30]!==ee?(D=(0,$.jsx)(an,{collapsedPreview:T,inlinePreview:ee}),t[29]=T,t[30]=ee,t[31]=D):D=t[31],D}function tr(e){"use forget";let t=(0,Z.c)(14),{action:n,className:r,fallbackTitle:i,leading:a,title:o,titleClassName:s}=e,c;t[0]===r?c=t[1]:(c=b(`flex items-center justify-between gap-3`,r),t[0]=r,t[1]=c);let l=s??`truncate text-base font-semibold`,u;t[2]===l?u=t[3]:(u=b(`text-token-text-primary`,l),t[2]=l,t[3]=u);let d=o??i,f;t[4]!==u||t[5]!==d?(f=(0,$.jsx)(`div`,{className:`min-w-0`,children:(0,$.jsx)(`div`,{className:u,children:d})}),t[4]=u,t[5]=d,t[6]=f):f=t[6];let p;t[7]!==a||t[8]!==f?(p=(0,$.jsxs)(`div`,{className:`flex min-w-0 items-center gap-3`,children:[a,f]}),t[7]=a,t[8]=f,t[9]=p):p=t[9];let m;return t[10]!==n||t[11]!==c||t[12]!==p?(m=(0,$.jsxs)(`div`,{className:c,children:[p,n]}),t[10]=n,t[11]=c,t[12]=p,t[13]=m):m=t[13],m}function nr(e){"use forget";let t=(0,Z.c)(16),{canOpen:n,children:r,expandButtonRef:i,feedback:a,iconSvg:o,onOpen:s,showArtifactCard:c,title:l}=e,u=ue(),d;t[0]===u?d=t[1]:(d=u.formatMessage({id:`6z1y4r`,defaultMessage:`App preview`}),t[0]=u,t[1]=d);let f=d,p;t[2]!==n||t[3]!==r||t[4]!==i||t[5]!==f||t[6]!==o||t[7]!==s||t[8]!==c||t[9]!==l?(p=c?(0,$.jsxs)(`div`,{className:`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`,"data-testid":`app-block-artifact-card`,children:[(0,$.jsx)(tr,{action:n&&s!=null?(0,$.jsx)(pr,{ref:i,className:`shrink-0`,onClick:s}):void 0,className:`px-4 py-2`,fallbackTitle:f,leading:(0,$.jsx)(cr,{iconSvg:o}),title:l}),(0,$.jsx)(`div`,{children:r})]}):r,t[2]=n,t[3]=r,t[4]=i,t[5]=f,t[6]=o,t[7]=s,t[8]=c,t[9]=l,t[10]=p):p=t[10];let m;t[11]===a?m=t[12]:(m=a==null?null:(0,$.jsx)(ir,{...a}),t[11]=a,t[12]=m);let h;return t[13]!==p||t[14]!==m?(h=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[p,m]}),t[13]=p,t[14]=m,t[15]=h):h=t[15],h}function rr(e){"use forget";let t=(0,Z.c)(17),{appBlockId:n,conversationId:r,hasFailed:i,iconSvg:a,onRetry:o,showHeader:c,title:l}=e,u=s(Se),d=ue(),f;t[0]===d?f=t[1]:(f=d.formatMessage({id:`chatgpt.app_block.preview_shell.fallback_title`,defaultMessage:`App preview`}),t[0]=d,t[1]=f);let p=f;if(me(u,{appBlockId:n,conversationId:r??null})){let e;return t[2]!==a||t[3]!==l?(e=(0,$.jsx)(or,{iconSvg:a,title:l}),t[2]=a,t[3]=l,t[4]=e):e=t[4],e}let m;t[5]!==p||t[6]!==a||t[7]!==c||t[8]!==l?(m=c?(0,$.jsx)(tr,{className:`mb-2`,fallbackTitle:p,leading:(0,$.jsx)(cr,{iconSvg:a}),title:l}):null,t[5]=p,t[6]=a,t[7]=c,t[8]=l,t[9]=m):m=t[9];let h;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(h={minHeight:vr},t[10]=h):h=t[10];let g;t[11]!==i||t[12]!==o?(g=(0,$.jsx)(`div`,{className:`relative w-full`,style:h,children:i?(0,$.jsx)(_r,{onRetry:o}):(0,$.jsx)(gr,{})}),t[11]=i,t[12]=o,t[13]=g):g=t[13];let _;return t[14]!==m||t[15]!==g?(_=(0,$.jsxs)(`div`,{className:`group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,"data-app-block-preview":`true`,children:[m,g]}),t[14]=m,t[15]=g,t[16]=_):_=t[16],_}function ir(e){"use forget";let t=(0,Z.c)(5),{reference:n,target:r}=e,[i,a]=(0,Q.useState)(!1);if(s(ar))return null;let o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(U,{}),t[0]=o):o=t[0];let c;return t[1]!==i||t[2]!==n||t[3]!==r?(c=(0,$.jsx)(`div`,{className:`flex justify-end pt-1`,children:(0,$.jsx)(We,{onOpenChange:a,open:i,reference:n,target:r,triggerButton:o})}),t[1]=i,t[2]=n,t[3]=r,t[4]=c):c=t[4],c}function ar(){return He()}function or(e){"use forget";let t=(0,Z.c)(23),{iconSvg:n,onOpen:r,openButtonRef:i,title:a}=e,o=ue(),s,c,l,u,f;t[0]!==o||t[1]!==r||t[2]!==i||t[3]!==a?(c=o.formatMessage({id:`XBBNdF`,defaultMessage:`App preview`}),f=`not-prose relative clear-both my-4 w-full max-w-full`,u=`shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`,s=tr,l=r==null?void 0:(0,$.jsx)(d,{ref:i,color:`secondary`,label:o.formatMessage({id:`chatgpt.app_block.collapsed_preview.open.aria_label`,defaultMessage:`Open {title} in side pane`},{title:a??c}),onClick:r,type:`button`,children:(0,$.jsx)(I,{id:`chatgpt.app_block.collapsed_preview.open`,defaultMessage:`Open`})}),t[0]=o,t[1]=r,t[2]=i,t[3]=a,t[4]=s,t[5]=c,t[6]=l,t[7]=u,t[8]=f):(s=t[4],c=t[5],l=t[6],u=t[7],f=t[8]);let p;t[9]===n?p=t[10]:(p=(0,$.jsx)(sr,{iconSvg:n}),t[9]=n,t[10]=p);let m;t[11]!==s||t[12]!==c||t[13]!==l||t[14]!==p||t[15]!==a?(m=(0,$.jsx)(s,{action:l,className:`w-full`,fallbackTitle:c,leading:p,title:a,titleClassName:`truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`}),t[11]=s,t[12]=c,t[13]=l,t[14]=p,t[15]=a,t[16]=m):m=t[16];let h;t[17]!==u||t[18]!==m?(h=(0,$.jsx)(`div`,{className:u,children:m}),t[17]=u,t[18]=m,t[19]=h):h=t[19];let g;return t[20]!==f||t[21]!==h?(g=(0,$.jsx)(`div`,{className:f,children:h}),t[20]=f,t[21]=h,t[22]=g):g=t[22],g}function sr(e){"use forget";let t=(0,Z.c)(2),{iconSvg:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(`div`,{className:`bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,children:(0,$.jsx)(cr,{className:`text-token-text-secondary`,iconSvg:n})}),t[0]=n,t[1]=r),r}function cr(e){"use forget";let t=(0,Z.c)(5),{className:n,iconSvg:r}=e,i=n===void 0?`text-token-text-primary`:n,a;t[0]===r?a=t[1]:(a=lr(r),t[0]=r,t[1]=a);let o=a,s;return t[2]!==i||t[3]!==o?(s=o==null?(0,$.jsx)(J,{"aria-hidden":`true`,className:b(`icon-md shrink-0`,i)}):(0,$.jsx)(`span`,{"aria-hidden":`true`,className:b(`icon-md shrink-0`,i),children:(0,$.jsx)(q,{svgString:o,className:`h-full w-full`})}),t[2]=i,t[3]=o,t[4]=s):s=t[4],s}function lr(e){if(e==null)return null;let t=e.trim();if(t.length===0||t.length>Tr||!t.startsWith(`<svg `)||!t.endsWith(`</svg>`))return null;let n=0,r=!1,i=!1;for(let e of t.matchAll(Er)){let a=e.index;if(a==null||t.slice(n,a).trim()!==``)return null;n=a+e[0].length;let o=e[1].toLowerCase(),s=e[2]??``;if(!Or.has(o))return null;o===`svg`&&(r=!0),o===`path`&&(i=!0);let c=e[0].startsWith(`</`);if(c&&s.trim()!==``||!c&&!ur(s))return null}return t.slice(n).trim()===``&&r&&i?t:null}function ur(e){let t=e.replace(Dr,``).trim();if(t!==``&&t!==`/`)return!1;for(let t of e.matchAll(Dr)){let e=t[1],n=t[2];if(!kr.has(e)||!dr(e,n))return!1}return!0}function dr(e,t){return e===`xmlns`?t===`http://www.w3.org/2000/svg`:e===`fill`?t===`currentColor`||t===`none`:e===`width`||e===`height`?/^\d+(\.\d+)?$/.test(t):e===`viewBox`?/^[\d.\-\s]+$/.test(t):e===`d`&&/^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)}function fr(e){"use forget";let t=(0,Z.c)(9),{onView:n,title:r}=e,i=ue(),a;t[0]===i?a=t[1]:(a=i.formatMessage({id:`UPARFQ`,defaultMessage:`app`}),t[0]=i,t[1]=a);let o=r??a,s;t[2]===o?s=t[3]:(s=(0,$.jsx)(`span`,{children:(0,$.jsx)(I,{id:`chatgpt.app_block.history_created`,defaultMessage:`Created {appName}`,values:{appName:o}})}),t[2]=o,t[3]=s);let c;t[4]===n?c=t[5]:(c=n==null?null:(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`span`,{"aria-hidden":`true`,children:(0,$.jsx)(I,{id:`chatgpt.app_block.history_separator`,defaultMessage:`•`})}),(0,$.jsx)(`button`,{className:`text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,onClick:e=>{n(e.currentTarget)},type:`button`,children:(0,$.jsx)(I,{id:`chatgpt.app_block.history_view`,defaultMessage:`View`})})]}),t[4]=n,t[5]=c);let l;return t[6]!==s||t[7]!==c?(l=(0,$.jsxs)(`div`,{className:`text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,children:[s,c]}),t[6]=s,t[7]=c,t[8]=l):l=t[8],l}function pr(e){"use forget";let t=(0,Z.c)(12),{className:n,onClick:r,ref:i}=e,a=ue(),o;t[0]===a?o=t[1]:(o=a.formatMessage({id:`I094Lq`,defaultMessage:`Open app`}),t[0]=a,t[1]=o);let s=o,c;t[2]===r?c=t[3]:(c=e=>{e.stopPropagation(),r()},t[2]=r,t[3]=c);let l;t[4]!==s||t[5]!==i||t[6]!==c?(l=(0,$.jsx)(d,{ref:i,type:`button`,icon:Ae,color:`ghost`,size:`medium`,label:s,className:`size-9 rounded-full border-0 px-2 py-2 shadow-none`,onClick:c}),t[4]=s,t[5]=i,t[6]=c,t[7]=l):l=t[7];let u;return t[8]!==n||t[9]!==s||t[10]!==l?(u=(0,$.jsx)(O,{label:s,className:n,children:l}),t[8]=n,t[9]=s,t[10]=l,t[11]=u):u=t[11],u}function mr(e){"use forget";let t=(0,Z.c)(122),{additionalResourceDomains:n,clientThreadId:r,code:i,id:a,captureConsoleMessages:c,isStreaming:l,onConsoleMessagesChange:u,onReadyChange:d,progressiveStreaming:f,ref:p,styleMode:m,surface:h,widgetRefSeenAtMs:_}=e,v=l!==void 0&&l,y=f!==void 0&&f,x=m===void 0?`default`:m,S=h===void 0?`inline`:h,C=ue(),w=(0,Q.useRef)(null),T=(0,Q.useRef)(!1),E=(0,Q.useRef)(!1),ee=(0,Q.useRef)(null),O=(0,Q.useRef)(null),k=(0,Q.useRef)(null),A=(0,Q.useRef)(null),j=(0,Q.useRef)(0),ne=(0,Q.useRef)(null),M=(0,Q.useRef)(null),re;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(re=[],t[0]=re):re=t[0];let ie=(0,Q.useRef)(re),ae=o(),N=s(te),{allowDependencyNetworkRequestsWithoutCanvasAccess:oe}=(0,Q.useContext)(Be),P=Fe()||oe,se=Ie(r)&&!oe,F=ae?`dark`:`light`,ce=C.locale,le;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(le={status:`streaming`},t[1]=le):le=t[1];let[de,I]=(0,Q.useState)(le),L=de.status===`finalized`&&de.html!==i,R=y&&S===`inline`&&de.status!==`static`&&!L,fe=se?`network-enabled`:`network-disabled`,pe=R?`progressive-app-block-stream`:i,z;t[2]===n?z=t[3]:(z=n??[],t[2]=n,t[3]=z);let me;t[4]!==N||t[5]!==ce||t[6]!==x||t[7]!==S||t[8]!==fe||t[9]!==pe||t[10]!==z||t[11]!==F?(me=[F,N,S,x,ce,fe,pe,...z],t[4]=N,t[5]=ce,t[6]=x,t[7]=S,t[8]=fe,t[9]=pe,t[10]=z,t[11]=F,t[12]=me):me=t[12];let B=me.join(`\0`),he;t[13]===n?he=t[14]:(he=Vt(n),t[13]=n,t[14]=he);let ge=he,V=se?`deps_only`:`disabled`,_e;t[15]!==S||t[16]!==V?(_e={networkPolicy:V,surface:S},t[15]=S,t[16]=V,t[17]=_e):_e=t[17];let ve=_e,[ye,be]=(0,Q.useState)(0),[xe,Se]=(0,Q.useState)(null),Ce=xe?.signature===B?xe.status:null,H=Ce===`ready`,U=Ce===`failed`,W;t[18]!==i||t[19]!==ve||t[20]!==_?(W={content:i,metricTags:ve,widgetRefSeenAtMs:_},t[18]=i,t[19]=ve,t[20]=_,t[21]=W):W=t[21];let{cancelFirstPaintFrame:we,startRunMetrics:Te}=lt(W),Ee,G;t[22]!==H||t[23]!==d?(Ee=()=>{d?.(H)},G=[H,d],t[22]=H,t[23]=d,t[24]=Ee,t[25]=G):(Ee=t[24],G=t[25]),(0,Q.useEffect)(Ee,G);let K,De;t[26]===Symbol.for(`react.memo_cache_sentinel`)?(K=()=>({clearCapturedConsoleMessages:()=>{ie.current=[]},captureScreenshotDataUrl:async()=>(await w.current?.screenshot())?.imageBase64??null,focus:()=>{w.current?.focus()}}),De=[],t[26]=K,t[27]=De):(K=t[26],De=t[27]),(0,Q.useImperativeHandle)(p,K,De);let Oe;t[28]===Symbol.for(`react.memo_cache_sentinel`)?(Oe=()=>{ne.current!=null&&(window.clearTimeout(ne.current),ne.current=null)},t[28]=Oe):Oe=t[28];let q=D(Oe),ke;t[29]===Symbol.for(`react.memo_cache_sentinel`)?(ke=()=>{M.current!=null&&(window.clearTimeout(M.current),M.current=null)},t[29]=ke):ke=t[29];let J=D(ke),Ae;t[30]!==H||t[31]!==d||t[32]!==B||t[33]!==R?(Ae=()=>{if(!R||!H)return;let e=O.current,t=w.current;if(e==null||t?.updateAppBlockStream==null||E.current)return;let n=j.current;O.current=null,ee.current=it(),e.isFinal&&(E.current=!0);let r=()=>j.current===n?t.updateAppBlockStream?.(e)??Promise.resolve():Promise.resolve(),i=A.current,a=i==null?r():i.then(r);A.current=a,a.then(()=>{A.current===a&&(A.current=null),j.current===n&&(e.html.trim()!==``&&k.current?.markFirstPaint(),e.isFinal&&(k.current?.reportPayloadSize(e.html),I({status:`finalized`,html:e.html})))},e=>{A.current===a&&(A.current=null),j.current===n&&(e instanceof DOMException&&e.name===`AbortError`||(Se({signature:B,status:`failed`}),d?.(!1,`failure`)))})},t[30]=H,t[31]=d,t[32]=B,t[33]=R,t[34]=Ae):Ae=t[34];let je=D(Ae),Me;t[35]!==N||t[36]!==c||t[37]!==q||t[38]!==J||t[39]!==i||t[40]!==P||t[41]!==se||t[42]!==L||t[43]!==v||t[44]!==ce||t[45]!==u||t[46]!==d||t[47]!==B||t[48]!==R||t[49]!==Te||t[50]!==x||t[51]!==S||t[52]!==F?(Me=()=>{if(!P)return;L&&I({status:`static`});let e=R&&w.current?.updateAppBlockStream!=null;if(R&&!e){v||I({status:`static`});return}T.current=!0,E.current=!1,ee.current=null,O.current=null,k.current=null,A.current=null,J(),j.current+=1;let t=j.current;q(),Se(null);let{expectReadySignal:n,html:r}=Ht(i,F,ce,N,S,{loadTailwind:se,progressiveStreaming:e,styleMode:x}),a=!1,o=!1,s=!1,l=!1,f=()=>j.current===t,p=Te(f,{deferFirstPaint:e,deferPayloadSize:e});e&&(k.current=p);let m=e=>{!c||u==null||!f()||(ie.current=e,!s&&(s=!0,g.postTask(()=>{s=!1,f()&&u(ie.current)},{priority:`background`})))},h=e=>{!f()||a||o||(a=!0,q(),p.markReady(e),!l&&(l=!0,g.postTask(()=>{l=!1,!(!f()||o)&&Se({signature:B,status:`ready`})},{priority:`background`})))},_=(e,t)=>{!f()||a||o||(o=!0,q(),Se({signature:B,status:`failed`}),p.reportFailure(e,t),g.postTask(()=>{f()&&d?.(!1,`failure`)},{priority:`background`}))};ie.current=[],m([]),ne.current=window.setTimeout(()=>{_(`sandbox_eval`,`ready_timeout`)},xr),(async()=>{let e=w.current?.evalAsync({code:r,expectReadySignal:n,language:`html`});if(e==null){_(`sandbox_eval`,`missing_generator`);return}for(;;){let t=await e.next();if(t.done){f()&&!a&&_(`sandbox_eval`,`generator_completed_without_ready`);break}f()&&(m([...ie.current,t.value]),t.value.type===Ne.ENVIRONMENT_STATUS&&t.value.status===Pe.RUNNING_CODE&&h(`running_code`),t.value.type===Ne.RUN_COMPLETE&&(t.value.wasFatalError?_(`runtime`,`fatal_runtime_error`):(h(`run_complete`),p.reportSuccess(`run_complete`))),await g.yield())}})().catch(e=>{f()&&(e instanceof DOMException&&e.name===`AbortError`||_(`sandbox_eval`,ot(e)))})},t[35]=N,t[36]=c,t[37]=q,t[38]=J,t[39]=i,t[40]=P,t[41]=se,t[42]=L,t[43]=v,t[44]=ce,t[45]=u,t[46]=d,t[47]=B,t[48]=R,t[49]=Te,t[50]=x,t[51]=S,t[52]=F,t[53]=Me):Me=t[53];let Y=D(Me),Re;t[54]!==q||t[55]!==J?(Re=()=>{j.current+=1,T.current=!1,E.current=!1,O.current=null,k.current=null,A.current=null,q(),J(),Se(null),be(hr)},t[54]=q,t[55]=J,t[56]=Re):Re=t[56];let ze=D(Re),Ve;t[57]===S?Ve=t[58]:(Ve=S===`inline`?{margin:-4,width:`calc(100% + ${br*2}px)`}:void 0,t[57]=S,t[58]=Ve);let He=Ve,Ue;t[59]!==we||t[60]!==q||t[61]!==J||t[62]!==Y?(Ue=()=>{Y();let e=w.current;return()=>{j.current+=1,k.current=null,A.current=null,q(),J(),we(),e?.stop()}},t[59]=we,t[60]=q,t[61]=J,t[62]=Y,t[63]=Ue):Ue=t[63];let We;t[64]!==we||t[65]!==q||t[66]!==J||t[67]!==P||t[68]!==B||t[69]!==Y||t[70]!==ye?(We=[we,q,J,P,B,Y,ye],t[64]=we,t[65]=q,t[66]=J,t[67]=P,t[68]=B,t[69]=Y,t[70]=ye,t[71]=We):We=t[71],(0,Q.useEffect)(Ue,We);let Ge,Ke;t[72]!==v||t[73]!==Y||t[74]!==R?(Ge=()=>{!R||v||T.current||w.current?.updateAppBlockStream!=null||Y()},Ke=[v,Y,R],t[72]=v,t[73]=Y,t[74]=R,t[75]=Ge,t[76]=Ke):(Ge=t[75],Ke=t[76]),(0,Q.useEffect)(Ge,Ke);let qe,Je;if(t[77]!==J||t[78]!==i||t[79]!==je||t[80]!==U||t[81]!==H||t[82]!==v||t[83]!==R?(qe=()=>{if(!R||!H||U||E.current||w.current?.updateAppBlockStream==null)return;if(O.current={html:i,isFinal:!v},!v){J(),je();return}let e=ee.current;if(e==null){je();return}let t=it()-e;if(t>=Sr){je();return}return M.current=window.setTimeout(()=>{M.current=null,je()},Sr-t),J},Je=[J,i,je,U,H,v,R],t[77]=J,t[78]=i,t[79]=je,t[80]=U,t[81]=H,t[82]=v,t[83]=R,t[84]=qe,t[85]=Je):(qe=t[84],Je=t[85]),(0,Q.useEffect)(qe,Je),!P){let e;return t[86]===Symbol.for(`react.memo_cache_sentinel`)?(e=(0,$.jsx)(fn,{}),t[86]=e):e=t[86],e}let Ye=S===`inline`&&`min-h-[120px] overflow-visible`,Xe=S===`stage`&&`h-full min-h-0`,Ze;t[87]!==Ye||t[88]!==Xe?(Ze=b(`flex w-full`,Ye,Xe),t[87]=Ye,t[88]=Xe,t[89]=Ze):Ze=t[89];let Qe=S===`inline`?`flex-none`:`w-full`,$e;t[90]===Qe?$e=t[91]:($e=b(`relative min-w-0`,Qe),t[90]=Qe,t[91]=$e);let et=`${ye}:${se?`network-enabled`:`network-disabled`}`,tt;t[92]===C?tt=t[93]:(tt=C.formatMessage({id:`gxcrdR`,defaultMessage:`App block preview`}),t[92]=C,t[93]=tt);let nt=se?`deps-only`:`none`,rt=se?Cr:wr,at=H?0:-1,st=S===`inline`&&x===`open`,ct=S!==`stage`,ut=R?yr:vr,dt;t[94]!==a||t[95]!==Y||t[96]!==ge||t[97]!==et||t[98]!==tt||t[99]!==nt||t[100]!==rt||t[101]!==at||t[102]!==st||t[103]!==ct||t[104]!==ut?(dt=(0,$.jsx)(Le,{id:a,title:tt,visuallyHidden:!1,networkPolicy:nt,additionalResourceDomains:ge,sandboxPermissions:rt,disablePermissions:!0,enableTransition:!1,enableAnimation:!1,iframeTabIndex:at,onRetryCodeRun:Y,transparentBackground:st,useIntrinsicHeight:ct,intrinsicHeightFallback:ut,ref:w},et),t[94]=a,t[95]=Y,t[96]=ge,t[97]=et,t[98]=tt,t[99]=nt,t[100]=rt,t[101]=at,t[102]=st,t[103]=ct,t[104]=ut,t[105]=dt):dt=t[105];let ft;t[106]!==U||t[107]!==H||t[108]!==R?(ft=!H&&!U&&!R?(0,$.jsx)(gr,{}):null,t[106]=U,t[107]=H,t[108]=R,t[109]=ft):ft=t[109];let pt;t[110]!==U||t[111]!==ze?(pt=U?(0,$.jsx)(_r,{onRetry:ze}):null,t[110]=U,t[111]=ze,t[112]=pt):pt=t[112];let mt;t[113]!==He||t[114]!==$e||t[115]!==dt||t[116]!==ft||t[117]!==pt?(mt=(0,$.jsxs)(`div`,{className:$e,style:He,children:[dt,ft,pt]}),t[113]=He,t[114]=$e,t[115]=dt,t[116]=ft,t[117]=pt,t[118]=mt):mt=t[118];let ht;return t[119]!==Ze||t[120]!==mt?(ht=(0,$.jsx)(`div`,{className:Ze,children:mt}),t[119]=Ze,t[120]=mt,t[121]=ht):ht=t[121],ht}function hr(e){return e+1}function gr(){"use forget";let e=(0,Z.c)(2),t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsx)(ae,{className:`icon-sm text-token-text-tertiary`}),e[0]=t):t=e[0];let n;return e[1]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsxs)(`div`,{"aria-live":`polite`,className:`bg-primary absolute inset-0 z-10 flex items-center justify-center gap-2 text-sm`,role:`status`,children:[t,(0,$.jsx)(`span`,{className:`text-token-text-secondary`,children:(0,$.jsx)(I,{id:`chatgpt.app_block.preview_loading`,defaultMessage:`Loading app`})})]}),e[1]=n):n=e[1],n}function _r(e){"use forget";let t=(0,Z.c)(4),{onRetry:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,$.jsx)(`p`,{className:`text-token-text-secondary text-sm`,children:(0,$.jsx)(I,{id:`chatgpt.app_block.preview_load_failed`,defaultMessage:`This app couldn't load.`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(I,{id:`chatgpt.app_block.preview_retry`,defaultMessage:`Try again`}),t[1]=i):i=t[1];let a;return t[2]===n?a=t[3]:(a=(0,$.jsxs)(`div`,{className:`bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,role:`alert`,children:[r,(0,$.jsx)(d,{type:`button`,color:`secondary`,size:`small`,onClick:n,children:i})]}),t[2]=n,t[3]=a),a}var Z,Q,$,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar=e((()=>{Z=le(),S(),Ve(),ze(),Ee(),A(),m(),Re(),h(),je(),ke(),B(),Y(),k(),Oe(),ee(),_(),C(),V(),N(),p(),r(),Ue(),H(),Me(),w(),Q=n(z()),L(),Xt(),yt(),et(),dn(),ve(),hn(),en(),En(),nt(),be(),St(),Xn(),$=fe(),vr=432,yr=120,br=4,xr=15e3,Sr=100,Cr=`allow-scripts allow-same-origin allow-forms`,wr=`allow-scripts allow-same-origin`,Tr=12e3,Er=/<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g,Dr=/([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g,Or=new Set([`svg`,`path`]),kr=new Set([`d`,`fill`,`height`,`viewBox`,`width`,`xmlns`])}));export{Qe as S,yt as _,Ar as a,et as b,Hn as c,sn as d,dn as f,it as g,xt as h,Zn as i,Un as l,bt as m,gr as n,Wn as o,St as p,mr as r,Xn as s,Qn as t,on as u,tt as v,$e as x,nt as y};
//# sourceMappingURL=e3b746a6-jiwe5mf9sackk8k3.js.map