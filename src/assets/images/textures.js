import { NearestFilter, RepeatWrapping, TextureLoader } from "three";
import dirtImg from "./dirt.jpg"
import glassImg from "./glass.png"
import logImg from "./log.jpg"
import woodImg from "./wood.png"
import grassImg from "./grass.jpg"

const dirtTexture = new TextureLoader().load(dirtImg)
const grassTexture = new TextureLoader().load(grassImg)
const glassTexture = new TextureLoader().load(glassImg)
const logTexture = new TextureLoader().load(logImg)
const woodTexture = new TextureLoader().load(woodImg)

grassTexture.magFilter = NearestFilter
dirtTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
grassTexture.wrapS = RepeatWrapping
grassTexture.wrapT = RepeatWrapping
grassTexture.repeat.set(100,100)

export {    dirtTexture,
            grassTexture,
            glassTexture,
            logTexture,
            woodTexture
        }