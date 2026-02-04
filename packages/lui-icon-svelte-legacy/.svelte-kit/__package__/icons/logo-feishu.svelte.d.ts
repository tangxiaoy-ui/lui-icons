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
export type LogoFeishuProps = typeof __propDef.props;
export type LogoFeishuEvents = typeof __propDef.events;
export type LogoFeishuSlots = typeof __propDef.slots;
export default class LogoFeishu extends SvelteComponentTyped<LogoFeishuProps, LogoFeishuEvents, LogoFeishuSlots> {
}
export {};
