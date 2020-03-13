export type Cup = {
	id:string;
	name:string;
	obtained:Date;
	icon:'award'|'medal'|'crown'|'trophy'|'star'|'shield-alt'|'biohazard';
};

export const cupsMock:Cup[] = [
	{
		id: '12345',
		name: 'Primera batalla',
		obtained: new Date(),
		icon: 'award'
	},
	{
		id: '12346',
		name: 'Primera desafío',
		obtained: new Date(),
		icon: 'star'
	},
	{
		id: '12347',
		name: 'Completaste una campaña',
		obtained: new Date(),
		icon: 'trophy'
	}
];
