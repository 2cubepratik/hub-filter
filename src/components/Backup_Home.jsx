import { useState } from "react"
import data from '../data.json'

function Backup_Home() {
    const [firstname, setSearch] = useState("");


    return (
        <>
            <h2>HTML Table</h2>
            Fachgebiet : <input
                type="text"
                placeholder="search"
                onChange={(e) => {
                    setSearch(e.target.value)
                }}
            />
            <table>
                <tbody>
                    {
                        data.map((item, index) => (
                            <>
                                {
                                    item.filter((val) => {
                                        // console.log(val)
                                        if (firstname === "") {
                                            return val;
                                            // console.log(val)
                                        } else if (
                                            val.fachbereich___spezifikationen_website.toString().toLowerCase().includes(firstname.toLowerCase())
                                        ) {
                                            return val;
                                        }
                                    }).map((subitem, i) => {
                                        return (
                                            <>
                                                <tr >
                                                    <td>{subitem.seo_titel}</td>
                                                    <tr>
                                                        <th>Fachgebiet</th>
                                                        <td>{subitem.fachbereich___spezifikationen_website}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Position</th>
                                                        <td>{subitem.positionen_website}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Vertragsart</th>
                                                        <td>{subitem.stellenart}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Anzeigeort</th>
                                                        <td>{subitem.stadt}</td>
                                                    </tr>
                                                </tr>
                                            </>
                                        )
                                    })

                                }
                            </>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Backup_Home;
