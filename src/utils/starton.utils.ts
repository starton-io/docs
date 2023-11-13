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
}
