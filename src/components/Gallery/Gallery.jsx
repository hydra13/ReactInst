import './Gallery.scss';

import React, { useEffect } from 'react';

import { ImageBox } from 'components/ImageBox'

export function Gallery(props) {
    const { pictures, renderItem, onScroll } = props;

    const isNotEndPage = () => {
        return Math.floor(window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight;
    }

    const handleScroll = () => {
        if (isNotEndPage()) {
            return;
        }

        if (typeof onScroll === 'function') {
            onScroll();
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    const renderItemDefault = (picture) => {
        return (
            <ImageBox key={picture.id} {...picture} />
        )
    }

    return (
        <div className="gallery">
            {
                pictures.map(renderItem ? renderItem : renderItemDefault)
            }
        </div>
    )
}