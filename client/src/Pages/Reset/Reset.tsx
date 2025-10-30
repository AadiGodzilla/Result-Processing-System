import styles from "./Reset.module.css";

function ResetPage() {
    return (
        <>
            <main className={styles.main_container}>
                <form method="POST" className={styles.reset_container}>
                    <h1 className={styles.reset_title}>RESET PASSWORD</h1>
                    <div className={styles.form_field}>
                        <div className={styles.sub_field}>
                            <label htmlFor="password">New Password</label>
                            <span className={styles.error}></span>
                        </div>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div className={styles.form_field}>
                        <div className={styles.sub_field}>
                            <label htmlFor="confirm">Confirm Password</label>
                            <span className={styles.error}></span>
                        </div>
                        <input type="confirm" name="confirm" id="confirm" />
                    </div>
                    <a href="/login" className={styles.back}>
                        Back to Login
                    </a>
                    <button>RESET</button>
                </form>
            </main>
        </>
    );
}

export default ResetPage;
