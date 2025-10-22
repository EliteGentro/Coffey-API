import { Module } from '@nestjs/common';

export enum ActionType {
    CREATE = "create",
    UPDATE = "update",
    DELETE = "delete"
}

export class HistoricAction {
    type: ActionType
    content: unknown
}

@Module({})
export class SyncModule {}
