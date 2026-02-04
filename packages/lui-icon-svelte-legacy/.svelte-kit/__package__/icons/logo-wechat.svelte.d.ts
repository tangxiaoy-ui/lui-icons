import { SvelteComponentTyped } from "svelte";
import type { IconProps } from '../types.js';
declare const __propDef: {
    props: IconProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type LogoWechatProps = typeof __propDef.props;
export type LogoWechatEvents = typeof __propDef.events;
export type LogoWechatSlots = typeof __propDef.slots;
export default class LogoWechat extends SvelteComponentTyped<LogoWechatProps, LogoWechatEvents, LogoWechatSlots> {
}
export {};
