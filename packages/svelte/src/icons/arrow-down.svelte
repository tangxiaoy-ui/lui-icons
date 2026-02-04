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

const iconNode: IconNode = [["path",{"d":"M10.3605 4.34367L7.0676 7.63657C6.51842 8.18574 5.64936 8.22006 5.0602 7.73954L4.94628 7.63657L1.65338 4.34367L2.36049 3.63657L5.65338 6.92946C5.82695 7.10303 6.09637 7.12231 6.29124 6.98731L6.36049 6.92946L9.65338 3.63657L10.3605 4.34367Z","fill":"#666666"}]];

/**
 * @component @name ArrowDown
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuMzYwNSA0LjM0MzY3TDcuMDY3NiA3LjYzNjU3QzYuNTE4NDIgOC4xODU3NCA1LjY0OTM2IDguMjIwMDYgNS4wNjAyIDcuNzM5NTRMNC45NDYyOCA3LjYzNjU3TDEuNjUzMzggNC4zNDM2N0wyLjM2MDQ5IDMuNjM2NTdMNS42NTMzOCA2LjkyOTQ2QzUuODI2OTUgNy4xMDMwMyA2LjA5NjM3IDcuMTIyMzEgNi4yOTEyNCA2Ljk4NzMxTDYuMzYwNDkgNi45Mjk0Nkw5LjY1MzM4IDMuNjM2NTdMMTAuMzYwNSA0LjM0MzY3WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-down
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 * 
 */
</script>

<Icon name="arrow-down" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
