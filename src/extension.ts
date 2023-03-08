import { consoleLog } from './utils/other';

import * as vscode from 'vscode';

export const activate = (context: vscode.ExtensionContext) => {
	const disposable = vscode.commands.registerCommand('nano-refactor', () => {
		consoleLog('Nano Refactor', 'log');

		context.subscriptions.push(disposable);
	});
};

export const deactivate = () => {};
