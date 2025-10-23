import type { Icon, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';
export declare class TelegramExtendedApi implements ICredentialType {
    name: string;
    displayName: string;
    icon?: Icon;
    documentationUrl: string;
    properties: INodeProperties[];
    test: ICredentialTestRequest;
}
