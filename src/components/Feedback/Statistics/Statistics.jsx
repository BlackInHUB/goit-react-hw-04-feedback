import React from "react";
import PropTypes from 'prop-types'
import { StatWrapper, StatInfo, Title } from "./Statistics.styled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    return (
        <StatWrapper>
            <Title>Statistics</Title>
            <StatInfo>Good: {good}</StatInfo>
            <StatInfo>Neutral: {neutral}</StatInfo>
            <StatInfo>Bad: {bad}</StatInfo>
            <StatInfo>Total: {total}</StatInfo>
            <StatInfo>Positive feedback: {positivePercentage}%</StatInfo>
        </StatWrapper>
    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number

}