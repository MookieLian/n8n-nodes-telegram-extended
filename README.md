# n8n-nodes-telegram-extended

This is an n8n community node. It provides extended Telegram operations including message forwarding and comprehensive forum topic management.

Telegram Extended is a powerful node that extends the official Telegram node with additional operations for forum topic management and message forwarding capabilities.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

### Message Operations
- **Forward Message**: Forward a message from one chat to another

### Forum Topic Operations
- **Create Forum Topic**: Create a new forum topic
- **Edit Forum Topic**: Edit an existing forum topic
- **Close Forum Topic**: Close a forum topic
- **Delete Forum Topic**: Delete a forum topic
- **Reopen Forum Topic**: Reopen a closed forum topic
- **Unpin All Forum Topic Messages**: Clear the list of pinned messages in a forum topic

### General Forum Topic Operations
- **Edit General Forum Topic**: Edit the name of the general topic in a forum supergroup chat
- **Close General Forum Topic**: Close the general topic in a forum supergroup chat
- **Reopen General Forum Topic**: Reopen the general topic in a forum supergroup chat
- **Hide General Forum Topic**: Hide the general topic in a forum supergroup chat
- **Unhide General Forum Topic**: Unhide the general topic in a forum supergroup chat
- **Unpin All General Forum Topic Messages**: Clear the list of pinned messages in the general topic of a forum supergroup chat

## Credentials

This node uses the same credentials as the official Telegram node. You need to:

1. Create a bot with [@BotFather](https://t.me/botfather) on Telegram
2. Get your bot token
3. Use the `telegramApi` credential type in n8n
4. Enter your bot token in the credentials

For detailed setup instructions, see the [official Telegram credentials documentation](https://docs.n8n.io/integrations/builtin/credentials/telegram/).

## Compatibility

- **n8n version**: 1.0.0 or later
- **Node version**: 1.0.0
- **Telegram Bot API**: Supports all forum topic operations introduced in Telegram Bot API 6.0+

This node extends the official Telegram node functionality and is fully compatible with n8n's community node system.

## Usage

### Basic Setup
1. Install the node following the installation guide
2. Configure your Telegram bot credentials
3. Select the appropriate resource (Message or Forum Topic)
4. Choose the operation you want to perform
5. Fill in the required parameters

### Forum Topic Management
- **Chat ID**: The forum supergroup chat ID (use @get_id_bot to find it)
- **Topic Name**: For create/edit operations (1-128 characters)
- **Message Thread ID**: For operations on existing topics
- **Additional Fields**: Icon color and custom emoji for topic customization

### Message Forwarding
- **Chat ID**: Target chat ID
- **From Chat ID**: Source chat ID  
- **Message ID**: ID of the message to forward
- **Additional Fields**: Notification settings and thread ID

For more information, see the [Telegram Bot API documentation](https://core.telegram.org/bots/api).

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [Telegram Bot API Documentation](https://core.telegram.org/bots/api)
* [Telegram Forum Topics Documentation](https://core.telegram.org/bots/api#forum-topics)
* [Official Telegram Node Documentation](https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.telegram/)

## Version history

### 1.0.0 (Initial Release)
- **Message Operations**: Forward message functionality
- **Forum Topic Operations**: Create, edit, close, delete, reopen forum topics
- **General Forum Topic Operations**: Edit, close, reopen, hide, unhide general forum topics
- **Unpin Operations**: Unpin all messages in forum topics and general forum topics
- **Additional Fields**: Icon customization and notification settings
- **Credentials**: Full integration with official Telegram credentials
