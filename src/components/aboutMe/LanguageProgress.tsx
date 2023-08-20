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

	& div {
		height: 100%;
		background: #bd56bd;
	}
`;

export default function LanguageProgress(props: LanguageProgressProps) {
	return (
		<div>
			{props.language} {props.level}
			<StyledLanguageProgress>
				<div style={{ width: props.level }}></div>
			</StyledLanguageProgress>
		</div>
	);
}
