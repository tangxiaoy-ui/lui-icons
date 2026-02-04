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
export type LoadingProps = typeof __propDef.props;
export type LoadingEvents = typeof __propDef.events;
export type LoadingSlots = typeof __propDef.slots;
export default class Loading extends SvelteComponentTyped<LoadingProps, LoadingEvents, LoadingSlots> {
}
export {};
