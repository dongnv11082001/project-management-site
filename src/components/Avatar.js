import React from 'react'
import styled from 'styled-components'

export default function Avatar({ src }) {
    return (
        <AvatarContainer className='avatar'>
            <img src={src} alt='user avatar' />
        </AvatarContainer>
    )
}

const AvatarContainer = styled.div`
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;

    & img {
        width: 100%;
        height: 100%;
    }
`

