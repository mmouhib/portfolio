import styled from 'styled-components';

import { MdEmail } from 'react-icons/Md';
import { BsInstagram, BsTwitter, BsFacebook, BsLinkedin } from 'react-icons/Bs';

const StyledSocialsCommand = styled.div`
	display: flex;
	align-items: self-start;
	justify-content: center;
	flex-direction: column;
`;

export default function SocialsCommand() {
	return (
		<StyledSocialsCommand>
			<span>{<BsFacebook />}/iwritebadcode</span>
			<span>{<BsInstagram />}/iwritebadcode</span>
			<span>{<BsTwitter />}/deflectoo</span>
			<span>{<BsLinkedin />}/deflectoo</span>
			<span>{<MdEmail />}:mouhibouni654@gmail.com</span>
		</StyledSocialsCommand>
	);
}
