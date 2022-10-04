import React from "react";
import { BtnsWrapper, Btn } from "./FeedbackOptions.styled";
import PropTypes from 'prop-types'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const keys = Object.keys(options);
    const btnNameToUpperCase = (key) => {
        return key.charAt(0).toUpperCase() + key.slice(1)
    }

    return (
        <BtnsWrapper>
            {keys.map(key => (<Btn key={key} name={key} type="button" onClick={onLeaveFeedback}>{btnNameToUpperCase(key)}</Btn>))}
        </BtnsWrapper>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.objectOf(PropTypes.number),
    onLeaveFeedback: PropTypes.func,
}
