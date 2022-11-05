import { ITimeline } from '../utils/types';
import { TbSchool } from 'react-icons/Tb';
import { MdOutlineWork } from 'react-icons/Md';

const timelineMilestones: ITimeline[] = [
	{
		title: 'baccalauréat',
		duration: 'Jul. 2020',
		content: 'Acquired the degree in information technology.',
		icon: TbSchool,
	},

	{
		title: "Started Bachelor's degrees",
		duration: 'Oct. 2020 - Present',
		content:
			'Started information system development bachelor in Higher Institute of Technological Studies of Rades',
		icon: TbSchool,
	},

	{
		title: 'Initiation internship',
		duration: 'sep. 2021',
		content: 'Passed  my first internship in AMI insurances',
		icon: MdOutlineWork,
	},

	{
		title: 'Perfection internship',
		duration: 'Jan. 2022 - Feb 2022',
		content:
			'Passed my second internship in The National Center for Training Trainers and Training Engineering (CENAFFIF)',
		icon: MdOutlineWork,
	},
];

export default timelineMilestones;
