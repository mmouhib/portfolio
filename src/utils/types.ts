import { IconType } from 'react-icons';

export type tagLabelType =
	| 'programming languages'
	| 'frameworks'
	| 'software'
	| 'databases';

export interface ITimeline {
	title: string;
	duration: string;
	icon: IconType;
	content: string;
}

export interface IModalProps {
	modalIsOpen: boolean;
	setModalIsOpen: (arg: boolean) => void;
}
