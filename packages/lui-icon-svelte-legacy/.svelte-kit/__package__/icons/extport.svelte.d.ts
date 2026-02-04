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
export type ExtportProps = typeof __propDef.props;
export type ExtportEvents = typeof __propDef.events;
export type ExtportSlots = typeof __propDef.slots;
export default class Extport extends SvelteComponentTyped<ExtportProps, ExtportEvents, ExtportSlots> {
}
export {};
