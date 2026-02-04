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
export type TimingProps = typeof __propDef.props;
export type TimingEvents = typeof __propDef.events;
export type TimingSlots = typeof __propDef.slots;
export default class Timing extends SvelteComponentTyped<TimingProps, TimingEvents, TimingSlots> {
}
export {};
