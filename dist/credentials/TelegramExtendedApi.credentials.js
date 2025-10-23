"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramExtendedApi = void 0;
class TelegramExtendedApi {
    constructor() {
        this.name = 'telegramExtendedApi';
        this.displayName = 'Telegram Extended API';
        this.icon = 'file:TelegramExtended.svg';
        this.documentationUrl = 'https://docs.n8n.io/integrations/builtin/credentials/telegram/';
        this.properties = [
            {
                displayName: 'Access Token',
                name: 'accessToken',
                type: 'string',
                typeOptions: { password: true },
                default: '',
                description: 'Chat with the <a href="https://telegram.me/botfather">bot father</a> to obtain the access token',
            },
            {
                displayName: 'Base URL',
                name: 'baseUrl',
                type: 'string',
                default: 'https://api.telegram.org',
                description: 'Base URL for Telegram Bot API',
            },
        ];
        this.test = {
            request: {
                baseURL: '={{$credentials.baseUrl}}/bot{{$credentials.accessToken}}',
                url: '/getMe',
            },
        };
    }
}
exports.TelegramExtendedApi = TelegramExtendedApi;
//# sourceMappingURL=TelegramExtendedApi.credentials.js.map