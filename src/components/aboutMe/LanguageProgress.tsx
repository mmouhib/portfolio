import styled from 'styled-components';

interface LanguageProgressProps {
	level: string;
	language: string;
}

const StyledLanguageProgress = styled.div`
	width: 200px;
	border: 2px solid #902c93;
	height: 13px;
	border-radius: 10px;
	background: rgba(121, 104, 104, 0.21);
`;

export default function LanguageProgress(props: LanguageProgressProps) {
	return (
		<div>
			<div>
				<span>
					{props.language} {props.level}
				</span>
			</div>
			<StyledLanguageProgress>
				<div
					style={{
						height: '100%',
						width: props.level.toString(),
						background: '#bd56bd',
					}}
				></div>
			</StyledLanguageProgress>
		</div>
	);
}
