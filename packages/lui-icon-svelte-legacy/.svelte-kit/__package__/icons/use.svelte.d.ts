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
export type UseProps = typeof __propDef.props;
export type UseEvents = typeof __propDef.events;
export type UseSlots = typeof __propDef.slots;
export default class Use extends SvelteComponentTyped<UseProps, UseEvents, UseSlots> {
}
export {};
