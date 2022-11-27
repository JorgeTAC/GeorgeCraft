import { stone, glass, goldBlock, oakLog, oakPlanks } from "./images";
import { TextureLoader, RepeatWrapping, NearestFilter } from "three";

const loader = new TextureLoader();

const groundTexture = loader.load(stone);
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;

function filterTexture(texture) {
  texture.magFilter = NearestFilter;
  return texture;
}

export const textures = {
  glass: filterTexture(loader.load(glass)),
  goldBlock: filterTexture(loader.load(goldBlock)),
  oakLog: filterTexture(loader.load(oakLog)),
  oakPlanks: filterTexture(loader.load(oakPlanks)),
  stone: filterTexture(loader.load(stone)),
  ground: filterTexture(groundTexture),
};
