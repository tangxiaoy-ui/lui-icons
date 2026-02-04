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
export type TickUnselectedProps = typeof __propDef.props;
export type TickUnselectedEvents = typeof __propDef.events;
export type TickUnselectedSlots = typeof __propDef.slots;
export default class TickUnselected extends SvelteComponentTyped<TickUnselectedProps, TickUnselectedEvents, TickUnselectedSlots> {
}
export {};
