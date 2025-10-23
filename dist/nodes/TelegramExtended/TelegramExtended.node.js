"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramExtended = void 0;
const n8n_workflow_1 = require("n8n-workflow");
class TelegramExtended {
    constructor() {
        this.description = {
            displayName: 'Telegram Extended',
            name: 'telegramExtended',
            icon: 'file:TelegramExtended.svg',
            group: ['output'],
            version: 1,
            subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
            description: 'Extended Telegram operations including message forwarding and forum topic management',
            defaults: {
                name: 'Telegram Extended',
            },
            usableAsTool: true,
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            credentials: [
                {
                    name: 'telegramExtendedApi',
                    required: true,
                },
            ],
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Message',
                            value: 'message',
                        },
                        {
                            name: 'Forum Topic',
                            value: 'forumTopic',
                        },
                    ],
                    default: 'message',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ['message'],
                        },
                    },
                    options: [
                        {
                            name: 'Forward Message',
                            value: 'forwardMessage',
                            description: 'Forward a message from one chat to another',
                            action: 'Forward a message',
                        },
                    ],
                    default: 'forwardMessage',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: ['forumTopic'],
                        },
                    },
                    options: [
                        {
                            name: 'Close Forum Topic',
                            value: 'closeForumTopic',
                            description: 'Close a forum topic',
                            action: 'Close a forum topic',
                        },
                        {
                            name: 'Close General Forum Topic',
                            value: 'closeGeneralForumTopic',
                            description: 'Close the general topic in a forum supergroup chat',
                            action: 'Close general forum topic',
                        },
                        {
                            name: 'Create Forum Topic',
                            value: 'createForumTopic',
                            description: 'Create a new forum topic',
                            action: 'Create a forum topic',
                        },
                        {
                            name: 'Delete Forum Topic',
                            value: 'deleteForumTopic',
                            description: 'Delete a forum topic',
                            action: 'Delete a forum topic',
                        },
                        {
                            name: 'Edit Forum Topic',
                            value: 'editForumTopic',
                            description: 'Edit an existing forum topic',
                            action: 'Edit a forum topic',
                        },
                        {
                            name: 'Edit General Forum Topic',
                            value: 'editGeneralForumTopic',
                            description: 'Edit the name of the general topic in a forum supergroup chat',
                            action: 'Edit general forum topic',
                        },
                        {
                            name: 'Hide General Forum Topic',
                            value: 'hideGeneralForumTopic',
                            description: 'Hide the general topic in a forum supergroup chat',
                            action: 'Hide general forum topic',
                        },
                        {
                            name: 'Reopen Forum Topic',
                            value: 'reopenForumTopic',
                            description: 'Reopen a closed forum topic',
                            action: 'Reopen a forum topic',
                        },
                        {
                            name: 'Reopen General Forum Topic',
                            value: 'reopenGeneralForumTopic',
                            description: 'Reopen the general topic in a forum supergroup chat',
                            action: 'Reopen general forum topic',
                        },
                        {
                            name: 'Unhide General Forum Topic',
                            value: 'unhideGeneralForumTopic',
                            description: 'Unhide the general topic in a forum supergroup chat',
                            action: 'Unhide general forum topic',
                        },
                        {
                            name: 'Unpin All Forum Topic Messages',
                            value: 'unpinAllForumTopicMessages',
                            description: 'Clear the list of pinned messages in a forum topic',
                            action: 'Unpin all forum topic messages',
                        },
                        {
                            name: 'Unpin All General Forum Topic Messages',
                            value: 'unpinAllGeneralForumTopicMessages',
                            description: 'Clear the list of pinned messages in the general topic of a forum supergroup chat',
                            action: 'Unpin all general forum topic messages',
                        },
                    ],
                    default: 'createForumTopic',
                },
                {
                    displayName: 'Chat ID',
                    name: 'chatId',
                    description: 'Unique identifier for the target chat or username of the target channel (in the format @channelusername)',
                    type: 'string',
                    required: true,
                    default: '',
                },
                {
                    displayName: 'Message ID',
                    name: 'messageId',
                    description: 'Message identifier in the chat specified in from_chat_id',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['forwardMessage'],
                        },
                    },
                    required: true,
                    default: '',
                },
                {
                    displayName: 'From Chat ID',
                    name: 'fromChatId',
                    description: 'Unique identifier for the chat where the original message was sent (or channel username)',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                            operation: ['forwardMessage'],
                        },
                    },
                    required: true,
                    default: '',
                },
                {
                    displayName: 'Topic Name',
                    name: 'name',
                    description: 'Topic name, 1-128 characters',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: ['forumTopic'],
                            operation: ['createForumTopic', 'editForumTopic', 'editGeneralForumTopic'],
                        },
                    },
                    required: true,
                    default: '',
                },
                {
                    displayName: 'Message Thread ID',
                    name: 'messageThreadId',
                    description: 'Unique identifier for the target message thread of the forum topic',
                    type: 'string',
                    displayOptions: {
                        show: {
                            resource: ['forumTopic'],
                            operation: ['editForumTopic', 'closeForumTopic', 'deleteForumTopic', 'reopenForumTopic', 'unpinAllForumTopicMessages'],
                        },
                    },
                    required: true,
                    default: '',
                },
                {
                    displayName: 'Additional Fields',
                    name: 'additionalFields',
                    type: 'collection',
                    placeholder: 'Add Field',
                    displayOptions: {
                        show: {
                            resource: ['message'],
                        },
                    },
                    default: {},
                    options: [
                        {
                            displayName: 'Disable Notification',
                            name: 'disable_notification',
                            type: 'boolean',
                            default: false,
                            description: 'Whether to send the message silently. Users will receive a notification with no sound.',
                        },
                        {
                            displayName: 'Message Thread ID',
                            name: 'message_thread_id',
                            type: 'number',
                            default: 0,
                            description: 'The unique identifier of the forum topic',
                        },
                    ],
                },
                {
                    displayName: 'Additional Fields',
                    name: 'additionalFields',
                    type: 'collection',
                    placeholder: 'Add Field',
                    displayOptions: {
                        show: {
                            resource: ['forumTopic'],
                        },
                    },
                    default: {},
                    options: [
                        {
                            displayName: 'Icon Custom Emoji ID',
                            name: 'icon_custom_emoji_id',
                            type: 'string',
                            default: '',
                            description: 'Custom emoji identifier of the topic icon',
                        },
                        {
                            displayName: 'Icon Color',
                            name: 'icon_color',
                            type: 'number',
                            default: 0,
                            description: 'Color of the topic icon in RGB format',
                        },
                    ],
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        for (let i = 0; i < items.length; i++) {
            const resource = this.getNodeParameter('resource', i);
            const operation = this.getNodeParameter('operation', i);
            try {
                const chatId = this.getNodeParameter('chatId', i);
                const additionalFields = this.getNodeParameter('additionalFields', i);
                const credentials = await this.getCredentials('telegramExtendedApi');
                let endpoint = '';
                const body = {
                    chat_id: chatId,
                    ...additionalFields,
                };
                if (resource === 'message') {
                    if (operation === 'forwardMessage') {
                        endpoint = 'forwardMessage';
                        const messageId = this.getNodeParameter('messageId', i);
                        const fromChatId = this.getNodeParameter('fromChatId', i);
                        body.from_chat_id = fromChatId;
                        body.message_id = parseInt(messageId);
                    }
                }
                else if (resource === 'forumTopic') {
                    if (operation === 'createForumTopic') {
                        endpoint = 'createForumTopic';
                        const name = this.getNodeParameter('name', i);
                        const icon_color = additionalFields.icon_color;
                        const icon_custom_emoji_id = additionalFields.icon_custom_emoji_id;
                        body.name = name;
                        body.icon_color = icon_color;
                        body.icon_custom_emoji_id = icon_custom_emoji_id;
                    }
                    else if (operation === 'editForumTopic') {
                        endpoint = 'editForumTopic';
                        const messageThreadId = this.getNodeParameter('messageThreadId', i);
                        const icon_custom_emoji_id = additionalFields.icon_custom_emoji_id;
                        const name = this.getNodeParameter('name', i);
                        body.message_thread_id = parseInt(messageThreadId);
                        body.icon_custom_emoji_id = icon_custom_emoji_id;
                        body.name = name;
                    }
                    else if (operation === 'closeForumTopic') {
                        endpoint = 'closeForumTopic';
                        const messageThreadId = this.getNodeParameter('messageThreadId', i);
                        body.message_thread_id = parseInt(messageThreadId);
                    }
                    else if (operation === 'deleteForumTopic') {
                        endpoint = 'deleteForumTopic';
                        const messageThreadId = this.getNodeParameter('messageThreadId', i);
                        body.message_thread_id = parseInt(messageThreadId);
                    }
                    else if (operation === 'reopenForumTopic') {
                        endpoint = 'reopenForumTopic';
                        const messageThreadId = this.getNodeParameter('messageThreadId', i);
                        body.message_thread_id = parseInt(messageThreadId);
                    }
                    else if (operation === 'unpinAllForumTopicMessages') {
                        endpoint = 'unpinAllForumTopicMessages';
                        const messageThreadId = this.getNodeParameter('messageThreadId', i);
                        body.message_thread_id = parseInt(messageThreadId);
                    }
                    else if (operation === 'editGeneralForumTopic') {
                        endpoint = 'editGeneralForumTopic';
                        const name = this.getNodeParameter('name', i);
                        body.name = name;
                    }
                    else if (operation === 'closeGeneralForumTopic') {
                        endpoint = 'closeGeneralForumTopic';
                    }
                    else if (operation === 'reopenGeneralForumTopic') {
                        endpoint = 'reopenGeneralForumTopic';
                    }
                    else if (operation === 'hideGeneralForumTopic') {
                        endpoint = 'hideGeneralForumTopic';
                    }
                    else if (operation === 'unhideGeneralForumTopic') {
                        endpoint = 'unhideGeneralForumTopic';
                    }
                    else if (operation === 'unpinAllGeneralForumTopicMessages') {
                        endpoint = 'unpinAllGeneralForumTopicMessages';
                    }
                }
                const response = await this.helpers.httpRequest({
                    url: `${credentials.baseUrl}/bot${credentials.accessToken}/${endpoint}`,
                    method: 'POST',
                    body,
                });
                returnData.push({
                    json: response,
                    pairedItem: { item: i },
                });
            }
            catch (error) {
                if (this.continueOnFail()) {
                    const errorMessage = error;
                    returnData.push({
                        json: { error: errorMessage.message },
                        pairedItem: { item: i },
                    });
                }
                throw error;
            }
        }
        return [returnData];
    }
}
exports.TelegramExtended = TelegramExtended;
//# sourceMappingURL=TelegramExtended.node.js.map