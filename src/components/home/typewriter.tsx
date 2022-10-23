import styled from 'styled-components';
import { useEffect, useState, useSyncExternalStore } from 'react';
import colors from '../../utils/colors';

const StyledTypewriter = styled.div`
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
	const [showCursor, setShowCursor] = useState<boolean>(true);

	useEffect(() => {
		if (word.length < name.length) {
			setTimeout(() => {
				setWord(word + name[word.length]);
			}, 200);
		}
		if (word == name) setShowCursor(false);
	}, [word]);

	useEffect(() => {
		setTimeout(() => {
			setShowCursor(!showCursor);
		}, 500);
	}, [showCursor]);

	return (
		<StyledTypewriter
			style={{ borderRight: showCursor ? '4px solid purple' : 'none' }}
		>
			{word}
		</StyledTypewriter>
	);
}
