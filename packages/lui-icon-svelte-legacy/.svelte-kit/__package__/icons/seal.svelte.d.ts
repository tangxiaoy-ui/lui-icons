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
export type SealProps = typeof __propDef.props;
export type SealEvents = typeof __propDef.events;
export type SealSlots = typeof __propDef.slots;
export default class Seal extends SvelteComponentTyped<SealProps, SealEvents, SealSlots> {
}
export {};
