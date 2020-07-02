import { TemplateBase } from '@/modules/template/templateBase.model';
import { TemplateAssignment } from '@/modules/template/templateAssignment.model';
import { TemplateGlobal } from '@/modules/template/templateGlobal.model';
import { TemplateHIT } from '@/modules/template/templateHIT.model';

export class TemplateWorker extends TemplateBase {
  heightFrame: number;

  dictParameters: {};

  templateAssignment: TemplateAssignment | null;

  templateHIT: TemplateHIT | null;

  templateGlobal: TemplateGlobal | null;

  templateOriginal: TemplateWorker | null;

  constructor({
    heightFrame = 800,
    jsonDictParameters = '{}',
    templateAssignment = null,
    templateHIT = null,
    templateGlobal = null,
    templateOriginal = null,
    ...data
  }: {
    id?: string;
    name?: string;
    template?: string;
    isActive?: boolean;
    datetimeCreation?: Date;
    heightFrame?: number;
    jsonDictParameters?: string;
    templateAssignment?: TemplateAssignment | null;
    templateHIT?: TemplateHIT | null;
    templateGlobal?: TemplateGlobal | null;
    templateOriginal?: TemplateWorker | null;
  } = {}) {
    super(data);

    this.heightFrame = heightFrame;
    this.dictParameters = JSON.parse(jsonDictParameters);
    this.templateAssignment = templateAssignment;
    this.templateHIT = templateHIT;
    this.templateGlobal = templateGlobal;
    this.templateOriginal = templateOriginal;
  }

  get type() {
    return 'worker';
  }

  extractBody() {
    return {
      ...super.extractBody(),
      heightFrame: this.heightFrame,
      jsonDictParameters: JSON.stringify(this.dictParameters),
      templateAssignment: this.templateAssignment === null ? null : this.templateAssignment.id,
      templateHIT: this.templateHIT === null ? null : this.templateHIT.id,
      templateGlobal: this.templateGlobal === null ? null : this.templateGlobal.id,
      templateOriginal: this.templateOriginal === null ? null : this.templateOriginal.id,
    };
  }
}
