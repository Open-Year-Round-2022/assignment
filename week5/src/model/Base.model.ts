import { Delegate } from "../../prisma/Delegate";

export abstract class BaseModel<D extends Delegate, P> {
  protected delegate: D;
  props: P;
  constructor(delegate: D, props: P) {
    this.delegate = delegate;
    this.props = props;
  }

  toObj() {
    return { ...this.props };
  }
}
