import { MdError } from 'react-icons/md';
import styled from 'styled-components';

const StyledAlert = styled.div`
	width: 100%;
	height: 30px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10%;
	background-color: #fed7d7;
	color: black;

	& p {
		font-weight: normal;

		& span {
			font-weight: bold;
		}
	}
`;

export default function FormErrorAlert() {
	return (
		<StyledAlert>
			<MdError color="red" size={20} />
			<p>
				<span className="error-title">Error! </span>
				Invalid data
			</p>
		</StyledAlert>
	);
}
