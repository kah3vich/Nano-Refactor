import { consoleLog } from '../src/utils/other';

/* 

* 💡 ru: 

* 💡 en: 

*/

describe('Utils - Other', () => {
	test('Function - consoleLog', () => {
		expect(consoleLog('Refactor', 'log')).toBe('✅ Refactor');
	});
});


