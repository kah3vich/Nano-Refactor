import { consoleLog } from './utils/other';

import * as vscode from 'vscode';

export const activate = (context: vscode.ExtensionContext) => {
	const disposable = vscode.commands.registerCommand('refactor', () => {
		consoleLog('Refactor', 'log');

		context.subscriptions.push(disposable);
	});
};

export const deactivate = () => {};
