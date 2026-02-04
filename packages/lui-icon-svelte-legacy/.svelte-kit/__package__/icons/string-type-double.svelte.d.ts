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
export type StringTypeDoubleProps = typeof __propDef.props;
export type StringTypeDoubleEvents = typeof __propDef.events;
export type StringTypeDoubleSlots = typeof __propDef.slots;
export default class StringTypeDouble extends SvelteComponentTyped<StringTypeDoubleProps, StringTypeDoubleEvents, StringTypeDoubleSlots> {
}
export {};
