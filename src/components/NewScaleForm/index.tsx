import Modal from 'react-modal'
import styles from "./styles.module.scss"


interface NewScaleFormProps {
    isOpen: boolean;
    onRequestClose: () => void
}
export function NewScaleForm({ isOpen, onRequestClose }: NewScaleFormProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >

            <div className={styles.container}>
                <form action="">
                    <div className={styles.input_group}>
                        <label htmlFor="date">Data</label>
                        <input type="text" name="date" id="date" />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="verse">Versículo</label>
                        <input type="text" name="verse" id="verse" />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="openingPrayer">Oração Inicial</label>
                        <input type="text" name="openingPrayer" id="openingPrayer" />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="praise">Louvor</label>
                        <input type="text" name="praise" id="praise" />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="word">Palavra</label>
                        <input type="text" name="word" id="word" />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="closingPrayer">Oração final</label>
                        <input type="text" name="closingPrayer" id="closingPrayer" />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="lunch">Lanche</label>
                        <input type="text" name="lunch" id="lunch" />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="description">Descrição para a próxima célula</label>
                        <input type="text" name="description" id="description" />
                    </div>

                    <button>
                        Salvar
                    </button>
                </form>

            </div>

        </Modal>
    )
}