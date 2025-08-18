"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslateEntitySchema = exports.TranslateEntity = exports.RemoveEntityTranslationMessageSchema = exports.TranslateEntityMessageSchema = exports.file_translation = void 0;
const codegenv2_1 = require("@bufbuild/protobuf/codegenv2");
const message_pb_1 = require("./message_pb");
exports.file_translation = (0, codegenv2_1.fileDesc)("ChF0cmFuc2xhdGlvbi5wcm90bxIYYnJpenlNZXNzYWdlLnRyYW5zbGF0aW9uIoQCChZUcmFuc2xhdGVFbnRpdHlNZXNzYWdlEj4KDWRlc2NyaW1pbmF0b3IYASABKA4yJy5icml6eU1lc3NhZ2UuTWVzc2FnZS5EZXNjcmltaW5hdG9yVHlwZRISCgplbnRpdHlfaXJpGAIgASgJEhMKC3Byb2plY3RfaXJpGAMgASgJEhoKEmNsb3VkX2FjY2Vzc190b2tlbhgFIAEoCRIeChZicnppeV9hcGlfYWNjZXNzX3Rva2VuGAYgASgJEj8KDGVudGl0eV9jbGFzcxgHIAEoDjIpLmJyaXp5TWVzc2FnZS50cmFuc2xhdGlvbi5UcmFuc2xhdGVFbnRpdHlKBAgEEAUiygEKHlJlbW92ZUVudGl0eVRyYW5zbGF0aW9uTWVzc2FnZRI+Cg1kZXNjcmltaW5hdG9yGAEgASgOMicuYnJpenlNZXNzYWdlLk1lc3NhZ2UuRGVzY3JpbWluYXRvclR5cGUSEgoKZW50aXR5X2lyaRgCIAEoCRITCgtwcm9qZWN0X2lyaRgDIAEoCRI/CgxlbnRpdHlfY2xhc3MYBCABKA4yKS5icml6eU1lc3NhZ2UudHJhbnNsYXRpb24uVHJhbnNsYXRlRW50aXR5KksKD1RyYW5zbGF0ZUVudGl0eRILCgdVTktOT1dOEAASDgoKQ09MTEVDVElPThABEgwKCENVU1RPTUVSEAISDQoJTUVUQUZJRUxEEANiBnByb3RvMw", [message_pb_1.file_message]);
exports.TranslateEntityMessageSchema = (0, codegenv2_1.messageDesc)(exports.file_translation, 0);
exports.RemoveEntityTranslationMessageSchema = (0, codegenv2_1.messageDesc)(exports.file_translation, 1);
var TranslateEntity;
(function (TranslateEntity) {
    TranslateEntity[TranslateEntity["UNKNOWN"] = 0] = "UNKNOWN";
    TranslateEntity[TranslateEntity["COLLECTION"] = 1] = "COLLECTION";
    TranslateEntity[TranslateEntity["CUSTOMER"] = 2] = "CUSTOMER";
    TranslateEntity[TranslateEntity["METAFIELD"] = 3] = "METAFIELD";
})(TranslateEntity || (exports.TranslateEntity = TranslateEntity = {}));
exports.TranslateEntitySchema = (0, codegenv2_1.enumDesc)(exports.file_translation, 0);
