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
export type HideProps = typeof __propDef.props;
export type HideEvents = typeof __propDef.events;
export type HideSlots = typeof __propDef.slots;
export default class Hide extends SvelteComponentTyped<HideProps, HideEvents, HideSlots> {
}
export {};
