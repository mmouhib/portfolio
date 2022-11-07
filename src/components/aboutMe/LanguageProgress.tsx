import '../../styles/aboutMe/LanguageProgress.scss';

interface LanguageProgressProps {
	level: string;
	language: string;
}

export default function LanguageProgress(props: LanguageProgressProps) {
	return (
		<div>
			{props.language} {props.level}

			<div className="language-progress-bar-container">
				<div style={{ width: props.level }}></div>
			</div>
		</div>
	);
}
