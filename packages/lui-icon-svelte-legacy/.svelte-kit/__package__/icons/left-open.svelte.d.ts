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
export type LeftOpenProps = typeof __propDef.props;
export type LeftOpenEvents = typeof __propDef.events;
export type LeftOpenSlots = typeof __propDef.slots;
export default class LeftOpen extends SvelteComponentTyped<LeftOpenProps, LeftOpenEvents, LeftOpenSlots> {
}
export {};
