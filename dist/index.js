"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.anyIs = exports.anyPack = exports.toJson = exports.fromJson = exports.toBinary = exports.fromBinary = exports.create = void 0;
exports.getMessage = getMessage;
__exportStar(require("./gen/brizy_pb"), exports);
__exportStar(require("./gen/cloud_pb"), exports);
__exportStar(require("./gen/doctrine_pb"), exports);
__exportStar(require("./gen/message_pb"), exports);
__exportStar(require("./gen/notification_pb"), exports);
__exportStar(require("./gen/translation_pb"), exports);
var protobuf_1 = require("@bufbuild/protobuf");
Object.defineProperty(exports, "create", { enumerable: true, get: function () { return protobuf_1.create; } });
Object.defineProperty(exports, "fromBinary", { enumerable: true, get: function () { return protobuf_1.fromBinary; } });
Object.defineProperty(exports, "toBinary", { enumerable: true, get: function () { return protobuf_1.toBinary; } });
Object.defineProperty(exports, "fromJson", { enumerable: true, get: function () { return protobuf_1.fromJson; } });
Object.defineProperty(exports, "toJson", { enumerable: true, get: function () { return protobuf_1.toJson; } });
var wkt_1 = require("@bufbuild/protobuf/wkt");
Object.defineProperty(exports, "anyPack", { enumerable: true, get: function () { return wkt_1.anyPack; } });
Object.defineProperty(exports, "anyIs", { enumerable: true, get: function () { return wkt_1.anyIs; } });
const protobuf_2 = require("@bufbuild/protobuf");
const message_pb_1 = require("./gen/message_pb");
const brizy_pb_1 = require("./gen/brizy_pb");
const cloud_pb_1 = require("./gen/cloud_pb");
const doctrine_pb_1 = require("./gen/doctrine_pb");
const notification_pb_1 = require("./gen/notification_pb");
const translation_pb_1 = require("./gen/translation_pb");
function getMessage(buffer) {
    try {
        const baseMessage = (0, protobuf_2.fromBinary)(message_pb_1.MessageSchema, new Uint8Array(buffer));
        const discriminator = baseMessage.descriminator;
        const data = new Uint8Array(buffer);
        switch (discriminator) {
            case message_pb_1.Message_DescriminatorType.NONE:
                return baseMessage;
            case message_pb_1.Message_DescriminatorType.CLOUD_CLONE_PROJECT_MESSAGE:
                return (0, protobuf_2.fromBinary)(cloud_pb_1.CloneProjectMessageSchema, data);
            case message_pb_1.Message_DescriminatorType.CLOUD_CREATE_PROJECT_MESSAGE:
                return (0, protobuf_2.fromBinary)(cloud_pb_1.CreateProjectMessageSchema, data);
            case message_pb_1.Message_DescriminatorType.CLOUD_CREATE_USER_MESSAGE:
                return (0, protobuf_2.fromBinary)(cloud_pb_1.CreateUserMessageSchema, data);
            case message_pb_1.Message_DescriminatorType.CLOUD_CLONE_COLLECTION_ITEM_MESSAGE:
                return (0, protobuf_2.fromBinary)(cloud_pb_1.CloneCollectionItemMessageSchema, data);
            case message_pb_1.Message_DescriminatorType.CREATE_COLLECTION_TYPE_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.CreateCollectionTypeMessageSchema, data);
            case message_pb_1.Message_DescriminatorType.UPDATE_COLLECTION_TYPE_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.UpdateCollectionTypeMessageSchema, data);
            case message_pb_1.Message_DescriminatorType.DELETE_COLLECTION_TYPE_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.DeleteCollectionTypeMessageSchema, data);
            case message_pb_1.Message_DescriminatorType.CREATE_COLLECTION_ITEM_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.CreateCollectionItemMessageSchema, data);
            case message_pb_1.Message_DescriminatorType.UPDATE_COLLECTION_ITEM_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.UpdateCollectionItemMessageSchema, data);
            case message_pb_1.Message_DescriminatorType.DELETE_COLLECTION_ITEM_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.DeleteCollectionItemMessageSchema, data);
            case message_pb_1.Message_DescriminatorType.CLOUD_DELETE_PROJECT_MESSAGE:
                return (0, protobuf_2.fromBinary)(cloud_pb_1.DeleteProjectMessageSchema, data);
            case message_pb_1.Message_DescriminatorType.CLOUD_DELETE_USER_MESSAGE:
                return (0, protobuf_2.fromBinary)(cloud_pb_1.DeleteUserMessageSchema, data);
            case message_pb_1.Message_DescriminatorType.DOCTRINE_MESSAGE:
                return (0, protobuf_2.fromBinary)(doctrine_pb_1.DoctrineEventMessageSchema, data);
            case message_pb_1.Message_DescriminatorType.NOTIFICATION_MESSAGE:
                return (0, protobuf_2.fromBinary)(notification_pb_1.NotificationMessageSchema, data);
            case message_pb_1.Message_DescriminatorType.REMOVE_ENTITY_TRANSLATION_MESSAGE:
                return (0, protobuf_2.fromBinary)(translation_pb_1.RemoveEntityTranslationMessageSchema, data);
            case message_pb_1.Message_DescriminatorType.TRANSLATE_ENTITY_MESSAGE:
                return (0, protobuf_2.fromBinary)(translation_pb_1.TranslateEntityMessageSchema, data);
            case message_pb_1.Message_DescriminatorType.CREATE_CUSTOMER_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.CreateCustomerMessageSchema, data);
            case message_pb_1.Message_DescriminatorType.UPDATE_CUSTOMER_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.UpdateCustomerMessageSchema, data);
            case message_pb_1.Message_DescriminatorType.DELETE_CUSTOMER_MESSAGE:
                return (0, protobuf_2.fromBinary)(brizy_pb_1.DeleteCustomerMessageSchema, data);
            case message_pb_1.Message_DescriminatorType.CLOUD_CLONE_CUSTOEMR_MESSAGE:
                return (0, protobuf_2.fromBinary)(cloud_pb_1.CloneCustomerMessageSchema, data);
            case message_pb_1.Message_DescriminatorType.CLOUD_CLEAR_PLATFORM_CACHE_MESSAGE:
                return (0, protobuf_2.fromBinary)(cloud_pb_1.ClearPlatformCacheMessageSchema, data);
            default:
                return baseMessage;
        }
    }
    catch (error) {
        return undefined;
    }
}
