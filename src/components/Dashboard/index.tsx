import styles from './styles.module.scss'

import { TableListScale } from '../TableListScale'

export function Dashboard() {
    return (
        <main className={styles.wrapper}>
            <div className={styles.container}>
                <TableListScale />
            </div>
        </main>
    )
}