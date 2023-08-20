import ageCalculator from '../../../static/ageCalculator';
import { GiTunisia, GiMale } from 'react-icons/gi';
import styled from 'styled-components';

const StyledInfoCommand = styled.div`
	display: flex;
	align-items: self-start;
	justify-content: center;
	flex-direction: column;

	& span {
		color: #87dccb;
	}
`;

export default function InfoCommand() {
	return (
		<StyledInfoCommand>
			<span>
				name: <span>Mouhib Ouni</span>
			</span>
			<span>
				age: <span>{ageCalculator()}</span>
			</span>
			<span>
				nationality{' '}
				<span>
					{' '}
					<GiTunisia size={19} color="red" /> Tunisian
				</span>
			</span>
			<span>
				gender{' '}
				<span>
					<GiMale color="red" /> Male
				</span>
			</span>
		</StyledInfoCommand>
	);
}
