import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";

const ErrorMessageContainer = styled.div`
  margin-top: .5rem;
  font-size: .75rem;
  color: #721c24
`

const ValidationError = ({message}) => {
    return (
        <ErrorMessageContainer>
            {message}
        </ErrorMessageContainer>
    )
}

ValidationError.propTypes = {
    message: PropTypes.string.isRequired,
}

export default ValidationError
