import{n as e}from"./f025431a-ehagpvg3m4e1cduv.js";import{V3t as t,q3t as n}from"./4813494d-jimgmlhlquokyuui.js";import{It as r,Mt as i}from"./2340486e-cq9nrp99ol4x4jou.js";function a(e){if(e.trigger.type!==`API`)return null;let t=Reflect.get(e,`api_trigger_id`);return typeof t==`string`?t:e.id}function o(e){return(e??[]).filter(e=>e.trigger.type===`API`)}function s(){return t(`1010509169`)}function c(e){return`${u}${encodeURIComponent(e)}/trigger`}function l(e){return`curl -sS -X POST \\
  "${c(e)}" \\
  -H "Authorization: Bearer $AGENT_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "input": "Hello world"
  }' \\
  -w '\\nHTTP %{response_code}\\n'`}var u,d,f,p,m=e((()=>{n(),i(),u=`https://api.chatgpt.com/v1/workspace_agents/`,d=()=>({deployment_id:r(),api_trigger:{type:`API`,instructions:`Run this agent from the API channel.`},materialized_trigger_id:null,pending_deletion:!1}),f=e=>e.pending_deletion!==!0,p=e=>e.materialized_trigger_id??null}));export{o as a,m as c,p as i,f as l,c as n,a as o,l as r,s,d as t};
//# sourceMappingURL=e2ef8fe8-go8t2y8a1ndwinws.js.map