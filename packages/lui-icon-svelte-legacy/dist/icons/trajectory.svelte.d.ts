/**
 * @license lui-icon-svelte-legacy v0.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2024, Tubiao Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
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
/**
 * @component @name Trajectory
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMiAwLjVDMi4zNjk5NyAwLjUgMi42OTIyNyAwLjcwMTMzNSAyLjg2NTIzIDFIOC4yNUM5Ljc2ODc4IDEgMTEgMi4yMzEyMiAxMSAzLjc1QzExIDUuMjEyMzggOS44NTg1NCA2LjQwODMyIDguNDE3OTcgNi40OTUxMkw4LjI1IDYuNUgzLjc1QzIuNzgzNSA2LjUgMiA3LjI4MzUgMiA4LjI1QzIgOS4xNjgxNiAyLjcwNzEgOS45MjExMiAzLjYwNjQ1IDkuOTk0MTRMMy43NSAxMEg5LjEzNDc3QzkuMzA3NzMgOS43MDEzMyA5LjYzMDAzIDkuNSAxMCA5LjVDMTAuNTUyMyA5LjUgMTEgOS45NDc3MiAxMSAxMC41QzExIDExLjA1MjMgMTAuNTUyMyAxMS41IDEwIDExLjVDOS42MzAwMyAxMS41IDkuMzA3NzMgMTEuMjk4NyA5LjEzNDc3IDExSDMuNzVDMi4yMzEyMiAxMSAxIDkuNzY4NzggMSA4LjI1QzEgNi43ODc2MiAyLjE0MTQ2IDUuNTkxNjggMy41ODIwMyA1LjUwNDg4TDMuNzUgNS41SDguMjVDOS4yMTY1IDUuNSAxMCA0LjcxNjUgMTAgMy43NUMxMCAyLjgzMTg0IDkuMjkyOSAyLjA3ODg4IDguMzkzNTUgMi4wMDU4Nkw4LjI1IDJIMi44NjUyM0MyLjY5MjI3IDIuMjk4NjcgMi4zNjk5NyAyLjUgMiAyLjVDMS40NDc3MiAyLjUgMSAyLjA1MjI4IDEgMS41QzEgMC45NDc3MTUgMS40NDc3MiAwLjUgMiAwLjVaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/trajectory
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Trajectory extends SvelteComponentTyped<TrajectoryProps, TrajectoryEvents, TrajectorySlots> {
}
export {};
