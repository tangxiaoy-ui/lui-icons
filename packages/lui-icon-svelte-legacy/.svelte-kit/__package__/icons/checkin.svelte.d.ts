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
export type CheckinProps = typeof __propDef.props;
export type CheckinEvents = typeof __propDef.events;
export type CheckinSlots = typeof __propDef.slots;
export default class Checkin extends SvelteComponentTyped<CheckinProps, CheckinEvents, CheckinSlots> {
}
export {};
