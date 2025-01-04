import styles from "../assets/styles/Statistics.module.css"
import { useTranslation } from "react-i18next";

const Statistics = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.stat}>
    <div>
        <h3>{t("employeess")}</h3>
        <p className={styles.firstColor}>2,303</p>
        <div className={`${styles.progress} ${styles.firstStatProgress}`}></div>
    </div>
    <div>
        <h3>{t("pendingTasks")}</h3>
        <p className={styles.secondColor}>500</p>
        <div className={`${styles.progress} ${styles.secondStatProgress}`}></div>
    </div>
    <div>
        <h3>{t("complatedTaskes")}</h3>
        <p className={styles.thirdColor}>1,050</p>
        <div className={`${styles.progress} ${styles.thiedStatProgress}`}></div>
    </div>
    <div>
        <h3> {t("delatedTasks")}</h3>
        <p className={styles.fourthColor}>14</p>
        <div className={`${styles.progress} ${styles.fourthStatProgress}`}></div>
    </div>
  </div>
  );
};

export default Statistics;
