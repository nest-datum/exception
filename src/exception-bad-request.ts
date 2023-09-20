import { Exception } from './exception';

export function ExceptionBadRequest(Base: any = Error): any {
	abstract class ExceptionBadRequestAbstract extends Exception(Base) {
	};

	return ExceptionBadRequestAbstract;
};
