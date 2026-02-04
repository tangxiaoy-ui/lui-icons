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
export type PauseProps = typeof __propDef.props;
export type PauseEvents = typeof __propDef.events;
export type PauseSlots = typeof __propDef.slots;
export default class Pause extends SvelteComponentTyped<PauseProps, PauseEvents, PauseSlots> {
}
export {};
