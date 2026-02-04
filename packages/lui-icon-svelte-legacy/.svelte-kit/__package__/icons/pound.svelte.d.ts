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
export type PoundProps = typeof __propDef.props;
export type PoundEvents = typeof __propDef.events;
export type PoundSlots = typeof __propDef.slots;
export default class Pound extends SvelteComponentTyped<PoundProps, PoundEvents, PoundSlots> {
}
export {};
