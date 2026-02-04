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
export type LogoQQProps = typeof __propDef.props;
export type LogoQQEvents = typeof __propDef.events;
export type LogoQQSlots = typeof __propDef.slots;
export default class LogoQQ extends SvelteComponentTyped<LogoQQProps, LogoQQEvents, LogoQQSlots> {
}
export {};
