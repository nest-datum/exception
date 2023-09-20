import { obj as utilsCheckObj } from '@nest-datum/utils-check';
import { Exception } from './exception';

export function ExceptionError(Base: any = Error): any {
	abstract class ExceptionErrorAbstract extends Exception(Base) {
		constructor(...properties: any) {
			if (utilsCheckObj(properties[0])) {
				return properties[0];
			}
			super(...properties);
		}
	};

	return ExceptionErrorAbstract;
};
