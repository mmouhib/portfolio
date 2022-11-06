import ageCalculator from '../../../static/ageCalculator';
import { GiTunisia, GiMale } from 'react-icons/Gi';
import '../../../styles/console/commands/infoCommand.scss';

export default function InfoCommand() {
	return (
		<div className="info-command-container">
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
		</div>
	);
}
