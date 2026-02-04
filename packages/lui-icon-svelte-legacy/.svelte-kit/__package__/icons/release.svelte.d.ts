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
export type ReleaseProps = typeof __propDef.props;
export type ReleaseEvents = typeof __propDef.events;
export type ReleaseSlots = typeof __propDef.slots;
export default class Release extends SvelteComponentTyped<ReleaseProps, ReleaseEvents, ReleaseSlots> {
}
export {};
