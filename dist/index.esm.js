export * from "./gen/brizy_pb";
export * from "./gen/cloud_pb";
export * from "./gen/doctrine_pb";
export * from "./gen/message_pb";
export * from "./gen/notification_pb";
export * from "./gen/translation_pb";
export { create, fromBinary, toBinary, fromJson, toJson, } from "@bufbuild/protobuf";
export { anyPack, anyIs } from "@bufbuild/protobuf/wkt";
import { fromBinary } from "@bufbuild/protobuf";
import { MessageSchema, Message_DescriminatorType, } from "./gen/message_pb";
import { CreateCollectionItemMessageSchema, CreateCollectionTypeMessageSchema, CreateCustomerMessageSchema, DeleteCollectionItemMessageSchema, DeleteCollectionTypeMessageSchema, DeleteCustomerMessageSchema, UpdateCollectionItemMessageSchema, UpdateCollectionTypeMessageSchema, UpdateCustomerMessageSchema, } from "./gen/brizy_pb";
import { ClearPlatformCacheMessageSchema, CloneCollectionItemMessageSchema, CloneCustomerMessageSchema, CloneProjectMessageSchema, CreateProjectMessageSchema, CreateUserMessageSchema, DeleteProjectMessageSchema, DeleteUserMessageSchema, } from "./gen/cloud_pb";
import { DoctrineEventMessageSchema, } from "./gen/doctrine_pb";
import { NotificationMessageSchema, } from "./gen/notification_pb";
import { RemoveEntityTranslationMessageSchema, TranslateEntityMessageSchema, } from "./gen/translation_pb";
export function getMessage(buffer) {
    try {
        const baseMessage = fromBinary(MessageSchema, new Uint8Array(buffer));
        const discriminator = baseMessage.descriminator;
        const data = new Uint8Array(buffer);
        switch (discriminator) {
            case Message_DescriminatorType.NONE:
                return baseMessage;
            case Message_DescriminatorType.CLOUD_CLONE_PROJECT_MESSAGE:
                return fromBinary(CloneProjectMessageSchema, data);
            case Message_DescriminatorType.CLOUD_CREATE_PROJECT_MESSAGE:
                return fromBinary(CreateProjectMessageSchema, data);
            case Message_DescriminatorType.CLOUD_CREATE_USER_MESSAGE:
                return fromBinary(CreateUserMessageSchema, data);
            case Message_DescriminatorType.CLOUD_CLONE_COLLECTION_ITEM_MESSAGE:
                return fromBinary(CloneCollectionItemMessageSchema, data);
            case Message_DescriminatorType.CREATE_COLLECTION_TYPE_MESSAGE:
                return fromBinary(CreateCollectionTypeMessageSchema, data);
            case Message_DescriminatorType.UPDATE_COLLECTION_TYPE_MESSAGE:
                return fromBinary(UpdateCollectionTypeMessageSchema, data);
            case Message_DescriminatorType.DELETE_COLLECTION_TYPE_MESSAGE:
                return fromBinary(DeleteCollectionTypeMessageSchema, data);
            case Message_DescriminatorType.CREATE_COLLECTION_ITEM_MESSAGE:
                return fromBinary(CreateCollectionItemMessageSchema, data);
            case Message_DescriminatorType.UPDATE_COLLECTION_ITEM_MESSAGE:
                return fromBinary(UpdateCollectionItemMessageSchema, data);
            case Message_DescriminatorType.DELETE_COLLECTION_ITEM_MESSAGE:
                return fromBinary(DeleteCollectionItemMessageSchema, data);
            case Message_DescriminatorType.CLOUD_DELETE_PROJECT_MESSAGE:
                return fromBinary(DeleteProjectMessageSchema, data);
            case Message_DescriminatorType.CLOUD_DELETE_USER_MESSAGE:
                return fromBinary(DeleteUserMessageSchema, data);
            case Message_DescriminatorType.DOCTRINE_MESSAGE:
                return fromBinary(DoctrineEventMessageSchema, data);
            case Message_DescriminatorType.NOTIFICATION_MESSAGE:
                return fromBinary(NotificationMessageSchema, data);
            case Message_DescriminatorType.REMOVE_ENTITY_TRANSLATION_MESSAGE:
                return fromBinary(RemoveEntityTranslationMessageSchema, data);
            case Message_DescriminatorType.TRANSLATE_ENTITY_MESSAGE:
                return fromBinary(TranslateEntityMessageSchema, data);
            case Message_DescriminatorType.CREATE_CUSTOMER_MESSAGE:
                return fromBinary(CreateCustomerMessageSchema, data);
            case Message_DescriminatorType.UPDATE_CUSTOMER_MESSAGE:
                return fromBinary(UpdateCustomerMessageSchema, data);
            case Message_DescriminatorType.DELETE_CUSTOMER_MESSAGE:
                return fromBinary(DeleteCustomerMessageSchema, data);
            case Message_DescriminatorType.CLOUD_CLONE_CUSTOEMR_MESSAGE:
                return fromBinary(CloneCustomerMessageSchema, data);
            case Message_DescriminatorType.CLOUD_CLEAR_PLATFORM_CACHE_MESSAGE:
                return fromBinary(ClearPlatformCacheMessageSchema, data);
            default:
                return baseMessage;
        }
    }
    catch (error) {
        return undefined;
    }
}
