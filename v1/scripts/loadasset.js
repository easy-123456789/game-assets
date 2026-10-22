async function loadAsset(name,ext){
  const json = JSON.parse(await fetch("https://https://raw.githubusercontent.com/easy-123456789/game-assets/refs/heads/main/v1/assets/images/images.json").json());
  const image = new Image();
  image.src = `https://https://raw.githubusercontent.com/easy-123456789/game-assets/refs/heads/main/v1/assets/images/images/asset-${json.data.findIndex(name)}.${ext}`;
  return image;
}
