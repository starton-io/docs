/*
| Developed by Starton
| Filename : types.ts
| Author : Philippe DESPLATS (philippe@starton.com)
*/

/*
|--------------------------------------------------------------------------
| Difficulty
|--------------------------------------------------------------------------
*/
export type HomeTutorialDifficulty = 'beginner' | 'intermediate' | 'advanced'
export const TUTORIAL_DIFFICULTY: Record<HomeTutorialDifficulty, string> = {
	beginner: 'Beginner',
	intermediate: 'Intermediate',
	advanced: 'Advanced',
}

/*
|--------------------------------------------------------------------------
| Services
|--------------------------------------------------------------------------
*/
export type HomeTutorialServices =
	| 'smart-contract-management'
	| 'smart-contract-library'
	| 'transaction-management'
	| 'network-monitoring'
	| 'wallets'
	| 'file-storage'
export const TUTORIAL_SERVICES: Record<HomeTutorialServices, string> = {
	'smart-contract-management': 'Deploy',
	'smart-contract-library': 'Interact',
	'transaction-management': 'Monitor',
	'network-monitoring': 'Webooks',
	wallets: 'Wallets',
	'file-storage': 'Storage',
}

/*
|--------------------------------------------------------------------------
| Data structure
|--------------------------------------------------------------------------
*/
export interface Authors {
	name: string
	email: string
	imageURL: string
	title: string
}

export interface TutorialMetadata {
	date: Date
	readingTime: string | number
	difficulty: HomeTutorialDifficulty
	title: string
	description: string
	link: string
	authors: Array<Authors>
}

export interface RecentTutorial {
	metadata: TutorialMetadata
	// TODO: Add the MDX excerpt as a JSX component prop
}

export interface TutorialList {
	content: {
		metadata: {
			authors: Array<Authors>
			date: Date
			description: string
			frontMatter: {
				difficulty: HomeTutorialDifficulty
				services: Array<HomeTutorialServices>
				featured: boolean
			}
			permalink: string
			readingTime: number
			tags: Array<string>
			title: string
		}
	}
}
