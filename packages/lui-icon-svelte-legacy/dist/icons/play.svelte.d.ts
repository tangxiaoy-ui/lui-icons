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
export type PlayProps = typeof __propDef.props;
export type PlayEvents = typeof __propDef.events;
export type PlaySlots = typeof __propDef.slots;
/**
 * @component @name Play
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMS43NzkzQzIgMS41MDQyMSAyLjA3NTY1IDEuMjM0NDIgMi4yMTg2NyAwLjk5OTQzTDIuMjk5NjQgMC44Nzk1OTlDMi43NTcyIDAuMjY3NjI1IDMuNjEzODMgMC4wOTI1OTM5IDQuMjc5ODcgMC40OTc5NjdMMTEuMjE0NSA0LjcxODY3QzExLjQxOTQgNC44NDMzNCAxMS41OTEzIDUuMDE1MyAxMS43MTYgNS4yMjAxM0MxMi4xNDY3IDUuOTI3NzkgMTEuOTIyMiA2Ljg1MDYyIDExLjIxNDUgNy4yODEzM0w0LjI3OTg3IDExLjUwMkM0LjA0NDg4IDExLjY0NTEgMy43NzUwOSAxMS43MjA3IDMuNSAxMS43MjA3QzIuNjcxNTcgMTEuNzIwNyAyIDExLjA0OTEgMiAxMC4yMjA3VjEuNzc5M1pNMTAuNjk0NiA1LjU3Mjg5TDMuNzU5OTYgMS4zNTIxOUMzLjUyNDA3IDEuMjA4NjIgMy4yMTY0NiAxLjI4MzQ2IDMuMDcyODkgMS41MTkzNEMzLjAyNTIyIDEuNTk3NjcgMyAxLjY4NzYgMyAxLjc3OTNWMTAuMjIwN0MzIDEwLjQ5NjggMy4yMjM4NiAxMC43MjA3IDMuNSAxMC43MjA3QzMuNTkxNyAxMC43MjA3IDMuNjgxNjMgMTAuNjk1NSAzLjc1OTk2IDEwLjY0NzhMMTAuNjk0NiA2LjQyNzExQzEwLjkzMDUgNi4yODM1NCAxMS4wMDUzIDUuOTc1OTMgMTAuODYxOCA1Ljc0MDA0QzEwLjgyMDIgNS42NzE3NyAxMC43NjI5IDUuNjE0NDUgMTAuNjk0NiA1LjU3Mjg5WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/play
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Play extends SvelteComponentTyped<PlayProps, PlayEvents, PlaySlots> {
}
export {};
