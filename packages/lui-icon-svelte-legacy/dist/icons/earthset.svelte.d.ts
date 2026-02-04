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
export type EarthsetProps = typeof __propDef.props;
export type EarthsetEvents = typeof __propDef.events;
export type EarthsetSlots = typeof __propDef.slots;
/**
 * @component @name Earthset
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNS41VjZWNi41SDAuMDIwNTM2OUMwLjI0NzA5IDkuMjQ2MTYgMi4zMjMgMTEuNDY3OSA1IDExLjkxN1YxMC45QzIuODc2OTcgMTAuNDY5IDEuMjQyNDEgOC42OTI5MSAxLjAyNDY5IDYuNUgzLjUxNDUyQzMuNjA1ODkgOC4wNzAyMyA0LjEyNTk3IDkuNTU3ODcgNSAxMC44MjM1VjguNjk4NzZDNC43MzE1NSA4LjAwMjM2IDQuNTY2NzIgNy4yNjI2NyA0LjUxNjQ0IDYuNUg1VjUuNUg0LjUxNjQzQzQuNjEzMDkgNC4wMzM2NCA1LjEzMzE5IDIuNjUxODkgNi4wMDAwNCAxLjQ5ODk0QzYuNTYzNjIgMi4yNDg1NCA2Ljk4MDk1IDMuMDk1NTIgNy4yMzAzOCA0SDguMjYzMTFDOC4wMTAxMyAyLjk1MDg5IDcuNTU5ODYgMS45NjQzMyA2LjkzOCAxLjA4Nzg0QzguNTc3MTggMS4zOTg5NiA5LjkzMzA1IDIuNTEwMjMgMTAuNTg0IDRIMTEuNjU4NkMxMC44MzQ5IDEuNjY5NjIgOC42MTI0NCAwIDYgMEMyLjg1NDY3IDAgMC4yNzQ2MTIgMi40MjAyMyAwLjAyMDUzNjkgNS41SDBaTTEuMDI0NjkgNS41SDMuNTE0NTFDMy42MDc5OCAzLjg5MzUgNC4xNTAxNyAyLjM3MzA2IDUuMDYyMDggMS4wODc4M0MyLjkwODkgMS40OTY0NiAxLjI0NDUzIDMuMjg1NzYgMS4wMjQ2OSA1LjVaTTEwIDguNUMxMCA5LjA1MjI5IDkuNTUyMjkgOS41IDkgOS41QzguNDQ3NzEgOS41IDggOS4wNTIyOSA4IDguNUM4IDcuOTQ3NzIgOC40NDc3MSA3LjUgOSA3LjVDOS41NTIyOSA3LjUgMTAgNy45NDc3MiAxMCA4LjVaTTguNDg1MzUgNS4yMjU5TDYuNDg4MjYgNi40MjU3MUM2LjE4NzM0IDYuNjA2NSA2LjAwMzI1IDYuOTMxODUgNi4wMDMyNSA3LjI4MjkxVjkuNzE3MDlDNi4wMDMyNSAxMC4wNjgyIDYuMTg3MzQgMTAuMzkzNSA2LjQ4ODI2IDEwLjU3NDNMOC40ODUzNSAxMS43NzQxQzguODAxOTIgMTEuOTY0MyA5LjE5NzU1IDExLjk2NDUgOS41MTQzNCAxMS43NzQ3TDExLjUxNzMgMTAuNTc0NUMxMS44MTg3IDEwLjM5MzggMTIuMDAzMyAxMC4wNjgyIDEyLjAwMzMgOS43MTY3MVY3LjI4MzI4QzEyLjAwMzMgNi45MzE4MiAxMS44MTg3IDYuNjA2MTUgMTEuNTE3MyA2LjQyNTVMOS41MTQzNCA1LjIyNTMxQzkuMTk3NTUgNS4wMzU0OCA4LjgwMTkyIDUuMDM1NzEgOC40ODUzNSA1LjIyNTlaTTcuMDAzMjUgNy4yODI5MUw5LjAwMDMzIDYuMDgzMUwxMS4wMDMzIDcuMjgzMjhWOS43MTY3MUw5LjAwMDMzIDEwLjkxNjlMNy4wMDMyNSA5LjcxNzA5VjcuMjgyOTFaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/earthset
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Earthset extends SvelteComponentTyped<EarthsetProps, EarthsetEvents, EarthsetSlots> {
}
export {};
