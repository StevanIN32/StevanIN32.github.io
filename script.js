let domeni = ["com", "net", "info", "rs", "cors", "inrs"];
function reset() {
    for (const domen in domeni) {
        document.getElementById(domeni[domen]).hidden = false;
    }
    document.getElementById("filter").value = "";
}

function filter() {
    let filterString = document.getElementById("filter").value;
    filterString = filterString.replace(/\./g, "")
    let filterRegex = new RegExp(`^.*${filterString}.*$`);
    for (const domen in domeni) {
        document.getElementById(domeni[domen]).hidden = !filterRegex.test(domeni[domen]);
    }
}