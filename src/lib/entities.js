/*
 * Some code to simplify searching for entities by @id.
 *
 * We avoid duplication by allowing parts of the specification to refer to
 * entities in other files by use of an identical "@id". The functions in this
 * file facilitate this.
 *
 */

export class ReferenceManager {
  constructor() {
    this.knownEntities = {};
  }

  addEntitiesFromData(data) {
    if (typeof data !== "object") return;
    const id = data['@id'];
    if (id) {
      console.log("Found entity '", id, "': ", data);
      this.knownEntities[id] = data;
    }
    Object.keys(data).map(key => this.addEntitiesFromData(data[key]));
  }

  fillReferences(data) {
    if (Array.isArray(data)) return data.map(entry => this.fillReferences(entry));
    if (typeof data !== "object") return data;
    const keys = Object.keys(data);
    if (keys.length === 1 && keys[0] === "@id") {
      // Object has shape: { '@id': 'abc' }. If we know about an entity with this
      // '@id', we should replace it with that one.
      console.log("Found substitutable entity: ", data['@id']);
      if (this.knownEntities[data['@id']]) return this.knownEntities[data['@id']];
    }

    return Object.fromEntries(keys.map(key => [key, this.fillReferences(data[key])]));
  }
}
