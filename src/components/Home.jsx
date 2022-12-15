import { useState } from "react"
import MockData from '../MOCK_DATA.json'

function Home() {
    const [firstname, setFname] = useState("");
    const [lastname, setLname] = useState("");


    return (
        <>
            <h2>HTML Table</h2>
            First Name : <input
                type="text"
                placeholder="search"
                onChange={(e) => {
                    setFname(e.target.value)
                }}
            />
            Last Name : <input
                type="text"
                placeholder="search"
                onChange={(e) => {
                    setLname(e.target.value)
                }}
            />
            <table>
                <tbody>
                    {
                        MockData.filter((val) => {
                            if (firstname === "") {
                                return val;
                                // console.log(val)
                            } else if (
                                val.first_name.toString().toLowerCase().includes(firstname.toLowerCase())
                            ) {
                                return val;
                            }
                        }).map((item) => (
                            <>
                                <tr key={item.id}>
                                    <td>{item.seo_titel}</td>
                                    <tr>
                                        <th>first Name</th>
                                        <td>{item.first_name}</td>
                                    </tr>
                                    <tr>
                                        <th>Last Name</th>
                                        <td>{item.last_name}</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>{item.email}</td>
                                    </tr>
                                    <tr>
                                        <th>Gender</th>
                                        <td>{item.gender}</td>
                                    </tr>
                                </tr>
                            </>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Home;
