import { NextPage } from 'next';
import Head from 'next/head';
import filosofi from '../../utils/filosofi.json'
import Filosofo from '../components/Filosofo';


const Page: NextPage = () => {
    return <>
       <Head>
        <title>{`Il Pensiero di ${''}`}</title>
       </Head>
       <Filosofo nome=''/>
    </>
}

export default Page