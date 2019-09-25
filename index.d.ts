declare type pyOptions = {
    removeTone?: boolean;
    firstChar?: boolean;
    onlyTone?: boolean;
    keepOrigin?: boolean;
};
declare function PinYin(chinese: string, options?: pyOptions): string;

export default PinYin;
