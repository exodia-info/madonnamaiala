import React from 'react'
import Filosofo from './Filosofo'
import filosofi from '../../utils/filosofi.json'
import Link from 'next/link'
import Layout from './Layout'



const Filosofi = ({ }) => {

    return (
        <Layout children={
            <ul>
                {filosofi.map((filosofo) => (
                    <li key={filosofo.nome}>
                        <Link href={{ pathname: `/filosofi/${filosofo.path}`, query: filosofo }}>
                            {filosofo.nome}
                        </Link>
                    </li>
                ))}
            </ul>
        } />

    )
}

export default Filosofi
