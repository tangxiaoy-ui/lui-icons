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
export type PlaceProps = typeof __propDef.props;
export type PlaceEvents = typeof __propDef.events;
export type PlaceSlots = typeof __propDef.slots;
/**
 * @component @name Place
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzguNzYxNDIgMCAxMSAyLjIzODU4IDExIDVDMTEgNi4zMDUzOCAxMC40OTY5IDcuNTMyODcgOS42MDg0IDguNDYwOTRMOC45ODE0NSA5LjA4NjkxQzEwLjI0NzYgOS4zMzYwOCAxMC45OTk5IDkuNzMyMTggMTEgMTAuNDEyMUMxMSAxMS40NzQ0IDguODI2MTMgMTIgNiAxMkMzLjE3Mzg3IDEyIDEgMTEuNDc0NCAxIDEwLjQxMjFDMS4wMDAxMiA5Ljc0MDc0IDEuNzMyNzkgOS4zNDYwMiAzLjAyMjQ2IDkuMDkxOEwyLjM4NzcgOC40NTcwM0MxLjUwMzA1IDcuNTMyODggMSA2LjMwNTM1IDEgNUMxIDIuMjM4NTggMy4yMzg1OCAwIDYgMFpNMy42MTEzMyA5Ljk5NjA5QzMuMzE0NDkgMTAuMDQzMiAzLjA1MDkgMTAuMTAxMiAyLjgyNzE1IDEwLjE1ODJMMi41MjE0OCAxMC4yNDIyTDIuMjgyMjMgMTAuMzE2NEwyLjA3NzE1IDEwLjM4NjdMMi4xMDE1NiAxMC40MDE0QzIuMjUwODYgMTAuNDg2NyAyLjQ3NTI0IDEwLjU3MTggMi43NTg3OSAxMC42NDk0TDIuOTM1NTUgMTAuNjk1M0MzLjQ3NDMzIDEwLjgyNTUgNC4xNDk0NyAxMC45MTcxIDQuODkyNTggMTAuOTYzOUwzLjkyODcxIDkuOTk5MDJMMy42MTEzMyA5Ljk5NjA5Wk03LjEwNjQ1IDEwLjk2MzlDNy44NDk5NCAxMC45MTcxIDguNTI1NDMgMTAuODI1NiA5LjA2NDQ1IDEwLjY5NTNDOS4zNzEyIDEwLjYyMTIgOS42MjEzMyAxMC41MzgxIDkuNzk5OCAxMC40NTMxTDkuOTIyODUgMTAuMzg2N0w5LjgwMjczIDEwLjM0NDdMOS40OTgwNSAxMC4yNDUxTDkuMjAyMTUgMTAuMTYxMUM5LjAzOTY0IDEwLjExODIgOC44NTU5NyAxMC4wNzQ0IDguNjU2MjUgMTAuMDM2MUw4LjQ1MTE3IDEwSDguMDcwMzFMNy4xMDY0NSAxMC45NjM5Wk02IDFDMy43OTA4NiAxIDIgMi43OTA4NiAyIDVDMiA2LjA0NTE1IDIuNDAxOTYgNy4wMjU3OSAzLjEwNjQ1IDcuNzYxNzJMNiAxMC42NTcyTDguODg5NjUgNy43NjU2MkM5LjU5NzkyIDcuMDI1NzggMTAgNi4wNDUxNSAxMCA1QzEwIDIuNzkwODYgOC4yMDkxNCAxIDYgMVpNNiAzQzcuMTA0NTcgMyA4IDMuODk1NDMgOCA1QzggNi4xMDQ1NyA3LjEwNDU3IDcgNiA3QzQuODk1NDMgNyA0IDYuMTA0NTcgNCA1QzQgMy44OTU0MyA0Ljg5NTQzIDMgNiAzWk02IDRDNS40NDc3MiA0IDUgNC40NDc3MiA1IDVDNSA1LjU1MjI4IDUuNDQ3NzIgNiA2IDZDNi41NTIyOCA2IDcgNS41NTIyOCA3IDVDNyA0LjQ0NzcyIDYuNTUyMjggNCA2IDRaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/place
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Place extends SvelteComponentTyped<PlaceProps, PlaceEvents, PlaceSlots> {
}
export {};
