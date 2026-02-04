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
export type NoneProps = typeof __propDef.props;
export type NoneEvents = typeof __propDef.events;
export type NoneSlots = typeof __propDef.slots;
export default class None extends SvelteComponentTyped<NoneProps, NoneEvents, NoneSlots> {
}
export {};
