import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message_DescriminatorType } from "./message_pb";
import type { Message } from "@bufbuild/protobuf";
export declare const file_doctrine: GenFile;
export type DoctrineEventMessage = Message<"brizyMessage.doctrine.DoctrineEventMessage"> & {
    descriminator: Message_DescriminatorType;
    event: DoctrineEventMessage_DoctrineEventType;
    entityId: number;
    entitySnapshot: string;
    entityClass: string;
    accessToken: string;
};
export declare const DoctrineEventMessageSchema: GenMessage<DoctrineEventMessage>;
export declare enum DoctrineEventMessage_DoctrineEventType {
    PRE_REMOVE = 0,
    POST_REMOVE = 1,
    PRE_PERSIST = 2,
    POST_PERSIST = 3,
    PRE_UPDATE = 4,
    POST_UPDATE = 5,
    POST_LOAD = 6,
    PRE_FLUSH = 7,
    ON_FLUSH = 8,
    POST_FLUSH = 9,
    ON_CLEAR = 10
}
export declare const DoctrineEventMessage_DoctrineEventTypeSchema: GenEnum<DoctrineEventMessage_DoctrineEventType>;
