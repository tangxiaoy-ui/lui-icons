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
export type StringTypeLongProps = typeof __propDef.props;
export type StringTypeLongEvents = typeof __propDef.events;
export type StringTypeLongSlots = typeof __propDef.slots;
export default class StringTypeLong extends SvelteComponentTyped<StringTypeLongProps, StringTypeLongEvents, StringTypeLongSlots> {
}
export {};
