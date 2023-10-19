import React, { useCallback, useState } from 'react'
import filosofi from '../../utils/filosofi.json'
import Link from 'next/link'
import Image from 'next/image'
import Layout from './Layout'
import Introduzione from '../descrizioni/introduzione.mdx'
import Content from './Content'
import { schopenhauer, feuerbach, marx, comte, bergson, nietzsche, kierkegaard } from 'public/assets'
import { useTextContext } from './TextContext';



const Filosofi = ({ }) => {

    const { highlightedText } = useTextContext();

    return (
        <Layout children={
            <>
                <div className='flex flex-col'>
                    <section className='w-[99vw] md:w-[79vw] px-12 md:px-20 py-4 md:py-8 my-16 overflow-x-hidden max-w-none bg-gradient-to-b from-[#fffed7] to-[#fffbce]'>
                        <div className=' mb-[-80px] overflow-hidden'>
                            <span style={{
                                fontFamily: 'Georgia',
                                fontSize: 180 + 'px',
                                marginRight: 2 + 'vw',
                                padding: 0,
                                alignSelf: 'start'
                            }}>“</span>
                        </div>
                        <Content content={<Introduzione />} />
                        <div className='flex justify-end overflow-hidden mt-[-80px] '>
                            <span style={{
                                fontFamily: 'Georgia',
                                fontSize: 180 + 'px',
                                margin: 0,
                                padding: 0,
                                marginLeft: 2 + 'vw',
                            }}>„</span>
                        </div>
                    </section>

                    <section className='w-[99vw] md:w-[79vw] px-8 md:px-20 py-4 md:py-8 my-20 overflow-x-hidden max-w-none'>
                        <h1 className={` font-['ui-sans-serif'] font-extrabold text-2xl  md:text-4xl border-b-2 border-slate-600 pb-4`}>Eredità Hegeliana: Anti-idealismo e Sinistra hegeliana</h1>
                        <div className='  flex overflow-hidden items-center justify-start gap-2 md:gap-8 mt-16 flex-wrap '>
                            <Link href={{ pathname: `filosofi/schopenhauer` }}>
                                <div className='border-2 border-slate-400 rounded-lg z-30 overflow-hidden'>
                                    <Image alt='schopenhauer' src={schopenhauer} className=' hover:scale-105 duration-300   w-[35vw] md:w-[15vw]' />
                                </div>
                                <h1 className=' h-8 font-bold text-xs md:text-lg text-center italic  max-w-[35vw] md:max-w-[15vw'>Arthur Schopenhauer</h1>
                            </Link>
                            <Link href={{ pathname: `filosofi/feuerbach` }}>
                                <div className='border-2 border-slate-400 rounded-lg z-30 overflow-hidden'>
                                    <Image alt='schopenhauer' src={feuerbach} className=' hover:scale-105 duration-300   w-[35vw] md:w-[15vw]' />
                                </div>
                                <h1 className='h-8 font-bold text-xs md:text-lg text-center italic'>Ludwig Feuerbach</h1>

                            </Link>
                            <Link href={{ pathname: `filosofi/marx` }}>
                                <div className='border-2 border-slate-400 rounded-lg z-30 overflow-hidden'>
                                    <Image alt='schopenhauer' src={marx} className=' hover:scale-105 duration-300   w-[35vw] md:w-[15vw]' />
                                </div>
                                <h1 className='h-8 font-bold text-xs md:text-lg text-center italic'>Karl Marx</h1>

                            </Link>
                        </div>
                    </section>
                    <section className='w-[99vw] md:w-[79vw] px-8 md:px-20 py-4 md:py-8 my-20 overflow-x-hidden max-w-none'>
                        <h1 className={` font-['ui-sans-serif'] font-extrabold   text-2xl  md:text-4xl border-b-2 border-slate-600 pb-4`}>Industrializzazione e Progresso: Positivismo e Spiritualismo</h1>

                        <div className='  flex overflow-hidden items-center md:justify-start justify-center gap-2 md:gap-8 mt-16 flex-wrap '>
                            <Link href={{ pathname: `filosofi/comte` }}>
                                <div className='border-2 border-slate-400 rounded-lg z-30 overflow-hidden'>
                                    <Image alt='schopenhauer' src={comte} className=' hover:scale-105 duration-300   w-[35vw] md:w-[15vw]' />
                                </div>
                                <h1 className='h-8 font-bold text-xs md:text-lg text-center italic'>August Comte</h1>

                            </Link>
                            <Link href={{ pathname: `filosofi/bergson` }}>
                                <div className='border-2 border-slate-400 rounded-lg z-30 overflow-hidden'>
                                    <Image alt='schopenhauer' src={bergson} className=' hover:scale-105 duration-300   w-[35vw] md:w-[15vw]' />
                                </div>
                                <h1 className='h-8 font-bold text-xs md:text-lg text-center italic'>Henri Bergson</h1>

                            </Link>
                        </div>
                    </section>
                    <section className='w-[99vw] md:w-[79vw] px-8 md:px-20 py-4 md:py-8 my-20 overflow-x-hidden max-w-none'>
                        <h1 className={` font-['ui-sans-serif'] font-extrabold   text-2xl  md:text-4xl border-b-2 border-slate-600 pb-4`}>I più Grandi Esponenti dell'Esistenzialismo</h1>

                        <div className='  flex overflow-hidden items-center md:justify-start justify-center gap-2 md:gap-8 mt-16 flex-wrap '>
                            <Link href={{ pathname: `filosofi/kierkegaard` }}>
                                <div className='border-2 border-slate-400 rounded-lg z-30 overflow-hidden'>
                                    <Image alt='schopenhauer' src={kierkegaard} className=' hover:scale-105 duration-300   w-[35vw] md:w-[15vw]' />
                                </div>
                                <h1 className='h-8 font-bold text-xs md:text-lg text-center italic max-w-[35vw] md:max-w-[15vw]'>Søren <br className=' flex md:hidden' /> Aabye Kierkegaard</h1>

                            </Link>
                            <Link href={{ pathname: `filosofi/nietzsche` }}>
                                <div className='border-2 border-slate-400 rounded-lg z-30 overflow-hidden max-w-[35vw] md:max-w-[15vw]'>
                                    <Image alt='schopenhauer' src={nietzsche} className=' hover:scale-105 duration-300   w-[35vw] md:w-[15vw]' />
                                </div>
                                <h1 className='h-8 font-bold text-xs md:text-lg text-center italic max-w-[35vw] md:max-w-[15vw]     '>Friedrich Wilhelm Nietzsche</h1>

                            </Link>
                        </div>
                    </section>
                </div>
            </>
        } />

    )
}

export default Filosofi
