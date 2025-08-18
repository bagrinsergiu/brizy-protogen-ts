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
