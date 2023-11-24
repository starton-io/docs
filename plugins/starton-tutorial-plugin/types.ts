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
export type HomeTutorialDifficulty = 'getting-started' | 'beginner' | 'intermediate' | 'advanced'
export const TUTORIAL_DIFFICULTY: Record<HomeTutorialDifficulty, string> = {
	'getting-started': 'Getting Started',
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
	'smart-contract-management': 'Smart Contracts Management',
	'smart-contract-library': 'Smart Contract Library',
	'transaction-management': 'Transaction Management',
	'network-monitoring': 'Network Monitoring',
	wallets: 'Wallets',
	'file-storage': 'File Storage',
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
	readingTime: string
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
			}
			permalink: string
			readingTime: number
			tags: Array<string>
			title: string
		}
	}
}
