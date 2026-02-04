<script lang="ts">
/**
 * @license @lui-icon/svelte v0.1.0 - ISC
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

import Icon from '../Icon.svelte';
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M6 1V0H1V1H2.682L2.55883 1.08426C1.01152 2.16943 0 3.96659 0 6C0 8.50064 1.54404 10.7121 3.838 11.5985L4.19844 10.6657L3.99604 10.5824C2.19653 9.79512 1 8.0096 1 6C1 3.23858 3.23858 1 6 1ZM12 6C12 3.52058 10.482 1.32401 8.21668 0.422909L7.84707 1.3521L8.05424 1.43994C9.82692 2.23897 11 4.01017 11 6C11 8.68876 8.87769 10.8818 6.21689 10.9954L6 11V12H11V11L9.317 10.999L9.44117 10.9157C10.9885 9.83057 12 8.03341 12 6Z","fill":"#666666"}]];

/**
 * @component @name Refresh
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYgMVYwSDFWMUgyLjY4MkwyLjU1ODgzIDEuMDg0MjZDMS4wMTE1MiAyLjE2OTQzIDAgMy45NjY1OSAwIDZDMCA4LjUwMDY0IDEuNTQ0MDQgMTAuNzEyMSAzLjgzOCAxMS41OTg1TDQuMTk4NDQgMTAuNjY1N0wzLjk5NjA0IDEwLjU4MjRDMi4xOTY1MyA5Ljc5NTEyIDEgOC4wMDk2IDEgNkMxIDMuMjM4NTggMy4yMzg1OCAxIDYgMVpNMTIgNkMxMiAzLjUyMDU4IDEwLjQ4MiAxLjMyNDAxIDguMjE2NjggMC40MjI5MDlMNy44NDcwNyAxLjM1MjFMOC4wNTQyNCAxLjQzOTk0QzkuODI2OTIgMi4yMzg5NyAxMSA0LjAxMDE3IDExIDZDMTEgOC42ODg3NiA4Ljg3NzY5IDEwLjg4MTggNi4yMTY4OSAxMC45OTU0TDYgMTFWMTJIMTFWMTFMOS4zMTcgMTAuOTk5TDkuNDQxMTcgMTAuOTE1N0MxMC45ODg1IDkuODMwNTcgMTIgOC4wMzM0MSAxMiA2WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/refresh
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 * 
 */
</script>

<Icon name="refresh" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
