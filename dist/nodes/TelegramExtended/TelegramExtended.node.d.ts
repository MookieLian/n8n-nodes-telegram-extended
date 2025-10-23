import { type INodeType, type INodeTypeDescription, type INodeExecutionData, type IExecuteFunctions } from 'n8n-workflow';
export declare class TelegramExtended implements INodeType {
    description: INodeTypeDescription;
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
