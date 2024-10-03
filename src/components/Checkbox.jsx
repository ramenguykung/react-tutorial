import PropTypes from "prop-types"

export default function Checkbox({ text, isChecked }) {
	let result = ''
	if (isChecked) {
		result = (
			<div>{ text } is completed!</div>
		)
	} else {
		result = (
			<div>{ text } is progressing…</div>
		)
	}
	
	return (
		<>
			{ result }
		</>
	)
}

Checkbox.propTypes = {
	text: PropTypes.string,
	isChecked: PropTypes.bool
}