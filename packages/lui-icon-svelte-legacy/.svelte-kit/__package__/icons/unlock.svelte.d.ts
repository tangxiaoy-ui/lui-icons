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
export type UnlockProps = typeof __propDef.props;
export type UnlockEvents = typeof __propDef.events;
export type UnlockSlots = typeof __propDef.slots;
export default class Unlock extends SvelteComponentTyped<UnlockProps, UnlockEvents, UnlockSlots> {
}
export {};
