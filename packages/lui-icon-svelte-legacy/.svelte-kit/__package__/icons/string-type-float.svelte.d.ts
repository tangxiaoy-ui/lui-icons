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
export type StringTypeFloatProps = typeof __propDef.props;
export type StringTypeFloatEvents = typeof __propDef.events;
export type StringTypeFloatSlots = typeof __propDef.slots;
export default class StringTypeFloat extends SvelteComponentTyped<StringTypeFloatProps, StringTypeFloatEvents, StringTypeFloatSlots> {
}
export {};
