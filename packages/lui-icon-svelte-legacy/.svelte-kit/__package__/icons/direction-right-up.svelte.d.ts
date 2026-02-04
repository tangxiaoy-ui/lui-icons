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
export type DirectionRightUpProps = typeof __propDef.props;
export type DirectionRightUpEvents = typeof __propDef.events;
export type DirectionRightUpSlots = typeof __propDef.slots;
export default class DirectionRightUp extends SvelteComponentTyped<DirectionRightUpProps, DirectionRightUpEvents, DirectionRightUpSlots> {
}
export {};
