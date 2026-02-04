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
export type LampbulbProps = typeof __propDef.props;
export type LampbulbEvents = typeof __propDef.events;
export type LampbulbSlots = typeof __propDef.slots;
export default class Lampbulb extends SvelteComponentTyped<LampbulbProps, LampbulbEvents, LampbulbSlots> {
}
export {};
