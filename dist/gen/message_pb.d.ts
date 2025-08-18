import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message as Message$1 } from "@bufbuild/protobuf";
export declare const file_message: GenFile;
export type Message = Message$1<"brizyMessage.Message"> & {
    descriminator: Message_DescriminatorType;
};
export declare const MessageSchema: GenMessage<Message>;
export declare enum Message_DescriminatorType {
    NONE = 0,
    DOCTRINE_MESSAGE = 1,
    TRANSLATE_ENTITY_MESSAGE = 2,
    REMOVE_ENTITY_TRANSLATION_MESSAGE = 3,
    NOTIFICATION_MESSAGE = 4,
    CLOUD_CREATE_USER_MESSAGE = 5,
    CLOUD_DELETE_USER_MESSAGE = 6,
    CLOUD_CREATE_PROJECT_MESSAGE = 7,
    CLOUD_DELETE_PROJECT_MESSAGE = 8,
    CLOUD_CLONE_PROJECT_MESSAGE = 9,
    CLOUD_CLONE_COLLECTION_ITEM_MESSAGE = 10,
    CLOUD_CLONE_CUSTOEMR_MESSAGE = 11,
    CREATE_COLLECTION_ITEM_MESSAGE = 12,
    UPDATE_COLLECTION_ITEM_MESSAGE = 13,
    DELETE_COLLECTION_ITEM_MESSAGE = 14,
    CLOUD_CLEAR_PLATFORM_CACHE_MESSAGE = 15,
    CREATE_COLLECTION_TYPE_MESSAGE = 16,
    UPDATE_COLLECTION_TYPE_MESSAGE = 17,
    DELETE_COLLECTION_TYPE_MESSAGE = 18,
    CREATE_CUSTOMER_MESSAGE = 19,
    UPDATE_CUSTOMER_MESSAGE = 20,
    DELETE_CUSTOMER_MESSAGE = 21
}
export declare const Message_DescriminatorTypeSchema: GenEnum<Message_DescriminatorType>;
