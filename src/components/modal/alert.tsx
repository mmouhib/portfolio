import '../../styles/modal/alert.scss';
import { MdError } from 'react-icons/md';

export default function FormErrorAlert() {
	return (
		<div className="alert-container">
			<MdError color="red" size={20} />
			<p>
				<span className="error-title">Error! </span>
				Invalid data
			</p>
		</div>
	);
}
