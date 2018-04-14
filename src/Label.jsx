import React from 'react'
import PropTypes from 'prop-types'

function Label(props) {
	const { label, id } = props
	if (!label) {
		// See #312: Ensure compatibility with old versions of React.
		return <div />
	}

	return <label htmlFor={id}>{label}</label>
}
Label.propTypes = {
	label: PropTypes.string,
	required: PropTypes.bool,
	id: PropTypes.string,
}

export default Label
