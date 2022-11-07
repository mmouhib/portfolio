import '../../../styles/console/commands/socialsCommand.scss';
import { MdEmail } from 'react-icons/md';
import { BsInstagram, BsTwitter, BsFacebook, BsLinkedin } from 'react-icons/bs';

export default function SocialsCommand() {
	return (
		<div className="socials-command-container">
			<span>{<BsFacebook />}/iwritebadcode</span>
			<span>{<BsInstagram />}/iwritebadcode</span>
			<span>{<BsTwitter />}/deflectoo</span>
			<span>{<BsLinkedin />}/deflectoo</span>
			<span>{<MdEmail />}:mouhibouni654@gmail.com</span>
		</div>
	);
}
