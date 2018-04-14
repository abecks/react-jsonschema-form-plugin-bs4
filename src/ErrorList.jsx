import React from 'react'
import PropTypes from 'prop-types'

function ErrorList(props) {
	const { errors = [] } = props
	if (errors.length === 0) {
		return <div />
	}
	return (
		<div>
			<ul className="error-detail bs-callout bs-callout-info">
				{errors.map((error, index) => {
					return (
						<li className="text-danger" key={index}>
							{error}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
ErrorList.propTypes = {
	errors: PropTypes.arrayOf(PropTypes.string),
}

export default ErrorList
