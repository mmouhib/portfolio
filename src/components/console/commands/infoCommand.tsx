import styled from 'styled-components';

import { GiTunisia, GiMale } from 'react-icons/Gi';

function ageDiff(): number {
	//calculates the difference between current date and birthdate to get the age
	const currentDateInMilliseconds: number = new Date().valueOf();
	const birthdateMilliseconds: number = new Date('08/31/2001').valueOf();
	const diff: number =
		(currentDateInMilliseconds - birthdateMilliseconds) / 31556952000;
	return Math.round(diff);
}

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
				age: <InfoDetails>{ageDiff()}</InfoDetails>
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