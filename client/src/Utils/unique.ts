export default function removeDuplicate(arr: Array<any>): number[] {
    const set = new Set();
    arr.forEach((element) => {
        set.add(element);
    });
    const res = [...set];
    return res as number[];
}
