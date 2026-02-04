<script lang="ts">/**
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
let props = $props();
const iconNode = [["path", { "d": "M7.37868 10.3536L4.08579 7.06066C3.53661 6.51149 3.50229 5.64242 3.98282 5.05326L4.08579 4.93934L7.37868 1.64645L8.08579 2.35355L4.79289 5.64645C4.61933 5.82001 4.60004 6.08944 4.73504 6.28431L4.79289 6.35355L8.08579 9.64645L7.37868 10.3536Z", "fill": "#666666" }]];
/**
 * @component @name ArrowLeft
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy4zNzg2OCAxMC4zNTM2TDQuMDg1NzkgNy4wNjA2NkMzLjUzNjYxIDYuNTExNDkgMy41MDIyOSA1LjY0MjQyIDMuOTgyODIgNS4wNTMyNkw0LjA4NTc5IDQuOTM5MzRMNy4zNzg2OCAxLjY0NjQ1TDguMDg1NzkgMi4zNTM1NUw0Ljc5Mjg5IDUuNjQ2NDVDNC42MTkzMyA1LjgyMDAxIDQuNjAwMDQgNi4wODk0NCA0LjczNTA0IDYuMjg0MzFMNC43OTI4OSA2LjM1MzU1TDguMDg1NzkgOS42NDY0NUw3LjM3ODY4IDEwLjM1MzZaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/arrow-left
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
</script>

<Icon name="arrow-left" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
