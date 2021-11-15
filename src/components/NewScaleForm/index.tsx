import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { api } from '../../services/api'
import styles from "./styles.module.scss"


interface NewScaleFormProps {
    isOpen: boolean;
    onRequestClose: () => void
}

Modal.setAppElement("#root")
export function NewScaleForm({ isOpen, onRequestClose }: NewScaleFormProps) {
    const [date, setDate] = useState('')
    const [verse, setVerse] = useState('')
    const [openingPrayer, setOpeningPrayer] = useState('')
    const [praise, setPraise] = useState('')
    const [word, setWord] = useState('')
    const [closingPrayer, setClosingPrayer] = useState('')
    const [lunch, setLunch] = useState('')
    const [description, setDescription] = useState('')

    function handleSubmitFormNewScale(event: FormEvent) {
        event.preventDefault()

        const data = {
            date,
            verse,
            openingPrayer,
            praise,
            word,
            closingPrayer,
            lunch,
            description
        }

        api.post("/scales", data)

    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <div className={styles.container}>
                <form action="" onSubmit={handleSubmitFormNewScale}>
                    <h1>Preecha abaixo</h1>
                    <div className={styles.input_group}>
                        <label htmlFor="date">
                            Data
                        </label>
                        <input
                            value={date}
                            onChange={e => setDate(e.target.value)}
                            type="datetime-local"
                            name="date"
                            id="date" />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="verse">
                            Versículo
                        </label>
                        <input
                            value={verse}
                            onChange={e => setVerse(e.target.value)}
                            type="text"
                            name="verse"
                            id="verse" />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="openingPrayer">
                            Oração Inicial
                        </label>
                        <input
                            value={openingPrayer}
                            onChange={e => setOpeningPrayer(e.target.value)}
                            type="text"
                            name="openingPrayer"
                            id="openingPrayer" />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="praise">
                            Louvor
                        </label>
                        <input
                            value={praise}
                            onChange={e => setPraise(e.target.value)}
                            type="text"
                            name="praise"
                            id="praise" />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="word">
                            Palavra
                        </label>
                        <input
                            value={word}
                            onChange={e => setWord(e.target.value)}
                            type="text"
                            name="word"
                            id="word" />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="closingPrayer">
                            Oração final
                        </label>
                        <input
                            value={closingPrayer}
                            onChange={e => setClosingPrayer(e.target.value)}
                            type="text"
                            name="closingPrayer"
                            id="closingPrayer" />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="lunch">
                            Lanche
                        </label>
                        <input
                            value={lunch}
                            onChange={e => setLunch(e.target.value)}
                            type="text"
                            name="lunch"
                            id="lunch" />
                    </div>

                    <div className={styles.input_group}>
                        <label htmlFor="description">
                            Descrição para a próxima célula
                        </label>
                        <textarea
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            name="description"
                            id="description" />
                    </div>

                    <button>
                        Salvar
                    </button>
                </form>

            </div>

        </Modal>
    )
}