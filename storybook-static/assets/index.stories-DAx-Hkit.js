import{m as i,F as r,w as a,t as d,a as o,b as m,c as h}from"./darkTheme-yaUQMBPA.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t}from"./tokens-CkATKTW6.js";import"./index-2yJIXLcc.js";const l=i({provider:{border:"1px",borderRadius:"5px",padding:"5px"},text:{backgroundColor:t.colorBrandBackground2,color:t.colorBrandForeground2,fontSize:"20px",border:"1px",borderRadius:"5px",padding:"5px"}}),n=()=>{const s=l();return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(r,{className:s.provider,theme:a,children:e.jsx("div",{className:s.text,children:"Web Light Theme"})})}),e.jsx("div",{children:e.jsx(r,{className:s.provider,theme:d,children:e.jsx("div",{className:s.text,children:"Teams Light Theme"})})}),e.jsx("div",{children:e.jsx(r,{className:s.provider,theme:o,children:e.jsx("div",{className:s.text,children:"webDarkTheme"})})}),e.jsx("div",{children:e.jsx(r,{className:s.provider,theme:m,children:e.jsx("div",{className:s.text,children:"Teams Dark Theme"})})}),e.jsx("div",{children:e.jsx(r,{className:s.provider,theme:h,children:e.jsx("div",{className:s.text,children:"teamsHighContrastTheme"})})})]})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};const c=`import {makeStyles} from "@griffel/react";
import {
  FishProvider,
  tokens,
  webLightTheme,
  teamsLightTheme,
  teamsDarkTheme,
  webDarkTheme,
  teamsHighContrastTheme,
} from "fish-ui-xh";

const useStyles = makeStyles({
  provider: {
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
  text: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    fontSize: "20px",
    border: "1px",
    borderRadius: "5px",
    padding: "5px",
  },
});

const Default = () => {
  const styles = useStyles();
  return (
    <>
      <div>
        <FishProvider className={styles.provider} theme={webLightTheme}>
          <div className={styles.text}>Web Light Theme</div>
        </FishProvider>
      </div>
      <div>
        <FishProvider className={styles.provider} theme={teamsLightTheme}>
          <div className={styles.text}>Teams Light Theme</div>
        </FishProvider>
      </div>
      <div>
        <FishProvider className={styles.provider} theme={webDarkTheme}>
          <div className={styles.text}>webDarkTheme</div>
        </FishProvider>
      </div>
      <div>
        <FishProvider className={styles.provider} theme={teamsDarkTheme}>
          <div className={styles.text}>Teams Dark Theme</div>
        </FishProvider>
      </div>
      <div>
        <FishProvider
          className={styles.provider}
          theme={teamsHighContrastTheme}
        >
          <div className={styles.text}>teamsHighContrastTheme</div>
        </FishProvider>
      </div>
    </>
  );
};

export default Default;
`,g={title:"组件/FishProvider",component:r};n.parameters={docs:{source:{code:c}}};const u=["Default"];export{n as Default,u as __namedExportsOrder,g as default};
