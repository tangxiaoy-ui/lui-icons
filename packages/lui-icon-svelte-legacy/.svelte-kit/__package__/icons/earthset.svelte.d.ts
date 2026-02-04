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
export type EarthsetProps = typeof __propDef.props;
export type EarthsetEvents = typeof __propDef.events;
export type EarthsetSlots = typeof __propDef.slots;
export default class Earthset extends SvelteComponentTyped<EarthsetProps, EarthsetEvents, EarthsetSlots> {
}
export {};
