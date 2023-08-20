import React, { useEffect, useState } from 'react';

//todo: fix responsive design
export default function Typewriter(props: { text: string }) {
	const [word, setWord] = useState<string>('');
	const [showCursor, setShowCursor] = useState<boolean>(true);

	useEffect(() => {
		/*
		 * added the next check to make sure that the props.text is not undefined because the
		 * hook is applied faster that passing the props that means that when the "word"
		 * state is calculated, the props.text is still undefined
		 * */
		if (props.text) {
			if (word == '') {
				setWord(props.text[0]);
			}

			if (word.length < props.text.length) {
				setTimeout(() => {
					setWord(word + props.text[word.length]);
				}, 200);
			}
		}

		if (word == props.text) setShowCursor(false);
	}, [word]);

	useEffect(() => {
		setTimeout(() => {
			setShowCursor(!showCursor);
		}, 500);
	}, [showCursor]);

	return (
		<span style={{ borderRight: showCursor ? '4px solid purple' : 'none', width: 'fit-content' }}>
			{word}
		</span>
	);
}
