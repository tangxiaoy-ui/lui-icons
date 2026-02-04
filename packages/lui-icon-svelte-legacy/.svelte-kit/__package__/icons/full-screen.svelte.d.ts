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
export type FullScreenProps = typeof __propDef.props;
export type FullScreenEvents = typeof __propDef.events;
export type FullScreenSlots = typeof __propDef.slots;
export default class FullScreen extends SvelteComponentTyped<FullScreenProps, FullScreenEvents, FullScreenSlots> {
}
export {};
