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
export type EarthProps = typeof __propDef.props;
export type EarthEvents = typeof __propDef.events;
export type EarthSlots = typeof __propDef.slots;
export default class Earth extends SvelteComponentTyped<EarthProps, EarthEvents, EarthSlots> {
}
export {};
