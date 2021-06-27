import { FC } from "react";
import classNames from "classnames";

import styles from "./AppCounter.module.scss";

import AppButton from "~/components/atoms/AppButton";

interface AppCounterProps extends React.HTMLAttributes<HTMLDivElement> {
  decrement: () => void;
  increment: () => void;
}
const AppCounter: FC<AppCounterProps> = ({
  decrement,
  increment,
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={classNames(className, styles["app-counter"])}>
      <span className={styles["app-counter__text"]}>
        Current Count: {children}
      </span>
      <AppButton
        className="counter-increment"
        aria-label="Increment value"
        onClick={increment}
      >
        Increment
      </AppButton>
      <AppButton
        className="counter-decrement"
        aria-label="Decrement value"
        onClick={decrement}
      >
        Decrement
      </AppButton>
    </div>
  );
};

export default AppCounter;
