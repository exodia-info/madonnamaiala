import React from 'react'

type FilosofoProps = {
    nome: string | undefined
}

const Filosofo = ({ nome }: FilosofoProps) => {
    return (
        <>
            {nome}
        </>
    )
}

export default Filosofo
