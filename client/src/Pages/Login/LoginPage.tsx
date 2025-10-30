import styles from "./LoginPage.module.css";

function LoginPage() {
    return (
        <>
            <main className={styles.main_container}>
                <form method="POST" className={styles.login_container}>
                    <h1 className={styles.login_title}>LOGIN FORM</h1>
                    <div className={styles.form_field}>
                        <div className={styles.sub_field}>
                            <label htmlFor="email">Email Address</label>
                            <span className={styles.error}></span>
                        </div>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className={styles.form_field}>
                        <div className={styles.sub_field}>
                            <label htmlFor="password">Password</label>
                            <span className={styles.error}></span>
                        </div>
                        <input type="password" name="password" id="password" />
                    </div>
                    <a href="/reset" className={styles.reset_password}>
                        Forgot Password?
                    </a>
                    <button>LOGIN</button>
                </form>
            </main>
        </>
    );
}

export default LoginPage;
