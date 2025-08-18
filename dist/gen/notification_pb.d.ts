import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message_DescriminatorType } from "./message_pb";
import type { Message } from "@bufbuild/protobuf";
export declare const file_notification: GenFile;
export type NotificationMessage = Message<"brizyMessage.notification.NotificationMessage"> & {
    descriminator: Message_DescriminatorType;
    notificationName: string;
    object: string;
    email: string;
    accessToken: string;
    project: number;
    objectId: number;
};
export declare const NotificationMessageSchema: GenMessage<NotificationMessage>;
