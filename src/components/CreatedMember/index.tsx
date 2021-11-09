import { ComponentFormLoginAndCreatedLogin } from '../ComponentFormLoginAndCreatedLogin'
import styles from './styles.module.scss'


export function CreatedMember() {
    return (
        <ComponentFormLoginAndCreatedLogin title="Novo membro">
            <div className={styles.actions}>
                <button>Concluir</button>
            </div>
        </ComponentFormLoginAndCreatedLogin>
    )
}