import styled from 'styled-components';

import { AiFillStar, AiOutlineStar } from 'react-icons/Ai';

interface LanguageProgressProps {
	level: number;
}

const StyledLanguageProgress = styled.div``;

export default function LanguageProgress(props: LanguageProgressProps) {
	return (
		<StyledLanguageProgress>
			{[...Array(5)].map((_, index) => {
				if (index < props.level)
					return <AiFillStar key={index} color="white" size={25} />;
				return <AiOutlineStar key={index} color="white" size={25} />;
			})}
		</StyledLanguageProgress>
	);
}
