import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuiTransitionModule } from "../transition/transition.module";
import { SuiProgressModule } from "../progress/progress.module";
import { SuiMessageContainer } from "./message-container";
import { SuiMessage, IMessage } from "./message";
import { SuiUtilityModule } from "../util/util.module";
import { MessageController } from "./message-controller";
import { MessageConfig, MessageState } from "./message-config";
import { SuiActiveMessage } from "./active-message";
import { SuiMessageGlobalContainer } from "./message-global-container";
import { SuiMessageService } from "./message-service";

@NgModule({
    imports: [
        CommonModule,
        SuiTransitionModule,
        SuiProgressModule,
        SuiUtilityModule
    ],
    declarations: [
        SuiMessage,
        SuiMessageContainer,
        SuiMessageGlobalContainer
    ],
    exports: [
        SuiMessage,
        SuiMessageContainer,
        SuiMessageGlobalContainer
    ],
    providers: [
        SuiMessageService
    ],
    entryComponents: [
        SuiMessage,
        SuiMessageGlobalContainer
    ]
})
export class SuiMessageModule {}

export {
    IMessage,
    SuiMessageContainer,
    MessageController,
    MessageConfig,
    SuiActiveMessage,
    MessageState
};
