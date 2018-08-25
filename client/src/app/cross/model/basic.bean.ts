

export abstract class BasicBean {
  id: string;
  createdBy?: string;
  updatedBy?: string;
  createdAt: Date;
  updatedAt: Date;

  public constructor(json?: Object) {
      if (json) {
          this.assign(json);
          this._fixDates();
      }
  }

  public assign(json: Object) {
      if (json) {
          Object.assign(this, json);
          this._fixDates();
      }
  }

  public isNew() {
      return !this.id;
  }

  private _fixDates() {
      if (this.createdAt && typeof this.createdAt === "string") {
          this.createdAt = new Date(this.createdAt);
      }
      if (this.updatedAt && typeof this.updatedAt === "string") {
          this.updatedAt = new Date(this.updatedAt);
      }
  }
}
