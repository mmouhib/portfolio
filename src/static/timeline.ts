import { ITimeline } from '../utils/types';
import { TbSchool } from 'react-icons/tb';
import { MdOutlineWork } from 'react-icons/md';

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
			'Started information system development bachelor at Higher Institute of Technological Studies of Rades',
		icon: TbSchool,
	},

	{
		title: 'Initiation internship',
		duration: 'sep. 2021',
		content: 'Passed  my first internship at AMI insurances',
		icon: MdOutlineWork,
	},

	{
		title: 'Perfection internship',
		duration: 'Jan. 2022 - Feb 2022',
		content:
			'Passed my second internship at The National Center for Training Trainers and Training Engineering (CENAFFIF)',
		icon: MdOutlineWork,
	},
];

export default timelineMilestones;
