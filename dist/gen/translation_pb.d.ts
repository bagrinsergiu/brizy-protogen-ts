import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message_DescriminatorType } from "./message_pb";
import type { Message } from "@bufbuild/protobuf";
export declare const file_translation: GenFile;
export type TranslateEntityMessage = Message<"brizyMessage.translation.TranslateEntityMessage"> & {
    descriminator: Message_DescriminatorType;
    entityIri: string;
    projectIri: string;
    cloudAccessToken: string;
    brziyApiAccessToken: string;
    entityClass: TranslateEntity;
};
export declare const TranslateEntityMessageSchema: GenMessage<TranslateEntityMessage>;
export type RemoveEntityTranslationMessage = Message<"brizyMessage.translation.RemoveEntityTranslationMessage"> & {
    descriminator: Message_DescriminatorType;
    entityIri: string;
    projectIri: string;
    entityClass: TranslateEntity;
};
export declare const RemoveEntityTranslationMessageSchema: GenMessage<RemoveEntityTranslationMessage>;
export declare enum TranslateEntity {
    UNKNOWN = 0,
    COLLECTION = 1,
    CUSTOMER = 2,
    METAFIELD = 3
}
export declare const TranslateEntitySchema: GenEnum<TranslateEntity>;
