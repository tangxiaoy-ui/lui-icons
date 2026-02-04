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
export type MoreHorProps = typeof __propDef.props;
export type MoreHorEvents = typeof __propDef.events;
export type MoreHorSlots = typeof __propDef.slots;
export default class MoreHor extends SvelteComponentTyped<MoreHorProps, MoreHorEvents, MoreHorSlots> {
}
export {};
