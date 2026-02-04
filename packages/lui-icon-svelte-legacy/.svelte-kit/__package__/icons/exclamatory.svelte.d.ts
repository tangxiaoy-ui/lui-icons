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
export type ExclamatoryProps = typeof __propDef.props;
export type ExclamatoryEvents = typeof __propDef.events;
export type ExclamatorySlots = typeof __propDef.slots;
export default class Exclamatory extends SvelteComponentTyped<ExclamatoryProps, ExclamatoryEvents, ExclamatorySlots> {
}
export {};
