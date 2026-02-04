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
export type LogoDingdingProps = typeof __propDef.props;
export type LogoDingdingEvents = typeof __propDef.events;
export type LogoDingdingSlots = typeof __propDef.slots;
export default class LogoDingding extends SvelteComponentTyped<LogoDingdingProps, LogoDingdingEvents, LogoDingdingSlots> {
}
export {};
