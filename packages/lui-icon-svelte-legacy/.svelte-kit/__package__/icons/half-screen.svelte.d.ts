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
export type HalfScreenProps = typeof __propDef.props;
export type HalfScreenEvents = typeof __propDef.events;
export type HalfScreenSlots = typeof __propDef.slots;
export default class HalfScreen extends SvelteComponentTyped<HalfScreenProps, HalfScreenEvents, HalfScreenSlots> {
}
export {};
