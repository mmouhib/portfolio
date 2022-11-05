import styled from 'styled-components';
import ageCalculator from '../../../static/ageCalculator';

import { GiTunisia, GiMale } from 'react-icons/Gi';

const StyledInfoCommand = styled.div`
	display: flex;
	align-items: self-start;
	justify-content: center;
	flex-direction: column;
`;

const InfoDetails = styled.span`
	color: #87dccb;
`;

export default function InfoCommand() {
	return (
		<StyledInfoCommand>
			<span>
				name: <InfoDetails>Mouhib Ouni</InfoDetails>
			</span>
			<span>
				age: <InfoDetails>{ageCalculator()}</InfoDetails>
			</span>
			<span>
				nationality{' '}
				<InfoDetails>
					{' '}
					<GiTunisia size={19} color="red" /> Tunisian
				</InfoDetails>
			</span>
			<span>
				gender{' '}
				<InfoDetails>
					<GiMale color="red" /> Male
				</InfoDetails>
			</span>
		</StyledInfoCommand>
	);
}
