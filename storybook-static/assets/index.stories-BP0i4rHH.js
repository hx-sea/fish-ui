import{f as x}from"./index-iZ8NAl3x.js";import{m as C,B as b}from"./darkTheme-yaUQMBPA.js";import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{t as S}from"./tokens-CkATKTW6.js";import"./index-2yJIXLcc.js";const h=C({root:{backgroundColor:"green",padding:"100px",border:`10px solid ${S.colorPaletteBerryBackground1}`}}),f=()=>{const k=h();return t.jsx("div",{className:k.root,children:t.jsx(b,{primary:!0,label:"Button"})})};f.__docgenInfo={description:"",methods:[],displayName:"Custom"};const j=`import {Button, tokens} from "fish-ui-xh";
// import {tokens} from "../../../tokens";
import {makeStyles} from "@griffel/react";

const useClasses = makeStyles({
  root: {
    backgroundColor: "green",
    padding: "100px",
    border: \`10px solid \${tokens.colorPaletteBerryBackground1}\`,
  },
});

export const Custom = () => {
  const styles = useClasses();
  return (
    <div className={styles.root}>
      <Button primary label="Button" />
    </div>
  );
};
`,N={title:"Example/Button",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:x()}},r={args:{primary:!0,label:"Button"}},e={args:{label:"Button"}},o={args:{size:"large",label:"Button"}},s={args:{size:"small",label:"Button"}};f.parameters={docs:{source:{code:j}}};var a,n,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Button"
  }
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,m,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Button"
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,i,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Button"
  }
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var g,y,B;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Button"
  }
}`,...(B=(y=s.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const L=["Primary","Secondary","Large","Small","Custom"];export{f as Custom,o as Large,r as Primary,e as Secondary,s as Small,L as __namedExportsOrder,N as default};
