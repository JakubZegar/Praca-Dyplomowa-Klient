import React from 'react'
import {SpinnerBG, StyledSpinner} from './SpinnerElements'

function Spinner() {
    return (
        <SpinnerBG>
            <StyledSpinner>
            <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="8"
                />
            </StyledSpinner>
        </SpinnerBG>
    )
}

export default Spinner
