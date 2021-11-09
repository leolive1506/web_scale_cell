import styles from "./styles.module.scss"

interface HeaderProps {
    onOpenNewScale: () => void
}
export function Header({ onOpenNewScale }: HeaderProps) {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1>Escalas da célula</h1>
                <button onClick={onOpenNewScale}>Cadastrar nova escala</button>
            </div>
        </header>
    )
}