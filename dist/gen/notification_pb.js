"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationMessageSchema = exports.file_notification = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
const message_pb_1 = require("./message_pb");
exports.file_notification = (0, codegenv2_1.fileDesc)("ChJub3RpZmljYXRpb24ucHJvdG8SGWJyaXp5TWVzc2FnZS5ub3RpZmljYXRpb24iyQEKE05vdGlmaWNhdGlvbk1lc3NhZ2USPgoNZGVzY3JpbWluYXRvchgBIAEoDjInLmJyaXp5TWVzc2FnZS5NZXNzYWdlLkRlc2NyaW1pbmF0b3JUeXBlEhkKEW5vdGlmaWNhdGlvbl9uYW1lGAIgASgJEg4KBm9iamVjdBgDIAEoCRINCgVlbWFpbBgEIAEoCRIUCgxhY2Nlc3NfdG9rZW4YBSABKAkSDwoHcHJvamVjdBgGIAEoBRIRCglvYmplY3RfaWQYByABKAViBnByb3RvMw", [message_pb_1.file_message]);
exports.NotificationMessageSchema = (0, codegenv2_1.messageDesc)(exports.file_notification, 0);
