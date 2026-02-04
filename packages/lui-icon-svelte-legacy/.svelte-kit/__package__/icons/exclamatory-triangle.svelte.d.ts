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
export type ExclamatoryTriangleProps = typeof __propDef.props;
export type ExclamatoryTriangleEvents = typeof __propDef.events;
export type ExclamatoryTriangleSlots = typeof __propDef.slots;
export default class ExclamatoryTriangle extends SvelteComponentTyped<ExclamatoryTriangleProps, ExclamatoryTriangleEvents, ExclamatoryTriangleSlots> {
}
export {};
