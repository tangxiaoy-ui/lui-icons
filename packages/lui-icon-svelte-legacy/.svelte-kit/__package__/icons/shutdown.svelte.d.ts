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
export type ShutdownProps = typeof __propDef.props;
export type ShutdownEvents = typeof __propDef.events;
export type ShutdownSlots = typeof __propDef.slots;
export default class Shutdown extends SvelteComponentTyped<ShutdownProps, ShutdownEvents, ShutdownSlots> {
}
export {};
