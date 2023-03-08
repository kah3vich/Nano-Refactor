import { consoleLog } from '../src/utils/other';

/* 

* 💡 ru: 

* 💡 en: 

*/

describe('Utils - Other', () => {
	test('Function - consoleLog', () => {
		expect(consoleLog('Nano Refactor', 'log')).toBe('✅ Nano Refactor');
	});
});
