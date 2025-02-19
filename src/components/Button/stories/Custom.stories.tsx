import {Button, tokens} from "fish-ui-xh";
// import {tokens} from "../../../tokens";
import {makeStyles} from "@griffel/react";

const useClasses = makeStyles({
  root: {
    backgroundColor: "green",
    padding: "100px",
    border: `10px solid ${tokens.colorPaletteBerryBackground1}`,
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
