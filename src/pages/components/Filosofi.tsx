import React from 'react'
import Filosofo from './Filosofo'
import filosofi from '../../utils/filosofi.json'
import Link from 'next/link'

const Filosofi = () => {
    return (
        <section className='flex justify-center w-[100%] min-h-screen md:w-[80%] border-x-2 border-slate-400'>
            <ul>
                {filosofi.map((filosofo) => (
                    <li key={filosofo.nome}>
                        <Link href={`/filosofi/${filosofo.path}`}>
                            {filosofo.nome}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Filosofi
