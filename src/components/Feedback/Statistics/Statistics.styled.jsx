import styled from "styled-components";

export const StatWrapper = styled.div`
    
`

export const Title = styled.h2`
    margin-bottom: ${p => p.theme.space[4]}px;
`

export const StatInfo = styled.p`
    font-size: ${p => p.theme.fontSizes.text}px;
    font-weight: ${p => p.theme.fontWeights.middle};

    &:not(:last-child) {
        margin-bottom: ${p => p.theme.space[3]}px;
    }

    &:last-child {
        text-decoration: underline;
    }
`