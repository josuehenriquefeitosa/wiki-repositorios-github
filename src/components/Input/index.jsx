import {InputContainer} from './styles'

export const Input = ({value, onChange}) => {
	return (
		<InputContainer>
			<input value={value} onChange={onChange} />
		</InputContainer>
	)
}


export default Input