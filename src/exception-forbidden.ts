import { Exception } from './exception';

export function ExceptionForbidden(Base: any = Error): any {
	abstract class ExceptionForbiddenAbstract extends Exception(Base) {
	};

	return ExceptionForbiddenAbstract;
};
