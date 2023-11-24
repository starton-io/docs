/*
| Developed by Starton
| Filename : types.ts
| Author : Philippe DESPLATS (philippe@starton.com)
*/

export type HomeTutorialDiffculty = 'getting-started' | 'beginner' | 'intermediate' | 'advanced'

export interface Authors {
	name: string
	email: string
	imageURL: string
	title: string
}

export interface TutorialMetadata {
	date: Date
	readingTime: string
	difficulty: HomeTutorialDiffculty
	title: string
	description: string
	link: string
	authors: Array<Authors>
}

export interface RecentTutorial {
	metadata: TutorialMetadata
	// TODO: Add the MDX excerpt as a JSX component prop
}
