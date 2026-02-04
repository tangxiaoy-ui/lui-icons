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
export type EraseProps = typeof __propDef.props;
export type EraseEvents = typeof __propDef.events;
export type EraseSlots = typeof __propDef.slots;
export default class Erase extends SvelteComponentTyped<EraseProps, EraseEvents, EraseSlots> {
}
export {};
