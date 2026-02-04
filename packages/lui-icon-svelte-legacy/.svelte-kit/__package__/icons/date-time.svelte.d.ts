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
export type DateTimeProps = typeof __propDef.props;
export type DateTimeEvents = typeof __propDef.events;
export type DateTimeSlots = typeof __propDef.slots;
export default class DateTime extends SvelteComponentTyped<DateTimeProps, DateTimeEvents, DateTimeSlots> {
}
export {};
