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
export type ProcessProps = typeof __propDef.props;
export type ProcessEvents = typeof __propDef.events;
export type ProcessSlots = typeof __propDef.slots;
export default class Process extends SvelteComponentTyped<ProcessProps, ProcessEvents, ProcessSlots> {
}
export {};
