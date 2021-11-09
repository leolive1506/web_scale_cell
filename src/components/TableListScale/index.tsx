import { useState } from 'react'
import { BsWhatsapp, BsPen, BsTrash } from 'react-icons/bs'
import styles from "./styles.module.scss"
export function TableListScale() {
    const [hasAdmin, setHasAdmin] = useState(true)

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
                        !!hasAdmin ? <th className={styles.titleActions}>ações</th> : ""
                    }

                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td>23/10 18h</td>
                    <td>Leo</td>
                    <td>Jorge</td>
                    <td>Luisa</td>
                    <td>Aline</td>
                    <td>Gustavo</td>
                    <td>Gabriel</td>
                    {
                        !!hasAdmin ?
                            <td className={styles.actions}>
                                <BsWhatsapp />
                                <BsPen />
                                <BsTrash />
                            </td>
                            : ""
                    }

                </tr>
            </tbody>
        </table>
    )
}