import { MdEmail } from 'react-icons/md';
import { BsInstagram, BsTwitter, BsFacebook, BsLinkedin } from 'react-icons/bs';
import styled from 'styled-components';

const StyledInfoCommand = styled.div`
	display: flex;
	align-items: self-start;
	justify-content: center;
	flex-direction: column;
`;

export default function SocialsCommand() {
	return (
		<StyledInfoCommand>
			<span>{<BsFacebook />}/iwritebadcode</span>
			<span>{<BsInstagram />}/iwritebadcode</span>
			<span>{<BsTwitter />}/deflectoo</span>
			<span>{<BsLinkedin />}/deflectoo</span>
			<span>{<MdEmail />}:mouhibouni654@gmail.com</span>
		</StyledInfoCommand>
	);
}
