import { FunctionComponent } from "react";
import styles from "./Animation1.module.css";

export type Animation1Type = {
  className?: string;
};

const Animation1: FunctionComponent<Animation1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.animation, className].join(" ")}>
      <img className={styles.backgroundIcon} alt="" src="/background@2x.png" />
      <b className={styles.relevance}>Relevance</b>
      <div className={styles.frameParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-1.svg"
        />
        <div className={styles.logoWrapper}>
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/logo.svg"
          />
        </div>
      </div>
      <b className={styles.crafting}>Crafting</b>
      <div className={styles.scrollDown}>
        <div className={styles.scrollDownWrapper}>
          <div className={styles.scrollDown1}>scroll down</div>
        </div>
        <img className={styles.scrollDownChild} alt="" src="/frame-1.svg" />
      </div>
      <div className={styles.cta}>
        <a className={styles.becomeOurClient}>Become our Client</a>
      </div>
    </div>
  );
};

export default Animation1;
