import styles from "../assets/styles/Statistics.module.css"
const Statistics = () => {
  return (
    <div className={styles.stat}>
    <div>
        <h3>Employees</h3>
        <p className={styles.firstColor}>2,303</p>
        <div className={`${styles.progress} ${styles.firstStatProgress}`}></div>
    </div>
    <div>
        <h3>Pending Tskes</h3>
        <p className={styles.secondColor}>500</p>
        <div className={`${styles.progress} ${styles.secondStatProgress}`}></div>
    </div>
    <div>
        <h3>Completed tasks</h3>
        <p className={styles.thirdColor}>1,050</p>
        <div className={`${styles.progress} ${styles.thiedStatProgress}`}></div>
    </div>
    <div>
        <h3>Delayed Tasks</h3>
        <p className={styles.fourthColor}>14</p>
        <div className={`${styles.progress} ${styles.fourthStatProgress}`}></div>
    </div>
  </div>
  );
};

export default Statistics;
