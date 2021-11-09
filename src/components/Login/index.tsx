import { ComponentFormLoginAndCreatedLogin } from '../ComponentFormLoginAndCreatedLogin'
import styles from './styles.module.scss'

export function Login() {
    return (
        <>
            <ComponentFormLoginAndCreatedLogin title="Login">
                <div className={styles.actions}>
                    <button className={styles.login}>Cadastrar</button>
                    <button>Entrar</button>
                </div>
            </ComponentFormLoginAndCreatedLogin>

        </>
    )
}