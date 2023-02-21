import styles from './login.module.scss';
import { Link } from "react-router-dom";

const Login = (props) => {

    return (
        <div className={styles.container}>
            <form className={styles.wrapper}>
                <h2>LOGIN</h2>
                <section className={styles.group}>
                    <input
                        type="text"
                        size="30"
                        className={styles.input}
                        name="email"
                        required
                    />
                    <label htmlFor="email" className={styles.label}>
                        Email
                    </label>
                </section>
                <section className={styles.group}>
                    <input
                        type="password"
                        minLength="8"
                        className={styles.input}
                        name="password"
                        required
                    />
                    <label htmlFor="password" className={styles.label}>
                        Password
                    </label>
                </section>
                <button type="button" className={styles.btn}>
                    LOGIN
                </button>
                <button type="button" className={styles.btn}>
                    <Link to="/" className={styles.link}>Back Home</Link>
                </button>
                <span className={styles.footer}></span>
            </form>
        </div>
    );
}

export default Login;