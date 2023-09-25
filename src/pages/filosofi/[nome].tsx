import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import filosofi from '../../utils/filosofi.json'
import Filosofo from '../components/Filosofo';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';



const Page: NextPage = () => {

    const router = useRouter()

    const { nome, path, palle } = router.query

    return <>
        <Head>
            <title>{`Il Pensiero di ${nome} in un Disegno`}</title>
        </Head>
        <Layout children={<Filosofo nome='ij' />} />
    </>
}

export default Page