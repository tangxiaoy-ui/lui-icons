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
export type StopProps = typeof __propDef.props;
export type StopEvents = typeof __propDef.events;
export type StopSlots = typeof __propDef.slots;
export default class Stop extends SvelteComponentTyped<StopProps, StopEvents, StopSlots> {
}
export {};
