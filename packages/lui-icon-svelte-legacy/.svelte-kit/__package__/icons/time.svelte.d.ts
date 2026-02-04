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
export type TimeProps = typeof __propDef.props;
export type TimeEvents = typeof __propDef.events;
export type TimeSlots = typeof __propDef.slots;
export default class Time extends SvelteComponentTyped<TimeProps, TimeEvents, TimeSlots> {
}
export {};
