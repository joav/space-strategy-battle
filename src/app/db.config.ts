import { DBConfig } from 'ngx-indexed-db';

export const dbConfig: DBConfig  = {
	name: 'space-strategy-battle',
	version: 1,
	objectStoresMeta: [
		{
			store: 'players',
			storeConfig: {keyPath: 'id', autoIncrement: false},
			storeSchema: [
				{
					name: 'name',
					keypath: 'name',
					options: {unique: false}
				},
				{
					name: 'actives',
					keypath: 'actives',
					options: {unique: false}
				},
				{
					name: 'boards',
					keypath: 'boards',
					options: {unique: false}
				},
				{
					name: 'cups',
					keypath: 'cups',
					options: {unique: false}
				},
				{
					name: 'battles',
					keypath: 'battles',
					options: {unique: false}
				},
				{
					name: 'finished',
					keypath: 'finished',
					options: {unique: false}
				},
			]
		},
		{
			store: 'stories',
			storeConfig: {keyPath: 'id', autoIncrement: false},
			storeSchema: [
				{
					name: 'name',
					keypath: 'name',
					options: {unique: false}
				}
			]
		},
		{
			store: 'campaigns',
			storeConfig: {keyPath: 'id', autoIncrement: false},
			storeSchema: [
				{
					name: 'name',
					keypath: 'name',
					options: {unique: false}
				},
				{
					name: 'intro',
					keypath: 'intro',
					options: {unique: false}
				},
				{
					name: 'story',
					keypath: 'story',
					options: {unique: false}
				}
			]
		},
		{
			store: 'battles',
			storeConfig: {keyPath: 'id', autoIncrement: false},
			storeSchema: [
				{
					name: 'name',
					keypath: 'name',
					options: {unique: false}
				},
				{
					name: 'intro',
					keypath: 'intro',
					options: {unique: false}
				},
				{
					name: 'dificult',
					keypath: 'dificult',
					options: {unique: false}
				},
				{
					name: 'board',
					keypath: 'board',
					options: {unique: false}
				},
				{
					name: 'ia',
					keypath: 'ia',
					options: {unique: false}
				},
				{
					name: 'cup',
					keypath: 'cup',
					options: {unique: false}
				},
				{
					name: 'campaign',
					keypath: 'campaign',
					options: {unique: false}
				},
			]
		},
	]
};
