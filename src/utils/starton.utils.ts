/*
| Developed by Starton
| Filename : starton.utils.ts
| Author : Philippe DESPLATS (philippe@di-rupt.com)
*/

/*
|--------------------------------------------------------------------------
| Starton utils class
|--------------------------------------------------------------------------
*/
export class StartonUtils {
	// Date
	// ----------------------------------------------------------------------------

	/**
	 * Return `Date` JavaScript object from year and month.
	 * @param year For example : 2023
	 * @param month From 1 for January to 12 for December. For example : 11 (November)
	 */
	static getDateFromYearAndMonth(year: number, month: number) {
		return new Date(Date.UTC(year, month - 1))
	}

	// String
	// ----------------------------------------------------------------------------

	/**
	 * Return a string excerpt from a text.
	 * @param text
	 * @param maxLength
	 */
	static excerptFromString(text: string, maxLength: number) {
		if (text.length <= maxLength) {
			return text
		}

		let excerpt = text.substring(0, maxLength)
		const lastSpace = excerpt.lastIndexOf(' ')
		if (lastSpace > 0) {
			excerpt = excerpt.substring(0, lastSpace)
		}

		return `${excerpt}...`
	}

	/**
	 * Return a string with the first letter in uppercase and the others in lowercase.
	 * @param text
	 */
	static toCapitalize(text: string) {
		if (!text) return text

		return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
	}
}
