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
export type FixedPositionProps = typeof __propDef.props;
export type FixedPositionEvents = typeof __propDef.events;
export type FixedPositionSlots = typeof __propDef.slots;
export default class FixedPosition extends SvelteComponentTyped<FixedPositionProps, FixedPositionEvents, FixedPositionSlots> {
}
export {};
