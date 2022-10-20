import styled from 'styled-components';
import { useEffect, useState } from 'react';
import colors from '../../utils/colors';

const StyledTypewriter = styled.div`
	border-right: 4px solid purple;
	padding-right: 2px;
	width: fit-content;
	font-family: 'JetBrains Mono', sans-serif;
	font-size: 4vw;
	color: ${colors.darkTheme.mainColor.normal};
`;

//todo: fix responsive design
export default function Typewriter() {
	const name: string = 'Mouhib Ouni';
	const [word, setWord] = useState<string>(name[0]);

	useEffect(() => {
		if (word.length < name.length) {
			setTimeout(() => {
				setWord(word + name[word.length]);
			}, 200);
		}
	}, [word]);

	return <StyledTypewriter>{word}</StyledTypewriter>;
}
