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
export type LeftPackupProps = typeof __propDef.props;
export type LeftPackupEvents = typeof __propDef.events;
export type LeftPackupSlots = typeof __propDef.slots;
export default class LeftPackup extends SvelteComponentTyped<LeftPackupProps, LeftPackupEvents, LeftPackupSlots> {
}
export {};
