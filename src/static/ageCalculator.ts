export default function ageCalculator(): number {
	//calculates the difference between current date and birthdate to get the age
	const currentDateInMilliseconds: number = new Date().valueOf();
	const birthdateMilliseconds: number = new Date('08/31/2001').valueOf();
	const diff: number =
		(currentDateInMilliseconds - birthdateMilliseconds) / 31556952000;
	return Math.round(diff);
}
