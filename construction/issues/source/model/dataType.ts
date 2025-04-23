

/**
 * Retrieves issue custom attribute definitions with the specified data type
 * @export
 * @enum {string}
 */

export const DataType = {
    Text: 'text',
    Paragraph: 'paragraph',
    Numeric: 'numeric'
} as const;

export type DataType = typeof DataType[keyof typeof DataType];



