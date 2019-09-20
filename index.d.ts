declare type pyOptions = {
    removeTone?: boolean;
    firstChar?: boolean;
    onlyTone?: boolean;
};
declare function PinYin(chinese: string, options?: pyOptions): string;

export default PinYin;
