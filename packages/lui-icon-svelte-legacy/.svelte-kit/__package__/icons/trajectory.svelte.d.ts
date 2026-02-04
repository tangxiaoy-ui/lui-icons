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
export type TrajectoryProps = typeof __propDef.props;
export type TrajectoryEvents = typeof __propDef.events;
export type TrajectorySlots = typeof __propDef.slots;
export default class Trajectory extends SvelteComponentTyped<TrajectoryProps, TrajectoryEvents, TrajectorySlots> {
}
export {};
