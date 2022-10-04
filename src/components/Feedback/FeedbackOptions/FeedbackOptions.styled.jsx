import styled from "styled-components";

export const BtnsWrapper = styled.div`
    margin-bottom: ${p => p.theme.space[5]}px;
`

export const Btn = styled.button`
    width: ${p => p.theme.space[7]}px;
    border: transparent;
    outline: none;
    padding: ${p => p.theme.space[3]}px;
    border-radius: ${p => p.theme.radii.normal}px;
    background-color: ${p => p.theme.colors.teal};
    font-size: ${p => p.theme.fontSizes.text}px;
    color: ${p => p.theme.colors.white};
    box-shadow: 0 0 2px 1px ${p => p.theme.colors.teal};
    transition: transform 150ms linear;

    &:not(:last-child) {
        margin-right: ${p => p.theme.space[3]}px;
    }

    &:focus,
    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: none;
    }
`