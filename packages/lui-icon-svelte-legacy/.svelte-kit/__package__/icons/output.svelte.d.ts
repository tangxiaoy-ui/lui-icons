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
export type OutputProps = typeof __propDef.props;
export type OutputEvents = typeof __propDef.events;
export type OutputSlots = typeof __propDef.slots;
export default class Output extends SvelteComponentTyped<OutputProps, OutputEvents, OutputSlots> {
}
export {};
