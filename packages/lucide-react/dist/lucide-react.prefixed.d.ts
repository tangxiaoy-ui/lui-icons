import * as react from 'react';
import { RefAttributes, SVGProps, ForwardRefExoticComponent } from 'react';

/**
 * A reduced version of `SVGElementType` from @types/react. This type was added
 * with the release of React 19, and is included here in order to support usage
 * with older versions.
 */
type SVGElementType = 'circle' | 'ellipse' | 'g' | 'line' | 'path' | 'polygon' | 'polyline' | 'rect' | 'defs';
type IconNode = [elementName: SVGElementType, attrs: Record<string, string>][];
type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ElementAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
interface LucideProps extends ElementAttributes {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
}
type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;

/**
 * @component @name AnnotateCc
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuNjc5NDQgNy45OTY0OUw1LjAyMzAyIDIuNzgxMjZDNS4zNjQ3MiAyLjI0ODI4IDYuMDc5MSAyLjA4OTg2IDYuNjE4NjMgMi40Mjc0MUM2Ljc2MzA0IDIuNTE3NzYgNi44ODUzOCAyLjYzODYxIDYuOTc2ODMgMi43ODEyNkwxMC4zMjA0IDcuOTk2NDlDMTAuNjYyMSA4LjUyOTQ3IDEwLjUwMTcgOS4yMzUxOCA5Ljk2MjIxIDkuNTcyNzRDOS43NzcxMyA5LjY4ODUzIDkuNTYyNTcgOS43NSA5LjM0MzUgOS43NUgyLjY1NjM1QzIuMDE3NzIgOS43NSAxLjUgOS4yMzg1NyAxLjUgOC42MDc2OUMxLjUgOC4zOTEyOCAxLjU2MjIzIDguMTc5MzIgMS42Nzk0NCA3Ljk5NjQ5Wk01Ljk5OTkzIDMuMzkyNDZMMi42NTYzNSA4LjYwNzY5SDkuMzQzNUw1Ljk5OTkzIDMuMzkyNDZaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/annotate-cc
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const AnnotateCc: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name ArrowDown
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuMzYwNSA0LjM0MzY3TDcuMDY3NiA3LjYzNjU3QzYuNTE4NDIgOC4xODU3NCA1LjY0OTM2IDguMjIwMDYgNS4wNjAyIDcuNzM5NTRMNC45NDYyOCA3LjYzNjU3TDEuNjUzMzggNC4zNDM2N0wyLjM2MDQ5IDMuNjM2NTdMNS42NTMzOCA2LjkyOTQ2QzUuODI2OTUgNy4xMDMwMyA2LjA5NjM3IDcuMTIyMzEgNi4yOTEyNCA2Ljk4NzMxTDYuMzYwNDkgNi45Mjk0Nkw5LjY1MzM4IDMuNjM2NTdMMTAuMzYwNSA0LjM0MzY3WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-down
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const ArrowDown: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name ArrowDoubleLeft
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS44NzY4OCAyLjMyOTFMMi45NTMwNSA1LjY3MDlDMi44MDg3MiA1LjgzNTg1IDIuNzkwMTIgNi4wNzIxNCAyLjg5ODM2IDYuMjU0ODhMMi45NTMwNSA2LjMyOTFMNS44NzY4OCA5LjY3MDlMNS4xMjM5NSAxMC4zMjkxTDIuMjAwMTIgNi45ODczQzEuNzM4NDggNi40NTk1MiAxLjcwNzI0IDUuNjg5MDUgMi4xMDczNSA1LjEyODkxTDIuMjAwMTIgNS4wMTI3TDUuMTIzOTUgMS42NzA5TDUuODc2ODggMi4zMjkxWk05Ljg3Njg4IDIuMzI5MUw2Ljk1MzA1IDUuNjcwOUM2LjgwODcyIDUuODM1ODUgNi43OTAxMiA2LjA3MjE0IDYuODk4MzYgNi4yNTQ4OEw2Ljk1MzA1IDYuMzI5MUw5Ljg3Njg4IDkuNjcwOUw5LjEyMzk1IDEwLjMyOTFMNi4yMDAxMiA2Ljk4NzNDNS43Mzg0OCA2LjQ1OTUyIDUuNzA3MjQgNS42ODkwNSA2LjEwNzM1IDUuMTI4OTFMNi4yMDAxMiA1LjAxMjdMOS4xMjM5NSAxLjY3MDlMOS44NzY4OCAyLjMyOTFaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/arrow-double-left
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const ArrowDoubleLeft: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name ArrowUp
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMS42Mzc2OCA3LjY0MTk3TDQuOTMwNTcgNC4zNDkwOEM1LjQ3OTc0IDMuNzk5OSA2LjM0ODgxIDMuNzY1NTggNi45Mzc5NyA0LjI0NjExTDcuMDUxODkgNC4zNDkwOEwxMC4zNDQ4IDcuNjQxOTdMOS42Mzc2OCA4LjM0OTA4TDYuMzQ0NzggNS4wNTYxOEM2LjE3MTIyIDQuODgyNjIgNS45MDE3OSA0Ljg2MzMzIDUuNzA2OTIgNC45OTgzM0w1LjYzNzY4IDUuMDU2MThMMi4zNDQ3OCA4LjM0OTA4TDEuNjM3NjggNy42NDE5N1oiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-up
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const ArrowUp: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name ArrowLeft
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy4zNzg2OCAxMC4zNTM2TDQuMDg1NzkgNy4wNjA2NkMzLjUzNjYxIDYuNTExNDkgMy41MDIyOSA1LjY0MjQyIDMuOTgyODIgNS4wNTMyNkw0LjA4NTc5IDQuOTM5MzRMNy4zNzg2OCAxLjY0NjQ1TDguMDg1NzkgMi4zNTM1NUw0Ljc5Mjg5IDUuNjQ2NDVDNC42MTkzMyA1LjgyMDAxIDQuNjAwMDQgNi4wODk0NCA0LjczNTA0IDYuMjg0MzFMNC43OTI4OSA2LjM1MzU1TDguMDg1NzkgOS42NDY0NUw3LjM3ODY4IDEwLjM1MzZaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/arrow-left
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const ArrowLeft: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name AnnotateSign
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuNSA2QzEuNSAzLjUxNDcyIDMuNTE0NzIgMS41IDYgMS41QzguNDg1MjggMS41IDEwLjUgMy41MTQ3MiAxMC41IDZDMTAuNSA4LjQ4NTI4IDguNDg1MjggMTAuNSA2IDEwLjVDMy41MTQ3MiAxMC41IDEuNSA4LjQ4NTI4IDEuNSA2Wk05LjUgNkM5LjUgNC4wNjcgNy45MzMgMi41IDYgMi41QzQuMDY3IDIuNSAyLjUgNC4wNjcgMi41IDZDMi41IDcuOTMzIDQuMDY3IDkuNSA2IDkuNUM3LjkzMyA5LjUgOS41IDcuOTMzIDkuNSA2WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/annotate-sign
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const AnnotateSign: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name BatchDelete
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy41IDNDOC4zMjg0MyAzIDkgMy42NzE1NyA5IDQuNVYxMC41QzkgMTEuMzI4NCA4LjMyODQzIDEyIDcuNSAxMkgxLjVDMC42NzE1NzMgMTIgMCAxMS4zMjg0IDAgMTAuNVY0LjVDMCAzLjY3MTU3IDAuNjcxNTczIDMgMS41IDNINy41Wk0xLjUgNEMxLjIyMzg2IDQgMSA0LjIyMzg2IDEgNC41VjEwLjVDMSAxMC43NzYxIDEuMjIzODYgMTEgMS41IDExSDcuNUM3Ljc3NjE0IDExIDggMTAuNzc2MSA4IDEwLjVWNC41QzggNC4yMjM4NiA3Ljc3NjE0IDQgNy41IDRIMS41Wk02Ljg1MzUyIDUuODUzNTJMNS4yMDcwMyA3LjVMNi44NTM1MiA5LjE0NjQ4TDYuMTQ2NDggOS44NTM1Mkw0LjUgOC4yMDcwM0wyLjg1MzUyIDkuODUzNTJMMi4xNDY0OCA5LjE0NjQ4TDMuNzkyOTcgNy41TDIuMTQ2NDggNS44NTM1MkwyLjg1MzUyIDUuMTQ2NDhMNC41IDYuNzkyOTdMNi4xNDY0OCA1LjE0NjQ4TDYuODUzNTIgNS44NTM1MlpNMTAuNSAwQzExLjI3OTcgMCAxMS45MjA0IDAuNTk0ODQ5IDExLjk5MzIgMS4zNTU0N0wxMiAxLjVWNy41QzEyIDguMjc5NjcgMTEuNDA1MiA4LjkyMDQ1IDEwLjY0NDUgOC45OTMxNkwxMC41IDlIMTBWOEgxMC41QzEwLjc0NTUgOCAxMC45NDk5IDcuODIzMDkgMTAuOTkyMiA3LjU4OTg0TDExIDcuNVYxLjVDMTEgMS4yNTQ1NCAxMC44MjMxIDEuMDUwMTUgMTAuNTg5OCAxLjAwNzgxTDEwLjUgMUg0LjVDNC4yNTQ1NCAxIDQuMDUwMTUgMS4xNzY5MSA0LjAwNzgxIDEuNDEwMTZMNCAxLjVWMkgzVjEuNUMzIDAuNzIwMzI3IDMuNTk0ODUgMC4wNzk1NTIyIDQuMzU1NDcgMC4wMDY4MzU5NEw0LjUgMEgxMC41WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/batch-delete
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const BatchDelete: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name BatchAdd
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy41IDNDOC4zMjg0MyAzIDkgMy42NzE1NyA5IDQuNVYxMC41QzkgMTEuMzI4NCA4LjMyODQzIDEyIDcuNSAxMkgxLjVDMC42NzE1NzMgMTIgMCAxMS4zMjg0IDAgMTAuNVY0LjVDMCAzLjY3MTU3IDAuNjcxNTczIDMgMS41IDNINy41Wk0xLjUgNEMxLjIyMzg2IDQgMSA0LjIyMzg2IDEgNC41VjEwLjVDMSAxMC43NzYxIDEuMjIzODYgMTEgMS41IDExSDcuNUM3Ljc3NjE0IDExIDggMTAuNzc2MSA4IDEwLjVWNC41QzggNC4yMjM4NiA3Ljc3NjE0IDQgNy41IDRIMS41Wk01IDdIN1Y4SDVWMTBINFY4SDJWN0g0VjVINVY3Wk0xMC41IDBDMTEuMjc5NyAwIDExLjkyMDQgMC41OTQ4NDkgMTEuOTkzMiAxLjM1NTQ3TDEyIDEuNVY3LjVDMTIgOC4yNzk2NyAxMS40MDUyIDguOTIwNDUgMTAuNjQ0NSA4Ljk5MzE2TDEwLjUgOUgxMFY4SDEwLjVDMTAuNzQ1NSA4IDEwLjk0OTkgNy44MjMwOSAxMC45OTIyIDcuNTg5ODRMMTEgNy41VjEuNUMxMSAxLjI1NDU0IDEwLjgyMzEgMS4wNTAxNSAxMC41ODk4IDEuMDA3ODFMMTAuNSAxSDQuNUM0LjI1NDU0IDEgNC4wNTAxNSAxLjE3NjkxIDQuMDA3ODEgMS40MTAxNkw0IDEuNVYySDNWMS41QzMgMC43MjAzMjcgMy41OTQ4NSAwLjA3OTU1MjIgNC4zNTU0NyAwLjAwNjgzNTk0TDQuNSAwSDEwLjVaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/batch-add
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const BatchAdd: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name ArrowRight
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC4zNTM1NSAxLjY0NjQ1TDcuNjQ2NDUgNC45MzkzNEM4LjE5NTYyIDUuNDg4NTEgOC4yMjk5NCA2LjM1NzU4IDcuNzQ5NDIgNi45NDY3NEw3LjY0NjQ1IDcuMDYwNjZMNC4zNTM1NSAxMC4zNTM2TDMuNjQ2NDUgOS42NDY0NUw2LjkzOTM0IDYuMzUzNTVDNy4xMTI5MSA2LjE3OTk5IDcuMTMyMTkgNS45MTA1NiA2Ljk5NzIgNS43MTU2OUw2LjkzOTM0IDUuNjQ2NDVMMy42NDY0NSAyLjM1MzU1TDQuMzUzNTUgMS42NDY0NVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-right
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const ArrowRight: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name BookMark
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMEgxMEMxMC41NTIzIDAgMTEgMC40NDc3MTUgMTEgMVYxMC43MzA2QzExIDEwLjg3MDUgMTAuOTcwNiAxMS4wMDg5IDEwLjkxMzggMTEuMTM2OEMxMC42ODk1IDExLjY0MTQgMTAuMDk4NSAxMS44Njg3IDkuNTkzODYgMTEuNjQ0NEw2IDEwLjA0NzJMMi40MDYxNCAxMS42NDQ0QzIuMjc4MjggMTEuNzAxMyAyLjEzOTkyIDExLjczMDYgMiAxMS43MzA2QzEuNDQ3NzIgMTEuNzMwNiAxIDExLjI4MjkgMSAxMC43MzA2VjFDMSAwLjQ0NzcxNSAxLjQ0NzcyIDAgMiAwWk0xMCAxSDJWMTAuNzMwNkw1LjU5Mzg2IDkuMTMzMzVDNS44NTI0MyA5LjAxODQzIDYuMTQ3NTcgOS4wMTg0MyA2LjQwNjE0IDkuMTMzMzVMMTAgMTAuNzMwNlYxWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/book-mark
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const BookMark: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name BtnDelete
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNkMwIDIuNjg2MjkgMi42ODYyOSAwIDYgMEM5LjMxMzcxIDAgMTIgMi42ODYyOSAxMiA2QzEyIDkuMzEzNzEgOS4zMTM3MSAxMiA2IDEyQzIuNjg2MjkgMTIgMCA5LjMxMzcxIDAgNlpNMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNloiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTguODI4NDIgNS41VjYuNUgzLjE3MTU3VjUuNUg4LjgyODQyWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/btn-delete
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const BtnDelete: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name BtnAdd
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNkMwIDIuNjg2MjkgMi42ODYyOSAwIDYgMEM5LjMxMzcxIDAgMTIgMi42ODYyOSAxMiA2QzEyIDkuMzEzNzEgOS4zMTM3MSAxMiA2IDEyQzIuNjg2MjkgMTIgMCA5LjMxMzcxIDAgNlpNMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNloiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTYuNSA1LjQ5OTAyTDguODI4MTIgNS41VjYuNUw2LjUgNi40OTkwMlY4LjgyODEySDUuNVY2LjQ5OTAyTDMuMTcxODggNi41VjUuNUw1LjUgNS40OTkwMlYzLjE3MTg4SDYuNVY1LjQ5OTAyWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/btn-add
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const BtnAdd: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name BtnChange
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNSAwSDguNUMxMC40MzMgMCAxMiAxLjU2NyAxMiAzLjVWOC41QzEyIDEwLjQzMyAxMC40MzMgMTIgOC41IDEySDMuNUMxLjU2NyAxMiAwIDEwLjQzMyAwIDguNVYzLjVDMCAxLjU2NyAxLjU2NyAwIDMuNSAwWk04LjUgMUgzLjVDMi4xMTkyOSAxIDEgMi4xMTkyOSAxIDMuNVY4LjVDMSA5Ljg4MDcxIDIuMTE5MjkgMTEgMy41IDExSDguNUM5Ljg4MDcxIDExIDExIDkuODgwNzEgMTEgOC41VjMuNUMxMSAyLjExOTI5IDkuODgwNzEgMSA4LjUgMVoiIGZpbGw9IiM2NjY2NjYiLz4KPGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjIiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/btn-change
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const BtnChange: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name BtnFold
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNSAwSDguNUMxMC40MzMgMCAxMiAxLjU2NyAxMiAzLjVWOC41QzEyIDEwLjQzMyAxMC40MzMgMTIgOC41IDEySDMuNUMxLjU2NyAxMiAwIDEwLjQzMyAwIDguNVYzLjVDMCAxLjU2NyAxLjU2NyAwIDMuNSAwWk04LjUgMUgzLjVDMi4xMTkyOSAxIDEgMi4xMTkyOSAxIDMuNVY4LjVDMSA5Ljg4MDcxIDIuMTE5MjkgMTEgMy41IDExSDguNUM5Ljg4MDcxIDExIDExIDkuODgwNzEgMTEgOC41VjMuNUMxMSAyLjExOTI5IDkuODgwNzEgMSA4LjUgMVoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTguODI4NDIgNS41VjYuNUgzLjE3MTU3VjUuNUg4LjgyODQyWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/btn-fold
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const BtnFold: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name BtnUnfold
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNSAwSDguNUMxMC40MzMgMCAxMiAxLjU2NyAxMiAzLjVWOC41QzEyIDEwLjQzMyAxMC40MzMgMTIgOC41IDEySDMuNUMxLjU2NyAxMiAwIDEwLjQzMyAwIDguNVYzLjVDMCAxLjU2NyAxLjU2NyAwIDMuNSAwWk04LjUgMUgzLjVDMi4xMTkyOSAxIDEgMi4xMTkyOSAxIDMuNVY4LjVDMSA5Ljg4MDcxIDIuMTE5MjkgMTEgMy41IDExSDguNUM5Ljg4MDcxIDExIDExIDkuODgwNzEgMTEgOC41VjMuNUMxMSAyLjExOTI5IDkuODgwNzEgMSA4LjUgMVoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTYuNSAzLjE3MTU3VjUuNDk5TDguODI4NDIgNS41VjYuNUw2LjUgNi40OTlWOC44Mjg0M0g1LjVWNi40OTlMMy4xNzE1NyA2LjVWNS41TDUuNSA1LjQ5OVYzLjE3MTU3SDYuNVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/btn-unfold
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const BtnUnfold: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Bug
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzcuNjU2ODUgMCA5IDEuMzQzMTUgOSAzSDEwVjRDMTAuNTUyMyA0IDExIDMuNTUyMjggMTEgM0gxMkMxMiA0LjEwNDU3IDExLjEwNDYgNSAxMCA1VjZIMTJWN0gxMFY4QzEwIDguMDE2NjMgOS45OTgyNSA4LjAzMzIyIDkuOTk4MDUgOC4wNDk4QzExLjE0MDEgOC4yODA3IDEyIDkuMjg5ODQgMTIgMTAuNUgxMUMxMSA5Ljc5NTkxIDEwLjUxNDYgOS4yMDY0IDkuODYwMzUgOS4wNDQ5MkM5LjQwMDczIDEwLjc0NzEgNy44NDc0NiAxMiA2IDEyQzQuMTUyNDUgMTIgMi41OTgyMSAxMC43NDcyIDIuMTM4NjcgOS4wNDQ5MkMxLjQ4NDkyIDkuMjA2NzMgMSA5Ljc5NjI0IDEgMTAuNUgwQzAgOS4yOTAxOCAwLjg1OTM2OSA4LjI4MTA2IDIuMDAwOTggOC4wNDk4QzIuMDAwNzcgOC4wMzMyMiAyIDguMDE2NjMgMiA4VjdIMFY2SDJWNUMwLjg5NTQzIDUgMCA0LjEwNDU3IDAgM0gxQzEgMy41NTIyOCAxLjQ0NzcyIDQgMiA0VjNIM0MzIDEuMzQzMTUgNC4zNDMxNSAwIDYgMFpNMyA4QzMgOS40ODY0IDQuMDgxMjggMTAuNzE4OSA1LjUgMTAuOTU3VjZINi41VjEwLjk1OEM3LjkxODgyIDEwLjcxOTkgOSA5LjQ4NjQ3IDkgOFY0SDNWOFpNNiAxQzQuODk1NDMgMSA0IDEuODk1NDMgNCAzSDhDOCAxLjg5NTQzIDcuMTA0NTcgMSA2IDFaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/bug
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Bug: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name ArrowDoubleRight
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS43OTk4IDUuMDEyN0M2LjI2MTU1IDUuNTQwNTEgNi4yOTI3OSA2LjMxMDkxIDUuODkyNTggNi44NzEwOUw1Ljc5OTggNi45ODczTDIuODc1OTggMTAuMzI5MUwyLjEyNDAyIDkuNjcwOUw1LjA0Nzg1IDYuMzI5MUM1LjE5MTk4IDYuMTY0MTYgNS4yMDk3NiA1LjkyNzc3IDUuMTAxNTYgNS43NDUxMkw1LjA0Nzg1IDUuNjcwOUwyLjEyNDAyIDIuMzI5MUwyLjg3NTk4IDEuNjcwOUw1Ljc5OTggNS4wMTI3Wk05Ljc5OTggNS4wMTI3QzEwLjI2MTYgNS41NDA1MSAxMC4yOTI4IDYuMzEwOTEgOS44OTI1OCA2Ljg3MTA5TDkuNzk5OCA2Ljk4NzNMNi44NzU5OCAxMC4zMjkxTDYuMTI0MDIgOS42NzA5TDkuMDQ3ODUgNi4zMjkxQzkuMTkxOTggNi4xNjQxNiA5LjIwOTc2IDUuOTI3NzcgOS4xMDE1NiA1Ljc0NTEyTDkuMDQ3ODUgNS42NzA5TDYuMTI0MDIgMi4zMjkxTDYuODc1OTggMS42NzA5TDkuNzk5OCA1LjAxMjdaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/arrow-double-right
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const ArrowDoubleRight: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name BtnMore
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNkMwIDIuNjg2MjkgMi42ODYyOSAwIDYgMEM5LjMxMzcxIDAgMTIgMi42ODYyOSAxMiA2QzEyIDkuMzEzNzEgOS4zMTM3MSAxMiA2IDEyQzIuNjg2MjkgMTIgMCA5LjMxMzcxIDAgNlpNMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNloiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjc1IDUuMjVWNi43NUgyLjI1VjUuMjVIMy43NVpNNi43NSA1LjI1VjYuNzVINS4yNVY1LjI1SDYuNzVaTTkuNzUgNi43NVY1LjI1SDguMjVWNi43NUg5Ljc1WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/btn-more
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const BtnMore: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Calendar
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCAxSDhWMEg5VjFIMTAuNUMxMS4zMjg0IDEgMTIgMS42NzE1NyAxMiAyLjVWMTAuNUMxMiAxMS4zMjg0IDExLjMyODQgMTIgMTAuNSAxMkgxLjVDMC42NzE1NzMgMTIgMCAxMS4zMjg0IDAgMTAuNVYyLjVDMCAxLjY3MTU3IDAuNjcxNTczIDEgMS41IDFIM1YwSDRWMVpNMSAxMC41QzEgMTAuNzc2MSAxLjIyMzg2IDExIDEuNSAxMUgxMC41QzEwLjc3NjEgMTEgMTEgMTAuNzc2MSAxMSAxMC41VjZIMVYxMC41Wk0xLjUgMkMxLjIyMzg2IDIgMSAyLjIyMzg2IDEgMi41VjVIMTFWMi41QzExIDIuMjIzODYgMTAuNzc2MSAyIDEwLjUgMkg5VjRIOFYySDRWNEgzVjJIMS41WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/calendar
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Calendar: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Checkin
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCAxSDhWMEg5VjFIMTAuNUMxMS4zMjg0IDEgMTIgMS42NzE1NyAxMiAyLjVWMTAuNUMxMiAxMS4zMjg0IDExLjMyODQgMTIgMTAuNSAxMkgxLjVDMC42NzE1NzMgMTIgMCAxMS4zMjg0IDAgMTAuNVYyLjVDMCAxLjY3MTU3IDAuNjcxNTczIDEgMS41IDFIM1YwSDRWMVpNMS41IDJDMS4yMjM4NiAyIDEgMi4yMjM4NiAxIDIuNVYxMC41QzEgMTAuNzc2MSAxLjIyMzg2IDExIDEuNSAxMUgxMC41QzEwLjc3NjEgMTEgMTEgMTAuNzc2MSAxMSAxMC41VjIuNUMxMSAyLjIyMzg2IDEwLjc3NjEgMiAxMC41IDJIOVYzSDhWMkg0VjNIM1YySDEuNVpNOS4zNTM1MiA1LjM1MzUyTDUgOS43MDcwM0wyLjY0NjQ4IDcuMzUzNTJMMy4zNTM1MiA2LjY0NjQ4TDUgOC4yOTI5N0w4LjY0NjQ4IDQuNjQ2NDhMOS4zNTM1MiA1LjM1MzUyWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/checkin
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Checkin: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name ChartHistogram
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMTFIMFYxMEgxMlYxMVpNMi4yNSA1QzIuNjY0MjEgNSAzIDUuMzM1NzkgMyA1Ljc1VjguMjVDMyA4LjY2NDIxIDIuNjY0MjEgOSAyLjI1IDlIMC43NUMwLjMzNTc4NiA5IDAgOC42NjQyMSAwIDguMjVWNS43NUMwIDUuMzM1NzkgMC4zMzU3ODYgNSAwLjc1IDVIMi4yNVpNNi43NSAzQzcuMTY0MjEgMyA3LjUgMy4zMzU3OSA3LjUgMy43NVY4LjI1QzcuNSA4LjY2NDIxIDcuMTY0MjEgOSA2Ljc1IDlINS4yNUM0LjgzNTc5IDkgNC41IDguNjY0MjEgNC41IDguMjVWMy43NUM0LjUgMy4zMzU3OSA0LjgzNTc5IDMgNS4yNSAzSDYuNzVaTTExLjI1IDFDMTEuNjY0MiAxIDEyIDEuMzM1NzkgMTIgMS43NVY4LjI1QzEyIDguNjY0MjEgMTEuNjY0MiA5IDExLjI1IDlIOS43NUM5LjMzNTc5IDkgOSA4LjY2NDIxIDkgOC4yNVYxLjc1QzkgMS4zMzU3OSA5LjMzNTc5IDEgOS43NSAxSDExLjI1Wk0xIDhIMlY2SDFWOFpNNS41IDhINi41VjRINS41VjhaTTEwIDhIMTFWMkgxMFY4Wk0zIDRIMFYzSDNWNFpNNy41IDJIMFYxSDcuNVYyWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/chart-histogram
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const ChartHistogram: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Cloud
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEgNS41QzEgMy4wMTQ3MiAzLjAxNDcyIDEgNS41IDFDNy40NzgxIDEgOS4xOTQwMyAyLjI4NjEyIDkuNzgzNjMgNC4xMTc0N0w5LjgyNiA0LjI2MUw5LjkyNDEgNC4zMDIxN0MxMS4xMDc4IDQuODI4NzEgMTEuOTE5NyA1Ljk4MDE2IDExLjk5NDQgNy4zMDA3MUwxMiA3LjVDMTIgOS4zNTY0OSAxMC41NTA2IDEwLjg4NzEgOC42OTA3MSAxMC45OTQ3TDguNSAxMUwyLjk4MzgzIDEwLjk5OTdMMi44MDMyNCAxMC45OTM2QzEuMjMwNTYgMTAuODkxNiAwIDkuNTgzNDkgMCA4QzAgNy4xNTg0NSAwLjM0OTM5IDYuMzc0NjIgMC45NDM2NzggNS44MTU0NkwxLjAwOCA1Ljc1OEwxLjAwMzY5IDUuNjgyNzhMMSA1LjVaTTguOTE4OTMgNC43NDcxQzguNTcgMy4xNTQzMSA3LjE1MjM2IDIgNS41IDJDMy41NjcgMiAyIDMuNTY3IDIgNS41QzIgNS42NDI1MyAyLjAwODQ5IDUuNzgxMjkgMi4wMjU0NSA1LjkxNTNMMi4wNjI1MiA2LjIwODI4TDEuODIzODMgNi4zODIxOEMxLjMwOTY4IDYuNzU2NzggMSA3LjM1MjA3IDEgOEMxIDkuMDU1NTIgMS44MjA1NCA5LjkyNzc0IDIuODUxNzkgOS45OTQ5NEwzIDEwTDguNDg1NTYgMTAuMDAwMkw4LjY0NzM1IDkuOTk1NzRDOS45NjQ1NCA5LjkxOTQzIDExIDguODI1OTQgMTEgNy41QzExIDYuNDAyMzMgMTAuMjg2MSA1LjQ0MjY3IDkuMjU2NDcgNS4xMTY4TDguOTgwOCA1LjAyOTU1TDguOTE4OTMgNC43NDcxWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/cloud
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Cloud: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Change
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMS4zMDE3OCAxMUMxLjEzNjAyIDExIDAuOTc3MDQ1IDEwLjkzNDIgMC44NTk4MzUgMTAuODE2OUMwLjYxNTc1NyAxMC41NzI5IDAuNjE1NzU3IDEwLjE3NzEgMC44NTk4MzUgOS45MzMwNkwzLjkzMzA2IDYuODU5ODRDNC4wNTAyNyA2Ljc0MjYyIDQuMjA5MjQgNi42NzY3OCA0LjM3NSA2LjY3Njc4QzQuNzIwMTggNi42NzY3OCA1IDYuOTU2NiA1IDcuMzAxNzhWOS41SDRWOC4yMDhMMi4yMDcgMTBIOC41QzkuMjc5NyAxMCA5LjkyMDQ1IDkuNDA1MTEgOS45OTMxMyA4LjY0NDQ2TDEwIDguNUgxMUMxMSA5Ljg4MDcxIDkuODgwNzEgMTEgOC41IDExSDEuMzAxNzhaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik0xMC42OTgyIDFDMTAuODY0IDEgMTEuMDIzIDEuMDY1ODUgMTEuMTQwMiAxLjE4MzA2QzExLjM4NDIgMS40MjcxNCAxMS4zODQyIDEuODIyODYgMTEuMTQwMiAyLjA2Njk0TDguMDY2OTQgNS4xNDAxNkM3Ljk0OTczIDUuMjU3MzggNy43OTA3NiA1LjMyMzIyIDcuNjI1IDUuMzIzMjJDNy4yNzk4MiA1LjMyMzIyIDcgNS4wNDM0IDcgNC42OTgyMlYyLjVIOFYzLjc5Mkw5Ljc5MyAySDMuNUMyLjcyMDMgMiAyLjA3OTU1IDIuNTk0ODkgMi4wMDY4NyAzLjM1NTU0TDIgMy41SDFDMSAyLjExOTI5IDIuMTE5MjkgMSAzLjUgMUgxMC42OTgyWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/change
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Change: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Confirm
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS45OTk5OSAwQzguMjA5MTMgMCA5Ljk5OTk5IDEuNzkwODYgOS45OTk5OSA0QzkuOTk5OTkgNC4zMjA4NiA5Ljk2MTgzIDQuNjM2OSA5Ljg4NzY5IDQuOTQzMzZMOS44MjYxNiA1LjE3MTg4TDguODY5MTMgNC44Nzg5MUM4Ljk1NTQzIDQuNTk2NzkgOC45OTk5OSA0LjMwMTY3IDguOTk5OTkgNEM4Ljk5OTk5IDIuMzQzMTUgNy42NTY4NSAxIDUuOTk5OTkgMUM0LjM0MzE5IDEuMDAwMDYgMi45OTk5OSAyLjM0MzE4IDIuOTk5OTkgNEMyLjk5OTk5IDUuNTk3NjggNC4yNDk0IDYuOTAzODcgNS44MjQyMSA2Ljk5NTEyTDUuOTk5OTkgN1Y4SDMuNTYxNTJDMi42MzcxOSA4LjAwMDA2IDEuODI0MTkgOC41OTIwNiAxLjUzMzE5IDkuNDU2MDVMMS40ODUzNCA5LjYyMTA5TDEuMjk1ODkgMTAuMzc4OUMxLjIyOTA0IDEwLjY0NjYgMS4zOTE1MyAxMC45MTgyIDEuNjU5MTcgMTAuOTg1NEwxLjcxOTcyIDEwLjk5NjFMMS43ODEyNCAxMUg1Ljk5OTk5VjEySDEuNzgxMjRDMS42NTg2IDEyIDEuNTM1OTYgMTEuOTg0OCAxLjQxNjk4IDExLjk1NTFDMC42NjA3NTcgMTEuNzY2IDAuMTgzMTEyIDExLjAzMzcgMC4yOTY4NjcgMTAuMjc4M0wwLjMyNTE4NyAxMC4xMzU3TDAuNTE0NjQgOS4zNzg5MUMwLjgzMzc0OCA4LjEwMjQ3IDEuOTA5MDUgNy4xNzMzMyAzLjE5MDQyIDcuMDIxNDhMMy4zNjIzIDcuMDA1ODZMMy4yMzgyNyA2Ljg5MzU1QzIuNTIwMjcgNi4yMDgwMSAyLjA1Njg5IDUuMjU3NDEgMi4wMDQ4NyA0LjE5OTIyTDEuOTk5OTkgNEMxLjk5OTk5IDEuNzkwOSAzLjc5MDkgNS44MTI5NWUtMDUgNS45OTk5OSAwWk00LjcyMTY3IDguMjg1MTZDNC44ODQ4IDguNTUwMDIgNS4xMjYyMSA4Ljc1ODI1IDUuNDEwMTUgOC44Nzk4OEw1LjU1NTY2IDguOTMzNTlMNS4yNTk3NiA5Ljg4ODY3QzQuNzQ1MDcgOS43MjkyOSA0LjI5Nzk3IDkuNDA2NTMgMy45ODI0MSA4Ljk3NTU5TDMuODcwMTEgOC44MDg1OUw0LjcyMTY3IDguMjg1MTZaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik05IDZDMTAuNjU2OSA2IDEyIDcuMzQzMTUgMTIgOUMxMiAxMC42NTY5IDEwLjY1NjkgMTIgOSAxMkM3LjM0MzE1IDEyIDYgMTAuNjU2OSA2IDlDNiA3LjM0MzE1IDcuMzQzMTUgNiA5IDZaTTkgN0M3Ljg5NTQzIDcgNyA3Ljg5NTQzIDcgOUM3IDEwLjEwNDYgNy44OTU0MyAxMSA5IDExQzEwLjEwNDYgMTEgMTEgMTAuMTA0NiAxMSA5QzExIDcuODk1NDMgMTAuMTA0NiA3IDkgN1pNOS41IDkuMTkxNDFMOS45MTk5MiA5LjQwMDM5TDkuNDcyNjYgMTAuMjk0OUw4Ljg4NjcyIDEwLjAwMjlDOC42NzkyMyA5Ljg5OTE4IDguNTM4NzYgOS43MDAyMyA4LjUwNjg0IDkuNDc0NjFMOC41IDkuMzc1OThWOEg5LjVWOS4xOTE0MVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/confirm
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Confirm: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Collection
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNzUyOTkgMy4yMjQ5OUw1LjQ3ODcgMC44MDIzNTNDNS43MTg5MyAwLjQ2NDkyIDYuMTg3MjIgMC4zODYxMjQgNi41MjQ2NSAwLjYyNjM1N0M2LjU5MjcxIDAuNjc0ODExIDYuNjUyMTkgMC43MzQyOTUgNi43MDA2NSAwLjgwMjM1M0w4LjQyNTk5IDMuMjI1OTlMMTEuMzU2NiA0LjA0MjA2QzExLjcyMjQgNC4xNDM4OCAxMS45NDkxIDQuNDk5ODUgMTEuODk4NyA0Ljg2NTg0TDExLjg3OCA0Ljk2NTcyQzExLjg1MDUgNS4wNjQ3MSAxMS44MDI5IDUuMTU2OTggMTEuNzM4MiA1LjIzNjgxTDkuODgyOTkgNy41MjU5OUw5Ljk3NjkzIDEwLjQyOEM5Ljk4OTE2IDEwLjgwNzUgOS43MTcyNSAxMS4xMzAyIDkuMzUyOTcgMTEuMTkxNkw5LjI1MTQ3IDExLjIwMTdDOS4xNjA1MSAxMS4yMDQ3IDkuMDY5NzcgMTEuMTkxIDguOTgzNyAxMS4xNjE1TDYuMDg4OTkgMTAuMTY3TDMuMTk1NjQgMTEuMTYxNUMyLjgzNjU0IDExLjI4NDggMi40NDgxMSAxMS4xMTk5IDIuMjgyMjMgMTAuNzg5OEwyLjI0MjY5IDEwLjY5NTdDMi4yMTMxMyAxMC42MDk3IDIuMTk5NDggMTAuNTE4OSAyLjIwMjQxIDEwLjQyOEwyLjI5NDk5IDcuNTIzOTlMMC40NDExNTEgNS4yMzY4MUMwLjIwNDA2MyA0Ljk0NDI2IDAuMjIzMzgyIDQuNTI3MzQgMC40NzA2MyA0LjI1ODAxTDAuNTUxNjEzIDQuMTgxOTFDMC42MzE0NDIgNC4xMTcyMiAwLjcyMzcxMyA0LjA2OTYyIDAuODIyNzAxIDQuMDQyMDZMMy43NTI5OSAzLjIyNDk5Wk02LjA4ODk5IDEuNjY3OTlMNC4zNjIyIDQuMDk0ODFMMS40NTc5OSA0LjkwMjk5TDMuMzA3MzggNy4xODUyNkwzLjIxMjk5IDEwLjA5N0w2LjA4OTY3IDkuMTEwMTZMOC45NjQ5OSAxMC4wOTdMOC44NzE5NiA3LjE4NTI2TDEwLjcyMSA0LjkwMjk5TDcuODE3MTQgNC4wOTQ4MUw2LjA4ODk5IDEuNjY3OTlaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/collection
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Collection: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Cross
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNkMwIDIuNjg2MjkgMi42ODYyOSAwIDYgMEM5LjMxMzcxIDAgMTIgMi42ODYyOSAxMiA2QzEyIDkuMzEzNzEgOS4zMTM3MSAxMiA2IDEyQzIuNjg2MjkgMTIgMCA5LjMxMzcxIDAgNlpNMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNloiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTcuNjQ2NDUgMy42NDY0NUw4LjM1MzU2IDQuMzUzNTVMNi43MDcwMSA2TDguMzUzNTYgNy42NDY0NUw3LjY0NjQ1IDguMzUzNTVMNi4wMDAwMSA2LjcwN0w0LjM1MzU2IDguMzUzNTVMMy42NDY0NSA3LjY0NjQ1TDUuMjkzMDEgNkwzLjY0NjQ1IDQuMzUzNTVMNC4zNTM1NiAzLjY0NjQ1TDYuMDAwMDEgNS4yOTNMNy42NDY0NSAzLjY0NjQ1WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/cross
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Cross: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Copy
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy41IDNDOC4zMjg0MyAzIDkgMy42NzE1NyA5IDQuNVYxMC41QzkgMTEuMzI4NCA4LjMyODQzIDEyIDcuNSAxMkgxLjVDMC42NzE1NzMgMTIgMCAxMS4zMjg0IDAgMTAuNVY0LjVDMCAzLjY3MTU3IDAuNjcxNTczIDMgMS41IDNINy41Wk0xLjUgNEMxLjIyMzg2IDQgMSA0LjIyMzg2IDEgNC41VjEwLjVDMSAxMC43NzYxIDEuMjIzODYgMTEgMS41IDExSDcuNUM3Ljc3NjE0IDExIDggMTAuNzc2MSA4IDEwLjVWNC41QzggNC4yMjM4NiA3Ljc3NjE0IDQgNy41IDRIMS41Wk0xMC41IDBDMTEuMjc5NyAwIDExLjkyMDQgMC41OTQ4NDkgMTEuOTkzMiAxLjM1NTQ3TDEyIDEuNVY3LjVDMTIgOC4yNzk2NyAxMS40MDUyIDguOTIwNDUgMTAuNjQ0NSA4Ljk5MzE2TDEwLjUgOUgxMFY4SDEwLjVDMTAuNzQ1NSA4IDEwLjk0OTkgNy44MjMwOSAxMC45OTIyIDcuNTg5ODRMMTEgNy41VjEuNUMxMSAxLjI1NDU0IDEwLjgyMzEgMS4wNTAxNSAxMC41ODk4IDEuMDA3ODFMMTAuNSAxSDQuNUM0LjI1NDU0IDEgNC4wNTAxNSAxLjE3NjkxIDQuMDA3ODEgMS40MTAxNkw0IDEuNVYySDNWMS41QzMgMC43MjAzMjcgMy41OTQ4NSAwLjA3OTU1MjIgNC4zNTU0NyAwLjAwNjgzNTk0TDQuNSAwSDEwLjVaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/copy
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Copy: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name BtnPlay
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNkMwIDIuNjg2MjkgMi42ODYyOSAwIDYgMEM5LjMxMzcxIDAgMTIgMi42ODYyOSAxMiA2QzEyIDkuMzEzNzEgOS4zMTM3MSAxMiA2IDEyQzIuNjg2MjkgMTIgMCA5LjMxMzcxIDAgNlpNMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNloiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDMuNDY3MTNDNCAzLjMxOTA2IDQuMDQzODMgMy4xNzQzIDQuMTI1OTYgMy4wNTExTDQuMTk0MjEgMi45NjM0QzQuNDM5MzkgMi42OTIxOSA0Ljg1MjcxIDIuNjM0MjEgNS4xNjYwMyAyLjg0MzA5TDguOTY1MzMgNS4zNzU5NkM5LjA0NzcyIDUuNDMwODkgOS4xMTg0MiA1LjUwMTU4IDkuMTczMzQgNS41ODM5N0M5LjQwMzExIDUuOTI4NjIgOS4zMDk5OCA2LjM5NDI3IDguOTY1MzMgNi42MjQwNEw1LjE2NjAzIDkuMTU2OTFDNS4wNDI4MiA5LjIzOTA0IDQuODk4MDcgOS4yODI4NyA0Ljc1IDkuMjgyODdDNC4zMzU3OSA5LjI4Mjg3IDQgOC45NDcwOCA0IDguNTMyODdWMy40NjcxM1pNOC4wOTcgNkw1IDMuOTM0VjguMDY1TDguMDk3IDZaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/btn-play
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const BtnPlay: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name DataImport
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNi4yODkwNiAwLjAwMDk3NjU2MkM2LjM4NDE1IDAuMDAxOTM3NzQgNi40Nzg0NSAwLjAwMzkzMDYxIDYuNTcxMjkgMC4wMDU4NTkzOEw3LjExNDI2IDAuMDIzNDM3NUM5LjQ5NjM0IDAuMTI4NTUyIDExIDAuNTk0MTA5IDExIDEuNVY0LjVDMTEgNS40MDU4OSA5LjQ5NjM0IDUuODcxNDUgNy4xMTQyNiA1Ljk3NjU2TDYuNTcxMjkgNS45OTQxNEw2IDZMNS40Mjg3MSA1Ljk5NDE0TDQuODg1NzQgNS45NzY1NkMzLjY2NDY2IDUuOTIyNjggMi42NzUxNSA1Ljc3MTcgMiA1LjUxNzU4VjcuNUMyIDcuNDM2OTggMS45OTc1MiA3LjQyMTUyIDIuMDMyMjMgNy40Mzg0OEwyLjA2NTQzIDcuNDU3MDNDMi4yMjI4MSA3LjU0ODM3IDIuNDgzMjQgNy42Mzk4OSAyLjgyNzE1IDcuNzE5NzNDMy41MjY1IDcuODgyMDIgNC41MDMzNiA3Ljk4MDQ3IDUuNjUwMzkgNy45OTcwN0w2IDhWOUw1LjQyODcxIDguOTk0MTRMNC44ODU3NCA4Ljk3NjU2QzMuNjY0NjYgOC45MjI2OCAyLjY3NTE1IDguNzcxNyAyIDguNTE3NThWMTAuNDYwOUMyLjAwMDk0IDEwLjQzMTEgMi4wMDYzMiAxMC40MjU4IDIuMDMyMjMgMTAuNDM4NUwyLjA2NTQzIDEwLjQ1N0MyLjIyMjgxIDEwLjU0ODQgMi40ODMyNCAxMC42Mzk5IDIuODI3MTUgMTAuNzE5N0MzLjUyNjUgMTAuODgyIDQuNTAzMzYgMTAuOTgwNSA1LjY1MDM5IDEwLjk5NzFMNiAxMVYxMkw1LjQyODcxIDExLjk5NDFMNC44ODU3NCAxMS45NzY2QzIuNTkxODkgMTEuODc1MyAxLjExMjI3IDExLjQzOTcgMS4wMDU4NiAxMC41OTg2TDEgMTAuNVYxLjVDMSAwLjU5NDEwOSAyLjUwMzY2IDAuMTI4NTUyIDQuODg1NzQgMC4wMjM0Mzc1TDUuNDI4NzEgMC4wMDU4NTkzOEM1LjYxNDU1IDAuMDAxOTk4NTQgNS44MDUyOCAwIDYgMEw2LjI4OTA2IDAuMDAwOTc2NTYyWk0xMS44NTM1IDcuODUzNTJMOC43MDcwMyAxMUgxMVYxMkg3LjYyNUM3LjMxMTM1IDEyIDcuMDUxNjUgMTEuNzY5IDcuMDA2ODQgMTEuNDY3OEw3IDExLjM3NVY4SDhWMTAuMjkzTDExLjE0NjUgNy4xNDY0OEwxMS44NTM1IDcuODUzNTJaTTEwIDIuNTE3NThDOS4zMjQ3OCAyLjc3MTY3IDguMzM1MzkgMi45MjI2OCA3LjExNDI2IDIuOTc2NTZMNi41NzEyOSAyLjk5NDE0TDYgM0w1LjQyODcxIDIuOTk0MTRMNC44ODU3NCAyLjk3NjU2QzMuNjY0NjEgMi45MjI2OCAyLjY3NTIyIDIuNzcxNjcgMiAyLjUxNzU4VjQuNUMyIDQuNDM2OTggMS45OTc1MiA0LjQyMTUyIDIuMDMyMjMgNC40Mzg0OEwyLjA2NTQzIDQuNDU3MDNDMi4yMjI4MSA0LjU0ODM3IDIuNDgzMjQgNC42Mzk4OSAyLjgyNzE1IDQuNzE5NzNDMy41OTY1NCA0Ljg5ODI3IDQuNzAxNzEgNSA2IDVDNy4yOTgyOSA1IDguNDAzNDYgNC44OTgyNyA5LjE3Mjg1IDQuNzE5NzNDOS40NTkxNSA0LjY1MzI3IDkuNjg3NDcgNC41Nzg4NSA5Ljg0NjY4IDQuNTAyOTNMOS45MzQ1NyA0LjQ1NzAzQzkuOTkwMDUgNC40MjQ4NCA5Ljk5ODc0IDQuNDIxMTMgMTAgNC40NjA5NFYyLjUxNzU4Wk02IDFDNC43MDE3MSAxIDMuNTk2NTQgMS4xMDE3MyAyLjgyNzE1IDEuMjgwMjdDMi41OTc5NCAxLjMzMzQ4IDIuNDA1OTcgMS4zOTE5MyAyLjI1Njg0IDEuNDUyMTVMMi4xNDc0NiAxLjQ5OTAyQzIuMjgwNzIgMS41NjMyMSAyLjQ1MjE0IDEuNjIzMSAyLjY2MjExIDEuNjc4NzFMMi44MjcxNSAxLjcxOTczQzMuNTk2NTQgMS44OTgyNyA0LjcwMTcxIDIgNiAyQzcuMjk4MjkgMiA4LjQwMzQ2IDEuODk4MjcgOS4xNzI4NSAxLjcxOTczQzkuNDAyMDYgMS42NjY1MiA5LjU5NDAzIDEuNjA4MDcgOS43NDMxNiAxLjU0Nzg1TDkuODUxNTYgMS40OTkwMkM5LjcxOTMgMS40MzY4MiA5LjU0Nzg4IDEuMzc2OSA5LjMzNzg5IDEuMzIxMjlMOS4xNzI4NSAxLjI4MDI3QzguNDAzNDYgMS4xMDE3MyA3LjI5ODI5IDEgNiAxWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/data-import
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const DataImport: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name DataExport
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNi4yODkwNiAwLjAwMDk3NjU2MkM2LjM4NDE1IDAuMDAxOTM3NzQgNi40Nzg0NSAwLjAwMzkzMDYxIDYuNTcxMjkgMC4wMDU4NTkzOEw3LjExNDI2IDAuMDIzNDM3NUM5LjQ5NjM0IDAuMTI4NTUyIDExIDAuNTk0MTA5IDExIDEuNVY0LjVDMTEgNS40MDU4OSA5LjQ5NjM0IDUuODcxNDUgNy4xMTQyNiA1Ljk3NjU2TDYuNTcxMjkgNS45OTQxNEw2IDZMNS40Mjg3MSA1Ljk5NDE0TDQuODg1NzQgNS45NzY1NkMzLjY2NDY2IDUuOTIyNjggMi42NzUxNSA1Ljc3MTcgMiA1LjUxNzU4VjcuNUMyIDcuNDM2OTggMS45OTc1MiA3LjQyMTUyIDIuMDMyMjMgNy40Mzg0OEwyLjA2NTQzIDcuNDU3MDNDMi4yMjI4MSA3LjU0ODM3IDIuNDgzMjQgNy42Mzk4OSAyLjgyNzE1IDcuNzE5NzNDMy41MjY1IDcuODgyMDIgNC41MDMzNiA3Ljk4MDQ3IDUuNjUwMzkgNy45OTcwN0w2IDhWOUw1LjQyODcxIDguOTk0MTRMNC44ODU3NCA4Ljk3NjU2QzMuNjY0NjYgOC45MjI2OCAyLjY3NTE1IDguNzcxNyAyIDguNTE3NThWMTAuNDYwOUMyLjAwMDk0IDEwLjQzMTEgMi4wMDYzMiAxMC40MjU4IDIuMDMyMjMgMTAuNDM4NUwyLjA2NTQzIDEwLjQ1N0MyLjIyMjgxIDEwLjU0ODQgMi40ODMyNCAxMC42Mzk5IDIuODI3MTUgMTAuNzE5N0MzLjUyNjUgMTAuODgyIDQuNTAzMzYgMTAuOTgwNSA1LjY1MDM5IDEwLjk5NzFMNiAxMVYxMkw1LjQyODcxIDExLjk5NDFMNC44ODU3NCAxMS45NzY2QzIuNTkxODkgMTEuODc1MyAxLjExMjI3IDExLjQzOTcgMS4wMDU4NiAxMC41OTg2TDEgMTAuNVYxLjVDMSAwLjU5NDEwOSAyLjUwMzY2IDAuMTI4NTUyIDQuODg1NzQgMC4wMjM0Mzc1TDUuNDI4NzEgMC4wMDU4NTkzOEM1LjYxNDU1IDAuMDAxOTk4NTQgNS44MDUyOCAwIDYgMEw2LjI4OTA2IDAuMDAwOTc2NTYyWk0xMS4zNzUgN0MxMS42ODg3IDcgMTEuOTQ4MyA3LjIzMTA1IDExLjk5MzIgNy41MzIyM0wxMiA3LjYyNVYxMUgxMVY4LjcwNzAzTDcuODUzNTIgMTEuODUzNUw3LjE0NjQ4IDExLjE0NjVMMTAuMjkzIDhIOFY3SDExLjM3NVpNMTAgMi41MTc1OEM5LjMyNDc4IDIuNzcxNjcgOC4zMzUzOSAyLjkyMjY4IDcuMTE0MjYgMi45NzY1Nkw2LjU3MTI5IDIuOTk0MTRMNiAzTDUuNDI4NzEgMi45OTQxNEw0Ljg4NTc0IDIuOTc2NTZDMy42NjQ2MSAyLjkyMjY4IDIuNjc1MjIgMi43NzE2NyAyIDIuNTE3NThWNC41QzIgNC40MzY5OCAxLjk5NzUyIDQuNDIxNTIgMi4wMzIyMyA0LjQzODQ4TDIuMDY1NDMgNC40NTcwM0MyLjIyMjgxIDQuNTQ4MzcgMi40ODMyNCA0LjYzOTg5IDIuODI3MTUgNC43MTk3M0MzLjU5NjU0IDQuODk4MjcgNC43MDE3MSA1IDYgNUM3LjI5ODI5IDUgOC40MDM0NiA0Ljg5ODI3IDkuMTcyODUgNC43MTk3M0M5LjQ1OTE1IDQuNjUzMjcgOS42ODc0NyA0LjU3ODg1IDkuODQ2NjggNC41MDI5M0w5LjkzNDU3IDQuNDU3MDNDOS45OTAwNSA0LjQyNDg0IDkuOTk4NzQgNC40MjExMyAxMCA0LjQ2MDk0VjIuNTE3NThaTTYgMUM0LjcwMTcxIDEgMy41OTY1NCAxLjEwMTczIDIuODI3MTUgMS4yODAyN0MyLjU5Nzk0IDEuMzMzNDggMi40MDU5NyAxLjM5MTkzIDIuMjU2ODQgMS40NTIxNUwyLjE0NzQ2IDEuNDk5MDJDMi4yODA3MiAxLjU2MzIxIDIuNDUyMTQgMS42MjMxIDIuNjYyMTEgMS42Nzg3MUwyLjgyNzE1IDEuNzE5NzNDMy41OTY1NCAxLjg5ODI3IDQuNzAxNzEgMiA2IDJDNy4yOTgyOSAyIDguNDAzNDYgMS44OTgyNyA5LjE3Mjg1IDEuNzE5NzNDOS40MDIwNiAxLjY2NjUyIDkuNTk0MDMgMS42MDgwNyA5Ljc0MzE2IDEuNTQ3ODVMOS44NTE1NiAxLjQ5OTAyQzkuNzE5MyAxLjQzNjgyIDkuNTQ3ODggMS4zNzY5IDkuMzM3ODkgMS4zMjEyOUw5LjE3Mjg1IDEuMjgwMjdDOC40MDM0NiAxLjEwMTczIDcuMjk4MjkgMSA2IDFaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/data-export
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const DataExport: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Data
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNi4yODkwNiAwLjAwMDk3NjU2MkM2LjM4NDE1IDAuMDAxOTM3NzQgNi40Nzg0NSAwLjAwMzkzMDYxIDYuNTcxMjkgMC4wMDU4NTkzOEw3LjExNDI2IDAuMDIzNDM3NUM5LjQ5NjM0IDAuMTI4NTUyIDExIDAuNTk0MTA5IDExIDEuNVYxMC41QzExIDExLjQwNTkgOS40OTYzNCAxMS44NzE0IDcuMTE0MjYgMTEuOTc2Nkw2LjU3MTI5IDExLjk5NDFMNiAxMkw1LjQyODcxIDExLjk5NDFMNC44ODU3NCAxMS45NzY2QzIuNTkxODkgMTEuODc1MyAxLjExMjI3IDExLjQzOTcgMS4wMDU4NiAxMC41OTg2TDEgMTAuNVYxLjVDMSAwLjU5NDEwOSAyLjUwMzY2IDAuMTI4NTUyIDQuODg1NzQgMC4wMjM0Mzc1TDUuNDI4NzEgMC4wMDU4NTkzOEM1LjYxNDU1IDAuMDAxOTk4NTQgNS44MDUyOCAwIDYgMEw2LjI4OTA2IDAuMDAwOTc2NTYyWk0yIDEwLjQ2MDlDMi4wMDA5NCAxMC40MzExIDIuMDA2MzIgMTAuNDI1OCAyLjAzMjIzIDEwLjQzODVMMi4wNjU0MyAxMC40NTdDMi4yMjI4MSAxMC41NDg0IDIuNDgzMjQgMTAuNjM5OSAyLjgyNzE1IDEwLjcxOTdDMy41OTY1NCAxMC44OTgzIDQuNzAxNzEgMTEgNiAxMUM3LjI5ODI5IDExIDguNDAzNDYgMTAuODk4MyA5LjE3Mjg1IDEwLjcxOTdDOS40NTkxNSAxMC42NTMzIDkuNjg3NDcgMTAuNTc4OCA5Ljg0NjY4IDEwLjUwMjlMOS45MzQ1NyAxMC40NTdDOS45OTAwNSAxMC40MjQ4IDkuOTk4NzQgMTAuNDIxMSAxMCAxMC40NjA5VjguNTE4NTVDOS4zMjQ4NiA4Ljc3MjYxIDguMzM1MTUgOC45MjI2OSA3LjExNDI2IDguOTc2NTZMNi41NzEyOSA4Ljk5NDE0TDYgOUw1LjQyODcxIDguOTk0MTRMNC44ODU3NCA4Ljk3NjU2QzMuNjY0NjYgOC45MjI2OCAyLjY3NTE1IDguNzcxNyAyIDguNTE3NThWMTAuNDYwOVpNMiA3LjVDMiA3LjQzNjk4IDEuOTk3NTIgNy40MjE1MiAyLjAzMjIzIDcuNDM4NDhMMi4wNjU0MyA3LjQ1NzAzQzIuMjIyODEgNy41NDgzNyAyLjQ4MzI0IDcuNjM5ODkgMi44MjcxNSA3LjcxOTczQzMuNTk2NTQgNy44OTgyNyA0LjcwMTcxIDggNiA4QzcuMjk4MjkgOCA4LjQwMzQ2IDcuODk4MjcgOS4xNzI4NSA3LjcxOTczQzkuNDU5MTUgNy42NTMyNyA5LjY4NzQ3IDcuNTc4ODUgOS44NDY2OCA3LjUwMjkzTDkuOTM0NTcgNy40NTcwM0M5Ljk5MDA1IDcuNDI0ODQgOS45OTg3NCA3LjQyMTEzIDEwIDcuNDYwOTRWNS41MTg1NUM5LjMyNDg2IDUuNzcyNjEgOC4zMzUxNSA1LjkyMjY5IDcuMTE0MjYgNS45NzY1Nkw2LjU3MTI5IDUuOTk0MTRMNiA2TDUuNDI4NzEgNS45OTQxNEw0Ljg4NTc0IDUuOTc2NTZDMy42NjQ2NiA1LjkyMjY4IDIuNjc1MTUgNS43NzE3IDIgNS41MTc1OFY3LjVaTTEwIDIuNTE3NThDOS4zMjQ3OCAyLjc3MTY3IDguMzM1MzkgMi45MjI2OCA3LjExNDI2IDIuOTc2NTZMNi41NzEyOSAyLjk5NDE0TDYgM0w1LjQyODcxIDIuOTk0MTRMNC44ODU3NCAyLjk3NjU2QzMuNjY0NjEgMi45MjI2OCAyLjY3NTIyIDIuNzcxNjcgMiAyLjUxNzU4VjQuNUMyIDQuNDM2OTggMS45OTc1MiA0LjQyMTUyIDIuMDMyMjMgNC40Mzg0OEwyLjA2NTQzIDQuNDU3MDNDMi4yMjI4MSA0LjU0ODM3IDIuNDgzMjQgNC42Mzk4OSAyLjgyNzE1IDQuNzE5NzNDMy41OTY1NCA0Ljg5ODI3IDQuNzAxNzEgNSA2IDVDNy4yOTgyOSA1IDguNDAzNDYgNC44OTgyNyA5LjE3Mjg1IDQuNzE5NzNDOS40NTkxNSA0LjY1MzI3IDkuNjg3NDcgNC41Nzg4NSA5Ljg0NjY4IDQuNTAyOTNMOS45MzQ1NyA0LjQ1NzAzQzkuOTkwMDUgNC40MjQ4NCA5Ljk5ODc0IDQuNDIxMTMgMTAgNC40NjA5NFYyLjUxNzU4Wk02IDFDNC43MDE3MSAxIDMuNTk2NTQgMS4xMDE3MyAyLjgyNzE1IDEuMjgwMjdDMi41OTc5NCAxLjMzMzQ4IDIuNDA1OTcgMS4zOTE5MyAyLjI1Njg0IDEuNDUyMTVMMi4xNDc0NiAxLjQ5OTAyQzIuMjgwNzIgMS41NjMyMSAyLjQ1MjE0IDEuNjIzMSAyLjY2MjExIDEuNjc4NzFMMi44MjcxNSAxLjcxOTczQzMuNTk2NTQgMS44OTgyNyA0LjcwMTcxIDIgNiAyQzcuMjk4MjkgMiA4LjQwMzQ2IDEuODk4MjcgOS4xNzI4NSAxLjcxOTczQzkuNDAyMDYgMS42NjY1MiA5LjU5NDAzIDEuNjA4MDcgOS43NDMxNiAxLjU0Nzg1TDkuODUxNTYgMS40OTkwMkM5LjcxOTMgMS40MzY4MiA5LjU0Nzg4IDEuMzc2OSA5LjMzNzg5IDEuMzIxMjlMOS4xNzI4NSAxLjI4MDI3QzguNDAzNDYgMS4xMDE3MyA3LjI5ODI5IDEgNiAxWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/data
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Data: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name DataPermission
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNi4yODkwNiAwLjAwMDk3NjU2MkM2LjM4NDE1IDAuMDAxOTM3NzQgNi40Nzg0NSAwLjAwMzkzMDYxIDYuNTcxMjkgMC4wMDU4NTkzOEw3LjExNDI2IDAuMDIzNDM3NUM5LjQ5NjM0IDAuMTI4NTUyIDExIDAuNTk0MTA5IDExIDEuNVY0LjVDMTEgNS40MDU4OSA5LjQ5NjM0IDUuODcxNDUgNy4xMTQyNiA1Ljk3NjU2TDYuNTcxMjkgNS45OTQxNEw2IDZMNS40Mjg3MSA1Ljk5NDE0TDQuODg1NzQgNS45NzY1NkMzLjY2NDY2IDUuOTIyNjggMi42NzUxNSA1Ljc3MTcgMiA1LjUxNzU4VjcuNUMyIDcuNDM2OTggMS45OTc1MiA3LjQyMTUyIDIuMDMyMjMgNy40Mzg0OEwyLjA2NTQzIDcuNDU3MDNDMi4yMjI4MSA3LjU0ODM3IDIuNDgzMjQgNy42Mzk4OSAyLjgyNzE1IDcuNzE5NzNDMy41MjY1IDcuODgyMDIgNC41MDMzNiA3Ljk4MDQ3IDUuNjUwMzkgNy45OTcwN0w2IDhWOUw1LjQyODcxIDguOTk0MTRMNC44ODU3NCA4Ljk3NjU2QzMuNjY0NjYgOC45MjI2OCAyLjY3NTE1IDguNzcxNyAyIDguNTE3NThWMTAuNDYwOUMyLjAwMDk0IDEwLjQzMTEgMi4wMDYzMiAxMC40MjU4IDIuMDMyMjMgMTAuNDM4NUwyLjA2NTQzIDEwLjQ1N0MyLjIyMjgxIDEwLjU0ODQgMi40ODMyNCAxMC42Mzk5IDIuODI3MTUgMTAuNzE5N0MzLjUyNjUgMTAuODgyIDQuNTAzMzYgMTAuOTgwNSA1LjY1MDM5IDEwLjk5NzFMNiAxMVYxMkw1LjQyODcxIDExLjk5NDFMNC44ODU3NCAxMS45NzY2QzIuNTkxODkgMTEuODc1MyAxLjExMjI3IDExLjQzOTcgMS4wMDU4NiAxMC41OTg2TDEgMTAuNVYxLjVDMSAwLjU5NDEwOSAyLjUwMzY2IDAuMTI4NTUyIDQuODg1NzQgMC4wMjM0Mzc1TDUuNDI4NzEgMC4wMDU4NTkzOEM1LjYxNDU1IDAuMDAxOTk4NTQgNS44MDUyOCAwIDYgMEw2LjI4OTA2IDAuMDAwOTc2NTYyWk05LjUgNkMxMC41NTQzIDYgMTEuNDE3NyA2LjgxNTgxIDExLjQ5NDEgNy44NTA1OUwxMS41IDhWOC4wNDQ5MkMxMS43OTA5IDguMTQ4MDggMTIgOC40MjM3MSAxMiA4Ljc1VjExLjI1QzEyIDExLjY2NDIgMTEuNjY0MiAxMiAxMS4yNSAxMkg3Ljc1QzcuMzM1NzkgMTIgNyAxMS42NjQyIDcgMTEuMjVWOC43NUM3IDguNDIzNzEgNy4yMDkwNyA4LjE0ODA4IDcuNSA4LjA0NDkyVjhDNy41IDYuODk1NDMgOC4zOTU0MyA2IDkuNSA2Wk04IDExSDExVjlIOFYxMVpNOS41IDdDOC45ODcxNiA3IDguNTY0NiA3LjM4NjQ1IDguNTA2ODQgNy44ODM3OUw4LjUgOEgxMC41QzEwLjUgNy40NDc3MiAxMC4wNTIzIDcgOS41IDdaTTEwIDIuNTE3NThDOS4zMjQ3OCAyLjc3MTY3IDguMzM1MzkgMi45MjI2OCA3LjExNDI2IDIuOTc2NTZMNi41NzEyOSAyLjk5NDE0TDYgM0w1LjQyODcxIDIuOTk0MTRMNC44ODU3NCAyLjk3NjU2QzMuNjY0NjEgMi45MjI2OCAyLjY3NTIyIDIuNzcxNjcgMiAyLjUxNzU4VjQuNUMyIDQuNDM2OTggMS45OTc1MiA0LjQyMTUyIDIuMDMyMjMgNC40Mzg0OEwyLjA2NTQzIDQuNDU3MDNDMi4yMjI4MSA0LjU0ODM3IDIuNDgzMjQgNC42Mzk4OSAyLjgyNzE1IDQuNzE5NzNDMy41OTY1NCA0Ljg5ODI3IDQuNzAxNzEgNSA2IDVDNy4yOTgyOSA1IDguNDAzNDYgNC44OTgyNyA5LjE3Mjg1IDQuNzE5NzNDOS40NTkxNSA0LjY1MzI3IDkuNjg3NDcgNC41Nzg4NSA5Ljg0NjY4IDQuNTAyOTNMOS45MzQ1NyA0LjQ1NzAzQzkuOTkwMDUgNC40MjQ4NCA5Ljk5ODc0IDQuNDIxMTMgMTAgNC40NjA5NFYyLjUxNzU4Wk02IDFDNC43MDE3MSAxIDMuNTk2NTQgMS4xMDE3MyAyLjgyNzE1IDEuMjgwMjdDMi41OTc5NCAxLjMzMzQ4IDIuNDA1OTcgMS4zOTE5MyAyLjI1Njg0IDEuNDUyMTVMMi4xNDc0NiAxLjQ5OTAyQzIuMjgwNzIgMS41NjMyMSAyLjQ1MjE0IDEuNjIzMSAyLjY2MjExIDEuNjc4NzFMMi44MjcxNSAxLjcxOTczQzMuNTk2NTQgMS44OTgyNyA0LjcwMTcxIDIgNiAyQzcuMjk4MjkgMiA4LjQwMzQ2IDEuODk4MjcgOS4xNzI4NSAxLjcxOTczQzkuNDAyMDYgMS42NjY1MiA5LjU5NDAzIDEuNjA4MDcgOS43NDMxNiAxLjU0Nzg1TDkuODUxNTYgMS40OTkwMkM5LjcxOTMgMS40MzY4MiA5LjU0Nzg4IDEuMzc2OSA5LjMzNzg5IDEuMzIxMjlMOS4xNzI4NSAxLjI4MDI3QzguNDAzNDYgMS4xMDE3MyA3LjI5ODI5IDEgNiAxWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/data-permission
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const DataPermission: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name DataSwitch
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNi4yODg4MiAwLjAwMDk3NjU2MkM2LjM4MzgyIDAuMDAxOTM2ODkgNi40NzgyOCAwLjAwMzkzMjE5IDYuNTcxMDQgMC4wMDU4NTkzOEw3LjExNDAxIDAuMDIzNDM3NUM5LjQ5NjA3IDAuMTI4NTUxIDEwLjk5OTcgMC41OTQxMjkgMTAuOTk5OCAxLjVWNC41QzEwLjk5OTggNS40MDU4OSA5LjQ5NjA5IDUuODcxNDUgNy4xMTQwMSA1Ljk3NjU2TDYuNTcxMDQgNS45OTQxNEw1Ljk5OTc2IDZMNS40Mjg0NyA1Ljk5NDE0TDQuODg1NSA1Ljk3NjU2QzMuNjY0NTIgNS45MjI2NyAyLjY3NDg2IDUuNzcxNjkgMS45OTk3NiA1LjUxNzU4VjcuNUwyLjAwMjY5IDcuNDM5NDVDMi4wMDYzMiA3LjQyOTM4IDIuMDE0NTQgNy40Mjk5OCAyLjAzMTk4IDcuNDM4NDhMMi4wNjUxOSA3LjQ1NzAzQzIuMjIyNTcgNy41NDgzMyAyLjQ4MzE2IDcuNjQwOSAyLjgyNjkgNy43MjA3QzMuNTk2MjQgNy44OTkyMiA0LjcwMTYyIDcuOTk5OTkgNS45OTk3NiA4VjlMNS40Mjg0NyA4Ljk5NDE0TDQuODg1NSA4Ljk3NzU0QzMuNjY0NTIgOC45MjM2NSAyLjY3NTAyIDguNzcxNzkgMS45OTk3NiA4LjUxNzU4VjEwLjQ2MDlDMi4wMDA3IDEwLjQzMTIgMi4wMDYyNiAxMC40MjYgMi4wMzE5OCAxMC40Mzg1TDIuMDY1MTkgMTAuNDU3QzIuMjIyNTMgMTAuNTQ4NCAyLjQ4MzExIDEwLjYzOTkgMi44MjY5IDEwLjcxOTdDMy41OTYyNSAxMC44OTgzIDQuNzAxNTggMTEgNS45OTk3NiAxMVYxMkw1LjQyODQ3IDExLjk5NDFMNC44ODU1IDExLjk3NjZDMi41OTE3OCAxMS44NzUzIDEuMTEyMDIgMTEuNDM5NyAxLjAwNTYyIDEwLjU5ODZMMC45OTk3NTYgMTAuNVYxLjVDMC45OTk3OSAwLjU5NDE1OSAyLjUwMzU4IDAuMTI4NTcyIDQuODg1NSAwLjAyMzQzNzVMNS40Mjg0NyAwLjAwNTg1OTM4QzUuNjE0MjMgMC4wMDIwMDAxNSA1LjgwNTEyIDEuNjY5ODFlLTA2IDUuOTk5NzYgMEw2LjI4ODgyIDAuMDAwOTc2NTYyWk0xMS4yOTc2IDkuNDc5NDlDMTEuNDgyOSA5LjQ3OTYgMTEuNjYwNiA5LjU1MzYzIDExLjc5MTcgOS42ODQ1N0MxMi4wMzc4IDkuOTMwNTggMTIuMDYyNyAxMC4zMTQ0IDExLjg2NiAxMC41ODc5TDExLjc5MTcgMTAuNjc0OEwxMC40NjY2IDEyTDkuNzU5NTIgMTEuMjkzTDEwLjU3NCAxMC40Nzk1SDYuNzgwMDNWOS40Nzk0OUgxMS4yOTc2Wk05LjAxNzMzIDYuODUzNTJMOC4yMDI4OCA3LjY2NjAyTDExLjk5NjggNy42NjY5OVY4LjY2Njk5SDcuNDgwMjJDNy4yOTQ2NyA4LjY2Njk3IDcuMTE2MzUgOC41OTMwOCA2Ljk4NTExIDguNDYxOTFDNi43MzkyIDguMjE1OTYgNi43MTQyOSA3LjgzMjExIDYuOTEwODkgNy41NTg1OUw2Ljk4NTExIDcuNDcxNjhMOC4zMTAzIDYuMTQ2NDhMOS4wMTczMyA2Ljg1MzUyWk05Ljk5ODc4IDIuNTE3NThDOS4zMjM1OCAyLjc3MTQzIDguMzM0NTEgMi45MjI3MSA3LjExNDAxIDIuOTc2NTZMNi41NzEwNCAyLjk5NDE0TDUuOTk5NzYgM0w1LjQyODQ3IDIuOTk0MTRMNC44ODU1IDIuOTc2NTZDMy42NjQ0OCAyLjkyMjY3IDIuNjc0OTMgMi43NzE2NSAxLjk5OTc2IDIuNTE3NThWNC41QzEuOTk5NzUgNC40MzcxMyAxLjk5NzUgNC40MjE2OSAyLjAzMTk4IDQuNDM4NDhMMi4wNjUxOSA0LjQ1NzAzQzIuMjIyNTMgNC41NDgzNSAyLjQ4MzExIDQuNjM5OTEgMi44MjY5IDQuNzE5NzNDMy41OTYyNSA0Ljg5ODI2IDQuNzAxNTggNC45OTk5OSA1Ljk5OTc2IDVDNy4yOTc5MSA1IDguNDAzMjMgNC44OTgyNCA5LjE3MjYxIDQuNzE5NzNDOS40NTg3OSA0LjY1MzI5IDkuNjg3MjQgNC41Nzg4MiA5Ljg0NjQ0IDQuNTAyOTNMOS45MzQzMyA0LjQ1NzAzQzkuOTg1ODMgNC40MjcxNCA5Ljk5NjQzIDQuNDIxODUgOS45OTg3OCA0LjQ1MzEyVjIuNTE3NThaTTUuOTk5NzYgMUM0LjcwMTU4IDEuMDAwMDEgMy41OTYyNSAxLjEwMTc0IDIuODI2OSAxLjI4MDI3QzIuNTk3NzkgMS4zMzM0NyAyLjQwNTY4IDEuMzkxOTUgMi4yNTY1OSAxLjQ1MjE1TDIuMTQ3MjIgMS40OTkwMkMyLjI4MDQyIDEuNTYzMTkgMi40NTIgMS42MjMxMiAyLjY2MTg3IDEuNjc4NzFMMi44MjY5IDEuNzE5NzNDMy41OTYyNSAxLjg5ODI2IDQuNzAxNTggMS45OTk5OSA1Ljk5OTc2IDJDNy4yOTc5MSAyIDguNDAzMjMgMS44OTgyNCA5LjE3MjYxIDEuNzE5NzNDOS40MDE3MiAxLjY2NjU0IDkuNTkzODIgMS42MDgwNCA5Ljc0MjkyIDEuNTQ3ODVMOS44NTEzMiAxLjQ5OTAyQzkuNzE5MDggMS40MzY4NiA5LjU0NzUzIDEuMzc2ODggOS4zMzc2NSAxLjMyMTI5TDkuMTcyNjEgMS4yODAyN0M4LjQwMzIzIDEuMTAxNzYgNy4yOTc5MSAxIDUuOTk5NzYgMVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/data-switch
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const DataSwitch: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Delete
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy41IDBDOC4yNzk2NyAwIDguOTIwNDUgMC41OTQ4NDkgOC45OTMxNiAxLjM1NTQ3TDkgMS41VjJIMTJWM0gxMVYxMC41QzExIDExLjI3OTcgMTAuNDA1MiAxMS45MjA0IDkuNjQ0NTMgMTEuOTkzMkw5LjUgMTJIMi41QzEuNzIwMzMgMTIgMS4wNzk1NSAxMS40MDUyIDEuMDA2ODQgMTAuNjQ0NUwxIDEwLjVWM0gwVjJIM1YxLjVDMyAwLjcyMDMyNyAzLjU5NDg1IDAuMDc5NTUyMiA0LjM1NTQ3IDAuMDA2ODM1OTRMNC41IDBINy41Wk0yIDEwLjVDMiAxMC43NDU1IDIuMTc2OTEgMTAuOTQ5OSAyLjQxMDE2IDEwLjk5MjJMMi41IDExSDkuNUM5Ljc0NTQ2IDExIDkuOTQ5ODUgMTAuODIzMSA5Ljk5MjE5IDEwLjU4OThMMTAgMTAuNVYzSDJWMTAuNVpNNC41IDFDNC4yNTQ1NCAxIDQuMDUwMTUgMS4xNzY5MSA0LjAwNzgxIDEuNDEwMTZMNCAxLjVWMkg4VjEuNUM4IDEuMjU0NTQgNy44MjMwOSAxLjA1MDE1IDcuNTg5ODQgMS4wMDc4MUw3LjUgMUg0LjVaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik01IDVWOUg0VjVINVoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTggNVY5SDdWNUg4WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/delete
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Delete: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Dialogue
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC41IDFDOS4zMjg0MyAxIDEwIDEuNjcxNTcgMTAgMi41VjRIMTAuNUMxMS4yNzk3IDQgMTEuOTIwNCA0LjU5NDg1IDExLjk5MzIgNS4zNTU0N0wxMiA1LjVWOS41QzEyIDEwLjI3OTcgMTEuNDA1MiAxMC45MjA0IDEwLjY0NDUgMTAuOTkzMkwxMC41IDExSDEwVjExLjEyNkMxMCAxMS4yMjk1IDkuOTc3MzggMTEuMzMxOSA5LjkzMzU5IDExLjQyNDhMOS44ODI4MSAxMS41MTQ2QzkuNjg3ODYgMTEuODA3MSA5LjMxMDU1IDExLjkwNTQgOS4wMDE5NSAxMS43NTk4TDguOTEyMTEgMTEuNzA5TDcuODQ4NjMgMTFINS41QzQuNzM2ODIgMTEgNC4xMDgxOCAxMC40Mjk5IDQuMDEzNjcgOS42OTIzOEwzLjE5NTMxIDEwLjUxMTdDMi45NDkzMiAxMC43NTc3IDIuNTY1NTMgMTAuNzgyNyAyLjI5MTk5IDEwLjU4NTlMMi4yMDUwOCAxMC41MTE3QzIuMDc0MDEgMTAuMzgwNiAyLjAwMDExIDEwLjIwMyAyIDEwLjAxNzZWOUgxLjVDMC43MjAzMjcgOSAwLjA3OTU1MjEgOC40MDUxNSAwLjAwNjgzNTk0IDcuNjQ0NTNMMCA3LjVWMi41QzAgMS42NzE1NyAwLjY3MTU3MyAxIDEuNSAxSDguNVpNMTAgNy41QzEwIDguMzI4NDMgOS4zMjg0MyA5IDguNSA5SDVWOS41QzUgOS43NDU0NiA1LjE3NjkxIDkuOTQ5ODUgNS40MTAxNiA5Ljk5MjE5TDUuNSAxMEg3Ljk2MTkxQzguMDU0MzggMTAgOC4xNDU1NSAxMC4wMjA1IDguMjI4NTIgMTAuMDU5Nkw4LjMwODU5IDEwLjEwNDVMOS4wMDM5MSAxMC41Njg0TDkuMDA2ODQgMTAuNTMyMkM5LjA0NzE1IDEwLjI2MTMgOS4yNjEzMiAxMC4wNDcxIDkuNTMyMjMgMTAuMDA2OEw5LjYyNSAxMEgxMC41QzEwLjc0NTUgMTAgMTAuOTQ5OSA5LjgyMzA5IDEwLjk5MjIgOS41ODk4NEwxMSA5LjVWNS41QzExIDUuMjU0NTQgMTAuODIzMSA1LjA1MDE1IDEwLjU4OTggNS4wMDc4MUwxMC41IDVIMTBWNy41Wk0xLjUgMkMxLjIyMzg2IDIgMSAyLjIyMzg2IDEgMi41VjcuNUMxIDcuNzc2MTQgMS4yMjM4NiA4IDEuNSA4SDIuMzc1QzIuNzIwMTggOCAzIDguMjc5ODIgMyA4LjYyNVY5LjI5MTk5TDQuMTA5MzggOC4xODI2MkM0LjIwMzA3IDguMDg4OTIgNC4zMjM5MiA4LjAyODQ2IDQuNDUzMTIgOC4wMDc4MUw0LjU1MTc2IDhIOC41QzguNzc2MTQgOCA5IDcuNzc2MTQgOSA3LjVWMi41QzkgMi4yMjM4NiA4Ljc3NjE0IDIgOC41IDJIMS41WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/dialogue
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Dialogue: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name DateTime
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCAxSDhWMEg5VjFIMTAuNUMxMS4zMjg0IDEgMTIgMS42NzE1NyAxMiAyLjVWMTAuNUMxMiAxMS4zMjg0IDExLjMyODQgMTIgMTAuNSAxMkgxLjVDMC42NzE1NzMgMTIgMCAxMS4zMjg0IDAgMTAuNVYyLjVDMCAxLjY3MTU3IDAuNjcxNTczIDEgMS41IDFIM1YwSDRWMVpNMS41IDJDMS4yMjM4NiAyIDEgMi4yMjM4NiAxIDIuNVYxMC41QzEgMTAuNzc2MSAxLjIyMzg2IDExIDEuNSAxMUgxMC41QzEwLjc3NjEgMTEgMTEgMTAuNzc2MSAxMSAxMC41VjIuNUMxMSAyLjIyMzg2IDEwLjc3NjEgMiAxMC41IDJIOVY0SDhWMkg0VjRIM1YySDEuNVpNNiA2Ljc5Mjk3TDcuMzUzNTIgOC4xNDY0OEw2LjY0NjQ4IDguODUzNTJMNS4yOTI5NyA3LjVDNS4xMzY4IDcuMzQzODMgNS4wMzc2IDcuMTQxMzMgNS4wMDg3OSA2LjkyNDhMNSA2Ljc5Mjk3VjRINlY2Ljc5Mjk3WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/date-time
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const DateTime: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name DirectionRightUp
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgMUMxMC41MTI4IDEgMTAuOTM1NCAxLjM4NjQ1IDEwLjk5MzIgMS44ODM3OUwxMSAyVjlIMTBWMi43MDcwM0wxLjM1MzUyIDExLjM1MzVMMC42NDY0ODQgMTAuNjQ2NUw5LjI5Mjk3IDJIM1YxSDEwWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/direction-right-up
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const DirectionRightUp: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Diamond
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuMjY2MzEgMUg4Ljc4MDY4QzkuMTE2OTMgMSA5LjQzMDY2IDEuMTY4OTkgOS42MTU2OCAxLjQ0OTc1TDExLjY5ODggNC42MTA5NEMxMS45NTQ5IDQuOTk5NDcgMTEuOTA5MSA1LjUxMzI2IDExLjU4ODQgNS44NTA0TDcuMDg2ODMgMTAuNTgyOUM2LjUxNTg4IDExLjE4MzEgNS41NjY0MiAxMS4yMDY5IDQuOTY2MTggMTAuNjM1OUwwLjQxNDIxMyA1Ljg1MzE2QzAuMDkxMTE2NyA1LjUxMzQ5IDAuMDQ3MzQ5MiA0Ljk5NDk3IDAuMzA4OTM4IDQuNjA1OTVMMi40MzY0NyAxLjQ0MTk5QzIuNjIyMjUgMS4xNjU3IDIuOTMzMzYgMSAzLjI2NjMxIDFaTTguNzgwNjggMkgzLjI2NjMxTDEuMTM4NzggNS4xNjM5NUw1LjY1NTM5IDkuOTExMzRDNS44NTU0NyAxMC4xMDE3IDYuMTcxOTUgMTAuMDkzNyA2LjM2MjI3IDkuODkzNjdMMTAuODYzOCA1LjE2MTE5TDguNzgwNjggMloiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/diamond
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Diamond: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Earthset
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNS41VjZWNi41SDAuMDIwNTM2OUMwLjI0NzA5IDkuMjQ2MTYgMi4zMjMgMTEuNDY3OSA1IDExLjkxN1YxMC45QzIuODc2OTcgMTAuNDY5IDEuMjQyNDEgOC42OTI5MSAxLjAyNDY5IDYuNUgzLjUxNDUyQzMuNjA1ODkgOC4wNzAyMyA0LjEyNTk3IDkuNTU3ODcgNSAxMC44MjM1VjguNjk4NzZDNC43MzE1NSA4LjAwMjM2IDQuNTY2NzIgNy4yNjI2NyA0LjUxNjQ0IDYuNUg1VjUuNUg0LjUxNjQzQzQuNjEzMDkgNC4wMzM2NCA1LjEzMzE5IDIuNjUxODkgNi4wMDAwNCAxLjQ5ODk0QzYuNTYzNjIgMi4yNDg1NCA2Ljk4MDk1IDMuMDk1NTIgNy4yMzAzOCA0SDguMjYzMTFDOC4wMTAxMyAyLjk1MDg5IDcuNTU5ODYgMS45NjQzMyA2LjkzOCAxLjA4Nzg0QzguNTc3MTggMS4zOTg5NiA5LjkzMzA1IDIuNTEwMjMgMTAuNTg0IDRIMTEuNjU4NkMxMC44MzQ5IDEuNjY5NjIgOC42MTI0NCAwIDYgMEMyLjg1NDY3IDAgMC4yNzQ2MTIgMi40MjAyMyAwLjAyMDUzNjkgNS41SDBaTTEuMDI0NjkgNS41SDMuNTE0NTFDMy42MDc5OCAzLjg5MzUgNC4xNTAxNyAyLjM3MzA2IDUuMDYyMDggMS4wODc4M0MyLjkwODkgMS40OTY0NiAxLjI0NDUzIDMuMjg1NzYgMS4wMjQ2OSA1LjVaTTEwIDguNUMxMCA5LjA1MjI5IDkuNTUyMjkgOS41IDkgOS41QzguNDQ3NzEgOS41IDggOS4wNTIyOSA4IDguNUM4IDcuOTQ3NzIgOC40NDc3MSA3LjUgOSA3LjVDOS41NTIyOSA3LjUgMTAgNy45NDc3MiAxMCA4LjVaTTguNDg1MzUgNS4yMjU5TDYuNDg4MjYgNi40MjU3MUM2LjE4NzM0IDYuNjA2NSA2LjAwMzI1IDYuOTMxODUgNi4wMDMyNSA3LjI4MjkxVjkuNzE3MDlDNi4wMDMyNSAxMC4wNjgyIDYuMTg3MzQgMTAuMzkzNSA2LjQ4ODI2IDEwLjU3NDNMOC40ODUzNSAxMS43NzQxQzguODAxOTIgMTEuOTY0MyA5LjE5NzU1IDExLjk2NDUgOS41MTQzNCAxMS43NzQ3TDExLjUxNzMgMTAuNTc0NUMxMS44MTg3IDEwLjM5MzggMTIuMDAzMyAxMC4wNjgyIDEyLjAwMzMgOS43MTY3MVY3LjI4MzI4QzEyLjAwMzMgNi45MzE4MiAxMS44MTg3IDYuNjA2MTUgMTEuNTE3MyA2LjQyNTVMOS41MTQzNCA1LjIyNTMxQzkuMTk3NTUgNS4wMzU0OCA4LjgwMTkyIDUuMDM1NzEgOC40ODUzNSA1LjIyNTlaTTcuMDAzMjUgNy4yODI5MUw5LjAwMDMzIDYuMDgzMUwxMS4wMDMzIDcuMjgzMjhWOS43MTY3MUw5LjAwMDMzIDEwLjkxNjlMNy4wMDMyNSA5LjcxNzA5VjcuMjgyOTFaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/earthset
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Earthset: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Earth
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNkMwIDIuNjg2MjkgMi42ODYyOSAwIDYgMEM5LjMxMzcxIDAgMTIgMi42ODYyOSAxMiA2QzEyIDkuMzEzNzEgOS4zMTM3MSAxMiA2IDEyQzIuNjg2MjkgMTIgMCA5LjMxMzcxIDAgNlpNMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNloiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTYuMTE2MjEgMC4wOTc2NTYyQzcuNTIxMjcgMS41NTMzMiA4LjM2NTQ0IDMuNDU2NDUgOC40ODQzOCA1LjVIMTJWNi41SDguNDgzNEM4LjM2ODg3IDguNDY3MyA3LjU4MzMzIDEwLjMwNDIgNi4yNzI0NiAxMS43MzYzTDYuMDU0NjkgMTEuOTY1OEw1Ljg4MjgxIDExLjc5NTlMNS44MzAwOCAxMS44NDY3QzQuNDU2NTMgMTAuMzk3NyAzLjYzMyA4LjUxNjkgMy41MTU2MiA2LjVIMFY1LjVIMy41MTY2QzMuNjI1MjggMy42MzI0MiA0LjMzODc0IDEuODgxMSA1LjUzNjEzIDAuNDgwNDY5TDUuNzQ2MDkgMC4yNDMxNjRMNS44NTc0MiAwLjM0NTcwM0w2LjExNjIxIDAuMDk3NjU2MlpNNC41MTg1NSA2LjVDNC42MTUyMyA3Ljk2NTk5IDUuMTM0NSA5LjM0NjEzIDYgMTAuNDk4QzYuODY0ODkgOS4zNDY5MyA3LjM4NDcgNy45NjY2NiA3LjQ4MTQ1IDYuNUg0LjUxODU1Wk02IDEuNUM1LjEzMzQ5IDIuNjUyNzcgNC42MTUyMSA0LjAzMzk4IDQuNTE4NTUgNS41SDcuNDgxNDVDNy4zODQ3MSA0LjAzMzE3IDYuODY1NzggMi42NTE3OSA2IDEuNVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/earth
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Earth: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Download
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMiAxMUgxMFYxMEgxMVYxMUMxMSAxMS41MTI4IDEwLjYxMzUgMTEuOTM1NCAxMC4xMTYyIDExLjk5MzJMMTAgMTJIMkMxLjQ4NzE2IDEyIDEuMDY0NiAxMS42MTM1IDEuMDA2ODQgMTEuMTE2MkwxIDExVjEwSDJWMTFaTTggMEM4LjU1MjA4IDAuMDAwMjM4Mjk4IDkgMC40NDc4NjIgOSAxVjVIMTAuMTk4MkMxMC41MTE3IDUuMDAwMjIgMTAuNzcxNiA1LjIzMTIxIDEwLjgxNjQgNS41MzIyM0wxMC44MjMyIDUuNjI1QzEwLjgyMzIgNS43OTA2NiAxMC43NTc3IDUuOTUwMTkgMTAuNjQwNiA2LjA2NzM4TDYuNDQyMzggMTAuMjY1NkM2LjE5ODQ2IDEwLjUwOTMgNS44MDI2NCAxMC41MDkxIDUuNTU4NTkgMTAuMjY1NkwxLjM2MDM1IDYuMDY3MzhDMS4xMTYyNyA1LjgyMzMxIDEuMTE2MjcgNS40MjY2OSAxLjM2MDM1IDUuMTgyNjJDMS40Nzc0MSA1LjA2NTgyIDEuNjM2MzkgNS4wMDAxMiAxLjgwMTc2IDVIM1YxQzMgMC40ODcxNzIgMy4zODY0NiAwLjA2NDYxMTkgMy44ODM3OSAwLjAwNjgzNTk0TDQgMEg4Wk00IDUuMzc1QzQgNS43MjAwMyAzLjcxOTk4IDUuOTk5NzYgMy4zNzUgNkgyLjcwNzAzTDYgOS4yOTI5N0w5LjI5MTk5IDZIOC42MjVDOC4zMTE1NCA1Ljk5OTc5IDguMDUxNjMgNS43Njg4MiA4LjAwNjg0IDUuNDY3NzdMOCA1LjM3NVYxSDRWNS4zNzVaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/download
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Download: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name EmoticonDiscouraged
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzkuMzEzNzEgMCAxMiAyLjY4NjI5IDEyIDZDMTIgOS4zMTM3MSA5LjMxMzcxIDEyIDYgMTJDMi42ODYyOSAxMiAwIDkuMzEzNzEgMCA2QzAgMi42ODYyOSAyLjY4NjI5IDAgNiAwWk02IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFaTTYgNy4xNjUwNEM3LjAwOTQxIDcuMTY1MDQgNy45NTA3OSA3LjU5NjE0IDguNjEwMzUgOC4zMzM5OEw3Ljg2NDI2IDlMNy43MzE0NSA4Ljg2MTMzQzcuMjcwNzIgOC40MTg2OSA2LjY1NjExIDguMTY1MDQgNiA4LjE2NTA0QzUuMjgzOCA4LjE2NTA1IDQuNjE2OTMgOC40Njc0OSA0LjE0NTUxIDguOTg4MjhMMy40MDQzIDguMzE3MzhMMy41NDk4IDguMTY2MDJDNC4xOTczNiA3LjUzMDg5IDUuMDY5ODcgNy4xNjUwNSA2IDcuMTY1MDRaTTUgNS41SDMuNVY0SDVWNS41Wk04LjUgNS41SDdWNEg4LjVWNS41WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/emoticon-discouraged
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const EmoticonDiscouraged: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Erase
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMTFWMTJIN1YxMUgxMloiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTYuNzkzIDAuNTAwMDE4QzcuMTgzNTIgMC4xMDk1MzUgNy44MTY1NSAwLjEwOTUwOCA4LjIwNzA2IDAuNTAwMDE4TDExLjUgMy43OTI5OUMxMS44OTAzIDQuMTgzNTIgMTEuODkwNCA0LjgxNjYgMTEuNSA1LjIwNzA1TDUuMjA3MDYgMTEuNUM0LjgxNjYxIDExLjg5MDQgNC4xODM1MyAxMS44OTAzIDMuNzkzIDExLjVMMC41MDAwMjggOC4yMDcwNUMwLjEwOTUxNiA3LjgxNjU0IDAuMTA5NTQxIDcuMTgzNTEgMC41MDAwMjggNi43OTI5OUw2Ljc5MyAwLjUwMDAxOFpNMS4yMDcwNiA3LjUwMDAyTDQuNTAwMDMgMTAuNzkzTDUuNzkyMDIgOS40OTkwNEwyLjUwMDAzIDYuMjA3MDVMMS4yMDcwNiA3LjUwMDAyWk0zLjIwNzA2IDUuNTAwMDJMNi40OTkwNSA4Ljc5MjAxTDEwLjc5MiA0LjQ5OTA0TDcuNTAwMDMgMS4yMDcwNUwzLjIwNzA2IDUuNTAwMDJaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/erase
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Erase: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Edit
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy44MjIyNyAwLjQ3MDA0NkM4LjE5NjQyIDAuMDk2MzEzOSA4LjgwMzU4IDAuMDk2MzEzOSA5LjE3NzczIDAuNDcwMDQ2TDExLjUyOTMgMi44MjE2MUMxMS45MDM0IDMuMTk1NzMgMTEuOTAzMiAzLjgwMjc5IDExLjUyOTMgNC4xNzcwOEwzLjk4ODI4IDExLjcxOTFDMy44MDg2NSAxMS44OTg3IDMuNTY0NTcgMTEuOTk5MiAzLjMxMDU1IDExLjk5OTNIMC45NTgwMDhDMC40Mjg5MDIgMTEuOTk5MiAyLjgyOTJlLTA1IDExLjU3MDUgMCAxMS4wNDEzVjguNjg5NzdDMC4wMDAyMDIwMDMgOC40MzYwMyAwLjEwMDkzIDguMTkxNTUgMC4yODAyNzMgOC4wMTIwNEw3LjgyMjI3IDAuNDcwMDQ2Wk0xIDguNzA2MzdWMTEuMDAwM0gzLjI5MTk5TDEwLjc5MyAzLjUwMDMyTDguNSAxLjIwNzM1TDEgOC43MDYzN1oiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTkuODUzNTIgNS4xNDY0OEw5LjE0NjQ4IDUuODUzNTJMNi4xNDY0OCAyLjg1MzUyTDYuODUzNTIgMi4xNDY0OEw5Ljg1MzUyIDUuMTQ2NDhaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik0xMiAxMVYxMkg2VjExSDEyWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/edit
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Edit: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Emoticon
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzkuMzEzNzEgMCAxMiAyLjY4NjI5IDEyIDZDMTIgOS4zMTM3MSA5LjMxMzcxIDEyIDYgMTJDMi42ODYyOSAxMiAwIDkuMzEzNzEgMCA2QzAgMi42ODYyOSAyLjY4NjI5IDAgNiAwWk02IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFaTTguNjEwMzUgNy44MzIwM0M3Ljk1MDc5IDguNTY5ODcgNy4wMDk0IDkgNiA5QzUuMDY5ODcgOC45OTk5OSA0LjE5NzM2IDguNjM0MTUgMy41NDk4IDcuOTk5MDJMMy40MDQzIDcuODQ4NjNMNC4xNDU1MSA3LjE3Njc2QzQuNjE2OTMgNy42OTc1NCA1LjI4MzggNy45OTk5OSA2IDhDNi42NTYxMSA4IDcuMjcwNzIgNy43NDYzNSA3LjczMTQ1IDcuMzAzNzFMNy44NjQyNiA3LjE2NTA0TDguNjEwMzUgNy44MzIwM1pNNSA1LjVIMy41VjRINVY1LjVaTTguNSA1LjVIN1Y0SDguNVY1LjVaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/emoticon
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Emoticon: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name ExchangeUd
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA5Ljg5Njg5QzMuOTk5ODYgMTAuMzExIDMuNjY0MTIgMTAuNjQ2OSAzLjI1IDEwLjY0NjlDMy4wOTA4NyAxMC42NDY5IDIuOTM2NzkgMTAuNTk1NiAyLjgwOTU3IDEwLjUwMzNMMi43MTk3MyAxMC40MjcyTDAuNjQ2NDg0IDguMzUzOTJMMS4zNTM1MiA3LjY0Njg5TDMgOS4yOTMzOFYxLjAwMDQxSDRWOS44OTY4OVpNOC4yNjk1MyAxLjExNDY2QzguNTU4NzYgMC44NzM2MzggOC45NzYzNCAwLjg4Njg2NSA5LjI0OTAyIDEuMTMwMjlMOS4zMjYxNyAxLjIxMDM3TDExLjM4MzggMy42ODAwOUwxMC42MTYyIDQuMzIwNzJMOSAyLjM4MjI0VjEwLjUwMDRIOFYxLjY5MDg0QzggMS40NjgzNiA4LjA5ODcgMS4yNTcxNiA4LjI2OTUzIDEuMTE0NjZaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/exchange-ud
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const ExchangeUd: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name ExclamatoryTriangle
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS4yNTU0MiAwLjcxMjgzNkM1Ljk3NDY4IDAuMzAxODY2IDYuODkxMjggMC41NTIxOTkgNy4zMDIzIDEuMjcxNDNMMTEuNTc5NiA4Ljc1NThDMTEuNzA5MSA4Ljk4MjM3IDExLjc3NjkgOS4yMzkwMiAxMS43NzY5IDkuNDk5OTVDMTEuNzc2OSAxMC4zMjgzIDExLjEwNTMgMTAuOTk5OSAxMC4yNzY5IDEwLjk5OTlIMS43MjMyQzEuNDYyMjQgMTAuOTk5OSAxLjIwNTY1IDEwLjkzMjEgMC45NzkwNTYgMTAuODAyN0MwLjI1OTg2MiAxMC4zOTE3IDAuMDA5NjI5ODMgOS40NzUwNCAwLjQyMDQ2MiA4Ljc1NThMNC42OTc4MSAxLjI3MTQzQzQuODMwNjYgMS4wMzg5NyA1LjAyMjk3IDAuODQ1NzA1IDUuMjU1NDIgMC43MTI4MzZaTTYuNDM0MTMgMS43Njc1MkM2LjI5NzEzIDEuNTI3ODEgNS45OTEyNiAxLjQ0NDA0IDUuNzUxNTIgMS41ODFDNS42NzQxIDEuNjI1MjggNS42MTAyMyAxLjY5MDA5IDUuNTY1OTcgMS43Njc1MkwxLjI4ODYzIDkuMjUxOUMxLjE1MTggOS40OTE2MiAxLjIzNTQ3IDkuNzk3NTUgMS40NzUxNSA5LjkzNDUyQzEuNTUwNjQgOS45Nzc2MSAxLjYzNjI3IDkuOTk5OTQgMS43MjMyIDkuOTk5OTVIMTAuMjc2OUMxMC41NTMgOS45OTk5IDEwLjc3NjkgOS43NzYwNSAxMC43NzY5IDkuNDk5OTVDMTAuNzc2OSA5LjQxMjk1IDEwLjc1MzcgOS4zMjc0MyAxMC43MTA1IDkuMjUxOUw2LjQzNDEzIDEuNzY3NTJaTTYuNDk5NTYgOC45OTk5NUg1LjQ5OTU2VjcuOTk5OTVINi40OTk1NlY4Ljk5OTk1Wk02LjQ5OTU2IDYuOTk5OTVINS40OTk1NlYzLjQ5OTk1SDYuNDk5NTZWNi45OTk5NVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/exclamatory-triangle
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const ExclamatoryTriangle: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name ExchangeUdorder
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy45OTk5OCAxVjkuODk2NDVDMy45OTk5OCAxMC4zMTA3IDMuNjY0MTkgMTAuNjQ2NCAzLjI0OTk4IDEwLjY0NjRDMy4wOTA4NSAxMC42NDY0IDIuOTM2OTMgMTAuNTk1OSAyLjgwOTcyIDEwLjUwMzZMMi43MTk2NSAxMC40MjY4TDAuNjQ2NDIzIDguMzUzNTVMMS4zNTM1MyA3LjY0NjQ1TDIuOTk5OTggOS4yOTNWMUgzLjk5OTk4WiIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBvcGFjaXR5PSIwLjI1IiBkPSJNOC4yNjk4NiAxLjExNDM1QzguNTU5MTQgMC44NzMyODEgOC45NzYyOSAwLjg4Njg5NyA5LjI0ODk3IDEuMTMwNDRMOS4zMjYxNyAxLjIxMDM4TDExLjM4NDEgMy42Nzk5MUwxMC42MTU5IDQuMzIwMDlMOSAyLjM4MlYxMC41SDhWMS42OTA1MUM4IDEuNDY3OTMgOC4wOTg4NyAxLjI1Njg0IDguMjY5ODYgMS4xMTQzNVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/exchange-udorder
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const ExchangeUdorder: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Exclamatory
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzkuMzEzNzEgMCAxMiAyLjY4NjI5IDEyIDZDMTIgOS4zMTM3MSA5LjMxMzcxIDEyIDYgMTJDMi42ODYyOSAxMiAwIDkuMzEzNzEgMCA2QzAgMi42ODYyOSAyLjY4NjI5IDAgNiAwWk02IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFaTTYuNSA5LjVINS41VjhINi41VjkuNVpNNi41IDdINS41VjNINi41VjdaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/exclamatory
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Exclamatory: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name ExchangeUdinvertedOrder
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBvcGFjaXR5PSIwLjI1IiBkPSJNMy45OTk5OCAxVjkuODk2NDVDMy45OTk5OCAxMC4zMTA3IDMuNjY0MTkgMTAuNjQ2NCAzLjI0OTk4IDEwLjY0NjRDMy4wOTA4NSAxMC42NDY0IDIuOTM2OTMgMTAuNTk1OSAyLjgwOTcyIDEwLjUwMzZMMi43MTk2NSAxMC40MjY4TDAuNjQ2NDIzIDguMzUzNTVMMS4zNTM1MyA3LjY0NjQ1TDIuOTk5OTggOS4yOTNWMUgzLjk5OTk4WiIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBkPSJNOC4yNjk4NiAxLjExNDM1QzguNTU5MTQgMC44NzMyODEgOC45NzYyOSAwLjg4Njg5NyA5LjI0ODk3IDEuMTMwNDRMOS4zMjYxNyAxLjIxMDM4TDExLjM4NDEgMy42Nzk5MUwxMC42MTU5IDQuMzIwMDlMOSAyLjM4MlYxMC41SDhWMS42OTA1MUM4IDEuNDY3OTMgOC4wOTg4NyAxLjI1Njg0IDguMjY5ODYgMS4xMTQzNVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/exchange-udinverted-order
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const ExchangeUdinvertedOrder: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Entrust
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC4xMzU4NCA2QzguODA1NzYgNi4wMDAxIDkuNTI4MTMgNi4yNzM2NCA5Ljg2NzI5IDYuNzQ1MTJMMTAuNTk0OCA3LjU2MDU1TDExLjY1MDUgOC40MDcyM0MxMS43MTIxIDguNDYzNjIgMTEuNzY3MSA4LjUyNzQxIDExLjgxNDYgOC41OTY2OEwxMS44OCA4LjcwNTA4QzEyLjAyODcgOC45ODc5NCAxMi4wMzM1IDkuMjY3ODMgMTEuOTYyIDkuNTE2NkwxMS45Mjg4IDkuNjE0MjZMMTEuODQzOCA5Ljc5Nzg1TDExLjczMTUgOS45MzE2NEwxMC44MTE2IDEwLjk0MDRMMTAuMTYzMiAxMS42MTA0TDEwLjAxNzcgMTEuNzQ0MUM5LjYwNjUzIDEyLjA4MTMgOS4wMDE5MyAxMi4xMDAyIDguNjI1MSAxMS43NzE1TDcuOTY3ODcgMTEuMjgxMkw3LjQ0MzQ2IDEwLjg0NzdMNC4xNTE0NiAxMS4yMzYzTDQuMDM0MjggMTEuMjQzMkwzLjg5OTUxIDExLjI0NjFDMy43MzAzIDExLjI0NDEgMy41Nzg4OCAxMS4yMjA2IDMuMzkyNjggMTEuMTUwNEwzLjI5ODkzIDExLjExMTNMMy4xMjMxNCAxMS4wMjE1TDAuNDE3MDkgOC41MTQ2NUMtMC4wMzgwNDIxIDguMDQyNDkgLTAuMTY0MDc2IDcuMzg5NDQgMC4yNTc5MSA2Ljc3NjM3TDAuMzYyNDAyIDYuNjQ5NDFDMC40MTI2NjMgNi41OTczMiAwLjQ3NDEyMiA2LjU0MjQyIDAuNTUzODA4IDYuNDg3M0MwLjcxMzU1IDYuMzc2OTYgMC44OTE0MTcgNi4yOTY4MSAxLjExNTMzIDYuMjc5M0wxLjE5ODM0IDYuMjY2NkMxLjY5NTY4IDYuMjA5IDIuMjIwNjcgNi4zMTU1NSAyLjY2ODA3IDYuNTkzNzVMMi44MzIxMyA2LjcwNzAzTDMuNjIyMTcgNy4zNjEzM0wzLjYzNjgyIDcuMjQ5MDJDMy43MzcgNi42NTE1OCA0LjE0NzQ4IDYuMzI1MjUgNC42NjUxNCA2LjI4NDE4TDQuNzg2MjMgNi4yODAyN0w4LjA1MTg2IDYuMDAzOTFMOC4xMzU4NCA2Wk00Ljg3MTE5IDcuMjc2MzdMNC43NjA4NCA3LjI3OTNDNC42NTI2NiA3LjI4OTU2IDQuNjEzMzggNy4zMzYxOSA0LjYxMzM4IDcuNTQzOTVDNC42MTM0NiA3Ljg4NzI1IDQuODgwMzMgOC4wODc4NiA1LjEzNzc5IDguMDg3ODlMNi43NzQ1MSA4LjE4MjYyQzYuOTM5NjcgOC4xOTI0NCA2Ljk4NTY4IDguNDExODggNi44Mzg5NiA4LjQ4ODI4TDYuNjYwMjUgOC42MDY0NUM2LjU3NDUyIDguNjYyNjggNi40OTMyNiA4LjcwNzg3IDYuNDE2MTEgOC43MDgwMUwzLjgzMjEzIDguODMyMDNMMi4xOTQ0MyA3LjQ3NjU2QzEuOTI3OTMgNy4yNzY2MiAxLjU0MTc5IDcuMjA5ODggMS4yMTEwNCA3LjI3NjM3QzEuMTc5MDYgNy4yNzYzNyAxLjE0NjI2IDcuMjkyOTkgMS4xMjIxNyA3LjMwOTU3TDEuMDgyMTMgNy4zNDM3NUMwLjk0NDMzIDcuNTQzOTQgMS4wMDgyIDcuNjg2ODMgMS4xMzY4MiA3LjgyMDMxTDMuNzAzMjIgMTAuMTk2M0MzLjc4MDI5IDEwLjIzNjEgMy44NjEwMiAxMC4yNDUyIDMuOTI2ODYgMTAuMjQ2MUw0LjAzNDI4IDEwLjI0MzJMNy41OTM4NSA5LjgyNDIyQzcuNjU5MyA5LjgyNDg5IDcuOTA2NjUgOS45MTk3OSA3Ljk3MDggOS45ODYzM0w4LjYwNTU3IDEwLjUxMDdMOS4yMjE3OCAxMC45Njg4QzkuMjc2OTEgMTEuMDE2IDkuMzUwNzMgMTEuMDA2NSA5LjM5NjU4IDEwLjk1OUM5LjQ1NjE5IDEwLjkwNDMgOS41MTM4IDEwLjg0ODMgOS41NzA0MSAxMC43OTFMMTAuMTA0NiAxMC4yMzQ0TDEwLjYwMDcgOS42OTA0M0MxMC42MzI3IDkuNjU0MDkgMTAuNjYyIDkuNjIxMjQgMTAuNjg4NiA5LjU5MThMMTAuODgzOSA5LjM3OTg4TDEwLjk5NjIgOS4yNTA5OEMxMC45OTg5IDkuMjQ0OTMgMTEuMDI5MiA5LjE3MjYzIDEwLjk1MDMgOS4xMjY5NUw5LjkwMjQ0IDguMjg4MDlMOS4wMzMzIDcuMzEzNDhDOC44MDcwNiA3LjEwMjY2IDguNDI1NTEgNy4wMDAwOCA4LjEzNTg0IDdMNC44NzExOSA3LjI3NjM3Wk03LjUwNCAwQzcuODIxNTkgMCA4LjIzMDUzIDAuMjU4MjIxIDguNzk5OSAwLjgxMDU0N0w5LjA1MzgxIDEuMDY1NDNMOS4zMjkyIDEuMzU2NDVMOS42MjYwNyAxLjY4NTU1TDkuOTQ2MzkgMi4wNTI3M0wxMC40NzI4IDIuNjc1NzhDMTAuNTM0NCAyLjc0OTg3IDEwLjU5NzQgMi44MjU5MiAxMC42NjEyIDIuOTAzMzJDMTAuODUxMSAzLjEzMzU0IDEwLjk2NjggMy40MTQyNyAxMC45OTYyIDMuNzA4OThMMTEuMDA0IDMuODU3NDJWNkgxMC4wMDRWNC41SDguNTA0QzcuNzI0NCA0LjQ5OTkyIDcuMDgzNTUgMy45MDUxIDcuMDEwODQgMy4xNDQ1M0w3LjAwNCAzVjFIMi41MDRDMi4yNTg2MSAxLjAwMDA4IDIuMDU0MTQgMS4xNzY5NiAyLjAxMTgyIDEuNDEwMTZMMi4wMDQgMS41VjUuNUgxLjAwNFYxLjVDMS4wMDQgMC43MjAzODEgMS41OTg5MyAwLjA3OTYyNTIgMi4zNTk0NyAwLjAwNjgzNTk0TDIuNTA0IDBINy41MDRaTTguMDA0IDNDOC4wMDQgMy4yNDU0MSA4LjE4MDk5IDMuNDQ5NzkgOC40MTQxNiAzLjQ5MjE5TDguNTA0IDMuNUg5Ljg1NzUyTDkuNTY1NTMgMy4xNTAzOUw5LjI1NzkxIDIuNzkxMDJMOC44MzUwNiAyLjMwODU5TDguNDYwMDYgMS44OTc0Nkw4LjEzODc3IDEuNTYwNTVMOC4wMDQgMS40MjY3NlYzWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/entrust
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Entrust: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Experiment
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMyAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy44MjE3OCA4LjI1QzQuNTEyMTMgOC4yNSA1LjA3MTc4IDguODA5NjQgNS4wNzE3OCA5LjVDNS4wNzE3OCAxMC4xOTA0IDQuNTEyMTMgMTAuNzUgMy44MjE3OCAxMC43NUMzLjEzMTQyIDEwLjc1IDIuNTcxNzggMTAuMTkwNCAyLjU3MTc4IDkuNUMyLjU3MTc4IDguODA5NjQgMy4xMzE0MiA4LjI1IDMuODIxNzggOC4yNVpNMy44MjE3OCA5LjI1QzMuNjgzNzEgOS4yNSAzLjU3MTc4IDkuMzYxOTMgMy41NzE3OCA5LjVDMy41NzE3OCA5LjYzODA3IDMuNjgzNzEgOS43NSAzLjgyMTc4IDkuNzVDMy45NTk4NSA5Ljc1IDQuMDcxNzggOS42MzgwNyA0LjA3MTc4IDkuNUM0LjA3MTc4IDkuMzYxOTMgMy45NTk4NSA5LjI1IDMuODIxNzggOS4yNVoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTYuODIxNzggNS43NUM3Ljc4ODI4IDUuNzUgOC41NzE3OCA2LjUzMzUgOC41NzE3OCA3LjVDOC41NzE3OCA4LjQ2NjUgNy43ODgyOCA5LjI1IDYuODIxNzggOS4yNUM1Ljg1NTI4IDkuMjUgNS4wNzE3OCA4LjQ2NjUgNS4wNzE3OCA3LjVDNS4wNzE3OCA2LjUzMzUgNS44NTUyOCA1Ljc1IDYuODIxNzggNS43NVpNNi44MjE3OCA2Ljc1QzYuNDA3NTYgNi43NSA2LjA3MTc4IDcuMDg1NzkgNi4wNzE3OCA3LjVDNi4wNzE3OCA3LjkxNDIxIDYuNDA3NTYgOC4yNSA2LjgyMTc4IDguMjVDNy4yMzU5OSA4LjI1IDcuNTcxNzggNy45MTQyMSA3LjU3MTc4IDcuNUM3LjU3MTc4IDcuMDg1NzkgNy4yMzU5OSA2Ljc1IDYuODIxNzggNi43NVoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTcuMDcxNzggNFY1SDUuMDcxNzhWNEg3LjA3MTc4WiIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBkPSJNOS4wMDAwMSAwQzkuMzE1NTUgMCA5LjU3MTIyIDAuMjU1NzYyIDkuNTcxMyAwLjU3MTI4OVYxLjA0MDA0QzkuNTcxMSAxLjM1NTQ3IDkuMzE1NDggMS42MTEzMyA5LjAwMDAxIDEuNjExMzNIOC45NzE2OUw4Ljk3MjY2IDUuMjQyMTlMOC45ODE0NSA1LjI2OTUzTDExLjk5NTEgMTAuMzg0OEMxMi4wOTIyIDEwLjU0OTYgMTIuMTQzNiAxMC43Mzc1IDEyLjE0MzYgMTAuOTI4N0MxMi4xNDM1IDExLjUyMDMgMTEuNjYzOCAxMS45OTk4IDExLjA3MjMgMTJIMS4wNzEzQzAuODgwMTQ1IDExLjk5OTkgMC42OTIwNTQgMTEuOTQ4NiAwLjUyNzM1MiAxMS44NTE2QzAuMDE3ODE3NSAxMS41NTExIC0wLjE1MTgxIDEwLjg5NDUgMC4xNDg0NDUgMTAuMzg0OEwzLjE2MjEyIDUuMjY5NTNDMy4xNjg1NCA1LjI1ODYzIDMuMTcxODMgNS4yNDYwNCAzLjE3MTg4IDUuMjMzNFYxLjYxMTMzSDMuMTQzNTZDMi44NTk2NyAxLjYxMTMzIDIuNjIzNTYgMS40MDQxMiAyLjU3OTExIDEuMTMyODFMMi41NzEzIDEuMDQwMDRWMC41NzEyODlDMi41NzEzNyAwLjI1NTc2MiAyLjgyODAyIDAgMy4xNDM1NiAwSDkuMDAwMDFaTTQuMTcxODggMVY1LjIzMzRDNC4xNzE4NCA1LjM3NjczIDQuMTQzMjEgNS41MTgyMSA0LjA4NzkgNS42NDk0MUw0LjAyMzQ1IDUuNzc3MzRMMS4wMDk3NyAxMC44OTI2QzAuOTkwMDI2IDEwLjkyNjUgMS4wMDEzNSAxMC45NzAzIDEuMDM1MTYgMTAuOTkwMkMxLjA0NjA2IDEwLjk5NjcgMS4wNTg2NSAxMC45OTk5IDEuMDcxMyAxMUgxMS4wNzIzQzExLjExMTUgMTAuOTk5OCAxMS4xNDM1IDEwLjk2OCAxMS4xNDM2IDEwLjkyODdDMTEuMTQzNiAxMC45MTYxIDExLjE0MDEgMTAuOTAzNSAxMS4xMzM4IDEwLjg5MjZMOC4xMjAxMyA1Ljc3NzM0QzguMDIzMSA1LjYxMjY0IDcuOTcxNzQgNS40MjQ1NSA3Ljk3MTY5IDUuMjMzNFYxSDQuMTcxODhaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/experiment
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Experiment: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name FileProcessed
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS41IDBDMTAuMjc5NyAwIDEwLjkyMDQgMC41OTQ4NDkgMTAuOTkzMiAxLjM1NTQ3TDExIDEuNVY1SDEwVjEuNUMxMCAxLjI1NDU0IDkuODIzMDkgMS4wNTAxNSA5LjU4OTg0IDEuMDA3ODFMOS41IDFIOVYyQzkgMi41MTI4NCA4LjYxMzU1IDIuOTM1NCA4LjExNjIxIDIuOTkzMTZMOCAzSDRDMy40ODcxNiAzIDMuMDY0NiAyLjYxMzU1IDMuMDA2ODQgMi4xMTYyMUwzIDJWMUgyLjVDMi4yNTQ1NCAxIDIuMDUwMTUgMS4xNzY5MSAyLjAwNzgxIDEuNDEwMTZMMiAxLjVWMTAuNUMyIDEwLjc0NTUgMi4xNzY5MSAxMC45NDk5IDIuNDEwMTYgMTAuOTkyMkwyLjUgMTFINlYxMkgyLjVDMS43MjAzMyAxMiAxLjA3OTU1IDExLjQwNTIgMS4wMDY4NCAxMC42NDQ1TDEgMTAuNVYxLjVDMSAwLjcyMDMyNyAxLjU5NDg1IDAuMDc5NTUyMiAyLjM1NTQ3IDAuMDA2ODM1OTRMMi41IDBIOS41Wk0xMS44NTM1IDcuODUzNTJMOC43MDcwMyAxMUM4LjM0NjU0IDExLjM2MDQgNy43Nzg5OSAxMS4zODggNy4zODY3MiAxMS4wODNMNy4yOTI5NyAxMUw1LjY0NjQ4IDkuMzUzNTJMNi4zNTM1MiA4LjY0NjQ4TDggMTAuMjkzTDExLjE0NjUgNy4xNDY0OEwxMS44NTM1IDcuODUzNTJaTTQgMkg4VjFINFYyWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/file-processed
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const FileProcessed: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name FileAdd
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS41IDBDMTAuMjc5NyAwIDEwLjkyMDQgMC41OTQ4NDkgMTAuOTkzMiAxLjM1NTQ3TDExIDEuNVY1SDEwVjEuNUMxMCAxLjI1NDU0IDkuODIzMDkgMS4wNTAxNSA5LjU4OTg0IDEuMDA3ODFMOS41IDFIOVYyQzkgMi41MTI4NCA4LjYxMzU1IDIuOTM1NCA4LjExNjIxIDIuOTkzMTZMOCAzSDRDMy40ODcxNiAzIDMuMDY0NiAyLjYxMzU1IDMuMDA2ODQgMi4xMTYyMUwzIDJWMUgyLjVDMi4yNTQ1NCAxIDIuMDUwMTUgMS4xNzY5MSAyLjAwNzgxIDEuNDEwMTZMMiAxLjVWMTAuNUMyIDEwLjc0NTUgMi4xNzY5MSAxMC45NDk5IDIuNDEwMTYgMTAuOTkyMkwyLjUgMTFINlYxMkgyLjVDMS43MjAzMyAxMiAxLjA3OTU1IDExLjQwNTIgMS4wMDY4NCAxMC42NDQ1TDEgMTAuNVYxLjVDMSAwLjcyMDMyNyAxLjU5NDg1IDAuMDc5NTUyMiAyLjM1NTQ3IDAuMDA2ODM1OTRMMi41IDBIOS41Wk0xMCA5SDEyVjEwSDEwVjEySDlWMTBIN1Y5SDlWN0gxMFY5Wk00IDJIOFYxSDRWMloiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/file-add
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const FileAdd: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Extport
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS41IDBDMTAuMjc5NyAwIDEwLjkyMDQgMC41OTQ4NDkgMTAuOTkzMiAxLjM1NTQ3TDExIDEuNVYzSDEwVjEuNUMxMCAxLjI1NDU0IDkuODIzMDkgMS4wNTAxNSA5LjU4OTg0IDEuMDA3ODFMOS41IDFIMS41QzEuMjU0NTQgMSAxLjA1MDE1IDEuMTc2OTEgMS4wMDc4MSAxLjQxMDE2TDEgMS41VjEwLjVDMSAxMC43NDU1IDEuMTc2OTEgMTAuOTQ5OSAxLjQxMDE2IDEwLjk5MjJMMS41IDExSDkuNUM5Ljc0NTQ2IDExIDkuOTQ5ODUgMTAuODIzMSA5Ljk5MjE5IDEwLjU4OThMMTAgMTAuNVY5SDExVjEwLjVDMTEgMTEuMjc5NyAxMC40MDUyIDExLjkyMDQgOS42NDQ1MyAxMS45OTMyTDkuNSAxMkgxLjVDMC43MjAzMjcgMTIgMC4wNzk1NTI0IDExLjQwNTIgMC4wMDY4MzU5NCAxMC42NDQ1TDAgMTAuNVYxLjVDMCAwLjcyMDMyNyAwLjU5NDg0OSAwLjA3OTU1MjIgMS4zNTU0NyAwLjAwNjgzNTk0TDEuNSAwSDkuNVpNMTEuNjc2OCA1LjQ2OTczQzExLjk0MyA1LjczNTk5IDExLjk2NjkgNi4xNTI2OCAxMS43NDkgNi40NDYyOUwxMS42NzY4IDYuNTMwMjdMOS4zNTM1MiA4Ljg1MzUyTDguNjQ2NDggOC4xNDY0OEwxMC4yOTMgNi41SDVWNS41SDEwLjI5M0w4LjY0NjQ4IDMuODUzNTJMOS4zNTM1MiAzLjE0NjQ4TDExLjY3NjggNS40Njk3M1oiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/extport
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Extport: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name FilePending
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS41IDBDMTAuMjc5NyAwIDEwLjkyMDQgMC41OTQ4NDkgMTAuOTkzMiAxLjM1NTQ3TDExIDEuNVY1SDEwVjEuNUMxMCAxLjI1NDU0IDkuODIzMDkgMS4wNTAxNSA5LjU4OTg0IDEuMDA3ODFMOS41IDFIOVYyQzkgMi41MTI4NCA4LjYxMzU1IDIuOTM1NCA4LjExNjIxIDIuOTkzMTZMOCAzSDRDMy40ODcxNiAzIDMuMDY0NiAyLjYxMzU1IDMuMDA2ODQgMi4xMTYyMUwzIDJWMUgyLjVDMi4yNTQ1NCAxIDIuMDUwMTUgMS4xNzY5MSAyLjAwNzgxIDEuNDEwMTZMMiAxLjVWMTAuNUMyIDEwLjc0NTUgMi4xNzY5MSAxMC45NDk5IDIuNDEwMTYgMTAuOTkyMkwyLjUgMTFINlYxMkgyLjVDMS43MjAzMyAxMiAxLjA3OTU1IDExLjQwNTIgMS4wMDY4NCAxMC42NDQ1TDEgMTAuNVYxLjVDMSAwLjcyMDMyNyAxLjU5NDg1IDAuMDc5NTUyMiAyLjM1NTQ3IDAuMDA2ODM1OTRMMi41IDBIOS41Wk05IDZDMTAuNjU2OSA2IDEyIDcuMzQzMTUgMTIgOUMxMiAxMC42NTY5IDEwLjY1NjkgMTIgOSAxMkM3LjM0MzE1IDEyIDYgMTAuNjU2OSA2IDlDNiA3LjM0MzE1IDcuMzQzMTUgNiA5IDZaTTkgN0M3Ljg5NTQzIDcgNyA3Ljg5NTQzIDcgOUM3IDEwLjEwNDYgNy44OTU0MyAxMSA5IDExQzEwLjEwNDYgMTEgMTEgMTAuMTA0NiAxMSA5QzExIDcuODk1NDMgMTAuMTA0NiA3IDkgN1pNOS41IDkuMTkxNDFMOS45MTk5MiA5LjQwMDM5TDkuNDcyNjYgMTAuMjk0OUw4Ljg4NjcyIDEwLjAwMjlDOC42NzkyMyA5Ljg5OTE4IDguNTM4NzYgOS43MDAyMyA4LjUwNjg0IDkuNDc0NjFMOC41IDkuMzc1OThWOEg5LjVWOS4xOTE0MVpNNCAySDhWMUg0VjJaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/file-pending
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const FilePending: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name File
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy41ODU5NCAwQzcuOTgzNzEgNC4wMDI1OWUtMDUgOC4zNjUyMiAwLjE1ODE4NCA4LjY0NjQ4IDAuNDM5NDUzTDEwLjU2MDUgMi4zNTM1MkMxMC44NDE4IDIuNjM0NzggMTEgMy4wMTYyOSAxMSAzLjQxNDA2VjEwLjVDMTEgMTEuMzI4NCAxMC4zMjg0IDEyIDkuNSAxMkgyLjVDMS42NzE1NyAxMiAxIDExLjMyODQgMSAxMC41VjEuNUMxIDAuNjcxNTczIDEuNjcxNTcgMCAyLjUgMEg3LjU4NTk0Wk0yLjUgMUMyLjIyMzg2IDEgMiAxLjIyMzg2IDIgMS41VjEwLjVDMiAxMC43NzYxIDIuMjIzODYgMTEgMi41IDExSDkuNUM5Ljc3NjE0IDExIDEwIDEwLjc3NjEgMTAgMTAuNVY0SDguNUM3LjcyMDMzIDQgNy4wNzk1NSAzLjQwNTE1IDcuMDA2ODQgMi42NDQ1M0w3IDIuNVYxSDIuNVpNOCAxMEgzVjlIOFYxMFpNNiA4SDNWN0g2VjhaTTggMi41QzggMi43NDU0NiA4LjE3NjkxIDIuOTQ5ODUgOC40MTAxNiAyLjk5MjE5TDguNSAzSDkuNzkyOTdMOCAxLjIwNzAzVjIuNVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/file
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const File: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Folder
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuNSAxSDQuMDg1NzlDNC40ODM2MSAxIDQuODY1MTQgMS4xNTgwNCA1LjE0NjQ1IDEuNDM5MzRMNi41NjA2NiAyLjg1MzU1QzYuNjU0NDMgMi45NDczMiA2Ljc4MTYxIDMgNi45MTQyMSAzSDEwLjVDMTEuMzI4NCAzIDEyIDMuNjcxNTcgMTIgNC41VjkuNUMxMiAxMC4zMjg0IDExLjMyODQgMTEgMTAuNSAxMUgxLjVDMC42NzE1NzMgMTEgMCAxMC4zMjg0IDAgOS41VjIuNUMwIDEuNjcxNTcgMC42NzE1NzMgMSAxLjUgMVpNNC4wODU3OSAySDEuNUMxLjIyMzg2IDIgMSAyLjIyMzg2IDEgMi41VjkuNUMxIDkuNzc2MTQgMS4yMjM4NiAxMCAxLjUgMTBIMTAuNUMxMC43NzYxIDEwIDExIDkuNzc2MTQgMTEgOS41VjQuNUMxMSA0LjIyMzg2IDEwLjc3NjEgNCAxMC41IDRINi45MTQyMUM2LjUxNjM5IDQgNi4xMzQ4NiAzLjg0MTk2IDUuODUzNTUgMy41NjA2Nkw0LjQzOTM0IDIuMTQ2NDVDNC4zNDU1NyAyLjA1MjY4IDQuMjE4MzkgMiA0LjA4NTc5IDJaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik0xMSAxVjJIN1YxSDExWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/folder
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Folder: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name FullScreenExit
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA3QzQuNTEyODQgNyA0LjkzNTQgNy4zODY0NSA0Ljk5MzE2IDcuODgzNzlMNSA4VjExSDRWOC43MDcwM0wwLjg1MzUxNiAxMS44NTM1TDAuMTQ2NDg0IDExLjE0NjVMMy4yOTI5NyA4SDFWN0g0Wk0xMSA4SDguNzA3MDNMMTEuODUzNSAxMS4xNDY1TDExLjE0NjUgMTEuODUzNUw4IDguNzA3MDNWMTFIN1Y4QzcgNy40ODcxNiA3LjM4NjQ1IDcuMDY0NiA3Ljg4Mzc5IDcuMDA2ODRMOCA3SDExVjhaTTQgMy4yOTI5N1YxSDVWNEM1IDQuNTEyODQgNC42MTM1NSA0LjkzNTQgNC4xMTYyMSA0Ljk5MzE2TDQgNUgxVjRIMy4yOTI5N0wwLjE0NjQ4NCAwLjg1MzUxNkwwLjg1MzUxNiAwLjE0NjQ4NEw0IDMuMjkyOTdaTTExLjg1MzUgMC44NTM1MTZMOC43MDcwMyA0SDExVjVIOEM3LjQ4NzE2IDUgNy4wNjQ2IDQuNjEzNTUgNy4wMDY4NCA0LjExNjIxTDcgNFYxSDhWMy4yOTI5N0wxMS4xNDY1IDAuMTQ2NDg0TDExLjg1MzUgMC44NTM1MTZaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/full-screen-exit
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const FullScreenExit: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name FixedPosition
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzkuMzEzNzEgMCAxMiAyLjY4NjI5IDEyIDZDMTIgOS4zMTM3MSA5LjMxMzcxIDEyIDYgMTJDMi42ODYyOSAxMiAwIDkuMzEzNzEgMCA2QzAgMi42ODYyOSAyLjY4NjI5IDAgNiAwWk02LjUgM0g1LjVWMS4wMjQ0MUMzLjEzNzc3IDEuMjU4OTQgMS4yNTg5NCAzLjEzNzc3IDEuMDI0NDEgNS41SDNWNi41SDEuMDI0NDFDMS4yNTg5MyA4Ljg2MjIgMy4xMzc4MiAxMC43NCA1LjUgMTAuOTc0NlY5SDYuNVYxMC45NzQ2QzguODYyMTggMTAuNzQgMTAuNzQxMSA4Ljg2MjIgMTAuOTc1NiA2LjVIOVY1LjVIMTAuOTc1NkMxMC43NDExIDMuMTM3NzcgOC44NjIyMyAxLjI1ODk0IDYuNSAxLjAyNDQxVjNaTTYgNEM3LjEwNDU3IDQgOCA0Ljg5NTQzIDggNkM4IDcuMTA0NTcgNy4xMDQ1NyA4IDYgOEM0Ljg5NTQzIDggNCA3LjEwNDU3IDQgNkM0IDQuODk1NDMgNC44OTU0MyA0IDYgNFpNNiA1QzUuNDQ3NzIgNSA1IDUuNDQ3NzIgNSA2QzUgNi41NTIyOCA1LjQ0NzcyIDcgNiA3QzYuNTUyMjggNyA3IDYuNTUyMjggNyA2QzcgNS40NDc3MiA2LjU1MjI4IDUgNiA1WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/fixed-position
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const FixedPosition: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Fire
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuOTExOCAyLjA4Mzc2QzQuMzE4NzQgMS41MzY4MiA0LjQ5MzM0IDEuMDg3NTcgNC40OTMzNCAwLjUwMDY0NUM0LjQ5MzM0IDAuMTI4OTU0IDQuODg0NSAtMC4xMTI3OTQgNS4yMTY5NSAwLjA1MzQzMTVDNS44NTkzMSAwLjM3NDYxMSA2LjU4NDY0IDAuODczMTM0IDcuMjQ4MDkgMS42MjgwOUM3Ljk1MDE2IDIuNDI2OTkgOC4zOTgyNyAzLjM0MTkzIDguNTE4MTEgNC4zNjQ5MUw4LjUzODAxIDQuNTkxNjVMOC41NTk3NCA0LjU0ODYzQzguNjgyMzYgNC4yNzM2MyA4Ljc4Mjk1IDMuOTUwMTQgOC44NTgxMiAzLjU3OTY4TDguOTAwMTQgMy4zNTE3OEM4Ljk3NjE5IDIuODk1NDkgOS41Nzc3OSAyLjc3ODI3IDkuODE5NTkgMy4xNzI2MkMxMS42NzgyIDYuMjAzOCAxMS4zNDA5IDguNzIyNjcgOS42MzYwNCAxMC42ODdDOS4zNzIzMiAxMC45OTA5IDkuMDkzNTYgMTEuMjU5IDguNzk3NDMgMTEuNTA3MUw4LjMyNzA1IDExLjg3OTdMOC4yNDM2NCAxMS45MzczQzguMTA5ODEgMTIuMDEyIDcuOTQ3MDcgMTIuMDIxOSA3LjgwMzA1IDExLjk2MDJDNi41ODQ2MSAxMS40MzggNS42OTUxNSAxMC40NzY3IDUuMTgwOTkgOC44MzU4M0w1LjEyNTAxIDguNjQ3NjRMNS4wNjAyNCA4LjgwNDY4QzQuODA5ODIgOS40NjcwMyA0Ljc1OTg4IDEwLjI0MTYgNC45MTU2OCAxMS4xMjU5TDQuOTY4NiAxMS4zOTQ0QzUuMDY0NjUgMTEuODM2MyA0LjU3MTQ1IDEyLjE2ODYgNC4xOTgwMyAxMS45MTM1QzAuNzkwMjkgOS41ODYzMSAwLjAxNDI4MzkgNi44MDQgMi4zNTQ4MyAzLjk2MDc4TDIuNDMwMDggMy44NjQyTDIuNjI3MDYgMy42MjEzMUwzLjYxNjE1IDIuNDQ0OTNMMy44NjYwMSAyLjE0MjY4TDMuOTExOCAyLjA4Mzc2Wk01LjUyNTU1IDEuNDA2MjdMNS4zOTUwMSAxLjMxNTY1TDUuMzcwNzEgMS40MTkzOEM1LjI0NzM5IDEuODUyMTUgNS4wMzAwNSAyLjI1NjA0IDQuNzE0MDkgMi42ODA2OUw0LjYyNTQxIDIuNzkzNjhMNC40OTIxNCAyLjk1NTk4TDMuNzcwOTIgMy44MTI0OUwzLjM1Nzk0IDQuMzA3MzdMMi45ODk5NyA0Ljc2ODE1QzEuNDYxMzkgNi43NTM2MiAxLjc1MDg2IDguNTgxNDMgMy43NjE1NyAxMC4zMjMzTDMuODMyMDEgMTAuMzgyNkwzLjgyODYxIDEwLjI4MDRDMy44MDUwNSA5LjA5NTU2IDQuMTQxMiA4LjA2NDU0IDQuODM4NjMgNy4yMjk2NEw0Ljk5MzYxIDcuMDUzNzVDNS4yNzY4MiA2Ljc0ODc1IDUuNzg2OTQgNi45MDMwOSA1Ljg1MzU2IDcuMzEzOTRDNi4xNzM4MiA5LjI4ODg3IDYuODYwNjQgMTAuMzM1IDcuODkyNzEgMTAuODk0Mkw3LjkzNjAxIDEwLjkxNjZMOC4xNTUyMSAxMC43NDA2QzguNDEzMTQgMTAuNTI0NSA4LjY1NDQzIDEwLjI5MjQgOC44ODA4IDEwLjAzMTZDMTAuMDgxMyA4LjY0ODM3IDEwLjQ2NzcgNi45ODU3MiA5LjYwNTg2IDQuOTI3NDlMOS41NDMwMSA0Ljc4NDY1TDkuNDY5MjUgNC45NjMxOUM5LjE4OTA1IDUuNTg4ODQgOC44MDI4IDYuMDYxOTMgOC4zMTYxOSA2LjM1NjM2TDguMTUwMjggNi40NDc4NkM3Ljc3MzI2IDYuNjM2MzcgNy4zNDY0OSA2LjMwMjQxIDcuNDM4ODIgNS44OTExM0M3Ljc1NjIgNC40NzczMiA3LjM3ODMzIDMuMjkxMTggNi40OTY5MiAyLjI4ODJDNi4xODM5OSAxLjkzMjEgNS44NTE0MyAxLjY0MDg2IDUuNTI1NTUgMS40MDYyN1oiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/fire
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Fire: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name FolderOpen
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC4wODU5NCAxQzQuNDMzOTQgMS4wMDAwNCA0Ljc2OTI3IDEuMTIxMjMgNS4wMzYxMyAxLjMzOTg0TDUuMTQ2NDggMS40Mzk0NUw2LjU2MDU1IDIuODUzNTJDNi42MzU1NiAyLjkyODUzIDYuNzMyNDggMi45Nzc2NSA2LjgzNTk0IDIuOTk0MTRMNi45MTQwNiAzSDEwLjM0NzdDMTEuMTc1OCAzLjAwMDM2IDExLjg0NzcgMy42NzE3OSAxMS44NDc3IDQuNUMxMS44NDc3IDQuNTcwOSAxMS44NDIgNC42NDE3MiAxMS44MzIgNC43MTE5MUwxMS4xMTgyIDkuNzExOTFDMTEuMDEyNiAxMC40NTA4IDEwLjM3OTIgMTAuOTk5OCA5LjYzMjgxIDExSDEuNUMwLjcyMDMyNyAxMSAwLjA3OTU1MjQgMTAuNDA1MiAwLjAwNjgzNTk0IDkuNjQ0NTNMMCA5LjVWMi41QzAgMS43MjAzMyAwLjU5NDg0OSAxLjA3OTU1IDEuMzU1NDcgMS4wMDY4NEwxLjUgMUg0LjA4NTk0Wk0zLjM2NzE5IDRDMy4xMTg1NiA0LjAwMDIxIDIuOTA4MjMgNC4xODM1MiAyLjg3MzA1IDQuNDI5NjlMMi4xNTQzIDkuNDY0ODRMMi4xNTMzMiA5LjVDMi4xNTMzMiA5Ljc3NjE0IDIuMzc3MTggMTAgMi42NTMzMiAxMEg5LjYzMjgxQzkuODgxNSA5Ljk5OTg1IDEwLjA5MjggOS44MTY1MyAxMC4xMjc5IDkuNTcwMzFMMTAuODQ1NyA0LjUzNTE2TDEwLjg0NzcgNC41QzEwLjg0NzcgNC4yMjQwOCAxMC42MjM1IDQuMDAwMzYgMTAuMzQ3NyA0SDMuMzY3MTlaTTEuNSAyQzEuMjU0NTQgMiAxLjA1MDE1IDIuMTc2OTEgMS4wMDc4MSAyLjQxMDE2TDEgMi41VjkuNUMxIDkuNjY3NTggMS4wODM0MiA5LjgxNDU1IDEuMjA5OTYgOS45MDUyN0MxLjE3MzggOS43NzYyNCAxLjE1MzMyIDkuNjQwNTggMS4xNTMzMiA5LjVDMS4xNTMzMiA5LjQyOTExIDEuMTU3OTYgOS4zNTgyNiAxLjE2Nzk3IDkuMjg4MDlMMS44ODI4MSA0LjI4ODA5QzEuOTg4MzggMy41NDkyNyAyLjYyMDkxIDMuMDAwMjEgMy4zNjcxOSAzSDUuMjkyOTdMNC40Mzk0NSAyLjE0NjQ4QzQuMzY0NDQgMi4wNzE0NyA0LjI2NzUyIDIuMDIyMzUgNC4xNjQwNiAyLjAwNTg2TDQuMDg1OTQgMkgxLjVaTTExIDJIN1YxSDExVjJaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/folder-open
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const FolderOpen: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name FullScreen
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS4zNTM1MiA3LjM1MzUyTDIuNzA3MDMgMTBINVYxMUgyQzEuNDg3MTYgMTEgMS4wNjQ2IDEwLjYxMzUgMS4wMDY4NCAxMC4xMTYyTDEgMTBWN0gyVjkuMjkyOTdMNC42NDY0OCA2LjY0NjQ4TDUuMzUzNTIgNy4zNTM1MlpNMTAgOS4yOTI5N1Y3SDExVjEwQzExIDEwLjUxMjggMTAuNjEzNSAxMC45MzU0IDEwLjExNjIgMTAuOTkzMkwxMCAxMUg3VjEwSDkuMjkyOTdMNi42NDY0OCA3LjM1MzUyTDcuMzUzNTIgNi42NDY0OEwxMCA5LjI5Mjk3Wk01IDJIMi43MDcwM0w1LjM1MzUyIDQuNjQ2NDhMNC42NDY0OCA1LjM1MzUyTDIgMi43MDcwM1Y1SDFWMkMxIDEuNDg3MTYgMS4zODY0NSAxLjA2NDYgMS44ODM3OSAxLjAwNjg0TDIgMUg1VjJaTTEwIDFDMTAuNTEyOCAxIDEwLjkzNTQgMS4zODY0NSAxMC45OTMyIDEuODgzNzlMMTEgMlY1SDEwVjIuNzA3MDNMNy4zNTM1MiA1LjM1MzUyTDYuNjQ2NDggNC42NDY0OEw5LjI5Mjk3IDJIN1YxSDEwWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/full-screen
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const FullScreen: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Heart
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAuOTYyMjc1IDcuMjE5MjhDLTAuMzY2Njk1IDUuNzUyOTEgLTAuMzE0NDcyIDMuNDk0NjkgMS4wOTAxMiAyLjA5MDFDMi4zOTMyMyAwLjc4Njk5MiA0LjQyMjIyIDAuNjUyMTg4IDUuODc1NTEgMS42ODU2OUw2LjAwMDAyIDEuNzc5NjVMNi4xMjQ1NCAxLjY4NTY5QzcuNTIxOTMgMC42OTE5MzggOS40NTE2IDAuNzc4MzUxIDEwLjc1NjQgMS45NDQ5MkwxMC45MDk5IDIuMDkwMUMxMi4zMDk3IDMuNDg5ODQgMTIuMzY2OSA1LjczODMgMTEuMDQxIDcuMjE1NTNMMTAuOTA5OSA3LjM1MzU1TDcuMTgzNDQgMTEuMDhDNi41Mjk4NiAxMS43MzM2IDUuNDcwMTkgMTEuNzMzNiA0LjgxNjYxIDExLjA4TDEuMDgxNTYgNy4zNDQ3OEwwLjk2MjI3NSA3LjIxOTI4Wk0xMC4zMDU5IDYuNTM3NjhDMTEuMjY4MiA1LjQ2NTMxIDExLjIyNjQgMy44MjA3NyAxMC4yMDI4IDIuNzk3MkM5LjEzOTg4IDEuNzM0MjcgNy40MTY1MiAxLjczNDI3IDYuMzUzNTggMi43OTcyTDYuMDAwMDIgMy4xNTA3Nkw1LjY0NjQ3IDIuNzk3MkM0LjU4MzUzIDEuNzM0MjcgMi44NjAxNyAxLjczNDI3IDEuNzk3MjMgMi43OTcyQzAuNzcwMTEyIDMuODI0MzIgMC43MzE5MTYgNS40NzU5OSAxLjY5NDg3IDYuNTM4NzNMMS43OTcyMyA2LjY0NjQ1TDUuNTIzNzEgMTAuMzcyOUM1Ljc4Njc3IDEwLjYzNiA2LjIxMzI4IDEwLjYzNiA2LjQ3NjM0IDEwLjM3MjlMMTAuMTkzNCA2LjY1NjExTDEwLjMwNTkgNi41Mzc2OFoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/heart
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Heart: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name HidePassowrd
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMyAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEuNjIzIDQuNzgwMjdDMTEuNDI0NyA1LjExODk0IDExLjE5NjMgNS40MzQ1OCAxMC45NDUzIDUuNzI3NTRMMTIuMDIxNSA2LjgwMzcxTDExLjMxNDUgNy41MTA3NEwxMC4yMzgzIDYuNDM0NTdDOS42Mjk5MSA2Ljk1NjA2IDguOTI5NTkgNy4zNjE0NiA4LjE2OTkyIDcuNjI4OTFMOC41NjQ0NSA5LjA5NzY2TDcuNTk4NjMgOS4zNTY0NUw3LjIwNDEgNy44ODY3MkM2LjgxNTIzIDcuOTU5MDggNi40MTY1NCA4IDYuMDEwNzQgOEM1LjYwNDYyIDggNS4yMDU1OSA3Ljk1OTIgNC44MTY0MSA3Ljg4NjcyTDQuNDIyODUgOS4zNTY0NUwzLjQ1NzAzIDkuMDk3NjZMMy44NDk2MSA3LjYyOTg4QzMuMDkwMjcgNy4zNjIzNSAyLjM4OTQxIDYuOTU3MDEgMS43ODEyNSA2LjQzNTU1TDAuNzA3MDMxIDcuNTEwNzRMMCA2LjgwMzcxTDEuMDc1MiA1LjcyNjU2QzAuODI5MTg5IDUuNDM5MjcgMC42MDQ2OTQgNS4xMzAxMyAwLjQwOTE4IDQuNzk4ODNMMS4yNzA1MSA0LjI5MTAyQzIuMjUzNSA1Ljk1NjU5IDQuMDQxMjUgNi45OTk5OSA2LjAxMDc0IDdDNy45ODY3NyA3IDkuNzgwMDUgNS45NDk4MSAxMC43NjA3IDQuMjc1MzlMMTEuNjIzIDQuNzgwMjdaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/hide-passowrd
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const HidePassowrd: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name HalfScreenExit
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA3QzQuNTEyODQgNyA0LjkzNTQgNy4zODY0NSA0Ljk5MzE2IDcuODgzNzlMNSA4VjExSDRWOEgxVjdINFpNOCA0SDExVjVIOEM3LjQ4NzE2IDUgNy4wNjQ2IDQuNjEzNTUgNy4wMDY4NCA0LjExNjIxTDcgNFYxSDhWNFoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/half-screen-exit
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const HalfScreenExit: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name HalfScreen
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMiAxMEg1VjExSDJDMS40ODcxNiAxMSAxLjA2NDYgMTAuNjEzNSAxLjAwNjg0IDEwLjExNjJMMSAxMFY3SDJWMTBaTTEwIDFDMTAuNTEyOCAxIDEwLjkzNTQgMS4zODY0NSAxMC45OTMyIDEuODgzNzlMMTEgMlY1SDEwVjJIN1YxSDEwWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/half-screen
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const HalfScreen: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Funnel
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEgMEgxMUMxMS41NTIzIDAgMTIgMC40NDc3MTUgMTIgMVYxLjc5Mjg5QzEyIDIuMDU4MTEgMTEuODk0NiAyLjMxMjQ2IDExLjcwNzEgMi41TDguMTQ2NDUgNi4wNjA2NkM4LjA1MjY4IDYuMTU0NDMgOCA2LjI4MTYxIDggNi40MTQyMVYxMS4xMjYzQzggMTEuNTEyOSA3LjY4NjYgMTEuODI2MyA3LjMgMTEuODI2M0M3LjE2MTggMTEuODI2MyA3LjAyNjcgMTEuNzg1NCA2LjkxMTcxIDExLjcwODdMNC4zMTE3MSA5Ljk3NTRDNC4xMTY5NyA5Ljg0NTU3IDQgOS42MjcwMSA0IDkuMzkyOTZWNi40MTQyMUM0IDYuMjgxNjEgMy45NDczMiA2LjE1NDQzIDMuODUzNTUgNi4wNjA2NkwwLjI5Mjg5MyAyLjVDMC4xMDUzNTcgMi4zMTI0NiAwIDIuMDU4MTEgMCAxLjc5Mjg5VjFDMCAwLjQ0NzcxNSAwLjQ0NzcxNSAwIDEgMFpNMTEgMUgxVjEuNzkyODlMNC41NjA2NiA1LjM1MzU1QzQuODQxOTYgNS42MzQ4NiA1IDYuMDE2MzkgNSA2LjQxNDIxVjkuMjMyTDcgMTAuNTY1VjYuNDE0MjFDNyA2LjA2NjEyIDcuMTIxIDUuNzMwNSA3LjMzOTcgNS40NjM1OEw3LjQzOTM0IDUuMzUzNTVMMTEgMS43OTI4OVYxWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/funnel
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Funnel: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Hide
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEuMzUzOSAxMC42NDY1TDEwLjY0NTkgMTEuMzUzNUw4Ljg5Mjk3IDkuNjAwNTlDNy45ODAyNCAxMC4xOTUyIDcuMDE3MTQgMTAuNDk5OSA2LjAwMDM5IDEwLjVDMy45MzQwNCAxMC41IDIuMDc4ODIgOS4yNTgxMyAwLjQ0NTcgNi44Mzg4N0MwLjEwMzcwOCA2LjMzMTgyIDAuMTA0MjExIDUuNjY3OTYgMC40NDk2MDcgNS4xNTYyNUwwLjYzOTA2IDQuODgxODRDMS4xNjkzOSA0LjEzNDAzIDEuNzI0MDMgMy41MDk1OSAyLjMwMDE5IDMuMDA3ODFMMC42NDU4OTYgMS4zNTM1MkwxLjM1MzkgMC42NDY0ODRMMTEuMzUzOSAxMC42NDY1Wk0zLjAwODIgMy43MTU4MkMyLjQ3ODQ3IDQuMTY3MjQgMS45NjE1OSA0Ljc0NTU2IDEuNDU4NCA1LjQ1NTA4TDEuMjc0OCA1LjcxOTczQzEuMTYwNzggNS44ODg2NSAxLjE2MDk2IDYuMTEwMjkgMS4yNzQ4IDYuMjc5M0MyLjczODIyIDguNDQ3MTcgNC4zMTA2NSA5LjUgNi4wMDAzOSA5LjVDNi43NDY4NCA5LjQ5OTkgNy40Njg4OCA5LjI5MjkyIDguMTY5MzMgOC44NzY5NUw3LjM3NjM2IDguMDgzOThDNi45ODE3NiA4LjM0NTggNi41MDk1OCA4LjQ5OTg5IDYuMDAwMzkgOC41QzQuNjE5NjggOC41IDMuNTAwMzkgNy4zODA3MSAzLjUwMDM5IDZDMy41MDAzOSA1LjQ5MDcgMy42NTM4MSA1LjAxODAxIDMuOTE1NDMgNC42MjMwNUwzLjAwODIgMy43MTU4MlpNNi4wMDAzOSAxLjVDOC4wNjY1NiAxLjUwMDIzIDkuOTIxMSAyLjc0MTk4IDExLjU1NDEgNS4xNjExM0MxMS44OTYxIDUuNjY4MDcgMTEuODk2MyA2LjMzMjA2IDExLjU1MTIgNi44NDM3NUwxMS4zNjA3IDcuMTE4MTZDMTEuMDUzNSA3LjU1MTQ1IDEwLjczNzEgNy45NDI4OCAxMC40MTQ1IDguMjkzOTVMOS43MDg0IDcuNTg3ODlDOS45OTAwMSA3LjI3ODM2IDEwLjI2ODUgNi45MzExMSAxMC41NDI0IDYuNTQ0OTJMMTAuNzI1IDYuMjgwMjdDMTAuODM4OSA2LjExMTM0IDEwLjgzODkgNS44ODk2NiAxMC43MjUgNS43MjA3QzkuMjYxNzEgMy41NTI5NiA3LjY4OTk1IDIuNTAwMjQgNi4wMDAzOSAyLjVDNS41OTQ1OSAyLjUgNS4xOTUzMSAyLjU2MDUzIDQuODAzMTIgMi42ODI2Mkw0LjAyNTc4IDEuOTA1MjdDNC42NjEwMyAxLjYzNzM3IDUuMzE5IDEuNSA2LjAwMDM5IDEuNVpNNC42NDY4NyA1LjM1NDQ5QzQuNTUzMjIgNS41NDk5NyA0LjUwMDM5IDUuNzY4NjIgNC41MDAzOSA2QzQuNTAwMzkgNi44Mjg0MyA1LjE3MTk2IDcuNSA2LjAwMDM5IDcuNUM2LjIzMTQ0IDcuNDk5OTIgNi40NDg4NyA3LjQ0NTE1IDYuNjQzOTQgNy4zNTE1Nkw0LjY0Njg3IDUuMzU0NDlaTTYuMDAwMzkgMy41QzcuMzgwODYgMy41MDAyOSA4LjUwMDM5IDQuNjE5NDYgOC41MDAzOSA2QzguNTAwMzkgNi4xMTk0OSA4LjQ4ODI4IDYuMjM2NTQgOC40NzIwNyA2LjM1MTU2TDUuNjQ3ODUgMy41MjczNEM1Ljc2MzA0IDMuNTExMDggNS44ODA3MSAzLjUgNi4wMDAzOSAzLjVaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/hide
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Hide: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Input
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzkuMzEzNzEgMCAxMiAyLjY4NjI5IDEyIDZDMTIgOS4zMTM3MSA5LjMxMzcxIDEyIDYgMTJDMy42MDU0MiAxMiAxLjQ3NDI3IDEwLjU4NDIgMC41MTk1MzEgOC40NDYyOUwwLjQyNDgwNSA4LjIyMjY2TDEuMzU0NDkgNy44NTE1NkMyLjEwNjcyIDkuNzM2OTIgMy45MzU1MiAxMSA2IDExQzguNzYxNDIgMTEgMTEgOC43NjE0MiAxMSA2QzExIDMuMjM4NTggOC43NjE0MiAxIDYgMUMzLjk4Nzc1IDEuMDAwMDEgMi4yMDA3MiAyLjE5OTg3IDEuNDE1MDQgNC4wMDI5M0wxLjMzMTA1IDQuMjA2MDVMMC4zOTg0MzggMy44NDY2OEMxLjI4MjUgMS41NDgyNSAzLjQ5NjA0IDEuMjU3OWUtMDUgNiAwWk03LjY3Njc2IDUuNDY5NzNDNy45NDMwMiA1LjczNTk5IDcuOTY2ODggNi4xNTI2OCA3Ljc0OTAyIDYuNDQ2MjlMNy42NzY3NiA2LjUzMDI3TDUuMzUzNTIgOC44NTM1Mkw0LjY0NjQ4IDguMTQ2NDhMNi4yOTI5NyA2LjVIMFY1LjVINi4yOTI5N0w0LjY0NjQ4IDMuODUzNTJMNS4zNTM1MiAzLjE0NjQ4TDcuNjc2NzYgNS40Njk3M1oiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/input
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Input: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Keys
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuNjc0OCAwQzkuMjIzMzEgMCAxMC40Nzg2IDEuMjU1MzEgMTAuNDc4NiAyLjgwMzgyQzEwLjQ3ODYgNC4xOTEzOSA5LjQ3MDY3IDUuMzQzNTQgOC4xNDcwMiA1LjU2ODAzTDguMTQ3MzQgMTAuMjg5MUM4LjE0NzM0IDEwLjY1ODEgNy45NDQxIDEwLjk5NzEgNy42MTg2MiAxMS4xNzExTDcuMDQ1NTggMTEuNDc3M0M2LjQzNzI4IDExLjgwMjMgNS43MDQxOSAxMS43ODk4IDUuMTA3MzEgMTEuNDQ0M0w0LjY0NjM0IDExLjE3NzRDNC4zMzc1IDEwLjk5ODYgNC4xNDczNCAxMC42Njg4IDQuMTQ3MzQgMTAuMzEyTDQuMTQ3MzQgNS41ODkyMkMyLjc1MTAyIDUuNDI5IDEuNjY2NjMgNC4yNDMwNSAxLjY2NjYzIDIuODAzODJDMS42NjY2MyAxLjI1NTMxIDIuOTIxOTQgMCA0LjQ3MDQ0IDBINy42NzQ4Wk03LjY3NDggMUg0LjQ3MDQ0QzMuNDc0MjIgMSAyLjY2NjYzIDEuODA3NiAyLjY2NjYzIDIuODAzODJDMi42NjY2MyAzLjY3MTQyIDMuMjgyODUgNC40MDYwNiA0LjExMjc0IDQuNTcyMzdMNC4yNjEzMyA0LjU5NTczTDUuMTQ3MzQgNC42OTczOUw1LjE0NzM0IDEwLjMxMkw1LjYwODMxIDEwLjU3ODhDNS44Njg2MSAxMC43Mjk1IDYuMTgwODcgMTAuNzUzMSA2LjQ1Nzk2IDEwLjY0ODFMNi41NzQzMSAxMC41OTUzTDcuMTQ3MzQgMTAuMjg5MUw3LjE0NzI0IDguNzk1NjRINi40OTk5NkM2LjIyMzgyIDguNzk1NjQgNS45OTk5NiA4LjU3MTc4IDUuOTk5OTYgOC4yOTU2NEM1Ljk5OTk2IDguMDE5NSA2LjIyMzgyIDcuNzk1NjQgNi40OTk5NiA3Ljc5NTY0SDcuMTQ3MTdMNy4xNDcxMyA3LjE5MzQ2SDYuNDk5OTZDNi4yMjM4MiA3LjE5MzQ2IDUuOTk5OTYgNi45Njk2IDUuOTk5OTYgNi42OTM0NkM1Ljk5OTk2IDYuNDE3MzIgNi4yMjM4MiA2LjE5MzQ2IDYuNDk5OTYgNi4xOTM0Nkg3LjE0NzA2TDcuMTQ2OTYgNC43MjMzN0w3Ljk3OTgxIDQuNTgyMTFDOC44Mzk0IDQuNDM2MzIgOS40Nzg2MiAzLjY4NjcgOS40Nzg2MiAyLjgwMzgyQzkuNDc4NjIgMS44NTc0MSA4Ljc0OTc2IDEuMDgxMjMgNy44MjI3NCAxLjAwNTk4TDcuNjc0OCAxWk01LjYxMDc3IDEuNTg1ODNDNS4yNzg5NSAxLjU4NTgzIDUuMDA5OTUgMS44NTQ4MiA1LjAwOTk1IDIuMTg2NjVDNS4wMDk5NSAyLjUxODQ3IDUuMjc4OTUgMi43ODc0NiA1LjYxMDc3IDIuNzg3NDZINi41OTczOEM2LjkyOTIgMi43ODc0NiA3LjE5ODIgMi41MTg0NyA3LjE5ODIgMi4xODY2NUM3LjE5ODIgMS44NTQ4MiA2LjkyOTIgMS41ODU4MyA2LjU5NzM4IDEuNTg1ODNINS42MTA3N1oiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/keys
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Keys: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Import
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS41IDBDMTAuMjc5NyAwIDEwLjkyMDQgMC41OTQ4NDkgMTAuOTkzMiAxLjM1NTQ3TDExIDEuNVYzSDEwVjEuNUMxMCAxLjI1NDU0IDkuODIzMDkgMS4wNTAxNSA5LjU4OTg0IDEuMDA3ODFMOS41IDFIMS41QzEuMjU0NTQgMSAxLjA1MDE1IDEuMTc2OTEgMS4wMDc4MSAxLjQxMDE2TDEgMS41VjEwLjVDMSAxMC43NDU1IDEuMTc2OTEgMTAuOTQ5OSAxLjQxMDE2IDEwLjk5MjJMMS41IDExSDkuNUM5Ljc0NTQ2IDExIDkuOTQ5ODUgMTAuODIzMSA5Ljk5MjE5IDEwLjU4OThMMTAgMTAuNVY5SDExVjEwLjVDMTEgMTEuMjc5NyAxMC40MDUyIDExLjkyMDQgOS42NDQ1MyAxMS45OTMyTDkuNSAxMkgxLjVDMC43MjAzMjcgMTIgMC4wNzk1NTI0IDExLjQwNTIgMC4wMDY4MzU5NCAxMC42NDQ1TDAgMTAuNVYxLjVDMCAwLjcyMDMyNyAwLjU5NDg0OSAwLjA3OTU1MjIgMS4zNTU0NyAwLjAwNjgzNTk0TDEuNSAwSDkuNVpNNy44NTM1MiAzLjg1MzUyTDYuMjA3MDMgNS41SDEyVjYuNUg2LjIwNzAzTDcuODUzNTIgOC4xNDY0OEw3LjE0NjQ4IDguODUzNTJMNC44MjMyNCA2LjUzMDI3QzQuNTU2OTggNi4yNjQwMSA0LjUzMzEyIDUuODQ3MzIgNC43NTA5OCA1LjU1MzcxTDQuODIzMjQgNS40Njk3M0w3LjE0NjQ4IDMuMTQ2NDhMNy44NTM1MiAzLjg1MzUyWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/import
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Import: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name HomePage
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS4xOTQzNCAwLjQxOTkyNkM1LjY4NTY4IDAuMTA3MjU4IDYuMzE0MzIgMC4xMDcyNTggNi44MDU2NiAwLjQxOTkyNkwxMS4zMDU3IDMuMjgzMjFDMTEuNzM4MiAzLjU1ODQ4IDExLjk5OTkgNC4wMzYxNCAxMiA0LjU0ODgzVjEwLjVDMTIgMTEuMzI4NCAxMS4zMjg0IDEyIDEwLjUgMTJIMS41QzAuNjcxNTczIDEyIDAgMTEuMzI4NCAwIDEwLjVWNC41NDg4M0MwLjAwMDEyODIzNyA0LjAzNjE0IDAuMjYxNzg3IDMuNTU4NDggMC42OTQzMzYgMy4yODMyMUw1LjE5NDM0IDAuNDE5OTI2Wk02LjI2ODU1IDEuMjYzNjhDNi4xMDQ3OCAxLjE1OTQ2IDUuODk1MjIgMS4xNTk0NiA1LjczMTQ1IDEuMjYzNjhMMS4yMzE0NSA0LjEyNjk2QzEuMDg3MzMgNC4yMTg2NyAxLjAwMDEzIDQuMzc4MDMgMSA0LjU0ODgzVjEwLjVDMSAxMC43NzYxIDEuMjIzODYgMTEgMS41IDExSDRWNy43NUM0LjAwMDA3IDcuMzcwMzcgNC4yODI0IDcuMDU2NSA0LjY0ODQ0IDcuMDA2ODRMNC43NSA3SDcuMjVDNy42Mjk3IDcgNy45NDM1IDcuMjgyMzcgNy45OTMxNiA3LjY0ODQ0TDggNy43NVYxMUgxMC41QzEwLjc3NjEgMTEgMTEgMTAuNzc2MSAxMSAxMC41VjQuNTQ4ODNDMTAuOTk5OSA0LjM3ODAzIDEwLjkxMjcgNC4yMTg2NyAxMC43Njg2IDQuMTI2OTZMNi4yNjg1NSAxLjI2MzY4Wk01IDExSDdWOEg1VjExWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/home-page
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const HomePage: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Information
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzkuMzEzNzEgMCAxMiAyLjY4NjI5IDEyIDZDMTIgOS4zMTM3MSA5LjMxMzcxIDEyIDYgMTJDMi42ODYyOSAxMiAwIDkuMzEzNzEgMCA2QzAgMi42ODYyOSAyLjY4NjI5IDAgNiAwWk02IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFaTTYuNSA5LjVINS41VjUuOTk5MDJMNSA2VjVINi41VjkuNVpNNi41IDQuNUg1LjVWM0g2LjVWNC41WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/information
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Information: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Label
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuNDk5OSAwQzExLjMyODIgMC4wMDAxMjg4MzYgMTEuOTk5OSAwLjY3MTY1MiAxMS45OTk5IDEuNVY0LjcyMjY2QzExLjk5OTkgNS4xMTkyOCAxMS44NDIyIDUuNTAwMTUgMTEuNTYyNCA1Ljc4MTI1TDUuODE5MiAxMS41NTE4QzUuMjM1MjUgMTIuMTM4MiA0LjI4NjM0IDEyLjE0MDcgMy42OTkwOCAxMS41NTc2TDAuNDU5ODIzIDguMzM5ODRDLTAuMTI4MjcxIDcuNzU1MjYgLTAuMTMwNDE1IDYuODA0MDkgMC40NTQ5NCA2LjIxNjhMNi4yMTY2NiAwLjQ0MDQzQzYuNDk3OTcgMC4xNTg0MzYgNi44ODA4NSAwLjAwMDEwMzg5IDcuMjc5MTYgMEgxMC40OTk5Wk03LjI3OTE2IDFDNy4xNDY1NCAxLjAwMDEgNy4wMTgzNiAxLjA1MjYzIDYuOTI0NjcgMS4xNDY0OEwxLjE2Mjk1IDYuOTIyODVDMC45NjgwNTQgNy4xMTg2IDAuOTY5MDIyIDcuNDM2MDYgMS4xNjQ5IDcuNjMwODZMNC40MDMxOCAxMC44NDc3QzQuNTk4ODggMTEuMDQyMSA0LjkxNTUyIDExLjA0MTEgNS4xMTAyMSAxMC44NDU3TDEwLjg1NDQgNS4wNzUyQzEwLjk0NzQgNC45ODE1MyAxMC45OTk5IDQuODU0NjcgMTAuOTk5OSA0LjcyMjY2VjEuNUMxMC45OTk5IDEuMjIzOTQgMTAuNzc1OSAxLjAwMDEzIDEwLjQ5OTkgMUg3LjI3OTE2Wk03Ljc0OTg2IDIuNUM4LjcxNjM2IDIuNSA5LjQ5OTg2IDMuMjgzNSA5LjQ5OTg2IDQuMjVDOS40OTk4NiA1LjIxNjUgOC43MTYzNiA2IDcuNzQ5ODYgNkM2Ljc4MzQ2IDUuOTk5ODkgNS45OTk4NiA1LjIxNjQzIDUuOTk5ODYgNC4yNUM1Ljk5OTg2IDMuMjgzNTcgNi43ODM0NiAyLjUwMDExIDcuNzQ5ODYgMi41Wk03Ljc0OTg2IDMuNUM3LjMzNTc1IDMuNTAwMTEgNi45OTk4NiAzLjgzNTg2IDYuOTk5ODYgNC4yNUM2Ljk5OTg2IDQuNjY0MTQgNy4zMzU3NSA0Ljk5OTg5IDcuNzQ5ODYgNUM4LjE2NDA4IDUgOC40OTk4NiA0LjY2NDIxIDguNDk5ODYgNC4yNUM4LjQ5OTg2IDMuODM1NzkgOC4xNjQwOCAzLjUgNy43NDk4NiAzLjVaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/label
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Label: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name LevelParent
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEgMEMxMS41NTIzIDAgMTIgMC40NDc3MTUgMTIgMVYzQzEyIDMuNTUyMjggMTEuNTUyMyA0IDExIDRIMlY2QzIgNi4yNDU0NiAyLjE3NjkxIDYuNDQ5ODUgMi40MTAxNiA2LjQ5MjE5TDIuNSA2LjVIOC41ODY5MUM4Ljc5Mjk3IDUuOTE3NjYgOS4zNDcwNyA1LjUgMTAgNS41QzEwLjgyODQgNS41IDExLjUgNi4xNzE1NyAxMS41IDdDMTEuNSA3LjgyODQzIDEwLjgyODQgOC41IDEwIDguNUM5LjM0NzA3IDguNSA4Ljc5Mjk3IDguMDgyMzQgOC41ODY5MSA3LjVIMi41QzIuMzI0NSA3LjUgMi4xNTY1MyA3LjQ2ODQ3IDIgNy40MTMwOVY5LjVDMiA5Ljc0NTQ2IDIuMTc2OTEgOS45NDk4NSAyLjQxMDE2IDkuOTkyMTlMMi41IDEwSDguNTg2OTFDOC43OTI5NyA5LjQxNzY2IDkuMzQ3MDcgOSAxMCA5QzEwLjgyODQgOSAxMS41IDkuNjcxNTcgMTEuNSAxMC41QzExLjUgMTEuMzI4NCAxMC44Mjg0IDEyIDEwIDEyQzkuMzQ3MDcgMTIgOC43OTI5NyAxMS41ODIzIDguNTg2OTEgMTFIMi41QzEuNzIwMzMgMTEgMS4wNzk1NSAxMC40MDUyIDEuMDA2ODQgOS42NDQ1M0wxIDkuNVY0QzAuNDQ3NzE1IDQgMCAzLjU1MjI4IDAgM1YxQzAgMC40NDc3MTUgMC40NDc3MTUgMCAxIDBIMTFaTTEwIDEwQzkuNzIzODYgMTAgOS41IDEwLjIyMzkgOS41IDEwLjVDOS41IDEwLjc3NjEgOS43MjM4NiAxMSAxMCAxMUMxMC4yNzYxIDExIDEwLjUgMTAuNzc2MSAxMC41IDEwLjVDMTAuNSAxMC4yMjM5IDEwLjI3NjEgMTAgMTAgMTBaTTEwIDYuNUM5LjcyMzg2IDYuNSA5LjUgNi43MjM4NiA5LjUgN0M5LjUgNy4yNzYxNCA5LjcyMzg2IDcuNSAxMCA3LjVDMTAuMjc2MSA3LjUgMTAuNSA3LjI3NjE0IDEwLjUgN0MxMC41IDYuNzIzODYgMTAuMjc2MSA2LjUgMTAgNi41Wk0xIDNIMTFWMUgxVjNaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/level-parent
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const LevelParent: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name LeftOpen
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEgMTFIMVYxMEgxMVYxMVpNMTAuNjc2OCA1LjQ2OTczQzEwLjk0MyA1LjczNTk5IDEwLjk2NjkgNi4xNTI2OCAxMC43NDkgNi40NDYyOUwxMC42NzY4IDYuNTMwMjdMOC4zNTM1MiA4Ljg1MzUyTDcuNjQ2NDggOC4xNDY0OEw5Ljc5Mjk3IDZMNy42NDY0OCAzLjg1MzUyTDguMzUzNTIgMy4xNDY0OEwxMC42NzY4IDUuNDY5NzNaTTggNi41SDFWNS41SDhWNi41Wk0xMSAySDFWMUgxMVYyWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/left-open
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const LeftOpen: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name LevelSame
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEgMEMxMS41NTIzIDAgMTIgMC40NDc3MTUgMTIgMVY0QzEyIDQuNTUyMjggMTEuNTUyMyA1IDExIDVINEMzLjQ0NzcyIDUgMyA0LjU1MjI4IDMgNFYzSDIuNUMyLjI1NDU0IDMgMi4wNTAxNSAzLjE3NjkxIDIuMDA3ODEgMy40MTAxNkwyIDMuNUwyLjAwMDk4IDQuNTg1OTRDMi41ODMwMiA0Ljc5MjE1IDMgNS4zNDcyOCAzIDZDMyA2LjY1MjcyIDIuNTgzMDIgNy4yMDc4NSAyLjAwMDk4IDcuNDE0MDZMMiA4LjVDMiA4Ljc0NTQ2IDIuMTc2OTEgOC45NDk4NSAyLjQxMDE2IDguOTkyMTlMMi41IDlIM1Y4QzMgNy40NDc3MiAzLjQ0NzcyIDcgNCA3SDExQzExLjU1MjMgNyAxMiA3LjQ0NzcyIDEyIDhWMTFDMTIgMTEuNTUyMyAxMS41NTIzIDEyIDExIDEySDRDMy40NDc3MiAxMiAzIDExLjU1MjMgMyAxMVYxMEgyLjVDMS43MjAzMyAxMCAxLjA3OTU1IDkuNDA1MTUgMS4wMDY4NCA4LjY0NDUzTDEgOC41VjcuNDE1MDRDMC40MTczNCA3LjIwOTE2IDAgNi42NTMxNiAwIDZDMCA1LjM0Njg0IDAuNDE3MzQgNC43OTA4NCAxIDQuNTg0OTZWMy41QzEgMi43MjAzMyAxLjU5NDg1IDIuMDc5NTUgMi4zNTU0NyAyLjAwNjg0TDIuNSAySDNWMUMzIDAuNDQ3NzE1IDMuNDQ3NzIgMCA0IDBIMTFaTTQgMTFIMTFWOEg0VjExWk0xLjUgNS41QzEuMjIzODYgNS41IDEgNS43MjM4NiAxIDZDMSA2LjI3NjE0IDEuMjIzODYgNi41IDEuNSA2LjVDMS43NzYxNCA2LjUgMiA2LjI3NjE0IDIgNkMyIDUuNzIzODYgMS43NzYxNCA1LjUgMS41IDUuNVpNNCA0SDExVjFINFY0WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/level-same
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const LevelSame: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name LeftPackup
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEgMTFIMVYxMEgxMVYxMVpNNC4zNTM1MiAzLjg1MzUyTDIuMjA3MDMgNkw0LjM1MzUyIDguMTQ2NDhMMy42NDY0OCA4Ljg1MzUyTDEuMzIzMjQgNi41MzAyN0MxLjA1Njk4IDYuMjY0MDEgMS4wMzMxMiA1Ljg0NzMyIDEuMjUwOTggNS41NTM3MUwxLjMyMzI0IDUuNDY5NzNMMy42NDY0OCAzLjE0NjQ4TDQuMzUzNTIgMy44NTM1MlpNMTEgNi41SDRWNS41SDExVjYuNVpNMTEgMkgxVjFIMTFWMloiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/left-packup
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const LeftPackup: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Lock
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzcuNjU2ODUgMCA5IDEuMzQzMTUgOSAzVjRIOS41QzEwLjMyODQgNCAxMSA0LjY3MTU3IDExIDUuNVYxMC41QzExIDExLjMyODQgMTAuMzI4NCAxMiA5LjUgMTJIMi41QzEuNjcxNTcgMTIgMSAxMS4zMjg0IDEgMTAuNVY1LjVDMSA0LjY3MTU3IDEuNjcxNTcgNCAyLjUgNEgzVjNDMyAxLjM0MzE1IDQuMzQzMTUgMCA2IDBaTTIuNSA1QzIuMjIzODYgNSAyIDUuMjIzODYgMiA1LjVWMTAuNUMyIDEwLjc3NjEgMi4yMjM4NiAxMSAyLjUgMTFIOS41QzkuNzc2MTQgMTEgMTAgMTAuNzc2MSAxMCAxMC41VjUuNUMxMCA1LjIyMzg2IDkuNzc2MTQgNSA5LjUgNUgyLjVaTTYuNSA5SDUuNVY3SDYuNVY5Wk02IDFDNC44OTU0MyAxIDQgMS44OTU0MyA0IDNWNEg4VjNDOCAxLjk0NTcgNy4xODQxOSAxLjA4MjI5IDYuMTQ5NDEgMS4wMDU4Nkw2IDFaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/lock
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Lock: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Lampbulb
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAyQzguMjE1NzMgMiAxMCAzLjg4OTQgMTAgNi4yMDYwNUM5Ljk5OTk1IDcuNTIxMzggOS40MTkzNyA4LjczNTQyIDguNDUzMTIgOS41MjUzOUw4LjA3NTIgMTEuMjE4OEM3Ljk4MTM0IDExLjYzNzMgNy42MzI3MyAxMS45NDQ4IDcuMjE0ODQgMTEuOTkzMkw3LjA5OTYxIDEySDQuOTAxMzdDNC40MzIzMiAxMS45OTk5IDQuMDI2IDExLjY3MzggMy45MjQ4IDExLjIxNThMMy41NTI3MyA5LjUzMjIzTDMuNTIzNDQgOS41MDg3OUMyLjYzMDE1IDguNzY3OTMgMi4wNzMgNy42NjA0MyAyLjAwNjg0IDYuNDQ5MjJMMiA2LjIwNjA1QzIgMy44ODk0IDMuNzg0MjcgMiA2IDJaTTYgM0M0LjM0OTc0IDMgMyA0LjQyOTMxIDMgNi4yMDYwNUMzLjAwMDA1IDcuMjc1NjIgMy40OTMzIDguMjUzNCA0LjI5OTggOC44NDc2Nkw0LjQ1MTE3IDguOTU4OThMNC45MDEzNyAxMUg3LjA5OTYxTDcuNTU4NTkgOC45NTIxNUw3LjcwODAxIDguODQxOEM4LjUxMDEzIDguMjQ2ODUgOC45OTk5NSA3LjI3MjEgOSA2LjIwNjA1QzkgNC40MjkzMSA3LjY1MDI2IDMgNiAzWiIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBkPSJNNyA5VjEwSDVWOUg3WiIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBkPSJNMS41IDZWN0gwVjZIMS41WiIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBkPSJNMTIgNlY3SDEwLjVWNkgxMloiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTYuNSAwVjEuNUg1LjVWMEg2LjVaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik0xMS4wMzg5IDIuNDU3NjZMOS45NzgyMyAzLjUxODMyTDkuMjcxMTMgMi44MTEyMUwxMC4zMzE4IDEuNzUwNTVMMTEuMDM4OSAyLjQ1NzY2WiIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBkPSJNMC42MDE5NzUgMi40NTc2NkwxLjY2MjY0IDMuNTE4MzJMMi4zNjk3NCAyLjgxMTIxTDEuMzA5MDggMS43NTA1NUwwLjYwMTk3NSAyLjQ1NzY2WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/lampbulb
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Lampbulb: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Loading
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBvcGFjaXR5PSIwLjEiIGQ9Ik02IDBDNi41MzA0MSAwIDcuMDUxOTIgMC4wNjg5NTgxIDcuNTU0NzIgMC4yMDM1MTRMNy44NTQwOCAwLjI5MjA5Mkw3LjU0NTMyIDEuMjQzMjNDNy4xNDk3MyAxLjExNDgyIDYuNzM4MTMgMS4wMzYyIDYuMzE3MjcgMS4wMDk4OUw2IDFWMFoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNNy44NTQwOCAwLjI5MjA5MUM4LjM1NDY2IDAuNDU0NTkxIDguODMwMiAwLjY4MjMxMSA5LjI2OTQ0IDAuOTY4MjQ5TDkuNTI4NTMgMS4xNDY3NEw4LjkzOTg3IDEuOTU1MTJDOC42MDA0NSAxLjcwNzk2IDguMjMxNjEgMS41MDQ1MyA3Ljg0MTY0IDEuMzQ5OTRMNy41NDUzMiAxLjI0MzIzTDcuODU0MDggMC4yOTIwOTFaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIG9wYWNpdHk9IjAuMyIgZD0iTTkuNTI4NTQgMS4xNDY3NEM5Ljk1MjA3IDEuNDU1MTYgMTAuMzMzNiAxLjgxNzY0IDEwLjY2MzEgMi4yMjQwOUwxMC44NTQ1IDIuNDczMTZMMTAuMDQ1OSAzLjA2MTUzQzkuNzk5MDggMi43MjIzMyA5LjUxMDYxIDIuNDE1MzEgOS4xODgwNyAyLjE0ODAyTDguOTM5ODggMS45NTUxM0w5LjUyODU0IDEuMTQ2NzRaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIG9wYWNpdHk9IjAuNCIgZD0iTTEwLjg1NDUgMi40NzMxNUMxMS4xNjI3IDIuODk2NjYgMTEuNDE0MiAzLjM1ODU2IDExLjYwMjIgMy44NDc2NUwxMS43MDc0IDQuMTQ0MjhMMTAuNzU2MyA0LjQ1MzMxQzEwLjYyNjYgNC4wNTQxMyAxMC40NDcgMy42NzM5NSAxMC4yMjI2IDMuMzIxMDFMMTAuMDQ1OSAzLjA2MTUzTDEwLjg1NDUgMi40NzMxNVoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNMTEuNzA3NCA0LjE0NDI4QzExLjg2ODMgNC42Mzk2MSAxMS45NjQyIDUuMTU1NjcgMTEuOTkxNyA1LjY4MjYxTDEyIDZIMTFDMTEgNS41NzQ1NSAxMC45NDcgNS4xNTY2NyAxMC44NDM0IDQuNzUzMTVMMTAuNzU2MyA0LjQ1MzMxTDExLjcwNzQgNC4xNDQyOFoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggb3BhY2l0eT0iMC42IiBkPSJNMTIgNkMxMiA2LjUyOTY5IDExLjkzMTIgNy4wNTA1MiAxMS43OTcgNy41NTI2OUwxMS43MDg3IDcuODUxNjhMMTAuNzU3NCA3LjU0MzMzQzEwLjg4NTUgNy4xNDgyMSAxMC45NjM5IDYuNzM3MTQgMTAuOTkwMSA2LjMxNjg1TDExIDZIMTJaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIG9wYWNpdHk9IjAuNyIgZD0iTTEwLjc1NzQgNy41NDMzM0wxMS43MDg3IDcuODUxNjhDMTEuNTQ2MyA4LjM1MjcgMTEuMzE4NSA4LjgyODY2IDExLjAzMjUgOS4yNjgyN0wxMC44NTM5IDkuNTI3NTlMMTAuMDQ1NCA4LjkzOTA5QzEwLjI5MjcgOC41OTkzOCAxMC40OTYyIDguMjMwMjIgMTAuNjUwNyA3LjgzOTlMMTAuNzU3NCA3LjU0MzMzWiIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBvcGFjaXR5PSIwLjgiIGQ9Ik0xMC4wNDU1IDguOTM5MDlMMTAuODUzOSA5LjUyNzU5QzEwLjU0NTYgOS45NTExOCAxMC4xODMyIDEwLjMzMjggOS43NzY4IDEwLjY2MjRMOS41Mjc3NyAxMC44NTM4TDguOTM5MjQgMTAuMDQ1M0M5LjI3ODQgOS43OTg0NSA5LjU4NTM4IDkuNTA5OTIgOS44NTI2IDkuMTg3MzFMMTAuMDQ1NSA4LjkzOTA5WiIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBvcGFjaXR5PSIwLjkiIGQ9Ik04LjkzOTIzIDEwLjA0NTNMOS41Mjc3NiAxMC44NTM4QzkuMTAzMTggMTEuMTYyOSA4LjY0MDAyIDExLjQxNTEgOC4xNDk1NCAxMS42MDMzTDcuODUyMDYgMTEuNzA4Nkw3LjU0MzY0IDEwLjc1NzNDNy45NDM5NyAxMC42Mjc1IDguMzI1MjEgMTAuNDQ3NSA4LjY3OTA4IDEwLjIyMjVMOC45MzkyMyAxMC4wNDUzWiIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBkPSJNNy41NDM2NSAxMC43NTczTDcuODUyMDcgMTEuNzA4NkM3LjM1NzY1IDExLjg2ODkgNi44NDI2MSAxMS45NjQ0IDYuMzE2NzQgMTEuOTkxOEw2IDEyVjExQzYuNDI0NTggMTEgNi44NDE2MiAxMC45NDcyIDcuMjQ0MzcgMTAuODQ0MUw3LjU0MzY1IDEwLjc1NzNaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIG9wYWNpdHk9IjAuMSIgZD0iTTQuNDUzNTIgMTAuNzU2NEM0Ljg0OTM4IDEwLjg4NSA1LjI2MTI5IDEwLjk2MzcgNS42ODI0NyAxMC45OTAxTDUuOTk5OTkgMTFWMTJDNS40NjkxNyAxMiA0Ljk0NzI1IDExLjkzMDkgNC40NDQxIDExLjc5NjJMNC4xNDQ1MyAxMS43MDc1TDQuNDUzNTIgMTAuNzU2NFoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggb3BhY2l0eT0iMC4yIiBkPSJNMy4wNTg5IDEwLjA0NEMzLjM5ODMyIDEwLjI5MTMgMy43NjcxNyAxMC40OTQ5IDQuMTU3MTggMTAuNjQ5Nkw0LjQ1MzUzIDEwLjc1NjRMNC4xNDQ1NCAxMS43MDc1QzMuNjQzOSAxMS41NDQ4IDMuMTY4MzMgMTEuMzE2OSAyLjcyOTA5IDExLjAzMDhMMi40NyAxMC44NTIyTDMuMDU4OSAxMC4wNDRaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIG9wYWNpdHk9IjAuMyIgZD0iTTEuOTUzODQgOC45MzgxQzIuMjAwNDcgOS4yNzcxIDIuNDg4NjkgOS41ODM5NiAyLjgxMDk1IDkuODUxMTVMMy4wNTg5MSAxMC4wNDRMMi40NzAwMSAxMC44NTIyQzIuMDQ2ODYgMTAuNTQzOSAxLjY2NTY0IDEwLjE4MTUgMS4zMzY0MSA5Ljc3NTMzTDEuMTQ1MiA5LjUyNjQxTDEuOTUzODQgOC45MzgxWiIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBvcGFjaXR5PSIwLjQiIGQ9Ik0xLjI0Mzk0IDcuNTQ3NDlDMS4zNzM2MSA3Ljk0NjMxIDEuNTUzMDkgOC4zMjYxNiAxLjc3NzM0IDguNjc4ODNMMS45NTM4NCA4LjkzODFMMS4xNDUyIDkuNTI2NDFDMC44MzczMTggOS4xMDMyMiAwLjU4NTk0NSA4LjY0MTcxIDAuMzk4MDIyIDguMTUzMDVMMC4yOTI5MzggNy44NTY2OEwxLjI0Mzk0IDcuNTQ3NDlaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIG9wYWNpdHk9IjAuNSIgZD0iTTEgNkMxIDYuNDI1NjggMS4wNTMwOSA2Ljg0Mzc4IDEuMTU2NzUgNy4yNDc1TDEuMjQzOTQgNy41NDc0OUwwLjI5MjkzOCA3Ljg1NjY4QzAuMTMxODE2IDcuMzYxMTEgMC4wMzU4MDE0IDYuODQ0NzkgMC4wMDgyNzIyNiA2LjMxNzU2TDAgNkgxWiIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBvcGFjaXR5PSIwLjYiIGQ9Ik0wLjI5MTA5NyA0LjE0ODk5TDEuMjQyNCA0LjQ1NzIzQzEuMTE0NDIgNC44NTIyMSAxLjAzNjA3IDUuMjYzMTMgMS4wMDk4NSA1LjY4MzI3TDEgNkgwQzAgNS40NzA1MSAwLjA2ODcxOTcgNC45NDk4NyAwLjIwMjgxOSA0LjQ0Nzg3TDAuMjkxMDk3IDQuMTQ4OTlaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIG9wYWNpdHk9IjAuNyIgZD0iTTEuMTQ0NzYgMi40NzQyMUwxLjk1MzQ3IDMuMDYyNDFDMS43MDY1MiAzLjQwMTk0IDEuNTAzMzIgMy43NzA4NSAxLjM0ODk1IDQuMTYwODhMMS4yNDI0MSA0LjQ1NzIzTDAuMjkxMTA3IDQuMTQ4OTlDMC40NTMzMjMgMy42NDgzNiAwLjY4MDc2IDMuMTcyNzQgMC45NjY0MjYgMi43MzMzOEwxLjE0NDc2IDIuNDc0MjFaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIG9wYWNpdHk9IjAuOCIgZD0iTTIuNDcwMzEgMS4xNDc1OEwzLjA1OTE2IDEuOTU1ODNDMi43MjAxMiAyLjIwMjgzIDIuNDEzMjkgMi40OTE0NiAyLjE0NjIgMi44MTQxNEwxLjk1MzQ2IDMuMDYyNDFMMS4xNDQ3NCAyLjQ3NDIxQzEuNDUyOSAyLjA1MDUzIDEuODE1MTQgMS42Njg3OSAyLjIyMTM3IDEuMzM5MDhMMi40NzAzMSAxLjE0NzU4WiIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBvcGFjaXR5PSIwLjkiIGQ9Ik00LjE0MzE4IDAuMjkyOTc2TDQuNDUyNCAxLjI0Mzk3QzQuMDUyNzQgMS4zNzM5MiAzLjY3MjE0IDEuNTUzODkgMy4zMTg4NiAxLjc3ODhMMy4wNTkxNiAxLjk1NTgyTDIuNDcwMzEgMS4xNDc1OEMyLjg5NDE3IDAuODM4NzcgMy4zNTY1NSAwLjU4NjY4MSAzLjg0NjIgMC4zOTgzMDJMNC4xNDMxOCAwLjI5Mjk3NloiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTYgMFYxQzUuNTc0MjkgMSA1LjE1NjE2IDEuMDUzMSA0Ljc1MjQxIDEuMTU2NzdMNC40NTI0MSAxLjI0Mzk3TDQuMTQzMTkgMC4yOTI5OEM0LjYzODc5IDAuMTMxODM1IDUuMTU1MTUgMC4wMzU4MDY2IDUuNjgyNDEgMC4wMDgyNzM0Nkw2IDBaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/loading
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Loading: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name LogoDingding
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuMjQzOSAwLjU4OTE0N0MxLjI1NDY0IDAuNTEwMTE4IDEuMjc5ODIgMC40MjE4ODggMS4zMzU3NSAwLjMyNjE1NUMxLjQ4MzA5IDAuMDczOTYyNyAxLjc3MTUgLTAuMDYxMTU5IDIuMDk0ODUgMC4wMjY5NzM5TDIuMTc5NyAwLjA1ODU5NzlMMy42NDc0NSAwLjc0MzlDNC4wNzMwNCAwLjkzODYwNiA0LjQ5OTg2IDEuMTMwMzYgNC45MTY3OCAxLjMxMzI4TDUuOTg1MTcgMS43NzA0NUw2LjU1MTc4IDIuMDAwNkw2LjgxMjQ4IDIuMTAyMzdMOC43MTI3OCAyLjgwMzcxTDkuMDAwMTggMi45MjA4M0MxMC4xMjg2IDMuNDAzNjggMTAuNjM4OCAzLjg5OTczIDEwLjQ1MzMgNC43MjAxN0MxMC40MjczIDQuODM3NzQgMTAuMzc1NSA0Ljk3NzggMTAuMjk0IDUuMTYyMTZMMTAuMjI5MiA1LjMwMzU3QzEwLjIwNiA1LjM1Mjc1IDEwLjE4MTQgNS40MDM5NyAxMC4xNTU0IDUuNDU3MThMOS45ODE3MiA1Ljc5OTk3TDkuNzc0OTcgNi4xODg1M0w5LjQzMDQgNi44MTAyTDkuMTcyMDcgNy4yNjIzN0w5LjA4Nzk2IDcuNDA1MjdMOS41NTAxMiA3LjQwNTM5QzkuNTg2MjQgNy40MTU4MSA5LjYxOTA4IDcuNDI1MjggOS42NDkwMiA3LjQzNDE5TDkuNzk2OTYgNy40ODM5OEM5LjkzNjE0IDcuNTQxMzYgOS45NzA5NSA3LjYwODg4IDEwLjAzMzMgNy44MTg0OEwxMC4wNjIxIDcuOTE3MzlDMTAuMDQ1NCA4LjA3NjM5IDEwLjA0NTQgOC4wNzYzOSA5Ljk2NjQzIDguMjE1NDJMNy40NDIxNyAxMS43NDE1TDcuMjgwNjkgMTEuODY1NUM3LjE0NjcyIDExLjk2MDcgNy4wNzgxNCAxMS45NzIgNi45MjA2NiAxMS45MjUxTDYuNzI3ODIgMTEuODU5OEM2LjYyMzQzIDExLjc0NjMgNi41NzEyMyAxMS42ODk2IDYuNTQ2MjMgMTEuNjIyN0M2LjUyMTI0IDExLjU1NTggNi41MjM0NCAxMS40Nzg3IDYuNTI3ODUgMTEuMzI0Nkw2Ljk0OTk2IDkuNTU0MjdMNi41MzkwMSA5LjU1NDg3TDYuMzU1ODkgOS40OTkzOEM2LjE4MjQxIDkuNDM5OTkgNi4xMzYyOCA5LjM4NDU3IDYuMDc4OTQgOS4xNzg1TDYuMDMwMTQgOC45ODcwM0w2LjAzOTc4IDguOTI5MjJMNi4yMTQ5NiA4LjE1NDI3TDYuMDE2MTMgOC4yMjAxMkM1Ljk5MDk5IDguMjMwNTUgNS45NjA2MSA4LjI0MTAyIDUuOTI1MTMgOC4yNTA3Nkw1Ljg2ODEgOC4yNjQ3MUM1LjMxMTIxIDguMzg1NTUgNC42MDc0NiA4LjE3MzMgMy44NTU5OCA3LjQ1NDE4TDMuNzc4MzggNy4zNzgwN0MzLjYxOTQ1IDcuMjE2MTQgMy40ODA1MSA3LjA0NTc4IDMuMzg1NDYgNi44NjU0M0MzLjI2OTkzIDYuNjQ2MjQgMy4yMzAwNiA2LjQxMDggMy4yOTc5NiA2LjIwMjI3TDMuMjMwOTYgNi4xNzAwOUMyLjYzNTY1IDUuODQxMyAyLjA4NzYzIDUuMDMwNjYgMS44OTc1OCA0LjI0MDk4TDEuODczOTYgNC4xMzAyN0wxLjg2Mjg4IDQuMDk4NTZDMS44NDM5MyA0LjA0MDQ2IDEuODMwMyAzLjk4MDU0IDEuODI0NTQgMy45MTcxN0wxLjgyMjEzIDMuODE5MzJDMS44Mjk4NyAzLjYzMDI4IDEuODkxNzUgMy40ODU1NiAxLjk5MzgyIDMuMzgzNTlMMi4wMDg5NiAzLjM2OTI3TDEuOTUzOTUgMy4yOTY0M0MxLjYwMTc1IDIuNzgxMTYgMS4yMzIyOSAxLjU3NTgyIDEuMjM3MDEgMC43NTgwNThMMS4yNDM5IDAuNTg5MTQ3Wk0yLjI3MTk2IDEuMjA5MjdMMi4yODA0MyAxLjI2MzE1QzIuMzgxOTUgMS44NTIyNSAyLjYyNzg0IDIuNTU1MzYgMi43OTI1OCAyLjc1MDE2TDMuMTgyOCAyLjkxMDI4TDQuMTEyNzMgMy4yNjQ0OUw1LjAxNjE4IDMuNTgyNjRMNS45NDIzOSAzLjg5NTA3TDYuNTY1NDEgNC4wOTkyMkw2LjMwODQzIDUuMDY0MjlMNC44NTUwNCA0Ljc0ODRMMy44MjYxMSA0LjUxNTU4TDMuMTMyOTEgNC4zNDkzM0wyLjk2Nzk2IDQuMzA2MjdDMy4xNjAyNiA0Ljc3NDU1IDMuNDkzMjYgNS4yMDIyIDMuNzE2NDcgNS4zMDMyNEwzLjc3OTg4IDUuMzIzNDZDMy43OTc1MyA1LjMyNjM3IDMuODE4NDQgNS4zMjkxOCAzLjg0MjQ2IDUuMzMxODdMNC4wMjI2IDUuMzQ2NjZMNC40MTY1IDUuMzYzNDZMNC45MzY4MiA1LjM3MzNMNS43NjEwNiA1LjM3NTM5TDYuNDUxMzggNS4zNjkxMUw2LjUxOTc0IDYuMzY1MzdMNS41OTA4NiA2LjQ4ODk5TDQuNDY2OTYgNi42NTEyN0w0LjUzMzI5IDYuNzE4NEw0LjY3MDkyIDYuODQ1MDZDNS4xMjM2NyA3LjI0MjkxIDUuNDQ5NTMgNy4zMzIyNiA1LjY1NjAzIDcuMjg3NDVMNS45NTcxNCA3LjE4ODAxQzYuMjUwNjQgNy4wOTM5MyA2LjUxOTMzIDcuMDE2NTggNi43NjkxOSA2Ljk1MzIzTDcuNTYwODggNi43NTI1MUw3LjE0Nzk2IDguNTU0MjdMNy41NzE1OCA4LjU1NTJMNy42ODc1NCA4LjU2ODg3TDcuODUwNDMgOC42NjM1MkM4LjAwNDE1IDguNzU5MDEgOC4wNDAwNCA4LjgxNzQxIDguMDU1NzkgOC45OTc2OUw4LjA2Mzk2IDkuMTU0MjdMOC41OTk5NiA4LjQwNTI3TDguNDQwNzMgOC40MDUzOUM4LjM2ODY2IDguNDA1MzkgOC4yOTc0MSA4LjM5MjkzIDguMjMwMDUgOC4zNjg4MUw4LjEzMjMzIDguMzI0QzcuODMyMSA4LjE1MzY4IDcuNzI2NzkgNy43NzIyMiA3Ljg5NzExIDcuNDcxOTlMOC4wODAyOSA3LjE0OTI5TDguNTU5NCA2LjMxODkyTDguODAzOTQgNS44ODAyN0w4Ljk5NzYzIDUuNTIyNTNMOS4xNzY4OSA1LjE3ODM0TDkuMzIxMzggNC44ODM5Nkw5LjQxNzQ0IDQuNjY5MDZMOS40NjYzMSA0LjU0MDcxTDkuNDc3MzUgNC41MDIwNkM5LjUxMjM4IDQuMzQ3MTEgOS4zMjc2OCA0LjE2MTQ5IDguNzM1NTMgMy44OTYyMUw4LjQzMjYxIDMuNzY3OTRMOC4yMDA1NCAzLjY3ODg1TDYuNTUxNzUgMy4wNzI4TDYuMTg1MSAyLjkzMDk1TDUuNjAzNyAyLjY5NDg0TDQuNzQzNDQgMi4zMjg3OUwzLjg3NjQ1IDEuOTQ1NThDMy40NDc4MyAxLjc1MzI0IDMuMDE1MTkgMS41NTUxMiAyLjU4OTQ2IDEuMzU3TDIuMjcxOTYgMS4yMDkyN1oiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/logo-dingding
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const LogoDingding: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name LevelChildren
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMS41IDBDMi4zMjg0MyAwIDMgMC42NzE1NzMgMyAxLjVDMyAyLjE1MjgxIDIuNTgyMTggMi43MDU5NyAyIDIuOTEyMTFWNEMyIDQuMjQ1NDYgMi4xNzY5MSA0LjQ0OTg1IDIuNDEwMTYgNC40OTIxOUwyLjUgNC41SDRWNEM0IDMuNDQ3NzIgNC40NDc3MiAzIDUgM0gxMUMxMS41NTIzIDMgMTIgMy40NDc3MiAxMiA0VjZDMTIgNi41NTIyOCAxMS41NTIzIDcgMTEgN0g1QzQuNDQ3NzIgNyA0IDYuNTUyMjggNCA2VjUuNUgyLjVDMi4zMjQ1IDUuNSAyLjE1NjUzIDUuNDY4NDcgMiA1LjQxMzA5VjkuNUMyIDkuNzQ1NDYgMi4xNzY5MSA5Ljk0OTg1IDIuNDEwMTYgOS45OTIxOUwyLjUgMTBINFY5QzQgOC40NDc3MiA0LjQ0NzcyIDggNSA4SDExQzExLjU1MjMgOCAxMiA4LjQ0NzcyIDEyIDlWMTFDMTIgMTEuNTUyMyAxMS41NTIzIDEyIDExIDEySDVDNC40NDc3MiAxMiA0IDExLjU1MjMgNCAxMUgyLjVDMS43MjAzMyAxMSAxLjA3OTU1IDEwLjQwNTIgMS4wMDY4NCA5LjY0NDUzTDEgOS41VjIuOTEyMTFDMC40MTc4MjEgMi43MDU5NyAwIDIuMTUyODEgMCAxLjVDMCAwLjY3MTU3MyAwLjY3MTU3MyAwIDEuNSAwWk01IDExSDExVjlINVYxMVpNNSA2SDExVjRINVY2Wk0xLjUgMUMxLjIyMzg2IDEgMSAxLjIyMzg2IDEgMS41QzEgMS43NzYxNCAxLjIyMzg2IDIgMS41IDJDMS43NzYxNCAyIDIgMS43NzYxNCAyIDEuNUMyIDEuMjIzODYgMS43NzYxNCAxIDEuNSAxWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/level-children
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const LevelChildren: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name LogoKK
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS4wNzgxMiAxLjUwMTk2QzkuMzIzNDUgMS41MDgxOSA5LjUyMzEyIDEuNjkwNjEgOS41NTk1NyAxLjkyNDgxTDkuNTY1NDMgMi4wMTQ2Nkw5LjUyNjM3IDMuNTU0N0M5LjY1MzQxIDMuNTU0NzggOS43NzA5MiAzLjU0MTY1IDkuODc4OTEgMy41MTQ2NkMxMC4xMDkgMy40NTcwNyAxMC4zODkyIDMuMzE3NCAxMC43MTI5IDMuMDkwODNDMTAuOTM5MSAyLjkzMjQ1IDExLjI1MDggMi45ODc2NyAxMS40MDkyIDMuMjEzODhDMTEuNTY3NCAzLjQ0MDA2IDExLjUxMzIgMy43NTE4IDExLjI4NzEgMy45MTAxNkMxMC44NzA2IDQuMjAxODIgMTAuNDgzNyA0LjM5NDcyIDEwLjEyMTEgNC40ODUzNkMxMC4wOTA1IDQuNDkzIDEwLjA1OTQgNC40OTg1IDEwLjAyODMgNC41MDQ4OUMxMC4zNTk1IDQuNzE1MjQgMTAuNjM0OSA0LjkyNzg0IDEwLjg1MzUgNS4xNDY0OUMxMS4yMTk0IDUuNTEyMzkgMTEuMzkyNSA1Ljc2MDQyIDExLjQ2MjkgNi4wNTY2NUMxMS40ODIzIDYuMTM4MjMgMTEuNDkxNSA2LjIwMzQyIDExLjQ5NjEgNi4yODkwN0wxMS41IDYuNTAwMDFDMTEuNSA2Ljg1Mjk5IDExLjM2MDQgNy4yMDI5NiAxMS4xMDA2IDcuNTQ5ODFDMTAuOTM1MSA3Ljc3MDc1IDEwLjYyMTQgNy44MTU4MyAxMC40MDA0IDcuNjUwNEMxMC4xNzk0IDcuNDg0ODIgMTAuMTM0MiA3LjE3MTIgMTAuMjk5OCA2Ljk1MDJDMTAuNDM5OCA2Ljc2MzMgMTAuNSA2LjYxMzAzIDEwLjUgNi41MDAwMUwxMC40OTcxIDYuMzM3OUwxMC40ODkzIDYuMjg3MTJDMTAuNDgyNiA2LjI1OTYyIDEwLjQ2NzggNi4yMjYxOSAxMC40Mzg1IDYuMTgyNjNMMTAuMzU4NCA2LjA4MDA5QzEwLjMwNzQgNi4wMjAwOSAxMC4yMzg4IDUuOTQ1ODEgMTAuMTQ2NSA1Ljg1MzUyQzkuOTczOTcgNS42ODEwMyA5Ljc0MDQ0IDUuNTA2MzUgOS40NTAyIDUuMzI1MkM5LjI2MTgzIDYuMDAwODkgOC41NTk5NCA2Ljc1MDAxIDggNi43NTAwMUM3LjkwNDE5IDYuNzUwMDEgNy44MDI0IDYuNzQxOTkgNy42OTQzNCA2LjcyNjU3QzcuNTg2MTkgNi43MTExMiA3LjQ3MzMxIDYuNjg5MSA3LjM1OTM4IDYuNjYyMTJMNy4xNzk2OSA2LjYxNTI0TDcuMDQ2ODggNi41NzYxOEM2Ljc4NDEyIDYuNDkxNjYgNi42MzkyOCA2LjIxMDA3IDYuNzIzNjMgNS45NDcyN0M2LjgwODA5IDUuNjg0NTMgNy4wODk3OCA1LjUzOTg1IDcuMzUyNTQgNS42MjQwM0w3LjUxNTYyIDUuNjY5OTNMNy41ODk4NCA1LjY4ODQ5QzcuNjc2MTQgNS43MDg5MiA3Ljc1OTU2IDUuNzI1NTUgNy44MzQ5NiA1LjczNjM0TDcuOTUyMTUgNS43NDkwM0M3Ljk2OTM1IDUuNzUwMDYgNy45ODUzNiA1Ljc1MDAxIDggNS43NTAwMUM4LjA1MjExIDUuNzUwMDEgOC40NDE2NyA1LjI4NTA4IDguNDkzMTYgNS4wNDY4OEw4LjQ5MDIzIDQuOTg3MzFMOC40OTUxMiA0Ljc3NDQyTDguNDkwMjMgNC43MjM2NEw4LjQ2OTczIDQuNjkxNDFMOC4zOTA2MiA0LjYwMjU1TDguMTQ2NDggNC4zNTM1MkM3Ljg0NzUzIDQuMDU0NiA3LjYyOTE3IDQuMDAwMDEgNyA0LjAwMDAxQzYuNjQwMDcgNC4wMDAwMSA2LjIzNTg3IDQuMTQxMyA1Ljc1Njg0IDQuNDI4NzJMNS42MTkxNCA0LjUyMDUyTDUuNDQxNDEgNC42NTYyNkw1LjIyMzYzIDQuODMzOTlMNC45NjU4MiA1LjA1MzcyTDQuNTA5NzcgNS40NjE5MkM0LjQ1NDM5IDUuNTEyMzUgNC4zOTcyOSA1LjU2NDM2IDQuMzM4ODcgNS42MTgxN0M0LjMzNDQxIDUuNjIyMjggNC4zMjg3OCA1LjYyNSA0LjMyNDIyIDUuNjI4OTFDNC4zMzE3OCA1Ljc2ODcgNC4zMyA1LjkwMjIzIDQuMzE4MzYgNi4wMzUxNkM0LjY4MTUxIDYuMTEyNiA1LjAyNzYzIDYuMzIwNjMgNS4zNTM1MiA2LjY0NjQ5QzYuMTQyMjYgNy40MzUyNCA2LjQ4NzQxIDguNjQzMiA1Ljk0NzI3IDkuNzIzNjRDNS44MjM3NyA5Ljk3MDYzIDUuNTIzMzYgMTAuMDcwOCA1LjI3NjM3IDkuOTQ3MjdDNS4wMjk0MiA5LjgyMzc2IDQuOTI5MjUgOS41MjMzNCA1LjA1MjczIDkuMjc2MzhDNS4zNzYwNCA4LjYyOTYgNS4xNTc2NyA3Ljg2NDcxIDQuNjQ2NDggNy4zNTM1MkM0LjQzNTA0IDcuMTQyMSA0LjI0NzM3IDcuMDMzNTggNC4wODEwNSA3LjAwNjg0TDQuMDQ4ODMgNy4wMDM5MUM0LjAxNzI4IDcuMDc0NTEgMy45ODQ5NSA3LjE0ODI2IDMuOTQ3MjcgNy4yMjM2NEMzLjM4MjUyIDguMzUzMTMgMi4yNTcxIDguNjEzMDUgMS4wOTE4IDguMjI0NjJDMC4zNjk4MDEgNy45ODM5MyAwIDcuMzY3MjIgMCA2LjUwMDAxQzguNTMxMjFlLTA1IDYuMjIzOTQgMC4yMjM5MSA2LjAwMDAxIDAuNSA2LjAwMDAxQzAuNzc2MDkgNi4wMDAwMSAwLjk5OTkxNSA2LjIyMzk0IDEgNi41MDAwMUMxIDYuOTY2MDggMS4xMzAyNiA3LjE4MjczIDEuNDA4MiA3LjI3NTRDMi4xNTE5OSA3LjUyMzMzIDIuNzQ3OTEgNy4zODYwMiAzLjA1MjczIDYuNzc2MzhDMy4zMTEwNyA2LjI1OTY4IDMuMzYzNzcgNS45NjYxOSAzLjMxNDQ1IDUuNTE3NTlMMy4yNTI5MyA1LjA0OTgxTDMuMTQ0NTMgNC4xMzY3M0wzLjAwMzkxIDMuMDY2NDFDMi45Njc0MyAyLjc5MjgyIDMuMTYwMDcgMi41NDE1NiAzLjQzMzU5IDIuNTA0ODlDMy43MDcxOCAyLjQ2ODQxIDMuOTU5NCAyLjY2MDEgMy45OTYwOSAyLjkzMzZMNC4xNzg3MSA0LjM1MjU1TDQuMTg1NTUgNC40MTAxNkw0LjQ4MTQ1IDQuMTUxMzhMNC43NDMxNiAzLjkzMzZDNC45NDY1OCAzLjc2OTY2IDUuMTEyOTUgMy42NDk0MyA1LjI0MzE2IDMuNTcxM0M1Ljg2Mzk4IDMuMTk4ODYgNi40MzE0NyAzLjAwMDAxIDcgMy4wMDAwMUM3LjY5Mjc5IDMuMDAwMDEgOC4xMTYyIDMuMDczOTggOC41MzAyNyAzLjM3MjA4TDguNTY1NDMgMS45ODkyN0M4LjU3MjM5IDEuNzEzMjMgOC44MDIwOCAxLjQ5NTAyIDkuMDc4MTIgMS41MDE5NloiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/logo-k-k
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const LogoKK: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Like
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS41ODMwMSAwQzYuMzkxODggMCA3LjA0Nzg2IDAuNjU1OTk5IDcuMDQ3ODUgMS40NjE5MUw3LjA0MTk5IDEuNzc4MzJDNy4wMzQyNiAxLjk4NjY0IDcuMDE5MTggMi4xODk3MiA2Ljk5NzA3IDIuMzg4NjdDNi45NDYxMiAyLjg0NzE4IDYuODM1NjMgMy4zODM1OSA2LjY2Njk5IDRIOS4zODE4NEMxMC43NjI1IDQgMTEuODgxOCA1LjExOTI5IDExLjg4MTggNi41QzExLjg4MTggNi43MDkwOCAxMS44NTU2IDYuOTE3NTYgMTEuODAzNyA3LjEyMDEyTDExLjAzNjEgMTAuMTIwMUMxMC43NTI5IDExLjIyNjMgOS43NTYwOSAxMS45OTk5IDguNjE0MjYgMTJIMS41QzAuNjcxNTczIDEyIDAgMTEuMzI4NCAwIDEwLjVWNS41QzAgNC42NzE1NyAwLjY3MTU3MyA0IDEuNSA0SDIuMjgxMjVMMi40MjI4NSAzLjg0NjY4QzIuNzg4MjQgMy40MzU2NyAzLjEwNDk0IDMuMDE0NjUgMy4zNzIwNyAyLjU4MzAxTDMuNTYyNSAyLjI1Njg0QzMuNzcxNzUgMS44ODAxNyAzLjkyODMzIDEuNTE2MSA0LjAzMTI1IDEuMTY0MDZDNC4yMzI3NyAwLjQ3NDQ4OCA0Ljg2NDYxIDAuMDAwMTQzMjEgNS41ODMwMSAwWk01LjU4MzAxIDFDNS4zMDg4NiAxLjAwMDE0IDUuMDY3MTUgMS4xODExNiA0Ljk5MDIzIDEuNDQ0MzRDNC44NjU2NiAxLjg3MDQ2IDQuNjgxNjggMi4zMDM2NCA0LjQzNzUgMi43NDMxNkM0LjA2MDQ0IDMuNDIxODYgMy41Nzk3OCA0LjA3MjA2IDMgNC42OTYyOVYxMUg4LjYxNDI2QzkuMjk5MzMgMTAuOTk5OSA5Ljg5NzQ3IDEwLjUzNTcgMTAuMDY3NCA5Ljg3MjA3TDEwLjgzNSA2Ljg3MjA3QzEwLjg2NjEgNi43NTA1NCAxMC44ODE4IDYuNjI1NDUgMTAuODgxOCA2LjVDMTAuODgxOCA1LjY3MTU3IDEwLjIxMDMgNSA5LjM4MTg0IDVINi42NjUwNEM2LjU3NzEgNC45OTk4MyA2LjQ4OTE2IDQuOTg3OSA2LjQwNDMgNC45NjQ4NEM1Ljg3MTU4IDQuODE5ODMgNS41NTY5OCA0LjI3MDQ5IDUuNzAyMTUgMy43MzczQzUuODU4MTQgMy4xNjcxOSA1Ljk1ODMgMi42Nzk4NiA2LjAwMjkzIDIuMjc4MzJDNi4wMzIwNiAyLjAxNjEzIDYuMDQ3MDggMS43NDQ3MSA2LjA0Nzg1IDEuNDY5NzNMNi4wNDAwNCAxLjM4NDc3QzYuMDAwNTYgMS4xNjQyNSA1LjgxMDk3IDEgNS41ODMwMSAxWk0xLjUgNUMxLjIyMzg2IDUgMSA1LjIyMzg2IDEgNS41VjEwLjVDMSAxMC43NzYxIDEuMjIzODYgMTEgMS41IDExSDJWNUgxLjVaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/like
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Like: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name LogoFeishu
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNi45NDgyNCAxQzcuMzgxNDMgMS4wMDA0MSA3Ljc4NjYgMS4yMTM5MSA4LjAzMTI1IDEuNTcwMzFDOC4zMjkzOCAyLjAwMzA3IDguNTY1MzggMi4zOTgyMiA4LjczODI4IDIuNzU3ODFDOC44Njk0MyAzLjAzMDYxIDguOTg2NDUgMy4zMjM0NyA5LjA5MTggMy42MzQ3N0M5LjMzNTkxIDMuNTkwMjQgOS41OTM5NSAzLjU2NjQyIDkuODc5ODggMy41NjY0MUMxMC40NzU4IDMuNTY2NDEgMTEuMDQ2NiAzLjY5MjIxIDExLjU4MTEgMy45Mzg0OEwxMS42NTUzIDMuOTc3NTRMMTEuNzIzNiA0LjAyNzM0QzExLjk0OTggNC4yMTc0MSAxMi4wMDA4IDQuNTM4MzUgMTEuODU5NCA0Ljc4NjEzTDExLjc5NzkgNC44NzVMMTEuNzg2MSA0Ljg3NTk4QzExLjY1MTcgNS4wNDM1NiAxMS41MzMyIDUuMTk2MTIgMTEuNDM3NSA1LjMzNzg5TDExLjM0MDggNS40OTIxOUwxMC43NDkgNi43MTA5NEwxMC40NTEyIDcuMjkxOTlMMTAuMzYwNCA3LjQ1ODAxQzEwLjI2OTkgNy42MTc2NiAxMC4xNzg2IDcuNzcwNDUgMTAuMDg1OSA3LjkxNjAyQzkuMDI0MiA5LjU4MzIzIDYuNDY5MTMgMTEuMTczNSA0IDEwLjk4MzRDMi4zMzYzMSAxMC44NTUzIDEuMTQ5MzMgMTAuNDg4MiAwLjQzMzU5NCA5Ljg0NDczQzAuMTkyOTI0IDkuNjI2NSAwLjA0MjMwMDIgOS4zMjgzMSAwLjAwNzgxMjUgOS4wMDc4MUwwIDguODY5MTRWNC4yNDEyMUMwLjAwMjkyMjM0IDQuMDU3NjkgMC4wODk4NDc4IDMuODg1MzggMC4yMzUzNTIgMy43NzM0NEMwLjQ5OTI1MiAzLjU3MDYyIDAuODc3ODkgMy42MjAyMiAxLjA3MjI3IDMuODc1QzEuNzUzMDMgNC43MjEwOSAyLjc4Mzk0IDUuNTU3NTkgNC4xNjUwNCA2LjM3ODkxQzQuMzAxOCA2LjQ2MDIzIDQuNDQ4MDIgNi41NDI2IDQuNjAwNTkgNi42MjQwMkw0Ljc2MTcyIDYuNzA4OThMNC43NzI0NiA2LjcwMzEyQzUuMDgwNTQgNi41MTE2MyA1LjM0ODYyIDYuMzIxNDkgNS41NzkxIDYuMTM2NzJDNS4xNzI5IDUuNDMzNjYgNC43MjY3MiA0Ljc4MDg5IDQuMjQwMjMgNC4xNzg3MUMzLjcyODY3IDMuNTQ1NTIgMi45Njk0OCAyLjg0NDA0IDEuOTg3MyAyLjA5NjY4QzEuNzAxOTQgMS45MDQ2IDEuNjQwNTggMS41MTYzNiAxLjg0MTggMS4yNDQxNEMxLjkzNDQxIDEuMTE4OTggMi4wNzA5NCAxLjAzNTI1IDIuMjI3NTQgMS4wMDg3OUwyLjMyMzI0IDFINi45NDgyNFpNMSA4Ljg2ODE2QzEuMDAwMjUgOC45NTc1OSAxLjAzODM3IDkuMDQzMzYgMS4xMDM1MiA5LjEwMjU0QzEuNjE5OSA5LjU2Njc1IDIuNjEyNjcgOS44NzM2IDQuMDc3MTUgOS45ODYzM0M1LjM3NDI5IDEwLjA4NjIgNi43MzcxMiA5LjU3MzY4IDcuNzg4MDkgOC44MzU5NEw3Ljg4MTg0IDguNzY2Nkw3LjY4NTU1IDguNzY0NjVDNi43NjIzNCA4LjcyMDU2IDUuMTAyODMgOC4wNTc4NiAzLjg4OTY1IDcuMzc1TDMuNjUzMzIgNy4yMzkyNkMyLjY2OTIyIDYuNjU0MDMgMS44NDM3NCA2LjA1MzQ0IDEuMTczODMgNS40MzQ1N0wxIDUuMjY5NTNWOC44NjgxNlpNOS44Nzk4OCA0LjU2NjQxQzkuMzAxOTIgNC41NjY0NSA4Ljg5MTYxIDQuNjc1MTYgOC40MTIxMSA0LjkyNTc4TDguMTY0MDYgNS4wNjU0M0w3Ljk3OTQ5IDUuMTgzNTlMNy45MjY3NiA1LjIyMzYzTDcuODMzOTggNS4zMDM3MUw3LjUyNDQxIDUuNjEzMjhMNi43NzI0NiA2LjQwMzMyQzYuNTY0MzggNi42MjIyOCA2LjMxNTI5IDYuODM5ODcgNi4wMjYzNyA3LjA1NzYyTDUuODI2MTcgNy4yMDQxTDYuMDY3MzggNy4zMDI3M0M2LjY0MjkgNy41MzA2MiA3LjE4ODMzIDcuNjk5NzIgNy41NzYxNyA3Ljc1MDk4TDcuNzMyNDIgNy43NjU2MkM4LjQ0MTMgNy43OTk0NyA5LjA0NzkxIDcuNDc0OTkgOS41ODM5OCA2Ljc0NjA5TDkuNjc5NjkgNi42MDc0MkwxMC40NzU2IDQuOTkxMjFMMTAuNDkxMiA0Ljk2MTkxQzEwLjUyNjEgNC45MDM3MyAxMC41NjQ0IDQuODQ0NzggMTAuNjA0NSA0Ljc4NTE2TDEwLjY4MTYgNC42NzM4M0wxMC41NCA0LjYzNjcyQzEwLjM5NzEgNC42MDUzOCAxMC4yNTEzIDQuNTg0NjYgMTAuMTAzNSA0LjU3NDIyTDkuODc5ODggNC41NjY0MVpNMy43Mjc1NCAyLjIyODUyQzQuMjQ3MTEgMi42ODc4OSA0LjY3NjU5IDMuMTI4NzEgNS4wMTc1OCAzLjU1MDc4QzUuNDg3NzUgNC4xMzI3NiA1LjkyMDk1IDQuNzU4MjMgNi4zMTkzNCA1LjQyNTc4TDYuNzM4MjggNC45ODQzOEM2Ljc2NzA4IDQuOTU0OTUgNi43OTUzMSA0LjkyNjQxIDYuODIzMjQgNC44OTg0NEM3LjA2MjU1IDQuNjU4NzcgNy4yNzExIDQuNDcyNTEgNy40NzQ2MSA0LjMyNTJMNy42OTIzOCA0LjE4MTY0TDcuNzMxNDUgNC4xNTgyQzcuODcwNDIgNC4wNzg1OCA4LjAwNTk2IDQuMDA4MzggOC4xMzk2NSAzLjk0NTMxQzguMDQ3OTkgMy42NzU3MyA3Ljk0ODY0IDMuNDIzODEgNy44MzY5MSAzLjE5MTQxQzcuNjg4MzIgMi44ODIzMyA3LjQ3ODE4IDIuNTMwMzEgNy4yMDcwMyAyLjEzNjcyQzcuMTYwMDEgMi4wNjgzOSA3LjA4ODU5IDIuMDIxNzMgNy4wMDg3OSAyLjAwNTg2TDYuOTQ3MjcgMkwzLjQ2MTkxIDEuOTk5MDJMMy43Mjc1NCAyLjIyODUyWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/logo-feishu
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const LogoFeishu: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name MeetingRoom
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEgMUMxMS41NTIzIDEgMTIgMS40NDc3MiAxMiAyVjhDMTIgOC41NTIyOCAxMS41NTIzIDkgMTEgOUg2LjkwMTM3TDkuMjc3MzQgMTAuNTg0TDguNzIyNjYgMTEuNDE2TDYuMDU1NjYgOS42Mzc3QzYuMDMzMjcgOS42MjI3NyA2LjAwNTg4IDkuNjE4MDcgNS45ODA0NyA5LjYyMzA1TDUuOTQ0MzQgOS42Mzc3TDMuMjc3MzQgMTEuNDE2TDIuNzIyNjYgMTAuNTg0TDUuMDk4NjMgOUgxQzAuNDQ3NzE1IDkgMCA4LjU1MjI4IDAgOFYyQzAgMS40NDc3MiAwLjQ0NzcxNSAxIDEgMUgxMVpNMSA4SDExVjJIMVY4Wk05LjI5NDkyIDQuNDA0M0w3LjA2NzM4IDYuMDI4MzJDNi44MjI3NCA2LjIwNjcxIDYuNTAxMjUgNi4yMzAwMSA2LjIzNjMzIDYuMDk2NjhMNi4xMzk2NSA2LjAzOTA2TDQuODI3MTUgNS4xMjc5M0wzLjMyMDMxIDYuMzgzNzlMMi42Nzk2OSA1LjYxNjIxTDQuMzA0NjkgNC4yNjE3MkM0LjU1MDQgNC4wNTcyMSA0Ljg5MDgxIDQuMDIwNzEgNS4xNzA5IDQuMTU5MThMNS4yNzI0NiA0LjIxOTczTDYuNTkxOCA1LjEzNTc0TDguNzA1MDggMy41OTU3TDkuMjk0OTIgNC40MDQzWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/meeting-room
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const MeetingRoom: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name MenuList
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEgOVYxMEgxVjlIMTFaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik0xMSA1LjVWNi41SDFWNS41SDExWiIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBkPSJNMTEgMlYzSDFWMkgxMVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/menu-list
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const MenuList: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name LogoWechat
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMyAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNSAwQzcuNTYwMTYgMCA5LjY4MzUxIDEuNjc1MzkgOS44MDI3MyAzLjgyOTFMOS44MDM3MSAzLjg5OTQxQzExLjE4MzYgNC40OTA2NSAxMi4xMzY3IDUuNjgxMDMgMTIuMTM2NyA3LjA4MDA4TDEyLjEyOTkgNy4yOTAwNEMxMi4wNjcxIDguMTkyNDIgMTEuNjAxMiA5LjAxOTk4IDEwLjg0OTYgOS42MzI4MUwxMC43NTQ5IDkuNzA2MDVMMTAuOTEwMiAxMC42NDM2QzEwLjk2NjQgMTAuOTgzOCAxMC43MzU2IDExLjMwNTYgMTAuMzk1NSAxMS4zNjIzQzEwLjI0NDcgMTEuMzg3MyAxMC4wODkzIDExLjM1NTggOS45NTk5NiAxMS4yNzQ0TDguODMwMDggMTAuNTU5NkM4LjUwMTQxIDEwLjYyNDggOC4xNjIzNCAxMC42NjAxIDcuODE4MzYgMTAuNjYwMkM3LjQ4MDcgMTAuNjYwMSA3LjE0NzU1IDEwLjYyNzQgNi44MjQyMiAxMC41NjQ1QzUuMjkxMTMgMTAuMjY2IDQuMDc3NzUgOS4yOTQ4NCAzLjY1OTE4IDguMDQxOTlMMi41MjI0NiA4Ljc3MDUxQzIuMzkyOTIgOC44NTMyMiAyLjIzNzY0IDguODg1MDMgMi4wODU5NCA4Ljg2MDM1QzEuNzQ1MzkgOC44MDQ3NSAxLjUxMzkyIDguNDg0MDkgMS41NjkzNCA4LjE0MzU1TDEuNzU3ODEgNi45ODkyNkwxLjY0MTYgNi44OTk0MUMwLjc5MDM5MiA2LjIwNTg5IDAuMjY1NTE3IDUuMjY1MzEgMC4xOTkyMTkgNC4yNDEyMUwwLjE5MjM4MyA0LjAxOTUzQzAuMTkyNjg1IDEuNzc0NzggMi4zNjQ3MiAxLjAwMzU2ZS0wNyA1IDBaTTcuODE4MzYgNC41QzUuOTY1MDYgNC41MDAwOCA0LjUgNS42ODE3MyA0LjUgNy4wODAwOEM0LjUgNy4xNTYxMSA0LjUwNDI0IDcuMjMxNjkgNC41MTI3IDcuMzA2NjRDNC42MzQ0MiA4LjM4NTYzIDUuNjM3MTEgOS4zMTQ2NSA3LjAxNDY1IDkuNTgzMDFDNy4yNzUwNCA5LjYzMzY4IDcuNTQ0NzQgOS42NjAxNSA3LjgxODM2IDkuNjYwMTZDOC4xNTY5NyA5LjY2MDEzIDguNDg5MjUgOS42MjAwMSA4LjgwNTY2IDkuNTQyOTdMOS4wMTA3NCA5LjQ5MzE2TDkuNzg4MDkgOS45ODI0Mkw5LjY2NDA2IDkuMjM5MjZMOS45Mzg0OCA5LjA2MTUyQzEwLjY5ODMgOC41NjgxNCAxMS4xMzY3IDcuODQ1NzkgMTEuMTM2NyA3LjA4MDA4QzExLjEzNjcgNS42ODE3NyA5LjY3MTU3IDQuNTAwMTUgNy44MTgzNiA0LjVaTTUgMUMyLjg3NzUyIDEgMS4xOTI3IDIuMzc2NjMgMS4xOTIzOCA0LjAxOTUzQzEuMTkyMzggNC44NjE3OSAxLjYzNDI5IDUuNjU3MDggMi40MDUyNyA2LjIyNzU0TDIuNTc2MTcgNi4zNDU3TDIuODQ2NjggNi41MjQ0MUwyLjY5MTQxIDcuNDc0NjFMMy41MDI5MyA2Ljk1NjA1QzMuNTgxNjMgNS4wMTE3OSA1LjUwMzM3IDMuNTAwMDggNy44MTgzNiAzLjVDOC4xNDM1NSAzLjUwMDAyIDguNDYwOTMgMy41MzAyMyA4Ljc2NjYgMy41ODY5MUM4LjUwMTQyIDIuMTQyMDYgNi45MzI5OCAxIDUgMVpNNi41IDZDNi43NzYxNCA2IDcgNi4yMjM4NiA3IDYuNUM3IDYuNzc2MTQgNi43NzYxNCA3IDYuNSA3QzYuMjIzODYgNyA2IDYuNzc2MTQgNiA2LjVDNiA2LjIyMzg2IDYuMjIzODYgNiA2LjUgNlpNOSA2QzkuMjc2MTQgNiA5LjUgNi4yMjM4NiA5LjUgNi41QzkuNSA2Ljc3NjE0IDkuMjc2MTQgNyA5IDdDOC43MjM4NiA3IDguNSA2Ljc3NjE0IDguNSA2LjVDOC41IDYuMjIzODYgOC43MjM4NiA2IDkgNlpNMy41IDJDMy43NzYxNCAyIDQgMi4yMjM4NiA0IDIuNUM0IDIuNzc2MTQgMy43NzYxNCAzIDMuNSAzQzMuMjIzODYgMyAzIDIuNzc2MTQgMyAyLjVDMyAyLjIyMzg2IDMuMjIzODYgMiAzLjUgMlpNNi41IDJDNi43NzYxNCAyIDcgMi4yMjM4NiA3IDIuNUM3IDIuNzc2MTQgNi43NzYxNCAzIDYuNSAzQzYuMjIzODYgMyA2IDIuNzc2MTQgNiAyLjVDNiAyLjIyMzg2IDYuMjIzODYgMiA2LjUgMloiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/logo-wechat
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const LogoWechat: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name MenuListSelect
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEuODgzOCA4LjMyMDMxTDkuNjk3MjcgMTAuOTQyNEM5LjY5MTQ5IDEwLjk0ODUgOS42ODQzNSAxMC45NTYgOS42NzM4MyAxMC45NjY4QzkuMzEzMzggMTEuMzI3MiA4Ljc0NTc5IDExLjM1NDcgOC4zNTM1MiAxMS4wNDk4TDguMjU4NzkgMTAuOTY2OEw3LjE0NjQ4IDkuODUzNTJMNy44NTM1MiA5LjE0NjQ4TDguOTY2OCAxMC4yNTk4TDExLjExNjIgNy42Nzk2OUwxMS44ODM4IDguMzIwMzFaTTYgMTBIMVY5SDZWMTBaTTExIDZIMVY1SDExVjZaTTExIDJIMVYxSDExVjJaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/menu-list-select
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const MenuListSelect: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name MessageAdd
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuNSAxQzExLjMyODQgMSAxMiAxLjY3MTU3IDEyIDIuNVY4LjVDMTIgOS4zMjg0MyAxMS4zMjg0IDEwIDEwLjUgMTBINC43MDYwNUwzLjE5NTMxIDExLjUxMTdDMi45NDkzMiAxMS43NTc3IDIuNTY1NTMgMTEuNzgyNyAyLjI5MTk5IDExLjU4NTlMMi4yMDUwOCAxMS41MTE3QzIuMDc0MDEgMTEuMzgwNiAyLjAwMDExIDExLjIwMyAyIDExLjAxNzZWMTBIMS41QzAuNzIwMzI3IDEwIDAuMDc5NTUyMSA5LjQwNTE1IDAuMDA2ODM1OTQgOC42NDQ1M0wwIDguNVYyLjVDMCAxLjY3MTU3IDAuNjcxNTczIDEgMS41IDFIMTAuNVpNMS41IDJDMS4yMjM4NiAyIDEgMi4yMjM4NiAxIDIuNVY4LjVDMSA4Ljc3NjE0IDEuMjIzODYgOSAxLjUgOUgyLjI5OThDMi42ODY0IDkgMyA5LjMxMzYgMyA5LjcwMDJWMTAuMjkyTDQuMDg3ODkgOS4yMDUwOEM0LjE5MjkgOS4xMDAwNyA0LjMyNzgzIDkuMDMxODcgNC40NzI2NiA5LjAwODc5TDQuNTgzMDEgOUgxMC41QzEwLjc3NjEgOSAxMSA4Ljc3NjE0IDExIDguNVYyLjVDMTEgMi4yMjM4NiAxMC43NzYxIDIgMTAuNSAySDEuNVpNNi41IDVIOC41VjZINi41VjhINS41VjZIMy41VjVINS41VjNINi41VjVaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/message-add
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const MessageAdd: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Logout
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS41IDBDNi4yNzk2NyAwIDYuOTIwNDUgMC41OTQ4NDkgNi45OTMxNiAxLjM1NTQ3TDcgMS41VjRINlYxLjVDNiAxLjI1NDU0IDUuODIzMDkgMS4wNTAxNSA1LjU4OTg0IDEuMDA3ODFMNS41IDFIMS41QzEuMjU0NTQgMSAxLjA1MDE1IDEuMTc2OTEgMS4wMDc4MSAxLjQxMDE2TDEgMS41VjEwLjVDMSAxMC43NDU1IDEuMTc2OTEgMTAuOTQ5OSAxLjQxMDE2IDEwLjk5MjJMMS41IDExSDUuNUM1Ljc0NTQ2IDExIDUuOTQ5ODUgMTAuODIzMSA1Ljk5MjE5IDEwLjU4OThMNiAxMC41VjhIN1YxMC41QzcgMTEuMjc5NyA2LjQwNTE1IDExLjkyMDQgNS42NDQ1MyAxMS45OTMyTDUuNSAxMkgxLjVDMC43MjAzMjcgMTIgMC4wNzk1NTI0IDExLjQwNTIgMC4wMDY4MzU5NCAxMC42NDQ1TDAgMTAuNVYxLjVDMCAwLjcyMDMyNyAwLjU5NDg0OSAwLjA3OTU1MjIgMS4zNTU0NyAwLjAwNjgzNTk0TDEuNSAwSDUuNVpNMTEgMTAuNUMxMSAxMS4yNzk3IDEwLjQwNTIgMTEuOTIwNCA5LjY0NDUzIDExLjk5MzJMOS41IDEySDhWMTFIOS41QzkuNzQ1NDYgMTEgOS45NDk4NSAxMC44MjMxIDkuOTkyMTkgMTAuNTg5OEwxMCAxMC41VjlIMTFWMTAuNVpNMTEuNjc2OCA1LjQ2OTczQzExLjk0MyA1LjczNTk5IDExLjk2NjkgNi4xNTI2OSAxMS43NDkgNi40NDYyOUwxMS42NzY4IDYuNTMwMjdMOS4zNTM1MiA4Ljg1MzUyTDguNjQ2NDggOC4xNDY0OEwxMC4yOTMgNi41SDVWNS41SDEwLjI5M0w4LjY0NjQ4IDMuODUzNTJMOS4zNTM1MiAzLjE0NjQ4TDExLjY3NjggNS40Njk3M1pNOS41IDBDMTAuMjc5NyAwIDEwLjkyMDQgMC41OTQ4NDkgMTAuOTkzMiAxLjM1NTQ3TDExIDEuNVYzSDEwVjEuNUMxMCAxLjI1NDU0IDkuODIzMDkgMS4wNTAxNSA5LjU4OTg0IDEuMDA3ODFMOS41IDFIOFYwSDkuNVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/logout
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Logout: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name MoreVer
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcgMVYzSDVWMUg3Wk03IDVWN0g1VjVIN1pNNyAxMVY5SDVWMTFIN1oiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/more-ver
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const MoreVer: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name MoreHor
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMgNVY3SDFWNUgzWk03IDVWN0g1VjVIN1pNMTEgN1Y1SDlWN0gxMVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/more-hor
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const MoreHor: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Message
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuNSAxQzExLjMyODQgMSAxMiAxLjY3MTU3IDEyIDIuNVY4LjVDMTIgOS4zMjg0MyAxMS4zMjg0IDEwIDEwLjUgMTBINC43MDYwNUwzLjE5NTMxIDExLjUxMTdDMi45NDkzMiAxMS43NTc3IDIuNTY1NTMgMTEuNzgyNyAyLjI5MTk5IDExLjU4NTlMMi4yMDUwOCAxMS41MTE3QzIuMDc0MDEgMTEuMzgwNiAyLjAwMDExIDExLjIwMyAyIDExLjAxNzZWMTBIMS41QzAuNzIwMzI3IDEwIDAuMDc5NTUyMSA5LjQwNTE1IDAuMDA2ODM1OTQgOC42NDQ1M0wwIDguNVYyLjVDMCAxLjY3MTU3IDAuNjcxNTczIDEgMS41IDFIMTAuNVpNMS41IDJDMS4yMjM4NiAyIDEgMi4yMjM4NiAxIDIuNVY4LjVDMSA4Ljc3NjE0IDEuMjIzODYgOSAxLjUgOUgyLjI5OThDMi42ODY0IDkgMyA5LjMxMzYgMyA5LjcwMDJWMTAuMjkyTDQuMDg3ODkgOS4yMDUwOEM0LjE5MjkgOS4xMDAwNyA0LjMyNzgzIDkuMDMxODcgNC40NzI2NiA5LjAwODc5TDQuNTgzMDEgOUgxMC41QzEwLjc3NjEgOSAxMSA4Ljc3NjE0IDExIDguNVYyLjVDMTEgMi4yMjM4NiAxMC43NzYxIDIgMTAuNSAySDEuNVpNNCA2SDNWNUg0VjZaTTYuNSA2SDUuNVY1SDYuNVY2Wk05IDZIOFY1SDlWNloiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/message
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Message: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name None
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzkuMzEzNzEgMCAxMiAyLjY4NjI5IDEyIDZDMTIgOS4zMTM3MSA5LjMxMzcxIDEyIDYgMTJDMi42ODYyOSAxMiAwIDkuMzEzNzEgMCA2QzAgMi42ODYyOSAyLjY4NjI5IDAgNiAwWk02IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFaTTkuMzUzNTIgOC42NDY0OEw4LjY0NjQ4IDkuMzUzNTJMMi42NDY0OCAzLjM1MzUyTDMuMzUzNTIgMi42NDY0OEw5LjM1MzUyIDguNjQ2NDhaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/none
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const None: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Output
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzcuNDU4NTcgMCA4LjgzNjU5IDAuNTIzNTk1IDkuOTE1MDQgMS40NTMxMkwxMC4xMjYgMS42NDQ1M0w5LjQzODQ4IDIuMzcwMTJDOC41MTU2NiAxLjQ5NTY5IDcuMjk3MzQgMSA2IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM3LjE5NTE0IDExIDguMzIzNTMgMTAuNTc5NiA5LjIxNTgyIDkuODI5MUw5LjQwMzMyIDkuNjYzMDlMMTAuMDg0IDEwLjM5NTVDOC45ODE3NyAxMS40MiA3LjUzNTYgMTIgNiAxMkMyLjY4NjI5IDEyIDAgOS4zMTM3MSAwIDZDMCAyLjY4NjI5IDIuNjg2MjkgMCA2IDBaTTExLjY3NjggNS40Njk3M0MxMS45NDMgNS43MzU5OSAxMS45NjY5IDYuMTUyNjggMTEuNzQ5IDYuNDQ2MjlMMTEuNjc2OCA2LjUzMDI3TDkuMzUzNTIgOC44NTM1Mkw4LjY0NjQ4IDguMTQ2NDhMMTAuMjkzIDYuNUg1VjUuNUgxMC4yOTNMOC42NDY0OCAzLjg1MzUyTDkuMzUzNTIgMy4xNDY0OEwxMS42NzY4IDUuNDY5NzNaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/output
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Output: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Palette
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAxQzcuMDgyNDMgMSA4LjA5ODk3IDEuMjY0NDkgOC45Nzc1NCAxLjcyNTU5TDguMjc0NDEgMi40OTIxOUM3LjU5Mjg5IDIuMTc4MSA2LjgyMDM2IDIgNiAyQzMuMjI4NTEgMiAxIDQuMDI1OTEgMSA2LjVDMSA4Ljk3NDA5IDMuMjI4NTEgMTEgNiAxMUM2LjE0MTc5IDExIDYuMzI2NTcgMTAuOTg2OCA2LjU1MTc2IDEwLjk1OUM2LjgwMTcxIDEwLjkyODEgNi45OTA0MiAxMC43MTU3IDYuOTkxMjEgMTAuNDYzOUw2Ljk5NzA3IDguNDk5MDJDNi45OTg0OCA3LjczNTQ1IDcuNTczMiA3LjA5NzUzIDguMzU4NCA3LjAwOTc3TDguNTAxOTUgNy4wMDM5MUwxMC40OTggNy4wMTE3MkMxMC43NTI0IDcuMDEyNjcgMTAuOTY2OCA2LjgyMTM2IDEwLjk5NDEgNi42MDA1OUwxMSA2LjUxMjdMMTAuOTk1MSA2LjI5NDkyQzEwLjk0NTggNS4zMDk5OCAxMC41NDI0IDQuNDA1NSA5Ljg5NjQ4IDMuNjgyNjJMMTAuNTc1MiAyLjk0MjM4QzExLjQ2MjcgMy44OTk5OSAxMiA1LjE0MDE1IDEyIDYuNUwxMS45OTkgNi41NDQ5MkwxMS45ODkzIDYuNjkxNDFDMTEuODk4OSA3LjQ0MzY3IDExLjI1NzUgOC4wMTM2MSAxMC40OTQxIDguMDEwNzRMOC41MjQ0MSA4LjAwMjkzTDguNDM4NDggOC4wMDU4NkM4LjE4ODczIDguMDM0MjUgNy45OTc1MyA4LjI0NzUgNy45OTcwNyA4LjUwMTk1TDcuOTkxMjEgMTAuNDY2OEM3Ljk4ODkgMTEuMjIyMyA3LjQyNDcgMTEuODU4NSA2LjY3NDggMTEuOTUxMkM2LjQxMTczIDExLjk4MzcgNi4xODc2IDEyIDYgMTJDMi42OTYzNiAxMiAwIDkuNTQ4NzYgMCA2LjVDMCAzLjQ1MTI0IDIuNjk2MzYgMSA2IDFaTTQuNSA4QzQuNzc2MTQgOCA1IDguMjIzODYgNSA4LjVDNSA4Ljc3NjE0IDQuNzc2MTQgOSA0LjUgOUM0LjIyMzg2IDkgNCA4Ljc3NjE0IDQgOC41QzQgOC4yMjM4NiA0LjIyMzg2IDggNC41IDhaTTExLjM2ODIgMS4zMzc4OUw1Ljg2ODE2IDcuMzM3ODlMNS4xMzE4NCA2LjY2MjExTDEwLjYzMTggMC42NjIxMDlMMTEuMzY4MiAxLjMzNzg5Wk0yLjUgNkMyLjc3NjE0IDYgMyA2LjIyMzg2IDMgNi41QzMgNi43NzYxNCAyLjc3NjE0IDcgMi41IDdDMi4yMjM4NiA3IDIgNi43NzYxNCAyIDYuNUMyIDYuMjIzODYgMi4yMjM4NiA2IDIuNSA2Wk00LjUgNEM0Ljc3NjE0IDQgNSA0LjIyMzg2IDUgNC41QzUgNC43NzYxNCA0Ljc3NjE0IDUgNC41IDVDNC4yMjM4NiA1IDQgNC43NzYxNCA0IDQuNUM0IDQuMjIzODYgNC4yMjM4NiA0IDQuNSA0WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/palette
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Palette: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Paste
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy41IDNDOC4zMjg0MyAzIDkgMy42NzE1NyA5IDQuNVYxMC41QzkgMTEuMzI4NCA4LjMyODQzIDEyIDcuNSAxMkgxLjVDMC42NzE1NzMgMTIgMCAxMS4zMjg0IDAgMTAuNVY0LjVDMCAzLjY3MTU3IDAuNjcxNTczIDMgMS41IDNINy41Wk0xLjUgNEMxLjIyMzg2IDQgMSA0LjIyMzg2IDEgNC41VjEwLjVDMSAxMC43NzYxIDEuMjIzODYgMTEgMS41IDExSDcuNUM3Ljc3NjE0IDExIDggMTAuNzc2MSA4IDEwLjVWNC41QzggNC4yMjM4NiA3Ljc3NjE0IDQgNy41IDRIMS41Wk0xMiA3LjVDMTIgOC4yNzk2NyAxMS40MDUyIDguOTIwNDUgMTAuNjQ0NSA4Ljk5MzE2TDEwLjUgOUgxMFY4SDEwLjVDMTAuNzQ1NSA4IDEwLjk0OTkgNy44MjMwOSAxMC45OTIyIDcuNTg5ODRMMTEgNy41VjdIMTJWNy41Wk0xMiA2SDExVjNIMTJWNlpNNSAxSDQuNUM0LjI1NDU0IDEgNC4wNTAxNSAxLjE3NjkxIDQuMDA3ODEgMS40MTAxNkw0IDEuNVYySDNWMS41QzMgMC43MjAzMjcgMy41OTQ4NSAwLjA3OTU1MjIgNC4zNTU0NyAwLjAwNjgzNTk0TDQuNSAwSDVWMVpNMTAuNSAwQzExLjI3OTcgMCAxMS45MjA0IDAuNTk0ODQ5IDExLjk5MzIgMS4zNTU0N0wxMiAxLjVWMkgxMVYxLjVDMTEgMS4yNTQ1NCAxMC44MjMxIDEuMDUwMTUgMTAuNTg5OCAxLjAwNzgxTDEwLjUgMUgxMFYwSDEwLjVaTTkgMUg2VjBIOVYxWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/paste
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Paste: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name ParameterSetting
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCAxQzQuNjUyOTMgMSA1LjIwNzAzIDEuNDE3NjYgNS40MTMwOSAySDExVjNINS40MTMwOUM1LjIwNzAzIDMuNTgyMzQgNC42NTI5MyA0IDQgNEMzLjM0NzA3IDQgMi43OTI5NyAzLjU4MjM0IDIuNTg2OTEgM0gxVjJIMi41ODY5MUMyLjc5Mjk3IDEuNDE3NjYgMy4zNDcwNyAxIDQgMVpNNCAyQzMuNzIzODYgMiAzLjUgMi4yMjM4NiAzLjUgMi41QzMuNSAyLjc3NjE0IDMuNzIzODYgMyA0IDNDNC4yNzYxNCAzIDQuNSAyLjc3NjE0IDQuNSAyLjVDNC41IDIuMjIzODYgNC4yNzYxNCAyIDQgMloiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTQgOEM0LjY1MjkzIDggNS4yMDcwMyA4LjQxNzY2IDUuNDEzMDkgOUgxMVYxMEg1LjQxMzA5QzUuMjA3MDMgMTAuNTgyMyA0LjY1MjkzIDExIDQgMTFDMy4zNDcwNyAxMSAyLjc5Mjk3IDEwLjU4MjMgMi41ODY5MSAxMEgxVjlIMi41ODY5MUMyLjc5Mjk3IDguNDE3NjYgMy4zNDcwNyA4IDQgOFpNNCA5QzMuNzIzODYgOSAzLjUgOS4yMjM4NiAzLjUgOS41QzMuNSA5Ljc3NjE0IDMuNzIzODYgMTAgNCAxMEM0LjI3NjE0IDEwIDQuNSA5Ljc3NjE0IDQuNSA5LjVDNC41IDkuMjIzODYgNC4yNzYxNCA5IDQgOVoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTggNC41QzguNjUyOTMgNC41IDkuMjA3MDMgNC45MTc2NiA5LjQxMzA5IDUuNUgxMVY2LjVIOS40MTMwOUM5LjIwNzAzIDcuMDgyMzQgOC42NTI5MyA3LjUgOCA3LjVDNy4zNDcwNyA3LjUgNi43OTI5NyA3LjA4MjM0IDYuNTg2OTEgNi41SDFWNS41SDYuNTg2OTFDNi43OTI5NyA0LjkxNzY2IDcuMzQ3MDcgNC41IDggNC41Wk04IDUuNUM3LjcyMzg2IDUuNSA3LjUgNS43MjM4NiA3LjUgNkM3LjUgNi4yNzYxNCA3LjcyMzg2IDYuNSA4IDYuNUM4LjI3NjE0IDYuNSA4LjUgNi4yNzYxNCA4LjUgNkM4LjUgNS43MjM4NiA4LjI3NjE0IDUuNSA4IDUuNVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/parameter-setting
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const ParameterSetting: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Page
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuNSAxQzExLjMyODQgMSAxMiAxLjY3MTU3IDEyIDIuNVY5LjVDMTIgMTAuMzI4NCAxMS4zMjg0IDExIDEwLjUgMTFIMS41QzAuNjcxNTczIDExIDAgMTAuMzI4NCAwIDkuNVYyLjVDMCAxLjY3MTU3IDAuNjcxNTczIDEgMS41IDFIMTAuNVpNMSA5LjVDMSA5Ljc3NjE0IDEuMjIzODYgMTAgMS41IDEwSDEwLjVDMTAuNzc2MSAxMCAxMSA5Ljc3NjE0IDExIDkuNVY0SDFWOS41Wk00IDlIM1Y1SDRWOVpNMS41IDJDMS4yMjM4NiAyIDEgMi4yMjM4NiAxIDIuNVYzSDExVjIuNUMxMSAyLjIyMzg2IDEwLjc3NjEgMiAxMC41IDJIMS41WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/page
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Page: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Pause
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMyAxVjExSDJWMUgzWiIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBkPSJNMTAgMVYxMUg5VjFIMTBaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/pause
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Pause: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name PageCode
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuNSAxQzExLjMyODQgMSAxMiAxLjY3MTU3IDEyIDIuNVY5LjVDMTIgMTAuMzI4NCAxMS4zMjg0IDExIDEwLjUgMTFIMS41QzAuNjcxNTczIDExIDAgMTAuMzI4NCAwIDkuNVYyLjVDMCAxLjY3MTU3IDAuNjcxNTczIDEgMS41IDFIMTAuNVpNMSA5LjVDMSA5Ljc3NjE0IDEuMjIzODYgMTAgMS41IDEwSDEwLjVDMTAuNzc2MSAxMCAxMSA5Ljc3NjE0IDExIDkuNVY0SDFWOS41Wk04LjUgOUg2VjhIOC41VjlaTTUuMjExOTEgNi41MDQ4OEM1LjQ1NzkyIDYuNzUwODkgNS40ODI4OSA3LjEzNDY2IDUuMjg2MTMgNy40MDgyTDUuMjExOTEgNy40OTUxMkwzLjg1MzUyIDguODUzNTJMMy4xNDY0OCA4LjE0NjQ4TDQuMjkyOTcgN0wzLjE0NjQ4IDUuODUzNTJMMy44NTM1MiA1LjE0NjQ4TDUuMjExOTEgNi41MDQ4OFpNMS41IDJDMS4yMjM4NiAyIDEgMi4yMjM4NiAxIDIuNVYzSDExVjIuNUMxMSAyLjIyMzg2IDEwLjc3NjEgMiAxMC41IDJIMS41WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/page-code
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const PageCode: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Picture
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuNSAxQzExLjMyODQgMSAxMiAxLjY3MTU3IDEyIDIuNVY5LjVDMTIgMTAuMzI4NCAxMS4zMjg0IDExIDEwLjUgMTFIMS41QzAuNjcxNTczIDExIDAgMTAuMzI4NCAwIDkuNVYyLjVDMCAxLjY3MTU3IDAuNjcxNTczIDEgMS41IDFIMTAuNVpNMS41IDJDMS4yMjM4NiAyIDEgMi4yMjM4NiAxIDIuNVY5LjVDMSA5Ljc3NjE0IDEuMjIzODYgMTAgMS41IDEwSDEwLjVDMTAuNzc2MSAxMCAxMSA5Ljc3NjE0IDExIDkuNVYyLjVDMTEgMi4yMjM4NiAxMC43NzYxIDIgMTAuNSAySDEuNVpNMy4yOTI5NyA1QzMuNjUzNDUgNC42Mzk1NSA0LjIyMSA0LjYxMTk4IDQuNjEzMjggNC45MTY5OUw0LjcwNzAzIDVMOC4zNTM1MiA4LjY0NjQ4TDcuNjQ2NDggOS4zNTM1Mkw0IDUuNzA3MDNMMi4zNTM1MiA3LjM1MzUyTDEuNjQ2NDggNi42NDY0OEwzLjI5Mjk3IDVaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik04LjUgM0M5LjMyODQzIDMgMTAgMy42NzE1NyAxMCA0LjVDMTAgNS4zMjg0MyA5LjMyODQzIDYgOC41IDZDNy42NzE1NyA2IDcgNS4zMjg0MyA3IDQuNUM3IDMuNjcxNTcgNy42NzE1NyAzIDguNSAzWk04LjUgNEM4LjIyMzg2IDQgOCA0LjIyMzg2IDggNC41QzggNC43NzYxNCA4LjIyMzg2IDUgOC41IDVDOC43NzYxNCA1IDkgNC43NzYxNCA5IDQuNUM5IDQuMjIzODYgOC43NzYxNCA0IDguNSA0WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/picture
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Picture: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Play
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMS43NzkzQzIgMS41MDQyMSAyLjA3NTY1IDEuMjM0NDIgMi4yMTg2NyAwLjk5OTQzTDIuMjk5NjQgMC44Nzk1OTlDMi43NTcyIDAuMjY3NjI1IDMuNjEzODMgMC4wOTI1OTM5IDQuMjc5ODcgMC40OTc5NjdMMTEuMjE0NSA0LjcxODY3QzExLjQxOTQgNC44NDMzNCAxMS41OTEzIDUuMDE1MyAxMS43MTYgNS4yMjAxM0MxMi4xNDY3IDUuOTI3NzkgMTEuOTIyMiA2Ljg1MDYyIDExLjIxNDUgNy4yODEzM0w0LjI3OTg3IDExLjUwMkM0LjA0NDg4IDExLjY0NTEgMy43NzUwOSAxMS43MjA3IDMuNSAxMS43MjA3QzIuNjcxNTcgMTEuNzIwNyAyIDExLjA0OTEgMiAxMC4yMjA3VjEuNzc5M1pNMTAuNjk0NiA1LjU3Mjg5TDMuNzU5OTYgMS4zNTIxOUMzLjUyNDA3IDEuMjA4NjIgMy4yMTY0NiAxLjI4MzQ2IDMuMDcyODkgMS41MTkzNEMzLjAyNTIyIDEuNTk3NjcgMyAxLjY4NzYgMyAxLjc3OTNWMTAuMjIwN0MzIDEwLjQ5NjggMy4yMjM4NiAxMC43MjA3IDMuNSAxMC43MjA3QzMuNTkxNyAxMC43MjA3IDMuNjgxNjMgMTAuNjk1NSAzLjc1OTk2IDEwLjY0NzhMMTAuNjk0NiA2LjQyNzExQzEwLjkzMDUgNi4yODM1NCAxMS4wMDUzIDUuOTc1OTMgMTAuODYxOCA1Ljc0MDA0QzEwLjgyMDIgNS42NzE3NyAxMC43NjI5IDUuNjE0NDUgMTAuNjk0NiA1LjU3Mjg5WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/play
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Play: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Pc
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEgMUMxMS41NTIzIDEgMTIgMS40NDc3MiAxMiAyVjhDMTIgOC41NTIyOCAxMS41NTIzIDkgMTEgOUg4VjEwSDlWMTFIM1YxMEg0VjlIMUMwLjQ0NzcxNSA5IDAgOC41NTIyOCAwIDhWMkMwIDEuNDQ3NzIgMC40NDc3MTUgMSAxIDFIMTFaTTUgMTBIN1Y5SDVWMTBaTTEgOEgxMVYySDFWOFoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/pc
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Pc: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Pound
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzkuMzEzNzEgMCAxMiAyLjY4NjI5IDEyIDZDMTIgOS4zMTM3MSA5LjMxMzcxIDEyIDYgMTJDMi42ODYyOSAxMiAwIDkuMzEzNzEgMCA2QzAgMi42ODYyOSAyLjY4NjI5IDAgNiAwWk02IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFaTTguNDk1MTIgMi41NzAzMUw4LjI5MTAyIDRIOVY1SDguMTQ4NDRMNy44NjIzIDdIOC41VjhINy43MTk3M0w3LjQ5NTEyIDkuNTcwMzFMNi41MDQ4OCA5LjQyOTY5TDYuNzA4OTggOEg0LjcxOTczTDQuNDk1MTIgOS41NzAzMUwzLjUwNDg4IDkuNDI5NjlMMy43MDg5OCA4SDNWN0gzLjg1MTU2TDQuMTM3NyA1SDMuNVY0SDQuMjgwMjdMNC41MDQ4OCAyLjQyOTY5TDUuNDk1MTIgMi41NzAzMUw1LjI5MTAyIDRINy4yODAyN0w3LjUwNDg4IDIuNDI5NjlMOC40OTUxMiAyLjU3MDMxWk00Ljg2MjMgN0g2Ljg1MTU2TDcuMTM3NyA1SDUuMTQ4NDRMNC44NjIzIDdaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/pound
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Pound: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Quote
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy41IDBDOC4yNzk3IDAgOC45MjA0NSAwLjU5NDg4OCA4Ljk5MzEzIDEuMzU1NTRMOSAxLjVWNy41QzkgOC4yNzk3IDguNDA1MTEgOC45MjA0NSA3LjY0NDQ2IDguOTkzMTNMNy41IDlINVY4SDcuNUM3Ljc0NTQ2IDggNy45NDk2MSA3LjgyMzEyIDcuOTkxOTQgNy41ODk4OEw4IDcuNVYxLjVDOCAxLjI1NDU0IDcuODIzMTIgMS4wNTAzOSA3LjU4OTg4IDEuMDA4MDZMNy41IDFIMS41QzEuMjU0NTQgMSAxLjA1MDM5IDEuMTc2ODggMS4wMDgwNiAxLjQxMDEyTDEgMS41VjcuNUMxIDcuNzQ1NDYgMS4xNzY4OCA3Ljk0OTYxIDEuNDEwMTIgNy45OTE5NEwxLjUgOEgyVjlIMS41QzAuNzIwMzA0IDkgMC4wNzk1NTEzIDguNDA1MTEgMC4wMDY4NjY1OCA3LjY0NDQ2TDAgNy41VjEuNUMwIDAuNzIwMzA0IDAuNTk0ODg4IDAuMDc5NTUxMyAxLjM1NTU0IDAuMDA2ODY2NThMMS41IDBINy41WiIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBkPSJNNyAzVjRINC41QzQuMjU0NTQgNCA0LjA1MDM5IDQuMTc2ODggNC4wMDgwNiA0LjQxMDEyTDQgNC41VjEwLjVDNCAxMC43NDU1IDQuMTc2ODggMTAuOTQ5NiA0LjQxMDEyIDEwLjk5MTlMNC41IDExSDEwLjVDMTAuNzQ1NSAxMSAxMC45NDk2IDEwLjgyMzEgMTAuOTkxOSAxMC41ODk5TDExIDEwLjVWNC41QzExIDQuMjU0NTQgMTAuODIzMSA0LjA1MDM5IDEwLjU4OTkgNC4wMDgwNkwxMC41IDRIMTBWM0gxMC41QzExLjI3OTcgMyAxMS45MjA0IDMuNTk0ODkgMTEuOTkzMSA0LjM1NTU0TDEyIDQuNVYxMC41QzEyIDExLjI3OTcgMTEuNDA1MSAxMS45MjA0IDEwLjY0NDUgMTEuOTkzMUwxMC41IDEySDQuNUMzLjcyMDMgMTIgMy4wNzk1NSAxMS40MDUxIDMuMDA2ODcgMTAuNjQ0NUwzIDEwLjVWNC41QzMgMy43MjAzIDMuNTk0ODkgMy4wNzk1NSA0LjM1NTU0IDMuMDA2ODdMNC41IDNIN1oiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/quote
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Quote: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Place
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzguNzYxNDIgMCAxMSAyLjIzODU4IDExIDVDMTEgNi4zMDUzOCAxMC40OTY5IDcuNTMyODcgOS42MDg0IDguNDYwOTRMOC45ODE0NSA5LjA4NjkxQzEwLjI0NzYgOS4zMzYwOCAxMC45OTk5IDkuNzMyMTggMTEgMTAuNDEyMUMxMSAxMS40NzQ0IDguODI2MTMgMTIgNiAxMkMzLjE3Mzg3IDEyIDEgMTEuNDc0NCAxIDEwLjQxMjFDMS4wMDAxMiA5Ljc0MDc0IDEuNzMyNzkgOS4zNDYwMiAzLjAyMjQ2IDkuMDkxOEwyLjM4NzcgOC40NTcwM0MxLjUwMzA1IDcuNTMyODggMSA2LjMwNTM1IDEgNUMxIDIuMjM4NTggMy4yMzg1OCAwIDYgMFpNMy42MTEzMyA5Ljk5NjA5QzMuMzE0NDkgMTAuMDQzMiAzLjA1MDkgMTAuMTAxMiAyLjgyNzE1IDEwLjE1ODJMMi41MjE0OCAxMC4yNDIyTDIuMjgyMjMgMTAuMzE2NEwyLjA3NzE1IDEwLjM4NjdMMi4xMDE1NiAxMC40MDE0QzIuMjUwODYgMTAuNDg2NyAyLjQ3NTI0IDEwLjU3MTggMi43NTg3OSAxMC42NDk0TDIuOTM1NTUgMTAuNjk1M0MzLjQ3NDMzIDEwLjgyNTUgNC4xNDk0NyAxMC45MTcxIDQuODkyNTggMTAuOTYzOUwzLjkyODcxIDkuOTk5MDJMMy42MTEzMyA5Ljk5NjA5Wk03LjEwNjQ1IDEwLjk2MzlDNy44NDk5NCAxMC45MTcxIDguNTI1NDMgMTAuODI1NiA5LjA2NDQ1IDEwLjY5NTNDOS4zNzEyIDEwLjYyMTIgOS42MjEzMyAxMC41MzgxIDkuNzk5OCAxMC40NTMxTDkuOTIyODUgMTAuMzg2N0w5LjgwMjczIDEwLjM0NDdMOS40OTgwNSAxMC4yNDUxTDkuMjAyMTUgMTAuMTYxMUM5LjAzOTY0IDEwLjExODIgOC44NTU5NyAxMC4wNzQ0IDguNjU2MjUgMTAuMDM2MUw4LjQ1MTE3IDEwSDguMDcwMzFMNy4xMDY0NSAxMC45NjM5Wk02IDFDMy43OTA4NiAxIDIgMi43OTA4NiAyIDVDMiA2LjA0NTE1IDIuNDAxOTYgNy4wMjU3OSAzLjEwNjQ1IDcuNzYxNzJMNiAxMC42NTcyTDguODg5NjUgNy43NjU2MkM5LjU5NzkyIDcuMDI1NzggMTAgNi4wNDUxNSAxMCA1QzEwIDIuNzkwODYgOC4yMDkxNCAxIDYgMVpNNiAzQzcuMTA0NTcgMyA4IDMuODk1NDMgOCA1QzggNi4xMDQ1NyA3LjEwNDU3IDcgNiA3QzQuODk1NDMgNyA0IDYuMTA0NTcgNCA1QzQgMy44OTU0MyA0Ljg5NTQzIDMgNiAzWk02IDRDNS40NDc3MiA0IDUgNC40NDc3MiA1IDVDNSA1LjU1MjI4IDUuNDQ3NzIgNiA2IDZDNi41NTIyOCA2IDcgNS41NTIyOCA3IDVDNyA0LjQ0NzcyIDYuNTUyMjggNCA2IDRaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/place
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Place: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name QuoteSmall
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNi41IDFDNy4yNzk3IDEgNy45MjA0NSAxLjU5NDg5IDcuOTkzMTMgMi4zNTU1NEw4IDIuNVY2LjVDOCA3LjI3OTcgNy40MDUxMSA3LjkyMDQ1IDYuNjQ0NDYgNy45OTMxM0w2LjUgOEg2VjdINi41QzYuNzQ1NDYgNyA2Ljk0OTYxIDYuODIzMTIgNi45OTE5NCA2LjU4OTg4TDcgNi41VjIuNUM3IDIuMjU0NTQgNi44MjMxMiAyLjA1MDM5IDYuNTg5ODggMi4wMDgwNkw2LjUgMkgyLjVDMi4yNTQ1NCAyIDIuMDUwMzkgMi4xNzY4OCAyLjAwODA2IDIuNDEwMTJMMiAyLjVWNi41QzIgNi43NDU0NiAyLjE3Njg4IDYuOTQ5NjEgMi40MTAxMiA2Ljk5MTk0TDIuNSA3SDNWOEgyLjVDMS43MjAzIDggMS4wNzk1NSA3LjQwNTExIDEuMDA2ODcgNi42NDQ0NkwxIDYuNVYyLjVDMSAxLjcyMDMgMS41OTQ4OSAxLjA3OTU1IDIuMzU1NTQgMS4wMDY4N0wyLjUgMUg2LjVaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik02IDRWNUg1LjVDNS4yNTQ1NCA1IDUuMDUwMzkgNS4xNzY4OCA1LjAwODA2IDUuNDEwMTJMNSA1LjVWOS41QzUgOS43NDU0NiA1LjE3Njg4IDkuOTQ5NjEgNS40MTAxMiA5Ljk5MTk0TDUuNSAxMEg5LjVDOS43NDU0NiAxMCA5Ljk0OTYxIDkuODIzMTIgOS45OTE5NCA5LjU4OTg4TDEwIDkuNVY1LjVDMTAgNS4yNTQ1NCA5LjgyMzEyIDUuMDUwMzkgOS41ODk4OCA1LjAwODA2TDkuNSA1SDlWNEg5LjVDMTAuMjc5NyA0IDEwLjkyMDQgNC41OTQ4OSAxMC45OTMxIDUuMzU1NTRMMTEgNS41VjkuNUMxMSAxMC4yNzk3IDEwLjQwNTEgMTAuOTIwNCA5LjY0NDQ2IDEwLjk5MzFMOS41IDExSDUuNUM0LjcyMDMgMTEgNC4wNzk1NSAxMC40MDUxIDQuMDA2ODcgOS42NDQ0Nkw0IDkuNVY1LjVDNCA0LjcyMDMgNC41OTQ4OSA0LjA3OTU1IDUuMzU1NTQgNC4wMDY4N0w1LjUgNEg2WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/quote-small
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const QuoteSmall: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Question
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzkuMzEzNzEgMCAxMiAyLjY4NjI5IDEyIDZDMTIgOS4zMTM3MSA5LjMxMzcxIDEyIDYgMTJDMi42ODYyOSAxMiAwIDkuMzEzNzEgMCA2QzAgMi42ODYyOSAyLjY4NjI5IDAgNiAwWk02IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFaTTYuNSA5LjVINS41VjhINi41VjkuNVpNNiAyLjVDNy4wNzkzMSAyLjUwMDAxIDcuOTUzODYgMy4zNzQ4NCA3Ljk1NDEgNC40NTQxQzcuOTU0MSA1LjMzNzI5IDcuMzY4NjkgNi4wODM5NSA2LjU2NDQ1IDYuMzI2MTdMNi41IDYuMzQxOFY3LjVINS41VjUuNDA5MThINkM2LjUyNzE3IDUuNDA5MTcgNi45NTQxIDQuOTgxMjggNi45NTQxIDQuNDU0MUM2Ljk1Mzg2IDMuOTI3MTMgNi41MjcwMyAzLjUwMDAxIDYgMy41QzUuNTEwNjIgMy41IDUuMTA3MDkgMy44NjgyNSA1LjA1MTc2IDQuMzQyNzdMNS4wNDU5IDQuNDU0MUg0LjA0NTlDNC4wNDYxNCAzLjM3NDg0IDQuOTIwNjggMi41IDYgMi41WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/question
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Question: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Refresh
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYgMVYwSDFWMUgyLjY4MkwyLjU1ODgzIDEuMDg0MjZDMS4wMTE1MiAyLjE2OTQzIDAgMy45NjY1OSAwIDZDMCA4LjUwMDY0IDEuNTQ0MDQgMTAuNzEyMSAzLjgzOCAxMS41OTg1TDQuMTk4NDQgMTAuNjY1N0wzLjk5NjA0IDEwLjU4MjRDMi4xOTY1MyA5Ljc5NTEyIDEgOC4wMDk2IDEgNkMxIDMuMjM4NTggMy4yMzg1OCAxIDYgMVpNMTIgNkMxMiAzLjUyMDU4IDEwLjQ4MiAxLjMyNDAxIDguMjE2NjggMC40MjI5MDlMNy44NDcwNyAxLjM1MjFMOC4wNTQyNCAxLjQzOTk0QzkuODI2OTIgMi4yMzg5NyAxMSA0LjAxMDE3IDExIDZDMTEgOC42ODg3NiA4Ljg3NzY5IDEwLjg4MTggNi4yMTY4OSAxMC45OTU0TDYgMTFWMTJIMTFWMTFMOS4zMTcgMTAuOTk5TDkuNDQxMTcgMTAuOTE1N0MxMC45ODg1IDkuODMwNTcgMTIgOC4wMzM0MSAxMiA2WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/refresh
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Refresh: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Process
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMyAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS4yODQxOCAwLjA3MTI4OTFDMTAuNjAyNSAwLjA3MTUwMTggMTEuNjcwOSAxLjE0MDY1IDExLjY3MDkgMi40NTg5OEMxMS42NzA2IDMuNTk4NTIgMTAuODcxOCA0LjU0OTc3IDkuODAzNzEgNC43ODcxMVY2LjIzMzRDMTAuMDA4NCA2LjMwNTYgMTAuMjAwNSA2LjQyMzE3IDEwLjM2NDMgNi41ODY5MUwxMS42MTkxIDcuODQxOEMxMi4yMDQ4IDguNDI3NTggMTIuMjA0OSA5LjM3NzEzIDExLjYxOTEgOS45NjI4OUwxMC4zNjQzIDExLjIxNzhDOS43Nzg0NyAxMS44MDMxIDguODI4ODIgMTEuODAzMyA4LjI0MzE2IDExLjIxNzhMNi45ODgyOCA5Ljk2Mjg5QzYuODE3NSA5Ljc5MjExIDYuNjk4MTUgOS41ODk1OSA2LjYyNjk1IDkuMzc1SDUuMjc0NDFWMTAuMDYzNUM1LjI3NDMxIDEwLjY3MDggNC43ODIxNiAxMS4xNjMgNC4xNzQ4IDExLjE2MzFIMS41OTk2MUMwLjk5MjM0MyAxMS4xNjI5IDAuNTAwMTA5IDEwLjY3MDggMC41IDEwLjA2MzVWNy40ODgyOEMwLjUwMDM0MyA2Ljg4MTE5IDAuOTkyNDg3IDYuMzg4ODggMS41OTk2MSA2LjM4ODY3SDIuMzcwMTJWNC43ODcxMUMxLjMwMDgxIDQuNTUwNTkgMC41MDAyODQgMy41OTkzIDAuNSAyLjQ1ODk4QzAuNSAxLjE0MDUxIDEuNTY5MjMgMC4wNzEyODkxIDIuODg3NyAwLjA3MTI4OTFDNC4yMDU5OCAwLjA3MTUwMTggNS4yNzQ0MSAxLjE0MDY1IDUuMjc0NDEgMi40NTg5OEM1LjI3NDEzIDMuNjExNzIgNC40NTY4MiA0LjU3MjY2IDMuMzcwMTIgNC43OTU5VjYuMzg4NjdINC4xNzQ4QzQuNzgyMDEgNi4zODg3OCA1LjI3NDA3IDYuODgxMTMgNS4yNzQ0MSA3LjQ4ODI4VjguMzc1SDYuNjQ2NDhDNi43MTkzMSA4LjE4MDgxIDYuODMyMTMgNy45OTgwNyA2Ljk4ODI4IDcuODQxOEw4LjI0MzE2IDYuNTg2OTFDOC40MDY2NiA2LjQyMzQzIDguNTk5MzYgNi4zMDY2IDguODAzNzEgNi4yMzQzOFY0Ljc5Njg4QzcuNzE1NjkgNC41NzQ1NiA2Ljg5Njc3IDMuNjEyNTggNi44OTY0OCAyLjQ1ODk4QzYuODk2NDggMS4xNDA1MyA3Ljk2NTc0IDAuMDcxMzIyMSA5LjI4NDE4IDAuMDcxMjg5MVpNOS42NTcyMyA3LjI5Mzk1QzkuNDYxOTcgNy4wOTg2OSA5LjE0NTQ2IDcuMDk4NzEgOC45NTAyIDcuMjkzOTVMNy42OTUzMSA4LjU0ODgzQzcuNTAwNDYgOC43NDQxMiA3LjUwMDE5IDkuMDYwNzMgNy42OTUzMSA5LjI1NTg2TDguOTUwMiAxMC41MTA3QzkuMTQ1MzMgMTAuNzA1OCA5LjQ2MTk2IDEwLjcwNTYgOS42NTcyMyAxMC41MTA3TDEwLjkxMjEgOS4yNTU4NkMxMS4xMDczIDkuMDYwNjMgMTEuMTA3MyA4Ljc0NDA5IDEwLjkxMjEgOC41NDg4M0w5LjY1NzIzIDcuMjkzOTVaTTEuNTk5NjEgNy4zODg2N0MxLjU0NDc3IDcuMzg4ODggMS41MDAzNCA3LjQzMzQ3IDEuNSA3LjQ4ODI4VjEwLjA2MzVDMS41MDAxMSAxMC4xMTg1IDEuNTQ0NjMgMTAuMTYyOSAxLjU5OTYxIDEwLjE2MzFINC4xNzQ4QzQuMjI5ODcgMTAuMTYzIDQuMjc0MzEgMTAuMTE4NSA0LjI3NDQxIDEwLjA2MzVWNy40ODgyOEM0LjI3NDA3IDcuNDMzNDEgNC4yMjk3MyA3LjM4ODc4IDQuMTc0OCA3LjM4ODY3SDEuNTk5NjFaTTIuODg3NyAxLjA3MTI5QzIuMTIxNTEgMS4wNzEyOSAxLjUgMS42OTI4IDEuNSAyLjQ1ODk4QzEuNTAwMzMgMy4yMjQ4OSAyLjEyMTcxIDMuODQ1NyAyLjg4NzcgMy44NDU3QzMuNjUzNSAzLjg0NTQ5IDQuMjc0MDkgMy4yMjQ3NiA0LjI3NDQxIDIuNDU4OThDNC4yNzQ0MSAxLjY5MjkzIDMuNjUzNyAxLjA3MTUgMi44ODc3IDEuMDcxMjlaTTkuMjg0MTggMS4wNzEyOUM4LjUxODAyIDEuMDcxMzIgNy44OTY0OCAxLjY5MjgyIDcuODk2NDggMi40NTg5OEM3Ljg5NjgxIDMuMjI0ODcgOC41MTgyMiAzLjg0NTY3IDkuMjg0MTggMy44NDU3QzEwLjA1IDMuODQ1NDkgMTAuNjcwNiAzLjIyNDc2IDEwLjY3MDkgMi40NTg5OEMxMC42NzA5IDEuNjkyOTMgMTAuMDUwMiAxLjA3MTUgOS4yODQxOCAxLjA3MTI5WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/process
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Process: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Seal
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy41MzAyNyAwQzcuODgyMDIgMCA4LjIyNjg3IDAuMTA1MTg0IDguNTE4NTUgMC4zMDE3NThDOS4zMjcxNyAwLjg0NzE2NSA5LjU0MDM4IDEuOTQ1MTMgOC45OTUxMiAyLjc1MzkxTDcuODM0OTYgNC40NzQ2MUM3Ljc3OTQxIDQuNTU3MDkgNy43NTAwNCA0LjY1NDUgNy43NSA0Ljc1MzkxVjUuNTI2MzdDNy43NTMxMiA1LjgwMjIxIDcuOTc5MTIgNi4wMjMxOSA4LjI1NDg4IDYuMDIwNTFMMTAuNDAyMyA1Ljk5NzA3TDEwLjU2MDUgNi4wMDM5MUMxMS4zMjEyIDYuMDc2NTkgMTEuOTE2IDYuNzE3MzcgMTEuOTE2IDcuNDk3MDdWMTAuNUMxMS45MTYgMTEuMzI4NCAxMS4yNDQ0IDEyIDEwLjQxNiAxMkgxLjU4MzAxQzAuNzU0NzUyIDExLjk5OTggMC4wODMwMTM1IDExLjMyODMgMC4wODMwMDc4IDEwLjVWNy40ODA0N0MwLjA5MjIxMDQgNi42NTIyNCAwLjc3MTQyNyA1Ljk4ODEgMS41OTk2MSA1Ljk5NzA3TDMuNzQxMjEgNi4wMjA1MUM0LjAyNTY5IDYuMDIwNTYgNC4yNSA1Ljc5NjY1IDQuMjUgNS41MjA1MVY0Ljc1MzkxQzQuMjQ5OTUgNC42NTQ0IDQuMjE5NjkgNC41NTcxMiA0LjE2NDA2IDQuNDc0NjFMMy4wMDM5MSAyLjc1MzkxQzIuODA3MzQgMi40NjIyNyAyLjcwMjE5IDIuMTE4MyAyLjcwMjE1IDEuNzY2NkMyLjcwMjE1IDAuNzkxMTg2IDMuNDkzMzggMC4wMDAxOTc5NDQgNC40Njg3NSAwSDcuNTMwMjdaTTQuNDY4NzUgMUM0LjA0NTY2IDEuMDAwMiAzLjcwMjE1IDEuMzQzNDcgMy43MDIxNSAxLjc2NjZDMy43MDIxOSAxLjkxODk0IDMuNzQ3OTcgMi4wNjc5NSAzLjgzMzAxIDIuMTk0MzRMNC45OTMxNiAzLjkxNjAyQzUuMTYwMDggNC4xNjM2NiA1LjI0OTk1IDQuNDU1MjYgNS4yNSA0Ljc1MzkxVjUuNTIwNTFDNS4yNSA2LjM0ODg4IDQuNTc4MTkgNy4wMjA0MiAzLjc0NzA3IDcuMDIwNTFMMS41ODg4NyA2Ljk5NzA3QzEuMzEzMDEgNi45OTQyIDEuMDg2MjEgNy4yMTUwMyAxLjA4MzAxIDcuNDg1MzVWMTAuNUMxLjA4MzAxIDEwLjc3NiAxLjMwNzAzIDEwLjk5OTggMS41ODMwMSAxMUgxMC40MTZDMTAuNjkyMiAxMSAxMC45MTYgMTAuNzc2MSAxMC45MTYgMTAuNVY3LjQ5NzA3QzEwLjkxNiA3LjIyMDkzIDEwLjY5MjMgNi45OTcwOCAxMC40MTg5IDYuOTk3MDdMOC4yNjY2IDcuMDIwNTFDNy40Mzg1MSA3LjAyOTUxIDYuNzU5NDMgNi4zNjU4MiA2Ljc1IDUuNTMyMjNWNC43NTM5MUM2Ljc1MDA1IDQuNDU1MzkgNi44MzkwOCA0LjE2MzU5IDcuMDA1ODYgMy45MTYwMkw4LjE2NjAyIDIuMTk0MzRDOC40MDI0IDEuODQzNDEgOC4zMDk4NSAxLjM2NzQgNy45NTg5OCAxLjEzMDg2QzcuODMyNDggMS4wNDU2NyA3LjY4Mjc5IDEgNy41MzAyNyAxSDQuNDY4NzVaTTEwIDEwSDJWOUgxMFYxMFoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/seal
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Seal: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Save
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy41ODU5NCAwQzcuOTgzNzEgNC4wMDI1OWUtMDUgOC4zNjUyMiAwLjE1ODE4NCA4LjY0NjQ4IDAuNDM5NDUzTDExLjU2MDUgMy4zNTM1MkMxMS44NDE4IDMuNjM0NzggMTIgNC4wMTYyOSAxMiA0LjQxNDA2VjEwLjVDMTIgMTEuMzI4NCAxMS4zMjg0IDEyIDEwLjUgMTJIMS41QzAuNjcxNTczIDEyIDAgMTEuMzI4NCAwIDEwLjVWMS41QzAgMC42NzE1NzMgMC42NzE1NzMgMCAxLjUgMEg3LjU4NTk0Wk0xLjUgMUMxLjIyMzg2IDEgMSAxLjIyMzg2IDEgMS41VjEwLjVDMSAxMC43NzYxIDEuMjIzODYgMTEgMS41IDExSDEwLjVDMTAuNzc2MSAxMSAxMSAxMC43NzYxIDExIDEwLjVWNC40MTQwNkMxMSA0LjI4MTUxIDEwLjk0NzIgNC4xNTQyOCAxMC44NTM1IDQuMDYwNTVMNy45Mzk0NSAxLjE0NjQ4QzcuODQ1NzIgMS4wNTI3NSA3LjcxODQ5IDEuMDAwMDQgNy41ODU5NCAxSDEuNVoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTggN0M4LjUxMjg0IDcgOC45MzU1MSA3LjM4NjA0IDguOTkzMjcgNy44ODMzOEw5IDhWMTEuNUg4VjhINFYxMS41SDNWOEMzIDcuNDg3MTYgMy4zODYwNCA3LjA2NDQ5IDMuODgzMzggNy4wMDY3M0w0IDdIOFoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTQgM1Y1SDNWM0g0WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/save
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Save: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Release
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEuMzYxMiAwLjEzMDA5OEMxMS43MzczIDAuMTgxNDUyIDEyLjAwMDMgMC41MjgzNzQgMTEuOTQ5IDAuOTA0NTEyTDEwLjUzNSAxMS4yNzg1QzEwLjUyMTcgMTEuMzc2IDEwLjQ4NjkgMTEuNDY5OCAxMC40MzQ0IDExLjU1MjlDMTAuMjMxNiAxMS44NzM4IDkuODA3MDkgMTEuOTY5NSA5LjQ4NjE1IDExLjc2NjhMNi42ODkyOCAxMC4wMDAySDIuOTUyOTVDMi41NzMzMyAxMC4wMDAyIDIuMjY1NTcgOS42OTIzMSAyLjI2NTQ1IDkuMzEyNzFDMi4yNjU0NSA5LjE2NjkyIDIuMzExODQgOS4wMjU5NyAyLjM5NjMxIDguOTA5MzlMMi40NjY2MiA4LjgyNjM5TDMuMzgxNjYgNy45MTAzN0wwLjUyNjE5MyA2LjEwNzY0QzAuNDEzMTk1IDYuMDM2MTEgMC4zMjI3ODYgNS45MzM0OCAwLjI2NzQwNCA1LjgxMTc0QzAuMTEwNDAyIDUuNDY2MTMgMC4yNjM2MyA1LjA1NzcyIDAuNjA5MjAxIDQuOTAwNjFMMTAuOTgzMiAwLjE4NTc2MkMxMS4xMDEyIDAuMTMyMTE4IDExLjIzMjcgMC4xMTI2MDkgMTEuMzYxMiAwLjEzMDA5OFpNNC45NzI0OCA3LjczMjY0TDYuOTc5MzIgOS4wMDAyMUg2Ljk5OTgzVjkuMDEyOTFMOS42MDkyIDEwLjY2MTNMMTAuODAyNiAxLjkwMzU0TDQuOTcyNDggNy43MzI2NFpNMy43MDU4OCA5LjAwMDIxSDUuMTA2MjdMNC4yNDc4NyA4LjQ1ODIyTDMuNzA1ODggOS4wMDAyMVpNMS41NDk2MyA1LjU3MDUzTDQuMTA2MjcgNy4xODU3Nkw5LjE5ODA3IDIuMDkzOTZMMS41NDk2MyA1LjU3MDUzWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/release
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Release: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Restoredefault
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS41IDBDMTAuMjc5NyAwIDEwLjkyMDQgMC41OTQ4NDkgMTAuOTkzMiAxLjM1NTQ3TDExIDEuNVY2SDEwVjEuNUMxMCAxLjI1NDU0IDkuODIzMDkgMS4wNTAxNSA5LjU4OTg0IDEuMDA3ODFMOS41IDFIMi41QzIuMjU0NTQgMSAyLjA1MDE1IDEuMTc2OTEgMi4wMDc4MSAxLjQxMDE2TDIgMS41VjEwLjVDMiAxMC43NDU1IDIuMTc2OTEgMTAuOTQ5OSAyLjQxMDE2IDEwLjk5MjJMMi41IDExSDZWMTJIMi41QzEuNzIwMzMgMTIgMS4wNzk1NSAxMS40MDUyIDEuMDA2ODQgMTAuNjQ0NUwxIDEwLjVWMS41QzEgMC43MjAzMjcgMS41OTQ4NSAwLjA3OTU1MjIgMi4zNTU0NyAwLjAwNjgzNTk0TDIuNSAwSDkuNVpNOS41IDdDMTAuODgwNyA3IDEyIDguMTE5MjkgMTIgOS41QzEyIDEwLjgyNTUgMTAuOTY4MiAxMS45MTA1IDkuNjY0MDYgMTEuOTk1MUw5LjUgMTJIN1YxMUg5LjVDMTAuMzI4NCAxMSAxMSAxMC4zMjg0IDExIDkuNUMxMSA4LjcyMDMzIDEwLjQwNTEgOC4wNzk1NSA5LjY0NDUzIDguMDA2ODRMOS41IDhIOC4yMDcwM0w5LjM1MzUyIDkuMTQ2NDhMOC42NDY0OCA5Ljg1MzUyTDYuOTg4MjggOC4xOTUzMUM2LjcxNDkxIDcuOTIxOTUgNi43MTQ5MSA3LjQ3ODQ1IDYuOTg4MjggNy4yMDUwOEM3LjA5MzI4IDcuMTAwMTYgNy4yMjgzIDcuMDMxODYgNy4zNzMwNSA3LjAwODc5TDcuNDgyNDIgN0g5LjVaTTUgN0gzVjZINVY3Wk05IDRIM1YzSDlWNFoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/restoredefault
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Restoredefault: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Ruler
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEuNjQ4MSA4LjEzNjY5TDExLjczNSA4LjIzNDM1QzEyLjExNDEgOC43MDY4NSAxMi4wODU4IDkuMzk4NTIgMTEuNjUgOS44MzU5MUw5Ljg0NTMyIDExLjY0NTVMOS43NDg2NCAxMS43MzM0QzkuMjc5MDMgMTIuMTEyMyA4LjU4OTc4IDEyLjA4MjggOC4xNTM5MiAxMS42NDU1TDUuMTk4ODQgOC43MDdMNS45MDE5NyA4LjAwNzc5TDQuOTkwODMgNy4wOTQ3TDQuOTkxODEgNy4wOTM3Mkw4Ljg1NzA0IDEwLjkzNjVMOC45MDk3OCAxMC45NzU2QzguOTg1MiAxMS4wMTM4IDkuMDc4OTcgMTEuMDAwOCA5LjE0MTIyIDEwLjkzODRMMTAuOTQ0OSA5LjEyODg4TDEwLjk4MiA5LjA3NjE0QzExLjAxOTIgOS4wMDEzMSAxMS4wMDcxIDguOTA4MDcgMTAuOTQ0OSA4Ljg0NTY4TDcuOTk0NzQgNS45MTMwNkw4LjY5NDkzIDUuMjA5OTNMNy44MDUyOSA0LjMxNzM2TDExLjY0ODEgOC4xMzY2OVpNOS43MjAzMiA4LjE3NDc4TDguOTkyNzkgOC45MDIzMkw4LjI4NTc1IDguMTk1MjlMOS4wMTMyOSA3LjQ2Nzc1TDkuNzIwMzIgOC4xNzQ3OFpNMi4zNjI5IDAuMTgzNTY2QzIuODI0ODQgLTAuMTA4Mjk4IDMuNDQyOTQgLTAuMDUxOTg1OCAzLjg0NTMyIDAuMzUxNTM1TDYuODEzMSAzLjMyMTI2TDcuODA1MjkgNC4zMTczNkw3LjEwNDExIDUuMDI4MjlMNy45OTQ3NCA1LjkxMzA2TDcuOTkwODMgNS45MTY5NkwzLjE0MTIyIDEuMDU4NTdMMy4wODg0OSAxLjAyMTQ2QzMuMDEzNzkgMC45ODQxNjYgMi45MjEwOSAwLjk5NjQ0OCAyLjg1OSAxLjA1ODU3TDEuMDU0MzEgMi44NjgxNEwxLjAxNzIgMi45MjA4N0MwLjk4MDE1MSAyLjk5NTU0IDAuOTkyNTEyIDMuMDg4OTYgMS4wNTQzMSAzLjE1MTM0TDQuOTkwODMgNy4wOTQ3TDQuMjg5NjYgNy44MDM2OEw1LjE5ODg0IDguNzA3TDUuMTkyOTggOC43MTI4NkwwLjM1MDIwNyAzLjg1OTM1TDAuMjYzMjkzIDMuNzYxNjlDLTAuMTE0NTQ3IDMuMjkwMjUgLTAuMDg1NDk1MiAyLjU5ODQzIDAuMzUwMjA3IDIuMTYxMTFMMi4xNTM5MiAwLjM1MTUzNUwyLjI1MDYgMC4yNjM2NDVMMi4zNjI5IDAuMTgzNTY2Wk04LjI2NjIyIDYuNzIwNjhMNy41Mzg2OCA3LjQ0ODIxTDYuODMxNjUgNi43NDExOEw3LjU1ODIyIDYuMDEzNjRMOC4yNjYyMiA2LjcyMDY4Wk01LjkwMTk3IDQuMzU3MzlMNS4xNzQ0MyA1LjA4Mzk2TDQuNDY3MzkgNC4zNzY5M0w1LjE5NDkzIDMuNjQ5MzlMNS45MDE5NyA0LjM1NzM5Wk00LjQ0Nzg2IDIuOTAyMzJMMy43MjAzMiAzLjYyOTg2TDMuMDEzMjkgMi45MjI4MkwzLjc0MDgzIDIuMTk1MjlMNC40NDc4NiAyLjkwMjMyWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/ruler
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Ruler: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Shutdown
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy4yNzM0NCAxLjgwNzYyQzEuODY1OTYgMi43MjUxNyAxIDQuMjg4NjYgMSA2QzEgOC43NjE0MiAzLjIzODU4IDExIDYgMTFDOC43NjE0MiAxMSAxMSA4Ljc2MTQyIDExIDZDMTEgNC4zNzE0NiAxMC4yMTU3IDIuODc2ODQgOC45MjY3NiAxLjk0NTMxTDguNzI5NDkgMS44MTA1NUw5LjI3NjM3IDAuOTcyNjU2QzEwLjk2MTkgMi4wNzMzMiAxMiAzLjk0ODczIDEyIDZDMTIgOS4zMTM3MSA5LjMxMzcxIDEyIDYgMTJDMi42ODYyOSAxMiAwIDkuMzEzNzEgMCA2QzMuMDg1MTJlLTA3IDQuMDMyNzQgMC45NTQ3MjcgMi4yMjc3MSAyLjUxOTUzIDEuMTEyM0wyLjcyNzU0IDAuOTcwNzAzTDMuMjczNDQgMS44MDc2MlpNNi41IDZINS41VjBINi41VjZaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/shutdown
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Shutdown: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name SignEqual
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExIDVWNEgxVjVIMTFaTTExIDhWN0gxVjhIMTFaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sign-equal
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const SignEqual: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Search
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNSAwQzcuNzYxNDIgMCAxMCAyLjIzODU4IDEwIDVDMTAgNi4yMDA2NCA5LjU3NjQ0IDcuMzAyMTMgOC44NzEwOSA4LjE2NDA2TDExLjg1MzUgMTEuMTQ2NUwxMS4xNDY1IDExLjg1MzVMOC4xNjQwNiA4Ljg3MTA5QzcuMzAyMTMgOS41NzY0NCA2LjIwMDY0IDEwIDUgMTBDMi4yMzg1OCAxMCAwIDcuNzYxNDIgMCA1QzAgMi4yMzg1OCAyLjIzODU4IDAgNSAwWk01IDFDMi43OTA4NiAxIDEgMi43OTA4NiAxIDVDMSA3LjIwOTE0IDIuNzkwODYgOSA1IDlDNy4yMDkxNCA5IDkgNy4yMDkxNCA5IDVDOSAyLjc5MDg2IDcuMjA5MTQgMSA1IDFaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/search
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Search: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Short
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzkuMzEzNzEgMCAxMiAyLjY4NjI5IDEyIDZDMTIgOS4zMTM3MSA5LjMxMzcxIDEyIDYgMTJDMi42ODYyOSAxMiAwIDkuMzEzNzEgMCA2QzAgMi42ODYyOSAyLjY4NjI5IDAgNiAwWk02IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFaTTggNEg1VjUuNUg3QzcuNTUyMjggNS41IDggNS45NDc3MiA4IDYuNVY4QzggOC41NTIyOCA3LjU1MjI4IDkgNyA5SDRWOEg3VjYuNUg1QzQuNDgyMzIgNi41IDQuMDU2MjEgNi4xMDY2NyA0LjAwNDg4IDUuNjAyNTRDNC4wMDE0NSA1LjU2ODg0IDQgNS41MzQ2MSA0IDUuNVY0QzQgMy45NjUzOSA0LjAwMTQ1IDMuOTMxMTYgNC4wMDQ4OCAzLjg5NzQ2QzQuMDU2MjEgMy4zOTMzMyA0LjQ4MjMyIDMgNSAzSDhWNFoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/short
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Short: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name SignExclamatory
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNi41IDExSDUuNVY5LjVINi41VjExWk02LjUgOEg1LjVWMUg2LjVWOFoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/sign-exclamatory
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const SignExclamatory: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Setting
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS4zMjkxIDAuMTU4MjcyQzUuNzUxMyAtMC4wNTI3NTc1IDYuMjQ4NyAtMC4wNTI3NTc1IDYuNjcwOSAwLjE1ODI3MkwxMC42NzA5IDIuMTU4MjdDMTEuMTc4OSAyLjQxMjMgMTEuNDk5OCAyLjkzMjA4IDExLjUgMy41MDAwN1Y4LjUxMzc0QzExLjUgOS4wODE4IDExLjE3ODkgOS42MDE0IDEwLjY3MDkgOS44NTU1NEw2LjY3MDkgMTEuODU1NUM2LjI0ODYxIDEyLjA2NjcgNS43NTEzOSAxMi4wNjY3IDUuMzI5MSAxMS44NTU1TDEuMzI5MSA5Ljg1NTU0QzAuODIxMDg2IDkuNjAxNCAwLjUgOS4wODE4IDAuNSA4LjUxMzc0VjMuNTAwMDdDMC41MDAxNjQgMi45MzIwOCAwLjgyMTA1NSAyLjQxMjMgMS4zMjkxIDIuMTU4MjdMNS4zMjkxIDAuMTU4MjcyWk02LjIyMzYzIDEuMDUyOEM2LjA4Mjk2IDAuOTgyNTM3IDUuOTE3MDQgMC45ODI1MzcgNS43NzYzNyAxLjA1MjhMMS43NzYzNyAzLjA1MjhDMS42MDcxIDMuMTM3NDMgMS41MDAxNiAzLjMxMDg1IDEuNSAzLjUwMDA3VjguNTEzNzRDMS41IDguNzAzMDIgMS42MDcxNCA4Ljg3NjI2IDEuNzc2MzcgOC45NjEwMUw1Ljc3NjM3IDEwLjk2MUM1LjkxNzEzIDExLjAzMTQgNi4wODI4NyAxMS4wMzE0IDYuMjIzNjMgMTAuOTYxTDEwLjIyMzYgOC45NjEwMUMxMC4zOTI5IDguODc2MjYgMTAuNSA4LjcwMzAyIDEwLjUgOC41MTM3NFYzLjUwMDA3QzEwLjQ5OTggMy4zMTA4NSAxMC4zOTI5IDMuMTM3NDMgMTAuMjIzNiAzLjA1MjhMNi4yMjM2MyAxLjA1MjhaTTYgNC4wMDQ5NUM3LjEwNDUzIDQuMDA0OTUgNy45OTk5MyA0LjkwMDQ0IDggNi4wMDQ5NUM4IDcuMTA5NTIgNy4xMDQ1NyA4LjAwNDk1IDYgOC4wMDQ5NUM0Ljg5NTQzIDguMDA0OTUgNCA3LjEwOTUyIDQgNi4wMDQ5NUM0LjAwMDA3IDQuOTAwNDQgNC44OTU0NyA0LjAwNDk1IDYgNC4wMDQ5NVpNNiA1LjAwNDk1QzUuNDQ3NzYgNS4wMDQ5NSA1LjAwMDA3IDUuNDUyNzIgNSA2LjAwNDk1QzUgNi41NTcyNCA1LjQ0NzcyIDcuMDA0OTUgNiA3LjAwNDk1QzYuNTUyMjggNy4wMDQ5NSA3IDYuNTU3MjQgNyA2LjAwNDk1QzYuOTk5OTMgNS40NTI3MiA2LjU1MjI0IDUuMDA0OTUgNiA1LjAwNDk1WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/setting
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Setting: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name SignMinus
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEgNS41VjYuNUgxVjUuNUgxMVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/sign-minus
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const SignMinus: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name SignCross
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuMTQ2NSAxLjE0NjQ1TDEwLjg1MzYgMS44NTM1NUw2LjcwNzAxIDZMMTAuODUzNiAxMC4xNDY0TDEwLjE0NjUgMTAuODUzNkw2LjAwMDAxIDYuNzA3TDEuODUzNTYgMTAuODUzNkwxLjE0NjQ1IDEwLjE0NjRMNS4yOTMwMSA2TDEuMTQ2NDUgMS44NTM1NUwxLjg1MzU2IDEuMTQ2NDVMNi4wMDAwMSA1LjI5M0wxMC4xNDY1IDEuMTQ2NDVaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sign-cross
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const SignCross: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name SignPound
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC45OTQxNCAxLjA3NDIyTDguNzA1MDggM0gxMC41VjRIOC41NTU2Nkw3Ljk1NTA4IDhIMTBWOUg3LjgwNTY2TDcuNDk0MTQgMTEuMDc0Mkw2LjUwNTg2IDEwLjkyNThMNi43OTQ5MiA5SDMuODA1NjZMMy40OTQxNCAxMS4wNzQyTDIuNTA1ODYgMTAuOTI1OEwyLjc5NDkyIDlIMVY4SDIuOTQ0MzRMMy41NDQ5MiA0SDEuNVYzSDMuNjk0MzRMNC4wMDU4NiAwLjkyNTc4MUw0Ljk5NDE0IDEuMDc0MjJMNC43MDUwOCAzSDcuNjk0MzRMOC4wMDU4NiAwLjkyNTc4MUw4Ljk5NDE0IDEuMDc0MjJaTTMuOTU1MDggOEg2Ljk0NDM0TDcuNTQ0OTIgNEg0LjU1NTY2TDMuOTU1MDggOFoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/sign-pound
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const SignPound: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name SignPlus
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNi41IDUuNUgxMVY2LjVINi41VjExSDUuNVY2LjVIMVY1LjVINS41VjFINi41VjUuNVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/sign-plus
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const SignPlus: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name SortDrag
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUgMVYzSDNWMUg1Wk01IDVWN0gzVjVINVpNNSAxMVY5SDNWMTFINVoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDFWM0g3VjFIOVpNOSA1VjdIN1Y1SDlaTTkgMTFWOUg3VjExSDlaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sort-drag
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const SortDrag: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name LogoQQ
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTMiIHZpZXdCb3g9IjAgMCAxMiAxMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuNzgxOCAwLjAwNDgxMjE5TDUuOTk5OTUgMEw2LjIxNzI2IDAuMDA0NzgxMjNDOC42NDc3NiAwLjExMjcyMyAxMC4wMTU2IDIuMDM4MDggMTAuMTAwMSA0LjczODI3TDEwLjEwNCA1LjAxMkwxMC41MTkgNi4wNjE3TDEwLjYyOTEgNi4zNTc5M0wxMC43NTk2IDYuNzM0ODdMMTAuODM0NiA2Ljk3MDJDMTAuODc0IDcuMDk3OTQgMTAuOTEwNiA3LjIyMzE2IDEwLjk0NDMgNy4zNDU2NEwxMS4wMzYyIDcuNzA0NThDMTEuMzY2MyA5LjEwNTQgMTEuMjMyOCAxMC4wNzU4IDEwLjE4MDggMTAuMjA0NUMxMC4xMzM2IDEwLjIxMDIgMTAuMDg4NiAxMC4yMTQzIDEwLjA0NTYgMTAuMjE2NkwxMC4wMjUgMTAuMjE2TDEwLjA0NDggMTAuMjVDMTAuMTgyNSAxMC41MjM2IDEwLjE5OTIgMTAuODQzMyAxMC4wMjYxIDExLjIwOTFMOS45NTIyMSAxMS4zNDg1QzkuNjA5ODQgMTEuOTMxMyA4LjUyNTkgMTIuMDc1NSA3LjIzMTc5IDEyLjAyMzJMNi43OTMzNyAxMS45OTg5TDYuMzQzNzYgMTEuOTYxOUw2IDExLjkyNkw1LjY0NTk5IDExLjk2MjlMNS4xNzU0MyAxMi4wMDFDMy43ODAyIDEyLjA5NTYgMi41NTU0NyAxMi4wMDIgMi4xMTIzIDExLjQ0MThMMi4wNDg0OCAxMS4zNDg3QzEuNzk5MDggMTAuOTI0NCAxLjgwMDgyIDEwLjU1ODEgMS45NTU1NiAxMC4yNTA0TDEuOTc0IDEwLjIxNkwxLjk1NDI5IDEwLjIxNjZMMS44MTg5OSAxMC4yMDQ0QzAuNzY3MTM0IDEwLjA3NTkgMC42MzM2OCA5LjEwNTQ0IDAuOTYzODI0IDcuNzA0NThMMS4wNTU3NSA3LjM0NTYzQzEuMDg5NDQgNy4yMjMxNiAxLjEyNjA5IDcuMDk3OTMgMS4xNjU0MiA2Ljk3MDE5QzEuMjE1MzIgNi44MDgxMiAxLjI2Nzk4IDYuNjQ4NzcgMS4zMjU1NSA2LjQ4NDk2TDEuNDI3NzIgNi4yMDI5N0wxLjU0NjU2IDUuODkxMzZMMS44OTUgNS4wMTJMMS44OTkzOCA0LjczNDg4QzEuOTgxMjMgMi4wNDc0NyAzLjM0MzE3IDAuMTEzMzUzIDUuNzgxOCAwLjAwNDgxMjE5Wk05LjEwMTkxIDUuMTk4NDlDOS4xNTc4OCAyLjg3NzYgOC4yMDEzOCAxLjAwMDEyIDYgMUMzLjc3MzgzIDEuMDAwMTIgMi44MzkgMi45MTUyOSAyLjg5ODEzIDUuMTk4NDdMMi40OTQ5NSA2LjIxMTc3TDIuMzMyNzkgNi42Mzg3OUMyLjI1NjcxIDYuODQ2NTUgMi4xODczNCA3LjA0OTQ2IDIuMTIxMTQgNy4yNjQ0NkMxLjY5OTc3IDguNjMyODIgMS44MzYzIDkuMTk5MTEgMS45NDAyMyA5LjIxMTgxQzIuMDY3NyA5LjIyNzM1IDIuMzMzIDguODg4NzcgMi41MzY5OSA4LjU5NTcxTDIuNjc1MzcgOC4zOTA2OUwyLjgwODQ4IDguMTgxNzFDMi44MDg0OCA4Ljc5Mzk1IDMuMTIwODUgOS41OTI5IDMuNzk2NzIgMTAuMTY5OEwzLjY0NzUgMTAuMjE5MkwzLjQ3MzQ3IDEwLjI4NDhMMy4yOTMzNyAxMC4zNjQ1QzMuMDI4MDYgMTAuNDkzNiAyLjgwNTU2IDEwLjY2MzMgMi45MTA2IDEwLjg0MkMyLjk3MTI4IDEwLjk0NTMgMy40MjYxNCAxMC45ODgzIDMuOTc4MTUgMTAuOTk3OUw0LjM1NzI5IDEwLjk5OTZMNC43NDU2NSAxMC45OTMxTDUuMTIzNjkgMTAuOTgwMkw1LjQ3MTg1IDEwLjk2MjdMNS43NzA1NiAxMC45NDIzTDYuMDAwMjcgMTAuOTIwOEw2LjIyOTk5IDEwLjk0MjNMNi41Mjg3IDEwLjk2MjdMNy4wNjMzNiAxMC45ODczTDcuNDQ5MDEgMTAuOTk3Mkw3LjgzNTIgMTAuOTk5OUw4LjIwMjM5IDEwLjk5MzRDOC42NzA2MiAxMC45NzggOS4wMzYwMSAxMC45MzM4IDkuMDg5OTUgMTAuODQyQzkuMTgzMjcgMTAuNjgzMSA5LjAxNzYgMTAuNTMxMyA4Ljc5MzIxIDEwLjQwODlMOC42MTcwMyAxMC4zMjI5TDguNDM3NiAxMC4yNUw4LjIwMzQzIDEwLjE2OTdDOC44NzkyMSA5LjU5Mjc4IDkuMTkxNTIgOC43OTM5MiA5LjE5MTUyIDguMTgxNzFMOS4yMjc5MSA4LjI0MDJMOS4zODk3OCA4LjQ4ODcyTDkuNTQyIDguNzA2OTZDOS43MzExOCA4Ljk2Nzg5IDkuOTQ4MjUgOS4yMjU0MSAxMC4wNTk4IDkuMjExODFDMTAuMTYzNyA5LjE5OTA5IDEwLjMwMDIgOC42MzI4MiA5Ljg3ODkgNy4yNjQ0NkM5LjgxMjg4IDcuMDUwMDkgOS43NDM1MSA2Ljg0NzIyIDkuNjY3MzcgNi42MzkyOUw5LjUwNTAzIDYuMjExNzhMOS4xMDE5MSA1LjE5ODQ5WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/logo-q-q
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const LogoQQ: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name SignTick
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEuMTQ2NSAyLjE0NjQ1TDExLjg1MzYgMi44NTM1NUw1LjU2MDY3IDkuMTQ2NDVDNS4wMTE0OSA5LjY5NTYyIDQuMTQyNDMgOS43Mjk5NCAzLjU1MzI3IDkuMjQ5NDJMMy40MzkzNSA5LjE0NjQ1TDAuMTQ2NDU0IDUuODUzNTVMMC44NTM1NjEgNS4xNDY0NUw0LjE0NjQ1IDguNDM5MzRDNC4zMjAwMiA4LjYxMjkxIDQuNTg5NDQgOC42MzIxOSA0Ljc4NDMxIDguNDk3MTlMNC44NTM1NiA4LjQzOTM0TDExLjE0NjUgMi4xNDY0NVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/sign-tick
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const SignTick: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Signin
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS41IDBDNi4yNzk2NyAwIDYuOTIwNDUgMC41OTQ4NDkgNi45OTMxNiAxLjM1NTQ3TDcgMS41VjJINlYxLjVDNiAxLjI1NDU0IDUuODIzMDkgMS4wNTAxNSA1LjU4OTg0IDEuMDA3ODFMNS41IDFIMS41QzEuMjU0NTQgMSAxLjA1MDE1IDEuMTc2OTEgMS4wMDc4MSAxLjQxMDE2TDEgMS41VjEwLjVDMSAxMC43NDU1IDEuMTc2OTEgMTAuOTQ5OSAxLjQxMDE2IDEwLjk5MjJMMS41IDExSDUuNUM1Ljc0NTQ2IDExIDUuOTQ5ODUgMTAuODIzMSA1Ljk5MjE5IDEwLjU4OThMNiAxMC41VjEwSDdWMTAuNUM3IDExLjI3OTcgNi40MDUxNSAxMS45MjA0IDUuNjQ0NTMgMTEuOTkzMkw1LjUgMTJIMS41QzAuNzIwMzI3IDEyIDAuMDc5NTUyNCAxMS40MDUyIDAuMDA2ODM1OTQgMTAuNjQ0NUwwIDEwLjVWMS41QzAgMC43MjAzMjcgMC41OTQ4NDkgMC4wNzk1NTIyIDEuMzU1NDcgMC4wMDY4MzU5NEwxLjUgMEg1LjVaTTExIDEwLjVDMTEgMTEuMjc5NyAxMC40MDUyIDExLjkyMDQgOS42NDQ1MyAxMS45OTMyTDkuNSAxMkg4VjExSDkuNUM5Ljc0NTQ2IDExIDkuOTQ5ODUgMTAuODIzMSA5Ljk5MjE5IDEwLjU4OThMMTAgMTAuNVY4SDExVjEwLjVaTTcuODUzNTIgMy44NTM1Mkw2LjIwNzAzIDUuNUgxMVY2LjVINi4yMDcwM0w3Ljg1MzUyIDguMTQ2NDhMNy4xNDY0OCA4Ljg1MzUyTDQuODIzMjQgNi41MzAyN0M0LjU1Njk5IDYuMjY0MDEgNC41MzMxMyA1Ljg0NzMyIDQuNzUwOTggNS41NTM3MUw0LjgyMzI0IDUuNDY5NzNMNy4xNDY0OCAzLjE0NjQ4TDcuODUzNTIgMy44NTM1MlpNOS41IDBDMTAuMjc5NyAwIDEwLjkyMDQgMC41OTQ4NDkgMTAuOTkzMiAxLjM1NTQ3TDExIDEuNVY0SDEwVjEuNUMxMCAxLjI1NDU0IDkuODIzMDkgMS4wNTAxNSA5LjU4OTg0IDEuMDA3ODFMOS41IDFIOFYwSDkuNVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/signin
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Signin: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name SortFilterDown
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNyAyVjNIMVYySDdaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik02IDlWMTBIMVY5SDZaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik03IDUuNVY2LjVIMVY1LjVIN1oiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTEwIDEwLjI5M0wxMS4xNDY1IDkuMTQ2NDhMMTEuODUzNSA5Ljg1MzUyTDkuOTQyMzggMTEuNzY1NkM5LjcyNTQ3IDExLjk4MjUgOS4zODgxIDEyLjAwNjUgOS4xNDQ1MyAxMS44Mzc5TDkuMDU3NjIgMTEuNzY1Nkw3LjE0NjQ4IDkuODUzNTJMNy44NTM1MiA5LjE0NjQ4TDkgMTAuMjkzVjFIMTBWMTAuMjkzWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/sort-filter-down
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const SortFilterDown: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name SortFilterUp
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAyVjNIMVYySDZaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik03IDlWMTBIMVY5SDdaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik03IDUuNVY2LjVIMVY1LjVIN1oiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTkuMDU3NjIgMC4yMzQ5OThDOS4yNzQ1OCAwLjAxODAzOTkgOS42MTE4OCAtMC4wMDYwMTI4NCA5Ljg1NTQ3IDAuMTYyNzMyTDkuOTQyMzggMC4yMzQ5OThMMTEuODUzNSAyLjE0NjEzTDExLjE0NjUgMi44NTMxNkwxMCAxLjcwNjY4VjEwLjk5OTZIOVYxLjcwNjY4TDcuODUzNTIgMi44NTMxNkw3LjE0NjQ4IDIuMTQ2MTNMOS4wNTc2MiAwLjIzNDk5OFoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/sort-filter-up
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const SortFilterUp: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name SortOrder
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC42NDY0NSA3LjY0NjQ1TDkuMzUzNTUgOC4zNTM1NUw2LjcwNzExIDExQzYuMzQ2NjIgMTEuMzYwNSA1Ljc3OTM5IDExLjM4ODIgNS4zODcxIDExLjA4MzJMNS4yOTI4OSAxMUwyLjY0NjQ1IDguMzUzNTVMMy4zNTM1NSA3LjY0NjQ1TDYgMTAuMjkyOUw4LjY0NjQ1IDcuNjQ2NDVaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIG9wYWNpdHk9IjAuMiIgZD0iTTUuMjkyODkgMUM1LjY1MzM4IDAuNjM5NTE3IDYuMjIwNjEgMC42MTE3ODcgNi42MTI5IDAuOTE2ODEyTDYuNzA3MTEgMUw5LjM1MzU1IDMuNjQ2NDVMOC42NDY0NSA0LjM1MzU1TDYgMS43MDcxMUwzLjM1MzU1IDQuMzUzNTVMMi42NDY0NSAzLjY0NjQ1TDUuMjkyODkgMVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/sort-order
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const SortOrder: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Sort
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC42NDY0NSA3LjY0NjQ1TDkuMzUzNTUgOC4zNTM1NUw2LjcwNzExIDExQzYuMzQ2NjIgMTEuMzYwNSA1Ljc3OTM5IDExLjM4ODIgNS4zODcxIDExLjA4MzJMNS4yOTI4OSAxMUwyLjY0NjQ1IDguMzUzNTVMMy4zNTM1NSA3LjY0NjQ1TDYgMTAuMjkyOUw4LjY0NjQ1IDcuNjQ2NDVaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik01LjI5Mjg5IDFDNS42NTMzOCAwLjYzOTUxNyA2LjIyMDYxIDAuNjExNzg3IDYuNjEyOSAwLjkxNjgxMkw2LjcwNzExIDFMOS4zNTM1NSAzLjY0NjQ1TDguNjQ2NDUgNC4zNTM1NUw2IDEuNzA3MTFMMy4zNTM1NSA0LjM1MzU1TDIuNjQ2NDUgMy42NDY0NUw1LjI5Mjg5IDFaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sort
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Sort: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Stop
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuNSAxSDkuNUMxMC4zMjg0IDEgMTEgMS42NzE1NyAxMSAyLjVWOS41QzExIDEwLjMyODQgMTAuMzI4NCAxMSA5LjUgMTFIMi41QzEuNjcxNTcgMTEgMSAxMC4zMjg0IDEgOS41VjIuNUMxIDEuNjcxNTcgMS42NzE1NyAxIDIuNSAxWk05LjUgMkgyLjVDMi4yMjM4NiAyIDIgMi4yMjM4NiAyIDIuNVY5LjVDMiA5Ljc3NjE0IDIuMjIzODYgMTAgMi41IDEwSDkuNUM5Ljc3NjE0IDEwIDEwIDkuNzc2MTQgMTAgOS41VjIuNUMxMCAyLjIyMzg2IDkuNzc2MTQgMiA5LjUgMloiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/stop
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Stop: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name StringTypeFloat
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgMUMxMC41NTIzIDEgMTEgMS42NzE1NyAxMSAyLjVWOS41QzExIDEwLjMyODQgMTAuNTUyMyAxMSAxMCAxMUgyQzEuNDQ3NzIgMTEgMSAxMC4zMjg0IDEgOS41VjIuNUMxIDEuNjcxNTcgMS40NDc3MiAxIDIgMUgxMFpNMi4yOTk4IDJDMi4xMzQyMSAyLjAwMDE4IDIgMi4yMjM5NyAyIDIuNVY5LjVDMiA5Ljc3NjAzIDIuMTM0MjEgOS45OTk4MiAyLjI5OTggMTBIOS43MDAyQzkuODY1NzkgOS45OTk4MiAxMCA5Ljc3NjAzIDEwIDkuNVYyLjVDMTAgMi4yMjM5NyA5Ljg2NTc5IDIuMDAwMTggOS43MDAyIDJIMi4yOTk4Wk00IDlIM1Y4SDRWOVpNNyAzQzcuNTUyMjggMyA4IDMuNDQ3NzIgOCA0VjhIOVY5SDVWOEg3VjRINlYzSDdaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/string-type-float
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const StringTypeFloat: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name SuccessfulTranslation
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTY0Ml84MDM3KSI+CjxwYXRoIGQ9Ik0xMCAwQzExLjEwNDYgMCAxMiAwLjg5NTQzIDEyIDJWNi44NDc2NkwxMSA2VjJDMTEgMS40ODcxNiAxMC42MTM1IDEuMDY0NiAxMC4xMTYyIDEuMDA2ODRMMTAgMUgyQzEuNDg3MTYgMSAxLjA2NDYgMS4zODY0NSAxLjAwNjg0IDEuODgzNzlMMSAyVjEwQzEgMTAuNTEyOCAxLjM4NjQ1IDEwLjkzNTQgMS44ODM3OSAxMC45OTMyTDIgMTFINi4xNzU3OEw3LjE0NjQ4IDEySDJDMC44OTU0MyAxMiAwIDExLjEwNDYgMCAxMFYyQzAgMC44OTU0MyAwLjg5NTQzIDAgMiAwSDEwWk0xMS44ODM4IDguMzIwMzFMOS42OTYyOSAxMC45NDI0QzkuNjkwNTggMTAuOTQ4NCA5LjY4MzE2IDEwLjk1NjIgOS42NzI4NSAxMC45NjY4QzkuMzEyNDEgMTEuMzI2NyA4Ljc0NTYgMTEuMzU0NSA4LjM1MzUyIDExLjA0OThMOC4yNTg3OSAxMC45NjY4TDcuMTQ2NDggOS44NTM1Mkw3Ljg1MzUyIDkuMTQ2NDhMOC45NjU4MiAxMC4yNTk4TDExLjExNTIgNy42Nzk2OUwxMS44ODM4IDguMzIwMzFaTTUuNTcwMzEgMi43MDcwM0M1Ljc0NDI0IDIuMzU3ODUgNi4yMzQyNCAyLjMzNSA2LjQ1MDIgMi42Mzc3TDYuNDkyMTkgMi43MDcwM0w4LjYxODE2IDYuOTgyNDJMNy44OTY0OCA3LjgxNDQ1TDcuNTY1NDMgNy4xNDk0MUg0LjQ5NjA5TDMuNTAzOTEgOS4xNDU1MUMzLjM5MzIyIDkuMzY3NzQgMy4xMzQ0OSA5LjQ3NDE2IDIuODk4NDQgOS40MDYyNUwyLjgyMDMxIDkuMzc2OTVDMi41OTE2OSA5LjI2OTQzIDIuNDgyOTUgOS4wMTgyMSAyLjU1MjczIDguNzg5MDZMMi41ODIwMyA4LjcxMjg5TDUuNTcwMzEgMi43MDcwM1pNNC45OTMxNiA2LjE0OTQxSDcuMDY3MzhMNi4wMzEyNSA0LjA2NTQzTDQuOTkzMTYgNi4xNDk0MVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjQyXzgwMzciPgo8cmVjdCB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==) - https://lucide.dev/icons/successful-translation
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const SuccessfulTranslation: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name StringTypeBlob
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuNSAxQzExLjMyODQgMSAxMiAxLjY3MTU3IDEyIDIuNVY5LjVDMTIgMTAuMzI4NCAxMS4zMjg0IDExIDEwLjUgMTFIMS41QzAuNjcxNTczIDExIDAgMTAuMzI4NCAwIDkuNVYyLjVDMCAxLjY3MTU3IDAuNjcxNTczIDEgMS41IDFIMTAuNVpNMS41IDJDMS4yMjM4NiAyIDEgMi4yMjM4NiAxIDIuNVY5LjVDMSA5Ljc3NjE0IDEuMjIzODYgMTAgMS41IDEwSDEwLjVDMTAuNzc2MSAxMCAxMSA5Ljc3NjE0IDExIDkuNVYyLjVDMTEgMi4yMjM4NiAxMC43NzYxIDIgMTAuNSAySDEuNVpNNS41IDZDNi4zMjg0MyA2IDcgNi42NzE1NyA3IDcuNUM3IDguMzI4NDMgNi4zMjg0MyA5IDUuNSA5QzQuNjcxNTcgOSA0IDguMzI4NDMgNCA3LjVDNCA2LjY3MTU3IDQuNjcxNTcgNiA1LjUgNlpNNS41IDdDNS4yMjM4NiA3IDUgNy4yMjM4NiA1IDcuNUM1IDcuNzc2MTQgNS4yMjM4NiA4IDUuNSA4QzUuNzc2MTQgOCA2IDcuNzc2MTQgNiA3LjVDNiA3LjIyMzg2IDUuNzc2MTQgNyA1LjUgN1pNOC41IDRDOS4zMjg0MyA0IDEwIDQuNjcxNTcgMTAgNS41QzEwIDYuMzI4NDMgOS4zMjg0MyA3IDguNSA3QzcuNjcxNTcgNyA3IDYuMzI4NDMgNyA1LjVDNyA0LjY3MTU3IDcuNjcxNTcgNCA4LjUgNFpNMy41IDNDNC4zMjg0MyAzIDUgMy42NzE1NyA1IDQuNUM1IDUuMzI4NDMgNC4zMjg0MyA2IDMuNSA2QzIuNjcxNTcgNiAyIDUuMzI4NDMgMiA0LjVDMiAzLjY3MTU3IDIuNjcxNTcgMyAzLjUgM1pNOC41IDVDOC4yMjM4NiA1IDggNS4yMjM4NiA4IDUuNUM4IDUuNzc2MTQgOC4yMjM4NiA2IDguNSA2QzguNzc2MTQgNiA5IDUuNzc2MTQgOSA1LjVDOSA1LjIyMzg2IDguNzc2MTQgNSA4LjUgNVpNMy41IDRDMy4yMjM4NiA0IDMgNC4yMjM4NiAzIDQuNUMzIDQuNzc2MTQgMy4yMjM4NiA1IDMuNSA1QzMuNzc2MTQgNSA0IDQuNzc2MTQgNCA0LjVDNCA0LjIyMzg2IDMuNzc2MTQgNCAzLjUgNFoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/string-type-blob
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const StringTypeBlob: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name StringTypeDouble
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgMUMxMC41NTIzIDEgMTEgMS42NzE1NyAxMSAyLjVWNUMxMS4yNzYxIDUgMTEuNSA1LjIyMzg2IDExLjUgNS41VjYuNUMxMS41IDYuNzc2MTQgMTEuMjc2MSA3IDExIDdWOS41QzExIDEwLjMyODQgMTAuNTUyMyAxMSAxMCAxMUgyQzEuNDQ3NzIgMTEgMSAxMC4zMjg0IDEgOS41VjdDMC43MjM4NTggNyAwLjUgNi43NzYxNCAwLjUgNi41VjUuNUMwLjUgNS4yMjM4NiAwLjcyMzg1OCA1IDEgNVYyLjVDMSAxLjY3MTU3IDEuNDQ3NzIgMSAyIDFIMTBaTTIuMjk5OCAyQzIuMTM0MjEgMi4wMDAxOCAyIDIuMjIzOTcgMiAyLjVWNUwyLjEwMDU5IDUuMDA5NzdDMi4zMjg1NSA1LjA1NjI5IDIuNSA1LjI1ODI5IDIuNSA1LjVWNi41QzIuNSA2Ljc3NjE0IDIuMjc2MTQgNyAyIDdWOS41QzIgOS43NzYwMyAyLjEzNDIxIDkuOTk5ODIgMi4yOTk4IDEwSDkuNzAwMkM5Ljg2NTc5IDkuOTk5ODIgMTAgOS43NzYwMyAxMCA5LjVWN0M5LjcyMzg2IDcgOS41IDYuNzc2MTQgOS41IDYuNVY1LjVDOS41IDUuMjIzODYgOS43MjM4NiA1IDEwIDVWMi41QzEwIDIuMjIzOTcgOS44NjU3OSAyLjAwMDE4IDkuNzAwMiAySDIuMjk5OFpNNCA5SDNWOEg0VjlaTTcgM0M3LjU1MjI4IDMgOCAzLjQ0NzcyIDggNFY4SDlWOUg1VjhIN1Y0SDZWM0g3WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/string-type-double
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const StringTypeDouble: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name StringTypeLong
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzkuMzEzNzEgMCAxMiAyLjY4NjI5IDEyIDZDMTIgOS4zMTM3MSA5LjMxMzcxIDEyIDYgMTJDMi42ODYyOSAxMiAwIDkuMzEzNzEgMCA2QzAgMi42ODYyOSAyLjY4NjI5IDAgNiAwWk02IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFaTTUgOEg4VjlINUM0LjQ4MjMyIDkgNC4wNTYyMSA4LjYwNjY3IDQuMDA0ODggOC4xMDI1NEM0LjAwMTQ1IDguMDY4ODQgNCA4LjAzNDYxIDQgOFYzSDVWOFoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/string-type-long
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const StringTypeLong: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name StringTypeBigDeciaml
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMiAwLjVDMi4yNzYxNCAwLjUgMi41IDAuNzIzODU4IDIuNSAxSDkuNUM5LjUgMC43MjM4NTggOS43MjM4NiAwLjUgMTAgMC41SDExQzExLjI3NjEgMC41IDExLjUgMC43MjM4NTggMTEuNSAxVjJDMTEuNSAyLjI3NjE0IDExLjI3NjEgMi41IDExIDIuNVY5LjVDMTEuMjc2MSA5LjUgMTEuNSA5LjcyMzg2IDExLjUgMTBWMTFDMTEuNSAxMS4yNzYxIDExLjI3NjEgMTEuNSAxMSAxMS41SDEwQzkuNzIzODYgMTEuNSA5LjUgMTEuMjc2MSA5LjUgMTFIMi41QzIuNSAxMS4yNzYxIDIuMjc2MTQgMTEuNSAyIDExLjVIMUMwLjcyMzg1OCAxMS41IDAuNSAxMS4yNzYxIDAuNSAxMVYxMEMwLjUgOS43MjM4NiAwLjcyMzg1OCA5LjUgMSA5LjVWMi41QzAuNzIzODU4IDIuNSAwLjUgMi4yNzYxNCAwLjUgMlYxQzAuNSAwLjcyMzg1OCAwLjcyMzg1OCAwLjUgMSAwLjVIMlpNMi40OTAyMyAyLjEwMDU5QzIuNDQzNzEgMi4zMjg1NSAyLjI0MTcxIDIuNSAyIDIuNVY5LjVMMi4xMDA1OSA5LjUwOTc3QzIuMzI4NTUgOS41NTYyOSAyLjUgOS43NTgyOSAyLjUgMTBIOS41QzkuNSA5LjcyMzg2IDkuNzIzODYgOS41IDEwIDkuNVYyLjVDOS43MjM4NiAyLjUgOS41IDIuMjc2MTQgOS41IDJIMi41TDIuNDkwMjMgMi4xMDA1OVpNNCA5SDNWOEg0VjlaTTcgM0M3LjU1MjI4IDMgOCAzLjQ0NzcyIDggNFY4SDlWOUg1VjhIN1Y0SDZWM0g3WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/string-type-big-deciaml
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const StringTypeBigDeciaml: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name TickUnselected
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNkMwIDIuNjg2MjkgMi42ODYyOSAwIDYgMEM5LjMxMzcxIDAgMTIgMi42ODYyOSAxMiA2QzEyIDkuMzEzNzEgOS4zMTM3MSAxMiA2IDEyQzIuNjg2MjkgMTIgMCA5LjMxMzcxIDAgNlpNMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNloiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/tick-unselected
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const TickUnselected: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name SortInvertedOrder
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBvcGFjaXR5PSIwLjIiIGQ9Ik04LjY0NjQ1IDcuNjQ2NDVMOS4zNTM1NSA4LjM1MzU1TDYuNzA3MTEgMTFDNi4zNDY2MiAxMS4zNjA1IDUuNzc5MzkgMTEuMzg4MiA1LjM4NzEgMTEuMDgzMkw1LjI5Mjg5IDExTDIuNjQ2NDUgOC4zNTM1NUwzLjM1MzU1IDcuNjQ2NDVMNiAxMC4yOTI5TDguNjQ2NDUgNy42NDY0NVoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTUuMjkyODkgMUM1LjY1MzM4IDAuNjM5NTE3IDYuMjIwNjEgMC42MTE3ODcgNi42MTI5IDAuOTE2ODEyTDYuNzA3MTEgMUw5LjM1MzU1IDMuNjQ2NDVMOC42NDY0NSA0LjM1MzU1TDYgMS43MDcxMUwzLjM1MzU1IDQuMzUzNTVMMi42NDY0NSAzLjY0NjQ1TDUuMjkyODkgMVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/sort-inverted-order
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const SortInvertedOrder: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Time
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzkuMzEzNzEgMCAxMiAyLjY4NjI5IDEyIDZDMTIgOS4zMTM3MSA5LjMxMzcxIDEyIDYgMTJDMi42ODYyOSAxMiAwIDkuMzEzNzEgMCA2QzAgMi42ODYyOSAyLjY4NjI5IDAgNiAwWk02IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFaTTYuNSA1Ljc5Mjk3TDcuODUzNTIgNy4xNDY0OEw3LjE0NjQ4IDcuODUzNTJMNS43OTI5NyA2LjVDNS42MzY4IDYuMzQzODMgNS41Mzc2IDYuMTQxMzMgNS41MDg3OSA1LjkyNDhMNS41IDUuNzkyOTdWM0g2LjVWNS43OTI5N1oiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/time
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Time: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Tool
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuMjk4OCAwLjAwNjgzNTk0QzEwLjcwOTkgMC4wNzAzMTAxIDEwLjg5NjggMC41ODc0NjkgMTAuNTg2IDAuODk4NDM4TDkuNTU1NjggMS45Mjg3MVYyLjQ0NDM0SDEwLjA3MDNMMTEuMTAxNiAxLjQxNDA2TDExLjE2NiAxLjM1ODRDMTEuNTAxNiAxLjExMjU5IDEyIDEuMzQ2NDEgMTIgMS43ODYxM0MxMiA0LjAwMzIyIDEwLjI0MTQgNS44MDgwMSA4LjA0Mjk4IDUuODg0NzdMMi42ODY1NCAxMS4yNDIyQzIuMTUzNzYgMTEuNzc0OSAxLjI5MDU4IDExLjc3NDkgMC43NTc4MjYgMTEuMjQyMkMwLjIyNTA3NSAxMC43MDk0IDAuMjI1MTExIDkuODQ2MjUgMC43NTc4MjYgOS4zMTM0OEw2LjExNDI3IDMuOTU2MDVDNi4xOTE1MSAxLjc1ODEzIDcuOTk3MTEgMCAxMC4yMTM5IDBMMTAuMjk4OCAwLjAwNjgzNTk0Wk03LjExMTM0IDQuMTY0MDZDNy4xMTEyOSA0LjI5ODM2IDcuMDU3OTEgNC40Mjc0NSA2Ljk2MjkgNC41MjI0NkwxLjQ2NDg2IDEwLjAyMDVDMS4zMjI2NyAxMC4xNjI4IDEuMzIyNjMgMTAuMzkyOSAxLjQ2NDg2IDEwLjUzNTJDMS42MDcwOSAxMC42Nzc0IDEuODM3MjYgMTAuNjc3MyAxLjk3OTUxIDEwLjUzNTJMNy40Nzc1NSA1LjAzNzExQzcuNTcyNTQgNC45NDIxMiA3LjcwMTYzIDQuODg4NzIgNy44MzU5NSA0Ljg4ODY3SDcuODk3NDdDOS4wNTExNSA0Ljg4ODYxIDEwLjA1NTMgNC4yNTc2OSAxMC41ODk5IDMuMzIzMjRDMTAuNDgwNSAzLjQwMDQzIDEwLjM1MDUgMy40NDQyNiAxMC4yMTQ5IDMuNDQ0MzRIOS4xMzE4NUM4LjgxMzYgMy40NDQyOCA4LjU1NTc0IDMuMTg2NDEgOC41NTU2OCAyLjg2ODE2VjEuNzg1MTZDOC41NTU3NSAxLjY0OTQ3IDguNTk4NTIgMS41MTg1NCA4LjY3NTc5IDEuNDA5MThDNy43NDE1MiAxLjk0MzgyIDcuMTExNDEgMi45NDg5OSA3LjExMTM0IDQuMTAyNTRWNC4xNjQwNloiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTcuNDc5OTkgNy40ODAwNkM4LjAxMjc1IDYuOTQ3MyA4Ljg3NTkzIDYuOTQ3MzQgOS40MDg3MSA3LjQ4MDA2TDExLjI0MjcgOS4zMTMwNkMxMS43NzU0IDkuODQ1ODQgMTEuNzc1NCAxMC43MSAxMS4yNDI3IDExLjI0MjhDMTAuNzEgMTEuNzc1NSA5Ljg0NTc4IDExLjc3NTQgOS4zMTMgMTEuMjQyOEw3LjQ3OTk5IDkuNDA4NzdDNi45NDcyOCA4Ljg3NTk5IDYuOTQ3MjQgOC4wMTI4MSA3LjQ3OTk5IDcuNDgwMDZaTTguNzAxNjcgOC4xODcwOUM4LjU1OTQyIDguMDQ0OSA4LjMyOTI1IDguMDQ0ODYgOC4xODcwMyA4LjE4NzA5QzguMDQ0OCA4LjMyOTMxIDguMDQ0ODMgOC41NTk0OSA4LjE4NzAzIDguNzAxNzRMMTAuMDIgMTAuNTM1N0MxMC4xNjIzIDEwLjY3NzkgMTAuMzkzNCAxMC42Nzc5IDEwLjUzNTcgMTAuNTM1N0MxMC42Nzc5IDEwLjM5MzUgMTAuNjc3OCAxMC4xNjIzIDEwLjUzNTcgMTAuMDIwMUw4LjcwMTY3IDguMTg3MDlaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik04LjE4NzAxIDcuNDgwMDRMNy40Nzk5OCA4LjE4NzA3TDYuODY4NjUgNy41NzU3NEw3LjU3NTY4IDYuODY4NzFMOC4xODcwMSA3LjQ4MDA0WiIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBkPSJNMS4wOTY3MyAwLjEyNTk2OUMxLjI4ODI4IC0wLjAwNzg5OTU5IDEuNTQ2MDkgLTAuMDE0MjMxNiAxLjc0NjE0IDAuMTE5MTMzTDQuMzcwMTcgMS44NjgxNkM0LjY2NDAyIDIuMDY0MzQgNC43MTQzNyAyLjQ3Njc1IDQuNDc1NjMgMi43MzczTDQuMTQ4NDkgMy4wOTM3NEwzLjQ2MDk5IDIuNDYzODZMMS40Nzk1NCAxLjE0MjU3TDEuMTQyNjMgMS40Nzk0OUwyLjQxMDIgMy4zODE4M0wyLjg0MjgyIDIuOTUwMTlMMi45MzI2NyAyLjg3Njk1QzMuMTU2MzEgMi43MjkwNyAzLjQ2MDIxIDIuNzUzNDEgMy42NTcyNyAyLjk1MDE5TDUuMTMwOTEgNC40MjM4Mkw0LjQyMzg4IDUuMTMwODVMMy4yNTAwNSAzLjk1NzAyTDIuNzUyOTggNC40NTQwOUMyLjQ5NTc4IDQuNzExMjkgMi4wNjcwNCA0LjY2ODg0IDEuODY1MjggNC4zNjYyTDAuMTE5MTg5IDEuNzQ2MDlDLTAuMDMzMjE0IDEuNTE3NDggLTAuMDAzNzkyMTUgMS4yMTI4MyAwLjE5MDQ3OCAxLjAxODU1TDEuMDE4NiAwLjE5MDQyM0wxLjA5NjczIDAuMTI1OTY5WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/tool
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Tool: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name TowardsDown
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNi41IDkuNzkyOTdMOS4xNDY0OCA3LjE0NjQ4TDkuODUzNTIgNy44NTM1Mkw2LjcwNzAzIDExQzYuMzQ2NTUgMTEuMzYwNCA1Ljc3ODk5IDExLjM4OCA1LjM4NjcyIDExLjA4M0w1LjI5Mjk3IDExTDIuMTQ2NDggNy44NTM1MkwyLjg1MzUyIDcuMTQ2NDhMNS41IDkuNzkyOTdWMUg2LjVWOS43OTI5N1oiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/towards-down
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const TowardsDown: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Tick
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzkuMzEzNzEgMCAxMiAyLjY4NjI5IDEyIDZDMTIgOS4zMTM3MSA5LjMxMzcxIDEyIDYgMTJDMi42ODYyOSAxMiAwIDkuMzEzNzEgMCA2QzAgMi42ODYyOSAyLjY4NjI5IDAgNiAwWk02IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFaTTkuMzgzNzkgNC44ODM3OUw2LjIzNzMgOC4wMzAyN0M1Ljg3NjgyIDguMzkwNzIgNS4zMDkyNyA4LjQxODI5IDQuOTE2OTkgOC4xMTMyOEw0LjgyMzI0IDguMDMwMjdMMy4xNzY3NiA2LjM4Mzc5TDMuODgzNzkgNS42NzY3Nkw1LjUzMDI3IDcuMzIzMjRMOC42NzY3NiA0LjE3Njc2TDkuMzgzNzkgNC44ODM3OVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/tick
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Tick: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Timing
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAxQzcuMjEwNDkgMSA4LjMyODkzIDEuMzkyMDMgOS4yMzczIDIuMDU0NjlMMTAuMTQ2NSAxLjE0NjQ4TDEwLjg1MzUgMS44NTM1Mkw5Ljk4OTI2IDIuNzE2OEMxMC45MjQ2IDMuNzAyNzggMTEuNSA1LjAzMzY1IDExLjUgNi41QzExLjUgOS41Mzc1NyA5LjAzNzU3IDEyIDYgMTJDMi45NjI0MyAxMiAwLjUgOS41Mzc1NyAwLjUgNi41QzAuNSA1LjAzMzg5IDEuMDc0NjggMy43MDI3MyAyLjAwOTc3IDIuNzE2OEwxLjE0NjQ4IDEuODUzNTJMMS44NTM1MiAxLjE0NjQ4TDIuNzYxNzIgMi4wNTQ2OUMzLjY3MDIxIDEuMzkxNzQgNC43ODkyMyAxIDYgMVpNNiAyQzMuNTE0NzIgMiAxLjUgNC4wMTQ3MiAxLjUgNi41QzEuNSA4Ljk4NTI4IDMuNTE0NzIgMTEgNiAxMUM4LjQ4NTI4IDExIDEwLjUgOC45ODUyOCAxMC41IDYuNUMxMC41IDQuMDE0NzIgOC40ODUyOCAyIDYgMlpNNi41IDYuNzkyOTdMNy44NTM1MiA4LjE0NjQ4TDcuMTQ2NDggOC44NTM1Mkw1Ljc5Mjk3IDcuNUM1LjYzNjggNy4zNDM4MyA1LjUzNzYgNy4xNDEzMyA1LjUwODc5IDYuOTI0OEw1LjUgNi43OTI5N1Y0SDYuNVY2Ljc5Mjk3Wk04LjUgMUgzLjVWMEg4LjVWMVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/timing
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Timing: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name TowardsRight
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEgNS4yOTI5N0MxMS4zNjA1IDUuNjUzNDUgMTEuMzg4IDYuMjIxIDExLjA4MyA2LjYxMzI4TDExIDYuNzA3MDNMNy44NTM1MiA5Ljg1MzUyTDcuMTQ2NDggOS4xNDY0OEw5Ljc5Mjk3IDYuNUgxVjUuNUg5Ljc5Mjk3TDcuMTQ2NDggMi44NTM1Mkw3Ljg1MzUyIDIuMTQ2NDhMMTEgNS4yOTI5N1oiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/towards-right
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const TowardsRight: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name TowardsLeft
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC44NTM1NCAyLjg1MzUyTDIuMjA3MDUgNS41SDExVjYuNUgyLjIwNzA1TDQuODUzNTQgOS4xNDY0OEw0LjE0NjUxIDkuODUzNTJMMS4wMDAwMiA2LjcwNzAzQzAuNjM5NTM3IDYuMzQ2NTUgMC42MTE5ODggNS43NzkwMSAwLjkxNzAxMyA1LjM4NjcyTDEuMDAwMDIgNS4yOTI5N0w0LjE0NjUxIDIuMTQ2NDhMNC44NTM1NCAyLjg1MzUyWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/towards-left
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const TowardsLeft: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name TranslationOk
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTY0Ml84MDM2KSI+CjxwYXRoIGQ9Ik0xMCAwQzExLjEwNDYgMCAxMiAwLjg5NTQzIDEyIDJWMTBDMTIgMTEuMTA0NiAxMS4xMDQ2IDEyIDEwIDEySDJDMC44OTU0MyAxMiAwIDExLjEwNDYgMCAxMFYyQzAgMC44OTU0MyAwLjg5NTQzIDAgMiAwSDEwWk0yIDFDMS40ODcxNiAxIDEuMDY0NiAxLjM4NjQ1IDEuMDA2ODQgMS44ODM3OUwxIDJWMTBDMSAxMC41MTI4IDEuMzg2NDUgMTAuOTM1NCAxLjg4Mzc5IDEwLjk5MzJMMiAxMUgxMEMxMC41MTI4IDExIDEwLjkzNTQgMTAuNjEzNSAxMC45OTMyIDEwLjExNjJMMTEgMTBWMkMxMSAxLjQ4NzE2IDEwLjYxMzUgMS4wNjQ2IDEwLjExNjIgMS4wMDY4NEwxMCAxSDJaTTUuNTcxMjkgMi43MDcwM0M1Ljc0NTMxIDIuMzU4MDEgNi4yMzQzIDIuMzM0OTkgNi40NTAyIDIuNjM3N0w2LjQ5MjE5IDIuNzA3MDNMOS40ODA0NyA4LjcxMjg5QzkuNjAzNDQgOC45NjAwNSA5LjQ5NjY3IDkuMjU3NTIgOS4yNDIxOSA5LjM3Njk1QzkuMDEzMzggOS40ODQyMiA4Ljc0MzEyIDkuNDExMjggOC42MDE1NiA5LjIxNTgyTDguNTU4NTkgOS4xNDU1MUw3LjU2NTQzIDcuMTQ5NDFINC40OTcwN0wzLjUwMzkxIDkuMTQ1NTFDMy4zOTMyMyA5LjM2NzkzIDMuMTM0NjIgOS40NzQzMSAyLjg5ODQ0IDkuNDA2MjVMMi44MjEyOSA5LjM3Njk1QzIuNTkyNCA5LjI2OTUzIDIuNDgyOTEgOS4wMTgzNSAyLjU1MjczIDguNzg5MDZMMi41ODMwMSA4LjcxMjg5TDUuNTcxMjkgMi43MDcwM1pNNC45OTMxNiA2LjE0OTQxSDcuMDY3MzhMNi4wMzEyNSA0LjA2NTQzTDQuOTkzMTYgNi4xNDk0MVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjQyXzgwMzYiPgo8cmVjdCB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==) - https://lucide.dev/icons/translation-ok
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const TranslationOk: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name TowardsUp
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS4yOTI5NyAxLjAwMDAxQzUuNjUzNDUgMC42Mzk1MyA2LjIyMDk5IDAuNjExOTgxIDYuNjEzMjggMC45MTcwMDZMNi43MDcwMyAxLjAwMDAxTDkuODUzNTIgNC4xNDY1TDkuMTQ2NDggNC44NTM1M0w2LjUgMi4yMDcwNFYxMUg1LjVWMi4yMDcwNEwyLjg1MzUyIDQuODUzNTNMMi4xNDY0OCA0LjE0NjVMNS4yOTI5NyAxLjAwMDAxWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/towards-up
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const TowardsUp: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Trajectory
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMiAwLjVDMi4zNjk5NyAwLjUgMi42OTIyNyAwLjcwMTMzNSAyLjg2NTIzIDFIOC4yNUM5Ljc2ODc4IDEgMTEgMi4yMzEyMiAxMSAzLjc1QzExIDUuMjEyMzggOS44NTg1NCA2LjQwODMyIDguNDE3OTcgNi40OTUxMkw4LjI1IDYuNUgzLjc1QzIuNzgzNSA2LjUgMiA3LjI4MzUgMiA4LjI1QzIgOS4xNjgxNiAyLjcwNzEgOS45MjExMiAzLjYwNjQ1IDkuOTk0MTRMMy43NSAxMEg5LjEzNDc3QzkuMzA3NzMgOS43MDEzMyA5LjYzMDAzIDkuNSAxMCA5LjVDMTAuNTUyMyA5LjUgMTEgOS45NDc3MiAxMSAxMC41QzExIDExLjA1MjMgMTAuNTUyMyAxMS41IDEwIDExLjVDOS42MzAwMyAxMS41IDkuMzA3NzMgMTEuMjk4NyA5LjEzNDc3IDExSDMuNzVDMi4yMzEyMiAxMSAxIDkuNzY4NzggMSA4LjI1QzEgNi43ODc2MiAyLjE0MTQ2IDUuNTkxNjggMy41ODIwMyA1LjUwNDg4TDMuNzUgNS41SDguMjVDOS4yMTY1IDUuNSAxMCA0LjcxNjUgMTAgMy43NUMxMCAyLjgzMTg0IDkuMjkyOSAyLjA3ODg4IDguMzkzNTUgMi4wMDU4Nkw4LjI1IDJIMi44NjUyM0MyLjY5MjI3IDIuMjk4NjcgMi4zNjk5NyAyLjUgMiAyLjVDMS40NDc3MiAyLjUgMSAyLjA1MjI4IDEgMS41QzEgMC45NDc3MTUgMS40NDc3MiAwLjUgMiAwLjVaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/trajectory
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Trajectory: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Unlike
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuNTAyIDBDMTEuMzMwNCAwIDEyLjAwMiAwLjY3MTU3MyAxMi4wMDIgMS41VjYuNUMxMi4wMDIgNy4zMjg0MyAxMS4zMzA0IDggMTAuNTAyIDhIOS43MjA3TDkuNTc5MSA4LjE1MzMyQzkuMjEzNzEgOC41NjQzMyA4Ljg5NzAyIDguOTg1MzUgOC42Mjk4OCA5LjQxNjk5TDguNDM5NDUgOS43NDMxNkM4LjIzMDIgMTAuMTE5OCA4LjA3MzYyIDEwLjQ4MzkgNy45NzA3IDEwLjgzNTlDNy43NjkxOCAxMS41MjU1IDcuMTM3MzQgMTEuOTk5OSA2LjQxODk1IDEyQzUuNjEwMDcgMTIgNC45NTQwOSAxMS4zNDQgNC45NTQxIDEwLjUzODFMNC45NTk5NiAxMC4yMjE3QzQuOTY3NyAxMC4wMTM0IDQuOTgyNzggOS44MTAyOCA1LjAwNDg4IDkuNjExMzNDNS4wNTU4NCA5LjE1MjgyIDUuMTY2MzIgOC42MTY0MSA1LjMzNDk2IDhIMi42MjAxMkMxLjIzOTQxIDggMC4xMjAxMTcgNi44ODA3MSAwLjEyMDExNyA1LjVDMC4xMjAxMTcgNS4yOTA5MiAwLjE0NjM5OCA1LjA4MjQ0IDAuMTk4MjQyIDQuODc5ODhMMC45NjU4MiAxLjg3OTg4QzEuMjQ5MDMgMC43NzM3MzYgMi4yNDU4NyA3LjE5Mzg1ZS0wNSAzLjM4NzcgMEgxMC41MDJaTTMuMzg3NyAxQzIuNzAyNjIgMS4wMDAwNyAyLjEwNDQ4IDEuNDY0MjUgMS45MzQ1NyAyLjEyNzkzTDEuMTY2OTkgNS4xMjc5M0MxLjEzNTg5IDUuMjQ5NDYgMS4xMjAxMiA1LjM3NDU1IDEuMTIwMTIgNS41QzEuMTIwMTIgNi4zMjg0MyAxLjc5MTY5IDcgMi42MjAxMiA3SDUuMzM2OTFDNS40MjQ4NSA3LjAwMDE3IDUuNTEyOCA3LjAxMjEgNS41OTc2NiA3LjAzNTE2QzYuMTMwMzcgNy4xODAxNyA2LjQ0NDk4IDcuNzI5NTEgNi4yOTk4IDguMjYyN0M2LjE0MzgyIDguODMyODEgNi4wNDM2NSA5LjMyMDE0IDUuOTk5MDIgOS43MjE2OEM1Ljk2OTg5IDkuOTgzODcgNS45NTQ4OCAxMC4yNTUzIDUuOTU0MSAxMC41MzAzTDUuOTYxOTEgMTAuNjE1MkM2LjAwMTQgMTAuODM1NyA2LjE5MDk4IDExIDYuNDE4OTUgMTFDNi42OTMxIDEwLjk5OTkgNi45MzQ4MSAxMC44MTg4IDcuMDExNzIgMTAuNTU1N0M3LjEzNjI5IDEwLjEyOTUgNy4zMjAyNyA5LjY5NjM2IDcuNTY0NDUgOS4yNTY4NEM3Ljk0MTIxIDguNTc4NjggOC40MjA4NSA3LjkyODQ2IDkgNy4zMDQ2OVYxSDMuMzg3N1pNMTAgN0gxMC41MDJDMTAuNzc4MSA3IDExLjAwMiA2Ljc3NjE0IDExLjAwMiA2LjVWMS41QzExLjAwMiAxLjIyMzg2IDEwLjc3ODEgMSAxMC41MDIgMUgxMFY3WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/unlike
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Unlike: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Translation
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMyAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQ4MTMgMS43MUMxMC40ODEzIDAuNzY1NTkzIDkuNzE1NzQgMCA4Ljc3MTMzIDBIMS43MUMwLjc2NTU5MyAwIDAgMC43NjU1OTMgMCAxLjcxVjEwLjgxODdDMCAxMS4wNTY4IDAuMDk5MzAwNiAxMS4yODQyIDAuMjczOTk0IDExLjQ0NkMwLjYyMDQyIDExLjc2NjkgMS4xNjEzOCAxMS43NDYyIDEuNDgyMjYgMTEuMzk5N0wzLjExNjkzIDkuNjM0OTNINi4yMDYzM0M4LjU2NzM1IDkuNjM0OTMgMTAuNDgxMyA3LjcyMDk1IDEwLjQ4MTMgNS4zNTk5M1YxLjcxWk0xLjcxIDAuODU1SDguNzcxMzNMOC44Nzg1OCAwLjg2MTY2MkM5LjMwMDE2IDAuOTE0NDIxIDkuNjI2MzMgMS4yNzQxMiA5LjYyNjMzIDEuNzFWNS4zNTk5M0w5LjYyMTI3IDUuNTQ3NThDOS41MjM4NSA3LjM0OTEyIDguMDMyMTggOC43Nzk5MyA2LjIwNjMzIDguNzc5OTNIMi43NDM0NUwwLjg1NSAxMC44MTg3VjEuNzFMMC44NjE2NjIgMS42MDI3NUMwLjkxNDQyMSAxLjE4MTE3IDEuMjc0MTIgMC44NTUgMS43MSAwLjg1NVpNMi40MTg3NyAyLjQ1NDIxSDQuMDMxMjhWNC4wOTAzNkgyLjQxODc3VjIuNDU0MjFaTTQuMDMxMjggNS43MjY1VjQuMDkwMzZINS42NDM3OVY1LjcyNjVINC4wMzEyOFpNNC4wMzEyOCA1LjcyNjVWNy4zNjI2NEgyLjQxODc3VjUuNzI2NUw0LjAzMTI4IDUuNzI2NVpNMTIuMDE1MyAyLjc2NTk2VjUuNzA3NThDMTIuMDE1MyA1LjkxODAyIDEyLjAwMzYgNi4xMjU3MyAxMS45ODA4IDYuMzMwMUwxMS45ODEgNi4zMjk4NEwxMiAxMS40OTU0TDkuODE0NCAxMC4xMzczQzguOTM1ODUgMTAuODA0MSA3Ljg1Mjg4IDExLjIxNTQgNi42NzYwNCAxMS4yNjA5TDYuNDU3ODIgMTEuMjY1MUg0LjQzNDc1VjEwLjQxMDFINi40NTc4MkM4Ljk4Mjc5IDEwLjQxMDEgMTEuMDQzIDguNDIwMDQgMTEuMTU1NSA1LjkyMjgzTDExLjE2MDMgNS43MDc1OFYyLjc2NTk2SDEyLjAxNTNaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/translation
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Translation: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Use
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMiA5LjVDMiA5Ljc0NTQ2IDIuMTc2OTEgOS45NDk4NSAyLjQxMDE2IDkuOTkyMTlMMi41IDEwSDRWMTFIMi41QzEuNzIwMzMgMTEgMS4wNzk1NSAxMC40MDUyIDEuMDA2ODQgOS42NDQ1M0wxIDkuNVY4SDJWOS41Wk0xMSA5LjVDMTEgMTAuMjc5NyAxMC40MDUyIDEwLjkyMDQgOS42NDQ1MyAxMC45OTMyTDkuNSAxMUg4VjEwSDkuNUM5Ljc0NTQ2IDEwIDkuOTQ5ODUgOS44MjMwOSA5Ljk5MjE5IDkuNTg5ODRMMTAgOS41VjhIMTFWOS41Wk05LjM1MzUyIDQuMzUzNTJMNS43MDcwMyA4QzUuMzQ2NTQgOC4zNjA0MyA0Ljc3ODk5IDguMzg4MDIgNC4zODY3MiA4LjA4MzAxTDQuMjkyOTcgOEwyLjY0NjQ4IDYuMzUzNTJMMy4zNTM1MiA1LjY0NjQ4TDUgNy4yOTI5N0w4LjY0NjQ4IDMuNjQ2NDhMOS4zNTM1MiA0LjM1MzUyWk00IDJIMi41QzIuMjU0NTQgMiAyLjA1MDE1IDIuMTc2OTEgMi4wMDc4MSAyLjQxMDE2TDIgMi41VjRIMVYyLjVDMSAxLjcyMDMzIDEuNTk0ODUgMS4wNzk1NSAyLjM1NTQ3IDEuMDA2ODRMMi41IDFINFYyWk05LjUgMUMxMC4yNzk3IDEgMTAuOTIwNCAxLjU5NDg1IDEwLjk5MzIgMi4zNTU0N0wxMSAyLjVWNEgxMFYyLjVDMTAgMi4yNTQ1NCA5LjgyMzA5IDIuMDUwMTUgOS41ODk4NCAyLjAwNzgxTDkuNSAySDhWMUg5LjVaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/use
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Use: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Upload
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS41NTg1OSAxLjczNTM1QzUuODAyNjcgMS40OTEyOSA2LjE5ODMxIDEuNDkxMjggNi40NDIzOCAxLjczNTM1TDEwLjY0MDYgNS45MzM1OUMxMC43NTc0IDYuMDUwNjYgMTAuODIzMSA2LjIwOTYzIDEwLjgyMzIgNi4zNzVDMTAuODIzIDYuNzE5ODQgMTAuNTQzMSA2Ljk5OTc2IDEwLjE5ODIgN0g5VjExQzguOTk5NzkgMTEuNTEyNSA4LjYxNDE2IDExLjkzNjIgOC4xMTcxOSAxMS45OTQxTDggMTJINEMzLjQ0ODA1IDExLjk5OTggMy4wMDAyMyAxMS41NTIgMyAxMVY3SDEuODAxNzZDMS42Njk2NiA2Ljk5OTkxIDEuNTQxMjggNi45NTgyMyAxLjQzNTU1IDYuODgxODRMMS4zNjAzNSA2LjgxNzM4QzEuMTE2MjggNi41NzMzMSAxLjExNjI4IDYuMTc3NjcgMS4zNjAzNSA1LjkzMzU5TDUuNTU4NTkgMS43MzUzNVpNMi43MDYwNSA2SDMuMzc1QzMuNjg4NiA2LjAwMDIxIDMuOTQ4NTQgNi4yMzE5NiAzLjk5MzE2IDYuNTMzMkw0IDYuNjI1VjExSDhWNi42MjVDOC4wMDAyMyA2LjI4MDE1IDguMjgwMTUgNi4wMDAyMyA4LjYyNSA2SDkuMjkyOTdMNiAyLjcwNzAzTDIuNzA2MDUgNlpNMTAgMEMxMC41MTI4IDAgMTAuOTM1NCAwLjM4NjQ1IDEwLjk5MzIgMC44ODM3ODlMMTEgMVYySDEwVjFIMlYySDFWMUMxIDAuNDg3MTY0IDEuMzg2NDUgMC4wNjQ2MDEgMS44ODM3OSAwLjAwNjgzNTk0TDIgMEgxMFoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/upload
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Upload: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name UserExecutor
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS45OTk5OSAwQzguMjA5MTMgMCA5Ljk5OTk5IDEuNzkwODYgOS45OTk5OSA0QzkuOTk5OTkgNC4zMjA4NiA5Ljk2MTgzIDQuNjM2OSA5Ljg4NzY5IDQuOTQzMzZMOS44MjYxNiA1LjE3MTg4TDguODY5MTMgNC44Nzg5MUM4Ljk1NTQzIDQuNTk2NzkgOC45OTk5OSA0LjMwMTY3IDguOTk5OTkgNEM4Ljk5OTk5IDIuMzQzMTUgNy42NTY4NSAxIDUuOTk5OTkgMUM0LjM0MzE5IDEuMDAwMDYgMi45OTk5OSAyLjM0MzE4IDIuOTk5OTkgNEMyLjk5OTk5IDUuNTk3NjggNC4yNDk0IDYuOTAzODcgNS44MjQyMSA2Ljk5NTEyTDUuOTk5OTkgN1Y4SDMuNTYxNTJDMi42MzcxOSA4LjAwMDA2IDEuODI0MTkgOC41OTIwNiAxLjUzMzE5IDkuNDU2MDVMMS40ODUzNCA5LjYyMTA5TDEuMjk1ODkgMTAuMzc4OUMxLjIyOTA0IDEwLjY0NjYgMS4zOTE1MyAxMC45MTgyIDEuNjU5MTcgMTAuOTg1NEwxLjcxOTcyIDEwLjk5NjFMMS43ODEyNCAxMUg1Ljk5OTk5VjEySDEuNzgxMjRDMS42NTg2IDEyIDEuNTM1OTYgMTEuOTg0OCAxLjQxNjk4IDExLjk1NTFDMC42NjA3NTcgMTEuNzY2IDAuMTgzMTEyIDExLjAzMzcgMC4yOTY4NjcgMTAuMjc4M0wwLjMyNTE4NyAxMC4xMzU3TDAuNTE0NjQgOS4zNzg5MUMwLjgzMzc0OCA4LjEwMjQ3IDEuOTA5MDUgNy4xNzMzMyAzLjE5MDQyIDcuMDIxNDhMMy4zNjIzIDcuMDA1ODZMMy4yMzgyNyA2Ljg5MzU1QzIuNTIwMjcgNi4yMDgwMSAyLjA1Njg5IDUuMjU3NDEgMi4wMDQ4NyA0LjE5OTIyTDEuOTk5OTkgNEMxLjk5OTk5IDEuNzkwOSAzLjc5MDkgNS44MTI5NWUtMDUgNS45OTk5OSAwWk0xMS44NTM1IDcuODUzNTJMOC43MDcwMiAxMUM4LjM0NjYgMTEuMzYwMyA3Ljc3OTk0IDExLjM4NzggNy4zODc2OSAxMS4wODNMNy4yOTI5NiAxMUw1LjY0NjQ4IDkuMzUzNTJMNi4zNTM1MSA4LjY0NjQ4TDcuOTk5OTkgMTAuMjkzTDExLjE0NjUgNy4xNDY0OEwxMS44NTM1IDcuODUzNTJaTTQuNzIxNjcgOC4yODUxNkM0Ljg4NDggOC41NTAwMiA1LjEyNjIxIDguNzU4MjUgNS40MTAxNSA4Ljg3OTg4TDUuNTU1NjYgOC45MzM1OUw1LjI1OTc2IDkuODg4NjdDNC43NDUwNyA5LjcyOTI5IDQuMjk3OTcgOS40MDY1MyAzLjk4MjQxIDguOTc1NTlMMy44NzAxMSA4LjgwODU5TDQuNzIxNjcgOC4yODUxNloiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/user-executor
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const UserExecutor: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name UserCCList
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS45OTk5OSAwQzguMjA5MTMgMCA5Ljk5OTk5IDEuNzkwODYgOS45OTk5OSA0QzkuOTk5OTkgNC4zMjA4NiA5Ljk2MTgzIDQuNjM2OSA5Ljg4NzY5IDQuOTQzMzZMOS44MjYxNiA1LjE3MTg4TDguODY5MTMgNC44Nzg5MUM4Ljk1NTQzIDQuNTk2NzkgOC45OTk5OSA0LjMwMTY3IDguOTk5OTkgNEM4Ljk5OTk5IDIuMzQzMTUgNy42NTY4NSAxIDUuOTk5OTkgMUM0LjM0MzE5IDEuMDAwMDYgMi45OTk5OSAyLjM0MzE4IDIuOTk5OTkgNEMyLjk5OTk5IDUuNTk3NjggNC4yNDk0IDYuOTAzODcgNS44MjQyMSA2Ljk5NTEyTDUuOTk5OTkgN1Y4SDMuNTYxNTJDMi42MzcxOSA4LjAwMDA2IDEuODI0MTkgOC41OTIwNiAxLjUzMzE5IDkuNDU2MDVMMS40ODUzNCA5LjYyMTA5TDEuMjk1ODkgMTAuMzc4OUMxLjIyOTA0IDEwLjY0NjYgMS4zOTE1MyAxMC45MTgyIDEuNjU5MTcgMTAuOTg1NEwxLjcxOTcyIDEwLjk5NjFMMS43ODEyNCAxMUg1Ljk5OTk5VjEySDEuNzgxMjRDMS42NTg2IDEyIDEuNTM1OTYgMTEuOTg0OCAxLjQxNjk4IDExLjk1NTFDMC42NjA3NTcgMTEuNzY2IDAuMTgzMTEyIDExLjAzMzcgMC4yOTY4NjcgMTAuMjc4M0wwLjMyNTE4NyAxMC4xMzU3TDAuNTE0NjQgOS4zNzg5MUMwLjgzMzc0OCA4LjEwMjQ3IDEuOTA5MDUgNy4xNzMzMyAzLjE5MDQyIDcuMDIxNDhMMy4zNjIzIDcuMDA1ODZMMy4yMzgyNyA2Ljg5MzU1QzIuNTIwMjcgNi4yMDgwMSAyLjA1Njg5IDUuMjU3NDEgMi4wMDQ4NyA0LjE5OTIyTDEuOTk5OTkgNEMxLjk5OTk5IDEuNzkwOSAzLjc5MDkgNS44MTI5NWUtMDUgNS45OTk5OSAwWk0xMS4zNzUgN0MxMS42ODg2IDcgMTEuOTQ4MyA3LjIzMTA1IDExLjk5MzIgNy41MzIyM0wxMiA3LjYyNVYxMUgxMVY4LjcwNzAzTDcuODUzNTEgMTEuODUzNUw3LjE0NjQ4IDExLjE0NjVMMTAuMjkzIDhINy45OTk5OVY3SDExLjM3NVpNNC43MjE2NyA4LjI4NTE2QzQuODg0OCA4LjU1MDAyIDUuMTI2MjEgOC43NTgyNSA1LjQxMDE1IDguODc5ODhMNS41NTU2NiA4LjkzMzU5TDUuMjU5NzYgOS44ODg2N0M0Ljc0NTA3IDkuNzI5MjkgNC4yOTc5NyA5LjQwNjUzIDMuOTgyNDEgOC45NzU1OUwzLjg3MDExIDguODA4NTlMNC43MjE2NyA4LjI4NTE2WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/user-c-c-list
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const UserCCList: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name Unlock
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOSAwQzEwLjU5NzUgMCAxMS45MDM2IDEuMjQ4NjYgMTEuOTk1MSAyLjgyMzI0TDEyIDNIMTFDMTEgMS44OTU0MyAxMC4xMDQ2IDEgOSAxQzcuOTQ1NyAxIDcuMDgyMjkgMS44MTU4MSA3LjAwNTg2IDIuODUwNTlMNyAzVjRIOC41QzkuMzI4NDMgNCAxMCA0LjY3MTU3IDEwIDUuNVYxMC41QzEwIDExLjMyODQgOS4zMjg0MyAxMiA4LjUgMTJIMS41QzAuNjcxNTczIDEyIDAgMTEuMzI4NCAwIDEwLjVWNS41QzAgNC42NzE1NyAwLjY3MTU3MyA0IDEuNSA0SDZWM0M2IDEuMzQzMTUgNy4zNDMxNSAwIDkgMFpNMS41IDVDMS4yMjM4NiA1IDEgNS4yMjM4NiAxIDUuNVYxMC41QzEgMTAuNzc2MSAxLjIyMzg2IDExIDEuNSAxMUg4LjVDOC43NzYxNCAxMSA5IDEwLjc3NjEgOSAxMC41VjUuNUM5IDUuMjIzODYgOC43NzYxNCA1IDguNSA1SDEuNVpNNS41IDlINC41VjdINS41VjlaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/unlock
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const Unlock: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name User
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzguMjA5MTQgMCAxMCAxLjc5MDg2IDEwIDRDMTAgNS4xOTk4IDkuNDcwMzkgNi4yNzQ2NSA4LjYzMzc5IDcuMDA3ODFDOS45OTE2IDcuMDkyMDcgMTEuMTUxOCA4LjA0NDY1IDExLjQ4NTQgOS4zNzg5MUwxMS42NzQ4IDEwLjEzNTdDMTEuODc1NiAxMC45MzkxIDExLjM4NzEgMTEuNzUzOCAxMC41ODQgMTEuOTU1MUMxMC40NjUyIDExLjk4NDggMTAuMzQyMiAxMiAxMC4yMTk3IDEySDEuNzgxMjVDMC45NTI4MjMgMTIgMC4yODEyNSAxMS4zMjg0IDAuMjgxMjUgMTAuNUMwLjI4MTI1IDEwLjM3NzQgMC4yOTY0MjcgMTAuMjU0NyAwLjMyNjE3MiAxMC4xMzU3TDAuNTE1NjI1IDkuMzc4OTFDMC44NDkxNDMgOC4wNDUwNCAyLjAwNzg5IDcuMDkyNDcgMy4zNjUyMyA3LjAwNzgxQzIuNTI4OTYgNi4yNzQ2NiAyIDUuMTk5NTMgMiA0QzIgMS43OTA4NiAzLjc5MDg2IDAgNiAwWk0zLjU2MjUgOEMyLjU4MDQyIDggMS43MjM2NCA4LjY2ODM5IDEuNDg1MzUgOS42MjEwOUwxLjI5NTkgMTAuMzc4OUMxLjI4NjAyIDEwLjQxODUgMS4yODEyNSAxMC40NTkyIDEuMjgxMjUgMTAuNUMxLjI4MTI1IDEwLjc3NjEgMS41MDUxMSAxMSAxLjc4MTI1IDExSDEwLjIxOTdDMTAuMjYwNCAxMSAxMC4zMDE0IDEwLjk5NTIgMTAuMzQwOCAxMC45ODU0QzEwLjYwODMgMTAuOTE4MiAxMC43NzE4IDEwLjY0NjUgMTAuNzA1MSAxMC4zNzg5TDEwLjUxNTYgOS42MjEwOUMxMC4yNzc0IDguNjY4NDggOS40MjA0IDguMDAwMjEgOC40Mzg0OCA4SDMuNTYyNVpNOC4xNzI4NSA4LjczNzNDNy43MzEyNiA5LjUxMTQ2IDYuOTA4MDEgMTAgNiAxMEM1LjE4NDQ4IDEwIDQuNDM2MTIgOS42MDU4MiAzLjk3MTY4IDguOTYxOTFMMy44NzAxMiA4LjgwOTU3TDQuNzIxNjggOC4yODUxNkM0Ljk5MzMzIDguNzI2MTggNS40NzI3MyA5IDYgOUM2LjQ5NTcyIDkgNi45NDg5MSA4Ljc1Nzk2IDcuMjI2NTYgOC4zNjQyNkw3LjMwNDY5IDguMjQxMjFMOC4xNzI4NSA4LjczNzNaTTYgMUM0LjM0MzE1IDEgMyAyLjM0MzE1IDMgNEMzIDUuNjU2ODUgNC4zNDMxNSA3IDYgN0M3LjY1Njg1IDcgOSA1LjY1Njg1IDkgNEM5IDIuMzQzMTUgNy42NTY4NSAxIDYgMVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/user
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const User: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name UserGroup
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC41IDBDNS45MzcxNyAwIDcuMTcxMDIgMC44NjY2NDggNy43MDk5NiAyLjEwNTQ3QzcuOTY0OTQgMi4wMzYwMSA4LjIzMDA3IDIgOC41IDJDMTAuMTU2OSAyIDExLjUgMy4zNDMxNSAxMS41IDVDMTEuNSA1Ljg3MDcxIDExLjEyNjYgNi42NTIxNyAxMC41MzQyIDcuMjAwMkMxMS4wMDEzIDcuNDE4OTggMTEuMzgxNyA3LjgwNDggMTEuNTg5OCA4LjI5NDkyTDExLjY1MDQgOC40NTQxTDExLjkyMjkgOS4yNzE0OEMxMi4xNTIgOS45NTk1NCAxMS43Nzk4IDEwLjcwMzMgMTEuMDkxOCAxMC45MzI2QzExLjAwMjYgMTAuOTYyMyAxMC45MTA2IDEwLjk4MjEgMTAuODE3NCAxMC45OTIyTDEwLjY3NjggMTFIOC45NjQ4NEM4Ljg1NDgyIDExLjQ0NTQgOC41MTUzMiAxMS44MjA2IDguMDQxOTkgMTEuOTUyMUM3LjkyNzcxIDExLjk4MzkgNy44MDkwMyAxMiA3LjY5MDQzIDEySDEuMzE4MzZDMC41OTI5OCAxMiAwLjAwNDg4MjgxIDExLjQxMTkgMC4wMDQ4ODI4MSAxMC42ODY1QzAuMDA0ODg4MzEgMTAuNTY5MSAwLjAyMDY2MDcgMTAuNDUyMSAwLjA1MTc1NzggMTAuMzM4OUwwLjU0MDAzOSA4LjU2MzQ4QzAuNzkzNzY5IDcuNjQwMTMgMS42MzMyNCA3IDIuNTkwODIgN0g4LjVDOS42MDQ1NyA3IDEwLjUgNi4xMDQ1NyAxMC41IDVDMTAuNSAzLjg5NTQzIDkuNjA0NTcgMyA4LjUgM0M4LjMxOTM3IDMgOC4xNDI1NCAzLjAyNDAzIDcuOTcyNjYgMy4wNzAzMUM3Ljk4OTkxIDMuMjExMTggOCAzLjM1NDQ4IDggMy41QzggNS40MzMgNi40MzMgNyA0LjUgN0MyLjU2NyA3IDEgNS40MzMgMSAzLjVDMSAxLjU2NyAyLjU2NyAwIDQuNSAwWk0yLjU5MDgyIDhDMi4wODM1NSA4IDEuNjM4NCA4LjMzOTAzIDEuNTAzOTEgOC44MjgxMkwxLjAxNTYyIDEwLjYwMzVDMS4wMDgyMSAxMC42MzA1IDEuMDA0ODkgMTAuNjU4NSAxLjAwNDg4IDEwLjY4NjVDMS4wMDQ4OCAxMC44NTk2IDEuMTQ1MjcgMTEgMS4zMTgzNiAxMUg3LjY5MDQzQzcuNzE4NjYgMTEgNy43NDcyMSAxMC45OTU4IDcuNzc0NDEgMTAuOTg4M0M3Ljk0MDg3IDEwLjk0MTggOC4wMzgzOCAxMC43NjkxIDcuOTkyMTkgMTAuNjAyNUw3LjQ5OTAyIDguODI1MkM3LjM3MTk5IDguMzY3OTggNi45NzMyNSA4LjA0Mjc0IDYuNTA2ODQgOC4wMDM5MUw2LjQxMzA5IDhIMi41OTA4MlpNNi4zMzIwMyA4LjkzNTU1QzUuOTUyNTcgOS41ODkwNSA1LjI2MTUzIDEwIDQuNSAxMEMzLjgyNTIgMTAgMy4yMDQ3MSA5LjY3NzM4IDIuODA3NjIgOS4xNDY0OEwyLjcxMzg3IDkuMDA4NzlMMy41NTc2MiA4LjQ3MjY2QzMuNzY1NTcgOC44MDAwNiA0LjExNjY1IDkgNC41IDlDNC44NTUwMiA5IDUuMTgyNDkgOC44Mjg4NiA1LjM5MzU1IDguNTQ0OTJMNS40NjY4IDguNDMyNjJMNi4zMzIwMyA4LjkzNTU1Wk04LjIxNDg0IDhDOC4zMjE1NSA4LjE3MDUyIDguNDA3MDQgOC4zNTczMyA4LjQ2Mjg5IDguNTU4NTlMOC44NjMyOCAxMEgxMC42NzY4QzEwLjcxMDIgOS45OTk5NyAxMC43NDM2IDkuOTk0OTMgMTAuNzc1NCA5Ljk4NDM4QzEwLjkxNjEgOS45Mzc0NiAxMS4wMDEyIDkuNzk5ODMgMTAuOTg4MyA5LjY1ODJMMTAuOTczNiA5LjU4Nzg5TDEwLjcwMTIgOC43NzA1MUMxMC41NjA2IDguMzQ4NzYgMTAuMTg2OCA4LjA1MzIzIDkuNzUxOTUgOC4wMDY4NEw5LjYzMjgxIDhIOC4yMTQ4NFpNNC41IDFDMy4xMTkyOSAxIDIgMi4xMTkyOSAyIDMuNUMyIDQuODgwNzEgMy4xMTkyOSA2IDQuNSA2QzUuODgwNzEgNiA3IDQuODgwNzEgNyAzLjVDNyAyLjExOTI5IDUuODgwNzEgMSA0LjUgMVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/user-group
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const UserGroup: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

/**
 * @component @name View
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNi4wMDA5MiAxQzguMTgxNTUgMS4wMDAyNiAxMC4xMTE1IDIuNTI5OTEgMTEuODAyNyA1LjUwNjg0QzExLjk3MjEgNS44MDkwOSAxMS45NzMgNi4xNzc3IDExLjgwMDcgNi40ODgyOEwxMS42MjQ5IDYuNzkxOTlDOS45ODE0MiA5LjU3MDM3IDguMTA4MDkgMTAuOTk5OCA2LjAwMDkyIDExQzMuODIwMDcgMTEgMS44ODk0NiA5LjQ3MDMgMC4xOTgxODMgNi40OTMxNkMwLjAyODc4NTYgNi4xOTA5MiAwLjAyNzg5NTEgNS44MjIyOSAwLjIwMDEzNyA1LjUxMTcyTDAuMzc1OTE4IDUuMjA4MDFDMi4wMTk1OCAyLjQyOTM4IDMuODkzNTIgMSA2LjAwMDkyIDFaTTYuMDAwOTIgMkM0LjMwNzggMiAyLjcxODE0IDMuMjEyNzYgMS4yMzkyIDUuNzEyODlMMS4wNzAyNSA2LjAwMzkxQzIuNTk5NDIgOC42OTU2NyA0LjI0NTg1IDEwIDYuMDAwOTIgMTBDNy42OTM4NCA5Ljk5OTc0IDkuMjgyODcgOC43ODcwMSAxMC43NjE3IDYuMjg3MTFMMTAuOTMwNiA1Ljk5NjA5QzkuNDAxNTggMy4zMDQ1NyA3Ljc1NTggMi4wMDAyNyA2LjAwMDkyIDJaTTUuOTk5OTQgNEM3LjEwNDUxIDQgNy45OTk5NCA0Ljg5NTQzIDcuOTk5OTQgNkM3Ljk5OTk0IDcuMTA0NTcgNy4xMDQ1MSA4IDUuOTk5OTQgOEM0Ljg5NTUxIDcuOTk5ODQgMy45OTk5NCA3LjEwNDQ3IDMuOTk5OTQgNkMzLjk5OTk0IDQuODk1NTMgNC44OTU1MSA0LjAwMDE2IDUuOTk5OTQgNFpNNS45OTk5NCA1QzUuNDQ3NzkgNS4wMDAxNiA0Ljk5OTk0IDUuNDQ3ODEgNC45OTk5NCA2QzQuOTk5OTQgNi41NTIxOSA1LjQ0Nzc5IDYuOTk5ODQgNS45OTk5NCA3QzYuNTUyMjMgNyA2Ljk5OTk0IDYuNTUyMjggNi45OTk5NCA2QzYuOTk5OTQgNS40NDc3MiA2LjU1MjIzIDUgNS45OTk5NCA1WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/view
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
declare const View: react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

declare const index_AnnotateCc: typeof AnnotateCc;
declare const index_AnnotateSign: typeof AnnotateSign;
declare const index_ArrowDoubleLeft: typeof ArrowDoubleLeft;
declare const index_ArrowDoubleRight: typeof ArrowDoubleRight;
declare const index_ArrowDown: typeof ArrowDown;
declare const index_ArrowLeft: typeof ArrowLeft;
declare const index_ArrowRight: typeof ArrowRight;
declare const index_ArrowUp: typeof ArrowUp;
declare const index_BatchAdd: typeof BatchAdd;
declare const index_BatchDelete: typeof BatchDelete;
declare const index_BookMark: typeof BookMark;
declare const index_BtnAdd: typeof BtnAdd;
declare const index_BtnChange: typeof BtnChange;
declare const index_BtnDelete: typeof BtnDelete;
declare const index_BtnFold: typeof BtnFold;
declare const index_BtnMore: typeof BtnMore;
declare const index_BtnPlay: typeof BtnPlay;
declare const index_BtnUnfold: typeof BtnUnfold;
declare const index_Bug: typeof Bug;
declare const index_Calendar: typeof Calendar;
declare const index_Change: typeof Change;
declare const index_ChartHistogram: typeof ChartHistogram;
declare const index_Checkin: typeof Checkin;
declare const index_Cloud: typeof Cloud;
declare const index_Collection: typeof Collection;
declare const index_Confirm: typeof Confirm;
declare const index_Copy: typeof Copy;
declare const index_Cross: typeof Cross;
declare const index_Data: typeof Data;
declare const index_DataExport: typeof DataExport;
declare const index_DataImport: typeof DataImport;
declare const index_DataPermission: typeof DataPermission;
declare const index_DataSwitch: typeof DataSwitch;
declare const index_DateTime: typeof DateTime;
declare const index_Delete: typeof Delete;
declare const index_Dialogue: typeof Dialogue;
declare const index_Diamond: typeof Diamond;
declare const index_DirectionRightUp: typeof DirectionRightUp;
declare const index_Download: typeof Download;
declare const index_Earth: typeof Earth;
declare const index_Earthset: typeof Earthset;
declare const index_Edit: typeof Edit;
declare const index_Emoticon: typeof Emoticon;
declare const index_EmoticonDiscouraged: typeof EmoticonDiscouraged;
declare const index_Entrust: typeof Entrust;
declare const index_Erase: typeof Erase;
declare const index_ExchangeUd: typeof ExchangeUd;
declare const index_ExchangeUdinvertedOrder: typeof ExchangeUdinvertedOrder;
declare const index_ExchangeUdorder: typeof ExchangeUdorder;
declare const index_Exclamatory: typeof Exclamatory;
declare const index_ExclamatoryTriangle: typeof ExclamatoryTriangle;
declare const index_Experiment: typeof Experiment;
declare const index_Extport: typeof Extport;
declare const index_File: typeof File;
declare const index_FileAdd: typeof FileAdd;
declare const index_FilePending: typeof FilePending;
declare const index_FileProcessed: typeof FileProcessed;
declare const index_Fire: typeof Fire;
declare const index_FixedPosition: typeof FixedPosition;
declare const index_Folder: typeof Folder;
declare const index_FolderOpen: typeof FolderOpen;
declare const index_FullScreen: typeof FullScreen;
declare const index_FullScreenExit: typeof FullScreenExit;
declare const index_Funnel: typeof Funnel;
declare const index_HalfScreen: typeof HalfScreen;
declare const index_HalfScreenExit: typeof HalfScreenExit;
declare const index_Heart: typeof Heart;
declare const index_Hide: typeof Hide;
declare const index_HidePassowrd: typeof HidePassowrd;
declare const index_HomePage: typeof HomePage;
declare const index_Import: typeof Import;
declare const index_Information: typeof Information;
declare const index_Input: typeof Input;
declare const index_Keys: typeof Keys;
declare const index_Label: typeof Label;
declare const index_Lampbulb: typeof Lampbulb;
declare const index_LeftOpen: typeof LeftOpen;
declare const index_LeftPackup: typeof LeftPackup;
declare const index_LevelChildren: typeof LevelChildren;
declare const index_LevelParent: typeof LevelParent;
declare const index_LevelSame: typeof LevelSame;
declare const index_Like: typeof Like;
declare const index_Loading: typeof Loading;
declare const index_Lock: typeof Lock;
declare const index_LogoDingding: typeof LogoDingding;
declare const index_LogoFeishu: typeof LogoFeishu;
declare const index_LogoKK: typeof LogoKK;
declare const index_LogoQQ: typeof LogoQQ;
declare const index_LogoWechat: typeof LogoWechat;
declare const index_Logout: typeof Logout;
declare const index_MeetingRoom: typeof MeetingRoom;
declare const index_MenuList: typeof MenuList;
declare const index_MenuListSelect: typeof MenuListSelect;
declare const index_Message: typeof Message;
declare const index_MessageAdd: typeof MessageAdd;
declare const index_MoreHor: typeof MoreHor;
declare const index_MoreVer: typeof MoreVer;
declare const index_None: typeof None;
declare const index_Output: typeof Output;
declare const index_Page: typeof Page;
declare const index_PageCode: typeof PageCode;
declare const index_Palette: typeof Palette;
declare const index_ParameterSetting: typeof ParameterSetting;
declare const index_Paste: typeof Paste;
declare const index_Pause: typeof Pause;
declare const index_Pc: typeof Pc;
declare const index_Picture: typeof Picture;
declare const index_Place: typeof Place;
declare const index_Play: typeof Play;
declare const index_Pound: typeof Pound;
declare const index_Process: typeof Process;
declare const index_Question: typeof Question;
declare const index_Quote: typeof Quote;
declare const index_QuoteSmall: typeof QuoteSmall;
declare const index_Refresh: typeof Refresh;
declare const index_Release: typeof Release;
declare const index_Restoredefault: typeof Restoredefault;
declare const index_Ruler: typeof Ruler;
declare const index_Save: typeof Save;
declare const index_Seal: typeof Seal;
declare const index_Search: typeof Search;
declare const index_Setting: typeof Setting;
declare const index_Short: typeof Short;
declare const index_Shutdown: typeof Shutdown;
declare const index_SignCross: typeof SignCross;
declare const index_SignEqual: typeof SignEqual;
declare const index_SignExclamatory: typeof SignExclamatory;
declare const index_SignMinus: typeof SignMinus;
declare const index_SignPlus: typeof SignPlus;
declare const index_SignPound: typeof SignPound;
declare const index_SignTick: typeof SignTick;
declare const index_Signin: typeof Signin;
declare const index_Sort: typeof Sort;
declare const index_SortDrag: typeof SortDrag;
declare const index_SortFilterDown: typeof SortFilterDown;
declare const index_SortFilterUp: typeof SortFilterUp;
declare const index_SortInvertedOrder: typeof SortInvertedOrder;
declare const index_SortOrder: typeof SortOrder;
declare const index_Stop: typeof Stop;
declare const index_StringTypeBigDeciaml: typeof StringTypeBigDeciaml;
declare const index_StringTypeBlob: typeof StringTypeBlob;
declare const index_StringTypeDouble: typeof StringTypeDouble;
declare const index_StringTypeFloat: typeof StringTypeFloat;
declare const index_StringTypeLong: typeof StringTypeLong;
declare const index_SuccessfulTranslation: typeof SuccessfulTranslation;
declare const index_Tick: typeof Tick;
declare const index_TickUnselected: typeof TickUnselected;
declare const index_Time: typeof Time;
declare const index_Timing: typeof Timing;
declare const index_Tool: typeof Tool;
declare const index_TowardsDown: typeof TowardsDown;
declare const index_TowardsLeft: typeof TowardsLeft;
declare const index_TowardsRight: typeof TowardsRight;
declare const index_TowardsUp: typeof TowardsUp;
declare const index_Trajectory: typeof Trajectory;
declare const index_Translation: typeof Translation;
declare const index_TranslationOk: typeof TranslationOk;
declare const index_Unlike: typeof Unlike;
declare const index_Unlock: typeof Unlock;
declare const index_Upload: typeof Upload;
declare const index_Use: typeof Use;
declare const index_User: typeof User;
declare const index_UserCCList: typeof UserCCList;
declare const index_UserExecutor: typeof UserExecutor;
declare const index_UserGroup: typeof UserGroup;
declare const index_View: typeof View;
declare namespace index {
  export {
    index_AnnotateCc as AnnotateCc,
    index_AnnotateSign as AnnotateSign,
    index_ArrowDoubleLeft as ArrowDoubleLeft,
    index_ArrowDoubleRight as ArrowDoubleRight,
    index_ArrowDown as ArrowDown,
    index_ArrowLeft as ArrowLeft,
    index_ArrowRight as ArrowRight,
    index_ArrowUp as ArrowUp,
    index_BatchAdd as BatchAdd,
    index_BatchDelete as BatchDelete,
    index_BookMark as BookMark,
    index_BtnAdd as BtnAdd,
    index_BtnChange as BtnChange,
    index_BtnDelete as BtnDelete,
    index_BtnFold as BtnFold,
    index_BtnMore as BtnMore,
    index_BtnPlay as BtnPlay,
    index_BtnUnfold as BtnUnfold,
    index_Bug as Bug,
    index_Calendar as Calendar,
    index_Change as Change,
    index_ChartHistogram as ChartHistogram,
    index_Checkin as Checkin,
    index_Cloud as Cloud,
    index_Collection as Collection,
    index_Confirm as Confirm,
    index_Copy as Copy,
    index_Cross as Cross,
    index_Data as Data,
    index_DataExport as DataExport,
    index_DataImport as DataImport,
    index_DataPermission as DataPermission,
    index_DataSwitch as DataSwitch,
    index_DateTime as DateTime,
    index_Delete as Delete,
    index_Dialogue as Dialogue,
    index_Diamond as Diamond,
    index_DirectionRightUp as DirectionRightUp,
    index_Download as Download,
    index_Earth as Earth,
    index_Earthset as Earthset,
    index_Edit as Edit,
    index_Emoticon as Emoticon,
    index_EmoticonDiscouraged as EmoticonDiscouraged,
    index_Entrust as Entrust,
    index_Erase as Erase,
    index_ExchangeUd as ExchangeUd,
    index_ExchangeUdinvertedOrder as ExchangeUdinvertedOrder,
    index_ExchangeUdorder as ExchangeUdorder,
    index_Exclamatory as Exclamatory,
    index_ExclamatoryTriangle as ExclamatoryTriangle,
    index_Experiment as Experiment,
    index_Extport as Extport,
    index_File as File,
    index_FileAdd as FileAdd,
    index_FilePending as FilePending,
    index_FileProcessed as FileProcessed,
    index_Fire as Fire,
    index_FixedPosition as FixedPosition,
    index_Folder as Folder,
    index_FolderOpen as FolderOpen,
    index_FullScreen as FullScreen,
    index_FullScreenExit as FullScreenExit,
    index_Funnel as Funnel,
    index_HalfScreen as HalfScreen,
    index_HalfScreenExit as HalfScreenExit,
    index_Heart as Heart,
    index_Hide as Hide,
    index_HidePassowrd as HidePassowrd,
    index_HomePage as HomePage,
    index_Import as Import,
    index_Information as Information,
    index_Input as Input,
    index_Keys as Keys,
    index_Label as Label,
    index_Lampbulb as Lampbulb,
    index_LeftOpen as LeftOpen,
    index_LeftPackup as LeftPackup,
    index_LevelChildren as LevelChildren,
    index_LevelParent as LevelParent,
    index_LevelSame as LevelSame,
    index_Like as Like,
    index_Loading as Loading,
    index_Lock as Lock,
    index_LogoDingding as LogoDingding,
    index_LogoFeishu as LogoFeishu,
    index_LogoKK as LogoKK,
    index_LogoQQ as LogoQQ,
    index_LogoWechat as LogoWechat,
    index_Logout as Logout,
    index_MeetingRoom as MeetingRoom,
    index_MenuList as MenuList,
    index_MenuListSelect as MenuListSelect,
    index_Message as Message,
    index_MessageAdd as MessageAdd,
    index_MoreHor as MoreHor,
    index_MoreVer as MoreVer,
    index_None as None,
    index_Output as Output,
    index_Page as Page,
    index_PageCode as PageCode,
    index_Palette as Palette,
    index_ParameterSetting as ParameterSetting,
    index_Paste as Paste,
    index_Pause as Pause,
    index_Pc as Pc,
    index_Picture as Picture,
    index_Place as Place,
    index_Play as Play,
    index_Pound as Pound,
    index_Process as Process,
    index_Question as Question,
    index_Quote as Quote,
    index_QuoteSmall as QuoteSmall,
    index_Refresh as Refresh,
    index_Release as Release,
    index_Restoredefault as Restoredefault,
    index_Ruler as Ruler,
    index_Save as Save,
    index_Seal as Seal,
    index_Search as Search,
    index_Setting as Setting,
    index_Short as Short,
    index_Shutdown as Shutdown,
    index_SignCross as SignCross,
    index_SignEqual as SignEqual,
    index_SignExclamatory as SignExclamatory,
    index_SignMinus as SignMinus,
    index_SignPlus as SignPlus,
    index_SignPound as SignPound,
    index_SignTick as SignTick,
    index_Signin as Signin,
    index_Sort as Sort,
    index_SortDrag as SortDrag,
    index_SortFilterDown as SortFilterDown,
    index_SortFilterUp as SortFilterUp,
    index_SortInvertedOrder as SortInvertedOrder,
    index_SortOrder as SortOrder,
    index_Stop as Stop,
    index_StringTypeBigDeciaml as StringTypeBigDeciaml,
    index_StringTypeBlob as StringTypeBlob,
    index_StringTypeDouble as StringTypeDouble,
    index_StringTypeFloat as StringTypeFloat,
    index_StringTypeLong as StringTypeLong,
    index_SuccessfulTranslation as SuccessfulTranslation,
    index_Tick as Tick,
    index_TickUnselected as TickUnselected,
    index_Time as Time,
    index_Timing as Timing,
    index_Tool as Tool,
    index_TowardsDown as TowardsDown,
    index_TowardsLeft as TowardsLeft,
    index_TowardsRight as TowardsRight,
    index_TowardsUp as TowardsUp,
    index_Trajectory as Trajectory,
    index_Translation as Translation,
    index_TranslationOk as TranslationOk,
    index_Unlike as Unlike,
    index_Unlock as Unlock,
    index_Upload as Upload,
    index_Use as Use,
    index_User as User,
    index_UserCCList as UserCCList,
    index_UserExecutor as UserExecutor,
    index_UserGroup as UserGroup,
    index_View as View,
  };
}

/**
 * Create a Lucide icon component
 * @param {string} iconName
 * @param {array} iconNode
 * @returns {ForwardRefExoticComponent} LucideIcon
 */
declare const createLucideIcon: (iconName: string, iconNode: IconNode) => react.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

interface IconComponentProps extends LucideProps {
    iconNode: IconNode;
}
/**
 * Lucide icon component
 *
 * @component Icon
 * @param {object} props
 * @param {string} props.color - The color of the icon
 * @param {number} props.size - The size of the icon
 * @param {number} props.strokeWidth - The stroke width of the icon
 * @param {boolean} props.absoluteStrokeWidth - Whether to use absolute stroke width
 * @param {string} props.className - The class name of the icon
 * @param {IconNode} props.children - The children of the icon
 * @param {IconNode} props.iconNode - The icon node of the icon
 *
 * @returns {ForwardRefExoticComponent} LucideIcon
 */
declare const Icon: react.ForwardRefExoticComponent<Omit<IconComponentProps, "ref"> & react.RefAttributes<SVGSVGElement>>;

export { Icon, AnnotateCc as LucideAnnotateCc, AnnotateSign as LucideAnnotateSign, ArrowDoubleLeft as LucideArrowDoubleLeft, ArrowDoubleRight as LucideArrowDoubleRight, ArrowDown as LucideArrowDown, ArrowLeft as LucideArrowLeft, ArrowRight as LucideArrowRight, ArrowUp as LucideArrowUp, BatchAdd as LucideBatchAdd, BatchDelete as LucideBatchDelete, BookMark as LucideBookMark, BtnAdd as LucideBtnAdd, BtnChange as LucideBtnChange, BtnDelete as LucideBtnDelete, BtnFold as LucideBtnFold, BtnMore as LucideBtnMore, BtnPlay as LucideBtnPlay, BtnUnfold as LucideBtnUnfold, Bug as LucideBug, Calendar as LucideCalendar, Change as LucideChange, ChartHistogram as LucideChartHistogram, Checkin as LucideCheckin, Cloud as LucideCloud, Collection as LucideCollection, Confirm as LucideConfirm, Copy as LucideCopy, Cross as LucideCross, Data as LucideData, DataExport as LucideDataExport, DataImport as LucideDataImport, DataPermission as LucideDataPermission, DataSwitch as LucideDataSwitch, DateTime as LucideDateTime, Delete as LucideDelete, Dialogue as LucideDialogue, Diamond as LucideDiamond, DirectionRightUp as LucideDirectionRightUp, Download as LucideDownload, Earth as LucideEarth, Earthset as LucideEarthset, Edit as LucideEdit, Emoticon as LucideEmoticon, EmoticonDiscouraged as LucideEmoticonDiscouraged, Entrust as LucideEntrust, Erase as LucideErase, ExchangeUd as LucideExchangeUd, ExchangeUdinvertedOrder as LucideExchangeUdinvertedOrder, ExchangeUdorder as LucideExchangeUdorder, Exclamatory as LucideExclamatory, ExclamatoryTriangle as LucideExclamatoryTriangle, Experiment as LucideExperiment, Extport as LucideExtport, File as LucideFile, FileAdd as LucideFileAdd, FilePending as LucideFilePending, FileProcessed as LucideFileProcessed, Fire as LucideFire, FixedPosition as LucideFixedPosition, Folder as LucideFolder, FolderOpen as LucideFolderOpen, FullScreen as LucideFullScreen, FullScreenExit as LucideFullScreenExit, Funnel as LucideFunnel, HalfScreen as LucideHalfScreen, HalfScreenExit as LucideHalfScreenExit, Heart as LucideHeart, Hide as LucideHide, HidePassowrd as LucideHidePassowrd, HomePage as LucideHomePage, Import as LucideImport, Information as LucideInformation, Input as LucideInput, Keys as LucideKeys, Label as LucideLabel, Lampbulb as LucideLampbulb, LeftOpen as LucideLeftOpen, LeftPackup as LucideLeftPackup, LevelChildren as LucideLevelChildren, LevelParent as LucideLevelParent, LevelSame as LucideLevelSame, Like as LucideLike, Loading as LucideLoading, Lock as LucideLock, LogoDingding as LucideLogoDingding, LogoFeishu as LucideLogoFeishu, LogoKK as LucideLogoKK, LogoQQ as LucideLogoQQ, LogoWechat as LucideLogoWechat, Logout as LucideLogout, MeetingRoom as LucideMeetingRoom, MenuList as LucideMenuList, MenuListSelect as LucideMenuListSelect, Message as LucideMessage, MessageAdd as LucideMessageAdd, MoreHor as LucideMoreHor, MoreVer as LucideMoreVer, None as LucideNone, Output as LucideOutput, Page as LucidePage, PageCode as LucidePageCode, Palette as LucidePalette, ParameterSetting as LucideParameterSetting, Paste as LucidePaste, Pause as LucidePause, Pc as LucidePc, Picture as LucidePicture, Place as LucidePlace, Play as LucidePlay, Pound as LucidePound, Process as LucideProcess, Question as LucideQuestion, Quote as LucideQuote, QuoteSmall as LucideQuoteSmall, Refresh as LucideRefresh, Release as LucideRelease, Restoredefault as LucideRestoredefault, Ruler as LucideRuler, Save as LucideSave, Seal as LucideSeal, Search as LucideSearch, Setting as LucideSetting, Short as LucideShort, Shutdown as LucideShutdown, SignCross as LucideSignCross, SignEqual as LucideSignEqual, SignExclamatory as LucideSignExclamatory, SignMinus as LucideSignMinus, SignPlus as LucideSignPlus, SignPound as LucideSignPound, SignTick as LucideSignTick, Signin as LucideSignin, Sort as LucideSort, SortDrag as LucideSortDrag, SortFilterDown as LucideSortFilterDown, SortFilterUp as LucideSortFilterUp, SortInvertedOrder as LucideSortInvertedOrder, SortOrder as LucideSortOrder, Stop as LucideStop, StringTypeBigDeciaml as LucideStringTypeBigDeciaml, StringTypeBlob as LucideStringTypeBlob, StringTypeDouble as LucideStringTypeDouble, StringTypeFloat as LucideStringTypeFloat, StringTypeLong as LucideStringTypeLong, SuccessfulTranslation as LucideSuccessfulTranslation, Tick as LucideTick, TickUnselected as LucideTickUnselected, Time as LucideTime, Timing as LucideTiming, Tool as LucideTool, TowardsDown as LucideTowardsDown, TowardsLeft as LucideTowardsLeft, TowardsRight as LucideTowardsRight, TowardsUp as LucideTowardsUp, Trajectory as LucideTrajectory, Translation as LucideTranslation, TranslationOk as LucideTranslationOk, Unlike as LucideUnlike, Unlock as LucideUnlock, Upload as LucideUpload, Use as LucideUse, User as LucideUser, UserCCList as LucideUserCCList, UserExecutor as LucideUserExecutor, UserGroup as LucideUserGroup, View as LucideView, createLucideIcon, index as icons };
export type { IconNode, LucideIcon, LucideProps, SVGAttributes };
