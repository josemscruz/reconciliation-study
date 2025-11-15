export async function getAccountList() {
    const response = await fetch("http://localhost:44317/api/app/account");
    const data = await response.json();
    return data;
}

export async function getAccountInfo(id) {
    const response = await fetch("http://localhost:44317/api/app/account");
    const data = await response.json();
    return data;
}
