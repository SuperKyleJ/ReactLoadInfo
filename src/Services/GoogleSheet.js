const Base_Url = "https://script.google.com/macros/s/AKfycbyS9MMKrZfJ6ODrLrSSLwDWw7xiBMa6PKx1gut9jIDccAFujMsQ-Z4xzwj_Vm0s_RkU/exec"

export const getSheetData = async () => {
    const response = await fetch(`${Base_Url}`);
    const data = await response.json();
    return data;
}
