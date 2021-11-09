import { ReactChild, ReactChildren } from 'react'
import styles from './styles.module.scss'

interface ComponentProps {
    title: string;
    children: ReactChild | ReactChildren
}
export function ComponentFormLoginAndCreatedLogin({ title, children }: ComponentProps) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>{title}</h1>
                <form action="">
                    <div className={styles.inputGroup}>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" />
                    </div>


                    {children}

                </form>
            </div>
        </div>
    )
}