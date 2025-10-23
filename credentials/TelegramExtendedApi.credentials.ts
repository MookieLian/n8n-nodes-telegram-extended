import type { Icon, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';

export class TelegramExtendedApi implements ICredentialType {
	name = 'telegramExtendedApi';
	displayName = 'Telegram Extended API';
    icon?: Icon = 'file:TelegramExtended.svg';
	documentationUrl = 'https://docs.n8n.io/integrations/builtin/credentials/telegram/';

	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description:
				'Chat with the <a href="https://telegram.me/botfather">bot father</a> to obtain the access token',
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://api.telegram.org',
			description: 'Base URL for Telegram Bot API',
		},
	];
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}/bot{{$credentials.accessToken}}',
			url: '/getMe',
		},
	};
}