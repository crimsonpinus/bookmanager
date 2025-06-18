


export function formatRegDate(dateStr: string): string {
    if (!dateStr) return "";
    let d = dateStr;
    if (d.endsWith("Z")) d = d.replace("Z", "");
    if (d.indexOf("T") > -1) d = d.replace("T", " ");
    d = d.split(".")[0];
    return d.slice(0, 16);
}
