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
export type MeetingRoomProps = typeof __propDef.props;
export type MeetingRoomEvents = typeof __propDef.events;
export type MeetingRoomSlots = typeof __propDef.slots;
export default class MeetingRoom extends SvelteComponentTyped<MeetingRoomProps, MeetingRoomEvents, MeetingRoomSlots> {
}
export {};
