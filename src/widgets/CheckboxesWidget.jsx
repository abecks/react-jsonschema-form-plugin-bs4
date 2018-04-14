import React from 'react'
import PropTypes from 'prop-types'

function selectValue(value, selected = [], all) {
	const at = all.indexOf(value)
	const updated = selected.slice(0, at).concat(value, selected.slice(at))
	// As inserting values at predefined index positions doesn't work with empty
	// arrays, we need to reorder the updated selection to match the initial order
	return updated.sort((a, b) => all.indexOf(a) > all.indexOf(b))
}

function deselectValue(value, selected) {
	const newSelected = selected.filter(v => v !== value)
	// Return undefined instead of an empty array so that 'required'
	// validation still works and 'minItems' is not required on the schema
	if (Object.keys(newSelected).length === 0) {
		return undefined
	} else {
		return newSelected
	}
}

function CheckboxesWidget(props) {
	const { id, disabled, options, value, autofocus, readonly, onChange } = props
	const { enumOptions, inline } = options

	return (
		<div className="form-checkboxes" id={id}>
			{enumOptions.map((option, index) => {
				const checked = !!(value && value.indexOf(option.value) !== -1)
				const disabledCls = disabled || readonly ? 'disabled' : ''
				const checkbox = (
					<input
						className="form-check-input"
						type="checkbox"
						id={`${id}_${index}`}
						name={id}
						checked={checked}
						disabled={disabled || readonly}
						autoFocus={autofocus && index === 0}
						onChange={event => {
							const all = enumOptions.map(({ value }) => value)
							if (event.target.checked) {
								onChange(selectValue(option.value, value, all))
							} else {
								onChange(deselectValue(option.value, value))
							}
						}}
					/>
				)
				return (
					<div
						key={index}
						className={`form-check ${
							inline ? 'form-check-inline' : ''
						} ${disabledCls}`}
					>
						{checkbox}
						<label className="form-check-label" htmlFor={`${id}_${index}`}>
							{option.label}
						</label>
					</div>
				)
			})}
		</div>
	)
}

CheckboxesWidget.defaultProps = {
	autofocus: false,
	options: {
		inline: false,
	},
}

CheckboxesWidget.propTypes = {
	schema: PropTypes.object.isRequired,
	id: PropTypes.string.isRequired,
	options: PropTypes.shape({
		enumOptions: PropTypes.array,
		inline: PropTypes.bool,
	}).isRequired,
	value: PropTypes.any,
	required: PropTypes.bool,
	readonly: PropTypes.bool,
	disabled: PropTypes.bool,
	multiple: PropTypes.bool,
	autofocus: PropTypes.bool,
	onChange: PropTypes.func,
}

export default CheckboxesWidget
