import React, { useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import ReactImageMagnify from 'react-image-magnify'
// import MagicZoom from 'react-magic-zoom'

type ImmagineProps = {
    img: StaticImageData,
    url: string
}

const Immagine = ({ img, url }: ImmagineProps) => {

    return (
        <>
            {/* <script src="magiczoomplus/magiczoomplus.js"></script> */}
            <section className=' border-2 border-slate-400 rounded-sm'>
                {/* <MagicZoom>
                    <Image alt='immagine' src={img} />
                    <img src={url} alt="img" />
                </MagicZoom> */}

                {/* <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: url
                    },
                    largeImage: {
                        src: url,
                        width: 1500,
                        height: 2800
                    },
                    isHintEnabled: true,
                    shouldUsePositiveSpaceLens: false,
                }} /> */}
            </section>
        </>)
}

export default Immagine