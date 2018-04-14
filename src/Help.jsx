import React from 'react'
import PropTypes from 'prop-types'

function Help(props) {
	const { rawHelp, rawDescription, schema } = props
	if (!rawHelp) {
		// See #312: Ensure compatibility with old versions of React.
		return <div />
	}

	let helpText = rawHelp
	if (!rawHelp && rawDescription) {
		helpText = rawDescription
	} else if (!rawHelp && schema.description) {
		helpText = schema.description
	}

	if (typeof help === 'string') {
		return <small className="form-text text-muted">{helpText}</small>
	}
	return <div className="form-text text-muted">{rawHelp}</div>
}
Help.propTypes = {
	rawHelp: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	rawDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	schema: PropTypes.object.isRequired,
}

export default Help
