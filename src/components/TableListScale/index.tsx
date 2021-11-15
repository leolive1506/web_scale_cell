import { useEffect, useState } from 'react'
import { BsWhatsapp, BsPen, BsTrash } from 'react-icons/bs'
import { api } from '../../services/api'
import styles from "./styles.module.scss"


interface Scales {
    id: number,
    openingPrayer: string,
    verse: string,
    praise: string,
    word: string,
    closingPrayer: string,
    lunch: string,
    date: string,
}
export function TableListScale() {
    const [hasAdmin, setHasAdmin] = useState(true)
    const [scales, setScales] = useState<Scales[]>([])

    useEffect(() => {
        api.get("/scales")
            .then(res => setScales(res.data.scales))
    }, [])

    return (
        <table className={styles.tableList}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>data</th>
                    <th>oração</th>
                    <th>versiculo</th>
                    <th>louvor</th>
                    <th>palavra</th>
                    <th>oração final</th>
                    <th>lanche</th>
                    {
                        !!hasAdmin ? <th className={styles.titleActions}>ações</th> : null
                    }

                </tr>
            </thead>

            <tbody>
                {
                    scales.map(scale => {
                        const [date, time] = scale.date.split("T")
                        function handleShowFormatDatetime() {
                            const DateFormat = new Intl.DateTimeFormat('pt-BR').format(
                                new Date(date)

                            )

                            return `${DateFormat} ${time}`
                        }
                        return (
                            <tr key={scale.id}>
                                <td>{scale.id}</td>
                                <td>
                                    {

                                        handleShowFormatDatetime()

                                    }
                                </td>
                                <td>{scale.openingPrayer}</td>
                                <td>{scale.verse}</td>
                                <td>{scale.praise}</td>
                                <td>{scale.word}</td>
                                <td>{scale.closingPrayer}</td>
                                <td>{scale.lunch}</td>
                                {
                                    !!hasAdmin ?
                                        <td className={styles.actions}>
                                            <BsWhatsapp size="24" />
                                            <BsPen size="24" />
                                            <BsTrash size="24" />
                                        </td>
                                        : null
                                }

                            </tr>
                        )
                    })

                }

            </tbody>
        </table>
    )
}