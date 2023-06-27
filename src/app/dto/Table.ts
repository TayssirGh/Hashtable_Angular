import {Node} from "./Node";

export class Table{
  private _nodes: Node[] = [];
  constructor(size : number) {
    this._nodes = new Array(size);
  }

  get nodes(): Node[] {
    return this._nodes;
  }

  set nodes(value: Node[]) {
    this._nodes = value;
  }
}
