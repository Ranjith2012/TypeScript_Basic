async function catdis(params) {
    const url = "https://cataas.com/cat?width=200;height=200;json=true";
    const cat = await fetch(url).then(res => res.json()).then(data => data.url);
    document.getElementById("catid").src =cat
}