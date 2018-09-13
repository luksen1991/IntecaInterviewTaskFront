import {Father} from './Father';
import {Child} from './Child';

export class Family {
  public id: number;
  public father: Father = new Father();
  public childList: Array<Child> = new Array<Child>();
}
